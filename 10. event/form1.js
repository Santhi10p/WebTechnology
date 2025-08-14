
stuForm.addEventListener("submit",(e)=>{
    e.preventDefault()

    let username=document.getElementById("username").value 
    let password=document.getElementById("password").value 
     
    console.log(username,password);

    console.log("hello");

})



stuForm.addEventListener("submit",(e)=>{
e.preventDefault
let a=parseInt(document.getElementById("num1").value) ;

let b=parseInt(document.getElementById("num2").value) ;
let sum=a+b;

document.querySelector(".output").innerText="Addition of numbers is "+ sum;

console.log("hello");
})

let select=document.getElementById("col")
select.addEventListener("change",(e)=>{
    console.log(e.target.value);
    
    document.getElementById("out").style.backgroundColor=e.target.value
})