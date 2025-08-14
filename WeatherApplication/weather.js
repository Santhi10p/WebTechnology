

let getData=async(city)=>{

    try{

    let res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=67063fb6e6866561b346bc72d4ff1392&units=metric`)

    
    let data=await res.json()
    console.log(res);
    console.log(data);

    if(data.name){

    let location=document.querySelector(".location")
    location.innerText=data.name
    document.querySelector(".minTemp").innerText=data.main.temp_min
    }
    else{
        let loc=document.querySelector(".main")
        loc.innerText=""
        loc.innerHTML=`<h1>city not found</h1>`
    }
}
    catch(err){
    console.log(err);
    }
    
}
getData("chennai")
let btn=document.querySelector("button")
let searchbtn=btn.addEventListener("click",()=>{
    let input=document.querySelector("input").value
    console.log("click");
    console.log(input);
    
    getData(input)
    
    

})


