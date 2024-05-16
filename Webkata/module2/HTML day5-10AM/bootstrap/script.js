document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector("form");
    let email = document.getElementById("inputEmail4");
    let password = document.getElementById("inputPassword4");
    let address = document.getElementById("inputAddress");
    let address2 = document.getElementById("inputAddress2");
    let city = document.getElementById("inputCity");
    let state = document.getElementById("inputState");
    let zip = document.getElementById("inputZip");
    let check = document.getElementById("gridCheck");
    let btn = document.getElementById("btn");
    
  
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent the form from submitting
      console.log("Email:", email.value);
      console.log("Password:", password.value);
      console.log("Address:", address.value);
      console.log("Address 2:", address2.value);
      console.log("City:", city.value);
      console.log("State:", state.value);
      console.log("Zip:", zip.value);
      console.log("Check me out:", check.checked);
    });
  });
  