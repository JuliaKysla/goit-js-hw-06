function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};
console.log(getRandomHexColor());

const bodyColorEl = document.querySelector(".widget").parentNode;
console.log(bodyColorEl);
const bodyspanColorEl = document.querySelector(".color");
const buttonColorEl = document.querySelector(".change-color");

 const buttonChangeColor = buttonColorEl.addEventListener('click', (event) => {
  bodyColorEl.style.backgroundColor = getRandomHexColor();
  bodyspanColorEl.textContent = getRandomHexColor();
 });
