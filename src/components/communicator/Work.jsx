import Gallery from '../shared/Gallery'
import { WORK_SECTIONS } from '../../data/work'
import { useLanguage } from '../../context/LanguageContext'
import SkillList from '../shared/SkillList'

export default function Work({ onNavigate, onSelect }) {
  const { t } = useLanguage()

  return (
    <>
      {WORK_SECTIONS.map((s, i) => (
        <article key={s.id} className="article" id={s.id} aria-labelledby={`h-${s.id}`}>
          <h3 className="article__title" id={`h-${s.id}`}>{t(s.titleKey)}</h3>
          <p className="article__text">{t(s.introKey)}</p>

          <Gallery tabs={s.tabs} items={s.items} label={s.tabsLabel} onSelect={onSelect} />

          <SkillList skillKeys={s.skillKeys} />

          {i === WORK_SECTIONS.length - 1 && (
            <p className="article__text">
              <span>{t('work.closing_pre')} </span>
              <button type="button" className="inline-link" onClick={() => onNavigate('contacts')}>
                {t('sections.contacts')}
              </button>
              <span>{t('work.closing_post')}</span>
            </p>
          )}
        </article>
      ))}
    </>
  )
}