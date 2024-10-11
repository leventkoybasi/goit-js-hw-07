"use strict";
console.log("%cTask-5 Buradan Baslar", "color: red");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");

changeColorBtn.addEventListener("click", () => {
  const newColor = getRandomHexColor();
  document.querySelector("body").style.backgroundColor = newColor;
  spanColor.textContent = newColor;
});
