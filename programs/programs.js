let a=[1,3,5,7,9]
let b=[2,4,6,8]

let e=[...a,...b]
e.sort((x,y)=>x-y)
console.log(e);
// 
let arr=[1,1,0,1,0,0,1,0,1]

let i=0
let j=0

 while(j<arr.length){
   if(arr[j]==1)
    j++;
 else
 {
    let temp=arr[j]
    arr[j]=arr[i]
    arr[i]=temp
    i++
    j++
 }
 }
console.log(arr)

// ! odd Even

let num=10

if((num & 1) ==0)
{
    console.log("It is even");
}
else{
    console.log("It is odd");
    
}

let arr1=[1,1,0,1,0,0,1,0,1]

let c=0
let d=0

 while(d<arr1.length){
   if(arr1[d]==0)
    j++;
 else
 {
    let temp=arr1[d]
    arr1[d]=arr1[c]
    arr1[c]=temp
    c++
    d++
 }
 }
console.log(arr)