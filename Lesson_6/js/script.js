let openShop = document.getElementById("open-btn"),
					nameValue = document.getElementsByClassName("name-value")[0],
					budgetValue = document.getElementsByClassName("budget-value")[0],
					goodsValue = document.getElementsByClassName("goods-value")[0],
					itemsValue = document.getElementsByClassName("items-value")[0],
					employersValue = document.getElementsByClassName("employers-value")[0],
					discountValue = document.getElementsByClassName("discount-value")[0],
					isopenValue = document.getElementsByClassName("isopen-value")[0],

					goodsItem = document.getElementsByClassName("goods-item"),
					goodsButtons = document.getElementsByTagName("button")[1],
					budgetButtons = document.getElementsByTagName("button")[2],
					employersButtons = document.getElementsByTagName("button")[3],
					chooseItem = document.querySelector(".choose-item"),
					timeValue = document.querySelector(".time-value"),
					countBudgetValue = document.querySelector(".count-budget-value"),
					hireEmplouers = document.querySelectorAll(".hire-employers-item");

// Создаём переменные
let money,
				name


openShop.addEventListener('click', () => {
	money = +prompt("Ваш бюджет?", '');

	while (isNaN(money) || money == "" || money == null ) {
		money = +prompt("Ваш бюджет?", '');
	}

	budgetValue.textContent = money;

	nameValue.textContent = prompt("Название вашего магазина", '').toUpperCase();
});

goodsButtons.addEventListener('click', () => {
	for (let i = 0; i < goodsItem.length; i++ ) {

		let a = goodsItem[i].value

		if ((typeof(a)) === 'string' && (typeof(a)) !== null && a.length < 50 ) {
			console.log('Всё верно!');
			mainList.shopGoods[i] = a;
			goodsValue.textContent = mainList.shopGoods;
		} else {
					i = i - 1;
		}
	}
});

chooseItem.addEventListener('change', () => {
	let items = chooseItem.value;

	if (isNaN(items) && items != '') {
		mainList.shopItems = items.split(", ");
		mainList.shopItems.sort();

		itemsValue.textContent = mainList.shopItems;
	}
	
});

timeValue.addEventListener('change', () => {
	let time = timeValue.value;

	if (time < 0 ) {
		console.log ("В прошлое мы не можем вернутся!");
		mainList.open = false;
	} else if (time > 8 && time < 20) {
		console.log ("Время работать!");
		mainList.open = true;
		} else if (time < 24) {
			console.log ("Слишком поздно");
			mainList.open = false;
			} else {
				console.log ("В сутках только 24 часа!");
				mainList.open = false;
				};

	if (mainList.open == true ) {
		isopenValue.style.backgroundColor = 'green'
	} else {
			isopenValue.style.backgroundColor = 'red'
	}

});

budgetButtons.addEventListener('click', () => {
	countBudgetValue.value = money / 30;
});

employersButtons.addEventListener('click', () => {
	for (var i = 0; i < hireEmplouers.length; i++) {

		let name = hireEmplouers[i].value;
		mainList.employers[i] = name;

		employersValue.textContent += mainList.employers[i] + ', ';
	}
});

// Объявляем объект mainList
mainList = {
	yourBudget: money,
	nameStore: name,
	shopGoods: [],
	employers: {},
	open: false,
	discount: false,
	shopItems: [],

	// 80% от цены 
	priceNew: function priceNew() {
			if (mainList.discount == true) {
				price = +prompt("Ваш цена?", '');

				let partPrice = price*0.8;

				console.log ( Math.round (partPrice) );
			}
	}
}


// Перебор массива shopItems 
	mainList.shopItems.forEach(function(item, i, arr) {
	  alert( ++i + ": " + item + " (У нас вы можете купить:" + mainList.shopItems + ")" );
});

// Перебор всего объекта
for( let key in mainList) {
	console.log( "Наш магазин включает в себя: " + key );
}
