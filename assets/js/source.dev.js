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

	'use strict';var _navigation = __webpack_require__(3);var _navigation2 = _interopRequireDefault(_navigation);
	var _gridToggle = __webpack_require__(2);var _gridToggle2 = _interopRequireDefault(_gridToggle);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

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
/* 3 */
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

/***/ })
/******/ ]);