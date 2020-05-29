let bg = document.getElementById("moon__bg");
let moon = document.getElementById("moon__img");
let mountain = document.getElementById("moon__mountain");
let road = document.getElementById("moon__road");
let text = document.getElementById("moon__text");
window.addEventListener('scroll', function() {
	var value = window.scrollY;
	bg.style.top = value * 0.5 + 'px';
	moon.style.left = -value * 0.5 + 'px';
	mountain.style.top = -value * 0.15 + 'px';
	road.style.top = value * 0.15 + 'px';
	text.style.top = value * 1 + 'px';
})


// Collapse
$("[data-collapse]").on("click", function(event){
	event.preventDefault();
	var $this = $(this); 
		blockID = $this.data('collapse');
	$this.toggleClass("active");
})