class Counter {
    constructor() {
        this.count = 0;
        this.myInterval;
        this.isRunning = false;
    }

    startStopCounter() {
        if (this.isRunning) {
            this.stopCounter();
        } else {
            this.startCounter();
        }
    }

    startCounter() {
        this.isRunning = true;
        this.myInterval = setInterval(() => {
            this.increment();
        }, 1000);
    }

    stopCounter() {
        this.isRunning = false;
        clearInterval(this.myInterval);
    }

    increment() {
        this.count++;
        this.ShowCount();
    }

    decrement() {
        this.count--;
    }

    ShowCount() {
        show.textContent = `${this.count}`;
    }
}

const show = document.getElementById('show');
const incBtn = document.getElementById('inc');
const startBtn = document.getElementById('start');
const decBtn = document.getElementById('dec');


const myCounter = new Counter();

let isStart = false;

incBtn.addEventListener('click', () => {
    myCounter.increment();
    myCounter.stopCounter()
    myCounter.ShowCount();
    startBtn.style.backgroundImage = "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)"
    startBtn.textContent = "Start"
});

startBtn.addEventListener('click', () => {
    myCounter.startStopCounter();
    if (!isStart) {
        startBtn.style.backgroundImage = "linear-gradient(225deg, #fe0000 0%, #ff7100 50%, #ffad00 100%)"
        startBtn.textContent = "Stop"
    } else {
        startBtn.style.backgroundImage = "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)"
        startBtn.textContent = "Start"
    }
    isStart = !isStart;
});

decBtn.addEventListener('click', () => {
    myCounter.decrement();
    myCounter.stopCounter()
    myCounter.ShowCount();
    startBtn.style.backgroundImage = "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)"
    startBtn.textContent = "Start"
});


