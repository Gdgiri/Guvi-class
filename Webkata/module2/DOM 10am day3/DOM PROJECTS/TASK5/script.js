let binary=document.getElementById("binary");
let decimal=document.getElementById("decimal");

decimal.addEventListener("input",()=>{
    let bin=decimal.value;
    bin=parseInt(bin).toString(2);
    binary.innerHTML=`The Binary Value is: ${bin}`;
})