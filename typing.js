// Variables
let input = document.getElementById("typingInput");
let liveText = document.getElementById("liveText");
let startBtn = document.getElementById("startBtn");
let timerDisplay = document.getElementById("timer");
let finalResult = document.getElementById("finalResult");
let bestScoreDisplay = document.getElementById("bestScore");

let timeLeft = 60;
let timer;


// Page load show best score 
let bestScore = localStorage.getItem("bestScore");
if (bestScore) {
  bestScoreDisplay.textContent = "Best Score: " + bestScore;
}


// Start button click
startBtn.addEventListener("click", function() {

  input.disabled = false;      
  input.focus();              

  timeLeft = 60;               
  timerDisplay.textContent = "Time: 60";

  timer = setInterval(function() {

    if (timeLeft > 0) {
      timeLeft--;
      timerDisplay.textContent = "Time: " + timeLeft;
    }

    if (timeLeft === 0) {
      clearInterval(timer);        
      input.disabled = true;       

      let score = input.value.length;

      finalResult.textContent =
        "Final Typed Length: " + score;


      let savedBest = Number(localStorage.getItem("bestScore"));

      if (!savedBest || score > savedBest) {
        localStorage.setItem("bestScore", score);
        bestScoreDisplay.textContent = "Best Score: " + score;
      } else {
        bestScoreDisplay.textContent = "Best Score: " + savedBest;
      }

    }

  }, 1000);
});


// Live typing update
input.addEventListener("input", function() {
  liveText.textContent = input.value;
});
