window.addEventListener('DOMContentLoaded', function() {

	// Анимация

	function fade(elem, t, f){
  // кадров в секунду (по умолчанию 50)
  var fps = f || 50; 
  // время работы анимации (по умолчанию 500мс)
  var time = t || 500; 
  // сколько всего покажем кадров
  var steps = time / (1000 / fps);   
  // текущее значение opacity - изначально 0
  var op = 1;
  // изменение прозрачности за 1 кадр
  var d0 = op / steps;
  
  // устанавливаем интервал (1000 / fps) 
  // например, 50fps -> 1000 / 50 = 20мс  
  var timer = setInterval(function(){
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
			let custom = document.getElementsByClassName('custom')[0]; 
				customInfo = document.getElementsByClassName('custom-info')[0],
				customChar = document.getElementsByClassName('custom-char')[0],
				customStyle = document.getElementsByClassName('custom-style')[0];
			

			custom.style.display = "flex";
			customInfo.style.display = "block";
			customChar.style.display = "block";
			customStyle.style.display = "block";

		}

	let popupBtn = document.getElementById('popup-btn'),
		animatedMain = document.getElementsByClassName('main')[0],
		animatedOverlay = document.getElementsByClassName('overlay')[0];
		

		popupBtn.addEventListener('click', function(){


			fade(animatedMain, 1000, 50);
			fade(animatedOverlay, 1000, 50);
			showCustom();

		});

	

		
	
});