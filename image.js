export const imageHTML = (image) => { 
  return `<div class="image-card">
  <div class="image">
  <h2 class="title">${image.title}</h2>
  <img src="${image.url}" alt="">
  <p class="year">${image.location} - ${image.year}</p>
  <hr>
  <p class="image-description">${image.description}</p>
  </div>
  </div>
  `
}