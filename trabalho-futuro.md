# Portfólio Charles Nuno: incongruências e pendentes

*Lista viva de erros conhecidos, decisões em aberto e contradições entre ficheiros. Estado em 6 de outubro de 2026. Complementa o documento "contexto e plano de trabalho".*

## Como ler

- **Decisão** significa que falta o Charles escolher. Não corrigir sem perguntar.
- **Corrigir** significa que a resposta é clara e só falta executar.
- **Resolvido** fica registado para não se repetir.
- Prioridade: **A** (antes do merge), **B** (logo a seguir), **C** (quando houver tempo).

## 1. Decisões já tomadas (não reabrir)

| Assunto | Decisão do Charles |
| --- | --- |
| Versão oficial dos textos em inglês (introduções do Work e `about.what_intro`) | A do dicionário (mais curta, "returned to RRPL, not as a spectator, but as a gladiator") |
| Reescrever as introduções em PT, FR e ZH para acompanharem o inglês | Não é preciso, já contam a mesma história que o dicionário inglês |
| Alinhar o chinês do About Me com o inglês | Não por agora (ver item 2.5, que fica como pendente) |
| Traduzir descrições das galerias | Não por agora; vai ser feito depois, com apoio de outra IA |
| Travessões (em dashes) nos textos existentes | Deixar como está por agora |
| Meta tags por idioma | Fica para uma atualização futura |
| Typewriter reagir ao idioma | Não. Continua a ciclar pelas 4 línguas |
| Descrição repetida do card "Seven Last" (igual à do "Valdemar") | Manter |
| Dois cards do Edu Kwanzas com o mesmo título | Manter |
| `aria-label`s `[WORK_ITEM_TITLE]` por preencher no HTML antigo | Resolvido: o React gera o label a partir do título do item |

## 2. Textos e traduções

| # | Problema | Onde | Tipo | Prio |
| --- | --- | --- | --- | --- |
| 2.1 | O PT de `work.mc` perdeu "Written": diz "Mestre de Cerimónia (MC) & Copybattler", enquanto EN e FR mantêm a ideia de MC escrito ("MC Rédactionnel") | `src/i18n/pt.js` | Decisão | B |
| 2.2 | O título do bloco "Key Skills" nunca foi decidido. O Charles pensou em "Major Skills" (sem certeza) e rejeitou "Skills" sozinho | `skills.title` nos 4 ficheiros | Decisão | B |
| 2.3 | Dois nomes para a mesma skill: "Adobe Premiere Pro" na lista e "Premiere Pro" nas pílulas do modal. O mesmo com "Sound Design" (lista) e "Soundtrack" (pedido no documento de contexto original) | `skills.rv.*` e `work.js` | Decisão | B |
| 2.4 | A lista de skills do Copybattler que o Charles pediu era "Improvisation, Research, Memory, Public Speaking, Writing, Communication". O código tem "Memorization" e "Creative Writing". Falta confirmar qual vale | `skills.mc.3` e `skills.mc.5` | Decisão | B |
| 2.5 | O chinês de `about.who_intro` e `about.what_intro` fala de "programador", "código" e de uma metáfora de «手铐» que pertencem ao portefólio Developer. Aparece agora no Communicator em chinês | `src/i18n/zh.js` | Corrigir (o Charles adiou) | B |
| 2.6 | O inglês de `about.what_intro` no dicionário não tem "or code", ao contrário do HTML antigo. Decisão tomada: o dicionário é o oficial | `en.js` | Resolvido |  |
| 2.7 | Erro de ortografia no vídeo "PROVA DOS 9, Charles Nuno vs Million": "got me into the league **e** made me meet Fly Squad" (devia ser "and") | `src/data/work.js` | Corrigir | C |
| 2.8 | A skill "Instagram" e "Content Strategy" na peça "Typography" do Molley parecem vir de outro item (a peça é sobre tipografia) | `work.js`, item `molley-typo` | Decisão | C |
| 2.9 | As 5 peças da aba "Teu Estilo" partilham a mesma descrição e a mesma lista de skills | `work.js` | Decisão | C |
| 2.10 | O `contexto` do Edu Kwanzas usa "Copywriter & Designer", enquanto as outras peças de design usam "Designer & Copywriter" | `work.js` | Decisão | C |
| 2.11 | Texto fixo em inglês, sem chave de tradução: "Skills & Tools" e "Highlights" no modal, abas das galerias ("Archives", "RRPL", "My Youtube Channel", "Molley e Eventos", "Edu Kwanzas", "Teu Estilo", "Charles Nuno") e todos os `aria-label` ("Select language", "Open menu", "Close", etc.) | vários | Pendente | B |
| 2.12 | As citações do About Me estão só em inglês. O Charles quer que mudem com o idioma. Decidir caso a caso quais se traduzem (Génesis e "Renato Amoedo e Alan Scharmm" têm origem portuguesa) | `src/data/quotes.js` | Pendente | B |
| 2.13 | Textos dos itens das galerias (títulos e descrições) só existem em inglês | `archives.js`, `work.js` | Pendente (adiado) | B |
| 2.14 | Nome de cada idioma repetido em dois sítios: `nav.lang` nos dicionários e `OPTIONS` em `LangButton.jsx`. Se mudar um e esquecer o outro, ficam diferentes | `LangButton.jsx` | Corrigir | C |
| 2.15 | A chave `tagline` existe nos 4 dicionários mas não é usada (o typewriter lê de `taglines.js`) | `i18n/*.js`, `taglines.js` | Corrigir ou remover | C |
| 2.16 | Travessões em vários textos, contra a convenção do Charles de não as usar no corpo. Adiado por ele | `archives.js`, `work.js`, `i18n/*.js` | Adiado | C |

