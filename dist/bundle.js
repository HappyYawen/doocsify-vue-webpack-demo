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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1)
__webpack_require__(2)
__webpack_require__(3)
__webpack_require__(4)
__webpack_require__(6)
__webpack_require__(7)
__webpack_require__(8)

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {!function(){"use strict";function e(e){var t=Object.create(null);return function(n){return t[n]||(t[n]=e(n))}}function t(e){return"string"==typeof e||"number"==typeof e}function n(){}function r(e){return"function"==typeof e}function i(e){var t=["init","mounted","beforeEach","afterEach","doneEach","ready"];e._hooks={},e._lifecycle={},t.forEach(function(t){var n=e._hooks[t]=[];e._lifecycle[t]=function(e){return n.push(e)}})}function o(e,t,r,i){void 0===i&&(i=n);var o=e._hooks[t],a=function(e){var t=o[e];if(e>=o.length)i(r);else if("function"==typeof t)if(2===t.length)t(r,function(t){r=t,a(e+1)});else{var n=t(r);r=void 0!==n?n:r,a(e+1)}else a(e+1)};a(0)}function a(e,t){if(void 0===t&&(t=!1),"string"==typeof e){if(void 0!==window.Vue)return s(e);e=t?s(e):fe[e]||(fe[e]=s(e))}return e}function s(e,t){return t?e.querySelector(t):ge.querySelector(e)}function l(e,t){return[].slice.call(t?e.querySelectorAll(t):ge.querySelectorAll(e))}function u(e,t){return e=ge.createElement(e),t&&(e.innerHTML=t),e}function c(e,t){return e.appendChild(t)}function h(e,t){return e.insertBefore(t,e.children[0])}function p(e,t,n){r(t)?window.addEventListener(e,t):e.addEventListener(t,n)}function d(e,t,n){r(t)?window.removeEventListener(e,t):e.removeEventListener(t,n)}function f(e,t,n){e&&e.classList[n?t:"toggle"](n||t)}function g(e){c(ve,u("style",e))}function m(e){return e?(/\/\//.test(e)||(e="https://github.com/"+e),'<a href="'+(e=e.replace(/^git\+/,""))+'" class="github-corner" aria-label="View source on Github"><svg viewBox="0 0 250 250" aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path></svg></a>'):""}function v(e){var t='<button class="sidebar-toggle"><div class="sidebar-toggle-button"><span></span><span></span><span></span></div></button><aside class="sidebar">'+(e.name?'<h1><a class="app-name-link" data-nosearch>'+e.name+"</a></h1>":"")+'<div class="sidebar-nav">\x3c!--sidebar--\x3e</div></aside>';return(ke?t+"<main>":"<main>"+t)+'<section class="content"><article class="markdown-section" id="main">\x3c!--main--\x3e</article></section></main>'}function y(){var e=", 100%, 85%";return'<section class="cover" style="background: linear-gradient(to left bottom, hsl('+(Math.floor(255*Math.random())+e)+") 0%,hsl("+(Math.floor(255*Math.random())+e)+') 100%)"><div class="cover-main"></div><div class="mask"></div></section>'}function b(e,t){return void 0===t&&(t=""),e&&e.length?(e.forEach(function(e){t+='<li><a class="section-link" href="'+e.slug+'">'+e.title+"</a></li>",e.children&&(t+='<li><ul class="children">'+b(e.children)+"</li></ul>")}),t):""}function k(e,t){return'<p class="'+e+'">'+t.slice(5).trim()+"</p>"}function w(e){return"<style>:root{--theme-color: "+e+";}</style>"}function x(){var e=u("div");e.classList.add("progress"),c(me,e),pe=e}function _(e,t){void 0===t&&(t=!1);var r=new XMLHttpRequest,i=function(){r.addEventListener.apply(r,arguments)},o=_e[e];return o?{then:function(e){return e(o.content,o.opt)},abort:n}:(r.open("GET",e),r.send(),{then:function(o,a){if(void 0===a&&(a=n),t){var s=setInterval(function(e){return xe({step:Math.floor(5*Math.random()+1)})},500);i("progress",xe),i("loadend",function(e){xe(e),clearInterval(s)})}i("error",a),i("load",function(t){var n=t.target;if(n.status>=400)a(n);else{var i=_e[e]={content:n.response,opt:{updatedAt:r.getResponseHeader("last-modified")}};o(i.content,i.opt)}})},abort:function(e){return 4!==r.readyState&&r.abort()}})}function S(e,t){e.innerHTML=e.innerHTML.replace(/var\(\s*--theme-color.*?\)/g,t)}function C(e,t){return t={exports:{}},e(t,t.exports),t.exports}function L(e,t){var n=[],r={};return e.forEach(function(e){var i=e.level||1,o=i-1;i>t||(r[o]?r[o].children=(r[o].children||[]).concat(e):n.push(e),r[i]=e)}),n}function E(e){return e.toLowerCase()}function T(e){if("string"!=typeof e)return"";var t=e.trim().replace(/[A-Z]+/g,E).replace(/<[^>\d]+>/g,"").replace(Oe,"").replace(/\s/g,"-").replace(/-+/g,"-").replace(/^(\d)/,"_$1"),n=Pe[t];return n=Pe.hasOwnProperty(t)?n+1:0,Pe[t]=n,n&&(t=t+"-"+n),t}function $(e,t){return'<img class="emoji" src="https://assets-cdn.github.com/images/icons/emoji/'+t+'.png" alt="'+t+'" />'}function A(e){return e.replace(/<(pre|template|code)[^>]*?>[\s\S]+?<\/(pre|template|code)>/g,function(e){return e.replace(/:/g,"__colon__")}).replace(/:(\w+?):/gi,be&&window.emojify||$).replace(/__colon__/g,":")}function P(e){var t={};return(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach(function(e){var n=e.replace(/\+/g," ").split("=");t[n[0]]=n[1]&&je(n[1])}),t):t}function O(e,t){void 0===t&&(t=[]);var n=[];for(var r in e)t.indexOf(r)>-1||n.push(e[r]?(Me(r)+"="+Me(e[r])).toLowerCase():Me(r));return n.length?"?"+n.join("&"):""}function j(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return Re(e.join("/"))}function M(e){void 0===e&&(e="");var t={};return e&&(e=e.replace(/:([\w-]+)=?([\w-]+)?/g,function(e,n,r){return t[n]=r||!0,""}).trim()),{str:e,config:t}}function q(e,t){var n=function(e){return me.classList.toggle("close")};e=a(e),p(e,"click",function(e){e.stopPropagation(),n()});var r=a(".sidebar");ke&&p(me,"click",function(e){return me.classList.contains("close")&&n()}),p(r,"click",function(e){return setTimeout(0)})}function N(){var e=a("section.cover");if(e){var t=e.getBoundingClientRect().height;window.pageYOffset>=t||e.classList.contains("hidden")?f(me,"add","sticky"):f(me,"remove","sticky")}}function R(e,t,n,r){t=a(t);var i,o=l(t,"a"),s=e.toURL(e.getCurrentPath());return o.sort(function(e,t){return t.href.length-e.href.length}).forEach(function(e){var t=e.getAttribute("href"),r=n?e.parentNode:e;0!==s.indexOf(t)||i?f(r,"remove","active"):(i=e,f(r,"add","active"))}),r&&(ge.title=i?i.innerText+" - "+ze:ze),i}function F(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function H(e){Ue&&Ue.stop(),Ye=!1,Ue=new Ie({start:window.pageYOffset,end:e.getBoundingClientRect().top+window.pageYOffset,duration:500}).on("tick",function(e){return window.scrollTo(0,e)}).on("done",function(){Ye=!0,Ue=null}).begin()}function z(e){if(Ye){for(var t,n=a(".sidebar"),r=l(".anchor"),i=s(n,".sidebar-nav"),o=s(n,"li.active"),u=document.documentElement,c=(u&&u.scrollTop||document.body.scrollTop)-Ze,h=0,p=r.length;h<p;h+=1){var d=r[h];if(d.offsetTop>c){t||(t=d);break}t=d}if(t){var f=De[B(e,t.getAttribute("data-id"))];if(f&&f!==o&&(o&&o.classList.remove("active"),f.classList.add("active"),o=f,!We&&me.classList.contains("sticky"))){var g=n.clientHeight,m=o.offsetTop+o.clientHeight+40,v=o.offsetTop>=i.scrollTop&&m<=i.scrollTop+g,y=m-0<g,b=v?i.scrollTop:y?0:m-g;n.scrollTop=b}}}}function B(e,t){return e+"?id="+t}function I(e){var t=s(".cover.show");Ze=t?t.offsetHeight:0;for(var n=a(".sidebar"),r=l(n,"li"),i=0,o=r.length;i<o;i+=1){var u=r[i],c=u.querySelector("a");if(c){var h=c.getAttribute("href");if("/"!==h){var f=e.parse(h),g=f.query.id,m=f.path;g&&(h=B(m,g))}h&&(De[decodeURIComponent(h)]=u)}}if(!ke){var v=e.getCurrentPath();d("scroll",function(){return z(v)}),p("scroll",function(){return z(v)}),p(n,"mouseover",function(){We=!0}),p(n,"mouseleave",function(){We=!1})}}function D(e,t){if(t){var n=s("#"+t);n&&H(n);var r=De[B(e,t)],i=a(".sidebar"),o=s(i,"li.active");o&&o.classList.remove("active"),r&&r.classList.add("active")}}function W(e){void 0===e&&(e=0),Ge.scrollTop=!0===e?0:Number(e)}function U(){var e=l(".markdown-section>script").filter(function(e){return!/template/.test(e.type)})[0];if(!e)return!1;var t=e.innerText.trim();if(!t)return!1;setTimeout(function(e){window.__EXECUTE_RESULT__=new Function(t)()},0)}function Y(e,t,n){return t="function"==typeof n?n(t):"string"==typeof n?Ee(n)(new Date(t)):t,e.replace(/{docsify-updated}/g,t)}function Z(e){e||(e="not found"),this._renderTo(".markdown-section",e),!this.config.loadSidebar&&this._renderSidebar(),!1===this.config.executeScript||void 0===window.Vue||U()?this.config.executeScript&&U():setTimeout(function(e){var t=window.__EXECUTE_RESULT__;t&&t.$destroy&&t.$destroy(),window.__EXECUTE_RESULT__=(new window.Vue).$mount("#main")},0)}function G(e){var n=a(".app-name-link"),r=e.config.nameLink,i=e.route.path;if(n)if(t(e.config.nameLink))n.setAttribute("href",r);else if("object"==typeof r){var o=Object.keys(r).filter(function(e){return i.indexOf(e)>-1})[0];n.setAttribute("href",r[o])}}function X(e){var t=e.config;e.compiler=new He(t,e.router);var n=t.el||"#app",r=s("nav")||u("nav"),i=s(n),o="",a=me;i?(t.repo&&(o+=m(t.repo)),t.coverpage&&(o+=y()),o+=v(t),e._renderTo(i,o,!0)):e.rendered=!0,t.mergeNavbar&&ke?a=s(".sidebar"):(r.classList.add("app-nav"),t.repo||r.classList.add("no-badge")),h(a,r),t.themeColor&&(ge.head.appendChild(u("div",w(t.themeColor)).firstElementChild),Se(t.themeColor)),e._updateRender(),f(me,"ready")}function V(e,t,n){var r=Object.keys(t).filter(function(t){return(Xe[t]||(Xe[t]=new RegExp("^"+t+"$"))).test(e)&&e!==n})[0];return r?V(e.replace(Xe[r],t[r]),t,e):e}function J(e){return/\.(md|html)$/g.test(e)?e:/\/$/g.test(e)?e+"README.md":e+".md"}function Q(e){var t=location.href.indexOf("#");location.replace(location.href.slice(0,t>=0?t:0)+"#"+e)}function K(e){e.router.normalize(),e.route=e.router.parse(),me.setAttribute("data-page",e.route.file)}function ee(e){var t,n=e.config,r=n.routerMode||"hash";t="history"===r&&we?new Ke(n):new Qe(n),e.router=t,K(e),et=e.route,t.onchange(function(t){if(K(e),e._updateRender(),et.path===e.route.path)return void e.$resetEvents();e.$fetch(),et=e.route})}function te(e){q("button.sidebar-toggle",e.router),e.config.coverpage?!ke&&p("scroll",N):me.classList.add("sticky")}function ne(e,t,n,r,i,o){e=o?e:e.replace(/\/$/,""),(e=Ne(e))&&_(i.router.getFile(e+n)+t).then(r,function(o){return ne(e,t,n,r,i)})}function re(e){var t=e.config,n=t.loadSidebar;if(e.rendered){var r=R(e.router,".sidebar-nav",!0,!0);n&&r&&(r.parentNode.innerHTML+=window.__SUB_SIDEBAR__),e._bindEventOnRendered(r),e._fetchCover(),e.$resetEvents(),o(e,"doneEach"),o(e,"ready")}else e.$fetch(function(t){return o(e,"ready")})}function ie(e){[].concat(e.config.plugins).forEach(function(t){return r(t)&&t(e._lifecycle,e)})}function oe(){this._init()}var ae=e(function(e){return e.replace(/([A-Z])/g,function(e){return"-"+e.toLowerCase()})}),se=Object.assign||function(e){for(var t=arguments,n=Object.prototype.hasOwnProperty,r=1;r<arguments.length;r++){var i=Object(t[r]);for(var o in i)n.call(i,o)&&(e[o]=i[o])}return e},le=se({el:"#app",repo:"",maxLevel:6,subMaxLevel:0,loadSidebar:null,loadNavbar:null,homepage:"README.md",coverpage:"",basePath:"",auto2top:!1,name:"",themeColor:"",nameLink:window.location.pathname,autoHeader:!1,executeScript:null,noEmoji:!1,ga:"",mergeNavbar:!1,formatUpdated:"",externalLinkTarget:"_blank",routerMode:"hash",noCompileLinks:[]},window.$docsify),ue=document.currentScript||[].slice.call(document.getElementsByTagName("script")).filter(function(e){return/docsify\./.test(e.src)})[0];if(ue){for(var ce in le){var he=ue.getAttribute("data-"+ae(ce));t(he)&&(le[ce]=""===he||he)}!0===le.loadSidebar&&(le.loadSidebar="_sidebar.md"),!0===le.loadNavbar&&(le.loadNavbar="_navbar.md"),!0===le.coverpage&&(le.coverpage="_coverpage.md"),!0===le.repo&&(le.repo=""),!0===le.name&&(le.name="")}window.$docsify=le;var pe,de,fe={},ge=document,me=ge.body,ve=ge.head,ye=Object.freeze({getNode:a,$:ge,body:me,head:ve,find:s,findAll:l,create:u,appendTo:c,before:h,on:p,off:d,toggleClass:f,style:g}),be="undefined"!=typeof window,ke=be&&document.body.clientWidth<=600,we=be&&function(){return window.history&&window.history.pushState&&window.history.replaceState&&!navigator.userAgent.match(/((iPod|iPhone|iPad).+\bOS\s+[1-4]\D|WebApps\/.+CFNetwork)/)}(),xe=function(e){var t,n=e.loaded,r=e.total,i=e.step;!pe&&x(),i?(t=parseInt(pe.style.width||0,10)+i,t=t>80?80:t):t=Math.floor(n/r*100),pe.style.opacity=1,pe.style.width=t>=95?"100%":t+"%",t>=95&&(clearTimeout(de),de=setTimeout(function(e){pe.style.opacity=0,pe.style.width="0%"},200))},_e={},Se=function(e){if(!(window.CSS&&window.CSS.supports&&window.CSS.supports("(--v:red)"))){var t=l("style:not(.inserted),link");[].forEach.call(t,function(t){if("STYLE"===t.nodeName)S(t,e);else if("LINK"===t.nodeName){var n=t.getAttribute("href");if(!/\.css$/.test(n))return;_(n).then(function(t){var n=u("style",t);ve.appendChild(n),S(n,e)})}})}},Ce=/([^{]*?)\w(?=\})/g,Le={YYYY:"getFullYear",YY:"getYear",MM:function(e){return e.getMonth()+1},DD:"getDate",HH:"getHours",mm:"getMinutes",ss:"getSeconds"},Ee=function(e){var t=[],n=0;return e.replace(Ce,function(r,i,o){t.push(e.substring(n,o-1)),n=o+=r.length+1,t.push(function(e){return("00"+("string"==typeof Le[r]?e[Le[r]]():Le[r](e))).slice(-r.length)})}),n!==e.length&&t.push(e.substring(n)),function(e){for(var n="",r=0,i=e||new Date;r<t.length;r++)n+="string"==typeof t[r]?t[r]:t[r](i);return n}},Te="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},$e=C(function(e,t){(function(){function t(e){this.tokens=[],this.tokens.links={},this.options=e||c.defaults,this.rules=h.normal,this.options.gfm&&(this.options.tables?this.rules=h.tables:this.rules=h.gfm)}function n(e,t){if(this.options=t||c.defaults,this.links=e,this.rules=p.normal,this.renderer=this.options.renderer||new r,this.renderer.options=this.options,!this.links)throw new Error("Tokens array requires a `links` property.");this.options.gfm?this.options.breaks?this.rules=p.breaks:this.rules=p.gfm:this.options.pedantic&&(this.rules=p.pedantic)}function r(e){this.options=e||{}}function i(e){this.tokens=[],this.token=null,this.options=e||c.defaults,this.options.renderer=this.options.renderer||new r,this.renderer=this.options.renderer,this.renderer.options=this.options}function o(e,t){return e.replace(t?/&/g:/&(?!#?\w+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function a(e){return e.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/g,function(e,t){return t=t.toLowerCase(),"colon"===t?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""})}function s(e,t){return e=e.source,t=t||"",function n(r,i){return r?(i=i.source||i,i=i.replace(/(^|[^\[])\^/g,"$1"),e=e.replace(r,i),n):new RegExp(e,t)}}function l(){}function u(e){for(var t,n,r=arguments,i=1;i<arguments.length;i++){t=r[i];for(n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}function c(e,n,r){if(r||"function"==typeof n){r||(r=n,n=null),n=u({},c.defaults,n||{});var a,s,l=n.highlight,h=0;try{a=t.lex(e,n)}catch(e){return r(e)}s=a.length;var p=function(e){if(e)return n.highlight=l,r(e);var t;try{t=i.parse(a,n)}catch(t){e=t}return n.highlight=l,e?r(e):r(null,t)};if(!l||l.length<3)return p();if(delete n.highlight,!s)return p();for(;h<a.length;h++)!function(e){"code"!==e.type?--s||p():l(e.text,e.lang,function(t,n){return t?p(t):null==n||n===e.text?--s||p():(e.text=n,e.escaped=!0,void(--s||p()))})}(a[h])}else try{return n&&(n=u({},c.defaults,n)),i.parse(t.lex(e,n),n)}catch(e){if(e.message+="\nPlease report this to https://github.com/chjj/marked.",(n||c.defaults).silent)return"<p>An error occured:</p><pre>"+o(e.message+"",!0)+"</pre>";throw e}}var h={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:l,hr:/^( *[-*_]){3,} *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,nptable:l,lheading:/^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,blockquote:/^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,list:/^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:/^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,table:l,paragraph:/^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,text:/^[^\n]+/};h.bullet=/(?:[*+-]|\d+\.)/,h.item=/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/,h.item=s(h.item,"gm")(/bull/g,h.bullet)(),h.list=s(h.list)(/bull/g,h.bullet)("hr","\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))")("def","\\n+(?="+h.def.source+")")(),h.blockquote=s(h.blockquote)("def",h.def)(),h._tag="(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b",h.html=s(h.html)("comment",/<!--[\s\S]*?-->/)("closed",/<(tag)[\s\S]+?<\/\1>/)("closing",/<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g,h._tag)(),h.paragraph=s(h.paragraph)("hr",h.hr)("heading",h.heading)("lheading",h.lheading)("blockquote",h.blockquote)("tag","<"+h._tag)("def",h.def)(),h.normal=u({},h),h.gfm=u({},h.normal,{fences:/^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,paragraph:/^/,heading:/^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/}),h.gfm.paragraph=s(h.paragraph)("(?!","(?!"+h.gfm.fences.source.replace("\\1","\\2")+"|"+h.list.source.replace("\\1","\\3")+"|")(),h.tables=u({},h.gfm,{nptable:/^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,table:/^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/}),t.rules=h,t.lex=function(e,n){return new t(n).lex(e)},t.prototype.lex=function(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n"),this.token(e,!0)},t.prototype.token=function(e,t,n){for(var r,i,o,a,s,l,u,c,p,d=this,e=e.replace(/^ +$/gm,"");e;)if((o=d.rules.newline.exec(e))&&(e=e.substring(o[0].length),o[0].length>1&&d.tokens.push({type:"space"})),o=d.rules.code.exec(e))e=e.substring(o[0].length),o=o[0].replace(/^ {4}/gm,""),d.tokens.push({type:"code",text:d.options.pedantic?o:o.replace(/\n+$/,"")});else if(o=d.rules.fences.exec(e))e=e.substring(o[0].length),d.tokens.push({type:"code",lang:o[2],text:o[3]||""});else if(o=d.rules.heading.exec(e))e=e.substring(o[0].length),d.tokens.push({type:"heading",depth:o[1].length,text:o[2]});else if(t&&(o=d.rules.nptable.exec(e))){for(e=e.substring(o[0].length),l={type:"table",header:o[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:o[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:o[3].replace(/\n$/,"").split("\n")},c=0;c<l.align.length;c++)/^ *-+: *$/.test(l.align[c])?l.align[c]="right":/^ *:-+: *$/.test(l.align[c])?l.align[c]="center":/^ *:-+ *$/.test(l.align[c])?l.align[c]="left":l.align[c]=null;for(c=0;c<l.cells.length;c++)l.cells[c]=l.cells[c].split(/ *\| */);d.tokens.push(l)}else if(o=d.rules.lheading.exec(e))e=e.substring(o[0].length),d.tokens.push({type:"heading",depth:"="===o[2]?1:2,text:o[1]});else if(o=d.rules.hr.exec(e))e=e.substring(o[0].length),d.tokens.push({type:"hr"});else if(o=d.rules.blockquote.exec(e))e=e.substring(o[0].length),d.tokens.push({type:"blockquote_start"}),o=o[0].replace(/^ *> ?/gm,""),d.token(o,t,!0),d.tokens.push({type:"blockquote_end"});else if(o=d.rules.list.exec(e)){for(e=e.substring(o[0].length),a=o[2],d.tokens.push({type:"list_start",ordered:a.length>1}),o=o[0].match(d.rules.item),r=!1,p=o.length,c=0;c<p;c++)l=o[c],u=l.length,l=l.replace(/^ *([*+-]|\d+\.) +/,""),~l.indexOf("\n ")&&(u-=l.length,l=d.options.pedantic?l.replace(/^ {1,4}/gm,""):l.replace(new RegExp("^ {1,"+u+"}","gm"),"")),d.options.smartLists&&c!==p-1&&(s=h.bullet.exec(o[c+1])[0],a===s||a.length>1&&s.length>1||(e=o.slice(c+1).join("\n")+e,c=p-1)),i=r||/\n\n(?!\s*$)/.test(l),c!==p-1&&(r="\n"===l.charAt(l.length-1),i||(i=r)),d.tokens.push({type:i?"loose_item_start":"list_item_start"}),d.token(l,!1,n),d.tokens.push({type:"list_item_end"});d.tokens.push({type:"list_end"})}else if(o=d.rules.html.exec(e))e=e.substring(o[0].length),d.tokens.push({type:d.options.sanitize?"paragraph":"html",pre:!d.options.sanitizer&&("pre"===o[1]||"script"===o[1]||"style"===o[1]),text:o[0]});else if(!n&&t&&(o=d.rules.def.exec(e)))e=e.substring(o[0].length),d.tokens.links[o[1].toLowerCase()]={href:o[2],title:o[3]};else if(t&&(o=d.rules.table.exec(e))){for(e=e.substring(o[0].length),l={type:"table",header:o[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:o[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:o[3].replace(/(?: *\| *)?\n$/,"").split("\n")},c=0;c<l.align.length;c++)/^ *-+: *$/.test(l.align[c])?l.align[c]="right":/^ *:-+: *$/.test(l.align[c])?l.align[c]="center":/^ *:-+ *$/.test(l.align[c])?l.align[c]="left":l.align[c]=null;for(c=0;c<l.cells.length;c++)l.cells[c]=l.cells[c].replace(/^ *\| *| *\| *$/g,"").split(/ *\| */);d.tokens.push(l)}else if(t&&(o=d.rules.paragraph.exec(e)))e=e.substring(o[0].length),d.tokens.push({type:"paragraph",text:"\n"===o[1].charAt(o[1].length-1)?o[1].slice(0,-1):o[1]});else if(o=d.rules.text.exec(e))e=e.substring(o[0].length),d.tokens.push({type:"text",text:o[0]});else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0));return this.tokens};var p={escape:/^\\([\\`*{}\[\]()#+\-.!_>])/,autolink:/^<([^ >]+(@|:\/)[^ >]+)>/,url:l,tag:/^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,link:/^!?\[(inside)\]\(href\)/,reflink:/^!?\[(inside)\]\s*\[([^\]]*)\]/,nolink:/^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,strong:/^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,em:/^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,code:/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,br:/^ {2,}\n(?!\s*$)/,del:l,text:/^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/};p._inside=/(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/,p._href=/\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/,p.link=s(p.link)("inside",p._inside)("href",p._href)(),p.reflink=s(p.reflink)("inside",p._inside)(),p.normal=u({},p),p.pedantic=u({},p.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/}),p.gfm=u({},p.normal,{escape:s(p.escape)("])","~|])")(),url:/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,del:/^~~(?=\S)([\s\S]*?\S)~~/,text:s(p.text)("]|","~]|")("|","|https?://|")()}),p.breaks=u({},p.gfm,{br:s(p.br)("{2,}","*")(),text:s(p.gfm.text)("{2,}","*")()}),n.rules=p,n.output=function(e,t,r){return new n(t,r).output(e)},n.prototype.output=function(e){for(var t,n,r,i,a=this,s="";e;)if(i=a.rules.escape.exec(e))e=e.substring(i[0].length),s+=i[1];else if(i=a.rules.autolink.exec(e))e=e.substring(i[0].length),"@"===i[2]?(n=":"===i[1].charAt(6)?a.mangle(i[1].substring(7)):a.mangle(i[1]),r=a.mangle("mailto:")+n):(n=o(i[1]),r=n),s+=a.renderer.link(r,null,n);else if(a.inLink||!(i=a.rules.url.exec(e))){if(i=a.rules.tag.exec(e))!a.inLink&&/^<a /i.test(i[0])?a.inLink=!0:a.inLink&&/^<\/a>/i.test(i[0])&&(a.inLink=!1),e=e.substring(i[0].length),s+=a.options.sanitize?a.options.sanitizer?a.options.sanitizer(i[0]):o(i[0]):i[0];else if(i=a.rules.link.exec(e))e=e.substring(i[0].length),a.inLink=!0,s+=a.outputLink(i,{href:i[2],title:i[3]}),a.inLink=!1;else if((i=a.rules.reflink.exec(e))||(i=a.rules.nolink.exec(e))){if(e=e.substring(i[0].length),t=(i[2]||i[1]).replace(/\s+/g," "),!(t=a.links[t.toLowerCase()])||!t.href){s+=i[0].charAt(0),e=i[0].substring(1)+e;continue}a.inLink=!0,s+=a.outputLink(i,t),a.inLink=!1}else if(i=a.rules.strong.exec(e))e=e.substring(i[0].length),s+=a.renderer.strong(a.output(i[2]||i[1]));else if(i=a.rules.em.exec(e))e=e.substring(i[0].length),s+=a.renderer.em(a.output(i[2]||i[1]));else if(i=a.rules.code.exec(e))e=e.substring(i[0].length),s+=a.renderer.codespan(o(i[2],!0));else if(i=a.rules.br.exec(e))e=e.substring(i[0].length),s+=a.renderer.br();else if(i=a.rules.del.exec(e))e=e.substring(i[0].length),s+=a.renderer.del(a.output(i[1]));else if(i=a.rules.text.exec(e))e=e.substring(i[0].length),s+=a.renderer.text(o(a.smartypants(i[0])));else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0))}else e=e.substring(i[0].length),n=o(i[1]),r=n,s+=a.renderer.link(r,null,n);return s},n.prototype.outputLink=function(e,t){var n=o(t.href),r=t.title?o(t.title):null;return"!"!==e[0].charAt(0)?this.renderer.link(n,r,this.output(e[1])):this.renderer.image(n,r,o(e[1]))},n.prototype.smartypants=function(e){return this.options.smartypants?e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014\/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014\/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…"):e},n.prototype.mangle=function(e){if(!this.options.mangle)return e;for(var t,n="",r=e.length,i=0;i<r;i++)t=e.charCodeAt(i),Math.random()>.5&&(t="x"+t.toString(16)),n+="&#"+t+";";return n},r.prototype.code=function(e,t,n){if(this.options.highlight){var r=this.options.highlight(e,t);null!=r&&r!==e&&(n=!0,e=r)}return t?'<pre><code class="'+this.options.langPrefix+o(t,!0)+'">'+(n?e:o(e,!0))+"\n</code></pre>\n":"<pre><code>"+(n?e:o(e,!0))+"\n</code></pre>"},r.prototype.blockquote=function(e){return"<blockquote>\n"+e+"</blockquote>\n"},r.prototype.html=function(e){return e},r.prototype.heading=function(e,t,n){return"<h"+t+' id="'+this.options.headerPrefix+n.toLowerCase().replace(/[^\w]+/g,"-")+'">'+e+"</h"+t+">\n"},r.prototype.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"},r.prototype.list=function(e,t){var n=t?"ol":"ul";return"<"+n+">\n"+e+"</"+n+">\n"},r.prototype.listitem=function(e){return"<li>"+e+"</li>\n"},r.prototype.paragraph=function(e){return"<p>"+e+"</p>\n"},r.prototype.table=function(e,t){return"<table>\n<thead>\n"+e+"</thead>\n<tbody>\n"+t+"</tbody>\n</table>\n"},r.prototype.tablerow=function(e){return"<tr>\n"+e+"</tr>\n"},r.prototype.tablecell=function(e,t){var n=t.header?"th":"td";return(t.align?"<"+n+' style="text-align:'+t.align+'">':"<"+n+">")+e+"</"+n+">\n"},r.prototype.strong=function(e){return"<strong>"+e+"</strong>"},r.prototype.em=function(e){return"<em>"+e+"</em>"},r.prototype.codespan=function(e){return"<code>"+e+"</code>"},r.prototype.br=function(){return this.options.xhtml?"<br/>":"<br>"},r.prototype.del=function(e){return"<del>"+e+"</del>"},r.prototype.link=function(e,t,n){if(this.options.sanitize){try{var r=decodeURIComponent(a(e)).replace(/[^\w:]/g,"").toLowerCase()}catch(e){return""}if(0===r.indexOf("javascript:")||0===r.indexOf("vbscript:"))return""}var i='<a href="'+e+'"';return t&&(i+=' title="'+t+'"'),i+=">"+n+"</a>"},r.prototype.image=function(e,t,n){var r='<img src="'+e+'" alt="'+n+'"';return t&&(r+=' title="'+t+'"'),r+=this.options.xhtml?"/>":">"},r.prototype.text=function(e){return e},i.parse=function(e,t,n){return new i(t,n).parse(e)},i.prototype.parse=function(e){var t=this;this.inline=new n(e.links,this.options,this.renderer),this.tokens=e.reverse();for(var r="";this.next();)r+=t.tok();return r},i.prototype.next=function(){return this.token=this.tokens.pop()},i.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0},i.prototype.parseText=function(){for(var e=this,t=this.token.text;"text"===this.peek().type;)t+="\n"+e.next().text;return this.inline.output(t)},i.prototype.tok=function(){var e=this;switch(this.token.type){case"space":return"";case"hr":return this.renderer.hr();case"heading":return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,this.token.text);case"code":return this.renderer.code(this.token.text,this.token.lang,this.token.escaped);case"table":var t,n,r,i,o="",a="";for(r="",t=0;t<this.token.header.length;t++)({header:!0,align:e.token.align[t]}),r+=e.renderer.tablecell(e.inline.output(e.token.header[t]),{header:!0,align:e.token.align[t]});for(o+=this.renderer.tablerow(r),t=0;t<this.token.cells.length;t++){for(n=e.token.cells[t],r="",i=0;i<n.length;i++)r+=e.renderer.tablecell(e.inline.output(n[i]),{header:!1,align:e.token.align[i]});a+=e.renderer.tablerow(r)}return this.renderer.table(o,a);case"blockquote_start":for(var a="";"blockquote_end"!==this.next().type;)a+=e.tok();return this.renderer.blockquote(a);case"list_start":for(var a="",s=this.token.ordered;"list_end"!==this.next().type;)a+=e.tok();return this.renderer.list(a,s);case"list_item_start":for(var a="";"list_item_end"!==this.next().type;)a+="text"===e.token.type?e.parseText():e.tok();return this.renderer.listitem(a);case"loose_item_start":for(var a="";"list_item_end"!==this.next().type;)a+=e.tok();return this.renderer.listitem(a);case"html":var l=this.token.pre||this.options.pedantic?this.token.text:this.inline.output(this.token.text);return this.renderer.html(l);case"paragraph":return this.renderer.paragraph(this.inline.output(this.token.text));case"text":return this.renderer.paragraph(this.parseText())}},l.exec=l,c.options=c.setOptions=function(e){return u(c.defaults,e),c},c.defaults={gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,sanitizer:null,mangle:!0,smartLists:!1,silent:!1,highlight:null,langPrefix:"lang-",smartypants:!1,headerPrefix:"",renderer:new r,xhtml:!1},c.Parser=i,c.parser=i.parse,c.Renderer=r,c.Lexer=t,c.lexer=t.lex,c.InlineLexer=n,c.inlineLexer=n.output,c.parse=c,e.exports=c}).call(function(){return this||("undefined"!=typeof window?window:Te)}())}),Ae=C(function(e){var t="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},n=function(){var e=/\blang(?:uage)?-(\w+)\b/i,n=0,r=t.Prism={util:{encode:function(e){return e instanceof i?new i(e.type,r.util.encode(e.content),e.alias):"Array"===r.util.type(e)?e.map(r.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++n}),e.__id},clone:function(e){switch(r.util.type(e)){case"Object":var t={};for(var n in e)e.hasOwnProperty(n)&&(t[n]=r.util.clone(e[n]));return t;case"Array":return e.map&&e.map(function(e){return r.util.clone(e)})}return e}},languages:{extend:function(e,t){var n=r.util.clone(r.languages[e]);for(var i in t)n[i]=t[i];return n},insertBefore:function(e,t,n,i){i=i||r.languages;var o=i[e];if(2==arguments.length){n=arguments[1];for(var a in n)n.hasOwnProperty(a)&&(o[a]=n[a]);return o}var s={};for(var l in o)if(o.hasOwnProperty(l)){if(l==t)for(var a in n)n.hasOwnProperty(a)&&(s[a]=n[a]);s[l]=o[l]}return r.languages.DFS(r.languages,function(t,n){n===i[e]&&t!=e&&(this[t]=s)}),i[e]=s},DFS:function(e,t,n,i){i=i||{};for(var o in e)e.hasOwnProperty(o)&&(t.call(e,o,e[o],n||o),"Object"!==r.util.type(e[o])||i[r.util.objId(e[o])]?"Array"!==r.util.type(e[o])||i[r.util.objId(e[o])]||(i[r.util.objId(e[o])]=!0,r.languages.DFS(e[o],t,o,i)):(i[r.util.objId(e[o])]=!0,r.languages.DFS(e[o],t,null,i)))}},plugins:{},highlightAll:function(e,t){var n={callback:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};r.hooks.run("before-highlightall",n);for(var i,o=n.elements||document.querySelectorAll(n.selector),a=0;i=o[a++];)r.highlightElement(i,!0===e,n.callback)},highlightElement:function(n,i,o){for(var a,s,l=n;l&&!e.test(l.className);)l=l.parentNode;l&&(a=(l.className.match(e)||[,""])[1].toLowerCase(),s=r.languages[a]),n.className=n.className.replace(e,"").replace(/\s+/g," ")+" language-"+a,l=n.parentNode,/pre/i.test(l.nodeName)&&(l.className=l.className.replace(e,"").replace(/\s+/g," ")+" language-"+a);var u=n.textContent,c={element:n,language:a,grammar:s,code:u};if(r.hooks.run("before-sanity-check",c),!c.code||!c.grammar)return c.code&&(c.element.textContent=c.code),void r.hooks.run("complete",c);if(r.hooks.run("before-highlight",c),i&&t.Worker){var h=new Worker(r.filename);h.onmessage=function(e){c.highlightedCode=e.data,r.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,o&&o.call(c.element),
r.hooks.run("after-highlight",c),r.hooks.run("complete",c)},h.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else c.highlightedCode=r.highlight(c.code,c.grammar,c.language),r.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,o&&o.call(n),r.hooks.run("after-highlight",c),r.hooks.run("complete",c)},highlight:function(e,t,n){var o=r.tokenize(e,t);return i.stringify(r.util.encode(o),n)},tokenize:function(e,t,n){var i=r.Token,o=[e],a=t.rest;if(a){for(var s in a)t[s]=a[s];delete t.rest}e:for(var s in t)if(t.hasOwnProperty(s)&&t[s]){var l=t[s];l="Array"===r.util.type(l)?l:[l];for(var u=0;u<l.length;++u){var c=l[u],h=c.inside,p=!!c.lookbehind,d=!!c.greedy,f=0,g=c.alias;if(d&&!c.pattern.global){var m=c.pattern.toString().match(/[imuy]*$/)[0];c.pattern=RegExp(c.pattern.source,m+"g")}c=c.pattern||c;for(var v=0,y=0;v<o.length;y+=o[v].length,++v){var b=o[v];if(o.length>e.length)break e;if(!(b instanceof i)){c.lastIndex=0;var k=c.exec(b),w=1;if(!k&&d&&v!=o.length-1){if(c.lastIndex=y,!(k=c.exec(e)))break;for(var x=k.index+(p?k[1].length:0),_=k.index+k[0].length,S=v,C=y,L=o.length;S<L&&C<_;++S)C+=o[S].length,x>=C&&(++v,y=C);if(o[v]instanceof i||o[S-1].greedy)continue;w=S-v,b=e.slice(y,C),k.index-=y}if(k){p&&(f=k[1].length);var x=k.index+f,k=k[0].slice(f),_=x+k.length,E=b.slice(0,x),T=b.slice(_),$=[v,w];E&&$.push(E);var A=new i(s,h?r.tokenize(k,h):k,g,k,d);$.push(A),T&&$.push(T),Array.prototype.splice.apply(o,$)}}}}}return o},hooks:{all:{},add:function(e,t){var n=r.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=r.hooks.all[e];if(n&&n.length)for(var i,o=0;i=n[o++];)i(t)}}},i=r.Token=function(e,t,n,r,i){this.type=e,this.content=t,this.alias=n,this.length=0|(r||"").length,this.greedy=!!i};if(i.stringify=function(e,t,n){if("string"==typeof e)return e;if("Array"===r.util.type(e))return e.map(function(n){return i.stringify(n,t,e)}).join("");var o={type:e.type,content:i.stringify(e.content,t,n),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:n};if("comment"==o.type&&(o.attributes.spellcheck="true"),e.alias){var a="Array"===r.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(o.classes,a)}r.hooks.run("wrap",o);var s=Object.keys(o.attributes).map(function(e){return e+'="'+(o.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+o.tag+' class="'+o.classes.join(" ")+'"'+(s?" "+s:"")+">"+o.content+"</"+o.tag+">"},!t.document)return t.addEventListener?(t.addEventListener("message",function(e){var n=JSON.parse(e.data),i=n.language,o=n.code,a=n.immediateClose;t.postMessage(r.highlight(o,r.languages[i],i)),a&&t.close()},!1),t.Prism):t.Prism;var o=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return o&&(r.filename=o.src,document.addEventListener&&!o.hasAttribute("data-manual")&&("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(r.highlightAll):window.setTimeout(r.highlightAll,16):document.addEventListener("DOMContentLoaded",r.highlightAll))),t.Prism}();e.exports&&(e.exports=n),void 0!==Te&&(Te.Prism=n),n.languages.markup={comment:/<!--[\w\W]*?-->/,prolog:/<\?[\w\W]+?\?>/,doctype:/<!DOCTYPE[\w\W]+?>/i,cdata:/<!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,inside:{punctuation:/[=>"']/}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},n.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),n.languages.xml=n.languages.markup,n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.css={comment:/\/\*[\w\W]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^\{\}\s][^\{\};]*?(?=\s*\{)/,string:{pattern:/("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/(\b|\B)[\w-]+(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},n.languages.css.atrule.inside.rest=n.util.clone(n.languages.css),n.languages.markup&&(n.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,lookbehind:!0,inside:n.languages.css,alias:"language-css"}}),n.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|').*?\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:n.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:n.languages.css}},alias:"language-css"}},n.languages.markup.tag)),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0}],string:{pattern:/(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{keyword:/\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,function:/[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*\*?|\/|~|\^|%|\.{3}/}),n.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0,greedy:!0}}),n.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\\\|\\?[^\\])*?`/,greedy:!0,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}}}),n.languages.markup&&n.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,lookbehind:!0,inside:n.languages.javascript,alias:"language-javascript"}}),n.languages.js=n.languages.javascript,function(){"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.forEach&&Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(t){for(var r,i=t.getAttribute("data-src"),o=t,a=/\blang(?:uage)?-(?!\*)(\w+)\b/i;o&&!a.test(o.className);)o=o.parentNode;if(o&&(r=(t.className.match(a)||[,""])[1]),!r){var s=(i.match(/\.(\w+)$/)||[,""])[1];r=e[s]||s}var l=document.createElement("code");l.className="language-"+r,t.textContent="",l.textContent="Loading…",t.appendChild(l);var u=new XMLHttpRequest;u.open("GET",i,!0),u.onreadystatechange=function(){4==u.readyState&&(u.status<400&&u.responseText?(l.textContent=u.responseText,n.highlightElement(l)):u.status>=400?l.textContent="✖ Error "+u.status+" while fetching file: "+u.statusText:l.textContent="✖ Error: File does not exist or is empty")},u.send(null)})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight))}()}),Pe={},Oe=/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,.\/:;<=>?@\[\]^`{|}~]/g;T.clear=function(){Pe={}};var je=decodeURIComponent,Me=encodeURIComponent,qe=e(function(e){return/(:|(\/{2}))/g.test(e)}),Ne=e(function(e){return/\/$/g.test(e)?e:(e=e.match(/(\S*\/)[^\/]+$/))?e[1]:""}),Re=e(function(e){return e.replace(/^\/+/,"/").replace(/([^:])\/{2,}/g,"$1/")}),Fe={},He=function(t,n){this.config=t,this.router=n,this.cacheTree={},this.toc=[],this.linkTarget=t.externalLinkTarget||"_blank",this.contentBase=n.getBasePath();var i,o=this._initRenderer(),a=t.markdown||{};r(a)?i=a($e,o):($e.setOptions(se(a,{renderer:se(o,a.renderer)})),i=$e),this.compile=e(function(e){var n="";return e?(n=i(e),n=t.noEmoji?n:A(n),T.clear(),n):e})};He.prototype.matchNotCompileLink=function(e){for(var t=this.config.noCompileLinks||[],n=0;n<t.length;n++){var r=t[n];if((Fe[r]||(Fe[r]=new RegExp("^"+r+"$"))).test(e))return e}},He.prototype._initRenderer=function(){var e=new $e.Renderer,t=this,n=t.linkTarget,r=t.router,i=t.contentBase,o=this,a={};a.heading=e.heading=function(e,t){var n={level:t,title:e};/{docsify-ignore}/g.test(e)&&(e=e.replace("{docsify-ignore}",""),n.title=e,n.ignoreSubHeading=!0),/{docsify-ignore-all}/g.test(e)&&(e=e.replace("{docsify-ignore-all}",""),n.title=e,n.ignoreAllSubs=!0);var i=T(e),a=r.toURL(r.getCurrentPath(),{id:i});return n.slug=a,o.toc.push(n),"<h"+t+' id="'+i+'"><a href="'+a+'" data-id="'+i+'" class="anchor"><span>'+e+"</span></a></h"+t+">"},a.code=e.code=function(e,t){return void 0===t&&(t=""),'<pre v-pre data-lang="'+t+'"><code class="lang-'+t+'">'+Ae.highlight(e,Ae.languages[t]||Ae.languages.markup)+"</code></pre>"},a.link=e.link=function(e,t,i){void 0===t&&(t="");var a="",s=M(t),l=s.str,u=s.config;return t=l,/:|(\/{2})/.test(e)||o.matchNotCompileLink(e)||u.ignore?a+=' target="'+n+'"':e=r.toURL(e,null,r.getCurrentPath()),u.target&&(a+=" target="+u.target),u.disabled&&(a+=" disabled",e="javascript:void(0)"),t&&(a+=' title="'+t+'"'),'<a href="'+e+'"'+a+">"+i+"</a>"},a.paragraph=e.paragraph=function(e){return/^!&gt;/.test(e)?k("tip",e):/^\?&gt;/.test(e)?k("warn",e):"<p>"+e+"</p>"},a.image=e.image=function(e,t,n){var r=e,o="",a=M(t),s=a.str,l=a.config;return t=s,l["no-zoom"]&&(o+=" data-no-zoom"),t&&(o+=' title="'+t+'"'),qe(e)||(r=j(i,e)),'<img src="'+r+'"data-origin="'+e+'" alt="'+n+'"'+o+">"};var s=/^\[([ x])\] +/;return a.listitem=e.listitem=function(e){var t=s.exec(e);return t&&(e=e.replace(s,'<input type="checkbox" '+("x"===t[1]?"checked":"")+" />")),"<li"+(t?' class="task-list-item"':"")+">"+e+"</li>\n"},e.origin=a,e},He.prototype.sidebar=function(e,t){var n=this.router.getCurrentPath(),r="";if(e)r=this.compile(e),r=r&&r.match(/<ul[^>]*>([\s\S]+)<\/ul>/g)[0];else{var i=this.cacheTree[n]||L(this.toc,t);r=b(i,"<ul>"),this.cacheTree[n]=i}return r},He.prototype.subSidebar=function(e){if(!e)return void(this.toc=[]);var t=this.router.getCurrentPath(),n=this,r=n.cacheTree,i=n.toc;i[0]&&i[0].ignoreAllSubs&&i.splice(0),i[0]&&1===i[0].level&&i.shift();for(var o=0;o<i.length;o++)i[o].ignoreSubHeading&&i.splice(o,1)&&o--;var a=r[t]||L(i,e);return r[t]=a,this.toc=[],b(a,'<ul class="app-sub-sidebar">')},He.prototype.article=function(e){return this.compile(e)},He.prototype.cover=function(e){var t=this.toc.slice(),n=this.compile(e);return this.toc=t.slice(),n};var ze=ge.title,Be=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Ie=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};F(this,e),this.duration=t.duration||1e3,this.ease=t.easing||this._defaultEase,this.start=t.start,this.end=t.end,this.frame=null,this.next=null,this.isRunning=!1,this.events={},this.direction=this.start<this.end?"up":"down"}return Be(e,[{key:"begin",value:function(){return this.isRunning||this.next===this.end||(this.frame=window.requestAnimationFrame(this._tick.bind(this))),this}},{key:"stop",value:function(){return window.cancelAnimationFrame(this.frame),this.isRunning=!1,this.frame=null,this.timeStart=null,this.next=null,this}},{key:"on",value:function(e,t){return this.events[e]=this.events[e]||[],this.events[e].push(t),this}},{key:"emit",value:function(e,t){var n=this,r=this.events[e];r&&r.forEach(function(e){return e.call(n,t)})}},{key:"_tick",value:function(e){this.isRunning=!0;var t=this.next||this.start;this.timeStart||(this.timeStart=e),this.timeElapsed=e-this.timeStart,this.next=Math.round(this.ease(this.timeElapsed,this.start,this.end-this.start,this.duration)),this._shouldTick(t)?(this.emit("tick",this.next),this.frame=window.requestAnimationFrame(this._tick.bind(this))):(this.emit("tick",this.end),this.emit("done",null))}},{key:"_shouldTick",value:function(e){return{up:this.next<this.end&&e<=this.next,down:this.next>this.end&&e>=this.next}[this.direction]}},{key:"_defaultEase",value:function(e,t,n,r){return(e/=r/2)<1?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t}}]),e}(),De={},We=!1,Ue=null,Ye=!0,Ze=0,Ge=ge.scrollingElement||ge.documentElement,Xe={},Ve=function(e){this.config=e};Ve.prototype.getBasePath=function(){return this.config.basePath},Ve.prototype.getFile=function(e,t){e=e||this.getCurrentPath();var n=this,r=n.config,i=this.getBasePath();return e=r.alias?V(e,r.alias):e,e=J(e),e="/README.md"===e?r.homepage||e:e,e=qe(e)?e:j(i,e),t&&(e=e.replace(new RegExp("^"+i),"")),e},Ve.prototype.onchange=function(e){void 0===e&&(e=n),e()},Ve.prototype.getCurrentPath=function(){},Ve.prototype.normalize=function(){},Ve.prototype.parse=function(){},Ve.prototype.toURL=function(){};var Je=e(function(e){return e.replace("#","?id=")}),Qe=function(e){function t(t){e.call(this,t),this.mode="hash"}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.getBasePath=function(){var e=window.location.pathname||"",t=this.config.basePath;return/^(\/|https?:)/g.test(t)?t:Re(e+"/"+t)},t.prototype.getCurrentPath=function(){var e=location.href,t=e.indexOf("#");return-1===t?"":e.slice(t+1)},t.prototype.onchange=function(e){void 0===e&&(e=n),p("hashchange",e)},t.prototype.normalize=function(){var e=this.getCurrentPath();if(e=Je(e),"/"===e.charAt(0))return Q(e);Q("/"+e)},t.prototype.parse=function(e){void 0===e&&(e=location.href);var t="",n=e.indexOf("#");n>=0&&(e=e.slice(n+1));var r=e.indexOf("?");return r>=0&&(t=e.slice(r+1),e=e.slice(0,r)),{path:e,file:this.getFile(e,!0),query:P(t)}},t.prototype.toURL=function(e,t,n){var r=n&&"#"===e[0],i=this.parse(Je(e));if(i.query=se({},i.query,t),e=i.path+O(i.query),e=e.replace(/\.md(\?)|\.md$/,"$1"),r){var o=n.indexOf("?");e=(o>0?n.substr(0,o):n)+e}return Re("#/"+e)},t}(Ve),Ke=function(e){function t(t){e.call(this,t),this.mode="history"}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.getCurrentPath=function(){var e=this.getBasePath(),t=window.location.pathname;return e&&0===t.indexOf(e)&&(t=t.slice(e.length)),(t||"/")+window.location.search+window.location.hash},t.prototype.onchange=function(e){void 0===e&&(e=n),p("click",function(t){var n="A"===t.target.tagName?t.target:t.target.parentNode;if("A"===n.tagName&&!/_blank/.test(n.target)){t.preventDefault();var r=n.href;window.history.pushState({key:r},"",r),e()}}),p("popstate",e)},t.prototype.parse=function(e){void 0===e&&(e=location.href);var t="",n=e.indexOf("?");n>=0&&(t=e.slice(n+1),e=e.slice(0,n));var r=j(location.origin),i=e.indexOf(r);return i>-1&&(e=e.slice(i+r.length)),{path:e,file:this.getFile(e),query:P(t)}},t.prototype.toURL=function(e,t,n){var r=n&&"#"===e[0],i=this.parse(e);return i.query=se({},i.query,t),e=i.path+O(i.query),e=e.replace(/\.md(\?)|\.md$/,"$1"),r&&(e=n+e),Re("/"+e)},t}(Ve),et={},tt=Object.freeze({cached:e,hyphenate:ae,merge:se,isPrimitive:t,noop:n,isFn:r,inBrowser:be,isMobile:ke,supportsPushState:we,parseQuery:P,stringifyQuery:O,getPath:j,isAbsolutePath:qe,getParentPath:Ne,cleanPath:Re}),nt=oe.prototype;!function(e){e._init=function(){var e=this;e.config=le||{},i(e),ie(e),o(e,"init"),ee(e),X(e),te(e),re(e),o(e,"mounted")}}(nt),function(e){e.route={}}(nt),function(e){e._renderTo=function(e,t,n){var r=a(e);r&&(r[n?"outerHTML":"innerHTML"]=t)},e._renderSidebar=function(e){var t=this.config,n=t.maxLevel,r=t.subMaxLevel,i=t.loadSidebar;this._renderTo(".sidebar-nav",this.compiler.sidebar(e,n));var o=R(this.router,".sidebar-nav",!0,!0);i&&o?o.parentNode.innerHTML+=this.compiler.subSidebar(r)||"":this.compiler.subSidebar(),this._bindEventOnRendered(o)},e._bindEventOnRendered=function(e){var t=this.config,n=t.autoHeader,r=t.auto2top;if(I(this.router),n&&e){var i=a("#main"),o=i.children[0];if(o&&"H1"!==o.tagName){var s=u("h1");s.innerText=e.innerText,h(i,s)}}r&&W(r)},e._renderNav=function(e){e&&this._renderTo("nav",this.compiler.compile(e)),R(this.router,"nav")},e._renderMain=function(e,t){var n=this;if(void 0===t&&(t={}),!e)return Z.call(this,e);o(this,"beforeEach",e,function(e){var r=n.isHTML?e:n.compiler.compile(e);t.updatedAt&&(r=Y(r,t.updatedAt,n.config.formatUpdated)),o(n,"afterEach",r,function(e){return Z.call(n,e)})})},e._renderCover=function(e){var t=a(".cover");if(!e)return void f(t,"remove","show");f(t,"add","show");var n=this.coverIsHTML?e:this.compiler.cover(e),r=n.trim().match('<p><img.*?data-origin="(.*?)"[^a]+alt="(.*?)">([^<]*?)</p>$');if(r){if("color"===r[2])t.style.background=r[1]+(r[3]||"");else{var i=r[1];f(t,"add","has-mask"),qe(r[1])||(i=j(this.router.getBasePath(),r[1])),t.style.backgroundImage="url("+i+")",t.style.backgroundSize="cover",t.style.backgroundPosition="center center"}n=n.replace(r[0],"")}this._renderTo(".cover-main",n),N()},e._updateRender=function(){G(this)}}(nt),function(e){var t;e._fetch=function(e){var r=this;void 0===e&&(e=n);var i=this.route,o=i.path,a=i.query,s=O(a,["id"]),l=this.config,u=l.loadNavbar,c=l.loadSidebar;t&&t.abort&&t.abort(),t=_(this.router.getFile(o)+s,!0),this.isHTML=/\.html$/g.test(o);var h=function(){if(!c)return e();ne(o,s,c,function(t){r._renderSidebar(t),e()},r,!0)};t.then(function(e,t){r._renderMain(e,t),h()},function(e){r._renderMain(null),h()}),u&&ne(o,s,u,function(e){return r._renderNav(e)},this,!0)},e._fetchCover=function(){var e=this,t=this.config,n=t.coverpage,r=this.route.query,i=Ne(this.route.path),o=this.router.getFile(i+n);if("/"!==this.route.path||!n)return void this._renderCover();this.coverIsHTML=/\.html$/g.test(o),_(o+O(r,["id"])).then(function(t){return e._renderCover(t)})},e.$fetch=function(e){var t=this;void 0===e&&(e=n),this._fetchCover(),this._fetch(function(n){t.$resetEvents(),o(t,"doneEach"),e()})}}(nt),function(e){e.$resetEvents=function(){D(this.route.path,this.route.query.id),R(this.router,"nav")}}(nt),function(){window.Docsify={util:tt,dom:ye,get:_,slugify:T},window.DocsifyCompiler=He,window.marked=$e,window.Prism=Ae}(),oe.version="4.5.7",function(e){var t=document.readyState;if("complete"===t||"interactive"===t)return setTimeout(e,0);document.addEventListener("DOMContentLoaded",e)}(function(e){return new oe})}();

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

