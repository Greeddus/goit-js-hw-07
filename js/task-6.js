function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsDiv = document.querySelector("#controls");
const input = controlsDiv.querySelector("input");
const createButton = controlsDiv.querySelector("[data-create]");
const destroyButton = controlsDiv.querySelector("[data-destroy]");
const boxesDiv = document.querySelector("#boxes");

function createBoxes(amount) {
  boxesDiv.innerHTML = "";

  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();

    boxesDiv.appendChild(box);

    size += 10;
  }
}

function destroyBoxes() {
  boxesDiv.innerHTML = "";
}

createButton.addEventListener("click", () => {
  const amount = input.value;

  if (amount < 1 || amount > 100) {
    return;
  }

  createBoxes(amount);
  input.value = "";
});

destroyButton.addEventListener("click", () => {
  destroyBoxes();
});
