import Gallery from '../shared/Gallery'
import { PROJECT_SECTIONS } from '../../data/projects'
import { useLanguage } from '../../context/LanguageContext'
import SkillList from '../shared/SkillList'

export default function ProjectsDeveloper({ onNavigate, onSelect }) {
  const { t } = useLanguage()

  return (
    <>
      {PROJECT_SECTIONS.map((s, i) => (
        <article key={s.id} className="article" id={s.id} aria-labelledby={`h-${s.id}`}>
          <h3 className="article__title" id={`h-${s.id}`}>{t(s.titleKey)}</h3>
          <p className="article__text">{t(s.introKey)}</p>

          <Gallery tabs={s.tabs} items={s.items} label={s.tabsLabel} onSelect={onSelect} />

          <SkillList titleKey="pr.skills.title" skillKeys={s.skillKeys} />

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
