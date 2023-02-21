const inputEle = document.querySelector(".inputfield");
const displayer = document.querySelector(".displayhere");
const buttonEle = document.querySelector(".button");

buttonEle.addEventListener("click",infoChanger);

function infoChanger(){
  displayer.innerHTML = String(inputEle.value);
  inputEle.value="";
  console.log("listening to button");
}
