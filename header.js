export const showHeader = () => { 
  const headerEl = document.querySelector("header")
  headerEl.innerHTML = `<div>
  <ul class="navbar">
      <li class="logo"><img src="./images/wmsnaps.png" alt="wmsnaps logo"></li>
      <li class="navItem" id="about">About The Photographer</li>
      <li class="navItem" id="seeAll">See All</li>
      <li class="navItem" id="seeBW">See B&W</li>
      <li class="navItem" id="seeColor">See Color</li>
      <li class="navItem" id="seeDigital">See Digital</li>
      <li class="navItem" id="seeFilm">See Film</li>
      <li class="navItem" id="seePets">See Furry Friends</li>
    </ul>
  </div>`
}

{/* <div class="header"></div> */}
// `<div id="logo-image">
//   <img src="./images/wmsnaps.png" alt="wmsnaps logo">
//   </div>