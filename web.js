window.addEventListener("load", function()
{
	const loader = document.querySelector(".loader");
	loader.className += " hidden";
	const mainNav = document.querySelector("#mainNav");
	mainNav.className += " fixed-top";
	});

$(document).ready();
$(function(){
	$(document).scroll(function(){
		var $nav = $(".navbar");
		$nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
	})
})


const words = ["DEVELOPERS", "DESIGNERS", "CODERS","EVERYONE!!"];
let i = 0;
let timer;

function typingEffect() {
	let word = words[i].split("");
	var loopTyping = function() {
		if (word.length > 0) {
			document.getElementById('word').innerHTML += word.shift();
		} else {
			deletingEffect();
			return false;
		};
		timer = setTimeout(loopTyping, 200);
	};
	loopTyping();
};

function deletingEffect() {
	let word = words[i].split("");
	var loopDeleting = function() {
		if (word.length > 0) {
			word.pop();
			document.getElementById('word').innerHTML = word.join("");
		} else {
			if (words.length > (i + 1)) {
				i++;
			} else {
				i = 0;
			};
			typingEffect();
			return false;
		};
		timer = setTimeout(loopDeleting, 100);
	};
	loopDeleting();
};

typingEffect();

$(function(){
	$(document).scroll(function(){
		$(".nav-item").removeClass("active");
		$("#about").toggleClass("active", $(this).scrollTop() > "785" && $(this).scrollTop() < "1810");
		$("#home").toggleClass("active", $(this).scrollTop() < "785");
		$("#workshop").toggleClass("active", $(this).scrollTop() > "1810" && $(this).scrollTop() < "3110");
		$("#team").toggleClass("active", $(this).scrollTop() > "3110" && $(this).scrollTop() < "4010");
		$("#contact").toggleClass("active", $(this).scrollTop() > "4010");
	})
});



var stackedCard = new stackedCards({
	 	selector: '.mycards',
	 	layout: "slide",
	 	transformOrigin: "center",
	});

	stackedCard.init();
var stackedCardSlide = new stackedCards({
    transformOrigin: "bottom"
});