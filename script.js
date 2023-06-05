$(document).ready(function () {
  var timer;
  var timeLeft = 60;

  function gameOver() {
    clearInterval(timer);
    updateTimer();
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
    $("#playAgain").hide();
    resetScore(); // Initialize the score to 0
    intervalId = setInterval(showMole, 2000);
  }

  const moleElements = $(".moles");

  function handleWhack() {
    const moleHole = $(this).parent();
    if (moleHole.hasClass('active')) {
      moleHole.removeClass('active');
      resetScore();
    }
  }

  moleElements.on("click", handleWhack);

  let activeMole = null;

  function showMole() {
    const randomMoleIndex = Math.floor(Math.random() * moleElements.length);
    const moleElement = moleElements.eq(randomMoleIndex).parent();

    if (activeMole) {
      activeMole.removeClass('active');
    }

    moleElement.addClass('active');
    activeMole = moleElement;

    setTimeout(function () {
      moleElement.removeClass('active');
    }, 1000);
  }

  let intervalId;

  function resetScore() {
    const scoreElement = $(".score");
    let currentScore = parseInt(scoreElement.text());

    currentScore = 0; // Set the score to 0 instead of incrementing
    scoreElement.text(currentScore.toString().padStart(0, '0'));
  }

  $(".start").on("click", start);
});