var html = document.body.parentNode;
let accIconLink = document.querySelector('.user-menu__link-open');
var userMenuBody = document.querySelector('.user-menu__body');

accIconLink.addEventListener("click", function (e) {
	userMenuBody.classList.toggle('is_activated');
});

let mainSlider= document.querySelector('.swiper-container');
var mySwiper = new Swiper (mainSlider, {
	slidesPerView: 1,
  // lazyLoading: true,
	loop: true,
	autoHeight: false,

	initialSlide: 1,

	navigation: {
		nextEl: '.controls__next',
		prevEl: '.controls__prev',
	}
 
 })

let lotsSlider = document.querySelector('.lots-slider');
var lotsSwiper = new Swiper(lotsSlider,{
    lazyLoading: true,
		slidesPerView: 3,
		loop: true,
		autoHeight: false,

		initialSlide: 1,
		// spaceBetween: 100,
		navigation: {
			nextEl: '.controls-lots-slider__prev',
			prevEl: '.controls-lots-slider__next',
		},
		breakpoints: {
    // when window width is >= 320px
    300: {
      slidesPerView: 1,
		// spaceBetween: 100,
    },
    480: {
      slidesPerView: 2,
		// spaceBetween: 100,
    },
    // when window width is >= 480px
    730: {
      slidesPerView: 3,
			// spaceBetween: 100,
    },
    }
});

let quotesSlider = document.querySelector('.citations-slider');
var qoutesSwiper = new Swiper(quotesSlider,{
		// wrapperClass: 'swiper-wrapper',
		// slideClass: 'swiper-slide',
		slidesPerView: 1,
		loop: true,
		autoHeight: true,

		initialSlide: 1,
		// spaceBetween: 100,
		navigation: {
			nextEl: '.citations-slider-control__btn-next',
		},
});