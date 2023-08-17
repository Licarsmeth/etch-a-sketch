const container = document.querySelector(".container");
const title = document.querySelector(".title");
const sliderText = document.querySelector("#sliderLabel");
let color = "#ff0000";
let divCount = 24;
sliderText.textContent = `${divCount} * ${divCount}`;
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
    newDiv.classList.add('newDiv');
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
        if(e.target.classList=='newDiv'){
      let elem = e.target;
      elem.style.backgroundColor = color;}
    }
  };

  child.addEventListener("mousedown", (e) => {
    paintGrid(e);
    console.log(e.buttons);
    if (e.buttons == 1) {
      window.addEventListener("mouseover", (e) => {
        if (e.buttons ==1){
        console.log(e.target);
        paintGrid(e);
        }
      });
    }
  });
}
