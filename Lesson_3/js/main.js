// Создаём переменные
var yourBudget;
var nameStore;
var time = 19;


// Присваиваем значение переменным
yourBudget = +prompt("Ваш бюджет?", '');
/*console.log( typeof(yourBudget));*/

nameStore = prompt("Название вашего магазина", '');
/*console.log( typeof(nameStore));*/

// обявляем объект mainList
mainList = {
	yourBudget,
	nameStore,
	shopGoods: [],
	employers: {},
	open: false
}

// Присваиваем массиву значния введённые пользователем
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

/*var i = 0;
while (i < 5) {
	i++;
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
}*/

/*var i = 0;
do {
	i++;

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

} while ( i < 5 );*/


// Время работы магаза
if (time < 0 ) {
	console.log ("В прошлое мы не можем вернутся!");
} else if (time > 8 && time < 20) {
	console.log ("Время работать!");
	} else if (time < 24) {
		console.log ("Слишком поздно");
		} else {
			console.log ("В сутках только 24 часа!");
			}



//  Бюджет на 1 день
var budgetDay = yourBudget/30;

alert("Бюджет на 1 день" + " " + "=" + " " + budgetDay);

console.log (mainList);

