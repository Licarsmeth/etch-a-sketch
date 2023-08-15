const container = document.querySelector(".container");
const title = document.querySelector(".title");
const slider = document.querySelector('.slider');

let divCount = 16;

const createGrid = (divCount) => {
  let newDiv;
  for (let i = 0; i < divCount * divCount; i++) {
    newDiv = document.createElement("div");
    container.appendChild(newDiv);
  }
  const allContainer = container.querySelectorAll('div');
  allContainer.forEach(container => {
    container.style.flexBasis = `${Math.floor(500/divCount)}px`;
  })
};

createGrid(divCount);
