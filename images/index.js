// Roll the dice button
var button = document.querySelector(".btn");
button.addEventListener("click", start);

function start() {
  // First Dice
  var randomNumber1 = (Math.floor(Math.random() * 6) + 1); // 1-6
  document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png"); // dice1.png - dice6.png

  // Second Dice
  var randomNumber2 = (Math.floor(Math.random() * 6) + 1); // 1-6
  document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

  // Results
  // player 1 wins
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "&#128681; Player 1 Wins!";
  }
  // player 2 wins
  else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! &#128681;";
  }
  // draw 
  else {
    document.querySelector("h1").innerHTML = "Draw!";
  }

}