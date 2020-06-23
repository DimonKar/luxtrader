
"use strict";

function email_test(input) {
	return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}

var ua = window.navigator.userAgent;
var msie = ua.indexOf("MSIE ");
var isMobile = {
	Android: function Android() {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function BlackBerry() {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function iOS() {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function Opera() {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function Windows() {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function any() {
		return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
	}
};

function isIE() {
	ua = navigator.userAgent;
	var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
	return is_ie;
}

if (isIE()) {
	document.querySelector('body').classList.add('ie');
}

if (isMobile.any()) {
	document.querySelector('body').classList.add('touch');
}

let iconMenu = document.querySelector(".icon-menu");
let body = document.querySelector("body");
let menuBody = document.querySelector(".menu__body");
if (iconMenu) {
  iconMenu.addEventListener("click", function () {
    iconMenu.classList.toggle("is-activated");
    body.classList.toggle("lock");
    menuBody.classList.toggle("is-activated");
  });
}
function ibg() {
  if (isIE()) {
    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
      if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
        ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
      }
    }
  }
}
ibg();

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