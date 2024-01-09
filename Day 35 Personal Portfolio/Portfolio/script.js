let themeBtn = document.querySelector("#theme > img");
let resumeBtn = document.getElementById("resumeBtn");
let oneThemeBtn = false;

themeBtn.addEventListener("click", () => {
    if (!oneThemeBtn) {
        resumeBtn.style.backgroundColor = "black";
        resumeBtn.style.color = "white";
        document.body.style.color = "white";
        document.body.style.backgroundColor = "black";
        themeBtn.src = "./ImagesUsed/Dark Theme/sun.png";
    } else {
        document.body.style.color = "black";
        document.body.style.backgroundColor = "white";
        themeBtn.src = "./ImagesUsed/Dark Theme/moon.png";
        resumeBtn.style.backgroundColor = "white";
        resumeBtn.style.color = "black";
    }
    oneThemeBtn = !oneThemeBtn;
});

function navAnimation() {
    let navArr = document.querySelectorAll(".navText");
    for (let i = 0; i < navArr.length; i++) {
        setTimeout(() => {
            gsap.from(navArr[i], {
                y: -100,
                duration: 1,
            });
        }, (i+1) * 100);
    }
}




let timeline = gsap.timeline();

gsap.from("#home >h1:nth-child(1)", {
    y: -550,
    opacity: 0,
    duration: 1,
    stagger: 0.5
})

timeline.from("#home >h1:nth-child(3)", {
    x: -100,
    duration: 1,
    opacity: 0,
    filter: "blur(10px)"

});
timeline.from("#home >h1:nth-child(4)", {
    x: -200,
    duration: 1,
    opacity: 0,
    filter: "blur(10px)",
})
timeline.to("#home > h1:nth-child(3)", {
    y: -140,
    opacity: 0,
    filter: "blur(10px)",
    duration: 1,
    onComplete: () => {
        setTimeout(() => {
            navAnimation()
        }, 1000);
    }
});
timeline.to("#home > h1:nth-child(1)", {
    y: -60,
    onComplete: () => {
        textAnimation = true;
    }
})
timeline.to("#home > h1:last-child", {
    y: -35,
    x: -5
})


let LoopGSAP = gsap.from("#text", {
    opacity: 0,
    delay: 4,
    onComplete: typeAnimation()
});

function typeAnimation() {
    let typed = new Typed("#text", {
        strings: ["Web 3", "React", "NodeJS", "Javascript", "Python", "FrontEnd"],
        typeSpeed: 250,
        backSpeed: 150,
        loop: true,
        showCursor: false
    });
}


gsap.from("#resumeBtn",{
    duration:2,
    opacity:0,
    delay:5,
    filter: "blur(20px)"
})