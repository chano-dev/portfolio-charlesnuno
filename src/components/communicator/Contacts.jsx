import { EMAILS, PHONES, SOCIALS } from '../../data/contacts'
import { useLanguage } from '../../context/LanguageContext'

export default function Contacts() {
  const { t } = useLanguage()

  return (
    <>
      <article className="article contact-item" id="email" aria-labelledby="h-email">
        <h3 className="article__title" id="h-email">{t('contacts.email')}</h3>
        {EMAILS.map((email) => (
          <a key={email} href={`mailto:${email}`} className="contact-item__link">{email}</a>
        ))}
      </article>

      <article className="article contact-item" id="phone" aria-labelledby="h-phone">
        <h3 className="article__title" id="h-phone">{t('contacts.phone')}</h3>
        {PHONES.map((p) => (
          <a key={p.href} href={p.href} className="contact-item__link">{p.label}</a>
        ))}
      </article>

      <article className="article contact-item" id="social" aria-labelledby="h-social">
        <h3 className="article__title" id="h-social">{t('contacts.social')}</h3>
        <ul className="social-links">
          {SOCIALS.map((s) => (
            <li key={s.id}>
              <a
                href={s.href}
                className="social-links__item"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Charles Nuno's ${s.label}`}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  {s.icon}
                </svg>
                <span>{s.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </article>
    </>
  )
}