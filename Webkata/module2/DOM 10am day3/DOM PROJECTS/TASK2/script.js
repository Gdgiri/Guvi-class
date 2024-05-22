let button = document.createElement("button");
let span = document.createElement("span");

button.setAttribute("type", "submit");
button.innerText = "Click here";
button.id = "btn";

span.id = "spa";

document.body.append(button, span);

button.addEventListener("click", () => {
  let peru = prompt("Enter you name");
  span.innerHTML = `<b>${peru} </b>`;
});
