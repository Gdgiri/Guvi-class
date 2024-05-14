//? object to array convert and print:

//! example for-in and for-of

var per={
    name:"giri",
    age:22
}


//! for-in

for(var mon in per){
    console.log(per[mon]);
}

//! for-of

const sunday=Object.entries(per);


for(var [key,value] of sunday){
    console.log(value);
}

