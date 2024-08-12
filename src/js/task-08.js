const form = document.querySelector(".login-form");

form.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  if (email && password) {
    const obj = { Email: email, Password: password };
    console.log(obj);
    form.reset();
  } else {
    alert("Заповніть всі поля!");
  }
}
