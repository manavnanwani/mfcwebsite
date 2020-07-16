window.addEventListener("load", function()
{
	const loader = document.querySelector(".loader");
	loader.className += " hidden";
	const mainNav = document.querySelector(".navbar");
	mainNav.className += " fixed-top";
	});

$(document).ready();
$(function(){
	$(document).scroll(function(){
		var $nav = $(".navbar");
		$nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
	})
});



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



var stackedCard = new stackedCards({
	 	selector: '.mycards',
	 	layout: "slide",
	 	transformOrigin: "center",
	});

	stackedCard.init();
var stackedCardSlide = new stackedCards({
    transformOrigin: "bottom"
});
var stackedCardSlide = new stackedCards({
		 	selector: '.stacked-cards-slide',
		 	layout: "slide",
		 	transformOrigin: "center",
		 });

		stackedCardSlide.init();


$(function(){
	$(window).on("resize", function(){
		$(".typ").toggleClass("typ1", $(window).width() < "991");
		$("#gg").toggleClass("typ1", $(window).width() < "991");
		$(".flex").toggleClass("flex1", $(window).width() < "991");
		})
	});

$(function(){
	if($(window).width() < "991"){
		$(".typ").toggleClass("typ1");
		$("#gg").toggleClass("typ1");
		$(".flex").toggleClass("flex1");
	}
});




var textWrapper = document.querySelector('.ml7 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml7 .letter',
    translateY: ["1.1em", 0],
    translateX: ["0.55em", 0],
    translateZ: 0,
    rotateZ: [180, 0],
    duration: 750,
    easing: "easeOutExpo",
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml7',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });


$('#email').click(function(){
	$('#pop').toggleClass('pop1');
});
$('.fa-times').click(function(){
	$('#pop').toggleClass('pop1');
});