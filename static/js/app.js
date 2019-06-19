// Write JS code here


var pics = [
	'static/img/cat2.jpg',
	'static/img/cat3.jpg',
	'static/img/cat4.jpg',
	'static/img/cat5.jpg',
	'static/img/cat6.jpg'
]

var btn = document.querySelector("button");
var image = document.querySelector("img");
var counter = 1;

btn.addEventListener("click", function() {
	
	if (counter === 5) {
		counter = 0;
	}
	image.src = pics[counter]
	counter = counter + 1;
});