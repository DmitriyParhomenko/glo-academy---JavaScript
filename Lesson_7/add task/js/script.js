let btn = document.querySelector(".button"),
	rocket = document.querySelector(".main-rocket");

/*top: 26%;
left: 34%;
width: 3px;*/


/*function myAnimation() {
	let rocket = document.querySelector(".main-rocket"),
		pos = 0;
      animate({
        duration: 5000,
        timing: function circ(timeFraction) {
          return 1 - Math.sin(Math.acos(timeFraction))
        },
        draw: function() {
       		pos++;
	          rocket.style.left = pos * -9+ '%';
	          rocket.style.top = pos * 67 + '%';
	          rocket.style.width = pos * 3 + 'px';
        }
      });
    };*/

    function myAnimation() {
          animate({
            duration: 5000,
            timing: function(timeFraction) {
              return Math.pow(timeFraction, 2);
            },
            draw: function(progress) {
            progress++;	
              rocket.style.left = progress * 20 + '%';
              rocket.style.top = progress * 50 + '%';
              rocket.style.width = progress * 15 + 'px';
            }
          });
        };

/*function myAnimation() {
	let rocket = document.querySelector(".main-rocket"),
      	pos = 0,
      	id = setInterval(frame, 10);

      	function frame() {
      		if (pos == 600) {
      			clearInterval(id);
      		} else {
      			pos++;
      			rocket.style.top = pos + 100 + 'px';
      			rocket.style.right = pos + 20 + 'px';
      		}
      	}
    }*/

btn.addEventListener('click', myAnimation);