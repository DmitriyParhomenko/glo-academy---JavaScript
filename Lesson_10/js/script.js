class Options {
	constructor() {
		this.div = document.createElement('div');
	}

	newDiv() {

		this.div.innerHTML = "Кто говорит, что изучить язык программирования легко, то это \
							  менеджеры, которые хотят загнать свой курс!"
		document.body.insertBefore(this.div, document.body.firstChild);
		this.div.style.cssText="width: 300px; \
			height: 300px; \
		    background-color: yellow; \
		    text-align: center; \
		    font-size: 30px; ";
	}
}

let options = new Options();

options.newDiv();