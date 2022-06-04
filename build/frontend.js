/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/frontend.scss":
/*!***************************!*\
  !*** ./src/frontend.scss ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ (function(module) {

module.exports = window["ReactDOM"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!*************************!*\
  !*** ./src/frontend.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _frontend_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./frontend.scss */ "./src/frontend.scss");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);









const divsToUpdate = document.querySelectorAll(".boilerplate-update-me");
divsToUpdate.forEach(div => {
  const data = JSON.parse(div.querySelector("pre").innerText);
  react_dom__WEBPACK_IMPORTED_MODULE_3___default().render((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Slideshow, data), div);
  div.classList.remove("boilerplate-update-me");
}); // function OurComponent(props) {
//   const [showSkyColor, setShowSkyColor] = useState(false)
//   const [showGrassColor, setShowGrassColor] = useState(false)
//   const [posts, setPosts] = useState([]);
//   var siteUrl = document.location;
//   console.log(siteUrl);
//   var url = 'http://localhost/theme1/wp-json/wp/v2/posts';
//   useEffect(() => {
//     fetch(url)
//     .then((response) => response.json())
//     .then((data) => setPosts(data)
//     )
//   },[]);
//   var imgUrl = 'https://unsplash.com/photos/ie9zNgph23Y';
//   var plink = '<?= $name="sumon" ?>';
//   return (
//     <div className="boilerplate-frontend">
//       <Card sx={{ width:400, padding:2, background:'#efefff', display:'flex', flexDirection:'row'}}>
//  <p>
//    {posts.slice(0,5).map((post) =>{
//      return(
//       <div>
//      <CardContent>
//      <Typography gutterBottom variant="h5" component="div">
//      <a href={post.link}> {post.title.rendered}</a>
//      </Typography>
//      <Typography variant="body2" color="text.secondary">
//      <p dangerouslySetInnerHTML={{__html:post.excerpt.rendered}}/>
//      </Typography>
//    </CardContent>
//       <img src={post.featured_image_src} alt="" style={{width:'200px', height:'200px'}}/>
//       </div>
//      )
//    })}
//  </p>
// </Card>
//     </div>
//   )
// }
// const colors = ["#0088FE", "#00C49F", "#FFBB28"];

const delay = 2500;

function Slideshow() {
  const [index, setIndex] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(0);
  const timeoutRef = react__WEBPACK_IMPORTED_MODULE_2___default().useRef(null);
  const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  var siteUrl = document.location;
  console.log(siteUrl);
  var url = 'http://localhost/theme1/wp-json/wp/v2/posts';
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    fetch(url).then(response => response.json()).then(data => setPosts(data));
  }, []);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => setIndex(prevIndex => prevIndex === posts.length - 1 ? 0 : prevIndex + 1), delay);
    return () => {
      resetTimeout();
    };
  }, [index]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "slideshow"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "slideshowSlider",
    style: {
      transform: `translate3d(${-index * 100}%, 0, 0)`
    }
  }, posts.slice(0, 5).map(post => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "slide",
    key: index
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: post.featured_image_src,
    alt: ""
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "text-content"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: post.link
  }, " ", post.title.rendered)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    dangerouslySetInnerHTML: {
      __html: post.excerpt.rendered
    }
  }))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "slideshowDots"
  }, posts.slice(0, 5).map((_, idx) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: idx,
    className: `slideshowDot${index === idx ? " active" : ""}`,
    onClick: () => {
      setIndex(idx);
    }
  }))));
}
}();
/******/ })()
;
//# sourceMappingURL=frontend.js.map