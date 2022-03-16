import { getImages } from "./imageData.js";
import { imageHTML } from "./image.js";

export const imageList = () => { 
  const imageEl = document.querySelector(".content-container")
  const images = getImages()
  let imageHTMLRep = '';

  for (const image of images) { 
    imageHTMLRep += imageHTML(image)
   }
   imageEl.innerHTML +=`${imageHTMLRep}`
 }