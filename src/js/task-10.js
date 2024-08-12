function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  amountBox: document.querySelector("input"),
  createBtn: document.querySelector("button[data-create]"),
  destroyBtn: document.querySelector("button[data-destroy]"),
  boxes: document.querySelector("#boxes"),
};

boxes.style.display = "flex";
boxes.style.flexDirection = "column";
boxes.style.gap = "10px";
boxes.style.alignItems = "center";

const amount = refs.amountBox.value;
refs.createBtn.addEventListener("click", createBoxes);
refs.destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  amount = refs.amountBox.value;
  let size = 20;
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) {
    size += 10;
    const div = document.createElement("div");
    div.classList.add("box");
    fragment.appendChild(div);
    fragment.children[i].style.backgroundColor = getRandomHexColor();
    fragment.children[i].style.width = `${size}px`;
    fragment.children[i].style.height = `${size}px`;
  }
  boxes.appendChild(fragment);
  refs.amountBox.value = "";
}

function destroyBoxes() {
  const box = document.querySelectorAll(".box");
  box.forEach((el) => {
    el.remove();
  });
}
