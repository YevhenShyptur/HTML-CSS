/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("\r\nconst addtoStorage = ()=> { \r\n    let name = document.getElementById('name');\r\nlet description = document.getElementById('description');\r\nlet category = document.getElementById('category');\r\nlet img = document.getElementById('img');\r\nlet price = document.getElementById('price');\r\nvar id=GetNextIdValue();\r\nwindow.localStorage.setItem(id, JSON.stringify([  name.value,category.value, description.value, price.value,img.value ]));  \r\n}\r\n\r\nconst GetNextIdValue =()=>{ \r\n    let max=0;\r\n    for(let i=0; i<localStorage.length; i++) {\r\n        let key = localStorage.key(i);\r\n       if(max<=key){\r\n           max=parseInt(key);\r\n           max=max+1;\r\n       }          \r\n      } \r\n      return max;\r\n}\r\nwindow.addtoStorage=addtoStorage;\r\n\r\n\r\nconst data = [\r\n    {\r\n        name:\"safasf\",\r\n        description: \"\",\r\n        category:\"\",\r\n        price:\"\",\r\n        img:\"\"\r\n    }\r\n]\r\n\r\n\r\n\r\n\r\n\r\n\r\n// function getDataFromStorage (){    \r\n \r\n//     const mydiv=document.getElementById('container')\r\n \r\n//     // Создаём новый элемент div\r\n//     // и добавляем в него немного контента\r\n\r\n//     var newDiv = document.createElement(\"div\");\r\n//         newDiv.innerHTML = \"<h1>Привет!</h1>\";\r\n//         mydiv.appendChild(newDiv);\r\n//     // Добавляем только что созданный элемент в дерево DOM\r\n\r\n//    // my_div = document.getElementById(\"container\");\r\n//     //document.body.insertBefore(newDiv, my_div);\r\n//     //  data.map((item)=>{\r\n//   //     mydiv.appendChild(  <div>{item.name}</div>);      \r\n//   //  })\r\n// }\r\n// window.getDataFromStorage=getDataFromStorage;\r\n\n\n//# sourceURL=webpack://npm/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;