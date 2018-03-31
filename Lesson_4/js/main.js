// Создаём переменные
let money,
				name,
				time,
				price

// Объявляем объект mainList
mainList = {
	yourBudget: money,
	nameStore: name,
	shopGoods: [],
	employers: {},
	open: false,
	discount: false,
	shopItems: [],
	start: function start() {
		money = +prompt("Ваш бюджет?", '');

		while (isNaN(money) || money == "" || money == null ) {
			money = +prompt("Ваш бюджет?", '');
		}

		name = prompt("Название вашего магазина", '').toUpperCase();
		time = 21;
	},
	// Присваиваем массиву значния введённые пользователем
	chooseGoods: function chooseGoods() {
		for (let i = 0; i < 5; i++ ) {

			let a = prompt("Какой тип товаров будем продавать?", '');

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
	},
	// Время работы магазина
	workTime: function workTime(time) {
		if (time < 0 ) {
			console.log ("В прошлое мы не можем вернутся!");
		} else if (time > 8 && time < 20) {
			console.log ("Время работать!");
			mainList.open = true;
			} else if (time < 24) {
				console.log ("Слишком поздно");
				} else {
					console.log ("В сутках только 24 часа!");
					}
	},
	//  Бюджет на 1 день
	budget: function budget() {
		let budgetDay = money/30;

		alert("Бюджет на 1 день" + " " + "=" + " " + budgetDay);
	},
	// 80% от цены 
	priceNew: function priceNew() {
			if (mainList.discount == true) {
				price = +prompt("Ваш цена?", '');

				let partPrice = price*0.8;

				console.log ( Math.round (partPrice) );
			}
	},
	// Имна сотрудников
	employers: function employers() {
  	for (var i = 0; i < 4; i++) {

  		let employer = prompt("Введите имя сотрудника", '');
  		if (employer == "" || employer == null ) {
  			alert("Нужно ввести имя сотрудника");
  			i--;
  		} else {
  			  mainList.employers[++i] = employer;
  			  i--;
  			} 
  	}
  },
  // Название товаров
  chooseShopItems: function chooseShopItems() {
  	let items = prompt("Перечислете через запятую товары", '');

 		while ( items == "" || items == null ) {
 			items = prompt("Перечислете через запятую товары", '');
 		}
  	mainList.shopItems = items.split(",");
  	mainList.shopItems.push(prompt("Подождите, ещё", ''));
  	mainList.shopItems.sort();
  }
}

mainList.chooseShopItems();

// Перебор массива shopItems 
	mainList.shopItems.forEach(function(item, i, arr) {
	  alert( ++i + ": " + item + " (У нас вы можете купить:" + mainList.shopItems + ")" );
});

// Перебор всего объекта
for( let key in mainList) {
	console.log( "Наш магазин включает в себя: " + key );
}

console.log (mainList);