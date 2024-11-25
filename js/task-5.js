"use strict";
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Find the requested elements
const body = document.body;
const colorSpan = document.querySelector(".color");
const changeColorButton = document.querySelector(".change-color");

// Add event listener
const handleClick = () => {
  // Generating random color
  const randomColor = getRandomHexColor();

  // Changina the color
  body.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
};
changeColorButton.addEventListener("click", handleClick);
