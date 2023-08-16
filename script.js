const container = document.querySelector(".container");
const title = document.querySelector(".title");
const slider = document.querySelector("#slider");

let divCount = 30;

const removeGrids = (divCount) => {
  for (let i = 0; i < divCount*divCount; i++) {
    if (container.firstElementChild) {
      container.firstElementChild.remove();
    }
  }
};

const addGrids = (divCount) => {
  createGrid(divCount);
};

slider.addEventListener("input", () => {
  removeGrids(divCount);
  divCount = slider.value;
  addGrids(divCount);
});

const createGrid = (divCount) => {
  let newDiv;
  for (let i = 0; i < divCount * divCount; i++) {
    newDiv = document.createElement("div");
    container.appendChild(newDiv);
  }
  const allContainer = container.querySelectorAll("div");
  allContainer.forEach((container) => {
    container.style.flexBasis = `${500 / divCount}px`;
  });
};
createGrid(divCount);

