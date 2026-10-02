/* ════════════════════════════════════════════
   i18n-communication.js — Traduções (4 línguas)
   Uso: i18n.t('nav.title')  →  string
   Idioma por defeito: EN (site orientado a
   recrutadores internacionais).
════════════════════════════════════════════ */

const i18n = (() => {

    /* ── Dicionário ── */
    const dict = {

        en: {
            /* Navbar */
            'nav.title':      'Communicator',
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
            'sections.work':     'Work',
            'sections.contacts': 'Contacts',

            /* About Me */
            'about.who':  'WHO AM I?',
            'about.what': 'WHAT DO I DO?',
            'about.why':  'WHY DO I DO IT?',
            'about.who_intro': 'Greetings! My name is Charles Nuno and, besides being Angolan, I\'m a communicator by training, a creative by nature, a student by passion, and a polyglot by dedication. The images below capture some of the standout moments in my life as a communicator.',
            'about.what_intro': 'Whether through words, images, video, sound — verbally or visually — I know how to create impact that stirs emotion or, at the very least, holds people\'s attention.',
            'about.what_skill_1': 'Copywriting & Storytelling',
            'about.what_skill_2': 'Video Editing & Production',
            'about.what_skill_3': 'Graphic Design & Visual Identity',
            'about.what_skill_4': 'Content Strategy & Advertising',
            'about.why_intro': 'I believe I was born with one talent and several gifts — what\'s the difference? I\'ll only answer that in person. But I do have the talent to create and the gift to communicate (which includes both listening and speaking); and honestly, I don\'t think it\'s a coincidence that my name starts with creativity...',
            'about.acrostic_c': 'Creativity',
            'about.acrostic_h': 'Humility',
            'about.acrostic_a': 'Adaptability',
            'about.acrostic_r': 'Resilience',
            'about.acrostic_l': 'Leadership',
            'about.acrostic_e': 'Empathy',
            'about.acrostic_s': 'Sociability',
            'about.closing_pre': 'Now that you know a bit more about me, maybe it\'s time to check out my',
            'about.closing_post': '.',

            /* Work */
            'work.mc': 'Written MC & Copybattler',
            'work.rv': 'Content Creator & Video Editor',
            'work.dc': 'Designer & Copywriter',
            'work.open_link': 'Open project',
            'work.mc_intro': 'I started battling at 18, with zero experience. I went alone to watch the RRPL\'s 6th season final and felt right at home in that world. I always had a knack for Portuguese language class, especially lyrical writing, and that gave me the confidence to try. Eight months later, I returned to RRPL, not as a spectator, but as a gladiator.',
            'work.rv_intro': 'My first report was audio only. I wasn\'t let into the press conference, so I interviewed the fans stuck outside instead. I\'ve always loved American reports and documentaries, and learning English early helped me see how they hold an audience\'s attention. My first video report was at Cidadela Desportiva, but it was after covering the African MMA Championship that I realized I truly had a talent for this.',
            'work.dc_intro': 'Since I always found making art on a computer easier than my Visual Arts classes, I started creating pieces for my own news portal. I never saw myself doing journalism alone, but I discovered a knack for words through the academic papers I wrote. What fascinates me most is knowing that something I wrote or designed made someone feel or act.',

            'work.closing_pre': 'Now that you\'ve seen what I can do, maybe it\'s time we talked. You can reach me through my',
            'work.closing_post': '.',

            /* Skills (per work subsection) */
            'skills.title': 'Key Skills',
            'skills.mc.1': 'Improvisation',
            'skills.mc.2': 'Research',
            'skills.mc.3': 'Memorization',
            'skills.mc.4': 'Public Speaking',
            'skills.mc.5': 'Creative Writing',
            'skills.mc.6': 'Communication',
            'skills.rv.1': 'Storytelling',
            'skills.rv.2': 'Adobe Premiere Pro',
            'skills.rv.3': 'Sound Design',
            'skills.rv.4': 'Interviewing',
            'skills.rv.5': 'Scriptwriting',
            'skills.rv.6': 'CapCut',
            'skills.dc.1': 'Adobe Illustrator',
            'skills.dc.2': 'Canva',
            'skills.dc.3': 'Figma',
            'skills.dc.4': 'Content Writing',
            'skills.dc.5': 'Creativity',
            'skills.dc.6': 'Poet',

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
            'nav.title':      'Comunicador',
            'nav.lang':       'Português',
            'nav.lang_short': 'PT',
            'nav.theme':      'Claro',
            'nav.theme_dark': 'Escuro',
            'nav.exit':       'Sair',

            'sidebar.sections': 'Secções',

            'toc.title': 'Nesta página',

            'sections.about':    'Sobre Mim',
            'sections.work':     'Trabalhos',
            'sections.contacts': 'Contactos',

            'about.who':  'QUEM SOU?',
            'about.what': 'O QUE FAÇO?',
            'about.why':  'PORQUE FAÇO?',
            'about.who_intro': 'Saudações! O meu nome é Charles Nuno e, além de angolano, sou comunicador por formação, criativo por natureza, estudante por paixão e políglota por dedicação. As imagens abaixo captam alguns dos momentos marcantes da minha vida como comunicador.',
            'about.what_intro': 'Seja através de palavras, imagens, vídeo, som — verbal ou visualmente — sei criar impacto que desperta emoção ou, no mínimo, prende a atenção das pessoas.',
            'about.what_skill_1': 'Copywriting & Storytelling',
            'about.what_skill_2': 'Edição e Produção de Vídeo',
            'about.what_skill_3': 'Design Gráfico e Identidade Visual',
            'about.what_skill_4': 'Estratégia de Conteúdo e Publicidade',
            'about.why_intro': 'Acredito que nasci com um talento e vários dons — qual é a diferença? Só respondo pessoalmente. Mas tenho o talento de criar e o dom de comunicar (o que inclui tanto ouvir como falar); e, sinceramente, não acho que seja coincidência o meu nome começar por criatividade...',
            'about.acrostic_c': 'Criatividade',
            'about.acrostic_h': 'Humildade',
            'about.acrostic_a': 'Adaptabilidade',
            'about.acrostic_r': 'Resiliência',
            'about.acrostic_l': 'Liderança',
            'about.acrostic_e': 'Empatia',
            'about.acrostic_s': 'Sociabilidade',
            'about.closing_pre': 'Agora que sabes um pouco mais sobre mim, talvez seja altura de veres os meus',
            'about.closing_post': '.',

            'work.mc': 'Mestre de Cerimónia (MC) & Copybattler',
            'work.rv': 'Criador de Conteúdo e Editor de Vídeo',
            'work.dc': 'Designer e Copywriter',
            'work.open_link': 'Abrir projecto',
            'work.mc_intro': 'Comecei a batalhar aos 18 anos, com zero experiência. Fui sozinho assistir à final da 6.ª temporada da RRPL e senti-me em casa naquele mundo. Sempre tive jeito para Língua Portuguesa, sobretudo na escrita lírica, e isso deu-me confiança para tentar. Oito meses depois, voltei à RRPL não como espectador, mas como gladiador.',
            'work.rv_intro': 'A minha primeira reportagem foi só áudio: não me deixaram entrar na conferência de imprensa, então entrevistei os fãs que estavam fora. Sempre adorei reportagens e documentários norte-americanos, e aprender inglês cedo ajudou-me a perceber como prendem a atenção do público. A minha primeira reportagem em vídeo foi na Cidadela Desportiva, mas foi depois de cobrir o Campeonato Africano de MMA que percebi que tinha mesmo talento para isto.',
            'work.dc_intro': 'Como sempre achei mais fácil fazer arte no computador do que nas aulas de Artes Visuais, comecei a criar peças para o meu próprio portal de notícias. Nunca me vi a fazer apenas jornalismo, mas descobri um jeito para as palavras através dos trabalhos académicos que eu fazia. O que mais me fascina é saber que algo que escrevi ou desenhei fez alguém sentir ou agir.',

            'work.closing_pre': 'Agora que já viste o que sei fazer, talvez seja altura de conversarmos. Podes encontrar-me através dos meus',
            'work.closing_post': '.',

            /* Skills (per work subsection) */
            'skills.title': 'Competências-Chave',
            'skills.mc.1': 'Improviso',
            'skills.mc.2': 'Investigação',
            'skills.mc.3': 'Memorização',
            'skills.mc.4': 'Oratória',
            'skills.mc.5': 'Escrita Criativa',
            'skills.mc.6': 'Comunicação',
            'skills.rv.1': 'Storytelling',
            'skills.rv.2': 'Adobe Premiere Pro',
            'skills.rv.3': 'Design Sonoro',
            'skills.rv.4': 'Entrevistas',
            'skills.rv.5': 'Guionismo',
            'skills.rv.6': 'CapCut',
            'skills.dc.1': 'Adobe Illustrator',
            'skills.dc.2': 'Canva',
            'skills.dc.3': 'Figma',
            'skills.dc.4': 'Redação de Conteúdos',
            'skills.dc.5': 'Criatividade',
            'skills.dc.6': 'Poeta',

            'contacts.email':  'Email',
            'contacts.phone':  'Telefone',
            'contacts.social': 'Redes Sociais',

            'gallery.see_more': 'Ver mais',
            'gallery.see_less': 'Ver menos',

            'tagline': 'Sinta-se em casa.',
        },

        fr: {
            'nav.title':      'Communicateur',
            'nav.lang':       'Français',
            'nav.lang_short': 'FR',
            'nav.theme':      'Clair',
            'nav.theme_dark': 'Sombre',
            'nav.exit':       'Quitter',

            'sidebar.sections': 'Sections',

            'toc.title': 'Sur cette page',

            'sections.about':    'À propos',
            'sections.work':     'Travaux',
            'sections.contacts': 'Contacts',

            'about.who':  'QUI SUIS-JE ?',
            'about.what': 'QUE FAIS-JE ?',
            'about.why':  'POURQUOI LE FAIS-JE ?',
            'about.who_intro': 'Bonjour ! Je m\'appelle Charles Nuno et, outre le fait d\'être angolais, je suis communicant de formation, créatif par nature, étudiant par passion et polyglotte par dévouement. Les images ci-dessous capturent quelques moments marquants de ma vie de communicateur.',
            'about.what_intro': 'Que ce soit par les mots, les images, la vidéo, le son — verbalement ou visuellement — je sais créer un impact qui émeut ou, à tout le moins, captive l\'attention.',
            'about.what_skill_1': 'Copywriting & Storytelling',
            'about.what_skill_2': 'Montage et Production Vidéo',
            'about.what_skill_3': 'Design Graphique et Identité Visuelle',
            'about.what_skill_4': 'Stratégie de Contenu et Publicité',
            'about.why_intro': 'Je crois que je suis né avec un talent et plusieurs dons — quelle est la différence ? Je ne répondrai qu\'en personne. Mais j\'ai bien le talent de créer et le don de communiquer (ce qui inclut à la fois écouter et parler) ; et honnêtement, je ne crois pas que ce soit un hasard si mon nom commence par créativité...',
            'about.acrostic_c': 'Créativité',
            'about.acrostic_h': 'Humilité',
            'about.acrostic_a': 'Adaptabilité',
            'about.acrostic_r': 'Résilience',
            'about.acrostic_l': 'Leadership',
            'about.acrostic_e': 'Empathie',
            'about.acrostic_s': 'Sociabilité',
            'about.closing_pre': 'Maintenant que vous en savez un peu plus sur moi, il est peut-être temps de découvrir mes',
            'about.closing_post': '.',

            'work.mc': 'MC Rédactionnel & Copybattler',
            'work.rv': 'Créateur de Contenu & Monteur Vidéo',
            'work.dc': 'Designer & Copywriter',
            'work.open_link': 'Ouvrir le projet',
            'work.mc_intro': 'J\'ai commencé à faire des battles à 18 ans, sans aucune expérience. J\'étais allé seul assister à la finale de la 6e saison de la RRPL et je m\'étais senti chez moi dans cet univers. J\'ai toujours été à l\'aise en cours de portugais, surtout avec l\'écriture lyrique, ce qui m\'a donné confiance pour tenter ma chance. Huit mois plus tard, je suis retourné à la RRPL, non plus comme spectateur, mais comme gladiateur.',
            'work.rv_intro': 'Mon premier reportage n\'était qu\'en audio. Je n\'ai pas pu entrer à la conférence de presse, alors j\'ai interviewé les fans restés dehors. J\'ai toujours adoré les reportages et documentaires américains, et avoir appris l\'anglais tôt m\'a aidé à comprendre comment ils captivent l\'attention du public. Mon premier reportage vidéo, je l\'ai réalisé à Cidadela Desportiva, mais c\'est après avoir couvert le Championnat Africain de MMA que j\'ai compris que j\'avais vraiment du talent pour cela.',
            'work.dc_intro': 'Comme j\'ai toujours trouvé plus facile de créer sur ordinateur que dans mes cours d\'arts plastiques, j\'ai commencé à concevoir des visuels pour mon propre portail d\'actualités. Je ne me suis jamais vu faire uniquement du journalisme, mais j\'ai découvert un talent pour les mots à travers les travaux universitaires que je rédigeais. Ce qui me fascine le plus, c\'est de savoir que quelque chose que j\'ai écrit ou conçu a fait ressentir ou agir quelqu\'un.',

            'work.closing_pre': 'Maintenant que vous avez vu ce que je sais faire, peut-être est-il temps d\'en parler. Vous pouvez me joindre via mes',
            'work.closing_post': '.',

            /* Skills (per work subsection) */
            'skills.title': 'Compétences clés',
            'skills.mc.1': 'Improvisation',
            'skills.mc.2': 'Recherche',
            'skills.mc.3': 'Mémorisation',
            'skills.mc.4': 'Prise de Parole en Public',
            'skills.mc.5': 'Écriture Créative',
            'skills.mc.6': 'Communication',
            'skills.rv.1': 'Storytelling',
            'skills.rv.2': 'Adobe Premiere Pro',
            'skills.rv.3': 'Conception Sonore',
            'skills.rv.4': 'Interview',
            'skills.rv.5': 'Scénarisation',
            'skills.rv.6': 'CapCut',
            'skills.dc.1': 'Adobe Illustrator',
            'skills.dc.2': 'Canva',
            'skills.dc.3': 'Figma',
            'skills.dc.4': 'Rédaction de Contenus',
            'skills.dc.5': 'Créativité',
            'skills.dc.6': 'Poète',

            'contacts.email':  'E-mail',
            'contacts.phone':  'Téléphone',
            'contacts.social': 'Réseaux Sociaux',

            'gallery.see_more': 'Voir plus',
            'gallery.see_less': 'Voir moins',

            'tagline': 'Faites comme chez vous.',
        },

        zh: {
            'nav.title':      '传播者',
            'nav.lang':       '中文',
            'nav.lang_short': 'ZH',
            'nav.theme':      '浅色',
            'nav.theme_dark': '深色',
            'nav.exit':       '退出',

            'sidebar.sections': '章节',

            'toc.title': '本页内容',

            'sections.about':    '关于我',
            'sections.work':     '作品',
            'sections.contacts': '联系方式',

            'about.who':  '我是谁？',
            'about.what': '我做什么？',
            'about.why':  '为什么做？',
            'about.who_intro': '你好！我叫 Charles Nuno。除了安哥拉人的身份，我是一名受过专业训练的传播者、天生的创意人、热爱学习的学生，也是一位专注的多语者。下面的图片记录了我作为传播者和程序员生活中的一些高光时刻。',
            'about.what_intro': '无论是通过文字、图像、视频、声音还是代码——口头或视觉——我都懂得如何制造冲击力，唤起情感，或至少吸引人们的注意力。每个人都想脱颖而出，每家公司都想吸引注意力——所以我喜欢把自己看作一个握有恰如其分的"手铐"的人，能把注意力牢牢扣住。',
            'about.what_skill_1': '文案写作与叙事讲故事',
            'about.what_skill_2': '视频剪辑与制作',
            'about.what_skill_3': '平面设计与视觉形象',
            'about.what_skill_4': '内容策略与广告',
            'about.why_intro': '我相信我天生拥有一个天赋和几份礼物——有什么区别？我只当面回答。但我确实有创造的天赋和沟通的礼物（包括倾听与表达）；说实话，我不觉得我的名字以"创造"开头是巧合……',
            'about.acrostic_c': '创造力',
            'about.acrostic_h': '谦逊',
            'about.acrostic_a': '适应力',
            'about.acrostic_r': '韧性',
            'about.acrostic_l': '领导力',
            'about.acrostic_e': '同理心',
            'about.acrostic_s': '社交力',
            'about.closing_pre': '既然你对我有了更多了解，也许是时候看看我的',
            'about.closing_post': '。',

            'work.mc': '文案MC与Copybattler',
            'work.rv': '内容创作者与视频剪辑师',
            'work.dc': '设计师与文案',
            'work.open_link': '打开项目',
            'work.mc_intro': '我18岁那年开始参加说唱对战，之前完全没有经验。我独自一人去看了RRPL第六季的总决赛，却在那个世界里感受到了归属感。我一直很擅长葡萄牙语课程，尤其是抒情文本写作，这让我有了尝试的信心。八个月后，我重返RRPL的舞台，不再是观众，而是一名对战选手。',
            'work.rv_intro': '我的第一次报道其实只有音频。因为没能进入新闻发布会，我便转而采访了同样被拦在外面的球迷。我一直很喜欢美国的新闻报道和纪录片，而很早就学会英语也让我更能理解它们是如何抓住观众注意力的。我第一次拍摄视频报道是在Cidadela Desportiva体育场，但正是在报道了非洲综合格斗锦标赛之后，我才真正意识到自己在这方面确实有天赋。',
            'work.dc_intro': '因为我一直觉得在电脑上做设计，比上视觉艺术课容易得多，于是我开始为自己创办的新闻门户网站制作设计作品。我从没想过自己只做新闻工作，但在撰写学术论文的过程中，我发现自己对文字很有天赋。最让我着迷的，是知道自己写的文字或做的设计，真的让某个人产生了感受或行动。',

            'work.closing_pre': '看过我的作品后，如果感兴趣，欢迎通过',
            'work.closing_post': '与我联系。',

            /* Skills (per work subsection) */
            'skills.title': '核心技能',
            'skills.mc.1': '即兴发挥',
            'skills.mc.2': '调研',
            'skills.mc.3': '记忆力',
            'skills.mc.4': '公众演讲',
            'skills.mc.5': '创意写作',
            'skills.mc.6': '沟通表达',
            'skills.rv.1': '叙事讲故事',
            'skills.rv.2': 'Adobe Premiere Pro',
            'skills.rv.3': '音效设计',
            'skills.rv.4': '采访',
            'skills.rv.5': '脚本撰写',
            'skills.rv.6': 'CapCut',
            'skills.dc.1': 'Adobe Illustrator',
            'skills.dc.2': 'Canva',
            'skills.dc.3': 'Figma',
            'skills.dc.4': '内容写作',
            'skills.dc.5': '创造力',
            'skills.dc.6': '诗人',

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