import Gallery from '../shared/Gallery'
import { PROJECT_SECTIONS } from '../../data/projects'
import { useLanguage } from '../../context/LanguageContext'

export default function ProjectsDeveloper({ onNavigate, onSelect }) {
  const { t } = useLanguage()

  return (
    <>
      {PROJECT_SECTIONS.map((s, i) => (
        <article key={s.id} className="article" id={s.id} aria-labelledby={`h-${s.id}`}>
          <h3 className="article__title" id={`h-${s.id}`}>{t(s.titleKey)}</h3>
          <p className="article__text">{t(s.introKey)}</p>

          <Gallery tabs={s.tabs} items={s.items} label={s.tabsLabel} onSelect={onSelect} />

          <div className="article-skills">
            <h4 className="article-skills__title">{t('pr.skills.title')}</h4>
            <ul className="article-skills__list">
              {s.skillKeys.map((key) => (
                <li key={key} className="article-skills__item">{t(key)}</li>
              ))}
            </ul>
          </div>

          {i === PROJECT_SECTIONS.length - 1 && (
            <p className="article__text">
              <span>{t('pr.projects.closing_pre')} </span>
              <button type="button" className="inline-link" onClick={() => onNavigate('contacts')}>
                {t('sections.contacts')}
              </button>
              <span>{t('pr.projects.closing_post')}</span>
            </p>
          )}
        </article>
      ))}
    </>
  )
}
