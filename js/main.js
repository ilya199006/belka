window.onload = function() {
	window.indexBody = document.getElementById('indexBody');
  var mainNav = document.getElementById('mainNav');
	function clickBurger() {
		mainNav.classList.toggle('main-nav--show');
	}

	contactsBurger.addEventListener('transitionend', clickBurger);
};