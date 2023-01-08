
const form = document.querySelector(".login-form");
const inputEmail = document.querySelector('input[name="email"]');
const inputPassword = document.querySelector('input[name="password"]');

form.addEventListener("submit", loginForm);

function loginForm(event) {
  event.preventDefault();

  const inputValue = event.target.elements;

  if (inputValue.email.value === "" || inputValue.password.value === "") {
    return alert("Всі поля мають бути заповнені!");
  }
  console.log(
    `email: ${inputValue.email.value}, password: ${inputValue.password.value}`
  );
  event.currentTarget.reset();
}