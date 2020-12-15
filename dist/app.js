/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

var app = new Vue({
  el: '#root',
  data: {
    footer_menu: {
      'Products': [{
        title: "Corel Painter",
        link: "https://www.painterartist.com/en/product/painter/?ft"
      }, {
        title: "ParticleShop",
        link: "https://www.painterartist.com/en/product/particleshop/?ft"
      }, {
        title: "Painter Essentials",
        link: "https://www.painterartist.com/en/product/painter-essentials/?ft"
      }, {
        title: "Special Offers",
        link: "https://www.painterartist.com/en/special-offers/?ft"
      }, {
        title: "Free Trials",
        link: "https://www.painterartist.com/en/free-trials/?ft"
      }, {
        title: "All products",
        link: "https://www.painterartist.com/en/all-products/?ft"
      }],
      'Quick Links': [{
        title: "Licensing",
        link: "https://www.painterartist.com/en/licensing/?ft"
      }, {
        title: "Tutorials & Tips",
        link: "https://www.painterartist.com/en/pages/tutorials/?ft"
      }, {
        title: "Webinars",
        link: "https://www.painterartist.com/en/pages/webinars/?ft"
      }, {
        title: "The Painter Factory",
        link: "http://painterfactory.com/"
      }, {
        title: "Discovery Center",
        link: "https://learn.corel.com/graphics/home"
      }, {
        title: "Beta Programs",
        link: "https://www.corel.com/beta/"
      }],
      'Support': [{
        title: "Register your product",
        link: "http://account.corel.com/accounts/user/registerProduct?sso-brandId=painter"
      }, {
        title: "Patches & Updates",
        link: "https://www.painterartist.com/en/support/updates/?ft"
      }, {
        title: "Knowledgebase",
        link: "https://support.corel.com/hc/en-us/sections/360002999034-Painter"
      }, {
        title: "Uninstall instructions",
        link: "https://support.corel.com/hc/en-us/articles/215822078"
      }, {
        title: "Contact us",
        link: "https://www.corel.com/contact/"
      }],
      'About Corel': [{
        title: "Company information",
        link: "https://www.corel.com/our-story/"
      }, {
        title: "Newsroom",
        link: "https://www.corel.com/newsroom/"
      }, {
        title: "Careers",
        link: "https://www.corel.com/careers/"
      }, {
        title: "Partner Program",
        link: "https://www.corel.com/partners/"
      }, {
        title: "Legal Information",
        link: "https://www.corel.com/legal/"
      }, {
        title: "EULA",
        link: "https://www.corel.com/eula/"
      }]
    }
  }
});

/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi ./src/app.js ./src/app.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\mauri\OneDrive\Desktop\web\sass-painter\src\app.js */"./src/app.js");
module.exports = __webpack_require__(/*! C:\Users\mauri\OneDrive\Desktop\web\sass-painter\src\app.scss */"./src/app.scss");


/***/ })

/******/ });