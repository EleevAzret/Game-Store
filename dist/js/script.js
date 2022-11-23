"use strict";

let burger = document.querySelector('.burger');
let sideBar = document.querySelector('.sidebar');

burger.addEventListener('click', function() {
	sideBar.classList.toggle('active');
})