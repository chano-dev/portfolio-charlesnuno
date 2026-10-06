import { useState, useEffect } from 'react'
import '../styles/communicator.css'
import AboutMe from '../components/communicator/AboutMe'
import Navbar from '../components/communicator/Navbar'
import SidebarLeft from '../components/communicator/SidebarLeft'
import { SECTIONS } from '../data/communicatorSections'
import Lightbox from '../components/communicator/Lightbox'
import Work from '../components/communicator/Work'
import Contacts from '../components/communicator/Contacts'
import Drawer from '../components/communicator/Drawer'
import Toc from '../components/communicator/Toc'
import CompassButton from '../components/communicator/CompassButton'
import useScrollSpy from '../hooks/useScrollSpy'
import { useLanguage } from '../context/LanguageContext'

export default function Communicator() {
  const { t } = useLanguage()
  const [activeSection, setActiveSection] = useState('about-me')
  const [selectedItem, setSelectedItem] = useState(null)
  const closeLightbox = () => setSelectedItem(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)
  const activeData = SECTIONS.find((s) => s.id === activeSection)
const currentSub = useScrollSpy(activeData.subs.map((sub) => sub.id))

  // O teu CSS depende de atributos no <html> e no <body>
  useEffect(() => {
    const root = document.documentElement
    root.dataset.portfolio = 'communication'
    document.title = 'Communicator | Charles Nuno'

    return () => {
      delete root.dataset.portfolio
    }
  }, [])

useEffect(() => {
  document.body.dataset.activeSection = activeSection
  window.scrollTo(0, 0)
  document.getElementById('main-content')?.scrollTo(0, 0)
}, [activeSection])

  return (
    <>
      <Navbar menuOpen={menuOpen} onMenuToggle={() => setMenuOpen(!menuOpen)} />
      <Drawer sections={SECTIONS} open={menuOpen} onClose={closeMenu} active={activeSection} onChange={setActiveSection} current={currentSub}/>
      <div className="layout">
        <SidebarLeft sections={SECTIONS} active={activeSection} onChange={setActiveSection} />

        <main className="content" id="main-content">
          <Lightbox item={selectedItem} onClose={closeLightbox} />
          {SECTIONS.map((s) => (
            <section
              key={s.id}
              className="section"
              id={`section-${s.id}`}
              data-section={s.id}
              hidden={activeSection !== s.id}
            >
              <h2 className="section__title">{t(s.labelKey)}</h2>
              <Toc
  className="toc-mobile"
  id={`toc-mobile-${s.id}`}
  subs={s.subs}
  current={s.id === activeSection ? currentSub : null}
/>
                {s.id === 'about-me' && (
                  <AboutMe onNavigate={setActiveSection} onSelect={setSelectedItem} />
                )}
                {s.id === 'work' && (
                  <Work onNavigate={setActiveSection} onSelect={setSelectedItem} />
                )}
                {s.id === 'contacts' && <Contacts />}
            </section>
          ))}
          <CompassButton activeSection={activeSection} />
        </main>

        <aside className="sidebar sidebar--right" aria-label="Current page index">
          <Toc className="toc" id="toc-desktop" subs={activeData.subs} current={currentSub} />
          <div className="portfolio-symbol sidebar__deco" aria-hidden="true">
            <span className="portfolio-symbol__map"></span>
            <span className="portfolio-symbol__mask"></span>
          </div>
        </aside>
      </div>
    </>
  )
}