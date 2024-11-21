"use strict";
const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Preventing default reload

  const {
    elements: { email, password },
  } = event.target;

  // Clearing input values from blanks
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  // Checking if the inputs are filled
  if (!emailValue || !passwordValue) {
    alert("All form fields must be filled in");
    return;
  }

  // Creating an object with login information
  const formData = {
    email: emailValue,
    password: passwordValue,
  };

  event.target.reset(); // Clearing the form fields after submit

  console.log(formData);
});
