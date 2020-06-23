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
