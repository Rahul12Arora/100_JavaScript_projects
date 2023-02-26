const inputele = document.querySelector(".inputfield");
const buttonele = document.querySelector(".button-wrapper");
const subframeele = document.querySelector(".subframe");


buttonele.addEventListener("click",getimage);
function getimage(){
    // console.log("entered in button");
    fetch("https://inshorts.deta.dev/news?category=technology").then((resolvedapidata)=>{
        // console.log(resolvedapidata)
    return resolvedapidata.json();
}).then((jsonfile)=>{
    // console.log(jsonfile)
    // console.log("recieved json file");
    return jsonfile.data[0].imageUrl;
}).then((imageurl)=>{
    // console.log("recieved image url as " + imageurl);
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

// buttonele.addEventListener("click",()=>{
//     console.log("window should be redirected");
//     window.location.href = "http://www.w3schools.com";
// })