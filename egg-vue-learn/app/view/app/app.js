module.exports=function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/public/",t(t.s=80)}([function(e,t){e.exports=function(e,t,n,r,o,i){var s,a=e=e||{},u=typeof e.default;"object"!==u&&"function"!==u||(s=e,a=e.default);var c="function"==typeof a?a.options:a;t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0),n&&(c.functional=!0),o&&(c._scopeId=o);var l;if(i?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},c._ssrRegister=l):r&&(l=r),l){var d=c.functional,f=d?c.render:c.beforeCreate;d?(c._injectStyles=l,c.render=function(e,t){return l.call(t),f(e,t)}):c.beforeCreate=f?[].concat(f,l):[l]}return{esModule:s,exports:a,options:c}}},function(e,t){function n(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var i=r(o);return[n].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([i]).join("\n")}return[n].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var s=e[o];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(e,t,n){function r(e,t){for(var n=0;n<t.length;n++)for(var r=t[n].parts,o=0;o<r.length;o++){var i=r[o],s=i.media||"default",a=e[s];a?a.ids.indexOf(i.id)<0&&(a.ids.push(i.id),a.css+="\n"+i.css):e[s]={ids:[i.id],css:i.css,media:i.media}}}function o(e,t){for(var n=0;n<t.length;n++)for(var r=t[n].parts,o=0;o<r.length;o++){var i=r[o];e[i.id]={ids:[i.id],css:i.css,media:i.media}}}function i(e){var t="";for(var n in e){var r=e[n];t+='<style data-vue-ssr-id="'+r.ids.join(" ")+'"'+(r.media?' media="'+r.media+'"':"")+">"+r.css+"</style>"}return t}var s=n(12);e.exports=function(e,t,n,a){if(a||"undefined"==typeof __VUE_SSR_CONTEXT__||(a=__VUE_SSR_CONTEXT__),a){a.hasOwnProperty("styles")||(Object.defineProperty(a,"styles",{enumerable:!0,get:function(){return i(a._styles)}}),a._renderStyles=i);var u=a._styles||(a._styles={});t=s(e,t),n?r(u,t):o(u,t)}}},function(e,t){!function(e){e.noop=function(){}}("object"==typeof e&&"object"==typeof e.exports?e.exports:window)},function(e,t){e.exports=require("vue")},function(e,t,n){"use strict";var r=n(4);(function(e){return e&&e.__esModule?e:{default:e}})(r).default.filter("removeHtml",function(e){return e&&e.replace(/<(?:.|\n)*?>/gm,"").replace(/(&rdquo;)/g,'"').replace(/&ldquo;/g,'"').replace(/&mdash;/g,"-").replace(/&nbsp;/g,"").replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/<[\w\s"':=\/]*/,"")})},function(e,t,n){"use strict"},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(4),i=r(o),s=n(8),a=r(s);i.default.component(a.default.name,a.default)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=n(9),i=function(e){return e&&e.__esModule?e:{default:e}}(o),s='<div id="app"><MainLayout><div slot="main"><slot></slot></div></MainLayout></div>';t.default={name:"Layout",props:["title","description","keywords"],components:{MainLayout:i.default},computed:{vTitle:function(){return this.$root.title||this.title||"egg-vue-webpack"},vKeywords:function(){return this.$root.keywords||this.keywords||"egg, vue, webpack, server side render"},vDescription:function(){return this.$root.description||this.description||"egg-vue-webpack server side render"},baseClass:function(){return this.$root.baseClass}},template:"object"===("undefined"==typeof window?"undefined":r(window))?s:'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <title>{{title}}</title>\n  <meta name="keywords" :content="keywords">\n  <meta name="description" :content="description">\n  <meta http-equiv="content-type" content="text/html;charset=utf-8">\n  <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">\n  <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />\n  <link rel="stylesheet" href="https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.min.css">\n  <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-default/index.css">\n</head>\n<body :class="baseClass">\n  <div id="app"><div id="app"><MainLayout><div slot="main"><slot></slot></div></MainLayout></div></div>\n</body>\n</html>'},e.exports=t.default},function(e,t,n){"use strict";function r(e){var t;t=n(10),t.__inject__&&t.__inject__(e)}Object.defineProperty(t,"__esModule",{value:!0});var o=n(13),i=n.n(o),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("LayoutHeader"),e._ssrNode(" "),n("LayoutContent",[n("div",{attrs:{slot:"content"},slot:"content"},[e._t("main")],2)])],2)},a=[],u={render:s,staticRenderFns:a},c=u,l=n(0),d=r,f=l(i.a,c,!1,d,null,"7b407f09");t.default=f.exports},function(e,t,n){var r=n(11);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var o=n(2);e.exports.__inject__=function(e){o("18aa9bcc",r,!0,e)}},function(e,t,n){t=e.exports=n(1)(void 0),t.i(n(3),""),t.push([e.i,"body{margin:0}a{text-decoration:none}",""])},function(e,t){e.exports=function(e,t){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],s=i[0],a=i[1],u=i[2],c=i[3],l={id:e+":"+o,css:a,media:u,sourceMap:c};r[s]?r[s].parts.push(l):n.push(r[s]={id:s,parts:[l]})}return n}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(14),i=r(o),s=n(18),a=r(s);t.default={components:{LayoutHeader:i.default,LayoutContent:a.default}},e.exports=t.default},function(e,t,n){"use strict";function r(e){var t;t=n(15),t.__inject__&&t.__inject__(e)}Object.defineProperty(t,"__esModule",{value:!0});var o=n(17),i=n.n(o),s=function(){var e=this,t=e.$createElement;return(e._self._c||t)("header",{staticClass:"header"},[e._ssrNode('<div class="container"><h1><a href="/" class="router-link-active">vue-multi-page</a></h1> <ul class="nav"><li class="nav-item"><a href="/"'+e._ssrClass(null,{active:"/"===e.selectedMenu})+'>Server-Render</a></li> <li class="nav-item"><a href="/client"'+e._ssrClass(null,{active:"/client"===e.selectedMenu})+'>Client-Render</a></li> <li class="nav-item"><a href="/public/html/home/index.html"'+e._ssrClass(null,{active:"/public/html/home/index.html"===e.selectedMenu})+'>Html</a></li> <li class="nav-item"><a href="/element"'+e._ssrClass(null,{active:"/element"===e.selectedMenu})+'>Element</a></li> <li class="nav-item"><a href="/app"'+e._ssrClass(null,{active:"/app"===e.selectedMenu})+">Single-Page</a></li></ul></div>")])},a=[],u={render:s,staticRenderFns:a},c=u,l=n(0),d=r,f=l(i.a,c,!1,d,null,"018f1f2f");t.default=f.exports},function(e,t,n){var r=n(16);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var o=n(2);e.exports.__inject__=function(e){o("01aa6a43",r,!0,e)}},function(e,t,n){t=e.exports=n(1)(void 0),t.i(n(3),""),t.push([e.i,"",""])},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{selectedMenu:"/"}},computed:{},mounted:function(){this.selectedMenu=window.location.pathname.toLowerCase()}},e.exports=t.default},function(e,t,n){"use strict";function r(e){var t;t=n(19),t.__inject__&&t.__inject__(e)}Object.defineProperty(t,"__esModule",{value:!0});var o=n(21),i=n.n(o),s=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"main"},[e._ssrNode('<div class="page-container page-component">',"</div>",[e._t("content")],2)])},a=[],u={render:s,staticRenderFns:a},c=u,l=n(0),d=r,f=l(i.a,c,!1,d,null,"dde2b07a");t.default=f.exports},function(e,t,n){var r=n(20);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var o=n(2);e.exports.__inject__=function(e){o("fe4a0e3a",r,!0,e)}},function(e,t,n){t=e.exports=n(1)(void 0),t.i(n(3),""),t.push([e.i,"",""])},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"v-content",data:function(){return{}},components:{},mounted:function(){}},e.exports=t.default},,,function(e,t,n){e.exports=n.p+"img/egg-vue-webpack-dev.bfa0c059.png"},,function(e,t,n){e.exports=n.p+"img/loading.0c81ad12.gif"},function(e,t){e.exports=require("vuex")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.SET_ARTICLE_LIST="SET_ARTICLE_LIST",t.SET_ARTICLE_DETAIL="SET_ARTICLE_DETAIL"},function(e,t){e.exports=require("axios")},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(81),s=n(82),a=r(s),u=n(86),c=r(u),l=n(96),d=r(l),f=n(98),p=r(f),_=n(99),v=r(_);p.default.component(v.default.name,v.default),(0,i.sync)(a.default,c.default),t.default=p.default.init(o({base:"/app"},d.default,{router:c.default,store:a.default})),e.exports=t.default},function(e,t){e.exports=require("vuex-router-sync")},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(4),i=r(o),s=n(27),a=r(s),u=n(83),c=r(u),l=n(84),d=r(l),f=n(85),p=r(f);i.default.use(a.default);var _={articleList:[],article:{}};t.default=new a.default.Store({state:_,actions:c.default,getters:d.default,mutations:p.default}),e.exports=t.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(28),i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(o),s=n(4),a=r(s),u=n(27),c=r(u),l=n(29),d=r(l);a.default.use(c.default);var f="http://127.0.0.1:7001",p={FETCH_ARTICLE_LIST:function(e){var t=e.commit;e.dispatch;return e.state.articleList.length?Promise.resolve():d.default.get(f+"/app/api/article/list").then(function(e){var n=e.data.list;return t(i.SET_ARTICLE_LIST,n),n})},FETCH_ARTICLE_DETAIL:function(e,t){var n=e.commit,r=(e.dispatch,e.state),o=t.id;return r.article.id!=o?d.default.get(f+"/app/api/article/"+o).then(function(e){var t=e.data;n(i.SET_ARTICLE_DETAIL,t)}):Promise.resolve()}};t.default=p,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={};t.default=r,e.exports=t.default},function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0});var o,i=n(28),s=(o={},r(o,i.SET_ARTICLE_LIST,function(e,t){e.articleList=t}),r(o,i.SET_ARTICLE_DETAIL,function(e,t){e.article=t}),o);t.default=s,e.exports=t.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(4),i=r(o),s=n(87),a=r(s),u=n(88),c=r(u),l=n(92),d=r(l);i.default.use(a.default);var f=new a.default({mode:"history",base:"/app",routes:[{path:"/",component:c.default},{path:"/list",component:c.default},{path:"/detail/:id",component:d.default}]});t.default=f,e.exports=t.default},function(e,t){e.exports=require("vue-router")},function(e,t,n){"use strict";function r(e){var t;t=n(89),t.__inject__&&t.__inject__(e)}Object.defineProperty(t,"__esModule",{value:!0});var o=n(91),i=n.n(o),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticStyle:{"font-size":"24px","text-align":"center"}},[e._ssrNode('<div class="container smart-container">',"</div>",[e._ssrNode('<div class="row row-offcanvas row-offcanvas-right">',"</div>",[e._ssrNode('<div class="col-xs-12 col-sm-9">',"</div>",[e._ssrNode('<ul id="articleList" class="smart-artiles">',"</ul>",e._l(e.articleList,function(t){return e._ssrNode("<li>","</li>",[e._ssrNode('<div class="point">'+e._ssrEscape("+"+e._s(t.hits))+"</div> "),e._ssrNode('<div class="card">',"</div>",[e._ssrNode("<h2>","</h2>",[r("router-link",{staticClass:"nav-item-a",attrs:{to:"/detail/"+t.id}},[e._v(e._s(t.title))])],1),e._ssrNode(' <div><ul class="actions"><li><time class="timeago">'+e._ssrEscape(e._s(t.moduleName))+'</time></li> <li class="tauthor"><a href="#" target="_blank" class="get">Sky</a></li> <li><a'+e._ssrAttr("href",t.url)+' target="_blank">原文</a></li> <li><span class="timeago">'+e._ssrEscape(e._s(t.summary))+'</span></li> <li><span class="timeago"></span></li></ul></div>')],2)],2)})),e._ssrNode(" "+(e.isLoading?'<div id="pagerBottom" class="smart-pager"><img'+e._ssrAttr("src",n(26))+"></div>":"\x3c!----\x3e"))],2)])])])},a=[],u={render:s,staticRenderFns:a},c=u,l=n(0),d=r,f=l(i.a,c,!1,d,null,"3544b4af");t.default=f.exports},function(e,t,n){var r=n(90);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var o=n(2);e.exports.__inject__=function(e){o("5ffcceb8",r,!0,e)}},function(e,t,n){t=e.exports=n(1)(void 0),t.push([e.i,"",""])},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={computed:{isLoading:function(){return!1},articleList:function(){return this.$store.state.articleList}},preFetch:function(e){var t=(e.state,e.dispatch);e.commit;return Promise.all([t("FETCH_ARTICLE_LIST")])},beforeMount:function(){return Promise.all([this.$store.dispatch("FETCH_ARTICLE_LIST")])}},e.exports=t.default},function(e,t,n){"use strict";function r(e){var t;t=n(93),t.__inject__&&t.__inject__(e)}Object.defineProperty(t,"__esModule",{value:!0});var o=n(95),i=n.n(o),s=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticStyle:{"font-size":"24px","text-align":"center"}},[e._ssrNode("\n  vue-server-render detail\n  <img"+e._ssrAttr("src",n(24))+">")])},a=[],u={render:s,staticRenderFns:a},c=u,l=n(0),d=r,f=l(i.a,c,!1,d,null,"3b4e5ebc");t.default=f.exports},function(e,t,n){var r=n(94);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var o=n(2);e.exports.__inject__=function(e){o("16655ce8",r,!0,e)}},function(e,t,n){t=e.exports=n(1)(void 0),t.push([e.i,"",""])},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={preFetch:function(e){var t=e.state,n=e.dispatch,r=(e.commit,t.route.params.id);return Promise.all([n("FETCH_ARTICLE_DETAIL",{id:r})])},beforeMount:function(){var e=this.$store.state.route.params.id;return Promise.all([this.$store.dispatch("FETCH_ARTICLE_DETAIL",{id:e})])}},e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(97),o=n.n(r),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("app-layout",[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)],1)},s=[],a={render:i,staticRenderFns:s},u=a,c=n(0),l=c(o.a,u,!1,null,null,"5a41e604");t.default=l.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={computed:{},mounted:function(){}},e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=n(4),s=function(e){return e&&e.__esModule?e:{default:e}}(i);n(5),n(6),n(7);var a={};a.data=function(){return window.__INITIAL_STATE__||{}},a.init=function(e){return"object"===("undefined"==typeof window?"undefined":o(window))?a.client(e):a.server(e)},a.client=function(e){s.default.prototype.$http=n(29),e.store?e.store.replaceState(a.data()):window.__INITIAL_STATE__&&(e.data=r(window.__INITIAL_STATE__,e.data&&e.data())),new s.default(e).$mount("#app")},a.server=function(e){return e.store&&e.router?function(t){e.router.push(t.state.url);var n=e.router.getMatchedComponents();return n?Promise.all(n.map(function(t){return t.preFetch?t.preFetch(e.store):null})).then(function(){return t.state=e.store.state,new s.default(e)}):Promise.reject({code:"404"})}:function(t){var n=s.default.extend(e),r=new n({data:t.state});return new Promise(function(e){e(r)})}},a.use=function(e){s.default.use(e)},a.component=function(e,t){s.default.component(e,t)},t.default=a,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=n(100),i=function(e){return e&&e.__esModule?e:{default:e}}(o),s='<div id="app"><MainLayout><div slot="main"><slot></slot></div></MainLayout></div>';t.default={name:"AppLayout",props:["title","description","keywords"],components:{MainLayout:i.default},computed:{vTitle:function(){return this.$root.title||this.title||"egg-vue-webpack"},vKeywords:function(){return this.$root.keywords||this.keywords||"egg, vue, webpack, server side render"},vDescription:function(){return this.$root.description||this.description||"egg-vue-webpack server side render"},baseClass:function(){return this.$root.baseClass}},template:"object"===("undefined"==typeof window?"undefined":r(window))?s:'<!DOCTYPE html>\n                <html lang="en">\n                  <head>\n                    <title>{{vTitle}}</title>\n                    <meta name="keywords" :content="vKeywords">\n                    <meta name="description" :content="vDescription">\n                    <meta http-equiv="content-type" content="text/html;charset=utf-8">\n                    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">\n                    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />\n                    <link rel="stylesheet" href="https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.min.css">\n                    <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-default/index.css">\n                  </head>\n                  <body :class="baseClass">\n                    '+s+"\n                  </body>\n                </html>"},e.exports=t.default},function(e,t,n){"use strict";function r(e){var t;t=n(101),t.__inject__&&t.__inject__(e)}Object.defineProperty(t,"__esModule",{value:!0});var o=n(103),i=n.n(o),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("LayoutHeader"),e._ssrNode(" "),n("LayoutContent",[n("div",{attrs:{slot:"content"},slot:"content"},[e._t("main")],2)])],2)},a=[],u={render:s,staticRenderFns:a},c=u,l=n(0),d=r,f=l(i.a,c,!1,d,null,"0b4cac19");t.default=f.exports},function(e,t,n){var r=n(102);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var o=n(2);e.exports.__inject__=function(e){o("bda62268",r,!0,e)}},function(e,t,n){t=e.exports=n(1)(void 0),t.i(n(3),""),t.push([e.i,"body{margin:0}a{text-decoration:none}",""])},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(104),i=r(o),s=n(108),a=r(s);t.default={components:{LayoutHeader:i.default,LayoutContent:a.default}},e.exports=t.default},function(e,t,n){"use strict";function r(e){var t;t=n(105),t.__inject__&&t.__inject__(e)}Object.defineProperty(t,"__esModule",{value:!0});var o=n(107),i=n.n(o),s=function(){var e=this,t=e.$createElement;return(e._self._c||t)("header",{staticClass:"header"},[e._ssrNode('<div class="container"><h1><a href class="router-link-active">vue-single-page</a></h1> <ul class="nav"><li class="nav-item"><a href="/app"'+e._ssrClass(null,{active:"/app"===e.selectedMenu})+'>Single-Page</a></li> <li class="nav-item"><a href="/"'+e._ssrClass(null,{active:"/"===e.selectedMenu})+">Multi-Page</a></li></ul></div>")])},a=[],u={render:s,staticRenderFns:a},c=u,l=n(0),d=r,f=l(i.a,c,!1,d,null,"2706b7c2");t.default=f.exports},function(e,t,n){var r=n(106);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var o=n(2);e.exports.__inject__=function(e){o("396febdd",r,!0,e)}},function(e,t,n){t=e.exports=n(1)(void 0),t.i(n(3),""),t.push([e.i,"",""])},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{selectedMenu:"/app"}},computed:{},mounted:function(){this.selectedMenu=window.location.pathname.toLowerCase().replace(/\/$/,"")}},e.exports=t.default},function(e,t,n){"use strict";function r(e){var t;t=n(109),t.__inject__&&t.__inject__(e)}Object.defineProperty(t,"__esModule",{value:!0});var o=n(111),i=n.n(o),s=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"main"},[e._ssrNode('<div class="page-container page-component">',"</div>",[e._t("content")],2)])},a=[],u={render:s,staticRenderFns:a},c=u,l=n(0),d=r,f=l(i.a,c,!1,d,null,"76aeb0b3");t.default=f.exports},function(e,t,n){var r=n(110);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var o=n(2);e.exports.__inject__=function(e){o("fe4a0e3a",r,!0,e)}},function(e,t,n){t=e.exports=n(1)(void 0),t.i(n(3),""),t.push([e.i,"",""])},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"v-content",data:function(){return{}},components:{},mounted:function(){}},e.exports=t.default}]);