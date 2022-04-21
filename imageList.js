import { getImages } from "./imageData.js";
import { imageHTML } from "./image.js";

// Grabs all images from json and populates DOM with images.

export const imageList = () => {
  const imageEl = document.querySelector(".content-container")
  let imageHTMLRep = ''
  getImages().then(allImages => {
    for (const image of allImages.images.sort(function (a, b) { return 0.5 - Math.random() })) {
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
    for (const image of allImages.images.sort(function (a, b) { return 0.5 - Math.random() })) {
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
    for (const image of allImages.images.sort(function (a, b) { return 0.5 - Math.random() })) {
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
    for (const image of allImages.images.sort(function (a, b) { return 0.5 - Math.random() })) {
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
    for (const image of allImages.images.sort(function (a, b) { return 0.5 - Math.random() })) {
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
    for (const image of allImages.images.sort(function (a, b) { return 0.5 - Math.random() })) {
      if (image.color === "true") {
        imageHTMLRep += imageHTML(image)
      }
    }
    imageEl.innerHTML = ''
    imageEl.innerHTML = `${imageHTMLRep}`
  })
}

// ====== grabs image by id and shows raw image =====

// export const showRaw = (insertedImage) => {
//   const imageEl = document.querySelector(".content-container")
//   let imageHTMLRep = ''
//   getImages().then(allImages => {
//     const foundImage = allImages.images.find(image => image.id === insertedImage.id)
//     imageEl.innerHTML = 
    
//   })
//   imageEl.innerHTML = `${imageHTMLRep}`
// }
