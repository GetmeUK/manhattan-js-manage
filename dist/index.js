(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ManhattanManage"] = factory();
	else
		root["ManhattanManage"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ManhattanEssentials=t():e.ManhattanEssentials=t()}(this,function(){return function(e){function __webpack_require__(r){if(t[r])return t[r].exports;var n=t[r]={exports:{},id:r,loaded:!1};return e[r].call(n.exports,n,n.exports,__webpack_require__),n.loaded=!0,n.exports}var t={};return __webpack_require__.m=e,__webpack_require__.c=t,__webpack_require__.p="",__webpack_require__(0)}([function(e,t,r){e.exports=r(1)},function(e,t){var r,n,o,u,c,i,a,s,l,p,f=[].indexOf||function(e){for(var t=0,r=this.length;t<r;t++)if(t in this&&this[t]===e)return t;return-1};r=function(e,t){var r;if(e.closest)return e.closest(t);for(r=e.matches||e.webkitMatchesSelector||e.mozMatchesSelector||e.msMatchesSelector;e&&!r.call(e,t);)e=e.parentElement;return e},o=function(e,t){var r,n,o;null==t&&(t={}),r=document.createElement(e);for(n in t)o=t[n],f.call(r,n)>=0?r[n]=o:r.setAttribute(n,o);return r},l=function(e,t){return null==t&&(t=document),Array.prototype.slice.call(t.querySelectorAll(e))},p=function(e,t){return null==t&&(t=document),t.querySelector(e)},c=function(e,t,r){var n,o,u;null==r&&(r={}),n=document.createEvent("Event"),n.initEvent(t,!0,!0);for(o in r)u=r[o],n[o]=u;return e.dispatchEvent(n)},a=function(e,t){var r,n,o,u;u=[];for(n in t)o=t[n],u.push(function(){var t,u,c,i;for(c=n.split(/\s+/),i=[],t=0,u=c.length;t<u;t++)r=c[t],i.push(e.removeEventListener(r,o));return i}());return u},s=function(e,t){var r,n,o,u;u=[];for(n in t)o=t[n],u.push(function(){var t,u,c,i;for(c=n.split(/\s+/),i=[],t=0,u=c.length;t<u;t++)r=c[t],i.push(e.addEventListener(r,o));return i}());return u},n=function(e,t,r,n,o){var u,c,i,a;null==o&&(o="data-"),i=[];for(c in t)a=t[c],e[c]=a,r.hasOwnProperty(c)&&(e[c]=r[c]),n&&(u=o+c.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),n.hasAttribute(u)?"number"==typeof a?i.push(e[c]=parseInt(n.getAttribute(u))):a===!1?i.push(e[c]=!0):i.push(e[c]=n.getAttribute(u)):i.push(void 0));return i},i=function(e){return e.replace(/[\^\$\\\.\*\+\?\(\)\[\]\{\}\|]/g,"\\$&")},u=function(e){var t;try{document.querySelector(e)}catch(e){return t=e,!1}return!0},e.exports={closest:r,create:o,one:p,many:l,dispatch:c,ignore:a,listen:s,config:n,escapeRegExp:i,cssSelectorSupported:u}}])});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var $, core, flashes, forms, init, nav, results;

$ = __webpack_require__(0);

core = __webpack_require__(5);

flashes = __webpack_require__(6);

forms = __webpack_require__(7);

nav = __webpack_require__(8);

results = __webpack_require__(9);

init = function() {
  flashes.init();
  forms.init();
  nav.init();
  results.init();
  return core.init();
};

module.exports = {
  init: init,
  core: core,
  flashes: flashes,
  forms: forms,
  nav: nav,
  results: results
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ManhattanAssets"] = factory();
	else
		root["ManhattanAssets"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(12);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var $, Acceptor, Asset, Field, Monitor, Uploader, Viewer;

	$ = __webpack_require__(6);

	Acceptor = __webpack_require__(7).Acceptor;

	Asset = __webpack_require__(8).Asset;

	Monitor = __webpack_require__(9).Monitor;

	Uploader = __webpack_require__(10).Uploader;

	Viewer = __webpack_require__(11).Viewer;

	Field = (function() {
	  Field.clsPrefix = 'data-mh-asset-field--';

	  function Field(input, options) {
	    if (options == null) {
	      options = {};
	    }
	    $.config(this, {
	      endpoint: '/manage/upload-asset',
	      label: 'Select a file...'
	    }, options, input, this.constructor.clsPrefix);
	    this._dom = {};
	    this._dom.input = input;
	    this._dom.input.__mh_asset_field = this;
	    this._dom.field = $.create('div', {
	      'class': this._bem('mh-asset-field')
	    });
	    input.parentNode.insertBefore(this._dom.field, input);
	    Object.defineProperty(this, 'asset', {
	      get: (function(_this) {
	        return function() {
	          return _this._asset;
	        };
	      })(this),
	      set: (function(_this) {
	        return function(value) {
	          _this._asset = value;
	          if (_this._asset) {
	            _this.input.value = JSON.stringify(_this._asset.toJSONType());
	          } else {
	            _this.input.value = '';
	          }
	          _this._update();
	          return $.dispatch(_this.field, _this._et('change'), {
	            asset: _this.asset
	          });
	        };
	      })(this)
	    });
	    Object.defineProperty(this, 'field', {
	      value: this._dom.field
	    });
	    Object.defineProperty(this, 'input', {
	      value: this._dom.input
	    });
	    Object.defineProperty(this, 'upload', {
	      get: (function(_this) {
	        return function() {
	          return _this._upload;
	        };
	      })(this)
	    });
	    this.input.style['display'] = 'none';
	    this._asset = null;
	    if (this.input.value) {
	      this._asset = Asset.fromJSONType(JSON.parse(this.input.value));
	    }
	    this._uploader = null;
	    this._upload = null;
	    this._update();
	  }

	  Field.prototype._bem = function(block, element, modifier) {
	    var name;
	    if (element == null) {
	      element = '';
	    }
	    if (modifier == null) {
	      modifier = '';
	    }
	    name = block;
	    if (element) {
	      name = name + "__" + element;
	    }
	    if (modifier) {
	      name = name + "--" + modifier;
	    }
	    return name;
	  };

	  Field.prototype._et = function(eventName) {
	    return "mh-assets--" + eventName;
	  };

	  Field.prototype._update = function() {
	    var acceptor, monitor, viewer;
	    this.field.innerHTML = '';
	    if (this.asset) {
	      viewer = new Viewer(this.asset);
	      $.listen(viewer.view, {
	        'mh-assets--remove-asset': (function(_this) {
	          return function() {
	            return _this.asset = null;
	          };
	        })(this)
	      });
	      return this.field.appendChild(viewer.view);
	    } else if (this.upload) {
	      monitor = new Monitor(this._uploader, this.upload);
	      return this.field.appendChild(monitor.monitor);
	    } else {
	      acceptor = new Acceptor(this.label);
	      this.field.appendChild(acceptor.acceptor);
	      this._uploader = new Uploader(acceptor.input, {
	        endpoint: this.endpoint
	      });
	      return $.listen(acceptor.input, {
	        'mh-assets--upload-abort': (function(_this) {
	          return function(ev) {
	            _this._upload = null;
	            return _this._update();
	          };
	        })(this),
	        'mh-assets--upload-error': (function(_this) {
	          return function(ev) {
	            _this._upload = null;
	            return _this._update();
	          };
	        })(this),
	        'mh-assets--upload-start': (function(_this) {
	          return function(ev) {
	            _this._upload = ev.ref;
	            return _this._update();
	          };
	        })(this),
	        'mh-assets--upload-success': (function(_this) {
	          return function(ev) {
	            _this._upload = null;
	            return _this.asset = ev.asset;
	          };
	        })(this)
	      });
	    }
	  };

	  return Field;

	})();

	module.exports = {
	  Field: Field
	};


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ManhattanEssentials=t():e.ManhattanEssentials=t()}(this,function(){return function(e){function __webpack_require__(r){if(t[r])return t[r].exports;var n=t[r]={exports:{},id:r,loaded:!1};return e[r].call(n.exports,n,n.exports,__webpack_require__),n.loaded=!0,n.exports}var t={};return __webpack_require__.m=e,__webpack_require__.c=t,__webpack_require__.p="",__webpack_require__(0)}([function(e,t,r){e.exports=r(1)},function(e,t){var r,n,o,u,c,i,a,s,l,p,f=[].indexOf||function(e){for(var t=0,r=this.length;t<r;t++)if(t in this&&this[t]===e)return t;return-1};r=function(e,t){var r;if(e.closest)return e.closest(t);for(r=e.matches||e.webkitMatchesSelector||e.mozMatchesSelector||e.msMatchesSelector;e&&!r.call(e,t);)e=e.parentElement;return e},o=function(e,t){var r,n,o;null==t&&(t={}),r=document.createElement(e);for(n in t)o=t[n],f.call(r,n)>=0?r[n]=o:r.setAttribute(n,o);return r},l=function(e,t){return null==t&&(t=document),Array.prototype.slice.call(t.querySelectorAll(e))},p=function(e,t){return null==t&&(t=document),t.querySelector(e)},c=function(e,t,r){var n,o,u;null==r&&(r={}),n=document.createEvent("Event"),n.initEvent(t,!0,!0);for(o in r)u=r[o],n[o]=u;return e.dispatchEvent(n)},a=function(e,t){var r,n,o,u;u=[];for(n in t)o=t[n],u.push(function(){var t,u,c,i;for(c=n.split(/\s+/),i=[],t=0,u=c.length;t<u;t++)r=c[t],i.push(e.removeEventListener(r,o));return i}());return u},s=function(e,t){var r,n,o,u;u=[];for(n in t)o=t[n],u.push(function(){var t,u,c,i;for(c=n.split(/\s+/),i=[],t=0,u=c.length;t<u;t++)r=c[t],i.push(e.addEventListener(r,o));return i}());return u},n=function(e,t,r,n,o){var u,c,i,a;null==o&&(o="data-"),i=[];for(c in t)a=t[c],e[c]=a,r.hasOwnProperty(c)&&(e[c]=r[c]),n&&(u=o+c.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),n.hasAttribute(u)?"number"==typeof a?i.push(e[c]=parseInt(n.getAttribute(u))):a===!1?i.push(e[c]=!0):i.push(e[c]=n.getAttribute(u)):i.push(void 0));return i},i=function(e){return e.replace(/[\^\$\\\.\*\+\?\(\)\[\]\{\}\|]/g,"\\$&")},u=function(e){var t;try{document.querySelector(e)}catch(e){return t=e,!1}return!0},e.exports={closest:r,create:o,one:p,many:l,dispatch:c,ignore:a,listen:s,config:n,escapeRegExp:i,cssSelectorSupported:u}}])});

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var $, Acceptor;

	$ = __webpack_require__(6);

	Acceptor = (function() {
	  Acceptor._counter = 0;

	  function Acceptor(label) {
	    if (label == null) {
	      label = 'Select a file...';
	    }
	    this._dom = {};
	    this._dom.acceptor = $.create('div', {
	      'class': this._bem('mh-assets-acceptor')
	    });
	    this._dom.input = $.create('input', {
	      'class': this._bem('mh-assets-acceptor', 'input'),
	      'type': 'file',
	      'name': "acceptor__" + (this._newId())
	    });
	    this._dom.acceptor.appendChild(this._dom.input);
	    this._dom.label = $.create('div', {
	      'class': this._bem('mh-assets-acceptor', 'label')
	    });
	    this._dom.label.textContent = label;
	    this._dom.acceptor.appendChild(this._dom.label);
	    Object.defineProperty(this, 'acceptor', {
	      value: this._dom.acceptor
	    });
	    Object.defineProperty(this, 'input', {
	      value: this._dom.input
	    });
	  }

	  Acceptor.prototype._bem = function(block, element, modifier) {
	    var name;
	    if (element == null) {
	      element = '';
	    }
	    if (modifier == null) {
	      modifier = '';
	    }
	    name = block;
	    if (element) {
	      name = name + "__" + element;
	    }
	    if (modifier) {
	      name = name + "--" + modifier;
	    }
	    return name;
	  };

	  Acceptor.prototype._newId = function() {
	    Acceptor._counter += 1;
	    return Acceptor._counter;
	  };

	  return Acceptor;

	})();

	module.exports = {
	  Acceptor: Acceptor
	};


