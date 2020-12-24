


var hamburger = document.querySelector('.hamburger');
var navigation = document.querySelector('nav ul ');
var a = document.querySelectorAll('nav ul li ');
hamburger.addEventListener('click',()=>{
	navigation.classList.toggle('toggle');
});