//! normal without using async-await

/*
const data = fetch("https://restcountries.com/v3.1/all");
data.then((resp) => resp.json()).then((res) => console.log(res));
*/

async function response(){

    const data = await fetch("https://restcountries.com/v3.1/all");
    const result = await data.json();
    console.log(result);

}
response();