
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

var link = document.querySelectorAll('._goto-block');

if (link) {
  var blocks = [];

  var _loop7 = function _loop7(_index28) {
    var el = link[_index28];
    var block_name = el.getAttribute('href').replace('#', '');

    if (block_name != '' && !~blocks.indexOf(block_name)) {
      blocks.push(block_name);
    }

    el.addEventListener('click', function (e) {
      if (document.querySelector('.menu__body._active')) {
        menu_close();
        body_lock_remove(500);
      }

      var target_block_class = el.getAttribute('href').replace('#', '');
      var target_block = document.querySelector('.' + target_block_class);
      
      _goto(target_block, 300);

      e.preventDefault();
    });
  };

  for (var _index28 = 0; _index28 < link.length; _index28++) {
    _loop7(_index28);
  }

  window.addEventListener('scroll', function (el) {
    var old_current_link = document.querySelectorAll('._goto-block._active');

    if (old_current_link) {
      for (var _index29 = 0; _index29 < old_current_link.length; _index29++) {
        var _el13 = old_current_link[_index29];

        _el13.classList.remove('_active');
      }
    }

    for (var _index30 = 0; _index30 < blocks.length; _index30++) {
      var block = blocks[_index30];
      var block_item = document.querySelector('.' + block);

      if (block_item) {
        var block_offset = offset(block_item).top;
        var block_height = block_item.offsetHeight;

        if (pageYOffset > block_offset - window.innerHeight / 3 && pageYOffset < block_offset + block_height - window.innerHeight / 3) {
          var current_links = document.querySelectorAll('._goto-block[href="#' + block + '"]');

          for (var _index31 = 0; _index31 < current_links.length; _index31++) {
            var current_link = current_links[_index31];
            current_link.classList.add('_active');
          }
        }
      }
    }
  });
} //ScrollOnClick (Simple)


var goto_links = document.querySelectorAll('._goto');

if (goto_links) {
  var _loop8 = function _loop8(_index32) {
    var goto_link = goto_links[_index32];
    goto_link.addEventListener('click', function (e) {
      var target_block_class = goto_link.getAttribute('href').replace('#', '');
      var target_block = document.querySelector('.' + target_block_class);

      _goto(target_block, 300);

      e.preventDefault();
    });
  };

  for (var _index32 = 0; _index32 < goto_links.length; _index32++) {
    _loop8(_index32);
  }
}

function _goto(target_block, speed) {
  var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var header = ''; //OffsetHeader

  header = 'header';
  var options = {
    speedAsDuration: true,
    speed: speed,
    header: header,
    offset: offset
  };
  var scr = new SmoothScroll();
  scr.animateScroll(target_block, '', options);
} //SameFunctions


function offset(el) {
  var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return {
    top: rect.top + scrollTop,
    left: rect.left + scrollLeft
  };
}

function disableScroll() {
  if (window.addEventListener) // older FF
    window.addEventListener('DOMMouseScroll', preventDefault, false);
  document.addEventListener('wheel', preventDefault, {
    passive: false
  }); // Disable scrolling in Chrome

  window.onwheel = preventDefault; // modern standard

  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE

  window.ontouchmove = preventDefault; // mobile

  document.onkeydown = preventDefaultForScrollKeys;
}

function enableScroll() {
  if (window.removeEventListener) window.removeEventListener('DOMMouseScroll', preventDefault, false);
  document.removeEventListener('wheel', preventDefault, {
    passive: false
  }); // Enable scrolling in Chrome

  window.onmousewheel = document.onmousewheel = null;
  window.onwheel = null;
  window.ontouchmove = null;
  document.onkeydown = null;
}

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault) e.preventDefault();
  e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
  /*if (keys[e.keyCode]) {
      preventDefault(e);
      return false;
  }*/
}


