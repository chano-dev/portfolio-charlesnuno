import { useLanguage } from '../../context/LanguageContext'

export default function Article({ id, titleId, titleKey, title, children }) {
  const { t } = useLanguage()
  const tid = titleId || `h-${id}`
  return (
    <article className="article" id={id} aria-labelledby={tid}>
      {(titleKey || title) && (
        <h3 className="article__title" id={tid}>{titleKey ? t(titleKey) : title}</h3>
      )}
      {children}
    </article>
  )
}
