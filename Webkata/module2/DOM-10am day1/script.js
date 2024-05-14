//! DOM=> Document Object Model

// it is use to create HTML Element in dynamically

//create element , innerHTML and append single element

let a=document.createElement("h1");

a.innerHTML="<b >Mr.GD</b>";

document.body.append(a);

//! append multiple element

let b=document.createElement("h1");
let c=document.createElement("p");

b.innerHTML="<b>Hi Mr.GD</b>";
c.innerHTML="He is a good boy and sometimes he is laziness to do any task";

document.body.append(b,c);

//? append element with another element after that append to body

let d=document.createElement("h1");
let e=document.createElement("p");

e.innerHTML="He is a good boy and sometimes he is laziness to do any task";

d.append(e);
document.body.append(d);

//sample example

let god=document.createElement("header");
let people=document.createElement("ul");
let love=document.createElement("li");
let fight=document.createElement("h1");
fight.innerHTML="<b><i>God is Great</i></b>"
love.append(fight);
people.append(love);
god.append(people);
document.body.append(god);










