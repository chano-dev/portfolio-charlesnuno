/* ════════════════════════════════════════════
   i18n-programming.js — Traduções (4 línguas)
   Uso: i18n.t('nav.title')  →  string
   Idioma por defeito: EN (site orientado a
   recrutadores internacionais).
   Elementos [FIXO] do handoff ficam fora daqui.
════════════════════════════════════════════ */

const i18n = (() => {

    /* ── Dicionário ── */
    const dict = {

        en: {
            /* Navbar */
            'nav.title':      'Developer',
            'nav.lang':       'English',
            'nav.lang_short': 'EN',
            'nav.theme':      'Light',
            'nav.theme_dark': 'Dark',
            'nav.exit':       'Exit',

            /* Sidebar */
            'sidebar.sections': 'Sections',

            /* TOC */
            'toc.title': 'On this page',

            /* Main sections */
            'sections.about':    'About Me',
            'sections.projects': 'Projects',
            'sections.contacts': 'Contacts',

            /* About Me */
            'about.who':  'WHO AM I?',
            'about.what': 'WHAT DO I DO?',
            'about.why':  'WHY DO I DO IT?',
            'about.who_intro': 'Greetings! My name is Charles Nuno and, besides being Angolan, I\'m a communicator by training, a creative by nature, a student by passion, and a polyglot by dedication. The images below capture some of the standout moments in my life as a developer.',
            'about.what_intro': 'Descartes once said "I think, therefore I am". Today it feels more like "I appear, therefore I am". I build digital solutions: if a problem can be solved with code, I consider it solved.',
            'about.what_skill_1': 'Product Pitching',
            'about.what_skill_2': 'Web Programming',
            'about.what_skill_3': 'Responsive Design',
            'about.what_skill_4': 'Problem Solving',
            'about.why_intro': 'On November 18, 2024, when I started my first web development course, I already had several ideas (I still do), but the main one was building a website for my mother\'s company. I looked at the global picture and realized that in developed countries, people my age already knew something about programming, while I, in an underdeveloped country, knew nothing. Fortunately, I don\'t study with only the Angolan context in mind. I have a talent for creating, and I see that with programming I can build something that might echo across the world, or at least help my own people if it doesn\'t go that far. And about that talent, I don\'t think it\'s a coincidence that my name starts with creativity.',
            'about.acrostic_c': 'Creativity',
            'about.acrostic_h': 'Humility',
            'about.acrostic_a': 'Adaptability',
            'about.acrostic_r': 'Resilience',
            'about.acrostic_l': 'Leadership',
            'about.acrostic_e': 'Empathy',
            'about.acrostic_s': 'Sociability',
            'about.closing_pre': 'Now that you know a bit more about me, maybe it\'s time to check out my',
            'about.closing_post': '.',

            /* Projects */
            'projects.fe': 'Front-End',
            'projects.be': 'Back-End',
            'projects.fe_intro': 'I classify as Front-End the projects focused on what the user sees and directly interacts with: interface, layout, responsiveness, and visual experience. It was the area I found most natural to grasp early on, likely thanks to my background in communication. The projects gathered here show how I use code to turn visual concepts into functional interfaces.',
            'projects.be_intro': 'I classify as Back-End the projects where logic, data, and what happens behind the interface carry more weight: databases, authentication, information processing. It\'s the area I\'m currently deepening my knowledge in, and where I feel there\'s still more ground to cover and master.',

            /* Project descriptions (lightbox) */
            'projects.p1_desc': 'A personal portfolio built to strengthen my online professional presence, split into two areas (Communicator and Developer) through a card-based system inspired by trading cards. I designed the entire interface in Figma before writing a single line of code, focusing on simplicity and authenticity for both technical and non-technical recruiters. The structure was built to scale, ready to support new sections and technologies down the line.',
            'projects.p2_desc': 'A landing page built as a product test for a fictional Angolan lending company. Money-related businesses tend to face early trust issues, so I focused on a solid, professional visual identity capable of building credibility on social media and standing out from the competition. The technical highlight is the interactive loan simulator, which calculates the total repayment amount in real time.',
            'projects.p3_desc': 'A landing page I built on my own initiative for an Angolan travel agency with no online presence, aiming to help it stand out from the competition with a clear, functional institutional page. This project also served as an experiment with vibe coding, with about 80% of the code generated through Lovable, while I kept creative control and reviewed the final result. The standout feature is the contact form, which sends messages directly to the company\'s WhatsApp.',
            'projects.p4_desc': 'A portfolio built in pairs as the final "Rush" challenge of 42 Luanda\'s Web Programming Discovery Piscine. Under serious time pressure, and while literally unwell on presentation day, I took the lead on both concept and execution, building an Olympus-themed site with my teammate Hercules and me as Apollo. This challenge later inspired the two-area gateway concept behind my current portfolio. The result: an on-time submission and certification from the country\'s leading programming school.',
            'projects.p5_desc': 'An internal management system built for my mother\'s events store, created to replace manual sales and rental logs with a digital process. It included a login system, sales and rental registration with automatic invoice generation, a customer database (addresses and IBAN), and a product database with autocomplete suggestions for faster entry. It was my first full-stack project deployed to production and the foundation of my back-end learning.',
            'projects.p6_desc': 'A local app built to solve a real problem from my work as a video editor: the difficulty of downloading videos, instrumentals, and backgrounds from YouTube. Just paste the link, and the app lets you download video or audio only, in multiple qualities, with an additional version that runs directly in the browser (Chrome and Edge). Automatic subtitles (using Python) are planned for a future update.',

            /* Skills (per project subsection) */
            'skills.title': 'Core Skills',
            'skills.fe.1': 'HTML5',
            'skills.fe.2': 'CSS3',
            'skills.fe.3': 'JavaScript',
            'skills.fe.4': 'Tailwind CSS',
            'skills.fe.5': 'UI/UX Design',
            'skills.fe.6': 'AI-Assisted Development',
            'skills.be.1': 'PHP',
            'skills.be.2': 'MySQL',
            'skills.be.3': 'JavaScript',
            'skills.be.4': 'Git',

            /* Project links */
            'work.open_link': 'Open project',
            'projects.open_github': 'View on GitHub',

            /* Transitions */
            'projects.closing_pre': 'Now that you\'ve seen what I build, maybe it\'s time we talked. You can reach me through my',
            'projects.closing_post': '.',

            /* Contacts */
            'contacts.email':  'Email',
            'contacts.phone':  'Phone',
            'contacts.social': 'Social Media',

            /* Gallery */
            'gallery.see_more': 'See more',
            'gallery.see_less': 'See less',

            /* Tagline (typewriter) */
            'tagline': 'Feel right at home.',
        },

        pt: {
            'nav.title':      'Programador',
            'nav.lang':       'Português',
            'nav.lang_short': 'PT',
            'nav.theme':      'Claro',
            'nav.theme_dark': 'Escuro',
            'nav.exit':       'Sair',

            'sidebar.sections': 'Secções',

            'toc.title': 'Nesta página',

            'sections.about':    'Sobre Mim',
            'sections.projects': 'Projetos',
            'sections.contacts': 'Contactos',

            'about.who':  'QUEM SOU?',
            'about.what': 'O QUE FAÇO?',
            'about.why':  'PORQUE FAÇO?',
            'about.who_intro': 'Saudações! O meu nome é Charles Nuno e, além de angolano, sou comunicador por formação, criativo por natureza, estudante por paixão e políglota por dedicação. As imagens abaixo captam alguns dos momentos marcantes da minha vida como desenvolvedor.',
            'about.what_intro': 'Descartes disse um dia "penso, logo existo". Hoje é mais como "apareço, logo existo". Crio soluções digitais: se um problema pode ser resolvido com código, considero-o resolvido.',
            'about.what_skill_1': 'Pitching de Produtos',
            'about.what_skill_2': 'Programação Web',
            'about.what_skill_3': 'Design Responsivo',
            'about.what_skill_4': 'Resolução de Problemas',
            'about.why_intro': 'No dia 18 de novembro de 2024, quando comecei o primeiro curso de programação web, já tinha várias ideias (ainda tenho), mas a principal era criar um site para a empresa da minha mãe. Analisei o panorama global e percebi que, nos países desenvolvidos, jovens da minha idade já sabiam alguma coisa sobre programação, enquanto eu, num país subdesenvolvido, não sabia nada. Felizmente, não estudo a pensar apenas no panorama angolano. Tenho talento para criar e vejo que, com a programação, posso criar algo que ecoe no mundo, e se não for tão longe, pelo menos poderei ajudar os meus com ela. E sobre o meu talento, não acho que seja coincidência o meu nome começar por criatividade.',
            'about.acrostic_c': 'Criatividade',
            'about.acrostic_h': 'Humildade',
            'about.acrostic_a': 'Adaptabilidade',
            'about.acrostic_r': 'Resiliência',
            'about.acrostic_l': 'Liderança',
            'about.acrostic_e': 'Empatia',
            'about.acrostic_s': 'Sociabilidade',
            'about.closing_pre': 'Agora que sabes um pouco mais sobre mim, talvez seja altura de veres os meus',
            'about.closing_post': '.',

            'projects.fe': 'Front-End',
            'projects.be': 'Back-End',
            'projects.fe_intro': 'Chamo de Front-End os projetos focados naquilo que o utilizador vê e com que interage diretamente: interface, layout, responsividade e experiência visual. Foi a área que me pareceu mais natural para entender no início, provavelmente pela minha bagagem em comunicação. Os projetos reunidos aqui mostram como uso código para transformar conceitos visuais em interfaces funcionais.',
            'projects.be_intro': 'Classifico como Back-End os projetos onde a lógica, os dados e o funcionamento por trás da interface ganham mais peso: bases de dados, autenticação, processamento de informação. É a área onde estou a aprofundar-me atualmente, e onde sinto que ainda tenho mais caminho para percorrer e dominar.',

            /* Descrições dos projetos (lightbox) */
            'projects.p1_desc': 'Portfólio pessoal criado para consolidar a minha presença profissional online, dividido em duas áreas (Communicator e Developer) através de um sistema de "cartas" inspirado em jogos de baralho. Desenhei toda a interface no Figma antes de escrever uma linha de código, com foco em simplicidade e autenticidade, tanto para recrutadores técnicos como não técnicos. A estrutura foi pensada para ser escalável, preparada para receber novas secções e tecnologias no futuro.',
            'projects.p2_desc': 'Landing page desenvolvida como teste de produto para uma credora angolana fictícia. Negócios ligados a dinheiro geram desconfiança quando são novos, por isso construí uma imagem visual sólida e profissional capaz de gerar confiança nas redes sociais e destacar a marca da concorrência. O destaque técnico é o simulador de crédito interativo, que calcula o valor total a pagar em tempo real.',
            'projects.p3_desc': 'Landing page criada por iniciativa própria para uma agência de viagens angolana sem presença online, com o objetivo de a ajudar a destacar-se da concorrência com uma página institucional clara e funcional. Este projeto serviu também para explorar vibe coding, com cerca de 80% do código gerado através da Lovable, mantendo o controlo criativo e de revisão do resultado final. A funcionalidade de destaque é o formulário de contacto, que envia mensagens diretamente para o WhatsApp da empresa.',
            'projects.p4_desc': 'Portfólio desenvolvido em dupla como desafio final ("Rush") da Discovery Piscine de Web Programming da 42 Luanda. Sob pressão de tempo, e literalmente doente no dia da apresentação, assumi a liderança de conceito e execução, criando um tema baseado no Monte Olimpo, com o meu colega Hércules e eu como Apolo. Foi este desafio que inspirou o conceito de duas áreas da gateway page do meu portfólio atual. Resultado: submissão dentro do prazo e certificação da maior escola de programação do país.',
            'projects.p5_desc': 'Sistema interno de gestão desenvolvido para a loja de eventos da minha mãe, criado para substituir o registo manual de vendas e alugueres por um processo digital. Incluía sistema de login, registo de vendas e alugueres com geração automática de faturas, base de dados de clientes (endereços e IBAN) e uma base de dados de artigos com preenchimento automático por sugestão. Foi o meu primeiro projeto full-stack lançado em produção e a base da minha aprendizagem em back-end.',
            'projects.p6_desc': 'Aplicação local criada para resolver um problema real do meu trabalho como editor de vídeo: a dificuldade em transferir vídeos, instrumentais e backgrounds do YouTube. Basta introduzir o link e a aplicação permite transferir vídeo ou apenas áudio, em várias qualidades, com uma versão adicional que corre diretamente no navegador (Chrome e Edge). Nas próximas atualizações, pretendo adicionar legendas automáticas (com Python).',

            'skills.title': 'Competências Principais',
            'skills.fe.1': 'HTML5',
            'skills.fe.2': 'CSS3',
            'skills.fe.3': 'JavaScript',
            'skills.fe.4': 'Tailwind CSS',
            'skills.fe.5': 'Design UI/UX',
            'skills.fe.6': 'Desenvolvimento Assistido por IA',
            'skills.be.1': 'PHP',
            'skills.be.2': 'MySQL',
            'skills.be.3': 'JavaScript',
            'skills.be.4': 'Git',

            'work.open_link': 'Abrir projeto',
            'projects.open_github': 'Ver no GitHub',

            'projects.closing_pre': 'Agora que já viste o que construo, talvez seja altura de conversarmos. Podes encontrar-me através dos meus',
            'projects.closing_post': '.',

            'contacts.email':  'Email',
            'contacts.phone':  'Telefone',
            'contacts.social': 'Redes Sociais',

            'gallery.see_more': 'Ver mais',
            'gallery.see_less': 'Ver menos',

            'tagline': 'Sinta-se em casa.',
        },

        fr: {
            'nav.title':      'Développeur',
            'nav.lang':       'Français',
            'nav.lang_short': 'FR',
            'nav.theme':      'Clair',
            'nav.theme_dark': 'Sombre',
            'nav.exit':       'Quitter',

            'sidebar.sections': 'Sections',

            'toc.title': 'Sur cette page',

            'sections.about':    'À propos',
            'sections.projects': 'Projets',
            'sections.contacts': 'Contacts',

            'about.who':  'QUI SUIS-JE ?',
            'about.what': 'QUE FAIS-JE ?',
            'about.why':  'POURQUOI LE FAIS-JE ?',
            'about.who_intro': 'Bonjour ! Je m\'appelle Charles Nuno et, outre le fait d\'être angolais, je suis communicant de formation, créatif par nature, étudiant par passion et polyglotte par dévouement. Les images ci-dessous capturent quelques moments marquants de ma vie de développeur.',
            'about.what_intro': 'Descartes a dit un jour « je pense, donc je suis ». Aujourd\'hui, c\'est plutôt « j\'apparais, donc je suis ». Je crée des solutions numériques : si un problème peut être résolu par le code, je le considère comme résolu.',
            'about.what_skill_1': 'Pitch de Produits',
            'about.what_skill_2': 'Programmation Web',
            'about.what_skill_3': 'Design Responsive',
            'about.what_skill_4': 'Résolution de Problèmes',
            'about.why_intro': 'Le 18 novembre 2024, quand j\'ai commencé mon premier cours de développement web, j\'avais déjà plusieurs idées (j\'en ai encore), mais la principale était de créer un site web pour l\'entreprise de ma mère. J\'ai analysé la situation dans son ensemble et j\'ai réalisé que, dans les pays développés, des jeunes de mon âge connaissaient déjà la programmation, tandis que moi, dans un pays sous-développé, je n\'y connaissais rien. Heureusement, je n\'étudie pas uniquement en pensant au contexte angolais. J\'ai le talent de créer, et je vois qu\'avec la programmation, je peux construire quelque chose qui résonne à travers le monde, ou du moins aider les miens si ce n\'est pas si loin. Et concernant ce talent, je ne pense pas que ce soit une coïncidence si mon nom commence par créativité.',
            'about.acrostic_c': 'Créativité',
            'about.acrostic_h': 'Humilité',
            'about.acrostic_a': 'Adaptabilité',
            'about.acrostic_r': 'Résilience',
            'about.acrostic_l': 'Leadership',
            'about.acrostic_e': 'Empathie',
            'about.acrostic_s': 'Sociabilité',
            'about.closing_pre': 'Maintenant que vous en savez un peu plus sur moi, il est peut-être temps de découvrir mes',
            'about.closing_post': '.',

            'projects.fe': 'Front-End',
            'projects.be': 'Back-End',
            'projects.fe_intro': 'J\'appelle Front-End les projets centrés sur ce que l\'utilisateur voit et avec quoi il interagit directement : interface, mise en page, responsivité et expérience visuelle. C\'est le domaine qui m\'a semblé le plus naturel à comprendre au début, probablement grâce à mon bagage en communication. Les projets réunis ici montrent comment j\'utilise le code pour transformer des concepts visuels en interfaces fonctionnelles.',
            'projects.be_intro': 'Je classe comme Back-End les projets où la logique, les données et ce qui se passe derrière l\'interface prennent le dessus : bases de données, authentification, traitement de l\'information. C\'est le domaine dans lequel j\'approfondis mes connaissances actuellement, et où je sens qu\'il me reste encore beaucoup de chemin à parcourir et à maîtriser.',

            /* Descriptions des projets (lightbox) */
            'projects.p1_desc': 'Un portfolio personnel conçu pour renforcer ma présence professionnelle en ligne, divisé en deux domaines (Communicateur et Développeur) à travers un système de cartes inspiré des jeux de cartes à collectionner. J\'ai conçu toute l\'interface dans Figma avant d\'écrire la moindre ligne de code, avec un souci de simplicité et d\'authenticité, autant pour les recruteurs techniques que non techniques. La structure a été pensée pour évoluer, prête à accueillir de nouvelles sections et technologies à l\'avenir.',
            'projects.p2_desc': 'Une landing page réalisée comme test produit pour une société de crédit angolaise fictive. Les activités liées à l\'argent suscitent souvent de la méfiance au début, alors j\'ai travaillé une identité visuelle solide et professionnelle, capable d\'inspirer confiance sur les réseaux sociaux et de se démarquer de la concurrence. La pièce maîtresse technique est le simulateur de crédit interactif, qui calcule le montant total à rembourser en temps réel.',
            'projects.p3_desc': 'Une landing page créée de ma propre initiative pour une agence de voyages angolaise sans présence en ligne, avec l\'objectif de l\'aider à se démarquer grâce à une page institutionnelle claire et fonctionnelle. Ce projet m\'a aussi servi d\'expérimentation de vibe coding : environ 80 % du code a été généré via Lovable, tout en gardant le contrôle créatif et la révision du résultat final. La fonctionnalité phare est le formulaire de contact, qui envoie les messages directement sur le WhatsApp de l\'entreprise.',
            'projects.p4_desc': 'Un portfolio réalisé en binôme comme défi final (« Rush ») de la Discovery Piscine de Programmation Web de 42 Luanda. Sous forte pression de temps, et littéralement malade le jour de la présentation, j\'ai pris la tête du concept et de l\'exécution, en créant un thème inspiré du mont Olympe, avec mon coéquipier Hércules et moi-même en Apollon. Ce défi a ensuite inspiré le concept de deux domaines derrière la page passerelle de mon portfolio actuel. Résultat : un rendu à temps et une certification de la plus grande école de programmation du pays.',
            'projects.p5_desc': 'Un système de gestion interne développé pour la boutique d\'événementiel de ma mère, créé pour remplacer les registres manuels de ventes et de locations par un processus numérique. Il comprenait un système de connexion, l\'enregistrement des ventes et des locations avec génération automatique de factures, une base de données clients (adresses et IBAN) et une base de données d\'articles avec remplissage automatique par suggestions pour accélérer la saisie. C\'était mon premier projet full-stack mis en production et la base de mon apprentissage du back-end.',
            'projects.p6_desc': 'Une application locale créée pour résoudre un vrai problème lié à mon travail de monteur vidéo : la difficulté de télécharger des vidéos, des instrumentales et des arrière-plans depuis YouTube. Il suffit de coller le lien, et l\'application permet de télécharger la vidéo ou l\'audio seul, en plusieurs qualités, avec une version supplémentaire qui fonctionne directement dans le navigateur (Chrome et Edge). Les sous-titres automatiques (avec Python) sont prévus pour une prochaine mise à jour.',

            'skills.title': 'Compétences principales',
            'skills.fe.1': 'HTML5',
            'skills.fe.2': 'CSS3',
            'skills.fe.3': 'JavaScript',
            'skills.fe.4': 'Tailwind CSS',
            'skills.fe.5': 'Design UI/UX',
            'skills.fe.6': 'Développement Assisté par IA',
            'skills.be.1': 'PHP',
            'skills.be.2': 'MySQL',
            'skills.be.3': 'JavaScript',
            'skills.be.4': 'Git',

            'work.open_link': 'Ouvrir le projet',
            'projects.open_github': 'Voir sur GitHub',

            'projects.closing_pre': 'Maintenant que vous avez vu ce que je construis, peut-être est-il temps d\'en parler. Vous pouvez me joindre via mes',
            'projects.closing_post': '.',

            'contacts.email':  'E-mail',
            'contacts.phone':  'Téléphone',
            'contacts.social': 'Réseaux Sociaux',

            'gallery.see_more': 'Voir plus',
            'gallery.see_less': 'Voir moins',

            'tagline': 'Faites comme chez vous.',
        },

        zh: {
            'nav.title':      '开发者',
            'nav.lang':       '中文',
            'nav.lang_short': 'ZH',
            'nav.theme':      '浅色',
            'nav.theme_dark': '深色',
            'nav.exit':       '退出',

            'sidebar.sections': '章节',

            'toc.title': '本页内容',

            'sections.about':    '关于我',
            'sections.projects': '项目',
            'sections.contacts': '联系方式',

            'about.who':  '我是谁？',
            'about.what': '我做什么？',
            'about.why':  '为什么做？',
            'about.who_intro': '你好！我叫 Charles Nuno。除了安哥拉人的身份，我是一名受过专业训练的传播者、天生的创意人、热爱学习的学生，也是一位专注的多语者。下面的图片记录了我作为开发者生活中的一些高光时刻。',
            'about.what_intro': '笛卡尔曾说过"我思故我在"。今天更像"我在场，故我在"。我创造数字化解决方案：凡是代码能解决的问题，在我看来都算解决了。',
            'about.what_skill_1': '产品推介',
            'about.what_skill_2': '网页编程',
            'about.what_skill_3': '响应式设计',
            'about.what_skill_4': '问题解决',
            'about.why_intro': '2024年11月18日，当我开始第一个网页开发课程的时候，我已经有了不少想法（现在也是），但最主要的那个是为我母亲的公司做一个网站。分析了全局之后我意识到：在发达国家，我这个年龄的年轻人已经懂一些编程，而身处欠发达国家的我却对此一无所知。幸运的是，我的学习并不只着眼于安哥拉。我有创造的天赋，我知道借助编程，我可以创造出在世界上引起回响的东西；即使走不了那么远，至少也能帮助我的同胞。至于这份天赋，我不觉得我的名字以"创造"开头是巧合。',
            'about.acrostic_c': '创造力',
            'about.acrostic_h': '谦逊',
            'about.acrostic_a': '适应力',
            'about.acrostic_r': '韧性',
            'about.acrostic_l': '领导力',
            'about.acrostic_e': '同理心',
            'about.acrostic_s': '社交力',
            'about.closing_pre': '既然你对我有了更多了解，也许是时候看看我的',
            'about.closing_post': '。',

            'projects.fe': '前端',
            'projects.be': '后端',
            'projects.fe_intro': '我把那些聚焦于用户所见、所交互部分的归为前端项目：界面、布局、响应式与视觉体验。这是我最早上手时觉得最自然的领域，大概得益于我的传播学底子。这里收录的项目展示了我如何用代码把视觉概念转化为功能完备的界面。',
            'projects.be_intro': '我把那些逻辑、数据和界面背后的运作占更大比重的项目归为后端：数据库、身份验证、信息处理。这是我现在正在深入钻研的方向，我也清楚自己还有更长的路要走、更多的东西要掌握。',

            /* 项目描述（灯箱） */
            'projects.p1_desc': '为巩固我的线上职业形象而做的个人作品集，通过受集换式卡牌启发的“卡片”系统分为两个领域（传播者与开发者）。在写下第一行代码之前，我先在 Figma 中完成了整个界面设计，兼顾技术型与非技术型招聘者，追求简洁与真实。整体结构以可扩展为目标，随时可以容纳未来的新板块与新技术。',
            'projects.p2_desc': '为一家虚构的安哥拉借贷公司打造的落地页，作为产品测试。与钱相关的新生意容易让人产生不信任感，所以我着力打造扎实、专业的视觉形象，使其能在社交媒体上建立可信度并与竞品拉开差距。技术亮点是交互式贷款模拟器，可实时计算还款总额。',
            'projects.p3_desc': '我主动为一家没有线上曝光的安哥拉旅行社制作的落地页，目标是帮助它用一个清晰、实用的机构页面从竞争中脱颖而出。这个项目也是一次 vibe coding 实验：约80%的代码由 Lovable 生成，而创意把控和最终审核由我完成。最亮眼的功能是联系表单，信息会直接发送到公司的 WhatsApp。',
            'projects.p4_desc': '与搭档合作完成的旧版作品集，是42卢安达（42 Luanda）网页编程 Discovery Piscine 的期末挑战赛（Rush）。在时间紧迫、答辩当天还生着病的情况下，我主导了概念和执行，制作了一个奥林匹斯山主题的网站，我和搭档 Hércules 分别饰演赫拉克勒斯与阿波罗。正是这次挑战启发了我现在作品集网关页的双领域概念。最终：按时提交，并拿到了这所全国顶尖编程学校的认证。',
            'projects.p5_desc': '为我母亲的派对用品店开发的内部管理系统，用数字化流程取代手工登记的销售与租赁记录。包含登录系统、带自动生成发票的销售与租赁登记、客户数据库（地址与 IBAN），以及支持自动补全建议以加快录入的商品数据库。这是我的第一个上线生产的全栈项目，也是我后端学习的基石。',
            'projects.p6_desc': '为解决我做视频剪辑工作中的真实痛点而做的本地应用：从 YouTube 下载视频、伴奏和背景素材很麻烦。只需粘贴链接，应用就能下载视频或仅音频，支持多种画质，另有一个可直接在浏览器中运行的版本（Chrome 和 Edge）。后续更新计划用 Python 加入自动字幕功能。',

            'skills.title': '核心技能',
            'skills.fe.1': 'HTML5',
            'skills.fe.2': 'CSS3',
            'skills.fe.3': 'JavaScript',
            'skills.fe.4': 'Tailwind CSS',
            'skills.fe.5': 'UI/UX 设计',
            'skills.fe.6': 'AI 辅助开发',
            'skills.be.1': 'PHP',
            'skills.be.2': 'MySQL',
            'skills.be.3': 'JavaScript',
            'skills.be.4': 'Git',

            'work.open_link': '打开项目',
            'projects.open_github': '在 GitHub 查看',

            'projects.closing_pre': '看过我做的东西之后，如果感兴趣，欢迎通过',
            'projects.closing_post': '与我联系。',

            'contacts.email':  '电子邮件',
            'contacts.phone':  '电话',
            'contacts.social': '社交网络',

            'gallery.see_more': '查看更多',
            'gallery.see_less': '收起',

            'tagline': '宾至如归。',
        },
    };

    /* ── Língua activa (lida do <html data-lang>) ── */
    let currentLang = document.documentElement.getAttribute('data-lang') || 'en';

    /* ── API pública ── */
    return {

        /**
         * Devolve a string traduzida para a língua activa.
         * Se a chave não existir, cai para EN e depois devolve a própria chave
         * (fallback visível, útil durante o desenvolvimento).
         */
        t(key) {
            return (dict[currentLang] && dict[currentLang][key])
                || (dict['en'] && dict['en'][key])
                || key;
        },

        /** Muda a língua activa e actualiza o DOM */
        setLang(lang) {
            if (!dict[lang]) return;
            currentLang = lang;
            document.documentElement.setAttribute('data-lang', lang);
            this.applyAll();
        },

        getLang() {
            return currentLang;
        },

        /** Lista de línguas disponíveis (ordem do dropdown) */
        langs: ['en', 'pt', 'fr', 'zh'],

        /**
         * Percorre todos os elementos com [data-i18n] e actualiza o textContent.
         * Elementos com [data-i18n-placeholder] actualizam o placeholder.
         */
        applyAll() {
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                const value = this.t(key);
                if (value) el.textContent = value;
            });
            document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
                const key = el.getAttribute('data-i18n-placeholder');
                const value = this.t(key);
                if (value) el.setAttribute('placeholder', value);
            });
        },
    };

})();
