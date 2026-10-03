import Gallery from './Gallery'
import { WORK_SECTIONS } from '../../data/work'

export default function Work({ onNavigate, onSelect }) {
  return (
    <>
      {WORK_SECTIONS.map((s, i) => (
        <article key={s.id} className="article" id={s.id} aria-labelledby={`h-${s.id}`}>
          <h3 className="article__title" id={`h-${s.id}`}>{s.title}</h3>
          <p className="article__text">{s.intro}</p>

          <Gallery tabs={s.tabs} items={s.items} label={s.tabsLabel} onSelect={onSelect} />

          <div className="article-skills">
            <h4 className="article-skills__title">Key Skills</h4>
            <ul className="article-skills__list">
              {s.skills.map((skill) => (
                <li key={skill} className="article-skills__item">{skill}</li>
              ))}
            </ul>
          </div>

          {i === WORK_SECTIONS.length - 1 && (
            <p className="article__text">
              <span>Now that you've seen what I can do, maybe it's time we talked. You can reach me through my </span>
              <button type="button" className="inline-link" onClick={() => onNavigate('contacts')}>
                contacts
              </button>
              <span>.</span>
            </p>
          )}
        </article>
      ))}
    </>
  )
}