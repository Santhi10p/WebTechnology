
let stuForm = document.getElementById("stuForm")
console.log(stuForm);


stuForm.addEventListener("submit",(e)=>{
    e.preventDefault()

    let username=document.getElementById("username").value 
    let password=document.getElementById("password").value 
     
    console.log(username,password);

    console.log("hello");

})
