var request=new XMLHttpRequest;
request.open("GET","https://restcountries.com/v3.1/all",true);
request.send();
request.onload=function(){
    var data=request.response;

    // console.log(data) ;

    var result=JSON.parse(data);

    console.log(result);
  

    //! for loop

    for(var i=0;i<result.length;i++){
        console.log("region:",result[i].region);
    }

    //! for-of

    for(var man of result){
        console.log("subregion:",man.subregion);
    }

    //! for-in

    for(var bmen in result){
        console.log("Country-name:",result[men].name.common);
    }

    //! for-each

    result.forEach((sun)=> {
        console.log(sun.flags.png);
    });
}

