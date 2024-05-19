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

/*
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

*/

//! callback function

/*

console.log("Order was placed in Swiggy");

function myfood(callback) {
  setTimeout(() => {
    const food = "🎂🍉😋🍇";
    callback(food);
  }, 3000);
}

function foodready(food) {
  console.log("The food is ready:", food);
}

myfood(foodready);

console.log("do other works until food be ready");

*/

//Hotel order

/*

console.log("Customer ordering Noodles to Waiter");

console.log("Waiter said to cheif what are the orders came");

function hotel(Waiter) {
  setTimeout(() => {
    console.log("Noodles is ready");
  }, 1000);

  setTimeout(() => {
    const food = "Noodles";
    Waiter(food);
  }, 3000);
}

function customer(food) {
  console.log(`🍝${food} was served by Waiter to Customer`);
}

hotel(customer);

console.log("Wait for 3 second food is be ready, Waiter said");

*/

//! app Loading
//! it just example callback without using function
//? students purilanu sonathaala

console.log("first");
console.log("second");
console.log("App is started");
setTimeout(() => console.log(".....Loading"), 5000);
setTimeout(() => console.log("app completed"), 8000);

console.log("app is buildinig");
