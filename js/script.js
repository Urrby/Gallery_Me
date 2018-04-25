function randomNumber (min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
function shuffle(array) {
	let currentIndex = array.length;
	let temporaryValue;
	let randomIndex;

	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}


let shuffeledArr = shuffle(arr);
let items = document.querySelectorAll(".items");
let overlay = document.querySelector(".overlay");
let overlayImage = overlay.querySelector("img");
let buttons = document.querySelectorAll(".v_button");

items.forEach(picture => picture.querySelector("img").src = "img/" + shuffeledArr.shift() + ".jpg");
buttons.forEach(button  => button.addEventListener("click", function(e){
	let src = document.querySelector(".items").querySelector("img").src;
	overlayImage.src = src;
	overlay.classList.add("open");
}));

overlay.querySelector(".inner_overlay").querySelector(".cls_btn").addEventListener("click", function () {
	overlay.classList.remove("open");
})





