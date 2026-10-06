# Portfólio Charles Nuno: contexto e plano de trabalho

*Documento de passagem para outra IA ou programador. Estado em 6 de outubro de 2026. Lê tudo antes de alterar código.*

## 1. Como usar este documento

Este documento explica o que o projeto é, o que já foi feito, como o código está organizado, que convenções seguir e o que falta fazer, por ordem de prioridade. Complementa o documento "Incongruências e pendentes", que lista as decisões em aberto e os erros conhecidos.

Regras de ouro:

- O dono do projeto, Charles Nuno, está a aprender React. Cada alteração deve ser explicada passo a passo (o que muda, porquê, que conceito entra). Evita refactors silenciosos.
- Prefere ser questionado a ver lacunas preenchidas com suposições, sobretudo em factos sobre a sua experiência (datas, projetos, ferramentas).
- O site antigo está no ar na branch `main` (Vercel). Nunca fazer merge para a `main` sem validar no preview.
- Commits pequenos, um por passo que funciona. Mensagens no estilo `feat: ...`, `fix: ...`, `refactor: ...`.
- Idioma de conversa com o Charles: português (Angola). Código e nomes de ficheiros em inglês.

## 2. O que é o projeto

Portfólio pessoal de Charles Nuno, comunicador angolano de formação e programador autodidata, em fase de procura de emprego com foco internacional (por isso o inglês é o idioma por defeito).

São dois portefólios ligados por uma página inicial (gateway):

| Rota | Portefólio | Cor | Símbolo |
| --- | --- | --- | --- |
| `/` | Gateway (escolha) | neutra | duas cartas |
| `/co` | Communicator | amarelo | máscara africana tribal |
| `/pr` | Developer | vermelho | pensador robótico (Rodin) |

Identidade visual partilhada: o mapa de Angola em contorno tracejado a envolver o símbolo, e o padrão têxtil angolano **samakaka** como moldura (cartas, cartões de visita). A paleta tem tons claros e escuros pensados para funcionar em modo claro e escuro.

### Estrutura de conteúdo (igual nos dois portefólios)

Layout de 3 colunas no desktop, com menu em gaveta (drawer) no mobile:

- **Coluna 1:** navegação entre as 3 secções. Communicator: About Me, Work, Contacts. Developer: About Me, **Projects** (não "Work", é intencional), Contacts.
- **Coluna 2:** conteúdo da secção ativa.
- **Coluna 3 (ou índice flutuante no mobile):** índice "On this page", gerado a partir dos títulos e sincronizado com o scroll.

About Me tem três partes (Who Am I / What Do I Do / Why Do I Do It), galeria "Archives", acróstico CHARLES e citações. Work/Projects tem sub-secções com introdução curta, galeria com abas, modal com metadados e pílulas de skills, e um bloco final de 3 a 6 "Key Skills" escolhidas a partir de linguagem de ofertas de emprego reais (compatível com ATS).

## 3. Decisão de migração

O site era HTML, CSS e JavaScript puros. Foi migrado para **Vite + React (JavaScript, não TypeScript) + React Router**, hospedado no Vercel. Objetivo duplo: atualizar a stack e aprender.

- Branch de trabalho: `react-migration`. O Vercel gera um preview por branch.
- O site antigo está em `legacy/` (só para consulta; inclui `legacy/co`, `legacy/pr`, `legacy/css`, `legacy/js`, `legacy/img`).
- `vercel.json` na raiz tem o rewrite de todas as rotas para `/index.html` (necessário para `/co` e `/pr` abertos diretamente).
- Linter: ESLint. React Compiler: não.
- Os recursos estáticos (imagens, ícones, fontes) estão em `public/` e são referenciados com caminhos absolutos (`/img/...`).

## 4. Estado atual

### Concluído

