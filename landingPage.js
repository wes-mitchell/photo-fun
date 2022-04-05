export const landingPage = () => { 

  const bodyEl = document.querySelector('body')
  const headEl = document.querySelector('head')

  headEl.innerHTML = `  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="aboutme.css">
  <title>About Me</title>`
  
  bodyEl.innerHTML = ` <main class="background-image" id="bg">
  <div>
  <div class="aboutParagraph"><p>Welcome to my fun little photography portfolio. My name is Wes Mitchell and I've been a professional touring musician since 2015 and developed <= (see what I did there) a passion for film photography to pass the time after sound checks and mindless meanderings around the town I'm in. It's mostly just for fun and all images are raw with no post editing because I enjoy the challenge of "can it look great" with no help.<br><br>Most the film images you are seeing are the hand seleceted few from a full roll that I feel are good enough to display. I'm super picky and there is usually between 2 and 5/6 images per roll I deem of this! Take a look around, have fun, I'm not a pro. Enjoy.</p></div>
  <div class="filterButton">
    <div class="dropdown">
      <button class="dropbtn">Show me Stuff</button>
      <div class="dropdown-content">
        <p id="seeAll">See All</p>
        <p id="seefilm">See Film</p>
        <p id="seeDigital">See Digital</p>
        <p id="seePets">See Furry Friends</p>
        
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