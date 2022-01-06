"use strict";(self.webpackChunkvloong_docs=self.webpackChunkvloong_docs||[]).push([[3145],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=r.createContext({}),p=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=p(t.components);return r.createElement(l.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},v=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,l=t.parentName,d=c(t,["components","mdxType","originalType","parentName"]),v=p(n),m=a,g=v["".concat(l,".").concat(m)]||v[m]||s[m]||i;return n?r.createElement(g,o(o({ref:e},d),{},{components:n})):r.createElement(g,o({ref:e},d))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=v;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c.mdxType="string"==typeof t?t:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},2073:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return v}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],c={id:"vgru_train_opt",title:"10\u5206\u949f\u642d\u5efavGRU\u6df1\u5ea6\u7f51\u7edc"},l="10\u5206\u949f\u642d\u5efa\u6df1\u5ea6\u5f02\u5e38\u68c0\u6d4b\u7f51\u7edc",p={unversionedId:"vloong/practice_guide/vgru_train_opt",id:"vloong/practice_guide/vgru_train_opt",title:"10\u5206\u949f\u642d\u5efavGRU\u6df1\u5ea6\u7f51\u7edc",description:"\u672c\u6559\u7a0b\u5c06\u52064\u4e2a\u6b65\u9aa4\uff0c\u6559\u4f60\u5982\u4f55\u4ece0\u5f00\u59cb\u6784\u5efa\u81ea\u5df1\u7684\u7535\u6c60\u6df1\u5ea6\u5f02\u5e38\u68c0\u6d4b\u7f51\u7edc\u3002",source:"@site/docs/vloong/practice_guide/vgru_train_opt.md",sourceDirName:"vloong/practice_guide",slug:"/vloong/practice_guide/vgru_train_opt",permalink:"/vloong/practice_guide/vgru_train_opt",tags:[],version:"current",frontMatter:{id:"vgru_train_opt",title:"10\u5206\u949f\u642d\u5efavGRU\u6df1\u5ea6\u7f51\u7edc"},sidebar:"vloongdocs",previous:{title:"\u6570\u636e\u96c6\u4e0a\u4f20\u811a\u672c\u4f7f\u7528",permalink:"/vloong/dev_resources/upload_dataset_script"},next:{title:"Notebook\u4ece\u5165\u95e8\u5230\u7cbe\u901a",permalink:"/vloong/practice_guide/notebook_advanced"}},d=[{value:"\u7b2c\u4e00\u6b65\uff1a\u67e5\u770b\u6570\u636e\u96c6",id:"\u7b2c\u4e00\u6b65\u67e5\u770b\u6570\u636e\u96c6",children:[],level:2},{value:"\u7b2c\u4e8c\u6b65\uff1a\u9009\u62e9\u7b97\u6cd5\u6a21\u677f",id:"\u7b2c\u4e8c\u6b65\u9009\u62e9\u7b97\u6cd5\u6a21\u677f",children:[],level:2},{value:"\u7b2c\u4e09\u6b65\uff1a\u521b\u5efa\u8bad\u7ec3\u4efb\u52a1",id:"\u7b2c\u4e09\u6b65\u521b\u5efa\u8bad\u7ec3\u4efb\u52a1",children:[],level:2},{value:"\u7b2c\u56db\u6b65\uff1a\u7b97\u6cd5\u53c2\u6570\u4f18\u5316",id:"\u7b2c\u56db\u6b65\u7b97\u6cd5\u53c2\u6570\u4f18\u5316",children:[],level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[],level:2}],s={toc:d};function v(t){var e=t.components,n=(0,a.Z)(t,o);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"10\u5206\u949f\u642d\u5efa\u6df1\u5ea6\u5f02\u5e38\u68c0\u6d4b\u7f51\u7edc"},"10\u5206\u949f\u642d\u5efa\u6df1\u5ea6\u5f02\u5e38\u68c0\u6d4b\u7f51\u7edc"),(0,i.kt)("p",null,"\u672c\u6559\u7a0b\u5c06\u52064\u4e2a\u6b65\u9aa4\uff0c\u6559\u4f60\u5982\u4f55\u4ece0\u5f00\u59cb\u6784\u5efa\u81ea\u5df1\u7684\u7535\u6c60\u6df1\u5ea6\u5f02\u5e38\u68c0\u6d4b\u7f51\u7edc\u3002"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u5bfc\u822a\u680f")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u7b2c\u4e00\u6b65\uff1a\u67e5\u770b\u6570\u636e\u96c6"),(0,i.kt)("p",{parentName:"div"},"\u7b2c\u4e8c\u6b65\uff1a\u9009\u62e9\u7b97\u6cd5\u6a21\u677f"),(0,i.kt)("p",{parentName:"div"},"\u7b2c\u4e09\u6b65\uff1a\u521b\u5efa\u8bad\u7ec3\u4efb\u52a1"),(0,i.kt)("p",{parentName:"div"},"\u7b2c\u56db\u6b65\uff1a\u7b97\u6cd5\u53c2\u6570\u4f18\u5316"))),(0,i.kt)("h2",{id:"\u7b2c\u4e00\u6b65\u67e5\u770b\u6570\u636e\u96c6"},"\u7b2c\u4e00\u6b65\uff1a\u67e5\u770b\u6570\u636e\u96c6"),(0,i.kt)("p",null,"\u70b9\u51fb\u201c\u6570\u636e\u96c6\u7ba1\u7406\u201d\uff0c\u518d\u70b9\u51fb\u201c\u9884\u7f6e\u6570\u636e\u96c6\u201d\u8fdb\u884c\u5207\u6362\uff0c\u5207\u6362\u540e\u53ef\u770b\u5230\u4e0b\u5217\u6570\u636e\u96c6\u3002"),(0,i.kt)("img",{src:"/img/vloong/practice/vgru_dataset.png",width:"50%"}),(0,i.kt)("p",null,"\u5e73\u53f0\u5f53\u524d\u9884\u7f6e\u4e869\u4e2a\u6570\u636e\u96c6\uff0c\u6db5\u76d6\u673a\u6784\u5f00\u6e90\u6570\u636e\u96c6\u3001\u8bba\u6587\u5f00\u6e90\u6570\u636e\u96c6\u53ca\u8f66\u7aef\u6570\u636e\u96c6\u4e09\u5927\u7c7b\u3002\u672c\u6559\u7a0b\u4e2d\u9700\u8981\u4f7f\u7528\u5230MOVNOP\u6570\u636e\u96c6\uff08\u5e73\u53f0\u5df2\u9884\u5148\u5212\u5206\u4e86\u8bad\u7ec3\u96c6train\u548c\u6d4b\u8bd5\u96c6test\uff09\uff0cMOVNOP\u6570\u636e\u96c6\u4e3a\u6807\u51c6\u5316\u7684\u9ad8\u8d28\u91cf\u6709\u6807\u7b7e\u5b9e\u8f66\u6570\u636e\u96c6\u3002"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u5173\u4e8eMOVNOP\u6570\u636e\u96c6\u53ca\u5176\u4ed6\u9884\u7f6e\u6570\u636e\u96c6\u7684\u8be6\u7ec6\u4ecb\u7ecd\u53ef\u53c2\u89c1\uff1a",(0,i.kt)("a",{parentName:"h5",href:"https://docs.vloong.thinkenergy.tech/vloong/presetdata/vehicledataset"},"\u9884\u7f6e\u6570\u636e\u96c6"))),(0,i.kt)("div",{parentName:"div",className:"admonition-content"})),(0,i.kt)("h2",{id:"\u7b2c\u4e8c\u6b65\u9009\u62e9\u7b97\u6cd5\u6a21\u677f"},"\u7b2c\u4e8c\u6b65\uff1a\u9009\u62e9\u7b97\u6cd5\u6a21\u677f"),(0,i.kt)("p",null,"\u70b9\u51fb\u201c\u7b97\u6cd5\u7ba1\u7406\u201d\uff0c\u518d\u70b9\u51fb\u201c\u9884\u7f6e\u7b97\u6cd5\u201d\u8fdb\u884c\u5207\u6362\uff0c\u5e76\u5728\u6a21\u578b\u7c7b\u522b\u4e2d\u9009\u62e9\u201c\u5f02\u5e38\u68c0\u6d4b\u201d\u8fdb\u884c\u7b5b\u9009\u3002\u672c\u6559\u7a0b\u4e2d\u9700\u8981\u4f7f\u7528\u5230vGRU\u6df1\u5ea6\u5f02\u5e38\u68c0\u6d4b\u6846\u67b6\uff0c\u8fd9\u91cc\u70b9\u51fb\u64cd\u4f5c\u4e2d\u7684\u201cFork\u201d\u5c06\u9884\u7f6e\u7b97\u6cd5\u6a21\u677f\u62f7\u8d1d\u5230\u201c\u6211\u7684\u7b97\u6cd5\u201d\u4e2d\u3002"),(0,i.kt)("img",{src:"/img/vloong/practice/vgru_fork.png",width:"100%"}),(0,i.kt)("p",null,"\u5e73\u53f0\u5f53\u524d\u9884\u7f6e\u4e8611\u4e2a\u7b97\u6cd5\uff0c\u5305\u542bvGRU\u6df1\u5ea6\u5f02\u5e38\u68c0\u6d4b\u6846\u67b6\u3001\u5065\u5eb7\u72b6\u6001\u548c\u5b89\u5168\u9884\u8b66\u7c7b\u7b97\u6cd5\u53ca\u9488\u5bf9\u5f00\u6e90\u6570\u636e\u96c6\u7684\u793a\u4f8b\u7b97\u6cd5\u7b49\u3002"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u5173\u4e8evGRU\u53ca\u5176\u4ed6\u9884\u7f6e\u7b97\u6cd5\u7684\u8be6\u7ec6\u4ecb\u7ecd\u53ef\u53c2\u89c1\uff1a",(0,i.kt)("a",{parentName:"h5",href:"https://docs.vloong.thinkenergy.tech/sdk/sdkdocs"},"\u9884\u7f6e\u7b97\u6cd5"))),(0,i.kt)("div",{parentName:"div",className:"admonition-content"})),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u6ce8\u610f")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5728\u9884\u7f6e\u7b97\u6cd5\u754c\u9762\uff0c\u53ef\u4ee5\u76f4\u63a5\u70b9\u51fb\u521b\u5efa\u8bad\u7ec3\u4efb\u52a1\uff0c\u5173\u8054\u6570\u636e\u96c6\u8fdb\u884c\u8bad\u7ec3\u3002\u8fd9\u91cc\u6211\u4eec\u4e3a\u4e86\u540e\u7eed\u53ef\u4ee5\u5bf9\u7b97\u6cd5\u8fdb\u884c\u4f18\u5316\u548c\u4e8c\u6b21\u5f00\u53d1\uff0c\u9009\u62e9\u201cFork\u201d\u9884\u7f6e\u7b97\u6cd5\u3002"))),(0,i.kt)("h2",{id:"\u7b2c\u4e09\u6b65\u521b\u5efa\u8bad\u7ec3\u4efb\u52a1"},"\u7b2c\u4e09\u6b65\uff1a\u521b\u5efa\u8bad\u7ec3\u4efb\u52a1"),(0,i.kt)("p",null,"\u70b9\u51fb\u201cFork\u201d\u9884\u7f6e\u7b97\u6cd5\u4e4b\u540e\uff0c\u5207\u6362\u5230\u201c\u6211\u7684\u7b97\u6cd5\u201d\u5373\u53ef\u770b\u5230\u62f7\u8d1d\u6210\u529f\u7684vGRU\u7b97\u6cd5\u6a21\u677f\u3002\u70b9\u51fb\u201c\u521b\u5efa\u8bad\u7ec3\u4efb\u52a1\u201d\u3002"),(0,i.kt)("img",{src:"/img/vloong/practice/vgru_newtask.png",width:"100%"}),(0,i.kt)("p",null,"\u70b9\u51fb\u201c\u521b\u5efa\u8bad\u7ec3\u4efb\u52a1\u201d\u540e\uff0c\u5f39\u51fa\u5982\u4e0b\u754c\u9762\uff0c\u586b\u5199\u914d\u7f6e\u53c2\u6570\u5982\u4e0b\uff1a"),(0,i.kt)("img",{src:"/img/vloong/practice/vgru_taskconfig.png",width:"100%"}),(0,i.kt)("p",null,"\u70b9\u51fb\u201c\u5f00\u59cb\u8bad\u7ec3\u201d\uff0c\u754c\u9762\u4f1a\u81ea\u52a8\u8df3\u8f6c\u5230\u8bad\u7ec3\u4efb\u52a1\u4e2d\u7684\u4efb\u52a1\u8be6\u60c5\u9875\uff0c\u72b6\u6001\u4f1a\u53d8\u6210\u201c\u8fd0\u884c\u4e2d\u201d\u3002"),(0,i.kt)("img",{src:"/img/vloong/practice/vgru_taskrunning.png",width:"100%"}),(0,i.kt)("p",null,"\u70b9\u51fb\u201c\u8fd0\u884c\u65e5\u5fd7\u201d\u67e5\u770b\u8bad\u7ec3\u8fdb\u5c55\uff0c\u5f53\u72b6\u6001\u53d8\u6210\u201c\u8fd0\u884c\u5b8c\u6210\u201d\u540e\uff0c\u53ef\u4ee5\u70b9\u51fb\u6216\u4e0b\u8f7d\u201c\u8fd0\u884c\u65e5\u5fd7\u201d\u67e5\u770b\u8bad\u7ec3\u6548\u679c\u3002"),(0,i.kt)("img",{src:"/img/vloong/practice/vgru_taskcompleted.png",width:"100%"}),(0,i.kt)("img",{src:"/img/vloong/practice/vgru_tasklog.png",width:"100%"}),(0,i.kt)("p",null,"\u4ece\u8fd0\u884c\u65e5\u5fd7\u4e2d\u6211\u4eec\u53ef\u4ee5\u770b\u5230\u672c\u6b21\u8bad\u7ec3\u7684\u7ed3\u679c\uff1a\u68c0\u51fa\u7387\u4e3a73%\uff0c\u8bef\u62a5\u7387\u4e3a3%\u3002"),(0,i.kt)("h2",{id:"\u7b2c\u56db\u6b65\u7b97\u6cd5\u53c2\u6570\u4f18\u5316"},"\u7b2c\u56db\u6b65\uff1a\u7b97\u6cd5\u53c2\u6570\u4f18\u5316"),(0,i.kt)("p",null,"\u4e0a\u4e00\u6b65\u9aa4\u4e2d\u5f97\u5230\u7684\u8bad\u7ec3\u6548\u679c\u5e76\u4e0d\u7406\u60f3\uff0c\u53ef\u4ee5\u901a\u8fc7\u8c03\u6574\u8bad\u7ec3\u53c2\u6570\u8fdb\u884c\u4f18\u5316\u3002\u70b9\u51fb\u201c\u5728\u7ebf\u7f16\u8f91\u201d\uff0c\u4f1a\u5f39\u51faJupyter Notebook\u5728\u7ebf\u7f16\u8f91\u754c\u9762\u3002\u672c\u6559\u7a0b\u4e2d\u6211\u4eec\u5c1d\u8bd5\u5bf9\u914d\u7f6e\u6587\u4ef6(",(0,i.kt)("inlineCode",{parentName:"p"},"configs/test.json"),")\u4e2d\u7684batch_size\u548clearning_rate\u8fd9\u4e24\u4e2a\u53c2\u6570\u8fdb\u884c\u4fee\u6539\u3002"),(0,i.kt)("img",{src:"/img/vloong/practice/vgru_taskopt.png",width:"100%"}),(0,i.kt)("img",{src:"/img/vloong/practice/vgru_configedit.png",width:"100%"}),(0,i.kt)("p",null,"\u4fee\u6539\u540e\u4fdd\u5b58\u5e76\u9000\u51faJupyter Notebook\uff0c\u91cd\u65b0\u521b\u5efa\u8bad\u7ec3\u4efb\u52a1\uff0c\u8bad\u7ec3\u5b8c\u6210\u540e\u518d\u6b21\u67e5\u770b\u8bad\u7ec3\u6548\u679c\u3002"),(0,i.kt)("img",{src:"/img/vloong/practice/vgru_optlog.png",width:"100%"}),(0,i.kt)("p",null,"\u4ece\u8fd0\u884c\u65e5\u5fd7\u4e2d\u6211\u4eec\u53ef\u4ee5\u770b\u5230\u672c\u6b21\u8bad\u7ec3\u6548\u679c\u660e\u663e\u63d0\u5347\uff1a\u68c0\u51fa\u7387\u63d0\u5347\u4e3a100%\uff0c\u8bef\u62a5\u7387\u4e3a5%\u3002"),(0,i.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,i.kt)("p",null,"\u901a\u8fc7\u672c\u6559\u7a0b\uff0c\u76f8\u4fe1\u4f60\u5df2\u7ecf\u5b66\u4f1a\u4e86\u901a\u8fc7\u7b97\u6cd5\u6a21\u677f\u5173\u8054\u6570\u636e\u96c6\u5e76\u521b\u5efa\u8bad\u7ec3\u4efb\u52a1\uff0c\u642d\u5efa\u4e86\u81ea\u5df1\u7684\u7535\u6c60\u6df1\u5ea6\u5f02\u5e38\u68c0\u6d4b\u7f51\u7edc\u3002\u8fc8\u51fa\u7b2c\u4e00\u6b65\u4e4b\u540e\uff0c\u5c31\u53ef\u4ee5\u6839\u636e\u6bcf\u4e00\u6b21\u8bad\u7ec3\u4efb\u52a1\u7684\u7ed3\u679c\u8fdb\u4e00\u6b65\u4f18\u5316\u7b97\u6cd5\u5566\uff01"))}v.isMDXComponent=!0}}]);