const yt = (id) => `https://img.youtube.com/vi/${id}/mqdefault.jpg`

/* ── MC & Copybattler ── */
const MC_SKILLS = [
  'Memorization', 'Research', 'Improvisation', 'Diction', 'Pressure management',
  'Creative Writing', 'Storytelling', 'Stage Presence', 'Public Speaking',
]
const battle = (youtube, ano, evento, descricao) => ({
  id: youtube, tab: 'rrpl', type: 'video', youtube,
  img: yt(youtube), alt: evento,
  contexto: 'Copybattler', ano, evento, descricao, skills: MC_SKILLS,
})

/* ── Content Creator & Video Editor ── */
const REPORT_SKILLS = ['Scriptwriting', 'Editing', 'Premiere Pro', 'Interviewing']
const report = (youtube, ano, evento, descricao, skills = REPORT_SKILLS) => ({
  id: youtube, tab: 'canal-cn', type: 'video', youtube,
  img: yt(youtube), alt: evento,
  contexto: 'Content Creator & Video Editor', ano, evento, descricao, skills,
})

/* ── Designer & Copywriter ── */
const design = (tab, id, file, contexto, ano, evento, descricao, skills, extra = {}) => ({
  id, tab, type: 'image', img: `/img/co/${file}`, alt: evento,
  contexto, ano, evento, descricao, skills, ...extra,
})

const TEU_ESTILO_DESC =
  "A short but very effective experience. I helped a friend sell clothes on Instagram, and that's where I learned, hands on, what copywriting actually is. She took the photos, I created the artwork, wrote the copy, and handled the sponsored posts. Seventy percent of them performed so well that she ended up running out of stock."
const TEU_ESTILO_SKILLS = ['Copywriting', 'Graphic Design', 'Canva', 'Social Media', 'Advertising']
const TEU_ESTILO = 'Copywriter & Designer'

const EDU_DESC =
  'A project I made to show a business owner who, at the time, only shared his products on WhatsApp and Facebook. The idea was to build a landing page that gave the brand a more professional look. I handled everything myself, the copy, the design, the palette, and the typography. The feedback was positive, but unfortunately, we never moved forward with the project.'
const EDU_SKILLS = ['Web Design', 'Landing Page', 'UI/UX', 'Figma', 'Copywriting']
const EDU_LINK = 'https://chano-dev.github.io/edukwanzas/'

const DC = 'Designer & Copywriter'

