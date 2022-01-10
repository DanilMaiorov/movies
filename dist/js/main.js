/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_module_1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/module_1 */ \"./modules/module_1.js\");\n\n\n(0,_modules_module_1__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/getData.js":
/*!****************************!*\
  !*** ./modules/getData.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getData = () => {\r\n    return fetch('dbHeroes.json')\r\n    .then((response) => {\r\n        return response.json()\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\n\n//# sourceURL=webpack:///./modules/getData.js?");

/***/ }),

/***/ "./modules/module_1.js":
/*!*****************************!*\
  !*** ./modules/module_1.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./modules/getData.js\");\n/* harmony import */ var _renderMovies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderMovies */ \"./modules/renderMovies.js\");\n/* harmony import */ var _renderList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderList */ \"./modules/renderList.js\");\n\r\n\r\n\r\n\r\nconst module_1 = () => {\r\n    (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n        console.log(data)\r\n        ;(0,_renderMovies__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data)\r\n        ;(0,_renderList__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(data)\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (module_1);\n\n//# sourceURL=webpack:///./modules/module_1.js?");

/***/ }),

/***/ "./modules/renderList.js":
/*!*******************************!*\
  !*** ./modules/renderList.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderList = (movies) => { //функция для отрисовки списка\r\n    let movieArr = []\r\n    let newMovieArr = []\r\n    const selector = document.querySelector('#select-movie')\r\n    const arrayUnique = (arr) => { //функция для исключения повторяющихся значений в массиве\r\n        return arr.filter((e, i, a) => a.indexOf(e) == i);\r\n    };\r\n    movies.forEach(item => {\r\n        if(item.movies != null) {  //делаю проверку на исключение пустых массивов\r\n            movieArr.push(item.movies) //пушу все в новый массив\r\n        }\r\n    })//сейчас нужно перебрать массив и создать на перебранной основе выпадающий список\r\n        let arrUn = arrayUnique(movieArr.join().split(',')).forEach((element, index) => {//соберем весь массив в один и разделим запятой\r\n            const option = document.createElement('option')\r\n            option.innerHTML = `\r\n            <option value=${index}>${element}</option>`\r\n            selector.append(option) \r\n        })\r\n    selector.addEventListener('change', (e) => { //вешаю обработчик события на изменение при выборе селекта\r\n        const cards = document.querySelectorAll('.card') //перебираю массив карточек ИЗ ВНОВЬ СОЗДАННЫХ В НОВЫМ КЛАССОМ\r\n        const movies = document.querySelectorAll('.name') //перебираю массив с фильмами\r\n/*         movies.forEach(item => {\r\n            const {movies} = item\r\n            if(item.movies != null) {  //делаю проверку на исключение пустых массивов\r\n                movieArr.push(item.movies) //пушу все в новый массив\r\n            }\r\n        }) */\r\n           /* let arrUn = arrayUnique(movieArr.join().split(',')).forEach(item => {\r\n                newMovieArr.push(item)\r\n            })\r\n            let newArrr = newMovieArr.splice(0, 24)\r\n            \r\n            console.log(typeof newArrr[0]) */\r\n            cards.forEach((element, index) => { //перебираю массив по элементу и индексу\r\n                element.style.display = 'none'\r\n            if (movies[index].textContent.includes(e.target.value)) { //условие на сокрытие карточек, не сподходящих под название фильма\r\n                debugger\r\n                element.style.display = 'block';\r\n            } \r\n        })  \r\n    })    \r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderList);\n\n//# sourceURL=webpack:///./modules/renderList.js?");

/***/ }),

/***/ "./modules/renderMovies.js":
/*!*********************************!*\
  !*** ./modules/renderMovies.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n    let cartArr = []\r\n    let movieArr = []\r\n    const movieCart = document.querySelector('.movie-card') //ищем созданную карточку\r\n    const selector = document.querySelector('#select-movie')\r\n\r\n    const renderMovies = (movies) => {\r\n\r\n    movies.forEach((movieItem) => { //перебираю весь массив данных\r\n        //console.log(movieItem)\r\n        const {name, photo, movies} = movieItem //делаю деструктуризацию\r\n        const card = document.createElement('div'); //создаю новый элемент для каждой новой карточки\r\n        card.classList.add('card');\r\n        card.style.cssText = `\r\n        height: 520px;\r\n        width: 250px;\r\n        background-color: rgba(212, 177, 250, 0.4);\r\n        border-radius: 15px;\r\n        margin-left: 10px;\r\n        margin-rigth: 10px;\r\n        margin-bottom: 10px;\r\n        `\r\n        //ниже создаю верстку на карточку каждого фильма\r\n        card.innerHTML = ` \r\n        <div class=\"movie-card\">\r\n            <h3 class=\"actor\">${name}</h3>\r\n            <div class=\"poster\">\r\n                <img src=${photo} alt=\"\">\r\n            </div>\r\n            <div class=\"movie-name\">\r\n                <div class=\"name\">${movies}</div>\r\n            </div>\r\n        </div>` \r\n/*         if(movies != null) {  //делаю проверку на исключение пустых массивов\r\n            movieArr.push(movies) //пушу все в новый массив\r\n            localStorage.setItem('movies', JSON.stringify(movieArr)) //сохраняю данные в локалсторэдж\r\n        } */\r\n        //cartArr.push(movieItem)\r\n        movieCart.append(card) \r\n        //const movires = document.querySelectorAll('.name') \r\n        //console.log(movires)\r\n    });\r\n\r\n     \r\n\r\n   \r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderMovies);\n\n//# sourceURL=webpack:///./modules/renderMovies.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;