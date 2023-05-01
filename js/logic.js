// ---------- Header Toggle Start ---------- //
let menuBtn = document.getElementById("menuBtn");

menuBtn.addEventListener("click", ()=> {
    document.querySelector("body").classList.toggle("toggle-header");
    menuBtn.classList.toggle("fa-xmark");
});
// ---------- Header Toggle End ---------- //

// ================================================================================ //

// ---------- Typing Animation Start ---------- //
let type = new Typed(".typingAnimation", {
    strings: ["Front-end Developer", "Web developer", "site layout"],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000,
    loop: true,
});
// ---------- Typing Animation End ---------- //

