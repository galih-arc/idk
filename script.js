
const pages =
document.querySelectorAll(".page");


const next =
document.getElementById("next");


const prev =
document.getElementById("prev");


const counter =
document.querySelector(".counter");


const music =
document.getElementById("music");


const play =
document.getElementById("play");



let index = 0;

let playing = false;



function updatePage(){


pages.forEach(page=>{

page.classList.remove("active");

});


pages[index].classList.add("active");



counter.innerHTML =

String(index+1).padStart(2,"0")

+

" / 05";



}




// NEXT


next.onclick=()=>{


if(index < pages.length-1){

index++;

updatePage();

}


};





// PREV


prev.onclick=()=>{


if(index > 0){

index--;

updatePage();

}


};





// MUSIC


play.onclick=()=>{


if(!playing){


music.play();


play.innerHTML="Ⅱ <span>PAUSE MUSIC</span>";


playing=true;



}else{


music.pause();


play.innerHTML="🎧 <span>PLAY MUSIC</span>";


playing=false;


}


};





// SWIPE HP


let startX=0;


document.addEventListener("touchstart",(e)=>{


startX=e.touches[0].clientX;


});



document.addEventListener("touchend",(e)=>{


let endX =
e.changedTouches[0].clientX;



if(startX-endX>80){

next.click();

}


if(endX-startX>80){

prev.click();

}


});