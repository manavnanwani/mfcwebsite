
var stackedCard = new stackedCards({
	 	selector: '.mycards',
	 	layout: "fanOut",
	 	transformOrigin: "bottom"
	});

	stackedCard.init();
var stackedCardSlide = new stackedCards({
    transformOrigin: "bottom"
});
var stackedCardSlide = new stackedCards({
		 	selector: '.stacked-cards-slide',
		 	layout: "fanOut",
		 	transformOrigin: "bottom"
		 });

		stackedCardSlide.init();


$(function(){
	$("#card1").click(function(){
		$("#text").text("First");
	});
	$("#card2").click(function(){
		$("#text").text("Second");
	});
	$("#card3").click(function(){
		$("#text").text("Third");
	});
	$("#card4").click(function(){
		$("#text").text("fourth");
	});
	$("#card5").click(function(){
		$("#text").text("FIFTH");
	});
	$("#card6").click(function(){
		$("#text").text("SIXTH");
	});
	$("#card7").click(function(){
		$("#text").text("SEVENTH");
	});
	$("#card8").click(function(){
		$("#text").text("EIGHT");
	});
	$("#card9").click(function(){
		$("#text").text("NINTH");
	});
	
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


