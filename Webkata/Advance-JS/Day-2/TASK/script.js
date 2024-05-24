function element(tag, classname, id, text) {
  let tags = document.createElement(tag);
  tags.classList = classname;
  tags.id = id;
  tags.innerHTML = text;
  return tags;
}

function weather(tag, classname, id, text, attributename, attributetype) {
  let btn = document.createElement(tag);
  btn.classList = classname;
  btn.id = id;
  btn.innerHTML = text;
  btn.attributename = attributename;
  btn.attributetype = attributetype;
  return btn;
}

let btn1 = weather(
  "button",
  "btn btn-primary",
  "cli",
  "clilck to weather",
  "button",
  "submit"
);

let div = element("div", "container", "", "");
let head = element(
  "h1",
  "text-center",
  "title",
  "Weather Report for rest countries"
);
let row = element("div", "row", "", "");

//API fetch

const response = fetch("https://restcountries.com/v3.1/all");
response
  .then((data) => data.json())
  .then((ele) => {
    for (let i = 0; i < ele.length; i++) {
      const col = document.createElement("div");
      col.classList = "col-sm-6 col-md-4 col-lg-4 col-xl-4";
      col.innerHTML = `
      <div class="card h-100">
      <div class="card-header">
      <h5 class="card-title text-center">${ele[i].name.common}</h5>
      </div>
      <div class="img-box">
      <img src="${ele[i].flags.png}" alt="flags" class="card-img-top">
      </div>
      <div class="card-body">
      <p>Capital: ${ele[i].capital}</p>
      <p>region: ${ele[i].region}</p>
      <p>cca3: ${ele[i].cca3}</p>
      <button class="btn btn-primary text-center">click to weather</button>
      </div>
      </div>
      `;

      row.append(col);
    }
  });

  let buttons= document.querySelectorAll("button")

//append

div.append(head);
div.append(row);

document.body.append(div);


