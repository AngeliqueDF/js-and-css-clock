setInterval(() => {
    // solution found here https://stackoverflow.com/questions/2917175/return-multiple-values-in-javascript
    let {
      currentHour,
      currentMinutes,
      currentSeconds
    } = (function getCurrenttime() {
      var today = new Date();
      var currentHour = today.getHours();
      var currentMinutes = today.getMinutes();
      var currentSeconds = today.getSeconds();
      return { currentHour, currentMinutes, currentSeconds };
    })();

    var hourHand = document.querySelector(".hand.hour-hand");
    var minuteHand = document.querySelector(".hand.min-hand");
    var secondsHand = document.querySelector(".hand.second-hand");

    hourRotation = 90 + currentHour * 30;
    minuteRotation = 90 + currentMinutes * 6;
    secondsRotation = 90 + currentSeconds * 6;

    hourHand.style.transform = "rotate(" + hourRotation + "deg)";
    minuteHand.style.transform = "rotate(" + minuteRotation + "deg)";
    secondsHand.style.transform = "rotate(" + secondsRotation + "deg)";
  }, 100);