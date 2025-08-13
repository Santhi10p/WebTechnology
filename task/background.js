
let outer=document.querySelector(".box")

let changeBackground =(color)=>{
    outer.style.backgroundColor=color
    //alert(color)
}

let themeChange = ()=>{
    outer.classList.toggle("dark")
}