## 3. Contradições com o documento de contexto original

O primeiro documento de contexto está desatualizado em vários pontos. Quando se atualizar, ter em conta:

| # | O documento original diz | O código faz |
| --- | --- | --- |
| 3.1 | Sub-secções do Work: "Master of Ceremony & Copybattler", "Reporter & Video Editor", "Designer & Copywriter" | "Written MC & Copybattler", "Content Creator & Video Editor", "Designer & Copywriter" |
| 3.2 | O typewriter cicla por EN, FR, ZH, PT (a ordem do documento) | A tagline do Communicator cicla EN, FR, ZH, PT. A frase da home cicla PT, EN, FR, ZH |
| 3.3 | A gateway é só em inglês, sem i18n | A frase do typewriter da home tem 4 idiomas (o resto do texto da home é só em inglês) |
| 3.4 | "Reporter & Video Editor" com texto sobre como o Charles entrou na área | A introdução oficial passa a ser a do dicionário (decisão do Charles) |
| 3.5 | Pendência: remover do Archives as duas imagens que seriam exclusivas do Developer | Não estão no Archives atual (6 fotos). Confirmar com o Charles quais são e onde ficam no Developer |
| 3.6 | Pendência: trocar o estilo das skills do Communicator pelo layout simples do "What I Do", título novo e novas palavras | Feito quanto ao layout (`article-skills`) e às palavras. Falta decidir o título (2.2) |
| 3.7 | Pendência: parágrafo de transição de Work para Contacts | Feito (`work.closing_pre` e `work.closing_post`) |
| 3.8 | Pendência: Bebas Neue no typewriter da home e do Communicator, desktop e mobile | Home: aplicado. Communicator: aplicado na sidebar (visto nas capturas). Confirmar no drawer mobile |

## 4. Técnico e código

