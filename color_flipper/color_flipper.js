const bodyElement = document.getElementById("root");

//create a button element
const buttonElement = document.createElement("button");
buttonElement.className = "button"
buttonElement.textContent = "Click Me";
//add button to body
bodyElement.appendChild(buttonElement);

// const colorArray = ["red", "green", "blue", "teal", "pink", "black", "purple", "yellow", "white", "orange"];

function setBackgroundColor(){
    // console.log("insisde set background color function");
    let num = Math.floor(Math.random()*10);
    console.log(num);
    // bodyElement.style.backgroundColor = colorArray[num];
    bodyElement.style.backgroundColor = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
}

buttonElement.addEventListener("click", setBackgroundColor);