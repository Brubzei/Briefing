/* Renda ao redor do cartão do formulário (desenhada em SVG, ajusta-se ao tamanho do cartão) */
function laceSVG(w,h,sm){
  const R=sm?10:17,rs=sm?2.6:3.8,d=9+R*.55,rr=44+d,CR="#efebe0",NV="#13273f";
  const x0=-d,y0=-d,W=w+2*d,H=h+2*d,a=W-2*rr,b=H-2*rr,q=Math.PI*rr/2,L=2*a+2*b+4*q;
  const sin=Math.sin,cos=Math.cos;
  function at(s){s=((s%L)+L)%L;let t;
    if(s<a)return[x0+rr+s,y0,1,0];s-=a;
    if(s<q){t=s/rr;return[x0+W-rr+rr*sin(t),y0+rr-rr*cos(t),cos(t),sin(t)]}s-=q;
    if(s<b)return[x0+W,y0+rr+s,0,1];s-=b;
    if(s<q){t=s/rr;return[x0+W-rr+rr*cos(t),y0+H-rr+rr*sin(t),-sin(t),cos(t)]}s-=q;
    if(s<a)return[x0+W-rr-s,y0+H,-1,0];s-=a;
    if(s<q){t=s/rr;return[x0+rr-rr*sin(t),y0+H-rr+rr*cos(t),-cos(t),-sin(t)]}s-=q;
    if(s<b)return[x0,y0+H-rr-s,0,-1];s-=b;
    t=s/rr;return[x0+rr-rr*cos(t),y0+rr-rr*sin(t),sin(t),-cos(t)]}
  const f=v=>v.toFixed(1),N=Math.round(L/(R*1.85)),st=L/N,M=120;
  let band="",fill="",arcs="",arc2="",dais="",dots="";
  for(let i=0;i<N*3;i++){const p=at(i*L/(N*3));band+=(i?"L":"M")+f(p[0])+" "+f(p[1])}
  for(let i=0;i<N;i++){const[x,y,tx,ty]=at(i*st),nx=ty,ny=-tx;
    fill+=`<circle cx="${f(x)}" cy="${f(y)}" r="${R}"/>`;
    arcs+=`M${f(x-R*tx)} ${f(y-R*ty)}A${R} ${R} 0 0 1 ${f(x+R*tx)} ${f(y+R*ty)}`;
    {const r2=R*.62;arc2+=`M${f(x-r2*tx)} ${f(y-r2*ty)}A${r2} ${r2} 0 0 1 ${f(x+r2*tx)} ${f(y+r2*ty)}`}
    for(const k of[-45,-15,15,45]){const th=k*Math.PI/180,ux=nx*cos(th)+tx*sin(th),uy=ny*cos(th)+ty*sin(th),px=x+ux*(R+.2),py=y+uy*(R+.2);
      dais+=`<circle cx="${f(px)}" cy="${f(py)}" r="${rs}"/>`;dots+=`<circle cx="${f(px)}" cy="${f(py)}" r="${f(rs*.38)}"/>`}}
  const sh=sm?5:7;
  return `<defs><pattern id="hn" width="${sh}" height="${f(sh*.866)}" patternUnits="userSpaceOnUse"><circle cx="${sh/4}" cy="${f(sh*.22)}" r=".8"/><circle cx="${sh*.75}" cy="${f(sh*.66)}" r=".8"/></pattern></defs>`+
  `<g opacity=".42" fill="${CR}"><path d="${band}Z" fill="none" stroke="${CR}" stroke-width="${f(R*1.3)}" stroke-linejoin="round"/>${fill}</g>`+
  `<g opacity=".95"><path d="${band}Z" fill="none" stroke="url(#hn)" stroke-width="${f(R*1.3)}" stroke-linejoin="round"/>${fill.replace(/<circle/g,'<circle fill="url(#hn)"')}</g>`+
  `<path d="${arcs}" fill="none" stroke="#fdfaf3" stroke-width="${sm?2.6:3.2}" stroke-linecap="round"/><path d="${arc2}" fill="none" stroke="#fdfaf3" stroke-width="1.5"/>`+
  `<g fill="#fdfaf3">${dais}</g><g fill="${NV}" opacity=".5">${dots}</g>`}
if(typeof module!=="undefined")module.exports=laceSVG;
else(function(){
  const card=document.querySelector(".card"),svg=document.getElementById("lace");
  if(!card||!svg)return;
  function draw(){const w=card.offsetWidth,h=card.offsetHeight;
    svg.setAttribute("width",w);svg.setAttribute("height",h);svg.setAttribute("viewBox","0 0 "+w+" "+h);
    svg.innerHTML=laceSVG(w,h,innerWidth<520)}
  let last="";
  const go=()=>{const k=card.offsetWidth+"x"+card.offsetHeight+"|"+(innerWidth<520);if(k!==last){last=k;draw()}};
  if("ResizeObserver" in window)new ResizeObserver(go).observe(card);
  addEventListener("resize",go);go();
})();
