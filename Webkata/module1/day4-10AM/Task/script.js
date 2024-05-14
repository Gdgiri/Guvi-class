// TASK--> question-1:

//! Find odd number in function

//? array[1,2,3,4,5,6,7,8,9,10]

function odd(a){

    for(var i=0;i<a.length;i++){
        if(a[i]%2==1){
            console.log(a[i],"odd number");
        }
    }

}
console.log("normal function");
odd([1,2,3,4,5,6,7,8,9,10])


//? push method:

var result=[];
function odd_no(arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2!==0){
            result.push(arr[i])

        }
    }

    return result
    

}


    console.log(odd_no([1,2,3,4,5,6,7,8,9,10]));



//! anonyms function

var result1=[]

var giri=function(arr1){

    for(var i=0;i<arr1.length;i++){
        if(arr1[i]%2!==0){
            result1.push(arr1[i])

        }
    }
    for(var j=0;j<result1.length;j++){
        console.log(result1[j],"is a odd number");
    }

    return result1
 
}
console.log("anonyms function");

console.log(giri([1,2,3,4,5,6,7,8,9,10]));

//! arrow function

var result2=[]

var hari=(arr2)=>{
    for(var i=0;i<arr2.length;i++){
        if(arr2[i]%2!==0){
            result2.push(arr2[i])

        }
    }

    for(var j=0;j<result2.length;j++){
        console.log(result2[j],"is a odd number");
    }

    return result2
 
}

console.log("arrow function");
console.log(hari([1,2,3,4,5,6,7,8,9,10]));

//! IIFE function

//first type
var result3=[]
var viji=(function(arr3){
    for(var i=0;i<arr3.length;i++){
        if(arr3[i]%2!==0){
            result3.push(arr3[i])

        }
    }

    for(var j=0;j<result3.length;j++){
        console.log(result3[j],"is a odd number I-type");
    }

    console.log(viji([1,2,3,4,5,6,7,8,9,10]));
 

})
console.log("IIFE function");

//second type

var result4=[];

(function(arr4){
    for(var i=0;i<arr4.length;i++){
        if(arr4[i]%2!==0){
            result4.push(arr4[i])

        }
    }
    for(var j=0;j<result4.length;j++){
        console.log(result4[j],"IIFE is a odd number II-type");
    }

})([1,2,3,4,5,6,7,8,9,10])

//! in IIFE function any one where work so secon type were running
//! IIFE la type laa ila naanaa suma rendu vithamaa pothu paathen
//! coding la IFFE use panaa second type thaan use pananum




