// Configuração de links de contato
// Preencha com seus links reais ou deixe vazio para ocultar o botão

export const GITHUB_URL = 'https://github.com/Thooltz'
export const LINKEDIN_URL = 'https://linkedin.com/in/daniel-lima-3202b239b'
export const EMAIL = 'daniclimapessoal@gmail.com'

// Função helper para verificar se um link está configurado
export const hasLink = (url: string | undefined): boolean => {
  return url !== undefined && url !== '' && url !== '#'
}
