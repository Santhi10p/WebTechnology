
let display =()=>{
    alert("btn clicked")
}

let btn2=document.querySelector(".btn2")
console.log(btn2);

btn2.addEventListener("click",()=>{
    alert("btn2 is clicked")
})


let hello1 =()=>{
    console.log("card1 is clicked");
}

let hello2=()=>{
    console.log("card2 is clickes");
}

let cards=document.getElementsByClassName("card")

cards[2].addEventListener("click",(e)=>{
    console.log(e.type);
    console.log(e.target);

    console.log("card3 is clicked");
})

cards[1].addEventListener("click",()=>{
    cards[1].innerHTML=cards[0].innerHTML

    cards[0].innerHTML=""
})

cards[0].addEventListener("click",()=>{
    let x =cards[1].innerHTML
    cards[0].innerHTML=x
    cards[1].innerHTML=""
})

let section=document.querySelector("section")

section.addEventListener("mouseover",()=>{
    section.style.backgroundColor="rgb(125, 251, 222)";
})

section.addEventListener("mouseleave",()=>{
    section.style.backgroundColor="antiquewhite";
})

 let inp1=document.getElementById("ar")

inp1.addEventListener("keyup",(e)=>{

    console.log(e.target.value);
    console.log("key up event occured");

    let output = document.querySelector(".outer")
    output.innerText=e.target.value
})

inp1.addEventListener("keydown",(e)=>{
    console.log(e.target.value);
    console.log("key down event occured");
    let output = document.querySelector(".outer")
    output.innerText=e.target.value
  })