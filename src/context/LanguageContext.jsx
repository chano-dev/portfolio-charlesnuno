import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { dict, LANGS } from '../i18n'

const KEY = 'cn-lang'
const LanguageContext = createContext(null)

const readLang = () => {
  try {
    const saved = localStorage.getItem(KEY)
    return LANGS.includes(saved) ? saved : 'en'
  } catch {
    return 'en'
  }
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(readLang)

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dataset.lang = lang
    try {
      localStorage.setItem(KEY, lang)
    } catch {
      /* modo privado: ignora */
    }
  }, [lang])

  // idioma activo, depois EN, depois a própria chave
  const t = useCallback(
    (key) => dict[lang]?.[key] ?? dict.en[key] ?? key,
    [lang]
  )

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)