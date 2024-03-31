// Levels
const levels = {
  easy: 5,
  medium: 5,
  hard: 3,
};
// change levels
const currentLevel = 5;

// Global Veriables
let time = currentLevel;
let score = 0;
let isPlaying;

// DOM Elements
const wordInput = document.querySelector("#input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const modalScore = document.querySelector("#modal-score");
const timeDisplay = document.getElementById("time");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");
const btnEasy = document.querySelector(".easy");
const btnMedium = document.querySelector(".easy");
const btnHard = document.querySelector(".hard");
const startBtn = document.getElementById("start-btn");
const replay = document.querySelector("#replay-btn");
const modal = document.querySelector(".result-modal");
const reset = document.querySelector("#reset");

// Start Button
startBtn.addEventListener("click", initialize);

// Words Array
const words = [
  "hat",
  "river",
  "status",
  "generate",
  "stubborn",
  "cocktil",
  "mokey",
  "elephant",
  "establishment",
  "congratulation",
  "investigate",
  "conquror",
  "jacket",
  "jocker",
  "master",
  "relationship",
  "greatfullness",
  "buggati",
  "lamborghini",
  "aeroplane",
  "magic",
  "defination",
  "courage",
  "document",
  "javascript",
];

// initializing game
function initialize() {
  startBtn.style.display = "none";
  // show numbers of seconds in UI
  seconds.innerHTML = currentLevel;
  // Load word form Game
  showWord(words);
  // start mathcing input
  wordInput.addEventListener("input", startMatch);
  // call countdown every second
  setInterval(countdown, 1000);
  // check game status
  setInterval(checkStatus, 500);
}
console.log({ time, score, isPlaying });

// start match function
function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = "";
    score++;
  }
  // if score is -1 display 0;
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

// match currentWord to wordInput
function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = "Correct!!!!";
    return true;
  } else {
    message.innerHTML = "Hurry Up!";
    return false;
  }
}

// Pick & Show random word
function showWord(words) {
  // Generate random array index
  const randomIndex = Math.floor(Math.random() * words.length);
  // output the random word
  currentWord.innerHTML = words[randomIndex];
}

// countdown timer
function countdown() {
  if (time > 0) {
    time--;
  } else {
    isPlaying = false;
  }
  // show time
  timeDisplay.innerHTML = time;
}

// check game status function
function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = "Game Over!!!";
    message.className = "text-danger";
    currentWord.textContent = "....";
    startBtn.classList.remove("d-none");
    startBtn.classList.add("d-block");
    modal.classList.remove("d-none");
    modal.classList.add("d-block");
    modalScore.textContent = score;
    console.log({ score, modalScore });
    // score = -1;
    return;
  }

  function reset() {
    if (score > 0) {
      modal.classList.add("d-none");
      score = 0;
      wordInput.value = "";
    }
  }
}
