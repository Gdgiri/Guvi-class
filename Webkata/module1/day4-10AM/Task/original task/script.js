//! task1---->1st question first letter caps in string

/*

let name="giridharan";

let n=name.charAt(0).toUpperCase().concat("",name.slice(1));

console.log(n);

let names=["giridharan","hariramakrishnan","vijayalakshmi","sivaramakrishnan"];

for(let i=0;i<names.length;i++){
   
console.log(names[i].charAt(0).toUpperCase().concat("",names[i].slice(1)));
}

*/

//! 2nd question-----> find odd number in array

/*

let a=[10,2,3,4,19,6,12,5,18];
for(let i=0;i<a.length;i++){
   
    
if(a[i]%2==1){
  
    console.log(a[i],"odd");
 

}

    }

*/

//! sum of number
/*

let value=0;
function add(num){
for(var i=0;i<num.length;i++){
    value=value+num[i];

}

console.log(value);
}

add([1,2,3,4])

*/

//! palindrom

/*

let rev="pranavamuthu";

let aa=rev.split("");

for(let i=rev.length-1;i>=0;i--){
    console.log(rev[i]);
}

function reve(names){
    for(let i=names.length-1;i>=0;i--){
        console.log(names[i]);
    }
}

reve("vijayalakshmi")

*/

/*
let c=[];

function reve(a){


    for(let i=a.length-1;i>=0;i--){
        let b=a[i];
        c.push(b)
      

    }

   if(c.join("")===a){
    console.log("palindrom");
   }
   else{
    console.log("not a palindrom");
   }
    
     if(a===b){
         console.log("it is palindrom");
     }
     else{
         console.log("it is not a palindrom");
     }
}
reve("giri")
*/
//! prime number

let a=[];
let flag=0;

function prime(num){

    for(i=0;i<num.length;i++){
        if(num>1){
            if(num%2===0){
                console.log(num,"not prime");
                flag=1;
                a.push(num)

                



            }

            else{
                console.log(num,"prime");
            }
        }

        console.log(a);
    }
}

prime([1,2,3,4,5,6])