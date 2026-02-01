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
    whatsapp: '5513998041527', // Formato: 5513999999999 (sem +)
    cv: '', // Caminho para CV PDF (ex: '/cv.pdf'). Deixe vazio para ocultar botão
  },
  
  // Projetos
  projects: [
    {
      id: 'docudiff-pro',
      name: 'DocuDiff Pro',
      description: 'Aplicação web produtiva para comparação, revisão e exportação de documentos.',
      tags: ['React', 'TypeScript', 'Vite', 'Front-end Engineering', 'UX', 'Produtividade'],
      github: 'https://github.com/Thooltz/DocuDiff-Pro---Comparador-e-Revis-o-de-Documentos',
      demo: 'https://docu-diff-pro-comparador-e-revis-o.vercel.app/',
      imageUrl: undefined, // Placeholder será usado
      details: [
        'Aplicação web que permite comparar dois documentos ou textos',
        'Visualização de diferenças por linhas ou palavras',
        'Revisão de mudanças e geração de documento final',
        'Exportação de relatórios e foco em produtividade',
        'Totalmente funcional no browser com UX otimizada'
      ],
      stack: ['React', 'TypeScript', 'Vite', 'Front-end Engineering', 'UX'],
      flagship: true // Projeto principal
    },
    {
      id: 'comparador-documento',
      name: 'Comparador de Documento',
      description: 'Comparação de documentos com interface simples e objetiva.',
      tags: ['TypeScript', 'Vite', 'UI'],
      github: 'https://github.com/Thooltz/Compara--odoc',
      demo: 'https://compara-odoc.vercel.app/',
      imageUrl: '/src/assets/comparador-doc.png',
      details: [
        'Sistema completo de comparação de documentos',
        'Interface intuitiva e responsiva',
        'Processamento eficiente com TypeScript'
      ],
      stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS']
    },
    {
      id: 'torre-de-hanoi',
      name: 'Torre de Hanói',
      description: 'Jogo/visualização interativa da Torre de Hanói.',
      tags: ['Front-end', 'Interativo', 'JavaScript'],
      github: 'https://github.com/Thooltz/Torre-de-Hanoi',
      demo: 'https://torre-de-hanoii.vercel.app/',
      imageUrl: '/src/assets/torre-hanoi.png',
      details: [
        'Implementação interativa do clássico problema matemático',
        'Interface moderna com animações suaves',
        'Código limpo e bem estruturado em React'
      ],
      stack: ['React', 'TypeScript', 'CSS3', 'Vite']
    }
  ],
  
  // Skills organizadas por categoria
  skills: {
    frontend: [
      { name: 'React', icon: '⚛️' },
      { name: 'TypeScript', icon: '📘' },
      { name: 'HTML5', icon: '🌐' },
      { name: 'CSS3', icon: '🎨' },
    ],
    uiux: [
      { name: 'Responsividade', icon: '📱' },
      { name: 'Design System', icon: '🎯' },
      { name: 'Acessibilidade', icon: '♿' },
      { name: 'UI/UX', icon: '✨' },
    ],
    engineering: [
      { name: 'Performance', icon: '⚡' },
      { name: 'Boas Práticas', icon: '✅' },
      { name: 'Código Limpo', icon: '🧹' },
      { name: 'Testes', icon: '🧪' },
    ],
    tooling: [
      { name: 'Git', icon: '🔀' },
      { name: 'Vite', icon: '⚡' },
      { name: 'APIs REST', icon: '🔌' },
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
