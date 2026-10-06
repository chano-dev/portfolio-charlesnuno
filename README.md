# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## Como adicionar conteúdo

Este guia permite adicionar conteúdo sem IA, seguindo o padrão do projeto.

### Regras gerais
- `id` deve ser único em cada array
- `tab` tem de existir nas `tabs` da secção
- Imagens em `public/` com caminho começando por `/`
- Componentes em PascalCase
- Nunca commitar segredos
- Preferir chaves `*Key` para texto traduzido (`i18n/*.js`)

### Adicionar foto aos Archives
**Communicator:** `src/data/archives.js` → objeto com `id, tab, local, maps, ano, evento, descricao, img, alt`
**Developer:** `src/data/archivesDeveloper.js` → mesmo formato. Usa `hideTabs` no Developer.

### Projetos Developer (`/pr`)
Editar `src/data/projects.js` usando helper `project({...})`:
- `file` em `public/img/pr/`
- `highlights[]` opcional
- `link` e `linkLabelKey` opcionais

### Work Communicator (`/co`)
`src/data/work.js`: usar helpers `battle`, `report`, `design`.

### Citações
`src/data/quotes.js` (Communicator) ou `src/data/quotesDeveloper.js` (Developer).

### Contactos
`src/data/contacts.jsx`: adicionar a `EMAILS`, `PHONES` ou `SOCIALS`. `tel:` sem espaços.

### Textos de interface
Adicionar mesma chave em `src/i18n/en.js`, `pt.js`, `fr.js`, `zh.js`.

### Novo projeto/peça
Manter consistência com IDs e tabs existentes. `descricaoKey` prefere-se a `descricao` fixo.
