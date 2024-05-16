function element(tagname,content,attriname,attrivalue){

    const ele=document.createElement(tagname);
    ele.innerHTML=content;
    ele.setAttribute(attriname,attrivalue);
    return ele;
}

const h1=element("h1","Hi i am giridharan this was done by using function in DOM","class","h1");
const h2=element("h1","2Hi i am giridharan this was done by using function in DOM","class","h1");
const h3=element("h1","3Hi i am giridharan this was done by using function in DOM","class","h1");
const ul=element("ul","","class","ul");
const li=element("li","","class","li");
const nav=element("nav","","class","nav");
const header=element("header","","class","header");

li.append(h1,h2,h3);

ul.appendChild(li);
header.appendChild(ul);
document.body.append(header);
