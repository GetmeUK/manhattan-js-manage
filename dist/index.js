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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
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

core = __webpack_require__(2);

flashes = __webpack_require__(3);

forms = __webpack_require__(4);

nav = __webpack_require__(5);

results = __webpack_require__(6);

init = function() {
  core.init();
  flashes.init();
  forms.init();
  nav.init();
  return results.init();
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
/* 3 */
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var $, affixButtons, clearError, effects, focusField, forms, inFieldLabels, init;

$ = __webpack_require__(0);

effects = __webpack_require__(7);

forms = __webpack_require__(8);

affixButtons = function(form) {
  var anchored, btns, fieldset, frame;
  if (form.classList.contains('mh-form--fixed-btns-disallowed')) {
    return;
  }
  form.classList.add('mh-form--fixed-btns');
  btns = $.one('.mh-field--btns', form);
  fieldset = $.closest('.mh-form__fieldset', btns);
  if (fieldset) {
    forms.appendChild(btns);
    if (!fieldset.innerHTML.trim()) {
      fieldset.remove();
    }
  }
  frame = $.closest('.mh-frame', form);
  anchored = function() {
    if (window.innerHeight + window.scrollY >= frame.clientHeight) {
      return btns.classList.remove('mh-field--anchored');
    } else {
      return btns.classList.add('mh-field--anchored');
    }
  };
  anchored();
  return $.listen(window, {
    'scroll': function() {
      return atBottom();
    }
  });
};

clearError = function(input) {
  var child, error, field, i, len, ref;
  field = $.closest('.mh-field__control');
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
  var field, i, input, inputSelector, len, ref, results;
  inputSelector = '.mh-field__text, .mh-field__textarea, .mh-field__select';
  forms.fields.listenForFill(inputSelector);
  ref = $.many(inputSelector);
  results = [];
  for (i = 0, len = ref.length; i < len; i++) {
    input = ref[i];
    field = $.closest(input, '.mh-field__control');
    if (!field) {
      continue;
    }
    results.push($.listen(input, {
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
    }));
  }
  return results;
};

init = function() {
  var i, input, inputErrors, len, nextErrorBtn, primaryForm, primaryFrame;
  inFieldLabels();
  inputErrors = $.many('[data-mh-error]');
  for (i = 0, len = inputErrors.length; i < len; i++) {
    input = inputErrors[i];
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
    primaryFrame = $.closest('.mh-frame', primaryForm);
    if (primaryFrame && primaryFrame.clientHeight > window.innerWidth) {
      affixButtons(primaryForm);
      nextErrorBtn = $.one('.mh-btn--error', primaryForm);
      if (nextErrorBtn) {
        $.listen(nextErrorBtn, {
          'click': function(ev) {
            var activeInputIndex, inputError, inputs, j, len1, results;
            ev.preventDefault();
            inputs = $.many('input, select, textarea, [contentEditable=true]');
            inputErrors = $.many('[data-mh-error]');
            activeInputIndex = inputs.indexOf(document.activeElement);
            if (activeInputIndex > -1) {
              results = [];
              for (j = 0, len1 = inputErrors.length; j < len1; j++) {
                inputError = inputErrors[j];
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var $, _navs, closeNavs, init, mhNav, registerNav, updateNavHeight;

$ = __webpack_require__(0);

mhNav = __webpack_require__(9);

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
      console.log(1);
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
/* 6 */
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ManhattanEffects=t():e.ManhattanEffects=t()}(this,function(){return function(e){function __webpack_require__(o){if(t[o])return t[o].exports;var r=t[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,__webpack_require__),r.loaded=!0,r.exports}var t={};return __webpack_require__.m=e,__webpack_require__.c=t,__webpack_require__.p="",__webpack_require__(0)}([function(e,t,o){e.exports=o(1)},function(e,t){var o;o=function(e,t,o,r,n,l){var c,u,_,f,p,a,i;return null==t&&(t=1),null==o&&(o=[0,0]),null==r&&(r=null),null==n&&(n=null),null==l&&(l=60),null===n&&(n=document.body),a=[n.scrollLeft,n.scrollTop],_=e,1===e.nodeType&&(p=e.getBoundingClientRect(),_=[a[0]+p.left,a[1]+p.top]),_=[_[0]+o[0],_[1]+o[1]],u=[_[0]-a[0],_[1]-a[1]],i=Date.now(),c=function(){var e,o,l;if(e=Math.min((Date.now()-i)/1e3,t),o=e/t,l=[n.scrollLeft,n.scrollTop],n.scrollLeft=a[0]+u[0]*o,n.scrollTop=a[1]+u[1]*o,l[0]===n.scrollLeft&&l[1]===n.scrollTop&&(e=t),e===t)return"function"==typeof r&&r(),clearInterval(f)},f=setInterval(c,1e3/l)},e.exports={scrollTo:o}}])});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ManhattanForms=t():e.ManhattanForms=t()}(this,function(){return function(e){function __webpack_require__(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,__webpack_require__),n.l=!0,n.exports}var t={};return __webpack_require__.m=e,__webpack_require__.c=t,__webpack_require__.i=function(e){return e},__webpack_require__.d=function(e,t,r){__webpack_require__.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},__webpack_require__.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return __webpack_require__.d(t,"a",t),t},__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=3)}([function(e,t,r){var n;n=r(1),e.exports={fields:n}},function(e,t,r){var n,i,o,u;n=r(2),o=function(e){return this.value?n.dispatch(this,"mh-forms-fields--fill",{filled:!0}):n.dispatch(this,"mh-forms-fields--fill",{filled:!1})},i=function(e){var t;return"onAutoFillStart"===e.animationName?n.dispatch(this,"mh-forms-fields--fill",{filled:!0}):"onAutoFillCancel"===e.animationName?(t=!1,this.value&&"password"!==this.type.toLowerCase()&&(t=!0),n.dispatch(this,"mh-forms-fields--fill",{filled:t})):void 0},u=function(e){var t,r,u,a,l,c,s,f,_;if(null==e&&(e="input, select, textarea"),u=n.many(e),n.cssSelectorSupported(":-webkit-autofill"))for(n.one("[data-mh-listen-for-fill]")||(_=document.createElement("style"),_.appendChild(document.createTextNode("")),_.setAttribute("data-mh-listen-for-fill",""),document.head.appendChild(_),f=_.sheet,f.insertRule("@keyframes onAutoFillStart {  from {/**/}  to {/**/}}",0),f.insertRule("@keyframes onAutoFillCancel {  from {/**/}  to {/**/}}",0),f.insertRule("input:-webkit-autofill { animation-name: onAutoFillStart;",0),f.insertRule("input:not(:-webkit-autofill) { animation-name: onAutoFillCancel; }",0)),t=0,l=u.length;t<l;t++)r=u[t],n.ignore(r,{animationstart:i}),n.listen(r,{animationstart:i});for(s=[],a=0,c=u.length;a<c;a++)r=u[a],n.dispatch(r,"mh-forms-fields--fill",{filled:Boolean(r.value)}),n.ignore(r,{change:o,input:o}),s.push(n.listen(r,{change:o,input:o}));return s},e.exports={listenForFill:u}},function(e,t,r){!function(t,r){e.exports=r()}(0,function(){return function(e){function __webpack_require__(r){if(t[r])return t[r].exports;var n=t[r]={exports:{},id:r,loaded:!1};return e[r].call(n.exports,n,n.exports,__webpack_require__),n.loaded=!0,n.exports}var t={};return __webpack_require__.m=e,__webpack_require__.c=t,__webpack_require__.p="",__webpack_require__(0)}([function(e,t,r){e.exports=r(1)},function(e,t){var r,n,i,o,u,a,l,c,s,f,_=[].indexOf||function(e){for(var t=0,r=this.length;t<r;t++)if(t in this&&this[t]===e)return t;return-1};r=function(e,t){var r;if(e.closest)return e.closest(t);for(r=e.matches||e.webkitMatchesSelector||e.mozMatchesSelector||e.msMatchesSelector;e&&!r.call(e,t);)e=e.parentElement;return e},i=function(e,t){var r,n,i;null==t&&(t={}),r=document.createElement(e);for(n in t)i=t[n],_.call(r,n)>=0?r[n]=i:r.setAttribute(n,i);return r},s=function(e,t){return null==t&&(t=document),Array.prototype.slice.call(t.querySelectorAll(e))},f=function(e,t){return null==t&&(t=document),t.querySelector(e)},u=function(e,t,r){var n,i,o;null==r&&(r={}),n=document.createEvent("Event"),n.initEvent(t,!0,!0);for(i in r)o=r[i],n[i]=o;return e.dispatchEvent(n)},l=function(e,t){var r,n,i,o;o=[];for(n in t)i=t[n],o.push(function(){var t,o,u,a;for(u=n.split(/\s+/),a=[],t=0,o=u.length;t<o;t++)r=u[t],a.push(e.removeEventListener(r,i));return a}());return o},c=function(e,t){var r,n,i,o;o=[];for(n in t)i=t[n],o.push(function(){var t,o,u,a;for(u=n.split(/\s+/),a=[],t=0,o=u.length;t<o;t++)r=u[t],a.push(e.addEventListener(r,i));return a}());return o},n=function(e,t,r,n,i){var o,u,a,l;null==i&&(i="data-"),a=[];for(u in t)l=t[u],e[u]=l,r.hasOwnProperty(u)&&(e[u]=r[u]),n&&(o=i+u.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),n.hasAttribute(o)?"number"==typeof l?a.push(e[u]=parseInt(n.getAttribute(o))):l===!1?a.push(e[u]=!0):a.push(e[u]=n.getAttribute(o)):a.push(void 0));return a},a=function(e){return e.replace(/[\^\$\\\.\*\+\?\(\)\[\]\{\}\|]/g,"\\$&")},o=function(e){try{document.querySelector(e)}catch(e){return e,!1}return!0},e.exports={closest:r,create:i,one:f,many:s,dispatch:u,ignore:l,listen:c,config:n,escapeRegExp:a,cssSelectorSupported:o}}])})},function(e,t,r){e.exports=r(0)}])});

/***/ }),
/* 9 */
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ })
/******/ ]);
});