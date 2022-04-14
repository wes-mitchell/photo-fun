import { showHeader } from "./header.js";
import { imageList, filmList, digitalList, petList, bwList, colorList } from "./imageList.js";
import { landingPage } from "./landingPage.js";
import { indexPage } from "./indexPage.js";
// import { getImageById } from "./imageData.js";
// import { showRaw } from "./imageData.js";

const bodyEl = document.querySelector('body')
const headEl = document.querySelector('head')
const imageEl = document.querySelector(".content-container")

// ========= Starts Page w/ About Me HTML File =======

landingPage()


// ======= Loads Index Page with all images ======

const startPortfolio = () => {
    indexPage()
    showHeader()
    imageList()
}

// ======== handles all event clicks for Nav Bar ======

bodyEl.addEventListener("click", event => {
  if (event.target.id === 'landSeeFilm') {
    startPortfolio()
    filmList()
  } else if (event.target.id === 'landSeeAll') {
    startPortfolio()
  } else if (event.target.id === 'landSeeDigital') {
    startPortfolio()
    digitalList()
  } else if (event.target.id === 'landSeePets') {
    startPortfolio()
    petList()
  } else if (event.target.id === 'landSeeBW') {
    startPortfolio()
    bwList()
  } else if (event.target.id === 'landSeeColor') {
    startPortfolio()
    colorList()
  } else if (event.target.id === 'seeAll') {
    imageList()
  } else if (event.target.id === 'seeDigital') {
    digitalList()
  } else if (event.target.id === 'seePets') {
    petList()
  } else if (event.target.id === 'seeFilm') {
    filmList()
  } else if (event.target.id === 'seeBW') {
    bwList()
  } else if (event.target.id === 'seeColor') {
    colorList()
  } else if (event.target.id === "about") {
    landingPage()
  }
})

// ======= splits image id and re-directs to raw image ====


// bodyEl.addEventListener("click", event => {
//   if (event.target.id.startsWith("thumb")) {
//     console.log("image clicked");
//     const imageId = event.target.id.split("__")[1];
//     // console.log(imageId);
//     showRaw(imageId)
//     } 
// })

