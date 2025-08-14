let student ={
    sname : "San",
    age : 22,
    phNo : 12345678,
    email : "san@gmail.com",
    city :"Arani"
}

console.log(student.phNo);
console.log(student.email);

// ! object destructure


    // destructure we can access the element directly.
    let {sname,age,phNo,email,city}       =student

    console.log(sname);
    console.log(city);
 
// ! Array destructure

let arr=['html','css','js','react']

let [sub1,sub2,sub3,sub4]=arr

console.log(sub2);
console.log(sub3);
console.log(sub1);
console.log(sub4);

// ! rest parameter

// ? ...  => rest of the element are stored inside c while accessing it print the entire values.
//  the rest parameter is used to group the remaining element into an array.
// it collects "the rest " of the arguments  that were not explicitily specified.
// the rest parameter is represented by three dots (...)

let display =(a,b,...c)=>{

    console.log(a);
    console.log(b);
    console.log(c);
}

display(2,3,4,5,6,7,8,9)

let arr4=['html','css','js','react','node','express']

let [subject1,subject2,...subjects]=arr4

console.log(subject1);
console.log(subject2);
console.log(subjects);

// ! spread operator
// ? it will combain the two array if we give arr1 the o/p will be[[1,2,3]] to avoid nested array we are going for spread operator 

// it is used to allow to expand an array,object, or iteratoble into individual element
// it is often used to copy ,merge , or pass element.
// the spreed operator is represented by using three dots(...)

let arr1=[1,2,3]
let arr2=[4,5,6]

let arr3=[...arr1,...arr2]

console.log(arr3);

// ! shallow copy
// ? it is used to copy the elements to another variable and any changes made to one will reflect to another object

// A shallow copy of an object is an new object that is the copy of the original, but it will only copy the reference of the nested object instead of creating new instance
// this means that if the original object contains another object as property, changes to the nested object in the copy will affect the original copy and vice versa

let arr5=[2,3,4,5,6,7]

let copy=arr5

console.log(copy);

copy.push(100)

console.log(copy);

console.log(arr5);


// ! deep copy
// A deep copy create a completely independent clone of the original object, including all nested objects. Changes to the copied object do not affect the original.

let arr6=[1,2,3,4,5,6]

let copy2=JSON.parse(JSON.stringify(arr6))

console.log(copy2);
copy2.push(100)
console.log(copy2);
console.log(arr6);


let a=[1,3,5,7,9]
let b=[2,4,6,8]

let c=[...a,...b]
c.sort((x,y)=>x-y)
console.log(c);


