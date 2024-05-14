//! object comaprision

/*

let obj1={
    name:"giri",
    age:22,
};

let obj2={
    age:22,
    name:"giri",
};

let str1=JSON.stringify(obj1,Object.keys(obj1).sort());
let str2=JSON.stringify(obj2,Object.keys(obj2).sort());

if(str1===str2){
    console.log("JSON is equal");
}
else{
    console.log("JSON is not equal");
}

*/

//! median

let arr1=[1,3,5,7];
let arr2=[2,4,6,8];

function median(arr1,arr2){

    let arr=[...arr1,...arr2];
    arr.sort((a,b)=>a-b);
    console.log(arr);

    let n=arr.length;

    if(n%2===0){
        return ((arr[n/2]+arr[n-1]/2)/2)

    }
    else{
        return arr[Math.floor(n/2)];
    }

}

console.log(median(arr1,arr2));
