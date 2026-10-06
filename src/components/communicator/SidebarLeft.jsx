import Typewriter from '../Typewriter'
import { TAGLINES } from '../../data/taglines'
import { useLanguage } from '../../context/LanguageContext'

export default function SidebarLeft({ sections, active, onChange }) {
  const { t } = useLanguage()

  return (
    <aside className="sidebar sidebar--left" aria-label="Navigation between sections">
      <div className="sidebar__inner">
        <h2 className="sidebar__title">{t('sidebar.sections')}</h2>
        <nav aria-label="Portfolio sections">
          <ul className="sidebar__sections">
            {sections.map((s) => (
              <li key={s.id} className="sidebar__section-item">
                <button
                  type="button"
                  className={`sidebar__section-btn ${active === s.id ? 'is-active' : ''}`}
                  onClick={() => onChange(s.id)}
                >
                  <span>{t(s.labelKey)}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <p className="sidebar__tagline">
        <Typewriter texts={TAGLINES} typeSpeed={90} deleteSpeed={40} pause={1800} />
      </p>
    </aside>
  )
}