/***/ },
/* 8 */
/***/ function(module, exports) {

	var Asset, AssetMeta;

	Asset = (function() {
	  function Asset(key, filename, type, contentType, urls, coreMeta, userMeta, variations) {
	    this._key = key;
	    this._filename = filename;
	    this._type = type;
	    this._contentType = contentType;
	    this._urls = urls;
	    this.meta = new AssetMeta(coreMeta, userMeta);
	    this._variations = variations;
	    Object.defineProperty(this, 'key', {
	      value: this._key
	    });
	    Object.defineProperty(this, 'filename', {
	      value: this._filename
	    });
	    Object.defineProperty(this, 'type', {
	      value: this._type
	    });
	    Object.defineProperty(this, 'contentType', {
	      value: this._contentType
	    });
	    Object.defineProperty(this, 'urls', {
	      get: (function(_this) {
	        return function() {
	          var k, ref, v;
	          urls = {};
	          ref = _this._urls;
	          for (k in ref) {
	            v = ref[k];
	            urls[k] = v;
	          }
	          return urls;
	        };
	      })(this)
	    });
	  }

	  Asset.prototype.toJSONType = function() {
	    return {
	      'key': this.key,
	      'filename': this.filename,
	      'type': this.type,
	      'content_type': this.contentType,
	      'url': this.urls.origin,
	      'core_meta': this.meta.getCoreMeta(),
	      'user_meta': this.meta.getUserMeta(),
	      'variations': this._variations
	    };
	  };

	  Asset.fromJSONType = function(data) {
	    var urls;
	    urls = {
	      'origin': data.url
	    };
	    if (data.type === 'image') {
	      if (data.variations) {
	        if (data.variations['--base--']) {
	          urls.draft = data.variations['--base--'].url;
	        }
	        if (data.variations['--thumb--']) {
	          urls.thumb = data.variations['--thumb--'].url;
	        }
	      }
	    }
	    return new Asset(data.key, data.filename, data.type, data.content_type, urls, data.core_meta, data.user_meta, data.variations);
	  };

	  return Asset;

	})();

	AssetMeta = (function() {
	  function AssetMeta(coreMeta, userMeta) {
	    var _, getter, k, name, ref, ref1, setter, v;
	    this._coreMeta = coreMeta || {};
	    this._coreOverrides = {};
	    getter = (function(_this) {
	      return function(name) {
	        _this = _this;
	        return function() {
	          if (_this._coreOverrides[name] !== void 0) {
	            return _this._coreOverrides[name];
	          }
	          if (_this._coreMeta[name] !== void 0) {
	            return _this._coreMeta[name];
	          }
	        };
	      };
	    })(this);
	    setter = (function(_this) {
	      return function(name) {
	        _this = _this;
	        return function(value) {
	          return _this._coreOverrides[name] = value;
	        };
	      };
	    })(this);
	    ref = this._coreMeta;
	    for (name in ref) {
	      _ = ref[name];
	      Object.defineProperty(this, name, {
	        get: getter(name),
	        set: setter(name)
	      });
	    }
	    ref1 = userMeta || {};
	    for (k in ref1) {
	      v = ref1[k];
	      this[k] = v;
	    }
	  }

	  AssetMeta.prototype.getCoreMeta = function() {
	    return JSON.parse(JSON.stringify(this._coreMeta));
	  };

	  AssetMeta.prototype.getUserMeta = function() {
	    var data, k, ref, v;
	    data = JSON.parse(JSON.stringify(this._coreOverrides));
	    ref = this;
	    for (k in ref) {
	      v = ref[k];
	      if (this.hasOwnProperty(k) && !this[k] instanceof Function) {
	        data[k] = v;
	      }
	    }
	    return JSON.parse(JSON.stringify(data));
	  };

	  return AssetMeta;

	})();

	module.exports = {
	  Asset: Asset
	};


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var $, Monitor;

	$ = __webpack_require__(6);

	Monitor = (function() {
	  function Monitor(uploader, upload) {
	    this._uploader = uploader;
	    this._upload = upload;
	    this._dom = {};
	    this._dom.monitor = $.create('div', {
	      'class': this._bem('mh-assets-monitor')
	    });
	    Object.defineProperty(this, 'uploader', {
	      value: this._uploader
	    });
	    Object.defineProperty(this, 'upload', {
	      value: this._upload
	    });
	    Object.defineProperty(this, 'monitor', {
	      value: this._dom.monitor
	    });
	    $.listen(this.uploader.input, {
	      'mh-assets--upload-progress': (function(_this) {
	        return function(ev) {
	          if (ev.ref !== _this.upload) {
	            return;
	          }
	          _this._dom.gauge.setAttribute('data-mh-progress', (parseInt(ev.progress * 100)) + "%");
	          return _this._dom.progress.style['width'] = (ev.progress * 100) + "%";
	        };
	      })(this),
	      'mh-assets--upload-end': (function(_this) {
	        return function(ev) {
	          if (ev.ref !== _this.upload) {
	            return;
	          }
	          _this.monitor.classList.add(_this._bem('mh-asset-monitor', '', 'complete'));
	          return $.dispatch(_this.monitor, _this._et('monitor-complete'));
	        };
	      })(this)
	    });
	    this._template();
	  }

	  Monitor.prototype._bem = function(block, element, modifier) {
	    var name;
	    if (element == null) {
	      element = '';
	    }
	    if (modifier == null) {
	      modifier = '';
	    }
	    name = block;
	    if (element) {
	      name = name + "__" + element;
	    }
	    if (modifier) {
	      name = name + "--" + modifier;
	    }
	    return name;
	  };

	  Monitor.prototype._et = function(eventName) {
	    return "mh-assets--" + eventName;
	  };

	  Monitor.prototype._template = function() {
	    this._dom.gauge = $.create('div', {
	      'class': this._bem('mh-assets-monitor', 'gauge'),
	      'data-mh-progress': '0%'
	    });
	    this.monitor.appendChild(this._dom.gauge);
	    this._dom.progress = $.create('div', {
	      'class': this._bem('mh-assets-monitor', 'progress')
	    });
	    this._dom.gauge.appendChild(this._dom.progress);
	    this._dom.cancel = $.create('div', {
	      'class': this._bem('mh-assets-monitor', 'cancel')
	    });
	    this.monitor.appendChild(this._dom.cancel);
	    return $.listen(this._dom.cancel, {
	      'click': (function(_this) {
	        return function(ev) {
	          ev.preventDefault();
	          return _this.uploader.cancel(_this.upload);
	        };
	      })(this)
	    });
	  };

	  return Monitor;

	})();

	module.exports = {
	  Monitor: Monitor
	};


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var $, Asset, Uploader;

	$ = __webpack_require__(6);

	Asset = __webpack_require__(8).Asset;

	Uploader = (function() {
	  function Uploader(input, options) {
	    if (options == null) {
	      options = {};
	    }
	    this._dom = {};
	    this._dom.input = input;
	    this._dom.input.__mh_assets_uploader = this;
	    this._uploads = {};
	    this._queued_uploads = [];
	    Object.defineProperty(this, 'input', {
	      value: this._dom.input
	    });
	    Object.defineProperty(this, 'uploadCount', {
	      get: (function(_this) {
	        return function() {
	          var _, ref;
	          return ((function() {
	            var ref1, results;
	            ref1 = this._uploads;
	            results = [];
	            for (ref in ref1) {
	              _ = ref1[ref];
	              results.push(ref);
	            }
	            return results;
	          }).call(_this)).length;
	        };
	      })(this)
	    });
	    $.config(this, {
	      allowMultiple: false,
	      endpoint: '/cms/upload-asset',
	      maxConcurrentUploads: 2
	    }, options);
	    this._behaviours = {};
	    $.config(this._behaviours, {
	      formData: 'manhattan',
	      response: 'manhattan'
	    }, options);
	    if (this.allowMultiple) {
	      this.input.setAttribute('multiple', true);
	    }
	    $.listen(this.input, {
	      'change': (function(_this) {
	        return function(ev) {
	          var file, i, len, ref1;
	          if (_this.allowMultiple) {
	            ref1 = ev.target.files;
	            for (i = 0, len = ref1.length; i < len; i++) {
	              file = ref1[i];
	              _this._upload(file);
	            }
	          } else {
	            _this._upload(ev.target.files[0]);
	          }
	          _this.input.value = '';
	          if (_this.input.value) {
	            _this.input.type = 'text';
	            return _this.input.type = 'file';
	          }
	        };
	      })(this)
	    });
	  }

	  Uploader.prototype.cancel = function(ref) {
	    var _, req, results;
	    if (ref) {
	      if (this._uploads[ref]) {
	        return ref.abort();
	      }
	    } else {
	      results = [];
	      for (req in uploads) {
	        _ = uploads[req];
	        results.push(req.abort());
	      }
	      return results;
	    }
	  };

	  Uploader.prototype.progress = function(ref) {
	    var _, info, progress;
	    if (ref) {
	      if (this._uploads[ref]) {
	        return this._uploads[ref].progress;
	      }
	    } else {
	      progress = 0;
	      for (_ in uploads) {
	        info = uploads[_];
	        progress += info.progress;
	      }
	      return progress / Math.max(1, this.uploadCount);
	    }
	  };

	  Uploader.prototype._clear = function(ref) {
	    var queued;
	    if (this._uploads[ref]) {
	      delete this._uploads[ref];
	    }
	    if (this._queued_uploads.length > 0) {
	      queued = this._queued_uploads.shift();
	      this._start_upload(queued[0], queued[1]);
	    }
	    return $.dispatch(this.input, this._et('upload-end'), {
	      'ref': ref
	    });
	  };

	  Uploader.prototype._start_upload = function(req, formData) {
	    this._uploads[req] = {
	      'progress': 0
	    };
	    $.dispatch(this.input, this._et('upload-start'), {
	      'ref': req
	    });
	    req.open('POST', this.endpoint, true);
	    return req.send(formData);
	  };

	  Uploader.prototype._et = function(eventName) {
	    return "mh-assets--" + eventName;
	  };

	  Uploader.prototype._on_abort = function(ref) {
	    if (!this._uploads[ref]) {
	      return;
	    }
	    $.dispatch(this.input, this._et('upload-abort'), {
	      'ref': ref
	    });
	    return this._clear(ref);
	  };

	  Uploader.prototype._on_error = function(ref, reason) {
	    if (reason == null) {
	      reason = '';
	    }
	    if (!this._uploads[ref]) {
	      return;
	    }
	    $.dispatch(this.input, this._et('upload-error'), {
	      'ref': ref,
	      'reason': reason
	    });
	    return this._clear(ref);
	  };

	  Uploader.prototype._on_progress = function(ref, progress) {
	    if (!this._uploads[ref]) {
	      return;
	    }
	    this._uploads[ref].progress = progress;
	    return $.dispatch(this.input, this._et('upload-progress'), {
	      'ref': ref,
	      'progress': progress
	    });
	  };

	  Uploader.prototype._on_success = function(ref, asset) {
	    if (!this._uploads[ref]) {
	      return;
	    }
	    $.dispatch(this.input, this._et('upload-success'), {
	      'ref': ref,
	      'asset': asset
	    });
	    return this._clear(ref);
	  };

	  Uploader.prototype._upload = function(file) {
	    var behaviour, behaviourName, formData, on_abort, on_error, on_load, on_progress, req;
	    behaviourName = this._behaviours.formData;
	    behaviour = this.constructor.behaviours.formData[behaviourName];
	    formData = behaviour(this, file);
	    req = new XMLHttpRequest();
	    on_progress = function(uploader, req) {
	      return function(ev) {
	        return uploader._on_progress(req, ev.loaded / ev.total);
	      };
	    };
	    req.upload.addEventListener('progress', on_progress(this, req));
	    on_load = function(uploader, req) {
	      return function(ev) {
	        var assetOrError, behaviours, res;
	        res = ev.target.responseText;
	        behaviourName = uploader._behaviours.response;
	        behaviours = uploader.constructor.behaviours;
	        behaviour = behaviours.response[behaviourName];
	        assetOrError = behaviour(this, req.responseText);
	        if (assetOrError instanceof Asset) {
	          return uploader._on_success(req, assetOrError);
	        } else {
	          return uploader._on_error(req, assetOrError.message);
	        }
	      };
	    };
	    req.addEventListener('load', on_load(this, req));
	    on_error = function(uploader, req) {
	      return function(ev) {
	        return uploader._on_error(req);
	      };
	    };
	    req.addEventListener('error', on_error(this, req));
	    on_abort = function(uploader, req) {
	      return function(ev) {
	        return uploader._on_abort(req);
	      };
	    };
	    req.addEventListener('abort', on_abort(this, req));
	    if (this.uploadCount < this.maxConcurrentUploads) {
	      return this._start_upload(req, formData);
	    } else {
	      return this._queued_uploads.push([req, formData]);
	    }
	  };

	  Uploader.behaviours = {
	    formData: {
	      'manhattan': function(uploader, file) {
	        var csfrToken, formData;
	        formData = new FormData();
	        formData.append('file', file);
	        csfrToken = $.one('[name="csrf_token"]', uploader.input.form);
	        if (csfrToken) {
	          formData.append('csrf_token', csfrToken.value);
	        }
	        return formData;
	      }
	    },
	    response: {
	      'manhattan': function(uploader, raw_res) {
	        var e, res;
	        try {
	          res = JSON.parse(raw_res);
	        } catch (error) {
	          e = error;
	          return new Error('Unable to parse response');
	        }
	        if (res.status === 'success') {
	          return Asset.fromJSONType(res.payload.asset);
	        } else {
	          return new Error(res.payload.reason);
	        }
	      }
	    }
	  };

	  return Uploader;

	})();

	module.exports = {
	  Uploader: Uploader
	};


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var $, Viewer;

	$ = __webpack_require__(6);

	Viewer = (function() {
	  function Viewer(asset) {
	    this._asset = asset;
	    this._dom = {};
	    this._dom.view = $.create('div', {
	      'class': this._bem('mh-assets-view')
	    });
	    Object.defineProperty(this, 'asset', {
	      value: this._asset
	    });
	    Object.defineProperty(this, 'view', {
	      value: this._dom.view
	    });
	    this._template();
	    this._populate();
	  }

	  Viewer.prototype._bem = function(block, element, modifier) {
	    var name;
	    if (element == null) {
	      element = '';
	    }
	    if (modifier == null) {
	      modifier = '';
	    }
	    name = block;
	    if (element) {
	      name = name + "__" + element;
	    }
	    if (modifier) {
	      name = name + "--" + modifier;
	    }
	    return name;
	  };

	  Viewer.prototype._et = function(eventName) {
	    return "mh-assets--" + eventName;
	  };

	  Viewer.prototype._populate = function() {
	    var size, unit;
	    if (this.asset.type === 'image') {
	      this.view.classList.add(this._bem('mh-assets-view', '', 'image'));
	    } else {
	      this.view.classList.add(this._bem('mh-assets-view', '', 'file'));
	    }
	    if (this.asset.type === 'image') {
	      this._dom.thumb.style['background-image'] = "url(" + this.asset.urls.thumb + ")";
	    } else {
	      this._dom.icon.setAttribute('data-mh-content-type', this.asset.contentType);
	    }
	    this._dom.filename.textContent = this.asset.filename;
	    if (this.asset.meta.length) {
	      size = this.asset.meta.length / 1000;
	      unit = 'kb';
	      if (size > 1000) {
	        size = size / 1000;
	        unit = 'mb';
	      }
	      size = size.toFixed(1);
	      size = size.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	      this._dom.fileSize.textContent = "" + size + unit;
	    }
	    return this._dom.download.setAttribute('href', this.asset.urls.origin);
	  };

	  Viewer.prototype._template = function() {
	    this._dom.content = $.create('div', {
	      'class': this._bem('mh-assets-view', 'content')
	    });
	    this.view.appendChild(this._dom.content);
	    this._dom.icon = $.create('div', {
	      'class': this._bem('mh-assets-view', 'icon')
	    });
	    this._dom.content.appendChild(this._dom.icon);
	    this._dom.thumb = $.create('div', {
	      'class': this._bem('mh-assets-view', 'thumb')
	    });
	    this._dom.content.appendChild(this._dom.thumb);
	    this._dom.info = $.create('div', {
	      'class': this._bem('mh-assets-view', 'info')
	    });
	    this.view.appendChild(this._dom.info);
	    this._dom.filename = $.create('div', {
	      'class': this._bem('mh-assets-view', 'filename')
	    });
	    this._dom.info.appendChild(this._dom.filename);
	    this._dom.fileSize = $.create('div', {
	      'class': this._bem('mh-assets-view', 'file-size')
	    });
	    this._dom.info.appendChild(this._dom.fileSize);
	    this._dom.actions = $.create('div', {
	      'class': this._bem('mh-assets-view', 'actions')
	    });
	    this.view.appendChild(this._dom.actions);
	    this._dom.download = $.create('a', {
	      'download': true,
	      'target': '_blank'
	    });
	    this._dom.download.classList.add(this._bem('mh-assets-view', 'action'));
	    this._dom.download.classList.add(this._bem('mh-assets-view', 'action', 'download'));
	    this._dom.download.textContent = 'Download';
	    this._dom.actions.appendChild(this._dom.download);
	    this._dom.remove = $.create('a', {
	      'href': '#'
	    });
	    this._dom.remove.classList.add(this._bem('mh-assets-view', 'action'));
	    this._dom.remove.classList.add(this._bem('mh-assets-view', 'action', 'remove'));
	    this._dom.remove.textContent = 'Remove';
	    this._dom.actions.appendChild(this._dom.remove);
	    return $.listen(this._dom.remove, {
	      'click': (function(_this) {
	        return function(ev) {
	          ev.preventDefault();
	          return $.dispatch(_this.view, _this._et('remove-asset'), {
	            asset: _this.asset
	          });
	        };
	      })(this)
	    });
	  };

	  return Viewer;

	})();

	module.exports = {
	  Viewer: Viewer
	};


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var Field, Gallery;

	Field = __webpack_require__(5).Field;

	Gallery = __webpack_require__(13).Gallery;

	module.exports = {
	  Field: Field,
	  Gallery: Gallery
	};


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var $, Acceptor, Asset, Gallery, Monitor, Uploader, Viewer;

	$ = __webpack_require__(6);

	Acceptor = __webpack_require__(7).Acceptor;

	Asset = __webpack_require__(8).Asset;

	Monitor = __webpack_require__(9).Monitor;

	Uploader = __webpack_require__(10).Uploader;

	Viewer = __webpack_require__(11).Viewer;

	Gallery = (function() {
	  Gallery.clsPrefix = 'data-mh-asset-gallery--';

	  function Gallery(input, options) {
	    var i, len, raw_asset, ref;
	    if (options == null) {
	      options = {};
	    }
	    $.config(this, {
	      endpoint: '/manage/upload-asset',
	      label: 'Select a file...'
	    }, options, input, this.constructor.clsPrefix);
	    this._dom = {};
	    this._dom.input = input;
	    this._dom.input.__mh_asset_field = this;
	    Object.defineProperty(this, 'input', {
	      value: this._dom.input
	    });
	    this._assets = [];
	    if (this.input.value) {
	      ref = JSON.parse(this.input.value);
	      for (i = 0, len = ref.length; i < len; i++) {
	        raw_asset = ref[i];
	        this._assets.push(Asset.fromJSONType(raw_asset));
	      }
	    }
	    this._update();
	  }

	  Gallery.prototype._bem = function(block, element, modifier) {
	    var name;
	    if (element == null) {
	      element = '';
	    }
	    if (modifier == null) {
	      modifier = '';
	    }
	    name = block;
	    if (element) {
	      name = name + "__" + element;
	    }
	    if (modifier) {
	      name = name + "--" + modifier;
	    }
	    return name;
	  };

	  Gallery.prototype._et = function(eventName) {
	    return "mh-assets--" + eventName;
	  };

	  Gallery.prototype._update = function() {
	    return console.log('Update');
	  };

	  return Gallery;

	})();

	module.exports = {
	  Gallery: Gallery
	};


/***/ }
/******/ ])
});
;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ManhattanDatePicker"] = factory();
	else
		root["ManhattanDatePicker"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(2);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "date-picker.css";

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var $, BasePicker, Calendar, DatePicker, DateRangePicker,
	  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
	  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	  hasProp = {}.hasOwnProperty;

	$ = __webpack_require__(3);

	Calendar = __webpack_require__(4).Calendar;

	BasePicker = (function() {
	  function BasePicker() {
	    this.close = bind(this.close, this);
	    this._isOpen = false;
	    Object.defineProperty(this, 'isOpen', {
	      get: (function(_this) {
	        return function() {
	          return _this._isOpen;
	        };
	      })(this)
	    });
	    $.listen(window, {
	      'fullscreenchange orientationchange resize': (function(_this) {
	        return function(ev) {
	          if (_this.isOpen) {
	            return _this.close('resize');
	          }
	        };
	      })(this)
	    });
	  }

	  BasePicker.prototype.close = function(input, block, reason) {
	    if (!this.isOpen) {
	      return;
	    }
	    this._dom.picker.classList.add(this._bem(block, '', 'closed'));
	    this._isOpen = false;
	    return $.dispatch(input, this._et('close'), {
	      'reason': reason
	    });
	  };

	  BasePicker.prototype._bem = function(block, element, modifier) {
	    var name;
	    if (element == null) {
	      element = '';
	    }
	    if (modifier == null) {
	      modifier = '';
	    }
	    name = block;
	    if (element) {
	      name = name + "__" + element;
	    }
	    if (modifier) {
	      name = name + "--" + modifier;
	    }
	    return name;
	  };

	  BasePicker.prototype._track = function(input) {
	    var left, rect, top;
	    rect = input.getBoundingClientRect();
	    top = rect.top += window.scrollY;
	    left = rect.left += window.scrollX;
	    this._dom.picker.style.top = (top + rect.height) + "px";
	    return this._dom.picker.style.left = left + "px";
	  };

	  return BasePicker;

	})();

	DatePicker = (function(superClass) {
	  extend(DatePicker, superClass);

	  DatePicker.clsPrefix = 'data-mh-date-picker--';

	  function DatePicker(input, options) {
	    var eventListeners, proxyOptions;
	    if (options == null) {
	      options = {};
	    }
	    this.open = bind(this.open, this);
	    DatePicker.__super__.constructor.call(this);
	    $.config(this, {
	      closeOnPick: false,
	      format: 'human_en',
	      parsers: ['human_en', 'dmy', 'iso']
	    }, options, input, this.constructor.clsPrefix);
	    this._behaviours = {};
	    $.config(this._behaviours, {
	      input: 'set-value'
	    }, options, input, this.constructor.clsPrefix);
	    this._dom = {};
	    this._dom.input = input;
	    this._dom.input.__mh_datePicker = this;
	    this._dom.picker = $.create('div', {
	      'class': [this._bem('mh-date-picker'), this._bem('mh-date-picker', '', 'closed')].join(' ')
	    });
	    document.body.appendChild(this._dom.picker);
	    proxyOptions = Calendar.proxyOptions(options, input);
	    this._calendar = new Calendar(this._dom.picker, proxyOptions);
	    Object.defineProperty(this, 'calendar', {
	      get: (function(_this) {
	        return function() {
	          return _this._calendar;
	        };
	      })(this)
	    });
	    Object.defineProperty(this, 'input', {
	      value: this._dom.input
	    });
	    $.listen(this.input, {
	      'blur': (function(_this) {
	        return function() {
	          return _this.close('blur');
	        };
	      })(this),
	      'click': (function(_this) {
	        return function() {
	          return _this.open();
	        };
	      })(this),
	      'focus': (function(_this) {
	        return function() {
	          return _this.open();
	        };
	      })(this),
	      'change': (function(_this) {
	        return function(ev) {
	          var date;
	          if (ev.caller === _this) {
	            return;
	          }
	          date = Calendar.parseDate(_this.input.value, _this.parsers);
	          if (date) {
	            return _this.pick(date, 'input');
	          }
	        };
	      })(this)
	    });
	    eventListeners = {};
	    eventListeners[this.calendar._et('pick')] = (function(_this) {
	      return function(ev) {
	        return _this.pick(ev.date, 'calendar');
	      };
	    })(this);
	    $.listen(this.calendar.calendar, eventListeners);
	  }

	  DatePicker.prototype.close = function(reason) {
	    return DatePicker.__super__.close.call(this, this.input, 'mh-date-picker', reason);
	  };

	  DatePicker.prototype.open = function() {
	    var date;
	    date = Calendar.parseDate(this.input.value, this.parsers);
	    if (date) {
	      this.calendar.goto(date.getMonth(), date.getFullYear());
	      this.calendar.select(date);
	    }
	    this._track();
	    this._dom.picker.classList.remove(this._bem('mh-date-picker', '', 'closed'));
	    this._isOpen = true;
	    return $.dispatch(this.input, this._et('open'));
	  };

	  DatePicker.prototype.pick = function(date, source) {
	    if (source == null) {
	      source = '';
	    }
	    this.calendar.select(date);
	    if ($.dispatch(this.input, this._et('pick'), {
	      'date': date,
	      'source': source
	    })) {
	      this.constructor.behaviours.input[this._behaviours.input](this, date);
	      $.dispatch(this.input, this._et('picked'), {
	        'date': date,
	        'source': source
	      });
	      if (this.closeOnPick) {
	        return this.close({
	          'reason': 'pick'
	        });
	      }
	    }
	  };

	  DatePicker.prototype._et = function(eventName) {
	    return "mh-date-picker--" + eventName;
	  };

	  DatePicker.prototype._track = function() {
	    return DatePicker.__super__._track.call(this, this.input);
	  };

	  DatePicker.behaviours = {
	    input: {
	      'set-hidden': function(datePicker, date) {
	        var dateStr, hidden, hiddenDateStr, hiddenFormat, hiddenSelector;
	        dateStr = Calendar.formats[datePicker.format](date);
	        datePicker.input.value = dateStr;
	        hiddenSelector = datePicker.input.getAttribute(datePicker.constructor.clsPrefix + "hidden");
	        hidden = $.one(hiddenSelector);
	        hiddenFormat = datePicker.input.getAttribute(datePicker.constructor.clsPrefix + "hidden-format");
	        hiddenDateStr = Calendar.formats[hiddenFormat](date);
	        hidden.value = hiddenDateStr;
	        return $.dispatch(hidden, 'change');
	      },
	      'set-value': function(datePicker, date) {
	        var dateStr;
	        dateStr = Calendar.formats[datePicker.format](date);
	        datePicker.input.value = dateStr;
	        $.dispatch(datePicker.input, 'change', {
	          caller: datePicker
	        });
	        return console.log(dateStr);
	      }
	    }
	  };

	  return DatePicker;

	})(BasePicker);

	DateRangePicker = (function(superClass) {
	  extend(DateRangePicker, superClass);

	  DateRangePicker.clsPrefix = 'data-mh-date-range-picker--';

	  function DateRangePicker(startInput, endInput, options) {
	    var eventListeners, i, input, len, proxyOptions, ref;
	    if (options == null) {
	      options = {};
	    }
	    DateRangePicker.__super__.constructor.call(this);
	    $.config(this, {
	      closeOnPick: false,
	      format: 'human_en',
	      parsers: ['human_en', 'dmy', 'iso'],
	      pinToStart: false
	    }, options, startInput, this.constructor.clsPrefix);
	    this._behaviours = {};
	    $.config(this._behaviours, {
	      input: 'set-value'
	    }, options, startInput, this.constructor.clsPrefix);
	    this._dom = {};
	    this._dom.picker = $.create('div', {
	      'class': [this._bem('mh-date-range-picker'), this._bem('mh-date-range-picker', '', 'closed')].join(' ')
	    });
	    document.body.appendChild(this._dom.picker);
	    this._dom.startInput = startInput;
	    this._dom.startInput.__mh_dateRangePicker = this;
	    this._dom.endInput = endInput;
	    this._dom.endInput.__mh_dateRangePicker = this;
	    proxyOptions = Calendar.proxyOptions(options, startInput);
	    this._calendars = [new Calendar(this._dom.picker, proxyOptions), new Calendar(this._dom.picker, proxyOptions)];
	    this._picking = 'start';
	    Object.defineProperty(this, 'calendars', {
	      get: (function(_this) {
	        return function() {
	          return _this._calendars;
	        };
	      })(this)
	    });
	    Object.defineProperty(this, 'endInput', {
	      value: this._dom.endInput
	    });
	    Object.defineProperty(this, 'startInput', {
	      value: this._dom.startInput
	    });
	    Object.defineProperty(this, 'picking', {
	      get: (function(_this) {
	        return function() {
	          return _this._picking;
	        };
	      })(this)
	    });
	    ref = [this.startInput, this.endInput];
	    for (i = 0, len = ref.length; i < len; i++) {
	      input = ref[i];
	      $.listen(input, {
	        'click': function(ev) {
	          return ev.target.focus();
	        },
	        'focus': (function(_this) {
	          return function(ev) {
	            if (ev.target === _this.startInput) {
	              _this._picking = 'start';
	            } else {
	              _this._picking = 'end';
	            }
	            return _this.open();
	          };
	        })(this),
	        'blur': (function(_this) {
	          return function() {
	            var activeInput;
	            activeInput = document.activeElement;
	            if (_this.startInput === activeInput || _this.endInput === activeInput) {
	              return;
	            }
	            return _this.close('blur');
	          };
	        })(this),
	        'change': (function(_this) {
	          return function(ev) {
	            var date, dateRange;
	            if (ev.caller === _this) {
	              return;
	            }
	            date = Calendar.parseDate(ev.target.value, _this.parsers);
	            if (date) {
	              dateRange = _this.calendars[0].dateRange;
	              if (_this.picking === 'start') {
	                dateRange[0] = date;
	              } else {
	                dateRange[1] = date;
	              }
	              return _this.pick(dateRange, {
	                'source': 'input'
	              });
	            }
	          };
	        })(this)
	      });
	    }
	    eventListeners = {};
	    eventListeners[this.calendars[0]._et('pick')] = (function(_this) {
	      return function(ev) {
	        var dateRange;
	        dateRange = _this.calendars[0].dateRange;
	        if (_this.picking === 'start') {
	          dateRange[0] = ev.date;
	        } else {
	          dateRange[1] = ev.date;
	        }
	        return _this.pick(dateRange, {
	          'source': 'calendar'
	        });
	      };
	    })(this);
	    eventListeners[this.calendars[0]._et('view')] = (function(_this) {
	      return function(ev) {
	        if (_this.calendars.indexOf(ev.calendar) === 0) {
	          return _this.calendars[1].sync(_this.calendars[0], 1);
	        } else {
	          return _this.calendars[0].sync(_this.calendars[1], -1);
	        }
	      };
	    })(this);
	    $.listen(this.calendars[0].calendar, eventListeners);
	    $.listen(this.calendars[1].calendar, eventListeners);
	  }

	  DateRangePicker.prototype.close = function(reason) {
	    return DateRangePicker.__super__.close.call(this, this.startInput, 'mh-date-range-picker', reason);
	  };

	  DateRangePicker.prototype.open = function() {
	    var calendar, closedClass, dateRange, endDate, endStr, i, input, len, ref, startDate, startStr, viewDate, viewStrs;
	    input = this.startInput;
	    if (this.picking === 'end') {
	      input = this.endInput;
	    }
	    startDate = Calendar.parseDate(this.startInput.value, this.parsers);
	    endDate = Calendar.parseDate(this.endInput.value, this.parsers);
	    dateRange = this.calendars[0].dateRange;
	    if (startDate) {
	      dateRange[0] = startDate;
	    }
	    if (endDate) {
	      dateRange[1] = endDate;
	    }
	    if (dateRange[1] < dateRange[0]) {
	      this.pick([dateRange[1], dateRange[0]]);
	      this.endInput.focus();
	      return;
	    }
	    ref = this.calendars;
	    for (i = 0, len = ref.length; i < len; i++) {
	      calendar = ref[i];
	      calendar.select(dateRange[0], dateRange[1]);
	    }
	    startStr = (dateRange[0].getMonth()) + "." + (dateRange[0].getFullYear());
	    endStr = (dateRange[1].getMonth()) + "." + (dateRange[1].getFullYear());
	    viewStrs = [this.calendars[0].month + "." + this.calendars[0].year, this.calendars[1].month + "." + this.calendars[1].year];
	    if (viewStrs.indexOf(startStr) === -1 && viewStrs.indexOf(endStr) === -1) {
	      viewDate = dateRange[0];
	      this.calendars[0].goto(viewDate.getMonth(), viewDate.getFullYear());
	    }
	    this._track(this.pinToStart ? this.startInput : input);
	    closedClass = this._bem('mh-date-range-picker', '', 'closed');
	    this._dom.picker.classList.remove(closedClass);
	    this._isOpen = true;
	    return $.dispatch(this.startInput, this._et('open'));
	  };

	  DateRangePicker.prototype.pick = function(dateRange, source) {
	    var calendar, evData, i, len, ref;
	    ref = this.calendars;
	    for (i = 0, len = ref.length; i < len; i++) {
	      calendar = ref[i];
	      calendar.select(dateRange[0], dateRange[1]);
	    }
	    evData = {
	      'dateRange': dateRange,
	      'source': source
	    };
	    if ($.dispatch(this.startInput, this._et('pick'), evData)) {
	      this.constructor.behaviours.input[this._behaviours.input](this, dateRange);
	      $.dispatch(this.startInput, this._et('picked'), evData);
	      if (this.picking === 'start') {
	        this.endInput.focus();
	      } else {
	        this.startInput.focus();
	      }
	      if (this.closeOnPick) {
	        return this.close();
	      }
	    }
	  };

	  DateRangePicker.prototype._et = function(eventName) {
	    return "mh-date-range-picker--" + eventName;
	  };

	  DateRangePicker.behaviours = {
	    input: {
	      'set-value': function(dateRangePicker, dateRange) {
	        var format;
	        format = Calendar.formats[dateRangePicker.format];
	        dateRangePicker.startInput.value = format(dateRange[0]);
	        $.dispatch(dateRangePicker.startInput, 'change', {
	          caller: datePicker
	        });
	        dateRangePicker.endInput.value = format(dateRange[1]);
	        return $.dispatch(dateRangePicker.endInput, 'change', {
	          caller: datePicker
	        });
	      }
	    }
	  };

	  return DateRangePicker;

	})(BasePicker);

	module.exports = {
	  Calendar: Calendar,
	  DatePicker: DatePicker,
	  DateRangePicker: DateRangePicker
	};


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ManhattanEssentials=t():e.ManhattanEssentials=t()}(this,function(){return function(e){function __webpack_require__(r){if(t[r])return t[r].exports;var n=t[r]={exports:{},id:r,loaded:!1};return e[r].call(n.exports,n,n.exports,__webpack_require__),n.loaded=!0,n.exports}var t={};return __webpack_require__.m=e,__webpack_require__.c=t,__webpack_require__.p="",__webpack_require__(0)}([function(e,t,r){e.exports=r(1)},function(e,t){var r,n,u,o,i,a,c,s,p=[].indexOf||function(e){for(var t=0,r=this.length;t<r;t++)if(t in this&&this[t]===e)return t;return-1};n=function(e,t){var r,n,u;null==t&&(t={}),r=document.createElement(e);for(n in t)u=t[n],p.call(r,n)>=0?r[n]=u:r.setAttribute(n,u);return r},c=function(e,t){return null==t&&(t=document),Array.prototype.slice.call(t.querySelectorAll(e))},s=function(e,t){return null==t&&(t=document),t.querySelector(e)},u=function(e,t,r){var n,u,o;null==r&&(r={}),n=document.createEvent("Event"),n.initEvent(t,!0,!0);for(u in r)o=r[u],n[u]=o;return e.dispatchEvent(n)},i=function(e,t){var r,n,u,o;o=[];for(n in t)u=t[n],o.push(function(){var t,o,i,a;for(i=n.split(/\s+/),a=[],t=0,o=i.length;t<o;t++)r=i[t],a.push(e.removeEventListener(r,u));return a}());return o},a=function(e,t){var r,n,u,o;o=[];for(n in t)u=t[n],o.push(function(){var t,o,i,a;for(i=n.split(/\s+/),a=[],t=0,o=i.length;t<o;t++)r=i[t],a.push(e.addEventListener(r,u));return a}());return o},r=function(e,t,r,n,u){var o,i,a,c;null==u&&(u="data-"),a=[];for(i in t)c=t[i],e[i]=c,r.hasOwnProperty(i)&&(e[i]=r[i]),n&&(o=u+i.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),n.hasAttribute(o)?"number"==typeof c?a.push(e[i]=parseInt(n.getAttribute(o))):c===!1?a.push(e[i]=!0):a.push(e[i]=n.getAttribute(o)):a.push(void 0));return a},o=function(e){return e.replace(/[\^\$\\\.\*\+\?\(\)\[\]\{\}\|]/g,"\\$&")},e.exports={create:n,one:s,many:c,dispatch:u,ignore:i,listen:a,config:r,escapeRegExp:o}}])});

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var $, Calendar,
	  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

	$ = __webpack_require__(3);

	Calendar = (function() {
	  Calendar.getDefaultConfig = function() {
	    return {
	      dates: [],
	      minDate: null,
	      maxDate: null,
	      firstWeekday: 1,
	      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
	      weekdayNames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
	    };
	  };

	  function Calendar(parent, options) {
	    var date, i, j, k, ref, ref1, ref2, today, weekday, weekdayIndex;
	    if (options == null) {
	      options = {};
	    }
	    this.goto = bind(this.goto, this);
	    this.destroy = bind(this.destroy, this);
	    $.config(this, Calendar.getDefaultConfig(), options);
	    this._behaviours = {};
	    $.config(this._behaviours, {
	      test: 'any'
	    }, options);
	    today = new Date();
	    today.setHours(0, 0, 0, 0);
	    this._dateRange = [today, today];
	    this._month = today.getMonth();
	    this._year = today.getFullYear();
	    this._dom = {};
	    this._dom.parent = parent;
	    this._dom.calendar = $.create('div', {
	      'class': this._bem('mh-calendar')
	    });
	    parent.appendChild(this._dom.calendar);
	    this._dom.nav = $.create('div', {
	      'class': this._bem('mh-calendar', 'nav')
	    });
	    this._dom.calendar.appendChild(this._dom.nav);
	    this._dom.month = $.create('div', {
	      'class': this._bem('mh-calendar', 'month')
	    });
	    this._dom.nav.appendChild(this._dom.month);
	    this._dom.next = $.create('div', {
	      'class': this._bem('mh-calendar', 'next')
	    });
	    this._dom.previous = $.create('div', {
	      'class': this._bem('mh-calendar', 'previous')
	    });
	    this._dom.nav.appendChild(this._dom.next);
	    this._dom.nav.appendChild(this._dom.previous);
	    this._dom.weekdays = $.create('div', {
	      'class': this._bem('mh-calendar', 'weekdays')
	    });
	    this._dom.calendar.appendChild(this._dom.weekdays);
	    for (i = j = ref = this.firstWeekday, ref1 = this.firstWeekday + 7; ref <= ref1 ? j < ref1 : j > ref1; i = ref <= ref1 ? ++j : --j) {
	      weekday = $.create('div', {
	        'class': this._bem('mh-calendar', 'weekday')
	      });
	      weekdayIndex = i;
	      if (i >= this.weekdayNames.length) {
	        weekdayIndex -= this.weekdayNames.length;
	      }
	      weekday.innerHTML = this.weekdayNames[weekdayIndex];
	      this._dom.weekdays.appendChild(weekday);
	    }
	    this._dom.dates = $.create('div', {
	      'class': this._bem('mh-calendar', 'dates')
	    });
	    this._dom.calendar.appendChild(this._dom.dates);
	    for (i = k = 0, ref2 = 7 * 6; 0 <= ref2 ? k < ref2 : k > ref2; i = 0 <= ref2 ? ++k : --k) {
	      date = $.create('div', {
	        'class': this._bem('mh-calendar', 'date')
	      });
	      this._dom.dates.appendChild(date);
	    }
	    Object.defineProperty(this, 'calendar', {
	      value: this._dom.calendar
	    });
	    Object.defineProperty(this, 'parent', {
	      value: this._dom.parent
	    });
	    Object.defineProperty(this, 'dateRange', {
	      get: function() {
	        return this._dateRange.slice();
	      }
	    });
	    Object.defineProperty(this, 'month', {
	      get: function() {
	        return this._month;
	      }
	    });
	    Object.defineProperty(this, 'year', {
	      get: function() {
	        return this._year;
	      }
	    });
	    $.listen(this._dom.calendar, {
	      'mousedown': function(ev) {
	        return ev.preventDefault();
	      }
	    });
	    $.listen(this._dom.next, {
	      'click': (function(_this) {
	        return function(ev) {
	          ev.preventDefault();
	          return _this.next();
	        };
	      })(this)
	    });
	    $.listen(this._dom.previous, {
	      'click': (function(_this) {
	        return function(ev) {
	          ev.preventDefault();
	          return _this.previous();
	        };
	      })(this)
	    });
	    $.listen(this._dom.dates, {
	      'click': (function(_this) {
	        return function(ev) {
	          var blockedCSS, dateElm;
	          ev.preventDefault();
	          dateElm = ev.target;
	          if (dateElm === _this._dom.dates) {
	            return;
	          }
	          while (dateElm.parentNode !== _this._dom.dates) {
	            dateElm = dateElm.parentNode;
	          }
	          blockedCSS = _this._bem('mh-calendar', 'date', 'blocked');
	          if (dateElm.classList.contains(blockedCSS)) {
	            return;
	          }
	          return $.dispatch(_this.calendar, _this._et('pick'), {
	            'calendar': _this,
	            'date': dateElm.__mh_date
	          });
	        };
	      })(this)
	    });
	    this.update();
	  }

	  Calendar.prototype.destroy = function() {
	    if (this.calendar.parentNode === this.parent) {
	      return this.parent.removeChild(this.calendar);
	    }
	  };

	  Calendar.prototype.goto = function(month, year) {
	    if (this._month === month && year === this._year) {
	      return;
	    }
	    this._month = month;
	    this._year = year;
	    this.update();
	    return $.dispatch(this.calendar, this._et('view'), {
	      'calendar': this,
	      'month': month,
	      'year': year
	    });
	  };

	  Calendar.prototype.next = function() {
	    return this.offset(1);
	  };

	  Calendar.prototype.offset = function(months, years) {
	    var month, year;
	    if (years == null) {
	      years = 0;
	    }
	    if (months > 0) {
	      years += Math.floor(Math.abs(months) / 12);
	    } else {
	      years -= Math.floor(Math.abs(months) / 12);
	    }
	    months = months % 12;
	    month = this._month + months;
	    year = this._year + years;
	    if (month < 0) {
	      month = 12 + month;
	      year -= 1;
	    } else if (month > 11) {
	      month = month - 12;
	      year += 1;
	    }
	    return this.goto(month, year);
	  };

	  Calendar.prototype.previous = function() {
	    return this.offset(-1);
	  };

	  Calendar.prototype.select = function(startDate, endDate) {
	    if (endDate == null) {
	      endDate = null;
	    }
	    if (endDate) {
	      this._dateRange = [startDate, endDate];
	    } else {
	      this._dateRange = [startDate, startDate];
	    }
	    return this.update();
	  };

	  Calendar.prototype.sync = function(otherCalendar, months, years) {
	    var month, year;
	    if (years == null) {
	      years = 0;
	    }
	    if (months > 0) {
	      years += Math.floor(Math.abs(months) / 12);
	    } else {
	      years -= Math.floor(Math.abs(months) / 12);
	    }
	    months = months % 12;
	    month = otherCalendar.month + months;
	    year = otherCalendar.year + years;
	    if (month < 0) {
	      month = 12 + month;
	      year -= 1;
	    } else if (month > 11) {
	      month = month - 12;
	      year += 1;
	    }
	    if (this._month === month && year === this._year) {
	      return;
	    }
	    this._month = month;
	    this._year = year;
	    return this.update();
	  };

	  Calendar.prototype.update = function() {
	    var classList, date, dateElm, daysOffset, i, j, ref, results, test, today, weekday;
	    this._dom.month.innerHTML = this.monthNames[this.month] + ", " + this.year;
	    weekday = new Date(this.year, this.month, 1).getDay();
	    console.log(weekday, this.firstWeekday);
	    daysOffset = weekday - this.firstWeekday;
	    if (daysOffset < 0) {
	      daysOffset = 7 - Math.abs(daysOffset);
	    }
	    date = new Date(this.year, this.month, 1);
	    if (daysOffset > 0) {
	      date.setDate(date.getDate() - daysOffset);
	    }
	    results = [];
	    for (i = j = 0, ref = 7 * 6; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
	      dateElm = this._dom.dates.childNodes[i];
	      dateElm.innerHTML = date.getDate();
	      dateElm.__mh_date = new Date(date);
	      dateElm.setAttribute('class', this._bem('mh-calendar', 'date'));
	      classList = dateElm.classList;
	      if (date.getMonth() !== this.month) {
	        classList.add(this._bem('mh-calendar', 'date', 'blocked'));
	      }
	      if (this.minDate && this.minDate.getTime() > date.getTime()) {
	        classList.add(this._bem('mh-calendar', 'date', 'blocked'));
	      }
	      if (this.maxDate && this.maxDate.getTime() < date.getTime()) {
	        classList.add(this._bem('mh-calendar', 'date', 'blocked'));
	      }
	      test = this.constructor.behaviours.test[this._behaviours.test];
	      if (!test(this, this.dates, date)) {
	        classList.add(this._bem('mh-calendar', 'date', 'blocked'));
	      }
	      today = new Date();
	      today.setHours(0, 0, 0, 0);
	      if (date.getTime() === today.getTime()) {
	        classList.add(this._bem('mh-calendar', 'date', 'today'));
	      }
	      if (date.getTime() === this.dateRange[0].getTime()) {
	        classList.add(this._bem('mh-calendar', 'date', 'range-start'));
	      }
	      if (date.getTime() === this.dateRange[1].getTime()) {
	        classList.add(this._bem('mh-calendar', 'date', 'range-end'));
	      }
	      if (date.getTime() > this.dateRange[0].getTime() && date.getTime() < this.dateRange[1].getTime()) {
	        classList.add(this._bem('mh-calendar', 'date', 'in-range'));
	      }
	      results.push(date.setDate(date.getDate() + 1));
	    }
	    return results;
	  };

	  Calendar.prototype._bem = function(block, element, modifier) {
	    var name;
	    if (element == null) {
	      element = '';
	    }
	    if (modifier == null) {
	      modifier = '';
	    }
	    name = block;
	    if (element) {
	      name = name + "__" + element;
	    }
	    if (modifier) {
	      name = name + "--" + modifier;
	    }
	    return name;
	  };

	  Calendar.prototype._et = function(eventName) {
	    return "mh-calendar--" + eventName;
	  };

	  Calendar.parseDate = function(s, parsers) {
	    var date, j, len, parser;
	    if (s instanceof Date) {
	      return s;
	    }
	    for (j = 0, len = parsers.length; j < len; j++) {
	      parser = parsers[j];
	      date = this.parsers[parser](s);
	      if (date) {
	        return date;
	      }
	    }
	  };

	  Calendar.proxyOptions = function(prefix, options, input) {
	    var _parse, _split, defaults, j, len, option, proxy, ref, v;
	    defaults = Calendar.getDefaultConfig();
	    defaults.parsers = [];
	    proxy = {};
	    $.config(proxy, defaults, options, input, prefix);
	    _parse = function(s, parsers) {
	      return Calendar.parseDate(s, parsers);
	    };
	    _split = function(s) {
	      var v;
	      return (function() {
	        var j, len, ref, results;
	        ref = s.split(',');
	        results = [];
	        for (j = 0, len = ref.length; j < len; j++) {
	          v = ref[j];
	          if (v.trim()) {
	            results.push(v.trim());
	          }
	        }
	        return results;
	      })();
	    };
	    if (typeof proxy.firstWeekday === 'string') {
	      proxy.firstWeekday = Number(proxy.firstWeekday);
	    }
	    ref = ['dates', 'monthNames', 'parsers', 'weekdayNames'];
	    for (j = 0, len = ref.length; j < len; j++) {
	      option = ref[j];
	      if (typeof proxy[option] === 'string') {
	        proxy[option] = _split(proxy[option]);
	      }
	    }
	    if (typeof proxy.minDate === 'string') {
	      proxy.minDate = _parse(proxy.minDate, proxy.parsers);
	    }
	    if (typeof proxy.maxDate === 'string') {
	      proxy.maxDate = _parse(proxy.maxDate, proxy.parsers);
	    }
	    proxy.dates = (function() {
	      var k, len1, ref1, results;
	      ref1 = proxy.dates;
	      results = [];
	      for (k = 0, len1 = ref1.length; k < len1; k++) {
	        v = ref1[k];
	        if (_parse(v, proxy.parsers)) {
	          results.push(_parse(v, proxy.parsers));
	        }
	      }
	      return results;
	    })();
	    delete proxy.parsers;
	    return proxy;
	  };

	  Calendar.behaviours = {
	    test: {
	      'any': function(calendar, dates, date) {
	        return true;
	      },
	      'excluding': function(calendar, dates, date) {
	        var j, len, other_date;
	        for (j = 0, len = dates.length; j < len; j++) {
	          other_date = dates[j];
	          if (date.getTime() === other_date.getTime()) {
	            return false;
	          }
	        }
	        return true;
	      },
	      'only': function(calendar, dates, date) {
	        var j, len, other_date;
	        for (j = 0, len = dates.length; j < len; j++) {
	          other_date = dates[j];
	          if (date.getTime() === other_date.getTime()) {
	            return true;
	          }
	        }
	        return false;
	      },
	      'weekdays': function(calendar, weekdays, date) {
	        return weekdays.indexOf(date.getDay()) > -1;
	      }
	    }
	  };

	  Calendar.formats = {
	    'dmy': function(date) {
	      var dd, mm, yyyy;
	      dd = ("00" + (date.getDate())).slice(-2);
	      mm = ("00" + (date.getMonth() + 1)).slice(-2);
	      yyyy = date.getFullYear();
	      return dd + "/" + mm + "/" + yyyy;
	    },
	    'human_en': function(date) {
	      var month_name;
	      month_name = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][date.getMonth()];
	      return (date.getDate()) + " " + month_name + " " + (date.getFullYear());
	    },
	    'human_abbr_en': function(date) {
	      var month_name;
	      month_name = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][date.getMonth()];
	      return (date.getDate()) + " " + month_name + " " + (date.getFullYear());
	    },
	    'iso': function(date) {
	      var dd, mm, yyyy;
	      dd = ("00" + (date.getDate())).slice(-2);
	      mm = ("00" + (date.getMonth() + 1)).slice(-2);
	      yyyy = date.getFullYear();
	      return yyyy + "-" + mm + "-" + dd;
	    },
	    'mdy': function(date) {
	      var dd, mm, yyyy;
	      dd = ("00" + (date.getDate())).slice(-2);
	      mm = ("00" + (date.getMonth() + 1)).slice(-2);
	      yyyy = date.getFullYear();
	      return mm + "/" + dd + "/" + yyyy;
	    }
	  };

	  Calendar.parsers = {
	    'dmy': function(s) {
	      var date, dateExp, day, match, month, year;
	      dateExp = /^(\d{1,2})(\/|\.|\-)(\d{1,2})(\/|\.|\-)(\d{2}|\d{4})$/;
	      match = dateExp.exec(s);
	      if (!match) {
	        return;
	      }
	      year = Number(match[5]);
	      month = Number(match[3]) - 1;
	      day = Number(match[1]);
	      if (year < 100) {
	        year += parseInt((new Date()).getFullYear() / 100) * 100;
	      }
	      date = new Date(year, month, day);
	      if (date.getFullYear() !== year || date.getMonth() !== month || date.getDate() !== day) {
	        return;
	      }
	      return date;
	    },
	    'human_en': function(s) {
	      var component, components, date, day, i, j, k, len, len1, month, month_names, month_short_names, ref, ref1, year;
	      month_names = {
	        'january': 0,
	        'february': 1,
	        'march': 2,
	        'april': 3,
	        'may': 4,
	        'june': 5,
	        'july': 6,
	        'august': 7,
	        'september': 8,
	        'october': 9,
	        'november': 10,
	        'december': 11
	      };
	      month_short_names = {
	        'jan': 0,
	        'feb': 1,
	        'mar': 2,
	        'apr': 3,
	        'may': 4,
	        'jun': 5,
	        'jul': 6,
	        'aug': 7,
	        'sep': 8,
	        'oct': 9,
	        'nov': 10,
	        'dec': 11
	      };
	      s = s.toLowerCase();
	      s = s.replace(',', ' ');
	      s = s.replace(/(\d)st/g, '$1 ');
	      s = s.replace(/(\d)nd/g, '$1 ');
	      s = s.replace(/(\d)rd/g, '$1 ');
	      s = s.replace(/(\d)th/g, '$1 ');
	      s = s.trim();
	      components = s.split(/\s+/);
	      if (components.length > 3) {
	        return;
	      }
	      month = (new Date()).getMonth();
	      year = (new Date()).getFullYear();
	      if (components.length > 1) {
	        month = null;
	        ref = components.slice();
	        for (i = j = 0, len = ref.length; j < len; i = ++j) {
	          component = ref[i];
	          if (month_names.hasOwnProperty(component)) {
	            month = month_names[component];
	          } else if (month_short_names.hasOwnProperty(component)) {
	            month = month_short_names[component];
	          }
	          if (month !== null) {
	            components.splice(i, 1);
	            break;
	          }
	        }
	        if (month === null) {
	          return;
	        }
	        year = null;
	        ref1 = components.slice();
	        for (i = k = 0, len1 = ref1.length; k < len1; i = ++k) {
	          component = ref1[i];
	          if (component.length === 4) {
	            year = Number(component);
	            components.splice(i, 1);
	            break;
	          }
	        }
	        if (year === null && components.length === 2) {
	          year = Number(components[1]);
	          components.splice(1, 1);
	        }
	        if (year === (0/0)) {
	          return;
	        }
	        if (year === null) {
	          year = (new Date()).getFullYear();
	        }
	        if (year < 100) {
	          year += parseInt((new Date()).getFullYear() / 100) * 100;
	        }
	      }
	      day = Number(components[0]);
	      if (day === (0/0)) {
	        return;
	      }
	      date = new Date(year, month, day);
	      if (date.getFullYear() !== year || date.getMonth() !== month || date.getDate() !== day) {
	        return;
	      }
	      return date;
	    },
	    'iso': function(s) {
	      var date, dateExp, day, match, month, year;
	      dateExp = /^(\d{4})-(\d{2})-(\d{2})$/;
	      match = dateExp.exec(s);
	      if (!match) {
	        return;
	      }
	      year = Number(match[1]);
	      month = Number(match[2]) - 1;
	      day = Number(match[3]);
	      date = new Date(year, month, day);
	      if (date.getFullYear() !== year || date.getMonth() !== month || date.getDate() !== day) {
	        return;
	      }
	      return date;
	    },
	    'mdy': function(s) {
	      var date, dateExp, day, match, month, year;
	      dateExp = /^(\d{1,2})(\/|\.|\-)(\d{1,2})(\/|\.|\-)(\d{2}|\d{4})$/;
	      match = dateExp.exec(s);
	      if (!match) {
	        return;
	      }
	      year = Number(match[5]);
	      month = Number(match[1]) - 1;
	      day = Number(match[3]);
	      if (year < 100) {
	        year += parseInt((new Date()).getFullYear() / 100) * 100;
	      }
	      date = new Date(year, month, day);
	      if (date.getFullYear() !== year || date.getMonth() !== month || date.getDate() !== day) {
	        return;
	      }
	      return date;
	    }
	  };

	  return Calendar;

	})();

	module.exports = {
	  Calendar: Calendar
	};


