const p = new Promise(function(resolve,reject){
    let a = 1+1; // what promise does for you i.e functionality defined here

    if(a==2){
        resolve("success") //pass anything in resolve eg. a message in this case
    }
    else(
        reject("failed") //pass anything in reject eg. a message in this case
    )
})

p.then((message)=>{
    console.log("we are in then which return the resolve response as : ", message)
}).catch((message)=>{
    console.log("we are in catch which returns the reject response as :", message)
})