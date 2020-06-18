const displayTime = function(){
    function getCurrenttime(){
        let hourHand = document.querySelector(".hand.hour-hand");
        let minuteHand = document.querySelector(".hand.min-hand");
        let secondsHand = document.querySelector(".hand.second-hand");
        
        let currentHour;
        let currentMinutes;
        let currentSeconds;

        let today = new Date();

        currentHour = today.getHours();
        currentMinutes = today.getMinutes();
        currentSeconds = today.getSeconds();

        hourRotation = 90 + currentHour * 30;
        minuteRotation = 90 + currentMinutes * 6;
        secondsRotation = 90 + currentSeconds * 6;
        
        hourHand.style.transform = "rotate(" + hourRotation + "deg)";
        minuteHand.style.transform = "rotate(" + minuteRotation + "deg)";
        secondsHand.style.transform = "rotate(" + secondsRotation + "deg)";
    }
    setInterval(() => {
        getCurrenttime()
    }, 1000);
}
displayTime()