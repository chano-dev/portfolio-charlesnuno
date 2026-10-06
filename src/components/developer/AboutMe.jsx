import Gallery from '../communicator/Gallery'
import Quotes from '../communicator/Quotes'
import { ARCHIVES_DEVELOPER, ARCHIVES_DEVELOPER_TABS } from '../../data/archivesDeveloper'
import { QUOTES_DEVELOPER } from '../../data/quotesDeveloper'
import { useLanguage } from '../../context/LanguageContext'

const SKILL_KEYS = [
  'pr.about.what_skill_1',
  'pr.about.what_skill_2',
  'pr.about.what_skill_3',
  'pr.about.what_skill_4',
]

const CHARLES = [
  ['C', 'pr.about.acrostic_c'],
  ['H', 'pr.about.acrostic_h'],
  ['A', 'pr.about.acrostic_a'],
  ['R', 'pr.about.acrostic_r'],
  ['L', 'pr.about.acrostic_l'],
  ['E', 'pr.about.acrostic_e'],
  ['S', 'pr.about.acrostic_s'],
]

export default function AboutMeDeveloper({ onNavigate, onSelect }) {
  const { t } = useLanguage()

  return (
    <>
      <article className="article" id="who-am-i" aria-labelledby="h-who-am-i">
        <h3 className="article__title" id="h-who-am-i">{t('about.who')}</h3>
        <p className="article__text">{t('pr.about.who_intro')}</p>

        <Gallery
          tabs={ARCHIVES_DEVELOPER_TABS}
          items={ARCHIVES_DEVELOPER}
          label="Archives"
          onSelect={onSelect}
          hideTabs
        />
      </article>

      <article className="article" id="what-i-do" aria-labelledby="h-what-i-do">
        <h3 className="article__title" id="h-what-i-do">{t('about.what')}</h3>
        <p className="article__text">{t('pr.about.what_intro')}</p>
        <ul className="skills-list" aria-label="Core skills">
          {SKILL_KEYS.map((key) => (
            <li key={key} className="skills-list__item">{t(key)}</li>
          ))}
        </ul>
      </article>

      <article className="article" id="why-i-do" aria-labelledby="h-why-i-do">
        <h3 className="article__title" id="h-why-i-do">{t('about.why')}</h3>
        <p className="article__text">{t('pr.about.why_intro')}</p>

        <ul className="acrostic" aria-label="CHARLES acronym">
          {CHARLES.map(([letter, key]) => (
            <li key={letter} className="acrostic__item">
              <span className="acrostic__letter" aria-hidden="true">{letter}</span>
              <span className="acrostic__dash" aria-hidden="true">—</span>
              <span className="acrostic__skill">{t(key)}</span>
            </li>
          ))}
        </ul>

        <Quotes quotes={QUOTES_DEVELOPER} />

        <p className="article__text">
          <span>{t('pr.about.closing_pre')} </span>
          <button type="button" className="inline-link" onClick={() => onNavigate('projects')}>
            {t('pr.sections.projects')}
          </button>
          <span>{t('pr.about.closing_post')}</span>
        </p>
      </article>
    </>
  )
}
