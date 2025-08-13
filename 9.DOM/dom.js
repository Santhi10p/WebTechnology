
// ! how to target element


//  ? 1) target by id
// it will give the element not body

let logo=document.getElementById("logo")

console.log(logo);

// ? 2) target by the class

let boxes=document.getElementsByClassName("box")

console.log(boxes);
secondbox=boxes[1]
console.log(secondbox);

// ? 3) target by tag name

let contact=document.getElementsByTagName("li")
console.log(contact);

let list=contact[2]
console.log(list);

let login=document.getElementsByClassName("btn")
console.log(login[0]);

// ? 4) document.queryselector()

let logo2=document.querySelector("#logo")
console.log(logo2);

let b=document.querySelector(".box")
console.log(b);


// ! inner text, innerHTMl

console.log(secondbox.innerText);

console.log(secondbox.innerHTML);

let thirdbox=boxes[2]
console.log(thirdbox);

thirdbox.innerHTML="<h2>hello how are u</h2> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>"

//   secondbox.innerHTML="hi"    ====> it will replace already contain texts


// ! how to style

let loginbtn = document.querySelector(".btn")
console.log(loginbtn);

loginbtn.style.backgroundColor="red"
loginbtn.style.padding="10px"
loginbtn.style.color="white"

// ! how to add or remove the class

let section = document.querySelector("section")

console.log(section);

//? adding class
section.classList.add("con2")

console.log(section.classList);

//? removing class 
//section.classList.remove("con2")