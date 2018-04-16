(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
window.addEventListener('DOMContentLoaded', function() {

	let ajax = require('../parts/ajax.js');
	let calc = require('../parts/calc.js');
	let modal = require('../parts/modal.js');
	let scroll = require('../parts/scroll.js');
	let slider = require('../parts/slider.js');
	let tab = require('../parts/tab.js');
	let timer = require('../parts/timer.js');

	ajax();
	calc();
	modal();
	scroll();
	slider();
	tab();
	timer();

});
},{"../parts/ajax.js":2,"../parts/calc.js":3,"../parts/modal.js":4,"../parts/scroll.js":5,"../parts/slider.js":6,"../parts/tab.js":7,"../parts/timer.js":8}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){
function calc() {
	let persons = document.getElementsByClassName('counter-block-input')[0],
		restDays = document.getElementsByClassName('counter-block-input')[1],
		place = document.getElementById('select'),
		totalValue = document.getElementById('total'),
		personsSum = 0,
		daysSum = 0,
		total = 0;

		totalValue.innerHTML = 0;

		persons.addEventListener('change', function() {
			personsSum = +this.value;
			total = (daysSum + personsSum)*4000;
			if (restDays.value == '') {
				totalValue.innerHTML = 0;
			} else {
				totalValue.innerHTML = total;
			}
		});

		restDays.addEventListener('change', function() {
			daysSum = +this.value;
			total = (daysSum + personsSum)*4000;
			if (persons.value == '') {
				totalValue.innerHTML = 0;
			} else {
				totalValue.innerHTML = total;
			}
		});

		place.addEventListener('change', function() {
			if (restDays.value == '' || persons.value == '') {
				totalValue.innerHTML = 0;
			} else {
				let a = total;
				totalValue.innerHTML = a * this.options[this.selectedIndex].value;
			}
		});
}

module.exports = calc;
},{}],4:[function(require,module,exports){
function modal() {
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
}

module.exports = modal;
},{}],5:[function(require,module,exports){
function scroll() {
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
}

module.exports = scroll;
},{}],6:[function(require,module,exports){
function slider() {
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

		function plusSlides (n) {
			showSlides(slideIndex += n)
		}

		function currentSlides(n) {
			showSlides(slideIndex = n)
		}

		prev.addEventListener('click', function(){
			plusSlides(-1);
		});

		next.addEventListener('click', function(){
			plusSlides(1);
		});

		dotsWrap.addEventListener('click', function(event) {
			for (let i = 0; i < dots.length + 1; i++) {
				if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
					currentSlides(i);
				}
			}
		});
}

module.exports = slider;
},{}],7:[function(require,module,exports){
function tab() {
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
}

module.exports = tab;
},{}],8:[function(require,module,exports){
function timer() {
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

}

module.exports = timer;
},{}]},{},[1]);
