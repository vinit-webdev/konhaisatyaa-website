/* =========================
PAGE LOADER
========================= */

window.addEventListener("load", () => {
const loader = document.getElementById("loader");

setTimeout(() => {
loader.style.opacity = "0";
loader.style.visibility = "hidden";
}, 500);
});

/* =========================
MOBILE MENU
========================= */

function toggleMenu(){
const menu = document.getElementById("menu");
menu.classList.toggle("active");
}

/* Close menu when link clicked */

document.querySelectorAll(".menu a").forEach(link => {
link.addEventListener("click", () => {
document.getElementById("menu").classList.remove("active");
});
});

/* =========================
SCROLL REVEAL ANIMATION
========================= */

const reveals = document.querySelectorAll(".reveal");

const revealOnScroll = () => {

const windowHeight = window.innerHeight;

reveals.forEach(element => {

const elementTop = element.getBoundingClientRect().top;
const revealPoint = 120;

if(elementTop < windowHeight - revealPoint){
element.classList.add("active");
}

});

};

/* =========================
SCROLL PROGRESS BAR
========================= */

const scrollProgress = () => {

const scrollTop = document.documentElement.scrollTop;
const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

const scrollPercent = (scrollTop / docHeight) * 100;

document.getElementById("progressBar").style.width = scrollPercent + "%";

};

/* =========================
SCROLL EVENTS
========================= */

window.addEventListener("scroll", () => {

revealOnScroll();
scrollProgress();

});

/* INTRO REMOVE */

setTimeout(() => {

const intro = document.getElementById("intro");

if(intro){
intro.style.display="none";
}

},3000);

/* WHATSAPP POPUP */

setTimeout(()=>{

document.getElementById("whatsappPopup").style.display="block";

},5000);


function closeChat(){

document.getElementById("whatsappPopup").style.display="none";

}