"use strict";
// Getting  ##name-input and #name-output
const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
  // Making sure no space is pass to output
  const trimmedValue = event.target.value.trim();
  // If inout is empty, pass "Anonymous"
  output.textContent = trimmedValue === "" ? "Anonymous" : trimmedValue;
});