Prism.languages.css = {
	'comment': /\/\*[\s\S]*?\*\//,
	'atrule': {
		pattern: /@[\w-]+?.*?(?:;|(?=\s*\{))/i,
		inside: {
			'rule': /@[\w-]+/
			// See rest below
		}
	},
	'url': /url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
	'selector': /[^{}\s][^{};]*?(?=\s*\{)/,
	'string': {
		pattern: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
		greedy: true
	},
	'property': /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
	'important': /\B!important\b/i,
	'function': /[-a-z0-9]+(?=\()/i,
	'punctuation': /[(){};:]/
};

Prism.languages.css['atrule'].inside.rest = Prism.util.clone(Prism.languages.css);

if (Prism.languages.markup) {
	Prism.languages.insertBefore('markup', 'tag', {
		'style': {
			pattern: /(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,
			lookbehind: true,
			inside: Prism.languages.css,
			alias: 'language-css',
			greedy: true
		}
	});

	Prism.languages.insertBefore('inside', 'attr-value', {
		'style-attr': {
			pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
			inside: {
				'attr-name': {
					pattern: /^\s*style/i,
					inside: Prism.languages.markup.tag.inside
				},
				'punctuation': /^\s*=\s*['"]|['"]\s*$/,
				'attr-value': {
					pattern: /.+/i,
					inside: Prism.languages.css
				}
			},
			alias: 'language-css'
		}
	}, Prism.languages.markup.tag);
}

/***/ }),
/* 7 */
/***/ (function(module, exports) {

Prism.languages.javascript = Prism.languages.extend('clike', {
	'keyword': /\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
	'number': /\b-?(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|\d*\.?\d+(?:[Ee][+-]?\d+)?|NaN|Infinity)\b/,
	// Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
	'function': /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,
	'operator': /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/
});

Prism.languages.insertBefore('javascript', 'keyword', {
	'regex': {
		pattern: /(^|[^/])\/(?!\/)(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,
		lookbehind: true,
		greedy: true
	},
	// This must be declared before keyword because we use "function" inside the look-forward
	'function-variable': {
		pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,
		alias: 'function'
	}
});

Prism.languages.insertBefore('javascript', 'string', {
	'template-string': {
		pattern: /`(?:\\[\s\S]|[^\\`])*`/,
		greedy: true,
		inside: {
			'interpolation': {
				pattern: /\$\{[^}]+\}/,
				inside: {
					'interpolation-punctuation': {
						pattern: /^\$\{|\}$/,
						alias: 'punctuation'
					},
					rest: Prism.languages.javascript
				}
			},
			'string': /[\s\S]+/
		}
	}
});

if (Prism.languages.markup) {
	Prism.languages.insertBefore('markup', 'tag', {
		'script': {
			pattern: /(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,
			lookbehind: true,
			inside: Prism.languages.javascript,
			alias: 'language-javascript',
			greedy: true
		}
	});
}

Prism.languages.js = Prism.languages.javascript;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

/* TODO
	Handle multiline code after tag
	    %foo= some |
			multiline |
			code |
*/

(function(Prism) {
 
  Prism.languages.haml = {
   // Multiline stuff should appear before the rest
 
   'multiline-comment': {
    pattern: /((?:^|\r?\n|\r)([\t ]*))(?:\/|-#).*(?:(?:\r?\n|\r)\2[\t ]+.+)*/,
    lookbehind: true,
    alias: 'comment'
   },
 
   'multiline-code': [
    {
     pattern: /((?:^|\r?\n|\r)([\t ]*)(?:[~-]|[&!]?=)).*,[\t ]*(?:(?:\r?\n|\r)\2[\t ]+.*,[\t ]*)*(?:(?:\r?\n|\r)\2[\t ]+.+)/,
     lookbehind: true,
     inside: {
      rest: Prism.languages.ruby
     }
    },
    {
     pattern: /((?:^|\r?\n|\r)([\t ]*)(?:[~-]|[&!]?=)).*\|[\t ]*(?:(?:\r?\n|\r)\2[\t ]+.*\|[\t ]*)*/,
     lookbehind: true,
     inside: {
      rest: Prism.languages.ruby
     }
    }
   ],
 
   // See at the end of the file for known filters
   'filter': {
    pattern: /((?:^|\r?\n|\r)([\t ]*)):[\w-]+(?:(?:\r?\n|\r)(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/,
    lookbehind: true,
    inside: {
     'filter-name': {
      pattern: /^:[\w-]+/,
      alias: 'variable'
     }
    }
   },
 
   'markup': {
    pattern: /((?:^|\r?\n|\r)[\t ]*)<.+/,
    lookbehind: true,
    inside: {
     rest: Prism.languages.markup
    }
   },
   'doctype': {
    pattern: /((?:^|\r?\n|\r)[\t ]*)!!!(?: .+)?/,
    lookbehind: true
   },
   'tag': {
    // Allows for one nested group of braces
    pattern: /((?:^|\r?\n|\r)[\t ]*)[%.#][\w\-#.]*[\w\-](?:\([^)]+\)|\{(?:\{[^}]+\}|[^}])+\}|\[[^\]]+\])*[\/<>]*/,
    lookbehind: true,
    inside: {
     'attributes': [
      {
       // Lookbehind tries to prevent interpolations from breaking it all
       // Allows for one nested group of braces
       pattern: /(^|[^#])\{(?:\{[^}]+\}|[^}])+\}/,
       lookbehind: true,
       inside: {
        rest: Prism.languages.ruby
       }
      },
      {
       pattern: /\([^)]+\)/,
       inside: {
        'attr-value': {
         pattern: /(=\s*)(?:"(?:\\.|[^\\"\r\n])*"|[^)\s]+)/,
         lookbehind: true
        },
        'attr-name': /[\w:-]+(?=\s*!?=|\s*[,)])/,
        'punctuation': /[=(),]/
       }
      },
      {
       pattern: /\[[^\]]+\]/,
       inside: {
        rest: Prism.languages.ruby
       }
      }
     ],
     'punctuation': /[<>]/
    }
   },
   'code': {
    pattern: /((?:^|\r?\n|\r)[\t ]*(?:[~-]|[&!]?=)).+/,
    lookbehind: true,
    inside: {
     rest: Prism.languages.ruby
    }
   },
   // Interpolations in plain text
   'interpolation': {
    pattern: /#\{[^}]+\}/,
    inside: {
     'delimiter': {
      pattern: /^#\{|\}$/,
      alias: 'punctuation'
     },
     rest: Prism.languages.ruby
    }
   },
   'punctuation': {
    pattern: /((?:^|\r?\n|\r)[\t ]*)[~=\-&!]+/,
    lookbehind: true
   }
  };
 
  var filter_pattern = '((?:^|\\r?\\n|\\r)([\\t ]*)):{{filter_name}}(?:(?:\\r?\\n|\\r)(?:\\2[\\t ]+.+|\\s*?(?=\\r?\\n|\\r)))+';
 
  // Non exhaustive list of available filters and associated languages
  var filters = [
   'css',
   {filter:'coffee',language:'coffeescript'},
   'erb',
   'javascript',
   'less',
   'markdown',
   'ruby',
   'scss',
   'textile'
  ];
  var all_filters = {};
  for (var i = 0, l = filters.length; i < l; i++) {
   var filter = filters[i];
   filter = typeof filter === 'string' ? {filter: filter, language: filter} : filter;
   if (Prism.languages[filter.language]) {
    all_filters['filter-' + filter.filter] = {
     pattern: RegExp(filter_pattern.replace('{{filter_name}}', filter.filter)),
     lookbehind: true,
     inside: {
      'filter-name': {
       pattern: /^:[\w-]+/,
       alias: 'variable'
      },
      rest: Prism.languages[filter.language]
     }
    }
   }
  }
 
  Prism.languages.insertBefore('haml', 'filter', all_filters);
 
 }(Prism));

/***/ })
/******/ ]);