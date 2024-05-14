
//! function:-

//? Syntax:-

// function function_name(parameters){
    //set of statements
// }

//function call

// function_name(arguments)

//! function example:-

function add(a,b){
    console.log(a+b);
}
add(2,5)
add(10,20)


function sub(c,d){
    console.log(c-d);
}
sub(5,2)
add(3,7)


function name(){
    console.log("Giridharan");
}

name()

function sub(e,f){
    console.log(e*f);
}
sub(5,2)
add(3,7)

name()

//!return 

function person(name){
    return name;
}


function man(age){
    return age;

}

console.log(person("giri"));
console.log(man(22));
console.log(person("Hari"));

function arith(a,b,c,d){
    var add=a+b;
    var sub=a-b;
    var mul=a*b;
    var div=a/b;

    return [add,sub,mul,div];

}
for(var i=0;i<arith.length;i++){
console.log(arith(10,2)[i]);
}


//? Ananomys function:-

var n=function(a,b){
    return a+b;
}

console.log(n(100,50));// variable decalre pani atha call pananum function name ilaama


//!IIFE=> Immidiate Invoked Function Expression

var na=(function(a,b){
    return a+b;
}

)

console.log(na(100,55));

//? ---IIFE STRUCTURE---

// ((){

// })()

//! arroe function

//? => is a keyword

var ne=(a,b)=>{
    return a+b;
}

console.log(ne(10,20));