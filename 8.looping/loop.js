
let arr=['html','css','js','react','node','express','mongodb']

// ! for in loop

// it will give the index

for(let i in arr)
{
    console.log(i, arr[i]);
    
}

// ! for of loop

//  it will give all the elements

for(let ele of arr)
{
    console.log(ele);
    
}

let ob={
    ob_name : "pen",
    price:20,
    color : "red"
}

for(let key in ob)
{
    console.log(key, ob[key]);
    
}

// ! for of loop is not possible in object

//for(let ele of ob){}
    // console.log(i);  
// }                         => not posible

// !how to traverse array of object

const indianCricketTeam = [
    {
    name: "Hardik Pandya",
    role: "All-Rounder",
    battingStyle: "Right-hand bat",
    bowlingStyle: "Right-arm fast-medium",
    age: 32
  },
  {
    name: "Rohit Sharma",
    role: "Batsman",
    battingStyle: "Right-hand bat",
    bowlingStyle: "Right-arm offbreak",
    age: 37
  },
  {
    name: "Virat Kohli",
    role: "Batsman",
    battingStyle: "Right-hand bat",
    bowlingStyle: "Right-arm medium",
    age: 36
  },
  {
    name: "Jasprit Bumrah",
    role: "Bowler",
    battingStyle: "Right-hand bat",
    bowlingStyle: "Right-arm fast",
    age: 31
  },
  {
    name: "Ravindra Jadeja",
    role: "All-Rounder",
    battingStyle: "Left-hand bat",
    bowlingStyle: "Left-arm orthodox",
    age: 36
  },
  {
    name: "KL Rahul",
    role: "Wicketkeeper-Batsman",
    battingStyle: "Right-hand bat",
    bowlingStyle: "–",
    age: 33
  }
  
];

indianCricketTeam.map((ele)=>{
    console.log("player name is : ",ele.name.toUpperCase());
    console.log("batting style is : ",ele.battingStyle);
    console.log("-------------------------------------");
})

let addNumbers = ()=>{
    let a=parseInt(prompt("enter first number"))
    let b=parseInt(prompt("enter the second element"))

    alert(a+b)
}
addNumbers()