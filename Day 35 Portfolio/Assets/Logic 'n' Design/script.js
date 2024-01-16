// gsap

let tlHome = gsap.timeline();

tlHome.to(".home-FlexBox",{
    y:70
})
tlHome.to("#text",{
    y:-65
})

tlHome.from("#one",{
    opacity:0,
    y:-100,
    filter:"blur(10px)",
    duration:0.8,
    // repeat:-1,
})

tlHome.from("#two",{
    x:100,
    duration:1,
    opacity:0,
    ease:"back.out(1.4)",
})

tlHome.from("#three",{
    y:190,
    duration:0.8,
    opacity:0.5,
    filter:"blur(100px)"
})

tlHome.to("#two",{
    x:-100,
    duration:1
})

tlHome.to("#two",{
    y:-100,
    opacity:0,
    delay:2,
    duration:1
})

tlHome.to(".home-FlexBox",{
    duration:2,
    ease:"back.inOut(1)",
    y:-40,
    onComplete: TypingAnimation
})

// Typing animation
function TypingAnimation() {
    let typed = new Typed("#text", {
        strings: ["Web3", "React", "NodeJS", "Javascript", "Python", "FrontEnd"],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true,
        showCursor: false
    });
}


// Nav Bar animation

let tlNav = gsap.timeline();


tlNav.from(".nav",{
    y:-100,
    duration:1
})

tlNav.from("a",{
    y:-80,
    ease:"back.out(9.4)",
    opacity:0,
    duration:1,
    stagger:0.2,
})

gsap.to(".nav , .line",{
    stroke:"white",
    backgroundColor:"black",
    color:"white",
    duration:0.5,
    scrollTrigger:{
        start:"top -10px",
        end: "top -11px",
        scrub: 2,
    }
})

// gsap.to(".nav-buttons , .nav-buttons::before , .nav-buttons:hover",{
//     color:"#e8e8e8",
//     background:"212121",
//     duration:0.5,
//     scrollTrigger:{
//         start:"top -10px",
//         end: "top -11px",
//         scrub: 2,
//     }
// })

