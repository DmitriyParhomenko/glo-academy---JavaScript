function ajax() {
	let message = new Object();
	message.loading = "Загрузка...";
	message.success = "Спасибо, мы скоро вам перезвоним!";
	message.failure = "Что-то пошло не так...";



	for ( let i = 0; i < form.length; i++ ) {

	let form = document.getElementsByClassName('main-form')[i],
		input = document.getElementsByClassName('clear_input');


	
		statusMessage = document.createElement('div');
		statusMessage.classList.add('status');

		if(form) {
			form.addEventListener('submit', function(event) {
				event.preventDefault();          				//отмена стандартного поведения браузера 
				form.appendChild(statusMessage);

				// Ajax
				let request = new XMLHttpRequest();
				request.open("POST", 'server.php')

				request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

				let formData = new FormData(form);

				request.send(formData);
				

				request.onreadystatechange = function () {
					if (request.readyState < 4) {
						statusMessage.innerHTML = message.loading;
					} else if (request.readyState === 4) {
						if (request.status == 200 && request.status < 300) {
							statusMessage.innerHTML = message.success;
							// Добавляем контент на страницу
						} else {
							statusMessage.innerHTML = message.failure;
						}
					}
				}

				for ( let i = 0; i < input.length; i++) {
					input[i].value = '';  // Очищаем поля ввода
				}
			
			});
		}
	}
}

module.exports = ajax;