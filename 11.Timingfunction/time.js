console.log("timing function in js");
console.log("start");

let display=()=>{
    console.log("i am display function");
    
}


// ! setTimeout is used to send message after some time by giving time
setTimeout(display,5000)

let x=setTimeout(()=>{
    console.log("Happy Birthday🎂🎂🎂");    
},6000)
clearTimeout(x)

// ! setInterval is used to ecxecute some statement with some span of time 
//setInterval(()=>{
  //  console.log("hi");   
//},1000)


// ! clearTimeout and claerInterval is used to stop the timeout and intervals
let sorry=()=>{
    console.log("I am sorry.....");
}

let interval=setInterval(sorry,2000)
clearInterval(interval)

console.log("end");

