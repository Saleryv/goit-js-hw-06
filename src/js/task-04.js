//? Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

//? 1. Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.

//? 2. Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.

//? 3. Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;
const calc = document.querySelector('#value');

const buttonPlus = document.querySelector('[data-action="increment"]');
const buttonMinus = document.querySelector('[data-action="decrement"]');


buttonPlus.addEventListener("click", () => {
   return calc.textContent = ++counterValue;
});

buttonMinus.addEventListener("click", () => {
   return calc.textContent =  --counterValue;
});

  
  