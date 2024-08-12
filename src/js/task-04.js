const refs = {
  decrement: document.querySelector("button[data-action='decrement']"),
  value: document.getElementById("value"),
  increment: document.querySelector("button[data-action='increment']"),
};

let counterValue = 0;

refs.decrement.addEventListener("click", onDecrement);
refs.increment.addEventListener("click", onIncrement);

function onDecrement() {
  counterValue -= 1;
  updateValue();
}

function onIncrement() {
  counterValue += 1;
  updateValue();
}

function updateValue() {
  refs.value.textContent = counterValue;
}
