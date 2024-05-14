//! withou map

/*
const a=[11,22,33,44];
const result=[];

for(let i=0;i<a.length;i++){
    result.push(a[i]*2);    
}

console.log(result);
*/

//! with map using normal function

/*

const b=[10,20,30,40];

function mul(e){
    return e*2;
}

const mm=b.map(mul);

console.log(mm);

*/

//! with map using arreo function
/*

let que=[1,2,3,4,5];

let arrow=console.log(que.map((ele)=>ele*2)); 

let fruit=["apple","orange","mango"];

let fruits=console.log(fruit.map((ele)=>ele+"s")); 

*/

//! Filter

//! without filter method

/*
let arr=[10,11,12,13,14];

for(let i=0;i<arr.length;i++){
    if(arr[i]%2===0){
        console.log(arr[i],"is a even number");
    }
    else{
        console.log(arr[i]," is a odd number");
    }
}

*/

//! with filter method using arrow function
/*

let arr=[10,11,12,13,14,15];

let filter=console.log(arr.filter((ele)=>ele%2===0 ));

*/

//! session task

/*

const greatest=[1,2,3,4,5];

const great=console.log(greatest.filter((ele)=>ele>2)); 

*/

//! reduce

//! without reduce

/*

const a=[1,2,3,4,5];
let sum=0;

for(let i=0;i<a.length;i++){

    sum=sum+a[i];

}

console.log(sum);

*/

//! with reduce using arrow function

/*

const arr=[1,2,3,4,5];

const reduce=arr.reduce((sum,i)=>{
    return sum+i;
},0);

console.log(reduce);

*/

//! -----ippudiyum ezhutalaam-----

/*

const arr1=[1,2,3,4,5];

const red=console.log(arr1.reduce((sum,i)=> sum+i,0)); 

*/

//! session task

/*

const arr=[1,2,3,4,5];

const reduce=console.log(arr.reduce((sum,i)=>sum*i,1)); 

*/

//! for each

const arr=[1,2,3,4,5];

console.log(arr);

const fore=arr.forEach((ele)=>console.log(ele));