/***/ }
/******/ ])
});
;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ManhattanForms"] = factory();
	else
		root["ManhattanForms"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var fields;

fields = __webpack_require__(1);

module.exports = {
  fields: fields
};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var $, _handleAnimationstart, _handleChange, listenForFill;

$ = __webpack_require__(2);

_handleChange = function(ev) {
  if (this.value) {
    return $.dispatch(this, 'mh-forms-fields--fill', {
      filled: true
    });
  } else {
    return $.dispatch(this, 'mh-forms-fields--fill', {
      filled: false
    });
  }
};

_handleAnimationstart = function(ev) {
  var filled;
  if (ev.animationName === 'onAutoFillStart') {
    return $.dispatch(this, 'mh-forms-fields--fill', {
      filled: true
    });
  } else if (ev.animationName === 'onAutoFillCancel') {
    filled = false;
    if (this.value && this.type.toLowerCase() !== 'password') {
      filled = true;
    }
    return $.dispatch(this, 'mh-forms-fields--fill', {
      filled: filled
    });
  }
};

listenForFill = function(selector) {
  var i, input, inputs, j, len, len1, results, sheet, style, value;
  if (selector == null) {
    selector = 'input, select, textarea';
  }
  inputs = $.many(selector);
  if ($.cssSelectorSupported(':-webkit-autofill')) {
    if (!$.one('[data-mh-listen-for-fill]')) {
      style = document.createElement('style');
      style.appendChild(document.createTextNode(''));
      style.setAttribute('data-mh-listen-for-fill', '');
      document.head.appendChild(style);
      sheet = style.sheet;
      sheet.insertRule('@keyframes onAutoFillStart {  from {/**/}  to {/**/}}', 0);
      sheet.insertRule('@keyframes onAutoFillCancel {  from {/**/}  to {/**/}}', 0);
      sheet.insertRule('input:-webkit-autofill { animation-name: onAutoFillStart; }', 0);
      sheet.insertRule('input:not(:-webkit-autofill)' + ' { animation-name: onAutoFillCancel; }', 0);
    }
    for (i = 0, len = inputs.length; i < len; i++) {
      input = inputs[i];
      $.ignore(input, {
        'animationstart': _handleAnimationstart
      });
      $.listen(input, {
        'animationstart': _handleAnimationstart
      });
    }
  }
  results = [];
  for (j = 0, len1 = inputs.length; j < len1; j++) {
    input = inputs[j];
    value = input.value;
    if (input.options) {
      value = input.options[input.selectedIndex].value;
    }
    $.dispatch(input, 'mh-forms-fields--fill', {
      filled: Boolean(value)
    });
    $.ignore(input, {
      'change': _handleChange,
      'input': _handleChange
    });
    results.push($.listen(input, {
      'change': _handleChange,
      'input': _handleChange
    }));
  }
  return results;
};

module.exports = {
  listenForFill: listenForFill
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ManhattanEssentials=t():e.ManhattanEssentials=t()}(this,function(){return function(e){function __webpack_require__(r){if(t[r])return t[r].exports;var n=t[r]={exports:{},id:r,loaded:!1};return e[r].call(n.exports,n,n.exports,__webpack_require__),n.loaded=!0,n.exports}var t={};return __webpack_require__.m=e,__webpack_require__.c=t,__webpack_require__.p="",__webpack_require__(0)}([function(e,t,r){e.exports=r(1)},function(e,t){var r,n,o,u,c,i,a,s,l,p,f=[].indexOf||function(e){for(var t=0,r=this.length;t<r;t++)if(t in this&&this[t]===e)return t;return-1};r=function(e,t){var r;if(e.closest)return e.closest(t);for(r=e.matches||e.webkitMatchesSelector||e.mozMatchesSelector||e.msMatchesSelector;e&&!r.call(e,t);)e=e.parentElement;return e},o=function(e,t){var r,n,o;null==t&&(t={}),r=document.createElement(e);for(n in t)o=t[n],f.call(r,n)>=0?r[n]=o:r.setAttribute(n,o);return r},l=function(e,t){return null==t&&(t=document),Array.prototype.slice.call(t.querySelectorAll(e))},p=function(e,t){return null==t&&(t=document),t.querySelector(e)},c=function(e,t,r){var n,o,u;null==r&&(r={}),n=document.createEvent("Event"),n.initEvent(t,!0,!0);for(o in r)u=r[o],n[o]=u;return e.dispatchEvent(n)},a=function(e,t){var r,n,o,u;u=[];for(n in t)o=t[n],u.push(function(){var t,u,c,i;for(c=n.split(/\s+/),i=[],t=0,u=c.length;t<u;t++)r=c[t],i.push(e.removeEventListener(r,o));return i}());return u},s=function(e,t){var r,n,o,u;u=[];for(n in t)o=t[n],u.push(function(){var t,u,c,i;for(c=n.split(/\s+/),i=[],t=0,u=c.length;t<u;t++)r=c[t],i.push(e.addEventListener(r,o));return i}());return u},n=function(e,t,r,n,o){var u,c,i,a;null==o&&(o="data-"),i=[];for(c in t)a=t[c],e[c]=a,r.hasOwnProperty(c)&&(e[c]=r[c]),n&&(u=o+c.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),n.hasAttribute(u)?"number"==typeof a?i.push(e[c]=parseInt(n.getAttribute(u))):a===!1?i.push(e[c]=!0):i.push(e[c]=n.getAttribute(u)):i.push(void 0));return i},i=function(e){return e.replace(/[\^\$\\\.\*\+\?\(\)\[\]\{\}\|]/g,"\\$&")},u=function(e){var t;try{document.querySelector(e)}catch(e){return t=e,!1}return!0},e.exports={closest:r,create:o,one:p,many:l,dispatch:c,ignore:a,listen:s,config:n,escapeRegExp:i,cssSelectorSupported:u}}])});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ })
/******/ ]);
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var $, enableCSSTransitions, init;

