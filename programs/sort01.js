




let isPalindrome =(arr)=>{
    
    let i = 0 ;
    let j = arr.length - 1 ;

    while(i<=j)
    {
      
        if(arr[i] != arr[j])
            return false

        i++;
        j--

    }

    return true
    
 
}


let a = [1,2,3,2,1]
let b = [1,5,6,4,1]

console.log(isPalindrome(a)) 
console.log(isPalindrome(b)) 








// !



let arr = [2,3,4,1,5,10]

let flag = true;

for(let i=1 ; i<arr.length;i++)
{
    if(arr[i-1] > arr[i])
    {
        flag = false       
        break;
    }
}

if(flag == true)
    console.log("sorted")
else
    console.log('not sorted')





// !



// !  left rotate the array by 1 position

let arr = [10,20,30,40,50,60]


let copy = arr[0]

for(let i=1 ; i<arr.length ; i++)
{
    arr[i-1] = arr[i]
}

arr[arr.length-1] = copy

console.log(arr)




// !



let arr = [ 1,1,0,0,1,0,1,1,1]


let c = 0 ;
let max = 0 

for(let i=0 ; i<arr.length ; i++)
{
    if(arr[i] == 1)
    {
        c++;
        max = Math.max(max,c)
    }
    else{
        c = 0 
    }
}

console.log(max)




// !


let arr = [1,2,3,4,6]

let n = 6


let expectedSum = (n * (n+1))/2

// console.log(expectedSum)

let sum = 0 
for(let i = 0;i<arr.length ;i++)
{
     sum = sum + arr[i]
}

let missingNumber = expectedSum - sum 

console.log(missingNumber)


// ===============================================================

let xor1 = 0

for(let i=0;i<arr.length;i++)
{
   xor1 = xor1 ^ arr[i]
}

let xor2 = 0 

for(let i=1;i<=n;i++)
{
    xor2 = xor2 ^ i
}

console.log(xor1 ^ xor2)






// !

isEven = (num)=>{
    
    if((num & 1) == 0)
    {
        console.log("it is even")
    }
    else{
        console.log('it is odd')
    }

}

isEven(6)
isEven(7)





// !

// !  right rotate the array by 1 position

let arr = [10,20,30,40,50,60]

// output = >  [60,10,20,30,40,50]

let n = arr.length

let copy = arr[n-1]

for(let i=n-2 ; i>=0;i--)
{
   arr[i+1] =  arr[i]
}

arr[0] = copy

console.log(arr)







// !


let arr = [1,2,3,3,2,4,1]

// output =>  4

let ans = 0 
for(let i=0; i<arr.length ; i++)
{
    ans = ans ^ arr[i]

}

console.log(ans)




// !


let arr = [1,1,0,1,0,0,1,0,1]

let i = 0 
let j = 0

while(j < arr.length)
{
    if(arr[j] ==1)
        j++;
    else{

        let t = arr[j]
        arr[j] = arr[i]
        arr[i] = t

        i++;
        j++;
    }
}

console.log(arr)


console.log(10 & 1)