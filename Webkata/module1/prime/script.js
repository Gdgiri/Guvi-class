let a = [3, 6, 7, 4, 2, 9];

let flag = 0;

for (let i = 0; i <=a.length; i++) {
  if (a[i] % 2 == 0) {
    flag = 1;
    if(flag=1){
        console.log(a[i], "is a not prime number");

    }
   
   
    
  } 
  if(flag==0){
    console.log(a[i],"is a  prime number");
  }
}