export const WORK_SECTIONS = [
  {
id: 'master-of-ceremony',
titleKey: 'work.mc',
introKey: 'work.mc_intro',
    tabsLabel: 'Filter by context',
    tabs: [{ id: 'rrpl', label: 'RRPL' }],
    items: [
      battle('t8RgnwAjzgQ', '2021', 'PROVA DOS 9 — Charles Nuno vs Million',
        'My very first battle, the one that got me into the league e made me meet Fly Squad'),
      battle('iEWoBgB2KGg', '2021', 'PROVA DOS 9 — Charles Nuno vs Codia',
        'My first battle on a big stage, Elinga Teatro, with over 200 people watching. This was where I lived out a dream: I was literally watching it happen in front of me.'),
      battle('I-Zn-NkwJP8', '2022', 'Valdemar vs Charles Nuno',
        'My first official battle. Everything before this counted as an opening battle or second-division bout, this was my first in the top division. I lost the battle, but I gained something that changed my life.'),
      battle('XW0gBVJ3aYk', '2022', 'Charles Nuno vs Seven Last',
        'My first official battle. Everything before this counted as an opening battle or second-division bout — this was my first in the top division. I lost the battle, but I gained something that changed my life.'),
      battle('k9MW4rzcPck', '2023', 'JEO MC vs Charles Nuno',
        "My second official battle — and my second loss. This one, I honestly thought I could've won, but I fumbled badly in the final round."),
      battle('lDymoxQiPL8', '2023', 'Colombiano vs Charles Nuno',
        'My last battle — also an opening one. Mentally, I already knew it would be the final one: I no longer saw myself up on that stage, or losing sleep rehearsing rhymes. Luckily, that creative spark for writing never disappeared — it just found a new stage.'),
    ],
skillKeys: ['skills.mc.1', 'skills.mc.2', 'skills.mc.3', 'skills.mc.4', 'skills.mc.5', 'skills.mc.6'],
  },

  {
id: 'content-creator-video-editor',
titleKey: 'work.rv',
introKey: 'work.rv_intro',
    tabsLabel: 'Filter by context',
    tabs: [{ id: 'canal-cn', label: 'My Youtube Channel' }],
    items: [
      report('n0iYm-6mwsE', '2026', 'I MADE A DEBATE TO GRADUATE.',
        "As a Communication student, our thesis project required us to put together both a theoretical paper and a practical piece. This video is the most recent one I made, and it's my practical piece. We simulated a televised debate show called Academic Debate, and the editing, the script, the graphics, even the idea of bringing in an interpreter, all of that was on me. My whole approach was thinking about what we could do to make our practical work stand out from the rest, in a good way.",
        ['Scriptwriting', 'Editing', 'Premiere Pro', 'Interviewing', 'After Effects', 'Artistic Direction']),
      report('MFDrm6kzmNw', '2023', 'Football Club Announces Scouting for Youth Aged 17 to 23',
        "My first video report, made with little experience and even less preparation. I found out a club was holding tryouts for new players and decided to go film it, together with my friend, who was the cameraman. Back then I didn't know much about editing, so my friend handled that part while I just tagged along, laying out how the narrative should flow. I loved the experience, and it gave me the energy and motivation to keep going."),
      report('3ObdAiyEu9I', '2023', 'Angola hosted the 6th African MMA Championship',
        "My second video report, this time with more preparation. I didn't know much about mixed martial arts, unfortunately, but I already had a much better sense of what I was doing. What I enjoyed most was getting to interview fighters from other countries, including talking with them in English, which wasn't all that great back then."),
      report('DmryssRftK4', '2025', 'WHEN TWO FRIENDS LOVE EACH OTHER VERY MUCH',
        'I made this report for a school assignment, for the Art and Image Editing course. It was the first video I edited completely on my own, and where I really got to play around with soundtracks. By the time I was filming, I was already putting the piece together in my head. This was the video that got me to actually understand Adobe Premiere Pro.'),
      report('AjZK7Dn13N8', '2026', 'Things are tough... February 14th',
        'I also made this one for a school assignment, but this time editing and putting the pieces together was easy. I drew inspiration from a French YouTuber to pick the theme and the questions.'),
    ],
skillKeys: ['skills.rv.1', 'skills.rv.2', 'skills.rv.3', 'skills.rv.4', 'skills.rv.5', 'skills.rv.6'],
  },

  {
id: 'designer-copywriter',
titleKey: 'work.dc',
introKey: 'work.dc_intro',
    tabsLabel: 'Filter by context',
    tabs: [
      { id: 'charles-nuno', label: 'Charles Nuno' },
      { id: 'molley-e-eventos', label: 'Molley e Eventos' },
      { id: 'edu-kwanzas', label: 'Edu Kwanzas' },
      { id: 'teu-estilo', label: 'Teu Estilo' },
    ],
    items: [
      /* Molley e Eventos */
      design('molley-e-eventos', 'molley-logo', 'LOGO-molley.png', DC, '2026', 'Logo',
        "The new logo drew on two sources of inspiration: the company's past logos and the titles of Disney movies, which usually feature the movie's name, the main character's colors, and a symbol representing it. Here, that symbol is balloons and children's parties, so the name became part of the logo itself, technically an imagotype.",
        ['Graphic Design', 'Illustrator', 'Figma', 'Branding', 'Visual Identity']),
      design('molley-e-eventos', 'molley-card', 'business-card-molley.png', DC, '2026', 'Business Card',
        "A finished, ready-to-approve business card for Molley Eventos, a children's party decoration business. Unlike my own card, both sides here lean into color, matching the joy a kids' party is supposed to bring. The back carries her name, role, contacts, and a personal touch, a reference to Psalm 91:1, taken straight from the vinyl sign that hung inside her physical store, since most of her clients meet her directly.",
        ['Copywriting', 'Graphic Design', 'Illustrator', 'Figma', 'Branding', 'Visual Identity']),
      design('molley-e-eventos', 'molley-pattern', 'background-pattern-molley.png', DC, '2026', 'Background Pattern',
        "A modular pattern designed for Molley Eventos' packaging, bags, boxes, and paper goods. Built around the balloon's string as a recurring arc, echoing the shape of the word Molley itself, with scattered party elements layered above it. The arc gives the busy confetti-style details some structure, so the pattern stays playful without feeling chaotic.",
        ['Graphic Design', 'Canva', 'Illustrator', 'Figma', 'Branding', 'Visual Identity']),
      design('molley-e-eventos', 'molley-palette', 'palette-molley.png', DC, '2026', 'Color Palette',
        "A palette inspired by watercolor tones, the kind used in Arts and Crafts classes in Angola. Yellow is the main color, the color of joy, representing the sun, and the logo was designed to look like it's floating in the air, as if the balloon were drifting alongside the banners and the name.",
        ['Copywriting', 'Graphic Design', 'Canva', 'Illustrator', 'Figma', 'Branding', 'Visual Identity', 'Color Theory']),
      design('molley-e-eventos', 'molley-typo', 'typographies-branding-molley.png', DC, '2026', 'Typography',
        "A cute typography, almost as if the letters themselves were happy. Already designed, of course, for whenever Molley's website comes together, keeping the same visual identity as the rest of the brand.",
        ['Copywriting', 'Graphic Design', 'Canva', 'Instagram', 'Content Strategy']),

      /* Teu Estilo */
      design('teu-estilo', 'te-valentine', 'valentim-teuestilo-screenshot.png', TEU_ESTILO, '2025',
        'Valentine Post Copywriting & Design', TEU_ESTILO_DESC, TEU_ESTILO_SKILLS),
      design('teu-estilo', 'te-brecho', 'brecho-teuestilo-screenshot.png', TEU_ESTILO, '2025',
        'Brechó Post Copywriting & Design', TEU_ESTILO_DESC, TEU_ESTILO_SKILLS),
      design('teu-estilo', 'te-newyear', 'newyear-teuestilo-screenshot.png', TEU_ESTILO, '2024',
        'New Year Post Copywriting & Design', TEU_ESTILO_DESC, TEU_ESTILO_SKILLS),
      design('teu-estilo', 'te-shein', 'shein-teuestilo-screenshot.png', TEU_ESTILO, '2024',
        'Shein Post Copywriting & Design', TEU_ESTILO_DESC, TEU_ESTILO_SKILLS),
      design('teu-estilo', 'te-first', 'first-teuestilo-screenshot.png', TEU_ESTILO, '2024',
        'First Post Copywriting & Design', TEU_ESTILO_DESC, TEU_ESTILO_SKILLS),

      /* Edu Kwanzas */
      design('edu-kwanzas', 'edu-landing', 'edukwanzas.png', TEU_ESTILO, '2026',
        'Landing Page for Edu Kwanzas', EDU_DESC, EDU_SKILLS, { link: EDU_LINK }),
      design('edu-kwanzas', 'edu-palette', 'palette-edu.png', TEU_ESTILO, '2026',
        'Landing Page for Borrow Money Company', EDU_DESC, EDU_SKILLS, { link: EDU_LINK }),
      design('edu-kwanzas', 'edu-typo', 'typographies-edu.png', TEU_ESTILO, '2026',
        'Landing Page for Borrow Money Company', EDU_DESC, EDU_SKILLS, { link: EDU_LINK }),

      /* Charles Nuno */
      design('charles-nuno', 'cn-card', 'business-cards-branding-chano.png', DC, '2026', 'Business Card',
        'This business card plays with contrast: practical on one side, identity on the other. The front stays minimal, my name, a QR code linking to my site, and a number for urgent calls, no color, no distraction. The back tells the rest of the story: two Angola-shaped icons, one holding a tribal mask for Communicator, the other a robotic thinker for Developer, framed by a samakaka pattern border. The line beneath sums it up: good with words, good with code.',
        ['Brand Identity', 'Illustrator', 'Figma', 'Graphic Design', 'Business Card Design']),
      design('charles-nuno', 'cn-identity', 'cards-branding-chano.png', DC, '2026', 'Identity Cards',
        "These are the two identity cards that open my portfolio's gateway page, one per specialty. Each follows the same system: Angola's outline in the specialty's color, holding its symbol, a tribal mask for Communicator, a robotic thinker for Developer, framed by the samakaka pattern. The skills listed on the back set the tone before a visitor even picks a side. Two cards, one purpose: showing who I am before showing what I do.",
        ['Brand Identity', 'Illustrator', 'Figma', 'Graphic Design', 'Web Design']),
      design('charles-nuno', 'cn-palette', 'Palette-branding-chano.png', DC, '2026', 'Color Palette',
        "This palette comes from Angola's flag colors, but the process behind it was more technical than it looks. Both yellow and red have three shades each, one lighter, one even lighter, and one darker than the main tone, built specifically to work well across light and dark mode, borders and backgrounds included. For now, it's exclusive to my portfolio, but built to outlast it.",
        ['Brand Identity', 'Illustrator', 'Figma', 'Concept', 'Color Theory']),
      design('charles-nuno', 'cn-typo', 'typographies-branding-chano.png', DC, '2026', 'Typography',
        "The typography on my site, and across my brand, follows the same philosophy as the palette: simple, without effects, so content always stays the main character. I use different families depending on the role, one for headings, another for body text, and a more expressive, sign-like one for messages and notifications, the same one you see on my business card. It's the typography of my brand, wherever it shows up.",
        ['Brand Identity', 'Illustrator', 'Figma', 'Concept', 'Typography']),
      design('charles-nuno', 'cn-stickers', 'stickers-branding-chano.png', DC, '2026', 'Sticker Pack',
        'I built a WhatsApp sticker pack, one set for Communicator, one for Developer, covering greetings, exclamations, questions, thank yous, even a sticker with my IBAN, plus one with just the symbol, so people remember who they\'re chatting with. The goal was never to sell through them, but to make my WhatsApp conversations feel more personal and keep the brand present in every reply.',
        ['Brand Identity', 'Illustrator', 'Figma', 'Concept']),
      design('charles-nuno', 'cn-pattern', 'background-branding-chano.png', DC, '2026', 'Background Pattern',
        "A subtle background pattern built from my own initials, C and N, repeated as a soft monogram texture. It's meant to sit quietly behind the content, never louder than the words or the code, just enough presence to remind you whose site you're on.",
        ['Brand Identity', 'Illustrator', 'Figma', 'Concept']),
    ],
skillKeys: ['skills.dc.1', 'skills.dc.2', 'skills.dc.3', 'skills.dc.4', 'skills.dc.5', 'skills.dc.6'],
  },
]