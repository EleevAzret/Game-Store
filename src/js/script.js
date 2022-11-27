"use strict";

let elems = {
	burger : document.querySelector('.burger'),
	sideBar : document.querySelector('.sidebar'),
	gItem : document.querySelectorAll('#gItem'),
	screen : document.querySelector('#screen'),
	slider : document.querySelector('.slider'),
};

let symbols = {
	arrowLeft : document.querySelector('#arrowLeft'),
	arrowRight : document.querySelector('#arrowRight'),
	close : document.querySelector('#close'),
}

elems.burger.addEventListener('click', function() {
	elems.sideBar.classList.toggle('active');
});

for (let [i, item] of elems.gItem.entries()) {
	item.addEventListener('click', function() {
		elems.screen.innerHTML = this.innerHTML;
		elems.slider.classList.add('active');
		
		arrowLeft.addEventListener('click', function() {
			i--;
			if(i < 0) {
				i = elems.gItem.length - 1;
			}
			elems.screen.innerHTML = elems.gItem[i].innerHTML;
			console.log(i);
		})

		arrowRight.addEventListener('click', function() {
			i++;
			if(i > elems.gItem.length - 1) {
				i = 0;
			}
			elems.screen.innerHTML = elems.gItem[i].innerHTML;
			console.log(i);
		})
	})
}

symbols.close.addEventListener('click', e => {
	elems.slider.classList.remove('active');
})