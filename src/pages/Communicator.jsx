import { useState, useEffect } from 'react'
import '../styles/communicator.css'
import Navbar from '../components/communicator/Navbar'
import SidebarLeft from '../components/communicator/SidebarLeft'
import { SECTIONS } from '../data/communicatorSections'

export default function Communicator() {
  const [activeSection, setActiveSection] = useState('about-me')

  // O teu CSS depende de atributos no <html> e no <body>
  useEffect(() => {
    const root = document.documentElement
    root.dataset.portfolio = 'communication'
    root.dataset.theme = 'light'
    root.dataset.lang = 'en'
    document.title = 'Communicator | Charles Nuno'

    return () => {
      delete root.dataset.portfolio
      delete root.dataset.theme
      delete root.dataset.lang
    }
  }, [])

  useEffect(() => {
    document.body.dataset.activeSection = activeSection
    window.scrollTo(0, 0)
  }, [activeSection])

  return (
    <>
      <Navbar />

      <div className="layout">
        <SidebarLeft active={activeSection} onChange={setActiveSection} />

        <main className="content" id="main-content">
          {SECTIONS.map((s) => (
            <section
              key={s.id}
              className="section"
              id={`section-${s.id}`}
              data-section={s.id}
              hidden={activeSection !== s.id}
            >
              <h2 className="section__title">{s.label}</h2>
              <p>Conteúdo de {s.label} entra na próxima fase.</p>
            </section>
          ))}
        </main>

        <aside className="sidebar sidebar--right" aria-label="Current page index">
          <div className="toc" id="toc-desktop"></div>
          <div className="portfolio-symbol sidebar__deco" aria-hidden="true">
            <span className="portfolio-symbol__map"></span>
            <span className="portfolio-symbol__mask"></span>
          </div>
        </aside>
      </div>
    </>
  )
}