let themeBtn = document.querySelector("#theme > img");
let oneThemeBtn = false;


themeBtn.addEventListener("click", () => {
    if (!oneThemeBtn) {
        document.body.style.color = "white"
        document.body.style.backgroundColor = "black"
        themeBtn.src = "../ImagesUsesd/Dark theme/sun.png"
    }
    else{
        document.body.style.color = "black"
        document.body.style.backgroundColor = "white"
        themeBtn.src = "../ImagesUsesd/Dark theme/moon.png"
    };
    oneThemeBtn = !oneThemeBtn;
})

let transform = gsap.timeline()

transform.gsap.from("#home >h1:nth-child(2)", {
    y: -800,
    yoyo: true,
    repeat: -1,
    duration: 1,
    stagger: true,
    opacity: 0
});
transform.gsap.from("#home >h1:nth-child(2)", {
    y: -800,
    yoyo: true,
    repeat: -1,
    duration: 1,
    stagger: true,
    opacity: 0
});



