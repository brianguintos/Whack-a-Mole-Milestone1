var timer;
var timeLeft = 60;

//clears the timer when game is over
function gameOver() {
  // clearInterval(timer);
  updateTimer();
  $("#playAgain").show();
}

//updates timer that starts at 60seconds; still having trouble with timer decreasing in increments of 2
function updateTimer() {
  timeLeft = timeLeft -1;
  if (timeLeft >= 0) {
    console.log(timeLeft);
    $("#timer").html(timeLeft);
  } 
  else {
    gameOver();
  }
}

function start() {
  timer = setInterval(updateTimer, 1000);
  // updateTimer();
  $("#playAgain").hide();
  startGame(); //calling function to start
}

function startGame() {
  resetScore();
  intervalId = setInterval(showMole, 2000);
}







//this is going to get all the mole elements
const moleElements = document.querySelectorAll('.moles');

//need to update this so that when i click on just the mole it will give you points
function handleWhack() {
  const moleHole = this.parentNode;
  if (moleHole.classList.contains('active')) {
    moleHole.classList.remove('active');
    resetScore();
  }
}

moleElements.forEach((moleELement) => {
  moleELement.addEventListener('click', handleWhack);
});

let activeMole = null;

//this makes the moles pop out of random moles and then hide. Problem right now is I have multiple of them coming out at the same time.
function showMole() {
  const randomMoleIndex = Math.floor(Math.random() * moleElements.length);
  const moleELement = moleElements[randomMoleIndex].parentNode;

  if (activeMole) {
    activeMole.classList.remove('active');
  }

  moleELement.classList.add('active');
  activeMole = moleELement;

  setTimeout(() => {
    moleELement.classList.remove('active');
  }, 1000);
}

let intervalId;

function resetScore() {
  const scoreElement = document.querySelector('.score');
  let currentScore = parseInt(scoreElement.textContent);

  currentScore++; 
  scoreElement.textContent = currentScore.toString().padStart(0, '0');

}

//to make whole game start
const startButton = document.getElementById('start');
startButton.addEventListener('click', start);