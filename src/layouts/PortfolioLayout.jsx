import { useState, useEffect } from 'react'
import Navbar from '../components/communicator/Navbar'
import SidebarLeft from '../components/communicator/SidebarLeft'
import Lightbox from '../components/shared/Lightbox'
import Drawer from '../components/shared/Drawer'
import Toc from '../components/shared/Toc'
import CompassButton from '../components/shared/CompassButton'
import useScrollSpy from '../hooks/useScrollSpy'
import { useLanguage } from '../context/LanguageContext'
import '../styles/communicator.css'

export default function PortfolioLayout({
  portfolio,
  homePath,
  iconClass,
  titleKey,
  sections,
  activeSection,
  setActiveSection,
  renderSection,
}) {
  const { t } = useLanguage()
  const [selectedItem, setSelectedItem] = useState(null)
  const closeLightbox = () => setSelectedItem(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  const activeData = sections.find((s) => s.id === activeSection) || sections[0]
  const currentSub = useScrollSpy(activeData?.subs?.map((sub) => sub.id) || [])

  useEffect(() => {
    const root = document.documentElement
    if (portfolio) root.dataset.portfolio = portfolio
    const title = portfolio === 'programming' ? 'Developer | Charles Nuno' : portfolio === 'communication' ? 'Communicator | Charles Nuno' : 'Portfolio | Charles Nuno'
    document.title = title
    return () => {
      delete root.dataset.portfolio
      document.title = 'Portfolio | Charles Nuno'
    }
  }, [portfolio])

  useEffect(() => {
    document.body.dataset.activeSection = activeSection
    window.scrollTo(0, 0)
    const main = document.getElementById('main-content')
    if (main) main.scrollTo(0, 0)
  }, [activeSection])

  return (
    <>
      <Navbar
        menuOpen={menuOpen}
        onMenuToggle={() => setMenuOpen(!menuOpen)}
        homePath={homePath}
        iconClass={iconClass}
        titleKey={titleKey}
      />
      <Drawer
        sections={sections}
        open={menuOpen}
        onClose={closeMenu}
        active={activeSection}
        onChange={setActiveSection}
        current={currentSub}
      />
      <div className="layout">
        <SidebarLeft sections={sections} active={activeSection} onChange={setActiveSection} />

        <main className="content" id="main-content">
          <Lightbox item={selectedItem} onClose={closeLightbox} />
          {sections.map((s) => (
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
              {renderSection ? renderSection(s, { setActiveSection, setSelectedItem }) : null}
            </section>
          ))}
          <CompassButton activeSection={activeSection} />
        </main>

        <aside className="sidebar sidebar--right" aria-label="Current page index">
          {activeData?.subs && (
            <Toc className="toc" id="toc-desktop" subs={activeData.subs} current={currentSub} />
          )}
          <div className="portfolio-symbol sidebar__deco" aria-hidden="true">
            <span className="portfolio-symbol__map"></span>
            <span className="portfolio-symbol__mask"></span>
          </div>
        </aside>
      </div>
    </>
  )
}
