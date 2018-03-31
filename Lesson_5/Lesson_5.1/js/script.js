let menuItem = document.getElementsByClassName('menu-item'),
    menu = document.getElementsByClassName('menu')[0],
    tagTitle = document.getElementById('title'),
    classTitle = document.getElementsByClassName('title'),
    adv = document.getElementsByClassName('adv'),
    newLi = document.createElement('li');

// Правильный порядок меню
menu.insertBefore(menuItem[2], menuItem[1]);

// Добавление 5-ой ссылки меню 
newLi.innerHTML = 'Пятый пункт';
newLi.classList.add("menu-item");
menu.appendChild(newLi);

// Замена картинки
document.body.style.background = 'url(img/apple_true.jpg)';

// Смена заголовка
tagTitle.textContent= 'Мы продаем только подлинную технику Apple';
tagTitle.classList.add("classTitle");

// Удаление рекламы
document.querySelector('.adv').remove();

// Отзыв
let text = prompt("Введите отзыв о продукции Apple");
let tagPrompt = document.getElementById('prompt');

tagPrompt.textContent = "Ваша оценка: " + text;