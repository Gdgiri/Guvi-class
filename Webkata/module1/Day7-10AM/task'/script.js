const request= new XMLHttpRequest;

request.open("GET","https://restcountries.com/v3.1/all",true);

request.send();

request.onload=function(){
    const data=request.response;

    const result=JSON.parse(data);

    const asia=result.filter((ele)=>ele.region==="Asia");

    const foreach=asia.forEach((fil)=>console.log(fil.name.common));

    console.log(result);

    const population=result.filter((popu)=>{
       if(popu.population<200000){
        console.log(`${popu.name.common}: ${popu.population}`);
       }
    
    })

    const capital= result.forEach((flag)=>console.log(`${flag.name.common} , ${flag.capital} , ${flag.flag}`));

    const reduce=console.log(result.reduce((sum,i)=>sum.population+i,0)); 
}