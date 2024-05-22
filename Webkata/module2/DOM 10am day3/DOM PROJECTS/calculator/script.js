let h1 = document.createElement("h1");
let p = document.createElement("p");
let input = document.createElement("input");
let one = document.createElement("button");
let two = document.createElement("button");
let three = document.createElement("button");
let four = document.createElement("button");
let five = document.createElement("button");
let six = document.createElement("button");
let seven = document.createElement("button");
let eight = document.createElement("button");
let nine = document.createElement("button");
let zero = document.createElement("button");
let clear = document.createElement("button");
let add = document.createElement("button");
let sub = document.createElement("button");
let mul = document.createElement("button");
let divison = document.createElement("button");
let equal = document.createElement("button");

//h1
h1.id = "title";
h1.innerHTML = "Calculator";
//p
p.id = "description";
p.innerHTML = "This is a calculator";
//input
input.id = "result";
input.setAttribute("type", "text");

//button
one.id = "1";
one.innerText = "1";
two.id = "2";
two.innerText = "2";
three.id = "3";
three.innerText = "3";
four.id = "4";
four.innerText = "4";
five.id = "5";
five.innerText = "5";
six.id = "6";
six.innerText = "6";
seven.id = "7";
seven.innerText = "7";
eight.id = "8";
eight.innerText = "8";
nine.id = "9";
nine.innerText = "9";
zero.id = "0";
zero.innerText = "0";

//arith button
clear.id = "clear";
clear.innerText = "C";

add.id = "add";
add.innerText = "+";

sub.id = "subtract";
sub.innerText = "-";

mul.id = "mul";
mul.innerText = "X";

divison.id = "div";
divison.innerText = "/";

equal.id = "equal";
equal.innerText = "=";

document.body.append(
  h1,
  p,
  input,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  zero,
  clear,
  add,
  sub,
  mul,
  divison,
  equal
);

let currentInput = "";
let operator = "";
let firstOperand = "";
let secondOperand = "";

function updateInput(value) {
  currentInput += value;
  input.value = currentInput;
}

one.addEventListener("click", () => updateInput("1"));
two.addEventListener("click", () => updateInput("2"));
three.addEventListener("click", () => updateInput("3"));
four.addEventListener("click", () => updateInput("4"));
five.addEventListener("click", () => updateInput("5"));
six.addEventListener("click", () => updateInput("6"));
seven.addEventListener("click", () => updateInput("7"));
eight.addEventListener("click", () => updateInput("8"));
nine.addEventListener("click", () => updateInput("9"));
zero.addEventListener("click", () => updateInput("0"));

add.addEventListener("click", () => setOperator("+"));
sub.addEventListener("click", () => setOperator("-"));
mul.addEventListener("click", () => setOperator("*"));
divison.addEventListener("click", () => setOperator("/"));

equal.addEventListener("click", () => calculateResult());

clear.addEventListener("click", () => {
  currentInput = "";
  operator = "";
  firstOperand = "";
  secondOperand = "";
  input.value = "";
});

function setOperator(op) {
  if (currentInput === "") return;
  operator = op;
  firstOperand = currentInput;
  currentInput = "";
}

function calculateResult() {
  if (currentInput === "" || operator === "" || firstOperand === "") return;
  secondOperand = currentInput;
  let result;
  switch (operator) {
    case "+":
      result = parseFloat(firstOperand) + parseFloat(secondOperand);
      break;
    case "-":
      result = parseFloat(firstOperand) - parseFloat(secondOperand);
      break;
    case "*":
      result = parseFloat(firstOperand) * parseFloat(secondOperand);
      break;
    case "/":
      result = parseFloat(firstOperand) / parseFloat(secondOperand);
      break;
    default:
      return;
  }
  input.value = result;
  currentInput = result.toString();
  operator = "";
  firstOperand = "";
  secondOperand = "";
}

// Handling keyboard input for numbers
document.addEventListener("keydown", (event) => {
  const key = event.key;
  if (key >= "0" && key <= "9") {
    updateInput(key);
  } else {
    alert("Only numbers are allowed");
  }
});
