const prev = document.getElementById("prev");
const start = document.getElementById("start");
const next = document.getElementById("next");

const sliderAllImg = document.querySelectorAll(".img");

let count = 0;
let isSliding = false;
let intervalLoop;

sliderAllImg.forEach((ele, index) => {
    ele.style.left = `${index * 100}%`;
})

const slideImg = () => {
    sliderAllImg.forEach((ele) => {
        ele.style.transform = `translate(-${count * 100}%)`;
        ele.style.transition = `all 0.5s ease-in-out`;
    });
};

prev.addEventListener("click", function () {
    count--;
    slideImg()
})
next.addEventListener("click", function () {
    count++;
    if (count == 6) {
        count = 0;
    }
    slideImg()
})
start.addEventListener("click", () => {
    if (!isSliding) {
        start.textContent = "Stop"
        start.style.backgroundColor = "#f31515"
        start.style.color = "white"
        intervalLoop = setInterval(() => {
            count++;
            slideImg();
            if (count == 5) {
                count = -1;
            }
        }, 2000);
    }
    else {
        start.textContent = "Start";
        start.style.backgroundColor = "#ffffff";
        start.style.color = "black";
        clearInterval(intervalLoop);
    }
    isSliding = !isSliding;
})