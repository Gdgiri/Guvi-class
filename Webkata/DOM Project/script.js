let div = document.createElement("div");
let h1 = document.createElement("h1");
h1.innerHTML = "HTML Forms by GD";
h1.style = `
color:black;
text-align:center;
`;

let div2 = document.createElement("div");

let h2 = document.createElement("h2");
let p = document.createElement("p");
let label1 = document.createElement("label");
let input1 = document.createElement("input");
let label2 = document.createElement("label");
let input2 = document.createElement("input");
let label3 = document.createElement("label");
let input3 = document.createElement("input");
let button = document.createElement("button");
button.id = "btn";
input1.id = "inp1";
input1.type = "text";
input1.className = "dbd";
console.log(input1);
let inputdata = input1.getElementsByClassName("dbd");
console.log(inputdata);

div2.style = `
width:500px;
height:400px;
background-color:#344B72;
color:white;
position: relative;;
left:35%;
top:80px
`;
h2.innerHTML = "Singup page";
h2.style = `
color:white;
text-align:center;`;

p.innerHTML = "It's free and only takes a minute";
p.style = `
color:white;
text-align:center;
`;

label1.innerHTML = "First Name";
label1.style = `
margin-left:10px;
margin-top:10px;
`;

input1.style = `margin:20px;
position:relative;
top:40px;
right:90px;
width:300px;

`;

label2.innerHTML = "Second Name";
label2.style = `
margin-left:10px;
margin-top:30px;
`;

input2.style = `
margin:20px;
position:relative;
top:40px;
right:110px;
width:300px;
`;
label3.innerHTML = "Email";
label3.style = `
margin-left:10px;
position:relative;
top:75px;
right:445px
`;

input3.style = `
margin:20px;
position:relative;
top:40px;
width:300px;

`;

button.type = "Submit";
button.innerHTML = "Submit";
button.style = `
background-color:white;
color:black;
border:none
border-radius:10px;
position:relative;
top:90px;
right:100px


`;

// let a = inp1;
div.append(h1);
document.body.append(div);
div2.append(h2, p, label1, input1, label2, input2, label3, input3, button);
document.body.append(div2);

button.addEventListener("click", () => console.log(`${inputdata}`));
