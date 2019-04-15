var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");

var settings = document.getElementById("settings");
var countdown = document.getElementById("countdown");
var counter = document.getElementById("counter");
var toast = document.getElementById("toast");

const start = document.getElementById("start");
start.addEventListener("click", startTimer);

const stop = document.getElementById("stop");
stop.addEventListener("click", stopTimer);

const alarm = document.getElementById("alarm");


var count;
function startTimer() {

    if (hours.value > 23 || hours.value < 0 || minutes.value > 59 || minutes.value < 0 || seconds.value > 59 || seconds.value < 0 || (hours.value == 0 && minutes.value == 0 && seconds.value == 0)) {
        showMessage();
    }
    else {
        settings.style.display = "none";
        countdown.style.display = "block";
        counter.innerHTML = "";

        // Set the date we're counting down to new Date
        var countDownDate = new Date();
        countDownDate.setHours(hours.value);
        countDownDate.setMinutes(minutes.value);
        countDownDate.setSeconds(seconds.value);

        var zero = new Date();
        zero.setHours(0);
        zero.setMinutes(0);
        zero.setSeconds(0);

        count = setInterval(function () {
            var hz, mz, sz;

            hz = mz = sz = "";
            // Find the distance between zero and the count down date
            var distance = countDownDate - zero;

            // Time calculations (hours, minutes and seconds)
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (hours < 10) hz = "0";
            if (minutes < 10) mz = "0";
            if (seconds < 10) sz = "0";

            // Output the result
            counter.innerHTML = hz + hours + " : "
                + mz + minutes + " : " + sz + seconds;

            // If the count down is over, write some text 
            if (distance == 0) {
                clearInterval(count);
                counter.style.webkitAnimation = 'none';
                setTimeout(function () {
                    counter.style.webkitAnimation = '';
                }, 10);
                counter.innerHTML = "EXPIRED";
                countdown.style.backgroundColor = "#A8184B";
                stop.value = "RESET";
                alarm.play();
            }
            zero.setSeconds(zero.getSeconds() + 1);
        }, 1000);
    }
}

function stopTimer() {
    stop.value = "STOP"
    settings.style.display = "block";
    countdown.style.display = "none";
    countdown.style.backgroundColor = "#0684F2";
    clearInterval(count);
}

function showMessage() {
    toast.style.webkitAnimation = 'none';
    setTimeout(function () {
        toast.style.webkitAnimation = '';
    }, 10);
}