var setTime = +prompt("Set time in minutes:")


var timer = setTime * 60;
var countDown = document.getElementById("countDown")

function startTimer() {
    const timerInterval = setInterval(() => {
        let minutes = Math.floor(timer / 60);
        let seconds = timer % 60;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        countDown.innerText = `${minutes}:${seconds}`;
        timer--;

        if (timer < 0) {
            clearInterval(timerInterval);

        }
    }, 1000);
   
}


window.onload = () => {
  
    startTimer();
};

