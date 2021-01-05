window.onload = function(){
	//ACCORDİON ITEMS
	var acc = document.getElementsByClassName("accordion-button");
	var acc_array = Array.from(acc);
	acc_array.forEach(function(acc){
		acc.addEventListener("click", function() {
			var svg = acc.getElementsByTagName('svg');
				svg[0].classList.toggle("svg-closed");
				svg[0].classList.toggle("svg-open");
			var answer = this.nextElementSibling;
			answer.classList.toggle('active');	
		});
	});
}