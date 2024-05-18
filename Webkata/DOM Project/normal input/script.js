let names = document.getElementById("name");
let btn = document.getElementById("submit");
let output = document.getElementById("output");

btn.addEventListener("click", () => {
  output.textContent = names.value;
});
