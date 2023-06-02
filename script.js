var timer;
var timeLeft = 60;

function gameOver() {
  cancelInterval(timer);

  $("#playAgain").show();
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

