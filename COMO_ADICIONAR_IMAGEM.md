# 📸 Como Adicionar a Imagem do Perfil

## Método 1: Usando Base64 (Recomendado)

1. Abra o arquivo `src/assets/profileImage.ts`
2. Cole a string base64 COMPLETA da imagem no lugar da string atual
3. A string deve começar com `data:image/jpeg;base64,` ou `data:image/png;base64,`
4. A string deve estar completa (sem "..." no final)

Exemplo:
```typescript
export const PROFILE_IMAGE_BASE64 = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKcBBgYGBgcGBwgIBwoLCgsKDw4MDA4PFhAREBEQFiIVGRUVGRUiHiQeHB4kHjYqJiYqNj40MjQ+TERETF9aX3x8p...' // STRING COMPLETA AQUI
```

## Método 2: Usando Arquivo de Imagem

1. Coloque sua imagem na pasta `public` com o nome `profile-image.jpg`
2. O componente tentará carregar automaticamente
3. Formatos aceitos: JPG, PNG, JPEG
4. Tamanho recomendado: 800x800px (mínimo 400x400px)

## ⚠️ Importante

- A imagem base64 deve estar COMPLETA (sem cortes)
- Se a string estiver truncada (com "..." no final), a imagem não aparecerá
- A imagem será exibida automaticamente quando estiver correta

## 🔧 Converter Imagem para Base64

Se você tem a imagem em arquivo, pode converter para base64 usando:

**Online:**
- https://www.base64-image.de/
- https://base64.guru/converter/encode/image

**No terminal (Node.js):**
```javascript
const fs = require('fs');
const image = fs.readFileSync('./sua-imagem.jpg');
const base64 = image.toString('base64');
console.log(`data:image/jpeg;base64,${base64}`);
```