﻿"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! smooth-scroll v16.1.2 | (c) 2020 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */
window.Element && !Element.prototype.closest && (Element.prototype.closest = function (e) {
  var t,
      n = (this.document || this.ownerDocument).querySelectorAll(e),
      o = this;

  do {
    for (t = n.length; 0 <= --t && n.item(t) !== o;) {
      ;
    }
  } while (t < 0 && (o = o.parentElement));

  return o;
}), function () {
  if ("function" == typeof window.CustomEvent) return;

  function e(e, t) {
    t = t || {
      bubbles: !1,
      cancelable: !1,
      detail: void 0
    };
    var n = document.createEvent("CustomEvent");
    return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n;
  }

  e.prototype = window.Event.prototype, window.CustomEvent = e;
}(), function () {
  for (var r = 0, e = ["ms", "moz", "webkit", "o"], t = 0; t < e.length && !window.requestAnimationFrame; ++t) {
    window.requestAnimationFrame = window[e[t] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e[t] + "CancelAnimationFrame"] || window[e[t] + "CancelRequestAnimationFrame"];
  }

  window.requestAnimationFrame || (window.requestAnimationFrame = function (e, t) {
    var n = new Date().getTime(),
        o = Math.max(0, 16 - (n - r)),
        a = window.setTimeout(function () {
      e(n + o);
    }, o);
    return r = n + o, a;
  }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function (e) {
    clearTimeout(e);
  });
}(), function (e, t) {
  "function" == typeof define && define.amd ? define([], function () {
    return t(e);
  }) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = t(e) : e.SmoothScroll = t(e);
}("undefined" != typeof global ? global : "undefined" != typeof window ? window : void 0, function (q) {
  "use strict";

  var I = {
    ignore: "[data-scroll-ignore]",
    header: null,
    topOnEmptyHash: !0,
    speed: 500,
    speedAsDuration: !1,
    durationMax: null,
    durationMin: null,
    clip: !0,
    offset: 0,
    easing: "easeInOutCubic",
    customEasing: null,
    updateURL: !0,
    popstate: !0,
    emitEvents: !0
  },
      F = function F() {
    var n = {};
    return Array.prototype.forEach.call(arguments, function (e) {
      for (var t in e) {
        if (!e.hasOwnProperty(t)) return;
        n[t] = e[t];
      }
    }), n;
  },
      r = function r(e) {
    "#" === e.charAt(0) && (e = e.substr(1));

    for (var t, n = String(e), o = n.length, a = -1, r = "", i = n.charCodeAt(0); ++a < o;) {
      if (0 === (t = n.charCodeAt(a))) throw new InvalidCharacterError("Invalid character: the input contains U+0000.");
      1 <= t && t <= 31 || 127 == t || 0 === a && 48 <= t && t <= 57 || 1 === a && 48 <= t && t <= 57 && 45 === i ? r += "\\" + t.toString(16) + " " : r += 128 <= t || 45 === t || 95 === t || 48 <= t && t <= 57 || 65 <= t && t <= 90 || 97 <= t && t <= 122 ? n.charAt(a) : "\\" + n.charAt(a);
    }

    return "#" + r;
  },
      L = function L() {
    return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);
  },
      x = function x(e) {
    return e ? (t = e, parseInt(q.getComputedStyle(t).height, 10) + e.offsetTop) : 0;
    var t;
  },
      H = function H(e, t, n, o) {
    if (t.emitEvents && "function" == typeof q.CustomEvent) {
      var a = new CustomEvent(e, {
        bubbles: !0,
        detail: {
          anchor: n,
          toggle: o
        }
      });
      document.dispatchEvent(a);
    }
  };

  return function (o, e) {
    var A,
        a,
        O,
        C,
        M = {};
    M.cancelScroll = function (e) {
      cancelAnimationFrame(C), C = null, e || H("scrollCancel", A);
    }, M.animateScroll = function (i, c, e) {
      M.cancelScroll();
      var s = F(A || I, e || {}),
          u = "[object Number]" === Object.prototype.toString.call(i),
          t = u || !i.tagName ? null : i;

      if (u || t) {
        var l = q.pageYOffset;
        s.header && !O && (O = document.querySelector(s.header));

        var n,
            o,
            a,
            m,
            r,
            d,
            f,
            h,
            p = x(O),
            g = u ? i : function (e, t, n, o) {
          var a = 0;
          if (e.offsetParent) for (; a += e.offsetTop, e = e.offsetParent;) {
            ;
          }
          return a = Math.max(a - t - n, 0), o && (a = Math.min(a, L() - q.innerHeight)), a;
        }(t, p, parseInt("function" == typeof s.offset ? s.offset(i, c) : s.offset, 10), s.clip),
            y = g - l,
            v = L(),
            w = 0,
            S = (n = y, a = (o = s).speedAsDuration ? o.speed : Math.abs(n / 1e3 * o.speed), o.durationMax && a > o.durationMax ? o.durationMax : o.durationMin && a < o.durationMin ? o.durationMin : parseInt(a, 10)),
            E = function E(e, t) {
          var n,
              o,
              a,
              r = q.pageYOffset;
          if (e == t || r == t || (l < t && q.innerHeight + r) >= v) return M.cancelScroll(!0), o = t, a = u, 0 === (n = i) && document.body.focus(), a || (n.focus(), document.activeElement !== n && (n.setAttribute("tabindex", "-1"), n.focus(), n.style.outline = "none"), q.scrollTo(0, o)), H("scrollStop", s, i, c), !(C = m = null);
        },
            b = function b(e) {
          var t, n, o;
          m || (m = e), w += e - m, d = l + y * (n = r = 1 < (r = 0 === S ? 0 : w / S) ? 1 : r, "easeInQuad" === (t = s).easing && (o = n * n), "easeOutQuad" === t.easing && (o = n * (2 - n)), "easeInOutQuad" === t.easing && (o = n < .5 ? 2 * n * n : (4 - 2 * n) * n - 1), "easeInCubic" === t.easing && (o = n * n * n), "easeOutCubic" === t.easing && (o = --n * n * n + 1), "easeInOutCubic" === t.easing && (o = n < .5 ? 4 * n * n * n : (n - 1) * (2 * n - 2) * (2 * n - 2) + 1), "easeInQuart" === t.easing && (o = n * n * n * n), "easeOutQuart" === t.easing && (o = 1 - --n * n * n * n), "easeInOutQuart" === t.easing && (o = n < .5 ? 8 * n * n * n * n : 1 - 8 * --n * n * n * n), "easeInQuint" === t.easing && (o = n * n * n * n * n), "easeOutQuint" === t.easing && (o = 1 + --n * n * n * n * n), "easeInOutQuint" === t.easing && (o = n < .5 ? 16 * n * n * n * n * n : 1 + 16 * --n * n * n * n * n), t.customEasing && (o = t.customEasing(n)), o || n), q.scrollTo(0, Math.floor(d)), E(d, g) || (C = q.requestAnimationFrame(b), m = e);
        };

        0 === q.pageYOffset && q.scrollTo(0, 0), f = i, h = s, u || history.pushState && h.updateURL && history.pushState({
          smoothScroll: JSON.stringify(h),
          anchor: f.id
        }, document.title, f === document.documentElement ? "#top" : "#" + f.id), "matchMedia" in q && q.matchMedia("(prefers-reduced-motion)").matches ? q.scrollTo(0, Math.floor(g)) : (H("scrollStart", s, i, c), M.cancelScroll(!0), q.requestAnimationFrame(b));
      }
    };

    var t = function t(e) {
      if (!e.defaultPrevented && !(0 !== e.button || e.metaKey || e.ctrlKey || e.shiftKey) && "closest" in e.target && (a = e.target.closest(o)) && "a" === a.tagName.toLowerCase() && !e.target.closest(A.ignore) && a.hostname === q.location.hostname && a.pathname === q.location.pathname && /#/.test(a.href)) {
        var t, n;

        try {
          t = r(decodeURIComponent(a.hash));
        } catch (e) {
          t = r(a.hash);
        }

        if ("#" === t) {
          if (!A.topOnEmptyHash) return;
          n = document.documentElement;
        } else n = document.querySelector(t);

        (n = n || "#top" !== t ? n : document.documentElement) && (e.preventDefault(), function (e) {
          if (history.replaceState && e.updateURL && !history.state) {
            var t = q.location.hash;
            t = t || "", history.replaceState({
              smoothScroll: JSON.stringify(e),
              anchor: t || q.pageYOffset
            }, document.title, t || q.location.href);
          }
        }(A), M.animateScroll(n, a));
      }
    },
        n = function n(e) {
      if (null !== history.state && history.state.smoothScroll && history.state.smoothScroll === JSON.stringify(A)) {
        var t = history.state.anchor;
        "string" == typeof t && t && !(t = document.querySelector(r(history.state.anchor))) || M.animateScroll(t, null, {
          updateURL: !1
        });
      }
    };

    M.destroy = function () {
      A && (document.removeEventListener("click", t, !1), q.removeEventListener("popstate", n, !1), M.cancelScroll(), C = O = a = A = null);
    };

    return function () {
      if (!("querySelector" in document && "addEventListener" in q && "requestAnimationFrame" in q && "closest" in q.Element.prototype)) throw "Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";
      M.destroy(), A = F(I, e || {}), O = A.header ? document.querySelector(A.header) : null, document.addEventListener("click", t, !1), A.updateURL && A.popstate && q.addEventListener("popstate", n, !1);
    }(), M;
  };
})
var html = document.body.parentNode;
var account_icon = document.querySelector('.user-menu__link-open');
var userMenuBody = document.querySelector('.user-menu__body');

account_icon.addEventListener("click", function (e) {
	userMenuBody.classList.toggle('is_activated');
});

document.documentElement.addEventListener("click", function (e) {
	if (!e.target.closest('.user-menu')) {
		userMenuBody.classList.remove('is_activated');
	}
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