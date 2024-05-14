// function man(){
//     const age=document.getElementById("vote").value;
//     console.log(man);

//     if(age<18){
//         alert("Not Eligible for VOTE");
//     }
//     else{
//         alert("Eligible for VOTE");
//     }
// }

// //! Alert

// alert("I am giri");

// //! Confirm
// confirm("Is your name giri");

// //! Prompt
// prompt("What is your name");

//? CreateElement EventListener

// var a=document.createElement("button");
// a.setAttribute("type","button");
// a.id="btn";
// a.classList.add("btn","btn-danger");
// a.innerText="Click here";
// a.addEventListener("click",()=>{
//     alert("You click the button");
// });

// document.body.append(a);


//!normal function set time out method

/*

function time(){

    alert("Giridharan is a good boy");

}

setTimeout(time,5000);

*/

//! anonyms function

/*

setTimeout(function(){
    alert("hari");
},5000)

*/

//! arrow function

/*

setTimeout(()=>{
    alert("Hari and giri assembly");
},5000)


*/


// var start=document.getElementById("starting");
// var end=document.getElementById("ending");

// function settime(){

//     start.addEventListener("click",()=>{
//         setTimeout(()=>{
//             alert("Session is started");
//             console.log("Start");
//         },1000)
//     });

// }

// function endtime(){
//     clearTimeout(ending);
//     alert("Session is ended")
//     console.log("end");
// }

//  let id;

//  function settime(){
//     id=setTimeout(()=>{
//                     var a=document.createElement("h1");
//                     a.innerText="Session is started";
//                     a.setAttribute("class","head");
//                     document.body.append(a);
//                     console.log("Start");
//                 },1000)
//  }


//  function endtime(){
//     clearTimeout(id);
//     console.log("end");
//  }

 

const timer=document.getElementById("timer");
const btn=document.getElementById("btn");
const rest=document.getElementById("rest");
const cont=document.getElementById("cont");
let stop;
let count=0;
btn.addEventListener("click",()=>{
   stop= setInterval(()=>{
        count+=1;
       timer.textContent=count;
    },1000)
})

rest.addEventListener("click",()=>{
    clearInterval(stop)
})

cont.addEventListener("click",()=>{
    clearInterval(stop);
    count=0;
    timer.textContent=count;
})

