# Portfolio Daniel Lima - Top-Tier

Portfolio profissional premium para Desenvolvedor Front-end, desenvolvido com React, TypeScript e Tailwind CSS. Design minimalista, performance otimizada e focado em maximizar oportunidades de contratação.

## ✨ Características

- ✅ **Design Premium**: Visual minimalista e profissional
- ✅ **Performance Otimizada**: Lighthouse alto, assets otimizados
- ✅ **Acessibilidade Completa**: Navegação por teclado, foco visível, contraste adequado
- ✅ **SEO Completo**: Meta tags, OG tags, robots.txt
- ✅ **Responsivo Impecável**: Mobile-first, desktop perfeito
- ✅ **Modo Claro/Escuro**: Toggle com preferência do sistema
- ✅ **Microinterações**: Animações sutis e profissionais
- ✅ **Modal de Projetos**: Detalhes dos projetos com modal acessível
- ✅ **Toast Notifications**: Feedback visual para ações do usuário
- ✅ **Configuração Centralizada**: Tudo configurável em um único arquivo

## 🚀 Tecnologias

- **React 18** - Biblioteca UI
- **TypeScript** - Type safety
- **Vite** - Build tool rápida
- **Tailwind CSS** - Estilização utility-first
- **Inter Font** - Tipografia moderna

## 📦 Instalação

```bash
npm install
```

## 🛠️ Desenvolvimento

```bash
npm run dev
```

Acesse `http://localhost:5173`

## 🏗️ Build

```bash
npm run build
```

Os arquivos serão gerados na pasta `dist/`

## ⚙️ Configuração

### Arquivo Principal: `src/config/profile.ts`

Todas as configurações estão centralizadas neste arquivo:

```typescript
export const profile = {
  name: 'Daniel Lima',
  title: 'Desenvolvedor Front-end (React / TypeScript)',
  headline: '...',
  available: true, // Badge "Disponível para oportunidades"
  
  links: {
    github: 'https://github.com/...',
    linkedin: 'https://linkedin.com/in/...',
    email: 'seu-email@exemplo.com',
    whatsapp: '5513999999999', // Sem +, apenas números
    cv: '/cv.pdf', // Caminho para CV ou deixe vazio
  },
  
  projects: [...],
  skills: {...},
  highlights: [...],
  about: '...'
}
```

### Links Automáticos

- Se um link estiver vazio (`''`), o botão será **ocultado automaticamente**
- WhatsApp: use apenas números (ex: `5513999999999`)
- CV: coloque o arquivo em `public/cv.pdf` e configure o caminho

### Foto do Perfil

A foto deve estar em `src/assets/profile.jpeg`. Se não existir, o componente Hero mostrará um placeholder.

## 🚀 Deploy na Vercel

### Opção 1: Deploy via CLI

1. Instale a Vercel CLI:
```bash
npm i -g vercel
```

2. Faça login:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

### Opção 2: Deploy via GitHub

1. Faça push do código para um repositório GitHub
2. Acesse [vercel.com](https://vercel.com)
3. Importe o repositório
4. A Vercel detectará automaticamente as configurações
5. Clique em "Deploy"

### Configurações Importantes

- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

O arquivo `vercel.json` já está configurado para SPA routing.

## 📁 Estrutura

```
src/
├── components/     # Componentes React
│   ├── Header.tsx  # Navbar com indicador de seção ativa
│   ├── Hero.tsx    # Hero com foto e CTAs
│   ├── Highlights.tsx
│   ├── Projects.tsx # Cards com modal de detalhes
│   ├── Skills.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── Toast.tsx
├── config/         # Configurações centralizadas
│   └── profile.ts  # ⭐ Arquivo principal de configuração
├── hooks/          # Custom hooks
│   ├── useTheme.ts
│   └── useToast.ts
├── assets/         # Imagens e assets
│   └── profile.jpeg
└── index.css       # Estilos globais e Tailwind
```

## 🎨 Features Implementadas

### Modo Claro/Escuro
- Toggle no header
- Preferência do sistema como padrão
- Persistência no localStorage

### Modal de Projetos
- Clique em "Detalhes" abre modal
- Fecha com ESC, clique fora ou botão X
- Totalmente acessível

### Toast Notifications
- Copiar e-mail mostra toast de sucesso
- Auto-dismiss após 3 segundos
- Fechável manualmente

### Navegação
- Scroll suave para âncoras
- Indicador de seção ativa (IntersectionObserver)
- Navbar fixa com backdrop blur

### Acessibilidade
- Navegação por teclado completa
- Focus visível em todos os elementos
- ARIA labels apropriados
- Headings semânticos
- Contraste adequado (WCAG)

## 📝 Personalização

### Adicionar Novo Projeto

Edite `src/config/profile.ts`:

```typescript
projects: [
  {
    id: 'meu-projeto',
    name: 'Meu Projeto',
    description: 'Descrição curta',
    tags: ['React', 'TypeScript'],
    github: 'https://github.com/...',
    demo: 'https://demo.com',
    details: [
      'Detalhe 1',
      'Detalhe 2',
      'Detalhe 3'
    ],
    stack: ['React', 'TypeScript', 'Vite']
  }
]
```

### Adicionar Skill

Edite `src/config/profile.ts` na seção `skills`:

```typescript
skills: {
  frontend: [
    { name: 'Nova Skill', icon: '🎯' }
  ]
}
```

## 🔧 Troubleshooting

### Imagem não aparece
- Verifique se `src/assets/profile.jpeg` existe
- Verifique o import no `Hero.tsx`

### Build falha
- Execute `npm install` novamente
- Verifique se todos os imports estão corretos
- Verifique se `src/config/profile.ts` está completo

### Modo escuro não funciona
- Verifique se `darkMode: 'class'` está no `tailwind.config.js`
- Verifique se o hook `useTheme` está sendo usado

## 📄 Licença

Uso pessoal.

---

**Desenvolvido com foco em qualidade, performance e oportunidades de contratação.**
