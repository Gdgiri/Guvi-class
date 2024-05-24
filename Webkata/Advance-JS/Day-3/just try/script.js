async function coun() {
  let response = await fetch("https://ipinfo.io/json?token=64ba29c246e1bd");
  let data = response.json();
  console.log(data);
}
coun();
