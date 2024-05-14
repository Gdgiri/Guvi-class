let a={
    name:"giri",
    age:22
}

for(let man in a ){
    console.log(man);
}

const ago = Object.entries(a)
console.log(ago)

for(let [key,value] of ago){
    console.log(`${key}:${value}`);
}