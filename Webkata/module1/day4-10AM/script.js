var a=new XMLHttpRequest();

a.open("GET","https://restcountries.com/v3.1/all",true);

a.send();

a.onload=function(){
    var obj=a.response;

    var data=JSON.parse(obj);

    for(var i=0;i<data.length;i++){

    console.log("country-name:"+" "+data[i].name.common+","+"","flags:"+" "+data[i].flags.png);
}
}

// ! XMLHTTPRequest

//? Step-1: Create XHR obj1ect

//XHR=> XMLHTTPRequest

//! Syntax:

var b = new XMLHttpRequest();

//? step-2: openning connection to the server

//! Syntax

b.open("GET","https://restcountries.com/v3.1/all",true)

//? step-3: sending request

//! syntax

b.send();

//? step-4: server response

//! Syntax

b.onload=function(){

    var data1=b.response;

    var obj1=JSON.parse(data1);

    // console.log(obj1[0].name.common);\
    

    for(var i=0;i<obj1.length;i++){
        // console.log("country-name:"+" "+obj1[i].name.common, "region:"+" "+obj1[i].region, "sub-region:"+" "+obj1[i].subregion);
      
        console.log("country-name:"+" "+obj1[i].name.common+","+"", "region:"+" "+ obj1[i].region+","+"","sub-region:"+" "+ obj1[i].subregion+","+"","Population:"+" "+ obj1[i].population);
    }
}

