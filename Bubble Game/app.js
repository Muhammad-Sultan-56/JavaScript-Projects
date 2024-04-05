// function to create bubbles with random values
function makeBubbles() {
  let bubble = "";
  for (let i = 1; i <= 144; i++) {
    let random = Math.floor(Math.random() * 10);
    bubble += `<div class="bubble">${random}</div>`;
  }

  document.getElementById("pannal-bottom").innerHTML = bubble;
}


// function to run timmer
timer = 10;
let randomHit = 0;

function runTimer() {
  let timeFun = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.getElementById("time").innerText = timer;
    } else {
      clearInterval(timeFun);
      document.getElementById("pannal-bottom").innerHTML = `
      <h1>Game Over</h1>
      <p>You can't Choose the right Number on Time. Try Again!</p>
      `;
    }
  }, 1000);
}


// fucntion to get hit points randomly
function getNewhit() {
  randomHit = Math.floor(Math.random() * 10);
  document.querySelector("#hit").innerText = randomHit;
}


// function to increase score
let totalScore = 0;

function increaseScore() {
  totalScore += 10;
  document.querySelector("#score").innerText = totalScore;
}


// function to click on bubble and get value
document.getElementById("pannal-bottom").addEventListener("click", function (bubble) {
    let bubbleNumber = Number(bubble.target.innerText);
    if (bubbleNumber === randomHit) {
      increaseScore();
      makeBubbles();
      getNewhit();
      timer = 10;
    }
  });

  
// calling the functions
runTimer();
makeBubbles();
getNewhit();
