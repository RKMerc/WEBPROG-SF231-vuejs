
<template>
<head>
  <title>My first Vue page</title>
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="css/flexbox-grid.css?version=0.1">
  <link rel="stylesheet" href="css/pink.css?version=0.1">
  <link rel="stylesheet" href="css/images.css?version=0.2">
  <link rel="stylesheet" href="css/shopping.css?version=0.1">
</head>
<body>

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
</main>

<p>Some of the game genres that I have in mind are:</p>
<ol>
 <li>Strategy</li>
 <li>RPG</li>
 <li>Puzzle</li>
 <li>Co-op</li>
 <li>Adventure</li>
</ol>
</template>
    
<script></script>
<style>
body {
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

button {
    padding: 10px 20px;
    background-color: #ffffff;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease; /* Smooth transition */
  }
  
  button.hovered {
    background-color: #45a049; /* Darker green on hover */
      color: black;
  }
</style>