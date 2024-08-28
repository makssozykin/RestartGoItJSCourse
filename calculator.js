const refs = {
  form: document.getElementById("form"),
  amount: document.getElementById("amount"),
  total: document.getElementById("total"),
};

refs.form.addEventListener("input", onInput);

const data = {
  price: 0,
  amount: 0,
  getTotalPrice() {
    return (this.price * this.amount).toFixed(2);
  },
};

fillData();
setAmount();
totalPrice();

function onInput(e) {
  if (e.target.name === "quantity") {
    setAmount();
  }
  fillData();
  totalPrice();
}

function fillData() {
  data.amount = refs.form.elements.quantity.value;
  data.price = refs.form.elements.price.value;
}

function totalPrice() {
  refs.total.textContent = `${data.getTotalPrice()} грн`;
}

function setAmount() {
  refs.amount.textContent = refs.form.elements.quantity.value;
}

const calcrefs = {
  calc: document.querySelector(".calc"),
  number: document.querySelector(".number"),
  btn: document.querySelector(".button"),
};
fillZero();
calcrefs.calc.addEventListener("click", onClick);
calcrefs.calc.addEventListener("click", calculate);
calcrefs.btn.addEventListener("click", clearCalc);

function onClick({ target }) {
  if (
    (target.nodeName === "SPAN" && target.textContent === "0") ||
    target.textContent === "1" ||
    target.textContent === "2" ||
    target.textContent === "3" ||
    target.textContent === "4" ||
    target.textContent === "5" ||
    target.textContent === "6" ||
    target.textContent === "7" ||
    target.textContent === "8" ||
    target.textContent === "9" ||
    target.textContent === "+" ||
    target.textContent === "-" ||
    target.textContent === "*" ||
    target.textContent === "/"
  ) {
    calcrefs.number.textContent =
      calcrefs.number.textContent === "0"
        ? target.textContent
        : calcrefs.number.textContent + target.textContent;
    cutText();
  }
  if (target.nodeName === "SPAN" && target.textContent === ".") {
    calcrefs.number.textContent =
      calcrefs.number.textContent === "."
        ? target.textContent
        : calcrefs.number.textContent + target.textContent;
  }
}
function fillZero() {
  calcrefs.number.textContent = "0";
  // if (
  //   calcrefs.number.textContent.startsWith("0") &&
  //   calcrefs.number.textContent.length > 1
  // ) {
  //   calcrefs.number.textContent = calcrefs.number.textContent.slice(1);
  // }
}
function cutText() {
  const arr = calcrefs.number.textContent.split("");
  if (arr.length <= 11) {
    return (calcrefs.number.textContent = arr.join(""));
  } else {
    console.log("Text is too long");
  }
}

function clearCalc({ target }) {
  if (target.nodeName === "SPAN" && target.innerText === "C") {
    calcrefs.number.textContent = "0";
  }
}

function calculate({ target }) {
  try {
    if (target.nodeName === "SPAN" && target.innerText === "Enter") {
      calcrefs.number.textContent = eval(calcrefs.number.textContent);
    }
  } catch (error) {
    console.log("Invalid expression");
    calcrefs.number.textContent = "Invalid";
  }
}
