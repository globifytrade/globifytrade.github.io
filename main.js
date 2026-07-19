/* ===========================================================
   GlobifyTrade International
   Premium Export Theme
   script.js
=========================================================== */

"use strict";

/* ===========================================================
   Loader
=========================================================== */

window.addEventListener("load", () => {

const loader = document.getElementById("loader");

if(loader){

loader.style.opacity = "0";

setTimeout(()=>{

loader.style.display="none";

},600);

}

});

window.addEventListener("load", function () {
    const loader = document.getElementById("loader");

    if (loader) {
        loader.style.display = "none";
    }
});

/* ===========================================================
   Sticky Navbar
=========================================================== */

const navbar=document.querySelector(".glass-nav");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

navbar.classList.add("scrolled");

}else{

navbar.classList.remove("scrolled");

}

});

/* ===========================================================
   Back To Top
=========================================================== */

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="flex";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

/* ===========================================================
   Counter Animation
=========================================================== */

const counters=document.querySelectorAll(".counter");

const speed=80;

const startCounter=()=>{

counters.forEach(counter=>{

const target=+counter.dataset.target;

const update=()=>{

const current=+counter.innerText;

const increment=Math.ceil(target/speed);

if(current<target){

counter.innerText=current+increment;

setTimeout(update,25);

}else{

counter.innerText=target;

}

};

update();

});

};

const counterSection=document.querySelector(".counter-section");

if(counterSection){

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

startCounter();

observer.disconnect();

}

});

});

observer.observe(counterSection);

}

/* ===========================================================
   Smooth Anchor Scroll
=========================================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

/* ===========================================================
   Reveal Animation
=========================================================== */

const reveals=document.querySelectorAll(".fade-up");

const revealOnScroll=()=>{

reveals.forEach(el=>{

const top=el.getBoundingClientRect().top;

const windowHeight=window.innerHeight;

if(top<windowHeight-100){

el.classList.add("active");

}

});

};

window.addEventListener("scroll",revealOnScroll);

revealOnScroll();

/* ===========================================================
   Hero Image Parallax
=========================================================== */

const heroImage=document.querySelector(".hero-image");

window.addEventListener("mousemove",(e)=>{

if(!heroImage) return;

const x=(window.innerWidth/2-e.pageX)/40;

const y=(window.innerHeight/2-e.pageY)/40;

heroImage.style.transform=`translate(${x}px,${y}px)`;

});

/* ===========================================================
   Active Navbar Link
=========================================================== */

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-link");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-120;

const height=section.clientHeight;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

/* ===========================================================
   Typing Effect
=========================================================== */

const typingElement = document.querySelector(".typing");

if (typingElement) {

const words = [
"Trusted Exporter",
"Global Trade Partner",
"Premium Quality",
"Worldwide Shipping"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

const current = words[wordIndex];

if (!deleting) {

typingElement.textContent = current.substring(0, charIndex++);

if (charIndex > current.length) {

deleting = true;

setTimeout(typeEffect, 1500);

return;

}

} else {

typingElement.textContent = current.substring(0, charIndex--);

if (charIndex < 0) {

deleting = false;

wordIndex = (wordIndex + 1) % words.length;

}

}

setTimeout(typeEffect, deleting ? 60 : 120);

}

typeEffect();

}

/* ===========================================================
   Product Card Hover
=========================================================== */

document.querySelectorAll(".product-card").forEach(card => {

card.addEventListener("mousemove", e => {

const rect = card.getBoundingClientRect();

const x = e.clientX - rect.left;

const y = e.clientY - rect.top;

const rotateY = ((x / rect.width) - 0.5) * 12;

const rotateX = ((y / rect.height) - 0.5) * -12;

card.style.transform =
`perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-8px)`;

});

card.addEventListener("mouseleave", () => {

card.style.transform =
"perspective(1000px) rotateX(0) rotateY(0)";

});

});

/* ===========================================================
   Scroll Progress
=========================================================== */

const progress = document.createElement("div");

progress.id = "progressBar";

document.body.appendChild(progress);

window.addEventListener("scroll", () => {

const total =
document.documentElement.scrollHeight -
window.innerHeight;

const value =
(window.pageYOffset / total) * 100;

progress.style.width = value + "%";

});

/* ===========================================================
   Mouse Glow
=========================================================== */

const glow = document.createElement("div");

glow.id = "mouseGlow";

document.body.appendChild(glow);

document.addEventListener("mousemove", e => {

glow.style.left = e.clientX + "px";

glow.style.top = e.clientY + "px";

});

/* ===========================================================
   Floating Elements
=========================================================== */

document.querySelectorAll(".floating-elements span")

.forEach(item => {

item.style.left = Math.random() * 100 + "%";

item.style.animationDuration =
10 + Math.random() * 15 + "s";

item.style.animationDelay =
Math.random() * 5 + "s";

});

/* ===========================================================
   Button Ripple Effect
=========================================================== */

document.querySelectorAll(".btn").forEach(btn => {

btn.addEventListener("click", function(e) {

const circle = document.createElement("span");

const diameter = Math.max(this.clientWidth, this.clientHeight);

circle.style.width = diameter + "px";

circle.style.height = diameter + "px";

circle.style.left =
e.offsetX - diameter / 2 + "px";

circle.style.top =
e.offsetY - diameter / 2 + "px";

circle.classList.add("ripple");

this.appendChild(circle);

setTimeout(() => {

circle.remove();

}, 600);

});

});

/* ===========================================================
   Auto Hero Slider
=========================================================== */

if (heroCarousel && typeof bootstrap !== "undefined") {
    new bootstrap.Carousel(heroCarousel, {
        interval: 4000
    });
}

/* ===========================================================
   Lazy Images
=========================================================== */

document.querySelectorAll("img").forEach(img => {

img.loading = "lazy";

});

/* ===========================================================
   Console Message
=========================================================== */

console.log(

"%cGlobifyTrade International",

"font-size:24px;color:#ffb400;font-weight:bold;"

);

console.log(

"Premium Export Website Loaded Successfully."

);