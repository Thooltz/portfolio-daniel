# 🚀 Como Executar os Projetos Localmente

Os projetos adicionados ao portfolio podem ser executados localmente. Cada projeto está em sua própria pasta e precisa ser executado separadamente.

## 📁 Projetos Disponíveis

### 1. Comparador de Documentos Word
**Pasta:** `Comparaçãodoc`

```bash
cd Comparaçãodoc
npm install
npm run dev
```

Acesse: `http://localhost:5173`

### 2. Torre de Hanoi
**Pasta:** `Torre-de-Hanoi`

```bash
cd Torre-de-Hanoi
npm install
npm run dev
```

Acesse: `http://localhost:5173`

### 3. Sistema de Login
**Pasta:** `sistema-login-vite`

```bash
cd sistema-login-vite
npm install
npm run dev
```

Acesse: `http://localhost:5173`

## ⚠️ Importante

- Cada projeto roda em uma porta diferente (geralmente 5173)
- Se a porta estiver ocupada, o Vite escolherá automaticamente outra porta
- Verifique no terminal qual porta foi atribuída
- Os projetos são independentes e podem ser executados simultaneamente em portas diferentes

## 🔗 Links no Portfolio

Os projetos que têm `localPath` configurado terão um botão "🚀 Abrir Localmente" na página de detalhes, que tentará abrir `http://localhost:5173`.

**Nota:** O botão só funcionará se o projeto estiver rodando localmente na porta especificada.

## 📝 Adicionando Novos Projetos

Para adicionar um novo projeto ao portfolio:

1. Adicione o projeto na pasta raiz
2. Atualize `src/data/projects.ts` com as informações do projeto
3. Adicione `localPath` e `localPort` se quiser que o botão "Abrir Localmente" apareça

Exemplo:
```typescript
{
  id: 'meu-projeto',
  name: 'Meu Projeto',
  // ... outras propriedades
  localPath: 'meu-projeto',
  localPort: 5173
}
```
