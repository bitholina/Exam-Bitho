const form = document.querySelector("#contactForm");

form.addEventListener("submit", validateForm);

function validateForm(event) {
  event.preventDefault();
  console.log("Form submitted");

  // N A M E
  const name = document.querySelector("#name");
  const nameError = document.querySelector("#nameError");
  const nameValue = name.value;
  const trimNameValue = nameValue.trim();
  const nameValueLength = trimNameValue.length;

  if (nameValueLength > 0) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }

  // L A S T N A M E
  const lastName = document.querySelector("#lastName");
  const lastNameError = document.querySelector("#lastNameError");
  const lastNameValue = lastName.value;
  const trimlastNameValue = lastNameValue.trim();
  const lastNameValueLength = trimlastNameValue.length;

  if (lastNameValueLength >= 1) {
    lastNameError.style.display = "none";
  } else {
    lastNameError.style.display = "block";
  }

  // E M A I L
  const email = document.querySelector("#email");
  const emailValue = email.value;
  const emailError = document.querySelector("#emailError");
  const invalidEmailError = document.querySelector("#invalidEmailError");

  if (validateEmail(emailValue) === true) {
    invalidEmailError.style.display = "none";
    emailError.style.display = "none";
  } else {
    invalidEmailError.style.display = "block";
  }

  // M E S S A G E
  const message = document.querySelector("#message");
  const messageError = document.querySelector("#messageError");
  const messageValue = message.value;
  const trimMessageValue = messageValue.trim();
  const messageValueLength = trimMessageValue.length;

  if (messageValueLength >= 5) {
    messageError.style.display = "none";
  } else {
    messageError.style.display = "block";
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  return regEx.test(email);
}
