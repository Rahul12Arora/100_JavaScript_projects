const bodyElement = document.getElementById("root");

//create a button element
const buttonElement = document.createElement("button");
buttonElement.className = "button"
buttonElement.textContent = "Click Me";
//add button to body
bodyElement.appendChild(buttonElement);


//create a div element to show color
const infoElement = document.createElement("p");
infoElement.className = "colorinfo"
infoElement.textContent = "Background Color: #000000";
//add button to body
bodyElement.appendChild(infoElement);



function setBackgroundColor(){
    // console.log("insisde set background color function");
    let num = Math.floor(Math.random()*10);
    console.log(num);
    // bodyElement.style.backgroundColor = colorArray[num];
    const colorval = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
    bodyElement.style.backgroundColor = colorval;
    infoElement.innerHTML= "Background Color: "+colorval;
}

buttonElement.addEventListener("click", setBackgroundColor);