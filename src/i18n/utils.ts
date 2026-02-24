import { Translations } from './index'

/**
 * Helper function para gerar chaves de tradução de projetos de forma type-safe
 * @param projectId - ID do projeto (ex: 'smartlist', 'docudiff-pro')
 * @param field - Campo do projeto (ex: 'title', 'description', 'details')
 * @returns Chave de tradução formatada (ex: 'projects.smartlist.title')
 */
export const projectKey = (projectId: string, field: 'title' | 'description' | 'details'): keyof Translations => {
  return `projects.${projectId}.${field}` as keyof Translations
}

/**
 * Helper para obter detalhes de um projeto como array
 * @param t - Função de tradução
 * @param projectId - ID do projeto
 * @returns Array de strings com os detalhes
 */
export const getProjectDetails = (t: (key: keyof Translations) => string, projectId: string): string[] => {
  const detailsKey = projectKey(projectId, 'details')
  const detailsString = t(detailsKey)
  
  // Se retornar fallback (⚠️), retorna array vazio
  if (detailsString.startsWith('⚠️')) {
    return []
  }
  
  // Separa por quebra de linha
  return detailsString.split('\n').filter(Boolean)
}
