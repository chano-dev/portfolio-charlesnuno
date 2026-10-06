import { useState, useEffect } from 'react'
import { SECTIONS } from '../../data/communicatorSections'
import Typewriter from '../Typewriter'
import { TAGLINES } from '../../data/taglines'
import ThemeButton from './ThemeButton'
import { useLanguage } from '../../context/LanguageContext'

export default function Drawer({ open, onClose, active, onChange, current }) {
  const { t } = useLanguage()
  const [expanded, setExpanded] = useState(active)

  // Quando a secção activa muda, o acordeão abre nela
  useEffect(() => {
    setExpanded(active)
  }, [active])

  // Esc fecha, e bloqueia o scroll por trás enquanto aberto
  useEffect(() => {
    if (!open) return
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    document.body.classList.add('menu-open')
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
      document.body.classList.remove('menu-open')
    }
  }, [open, onClose])

  const handleSection = (id) => {
    if (id === active) setExpanded(expanded === id ? null : id)
    else onChange(id)
  }

  return (
    <>
      <aside className={`drawer ${open ? 'is-open' : ''}`} id="drawer" aria-label="Menu">
        <div className="drawer__top">
          <p className="drawer__tagline">
            <Typewriter texts={TAGLINES} typeSpeed={90} deleteSpeed={40} pause={1800} />
          </p>
          <ThemeButton />
        </div>
        <hr className="drawer__divider" />

        <nav className="drawer__nav" aria-label="Sections">
          <h2 className="drawer__nav-title">{t('sidebar.sections')}</h2>
          <ul className="drawer__sections">
            {SECTIONS.map((s) => {
              const isOpen = expanded === s.id
              return (
                <li
                  key={s.id}
                  className={`drawer__section-item ${active === s.id ? 'is-active' : ''}`}
                >
                  <button
                    type="button"
                    className="drawer__section-btn"
                    aria-expanded={isOpen}
                    aria-controls={`drawer-sub-${s.id}`}
                    onClick={() => handleSection(s.id)}
                  >
                    <span>{t(s.labelKey)}</span>
                    <svg className="chevron" width="16" height="16" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                         strokeLinejoin="round" aria-hidden="true">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                  <ul className="drawer__sub-links" id={`drawer-sub-${s.id}`} hidden={!isOpen}>
                    {s.subs.map((sub) => (
                      <li key={sub.id}>
                        <a
                          href={`#${sub.id}`}
                          className={current === sub.id ? 'is-active' : ''}
                          onClick={onClose}
                        >
                          {t(sub.labelKey)}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="portfolio-symbol drawer__deco" aria-hidden="true">
          <span className="portfolio-symbol__map"></span>
          <span className="portfolio-symbol__mask"></span>
        </div>
      </aside>

      <div
        className={`drawer-overlay ${open ? 'is-visible' : ''}`}
        id="drawer-overlay"
        aria-hidden="true"
        onClick={onClose}
      ></div>
    </>
  )
}