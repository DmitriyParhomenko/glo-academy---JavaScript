/*	 SLick slider */
			$('.production-slider_top').slick({
				arrows: false,
				slidesToShow: 1,
				slidesToScroll: 1,
				asNavFor: '.production-slider_bottom'
			});
			$('.production-slider_bottom').slick({
				arrows: true,
				slidesToShow: 4,
				slidesToScroll: 1,
				responsive: [
	    {
	      breakpoint: 576,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 994,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        infinite: true,
	        dots: true
	      }
	    }
		  ],
				prevArrow: '<div class="slider-arrow slider-arrow_prod slider-arrow_left_prod"></div>',
				nextArrow: '<div class="slider-arrow slider-arrow_prod slider-arrow_right_prod"></div>',
				asNavFor: '.production-slider_top'
			});
			$('.feedback-slider').slick({
				slidesToShow: 3,
				slidesToScroll: 1,
				responsive: [
	    {
	      breakpoint: 576,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        infinite: true,
	        dots: false
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1,
	        infinite: true,
	        dots: false
	      }
	    },
	    {
	      breakpoint: 1201,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1,
	        infinite: true,
	        dots: false
	      }
	    }
		  ],
				prevArrow: '<div class="slider-arr slider-arr_feedback slider-arr_left_feed"></div>',
				nextArrow: '<div class="slider-arr slider-arr_feedback slider-arr_right_feed"></div>'
			});
			$('.big-slider').slick({
				arrows: false,
				autoplay: true,
				autoplaySpeed: 5000,
				pauseOnHover: false,
				slidesToShow: 1,
				slidesToScroll: 1
			});

/*		 WOW */
			new WOW().init();


			/*	Show and hide popup */
		 		$(document).ready(function() {

		 			$('.button__top, .button_descr').on("click", function() {
		 					$('.overlay').show();
		 				});

		 			$('.popup-close').on("click", function() {
		 					$('.overlay').hide();
		 				});

		 			});

/*	 Map */
 		ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [54.752656, 56.002053],
            zoom: 18
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Местоположение фирмы',
            balloonContent: 'ОАО "Добрый картон"'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/map.png',
            // Размеры метки.
            iconImageSize: [165, 24],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-10, -24]
        });
    myMap.behaviors
    .disable('scrollZoom')
    myMap.geoObjects
        .add(myPlacemark);
});