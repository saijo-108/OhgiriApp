(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"5Iw/":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return s})),n.d(e,"c",(function(){return u}));n("jm62"),n("ioFf"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V");var o=n("rePB"),r=n("q1tI");function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){Object(o.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var a={sectionInnerBounds:[],resizeTimestamp:0,sectionOuterBounds:[],isOpenArray:[],setIsOpenArray:function(){},anchorNames:[],sectionNames:[],eventLogSlkNList:[]},s=n.n(r).a.createContext([a,function(){}]),u=function(){var t=Object(r.useContext)(s),e=t[0],n=t[1];return{newtonContextState:e,setNewtonContextState:function(t){var o=c(c({},e),t);n(o)}}}},"6JIe":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var o=n("q1tI"),r=function(){return window.innerHeight>window.innerWidth?"portrait":"landscape"},i=function(){var t=Object(o.useState)(r()),e=t[0],n=t[1];return Object(o.useEffect)((function(){var t=function(){n(r())};return window.addEventListener("resize",t),function(){window.removeEventListener("resize",t)}}),[e]),e}},Xj3l:function(t,e,n){"use strict";n("jm62"),n("ioFf"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V");var o=n("KQm4"),r=n("rePB"),i=n("TSYQ"),c=n.n(i),a=n("q1tI"),s=n.n(a),u=n("/MKj"),l=n("lcZ/"),O=n("ve/v"),d=n("MX0m"),p=n.n(d),f=n("t0ZK"),b=n("6JIe"),S=n("gX6u"),E=s.a.createElement;function w(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function y(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?w(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var _=n("yIcc").default,v=function(t){var e,n=Object(a.useState)(!1),o=n[0],i=n[1],s=0,u=window.innerHeight,l=!1,O=t.scrollTargetElement||window,d=function(){if(void 0!==t.sectionIndex){var e=y({},t.sectionOuterBounds[t.sectionIndex]),n=e.top,o=e.bottom;if(void 0!==n&&void 0!==o&&0!==n&&0!==o){var r=t.scrollTargetElement?t.scrollTargetElement.scrollTop:window.scrollY,c=u-(o-n)-48+4;s=u+r,l||(window.requestAnimationFrame((function(){i(s>n&&s<o+(u>o-n?c:0)),l=!1})),l=!0)}}};Object(a.useEffect)((function(){return d()}),[]),Object(a.useEffect)((function(){return d()}),[t.sectionOuterBounds]),Object(a.useEffect)((function(){return null===O||void 0===O||O.addEventListener("scroll",d),function(){return null===O||void 0===O?void 0:O.removeEventListener("scroll",d)}}),[t.sectionOuterBounds]),Object(a.useEffect)((function(){u=window.innerHeight}),[Object(b.a)()]);var w=c()("sw-FloatingActionButton",(e={},Object(r.a)(e,"sw-FloatingActionButton--".concat(t.position),t.position),Object(r.a)(e,"sw-FloatingActionButton--show",o),e),t.addClassName);return E("div",{className:w},E("div",{className:"sw-FloatingActionButton__wrapper"},E("button",{className:"sw-FloatingActionButton__button rapid-noclick-resp cl-noclick-log",onClick:t.actionFn,"data-ylk":Object(f.a)(y(y({},t.ylkParams),{},{slk:t.suffix?"res".concat(t.suffix):t.ylkParams.slk}))},E(S.a,{type:t.iconType||"refresh",size:"large"}),E("span",{className:"sw-FloatingActionButton__text"},t.text))),E(p.a,{id:_.__hash},_))};v.defaultProps={position:"bottomRight",text:"\u66f4\u65b0"};var T=v,m=a.createElement;function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function j(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var P=function(t){var e=t.ylkParams.order&&"vimps-"+t.ylkParams.order;return m("div",{className:"util-Log--hidden util-Log--vimpsDummyLink rapid-noclick-resp cl-noclick-log",id:e,"data-ylk":Object(f.a)(j(j({},t.ylkParams),{},{slk:"vimps"}))},m("a",{href:"javascript:void(0)"}))},h=n("spG8"),C=n("5Iw/"),x=s.a.createElement;function B(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function k(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?B(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var N=s.a.forwardRef((function(t,e){var n,i;if(!("isNewtonSection"in(i=t)&&i.isNewtonSection)||void 0===t.sectionIndex){var s,d=c()("sw-Card",(s={},Object(r.a)(s,"".concat(t.uniqueId),!!t.uniqueId),Object(r.a)(s,"".concat(t.addClassName),!!t.addClassName),s));return x("div",{className:d},x("section",null,t.children,t.setVimps&&t.ylkParams&&x(P,{ylkParams:t.ylkParams})))}var p,f=Object(C.c)().newtonContextState,b=Object(a.useContext)(h.c)[0],E=Object(u.d)(O.c),w=t.defaultOpen,y=t.isExpandable,_=t.isNewtonSection,v=t.sectionIndex,m=t.actionFn,g=f.isOpenArray,j=f.resizeTimestamp,B=f.sectionInnerBounds,N=f.sectionOuterBounds,A=f.setIsOpenArray,H=void 0!==g[v]?g[v]:w,F=Object(a.useState)(!1),R=F[0],L=F[1],I=B[v]&&B[v].height,D=c()("sw-Card",(n={"sw-Card--newtonSection":_,"sw-Card--isClosed":!H&&y,"sw-Card--isAnimating":R},Object(r.a)(n,"".concat(t.uniqueId),!!t.uniqueId),Object(r.a)(n,"".concat(t.addClassName),!!t.addClassName),n)),q=Object(a.useState)(H?"auto":58),z=q[0],V=q[1];Object(a.useEffect)((function(){I&&V(H?I:58)}),[H,j]),Object(a.useEffect)((function(){H&&(clearTimeout(p),L(!0),p=setTimeout((function(){L(!1)}),200))}),[z]),Object(a.useEffect)((function(){A((function(t){var e=Object(o.a)(t);return e[v]=H,e}))}),[A]);var M=void 0===H?"product_expand_close":H?"product_expand_close":"product_expand_open";return x("div",{className:D,style:y?{height:z}:void 0},x("section",{ref:e},t.children),t.isShow&&m&&t.ylkParams&&H&&x(T,{text:t.fabText,iconType:t.fabIcon,actionFn:m,addClassName:t.addFabClassName,sectionIndex:v,sectionOuterBounds:N,ylkParams:t.ylkParams,suffix:t.suffix,scrollTargetElement:E?b.fullSheetsContents:void 0}),t.setVimps&&t.ylkParams&&x(P,{ylkParams:t.ylkParams}),y&&x("div",{className:"sw-Card__newtonSectionToggle",onClick:function(){var e=Object(o.a)(g);e[v]=!H,A(e);var n={event:"click",data:k({},t.ylkParams)},r=!!t.firstLogging&&t.firstLogging;n.data.slk=H?"sec_close":"sec_open",t.ylkParams&&!r&&l.a.sendEvent(n)}},x(S.a,{type:M})))}));N.defaultProps={uniqueId:"",isExpandable:!0,defaultOpen:!0,setVimps:!1};e.a=N},spG8:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"c",(function(){return d})),n.d(e,"b",(function(){return p})),n.d(e,"e",(function(){return f})),n.d(e,"d",(function(){return b}));n("jm62"),n("ioFf"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V");var o,r=n("rePB"),i=n("q1tI"),c=n.n(i),a=c.a.createElement;function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}!function(t){t.SET_BACK_FN="SET_BACK_FN",t.SET_COLOR="SET_COLOR",t.SET_IS_SHOW_SEARCHBOX="SET_IS_SHOW_SEARCHBOX",t.SET_IS_SCROLL="SET_IS_SCROLL",t.SET_IS_SCROLL_BOTTOM="SET_IS_SCROLL_BOTTOM",t.SET_HEADER_CONTENTS="SET_HEADER_CONTENTS",t.SET_HEADER_SCROLL_BEHAVIOR="SET_HEADER_SCROLL_BEHAVIOR",t.SET_TOP_PANE_CONTENTS="SET_TOP_PANE_CONTENTS",t.SET_BOTTOM_PANE_CONTENTS="SET_BOTTOM_PANE_CONTENTS",t.SET_FULL_SHEETS_CONTENTS="SET_FULL_SHEETS_CONTENTS",t.SET_SHEETS_QUERY="SET_SHEETS_QUERY",t.SET_SHEETS_PROPS="SET_SHEETS_PROPS"}(o||(o={}));var l={sheetsHeaderContents:void 0,sheetsHeaderScrollBehavior:void 0,backFn:void 0,isShowSearchBox:!1,sheetsQuery:"",isScroll:!1,isScrollBottom:!1,color:void 0,topPaneContents:void 0,bottomPaneContents:void 0,fullSheetsContents:void 0},O=function(t,e){switch(e.type){case o.SET_HEADER_CONTENTS:return u(u({},t),{},{sheetsHeaderContents:e.payload.sheetsHeaderContents});case o.SET_HEADER_SCROLL_BEHAVIOR:return u(u({},t),{},{sheetsHeaderScrollBehavior:e.payload.sheetsHeaderScrollBehavior});case o.SET_BACK_FN:return u(u({},t),{},{backFn:e.payload.backFn});case o.SET_IS_SHOW_SEARCHBOX:return u(u({},t),{},{isShowSearchBox:e.payload.isShowSearchBox});case o.SET_SHEETS_QUERY:return u(u({},t),{},{sheetsQuery:e.payload.sheetsQuery});case o.SET_COLOR:return u(u({},t),{},{color:e.payload.color});case o.SET_IS_SCROLL:return u(u({},t),{},{isScroll:e.payload.isScroll});case o.SET_IS_SCROLL_BOTTOM:return u(u({},t),{},{isScrollBottom:e.payload.isScrollBottom});case o.SET_TOP_PANE_CONTENTS:return u(u({},t),{},{topPaneContents:e.payload.topPaneContents});case o.SET_BOTTOM_PANE_CONTENTS:return u(u({},t),{},{bottomPaneContents:e.payload.bottomPaneContents});case o.SET_FULL_SHEETS_CONTENTS:return u(u({},t),{},{fullSheetsContents:e.payload.fullSheetsContents});case o.SET_SHEETS_PROPS:return u(u({},t),e.payload);default:throw new Error}},d=c.a.createContext({}),p=function(t){var e=Object(i.useReducer)(O,l),n=e[0],o=e[1];return a(d.Provider,{value:[n,o]},t.children)},f=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=Object(i.useContext)(d),r=n[1];Object(i.useEffect)((function(){return r({type:o.SET_SHEETS_PROPS,payload:{sheetsHeaderContents:t.sheetsHeaderContents,sheetsHeaderScrollBehavior:t.sheetsHeaderScrollBehavior,color:t.color}}),function(){r({type:o.SET_SHEETS_PROPS,payload:{sheetsHeaderContents:void 0,sheetsHeaderScrollBehavior:void 0,color:void 0}})}}),e)},b=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=Object(i.useContext)(d),r=n[1];Object(i.useEffect)((function(){return r({type:o.SET_SHEETS_PROPS,payload:{bottomPaneContents:t.bottomPaneContents}}),function(){r({type:o.SET_SHEETS_PROPS,payload:{bottomPaneContents:void 0}})}}),e)}},yIcc:function(t,e,n){"use strict";n.r(e);var o=[".sw-FloatingActionButton{position:fixed;right:16px;bottom:16px;z-index:3000;opacity:0;pointer-events:none;-webkit-transition:opacity .2s cubic-bezier(0,0,.2,1);-webkit-transition:opacity .2s cubic-bezier(0,0,.2,1);transition:opacity .2s cubic-bezier(0,0,.2,1);}",".sw-FloatingActionButton.sw-FloatingActionButton--show{opacity:1;pointer-events:auto;}",".sw-FloatingActionButton.sw-FloatingActionButton--hide{display:none;}",".sw-FloatingActionButton.sw-FloatingActionButton--topLeft{left:16px;top:16px;}",".sw-FloatingActionButton.sw-FloatingActionButton--topRight{top:16px;}",".sw-FloatingActionButton.sw-FloatingActionButton--bottomLeft{left:16px;}",".sw-FloatingActionButton .sw-FloatingActionButton__wrapper{width:64px;height:64px;}",".sw-FloatingActionButton .sw-FloatingActionButton__button{display:-webkit-box;display:-webkit-flex;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;border-radius:50%;border-color:transparent;background-color:#58586c;box-shadow:0 1px 1px 0 rgba(0,0,0,.04),0 4px 6px 0 rgba(0,0,0,.16);-webkit-appearance:none;cursor:pointer;}",".sw-FloatingActionButton .sw-Icon{color:#fff;}",".sw-FloatingActionButton .sw-FloatingActionButton__text{color:#fff;font-weight:700;}"];o.__hash="2943094514",e.default=o}}]);