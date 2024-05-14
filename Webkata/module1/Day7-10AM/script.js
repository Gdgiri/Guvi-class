// ! methods

/*

class Car{
    drive(){
        console.log("I am driving the car");
    }

    break(){
        console.log("I am applying break in the car");
    }


}

const obj = new Car();

obj.drive();
obj.break();

*/

//! setter and getter

/*

class Data{
    constructor(Name){

        this.nam=Name;

    }

    set User(n){

        this.nam=n;

    }

    get User(){
        return this.nam;
    }
}

const objs = new Data("Giridharan");

console.log(objs.nam);

console.log(objs.User);

*/

//! normal setter and getter

/*

const a={
    set Name(n){
        this.van=n;
        console.log(`Setting ${n}`);

    },

    get Name(){

        console.log("getting");
        return this.van;
    }
}

a.Name="giri dharan";
console.log(a.Name);

*/

//! setting and getting without constructor

// class Man{
//     // constructor(Name){

//     //     this.van=Name;

//     // }

//     set van1(n){
    
//         console.log(`Setting &{n}`);
//         this.van=n;
//     }

//     get van1(){

//         console.log("Getting");
//         return this.van
//     }
    
// }


// Man.van1="giri"

// console.log(Man.van1);

//!Cyber dude

/*

let Student={
    FirstName:"Giri",
    LastName:"dharan",
    FullName(){
        return `${this.FirstName}${this.LastName}`;
    }
}

Student.FirstName="Hari";

console.log(Student.FullName());

*/


//! example

class Car{
    constructor(power=50){

        this.pow=power;
        // console.log(power);

        

    }

    set power(n){
        return `${this.pow=n}`;
    }

    get power(){
        return `${this.pow}hp`;
    }


}

const car1= new Car(400);

console.log(car1.power);