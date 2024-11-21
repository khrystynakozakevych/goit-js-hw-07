function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Getting the elements
const controls = document.querySelector("#controls");
const input = controls.querySelector("input");
const createBtn = controls.querySelector("button[data-create]");
const destroyBtn = controls.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

// Creating the boxes
const createBoxes = (amount) => {
  // Destroing previous content
  destroyBoxes();

  // Generating new elements function
  const elements = [];
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.classList.add("box");
    //CSS styles div.box
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    // Adding div to array elements
    elements.push(div);
    size += 10; // Increasing size
  }

  // Adding elements to DOM
  boxes.append(...elements);
};

// Destroing boxes funzion
const destroyBoxes = () => {
  boxes.innerHTML = "";
};

// Adding event listeners
const handleClick = () => {
  const amount = parseInt(input.value);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  }

  input.value = ""; // clering the input field
};
createBtn.addEventListener("click", handleClick);

destroyBtn.addEventListener("click", destroyBoxes);
