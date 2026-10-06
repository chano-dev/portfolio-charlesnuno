import Gallery from './Gallery'
import Quotes from './Quotes'
import { ARCHIVES, ARCHIVES_TABS } from '../../data/archives'
import { useLanguage } from '../../context/LanguageContext'

const SKILL_KEYS = [
  'about.what_skill_1',
  'about.what_skill_2',
  'about.what_skill_3',
  'about.what_skill_4',
]

const CHARLES = [
  ['C', 'about.acrostic_c'],
  ['H', 'about.acrostic_h'],
  ['A', 'about.acrostic_a'],
  ['R', 'about.acrostic_r'],
  ['L', 'about.acrostic_l'],
  ['E', 'about.acrostic_e'],
  ['S', 'about.acrostic_s'],
]

export default function AboutMe({ onNavigate, onSelect }) {
  const { t } = useLanguage()

  return (
    <>
      <article className="article" id="who-am-i" aria-labelledby="h-who-am-i">
        <h3 className="article__title" id="h-who-am-i">{t('about.who')}</h3>
        <p className="article__text">{t('about.who_intro')}</p>

        <Gallery
          tabs={ARCHIVES_TABS}
          items={ARCHIVES}
          label="Archives"
          onSelect={onSelect}
        />
      </article>

      <article className="article" id="what-i-do" aria-labelledby="h-what-i-do">
        <h3 className="article__title" id="h-what-i-do">{t('about.what')}</h3>
        <p className="article__text">{t('about.what_intro')}</p>
        <ul className="skills-list" aria-label="Core skills">
          {SKILL_KEYS.map((key) => (
            <li key={key} className="skills-list__item">{t(key)}</li>
          ))}
        </ul>
      </article>

      <article className="article" id="why-i-do" aria-labelledby="h-why-i-do">
        <h3 className="article__title" id="h-why-i-do">{t('about.why')}</h3>
        <p className="article__text">{t('about.why_intro')}</p>

        <ul className="acrostic" aria-label="CHARLES acronym">
          {CHARLES.map(([letter, key]) => (
            <li key={letter} className="acrostic__item">
              <span className="acrostic__letter" aria-hidden="true">{letter}</span>
              <span className="acrostic__dash" aria-hidden="true">—</span>
              <span className="acrostic__skill">{t(key)}</span>
            </li>
          ))}
        </ul>

        <Quotes />

        <p className="article__text">
          <span>{t('about.closing_pre')} </span>
          <button type="button" className="inline-link" onClick={() => onNavigate('work')}>
            {t('sections.work')}
          </button>
          <span>{t('about.closing_post')}</span>
        </p>
      </article>
    </>
  )
}