const bodyElement = document.getElementById("root");

//create a button element
const buttonElement = document.createElement("button");
buttonElement.id = "button"
buttonElement.textContent = "Click Me";
//add button to body
bodyElement.appendChild(buttonElement);

const colorArray = ["red", "green", "blue", "teal", "pink", "black", "purple", "yellow", "white", "orange"];

function setBackgroundColor(){
    // console.log("insisde set background color function");
    let num = Math.floor(Math.random()*10);
    console.log(num);
    bodyElement.style.backgroundColor = colorArray[num];
}

buttonElement.addEventListener("click", setBackgroundColor);