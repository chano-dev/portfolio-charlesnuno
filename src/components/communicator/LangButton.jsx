import { useState, useEffect, useRef } from 'react'
import { useLanguage } from '../../context/LanguageContext'

const OPTIONS = [
  { code: 'en', label: 'English' },
  { code: 'pt', label: 'Português' },
  { code: 'fr', label: 'Français' },
  { code: 'zh', label: '中文' },
]

export default function LangButton({ short = false }) {
  const { lang, setLang, t } = useLanguage()
  const [open, setOpen] = useState(false)
  const wrapRef = useRef(null)

  // Fecha ao clicar fora ou com Esc (só enquanto está aberto)
  useEffect(() => {
    if (!open) return
    const onClick = (e) => {
      if (!wrapRef.current?.contains(e.target)) setOpen(false)
    }
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('click', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('click', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  const choose = (code) => {
    setLang(code)
    setOpen(false)
  }

  const size = short ? 12 : 14

  return (
    <div className="navbar__lang-wrapper" ref={wrapRef}>
      <button
        type="button"
        className="navbar__btn navbar__btn--lang"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Select language"
        onClick={() => setOpen(!open)}
      >
        <span className="btn-label">{t(short ? 'nav.lang_short' : 'nav.lang')}</span>
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
             strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      <ul className="lang-dropdown" role="listbox" aria-label="Available languages" hidden={!open}>
        {OPTIONS.map((o) => (
          <li
            key={o.code}
            role="option"
            aria-selected={lang === o.code}
            onClick={() => choose(o.code)}
          >
            {o.label}
          </li>
        ))}
      </ul>
    </div>
  )
}