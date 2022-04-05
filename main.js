import { showHeader } from "./header.js";
import { imageList, filmList } from "./imageList.js";
import { landingPage } from "./landingPage.js";
import { indexPage } from "./indexPage.js";

const bodyEl = document.querySelector('body')
const headEl = document.querySelector('head')

// ========= Starts Page w/ About Me HTML File =======

landingPage()


// ======= Loads Page with all images ======

const startPortfolio = () => {
    indexPage()
    showHeader()
    imageList()
}



bodyEl.addEventListener("switch", event => {
  if (event.target.value === 'film') {
    filmList()
  }
})

bodyEl.addEventListener("click", event => {
  if (event.target.id === 'seeAll') {
    startPortfolio()
  }
})



// const showfilteredPosts = () => {
//   const postEl = document.querySelector(".content-container")
//   const filmFilter = useImages().filter(singleImg => {
//     if (singleImg.media === 'film') {
//       return singleImg
//     }
//   })
//   postEl.innerHTML = EntryListComponent(filteredData)
// }  

// eventElement.addEventListener("change", event => {
//   if (event.target.id === "mood-drop") {
//     const currentMood = event.target.value
//     showMoodPosts(currentMood)
//   }
// })