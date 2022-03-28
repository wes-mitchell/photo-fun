export const showHeader = () => { 
  const imageEl = document.querySelector("header")
  let imageHTMLRep = ''
  imageEl.innerHTML = `<div id="logo-image">
  <img src="./images/wmsnaps-logo.png" alt="wmsnaps logo">
  </div>`
}