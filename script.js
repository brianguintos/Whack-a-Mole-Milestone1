var timer;
var timeLeft = 60;

function gameOver() {
  cancelInterval(timer);

  // $("#playAgain").show();
}

function updateTimer() {
  timeLeft = timeLeft - 1;
  if (timeLeft >= 0) {
    console.log(timeLeft);
    $("#timer").html(timeLeft);
  } else {
    gameOver();
  }
}

function start() {
  timer = setInterval(updateTimer, 1000);

  updateTimer();

  $("playAgain").hide();
}








const moleElements = document.querySelectorAll('.moles');

function handleWhack() {
  this.parentNode.classList.remove('active');
  updateScore();
}

moleElements.forEach((moleELement) => {
  moleELement.addEventListener('click', handleWhack);
});

function showMole() {
  const randomMoleIndex = Math.floor(Math.random() * moleElements.length);
  const moleELement = moleElements[randomMoleIndex].parentNode;

  moleELement.classList.add('active');

  setTimeout(() => {
    moleELement.classList.remove('active');
  }, 1000);
}

let intervalId;

function start(); {
  resetScore();
  intervalId = setInterval(showMole, 2000);
}

function resetScore() {
  const scoreElement = document.querySelector('.score');
  let currentScore = parseInt(scoreElement.textContent);
  currentScore++;

  scoreElement.textContent = currentScore.toString().padStart(2, '0');
}

const startButton = document.getElementById('start');
startButton.addEventListener('click', start);