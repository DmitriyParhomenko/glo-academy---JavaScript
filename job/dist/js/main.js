
// Slider

	let slideIndex = 1,
		slides = document.getElementsByClassName('main-slider'),
		main = document.querySelector('.main'),
		prev = document.querySelector('.main-slider__left'),
		next = document.querySelector('.main-slider__right'),
		dotsWrap = document.querySelector('.main-slider__dots'),
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

			slides[slideIndex - 1 ].style.display = 'flex';
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

			function carusel() {
					intervalTimer = setInterval(function() { 
	  		plusSlides(1);
	  },7500);
		}

		function stopSlider() {
			clearInterval(intervalTimer);
		}

		carusel();

// Modile navigation

function navigation() {
	let showNav = document.querySelector('.top-nav-header__mobile'),
					hideNav = document.querySelector('.top-nav__close'),
					closeTop = document.querySelector('.header-top__close'),
					headerTop = document.querySelector('.header-top'),
					logoTop = document.querySelector('.top-nav__logo'),
					nav = document.querySelector('.top-nav__mobile');


 showNav.addEventListener('click', function() {
		nav.classList.add('top-nav__active');
	});	

 hideNav.addEventListener('click', function() {
		nav.classList.remove('top-nav__active');
	});	

 closeTop.addEventListener('click', function() {
		headerTop.style.display = "none";
		logoTop.style.top = "9px";
	});

}

navigation();