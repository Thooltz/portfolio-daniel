// Imagem base64 do perfil de Daniel
// IMPORTANTE: Cole aqui a string base64 COMPLETA da imagem (sem cortes, sem "...")
// A string deve começar com: data:image/jpeg;base64, ou data:image/png;base64,
// 
// Para converter uma imagem para base64:
// 1. Use um conversor online: https://www.base64-image.de/
// 2. Ou use este código Node.js:
//    const fs = require('fs');
//    const image = fs.readFileSync('./sua-imagem.jpg');
//    const base64 = image.toString('base64');
//    console.log(`data:image/jpeg;base64,${base64}`);

// COLE A STRING BASE64 COMPLETA ABAIXO (substitua a string atual):
export const PROFILE_IMAGE_BASE64 = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKcBBgYGBgcGBwgIBwoLCgsKDw4MDA4PFhAREBEQFiIVGRUVGRUiHiQeHB4kHjYqJiYqNj40MjQ+TERETF9aX3x8p//CABEIBj8ErwMBIgACEQEDEQH/xAAxAAADAQEBAQAAAAAAAAAAAAAAAQIDBAUGAQEBAQEBAQAAAAAAAAAAAAAAAQIDBAX/2gAMAwEAAhADEAAAAvnNsOjITBMQ2mJMEMBpg00AYmAmnK6i5ptNYy1ysymlY6ABghgAAADQMAAAAAAAAuLjS89JpgKk0kpqxtME0KXICYCAAAAAEEwQ0oAgACYIC1DQgUa65bZ1rU1jai4sSa3yANYQwQwkYE3KywUaajGyDLEAJME04JqVmLlQCkmpXrlrz69WuWvn...'

// Se preferir usar um arquivo de imagem, coloque em public/profile-image.jpg
// e o componente tentará carregar automaticamente
