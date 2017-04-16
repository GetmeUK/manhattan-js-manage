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

var $, affixButtons, assets, clearError, datePicker, effects, focusField, forms, inFieldLabels, init, typeahead;

$ = __webpack_require__(0);

assets = __webpack_require__(7);

datePicker = __webpack_require__(8);

effects = __webpack_require__(9);

forms = __webpack_require__(10);

typeahead = __webpack_require__(12);

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
  var i, input, inputErrors, j, k, l, len, len1, len2, len3, nextErrorBtn, primaryForm, primaryFrame, ref, ref1, ref2;
  inFieldLabels();
  ref = $.many('[data-mh-assets-field]');
  for (i = 0, len = ref.length; i < len; i++) {
    input = ref[i];
    new assets.Field(input);
  }
  ref1 = $.many('[data-mh-date-picker]');
  for (j = 0, len1 = ref1.length; j < len1; j++) {
    input = ref1[j];
    new datePicker.DatePicker(input);
  }
  ref2 = $.many('[data-mh-typeahead]');
  for (k = 0, len2 = ref2.length; k < len2; k++) {
    input = ref2[k];
    typeahead = new Typeahead(input);
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
    primaryFrame = $.closest('.mh-frame', primaryForm);
    if (primaryFrame && primaryFrame.clientHeight > window.innerWidth) {
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
/* 5 */
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

!function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ManhattanAssets=e():t.ManhattanAssets=e()}(this,function(){return function(t){function __webpack_require__(s){if(e[s])return e[s].exports;var i=e[s]={exports:{},id:s,loaded:!1};return t[s].call(i.exports,i,i.exports,__webpack_require__),i.loaded=!0,i.exports}var e={};return __webpack_require__.m=t,__webpack_require__.c=e,__webpack_require__.p="",__webpack_require__(0)}([function(t,e,s){t.exports=s(12)},,,,,function(t,e,s){var i,r,n,o,a,u,p;i=s(6),r=s(7).Acceptor,n=s(8).Asset,a=s(9).Monitor,u=s(10).Uploader,p=s(11).Viewer,o=function(){function Field(t,e){null==e&&(e={}),i.config(this,{endpoint:"/cms/upload-asset",label:"Select a file..."},e,t,this.constructor.clsPrefix),this._dom={},this._dom.input=t,this._dom.input.__mh_asset_field=this,this._dom.field=i.create("div",{class:this._bem("mh-asset-field")}),t.parentNode.insertBefore(this._dom.field,t),Object.defineProperty(this,"asset",{get:function(t){return function(){return t._asset}}(this),set:function(t){return function(e){return t._asset=e,t._asset?t.input.value=JSON.stringify(t._asset.toJSONType()):t.input.value="",t._update(),i.dispatch(t.field,t._et("change"),{asset:t.asset})}}(this)}),Object.defineProperty(this,"field",{value:this._dom.field}),Object.defineProperty(this,"input",{value:this._dom.input}),Object.defineProperty(this,"upload",{get:function(t){return function(){return t._upload}}(this)}),this.input.style.display="none",this._asset=null,this.input.value&&(this._asset=n.fromJSONType(JSON.parse(this.input.value))),this._uploader=null,this._upload=null,this._update()}return Field.clsPrefix="data-mh-asset-field--",Field.prototype._bem=function(t,e,s){var i;return null==e&&(e=""),null==s&&(s=""),i=t,e&&(i=i+"__"+e),s&&(i=i+"--"+s),i},Field.prototype._et=function(t){return"mh-assets--"+t},Field.prototype._update=function(){var t,e,s;return this.field.innerHTML="",this.asset?(s=new p(this.asset),i.listen(s.view,{"mh-assets--remove-asset":function(t){return function(){return t.asset=null}}(this)}),this.field.appendChild(s.view)):this.upload?(e=new a(this._uploader,this.upload),this.field.appendChild(e.monitor)):(t=new r(this.label),this.field.appendChild(t.acceptor),this._uploader=new u(t.input,{endpoint:this.endpoint}),i.listen(t.input,{"mh-assets--upload-abort":function(t){return function(e){return t._upload=null,t._update()}}(this),"mh-assets--upload-error":function(t){return function(e){return t._upload=null,t._update()}}(this),"mh-assets--upload-start":function(t){return function(e){return t._upload=e.ref,t._update()}}(this),"mh-assets--upload-success":function(t){return function(e){return t._upload=null,t.asset=e.asset}}(this)}))},Field}(),t.exports={Field:o}},function(t,e,s){!function(e,s){t.exports=s()}(this,function(){return function(t){function __webpack_require__(s){if(e[s])return e[s].exports;var i=e[s]={exports:{},id:s,loaded:!1};return t[s].call(i.exports,i,i.exports,__webpack_require__),i.loaded=!0,i.exports}var e={};return __webpack_require__.m=t,__webpack_require__.c=e,__webpack_require__.p="",__webpack_require__(0)}([function(t,e,s){t.exports=s(1)},function(t,e){var s,i,r,n,o,a,u,p,h,c,l=[].indexOf||function(t){for(var e=0,s=this.length;e<s;e++)if(e in this&&this[e]===t)return e;return-1};s=function(t,e){var s;if(t.closest)return t.closest(e);for(s=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.msMatchesSelector;t&&!s.call(t,e);)t=t.parentElement;return t},r=function(t,e){var s,i,r;null==e&&(e={}),s=document.createElement(t);for(i in e)r=e[i],l.call(s,i)>=0?s[i]=r:s.setAttribute(i,r);return s},h=function(t,e){return null==e&&(e=document),Array.prototype.slice.call(e.querySelectorAll(t))},c=function(t,e){return null==e&&(e=document),e.querySelector(t)},o=function(t,e,s){var i,r,n;null==s&&(s={}),i=document.createEvent("Event"),i.initEvent(e,!0,!0);for(r in s)n=s[r],i[r]=n;return t.dispatchEvent(i)},u=function(t,e){var s,i,r,n;n=[];for(i in e)r=e[i],n.push(function(){var e,n,o,a;for(o=i.split(/\s+/),a=[],e=0,n=o.length;e<n;e++)s=o[e],a.push(t.removeEventListener(s,r));return a}());return n},p=function(t,e){var s,i,r,n;n=[];for(i in e)r=e[i],n.push(function(){var e,n,o,a;for(o=i.split(/\s+/),a=[],e=0,n=o.length;e<n;e++)s=o[e],a.push(t.addEventListener(s,r));return a}());return n},i=function(t,e,s,i,r){var n,o,a,u;null==r&&(r="data-"),a=[];for(o in e)u=e[o],t[o]=u,s.hasOwnProperty(o)&&(t[o]=s[o]),i&&(n=r+o.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),i.hasAttribute(n)?"number"==typeof u?a.push(t[o]=parseInt(i.getAttribute(n))):u===!1?a.push(t[o]=!0):a.push(t[o]=i.getAttribute(n)):a.push(void 0));return a},a=function(t){return t.replace(/[\^\$\\\.\*\+\?\(\)\[\]\{\}\|]/g,"\\$&")},n=function(t){var e;try{document.querySelector(t)}catch(t){return e=t,!1}return!0},t.exports={closest:s,create:r,one:c,many:h,dispatch:o,ignore:u,listen:p,config:i,escapeRegExp:a,cssSelectorSupported:n}}])})},function(t,e,s){var i,r;i=s(6),r=function(){function Acceptor(t){null==t&&(t="Select a file..."),this._dom={},this._dom.acceptor=i.create("div",{class:this._bem("mh-assets-acceptor")}),this._dom.input=i.create("input",{class:this._bem("mh-assets-acceptor","input"),type:"file",name:"acceptor__"+this._newId()}),this._dom.acceptor.appendChild(this._dom.input),this._dom.label=i.create("div",{class:this._bem("mh-assets-acceptor","label")}),this._dom.label.textContent=t,this._dom.acceptor.appendChild(this._dom.label),Object.defineProperty(this,"acceptor",{value:this._dom.acceptor}),Object.defineProperty(this,"input",{value:this._dom.input})}return Acceptor._counter=0,Acceptor.prototype._bem=function(t,e,s){var i;return null==e&&(e=""),null==s&&(s=""),i=t,e&&(i=i+"__"+e),s&&(i=i+"--"+s),i},Acceptor.prototype._newId=function(){return Acceptor._counter+=1,Acceptor._counter},Acceptor}(),t.exports={Acceptor:r}},function(t,e){var s,i;s=function(){function Asset(t,e,s,r,n,o,a,u){this._key=t,this._filename=e,this._type=s,this._contentType=r,this._urls=n,this.meta=new i(o,a),this._variations=u,Object.defineProperty(this,"key",{value:this._key}),Object.defineProperty(this,"filename",{value:this._filename}),Object.defineProperty(this,"type",{value:this._type}),Object.defineProperty(this,"contentType",{value:this._contentType}),Object.defineProperty(this,"urls",{get:function(t){return function(){var e,s,i;n={},s=t._urls;for(e in s)i=s[e],n[e]=i;return n}}(this)})}return Asset.prototype.toJSONType=function(){return{key:this.key,filename:this.filename,type:this.type,content_type:this.contentType,url:this.urls.origin,core_meta:this.meta.getCoreMeta(),user_meta:this.meta.getUserMeta(),variations:this._variations}},Asset.fromJSONType=function(t){var e;return e={origin:t.url},"image"===t.type&&t.variations&&(t.variations["--base--"]&&(e.draft=t.variations["--base--"].url),t.variations["--thumb--"]&&(e.thumb=t.variations["--thumb--"].url)),new Asset(t.key,t.filename,t.type,t.content_type,e,t.core_meta,t.user_meta,t.variations)},Asset}(),i=function(){function AssetMeta(t,e){var s,i,r,n,o,a,u,p;this._coreMeta=t||{},this._coreOverrides={},i=function(t){return function(e){return t=t,function(){return void 0!==t._coreOverrides[e]?t._coreOverrides[e]:void 0!==t._coreMeta[e]?t._coreMeta[e]:void 0}}}(this),u=function(t){return function(e){return t=t,function(s){return t._coreOverrides[e]=s}}}(this),o=this._coreMeta;for(n in o)s=o[n],Object.defineProperty(this,n,{get:i(n),set:u(n)});a=e||{};for(r in a)p=a[r],this[r]=p}return AssetMeta.prototype.getCoreMeta=function(){return JSON.parse(JSON.stringify(this._coreMeta))},AssetMeta.prototype.getUserMeta=function(){var t,e,s,i;t=JSON.parse(JSON.stringify(this._coreOverrides)),s=this;for(e in s)i=s[e],this.hasOwnProperty(e)&&!this[e]instanceof Function&&(t[e]=i);return JSON.parse(JSON.stringify(t))},AssetMeta}(),t.exports={Asset:s}},function(t,e,s){var i,r;i=s(6),r=function(){function Monitor(t,e){this._uploader=t,this._upload=e,this._dom={},this._dom.monitor=i.create("div",{class:this._bem("mh-assets-monitor")}),Object.defineProperty(this,"uploader",{value:this._uploader}),Object.defineProperty(this,"upload",{value:this._upload}),Object.defineProperty(this,"monitor",{value:this._dom.monitor}),i.listen(this.uploader.input,{"mh-assets--upload-progress":function(t){return function(e){if(e.ref===t.upload)return t._dom.gauge.setAttribute("data-mh-progress",parseInt(100*e.progress)+"%"),t._dom.progress.style.width=100*e.progress+"%"}}(this),"mh-assets--upload-end":function(t){return function(e){if(e.ref===t.upload)return t.monitor.classList.add(t._bem("mh-asset-monitor","","complete")),i.dispatch(t.monitor,t._et("monitor-complete"))}}(this)}),this._template()}return Monitor.prototype._bem=function(t,e,s){var i;return null==e&&(e=""),null==s&&(s=""),i=t,e&&(i=i+"__"+e),s&&(i=i+"--"+s),i},Monitor.prototype._et=function(t){return"mh-assets--"+t},Monitor.prototype._template=function(){return this._dom.gauge=i.create("div",{class:this._bem("mh-assets-monitor","gauge"),"data-mh-progress":"0%"}),this.monitor.appendChild(this._dom.gauge),this._dom.progress=i.create("div",{class:this._bem("mh-assets-monitor","progress")}),this._dom.gauge.appendChild(this._dom.progress),this._dom.cancel=i.create("div",{class:this._bem("mh-assets-monitor","cancel")}),this.monitor.appendChild(this._dom.cancel),i.listen(this._dom.cancel,{click:function(t){return function(e){return e.preventDefault(),t.uploader.cancel(t.upload)}}(this)})},Monitor}(),t.exports={Monitor:r}},function(t,e,s){var i,r,n;i=s(6),r=s(8).Asset,n=function(){function Uploader(t,e){null==e&&(e={}),this._dom={},this._dom.input=t,this._dom.input.__mh_assets_uploader=this,this._uploads={},this._queued_uploads=[],Object.defineProperty(this,"input",{value:this._dom.input}),Object.defineProperty(this,"uploadCount",{get:function(t){return function(){var e,s;return function(){var t,i;t=this._uploads,i=[];for(s in t)e=t[s],i.push(s);return i}.call(t).length}}(this)}),i.config(this,{allowMultiple:!1,endpoint:"/cms/upload-asset",maxConcurrentUploads:2},e),this._behaviours={},i.config(this._behaviours,{formData:"manhattan",response:"manhattan"},e),this.allowMultiple&&this.input.setAttribute("multiple",!0),i.listen(this.input,{change:function(t){return function(e){var s,i,r,n;if(t.allowMultiple)for(n=e.target.files,i=0,r=n.length;i<r;i++)s=n[i],t._upload(s);else t._upload(e.target.files[0]);if(t.input.value="",t.input.value)return t.input.type="text",t.input.type="file"}}(this)})}return Uploader.prototype.cancel=function(t){var e,s,i;if(!t){i=[];for(s in uploads)e=uploads[s],i.push(s.abort());return i}if(this._uploads[t])return t.abort()},Uploader.prototype.progress=function(t){var e,s,i;if(!t){i=0;for(e in uploads)s=uploads[e],i+=s.progress;return i/Math.max(1,this.uploadCount)}if(this._uploads[t])return this._uploads[t].progress},Uploader.prototype._clear=function(t){var e;return this._uploads[t]&&delete this._uploads[t],this._queued_uploads.length>0&&(e=this._queued_uploads.shift(),this._start_upload(e[0],e[1])),i.dispatch(this.input,this._et("upload-end"),{ref:t})},Uploader.prototype._start_upload=function(t,e){return this._uploads[t]={progress:0},i.dispatch(this.input,this._et("upload-start"),{ref:t}),t.open("POST",this.endpoint,!0),t.send(e)},Uploader.prototype._et=function(t){return"mh-assets--"+t},Uploader.prototype._on_abort=function(t){if(this._uploads[t])return i.dispatch(this.input,this._et("upload-abort"),{ref:t}),this._clear(t)},Uploader.prototype._on_error=function(t,e){if(null==e&&(e=""),this._uploads[t])return i.dispatch(this.input,this._et("upload-error"),{ref:t,reason:e}),this._clear(t)},Uploader.prototype._on_progress=function(t,e){if(this._uploads[t])return this._uploads[t].progress=e,i.dispatch(this.input,this._et("upload-progress"),{ref:t,progress:e})},Uploader.prototype._on_success=function(t,e){if(this._uploads[t])return i.dispatch(this.input,this._et("upload-success"),{ref:t,asset:e}),this._clear(t)},Uploader.prototype._upload=function(t){var e,s,i,n,o,a,u,p;return s=this._behaviours.formData,e=this.constructor.behaviours.formData[s],i=e(this,t),p=new XMLHttpRequest,u=function(t,e){return function(s){return t._on_progress(e,s.loaded/s.total)}},p.upload.addEventListener("progress",u(this,p)),a=function(t,i){return function(n){var o,a,u;return u=n.target.responseText,s=t._behaviours.response,a=t.constructor.behaviours,e=a.response[s],o=e(this,i.responseText),o instanceof r?t._on_success(i,o):t._on_error(i,o.message)}},p.addEventListener("load",a(this,p)),o=function(t,e){return function(s){return t._on_error(e)}},p.addEventListener("error",o(this,p)),n=function(t,e){return function(s){return t._on_abort(e)}},p.addEventListener("abort",n(this,p)),this.uploadCount<this.maxConcurrentUploads?this._start_upload(p,i):this._queued_uploads.push([p,i])},Uploader.behaviours={formData:{manhattan:function(t,e){var s,r;return r=new FormData,r.append("file",e),s=i.one('[name="csrf_token"]',t.input.form),s&&r.append("csrf_token",s.value),r}},response:{manhattan:function(t,e){var s,i;try{i=JSON.parse(e)}catch(t){return s=t,new Error("Unable to parse response")}return"success"===i.status?r.fromJSONType(i.payload.asset):new Error(i.payload.reason)}}},Uploader}(),t.exports={Uploader:n}},function(t,e,s){var i,r;i=s(6),r=function(){function Viewer(t){this._asset=t,this._dom={},this._dom.view=i.create("div",{class:this._bem("mh-assets-view")}),Object.defineProperty(this,"asset",{value:this._asset}),Object.defineProperty(this,"view",{value:this._dom.view}),this._template(),this._populate()}return Viewer.prototype._bem=function(t,e,s){var i;return null==e&&(e=""),null==s&&(s=""),i=t,e&&(i=i+"__"+e),s&&(i=i+"--"+s),i},Viewer.prototype._et=function(t){return"mh-assets--"+t},Viewer.prototype._populate=function(){var t,e;return"image"===this.asset.type?this.view.classList.add(this._bem("mh-assets-view","","image")):this.view.classList.add(this._bem("mh-assets-view","","file")),"image"===this.asset.type?this._dom.thumb.style["background-image"]="url("+this.asset.urls.thumb+")":this._dom.icon.setAttribute("data-mh-content-type",this.asset.contentType),this._dom.filename.textContent=this.asset.filename,this.asset.meta.length&&(t=this.asset.meta.length/1e3,e="kb",t>1e3&&(t/=1e3,e="mb"),t=t.toFixed(1),t=t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),this._dom.fileSize.textContent=""+t+e),this._dom.download.setAttribute("href",this.asset.urls.origin)},Viewer.prototype._template=function(){return this._dom.content=i.create("div",{class:this._bem("mh-assets-view","content")}),this.view.appendChild(this._dom.content),this._dom.icon=i.create("div",{class:this._bem("mh-assets-view","icon")}),this._dom.content.appendChild(this._dom.icon),this._dom.thumb=i.create("div",{class:this._bem("mh-assets-view","thumb")}),this._dom.content.appendChild(this._dom.thumb),this._dom.info=i.create("div",{class:this._bem("mh-assets-view","info")}),this.view.appendChild(this._dom.info),this._dom.filename=i.create("div",{class:this._bem("mh-assets-view","filename")}),this._dom.info.appendChild(this._dom.filename),this._dom.fileSize=i.create("div",{class:this._bem("mh-assets-view","file-size")}),this._dom.info.appendChild(this._dom.fileSize),this._dom.actions=i.create("div",{class:this._bem("mh-assets-view","actions")}),this.view.appendChild(this._dom.actions),this._dom.download=i.create("a",{download:!0,target:"_blank"}),this._dom.download.classList.add(this._bem("mh-assets-view","action")),this._dom.download.classList.add(this._bem("mh-assets-view","action","download")),this._dom.download.textContent="Download",this._dom.actions.appendChild(this._dom.download),this._dom.remove=i.create("a",{href:"#"}),this._dom.remove.classList.add(this._bem("mh-assets-view","action")),this._dom.remove.classList.add(this._bem("mh-assets-view","action","remove")),this._dom.remove.textContent="Remove",this._dom.actions.appendChild(this._dom.remove),i.listen(this._dom.remove,{click:function(t){return function(e){return e.preventDefault(),i.dispatch(t.view,t._et("remove-asset"),{asset:t.asset})}}(this)})},Viewer}(),t.exports={Viewer:r}},function(t,e,s){var i;i=s(5).Field,t.exports={Field:i}}])});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ManhattanDatePicker=t():e.ManhattanDatePicker=t()}(this,function(){return function(e){function __webpack_require__(r){if(t[r])return t[r].exports;var n=t[r]={exports:{},id:r,loaded:!1};return e[r].call(n.exports,n,n.exports,__webpack_require__),n.loaded=!0,n.exports}var t={};return __webpack_require__.m=e,__webpack_require__.c=t,__webpack_require__.p="",__webpack_require__(0)}([function(e,t,r){r(1),e.exports=r(2)},function(e,t,r){e.exports=r.p+"date-picker.css"},function(e,t,r){var n,i,a,s,o,c=function(e,t){return function(){return e.apply(t,arguments)}},u=function(e,t){function ctor(){this.constructor=e}for(var r in t)h.call(t,r)&&(e[r]=t[r]);return ctor.prototype=t.prototype,e.prototype=new ctor,e.__super__=t.prototype,e},h={}.hasOwnProperty;n=r(3),a=r(4).Calendar,i=function(){function BasePicker(){this.close=c(this.close,this),this._isOpen=!1,Object.defineProperty(this,"isOpen",{get:function(e){return function(){return e._isOpen}}(this)}),n.listen(window,{"fullscreenchange orientationchange resize":function(e){return function(t){if(e.isOpen)return e.close("resize")}}(this)})}return BasePicker.prototype.close=function(e,t,r){if(this.isOpen)return this._dom.picker.classList.add(this._bem(t,"","closed")),this._isOpen=!1,n.dispatch(e,this._et("close"),{reason:r})},BasePicker.prototype._bem=function(e,t,r){var n;return null==t&&(t=""),null==r&&(r=""),n=e,t&&(n=n+"__"+t),r&&(n=n+"--"+r),n},BasePicker.prototype._track=function(e){var t,r,n;return r=e.getBoundingClientRect(),n=r.top+=window.scrollY,t=r.left+=window.scrollX,this._dom.picker.style.top=n+r.height+"px",this._dom.picker.style.left=t+"px"},BasePicker}(),s=function(e){function DatePicker(e,t){var r,i;null==t&&(t={}),this.open=c(this.open,this),DatePicker.__super__.constructor.call(this),n.config(this,{closeOnPick:!1,format:"human_en",parsers:["human_en","dmy","iso"]},t,e,this.constructor.clsPrefix),this._behaviours={},n.config(this._behaviours,{input:"set-value"},t,e,this.constructor.clsPrefix),this._dom={},this._dom.input=e,this._dom.input.__mh_datePicker=this,this._dom.picker=n.create("div",{class:[this._bem("mh-date-picker"),this._bem("mh-date-picker","","closed")].join(" ")}),document.body.appendChild(this._dom.picker),i=a.proxyOptions(t,e),this._calendar=new a(this._dom.picker,i),Object.defineProperty(this,"calendar",{get:function(e){return function(){return e._calendar}}(this)}),Object.defineProperty(this,"input",{value:this._dom.input}),n.listen(this.input,{blur:function(e){return function(){return e.close("blur")}}(this),click:function(e){return function(){return e.open()}}(this),focus:function(e){return function(){return e.open()}}(this),change:function(e){return function(){var t;if(t=a.parseDate(e.input.value,e.parsers))return e.pick(t,"input")}}(this)}),r={},r[this.calendar._et("pick")]=function(e){return function(t){return e.pick(t.date,"calendar")}}(this),n.listen(this.calendar.calendar,r)}return u(DatePicker,e),DatePicker.clsPrefix="data-mh-date-picker--",DatePicker.prototype.close=function(e){return DatePicker.__super__.close.call(this,this.input,"mh-date-picker",e)},DatePicker.prototype.open=function(){var e;return e=a.parseDate(this.input.value,this.parsers),e&&(this.calendar.goto(e.getMonth(),e.getFullYear()),this.calendar.select(e)),this._track(),this._dom.picker.classList.remove(this._bem("mh-date-picker","","closed")),this._isOpen=!0,n.dispatch(this.input,this._et("open"))},DatePicker.prototype.pick=function(e,t){if(null==t&&(t=""),this.calendar.select(e),n.dispatch(this.input,this._et("pick"),{date:e,source:t})&&(this.constructor.behaviours.input[this._behaviours.input](this,e),n.dispatch(this.input,this._et("picked"),{date:e,source:t}),this.closeOnPick))return this.close({reason:"pick"})},DatePicker.prototype._et=function(e){return"mh-date-picker--"+e},DatePicker.prototype._track=function(){return DatePicker.__super__._track.call(this,this.input)},DatePicker.behaviours={input:{"set-hidden":function(e,t){var r,i,s,o,c;return r=a.formats[e.format](t),e.input.value=r,c=e.input.getAttribute(e.constructor.clsPrefix+"hidden"),i=n.one(c),o=e.input.getAttribute(e.constructor.clsPrefix+"hidden-format"),s=a.formats[o](t),i.value=s},"set-value":function(e,t){var r;return r=a.formats[e.format](t),e.input.value=r}}},DatePicker}(i),o=function(e){function DateRangePicker(e,t,r){var i,s,o,c,u,h;for(null==r&&(r={}),DateRangePicker.__super__.constructor.call(this),n.config(this,{closeOnPick:!1,format:"human_en",parsers:["human_en","dmy","iso"],pinToStart:!1},r,e,this.constructor.clsPrefix),this._behaviours={},n.config(this._behaviours,{input:"set-value"},r,e,this.constructor.clsPrefix),this._dom={},this._dom.picker=n.create("div",{class:[this._bem("mh-date-range-picker"),this._bem("mh-date-range-picker","","closed")].join(" ")}),document.body.appendChild(this._dom.picker),this._dom.startInput=e,this._dom.startInput.__mh_dateRangePicker=this,this._dom.endInput=t,this._dom.endInput.__mh_dateRangePicker=this,u=a.proxyOptions(r,e),this._calendars=[new a(this._dom.picker,u),new a(this._dom.picker,u)],this._picking="start",Object.defineProperty(this,"calendars",{get:function(e){return function(){return e._calendars}}(this)}),Object.defineProperty(this,"endInput",{value:this._dom.endInput}),Object.defineProperty(this,"startInput",{value:this._dom.startInput}),Object.defineProperty(this,"picking",{get:function(e){return function(){return e._picking}}(this)}),h=[this.startInput,this.endInput],s=0,c=h.length;s<c;s++)o=h[s],n.listen(o,{click:function(e){return e.target.focus()},focus:function(e){return function(t){return t.target===e.startInput?e._picking="start":e._picking="end",e.open()}}(this),blur:function(e){return function(){var t;if(t=document.activeElement,e.startInput!==t&&e.endInput!==t)return e.close("blur")}}(this),change:function(e){return function(t){var r,n;if(r=a.parseDate(t.target.value,e.parsers))return n=e.calendars[0].dateRange,"start"===e.picking?n[0]=r:n[1]=r,e.pick(n,{source:"input"})}}(this)});i={},i[this.calendars[0]._et("pick")]=function(e){return function(t){var r;return r=e.calendars[0].dateRange,"start"===e.picking?r[0]=t.date:r[1]=t.date,e.pick(r,{source:"calendar"})}}(this),i[this.calendars[0]._et("view")]=function(e){return function(t){return 0===e.calendars.indexOf(t.calendar)?e.calendars[1].sync(e.calendars[0],1):e.calendars[0].sync(e.calendars[1],-1)}}(this),n.listen(this.calendars[0].calendar,i),n.listen(this.calendars[1].calendar,i)}return u(DateRangePicker,e),DateRangePicker.clsPrefix="data-mh-date-range-picker--",DateRangePicker.prototype.close=function(e){return DateRangePicker.__super__.close.call(this,this.startInput,"mh-date-range-picker",e)},DateRangePicker.prototype.open=function(){var e,t,r,i,s,o,c,u,h,d,l,p,f;if(c=this.startInput,"end"===this.picking&&(c=this.endInput),d=a.parseDate(this.startInput.value,this.parsers),i=a.parseDate(this.endInput.value,this.parsers),r=this.calendars[0].dateRange,d&&(r[0]=d),i&&(r[1]=i),r[1]<r[0])return this.pick([r[1],r[0]]),void this.endInput.focus();for(h=this.calendars,o=0,u=h.length;o<u;o++)e=h[o],e.select(r[0],r[1]);return l=r[0].getMonth()+"."+r[0].getFullYear(),s=r[1].getMonth()+"."+r[1].getFullYear(),f=[this.calendars[0].month+"."+this.calendars[0].year,this.calendars[1].month+"."+this.calendars[1].year],f.indexOf(l)===-1&&f.indexOf(s)===-1&&(p=r[0],this.calendars[0].goto(p.getMonth(),p.getFullYear())),this._track(this.pinToStart?this.startInput:c),t=this._bem("mh-date-range-picker","","closed"),this._dom.picker.classList.remove(t),this._isOpen=!0,n.dispatch(this.startInput,this._et("open"))},DateRangePicker.prototype.pick=function(e,t){var r,i,a,s,o;for(o=this.calendars,a=0,s=o.length;a<s;a++)r=o[a],r.select(e[0],e[1]);if(i={dateRange:e,source:t},n.dispatch(this.startInput,this._et("pick"),i)&&(this.constructor.behaviours.input[this._behaviours.input](this,e),n.dispatch(this.startInput,this._et("picked"),i),"start"===this.picking?this.endInput.focus():this.startInput.focus(),this.closeOnPick))return this.close()},DateRangePicker.prototype._et=function(e){return"mh-date-range-picker--"+e},DateRangePicker.behaviours={input:{"set-value":function(e,t){var r;return r=a.formats[e.format],e.startInput.value=r(t[0]),e.endInput.value=r(t[1])}}},DateRangePicker}(i),e.exports={Calendar:a,DatePicker:s,DateRangePicker:o}},function(e,t,r){!function(t,r){e.exports=r()}(this,function(){return function(e){function __webpack_require__(r){if(t[r])return t[r].exports;var n=t[r]={exports:{},id:r,loaded:!1};return e[r].call(n.exports,n,n.exports,__webpack_require__),n.loaded=!0,n.exports}var t={};return __webpack_require__.m=e,__webpack_require__.c=t,__webpack_require__.p="",__webpack_require__(0)}([function(e,t,r){e.exports=r(1)},function(e,t){var r,n,i,a,s,o,c,u,h=[].indexOf||function(e){for(var t=0,r=this.length;t<r;t++)if(t in this&&this[t]===e)return t;return-1};n=function(e,t){var r,n,i;null==t&&(t={}),r=document.createElement(e);for(n in t)i=t[n],h.call(r,n)>=0?r[n]=i:r.setAttribute(n,i);return r},c=function(e,t){return null==t&&(t=document),Array.prototype.slice.call(t.querySelectorAll(e))},u=function(e,t){return null==t&&(t=document),t.querySelector(e)},i=function(e,t,r){var n,i,a;null==r&&(r={}),n=document.createEvent("Event"),n.initEvent(t,!0,!0);for(i in r)a=r[i],n[i]=a;return e.dispatchEvent(n)},s=function(e,t){var r,n,i,a;a=[];for(n in t)i=t[n],a.push(function(){var t,a,s,o;for(s=n.split(/\s+/),o=[],t=0,a=s.length;t<a;t++)r=s[t],o.push(e.removeEventListener(r,i));return o}());return a},o=function(e,t){var r,n,i,a;a=[];for(n in t)i=t[n],a.push(function(){var t,a,s,o;for(s=n.split(/\s+/),o=[],t=0,a=s.length;t<a;t++)r=s[t],o.push(e.addEventListener(r,i));return o}());return a},r=function(e,t,r,n,i){var a,s,o,c;null==i&&(i="data-"),o=[];for(s in t)c=t[s],e[s]=c,r.hasOwnProperty(s)&&(e[s]=r[s]),n&&(a=i+s.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),n.hasAttribute(a)?"number"==typeof c?o.push(e[s]=parseInt(n.getAttribute(a))):c===!1?o.push(e[s]=!0):o.push(e[s]=n.getAttribute(a)):o.push(void 0));return o},a=function(e){return e.replace(/[\^\$\\\.\*\+\?\(\)\[\]\{\}\|]/g,"\\$&")},e.exports={create:n,one:u,many:c,dispatch:i,ignore:s,listen:o,config:r,escapeRegExp:a}}])})},function(e,t,r){var n,i,a=function(e,t){return function(){return e.apply(t,arguments)}};n=r(3),i=function(){function Calendar(e,t){var r,i,s,o,c,u,h,d,l,p;for(null==t&&(t={}),this.goto=a(this.goto,this),this.destroy=a(this.destroy,this),n.config(this,Calendar.getDefaultConfig(),t),this._behaviours={},n.config(this._behaviours,{test:"any"},t),d=new Date,d.setHours(0,0,0,0),this._dateRange=[d,d],this._month=d.getMonth(),this._year=d.getFullYear(),this._dom={},this._dom.parent=e,this._dom.calendar=n.create("div",{class:this._bem("mh-calendar")}),e.appendChild(this._dom.calendar),this._dom.nav=n.create("div",{class:this._bem("mh-calendar","nav")}),this._dom.calendar.appendChild(this._dom.nav),this._dom.month=n.create("div",{class:this._bem("mh-calendar","month")}),this._dom.nav.appendChild(this._dom.month),this._dom.next=n.create("div",{class:this._bem("mh-calendar","next")}),this._dom.previous=n.create("div",{class:this._bem("mh-calendar","previous")}),this._dom.nav.appendChild(this._dom.next),this._dom.nav.appendChild(this._dom.previous),this._dom.weekdays=n.create("div",{class:this._bem("mh-calendar","weekdays")}),this._dom.calendar.appendChild(this._dom.weekdays),i=s=c=this.firstWeekday,u=this.firstWeekday+7;c<=u?s<u:s>u;i=c<=u?++s:--s)l=n.create("div",{class:this._bem("mh-calendar","weekday")}),p=i,i>=this.weekdayNames.length&&(p-=this.weekdayNames.length),l.innerHTML=this.weekdayNames[p],this._dom.weekdays.appendChild(l);for(this._dom.dates=n.create("div",{class:this._bem("mh-calendar","dates")}),this._dom.calendar.appendChild(this._dom.dates),i=o=0,h=42;0<=h?o<h:o>h;i=0<=h?++o:--o)r=n.create("div",{class:this._bem("mh-calendar","date")}),this._dom.dates.appendChild(r);Object.defineProperty(this,"calendar",{value:this._dom.calendar}),Object.defineProperty(this,"parent",{value:this._dom.parent}),Object.defineProperty(this,"dateRange",{get:function(){return this._dateRange.slice()}}),Object.defineProperty(this,"month",{get:function(){return this._month}}),Object.defineProperty(this,"year",{get:function(){return this._year}}),n.listen(this._dom.calendar,{mousedown:function(e){return e.preventDefault()}}),n.listen(this._dom.next,{click:function(e){return function(t){return t.preventDefault(),e.next()}}(this)}),n.listen(this._dom.previous,{click:function(e){return function(t){return t.preventDefault(),e.previous()}}(this)}),n.listen(this._dom.dates,{click:function(e){return function(t){var r,i;if(t.preventDefault(),i=t.target,i!==e._dom.dates){for(;i.parentNode!==e._dom.dates;)i=i.parentNode;if(r=e._bem("mh-calendar","date","blocked"),!i.classList.contains(r))return n.dispatch(e.calendar,e._et("pick"),{calendar:e,date:i.__mh_date})}}}(this)}),this.update()}return Calendar.getDefaultConfig=function(){return{dates:[],minDate:null,maxDate:null,firstWeekday:1,monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],weekdayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]}},Calendar.prototype.destroy=function(){if(this.calendar.parentNode===this.parent)return this.parent.removeChild(this.calendar)},Calendar.prototype.goto=function(e,t){if(this._month!==e||t!==this._year)return this._month=e,this._year=t,this.update(),n.dispatch(this.calendar,this._et("view"),{calendar:this,month:e,year:t})},Calendar.prototype.next=function(){return this.offset(1)},Calendar.prototype.offset=function(e,t){var r,n;return null==t&&(t=0),e>0?t+=Math.floor(Math.abs(e)/12):t-=Math.floor(Math.abs(e)/12),e%=12,r=this._month+e,n=this._year+t,r<0?(r=12+r,n-=1):r>11&&(r-=12,n+=1),this.goto(r,n)},Calendar.prototype.previous=function(){return this.offset(-1)},Calendar.prototype.select=function(e,t){return null==t&&(t=null),t?this._dateRange=[e,t]:this._dateRange=[e,e],this.update()},Calendar.prototype.sync=function(e,t,r){var n,i;if(null==r&&(r=0),t>0?r+=Math.floor(Math.abs(t)/12):r-=Math.floor(Math.abs(t)/12),t%=12,n=e.month+t,i=e.year+r,n<0?(n=12+n,i-=1):n>11&&(n-=12,i+=1),this._month!==n||i!==this._year)return this._month=n,this._year=i,this.update()},Calendar.prototype.update=function(){var e,t,r,n,i,a,s,o,c,u,h;for(this._dom.month.innerHTML=this.monthNames[this.month]+", "+this.year,h=new Date(this.year,this.month,1).getDay(),n=h-this.firstWeekday,n<0&&(n=7-Math.abs(n)),t=new Date(this.year,this.month,1),n>0&&t.setDate(t.getDate()-n),o=[],i=a=0,s=42;0<=s?a<s:a>s;i=0<=s?++a:--a)r=this._dom.dates.childNodes[i],r.innerHTML=t.getDate(),r.__mh_date=new Date(t),r.setAttribute("class",this._bem("mh-calendar","date")),e=r.classList,t.getMonth()!==this.month&&e.add(this._bem("mh-calendar","date","blocked")),this.minDate&&this.minDate.getTime()>t.getTime()&&e.add(this._bem("mh-calendar","date","blocked")),this.maxDate&&this.maxDate.getTime()<t.getTime()&&e.add(this._bem("mh-calendar","date","blocked")),c=this.constructor.behaviours.test[this._behaviours.test],c(this,this.dates,t)||e.add(this._bem("mh-calendar","date","blocked")),u=new Date,u.setHours(0,0,0,0),t.getTime()===u.getTime()&&e.add(this._bem("mh-calendar","date","today")),t.getTime()===this.dateRange[0].getTime()&&e.add(this._bem("mh-calendar","date","range-start")),t.getTime()===this.dateRange[1].getTime()&&e.add(this._bem("mh-calendar","date","range-end")),t.getTime()>this.dateRange[0].getTime()&&t.getTime()<this.dateRange[1].getTime()&&e.add(this._bem("mh-calendar","date","in-range")),o.push(t.setDate(t.getDate()+1));return o},Calendar.prototype._bem=function(e,t,r){var n;return null==t&&(t=""),null==r&&(r=""),n=e,t&&(n=n+"__"+t),r&&(n=n+"--"+r),n},Calendar.prototype._et=function(e){return"mh-calendar--"+e},Calendar.parseDate=function(e,t){var r,n,i,a;if(e instanceof Date)return e;for(n=0,i=t.length;n<i;n++)if(a=t[n],r=this.parsers[a](e))return r},Calendar.proxyOptions=function(e,t,r){var i,a,s,o,c,u,h,d,l;for(s=Calendar.getDefaultConfig(),s.parsers=[],h={},n.config(h,s,t,r,e),i=function(e,t){return Calendar.parseDate(e,t)},a=function(e){var t;return function(){var r,n,i,a;for(i=e.split(","),a=[],r=0,n=i.length;r<n;r++)t=i[r],t.trim()&&a.push(t.trim());return a}()},"string"==typeof h.firstWeekday&&(h.firstWeekday=Number(h.firstWeekday)),d=["dates","monthNames","parsers","weekdayNames"],o=0,c=d.length;o<c;o++)u=d[o],"string"==typeof h[u]&&(h[u]=a(h[u]));return"string"==typeof h.minDate&&(h.minDate=i(h.minDate,h.parsers)),"string"==typeof h.maxDate&&(h.maxDate=i(h.maxDate,h.parsers)),h.dates=function(){var e,t,r,n;for(r=h.dates,n=[],e=0,t=r.length;e<t;e++)l=r[e],i(l,h.parsers)&&n.push(i(l,h.parsers));return n}(),delete h.parsers,h},Calendar.behaviours={test:{any:function(e,t,r){return!0},excluding:function(e,t,r){var n,i,a;for(n=0,i=t.length;n<i;n++)if(a=t[n],r.getTime()===a.getTime())return!1;return!0},only:function(e,t,r){var n,i,a;for(n=0,i=t.length;n<i;n++)if(a=t[n],r.getTime()===a.getTime())return!0;return!1},weekdays:function(e,t,r){return t.indexOf(r.getDay())>-1}}},Calendar.formats={dmy:function(e){var t,r,n;return t=("00"+e.getDate()).slice(-2),r=("00"+(e.getMonth()+1)).slice(-2),n=e.getFullYear(),t+"/"+r+"/"+n},human_en:function(e){var t;return t=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],e.getDate()+" "+t+" "+e.getFullYear()},human_abbr_en:function(e){var t;return t=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getMonth()],e.getDate()+" "+t+" "+e.getFullYear()},iso:function(e){var t,r,n;return t=("00"+e.getDate()).slice(-2),r=("00"+(e.getMonth()+1)).slice(-2),n=e.getFullYear(),n+"-"+r+"-"+t},mdy:function(e){var t,r,n;return t=("00"+e.getDate()).slice(-2),r=("00"+(e.getMonth()+1)).slice(-2),n=e.getFullYear(),r+"/"+t+"/"+n}},Calendar.parsers={dmy:function(e){var t,r,n,i,a,s;if(r=/^(\d{1,2})(\/|\.|\-)(\d{1,2})(\/|\.|\-)(\d{2}|\d{4})$/,i=r.exec(e),i&&(s=Number(i[5]),a=Number(i[3])-1,n=Number(i[1]),s<100&&(s+=100*parseInt((new Date).getFullYear()/100)),t=new Date(s,a,n),t.getFullYear()===s&&t.getMonth()===a&&t.getDate()===n))return t},human_en:function(e){var t,r,n,i,a,s,o,c,u,h,d,l,p,f,m;if(d={january:0,february:1,march:2,april:3,may:4,june:5,july:6,august:7,september:8,october:9,november:10,december:11},l={jan:0,feb:1,mar:2,apr:3,may:4,jun:5,jul:6,aug:7,sep:8,oct:9,nov:10,dec:11},e=e.toLowerCase(),e=e.replace(","," "),e=e.replace(/(\d)st/g,"$1 "),e=e.replace(/(\d)nd/g,"$1 "),e=e.replace(/(\d)rd/g,"$1 "),e=e.replace(/(\d)th/g,"$1 "),e=e.trim(),r=e.split(/\s+/),!(r.length>3)){if(h=(new Date).getMonth(),m=(new Date).getFullYear(),r.length>1){for(h=null,p=r.slice(),a=s=0,c=p.length;s<c;a=++s)if(t=p[a],d.hasOwnProperty(t)?h=d[t]:l.hasOwnProperty(t)&&(h=l[t]),null!==h){r.splice(a,1);break}if(null===h)return;for(m=null,f=r.slice(),a=o=0,u=f.length;o<u;a=++o)if(t=f[a],4===t.length){m=Number(t),r.splice(a,1);break}if(null===m&&2===r.length&&(m=Number(r[1]),r.splice(1,1)),NaN===m)return;null===m&&(m=(new Date).getFullYear()),m<100&&(m+=100*parseInt((new Date).getFullYear()/100))}if(i=Number(r[0]),NaN!==i&&(n=new Date(m,h,i),n.getFullYear()===m&&n.getMonth()===h&&n.getDate()===i))return n}},iso:function(e){var t,r,n,i,a,s;if(r=/^(\d{4})-(\d{2})-(\d{2})$/,i=r.exec(e),i&&(s=Number(i[1]),a=Number(i[2])-1,n=Number(i[3]),t=new Date(s,a,n),t.getFullYear()===s&&t.getMonth()===a&&t.getDate()===n))return t},mdy:function(e){var t,r,n,i,a,s;if(r=/^(\d{1,2})(\/|\.|\-)(\d{1,2})(\/|\.|\-)(\d{2}|\d{4})$/,i=r.exec(e),i&&(s=Number(i[5]),a=Number(i[1])-1,n=Number(i[3]),s<100&&(s+=100*parseInt((new Date).getFullYear()/100)),t=new Date(s,a,n),t.getFullYear()===s&&t.getMonth()===a&&t.getDate()===n))return t}},Calendar}(),e.exports={Calendar:i}}])});

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ManhattanEffects=t():e.ManhattanEffects=t()}(this,function(){return function(e){function __webpack_require__(o){if(t[o])return t[o].exports;var r=t[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,__webpack_require__),r.loaded=!0,r.exports}var t={};return __webpack_require__.m=e,__webpack_require__.c=t,__webpack_require__.p="",__webpack_require__(0)}([function(e,t,o){e.exports=o(1)},function(e,t){var o;o=function(e,t,o,r,n,l){var c,u,_,f,p,a,i;return null==t&&(t=1),null==o&&(o=[0,0]),null==r&&(r=null),null==n&&(n=null),null==l&&(l=60),null===n&&(n=document.body),a=[n.scrollLeft,n.scrollTop],_=e,1===e.nodeType&&(p=e.getBoundingClientRect(),_=[a[0]+p.left,a[1]+p.top]),_=[_[0]+o[0],_[1]+o[1]],u=[_[0]-a[0],_[1]-a[1]],i=Date.now(),c=function(){var e,o,l;if(e=Math.min((Date.now()-i)/1e3,t),o=e/t,l=[n.scrollLeft,n.scrollTop],n.scrollLeft=a[0]+u[0]*o,n.scrollTop=a[1]+u[1]*o,l[0]===n.scrollLeft&&l[1]===n.scrollTop&&(e=t),e===t)return"function"==typeof r&&r(),clearInterval(f)},f=setInterval(c,1e3/l)},e.exports={scrollTo:o}}])});

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ManhattanForms=t():e.ManhattanForms=t()}(this,function(){return function(e){function __webpack_require__(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,__webpack_require__),n.l=!0,n.exports}var t={};return __webpack_require__.m=e,__webpack_require__.c=t,__webpack_require__.i=function(e){return e},__webpack_require__.d=function(e,t,r){__webpack_require__.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},__webpack_require__.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return __webpack_require__.d(t,"a",t),t},__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=3)}([function(e,t,r){var n;n=r(1),e.exports={fields:n}},function(e,t,r){var n,i,o,u;n=r(2),o=function(e){return this.value?n.dispatch(this,"mh-forms-fields--fill",{filled:!0}):n.dispatch(this,"mh-forms-fields--fill",{filled:!1})},i=function(e){var t;return"onAutoFillStart"===e.animationName?n.dispatch(this,"mh-forms-fields--fill",{filled:!0}):"onAutoFillCancel"===e.animationName?(t=!1,this.value&&"password"!==this.type.toLowerCase()&&(t=!0),n.dispatch(this,"mh-forms-fields--fill",{filled:t})):void 0},u=function(e){var t,r,u,a,l,c,s,f,_;if(null==e&&(e="input, select, textarea"),u=n.many(e),n.cssSelectorSupported(":-webkit-autofill"))for(n.one("[data-mh-listen-for-fill]")||(_=document.createElement("style"),_.appendChild(document.createTextNode("")),_.setAttribute("data-mh-listen-for-fill",""),document.head.appendChild(_),f=_.sheet,f.insertRule("@keyframes onAutoFillStart {  from {/**/}  to {/**/}}",0),f.insertRule("@keyframes onAutoFillCancel {  from {/**/}  to {/**/}}",0),f.insertRule("input:-webkit-autofill { animation-name: onAutoFillStart;",0),f.insertRule("input:not(:-webkit-autofill) { animation-name: onAutoFillCancel; }",0)),t=0,l=u.length;t<l;t++)r=u[t],n.ignore(r,{animationstart:i}),n.listen(r,{animationstart:i});for(s=[],a=0,c=u.length;a<c;a++)r=u[a],n.dispatch(r,"mh-forms-fields--fill",{filled:Boolean(r.value)}),n.ignore(r,{change:o,input:o}),s.push(n.listen(r,{change:o,input:o}));return s},e.exports={listenForFill:u}},function(e,t,r){!function(t,r){e.exports=r()}(0,function(){return function(e){function __webpack_require__(r){if(t[r])return t[r].exports;var n=t[r]={exports:{},id:r,loaded:!1};return e[r].call(n.exports,n,n.exports,__webpack_require__),n.loaded=!0,n.exports}var t={};return __webpack_require__.m=e,__webpack_require__.c=t,__webpack_require__.p="",__webpack_require__(0)}([function(e,t,r){e.exports=r(1)},function(e,t){var r,n,i,o,u,a,l,c,s,f,_=[].indexOf||function(e){for(var t=0,r=this.length;t<r;t++)if(t in this&&this[t]===e)return t;return-1};r=function(e,t){var r;if(e.closest)return e.closest(t);for(r=e.matches||e.webkitMatchesSelector||e.mozMatchesSelector||e.msMatchesSelector;e&&!r.call(e,t);)e=e.parentElement;return e},i=function(e,t){var r,n,i;null==t&&(t={}),r=document.createElement(e);for(n in t)i=t[n],_.call(r,n)>=0?r[n]=i:r.setAttribute(n,i);return r},s=function(e,t){return null==t&&(t=document),Array.prototype.slice.call(t.querySelectorAll(e))},f=function(e,t){return null==t&&(t=document),t.querySelector(e)},u=function(e,t,r){var n,i,o;null==r&&(r={}),n=document.createEvent("Event"),n.initEvent(t,!0,!0);for(i in r)o=r[i],n[i]=o;return e.dispatchEvent(n)},l=function(e,t){var r,n,i,o;o=[];for(n in t)i=t[n],o.push(function(){var t,o,u,a;for(u=n.split(/\s+/),a=[],t=0,o=u.length;t<o;t++)r=u[t],a.push(e.removeEventListener(r,i));return a}());return o},c=function(e,t){var r,n,i,o;o=[];for(n in t)i=t[n],o.push(function(){var t,o,u,a;for(u=n.split(/\s+/),a=[],t=0,o=u.length;t<o;t++)r=u[t],a.push(e.addEventListener(r,i));return a}());return o},n=function(e,t,r,n,i){var o,u,a,l;null==i&&(i="data-"),a=[];for(u in t)l=t[u],e[u]=l,r.hasOwnProperty(u)&&(e[u]=r[u]),n&&(o=i+u.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),n.hasAttribute(o)?"number"==typeof l?a.push(e[u]=parseInt(n.getAttribute(o))):l===!1?a.push(e[u]=!0):a.push(e[u]=n.getAttribute(o)):a.push(void 0));return a},a=function(e){return e.replace(/[\^\$\\\.\*\+\?\(\)\[\]\{\}\|]/g,"\\$&")},o=function(e){try{document.querySelector(e)}catch(e){return e,!1}return!0},e.exports={closest:r,create:i,one:f,many:s,dispatch:u,ignore:l,listen:c,config:n,escapeRegExp:a,cssSelectorSupported:o}}])})},function(e,t,r){e.exports=r(0)}])});

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