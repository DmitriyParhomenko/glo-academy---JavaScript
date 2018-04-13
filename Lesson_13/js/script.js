window.addEventListener('DOMContentLoaded', function() {

	// Tab

	let tab = document.getElementsByClassName('info-header-tab'),
		tabContent = document.getElementsByClassName('info-tabcontent'),
		info = document.getElementsByClassName('info-header') [0];

	function hideTabContent(a) {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}

	hideTabContent(1)

	function showTabContent(b) {
		if ( tabContent[b].classList.contains('hide')) {
			hideTabContent(0);
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}

	info.addEventListener('click', function(event) {
		let target = event.target;
		if(target.className == 'info-header-tab') {
			for(let i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					showTabContent(i);
					break;
				}
			}
		}
	});

// Timer

	let deadline  = '2018-04-25 07:00:00';

	function getTimeRemaining(endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date()),
		seconds = Math.floor((t/1000) % 60),
		minutes = Math.floor((t/1000/60) % 60),
		hours = Math.floor( (t/(1000*60*60)) );

		return {
			'total': t,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	};

	function setClock(id, endtime) {

		let timer = document.getElementById(id),
			hours = timer.querySelector('.hours'),
			minutes = timer.querySelector('.minutes'),
			seconds = timer.querySelector('.seconds');

		function updateClock() {
			let t = getTimeRemaining(endtime);
			hours.innerHTML = ('0' + t.hours).slice(-2);
			minutes.innerHTML = ('0' + t.minutes).slice(-2);
			seconds.innerHTML = ('0' + t.seconds).slice(-2);

			if ( t.total <= 0 ) {
				clearInterval(timeInterval);
			}
		}

		updateClock();
		let timeInterval = setInterval(updateClock, 1000);	
	}

		setClock('timer', deadline);

	// modal 

	let more = document.querySelectorAll('.more'),
		overlay = document.querySelector('.overlay'),
		close = document.querySelector('.popup-close');

		for (var i = 0; i < more.length; i++) {
		  more[i].addEventListener('click', function() {
				this.classList.add('more-splash');
				overlay.style.display = "block";
				document.body.style.overflow = 'hidden';
			});	

		  close.addEventListener('click', function() {
				overlay.style.display = "none";
				document.body.style.overflow = '';
				more[i].classList.remove('more-splash');
				
			});
			}

	// Плавная прокурутка 

	function animate (draw, duration) {
		let start = performance.now();
		requestAnimationFrame(
			function animate(time) {
				let timePassed = time - start;
				if (timePassed > duration) {
					timePassed = duration;
				}

				draw(timePassed);

				if (timePassed < duration) {
					requestAnimationFrame(animate);
				} 
			})
	};

	let menu = document.getElementsByTagName('nav')[0];

	menu.addEventListener('click', function(event){
		event.preventDefault();
		animate(function(timePassed) {
			let target = event.target;
			let section = document.getElementById(target.getAttribute('href').slice(1));
			window.scrollBy(0, section.getBoundingClientRect().top / 20 - 3 );
		}, 1500)
	})

	// Асинхронная отправка формы

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

	// slider

	let slideIndex = 1,
		slides = document.getElementsByClassName('slider-item'),
		prev = document.querySelector('.prev'),
		next = document.querySelector('.next'),
		dotsWrap = document.querySelector('.slider-dots'),
		dots = document.getElementsByClassName('dot');

		showSlides(slideIndex);

		function showSlides(n) {

			if ( n > slides.length) {
				slideIndex = 1;
			};

			if ( n < 1 ) {
				slideIndex = slides.length;
			};

			for ( let i = 0; i < slides.length; i++ ) {
				slides[i].style.display = 'none';
			};

			for ( let i = 0; i < dots.length; i++) {
				dots[i].classList.remove('dot-active');
			};

			slides[slideIndex - 1 ].style.display = 'block';
			dots[slideIndex - 1 ].classList.add('dot-active');
		}

});