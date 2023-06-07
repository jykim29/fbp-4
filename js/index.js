const form = document.getElementById("form");
const border = document.getElementById("border");
const input = document.getElementById("input");
const msg = document.getElementById("submit-msg");
const errorIcon = document.getElementById("error");
const button = document.getElementById("button");
const btnImage = document.getElementById("btn-image");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event);
  errorIcon.classList.add("hidden");
  button.style.backgroundImage =
    "linear-gradient(135deg, hsl(123, 80%, 86%), hsl(117, 74%, 74%))";
  button.style.boxShadow = "0px 3px 20px #61b65b";
  button.setAttribute("disabled", "true");
  btnImage.setAttribute("src", "./images/icons8-check.svg");
  border.style.border = "2px solid #61b65b";
  msg.style.color = "#61b65b";
  msg.innerText = "Thank you! I'll be back with a new store soon!";
});

input.addEventListener("invalid", (event) => {
  const valueMissing = event.target.validity.valueMissing;
  const typeMismatch = event.target.validity.typeMismatch;
  event.preventDefault();
  console.log(event.target.validity);
  console.log(valueMissing);
  console.log(typeMismatch);
  if (valueMissing) {
    errorIcon.classList.remove("hidden");
    border.style.border = "2px solid #f96262";
    msg.style.color = "#f96262";
    msg.innerText = "Please enter your email address";
  } else if (typeMismatch) {
    errorIcon.classList.remove("hidden");
    border.style.border = "2px solid #f96262";
    msg.style.color = "#f96262";
    msg.innerText = "Please provide a valid email address";
  }
});
