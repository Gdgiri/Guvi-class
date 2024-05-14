// console.log("hello");

/*

! Array Example

var a=[1,2,3,"giri",22,true];

for(var i=0;i<a.length;i++){
    console.log(a[i]);
}

*/

// ! object

// var person = {
//   name: "Giri",
//   age: 22,
//   phone: 9715424895,
//   gender: "male",
//   gmail: "giridharan831@gmail.com",
//   qualification: ["10th", "11th", "12th", "B.Sc", "MCA", "MERN Stack"],
// };

// console.log(person);

// !dot method

/*

console.log(person.name);
console.log(person.age);
console.log(person.phone);
console.log(person.gender);
console.log(person.gmail);

for (var i = 0; i < person.qualification.length; i++) {
  console.log(person.qualification[i]);
}

*/

//!box method

/*

console.log(person["name"]);
console.log(person["age"]);
console.log(person["phone"]);
console.log(person["gender"]);
console.log(person["gmail"]);

for (var i = 0; i < person.qualification.length; i++) {
    console.log(person.qualification[i]);
  }

*/


//!resume
/*
var resume={
    name:"giri",
    age:22,
    gender:"male",
    language_knowm: ["Tamil","English"],
    qualification:["10th", "11th", "12th", "B.Sc", "MCA"],
    skills:["C","C++","HTML","CSS","JS","JSDOM"],
    year_of_passing_out:2024,
    CGPA:8.2
};
*/

// console.log(resume);
// console.log(resume.name);
// console.log(resume.age);
// console.log(resume.gender);

// for(var i=0;i<resume.language_knowm.length;i++){
//     console.log(resume.language_knowm[i]);   
// }

// for(var i=0;i<resume.qualification.length;i++){
//     console.log(resume.qualification[i]);
// }

// for(var i=0;i<resume.skills.length;i++){
//     console.log(resume.skills[i]);
// }

// console.log(resume.year_of_passing_out);
// console.log(resume.CGPA);

// for(var i in person){
//     console.log(person[i]);
    
   
// }


// ! adding , updating , deleting the element in object

// var movie={
//   Title: "Leo",
//   Hero: "vijay",
//   Heroin: "Trisha",
//   cast:["Arjun","sanjay dutt","mansoor"],
//   Budget:"500Crore",
//   Language:["Tamil", "Telugu" , "Kannada" , "Hindi" , "Malayalam"]
// };

// console.log(movie);

//#Adding 
// movie.cast[3]="sandy";
// movie.cast[4]="Myskin";

// movie.IMBD_Rating=[7.4 , "Good"];

//?update

// movie.cast[3]="hynna";

//!delete

// delete movie.Language
// delete movie.IMBD_Rating[1];


// JSON Example

// JSON=>JavaScript Object Notation

// var movie={
//   "Title":"Gilli",
//   "Hero": "Vijay",
//   "Heroin": "Trisha",
//   "IMBD_Rating":"9.1"
// }

// console.log(movie);

// !stringify

// var person={


// name:"Giri",
// age:22,
// gender:"male"

// };

// var b=JSON.stringify(person);
// console.log(b);
// var c=JSON.parse(b);
// console.log(c);

// ! array of object

var arr=[
  {
    "name":"Giri",
    "age":"22"
  },

  {
    "name":"Hari",
    "age":"24"
  },

  {
    "name":"Sivaraman",
    "age":"60"
  },

  {
    "name":"Viji",
    "age":"50"
  },
];

for(var i=0;i<arr.length;i++){
  console.log(arr[i].name,arr[i].age);
}