$ = __webpack_require__(0);

enableCSSTransitions = function() {
  var elm;
  elm = $.one('.mh-body--no-transitions');
  if (elm) {
    return elm.classList.remove('mh-body--no-transitions');
  }
};

init = function() {
  return enableCSSTransitions();
};

module.exports = {
  init: init
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var $, handleFlashClose, init;

$ = __webpack_require__(0);

handleFlashClose = function() {
  var closeFlash, i, len, ref, results;
  ref = $.many('.mh-flash__close');
  results = [];
  for (i = 0, len = ref.length; i < len; i++) {
    closeFlash = ref[i];
    results.push($.listen(closeFlash, 'click', function(ev) {
      return this.remove();
    }));
  }
  return results;
};

init = function() {
  return handleFlashClose();
};

module.exports = {
  init: init
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var $, affixButtons, assets, clearError, datePicker, effects, focusField, forms, inFieldLabels, init, typeahead;

$ = __webpack_require__(0);

assets = __webpack_require__(2);

datePicker = __webpack_require__(3);

effects = __webpack_require__(10);

forms = __webpack_require__(4);

typeahead = __webpack_require__(12);

affixButtons = function(form) {
  var anchored, btns, fieldset, frame;
  if (form.classList.contains('mh-form--fixed-btns-disallowed')) {
    return;
  }
  form.classList.add('mh-form--fixed-btns');
  btns = $.one('.mh-field--btns', form);
  fieldset = $.closest(btns, '.mh-form__fieldset');
  if (fieldset) {
    forms.appendChild(btns);
    if (!fieldset.innerHTML.trim()) {
      fieldset.remove();
    }
  }
  frame = $.closest(form, '.mh-frame');
  anchored = function() {
    if (window.innerHeight + window.scrollY >= frame.clientHeight) {
      return btns.classList.add('mh-field--anchored');
    } else {
      return btns.classList.remove('mh-field--anchored');
    }
  };
  anchored();
  return $.listen(window, {
    'scroll': function() {
      return anchored();
    }
  });
};

clearError = function(input) {
  var child, error, field, i, len, ref;
  field = $.closest(input, '.mh-field__control');
  ref = $.many('[data-mh-error]', field);
  for (i = 0, len = ref.length; i < len; i++) {
    child = ref[i];
    child.removeAttribute('data-mh-error');
  }
  field.classList.remove('mh-field__control--error');
  error = $.one('.mh-field__error', field);
  if (error) {
    error.remove();
  }
  return $.dispatch(input, 'clearerror');
};

focusField = function(input) {
  return effects.scrollTo(input, 1, [0, -90], function() {
    return input.focus();
  });
};

inFieldLabels = function() {
  var field, i, input, inputSelector, len, ref;
  inputSelector = '.mh-field__text, .mh-field__textarea, .mh-field__select';
  ref = $.many(inputSelector);
  for (i = 0, len = ref.length; i < len; i++) {
    input = ref[i];
    field = $.closest(input, '.mh-field__control');
    if (!field) {
      continue;
    }
    $.listen(input, {
      'blur': function(ev) {
        field = $.closest(this, '.mh-field__control');
        return field.classList.remove('mh-field__control--focused');
      },
      'focus': function(ev) {
        field = $.closest(this, '.mh-field__control');
        return field.classList.add('mh-field__control--focused');
      },
      'mh-forms-fields--fill': function(ev) {
        field = $.closest(this, '.mh-field__control');
        if (ev.filled) {
          return field.classList.add('mh-field__control--filled');
        } else {
          return field.classList.remove('mh-field__control--filled');
        }
      }
    });
  }
  return forms.fields.listenForFill(inputSelector);
};

init = function() {
  var i, input, inputErrors, j, k, l, len, len1, len2, len3, nextErrorBtn, primaryForm, primaryFrame, ref, ref1, ref2;
  inFieldLabels();
  ref = $.many('[data-mh-assets-field]');
  for (i = 0, len = ref.length; i < len; i++) {
    input = ref[i];
    new assets.Field(input, {
      endpoint: '/manage/upload-asset'
    });
  }
  ref1 = $.many('[data-mh-date-picker]');
  for (j = 0, len1 = ref1.length; j < len1; j++) {
    input = ref1[j];
    new datePicker.DatePicker(input);
  }
  ref2 = $.many('[data-mh-typeahead]');
  for (k = 0, len2 = ref2.length; k < len2; k++) {
    input = ref2[k];
    new typeahead.Typeahead(input);
  }
  inputErrors = $.many('[data-mh-error]');
  for (l = 0, len3 = inputErrors.length; l < len3; l++) {
    input = inputErrors[l];
    $.listen(input, 'change', function() {
      var nextErrorBtn;
      clearError(input);
      if ($.many('[data-mh-error]').length === 0) {
        nextErrorBtn = $.one('.mh-form--primary .mh-btn--error');
        return nextErrorBtn.classList.add('mh-btn--hidden');
      }
    });
  }
  if (inputErrors.length > 0) {
    focusField(inputErrors[0]);
  }
  primaryForm = $.one('.mh-form--primary');
  if (primaryForm) {
    primaryFrame = $.closest(primaryForm, '.mh-frame');
    if (primaryFrame && primaryFrame.clientHeight > window.innerHeight) {
      affixButtons(primaryForm);
      nextErrorBtn = $.one('.mh-btn--error', primaryForm);
      if (nextErrorBtn) {
        $.listen(nextErrorBtn, {
          'click': function(ev) {
            var activeInputIndex, inputError, inputs, len4, m, results;
            ev.preventDefault();
            inputs = $.many('input, select, textarea, [contentEditable=true]');
            inputErrors = $.many('[data-mh-error]');
            activeInputIndex = inputs.indexOf(document.activeElement);
            if (activeInputIndex > -1) {
              results = [];
              for (m = 0, len4 = inputErrors.length; m < len4; m++) {
                inputError = inputErrors[m];
                if (inputs.indexOf(inputError) > activeInputIndex) {
                  focusField(inputError);
                  break;
                } else {
                  results.push(void 0);
                }
              }
              return results;
            } else {
              return focusField(inputErrors[0]);
            }
          }
        });
        return nextErrorBtn.classList.remove('mh-btn--hidden');
      }
    }
  }
};

module.exports = {
  affixButtons: affixButtons,
  clearError: clearError,
  focusField: focusField,
  inFieldLabels: inFieldLabels,
  init: init
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var $, _navs, closeNavs, init, mhNav, registerNav, updateNavHeight;

$ = __webpack_require__(0);

mhNav = __webpack_require__(11);

_navs = {};

closeNavs = function(navNames, exclude) {
  var i, key, len, name, nav, results;
  if (navNames == null) {
    navNames = null;
  }
  if (exclude == null) {
    exclude = [];
  }
  if (!navNames) {
    navNames = (function() {
      var results;
      results = [];
      for (key in _navs) {
        results.push(key);
      }
      return results;
    })();
  }
  results = [];
  for (i = 0, len = navNames.length; i < len; i++) {
    name = navNames[i];
    if (exclude.indexOf(name) > -1) {
      continue;
    }
    if (!_navs[name]) {
      continue;
    }
    results.push((function() {
      var j, len1, ref, results1;
      ref = _navs[name];
      results1 = [];
      for (j = 0, len1 = ref.length; j < len1; j++) {
        nav = ref[j];
        if (exclude.indexOf(nav.element) > -1) {
          continue;
        }
        results1.push(nav.close());
      }
      return results1;
    })());
  }
  return results;
};

registerNav = function(name, element) {
  var nav;
  nav = element.__mh_navItem;
  if (_navs[name]) {
    return _navs[name].push(nav);
  } else {
    return _navs[name] = [nav];
  }
};

updateNavHeight = function() {
  var nav, top;
  nav = $.one('.mh-nav');
  top = $.one('.mh-frame__inner').getBoundingClientRect().top;
  if (top > 0) {
    return nav.style.maxHeight = "calc(100% - " + top + "px)";
  } else {
    return nav.style.maxHeight = '100%';
  }
};

init = function() {
  var _updateNavHeight, actionsHandle, actionsNav, filterHandle, filterNav, i, item, len, navHeightTimeout, primaryNav, primeHandle, ref, userHandle, userNav;
  primaryNav = $.one('.mh-nav__section--prime');
  if (primaryNav) {
    primeHandle = $.one('.mh-handle', primaryNav);
    new mhNav.NavItem(primeHandle, {
      openClass: 'mh-frame--prime-nav-open',
      selectors: '.mh-frame',
      target: 'selectors'
    });
    $.listen(primeHandle, {
      'click': function(ev) {
        return ev.stopPropagation();
      }
    });
    registerNav('prime', primeHandle);
    $.listen(primeHandle, {
      'mh-nav-item--open': function() {
        return closeNavs(null, ['prime']);
      }
    });
    updateNavHeight();
    navHeightTimeout = null;
    _updateNavHeight = function() {
      clearTimeout(navHeightTimeout);
      return navHeightTimeout = setTimeout(updateNavHeight, 50);
    };
    $.listen(window, {
      'scroll': _updateNavHeight,
      'resize': _updateNavHeight
    });
  }
  userNav = $.one('.mh-nav__section--user');
  if (userNav) {
    userHandle = $.one('.mh-handle', userNav);
    new mhNav.NavItem(userHandle, {
      openClass: 'mh-frame--user-nav-open',
      selectors: '.mh-frame',
      target: 'selectors'
    });
    $.listen(userHandle, {
      'click': function(ev) {
        return ev.stopPropagation();
      }
    });
    registerNav('user', userHandle);
    $.listen(userHandle, {
      'mh-nav-item--open': function() {
        var exclude;
        return closeNavs(null, exclude = ['user']);
      }
    });
  }
  ref = $.many('.mh-nav-item--has-children');
  for (i = 0, len = ref.length; i < len; i++) {
    item = ref[i];
    new mhNav.NavItem(item, {
      openClass: 'mh-nav-item--open'
    });
    $.listen(item, {
      'click': function(ev) {
        return ev.stopPropagation();
      }
    });
    registerNav('subNav', item);
    $.listen(item, {
      'mh-nav-item--open': function() {
        var exclude;
        return closeNavs(['subNav', 'user'], exclude = [this]);
      }
    });
  }
  actionsNav = $.one('.mh-actions');
  if (actionsNav) {
    actionsHandle = $.one('.mh-actions__handle', actionsNav);
    new mhNav.NavItem(actionsHandle, {
      openClass: 'mh-actions--open',
      selectors: '.mh-actions',
      target: 'closest'
    });
    registerNav('actions', actionsHandle);
    $.listen(actionsHandle, {
      'click': function(ev) {
        return ev.stopPropagation();
      }
    });
    $.listen(actionsHandle.parentNode, {
      'click': function(ev) {
        return ev.stopPropagation();
      }
    });
  }
  filterNav = $.one('.mh-filter-adv');
  if (filterNav) {
    filterHandle = $.one('.mh-filter-adv__handle', filterNav);
    new mhNav.NavItem(filterHandle, {
      openClass: 'mh-filter-adv--open',
      selectors: '.mh-filter-adv',
      target: 'closest'
    });
    registerNav('filters', filterHandle);
    $.listen(filterHandle, {
      'click': function(ev) {
        return ev.stopPropagation();
      }
    });
    $.listen($.one('.mh-filter-adv__fields', filterNav), {
      'click': function(ev) {
        return ev.stopPropagation();
      }
    });
    $.listen($.one('.mh-filter-adv__close', filterNav), {
      'click': function(ev) {
        return closeNavs(['filters']);
      }
    });
  }
  return $.listen(document.body, {
    'click': function(ev) {
      if (!ev.defaultPrevented) {
        return closeNavs(['actions', 'filters']);
      }
    }
  });
};

module.exports = {
  closeNavs: closeNavs,
  init: init,
  registerNav: registerNav,
  updateNavHeight: updateNavHeight
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var $, init, makeLink, makeSorter;

$ = __webpack_require__(0);

makeLink = function(element, url) {
  return $.listen(element, {
    'click': function(ev) {
      if (ev.button === 0) {
        if (ev.shiftKey || ev.ctrlKey || ev.metaKey) {
          window.open(url, '_blank');
        } else {
          window.location = url;
        }
      }
      if (ev.button === 1) {
        return window.open(url, '_blank');
      }
    }
  });
};

makeSorter = function(element) {
  var form, sortByField, sortWith, sortedBy;
  form = $.one('.mh-form', $.closest(element, '.mh-list').parentNode);
  sortByField = $.one('[name="sort_by"]', form);
  sortedBy = sortByField.value;
  sortWith = element.getAttribute('data-mh-sort-with');
  if (sortedBy === sortWith) {
    element.setAttribute('data-mh-sort-direction', 'DESC');
  } else if (sortedBy === ("-" + sortWith)) {
    element.setAttribute('data-mh-sort-direction', 'ASC');
  }
  return $.listen(element, {
    'click': function(ev) {
      if (sortWith === sortedBy) {
        sortByField.value = "-" + sortWith;
      } else {
        sortByField.value = sortWith;
      }
      return form.submit();
    }
  });
};

init = function() {
  var form, i, j, k, len, len1, len2, ref, ref1, ref2, results, tableHeader, tableRow;
  ref = $.many('tr[data-mh-url]');
  for (i = 0, len = ref.length; i < len; i++) {
    tableRow = ref[i];
    makeLink(tableRow, tableRow.getAttribute('data-mh-url'));
  }
  ref1 = $.many('th[data-mh-sort-with]');
  for (j = 0, len1 = ref1.length; j < len1; j++) {
    tableHeader = ref1[j];
    makeSorter(tableHeader);
  }
  ref2 = $.many('.mh-paging__jump');
  results = [];
  for (k = 0, len2 = ref2.length; k < len2; k++) {
    form = ref2[k];
    results.push($.listen(form, {
      'submit': function(ev) {
        var pageNo;
        pageNo = $.one('[name="page"]');
        if (!pageNo.value.trim()) {
          ev.preventDefault();
          return pageNo.focus();
        }
      }
    }));
  }
  return results;
};

module.exports = {
  init: init,
  makeLink: makeLink,
  makeSorter: makeSorter
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ManhattanEffects=t():e.ManhattanEffects=t()}(this,function(){return function(e){function __webpack_require__(o){if(t[o])return t[o].exports;var r=t[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,__webpack_require__),r.loaded=!0,r.exports}var t={};return __webpack_require__.m=e,__webpack_require__.c=t,__webpack_require__.p="",__webpack_require__(0)}([function(e,t,o){e.exports=o(1)},function(e,t){var o;o=function(e,t,o,r,n,l){var c,u,_,f,p,a,i;return null==t&&(t=1),null==o&&(o=[0,0]),null==r&&(r=null),null==n&&(n=null),null==l&&(l=60),null===n&&(n=document.body),a=[n.scrollLeft,n.scrollTop],_=e,1===e.nodeType&&(p=e.getBoundingClientRect(),_=[a[0]+p.left,a[1]+p.top]),_=[_[0]+o[0],_[1]+o[1]],u=[_[0]-a[0],_[1]-a[1]],i=Date.now(),c=function(){var e,o,l;if(e=Math.min((Date.now()-i)/1e3,t),o=e/t,l=[n.scrollLeft,n.scrollTop],n.scrollLeft=a[0]+u[0]*o,n.scrollTop=a[1]+u[1]*o,l[0]===n.scrollLeft&&l[1]===n.scrollTop&&(e=t),e===t)return"function"==typeof r&&r(),clearInterval(f)},f=setInterval(c,1e3/l)},e.exports={scrollTo:o}}])});

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ManhattanNav"] = factory();
	else
		root["ManhattanNav"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(2);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "nav.css";

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var $, NavItem;

	$ = __webpack_require__(3);

	NavItem = (function() {
	  NavItem.clsPrefix = 'data-mh-nav-item--';

	  function NavItem(element, options) {
	    if (options == null) {
	      options = {};
	    }
	    $.config(this, {
	      openEvent: 'click',
	      openClass: 'open',
	      selectors: ''
	    }, options, element, this.constructor.clsPrefix);
	    this._behaviours = {};
	    $.config(this._behaviours, {
	      target: 'self'
	    }, options, element, this.constructor.clsPrefix);
	    this._isOpen = false;
	    this._dom = {};
	    this._dom.element = element;
	    this._dom.element.__mh_navItem = this;
	    Object.defineProperty(this, 'element', {
	      value: this._dom.element
	    });
	    Object.defineProperty(this, 'isOpen', {
	      get: (function(_this) {
	        return function() {
	          return _this._isOpen;
	        };
	      })(this)
	    });
	    if (this.openEvent === 'hover') {
	      $.listen(element, {
	        'mouseover': (function(_this) {
	          return function() {
	            return _this.toggle();
	          };
	        })(this)
	      });
	      $.listen(element, {
	        'touchstart': (function(_this) {
	          return function() {
	            return _this.toggle();
	          };
	        })(this)
	      });
	    } else {
	      $.listen(element, {
	        'click': (function(_this) {
	          return function() {
	            return _this.toggle();
	          };
	        })(this)
	      });
	    }
	  }

	  NavItem.prototype.open = function() {
	    var target;
	    target = this._getTarget();
	    target.classList.add(this.openClass);
	    this._isOpen = true;
	    return $.dispatch(this.element, this._et('open'));
	  };

	  NavItem.prototype.close = function() {
	    var target;
	    target = this._getTarget();
	    target.classList.remove(this.openClass);
	    this._isOpen = false;
	    return $.dispatch(this.element, this._et('close'));
	  };

	  NavItem.prototype.toggle = function() {
	    if (this.isOpen) {
	      return this.close();
	    } else {
	      return this.open();
	    }
	  };

	  NavItem.prototype._et = function(eventName) {
	    return "mh-nav-item--" + eventName;
	  };

	  NavItem.prototype._getTarget = function() {
	    var target;
	    target = this.constructor.behaviours.target[this._behaviours.target];
	    return target(this, this.element, this.selectors);
	  };

	  NavItem.behaviours = {
	    target: {
	      'self': function(navItem, element, selectors) {
	        return element;
	      },
	      'selectors': function(navItem, element, selectors) {
	        return $.one(selectors);
	      },
	      'closest': function(navItem, element, selectors) {
	        return $.closest(element, selectors);
	      },
	      'child': function(navItem, element, selectors) {
	        return $.one(selectors, element);
	      }
	    }
	  };

	  return NavItem;

	})();

	module.exports = {
	  NavItem: NavItem
	};


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ManhattanEssentials=t():e.ManhattanEssentials=t()}(this,function(){return function(e){function __webpack_require__(r){if(t[r])return t[r].exports;var n=t[r]={exports:{},id:r,loaded:!1};return e[r].call(n.exports,n,n.exports,__webpack_require__),n.loaded=!0,n.exports}var t={};return __webpack_require__.m=e,__webpack_require__.c=t,__webpack_require__.p="",__webpack_require__(0)}([function(e,t,r){e.exports=r(1)},function(e,t){var r,n,o,u,i,c,a,s,l,p=[].indexOf||function(e){for(var t=0,r=this.length;t<r;t++)if(t in this&&this[t]===e)return t;return-1};r=function(e,t){var r;if(e.closest)return e.closest(t);for(r=e.matches||e.webkitMatchesSelector||e.mozMatchesSelector||e.msMatchesSelector;e&&!r.call(e,t);)e=e.parentElement;return e},o=function(e,t){var r,n,o;null==t&&(t={}),r=document.createElement(e);for(n in t)o=t[n],p.call(r,n)>=0?r[n]=o:r.setAttribute(n,o);return r},s=function(e,t){return null==t&&(t=document),Array.prototype.slice.call(t.querySelectorAll(e))},l=function(e,t){return null==t&&(t=document),t.querySelector(e)},u=function(e,t,r){var n,o,u;null==r&&(r={}),n=document.createEvent("Event"),n.initEvent(t,!0,!0);for(o in r)u=r[o],n[o]=u;return e.dispatchEvent(n)},c=function(e,t){var r,n,o,u;u=[];for(n in t)o=t[n],u.push(function(){var t,u,i,c;for(i=n.split(/\s+/),c=[],t=0,u=i.length;t<u;t++)r=i[t],c.push(e.removeEventListener(r,o));return c}());return u},a=function(e,t){var r,n,o,u;u=[];for(n in t)o=t[n],u.push(function(){var t,u,i,c;for(i=n.split(/\s+/),c=[],t=0,u=i.length;t<u;t++)r=i[t],c.push(e.addEventListener(r,o));return c}());return u},n=function(e,t,r,n,o){var u,i,c,a;null==o&&(o="data-"),c=[];for(i in t)a=t[i],e[i]=a,r.hasOwnProperty(i)&&(e[i]=r[i]),n&&(u=o+i.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),n.hasAttribute(u)?"number"==typeof a?c.push(e[i]=parseInt(n.getAttribute(u))):a===!1?c.push(e[i]=!0):c.push(e[i]=n.getAttribute(u)):c.push(void 0));return c},i=function(e){return e.replace(/[\^\$\\\.\*\+\?\(\)\[\]\{\}\|]/g,"\\$&")},e.exports={closest:r,create:o,one:l,many:s,dispatch:u,ignore:c,listen:a,config:n,escapeRegExp:i}}])});

/***/ }
/******/ ])
});
;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ManhattanTypeahead=e():t.ManhattanTypeahead=e()}(this,function(){return function(t){function __webpack_require__(n){if(e[n])return e[n].exports;var r=e[n]={exports:{},id:n,loaded:!1};return t[n].call(r.exports,r,r.exports,__webpack_require__),r.loaded=!0,r.exports}var e={};return __webpack_require__.m=t,__webpack_require__.c=e,__webpack_require__.p="",__webpack_require__(0)}([function(t,e,n){n(1),t.exports=n(2)},function(t,e,n){t.exports=n.p+"typeahead.css"},function(t,e,n){var r,i;r=n(3),i=function(){function Typeahead(t,e){var n;null==e&&(e={}),r.config(this,{autoFirst:!1,list:[],maxItems:10,minChars:2,mustMatch:!1,rootTag:"div"},e,t,this.constructor.clsPrefix),this._behaviours={},n="array","string"==typeof this.list&&(n="#"===this.list[0]?"data-list":"string"),r.config(this._behaviours,{coerce:"pass-through",element:"default",fetch:n,filter:"startswith",input:"set-value",sort:"length"},e,t,this.constructor.clsPrefix),this._index=-1,this._isOpen=!1,this._cache=null,this._dom={},this._dom.input=t,this._dom.input.__mh_typeahead=this,this._dom.suggestions=r.create(this.rootTag,{class:[this._bem("mh-typeahead"),this._bem("mh-typeahead","","closed")].join(" ")}),document.body.appendChild(this._dom.suggestions),this._dom.input.setAttribute("autocomplete","off"),Object.defineProperty(this,"index",{get:function(t){return function(){return t._index}}(this)}),Object.defineProperty(this,"input",{value:this._dom.input}),Object.defineProperty(this,"isOpen",{get:function(t){return function(){return t._isOpen}}(this)}),r.listen(this._dom.input,{blur:function(t){return function(){return t.close("blur")}}(this),input:function(t){return function(){return t.update()}}(this),keydown:function(t){return function(e){if(t.isOpen)switch(e.keyCode){case 9:if(t.mustMatch)return t.select();break;case 13:if(t.index>-1)return e.preventDefault(),t.select();break;case 27:return t.close("esc");case 38:return e.preventDefault(),t.previous();case 40:return e.preventDefault(),t.next()}}}(this)}),r.listen(this._dom.suggestions,{mousedown:function(t){return function(e){var n,r;if(e.target!==t._dom.suggestions&&0===e.button){for(e.preventDefault(),r=e.target;r.parentNode!==t._dom.suggestions;)r=r.parentNode;return n=Array.prototype.indexOf.call(t._dom.suggestions.children,r),t.select(n)}}}(this)}),r.listen(window,{"fullscreenchange orientationchange resize":function(t){return function(e){if(t.isOpen)return t.close("resize")}}(this)})}return Typeahead.clsPrefix="data-mh-typeahead--",Typeahead.prototype.clearCache=function(){return this._cache=null},Typeahead.prototype.close=function(t){if(this.isOpen)return this._dom.suggestions.classList.add(this._bem("mh-typeahead","","closed")),this._isOpen=!1,this.index=-1,r.dispatch(this.input,this._et("close"),{reason:t})},Typeahead.prototype.fromCache=function(t,e){if(this._cache&&this._cache[t])return this._cache[t][e]},Typeahead.prototype.next=function(){var t;if(t=this._suggestions.length,0!==t)return this.index>=t-1?this._goto(0):this._goto(this.index+1)},Typeahead.prototype.open=function(){return this._track(),this._dom.suggestions.classList.remove(this._bem("mh-typeahead","","closed")),this._isOpen=!0,this.autoFirst&&this.index===-1&&this._goto(0),r.dispatch(this.input,this._et("open"))},Typeahead.prototype.previous=function(){var t;if(t=this._suggestions.length,0!==t)return this.index<=0?this._goto(t-1):this._goto(this.index-1)},Typeahead.prototype.select=function(t){var e;if(void 0!==t&&t!==this.index&&this._goto(t),this.index>-1){if(e=this._suggestions[this.index],!r.dispatch(this.input,this._et("select"),{item:e}))return;return this.constructor.behaviours.input[this._behaviours.input](this,e),this.close("select"),r.dispatch(this.input,this._et("selected"),{item:e})}},Typeahead.prototype.toCache=function(t,e,n){return this._cache||(this._cache={}),this._cache[t]||(this._cache[t]={}),this._cache[t][e]=n},Typeahead.prototype.update=function(){for(var t,e,n;this._dom.suggestions.firstChild;)this._dom.suggestions.removeChild(this._dom.suggestions.firstChild);return n=this.input.value.trim(),n.length<this.minChars?this.close("no-matches"):(t=function(t){return function(e){var r,i,s,o,u,a,h,c;if(0===e.length)return t.close("no-matches");if(r=t.constructor.behaviours.coerce[t._behaviours.coerce],e=e.map(function(e){return r(t,e)}),s=t.constructor.behaviours.filter[t._behaviours.filter],e=e.filter(function(e){return s(t,e,n)}),h=t.constructor.behaviours.sort[t._behaviours.sort],e=e.sort(function(e,r){return h(t,n,e,r)}),e=e.slice(0,t.maxItems),t._suggestions=e,t._index=-1,0===t._suggestions.length)return t.close("no-matches");for(i=t.constructor.behaviours.element[t._behaviours.element],a=t._suggestions,o=0,u=a.length;o<u;o++)c=a[o],t._dom.suggestions.appendChild(i(t,c,n));return t.open()}}(this),(e=this.constructor.behaviours.fetch[this._behaviours.fetch])(this,this.list,n,t))},Typeahead.prototype._bem=function(t,e,n){var r;return null==e&&(e=""),null==n&&(n=""),r=t,e&&(r=r+"__"+e),n&&(r=r+"--"+n),r},Typeahead.prototype._et=function(t){return"mh-typeahead--"+t},Typeahead.prototype._goto=function(t){var e,n,i;if(n=this._bem("mh-typeahead","suggestion","focused"),e=r.one("."+n),e&&e.classList.remove(n),this._index=t,t>-1&&this._suggestions.length>0)return i=this._dom.suggestions.children[t],i.classList.add(n),r.dispatch(this.input,this._et("focus"),{item:this._suggestions[t]})},Typeahead.prototype._track=function(){var t,e,n;return e=this._dom.input.getBoundingClientRect(),n=e.top+=window.scrollY,t=e.left+=window.scrollX,this._dom.suggestions.style.top=n+e.height+"px",this._dom.suggestions.style.left=t+"px",this._dom.suggestions.style.width=e.width+"px"},Typeahead.behaviours={coerce:{"pass-through":function(t,e){return e},"single-value":function(t,e){return{value:e,label:e}}},element:{default:function(t,e,n){var i;return i=r.create("div",{class:t._bem("mh-typeahead","suggestion")}),i.innerHTML=e.label.replace(RegExp(r.escapeRegExp(n),"gi"),"<mark>$&</mark>"),i}},fetch:{ajax:function(t,e,n,r){var i,s,o,u;return i=n.substr(0,t.minChars).toLowerCase(),(s=t.fromCache("ajax",i))?r(s):(o=e.split("?"),e=1===o.length?e+"?q="+n:e+"&q="+n,u=new XMLHttpRequest,u.addEventListener("load",function(e){var n,s;return s=JSON.parse(e.target.responseText),"success"===s.status?(n=s.payload.items,t.toCache("ajax",i,n),r(n)):r([])}),u.open("GET",e),u.send(null))},array:function(t,e,n,r){return r(e)},"data-list":function(t,e,n,i){var s,o,u,a,h,c,l;for(s=r.one(e),l=r.many("option",s),a=[],o=0,h=l.length;o<h;o++)c=l[o],u={},c.textContent&&(u.label=c.textContent.trim(),u.value=c.textContent.trim()),c.value&&(u.label||(u.label=c.value.trim()),u.value=c.value.trim()),a.push(u);return i(a)},element:function(t,e,n,i){var s,o,u,a,h;return o=r.many(e),h=function(){var t,e,n;for(n=[],t=0,e=o.length;t<e;t++)s=o[t],n.push(s.textContent);return n}(),u=function(){var t,e,n;for(n=[],t=0,e=h.length;t<e;t++)a=h[t],n.push({label:a.trim(),value:a.trim()});return n}(),i(u)},string:function(t,e,n,r){var i,s,o;return o=e.split(",").filter(function(t){return t.trim().length>0}),i=function(){var t,e,n;for(n=[],t=0,e=o.length;t<e;t++)s=o[t],n.push({label:s.trim(),value:s.trim()});return n}(),r(i)}},filter:{contains:function(t,e,n){var r;return r=e.value.toLowerCase(),r.indexOf(n.toLowerCase())>-1},startswith:function(t,e,n){var r;return r=e.value.toLowerCase().substr(0,n.length),n.toLowerCase()===r}},input:{"set-hidden":function(t,e){var n,i;return t.input.value=e.label,i=t.input.getAttribute(t.constructor.clsPrefix+"hidden"),n=r.one(i),n.value=e.id||e.value},"set-value":function(t,e){return t.input.value=e.id||e.value}},sort:{length:function(t,e,n,r){var i,s;return e=e.toLowerCase(),i=e===n.value.substr(0,e.length).toLowerCase(),s=e===r.value.substr(0,e.length).toLowerCase(),i&&!s?-1:s&&!i?1:n.value.length!==r.value.length?n.value.length<r.value.length?-1:1:n.value<r.value?-1:1}}},Typeahead}(),t.exports={Typeahead:i}},function(t,e,n){!function(e,n){t.exports=n()}(this,function(){return function(t){function __webpack_require__(n){if(e[n])return e[n].exports;var r=e[n]={exports:{},id:n,loaded:!1};return t[n].call(r.exports,r,r.exports,__webpack_require__),r.loaded=!0,r.exports}var e={};return __webpack_require__.m=t,__webpack_require__.c=e,__webpack_require__.p="",__webpack_require__(0)}([function(t,e,n){t.exports=n(1)},function(t,e){var n,r,i,s,o,u,a,h,c=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++)if(e in this&&this[e]===t)return e;return-1};r=function(t,e){var n,r,i;null==e&&(e={}),n=document.createElement(t);for(r in e)i=e[r],c.call(n,r)>=0?n[r]=i:n.setAttribute(r,i);return n},a=function(t,e){return null==e&&(e=document),Array.prototype.slice.call(e.querySelectorAll(t))},h=function(t,e){return null==e&&(e=document),e.querySelector(t)},i=function(t,e,n){var r,i,s;null==n&&(n={}),r=document.createEvent("Event"),r.initEvent(e,!0,!0);for(i in n)s=n[i],r[i]=s;return t.dispatchEvent(r)},o=function(t,e){var n,r,i,s;s=[];for(r in e)i=e[r],s.push(function(){var e,s,o,u;for(o=r.split(/\s+/),u=[],e=0,s=o.length;e<s;e++)n=o[e],u.push(t.removeEventListener(n,i));return u}());return s},u=function(t,e){var n,r,i,s;s=[];for(r in e)i=e[r],s.push(function(){var e,s,o,u;for(o=r.split(/\s+/),u=[],e=0,s=o.length;e<s;e++)n=o[e],u.push(t.addEventListener(n,i));return u}());return s},n=function(t,e,n,r,i){var s,o,u,a;null==i&&(i="data-"),u=[];for(o in e)a=e[o],t[o]=a,n.hasOwnProperty(o)&&(t[o]=n[o]),s=i+o.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),r.hasAttribute(s)?"number"==typeof a?u.push(t[o]=parseInt(r.getAttribute(s))):a===!1?u.push(t[o]=!0):u.push(t[o]=r.getAttribute(s)):u.push(void 0);return u},s=function(t){return t.replace(/[\^\$\\\.\*\+\?\(\)\[\]\{\}\|]/g,"\\$&")},t.exports={create:r,one:h,many:a,dispatch:i,ignore:o,listen:u,config:n,escapeRegExp:s}}])})}])});

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ })
/******/ ]);
});