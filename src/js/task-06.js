const input = document.querySelector("#validation-input");

input.addEventListener("blur", onValid);

function onValid(event) {
  const value = event.target.value.length;
  if (value <= Number(input.dataset.length)) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
  if (value === 0) {
    input.classList.remove("valid");
    input.classList.remove("invalid");
  }
}
