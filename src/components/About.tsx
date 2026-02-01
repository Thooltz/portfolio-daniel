import { profile } from '../config/profile'

const About = () => {
  return (
    <section id="sobre" className="py-24 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Sobre
          </h2>
        </div>
        <div className="bg-[#0f1422] border border-[#1e293b] rounded-xl p-8 md:p-12">
          <p className="text-lg text-neutral-300 leading-relaxed text-center">
            {profile.about}
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