| # | Problema | Prio |
| --- | --- | --- |
| 4.1 | **CSS a vazar entre páginas.** `portfolio.css` é importado globalmente. Regras de `html` e `body` (altura fixa, overflow) podem impedir scroll na home a 100% de zoom. Solução proposta: prefixar com `html[data-portfolio]`. Confirmar se foi aplicada | A |
| 4.2 | `#root { display: contents }` está em CSS global. Deve ficar sob `html[data-portfolio]` para não afetar a home | A |
| 4.3 | `.cards-grid article:first-child` e `:last-child` definem as cores das cartas. Falha com 3 ou mais cartas | B (antes de criar cartas novas) |
| 4.4 | `Communicator.jsx` altera o `document.title` ao entrar e não o repõe ao sair, por isso a home pode ficar com o título "Communicator" | B |
| 4.5 | O `index.html` tem uma só cabeça (Open Graph, Twitter, canonical, título) para o site todo. As pré-visualizações de `/co` e `/pr` são iguais às da home. O `og:image` aponta para `fav-icon.png` com 1200x630 declarados, mas o ficheiro não tem essas dimensões | B |
| 4.6 | O `index.html` tem um único `theme-color` (claro). O site antigo tinha dois, para claro e escuro | C |
| 4.7 | O carrossel de citações, depois da última, volta ao início deslizando para trás (o antigo tinha loop contínuo). Sem `prefers-reduced-motion` | C |
| 4.8 | No `Quotes.jsx`, `step` é calculado uma vez no arranque e no redimensionamento. Se as fontes carregarem depois, a medida pode ficar curta | C |
| 4.9 | Funcionalidades do JS antigo não migradas: Skeleton de carregamento, suporte a TikTok no modal, bloco "Highlights" no modal, `data-link-label-key`, `data-desc-key`, `prefers-reduced-motion` | C (o Developer pode precisar de alguns) |
| 4.10 | O `Typewriter` recebe `texts` e está no array de dependências do efeito. Os arrays têm de ser constantes fora do componente, senão o efeito reinicia sem parar. Documentar no README | C |
| 4.11 | A pesquisa de `.label` para trocar por `t(...)` apanhou usos que não deviam ser traduzidos (`Contacts`, `LangButton`, `Gallery`). Regra: só `labelKey` de secções e sub-links usa `t()` | Resolvido |
| 4.12 | Um erro de digitação em `tab`, `id` ou caminho de imagem faz o item desaparecer sem aviso | B (validação em desenvolvimento) |
| 4.13 | Estrutura: tudo em `components/communicator/`, mesmo o que serve a ambos os portefólios. Ver Fase B do plano | B |
| 4.14 | Os atributos `data-portfolio`, `data-theme` e `data-lang` no `<html>` são definidos por sítios diferentes (Communicator e os dois Context). `data-theme` e `data-lang` ficam quando se vai para a home. É inofensivo hoje, mas fica registado | C |

## 5. Conteúdo do HTML antigo já corrigido na migração

Para não serem reintroduzidos se alguém copiar do legado:

- Faltava espaço em `src="..."alt=` no logo do Molley.
- `role="listitem"` em `<button>` e `role="list"` repetido: simplificado.
- `tel:+244 949 734 873` com espaços: agora `tel:+244949734873` (idem para o outro número).
- `illustractor` passou a `Illustrator`.
- Os sub-links do drawer usam `href="#id"` normal. Se o scroll nativo falhar dentro do card central, trocar por `scrollIntoView`.
- A bússola do mobile levava ao topo da secção em vez do índice. Mitigação proposta: `scroll-margin-top` em `.toc-mobile`. Confirmar no telemóvel.

## 6. Pendentes de produto (não são erros)

1. Converter o Developer (`/pr`). Bloqueia o merge.
2. Secção de empresas e clientes na página inicial.
3. Cartas da home como componentes de dados (Professor, Tradutor, etc.).
4. Tradução completa do modal e das citações.
5. README com guia de conteúdo.
6. Meta tags e título por rota e por idioma.
7. Rever travessões e atualizar o documento de contexto original.

## 7. Perguntas que a outra IA deve fazer ao Charles

Estas respostas não estão em lado nenhum e não devem ser inventadas:

1. Qual é o título final do bloco de skills?
2. A lista final de skills de cada sub-secção, e se "Memory" substitui "Memorization".
3. Quais são as duas imagens do Archives do Developer?
4. Datas, ferramentas e links de cada projeto do Developer.
5. Quais empresas, com que logótipo e texto, entram na home.
6. Que citações se traduzem e quais ficam no original.