- **Home (`/`)**: convertida para JSX, com o componente `Typewriter` reutilizável. CSS isolado dentro de uma classe `.home` (CSS nesting) para não vazar para as outras páginas.
- **Communicator (`/co`) a 100%**, com: navbar, sidebar, drawer mobile com acordeão, índice "On this page" com scrollspy, botão bússola no mobile, secções About Me, Work e Contacts, galeria com abas e "See more/less" (limite 6 no desktop e 4 no mobile), modal com vídeo do YouTube e imagem, carrossel de citações, tema claro/escuro e 4 idiomas (EN, PT, FR, ZH) com persistência.
- Preview no Vercel validado até à fase do Communicator.

### Não feito

- **Developer (`/pr`)**: é só uma página provisória (título e link "Back to home"). **Não fazer merge na `main` enquanto estiver assim**, porque o site oficial passaria a mostrar uma página vazia.
- Refactor para componentes partilhados e layout genérico.
- Cartas da home como componentes de dados.
- Tradução dos textos dentro do modal e das citações.
- Secção de empresas/clientes na home.
- README com guia de conteúdo.

## 5. Arquitetura (como está hoje)

```
src/
  main.jsx                  BrowserRouter > ThemeProvider > LanguageProvider > App
  App.jsx                   rotas: / , /co , /pr
  index.css                 importa styles/style.css e style_desktop.css
  pages/
    Home.jsx
    Communicator.jsx        estado: secção ativa, item do modal, menu aberto
    Developer.jsx           PLACEHOLDER
  components/
    Typewriter.jsx          recebe texts, typeSpeed, deleteSpeed, pause, textId
    communicator/
      Navbar, SidebarLeft, Drawer, Toc, CompassButton,
      Gallery, Lightbox, AboutMe, Work, Contacts, Quotes,
      ThemeButton, LangButton
  context/
    ThemeContext.jsx        theme, toggleTheme; chave localStorage cn-theme; data-theme no <html>
    LanguageContext.jsx     lang, setLang, t(key); chave cn-lang; lang e data-lang no <html>
  hooks/
    useMediaQuery.js
    useScrollSpy.js
  data/
    communicatorSections.js  secções e sub-links (com labelKey)
    archives.js, work.js, quotes.js, contacts.jsx, taglines.js
  i18n/
    en.js pt.js fr.js zh.js index.js
  styles/
    style.css, style_desktop.css      (home, dentro de .home)
    portfolio.css, portfolio_desktop.css, communicator.css   (Communicator)
public/img/...  legacy/  vercel.json
```

### Princípios que o código segue

1. **Dados separados da aparência.** Fotos, vídeos, trabalhos, citações, contactos e secções vivem em `src/data/` como arrays de objetos. Os componentes só desenham. Adicionar conteúdo não deve exigir tocar em JSX.
2. **Estado elevado ao pai.** A secção ativa, o item aberto no modal e o menu aberto vivem em `Communicator.jsx` e descem por props. O estado local (aba ativa de uma galeria, "expandido") fica dentro do componente que o usa.
3. **Context para o que é global:** tema e idioma.
4. **Textos por chave.** Qualquer texto de interface usa `t('chave')`. Os dados guardam a chave (`labelKey`, `titleKey`, `introKey`, `skillKeys`), nunca o texto traduzido.
5. **Hooks próprios** para lógica reutilizável (`useMediaQuery`, `useScrollSpy`).
6. **Efeitos com limpeza** (`clearTimeout`, `removeEventListener`, `disconnect`).

### Padrão de dados de trabalho (`src/data/work.js`)

Funções auxiliares geram os objetos para não repetir campos:

- `battle(youtubeId, ano, evento, descricao)` para batalhas de rap.
- `report(youtubeId, ano, evento, descricao, skills?)` para reportagens.
- `design(tab, id, ficheiro, contexto, ano, evento, descricao, skills, extra?)` para peças de design (imagens em `public/img/co/`).

Cada secção tem `id`, `titleKey`, `introKey`, `tabsLabel`, `tabs`, `items` e `skillKeys`. O item de galeria tem `id`, `tab`, `type` (`video` ou `image`), `img`, `alt`, `ano`, `evento`, `descricao`, `skills`, e opcionalmente `youtube`, `contexto`, `local`, `maps`, `link`, `linkLabel`.

