let now=new Date()

console.log(now);

let hr=console.log(now.getHours());
let min=console.log(now.getMinutes());
let sec=console.log(now.getSeconds());

console.log(now.getDate());
console.log(now.getFullYear());
let days=['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];

console.log(days[now.getDay()]);


let months = [
  "January", "February", "March", "April",
  "May", "June", "July", "August",
  "September", "October", "November", "December"
];


console.log(months[now.getMonth()]);

console.log(now.getDate(),days[now.getDay()],months[now.getMonth()]);

console.log(now.toLocaleTimeString());
console.log(now.toDateString());
console.log(now.toLocaleDateString());


let showtime=()=>{
    let now=new Date()
let clock=document.querySelector(".inner")
let t=now.toLocaleTimeString()
//console.log(clock);

clock.innerHTML=`<h1>${t}</h1>`

}


setInterval(showtime,1000)

