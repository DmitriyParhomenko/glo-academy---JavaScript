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