### Sistema de idiomas

- Quatro ficheiros em `src/i18n/`, cada um com `export default { 'chave': 'texto' }`. Nunca usar `en: {` dentro do ficheiro.
- `t(key)` devolve: idioma ativo, depois inglês, depois a própria chave.
- Inglês é a versão oficial dos textos (decisão do Charles). As introduções do Work e `about.what_intro` do dicionário em inglês são as oficiais.
- Textos longos dos itens das galerias (títulos, descrições) e as citações **ainda não estão traduzidos**, de propósito, por agora.

### Armadilhas de CSS já encontradas (importante)

Numa SPA, todo o CSS importado fica no mesmo documento e aplica-se a todas as páginas.

- O CSS da home estava a vazar para o Communicator e vice-versa. Solução usada: a home vive dentro de `.home { ... }` com nesting; `@keyframes` ficam **fora** do bloco; o `body` da home passou a ser o próprio `.home`.
- O React renderiza dentro de `<div id="root">`. Regras antigas que dependiam de `body > ...` ou de `body` como contentor flex deixam de funcionar. No Communicator usou-se `#root { display: contents; }`.
- Recomendação ainda a verificar: prefixar as regras globais de `html` e `body` do `portfolio.css` com `html[data-portfolio]`, para não prenderem a altura da home. O `Communicator.jsx` define `data-portfolio` no `<html>` ao entrar e remove ao sair.
- Seletores como `article:first-child` e `article:last-child` (cores das cartas da home) dependem da ordem. Têm de ser trocados por classes por carta antes de existir uma terceira carta.
- Ficheiros de componentes em PascalCase. No Windows a capitalização é ignorada, no Vercel (Linux) não.

## 6. Convenções de texto (copywriting)

- Sem travessões (em dashes) em texto novo de corpo. O Charles considera que parecem escrita de IA. Os textos existentes que os têm foram deixados como estão por ele, para rever mais tarde.
- Parágrafos de introdução com cerca de 75 palavras no máximo.
- Estrutura de 3 partes das cartas e peças de identidade: frase de abertura, lista de 5 a 6 competências separadas por ponto e vírgula, frase de fecho que não repete a lista e sugere ambição de carreira sem nomear um emprego.
- Skills escolhidas por aparecerem em ofertas de emprego reais, preferindo uma palavra ou frase curta e de impacto.
- Tom: amigável, honesto, de conselheiro, narrativa em primeira pessoa, cada vez mais profissional e atento a palavras-chave.

## 7. Plano de tarefas por prioridade

O Charles escolheu: **primeiro o Developer, depois o refactor.** Ordem recomendada abaixo, com a justificação de cada bloco.

### Fase A. Converter o Developer (`/pr`) (prioridade máxima)

Sem isto o merge é impossível.

1. Ler `legacy/pr/index.html` e os CSS/JS que usa. Anotar diferenças face ao Communicator.
2. Criar `Developer.jsx` seguindo o mesmo esqueleto do `Communicator.jsx` (navbar, sidebar, drawer, índice, modal). **Para poupar trabalho, é aceitável nesta fase copiar a estrutura do Communicator e adaptar, sabendo que a Fase B vai generalizá-la.** O ideal é já passar o que for igual por props.
3. Cor vermelha e símbolo do pensador. Definir `data-portfolio="programming"` no `<html>`.
4. Secções: About Me, **Projects**, Contacts.
5. Dados em `src/data/`: `developerSections.js`, `projects.js`, `archivesDeveloper.js`.
6. Textos novos do Developer: chaves com prefixo `pr.` em `src/i18n/*.js` (por exemplo `pr.about.who_intro`), mantendo as chaves comuns (`nav.*`, `toc.*`, `gallery.*`).
7. Conteúdo de About Me próprio, escrito para ter o mesmo polimento que o do Communicator. Mesma estrutura, texto diferente.
8. **Projects, sub-secção Front-End (4 projetos):** este portefólio, EduKwanzas, site pessoal feito para Narciso Pedro, e a versão antiga deste portefólio.
9. **Projects, sub-secção Back-End (2 projetos):** Molley Office e uma aplicação local de download de vídeos do YouTube.
10. As duas imagens que o Charles quis tirar do Archives do Communicator e usar só no Developer: confirmar com ele quais são antes de as colocar.
11. Cada projeto abre no modal com ano, contexto, título, descrição, pílulas de skills e link externo (`link`, `linkLabel`).
12. Perguntar ao Charles datas, ferramentas e factos de cada projeto em vez de os inventar.
13. Skills finais de cada sub-secção (3 a 6), baseadas em vocabulário de ofertas de emprego.
14. Commit por passo. Testar tema, 4 idiomas, mobile e abrir `/pr` diretamente no preview.

