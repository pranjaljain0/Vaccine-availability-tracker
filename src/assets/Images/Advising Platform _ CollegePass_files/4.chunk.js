(this["webpackJsonpcollegepass-advisorpanel"] = this["webpackJsonpcollegepass-advisorpanel"] || []).push([[4],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Sidebar/mobile.css":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/components/Sidebar/mobile.css ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, " #menuToggle\n {\n   display: block;\n   position: relative;\n   top: 80px;\n   left: 35px;\n   z-index: 1;\n   -webkit-user-select: none;\n   user-select: none;\n }\n \n #menuToggle a\n {\n   text-decoration: none;\n   color: #232323;\n   transition: color 0.3s ease;\n }\n \n #menuToggle a:hover\n {\n   color: tomato;\n }\n\n #menuToggle input\n {\n   display: block;\n   width: 40px;\n   height: 32px;\n   position: absolute;\n   top: -7px;\n   left: -5px;\n   cursor: pointer;\n   opacity: 0;\n   z-index: 2;\n   -webkit-touch-callout: none;\n }\n\n #menuToggle span\n {\n   display: block;\n   width: 33px;\n   height: 4px;\n   margin-bottom: 5px;\n   position: relative;\n   background: #cdcdcd;\n   border-radius: 3px;\n   z-index: 1;\n   transform-origin: 4px 0px;\n }\n \n #menuToggle span:first-child\n {\n   transform-origin: 0% 0%;\n }\n \n #menuToggle span:nth-last-child(2)\n {\n   transform-origin: 0% 100%;\n }\n #menuToggle input:checked ~ span\n {\n   opacity: 1;\n   transform: rotate(45deg) translate(-2px, -1px);\n   background: #ffffff;\n   opacity: 0.6;\n }\n \n #menuToggle input:checked ~ span:nth-last-child(3)\n {\n   opacity: 0;\n   transform: rotate(0deg) scale(0.2, 0.2);\n }\n \n #menuToggle input:checked ~ span:nth-last-child(2)\n {\n   transform: rotate(-45deg) translate(0, -1px);\n }\n \n \n #menu\n {\n   position: absolute;\n   width: 300px;\n   margin: -100px 0 0 -50px;\n   padding: 50px;\n   padding-top: 125px;\n   padding-bottom: 250px;\n   background: #000000;\n   list-style-type: none;\n   -webkit-font-smoothing: antialiased;\n   transform-origin: 0% 0%;\n   transform: translate(-100%, 0);\n   transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);\n }\n \n #menu li\n {\n   padding: 10px 0;\n   font-size: 22px;\n }\n \n #menuToggle input:checked ~ ul\n {\n   transform: none;\n }", "",{"version":3,"sources":["webpack://src/components/Sidebar/mobile.css"],"names":[],"mappings":"CAAC;;GAEE,cAAc;GACd,kBAAkB;GAClB,SAAS;GACT,UAAU;GACV,UAAU;GACV,yBAAyB;GACzB,iBAAiB;CACnB;;CAEA;;GAEE,qBAAqB;GACrB,cAAc;GACd,2BAA2B;CAC7B;;CAEA;;GAEE,aAAa;CACf;;CAEA;;GAEE,cAAc;GACd,WAAW;GACX,YAAY;GACZ,kBAAkB;GAClB,SAAS;GACT,UAAU;GACV,eAAe;GACf,UAAU;GACV,UAAU;GACV,2BAA2B;CAC7B;;CAEA;;GAEE,cAAc;GACd,WAAW;GACX,WAAW;GACX,kBAAkB;GAClB,kBAAkB;GAClB,mBAAmB;GACnB,kBAAkB;GAClB,UAAU;GACV,yBAAyB;CAC3B;;CAEA;;GAEE,uBAAuB;CACzB;;CAEA;;GAEE,yBAAyB;CAC3B;CACA;;GAEE,UAAU;GACV,8CAA8C;GAC9C,mBAAmB;GACnB,YAAY;CACd;;CAEA;;GAEE,UAAU;GACV,uCAAuC;CACzC;;CAEA;;GAEE,4CAA4C;CAC9C;;;CAGA;;GAEE,kBAAkB;GAClB,YAAY;GACZ,wBAAwB;GACxB,aAAa;GACb,kBAAkB;GAClB,qBAAqB;GACrB,mBAAmB;GACnB,qBAAqB;GACrB,mCAAmC;GACnC,uBAAuB;GACvB,8BAA8B;GAC9B,0DAA0D;CAC5D;;CAEA;;GAEE,eAAe;GACf,eAAe;CACjB;;CAEA;;GAEE,eAAe;CACjB","sourcesContent":[" #menuToggle\n {\n   display: block;\n   position: relative;\n   top: 80px;\n   left: 35px;\n   z-index: 1;\n   -webkit-user-select: none;\n   user-select: none;\n }\n \n #menuToggle a\n {\n   text-decoration: none;\n   color: #232323;\n   transition: color 0.3s ease;\n }\n \n #menuToggle a:hover\n {\n   color: tomato;\n }\n\n #menuToggle input\n {\n   display: block;\n   width: 40px;\n   height: 32px;\n   position: absolute;\n   top: -7px;\n   left: -5px;\n   cursor: pointer;\n   opacity: 0;\n   z-index: 2;\n   -webkit-touch-callout: none;\n }\n\n #menuToggle span\n {\n   display: block;\n   width: 33px;\n   height: 4px;\n   margin-bottom: 5px;\n   position: relative;\n   background: #cdcdcd;\n   border-radius: 3px;\n   z-index: 1;\n   transform-origin: 4px 0px;\n }\n \n #menuToggle span:first-child\n {\n   transform-origin: 0% 0%;\n }\n \n #menuToggle span:nth-last-child(2)\n {\n   transform-origin: 0% 100%;\n }\n #menuToggle input:checked ~ span\n {\n   opacity: 1;\n   transform: rotate(45deg) translate(-2px, -1px);\n   background: #ffffff;\n   opacity: 0.6;\n }\n \n #menuToggle input:checked ~ span:nth-last-child(3)\n {\n   opacity: 0;\n   transform: rotate(0deg) scale(0.2, 0.2);\n }\n \n #menuToggle input:checked ~ span:nth-last-child(2)\n {\n   transform: rotate(-45deg) translate(0, -1px);\n }\n \n \n #menu\n {\n   position: absolute;\n   width: 300px;\n   margin: -100px 0 0 -50px;\n   padding: 50px;\n   padding-top: 125px;\n   padding-bottom: 250px;\n   background: #000000;\n   list-style-type: none;\n   -webkit-font-smoothing: antialiased;\n   transform-origin: 0% 0%;\n   transform: translate(-100%, 0);\n   transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);\n }\n \n #menu li\n {\n   padding: 10px 0;\n   font-size: 22px;\n }\n \n #menuToggle input:checked ~ ul\n {\n   transform: none;\n }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Sidebar/sidebar.css":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/components/Sidebar/sidebar.css ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".sidebar {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  padding-top: 75px;\n  height: 100%;\n  width: 215px;\n  position: fixed;\n  z-index: 1;\n  background-color: #111;\n  overflow-x: hidden;\n}\n.sidebar a:hover {\n  color: #ffffff !important;\n  text-decoration: none !important;\n}\n.sidebar::-webkit-scrollbar {\n  width: 0 !important;\n}\n\nimg.profile-sidebar {\n  width: 125px;\n  height: 120px;\n  max-width: 100%;\n  border-radius: 100%;\n  position: relative;\n  display: inline-block;\n}\n.img.profile-sidebar:hover .edit {\n  display: block;\n}\n.edit {\n  position: absolute;\n  left: 65%;\n  top: 70%;\n  font-size: 22px;\n  color: #ffffff;\n  background: #ffffff2e;\n  border-radius: 50%;\n  height: 35px;\n  width: 26%;\n  text-align: center;\n  /*display: none;*/\n}\n.text-center.hover-hidden-icon:hover .edit {\n  display: block;\n}\n.text-center.hover-hidden-icon:hover .profile-sidebar {\n  opacity: 0.7;\n}\n/*span.hover-hidden-icon {\n    padding: 30% 0%;\n}*/\n\n.flex-column.nav a {\n  font-size: 14px;\n}\n\n.sidebar-main {\n  width: 100%;\n}\n\n.hidden {\n  visibility: hidden;\n}\n\n.sidebar a#basic-nav-dropdown {\n  color: #ffffff;\n}\n\n.sidebar .dropdown-menu {\n  background: #191c21 !important;\n}\n\n.dropdown-item:focus,\n.dropdown-item:hover {\n  color: #16181b;\n  text-decoration: none;\n  background-color: #191c21 !important;\n}\n\n.sidebar .dropdown-menu.show {\n  left: 7% !important;\n  top: -35px !important;\n  position: inherit !important;\n  /*transition: 0.8s;*/\n}\n/*   For Sidebar Menu  */\n\n.flex-column.nav a {\n  font-size: 10.5px;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\n\n.profile-sidebar:hover .edit {\n  display: block;\n}\n\n/*   for testing  */\n\n.navbar-expand-lg .navbar-nav {\n  flex-direction: column !important;\n}\n", "",{"version":3,"sources":["webpack://src/components/Sidebar/sidebar.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,SAAS;EACT,OAAO;EACP,kBAAkB;EAClB,kBAAkB;EAClB,iBAAiB;EACjB,YAAY;EACZ,YAAY;EACZ,eAAe;EACf,UAAU;EACV,sBAAsB;EACtB,kBAAkB;AACpB;AACA;EACE,yBAAyB;EACzB,gCAAgC;AAClC;AACA;EACE,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,eAAe;EACf,mBAAmB;EACnB,kBAAkB;EAClB,qBAAqB;AACvB;AACA;EACE,cAAc;AAChB;AACA;EACE,kBAAkB;EAClB,SAAS;EACT,QAAQ;EACR,eAAe;EACf,cAAc;EACd,qBAAqB;EACrB,kBAAkB;EAClB,YAAY;EACZ,UAAU;EACV,kBAAkB;EAClB,iBAAiB;AACnB;AACA;EACE,cAAc;AAChB;AACA;EACE,YAAY;AACd;AACA;;EAEE;;AAEF;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,8BAA8B;AAChC;;AAEA;;EAEE,cAAc;EACd,qBAAqB;EACrB,oCAAoC;AACtC;;AAEA;EACE,mBAAmB;EACnB,qBAAqB;EACrB,4BAA4B;EAC5B,oBAAoB;AACtB;AACA,wBAAwB;;AAExB;EACE,iBAAiB;EACjB,sBAAsB;EACtB,yBAAyB;AAC3B;;AAEA;EACE,cAAc;AAChB;;AAEA,mBAAmB;;AAEnB;EACE,iCAAiC;AACnC","sourcesContent":[".sidebar {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  padding-top: 75px;\n  height: 100%;\n  width: 215px;\n  position: fixed;\n  z-index: 1;\n  background-color: #111;\n  overflow-x: hidden;\n}\n.sidebar a:hover {\n  color: #ffffff !important;\n  text-decoration: none !important;\n}\n.sidebar::-webkit-scrollbar {\n  width: 0 !important;\n}\n\nimg.profile-sidebar {\n  width: 125px;\n  height: 120px;\n  max-width: 100%;\n  border-radius: 100%;\n  position: relative;\n  display: inline-block;\n}\n.img.profile-sidebar:hover .edit {\n  display: block;\n}\n.edit {\n  position: absolute;\n  left: 65%;\n  top: 70%;\n  font-size: 22px;\n  color: #ffffff;\n  background: #ffffff2e;\n  border-radius: 50%;\n  height: 35px;\n  width: 26%;\n  text-align: center;\n  /*display: none;*/\n}\n.text-center.hover-hidden-icon:hover .edit {\n  display: block;\n}\n.text-center.hover-hidden-icon:hover .profile-sidebar {\n  opacity: 0.7;\n}\n/*span.hover-hidden-icon {\n    padding: 30% 0%;\n}*/\n\n.flex-column.nav a {\n  font-size: 14px;\n}\n\n.sidebar-main {\n  width: 100%;\n}\n\n.hidden {\n  visibility: hidden;\n}\n\n.sidebar a#basic-nav-dropdown {\n  color: #ffffff;\n}\n\n.sidebar .dropdown-menu {\n  background: #191c21 !important;\n}\n\n.dropdown-item:focus,\n.dropdown-item:hover {\n  color: #16181b;\n  text-decoration: none;\n  background-color: #191c21 !important;\n}\n\n.sidebar .dropdown-menu.show {\n  left: 7% !important;\n  top: -35px !important;\n  position: inherit !important;\n  /*transition: 0.8s;*/\n}\n/*   For Sidebar Menu  */\n\n.flex-column.nav a {\n  font-size: 10.5px;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\n\n.profile-sidebar:hover .edit {\n  display: block;\n}\n\n/*   for testing  */\n\n.navbar-expand-lg .navbar-nav {\n  flex-direction: column !important;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/components/Sidebar/mobile.css":
/*!*******************************************!*\
  !*** ./src/components/Sidebar/mobile.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./mobile.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Sidebar/mobile.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./mobile.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Sidebar/mobile.css",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./mobile.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Sidebar/mobile.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/components/Sidebar/sidebar.css":
/*!********************************************!*\
  !*** ./src/components/Sidebar/sidebar.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./sidebar.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Sidebar/sidebar.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./sidebar.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Sidebar/sidebar.css",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./sidebar.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Sidebar/sidebar.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ })

}]);
//# sourceMappingURL=4.chunk.js.map