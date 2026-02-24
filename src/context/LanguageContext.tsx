import { createContext, useContext, useState, useEffect, ReactNode, useMemo, useCallback } from 'react'
import { Language, Translations, translations, getDefaultLanguage } from '../i18n'

interface LanguageContextType {
  lang: Language
  toggleLanguage: () => void
  setLanguage: (lang: Language) => void
  t: (key: keyof Translations) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

interface LanguageProviderProps {
  children: ReactNode
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [lang, setLang] = useState<Language>(() => getDefaultLanguage())

  useEffect(() => {
    try {
      localStorage.setItem('portfolio-language', lang)
    } catch (e) {
      // localStorage pode não estar disponível
    }
  }, [lang])

  const toggleLanguage = useCallback(() => {
    setLang((prev) => (prev === 'pt' ? 'en' : 'pt'))
  }, [])

  const setLanguage = useCallback((newLang: Language) => {
    setLang(newLang)
  }, [])

  const t = useCallback(
    (key: keyof Translations): string => {
      const translation = translations[lang][key]
      if (translation === undefined) {
        return `⚠️ ${String(key)}`
      }
      return translation
    },
    [lang]
  )

  const value = useMemo(
    () => ({
      lang,
      toggleLanguage,
      setLanguage,
      t,
    }),
    [lang, toggleLanguage, setLanguage, t]
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
