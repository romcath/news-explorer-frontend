!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=103)}([function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||Function("return this")()}).call(this,n(60))},function(t,e,n){var r=n(0),o=n(11),i=n(34),c=n(64),s=r.Symbol,a=o("wks");t.exports=function(t){return a[t]||(a[t]=c&&s[t]||(c?s:i)("Symbol."+t))}},function(t,e,n){var r=n(7),o=n(8),i=n(15);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var r=n(5);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(3);t.exports=!r((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(7),o=n(32),i=n(4),c=n(24),s=Object.defineProperty;e.f=r?s:function(t,e,n){if(i(t),e=c(e,!0),i(n),o)try{return s(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(0),o=n(11),i=n(2),c=n(6),s=n(22),a=n(33),u=n(25),l=u.get,f=u.enforce,p=String(a).split("toString");o("inspectSource",(function(t){return a.call(t)})),(t.exports=function(t,e,n,o){var a=!!o&&!!o.unsafe,u=!!o&&!!o.enumerable,l=!!o&&!!o.noTargetGet;"function"==typeof n&&("string"!=typeof e||c(n,"name")||i(n,"name",e),f(n).source=p.join("string"==typeof e?e:"")),t!==r?(a?!l&&t[e]&&(u=!0):delete t[e],u?t[e]=n:i(t,e,n)):u?t[e]=n:s(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&l(this).source||a.call(this)}))},function(t,e,n){var r=n(14),o=n(61);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.4.1",mode:r?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,e,n){var r=n(68),o=n(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][e]||o[t]&&o[t][e]}},function(t,e){t.exports={}},function(t,e){t.exports=!1},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(0),o=n(28).f,i=n(2),c=n(10),s=n(22),a=n(66),u=n(41);t.exports=function(t,e){var n,l,f,p,h,v=t.target,d=t.global,m=t.stat;if(n=d?r:m?r[v]||s(v,{}):(r[v]||{}).prototype)for(l in e){if(p=e[l],f=t.noTargetGet?(h=o(n,l))&&h.value:n[l],!u(d?l:v+(m?".":"#")+l,t.forced)&&void 0!==f){if(typeof p==typeof f)continue;a(p,f)}(t.sham||f&&f.sham)&&i(p,"sham",!0),c(n,l,p,t)}}},function(t,e,n){var r=n(29),o=n(37);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(39),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,e,n){var r=n(19);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(37);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(0),o=n(2);t.exports=function(t,e){try{o(r,t,e)}catch(n){r[t]=e}return e}},function(t,e,n){var r=n(0),o=n(5),i=r.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},function(t,e,n){var r=n(5);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r,o,i,c=n(62),s=n(0),a=n(5),u=n(2),l=n(6),f=n(26),p=n(27),h=s.WeakMap;if(c){var v=new h,d=v.get,m=v.has,y=v.set;r=function(t,e){return y.call(v,t,e),e},o=function(t){return d.call(v,t)||{}},i=function(t){return m.call(v,t)}}else{var _=f("state");p[_]=!0,r=function(t,e){return u(t,_,e),e},o=function(t){return l(t,_)?t[_]:{}},i=function(t){return l(t,_)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!a(e)||(n=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},function(t,e,n){var r=n(11),o=n(34),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,e){t.exports={}},function(t,e,n){var r=n(7),o=n(36),i=n(15),c=n(17),s=n(24),a=n(6),u=n(32),l=Object.getOwnPropertyDescriptor;e.f=r?l:function(t,e){if(t=c(t),e=s(e,!0),u)try{return l(t,e)}catch(t){}if(a(t,e))return i(!o.f.call(t,e),t[e])}},function(t,e,n){var r=n(3),o=n(9),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,e,n){var r=n(8).f,o=n(6),i=n(1)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e,n){var r=n(7),o=n(3),i=n(23);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(11);t.exports=r("native-function-to-string",Function.toString)},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},function(t,e,n){var r=n(9),o=n(1)("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var e,n,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),o))?n:i?r(e):"Object"==(c=r(e))&&"function"==typeof e.callee?"Arguments":c}},function(t,e,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);e.f=i?function(t){var e=o(this,t);return!!e&&e.enumerable}:r},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,e,n){var r=n(6),o=n(17),i=n(70).indexOf,c=n(27);t.exports=function(t,e){var n,s=o(t),a=0,u=[];for(n in s)!r(c,n)&&r(s,n)&&u.push(n);for(;e.length>a;)r(s,n=e[a++])&&(~i(u,n)||u.push(n));return u}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(3),o=/#|\.prototype\./,i=function(t,e){var n=s[c(t)];return n==u||n!=a&&("function"==typeof e?r(e):!!e)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},s=i.data={},a=i.NATIVE="N",u=i.POLYFILL="P";t.exports=i},function(t,e,n){var r=n(1),o=n(13),i=r("iterator"),c=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||c[i]===t)}},function(t,e,n){var r=n(35),o=n(13),i=n(1)("iterator");t.exports=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[r(t)]}},function(t,e,n){var r=n(4);t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(e){var i=t.return;throw void 0!==i&&r(i.call(t)),e}}},function(t,e,n){var r=n(1)("iterator"),o=!1;try{var i=0,c={next:function(){return{done:!!i++}},return:function(){o=!0}};c[r]=function(){return this},Array.from(c,(function(){throw 2}))}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var i={};i[r]=function(){return{next:function(){return{done:n=!0}}}},t(i)}catch(t){}return n}},function(t,e,n){var r,o,i,c=n(0),s=n(3),a=n(9),u=n(20),l=n(47),f=n(23),p=n(48),h=c.location,v=c.setImmediate,d=c.clearImmediate,m=c.process,y=c.MessageChannel,_=c.Dispatch,g=0,b={},x=function(t){if(b.hasOwnProperty(t)){var e=b[t];delete b[t],e()}},E=function(t){return function(){x(t)}},S=function(t){x(t.data)},j=function(t){c.postMessage(t+"",h.protocol+"//"+h.host)};v&&d||(v=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return b[++g]=function(){("function"==typeof t?t:Function(t)).apply(void 0,e)},r(g),g},d=function(t){delete b[t]},"process"==a(m)?r=function(t){m.nextTick(E(t))}:_&&_.now?r=function(t){_.now(E(t))}:y&&!p?(i=(o=new y).port2,o.port1.onmessage=S,r=u(i.postMessage,i,1)):!c.addEventListener||"function"!=typeof postMessage||c.importScripts||s(j)?r="onreadystatechange"in f("script")?function(t){l.appendChild(f("script")).onreadystatechange=function(){l.removeChild(this),x(t)}}:function(t){setTimeout(E(t),0)}:(r=j,c.addEventListener("message",S,!1))),t.exports={set:v,clear:d}},function(t,e,n){var r=n(12);t.exports=r("document","documentElement")},function(t,e,n){var r=n(49);t.exports=/(iphone|ipod|ipad).*applewebkit/i.test(r)},function(t,e,n){var r=n(12);t.exports=r("navigator","userAgent")||""},function(t,e,n){"use strict";var r=n(19),o=function(t){var e,n;this.promise=new t((function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r})),this.resolve=r(e),this.reject=r(n)};t.exports.f=function(t){return new o(t)}},function(t,e,n){var r=n(16),o=n(83);r({target:"Object",stat:!0,forced:Object.assign!==o},{assign:o})},function(t,e,n){var r=n(38),o=n(30);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){"use strict";var r=n(17),o=n(84),i=n(13),c=n(25),s=n(86),a=c.set,u=c.getterFor("Array Iterator");t.exports=s(Array,"Array",(function(t,e){a(this,{type:"Array Iterator",target:r(t),index:0,kind:e})}),(function(){var t=u(this),e=t.target,n=t.kind,r=t.index++;return!e||r>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:e[r],done:!1}:{value:[r,e[r]],done:!1}}),"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},function(t,e,n){var r=n(4),o=n(85),i=n(30),c=n(27),s=n(47),a=n(23),u=n(26)("IE_PROTO"),l=function(){},f=function(){var t,e=a("iframe"),n=i.length;for(e.style.display="none",s.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),f=t.F;n--;)delete f.prototype[i[n]];return f()};t.exports=Object.create||function(t,e){var n;return null!==t?(l.prototype=r(t),n=new l,l.prototype=null,n[u]=t):n=f(),void 0===e?n:o(n,e)},c[u]=!0},function(t,e,n){"use strict";var r,o,i,c=n(56),s=n(2),a=n(6),u=n(1),l=n(14),f=u("iterator"),p=!1;[].keys&&("next"in(i=[].keys())?(o=c(c(i)))!==Object.prototype&&(r=o):p=!0),null==r&&(r={}),l||a(r,f)||s(r,f,(function(){return this})),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:p}},function(t,e,n){var r=n(6),o=n(21),i=n(26),c=n(88),s=i("IE_PROTO"),a=Object.prototype;t.exports=c?Object.getPrototypeOf:function(t){return t=o(t),r(t,s)?t[s]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,e,n){},function(t,e,n){var r=n(10),o=n(63),i=Object.prototype;o!==i.toString&&r(i,"toString",o,{unsafe:!0})},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){var r=n(0),o=n(22),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,e,n){var r=n(0),o=n(33),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o.call(i))},function(t,e,n){"use strict";var r=n(35),o={};o[n(1)("toStringTag")]="z",t.exports="[object z]"!==String(o)?function(){return"[object "+r(this)+"]"}:o.toString},function(t,e,n){var r=n(3);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,e,n){"use strict";var r,o,i,c,s=n(16),a=n(14),u=n(0),l=n(12),f=n(72),p=n(10),h=n(73),v=n(11),d=n(31),m=n(74),y=n(5),_=n(19),g=n(75),b=n(9),x=n(76),E=n(45),S=n(77),j=n(46).set,w=n(78),O=n(79),T=n(80),C=n(50),L=n(81),k=n(25),P=n(41),A=n(1),M=n(82),I=A("species"),H="Promise",N=k.get,q=k.set,R=k.getterFor(H),U=f,D=u.TypeError,z=u.document,F=u.process,G=v("inspectSource"),B=l("fetch"),V=C.f,W=V,Y="process"==b(F),J=!!(z&&z.createEvent&&u.dispatchEvent),K=P(H,(function(){var t=G(U)!==String(U);if(66===M)return!0;if(!t&&!Y&&"function"!=typeof PromiseRejectionEvent)return!0;if(a&&!U.prototype.finally)return!0;if(M>=51&&/native code/.test(U))return!1;var e=U.resolve(1),n=function(t){t((function(){}),(function(){}))};return(e.constructor={})[I]=n,!(e.then((function(){}))instanceof n)})),Q=K||!E((function(t){U.all(t).catch((function(){}))})),X=function(t){var e;return!(!y(t)||"function"!=typeof(e=t.then))&&e},Z=function(t,e,n){if(!e.notified){e.notified=!0;var r=e.reactions;w((function(){for(var o=e.value,i=1==e.state,c=0;r.length>c;){var s,a,u,l=r[c++],f=i?l.ok:l.fail,p=l.resolve,h=l.reject,v=l.domain;try{f?(i||(2===e.rejection&&nt(t,e),e.rejection=1),!0===f?s=o:(v&&v.enter(),s=f(o),v&&(v.exit(),u=!0)),s===l.promise?h(D("Promise-chain cycle")):(a=X(s))?a.call(s,p,h):p(s)):h(o)}catch(t){v&&!u&&v.exit(),h(t)}}e.reactions=[],e.notified=!1,n&&!e.rejection&&tt(t,e)}))}},$=function(t,e,n){var r,o;J?((r=z.createEvent("Event")).promise=e,r.reason=n,r.initEvent(t,!1,!0),u.dispatchEvent(r)):r={promise:e,reason:n},(o=u["on"+t])?o(r):"unhandledrejection"===t&&T("Unhandled promise rejection",n)},tt=function(t,e){j.call(u,(function(){var n,r=e.value;if(et(e)&&(n=L((function(){Y?F.emit("unhandledRejection",r,t):$("unhandledrejection",t,r)})),e.rejection=Y||et(e)?2:1,n.error))throw n.value}))},et=function(t){return 1!==t.rejection&&!t.parent},nt=function(t,e){j.call(u,(function(){Y?F.emit("rejectionHandled",t):$("rejectionhandled",t,e.value)}))},rt=function(t,e,n,r){return function(o){t(e,n,o,r)}},ot=function(t,e,n,r){e.done||(e.done=!0,r&&(e=r),e.value=n,e.state=2,Z(t,e,!0))},it=function(t,e,n,r){if(!e.done){e.done=!0,r&&(e=r);try{if(t===n)throw D("Promise can't be resolved itself");var o=X(n);o?w((function(){var r={done:!1};try{o.call(n,rt(it,t,r,e),rt(ot,t,r,e))}catch(n){ot(t,r,n,e)}})):(e.value=n,e.state=1,Z(t,e,!1))}catch(n){ot(t,{done:!1},n,e)}}};K&&(U=function(t){g(this,U,H),_(t),r.call(this);var e=N(this);try{t(rt(it,this,e),rt(ot,this,e))}catch(t){ot(this,e,t)}},(r=function(t){q(this,{type:H,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=h(U.prototype,{then:function(t,e){var n=R(this),r=V(S(this,U));return r.ok="function"!=typeof t||t,r.fail="function"==typeof e&&e,r.domain=Y?F.domain:void 0,n.parent=!0,n.reactions.push(r),0!=n.state&&Z(this,n,!1),r.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new r,e=N(t);this.promise=t,this.resolve=rt(it,t,e),this.reject=rt(ot,t,e)},C.f=V=function(t){return t===U||t===i?new o(t):W(t)},a||"function"!=typeof f||(c=f.prototype.then,p(f.prototype,"then",(function(t,e){var n=this;return new U((function(t,e){c.call(n,t,e)})).then(t,e)}),{unsafe:!0}),"function"==typeof B&&s({global:!0,enumerable:!0,forced:!0},{fetch:function(t){return O(U,B.apply(u,arguments))}}))),s({global:!0,wrap:!0,forced:K},{Promise:U}),d(U,H,!1,!0),m(H),i=l(H),s({target:H,stat:!0,forced:K},{reject:function(t){var e=V(this);return e.reject.call(void 0,t),e.promise}}),s({target:H,stat:!0,forced:a||K},{resolve:function(t){return O(a&&this===i?U:this,t)}}),s({target:H,stat:!0,forced:Q},{all:function(t){var e=this,n=V(e),r=n.resolve,o=n.reject,i=L((function(){var n=_(e.resolve),i=[],c=0,s=1;x(t,(function(t){var a=c++,u=!1;i.push(void 0),s++,n.call(e,t).then((function(t){u||(u=!0,i[a]=t,--s||r(i))}),o)})),--s||r(i)}));return i.error&&o(i.value),n.promise},race:function(t){var e=this,n=V(e),r=n.reject,o=L((function(){var o=_(e.resolve);x(t,(function(t){o.call(e,t).then(n.resolve,r)}))}));return o.error&&r(o.value),n.promise}})},function(t,e,n){var r=n(6),o=n(67),i=n(28),c=n(8);t.exports=function(t,e){for(var n=o(e),s=c.f,a=i.f,u=0;u<n.length;u++){var l=n[u];r(t,l)||s(t,l,a(e,l))}}},function(t,e,n){var r=n(12),o=n(69),i=n(40),c=n(4);t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(c(t)),n=i.f;return n?e.concat(n(t)):e}},function(t,e,n){t.exports=n(0)},function(t,e,n){var r=n(38),o=n(30).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e,n){var r=n(17),o=n(18),i=n(71),c=function(t){return function(e,n,c){var s,a=r(e),u=o(a.length),l=i(c,u);if(t&&n!=n){for(;u>l;)if((s=a[l++])!=s)return!0}else for(;u>l;l++)if((t||l in a)&&a[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},function(t,e,n){var r=n(39),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},function(t,e,n){var r=n(0);t.exports=r.Promise},function(t,e,n){var r=n(10);t.exports=function(t,e,n){for(var o in e)r(t,o,e[o],n);return t}},function(t,e,n){"use strict";var r=n(12),o=n(8),i=n(1),c=n(7),s=i("species");t.exports=function(t){var e=r(t),n=o.f;c&&e&&!e[s]&&n(e,s,{configurable:!0,get:function(){return this}})}},function(t,e){t.exports=function(t,e,n){if(!(t instanceof e))throw TypeError("Incorrect "+(n?n+" ":"")+"invocation");return t}},function(t,e,n){var r=n(4),o=n(42),i=n(18),c=n(20),s=n(43),a=n(44),u=function(t,e){this.stopped=t,this.result=e};(t.exports=function(t,e,n,l,f){var p,h,v,d,m,y,_,g=c(e,n,l?2:1);if(f)p=t;else{if("function"!=typeof(h=s(t)))throw TypeError("Target is not iterable");if(o(h)){for(v=0,d=i(t.length);d>v;v++)if((m=l?g(r(_=t[v])[0],_[1]):g(t[v]))&&m instanceof u)return m;return new u(!1)}p=h.call(t)}for(y=p.next;!(_=y.call(p)).done;)if("object"==typeof(m=a(p,g,_.value,l))&&m&&m instanceof u)return m;return new u(!1)}).stop=function(t){return new u(!0,t)}},function(t,e,n){var r=n(4),o=n(19),i=n(1)("species");t.exports=function(t,e){var n,c=r(t).constructor;return void 0===c||null==(n=r(c)[i])?e:o(n)}},function(t,e,n){var r,o,i,c,s,a,u,l,f=n(0),p=n(28).f,h=n(9),v=n(46).set,d=n(48),m=f.MutationObserver||f.WebKitMutationObserver,y=f.process,_=f.Promise,g="process"==h(y),b=p(f,"queueMicrotask"),x=b&&b.value;x||(r=function(){var t,e;for(g&&(t=y.domain)&&t.exit();o;){e=o.fn,o=o.next;try{e()}catch(t){throw o?c():i=void 0,t}}i=void 0,t&&t.enter()},g?c=function(){y.nextTick(r)}:m&&!d?(s=!0,a=document.createTextNode(""),new m(r).observe(a,{characterData:!0}),c=function(){a.data=s=!s}):_&&_.resolve?(u=_.resolve(void 0),l=u.then,c=function(){l.call(u,r)}):c=function(){v.call(f,r)}),t.exports=x||function(t){var e={fn:t,next:void 0};i&&(i.next=e),o||(o=e,c()),i=e}},function(t,e,n){var r=n(4),o=n(5),i=n(50);t.exports=function(t,e){if(r(t),o(e)&&e.constructor===t)return e;var n=i.f(t);return(0,n.resolve)(e),n.promise}},function(t,e,n){var r=n(0);t.exports=function(t,e){var n=r.console;n&&n.error&&(1===arguments.length?n.error(t):n.error(t,e))}},function(t,e){t.exports=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}}},function(t,e,n){var r,o,i=n(0),c=n(49),s=i.process,a=s&&s.versions,u=a&&a.v8;u?o=(r=u.split("."))[0]+r[1]:c&&(!(r=c.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=c.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},function(t,e,n){"use strict";var r=n(7),o=n(3),i=n(52),c=n(40),s=n(36),a=n(21),u=n(29),l=Object.assign;t.exports=!l||o((function(){var t={},e={},n=Symbol();return t[n]=7,"abcdefghijklmnopqrst".split("").forEach((function(t){e[t]=t})),7!=l({},t)[n]||"abcdefghijklmnopqrst"!=i(l({},e)).join("")}))?function(t,e){for(var n=a(t),o=arguments.length,l=1,f=c.f,p=s.f;o>l;)for(var h,v=u(arguments[l++]),d=f?i(v).concat(f(v)):i(v),m=d.length,y=0;m>y;)h=d[y++],r&&!p.call(v,h)||(n[h]=v[h]);return n}:l},function(t,e,n){var r=n(1),o=n(54),i=n(2),c=r("unscopables"),s=Array.prototype;null==s[c]&&i(s,c,o(null)),t.exports=function(t){s[c][t]=!0}},function(t,e,n){var r=n(7),o=n(8),i=n(4),c=n(52);t.exports=r?Object.defineProperties:function(t,e){i(t);for(var n,r=c(e),s=r.length,a=0;s>a;)o.f(t,n=r[a++],e[n]);return t}},function(t,e,n){"use strict";var r=n(16),o=n(87),i=n(56),c=n(89),s=n(31),a=n(2),u=n(10),l=n(1),f=n(14),p=n(13),h=n(55),v=h.IteratorPrototype,d=h.BUGGY_SAFARI_ITERATORS,m=l("iterator"),y=function(){return this};t.exports=function(t,e,n,l,h,_,g){o(n,e,l);var b,x,E,S=function(t){if(t===h&&C)return C;if(!d&&t in O)return O[t];switch(t){case"keys":case"values":case"entries":return function(){return new n(this,t)}}return function(){return new n(this)}},j=e+" Iterator",w=!1,O=t.prototype,T=O[m]||O["@@iterator"]||h&&O[h],C=!d&&T||S(h),L="Array"==e&&O.entries||T;if(L&&(b=i(L.call(new t)),v!==Object.prototype&&b.next&&(f||i(b)===v||(c?c(b,v):"function"!=typeof b[m]&&a(b,m,y)),s(b,j,!0,!0),f&&(p[j]=y))),"values"==h&&T&&"values"!==T.name&&(w=!0,C=function(){return T.call(this)}),f&&!g||O[m]===C||a(O,m,C),p[e]=C,h)if(x={values:S("values"),keys:_?C:S("keys"),entries:S("entries")},g)for(E in x)(d||w||!(E in O))&&u(O,E,x[E]);else r({target:e,proto:!0,forced:d||w},x);return x}},function(t,e,n){"use strict";var r=n(55).IteratorPrototype,o=n(54),i=n(15),c=n(31),s=n(13),a=function(){return this};t.exports=function(t,e,n){var u=e+" Iterator";return t.prototype=o(r,{next:i(1,n)}),c(t,u,!1,!0),s[u]=a,t}},function(t,e,n){var r=n(3);t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},function(t,e,n){var r=n(4),o=n(90);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),e=n instanceof Array}catch(t){}return function(n,i){return r(n),o(i),e?t.call(n,i):n.__proto__=i,n}}():void 0)},function(t,e,n){var r=n(5);t.exports=function(t){if(!r(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},function(t,e,n){var r=n(0),o=n(57),i=n(92),c=n(2);for(var s in o){var a=r[s],u=a&&a.prototype;if(u&&u.forEach!==i)try{c(u,"forEach",i)}catch(t){u.forEach=i}}},function(t,e,n){"use strict";var r=n(93).forEach,o=n(96);t.exports=o("forEach")?function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}:[].forEach},function(t,e,n){var r=n(20),o=n(29),i=n(21),c=n(18),s=n(94),a=[].push,u=function(t){var e=1==t,n=2==t,u=3==t,l=4==t,f=6==t,p=5==t||f;return function(h,v,d,m){for(var y,_,g=i(h),b=o(g),x=r(v,d,3),E=c(b.length),S=0,j=m||s,w=e?j(h,E):n?j(h,0):void 0;E>S;S++)if((p||S in b)&&(_=x(y=b[S],S,g),t))if(e)w[S]=_;else if(_)switch(t){case 3:return!0;case 5:return y;case 6:return S;case 2:a.call(w,y)}else if(l)return!1;return f?-1:u||l?l:w}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},function(t,e,n){var r=n(5),o=n(95),i=n(1)("species");t.exports=function(t,e){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)?r(n)&&null===(n=n[i])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},function(t,e,n){var r=n(9);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){"use strict";var r=n(3);t.exports=function(t,e){var n=[][t];return!n||!r((function(){n.call(null,e||function(){throw 1},1)}))}},function(t,e,n){var r=n(0),o=n(57),i=n(53),c=n(2),s=n(1),a=s("iterator"),u=s("toStringTag"),l=i.values;for(var f in o){var p=r[f],h=p&&p.prototype;if(h){if(h[a]!==l)try{c(h,a,l)}catch(t){h[a]=l}if(h[u]||c(h,u,f),o[f])for(var v in i)if(h[v]!==i[v])try{c(h,v,i[v])}catch(t){h[v]=i[v]}}}},function(t,e,n){var r=n(16),o=n(99);r({target:"Array",stat:!0,forced:!n(45)((function(t){Array.from(t)}))},{from:o})},function(t,e,n){"use strict";var r=n(20),o=n(21),i=n(44),c=n(42),s=n(18),a=n(100),u=n(43);t.exports=function(t){var e,n,l,f,p,h=o(t),v="function"==typeof this?this:Array,d=arguments.length,m=d>1?arguments[1]:void 0,y=void 0!==m,_=0,g=u(h);if(y&&(m=r(m,d>2?arguments[2]:void 0,2)),null==g||v==Array&&c(g))for(n=new v(e=s(h.length));e>_;_++)a(n,_,y?m(h[_],_):h[_]);else for(p=(f=g.call(h)).next,n=new v;!(l=p.call(f)).done;_++)a(n,_,y?i(f,m,[l.value,_],!0):l.value);return n.length=_,n}},function(t,e,n){"use strict";var r=n(24),o=n(8),i=n(15);t.exports=function(t,e,n){var c=r(e);c in t?o.f(t,c,i(0,n)):t[c]=n}},,,function(t,e,n){"use strict";n.r(e);n(58);var r=document.querySelector(".overlay"),o=document.querySelector(".logo"),i=(document.querySelector(".root"),document.querySelector(".popup"));n(59),n(65);n(51),n(53),n(91),n(97);class c{constructor(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this._handlers=t}_setHandlers(t){t.forEach(t=>{this._addHandler(...t)})}_addHandler(t,e,n){t.addEventListener(e,n)}_clearHandlers(t,e,n){t.removeEventListener(e,n)}}n(98);var s=new class{constructor(t){this._options=t}signup(t,e,n){return fetch("".concat(this._options.baseUrl,"/signup"),{method:"POST",headers:this._options.headers,body:JSON.stringify({email:t,password:e,name:n})}).then(t=>t.json()).catch(t=>Promise.reject("Пользователь не зарегистрирован"))}signin(t,e){return fetch("".concat(this._options.baseUrl,"/signin"),{method:"POST",headers:this._options.headers,body:JSON.stringify({email:t,password:e})}).then(t=>t.json()).catch(t=>Promise.reject("Сервер не отвечает"))}getUserData(){return fetch("".concat(this._options.baseUrl,"/users/me"),{method:"GET",credentials:"include",headers:this._options.headers}).then(t=>t.ok?t.json():Promise.reject(t)).catch(t=>Promise.reject(t.status))}}({baseUrl:"https://api.news-app.cf",headers:{"Content-Type":"application/json"}}),a=new class extends c{constructor(t){var e=Object.assign({},t);super(),this._props=e,this._words=this._props.FORM_ERRORS,this._singupHandlerCallback=this._props.singupHandlerCallback.bind(this),this._singinHandlerCallback=this._props.singinHandlerCallback.bind(this),this._validateInputElement=this._validateInputElement.bind(this),this._toggleButtonState=this._toggleButtonState.bind(this)}render(t){this._setEventListeners(t)}setServerError(t){document.querySelector(".popup__span_center").textContent=t}_setEventListeners(t){document.forms.signin?this._setHandlers([[t,"input",this._validateInputElement],[t,"input",this._toggleButtonState],[t,"submit",this._singinHandlerCallback]]):this._setHandlers([[t,"input",this._validateInputElement],[t,"input",this._toggleButtonState],[t,"submit",this._singupHandlerCallback]])}_validateInputElement(){var t=event.target,e=event.currentTarget.querySelector("#".concat(t.id,"_error"));switch(!0){case t.validity.valueMissing:e.textContent=this._words.validationMissing;break;case t.validity.tooShort&&"signup-name"===t.id:e.textContent=this._words.validationLengthName;break;case t.validity.tooShort:e.textContent=this._words.validationLength;break;case t.validity.patternMismatch:e.textContent=this._words.validationEmail;break;default:e.textContent=""}}_toggleButtonState(){var t=Array.from(event.currentTarget.querySelectorAll(".popup__input")),e=event.currentTarget.querySelector(".popup__button");e.previousElementSibling.textContent="",this._validateForm(t)?(e.classList.add("popup__button_enabled"),e.removeAttribute("disabled")):(e.setAttribute("disabled",!0),e.classList.remove("popup__button_enabled"))}_validateForm(t){return t.every(t=>t.validity.valid)}_getInfo(){return document.forms.signup?{email:event.currentTarget.elements.signup_email.value,password:event.currentTarget.elements.signup_pass.value,name:event.currentTarget.elements.signup_name.value}:{email:event.currentTarget.elements.signin_email.value,password:event.currentTarget.elements.signin_pass.value}}}({FORM_ERRORS:{validationLength:"Должно быть не меньше 8 символов",validationMissing:"Это обязательное поле",validationEmail:"Неправильный формат email",validationLengthName:"Должно быть от 2 до 30 символов"},singupHandlerCallback:()=>{var t=a._getInfo(),e=t.email,n=t.password,r=t.name;event.preventDefault(),s.signup(e,n,r).then(t=>{t.message?a.setServerError(t.message):(u.close(),u.setContent("#success-popup-template"))}).catch(t=>{console.log(t)})},singinHandlerCallback:()=>{var t=a._getInfo(),e=t.email,n=t.password;event.preventDefault(),s.signin(e,n).then(t=>{t.message?a.setServerError(t.message):(localStorage.setItem("loginState","true"),s.getUserData().then(t=>{l.render(!0,t.name)}).catch(t=>{console.log(t)}))}).catch(t=>{console.log(t)})}}),u=new class extends c{constructor(t,e,n,r){super(),this._popupElement=t,this._signinTemplate=e,this._signupTemplate=n,this._validation=r,this._handleEscClose=this._handleEscClose.bind(this),this._openPopupCallback=this._openPopupCallback.bind(this),this.close=this.close.bind(this)}setContent(t){this._template=document.querySelector(t).content.querySelector(".popup__template-container"),this._element=this._template.cloneNode(!0),this._popupElement.querySelector(".popup__content").appendChild(this._element),this._setEventListeners(),this.open(),"#success-popup-template"!==t&&this._validation.render(this._element.querySelector(".popup__form"))}clearContent(){this._popupElement.querySelector(".popup__template-container").remove()}open(){this._popupElement.classList.add("popup_is-opened")}close(){this._popupElement.classList.remove("popup_is-opened"),this._element.remove(),this._clearHandlers(document,"keyup",this._handleEscClose)}_handleEscClose(t){27===t.keyCode&&this.close()}_openPopupCallback(){this.clearContent(),event.target.classList.contains("popup__link_signin")?this.setContent(this._signinTemplate):this.setContent(this._signupTemplate)}_setEventListeners(){this._setHandlers([[document,"keyup",this._handleEscClose],[this._popupElement.querySelector(".popup__close"),"click",this.close],[this._element.querySelector(".popup__link"),"click",this._openPopupCallback]])}}(i,"#signin-popup-template","#signup-popup-template",a),l=new class extends c{constructor(t){var e=Object.assign({},t);super(),this._props=e,this._container=this._props.MENU_CONTAINER,this._theme=this._props.theme,this._logoElement=this._props.LOGO_ELEMENT,this._authorizedTemplate=document.querySelector(this._props.MENU_AUTH_TEMPLATE_ID).content.querySelector(".menu"),this._authorizedElement=this._authorizedTemplate.cloneNode(!0),this._unauthorizedTemplate=document.querySelector(this._props.MENU_UNAUTH_TEMPLATE_ID).content.querySelector(".menu"),this._unauthorizedElement=this._unauthorizedTemplate.cloneNode(!0),this._openHandlerCallback=this._props.openHandlerCallback.bind(this)}render(t,e){t?(this._addClassElement(this._authorizedElement),this._authorizedElement.querySelector(".button__name").textContent=e,this._container.appendChild(this._authorizedElement)):(this._addClassElement(this._unauthorizedElement),this._container.appendChild(this._unauthorizedElement))}_addClassElement(t){var e=t.querySelector(".icon"),n=t.querySelector(".button"),r=t.querySelector(".menu__link");this._logoElement.classList.add("logo_".concat(this._theme)),e.classList.add("icon_logout_".concat(this._theme)),n.classList.add("button_".concat(this._theme)),r.classList.add("menu__link_".concat(this._theme),"menu__link_active-".concat(this._theme)),this._setEventListeners(t,n,e)}_setEventListeners(t,e,n){t===this._unauthorizedElement?this._setHandlers([[e,"click",this._openHandlerCallback]]):this._setHandlers([[n,"click",this._logoutHandlerCallback]])}}({MENU_AUTH_TEMPLATE_ID:"#menu-authorized-template",MENU_UNAUTH_TEMPLATE_ID:"#menu-unauthorized-template",MENU_CONTAINER:r,LOGO_ELEMENT:o,theme:"white",openHandlerCallback:()=>{u.setContent("#signin-popup-template")}});localStorage.getItem("loginState")?s.getUserData().then(t=>{l.render(!0,t.name)}).catch(t=>{console.log(t)}):l.render(!1)}]);