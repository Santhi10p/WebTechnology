console.log("function in javasript");

//it is a block of code used to perform some task.
// How to create function


function display(){
console.log("I am display function");

}
display();

function add(){
    let a=10
    let b=20
    console.log(`the addition of ${a} and ${b} is ${a+b}`);
    
}
add()


//function with parameter to get diffrent output no need to write let or var
function add(a,b){
    
    console.log(`the addition of ${a} and ${b} is ${a+b}`);
    
}
add(10,20)
add(100,200)


// ! funtion with return
function mutiply(a,b){
    return a*b
}
let multi=mutiply(10,3)
console.log(multi);


// ! 1.named function
function num(a,b){
    console.log("Before swapping");
   console.log(`num1 value is:${a}`);
   console.log(`num2 value is:${b}`);
    
   let temp=a;
   a=b;
   b=temp;
   console.log("After swapping");
   console.log(`num1 value is:${a}`);
   console.log(`num2 value is:${b}`);

   }
num(10,5)
// !2.Annonymous function
//any function does not any name is called as annonymous function
// we cann't able to call the function

//! 3.function with expression
let hello=function(){
    console.log("hello");
    
}
hello()
let oddeven=function(a){
    if(a%2==0)
        console.log(`${a} is even number`);
      else
      console.log(`${a} is odd number`);
    
    
}
oddeven(10)


// ! 4. Arrow function

let sub = (a,b)=>{
    return a-b
}

let res2=sub(50,10)

console.log(res2);

// ! write a function to find the power of any number 

let res=1
let val = (a,b)=>{
    
    for(let i=1;i<=b;i++){
        res =a*res;
    }
}
val(2,5)
console.log(res);


// ! 5. nested function

let outer = ()=>{
    console.log("I am outter function");
    let inner = ()=>{
        console.log("I am inner function");
    }
    inner()
}
outer()


// ! What is lexical scopping ??

// in nested function, inner function can access all the properties of the outer function but the outer function cann't access the properties of the inner function.this is called lexical scopping.

let parent = ()=>{
    let a=10
    let child = ()=>{
        let b=20
        console.log(`the value of a is ${a}`);
        console.log(`the value of b is ${b}`);
        
        }
       // console.log(b);   // it is not posible
        
        child()
}

parent()

// ! 6 higher order function
//  any function that takes another function as a parameter is called higher order function.
// A function is send to the higher order function as a parameter is called callable function.

let hi=()=>{
    console.log("I am hi function");
}

let hello2=(a)=>{
    console.log("I am hellow function");
    hi()
}
hello2(hi)


hello2(()=>{
    console.log("Itself");
    
});

// ! 7. IIFE (immediate invoke function expression)
// only ince we can use this function
(
    function(a,b){
        console.log(a+b); 
    }
)(10,20)


