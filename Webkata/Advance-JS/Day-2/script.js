//! promise

//? Example-1

/*

const number=parseInt(prompt("Enter the number"));

const prom= new Promise((resolve,reject)=>{
    if(number%2===0){
        resolve("Even number");
    }
    else{
        reject("Odd number")
    }
})

prom.then((data)=>console.log(data)).catch((error)=>console.log(error));

*/

//? Example-2
/*

const age = parseInt(prompt("Enter your age"));

const prom = new Promise((resolve, reject) => {
  if (age >= 80) {
    resolve("You are scenior citizenship Voter 👆");
  } else if (age >= 18) {
    resolve("You are ready to VOTE 👆");
  } else {
    reject("You are not ready for VOTE 👆");
  }
});



prom.then((Vote) => console.log(Vote)).catch((error) => console.log(error));

*/

//? Example-3
/*
const age = parseInt(prompt("Enter you age"));

const roller_coster = new Promise((resolve, reject) => {
  if (age >= 60) {
    reject("You are TOO AGE🧓👴👵 NOT SELECTED TO RIDE");
  } else if (age >= 16) {
    resolve("You are Selected 👨 TO RIDE");
  } 

  else if(age<16) {
    reject("You are KID not selected 👶 TO RIDE");
  }
else{
    reject("Enter the number");
}
 
});

roller_coster
  .then((select) => console.log(select))
  .catch((reject) => console.log(reject));
*/

/*
function vote(age) {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      resolve("You are eligible to VOTE");
    } else if (age < 18) {
      reject("You are not eligible to VOTE");
    } else {
      reject("Please Enter the Age");
    }
  });
}

vote(18)
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
*/

//! promise chaining

//? Example-1
/*
function add(num){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(num+2)
        },2000)
    })
}

add(2)
.then((data)=>{

    console.log(data);

    return add(data);
})

.then((ele)=>{
    console.log(ele);

    return add(ele);
})

.then((oni)=>{
    console.log(oni);

    return add(oni);
})

.catch((error)=>console.log(error))

*/

//? Example-2

/*

function mul(num){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(num*2)
        },2000)
    })
}

mul(2)
.then((data)=>{

    console.log(data);

    return mul(data);
})

.then((ele)=>{
    console.log(ele);

    return mul(ele);
})

.then((oni)=>{
    console.log(oni);

    return mul(oni);
})

.then((pp)=>{
    console.log(pp);

    return mul(pp);
})

.catch((error)=>console.log(error))

*/

/*
const promise1 = new Promise((resolve, reject) => {
  if (true) {
    setTimeout(() => resolve("Promise1 is successfully executed"), 2000);
  } else {
    setTimeout(
      () => reject("promise1 is not sucessfully execute because it rejected"),
      2000
    );
  }
});

const promise2 = new Promise((resolve, reject) => {
  if (true) {
    setTimeout(() => resolve("Promise2 is successfully executed"), 2000);
  } else {
    setTimeout(
      () => reject("promise2 is not sucessfully execute because it rejected"),
      2000
    );
  }
});

const promise3 = new Promise((resolve, reject) => {
  if (false) {
    setTimeout(() => resolve("Promise3 is successfully executed"), 2000);
  } else {
    setTimeout(
      () => reject("promise3 is not sucessfully execute because it rejected"),
      2000
    );
  }
});

const promise4 = new Promise((resolve, reject) => {
  if (true) {
    setTimeout(() => resolve("Promise4 is successfully executed"), 2000);
  } else {
    setTimeout(
      () => reject("promise4 is not sucessfully execute because it rejected"),
      2000
    );
  }
});

Promise.all([promise1, promise2, promise3, promise4])
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

//! promise.allsettled

const result = Promise.allSettled([
  promise1,
  promise2,
  promise3,
  promise4,
]).then((data) => {
  data.forEach((result) => {
    console.log(result);
  });
});

*/

let api = fetch("https://restcountries.com/v3.1/all")
  .then((data) => data.json())
  .then((ele) => {
    for (let i = 0; i < ele.length; i++) {
      console.log(`${ele[i].capital},${ele[i].flags.png}`);
    }
  })
  .catch((error) => console.log(error));

  let attribute=document.createElement("button");
  attribute.setAttribute("button","submit")
