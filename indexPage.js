export const indexPage = () => {

  const headEl = document.querySelector('head')
  const bodyEl = document.querySelector('body')

  headEl.innerHTML = `<meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="main.css">
  <title>WMSNAPS</title>`
  
  bodyEl.innerHTML = `<header></header>
  
  <div class="linktitles">
    <ul class="navbar">
      <li id="about">About The Photographer</li>
      <li id="seeAll">See All</li>
      <li id="seeBW">See B&W</li>
      <li id="seeColor">See Color</li>
      <li id="seeDigital">See Digital</li>
      <li id="seeFilm">See Film</li>
      <li id="seePets">See Furry Friends</li>
    </ul>
  </div>
  <main>
    <div class="content-container">

    </div>
  </main>
  
  <script type="module" src="main.js"></script>`
}