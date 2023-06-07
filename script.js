    // jquery function that waits for DOM to finish loading before starting functions in brackets
    $(document).ready(function () {
      var timer;
      var timeLeft = 60;
      let score = 0; // Variable to store the score


      //when game ends this will clear timer 
      function endGame() {
        clearInterval(timer);
        clearInterval(intervalMole);
        updateTimer();
      }

// usd help creating the timer. Gave credit in README file
      function updateTimer() { //responsible for subtracting time left by 1
        timeLeft = timeLeft - 1;
        if (timeLeft >= 0) { //time left greater than or equal to 0 then show time
          console.log(timeLeft);
          $("#timer").html(timeLeft);
        } else {
          endGame();//if time goes negative then game ends
        }
      }


      function start() {
        timer = setInterval(updateTimer, 1000); //update timer by the second.
        resetScore(); // begins with the score at 0
        intervalMole = setInterval(showMole, 2000); //a new mole will pop out every 2 seconds
      }

      const moleElements = $(".moles"); //this gets all the elements with the specified class of .moles and stores them in the moleElements variable  

//when you click on the moles this will give you a point. If you click on anything else it won't
      function handleWhack() {
        const moleHole = $(this).parent(); //to retrieve the parent element moleHole
        if (moleHole.hasClass("active")) { //if you whack a mole then it will give you a class of active
          moleHole.removeClass("active"); //goes on to remove the mole once you've whacked it
          incrementScore(); //Increase the score when a mole is whacked
        }
      }


      function incrementScore() {
        score += 1; // Increment the score by 1
        updateScoreDisplay(); // Update the score display
      }

// to update the score display. $(".score") will show the current score
      function updateScoreDisplay() {
        const scoreElement = $(".score");
        scoreElement.text(score.toString().padStart(2, "0")); // used to update the current score
      }


      function resetScore() {
        score = 0; // starts the score at 0 and updates it when you whack a mole
        updateScoreDisplay();
      }

      moleElements.on("click", handleWhack); //event listener 


      let activeMole = null; //to keep track of the active mole in the game

      //to make moles pop out of random holes using math.floor and math.random
      function showMole() {
        const randomMoleIndex = Math.floor(
          Math.random() * moleElements.length
        );
        const moleElement = moleElements.eq(randomMoleIndex).parent();

        if (activeMole) {
          activeMole.removeClass("active");
        }

        moleElement.addClass("active");
        activeMole = moleElement;

        setTimeout(function () {
          moleElement.removeClass("active");
        }, 1000);
      }

      let intervalMole; 

      $("#start").on("click", start);
    });