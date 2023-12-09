let isWorking = false;
let timer;
let hoursInput = document.getElementById('hour');
let minutesInput = document.getElementById('min');
let secondsInput = document.getElementById('sec');

function start() {
    if (!isWorking) {
        let hours = parseInt(hoursInput.value) || 0;
        let minutes = parseInt(minutesInput.value) || 0;
        let seconds = parseInt(secondsInput.value) || 0;

        let totalSeconds = hours * 3600 + minutes * 60 + seconds;

        timer = setInterval(function () {
            if (totalSeconds <= 0) {
                clearInterval(timer);
                return;
            }

            let hr = Math.floor(totalSeconds / 3600);
            let min = Math.floor((totalSeconds % 3600) / 60);
            let sec = totalSeconds % 60;

            displayTime(hr, min, sec);

            totalSeconds--;
        }, 1000);
    }
    else {
        clearInterval(timer);
        displayTime(0, 0, 0);
        hoursInput.value = '';
        minutesInput.value = '';
        secondsInput.value = '';
    }
    isWorking = !isWorking;
    hoursInput.value = '';
    minutesInput.value = '';
    secondsInput.value = '';
}

function stop() {
    clearInterval(timer);
}

function reset() {
    clearInterval(timer);
    displayTime(0, 0, 0);
    hoursInput.value = '';
    minutesInput.value = '';
    secondsInput.value = '';
}

function displayTime(hr, min, sec) {
    document.getElementById('displayHr').innerText = formatTime(hr);
    document.getElementById('displayMin').innerText = formatTime(min);
    document.getElementById('displaySec').innerText = formatTime(sec);
}

function formatTime(time) {
    return time < 10 ? '0' + time : time;
}
