// function cli(){
//     var res=document.getElementById("val").value;

//     if(res==="giridharan831@gmail.com"){
//         alert("Valid EmailID");
//     }
//     else{
//         alert("Not Valid EmailID");
//     }
// }




const div=document.getElementById("container");
const red=document.getElementById("red");
const blue=document.getElementById("blue");
const rest=document.getElementById("rest");
const green=document.getElementById("green");

red.addEventListener("click",()=>{
    div.style.backgroundColor="red";
})

blue.addEventListener("click",()=>{
    div.style.backgroundColor="blue";
})

green.addEventListener("click",()=>{
    div.style.backgroundColor="green";
})

rest.addEventListener("click",()=>{
    div.style.backgroundColor="white";
})