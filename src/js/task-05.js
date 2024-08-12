const refs = {
  input: document.getElementById("name-input"),
  output: document.getElementById("name-output"),
};

refs.input.addEventListener("input", onInput);

function onInput(event) {
  if (!event.target.value) {
    return (refs.output.textContent = "Anonymous");
  } else {
    return (refs.output.textContent = event.target.value.trim());
  }
}
