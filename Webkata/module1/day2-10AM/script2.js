// copy by value

let num=10;

let num2=num;

console.log(num,num2);

 num2=20;

 console.log(num,num2);

 // copy by reference

 let arr=[1,2,3];

 let arr2=arr;

 console.log(arr,arr2);

//  arr2=[1,2,3,4];

//  console.log(arr,arr2);


 arr2[3]=4;

 console.log(arr,arr2);

 arr2.push(3);

 console.log(arr,arr2);

