import { useState, useEffect } from 'react'
import '../styles/communicator.css'
import AboutMeDeveloper from '../components/developer/AboutMe'
import ProjectsDeveloper from '../components/developer/Projects'
import Navbar from '../components/communicator/Navbar'
import SidebarLeft from '../components/communicator/SidebarLeft'
import { DEVELOPER_SECTIONS } from '../data/developerSections'
import Lightbox from '../components/communicator/Lightbox'
import Contacts from '../components/communicator/Contacts'
import Drawer from '../components/communicator/Drawer'
import Toc from '../components/communicator/Toc'
import CompassButton from '../components/communicator/CompassButton'
import useScrollSpy from '../hooks/useScrollSpy'
import { useLanguage } from '../context/LanguageContext'

export default function Developer() {
  const { t } = useLanguage()
  const [activeSection, setActiveSection] = useState('about-me')
  const [selectedItem, setSelectedItem] = useState(null)
  const closeLightbox = () => setSelectedItem(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)
  const activeData = DEVELOPER_SECTIONS.find((s) => s.id === activeSection)
  const currentSub = useScrollSpy(activeData?.subs?.map((sub) => sub.id) || [])

  useEffect(() => {
    const root = document.documentElement
    root.dataset.portfolio = 'programming'
    document.title = 'Developer | Charles Nuno'

    return () => {
      delete root.dataset.portfolio
      document.title = 'Portfolio | Charles Nuno'
    }
  }, [])

  useEffect(() => {
    document.body.dataset.activeSection = activeSection
    window.scrollTo(0, 0)
    document.getElementById('main-content')?.scrollTo(0, 0)
  }, [activeSection])

  return (
    <>
      <Navbar
        menuOpen={menuOpen}
        onMenuToggle={() => setMenuOpen(!menuOpen)}
        homePath="/pr"
        iconClass="icon-programming"
        titleKey="pr.nav.title"
      />
      <Drawer
        sections={DEVELOPER_SECTIONS}
        open={menuOpen}
        onClose={closeMenu}
        active={activeSection}
        onChange={setActiveSection}
        current={currentSub}
      />
      <div className="layout">
        <SidebarLeft sections={DEVELOPER_SECTIONS} active={activeSection} onChange={setActiveSection} />

        <main className="content" id="main-content">
          <Lightbox item={selectedItem} onClose={closeLightbox} />
          {DEVELOPER_SECTIONS.map((s) => (
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
                <AboutMeDeveloper onNavigate={setActiveSection} onSelect={setSelectedItem} />
              )}
              {s.id === 'projects' && (
                <ProjectsDeveloper onNavigate={setActiveSection} onSelect={setSelectedItem} />
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
