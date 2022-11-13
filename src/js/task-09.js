//* Напиши скрипт, 1) який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і 2) виводить значення кольору в span.color. 



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const colorBtn = document.querySelector('.change-color');
const colorNum = document.querySelector('.color');
const body = document.querySelector('body');


colorBtn.addEventListener('click', event => {
  body.style.backgroundColor = getRandomHexColor();
  colorNum.textContent = body.style.backgroundColor; 
});


