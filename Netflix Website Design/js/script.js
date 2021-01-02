window.onload = function(){



	//ACCORDİON ITEMS
	var acc = document.getElementsByClassName("accordion-button");
	var acc_array = Array.from(acc);
	acc_array.forEach(function(acc){
		acc.addEventListener("click", function() {
			var icon = acc.getElementsByTagName('i');
			var icon_array = Array.from(icon);
			icon_array.forEach(function(icons){
				icons.classList.toggle("display-none");
			});
			var answer = this.nextElementSibling;
			answer.classList.toggle('active');	
		});
	});
}