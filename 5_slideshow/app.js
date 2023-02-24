const leftbutton = document.getElementById("1");
const rightbutton = document.getElementById("2");
const imageEle = document.getElementById("0");
// const divEle = document.querySelector("imagediv");

leftbutton.addEventListener("click",imagetoleft);
rightbutton.addEventListener("click",imagetoright);
imageEle.addEventListener("click",imageclickfun);

function imagetoleft(){
    console.log("left button clicked");
}

function imagetoright(){
    console.log("right button clicked");
}

function imageclickfun(){
    console.log("image was clicked");
}