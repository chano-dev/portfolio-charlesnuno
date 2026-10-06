import { validateSections } from '../utils/validatePortfolioData'
export const SECTIONS = [
  {
    id: 'about-me',
    labelKey: 'sections.about',
    subs: [
      { id: 'who-am-i', labelKey: 'about.who' },
      { id: 'what-i-do', labelKey: 'about.what' },
      { id: 'why-i-do', labelKey: 'about.why' },
    ],
  },
  {
    id: 'work',
    labelKey: 'sections.work',
    subs: [
      { id: 'master-of-ceremony', labelKey: 'work.mc' },
      { id: 'content-creator-video-editor', labelKey: 'work.rv' },
      { id: 'designer-copywriter', labelKey: 'work.dc' },
    ],
  },
  {
    id: 'contacts',
    labelKey: 'sections.contacts',
    subs: [
      { id: 'email', labelKey: 'contacts.email' },
      { id: 'phone', labelKey: 'contacts.phone' },
      { id: 'social', labelKey: 'contacts.social' },
    ],
  },
]
if (import.meta.env.DEV) {
  validateSections({ sections: SECTIONS, name: 'CommunicatorSections' })
}
