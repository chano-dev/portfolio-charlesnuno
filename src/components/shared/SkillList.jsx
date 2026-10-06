import { useLanguage } from '../../context/LanguageContext'

export default function SkillList({ titleKey = 'skills.title', skillKeys = [], skills = [] }) {
  const { t } = useLanguage()
  return (
    <div className="article-skills">
      <h4 className="article-skills__title">{t(titleKey)}</h4>
      <ul className="article-skills__list">
        {skillKeys.map((key) => (
          <li key={key} className="article-skills__item">{t(key)}</li>
        ))}
        {skills.map((s) => (
          <li key={s} className="article-skills__item">{s}</li>
        ))}
      </ul>
    </div>
  )
}
