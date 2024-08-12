const refs = {
  openModalBtn: document.getElementById("openModalBtn"),
  overlay: document.getElementById("overlay"),
  modalCloseBtn: document.getElementById("modalCloseBtn"),
};

const openClass = "open";

refs.openModalBtn.addEventListener("click", openModal);
refs.overlay.addEventListener("click", closeModal);
refs.modalCloseBtn.addEventListener("click", closeModal);

function openModal() {
  document.body.classList.add(openClass);
  window.addEventListener("keydown", closeOnEsc);
}

function closeModal() {
  document.body.classList.remove(openClass);
  window.removeEventListener("keydown", closeOnEsc);
}

function closeOnEsc(event) {
  if (event.key === "Escape") {
    console.log("Esc key pressed");
    closeModal();
  }
}
