// Создаём переменные
var yourBudget;
var nameStore;


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
	open: true
}

// Присваиваем массиву значния введённые пользователем
mainList.shopGoods[0] = prompt("Какой тип товаров будем продавать?");
mainList.shopGoods[1] = prompt("Какой тип товаров будем продавать?");
mainList.shopGoods[2] = prompt("Какой тип товаров будем продавать?");

//  Бюджет на 1 день
var budgetDay = yourBudget/30;

alert("Бюджет на 1 день" + " " + "=" + " " + budgetDay);

console.log (mainList);

