let button=document.querySelector("button");
let current="light";
 button.addEventListener("click",()=>{
    console.log("hi coder");
    if(current==="light"){
        current="dark";
        document.querySelector("body").style.backgroundColor="black" ;
        document.querySelector("body").style.color="red" ;
        document.querySelector("button").style.color="pink" ;
    
    }
    else{
        current="light"
        document.querySelector("body").style.backgroundColor="white";fontColor="black";
         document.querySelector("body").style.color="pink" ;
    
}
console.log(current);

 });
