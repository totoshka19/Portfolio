// ---------- Header Toggle Start ---------- //
let menuBtn = document.getElementById("menuBtn");
menuBtn.addEventListener("click", ()=> {
    document.querySelector("body").classList.toggle("toggle-header");
    menuBtn.classList.toggle("fa-xmark");
});
// ---------- Header Toggle End ---------- //

// ---------- Typing Animation Start ---------- //
let type = new Typed(".typingAnimation", {
    strings: ["Front-end Developer", "Web developer", "site layout"],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000,
    loop: true,
});
// ---------- Typing Animation End ---------- //

// ---------- Skill Bar Animation Start ---------- //
const progressBar = document.querySelectorAll(".inner-bar");
window.addEventListener("scroll", function () {
    progressBar.forEach(function (progressBar) {
        const rect = progressBar.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            const width = progressBar.getAttribute("data-width");
            progressBar.style.width = width + "%";
        }
    });
});
// ---------- Skill Bar Animation End ---------- //

// ---------- Display Current Year Start ---------- //
let year = document.getElementById('year');
function getYear() {
    year.innerHTML = new Date().getFullYear();
}
getYear();
// ---------- Display Current Year End ---------- //

// ---------- Active Link State On Scroll Start ---------- //
//Get All Nav Links
let navLinks = document.querySelectorAll('header nav ul li a');
//Get All Nav Sections
let section = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 20;
    section.forEach(section => {
        if (scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (section.getAttribute('id') === link.getAttribute('href').substring(1)) {
                    link.classList.add('active');
                }
            })
        }
    })
})
// ---------- Active Link State On Scroll End ---------- //
