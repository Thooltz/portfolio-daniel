import { profile } from '../config/profile'

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 lg:px-8 bg-[#0f1422]/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Skills Técnicas
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Tecnologias e práticas organizadas por categoria
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {/* Front-end */}
          <div className="bg-[#0f1422] border border-[#1e293b] rounded-xl p-6 hover:border-primary-500/50 transition-all hover:scale-105">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-primary-500 rounded"></span>
              Front-end
            </h3>
            <div className="space-y-3">
              {profile.skills.frontend.map((skill) => (
                <div key={skill.name} className="flex items-center gap-3">
                  <span className="text-xl">{skill.icon}</span>
                  <span className="text-neutral-300 text-sm">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* UI/UX */}
          <div className="bg-[#0f1422] border border-[#1e293b] rounded-xl p-6 hover:border-primary-500/50 transition-all hover:scale-105">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-primary-500 rounded"></span>
              UI/UX
            </h3>
            <div className="space-y-3">
              {profile.skills.uiux.map((skill) => (
                <div key={skill.name} className="flex items-center gap-3">
                  <span className="text-xl">{skill.icon}</span>
                  <span className="text-neutral-300 text-sm">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Engineering */}
          <div className="bg-[#0f1422] border border-[#1e293b] rounded-xl p-6 hover:border-primary-500/50 transition-all hover:scale-105">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-primary-500 rounded"></span>
              Engineering
            </h3>
            <div className="space-y-3">
              {profile.skills.engineering.map((skill) => (
                <div key={skill.name} className="flex items-center gap-3">
                  <span className="text-xl">{skill.icon}</span>
                  <span className="text-neutral-300 text-sm">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tooling */}
          <div className="bg-[#0f1422] border border-[#1e293b] rounded-xl p-6 hover:border-primary-500/50 transition-all hover:scale-105">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-primary-500 rounded"></span>
              Tooling
            </h3>
            <div className="space-y-3">
              {profile.skills.tooling.map((skill) => (
                <div key={skill.name} className="flex items-center gap-3">
                  <span className="text-xl">{skill.icon}</span>
                  <span className="text-neutral-300 text-sm">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
