const displayer = document.querySelector(".displayer");
const incrementEle = document.querySelector(".increment");
const decrementEle = document.querySelector(".decrement");

let counter=0;

function increase(){
  displayer.innerHTML = ++counter;
  console.log("listening to increase button");
}

function decrease(){
  displayer.innerHTML = --counter;
  console.log("listening to decrement button");
}

incrementEle.addEventListener("click",increase);
decrementEle.addEventListener("click",decrease);