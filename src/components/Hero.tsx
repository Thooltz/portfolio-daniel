import { profile, hasLink } from '../config/profile'
import profileImage from '../assets/profile.jpeg'
import { useState, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'

const Hero = () => {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 lg:px-8 pt-20 relative overflow-hidden"
    >
      {/* Background gradient animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-600/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className={`flex flex-col md:flex-row items-center gap-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* Foto */}
          <div className="flex-shrink-0">
            <div className="relative group">
              <div className="absolute inset-0 bg-primary-500/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500 animate-pulse" />
              <div className="relative transform transition-transform duration-500 group-hover:scale-105">
                <img
                  src={profileImage}
                  alt="Foto de Daniel Lima"
                  className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-primary-500/30 shadow-2xl ring-4 ring-primary-500/10"
                  loading="eager"
                  width={256}
                  height={256}
                />
              </div>
              {profile.available && (
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded-full border border-green-500/30 backdrop-blur-sm animate-bounce-subtle">
                  {t('heroAvailable')}
                </span>
              )}
            </div>
          </div>

          {/* Conteúdo */}
          <div className={`flex-1 text-center md:text-left transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="inline-block px-3 py-1 bg-primary-500/10 border border-primary-500/20 rounded-full mb-4 hover:bg-primary-500/20 transition-colors">
              <span className="text-primary-400 text-sm font-medium">{t('heroBadge')}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-balance bg-gradient-to-r from-white to-primary-300 bg-clip-text text-transparent">
              {profile.name}
            </h1>
            <p className="text-xl md:text-2xl text-primary-400 mb-6 font-medium">
              {t('heroTitle')}
            </p>
            <p className="text-lg md:text-xl text-neutral-300 mb-8 max-w-2xl mx-auto md:mx-0 text-balance leading-relaxed">
              {t('heroSubtitle')}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-8">
              <a
                href="#projetos"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-all hover:scale-105 shadow-lg shadow-primary-500/25 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-[#0a0e27]"
              >
                {t('heroViewProjects')}
              </a>
              <a
                href="#contato"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary-500/50 text-primary-400 font-semibold rounded-lg hover:border-primary-500 hover:bg-primary-500/10 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-[#0a0e27]"
              >
                {t('heroContact')}
              </a>
              {hasLink(profile.links.cv) && (
                <>
                  <a
                    href={profile.links.cv}
                    download="cv-daniel.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-primary-500/10 border-2 border-primary-500/50 text-primary-400 font-semibold rounded-lg hover:border-primary-500 hover:bg-primary-500/20 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-[#0a0e27]"
                    aria-label={t('heroDownloadCV')}
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    {t('heroDownloadCV')}
                  </a>
                  <a
                    href={profile.links.cv}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-neutral-600 text-neutral-300 font-semibold rounded-lg hover:border-neutral-500 hover:bg-neutral-800/50 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-[#0a0e27]"
                    aria-label={t('heroViewCV')}
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    {t('heroViewCV')}
                  </a>
                </>
              )}
              {hasLink(profile.links.github) && (
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-3 border-2 border-neutral-600 text-neutral-300 font-semibold rounded-lg hover:border-neutral-500 hover:bg-neutral-800/50 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-[#0a0e27]"
                  aria-label={t('contactGitHub')}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              )}
              {hasLink(profile.links.linkedin) && (
                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-3 border-2 border-neutral-600 text-neutral-300 font-semibold rounded-lg hover:border-neutral-500 hover:bg-neutral-800/50 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-[#0a0e27]"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
