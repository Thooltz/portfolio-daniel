export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  githubUrl: string
  demoUrl: string
  thumbnail?: string
}

export const projects: Project[] = [
  {
    id: 'torre-de-hanoi',
    title: 'Torre de Hanói',
    description: 'Jogo/visualização interativa da Torre de Hanói.',
    tags: ['Front-end', 'Interativo', 'JavaScript'],
    githubUrl: 'https://github.com/Thooltz/Torre-de-Hanoi',
    demoUrl: 'https://torre-de-hanoii.vercel.app/',
  },
  {
    id: 'comparador-documento',
    title: 'Comparador de Documento',
    description: 'Comparação de documentos com interface simples e objetiva.',
    tags: ['TypeScript', 'Vite', 'UI'],
    githubUrl: 'https://github.com/Thooltz/Compara--odoc',
    demoUrl: 'https://compara-odoc.vercel.app/',
  },
]
