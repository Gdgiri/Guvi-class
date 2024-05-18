/*
let food = "😋🍇😋";
console.log(food);

function food1() {
  return "😋🍉😋";
}

const foody = food1();

console.log(foody);

console.log("hi");

*/

/*

let food;

console.log("started");

function myfood() {
  console.log("async is start");

  setTimeout(() => {
    food = "🍉";
   
  }, 2000);
  console.log(`async will not wait ${food}`);
}

myfood();


console.log(`ended ${food}`);

*/

let food;
let fruit;
let name;

console.log("1. start");

function myfood() {
  console.log("2. async for food");

  setTimeout(() => {
    food = "😋🎂";
    console.log(`3. ${food}`);
  }, 5000);

  console.log("4. async food is over");
}

function myfruit() {
  console.log("5. async for fruit");
  setTimeout(() => {
    fruit = "😋🍉";
    console.log(`6. ${fruit}`);
  }, 2000);

  console.log("7. async fruit is over");
}

myfood();
myfruit();

name = "giri";

console.log(`8. ${name}`);
