// global selections
const colorsDivs = document.querySelectorAll(".color");
const genrateBtn = document.querySelector(".generate");
const sliders = document.querySelectorAll('input[type="range"]');
const currentHexes = document.querySelector(".color h2");
let initialColors;

// functions

function generateHex() {
  const letters = "#0123456789ABCDEF";
  let hash = "#";
  for (let i = 0; i < 6; i++) {
    hash += letters[Math.floor(Math.random() * 16)];
  }
  return hash;
}

function randomColors() {
  colorsDivs.forEach((div, index) => {
    const hexText = div.children[0];
    const randomColor = generateHex();

    div.style.backgroundColor = randomColor;
    hexText.innerText = randomColor;
  });
}

randomColors();
