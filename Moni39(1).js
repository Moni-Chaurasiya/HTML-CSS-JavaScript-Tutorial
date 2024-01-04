console.log("I am Hacker");   // Tt is a Synchronous Function
console.log("You are hecker");


 setTimeout(()=>{      // It is asynchronous Function
    console.log("I am inside settimeout")
},2000);   //This will run at last even if it is at 0 second

console.log("Neither me nor you are hacker");

const callback =(arg) => {
    console.log(arg)
}

const loadScript = (src ,callback) => {
    let sc = document.createElement("script");
    sc.src =src;
    sc.onload = callback("Moni");
    document.head.append(sc)
} 

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/900.0.1/prism.min.js", callback)