### Fase B. Refactor para estrutura maleável

Objetivo declarado do Charles: poder adicionar trabalhos, imagens e até novas cartas sem precisar de uma IA. Ordem recomendada:

1. **Mover o partilhado para `src/components/shared/`:** Gallery, Lightbox, Toc, Drawer, LangButton, ThemeButton, CompassButton, Typewriter. Corrigir imports.
2. **`PortfolioLayout`:** transformar o esqueleto de `Communicator.jsx` num layout genérico que recebe por props as secções, o símbolo, a classe de cor e o conteúdo de cada secção. Communicator e Developer passam a usá-lo.
3. **Componentes pequenos:** `GalleryItem` (cartão de foto/vídeo), `SkillPill`, `SkillList` (bloco "Key Skills"), `Article` (título e texto), `PhotoTabs`.
4. **Validação de dados em desenvolvimento:** aviso na consola quando um item tem `tab` inexistente, imagem em falta ou chave de tradução sem texto. Hoje um erro de digitação faz o item desaparecer sem aviso.
5. **README** com guia "como adicionar conteúdo" (ver secção 9).

### Fase C. Cartas da home como componentes

O Charles quer poder acrescentar cartas (por exemplo, Professor ou Tradutor) apenas com dados.

1. Criar `src/data/portfolios.js` com `{ id, title, to, img, imgAlt, desc }` por carta.
2. Criar `PortfolioCard.jsx` com o HTML de uma carta. `Home.jsx` faz `PORTFOLIOS.map(...)`.
3. Cada carta recebe uma classe própria (`card--communication`, `card--programming`, `card--teaching`) e o CSS passa a usar essa classe em vez de `article:first-child` e `article:last-child`. Isto vale para cores do hover, degradês do mapa e atraso do `fadeUp`.
4. Definir paleta nova no `:root` por carta (por exemplo `--green-a`).
5. Verificar o layout com 3 ou mais cartas (largura, scroll horizontal no mobile).

### Fase D. Traduções em falta

1. **Dentro do modal:** "Skills & Tools", "Highlights", rótulo do link externo, e os textos dos itens (evento e descrição). Padrão sugerido: o item guarda `eventoKey` e `descricaoKey` e os textos vão para os 4 dicionários. Avaliar o volume (cerca de 40 descrições x 3 idiomas) e fazer por lotes.
2. **Citações da página About Me:** trocar `{ id, text, author }` por `{ id, textKey, author }`, com as traduções em `src/i18n/`. O autor não se traduz. Decidir caso a caso se uma citação é traduzida ou mantida no original (por exemplo as de origem portuguesa, como a de Génesis).
3. **Abas das galerias** ("Archives", "RRPL", "My Youtube Channel") e `aria-label`s: criar chaves.

### Fase E. Home: empresas e clientes

O Charles quer acrescentar na página inicial as empresas a que já prestou serviço. Pedir-lhe a lista, os logótipos autorizados e o texto. Seguir o mesmo padrão: `src/data/clients.js` e um componente `ClientsStrip`.

### Fase F. Melhorias opcionais (sem pressa)

