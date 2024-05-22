let edit = document.getElementById("edit");

edit.addEventListener("mouseover",()=>{
    edit.setAttribute("contenteditable","true");
    
})

edit.innerHTML="The content going to edit by user"