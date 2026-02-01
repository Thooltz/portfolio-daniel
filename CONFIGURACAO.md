# 🔧 Configuração do Portfolio

## 📝 Itens que precisam ser personalizados

### 1. Links de Contato
Edite o arquivo `src/components/Contact.tsx` e atualize os links:

- **WhatsApp**: `https://wa.me/5511999999999` → Substitua pelo seu número
- **LinkedIn**: `https://linkedin.com/in/daniel-dev` → Substitua pelo seu perfil
- **GitHub**: `https://github.com/daniel-dev` → Substitua pelo seu usuário
- **Email**: `daniel@email.com` → Substitua pelo seu email

### 2. Imagem do Perfil
- Coloque sua imagem em: `public/profile-image.jpg`
- Veja instruções detalhadas em: `public/INSTRUCOES_IMAGEM.md`

### 3. Projetos
Edite o arquivo `src/components/Projects.tsx` e atualize:
- Nomes dos projetos
- Descrições
- Tecnologias utilizadas
- Links de demo e código

### 4. Informações Pessoais
- Nome: Já está como "Daniel" (pode alterar se necessário)
- Título: "Desenvolvedor Front-end" (pode personalizar)

## 🚀 Como executar

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build
```

## 📦 Deploy

Após o build, a pasta `dist` conterá os arquivos estáticos prontos para deploy em:
- Vercel
- Netlify
- GitHub Pages
- Qualquer servidor estático
