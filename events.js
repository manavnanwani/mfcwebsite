$(function(){
	$("#s1").click(function(){
		$("#text").text("First");
	});
	$("#s2").click(function(){
		$("#text").text("Second");
	});
	$("#s3").click(function(){
		$("#text").text("Third");
	});
	$("#s4").click(function(){
		$("#text").text("fourth");
	});
	$("#s5").click(function(){
		$("#text").text("FIFTH");
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
