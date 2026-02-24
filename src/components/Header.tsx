import { useState, useEffect, useCallback } from 'react'
import { profile } from '../config/profile'
import { useLanguage } from '../context/LanguageContext'

const Header = () => {
  const { t, lang, toggleLanguage } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    const sections = document.querySelectorAll('section[id]')
    
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  const navLinks = [
    { href: '#projetos', label: t('navProjects') },
    { href: '#skills', label: t('navSkills') },
    { href: '#highlights', label: t('navHighlights') },
    { href: '#sobre', label: t('navAbout') },
    { href: '#contato', label: t('navContact') },
  ]

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false)
    const targetId = href.substring(1)
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0e27]/95 backdrop-blur-md border-b border-[#1e293b] shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8" aria-label="Navegação principal">
        <div className="flex items-center justify-between h-16">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="text-xl font-bold text-white hover:text-primary-400 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-[#0a0e27] rounded"
            aria-label="Voltar ao topo"
          >
            {profile.name}
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1)
              const isActive = activeSection === sectionId
              
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(link.href)
                  }}
                  className={`text-sm font-medium transition-all duration-200 relative focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-[#0a0e27] rounded px-2 py-1 ${
                    isActive
                      ? 'text-primary-400'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-500 rounded-full" aria-hidden="true" />
                  )}
                </a>
              )
            })}
            
            {/* Language Toggle Button */}
            <button
              onClick={toggleLanguage}
              className="px-3 py-1.5 text-sm font-medium text-neutral-400 hover:text-white border border-[#1e293b] rounded-lg hover:border-primary-500/50 hover:bg-[#1e293b] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-[#0a0e27]"
              aria-label={`Switch to ${lang === 'pt' ? 'English' : 'Português'}`}
              title={`Switch to ${lang === 'pt' ? 'English' : 'Português'}`}
            >
              {lang === 'pt' ? 'EN' : 'PT'}
            </button>
          </div>

          {/* Mobile Menu Button & Language Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="px-3 py-1.5 text-sm font-medium text-neutral-400 hover:text-white border border-[#1e293b] rounded-lg hover:border-primary-500/50 hover:bg-[#1e293b] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-[#0a0e27]"
              aria-label={`Switch to ${lang === 'pt' ? 'English' : 'Português'}`}
            >
              {lang === 'pt' ? 'EN' : 'PT'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-[#0a0e27] rounded"
              aria-label={mobileMenuOpen ? t('mobileMenuClose') : t('mobileMenuOpen')}
              aria-expanded={mobileMenuOpen}
            >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-16 left-0 right-0 bg-[#0a0e27]/98 backdrop-blur-md border-b border-[#1e293b] transition-all duration-300 overflow-hidden ${
            mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="px-6 py-4 space-y-2" aria-label="Menu mobile">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1)
              const isActive = activeSection === sectionId
              
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(link.href)
                  }}
                  className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-[#0a0e27] ${
                    isActive
                      ? 'text-primary-400 bg-primary-500/10 border-l-2 border-primary-500'
                      : 'text-neutral-400 hover:text-white hover:bg-[#1e293b]'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                </a>
              )
            })}
          </nav>
        </div>
      </nav>
    </header>
  )
}

export default Header
