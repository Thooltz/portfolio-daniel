import { profile } from '../config/profile'
import { useLanguage } from '../context/LanguageContext'
import { Translations } from '../i18n'

const Skills = () => {
  const { t } = useLanguage()

  // Helper para obter o nome traduzido de um skill
  const getSkillName = (skillId: string): string => {
    const key = `skills.items.${skillId}` as keyof Translations
    return t(key)
  }

  // Estrutura de categorias com seus IDs e chaves de tradução
  const skillCategories = [
    {
      id: 'frontend',
      translationKey: 'skillsFrontend' as keyof Translations,
      skills: profile.skills.frontend,
    },
    {
      id: 'uiux',
      translationKey: 'skillsUIUX' as keyof Translations,
      skills: profile.skills.uiux,
    },
    {
      id: 'engineering',
      translationKey: 'skillsEngineering' as keyof Translations,
      skills: profile.skills.engineering,
    },
    {
      id: 'tooling',
      translationKey: 'skillsTooling' as keyof Translations,
      skills: profile.skills.tooling,
    },
  ]

  return (
    <section id="skills" className="py-24 px-6 lg:px-8 bg-[#0f1422]/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('skillsTitle')}
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            {t('skillsSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="bg-[#0f1422] border border-[#1e293b] rounded-xl p-6 hover:border-primary-500/50 transition-all hover:scale-105"
            >
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-primary-500 rounded"></span>
                {t(category.translationKey)}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div key={skill.id} className="flex items-center gap-3">
                    <span className="text-xl">{skill.icon}</span>
                    <span className="text-neutral-300 text-sm">{getSkillName(skill.id)}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
