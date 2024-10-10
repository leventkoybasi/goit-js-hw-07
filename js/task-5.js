"use strict";
console.log("%cTask-5 Buradan Baslar", "color: red");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
