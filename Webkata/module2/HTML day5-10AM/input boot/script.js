let a = document.getElementById("first");
let btn = document.getElementById("button");
let head=document.getElementById("answer");

let c = a; 

btn.addEventListener("click", () => console.log(a.value)); 

head.append(a.value);

document.body.append(head);
