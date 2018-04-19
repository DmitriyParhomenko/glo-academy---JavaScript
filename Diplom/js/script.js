window.addEventListener('DOMContentLoaded', function() {

	// Анимация

	function fade(elem, t, f){
  // кадров в секунду (по умолчанию 50)
  let fps = f || 50; 
  // время работы анимации (по умолчанию 500мс)
  let time = t || 500; 
  // сколько всего покажем кадров
  let steps = time / (1000 / fps);   
  // текущее значение opacity - изначально 0
  let op = 1;
  // изменение прозрачности за 1 кадр
  let d0 = op / steps;
  
  // устанавливаем интервал (1000 / fps) 
  // например, 50fps -> 1000 / 50 = 20мс  
  let timer = setInterval(function(){
    // уменьшаем текущее значение opacity
    op -= d0;
    // устанавливаем opacity элементу DOM
    elem.style.opacity = op;
    // уменьшаем количество оставшихся шагов анимации
    steps--;
    
    // если анимация окончена
    if(steps <= 0){
      // убираем интервал выполнения
      clearInterval(timer);
      // и убираем элемент из потока документа
      elem.style.display = 'none';
    }
  }, (1000 / fps));
}


	// Модальное окно

	function showCustom() {
			let custom = document.getElementsByClassName('custom')[0],
				person = document.getElementsByClassName('person-easy')[0],
				sliderPreview = document.querySelector('.preview');


			custom.style.display = "flex";
			person.style.cssText = "background: url(../img/candidate-1.png) center no-repeat; \
									background-size: 200px; \
									";

			sliderPreview.style.cssText = "background: url(../img/candidate-1.png) center no-repeat; \
										    border-radius: 50px; \
										    background-size: 145px; \
							    			border: solid 1px;";
			
			for ( let i = 0; i < custom.children.length; i++) {
					custom.children[i].style.display = 'block';
				}
		}

	function hideCustom() {
			let custom = document.getElementsByClassName('custom')[0];


			custom.style.display = "none";
			
			for ( let i = 0; i < custom.children.length; i++) {
					custom.children[i].style.display = '';
				}

			animatedMain.style.display = "block";
			animatedMain.style.opacity = "1";

			
		}




	let popupBtn = document.getElementById('popup-btn'),
		animatedMain = document.getElementsByClassName('main')[0],
		animatedOverlay = document.getElementsByClassName('overlay')[0];
		
		popupBtn.addEventListener('click', function(){

			fade(animatedMain, 1000, 50);
			fade(animatedOverlay, 1000, 50);

			setTimeout(function() {
			  showCustom();
			}, 1500);

		});


	// Информация о кандидате

	let readyBtn = document.getElementById('ready'),
		nameInputId = document.getElementById('name'),
		nameClass = document.getElementsByClassName('name')[0],
		age = document.getElementById('age');

		console.log(nameClass);
		console.log(nameInputId);


	readyBtn.addEventListener('click', () => {

		
		 if (nameInputId.value == "" || !isNaN(nameInputId.value) ) {
			showCustom();	
		} else {
			nameClass.textContent = nameInputId.value;
			hideCustom();
		}


		

	});
	
});





/*for ( let i = 0; i < input.length; i++) {
	input[i].value = '';  // Очищаем поля ввода
}*/