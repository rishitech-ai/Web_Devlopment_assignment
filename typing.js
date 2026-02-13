// Variables
let input = document.getElementById("typingInput");
let liveText = document.getElementById("liveText");
let startBtn = document.getElementById("startBtn");
let timerDisplay = document.getElementById("timer");
let finalResult = document.getElementById("finalResult");

let timeLeft = 60;
let timer;

// Start button click
startBtn.addEventListener("click", function() {
  input.disabled = false;      
  input.focus();              

  timeLeft = 60;               // Reset timer
  timerDisplay.textContent = "Time: 60";
  

  // Start countdown
  timer = setInterval(function() {
    if (timeLeft > 0) {
      timeLeft--;
      timerDisplay.textContent = "Time: " + timeLeft;
    }

    if (timeLeft === 0) {
      clearInterval(timer);         // Stop timer
      input.disabled = true;        // Disable input
      finalResult.textContent =
        "Final Typed Length: " + input.value.length;
    }
  }, 1000);
});

// Live typing update
input.addEventListener("input", function() {
  liveText.textContent = input.value;
});
