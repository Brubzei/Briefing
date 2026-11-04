const f=(l,t="t",o="",c=null,r=0,k="")=>({l,t,o:o?o.split("|"):[],c,r,k});
const CK={e:v=>!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v),p:v=>!/^\d{10,13}$/.test(v),u:v=>!/^(https?:\/\/)?([\w-]+\.)+[a-z]{2,}(\/\S*)?$/i.test(v)};
const inv=(x,v)=>(x.r&&!String(v||"").trim())||(v&&x.k&&CK[x.k](String(v).trim()));
const SN="Sim|Não";
const EV=[["Casamento","c"],["Aniversário adulto","aa"],["Aniversário infantil","ai"],["Festa de 15 anos","q"],["Batizado","b"],["Formatura","f"],["Chá de bebê","cb"],["Chá revelação","cb"],["Chá de panela","cp"],["Chá de casa nova","cp"],["Noivado","nb"],["Bodas","nb"],["Primeira comunhão","cm"],["Crisma","cm"],["Evento corporativo","co"],["Outro evento","o"]];
const GE=[f("Nome do responsável pela contratação","t","",null,1),f("E-mail para contato","t","",null,1,"e"),f("WhatsApp (somente números, com DDD)","t","",null,1,"p"),f("Nome ou identificação do evento"),f("Data do evento","d","",null,1),f("Horário de início","h"),f("Horário de término (opcional)","h"),f("Nome do local"),f("Endereço completo"),f("Link de localização (Google Maps)","t","",null,0,"u"),f("Existe alguma informação importante sobre acesso ao local?","a"),f("Informações adicionais","a")];
const G={
c:[f("Nome completo da noiva"),f("Nome completo do noivo"),f("Como desejam que os nomes apareçam no convite?"),
f("Vocês já possuem um monograma ou brasão dos noivos?","s","Sim, já temos e enviaremos o arquivo.|Não temos, mas gostaríamos de ter.|Não temos e não desejamos utilizar.|Ainda não decidimos."),
f("A criação de monogramas personalizados não faz parte do serviço padrão de desenvolvimento do convite. Podemos verificar a possibilidade de contratação desse serviço adicional, realizado por um profissional de design terceirizado.","n","",[3,"Não temos, mas gostaríamos de ter."]),
f("Desejam receber um orçamento adicional para criação do monograma? A contratação não é automática: você aprova o orçamento separadamente.","s",SN,[3,"Não temos, mas gostaríamos de ter."]),
f("Já possuem uma identidade visual definida?","s",SN),f("Possuem fotos do casal?","s",SN),
f("Tipo de cerimônia","s","Religiosa|Civil|Ao ar livre|Outra"),f("Nome da igreja ou local da cerimônia"),f("Endereço da cerimônia"),f("Horário da cerimônia","h"),
f("A recepção acontecerá no mesmo local?","s",SN),f("Nome e endereço do local da recepção","t","",[12,"Não"]),
f("Desejam incluir nomes dos pais?","s",SN),f("Escreva os nomes dos pais","t","",[14,"Sim"]),f("Desejam incluir nomes dos padrinhos?","s",SN),f("Escreva os nomes dos padrinhos","t","",[16,"Sim"]),f("Haverá programação especial? Conte como será.","a"),f("Desejam incluir informações sobre dress code?","s",SN),f("Qual dress code desejam informar?","t","",[19,"Sim"])],
aa:[f("Nome do aniversariante"),f("Idade que será comemorada"),f("Como deseja que o nome apareça no convite?"),f("Qual será o tema da festa?"),f("Qual será o estilo da comemoração?"),f("Existe alguma paleta de cores definida?"),f("A festa terá alguma programação especial?","a"),f("Deseja incluir uma frase ou mensagem?","a"),f("Existe alguma orientação especial para os convidados?","a")],
ai:[f("Nome da criança"),f("Idade que irá completar"),f("Nome dos responsáveis"),f("Tema da festa"),f("Personagem ou universo escolhido"),f("Paleta de cores"),f("Existe alguma identidade visual da festa?","s",SN),f("Possui logotipo ou elementos personalizados?","s",SN),f("Deseja incluir fotos da criança?","s",SN),f("Recreação, atrações ou atividades que devem aparecer","a"),f("Existe alguma orientação para os convidados?","a")],
q:[f("Nome completo da debutante"),f("Como deseja que o nome apareça?"),f("Data de nascimento","d"),f("Tema da festa"),f("Paleta de cores"),f("Possui monograma?","s",SN),f("Deseja incluir fotos da debutante?","s",SN),f("Deseja incluir nomes dos pais?","s",SN),f("Escreva os nomes dos pais","t","",[7,"Sim"]),f("Terá recepção formal?","s",SN),f("Haverá valsa?","s",SN),f("Haverá homenagens ou programação especial?","a"),f("Deseja incluir informações sobre traje?","s",SN),f("Deseja incluir informações sobre cerimônia e recepção?","s",SN)],
b:[f("Nome completo da criança"),f("Data de nascimento","d"),f("Nome dos pais"),f("Nome dos padrinhos"),
f("Tradição religiosa","s","Católica|Evangélica|Outra"),
f("Quais elementos tradicionais deseja usar?","m","Cruz|Espírito Santo|Anjos|Outros",[4,"Católica"]),
f("Quais referências bíblicas e identidade visual deseja?","a","",[4,"Evangélica"]),
f("Nome da igreja ou local da cerimônia"),f("Haverá recepção após a cerimônia?","s",SN),f("Deseja incluir um versículo bíblico? Qual?"),f("Deseja incluir uma mensagem religiosa?","a"),f("Possui identidade visual ou tema?"),f("Deseja utilizar símbolos religiosos específicos?")],
f:[f("Nome completo do formando"),f("Curso"),f("Instituição de ensino"),f("Grau acadêmico"),f("Data da solenidade","d"),f("Local da solenidade"),f("Data da comemoração","d"),f("Local da comemoração"),f("Deseja incluir fotos?","s",SN),f("Deseja incluir nomes dos familiares?","s",SN),f("Escreva os nomes dos familiares","t","",[9,"Sim"]),f("Possui identidade visual?","s",SN),f("Frase de agradecimento ou homenagem","a")],
cb:[f("Nome dos pais"),f("Nome do bebê (se já definido)"),f("Data prevista de nascimento (opcional)","d"),f("Será chá de bebê ou chá revelação?","s","Chá de bebê|Chá revelação"),f("Tema da comemoração"),f("Paleta de cores"),f("Deseja revelar o sexo do bebê durante o evento?","s",SN),f("Deseja incluir lista de presentes?","s",SN),f("Deseja incluir sugestões de presentes?","s",SN)],
cp:[f("Nome dos anfitriões"),f("Tipo de comemoração","s","Chá de panela|Chá de casa nova"),f("Data e local"),f("Tema da festa"),f("Paleta de cores"),f("Deseja incluir lista de presentes?","s",SN),f("Deseja incluir sugestões de itens?","s",SN),f("Brincadeiras ou programação","a")],
nb:[f("Nome do casal"),f("Tipo de comemoração ou quantidade de anos"),f("Data especial","d"),f("Local da celebração"),f("Tema ou estilo visual"),f("Deseja incluir fotografias?","s",SN),f("Deseja incluir uma mensagem especial?","a")],
cm:[f("Nome completo do celebrante"),f("Nome dos pais ou responsáveis"),f("Nome dos padrinhos (quando aplicável)"),f("Tipo de celebração religiosa","s","Primeira comunhão|Crisma"),f("Igreja"),f("Data e horário"),f("Haverá recepção?","s",SN),f("Versículo ou mensagem religiosa","a"),f("Deseja utilizar elementos religiosos específicos?")],
co:[f("Nome da empresa ou instituição"),f("Nome do evento"),f("Tipo de evento"),f("Objetivo da comemoração","a"),f("Data e horário"),f("Local"),f("Público-alvo"),f("Dress code"),f("Programação","a"),f("Possui logotipo da empresa?","s",SN),f("Possui identidade visual?","s",SN)],
o:[f("Nome do evento"),f("Descrição da comemoração","a"),f("Nome dos anfitriões ou responsáveis"),f("Data e local"),f("Informações específicas que devem aparecer no convite","a")]};
const ST=["Cartão clássico|Clássico","Romântico","Minimalista","Moderno","Elegante","Sofisticado","Divertido","Delicado","Temático","Rústico","Personalizado"];
const VI=[f("Qual estilo visual representa melhor o que você imagina?","c",ST.map(s=>s.split("|").pop()).join("|")),f("Quais cores gostaria de utilizar?"),f("Existem cores que não deseja utilizar?"),f("Prefere fontes clássicas, manuscritas ou modernas?","s","Clássicas|Manuscritas|Modernas"),f("Possui logotipo, monograma ou identidade visual?","s",SN),f("Deseja utilizar fotografias?","s",SN),f("Deseja ilustrações personalizadas?","s",SN),f("Possui referências visuais ou algum convite como inspiração? Cole links do Pinterest ou descreva.","a"),f("Anexe imagens, PDFs, logotipos e outros arquivos","f")];
const FN="Confirmação de presença (RSVP)|Contagem regressiva|Galeria de fotos|Mapa de localização|Botão para abrir Google Maps|Adicionar evento à agenda|Programação do evento|Dress code|Lista de presentes|Música de fundo|Mensagem de agradecimento|Informações sobre estacionamento|Informações sobre hospedagem|QR Code|Botão de contato via WhatsApp";
const CV=[f("Prefere convite vertical, horizontal ou outro formato?","s","Vertical|Horizontal|Outro"),f("Deseja uma abertura animada?","s",SN),f("Prefere uma experiência minimalista ou mais elaborada?","s","Minimalista|Mais elaborada"),f("Deseja utilizar fotografias na abertura?","s",SN),f("Deseja utilizar elementos decorativos?","s",SN),f("Gostaria de incluir música de fundo?","s",SN),f("Deseja efeitos de transição?","s",SN),f("Prefere uma navegação simples ou interativa?","s","Simples|Interativa"),
f("Sem ideia definida?","m","Não tenho uma ideia definida. Gostaria que vocês sugerissem a melhor opção."),f("Descreva como imagina o convite ideal","a"),
f("Funcionalidades","H"),f("Quais funcionalidades deseja no convite?","m",FN),
f("Confirmação de presença (RSVP)","H","",[11,"Confirmação de presença (RSVP)"]),
f("Data limite para confirmação","d","",[11,"Confirmação de presença (RSVP)"]),f("Confirmação individual ou por grupo?","s","Individual|Por grupo",[11,"Confirmação de presença (RSVP)"]),f("Permitir acompanhantes?","s",SN,[11,"Confirmação de presença (RSVP)"]),f("Quantidade máxima de acompanhantes","t","",[15,"Sim"]),f("Coletar restrições alimentares?","s",SN,[11,"Confirmação de presença (RSVP)"]),f("Mensagem após confirmação","a","",[11,"Confirmação de presença (RSVP)"]),
f("Lista de presentes","H","",[11,"Lista de presentes"]),f("Estilo da lista","s","Tradicional|Descontraída",[11,"Lista de presentes"]),f("Presentes: nome, descrição, valor e quantidade de cotas","a","",[11,"Lista de presentes"]),
f("Dress code","H","",[11,"Dress code"]),f("Tipo de traje","t","",[11,"Dress code"]),f("Cores sugeridas e cores a evitar","t","",[11,"Dress code"]),f("Orientações adicionais sobre o traje","a","",[11,"Dress code"])];
const TX=[f("Mensagem de abertura","a"),f("Texto principal","a"),f("Mensagem de encerramento","a"),f("Frase especial","a"),f("Assinatura"),f("Qual estilo de linguagem prefere?","s","Formal|Romântico|Religioso|Descontraído|Elegante|Divertido|Minimalista"),f("Deseja que nossa equipe sugira os textos?","s",SN),f("Deseja incluir versículos, frases ou citações?","s",SN),f("O convite será em português ou outro idioma?")];
const PZ=[f("Data desejada para publicação","d"),f("Existe uma data limite para disponibilização?","d"),f("Deseja receber uma prévia?","s",SN),f("Quem será responsável pela aprovação?"),f("Canal preferido para contato","s","WhatsApp|E-mail|Telefone"),f("Existe algum detalhe que ainda não perguntamos, mas que você considera importante?","a")];
const STEPS=[["ev","Evento"],["ge","Informações"],["es","Detalhes"],["vi","Estilo"],["cv","Convite"],["tx","Textos"],["pz","Prazo"],["rv","Revisão"]];
const TT={ev:["Vamos começar pelo seu evento?","Cada comemoração tem sua própria história. Queremos conhecer os detalhes para criar um convite que combine com esse momento."],ge:["Informações gerais","Dados de contato e do local para montarmos seu convite."],es:["Detalhes do evento","Só perguntamos o que faz sentido para o seu tipo de evento."],vi:["Identidade visual","Conte o estilo que você imagina. Se já tem uma marca, anexe aqui."],cv:["Aparência e funcionalidades","Escolha como o convite aparece e o que ele oferece aos convidados."],tx:["Textos do convite","Escreva o que quiser ou deixe com a nossa equipe."],pz:["Prazo e aprovação","Combine conosco as datas e quem aprova."],rv:["Revise seu briefing","Confira as respostas. Você pode voltar e editar qualquer etapa."]};
let D={},st=0,F={},msg="",OPEN=0,SENDING=0;
try{D=JSON.parse(localStorage.getItem("bq2")||"{}");st=D.st||0}catch(e){}
const save=()=>{D.st=st;try{localStorage.setItem("bq2",JSON.stringify(D))}catch(e){}};
const esc=s=>String(s??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const $=s=>document.querySelector(s);
function fl(k){return k=="ge"?["ge.",GE]:k=="es"?["e"+D.g+".",G[D.g]||[]]:k=="vi"?["vi.",VI]:k=="cv"?["cv.",CV]:k=="tx"?["tx.",TX]:k=="pz"?["pz.",PZ]:["",[]]}
function show(p,x){if(!x.c)return true;const v=D[p+x.c[0]];return Array.isArray(v)?v.includes(x.c[1]):v===x.c[1]}
function dd(k,o,v,m,ph){const op=OPEN===k,has=m?(v||[]).length:v,lab=m?((v||[]).join(", ")||ph):(v||ph);
return`<div class="dd${op?" open":""}${has?" has":""}"><button type="button" class="ddb" data-dd="${k}" aria-haspopup="listbox" aria-expanded="${op}"><span>${esc(lab)}</span><span class="ar">▾</span></button><ul class="ddl" role="listbox">${o.map(z=>`<li><button type="button" role="option" class="ddo${(m?(v||[]).includes(z):v===z)?" on":""}" data-k="${k}" data-v="${esc(z)}" data-m="${m?1:0}">${esc(z)}</button></li>`).join("")}</ul></div>`}
function fh(p,x,i,bad){const k=p+i,v=D[k]??"";
if(!show(p,x))return"";
if(x.t=="H")return`<h3>${esc(x.l)}</h3>`;
if(x.t=="n")return`<p class="note">${esc(x.l)}</p>`;
let L=`<span class="lb">${esc(x.l)}${x.r?" <s>*</s>":""}</span>`,b="";
if("tdh".includes(x.t))b=`<input type="${{t:"text",d:"date",h:"time"}[x.t]}" data-k="${k}" data-kd="${x.k}" ${x.k=="p"?'inputmode="numeric" maxlength="13" placeholder="Ex.: 61999998888"':x.k=="e"?'inputmode="email" placeholder="nome@email.com"':x.k=="u"?'inputmode="url" placeholder="https://maps.app.goo.gl/..."':""} value="${esc(v)}">`;
else if(x.t=="a")b=`<textarea data-k="${k}">${esc(v)}</textarea>`;
else if("scm".includes(x.t))b=dd(k,x.o,v,x.t=="m",x.t=="m"?"Selecione uma ou mais opções":"Selecione uma opção");

else if(x.t=="f")b=`<div class="fl"><label class="chip">+ Escolher arquivos<input type="file" multiple data-f="${k}"></label></div>`+(v||[]).map((n,j)=>`<div class="fi">${esc(n)} <button type="button" data-rm="${k}|${j}">remover</button></div>`).join("");
return`<div class="f${bad&&inv(x,v)?" bad":""}">${L}${b}</div>`}
function stepHTML(k){
if(k=="ev"){const bad=msg&&!D.ev;return`<div class="f${bad?" bad":""}"><span class="lb">Tipo de evento <s>*</s></span><div class="dd${OPEN==="ev"?" open":""}${D.ev?" has":""}"><button type="button" class="ddb" data-dd="ev" aria-haspopup="listbox" aria-expanded="${OPEN==="ev"?"true":"false"}"><span>${D.ev?esc(D.ev):"Selecione o tipo de evento"}</span><span class="ar">▾</span></button><ul class="ddl" role="listbox">${EV.map(([n,g])=>`<li><button type="button" role="option" class="ddo${D.ev===n?" on":""}" data-ev="${n}|${g}">${n}</button></li>`).join("")}</ul></div></div>`+(D.ev=="Outro evento"?`<div class="f"><span class="lb">Descreva o tipo de comemoração</span><input type="text" data-k="eo" value="${esc(D.eo)}"></div>`:"")}
if(k=="rv")return review();
const[p,fs]=fl(k);return fs.map((x,i)=>fh(p,x,i,msg)).join("")}
function rows(k){const[p,fs]=fl(k);return fs.map((x,i)=>({x,v:D[p+i]})).filter(({x,v})=>show(p,x)&&"tdhasmcf".includes(x.t)&&v&&v.length).map(({x,v})=>[x.l,Array.isArray(v)?v.join(", "):v])}
function review(){let h="";const top=[["Tipo de evento",D.ev+(D.eo?": "+D.eo:"")]];
const all=[["ev","Evento",top]].concat(STEPS.slice(1,7).map(([k,n])=>[k,n,rows(k)]));
all.forEach(([k,n,r],i)=>{h+=`<div class="rv"><h4>${n}<button data-go="${i}">Editar</button></h4>${r.length?r.map(([a,b])=>`<p><b>${esc(a)}</b><br>${esc(b)}</p>`).join(""):"<p>Nenhuma resposta nesta etapa.</p>"}</div>`});
h+=["Confirmo que as informações fornecidas estão corretas.","Tenho autorização para compartilhar os materiais enviados.","Estou ciente das condições de utilização dos arquivos e informações fornecidas."].map((t,i)=>`<label class="ck"><input type="checkbox" data-k="cf${i}" ${D["cf"+i]?"checked":""}> ${t}</label>`).join("");return h}
function txt(){let t="BRIEFING — "+D.ev+(D.eo?" ("+D.eo+")":"")+"\n";STEPS.slice(1,7).forEach(([k,n])=>{const r=rows(k);if(r.length){t+="\n## "+n+"\n"+r.map(([a,b])=>a+": "+b).join("\n")+"\n"}});return t}
function render(){const y=scrollY,k=STEPS[st][0];
$("#steps").innerHTML=STEPS.map(([_,n],i)=>`<div class="sp${i==st?" on":i<st?" ok":""}"><i>${i<st?"✓":i+1}</i><em>${n}</em></div>`).join("");
if(D.sent){$("#steps").style.display="none";$("#app").innerHTML=`<div class="done"><h2>Briefing enviado!</h2><p class="sub">Recebemos suas respostas. Vamos analisar tudo antes de iniciar a produção do seu convite e entraremos em contato pelo canal escolhido.</p><p class="sub"><b>Protocolo: ${esc(D.proto||"")}</b><br>Guarde este número para falar com a gente.</p></div>`;return}
const[t,s]=TT[k];
$("#app").innerHTML=`<h2>${t}</h2><p class="sub">${s}</p>${stepHTML(k)}${msg?`<div class="err">${msg}</div>`:""}<div class="nav">${st?`<button class="btn o" id="bk">Voltar</button>`:"<span></span>"}<span class="sv">Salvo automaticamente</span><button class="btn" id="nx">${k=="rv"?(SENDING?"Enviando...":"Enviar briefing"):"Continuar"}</button></div>`;
scrollTo(0,y)}
function valid(){const k=STEPS[st][0];
if(k=="ev")return D.ev?"":"Escolha o tipo de evento para continuar.";
if(k=="ge"){if(GE.some((x,i)=>x.r&&!(D["ge."+i]||"").trim()))return"Preencha os campos marcados com *.";const m={e:"Digite um e-mail válido, como nome@email.com.",p:"Digite o WhatsApp só com números, com DDD (10 a 13 dígitos).",u:"O link de localização precisa ser um endereço válido ou ficar em branco."};const b=GE.find((x,i)=>x.k&&inv(x,(D["ge."+i]||"").trim()));return b?m[b.k]:""}
if(k=="rv")return[0,1,2].every(i=>D["cf"+i])?"":"Marque as três confirmações para enviar.";return""}
document.addEventListener("click",e=>{if(OPEN&&!e.target.closest(".dd")){OPEN=0;render()}const t=e.target.closest("button,label");if(!t)return;
if(t.dataset.ev){const[n,g]=t.dataset.ev.split("|");D.ev=n;D.g=g;msg="";OPEN=0;save();render()}
else if(t.dataset.dd){OPEN=OPEN===t.dataset.dd?0:t.dataset.dd;render()}
else if(t.dataset.v!==undefined){const k=t.dataset.k;if(t.dataset.m=="1"){const a=D[k]||[],v=t.dataset.v;D[k]=a.includes(v)?a.filter(z=>z!=v):a.concat(v)}else{D[k]=t.dataset.v;OPEN=0}save();render()}
else if(t.dataset.rm){const[k,j]=t.dataset.rm.split("|");D[k].splice(+j,1);(F[k]||[]).splice(+j,1);save();render()}
else if(t.dataset.go){st=+t.dataset.go;msg="";save();render();scrollTo(0,0)}
else if(t.id=="bk"){st--;msg="";save();render();scrollTo(0,0)}
else if(t.id=="nx"){if(SENDING)return;msg=valid();if(msg){render();return}
if(STEPS[st][0]=="rv"){send();return}
st++;save();render();scrollTo(0,0)}
else if(t.id=="cp"){try{navigator.clipboard.writeText(txt());t.textContent="Resumo copiado"}catch(x){t.textContent="Não foi possível copiar"}}});
document.addEventListener("input",e=>{const el=e.target;if(el.dataset.kd=="p"){const c=el.value.replace(/\D/g,"");if(c!=el.value)el.value=c}if(el.dataset.k&&!el.dataset.v){D[el.dataset.k]=el.type=="checkbox"?el.checked:el.value;save()}});
document.addEventListener("change",e=>{const el=e.target;if(el.dataset.f){const k=el.dataset.f,cur=F[k]||[];let m="";
const ok=[...el.files].filter(f=>{if(!OK_T.includes(f.type)){m="Formato não aceito: "+f.name+". Use imagens (JPG, PNG, WEBP, GIF), PDF ou vídeo MP4.";return false}if(f.size>MAXB){m=f.name+" passa de 20 MB.";return false}return true});
if(cur.length+ok.length>MAXF){m="O limite é de "+MAXF+" arquivos.";ok.length=Math.max(0,MAXF-cur.length)}
F[k]=cur.concat(ok);D[k]=F[k].map(f=>f.name);msg=m;save();render()}});

/* ===== Envio para o Supabase ===== */
const OK_T=["image/jpeg","image/png","image/webp","image/gif","application/pdf","video/mp4"],MAXB=20*1024*1024,MAXF=15;
function sbc(){const c=window.BRIEFING_CONFIG||{};if(!c.SUPABASE_URL||c.SUPABASE_URL.includes("SEU-PROJETO")||!window.supabase)return null;return window.supabase.createClient(c.SUPABASE_URL,c.SUPABASE_ANON_KEY)}
async function send(){
if(SENDING)return;
const hp=$("#hp");if(hp&&hp.value){D={sent:1,proto:"OK"};render();return}
const sb=sbc();if(!sb){msg="O envio ainda não foi configurado. Preencha o arquivo js/config.js com os dados do Supabase.";render();return}
const fk="vi.8";if((D[fk]||[]).length!=(F[fk]||[]).length){D[fk]=[];F[fk]=[];msg="Os arquivos anexados precisam ser escolhidos de novo, porque a página foi recarregada. Volte na etapa Estilo.";save();render();return}
SENDING=1;msg="";render();
const id=crypto.randomUUID(),files=[];
try{
for(const f of(F[fk]||[])){const safe=f.name.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^\w.-]+/g,"_"),path=id+"/"+files.length+"-"+safe;
const u=await sb.storage.from("briefing-files").upload(path,f,{contentType:f.type,upsert:false});if(u.error)throw u.error;
files.push({categoria:"Estilo e referências",nome:f.name,caminho:path,tipo:f.type,tamanho:f.size})}
const answers={Evento:Object.assign({"Tipo de evento":D.ev},D.eo?{"Descrição":D.eo}:{})};
STEPS.slice(1,7).forEach(([k,nm])=>{const r=rows(k);if(r.length)answers[nm]=Object.fromEntries(r)});
const row={id,event_type:D.ev,event_group:D.g,event_name:D["ge.3"]||null,event_date:D["ge.4"]||null,client_name:D["ge.0"].trim(),client_email:D["ge.1"].trim(),client_whatsapp:D["ge.2"].trim(),answers,files,features:D["cv.11"]||[],extra_services:(D.g=="c"&&D["ec.5"]=="Sim")?["Orçamento de monograma"]:[],consent_accepted:true};
const r=await sb.from("briefings").insert(row);if(r.error)throw r.error;
D={sent:1,proto:id.slice(0,8).toUpperCase()};F={};SENDING=0;try{localStorage.removeItem("bq2")}catch(e){}render();scrollTo(0,0)
}catch(e){console.error(e);SENDING=0;msg="Não foi possível enviar agora. Confira sua conexão e tente de novo. Suas respostas continuam salvas.";render()}}

render();
