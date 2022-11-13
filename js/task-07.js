//* Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const font = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

font.addEventListener('input', event => {
 text.style.fontSize = `${event.target.value}px`;
});