

let getData= async ()=>{
    console.log("hello");
    
    let f= await fetch("https://fakestoreapi.com/products")
    console.log(f);
    
    let j= await f.json()
    console.log(j);
    
    j.forEach((items) => {
  console.log(items.title);
  // prints each book's title
});

try{
        let data=document.getElementsByTagName("ol")[0]

 j.map((ele)=>{

            console.log(ele.title);
            let li=document.createElement("li")

            li.innerText=ele.title
            data.append(li)
        }
        )
    
}
catch(err)
{
    console.log(err);
    
}
}


getData()


