/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';var _navigation = __webpack_require__(5);var _navigation2 = _interopRequireDefault(_navigation);
	var _gridToggle = __webpack_require__(4);var _gridToggle2 = _interopRequireDefault(_gridToggle);
	var _tab = __webpack_require__(8);var _tab2 = _interopRequireDefault(_tab);
	var _datePicker = __webpack_require__(3);var _datePicker2 = _interopRequireDefault(_datePicker);
	var _swipe = __webpack_require__(7);var _swipe2 = _interopRequireDefault(_swipe);
	var _numberIncrement = __webpack_require__(6);var _numberIncrement2 = _interopRequireDefault(_numberIncrement);
	var _bodyPadding = __webpack_require__(2);var _bodyPadding2 = _interopRequireDefault(_bodyPadding);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

	function ready(fn) {
	  if (document.readyState === 'loading') {
	    document.addEventListener('DOMContentLoaded', fn);
	  } else {
	    fn();
	  }
	}

	function init() {
	  (0, _navigation2.default)();
	  (0, _gridToggle2.default)();
	  (0, _tab2.default)();
	  (0, _datePicker2.default)();
	  (0, _swipe2.default)();
	  (0, _numberIncrement2.default)();
	  (0, _bodyPadding2.default)();
	}

	ready(init);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = jQuery;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.default =



	function () {
	  // var body = $('body'),
	  // winWidth = $(window).width();

	  // if($('.button--round')[0] && winWidth < 992) {
	  //   body.addClass('add-padding');
	  // } else {
	  //   body.removeClass('add-padding');
	  // } 

	  var wrapper = $('.wrapper'),
	  winWidth = $(window).width(),
	  btnRWHeight = $('.round-button__wrapper').outerHeight();

	  if ($('.button--round')[0] && winWidth < 992) {
	    wrapper.css({ "padding-bottom": btnRWHeight + 65 + "px" });
	  } else {
	    wrapper.css({ "padding-bottom": btnRWHeight + "px" });
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.default =



	function () {
	  $(function () {
	    if ($('.datepicker').length) {
	      $('.datepicker').datetimepicker({
	        format: 'DD/MM/YYYY' });

	    }
	  });
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.default =



	function () {
	  var list = $('.list'),
	  toggler = $('.js-grid-toggle');

	  toggler.on("click", function (e) {
	    list.toggleClass("list__grid");

	    if (list.hasClass('list__grid')) {
	      $('.js-grid-toggle .fa').removeClass('fa-th-large');
	      $('.js-grid-toggle .fa').addClass('fa-th-list');
	      $('.wrapper').addClass('row');
	    } else {
	      $('.js-grid-toggle .fa').addClass('fa-th-large');
	      $('.js-grid-toggle .fa').removeClass('fa-th-list');
	      $('.wrapper').removeClass('row');
	    }
	  });
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.default =



	function () {
	  var offCanvas = $('.navbar-offcanvas');
	  var button = $('.navbar-toggle');
	  var body = $('body');

	  $('.close-icon').click(function (e) {
	    e.preventDefault();
	    offCanvas.removeClass('in');
	    button.removeClass('is-open');
	    body.removeClass('offcanvas-stop-scrolling');
	  });
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default =



	function () {
	  $(".quantity-control").on("click", function () {
	    var $button = $(this);
	    var oldValue = $button.parent().parent().find("input.quantity").val();

	    if (!$button.parent().parent().find("input.quantity").prop("disabled")) {
	      if ($button.hasClass('increase')) {
	        var newVal = parseFloat(oldValue) + 1;

	        if (oldValue > 1000) {

	          return false;
	        }
	      } else {
	        if (oldValue > 1) {
	          var newVal = parseFloat(oldValue) - 1;
	        } else {
	          newVal = 1;
	        }
	      }

	      $button.parent().parent().find("input.quantity").val(newVal);
	    }
	  });
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.default =



	function () {
	  var swipeElement = $('.swiper');
	  var screenWidth = $(window).width();

	  if (screenWidth <= 768) {
	    $(swipeElement).each(function () {
	      $(".swiper").swipe({
	        tap: function tap(event, target) {
	          if ($('.list').hasClass('list__grid')) {
	            $(".swiper").removeClass('swipe-active');
	            $(this).toggleClass('swipe-active');
	          }
	        },

	        swipeLeft: function swipeLeft(event, direction, distance, duration, fingerCount) {
	          $(".swiper").removeClass('swipe-active');
	          $(this).addClass('swipe-active');
	        },

	        swipeRight: function swipeRight(event, direction, distance, duration, fingerCount) {
	          $(this).removeClass('swipe-active');
	        },

	        threshold: 50 });

	    });
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default =



	function () {
	  $("document").ready(function () {
	    $(".tab-slider--body").hide();
	    $(".tab-slider--body:first").show();
	  });

	  $(".tab-slider--nav li").click(function () {
	    $(".tab-slider--body").hide();
	    var activeTab = $(this).attr("rel");
	    $("#" + activeTab).fadeIn();
	    if ($(this).attr("rel") == "tab2") {
	      $('.tab-slider--tabs').addClass('slide');
	    } else {
	      $('.tab-slider--tabs').removeClass('slide');
	    }
	    $(".tab-slider--nav li").removeClass("active");
	    $(this).addClass("active");
	  });
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ })
/******/ ]);