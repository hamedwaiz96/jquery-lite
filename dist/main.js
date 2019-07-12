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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DomNodeCollection {\n\n\tconstructor(collection){\n\t\tthis.collection = collection;\n\t}\n\n\thtml(string=\"\"){\n\t\tif(string === \"\"){\n\t\t\tconst first_node = this.collection[i];\n\t\t\treturn first_node.innerHTML;\n\t\t} else {\n\t\t\tfor(let i = 0; i < this.collection.length; i++){\n\t\t\t\tconst node = this.collection[i];\n\t\t\t\tnode.innerHTML = string;\n\t\t\t}\n\t\t}\n\t}\n\n\tempty(){\n\t\tfor(let i = 0; i < this.collection.length; i++){\n\t\t\tconst the_node = this.collection[i];\n\t\t\tthe_node.innerHTML = \"\";\n\t\t}\n\t}\n\n\tappend(thing){\n\t\tif(typeof thing === \"string\"){\n\t\t\tfor(let k = 0; k < this.collection.length; k++){\n\t\t\t\tthis.collection[k].innerHTML += thing;\n\t\t\t} \n\t\t}\n\t\telse if(thing instanceof HTMLElement){\n\t\t\tfor(let k = 0; k < this.collection.length; k++){\n\t\t\t\tthis.collection[k].innerHTML += thing.outerHTML;\n\t\t\t}\n\t\t}\n\t\t else {\n\t\t\tfor(let k = 0; k < this.collection.length; k++){\n\t\t\t\tfor(let i = 0; i < thing.length; i++){\n\t\t\t\t\tthis.collection[k].innerHTML += thing[i].outerHTML;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\tattr(...args){\n\t\tif(args.length === 1){\n\t\t\treturn this.collection[0].getAttribute(args[0]);\n\t\t} else {\n\t\t\tfor(let i = 0; i < this.collection.length; i++){\n\t\t\t\tthis.collection[i].setAttribute(args[0], args[1]);\n\t\t\t}\n\t\t}\n\t}\n\n\taddClass(class1){\n\t\tfor(let i = 0; i < this.collection.length; i++){\n\t\t\tthis.collection[i].setAttribute(\"class\", class1);\n\t\t}\n\t}\n\n\tremoveClass(class2){\n\t\tfor(let i = 0; i < this.collection.length; i++){\n\t\t\tif(this.collection[i].className.indexOf(class2) !== -1){\n\t\t\t\tthis.collection[i].classList.remove(class2)\n\t\t\t}\n\t\t}\n\t}\n\n\tchildren(){\n\t\tlet node_list = [];\n\t\tfor(let i = 0; i < this.collection.length; i++){\n\t\t\tnode_list.push(this.collection[i].children);\n\t\t}\n\t\treturn new DomNodeCollection(node_list);\n\t}\n\n\tparent(){\n\t\tlet node_list = [];\n\t\tfor(let i = 0; i < this.collection.length; i++){\n\t\t\tif(this.collection[i].parentElement){\n\t\t\t\tnode_list.push(this.collection[i].parentElement);\n\t\t\t}\n\t\t\telse {\n\n\t\t\t}\n\t\t}\n\t\tif(node_list.length >= 1){\n\t\t\treturn new DomNodeCollection(node_list);\n\t\t}\n\t\telse {\n\t\t\treturn undefined;\n\t\t}\n\t}\n\n\tfind(sel){\n\t\tlet node_list = [];\n\t\tfor(let k = 0; k < this.collection[0].querySelectorAll(sel).length; k++){\n\t\t\tlet query = this.collection[0].querySelectorAll(sel)[k];\n\t\t\tnode_list.push(query);\n\t\t\t}\n\t\treturn new DomNodeCollection(node_list);\n\t\t}\n\n\tremove(){\n\t\tfor(let i = 0; this.collection.length; i++){\n\t\t\tlet el = this.collection[i];\n\t\t\tif(el === undefined){\n\t\t\t\tbreak;\n\t\t\t} else {\n\t\t\t\tel.parentNode.removeChild(el);\n\t\t\t}\n\t\t\t\n\t\t}\n\t}\n\n\ton(event, callback){\n\t\tfor(let i = 0; i < this.collection.length; i++){\n\t\t\tlet el = this.collection[i];\n\t\t\tel.addEventListener(event, callback);\n\t\t\tif(el[`${event}-call`] === undefined){\n\t\t\t\tel[`${event}-call`] = [];\n\t\t\t}\n\t\t\tel[`${event}-call`].push(callback);\n\t\t}\n\t}\n\n\toff(event){\n\t\tfor(let i = 0; i < this.collection.length; i++){\n\t\t\tlet el = this.collection[i];\n\t\t\tfor(let k = 0; k < el[`${event}-call`].length; k++){\n\t\t\t\tel.removeEventListener(event, el[`${event}-call`][i]);\n\t\t\t}\n\t\t\t\n\t\t}\n\t}\n\n\n}\n\nmodule.exports = DomNodeCollection;\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const DomNodeCollection = __webpack_require__(/*! ./dom_node_collection.js */ \"./src/dom_node_collection.js\");\n\nconst functionsReady = [];\n\nwindow.$l = (selector) => {\n\tif(selector instanceof HTMLElement){\n\t\tlet node_list = [selector];\n\t\treturn new DomNodeCollection(node_list);\n\t} \n\telse if(typeof selector === \"function\"){\n\t\tif(!(document.readyState === \"complete\")){\n\t\t\tfunctionsReady.push(selector);\n\t\t}\n\t\telse {\n\t\t\tselector();\n\t\t}\n\t} else {\n\t\tlet node_list = document.querySelectorAll(selector);\n\t\treturn new DomNodeCollection(Array.from(node_list));\n\t}\n\n}\n\n$l.extend = function(...args){\n\tfor(let i = 0; i < args.length; i++){\n\t\tfor(let k = 0; k < Object.keys(args[i]).length; k++){\n\t\t\tlet key = Object.keys(args[i])[k];\n\t\t\tlet value = Object.values(args[i])[k];\n\t\t\targs[0][key] = value;\n\t\t}\n\t}\n\treturn args[0];\n}\n\n$l.ajax = function(options){\n\tconst DEFAULTS = {\n\t\tmethod: 'GET',\n\t\turl: window.location.href,\n\t\tsuccess(data){console.log(data)},\n\t\terror: \"error(){console.error('An error occurred.')}\",\n\t\tcontentType: 'application/x-www-form-urlencoded; charset=UTF-8',\n\t\tdata: {}\n\t}\n\toptions = $l.extend(DEFAULTS, options);\n\tif(options.method === \"GET\"){\n\t\toptions.url += `?${urlData(options.data)}`;\n\t}\n\tconst xhr = new XMLHttpRequest();\n\txhr.open(options.method, options.url);\n\txhr.onload = function(s){\n\t\tif(xhr.status === 200){\n\t\t\toptions.success(xhr.response);\n\t\t} else {\n\t\t\toptions.error(xhr.response);\n\t\t}\n\t};\n\txhr.send(JSON.stringify(options.data));\n}\n\nurlData = (data) => {\n\tlet url = \"\";\n\tfor(let i = 0; i < Object.keys(data).length; i++){\n\t\tif(i === Object.keys(data).length - 1){\n\t\t\turl += `${Object.keys(data)[i]}=${Object.values(data)[i]}`;\n\t\t} else {\n\t\t\turl += `${Object.keys(data)[i]}=${Object.values(data)[i]}&`;\n\t\t}\n\t}\n\treturn url;\n}\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });