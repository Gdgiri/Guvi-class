let a=document.createElement("header");
let b=document.createElement("nav");
let c=document.createElement("ul");
let d=document.createElement("li");
let e=document.createElement("li");
let f=document.createElement("li");
let g=document.createElement("li");
let h=document.createElement("main");
let i=document.createElement("section");
let j=document.createElement("h1");

d.innerHTML="<b>GIRI</b>";
e.innerHTML="<b>11-08-2001</b>";
f.innerHTML="<b>Devakottai</b>";
g.innerHTML="<b>22</b>";
j.innerHTML="<b><i>Above detail created using DOM</i></b>";

c.append(d,e,f,g);
b.appendChild(c);
a.appendChild(b);

i.appendChild(j);
h.appendChild(i);

document.body.append(a,h);

a.setAttribute("id","manithan");

let giri=document.createElement("h1");
giri.innerHTML="<b>He is a good boy</b>";
document.body.append(giri);

giri.setAttribute("class","mani");
giri.setAttribute("id","gd");
a.setAttribute("style","background-color:black;color:white");