- Meta tags e `<title>` por rota e por idioma (hoje o `index.html` tem uma única cabeça para o site todo, por isso as pré-visualizações de link do `/co` e `/pr` são iguais às da home). Solução possível: `react-helmet-async` ou o `<title>`/`<meta>` nativos do React 19.
- `prefers-reduced-motion` nas animações (carrossel, typewriter).
- Skeleton de carregamento inicial (existia no JS antigo).
- Loop contínuo do carrossel de citações (hoje, depois da última, volta ao início deslizando para trás).
- `<meta name="theme-color">` duplo (claro e escuro) no `index.html`.
- O typewriter da sidebar cicla pelas 4 línguas independentemente do idioma escolhido. Decisão do Charles: deixar assim por agora.

## 8. Checklist antes do merge para a `main`

- [ ] Developer convertido, com conteúdo real.
- [ ] No preview do Vercel, abrir `/co` e `/pr` diretamente na barra do browser.
- [ ] Testar modo claro e escuro, os 4 idiomas, o drawer e a bússola em largura inferior a 768 px.
- [ ] Confirmar que a home não perde scroll a 100% de zoom.
- [ ] Consola sem erros em todas as rotas.
- [ ] Ligações externas e `tel:` sem espaços (`tel:+244949734873`).
- [ ] `package.json` e `package-lock.json` no commit (o Vercel instala daí).

Merge:

```bash
git checkout main
git pull
git merge react-migration
git push
```

Se algo correr mal em produção: `git revert -m 1 HEAD`.

## 9. Guia de conteúdo (base para o README)

| Quero adicionar | Onde | O que escrever |
| --- | --- | --- |
| Foto no Archives | `src/data/archives.js` | novo objeto com `id`, `tab`, `local`, `maps`, `ano`, `evento`, `descricao`, `img`, `alt`; imagem em `public/img/` |
| Vídeo de batalha | `src/data/work.js` | `battle('IDYOUTUBE', 'ano', 'título', 'descrição')` na secção certa |
| Reportagem em vídeo | `src/data/work.js` | `report('IDYOUTUBE', 'ano', 'título', 'descrição')` |
| Peça de design | `src/data/work.js` | `design('aba', 'id', 'ficheiro.png', contexto, ano, título, descrição, [skills])`; imagem em `public/img/co/` |
| Citação | `src/data/quotes.js` | `{ id, text, author }` (depois da Fase D: `textKey`) |
| Contacto ou rede social | `src/data/contacts.jsx` | novo item em `EMAILS`, `PHONES` ou `SOCIALS` |
| Texto novo de interface | `src/i18n/en.js` e os outros três | mesma chave nos 4 ficheiros |
| Nova aba numa galeria | `tabs` da secção em `work.js` | `{ id, label }` e usar o mesmo `id` em `tab` dos itens |
| Nova carta na home | `src/data/portfolios.js` (depois da Fase C) | objeto com título, rota, imagem e descrição, mais a paleta no CSS |

Regras: o `id` de cada item é único; o `tab` do item tem de coincidir com o `id` de uma aba; imagens em `public/` e caminhos com `/` inicial; nomes de ficheiros de componentes em PascalCase.

## 10. Mapa do site antigo para consulta

O ficheiro `legacy/js/portfolio-app.js` tem a lógica antiga em módulos (Theme, Language, Sections, Accordion, Drawer, TOC, Typewriter, Skeleton, PhotoFilter, Lightbox, QuoteCarousel, CompassBtn, NextSection). Já migrados para React: todos exceto **Skeleton**, **suporte a TikTok** no modal (`data-type="tiktok"`), **bloco "Highlights"** do modal, `data-link-label-key` e `data-desc-key` (rótulos de link e descrições por chave) e `prefers-reduced-motion`. O Developer pode precisar de alguns destes.

`legacy/js/i18n-communication.js` tinha o dicionário do Communicator. O do Developer deve ter o seu próprio ficheiro no legado; consultá-lo antes de escrever chaves `pr.*`.
