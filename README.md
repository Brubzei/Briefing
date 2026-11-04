# Briefing de convites digitais

Formulário de briefing dinâmico (HTML, CSS e JavaScript puro) que envia as respostas e os arquivos para o **Supabase**.
O tipo de evento escolhido na primeira etapa define quais perguntas aparecem.

## Estrutura

```
index.html          página
css/style.css       visual (cores da marca nas variáveis --r, --n, --c)
js/config.js        dados do seu Supabase (você preenche)
js/app.js           perguntas, validações e envio
supabase/schema.sql tabela, regras de segurança e pasta de arquivos
netlify.toml        configuração de hospedagem (Netlify)
vercel.json         configuração de hospedagem (Vercel)
```

## Passo a passo para colocar no ar

### 1. Criar o projeto no Supabase
1. Crie uma conta em supabase.com e clique em **New project**.
2. Escolha um nome, defina uma senha do banco (guarde-a) e a região **South America (São Paulo)**.
3. Aguarde o projeto ficar pronto.

### 2. Criar a tabela e a pasta de arquivos
1. No menu lateral, abra **SQL Editor** > **New query**.
2. Cole todo o conteúdo de `supabase/schema.sql` e clique em **Run**.
3. Confira: em **Table Editor** deve existir a tabela `briefings`, e em **Storage** o bucket `briefing-files`.

### 3. Ligar o site ao Supabase
1. Vá em **Project Settings > API** (ou **API Keys**).
2. Copie a **Project URL** e a chave pública (**anon** ou **publishable**).
3. Cole os dois valores em `js/config.js`.
   Essa chave é pública de propósito: quem protege os dados são as regras do `schema.sql`.
   **Nunca** use a chave `service_role` ou `secret` no site.

### 4. Testar no seu computador
Abra a pasta no VS Code com a extensão **Live Server** e clique em *Go Live*.
Preencha um briefing de teste até o fim e confira se a linha apareceu em **Table Editor > briefings** e se os anexos apareceram em **Storage > briefing-files**.
Depois apague os testes pelo painel.

### 5. Hospedar
**Netlify (mais fácil):**
1. Acesse app.netlify.com/drop e arraste a pasta do projeto. O site entra no ar com um endereço `.netlify.app`.
2. Para atualizações automáticas, suba a pasta para um repositório no GitHub e conecte em **Add new site > Import an existing project**. Deixe o comando de build em branco e a pasta de publicação como `.`.

**Vercel ou Cloudflare Pages:** também funcionam. Importe o repositório do GitHub, sem comando de build e com a pasta raiz como saída.

### 6. Domínio próprio (opcional)
Registre em registro.br (cerca de R$ 40 por ano) e, no painel da hospedagem, use **Domain management / Custom domain** para apontar, por exemplo, `briefing.seudominio.com.br`. A hospedagem mostra os registros DNS que você deve criar.

## Como você recebe os briefings

- **Table Editor > briefings:** uma linha por briefing, com cliente, e-mail, WhatsApp, tipo de evento, data, protocolo, funcionalidades escolhidas e serviços adicionais (por exemplo, orçamento de monograma).
  A coluna `answers` guarda todas as respostas organizadas por etapa.
- **Coluna `status`:** troque o valor direto na tabela (Em análise, Aprovado para produção etc.). A coluna `internal_notes` é para suas anotações.
- **Storage > briefing-files:** os anexos ficam numa pasta com o ID do briefing. A coluna `files` mostra o caminho de cada arquivo.
- O cliente recebe na tela um **protocolo** (os 8 primeiros caracteres do ID).
- O painel administrativo próprio, previsto no documento de requisitos, fica para uma próxima fase.

## Segurança e cuidados

- Visitantes só conseguem **enviar** briefings. Não conseguem ler, editar nem apagar.
- Arquivos aceitos: JPG, PNG, WEBP, GIF, PDF e MP4, até 20 MB cada e 15 por briefing.
- Há um campo escondido contra robôs simples. Se começar a receber envios falsos, o próximo passo é adicionar o Cloudflare Turnstile.
- O formulário coleta nomes e fotos de terceiros, inclusive crianças. Publique um aviso de privacidade (LGPD) e defina por quanto tempo guarda os dados.
- Confira no site do Supabase as regras atuais do plano gratuito (limites de armazenamento, pausa de projetos sem uso e backups) antes de usar com clientes reais.

## Editando o formulário

- **Perguntas de cada evento:** objeto `G` em `js/app.js`. Cada pergunta é `f("texto", tipo, "opção1|opção2", condição, obrigatório, validação)`.
  Tipos: `t` texto, `a` texto longo, `d` data, `h` hora, `s` escolha única, `m` múltipla escolha, `f` arquivos.
- **Novo tipo de evento:** adicione em `EV` (nome e grupo) e crie o grupo em `G`.
- **Condições:** o quarto parâmetro `[posição, "valor"]` mostra a pergunta só quando a resposta da posição indicada for aquele valor.
  A posição é o índice na lista. Ao inserir ou remover perguntas, revise as condições e mude a chave `bq2` do `localStorage` em `js/app.js`, para descartar respostas salvas antigas.
- **Atenção:** o envio usa posições fixas para alguns dados (nome, e-mail, WhatsApp e data em `GE`, funcionalidades em `CV` e o orçamento de monograma no casamento). Se mudar a ordem dessas perguntas, ajuste a função `send` em `js/app.js`.
