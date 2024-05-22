//! normally we use async method in js

//? 1. MRF=>Map Reduce Filter , 2. setTimeOut , 3.addEventListener etc....

//example for async in normal JS

/*

let food;

console.log("started");

function myFood() {
  console.log("async is started");

  setTimeout(() => {
    food = "Pizza";
  }, 3000);

  console.log("Async is not wait");
}
myFood();

console.log(`going to end ${food}`);

*/

//javascript is a single thread. but it used asynchronuze method to change multiple thread

//! another example

/*

console.log("Giri");

function names() {
  console.log("His brother name is");

  setTimeout(() => {
    let alsocalled = "Hari-Giri Assembly";

    console.log(`They also called ${alsocalled}`);
  }, 3000);
  console.log("Hari");
}
names();
console.log(` wait for few minutes `);

*/

//? callback code

//! 1. example1:

/*

console.log("First");
console.log("Second");
console.log("App is started");
setTimeout(()=>{
    console.log("....Loading");
},3000);
setTimeout(()=>{
    console.log("app is completed");
},5000);
setTimeout(()=>{
    console.log("Enjoy your own building APP!!!");
},8000)
console.log("app is building please wait....");

*/

//! 2. example
/*
console.log("food is ordered in swiggy");
function myfood(callback) {
  setTimeout(() => {
    const food = "Briyani";
    callback(food);
  }, 3000);
}

function foodready(food) {
  console.log("food is ready", food);
}

myfood(foodready);

console.log("Please Do any other work until food ready");
*/

//! 3. example

/*
console.log("food is ordered in Hotel by customer to waiter");

function hotel(waiter) {
  console.log("waiter ask to customer Sir any thing like to order");
  console.log("Customer order briyani");

  setTimeout(() => {
    let food = "briyani";
    waiter(food);
  }, 3000);

  console.log("Sir wait for 3sec food is going to ready");
}

function customer(food) {
  console.log(`${food} is ready`);
  console.log("Briyani was served by waiter");
  console.log("Thank you Vist Again!!!");
}

hotel(customer);

console.log("Waiter came");
*/

//callback

/*
console.log("start");

function myfood(callback) {
  setTimeout(() => {
    const food = "😋briyani";

    callback(food);
  }, 3000);
  console.log("do some work till food ready");
}

function foodready(food) {
  console.log(`${food} is ready`);
}

myfood(foodready);
console.log("vanakam vandanam namaste");
*/

//! example of callback function

const complete = () => {
  console.log("Finish");
};

const add = (callback) => {
  let a = 1;
  let b = 4;

  console.log("sum", a + b);

  callback();
};

add(complete);
