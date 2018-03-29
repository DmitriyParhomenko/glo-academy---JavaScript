// Создаём переменные
let money,
				name,
				time,
				price

function start() {
	money = +prompt("Ваш бюджет?", '');

	while (isNaN(money) || money == "" || money == null ) {
		money = +prompt("Ваш бюджет?", '');
	}

	name = prompt("Название вашего магазина", '').toUpperCase();
	time = 21;
}

start();

// обявляем объект mainList
mainList = {
	yourBudget: money,
	nameStore: name,
	shopGoods: [],
	employers: {

	},
	open: false,
	discount: false
}

// Присваиваем массиву значния введённые пользователем
function chooseGoods() {
	for (let i = 0; i < 5; i++ ) {

		let a = prompt("Какой тип товаров будем продавать?");

		if ((typeof(a)) === 'string' && (typeof(a)) !== null && a != '' && a.length < 50 ) {
			console.log('Всё верно!');
			mainList.shopGoods[i] = a;
		} else {

			if ( a == '') {
				let b = confirm('Вы не ввели название товара, хотите оставить поле пустым?');
				if (b) {
					mainList.shopGoods[i] = '';
				} else {
					i--;
					alert("Введите свой товар");
				}
			}

		}
	}
}

chooseGoods();


// Время работы магаза
function workTime(time) {
if (time < 0 ) {
	console.log ("В прошлое мы не можем вернутся!");
} else if (time > 8 && time < 20) {
	console.log ("Время работать!");
	} else if (time < 24) {
		console.log ("Слишком поздно");
		} else {
			console.log ("В сутках только 24 часа!");
			}
}

workTime(23);


//  Бюджет на 1 день
function budget() {
let budgetDay = money/30;

alert("Бюджет на 1 день" + " " + "=" + " " + budgetDay);

console.log (mainList);
}

budget();

// 80% от цены 
function priceNew() {

	price = +prompt("Ваш цена?", '');

	let partPrice = price*0.8;

	console.log ( Math.round (partPrice) );
}

priceNew();

function employers() {
  	for (var i = 0; i < 4; i++) {

  		let employer = prompt("Введите имя сотрудника");
  		if (employer == "" || employer == null ) {
  			alert("Нужно ввести имя сотрудника");
  			i--;
  		} else {
  			  mainList.employers[++i] = employer;
  			  i--;
  			} 
  	}

  }

  employers();