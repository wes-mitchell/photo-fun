export const showHeader = () => { 
  const imageEl = document.querySelector("header")
  let imageHTMLRep = ''
  imageEl.innerHTML = `<div id="logo-image">
  <img src="./images/wmsnaps.png" alt="wmsnaps logo">
  </div>`
}