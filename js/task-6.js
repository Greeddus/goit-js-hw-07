function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxesContainer = document.getElementById("boxes");
  boxesContainer.innerHTML = "";

  const fragment = document.createDocumentFragment();
  const baseSize = 30;
  const sizeIncrement = 10;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${baseSize + i * sizeIncrement}px`;
    box.style.height = `${baseSize + i * sizeIncrement}px`;
    box.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(box);
  }

  boxesContainer.appendChild(fragment);
}

function destroyBoxes() {
  const boxesContainer = document.getElementById("boxes");
  boxesContainer.innerHTML = "";
}

document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("#controls input");
  const createBtn = document.querySelector("button[data-create]");
  const destroyBtn = document.querySelector("button[data-destroy]");

  createBtn.addEventListener("click", () => {
    const amount = parseInt(input.value);
    if (amount >= 1 && amount <= 100) {
      createBoxes(amount);
      input.value = "";
    }
  });

  destroyBtn.addEventListener("click", () => {
    destroyBoxes();
  });
});
