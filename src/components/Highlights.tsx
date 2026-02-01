import { profile } from '../config/profile'

const Highlights = () => {
  return (
    <section id="highlights" className="py-24 px-6 lg:px-8 bg-[#0f1422]/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Por que me contratar?
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Competências e práticas que fazem a diferença no desenvolvimento front-end
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {profile.highlights.map((highlight, index) => (
            <div
              key={index}
              className="group bg-[#0f1422] border border-[#1e293b] rounded-xl p-6 hover:border-primary-500/50 transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary-500/10"
            >
              <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-500/20 transition-colors">
                <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {highlight.title}
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Highlights
