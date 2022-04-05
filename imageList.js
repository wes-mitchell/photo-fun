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
     imageEl.innerHTML +=`${imageHTMLRep}`
  })
}

export const filmList = () => { 
  const imageEl = document.querySelector(".content-container")
  let imageHTMLRep = ''
  useImages().filter(singleImg => {
    if (singleImg.media === "film") {
      return singleImg 
    }
    imageHTMLRep += imageHTML(singleImg)
  })
  imageEl.innerHTML +=`${imageHTMLRep}`
}
