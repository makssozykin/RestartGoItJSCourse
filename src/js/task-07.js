const input = document.getElementById("font-size-control");
const fontSize = document.getElementById("text");

const text = document.createElement("p");
const valueInput = input.value;
text.textContent = `Current font size: ${valueInput}px`;
document.body.appendChild(text);

input.addEventListener("input", changeSize);

function changeSize(e) {
  const inputValue = e.target.value;
  fontSize.style.fontSize = `${inputValue}px`;
  text.textContent = `Current font size: ${inputValue}px`;
  text.style.fontSize = `${inputValue}px`;
}
