const inputele = document.querySelector(".inputfield");
const buttonele = document.querySelector(".button");
const subframeele = document.querySelector(".subframe");


buttonele.addEventListener("click",getimage);
function getimage(){
    console.log("entered in button");
    fetch("https://go-apod.herokuapp.com/apod").then((resolvedapidata)=>{
    return resolvedapidata.json();
}).then((jsonfile)=>{
    console.log("recieved json file");
    return jsonfile.url;
}).then((imageurl)=>{
    console.log("recieved image url as " + imageurl);
    const imageboxele = document.createElement('div');
    imageboxele.className="imagebox";
    subframeele.appendChild(imageboxele);
    const imgele = document.createElement('img');
    imgele.className="image";
    imgele.src = imageurl;
    imageboxele.appendChild(imgele);
    console.log("the end");
}).catch((errormessage)=>{
    console.log(errormessage);
})
}
