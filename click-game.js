// Select elements
let gameContainer = document.getElementById("gameContainer");
let scoreDisplay = document.getElementById("scoreDisplay");
let timerDisplay = document.getElementById("timerDisplay");
let restartBtn = document.getElementById("restartBtn");
let startBtn = document.getElementById("startBtn");

let score = 0;
let timeLeft = 30;
let timer;
let gameRunning = false;

// Timer function
function startTimer() {
  timer = setInterval(function() {

    if (timeLeft > 0) {
      timeLeft--;
      timerDisplay.textContent = "Time: " + timeLeft;
    }

    if (timeLeft === 0) {
      clearInterval(timer);
      gameRunning = false;

      let square = document.querySelector(".square");
      if (square) {
        square.remove();
      }
    }

  }, 1000);
}

// Create square
function createRandomSquare() {

  if (!gameRunning) return;

  let oldSquare = document.querySelector(".square");
  if (oldSquare) oldSquare.remove();

  let square = document.createElement("div");
  square.classList.add("square");

  let maxTop = gameContainer.clientHeight - 50;
  let maxLeft = gameContainer.clientWidth - 50;

  let randomTop = Math.random() * maxTop;
  let randomLeft = Math.random() * maxLeft;

  square.style.top = randomTop + "px";
  square.style.left = randomLeft + "px";

  square.addEventListener("click", function() {
    if (!gameRunning) return;

    score++;
    scoreDisplay.textContent = "Score: " + score;
    createRandomSquare();
  });

  gameContainer.appendChild(square);
}

// Start button
startBtn.addEventListener("click", function() {

  if (gameRunning) return;

  gameRunning = true;
  score = 0;
  timeLeft = 30;

  scoreDisplay.textContent = "Score: 0";
  timerDisplay.textContent = "Time: 30";

  createRandomSquare();
  startTimer();
});

// Restart button
restartBtn.addEventListener("click", function() {

  clearInterval(timer);

  score = 0;
  timeLeft = 30;
  gameRunning = true;

  scoreDisplay.textContent = "Score: 0";
  timerDisplay.textContent = "Time: 30";

  createRandomSquare();
  startTimer();
});
