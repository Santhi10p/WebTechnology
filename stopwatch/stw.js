
let timer
let hr=0
let min=0
let sec=0
let running=false

function updatewatch(){
    let h=hr<10 ? "0"+hr : hr
    let m=min<10 ? "0"+min : min
    let s=sec<10 ? "0"+sec : sec
    document.querySelector(".inp").innerText=`${h}:${m}:${s}`
}

let start=()=>{
    if(!running){
        running=true
        timer=setInterval(()=>{
        sec++
        if(sec===60){
            sec=0
            min++
        }
        if(min===60){
            min=0
            hr++
        }
        updatewatch()
    },1000)
    }
}

let pause=()=>{
    running=false
    clearInterval(timer)
}

let reset=()=>{
    running=false
    clearInterval(timer)
    sec=0
    min=0
    hr=0
    updatewatch()
}










updatewatch()
