(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 541:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ apollo_client)
});

// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(114);
;// CONCATENATED MODULE: ./src/constants/index.js
const API_HOST = 'https://swapi-graphql.netlify.app/.netlify/functions/index';

;// CONCATENATED MODULE: ./src/apollo-client.js

// @constants

const client = new client_.ApolloClient({
    uri: API_HOST,
    cache: new client_.InMemoryCache()
});
/* harmony default export */ const apollo_client = (client);


/***/ }),

/***/ 329:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var i18next_resources_to_backend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(260);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _languages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(556);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([i18next__WEBPACK_IMPORTED_MODULE_0__, i18next_resources_to_backend__WEBPACK_IMPORTED_MODULE_1__]);
([i18next__WEBPACK_IMPORTED_MODULE_0__, i18next_resources_to_backend__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);




// Initialize i18n
i18next__WEBPACK_IMPORTED_MODULE_0__["default"].use((0,i18next_resources_to_backend__WEBPACK_IMPORTED_MODULE_1__["default"])((language, namespace, callback)=>{
    return callback(null, __webpack_require__(328)(`./${language}/${namespace}.json`));
})).use(react_i18next__WEBPACK_IMPORTED_MODULE_2__.initReactI18next).init({
    ns: [
        'common'
    ],
    initImmediate: false,
    fallbackLng: _languages__WEBPACK_IMPORTED_MODULE_3__/* .Language.EN */ .S.EN,
    editor: {
        onEditorSaved: async (lng, ns)=>{
            await i18next__WEBPACK_IMPORTED_MODULE_0__["default"].reloadResources(lng, ns);
            i18next__WEBPACK_IMPORTED_MODULE_0__["default"].emit('editorSaved');
        }
    },
    react: {
        bindI18n: 'languageChanged editorSaved',
        useSuspense: false
    }
});


});

/***/ }),

/***/ 420:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(329);
/* harmony import */ var _languages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(556);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_i18n__WEBPACK_IMPORTED_MODULE_0__]);
_i18n__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];



});

/***/ }),

/***/ 556:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ Language1)
/* harmony export */ });
var Language1;
(function(Language) {
    Language["EN"] = 'en';
    Language["RU"] = 'ru';
})(Language1 || (Language1 = {
}));



/***/ }),

/***/ 957:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(541);
/* harmony import */ var _lib_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(420);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_i18n__WEBPACK_IMPORTED_MODULE_3__]);
_lib_i18n__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];





const App = ({ Component , pageProps  })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloProvider, {
        client: _apollo_client__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
            ...pageProps
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

});

/***/ }),

/***/ 328:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./en/common.json": 147,
	"./ru/common.json": 331
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 328;

/***/ }),

/***/ 114:
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

/***/ }),

/***/ 709:
/***/ ((module) => {

"use strict";
module.exports = require("react-i18next");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 21:
/***/ ((module) => {

"use strict";
module.exports = import("i18next");;

/***/ }),

/***/ 260:
/***/ ((module) => {

"use strict";
module.exports = import("i18next-resources-to-backend");;

/***/ }),

/***/ 147:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"greetings":"Hi! You\'re using Apollo Client version <b>{{version}}</b>"}');

/***/ }),

/***/ 331:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"greetings":"Привет! Вы используете Apollo Client версии <b>{{version}}</b>"}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(957));
module.exports = __webpack_exports__;

})();