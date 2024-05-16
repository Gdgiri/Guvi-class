let a = document.getElementById("first");
let btn = document.getElementById("button");
let head=document.getElementById("answer");

let c = a; 

console.log(c.value); 

btn.addEventListener("click", () => console.log(a.value)); 
