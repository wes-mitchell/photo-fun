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
    <li><a href="about.html">About The Photographer</a></li>
  </ul>
  <div class="dropdown">
    <button class="dropbtn" id="filterbutton">Show me</button>
    <div class="dropdown-content">
      <p value="film">film</p>
      <p value="#">Link 2</p>
      <p value="#">Link 3</p>
    </div>
  </div>
  </div>
  <main>
    <div class="content-container">

    </div>
  </main>
  
  <script type="module" src="main.js"></script>`
}