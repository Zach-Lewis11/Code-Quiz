
var timeEl = document.querySelector("#time");
var secondsLeft = 75;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if(secondsLeft <= 0) {
     clearInterval(timerInterval)
    }

  }, 1000);
}



setTime();