const project = ({ file, ...rest }) => ({ type: 'image', img: `/img/pr/${file}`, ...rest })

const GITHUB_MOLLEY = 'https://github.com/chano-dev/molleyoffice'
const GITHUB_DOWNLOADER = 'https://github.com/chano-dev/youtube-downloader'
const LIVE_EDUKWANZAS = 'https://chano-dev.github.io/edukwanzas/'
const LIVE_CANDGEST = 'https://chano-dev.github.io/candgest-viagens/'
const LIVE_OLD_PORTFOLIO = 'https://chano-dev.github.io/web-practice/'

const GITHUB_LABEL_KEY = 'pr.projects.open_github'

export const PROJECT_SECTIONS = [
  {
    id: 'front-end',
    titleKey: 'pr.projects.fe',
    introKey: 'pr.projects.fe_intro',
    tabsLabel: 'Filter by project',
    tabs: [
      { id: 'charles-nuno', label: 'Charles Nuno' },
      { id: 'edukwanzas', label: 'EduKwanzas' },
      { id: 'candgest-viagens', label: 'Candgest Viagens' },
      { id: 'portfolio-antigo', label: 'Old Portfolio' },
    ],
    items: [
      project({
        id: 'charles-nuno',
        tab: 'charles-nuno',
        file: 'portfolio-atual.png',
        alt: 'Screenshot of the Charles Nuno portfolio gateway page',
        contexto: 'Front-End',
        ano: '2026',
        evento: 'Personal Developer Portfolio, Front to Back',
        descricaoKey: 'pr.projects.p1_desc',
        skills: ['HTML5', 'CSS3', 'JavaScript', 'Figma', 'AI-Assisted Development', 'Web Design'],
        highlights: [
          'Two-Portfolio Card System',
          'Figma-First Design Process',
          'Responsive Across Mobile, Tablet & Desktop',
          'Scalable Architecture',
        ],
      }),
      project({
        id: 'edukwanzas',
        tab: 'edukwanzas',
        file: 'edukwanzas.png',
        alt: 'Screenshot of the EduKwanzas landing page',
        contexto: 'Front-End',
        ano: '2026',
        evento: 'Loan Simulator Landing Page for a Fintech Startup',
        descricaoKey: 'pr.projects.p2_desc',
        skills: ['HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript', 'Figma', 'UI/UX Design'],
        highlights: [
          'Interactive Loan Simulator',
          'Mobile-First Responsive Design',
          'Trust-Driven Visual Identity',
          'Custom Figma Illustrations',
        ],
        link: LIVE_EDUKWANZAS,
      }),
      project({
        id: 'candgest-viagens',
        tab: 'candgest-viagens',
        file: 'candgest-viagens.png',
        alt: 'Screenshot of the Candgest Viagens landing page',
        contexto: 'Front-End',
        ano: '2026',
        evento: 'Travel Agency Landing Page, Built with AI',
        descricaoKey: 'pr.projects.p3_desc',
        skills: ['HTML5', 'CSS3', 'JavaScript', 'AI-Assisted Development'],
        highlights: [
          'WhatsApp-Integrated Contact Form',
          'AI-Assisted Rapid Prototyping',
          'Institutional Landing Page',
          'Subtle Scroll Animations',
        ],
        link: LIVE_CANDGEST,
      }),
      project({
        id: 'portfolio-antigo',
        tab: 'portfolio-antigo',
        file: 'portfolio-antigo.png',
        alt: 'Screenshot of the Olympus-themed portfolio built at 42 Luanda',
        contexto: 'Front-End',
        ano: '2026',
        evento: 'A Portfolio Built Under Pressure, at 42 Luanda',
        descricaoKey: 'pr.projects.p4_desc',
        skills: ['HTML5', 'CSS3', 'Team Collaboration', 'Time Management'],
        highlights: [
          'Olympus-Themed Concept',
          'Hackathon-Style Challenge',
          'Two-Person Collaboration',
          'CV-Style',
        ],
        link: LIVE_OLD_PORTFOLIO,
      }),
    ],
    skillKeys: [
      'pr.skills.fe.1',
      'pr.skills.fe.2',
      'pr.skills.fe.3',
      'pr.skills.fe.4',
      'pr.skills.fe.5',
      'pr.skills.fe.6',
    ],
  },

  {
    id: 'back-end',
    titleKey: 'pr.projects.be',
    introKey: 'pr.projects.be_intro',
    tabsLabel: 'Filter by project',
    tabs: [
      { id: 'molley-office', label: 'Molley Office' },
      { id: 'youtube-downloader', label: 'YouTube Downloader' },
    ],
    items: [
      project({
        id: 'molley-office',
        tab: 'molley-office',
        file: 'molley-office.png',
        alt: 'Screenshot of the Molley Office internal management system',
        contexto: 'Back-End',
        ano: '2025',
        evento: 'Custom Invoicing System for a Local Business',
        descricaoKey: 'pr.projects.p5_desc',
        skills: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL', 'Bootstrap'],
        highlights: [
          'Automated Invoice Generation',
          'Auto-Suggest Product Database',
          'Client & Sales Management',
          'Custom Login System',
        ],
        link: GITHUB_MOLLEY,
        linkLabelKey: GITHUB_LABEL_KEY,
      }),
      project({
        id: 'youtube-downloader',
        tab: 'youtube-downloader',
        file: 'youtube-downloader.png',
        alt: 'Screenshot of the YouTube Downloader application',
        contexto: 'Back-End',
        ano: '2026',
        evento: 'A Local App for Downloading YouTube Videos & Audio',
        descricaoKey: 'pr.projects.p6_desc',
        skills: ['HTML5', 'CSS3', 'JavaScript'],
        highlights: [
          'Audio & Video Download Modes',
          'Multi-Quality Export',
          'Browser Extension Version',
          'Real-Time Download Progress',
          'Dark/Light Theme',
        ],
        link: GITHUB_DOWNLOADER,
        linkLabelKey: GITHUB_LABEL_KEY,
      }),
    ],
    skillKeys: ['pr.skills.be.1', 'pr.skills.be.2', 'pr.skills.be.3', 'pr.skills.be.4'],
  },
]
