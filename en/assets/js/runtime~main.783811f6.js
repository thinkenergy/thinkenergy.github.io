!function(){"use strict";var e,f,t,c,n,r={},d={};function o(e){var f=d[e];if(void 0!==f)return f.exports;var t=d[e]={id:e,loaded:!1,exports:{}};return r[e].call(t.exports,t,t.exports,o),t.loaded=!0,t.exports}o.m=r,o.c=d,e=[],o.O=function(f,t,c,n){if(!t){var r=1/0;for(u=0;u<e.length;u++){t=e[u][0],c=e[u][1],n=e[u][2];for(var d=!0,a=0;a<t.length;a++)(!1&n||r>=n)&&Object.keys(o.O).every((function(e){return o.O[e](t[a])}))?t.splice(a--,1):(d=!1,n<r&&(r=n));if(d){e.splice(u--,1);var b=c();void 0!==b&&(f=b)}}return f}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[t,c,n]},o.n=function(e){var f=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(f,{a:f}),f},t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},o.t=function(e,c){if(1&c&&(e=this(e)),8&c)return e;if("object"==typeof e&&e){if(4&c&&e.__esModule)return e;if(16&c&&"function"==typeof e.then)return e}var n=Object.create(null);o.r(n);var r={};f=f||[null,t({}),t([]),t(t)];for(var d=2&c&&e;"object"==typeof d&&!~f.indexOf(d);d=t(d))Object.getOwnPropertyNames(d).forEach((function(f){r[f]=function(){return e[f]}}));return r.default=function(){return e},o.d(n,r),n},o.d=function(e,f){for(var t in f)o.o(f,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:f[t]})},o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(f,t){return o.f[t](e,f),f}),[]))},o.u=function(e){return"assets/js/"+({40:"8d9886fb",53:"935f2afb",412:"39f08bbb",634:"36ab6c69",771:"6b8c3ed5",1462:"540d0c0f",1689:"068bc50c",2170:"50c5df50",2315:"c400e8c4",2434:"92a77e08",2535:"f6cbeee1",2587:"a4ad338c",3085:"1f391b9e",3270:"19c23c14",3384:"4323fb4d",3499:"be1817e2",3515:"f856a992",3608:"9e4087bc",4195:"c4f5d8e4",4367:"17cf46a6",4480:"f50528dc",4676:"375f178c",4926:"1e5ad4f9",5232:"4ec52f1c",5395:"3f4281af",5401:"0d9860af",5445:"938d7bd8",5463:"9f9597e9",5603:"5ee62587",5670:"7399341e",5864:"86c4fc8e",5881:"766cf399",6170:"1541370f",6513:"2b2dd26b",6606:"f40850f2",6818:"b61585aa",6911:"73477d1c",7291:"ea3a3c64",7414:"393be207",7586:"500f8fe6",7918:"17896441",7957:"7260c157",8005:"4ddd060e",8302:"3c865f97",8438:"22f2ba6c",8561:"8bd16534",8577:"b9d11f69",8600:"16f5d520",8675:"66a424b0",8844:"30e931d3",8866:"5f49142d",9290:"1e895c0d",9334:"96ddc0e4",9342:"f23d7783",9514:"1be78505",9878:"df31bf4c",9889:"1f9a4dda",9922:"6f0d96b7"}[e]||e)+"."+{40:"9793e34a",53:"32e4b271",412:"9728ea10",634:"bc12e3fc",771:"fcbb7dcd",1462:"7f566c79",1482:"616e43b4",1689:"7ba4259c",2170:"a8a1f745",2315:"157ddf04",2434:"4869e1ed",2535:"1f3e7d93",2587:"4e090fec",3085:"2a419040",3270:"96954900",3384:"ce56639c",3499:"0014ebd0",3515:"d180e93e",3608:"c02a89b1",4195:"66a49772",4367:"580b23d8",4480:"acece63d",4608:"dabf6d14",4676:"46c05137",4926:"00ef113b",5232:"51ae33e0",5395:"14e2ac8a",5401:"28b5f4ae",5445:"a88a5a0b",5463:"ca1e1776",5603:"540d39ed",5670:"2b4ef86e",5864:"9c455f51",5881:"a82e4905",6170:"2efa9cf7",6513:"b5c833fe",6606:"055d7adb",6818:"38682dc6",6911:"483cbed8",7291:"43df6488",7414:"4b73b310",7586:"b83885f0",7918:"8333332b",7957:"ed30a782",8005:"91c96945",8302:"46209674",8438:"bf8d1a91",8561:"c4b41b5c",8577:"8180f19b",8600:"e6797106",8675:"94db4d62",8844:"984a2cec",8866:"84d72ff0",9290:"04735a1d",9334:"404427bb",9342:"dc2487ce",9514:"fbbddb56",9878:"91c262a1",9889:"ce60adf2",9922:"6d89d101"}[e]+".js"},o.miniCssF=function(e){return"assets/css/styles.6cccbd2d.css"},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=function(e,f){return Object.prototype.hasOwnProperty.call(e,f)},c={},n="vloong-docs:",o.l=function(e,f,t,r){if(c[e])c[e].push(f);else{var d,a;if(void 0!==t)for(var b=document.getElementsByTagName("script"),u=0;u<b.length;u++){var i=b[u];if(i.getAttribute("src")==e||i.getAttribute("data-webpack")==n+t){d=i;break}}d||(a=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,o.nc&&d.setAttribute("nonce",o.nc),d.setAttribute("data-webpack",n+t),d.src=e),c[e]=[f];var l=function(f,t){d.onerror=d.onload=null,clearTimeout(s);var n=c[e];if(delete c[e],d.parentNode&&d.parentNode.removeChild(d),n&&n.forEach((function(e){return e(t)})),f)return f(t)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=l.bind(null,d.onerror),d.onload=l.bind(null,d.onload),a&&document.head.appendChild(d)}},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="/en/",o.gca=function(e){return e={17896441:"7918","8d9886fb":"40","935f2afb":"53","39f08bbb":"412","36ab6c69":"634","6b8c3ed5":"771","540d0c0f":"1462","068bc50c":"1689","50c5df50":"2170",c400e8c4:"2315","92a77e08":"2434",f6cbeee1:"2535",a4ad338c:"2587","1f391b9e":"3085","19c23c14":"3270","4323fb4d":"3384",be1817e2:"3499",f856a992:"3515","9e4087bc":"3608",c4f5d8e4:"4195","17cf46a6":"4367",f50528dc:"4480","375f178c":"4676","1e5ad4f9":"4926","4ec52f1c":"5232","3f4281af":"5395","0d9860af":"5401","938d7bd8":"5445","9f9597e9":"5463","5ee62587":"5603","7399341e":"5670","86c4fc8e":"5864","766cf399":"5881","1541370f":"6170","2b2dd26b":"6513",f40850f2:"6606",b61585aa:"6818","73477d1c":"6911",ea3a3c64:"7291","393be207":"7414","500f8fe6":"7586","7260c157":"7957","4ddd060e":"8005","3c865f97":"8302","22f2ba6c":"8438","8bd16534":"8561",b9d11f69:"8577","16f5d520":"8600","66a424b0":"8675","30e931d3":"8844","5f49142d":"8866","1e895c0d":"9290","96ddc0e4":"9334",f23d7783:"9342","1be78505":"9514",df31bf4c:"9878","1f9a4dda":"9889","6f0d96b7":"9922"}[e]||e,o.p+o.u(e)},function(){var e={1303:0,532:0};o.f.j=function(f,t){var c=o.o(e,f)?e[f]:void 0;if(0!==c)if(c)t.push(c[2]);else if(/^(1303|532)$/.test(f))e[f]=0;else{var n=new Promise((function(t,n){c=e[f]=[t,n]}));t.push(c[2]=n);var r=o.p+o.u(f),d=new Error;o.l(r,(function(t){if(o.o(e,f)&&(0!==(c=e[f])&&(e[f]=void 0),c)){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+f+" failed.\n("+n+": "+r+")",d.name="ChunkLoadError",d.type=n,d.request=r,c[1](d)}}),"chunk-"+f,f)}},o.O.j=function(f){return 0===e[f]};var f=function(f,t){var c,n,r=t[0],d=t[1],a=t[2],b=0;if(r.some((function(f){return 0!==e[f]}))){for(c in d)o.o(d,c)&&(o.m[c]=d[c]);if(a)var u=a(o)}for(f&&f(t);b<r.length;b++)n=r[b],o.o(e,n)&&e[n]&&e[n][0](),e[r[b]]=0;return o.O(u)},t=self.webpackChunkvloong_docs=self.webpackChunkvloong_docs||[];t.forEach(f.bind(null,0)),t.push=f.bind(null,t.push.bind(t))}()}();