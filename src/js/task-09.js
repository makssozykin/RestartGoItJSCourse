function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  span: document.querySelector(".color"),
  btn: document.querySelector(".change-color"),
};

refs.btn.addEventListener("click", onClickColor);
function onClickColor(e) {
  refs.span.textContent = getRandomHexColor();
  document.body.style.backgroundColor = getRandomHexColor();
}
