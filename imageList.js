import { getImages, useImages } from "./imageData.js";
import { imageHTML } from "./image.js";

// Grabs all images from json and populates DOM with images.

export const imageList = () => { 
  const imageEl = document.querySelector(".content-container")
  let imageHTMLRep = ''
  getImages().then(allImages => {
    for (const image of allImages) { 
      imageHTMLRep += imageHTML(image)
     }
     imageEl.innerHTML = `${imageHTMLRep}`
  })
}

// ===== sorts images with film value type and populates dom with images =======

export const filmList = () => { 
  const imageEl = document.querySelector(".content-container")
  let imageHTMLRep = ''
  getImages().then(allImages => {
    for (const image of allImages) { 
      if (image.media === "film") {
      imageHTMLRep += imageHTML(image)
     }
    }
      imageEl.innerHTML = ''
      imageEl.innerHTML = `${imageHTMLRep}`
  })
}

// ====== sorts images with digital value type and populates dom with images ======

export const digitalList = () => { 
  const imageEl = document.querySelector(".content-container")
  let imageHTMLRep = ''
  getImages().then(allImages => {
    for (const image of allImages) { 
      if (image.media === "digital") {
      imageHTMLRep += imageHTML(image)
     }
    }
      imageEl.innerHTML = ''
      imageEl.innerHTML = `${imageHTMLRep}`
  })
}

// ====== sorts images with digital value type and populates dom with images ======

export const petList = () => { 
  const imageEl = document.querySelector(".content-container")
  let imageHTMLRep = ''
  getImages().then(allImages => {
    for (const image of allImages) { 
      if (image.category === "pets") {
      imageHTMLRep += imageHTML(image)
     }
    }
      imageEl.innerHTML = ''
      imageEl.innerHTML = `${imageHTMLRep}`
  })
}

// ====== sorts and displays all B & W images ======

export const bwList = () => { 
  const imageEl = document.querySelector(".content-container")
  let imageHTMLRep = ''
  getImages().then(allImages => {
    for (const image of allImages) { 
      if (image.color === "false") {
      imageHTMLRep += imageHTML(image)
     }
    }
      imageEl.innerHTML = ''
      imageEl.innerHTML = `${imageHTMLRep}`
  })
}

// ===== sorts and siplays all Color images ======

export const colorList = () => { 
  const imageEl = document.querySelector(".content-container")
  let imageHTMLRep = ''
  getImages().then(allImages => {
    for (const image of allImages) { 
      if (image.color === "true") {
      imageHTMLRep += imageHTML(image)
     }
    }
      imageEl.innerHTML = ''
      imageEl.innerHTML = `${imageHTMLRep}`
  })
}

