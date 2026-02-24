import { pt } from './pt'
import { en } from './en'

export type Language = 'pt' | 'en'
export type Translations = typeof pt

export const translations = {
  pt,
  en,
}

export const getDefaultLanguage = (): Language => {
  // Verifica se estamos no browser
  if (typeof window === 'undefined') {
    return 'pt'
  }

  // Verifica localStorage primeiro
  try {
    const saved = localStorage.getItem('portfolio-language') as Language | null
    if (saved && (saved === 'pt' || saved === 'en')) {
      return saved
    }
  } catch (e) {
    // localStorage pode não estar disponível
  }

  // Detecta idioma do navegador
  const browserLang = navigator.language || (navigator as any).userLanguage
  if (browserLang && browserLang.startsWith('pt')) {
    return 'pt'
  }
  return 'en'
}
