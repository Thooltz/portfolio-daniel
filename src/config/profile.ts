// Configuração centralizada do portfólio
export const profile = {
  name: 'Daniel Lima',
  title: 'Desenvolvedor Front-end (React / TypeScript)',
  headline: 'Interfaces modernas, acessíveis e rápidas — com foco em qualidade visual e engenharia de front-end.',
  available: true, // Badge "Disponível para oportunidades"
  
  // Links de contato
  links: {
    github: 'https://github.com/Thooltz',
    linkedin: 'https://linkedin.com/in/daniel-lima-3202b239b',
    email: 'daniclimapessoal@gmail.com',
    whatsapp: '5513996369544', // Formato: 5513999999999 (sem +)
    cv: '/cv-daniel.pdf', // Caminho para CV PDF na pasta public
  },
  
  // Projetos (apenas metadados - textos vêm do i18n)
  projects: [
    {
      id: 'docudiff-pro',
      tags: ['React', 'TypeScript', 'Vite', 'Front-end Engineering', 'UX', 'Produtividade'],
      github: 'https://github.com/Thooltz/DocuDiff-Pro---Comparador-e-Revis-o-de-Documentos',
      demo: 'https://docu-diff-pro-comparador-e-revis-o.vercel.app/',
      imageUrl: undefined,
      stack: ['React', 'TypeScript', 'Vite', 'Front-end Engineering', 'UX'],
      flagship: true
    },
    {
      id: 'permissionlab',
      tags: ['React', 'TypeScript', 'Vite', 'State Management', 'UX Corporativa'],
      github: 'https://github.com/Thooltz/PermissionLab',
      demo: 'https://permission-lab.vercel.app/',
      imageUrl: undefined,
      stack: ['React', 'TypeScript', 'Vite', 'State Management', 'UX Corporativa'],
      isNew: true
    },
    {
      id: 'smartlist',
      tags: ['React', 'TypeScript', 'Vite', 'Firebase Auth', 'Firestore', 'Styled Components', 'Material UI'],
      github: '',
      demo: 'https://listamercado-three.vercel.app/lists',
      imageUrl: undefined,
      stack: ['React', 'TypeScript', 'Vite', 'Firebase Auth', 'Firestore', 'Styled Components', 'Material UI', 'Tempo Real']
    },
    {
      id: 'treino-app',
      tags: ['React', 'TypeScript', 'Vite', 'CSS'],
      github: '',
      demo: 'https://treino-five-woad.vercel.app/',
      imageUrl: undefined,
      stack: ['React', 'TypeScript', 'Vite', 'CSS']
    },
    {
      id: 'comparador-documento',
      tags: ['TypeScript', 'Vite', 'UI'],
      github: 'https://github.com/Thooltz/Compara--odoc',
      demo: 'https://compara-odoc.vercel.app/',
      imageUrl: '/src/assets/comparador-doc.png',
      stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS']
    },
    {
      id: 'torre-de-hanoi',
      tags: ['Front-end', 'Interativo', 'JavaScript'],
      github: 'https://github.com/Thooltz/Torre-de-Hanoi',
      demo: 'https://torre-de-hanoii.vercel.app/',
      imageUrl: '/src/assets/torre-hanoi.png',
      stack: ['React', 'TypeScript', 'CSS3', 'Vite']
    }
  ],
  
  // Skills organizadas por categoria (apenas metadados - textos vêm do i18n)
  skills: {
    frontend: [
      { id: 'react', icon: '⚛️' },
      { id: 'typescript', icon: '📘' },
      { id: 'html5', icon: '🌐' },
      { id: 'css3', icon: '🎨' },
    ],
    uiux: [
      { id: 'responsiveness', icon: '📱' },
      { id: 'designSystem', icon: '🎯' },
      { id: 'accessibility', icon: '♿' },
      { id: 'uiux', icon: '✨' },
    ],
    engineering: [
      { id: 'performance', icon: '⚡' },
      { id: 'bestPractices', icon: '✅' },
      { id: 'cleanCode', icon: '🧹' },
      { id: 'testing', icon: '🧪' },
    ],
    tooling: [
      { id: 'git', icon: '🔀' },
      { id: 'vite', icon: '⚡' },
      { id: 'restApis', icon: '🔌' },
    ]
  },
  
  // Highlights
  highlights: [
    {
      title: 'Componentização e UI consistente',
      description: 'Arquitetura baseada em componentes reutilizáveis e design system consistente'
    },
    {
      title: 'TypeScript e código escalável',
      description: 'Type safety e código organizado para projetos de longo prazo'
    },
    {
      title: 'Performance e acessibilidade',
      description: 'Otimização contínua e interfaces acessíveis para todos os usuários'
    },
    {
      title: 'Integração com APIs e tratamento de estados',
      description: 'Experiência sólida em consumo de APIs REST e gerenciamento de estado'
    }
  ],
  
  // Sobre
  about: `Desenvolvedor Front-end com experiência prática em React e TypeScript. Foco em criar interfaces modernas, performáticas e acessíveis. Especializado em componentização, integração com APIs REST e boas práticas de desenvolvimento. Comprometido com código limpo, performance e entrega de valor real para projetos.`
}

// Helpers
export const hasLink = (url: string | undefined): boolean => {
  return url !== undefined && url !== '' && url !== '#'
}

export const getWhatsAppUrl = (number: string): string => {
  if (!number) return ''
  const cleanNumber = number.replace(/\D/g, '')
  return `https://wa.me/${cleanNumber}`
}
