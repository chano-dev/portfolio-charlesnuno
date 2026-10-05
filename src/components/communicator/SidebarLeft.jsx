import { SECTIONS } from '../../data/communicatorSections'
import Typewriter from '../Typewriter'
import { TAGLINES } from '../../data/taglines'

export default function SidebarLeft({ active, onChange }) {
  return (
    <aside className="sidebar sidebar--left" aria-label="Navigation between sections">
      <div className="sidebar__inner">
        <h2 className="sidebar__title">Sections</h2>
        <nav aria-label="Portfolio sections">
          <ul className="sidebar__sections">
            {SECTIONS.map((s) => (
              <li key={s.id} className="sidebar__section-item">
                <button
                  type="button"
                  className={`sidebar__section-btn ${active === s.id ? 'is-active' : ''}`}
                  onClick={() => onChange(s.id)}
                >
                  <span>{s.label}</span>
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