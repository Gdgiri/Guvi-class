const color = document.getElementById("colors");

color.addEventListener("mouseover", () => {
  color.style = "background-color:blue;color:white;";
});

color.addEventListener("mouseleave", () => {
  color.style = "background-color:white";
});
