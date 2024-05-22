let textarea= document.getElementById("textarea");

textarea.addEventListener("input",(element)=>{
   console.log( document.getElementById("span").innerText=`The characters ${element.target.value.length}`
)
})

