const displayer = document.querySelector(".displayhere");
const incrementEle = document.querySelector(".increment");
const decrementEle = document.querySelector(".decrement");

incrementEle.addEventListener("click",increase);
decrementEle.addEventListener("click",decrease);

let data=0;

function increase(){
  displayer.innerHTML = data+1;
  console.log("listening to button");
}

function decrease(){
  displayer.innerHTML = data-1;
  console.log("listening to button");
}
