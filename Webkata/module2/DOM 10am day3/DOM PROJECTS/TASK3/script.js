let head= document.getElementById("task3head");
let axis = document.getElementById("axis");


head.addEventListener("click",(e)=>{
    axis.innerText=` The Co-ordinate of Mouse-x:${e.pageX} and The Co-ordinate of Mouse-y:${e.pageY}`
})
