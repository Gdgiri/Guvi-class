// session task:

//! 1. hi how are you=>h*i*h*o*w*a*r*e*y*o*u

var a="hi how are you";

var b=a.split(" ");


console.log(b);

var c=b[0].split("");
var d=b[1].split("");
var e=b[2].split("");
var f=b[3].split("");
 console.log(c,d,e,f);

var g=[...c,...d,...e,...f];

console.log(g.join("*"));



//! 2. g*u*v*i=>guvi

var h="g*u*v*i";

console.log(h.split("*").join(""));

//! 3. geek=> g e e k

var i="geek";

console.log(i.split("").join(" "));

//! 4. FSD 58 WD3 TAMIL=>FSD58WD3TAMIL

var j="FSD 58 WD3 TAMIL";

console.log(j.split(" ").join(""));




