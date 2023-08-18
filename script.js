const container = document.querySelector(".container");
const title = document.querySelector(".title");
const sliderText = document.querySelector("#sliderLabel");
const erase = document.querySelector(".erase");
const reset = document.querySelector(".reset");
const color = document.querySelector("#color");

let selectedColor = "#ff0000";
let divCount = 64;
sliderText.textContent = `${divCount} * ${divCount}`;

color.addEventListener("input", () => {
  selectedColor = color.value;
});

erase.addEventListener("click", () => {
  selectedColor = "#ffffff";
});

reset.addEventListener("click", () => {
  removeGrids(divCount);
  addGrids(divCount);
});

const removeGrids = (divCount) => {
  for (let i = 0; i < divCount * divCount; i++) {
    if (container.firstElementChild) {
      container.firstElementChild.remove();
    }
  }
};

const addGrids = (divCount) => {
  sliderText.textContent = `${divCount} * ${divCount}`;
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
    newDiv.classList.add("newDiv");
    container.appendChild(newDiv);
  }
  const allContainer = container.querySelectorAll("div");
  allContainer.forEach((container) => {
    container.style.flexBasis = `${500 / divCount}px`;
  });
};
createGrid(divCount);

//Drawing

const containerDivs = container.children;
for (const child of containerDivs) {
  const paintGrid = (e) => {
    if (e.buttons == 1) {
      if (e.target.classList == "newDiv") {
        let elem = e.target;
        elem.style.backgroundColor = selectedColor;
      }
    }
  };

  child.addEventListener("mousedown", (e) => {
    paintGrid(e);
    if (e.buttons == 1) {
      window.addEventListener("mouseover", (e) => {
        if (e.buttons == 1) {
          paintGrid(e);
        }
      });
    }
  });
}
