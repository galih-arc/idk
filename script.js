// ==============================
// Typing Effect
// ==============================

const text = `Sorry because I became the reason for making your life restless.

I know an apology can't change everything.

But I truly hope that one day you can find peace, happiness, and beautiful memories ahead.

Thank you for everything.`;

const target = document.getElementById("typing");

let i = 0;

function type() {

    if (i < text.length) {

        target.innerHTML += text.charAt(i);

        i++;

        setTimeout(type, 28);

    }

}

type();


// ==============================
// Reveal Animation
// ==============================

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.animate([

{
opacity:0,
transform:"translateY(80px)"
},

{
opacity:1,
transform:"translateY(0)"
}

],{

duration:1200,
fill:"forwards",
easing:"ease"

});

}

});

});

document.querySelectorAll(".section").forEach(el=>{

el.style.opacity=0;

observer.observe(el);

});


// ==============================
// Navbar Blur
// ==============================

const nav=document.querySelector("nav");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

nav.style.background="rgba(0,0,0,.75)";
nav.style.borderBottom="1px solid rgba(255,255,255,.08)";
nav.style.backdropFilter="blur(20px)";

}else{

nav.style.background="transparent";
nav.style.borderBottom="none";

}

});


// ==============================
// Mouse Glow
// ==============================

const glow=document.createElement("div");

glow.style.position="fixed";
glow.style.width="450px";
glow.style.height="450px";
glow.style.borderRadius="50%";
glow.style.pointerEvents="none";
glow.style.background="radial-gradient(circle,rgba(255,255,255,.05),transparent 70%)";
glow.style.filter="blur(30px)";
glow.style.transform="translate(-50%,-50%)";
glow.style.zIndex="-1";

document.body.appendChild(glow);

window.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});


// ==============================
// Button Ripple
// ==============================

document.querySelectorAll("button").forEach(btn=>{

btn.addEventListener("click",(e)=>{

const ripple=document.createElement("span");

ripple.style.position="absolute";
ripple.style.width="20px";
ripple.style.height="20px";
ripple.style.background="rgba(255,255,255,.35)";
ripple.style.borderRadius="50%";
ripple.style.left=e.offsetX+"px";
ripple.style.top=e.offsetY+"px";
ripple.style.transform="translate(-50%,-50%)";
ripple.style.animation="ripple .7s linear";

btn.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},700);

});

});


// ==============================
// Ripple CSS
// ==============================

const style=document.createElement("style");

style.innerHTML=`

button{

position:relative;

overflow:hidden;

}

@keyframes ripple{

from{

width:0;

height:0;

opacity:.8;

}

to{

width:400px;

height:400px;

opacity:0;

}

}

`;

document.head.appendChild(style);