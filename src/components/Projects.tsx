import { useState, useEffect } from 'react'
import { profile } from '../config/profile'
import torreHanoiImage from '../assets/torre-hanoi.png'
import comparadorDocImage from '../assets/comparador-doc.png'
import docudiffProImage from '../assets/docudiff-pro.png'
import permissionlabImage from '../assets/permissionlab.png'

interface ProjectModalProps {
  project: typeof profile.projects[0]
  isOpen: boolean
  onClose: () => void
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  useEffect(() => {
    if (!isOpen) return

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="bg-[#0f1422] border border-[#1e293b] rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <h3 id="modal-title" className="text-2xl font-bold text-white">
              {project.name}
            </h3>
            <button
              onClick={onClose}
              className="text-neutral-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 rounded"
              aria-label="Fechar modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <p className="text-neutral-300 mb-6">{project.description}</p>

          <div className="mb-6">
            <h4 className="text-sm font-semibold text-primary-400 mb-2">Detalhes:</h4>
            <ul className="list-disc list-inside space-y-1 text-neutral-400">
              {project.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-sm font-semibold text-primary-400 mb-2">Stack:</h4>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-medium bg-[#1e293b] text-primary-300 rounded-full border border-primary-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-3">
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-primary-500 text-white text-sm font-semibold rounded-lg hover:bg-primary-600 transition-all hover:scale-105 shadow-lg shadow-primary-500/25 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-[#0f1422]"
            >
              Ver Demo
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 border border-[#1e293b] text-neutral-300 text-sm font-semibold rounded-lg hover:border-primary-500/50 hover:bg-[#1e293b] transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-[#0f1422]"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

const ProjectCard = ({ project }: { project: typeof profile.projects[0] }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleCardClick = () => {
    window.open(project.demo, '_blank', 'noopener,noreferrer')
  }

  const handleDetailsClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsModalOpen(true)
  }

  // Seleciona a imagem baseada no ID do projeto
  const getProjectImage = () => {
    if (project.id === 'docudiff-pro') {
      return docudiffProImage
    }
    if (project.id === 'permissionlab') {
      return permissionlabImage
    }
    if (project.id === 'torre-de-hanoi') {
      return torreHanoiImage
    }
    if (project.id === 'comparador-documento') {
      return comparadorDocImage
    }
    return null
  }

  const projectImage = getProjectImage()

  return (
    <>
      <article
        className="group relative bg-[#0f1422] border border-[#1e293b] rounded-xl overflow-hidden hover:border-primary-500/50 transition-all duration-300 cursor-pointer hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary-500/10"
        onClick={handleCardClick}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            handleCardClick()
          }
        }}
        tabIndex={0}
        role="button"
        aria-label={`Abrir demo do projeto ${project.name}`}
      >
        {/* Badges */}
        <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
          {(project as any).flagship && (
            <span className="px-3 py-1 bg-primary-500/20 text-primary-400 text-xs font-semibold rounded-full border border-primary-500/30 backdrop-blur-sm">
              Projeto Principal
            </span>
          )}
          {(project as any).isNew && (
            <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded-full border border-green-500/30 backdrop-blur-sm">
              Novo
            </span>
          )}
        </div>

        {/* Thumbnail - Imagem real ou placeholder */}
        <div className="aspect-video relative overflow-hidden bg-[#0a0e27]">
          {projectImage ? (
            <img
              src={projectImage}
              alt={`Screenshot do projeto ${project.name}`}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary-500/20 via-primary-600/10 to-transparent flex items-center justify-center relative">
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(14,165,233,.1)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px] opacity-30"></div>
              <div className="relative z-10 text-center p-8">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary-500/20 rounded-lg flex items-center justify-center border border-primary-500/30">
                  <svg
                    className="w-8 h-8 text-primary-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white">{project.name}</h3>
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f1422] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>

        <div className="p-6">
          <p className="text-neutral-300 mb-4 line-clamp-2">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium bg-[#1e293b] text-primary-300 rounded-full border border-primary-500/20"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-3">
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-primary-500 text-white text-sm font-semibold rounded-lg hover:bg-primary-600 transition-all hover:scale-105 shadow-lg shadow-primary-500/25 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-[#0f1422]"
            >
              Ver Demo
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center justify-center px-4 py-2 border border-[#1e293b] text-neutral-300 text-sm font-semibold rounded-lg hover:border-primary-500/50 hover:bg-[#1e293b] transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-[#0f1422]"
              aria-label={`Ver código do projeto ${project.name} no GitHub`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <button
              onClick={handleDetailsClick}
              className="inline-flex items-center justify-center px-4 py-2 border border-[#1e293b] text-neutral-300 text-sm font-semibold rounded-lg hover:border-primary-500/50 hover:bg-[#1e293b] transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-[#0f1422]"
              aria-label={`Ver detalhes do projeto ${project.name}`}
            >
              Detalhes
            </button>
          </div>
        </div>
      </article>

      <ProjectModal project={project} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}

const Projects = () => {
  return (
    <section id="projetos" className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Projetos
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Projetos selecionados com foco em aplicações reais, engenharia de front-end e experiência do usuário.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {profile.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
