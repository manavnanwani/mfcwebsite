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

$('#email').click(function(){
  $('#pop').toggleClass('pop1');
});
$('.fa-times').click(function(){
  $('#pop').toggleClass('pop1');
});











// .swiper-slide-active
	var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        delay: 2500,
        slideShadows: true,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });

// var swiper = new Swiper('.swiper-container', {
//       spaceBetween: 30,
//       centeredSlides: true,
//       autoplay: {
//         delay: 2500,
//         disableOnInteraction: false,
//       },
//       pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//       },
//       navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       },
//     });


















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


