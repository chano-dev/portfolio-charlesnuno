import { useLanguage } from '../../context/LanguageContext'

export default function Toc({ className, id, subs, current }) {
  const { t } = useLanguage()

  return (
    <div className={className} id={id} aria-label="On this page">
      <h3 className="toc__title">
        <span aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
               strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
          </svg>
        </span>
        <span>{t('toc.title')}</span>
      </h3>
      <ul className="toc__links">
        {subs.map((sub) => (
          <li key={sub.id}>
            <a href={`#${sub.id}`} className={current === sub.id ? 'is-active' : ''}>
              {t(sub.labelKey)}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}