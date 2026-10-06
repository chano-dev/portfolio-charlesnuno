# Guia Rápido: Como editar o portfólio sem IA

Este documento explica, de forma clara e prática, como adicionar, alterar ou remover conteúdos no teu portfólio. Foi pensado para que possas fazer estas alterações tu mesmo no futuro, sem recorrer a IA.

## Índice
- [Estrutura geral](#estrutura-geral)
- [Como adicionar uma nova carta na página inicial (Gateway)](#como-adicionar-uma-nova-carta-na-página-inicial-gateway)
- [Como alterar os textos das cartas da página inicial](#como-alterar-os-textos-das-cartas-da-página-inicial)
- [Como adicionar um novo projecto no Developer (/pr)](#como-adicionar-um-novo-projecto-no-developer-pr)
- [Como adicionar uma nova peça no Work (Communicator /co)](#como-adicionar-uma-nova-peça-no-work-communicator-co)
- [Como adicionar fotos ao Archives](#como-adicionar-fotos-ao-archives)
- [Como adicionar citações](#como-adicionar-citações)
- [Como alterar contactos](#como-alterar-contactos)
- [Como adicionar traduções (EN/PT/FR/ZH)](#como-adicionar-traduções-enptfrzh)
- [Como fazer merge para a branch main](#como-fazer-merge-para-a-branch-main)
- [Dicas importantes](#dicas-importantes)

## Estrutura geral

O projecto está organizado da seguinte forma:

```
src/
├── data/           # Dados (conteúdo) - É AQUI que deves editar na maioria dos casos
│   ├── portfolios.js      # Cartas da página inicial (/)
│   ├── projects.js        # Projectos do Developer (/pr)
│   ├── work.js            # Trabalhos do Communicator (/co)
│   ├── archives.js        # Archives do Communicator
│   ├── archivesDeveloper.js # Archives do Developer
│   ├── quotes.js          # Citações do Communicator
│   ├── quotesDeveloper.js # Citações do Developer
│   ├── contacts.jsx       # Contactos (emails, telefones, redes sociais)
│   ├── developerSections.js
│   ├── communicatorSections.js
│   └── taglines.js
├── components/     # Componentes React (não precisas mexer aqui para adicionar conteúdo)
├── i18n/           # Traduções (EN, PT, FR, ZH)
├── pages/          # Páginas principais
├── layouts/        # Layout partilhado entre portefólios
└── styles/         # CSS (só mexe se souberes exactamente o que fazes)
```

**Regra de ouro:** Para adicionar/alterar conteúdo, **edita quase sempre os ficheiros dentro de `src/data/`**. Nunca precisas de mexer nos componentes para adicionar um novo projecto, carta ou foto.

## Como adicionar uma nova carta na página inicial (Gateway)

A página inicial (`/`) mostra as cartas através de dados.

**Ficheiro a editar:** `src/data/portfolios.js`

Fica com este formato:

```js
export const PORTFOLIOS = [
  {
    id: 'communication',
    title: 'Communicator',
    to: '/co',
    img: '/img/mask.png',
    imgAlt: 'Tribal African mask symbolizing communication',
    desc: 'Texto exacto da carta...',
  },
  {
    id: 'programming',
    title: 'Developer',
    to: '/pr',
    img: '/img/thinker.png',
    imgAlt: 'Rodin thinker representing logic and problem-solving',
    desc: 'Texto exacto da carta...',
  },
]
```

**Passos:**

1. Abre `src/data/portfolios.js`
2. Adiciona um novo objeto ao array `PORTFOLIOS`
3. Preenche os campos:
   - `id`: identificador único em minúsculas (ex.: `teaching`, `translation`)
   - `title`: nome que aparece na carta
   - `to`: rota (ex.: `/te`)
   - `img`: imagem (coloca-a em `public/img/` e usa caminho `/img/nome.png`)
   - `imgAlt`: texto alternativo para acessibilidade
   - `desc`: descrição da carta (igual ao que tinhas na versão antiga se quiseres manter fidelidade)
4. Guarda o ficheiro
5. Testa com `npm run dev`

**Importante:** O CSS já suporta múltiplas cartas usando a classe `card--{id}`. Não precisas de mexer no CSS para adicionar uma nova carta.

## Como alterar os textos das cartas da página inicial

Simplesmente edita o campo `desc` em `src/data/portfolios.js`. Mantém o texto **exactamente** igual ao da versão antiga se quiseres manter 100% a fidelidade visual.

## Como adicionar um novo projecto no Developer (/pr)

**Ficheiro a editar:** `src/data/projects.js`

O ficheiro usa o helper `project()` e organiza-se por secções (`PROJECT_SECTIONS`).

### Estrutura

```js
project({
  id: 'meu-projeto',
  tab: 'minha-aba',
  file: 'meu-projeto.png',
  alt: 'Screenshot do meu projeto',
  contexto: 'Front-End',
  ano: '2026',
  evento: 'Título do projeto',
  descricao: 'Descrição em inglês (fixa)',
  // ou descricaoKey: 'pr.projects.pX_desc' se tiveres tradução
  skills: ['HTML5', 'CSS3', 'JavaScript'],
  highlights: ['Destaque 1', 'Destaque 2'],
  link: 'https://...', // opcional
  linkLabelKey: 'pr.projects.open_github', // opcional
})
```

**Passos:**

1. Coloca a imagem em `public/img/pr/`
2. Abre `src/data/projects.js`
3. Adiciona o novo `project()` dentro do array `items` da secção correcta (`front-end` ou `back-end`)
4. Verifica que o `tab` corresponde a uma das `tabs` dessa secção
5. Se tiveres traduções para a descrição, usa `descricaoKey`. Caso contrário, usa `descricao` com texto em inglês
6. Guarda e testa

**Nota:** O 5º projecto (Narciso Pedro) já está configurado seguindo este padrão.

## Como adicionar uma nova peça no Work (Communicator /co)

**Ficheiro a editar:** `src/data/work.js`

Existem 3 helpers:

- `battle(youtubeId, ano, evento, descricao)` — Batalhas de rap (vídeo YouTube)
- `report(youtubeId, ano, evento, descricao, skills?)` — Reportagens/vídeos
- `design(tab, id, ficheiro, contexto, ano, evento, descricao, skills, extra?)` — Peças de design (imagens)

### Exemplo (vídeo)

```js
battle('ID_YOUTUBE_11_CHARS', '2022', 'Título da batalha', 'Descrição')
```

### Exemplo (design)

```js
design(
  'charles-nuno', // tab
  'cn-novo',      // id único
  'nova-imagem.png', // ficheiro em public/img/co/
  'Designer & Copywriter',
  '2026',
  'Título',
  'Descrição',
  ['Figma', 'Illustrator']
)
```

**Passos:**

1. Para design: coloca a imagem em `public/img/co/`
2. Abre `src/data/work.js`
3. Adiciona o item na secção correcta (`master-of-ceremony`, `content-creator-video-editor` ou `designer-copywriter`)
4. Garante que `tab` existe nas `tabs` dessa secção
5. Guarda e testa

## Como adicionar fotos ao Archives

**Communicator:** `src/data/archives.js`  
**Developer:** `src/data/archivesDeveloper.js`

Formato:

```js
{
  id: 'meu-id-unico',
  tab: 'archives',
  local: 'Local onde foi tirada a foto',
  maps: 'https://maps.google.com/?q=...',
  ano: '2025',
  evento: 'Nome do evento',
  descricao: 'Descrição em inglês',
  img: '/img/minha-foto.jpg',
  alt: 'Texto alternativo',
}
```

1. Coloca a imagem em `public/img/`
2. Abre o ficheiro correspondente
3. Adiciona o objeto ao array
4. Guarda e testa

## Como adicionar citações

**Communicator:** `src/data/quotes.js`  
**Developer:** `src/data/quotesDeveloper.js`

```js
{ id: 7, text: 'Frase da citação', author: 'Autor' }
```

O ID tem de ser único.

## Como alterar contactos

**Ficheiro a editar:** `src/data/contacts.jsx`

```js
export const EMAILS = ['email1@gmail.com', 'email2@gmail.com']
export const PHONES = [
  { href: 'tel:+244949734873', label: '+244 949 734 873' },
  // ...
]
export const SOCIALS = [
  { id: 'linkedin', label: 'LinkedIn', href: 'https://...', icon: (<svg>...</svg>) },
  // ...
]
```

**Nota:** Telefones **nunca** devem ter espaços em `href` (usa `tel:+244949734873`, não `tel:+244 949 734 873`).

## Como adicionar traduções (EN/PT/FR/ZH)

**Ficheiros a editar:** `src/i18n/en.js`, `src/i18n/pt.js`, `src/i18n/fr.js`, `src/i18n/zh.js`

Adiciona a **mesma chave** nos 4 ficheiros:

```js
// en.js
'minha.chave': 'My text in English',

// pt.js
'minha.chave': 'O meu texto em português',

// fr.js
'minha.chave': 'Mon texte en français',

// zh.js
'minha.chave': '我的中文文本',
```

Depois usa essa chave nos dados com `*Key` (ex.: `descricaoKey: 'minha.chave'`).

**Regras:**
- Usa aspas simples
- Escapa apostrofes quando necessário (`don\'t`)
- Mantém o estilo dos ficheiros existentes
- Prefere traduzir apenas textos de interface. Textos longos de galerias podem ficar fixos por enquanto (conforme decisão do projecto)

## Como fazer merge para a branch main

A branch de trabalho actual é `react-migration`. O site antigo está na `main`. **Nunca faças merge para main sem validar no preview do Vercel.**

### Passos para fazer merge (após validação)

1. **Testa tudo localmente**
   ```bash
   npm run dev
   ```
   Verifica: Home, `/co`, `/pr`, tema claro/escuro, 4 idiomas, mobile (< 768px), drawer, bússola, lightbox, consola sem erros.

2. **Build e lint**
   ```bash
   npm run build
   npm run lint
   ```

3. **Commit tudo o que falta (se houver alterações por gravar)**
   ```bash
   git status
   git add .
   git commit -m "chore: ready to merge"
   ```

4. **Mudar para main, atualizar e fazer merge**
   ```bash
   git checkout main
   git pull origin main
   git merge react-migration
   git push origin main
   ```

5. **Se algo correr mal em produção**
   ```bash
   git revert -m 1 HEAD
   ```

### Dicas para Vercel

- O Vercel gera preview por branch. Valida sempre o preview da `react-migration` antes do merge.
- `vercel.json` na raiz já tem rewrite para `index.html` (essencial para rotas `/co` e `/pr`).

## Dicas importantes

- **IDs únicos:** nunca repitas `id` dentro do mesmo array
- **Tabs válidas:** o `tab` de cada item tem de corresponder a algum `id` nas `tabs` da secção
- **Imagens em public/:** usa sempre caminho com `/` inicial (`/img/ficheiro.png`)
- **Nomes PascalCase:** componentes React mantêm PascalCase (já está correcto)
- **Fidelidade 100%:** se quiseres manter exactamente igual à versão antiga, copia os textos tal como estavam
- **Sem segredos:** nunca commits dados sensíveis
- **Commits pequenos:** se fizeres várias alterações, faz commits pequenos com mensagens descritivas (`feat: ...`, `fix: ...`, `refactor: ...`)
- **Arquitetura data-driven:** a grande vantagem agora é que **podes adicionar quase tudo só editando ficheiros em `src/data/`**. É este o fluxo que deve ser mantido.

---

*Criado para facilitar futuras actualizações. Manten este guia actualizado sempre que adicionares algo novo ao fluxo.*
