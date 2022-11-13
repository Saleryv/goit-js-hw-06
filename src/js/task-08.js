//* Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.

//*  Під час відправлення форми сторінка не повинна перезавантажуватися.

//*  Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.

//*  Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.

//*  Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.


const form = document.querySelector('.login-form');

form.addEventListener('submit', event => {
  event.preventDefault();
  const resultObject = {};

  const data = new FormData(event.target);
  
for (let i = 0; i < event.target.elements.length; i++) {
    const element = event.target.elements[i];
    if (element.name && data.has(element.name)) {
      if (element.value === '') {
        alert('All fields must be filled up');
        return;
      }
      resultObject[element.name] = data.get(element.name);
    }
  }
  console.log(resultObject);
  event.target.reset();
});