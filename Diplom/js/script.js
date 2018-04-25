document.addEventListener("DOMContentLoaded", function() {
	let	popupBtn = document.getElementById("popup-btn"),
		overlay = document.getElementsByClassName("overlay")[0],
		mainBlock = document.getElementsByClassName("main")[0],
		customBlock = document.getElementsByClassName("custom")[0];



	// Убираем оверлей и карточку персонажей, отображаем блок кастомизации

	popupBtn.addEventListener("click", Start);

	function Start() {
		overlay.classList.add("bounceOut", "animated");
		mainBlock.classList.add("fadeOutDownBig", "animated");

		setTimeout(function() {
			overlay.style.display = "none";
			mainBlock.style.display = 'none';
			customBlock.style.display = 'flex';
			for ( let i = 0; i < customBlock.children.length; i++) {
				customBlock.children[i].style.display = 'block';
			}
			customBlock.classList.add("fadeInUp", "animated");
		}, 1000);

		setTimeout(function() {
			overlay.classList.remove("bounceOut", "animated");
			mainBlock.classList.remove("fadeOutDownBig", "animated");
			customBlock.classList.remove("fadeInUp", "animated");

		}, 4000);
	}






		
		let Slider = document.querySelector(".preview"),
						previewStyle = Slider.getElementsByClassName("preview-style"),
						slidePrev = Slider.querySelector(".prev"),
						slideNext = Slider.querySelector(".next"),
						slideIndex = 1;



	// Блок кастомизации персонажа

		// Левый блок
	let name = document.getElementById("name"),
		age = document.getElementById("age"),
		sex = document.querySelectorAll("input[name='sex']"),
		politView = document.getElementById("select"),
		bio = document.getElementById("bio"),
		nameValue,
		ageValue,
		politViewValue = politView.options[politView.selectedIndex].value,
		sexValue = "Мужской",
		bioValue;

	let skin = document.getElementById("person-easy");
		

		name.addEventListener("change", function() { 							
			if ( !isNaN( +name.value / 2) || name.value.length < 2) {
				alert("Введите имя правильно!");
			} else {
				nameValue = name.value;
			}
		});

			age.addEventListener("change", function() {								
				if (isNaN( +age.value / 2) || age.value == "" || age.value > 100 || age.value < 35 || age.value == " ") {
					alert("Введите возраст правильно!");
				} else {
					ageValue = age.value;
				}
			});

			politView.addEventListener("change", function() {                            
				politViewValue = politView.options[politView.selectedIndex].value;
		
			});

			bio.addEventListener("change", function() { 				
				if ( bio.value == '' || bio.value.length < 5 || bio.value == "  " ) {
					alert("Вы не ввели свою биографию!");
				} else {
					bioValue = bio.value;
				}
			});


		// Переключения пола
		for (let i = 0 ; i < sex.length ; i++) { 
			sex[i].addEventListener("change", function() {
				
				let  randomMen = 1 + Math.round(Math.random() * 2);
				let randomFemale = 5 + Math.round(Math.random() * 2);
					
					

				sexValue = sex[i].value;
				if (sexValue == "Мужской") {

					skin.style.backgroundImage = `url('img/construct-${randomMen}.png')`;
					for ( let s = 0; s < previewStyle.length; s++) {
						previewStyle[s].style.display = 'none';
					}
					previewStyle[randomMen - 1].style.display = 'block';

				} else {

					skin.style.backgroundImage = `url('img/construct-${randomFemale}.png')`;
					for ( let s = 0; s < previewStyle.length; s++) {
						previewStyle[s].style.display = 'none';
					}
					previewStyle[randomFemale - 1].style.display = 'block';

				}
				
			});
		}


	// СЛайдер 
		mainSlider(slideIndex);

		function mainSlider(n) {
			if (sexValue == "Мужской") {
				if (n > previewStyle.length - 4) {
					slideIndex = 1;
				}
				if ( n < 1) {
					slideIndex = previewStyle.length - 4;
				}
				for ( let i = 0; i < previewStyle.length; i++) {
					previewStyle[i].style.display = 'none';
				}
				previewStyle[slideIndex - 1].style.display = 'block';


				//  Переключение персонажа
				if ( n > 4) {
					n = 1;
				} 
				if (n < 1) {
					n = slideIndex;
				}
				skin.style.backgroundImage = `url('img/construct-${n}.png')`;
				
			} else {

				if (n > previewStyle.length) {
					slideIndex = 5;
				}
				if ( n < 5) {
					slideIndex = previewStyle.length;
				}
				for ( let i = 0; i < previewStyle.length ; i++) {
					previewStyle[i].style.display = 'none';
				}
				previewStyle[slideIndex - 1].style.display = 'block';

				//  Переключение персонажа

				if ( n > 8) {
					n = 5;
				} 
				if (n < 5) {

					n =  slideIndex;
				}
				skin.style.backgroundImage = `url('img/construct-${n}.png')`;
				

			} 
		}
		function toggleMain(n) {
			mainSlider(slideIndex += n);
		}

		function startSliders() {

			slideNext.addEventListener("click", function() {			// Переключение одежды вперед
				toggleMain(1);			
			}); 
			slidePrev.addEventListener("click", function() {			// Переключе одежды назад
				toggleMain(-1);	

			}); 
		}


		startSliders();


		// Переход на главный экран и создание карточки своего кандидата

				let card = document.getElementsByClassName("main-cards-item"),
					readyBtn = document.getElementById("ready"),
					result,
					resultCount,
					resultBar;

				readyBtn.addEventListener("click",  function() {
						if ( !isNaN( +name.value / 2) || isNaN( +age.value / 2) || age.value == "" || age.value > 100 || age.value < 18  || age.value == " " ||  bio.value == '' || bio.value.length < 5 || bio.value == "  ") {
							alert("Вы ввели некорректно данные!"); 
						} else {
							openMain();
							saveResults();
						}
						nullResalts();
				});


				function saveResults() {

					let	userCard = card[0].cloneNode(true),
						mainCards = document.getElementsByClassName("main-cards")[0],
						candidateBlock = userCard.querySelector(".candidate-block"),
					
						person = customBlock.getElementsByClassName("person")[0],
						userImg = person.cloneNode(true),
						userName = userCard.querySelector(".name"),
						userAge = userCard.querySelector(".age"),
						userSex = userCard.querySelector(".sex"),
						userViews = userCard.querySelector(".views"),
						userBio = userCard.querySelector(".bio");

			
						

							// Оставляем 3 карточки
						for(let i = 2; i < card.length; i++) {
							card[i].parentNode.removeChild(card[i]);
						}

							// Создание карточки
							mainCards.insertBefore( userCard , mainCards.children[2]);


							// Перенос кандината
							candidateBlock.removeChild(candidateBlock.children[0]); 										// Удаляем стандартное изображение	
							/*person.removeChild(person.children[0]); */										       
		/*					photo.parentNode.removeChild(photo); */					
						candidateBlock.insertBefore(userImg, candidateBlock.children[0]);	//Вставляем изображение из кастомного экрана"


							userName.innerHTML = `${nameValue}`;								                      // Вставляем имя 
							userAge.innerHTML = `${ageValue} лет`;								                    // Вставляем возраст
							userSex.innerHTML = `${sexValue}`;									                       // Вставляем пол 
							userViews.innerHTML = `${politViewValue}`;							                 // Вставляем политический взгляд 
							userBio.innerHTML = `${bioValue}`;									                       // Вставляем биографию
					}

							function openMain() {
						// Переход на экран c выборами
							customBlock.classList.add("fadeOutDownBig", "animated");

							
							setTimeout(function() { 
								customBlock.style.display = 'none';
								for ( let i = 0; i < customBlock.children.length; i++) {
									customBlock.children[i].style.display = 'none';
								}
								mainBlock.style.display = 'block';
								mainBlock.classList.add("fadeInDown", "animated");
							}, 2000);

							setTimeout(function() {
								mainBlock.classList.remove("fadeInDown", "animated");
								customBlock.classList.remove("fadeOutDownBig", "animated");
							}, 4000);
						}

						


					function nullResalts() {
						
						// Обнуление результатов
						for (let i = 0; i < card.length; i++) {
							result = card[i].querySelector(".result");
							resultCount = result.querySelector(".result-count");
							resultBar = result.querySelector(".progress-bar");
							resultCount.innerHTML = "0%";
							resultBar.style.height = "0%";
						}
					}


					

					// Переход на блок кастомизации

						let reset = document.getElementById("reset"),
										clear = document.getElementsByClassName('clear');
										
						reset.addEventListener("click", function() {
							Start();	
							saveResults();

							for ( let i = 0; i < clear.length; i++) {
								clear[i].value = '';  // Очищаем поля ввода
							}

						});


					// Проведение выборов
						let voting = document.getElementById("voting");
						let firstBar = Math.random() * 100,
							secondBar =  (100 - firstBar) * Math.random(),
							thirdBar = 100 - (secondBar + firstBar);

						voting.addEventListener("click", function(event) {
							firstBar = Math.random() * 100,
							secondBar =  (100 - firstBar) * Math.random(),
							thirdBar = 100 - (secondBar + firstBar);
							Voting(event);
						});


						function Voting(event) {
							let	resultCount = mainBlock.querySelectorAll(".result-count"),
								resultBar = mainBlock.querySelectorAll(".progress-bar");

							if (event.target == crime) {

								

								/*if (firstBar >= 100){
									firstBar = 100;
								} else {
									firstBar = Math.random() * 50 + 25;
								}*/

								firstBar = Math.random() * 50 + 25;

								secondBar =  Math.random() * (100 - firstBar);
					 		thirdBar = 100- (secondBar + firstBar);

								// Результаты голосования
								for (let i = 0; i < card.length; i++) {

										resultCount[0].innerHTML = `${thirdBar.toFixed(2) }%`;
										resultBar[0].style.height = `${thirdBar.toFixed(2)}%`;

										resultCount[1].innerHTML = `${secondBar.toFixed(2)}%`;
										resultBar[1].style.height = `${secondBar.toFixed(2)}%`;
										
										resultCount[2].innerHTML = `${(firstBar).toFixed(2)}%`;
										resultBar[2].style.height = `${(firstBar).toFixed(2)}%`;
									}
								} else {
								// Результаты голосования
								for (let i = 0; i < card.length; i++) {

										resultCount[0].innerHTML = `${thirdBar.toFixed(2)}%`;
										resultBar[0].style.height = `${thirdBar.toFixed(2)}%`;

										resultCount[1].innerHTML = `${secondBar.toFixed(2)}%`;
										resultBar[1].style.height = `${secondBar.toFixed(2)}%`;
										
										resultCount[2].innerHTML = `${firstBar.toFixed(2)}%`;
										resultBar[2].style.height = `${firstBar.toFixed(2)}%`;	
								}
							}
						}

			// Мой кандидат победит!!!! 
			 let crime = document.getElementById("crime");

			 	crime.addEventListener("click", function(event) {
			 		Voting(event);
			 	})



});