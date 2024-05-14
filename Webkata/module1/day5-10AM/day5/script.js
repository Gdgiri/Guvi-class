//! Hoisting

/*

console.log(a);

var a=10;

console.log(b);
console.log(c);

let b=20;
const c=30;

*/

// redeclaring and reassigning

/*

var a=30;
var a=40;

console.log(a);

let b=20;
b=30;

console.log(b);

const c=20;


console.log(c);

*/

//! scoping

// function man(){
//     let a=20;
//     var b=20;
//     const c=30;
// }
// man()

// console.log(a,b,c);

/*
|
|
|
|
|

*/

// let a=30;
// var b=20;
// const c=30;

// function don(){
//     a=40;
//     b=50;
// }


// don()

// console.log(a,b,c);

//! array destructering

// without destructering

/*

const fruits=["🦁","🐯","🦊","🐻","🐷","🐮"];

const lion=fruits[0];
const tiger=fruits[1];
const fox=fruits[2];
const bear=fruits[3];
const pig=fruits[4];
const cow=fruits[5];

console.log(lion,tiger,fox,bear,pig,cow);

// with destructering

const [lions,tigers,foxes,bears,pigs,cows]=fruits;

console.log(lions,tigers,foxes,bears,pigs,cows);


const div=document.getElementById("container");
const red=document.getElementById("red");
const rest=document.getElementById("rest");

red.addEventListener("click",()=>{
    div.style.backgroundColor="rgb(0, 153, 255)";
})
rest.addEventListener("click",()=>{
    div.style.backgroundColor="antiquewhite";
})

div.append(lions,tigers,foxes,bears,pigs,cows)

document.body.append(div)

//! object destructering

// without destructering
const per={
    names:"giri",
    age:22,
    address:{
        city:"devakottai",
        state:"tamilnadu"
    }
}

console.log(per.names);
console.log(per.age);
console.log(per.address.city);
console.log(per.address.state);

//with destructering

const {names,age,address:{city,state},phone=9715424895}=per;

console.log(names,age,state,city,phone);

//! array of object destructering method

const grocerry=[
    {item:"rice",price:200,category:"grains"},
    {item:"apple",price:100,category:"fruits"},
    {item:"tomato",price:50,category:"vegetables"}
]


// without destructering
console.log(grocerry[0].item);


// with destructering 


const [{item,price,category}]=grocerry;

console.log(item,price,category);


*/

//! object of array destructering method

// const person={
//     name:"giri",
//     age:22,
//     address:["devakottai","tamilnadu","india"]
// }

// //without destructering

// console.log(person.address[0],person.name);

// //with destructering 

// const {name,age,address:[city,state,Country]}=person;

// console.log(city , name,age,state,Country);


//! object shortand property

// const id=100;

// const name="giri";

// const detail={
//     id,
//     name
// }

// console.log(detail);

//! template literals

// const name="giri";
// const age=22;

// console.log(`Hi my name is ${name} and my age is ${age}`);

//! spread operator

/*
const name=["giri","dharan"];

console.log(...name);

// example 2

const a=["giri","dharan",22];
const b=["hari","rama","krishnan",24];

const c=[...a,...b];// join two array into one

console.log(...c);// convert string into character

*/

