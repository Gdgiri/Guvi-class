//! getelement id

const a=document.getElementById("container");
console.log("getElementById");
console.log(a);

//! getelement class
const b=document.getElementsByClassName("container");
console.log("getElementsByClassName");
console.log(b);

//! getelement tag

const c=document.getElementsByTagName("div");
console.log("getElementsByTagName");
console.log(c);

//? edit

a.innerHTML="Hello GIRI";

const d=document.getElementById("container2");
console.log(d);
d.innerHTML="<b><i>Is that over or not</i></b>";

const e=document.querySelector("#container3");

e.innerHTML="<u>Why? you not complete yet<u>"