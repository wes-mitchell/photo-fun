export const landingPage = () => { 

  const bodyEl = document.querySelector('body')
  const headEl = document.querySelector('head')

  headEl.innerHTML = `<meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="aboutme.css">
  <title>About Me</title>`
  
  bodyEl.innerHTML = `<main class="background-image" id="bg">
  <div class="landContent">
  <div class="aboutParagraph"><p>Welcome to my fun little photography portfolio. My name is Wes Mitchell and I've been a professional touring musician since 2015 and developed &#8678; (see what I did there) a passion for film photography to pass the time after sound checks and mindless meanderings around the town I'm in. It's mostly just for fun and all images are raw with no post editing because I enjoy the challenge of "can it look great" with no help.<br><br>Most the film images you are seeing are the hand seleceted few from a full roll that I feel are good enough to display. I'm super picky and there is usually between 2 and 5/6 images per roll I deem of this! Take a look around, have fun, I'm not a pro. Click what you're interested in below and Enjoy.</p></div>
  <div class="navList">
    <ul class="dropdown-content">
      <li id="landSeeAll">See All</li> /
      <li id="landSeeBW">See B&W</li> /
      <li id="landSeeColor">See Color</li> /
      <li id="landSeeDigital">See Digital</li> /
      <li id="landSeeFilm">See Film</li> /
      <li id="landSeePets">See Furry Friends</li>
    </ul>
    </div>
    </div>
  </div>
  </div>
  </div>
  <!-- <div class="bgimage-1">
    <!-- <img src="./images/ryman.JPG" alt="ryman stage from drummer perspective" class="bg"> -->
  </div> -->
<script type="module" src="main.js"></script>
</main>`
}