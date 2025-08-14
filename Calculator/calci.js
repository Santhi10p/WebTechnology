

let appendNumber=(num)=>{

    document.getElementById("inp1").value +=num;
    console.log("clicked");
    
}

let appendOperator=(op)=>{
    document.getElementById("inp1").value+=op
}

let result=()=>{
    let value=document.getElementById("inp1").value
    document.getElementById("inp1").value=eval(value)
}

let clearCal=()=>{
    document.getElementById("inp1").value=""
}

let backspace=(b)=>{
    let value=document.getElementById("inp1").value
    document.getElementById("inp1").value=value.slice(0,-1)
}