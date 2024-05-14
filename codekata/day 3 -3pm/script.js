// ! condition

//? if-else
//? else-if

//if-else

var age=18;

if(age>=18){
    console.log("eligible for vote");
}
else{
    console.log("not eligible for vote");
}

//else-if

var a=5;

if(a===0){
    console.log("zero");
}
else if(a<0){
    console.log("negative number");
}
else if(a%2===0){
    console.log("even number");
}
else{
    console.log("odd number");
}

// ! decimal number to integer

// //? Round
// //? Ceil
// //? Floor

// var l=5.2;

// var b=math.round(l);

// console.log(b);

//! type convertion

m=5;

console.log(typeof(a));


n="2";
o=3;
p=+"4";

console.log(m+n+o);

console.log(m+p+o);

gi=+"22";
ha=+"24";

console.log(gi+ha);

console.log(+"55" + +"56");
console.log(+"5" + +5 );

//! array to parseInt

var arrr=["1","2","3",4,5,6,"7","8"]

for(var i=0;i<arrr.length;i++){
    if(+arrr[i]>0){
        console.log(arrr[i],"is a number");
    }
    else{
        console.log(arrr[i],"is a zero or negative");
    }
}


var arr2=[11,12,13.7,"24.5","25.5","26.2",17,18,19,20,"21","22","23","34","35",0,-5,-2,-3];

for(var i=0;i<arr2.length;i++){
    if(+arr2[i]===0){
        console.log(arr2[i],"zero");
    }
    else if(+arr2[i]<0){
        console.log(arr2[i],"negative number");
    }
    else if(+arr2[i]%2===0){
        console.log(arr2[i],"evennumber");
    }
    else {
        console.log(arr2[i],"oddnumber");
    }
   
}


