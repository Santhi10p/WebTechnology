console.log("I am external javascript");

// how many ways we can declare variable ??

// ! 1. let

let myName              //variable declaration

myName = "Santhi"       //variable initialization
myName="Santhi P"
let myAge = 22          //variable declaration and initialization

console.log(myName)
console.log(myAge);







// ! 2. var

var phNp="1234567890"

console.log(phNp);

var city="chennai"
city="Tiruvannamalai"


console.log(city);

//   ! in var keyword we can do re-declaration but in let keyword we can not do re-declaration.


// ! 3.const

// const will not accept duplicate we cannot perform re-declaraton or re-initialization 

const aadharNo = 789456123


console.log(aadharNo);

// ! datatypes

// ! primitive

//? 1 -> number
let eid = 35

let sal = 10000.50


// !  typeof     
// typeof operator is used to know the data type of an object

console.log(eid);
console.log(typeof eid);

//? 2 -> String

let emp1 = "Hardik"
let emp2 = 'Kurnal'
let emp3 = `Ishan`  // `->packticks

console.log(typeof emp1);
console.log(typeof emp2);
console.log(typeof emp3);

//? 3 -> boolean

let isMarried = false
console.log(typeof isMarried);

let hasChild = true
console.log(typeof hasChild);

//? 4 -> undefined    => any variable declared but not initialized is called undefined
// typeof undefined is also undefined
let empPho
console.log(empPho);
console.log(typeof empPho);


// ? 5-> null
// typeof null is object
let empsal=null
console.log(typeof empsal);

// ? 6 -> bigint

let count=2n
console.log(count);
console.log(typeof count);

// !! non-primitive data type

// ? 1. Array

let arr=[10,"san",true,undefined,[30,40]]

console.log(arr);

// ? 2. function

function display()
{
    console.log("i am display function...");
}
display()   // function call

// ? 3. object

// we can store the values like key and value pairs

let student={
    sname:"santhi",
    age:22,
    address:"mamandur"
}
console.log(student);
