let age = document.getElementById('age').value;
 
function showUser(surname, name) {
	this.value = age;
	this.surname = surname;
	this.name = name;
	alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
};

// showUser.prototype.newUser = function(surname) {
// 	alert("Пользователь " + surname + " " + name + ", его возраст " + this.surname);
// }
	
let ivan = new showUser('Иванов', 'Иван');


console.log(ivan);
 
// showUser();