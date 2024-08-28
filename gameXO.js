onst combinations = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

const content = document.querySelector(".content");

const historyX = [];
const historyO = [];

let player = "X";

createMarkup();
content.addEventListener("click", handleClick);

function createMarkup() {
  let markup = "";
  for (let i = 1; i <= 9; i++) {
    markup += `
      <div class="item" data-id="${i}"></div>
    `;
  }
  content.innerHTML = markup;
}

function handleClick(event) {
  if (event.target.textContent || event.target === event.currentTarget) {
    return;
  }

  const id = Number(event.target.dataset.id);
  let isWinner = false;

  if (player === "X") {
    historyX.push(id);
    isWinner = historyX.length >= 3 ? checkWinner(historyX) : false;
  } else {
    historyO.push(id);
    isWinner = historyO.length >= 3 ? checkWinner(historyO) : false;
  }

  if (isWinner) {
    const instance = basicLightbox.create(`
      <div class="box">
      <h1>Player ${player} is Winner</h1>
      </div>
      `);
    instance.show();
    resetGame();
    return;
  }

  if (historyX.length + historyO.length === 9) {
    const instance = basicLightbox.create(`
      <div class="box">
      <h1>It's a Draw</h1>
      </div>
      `);
    instance.show();
    resetGame();
    return;
  }

  event.target.textContent = player;
  player = player === "X" ? "O" : "X";
}

function checkWinner(history) {
  return combinations.some((item) => item.every((id) => history.includes(id)));
}

function resetGame() {
  createMarkup();
  player = "X";
  historyX.splice(0);
  historyO.splice(0);
}
