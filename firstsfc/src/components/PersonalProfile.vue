
<template>
<h1>Personal Profile Web page</h1>

<main class="grid-container">
  <article class="flex-container">
   <h2>About Me:</h2>
     <p>
      I am Rafael Kenneth A. Mercado. I am currently studying in Asia Pacific College with an interest in game design and game development.
     </p>
  </article>
 
  <article class="flex-container">
   <h2>Education / Achievements: </h2>
    <p>
     I am currently taking an undergraduate degree as part of my college education and I have also completed my education in high school (Junior/Senior).
    </p>
  </article>
 
  <article class="flex-container">
   <h2>Course: </h2>
     <p>
      The undergraduate degree that I am taking is BSCS (Bachelor of Science in Computer Science) that is offered by APC.
     </p>
  </article>
 
  <article class="flex-container">
   <h2>IT Experience: </h2>
     <p>
      I have done some light coding in the past both as a hobby/personal interest as well as some moderate coding for one of my research papers in the past.
     </p>
  </article>
 
  <article class="flex-container">
   <h2>Hobbies & Interests: </h2>
     <p>
      One of my main hobbies is to read and play video games. Reading provides me with much entertainment for times when I am either bored or have completed my tasks. Gaming helps relax my mind as well as de-stress from work or studies and helps provide me with some insight as to how other games implement unique systems and game mechanics into their games. This experience is valuable to me both for social and professional improvements as I aspire to be a game developer as well as allow me to see what is both popular and engaging for different kinds of people with regards to games.
     </p>
  </article>
 
  <article class="flex-container">
   <h2>Goals in Life / Dream: </h2>
     <p>
      My main goal is to become a game developer and eventually run my own game development studio in the future. Another dream of mine is to set up my own internet cafe as it was one of the main influences as to why I want to become a game developer.
     </p>
  </article>

<p>Some of the game genres that I have in mind are:</p>
<ol>
 <li>Strategy</li>
 <li>RPG</li>
 <li>Puzzle</li>
 <li>Co-op</li>
 <li>Adventure</li>
</ol>
</main>
</template>
    
<script></script>
<style>

h1 {
  text-justify: auto;
}

main {
  display: flex;
  flex-direction: row;
  max-width: 500px;
  margin: 0 auto;
}

body {
    padding: 1rem;
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
    background-image: url(https://png.pngtree.com/thumb_back/fh260/background/20211025/pngtree-bottom-console-image_913604.png);
    background-attachment: fixed;
}

article {
  margin: 1rem 0;
  font-family: 'Courier New', Courier, monospace;
}

.grid-container {
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
}

.flex-container {
  display: flex;
  flex-wrap: wrap;
  flex: 2;
  background-color:lightsteelblue;
  border-radius: 1rem;
  padding: 2rem;
}

.flex-container > p {
  margin: 0.25em 1rem 1rem;
}


</style>