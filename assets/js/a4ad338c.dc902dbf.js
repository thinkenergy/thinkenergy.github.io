"use strict";(self.webpackChunkvloong_docs=self.webpackChunkvloong_docs||[]).push([[587],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return c}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),u=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},m=function(t){var e=u(t.components);return a.createElement(d.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},o=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),o=u(n),c=r,g=o["".concat(d,".").concat(c)]||o[c]||k[c]||l;return n?a.createElement(g,p(p({ref:e},m),{},{components:n})):a.createElement(g,p({ref:e},m))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,p=new Array(l);p[0]=o;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:r,p[1]=i;for(var u=2;u<l;u++)p[u]=n[u];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}o.displayName="MDXCreateElement"},2018:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return d},metadata:function(){return u},toc:function(){return m},default:function(){return o}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),p=["components"],i={id:"hotrisk",title:"\u70ed\u98ce\u9669\u5206\u6790\u7b97\u6cd5"},d=void 0,u={unversionedId:"sdk/use/hotrisk",id:"sdk/use/hotrisk",isDocsHomePage:!1,title:"\u70ed\u98ce\u9669\u5206\u6790\u7b97\u6cd5",description:"\u5b89\u88c5",source:"@site/docs/sdk/use/hotrisk.md",sourceDirName:"sdk/use",slug:"/sdk/use/hotrisk",permalink:"/sdk/use/hotrisk",tags:[],version:"current",frontMatter:{id:"hotrisk",title:"\u70ed\u98ce\u9669\u5206\u6790\u7b97\u6cd5"},sidebar:"sdkdocs",previous:{title:"\u4e00\u81f4\u6027\u8bc4\u4ef7\u7b97\u6cd5",permalink:"/sdk/use/consistency"},next:{title:"\u5185\u77ed\u8def\u7b97\u6cd5",permalink:"/sdk/use/internalshortcircuit"}},m=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",children:[],level:2},{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",children:[{value:"1.\u5bfc\u5165\u5f15\u64ce\u5de5\u5382\u7c7b",id:"1\u5bfc\u5165\u5f15\u64ce\u5de5\u5382\u7c7b",children:[],level:4},{value:"2.\u4f7f\u7528 app_key \u548c app_secret \u521d\u59cb\u5316\u5f15\u64ce\u5de5\u5382",id:"2\u4f7f\u7528-app_key-\u548c-app_secret-\u521d\u59cb\u5316\u5f15\u64ce\u5de5\u5382",children:[],level:4},{value:"3.\u6839\u636e\u7b97\u6cd5\u7f16\u7801\u83b7\u53d6\u5177\u4f53\u7684\u7b97\u6cd5\u5f15\u64ce",id:"3\u6839\u636e\u7b97\u6cd5\u7f16\u7801\u83b7\u53d6\u5177\u4f53\u7684\u7b97\u6cd5\u5f15\u64ce",children:[],level:4},{value:"4.\u7ed9\u7b97\u6cd5\u5f15\u64ce\u8bbe\u7f6e\u53c2\u6570(\u53ef\u9009)",id:"4\u7ed9\u7b97\u6cd5\u5f15\u64ce\u8bbe\u7f6e\u53c2\u6570\u53ef\u9009",children:[],level:4},{value:"5.\u8c03\u7528\u7b97\u6cd5",id:"5\u8c03\u7528\u7b97\u6cd5",children:[],level:4}],level:2},{value:"\u7b97\u6cd5\u7684\u4f7f\u7528\u53c2\u6570\u8bf4\u660e\u5982\u4e0b:",id:"\u7b97\u6cd5\u7684\u4f7f\u7528\u53c2\u6570\u8bf4\u660e\u5982\u4e0b",children:[],level:2},{value:"\u7b97\u6cd5\u8f93\u5165\u6570\u636e\u6837\u4f8b",id:"\u7b97\u6cd5\u8f93\u5165\u6570\u636e\u6837\u4f8b",children:[{value:"\u7b97\u6cd5\u4f20\u5165\u6570\u636eDataFarme\u5b57\u6bb5",id:"\u7b97\u6cd5\u4f20\u5165\u6570\u636edatafarme\u5b57\u6bb5",children:[],level:4},{value:"\u8f93\u5165\u6570\u636e\u6837\u4f8b",id:"\u8f93\u5165\u6570\u636e\u6837\u4f8b",children:[],level:4}],level:2},{value:"\u7b97\u6cd5\u53c2\u6570\u914d\u7f6e",id:"\u7b97\u6cd5\u53c2\u6570\u914d\u7f6e",children:[],level:2},{value:"\u8be6\u7ec6\u5b9e\u4f8bdemo",id:"\u8be6\u7ec6\u5b9e\u4f8bdemo",children:[],level:2},{value:"\u7b97\u6cd5\u7ed3\u679c",id:"\u7b97\u6cd5\u7ed3\u679c",children:[],level:2}],k={toc:m};function o(t){var e=t.components,n=(0,r.Z)(t,p);return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pip install thinkenergy-2.1.0-py3-none-any.whl\n#\u6267\u884c\u6fc0\u6d3b\u811a\u672c\n")),(0,l.kt)("h2",{id:"\u4f7f\u7528\u65b9\u6cd5"},"\u4f7f\u7528\u65b9\u6cd5"),(0,l.kt)("h4",{id:"1\u5bfc\u5165\u5f15\u64ce\u5de5\u5382\u7c7b"},"1.\u5bfc\u5165\u5f15\u64ce\u5de5\u5382\u7c7b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"from thinkenergy.thinkengine import ThinkEngineFactory\n")),(0,l.kt)("h4",{id:"2\u4f7f\u7528-app_key-\u548c-app_secret-\u521d\u59cb\u5316\u5f15\u64ce\u5de5\u5382"},"2.\u4f7f\u7528 app_key \u548c app_secret \u521d\u59cb\u5316\u5f15\u64ce\u5de5\u5382"),(0,l.kt)("p",null," Tip:\u7528\u6237\u9700\u8981\u7533\u8bf7app_key \u548c app_secret,\u5426\u5219\u7b97\u6cd5\u65e0\u6cd5\u4f7f\u7528"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"tef = ThinkEngineFactory(app_key, app_secret)\n")),(0,l.kt)("h4",{id:"3\u6839\u636e\u7b97\u6cd5\u7f16\u7801\u83b7\u53d6\u5177\u4f53\u7684\u7b97\u6cd5\u5f15\u64ce"},"3.\u6839\u636e\u7b97\u6cd5\u7f16\u7801\u83b7\u53d6\u5177\u4f53\u7684\u7b97\u6cd5\u5f15\u64ce"),(0,l.kt)("p",null,"Tip:\u6bcf\u4e00\u4e2a\u7b97\u6cd5\u90fd\u6709\u5bf9\u5e94\u7684\u7b97\u6cd5\u7f16\u53f7\u7801,\u9488\u5bf9\u4e0d\u540c\u7684\u7b97\u6cd5\u8bf7\u4f20\u5165\u6b63\u786e\u7684\u7b97\u6cd5\u7f16\u53f7,\u672c\u4f8b\u4e2dA100163\u4ee3\u8868\u70ed\u98ce\u9669\u5206\u6790\u7b97\u6cd5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"alg_code = 'A100163'\nte1 = tef.get_engine(alg_code)\n")),(0,l.kt)("h4",{id:"4\u7ed9\u7b97\u6cd5\u5f15\u64ce\u8bbe\u7f6e\u53c2\u6570\u53ef\u9009"},"4.\u7ed9\u7b97\u6cd5\u5f15\u64ce\u8bbe\u7f6e\u53c2\u6570(\u53ef\u9009)"),(0,l.kt)("p",null," Tip:\u7b97\u6cd5\u53c2\u6570\u53ef\u4ee5\u901a\u8fc7\u4e24\u79cd\u65b9\u5f0f\u5b9e\u73b0:"),(0,l.kt)("p",null,"\u901a\u8fc7\u7b97\u6cd5\u914d\u7f6e\u6587\u4ef6"),(0,l.kt)("p",null,"\u901a\u8fc7set_params\u65b9\u6cd5\u5b9e\u73b0"),(0,l.kt)("p",null,"\u4e0d\u914d\u7f6e\u53c2\u6570\u4f1a\u4f7f\u7528\u9ed8\u8ba4\u7684\u53c2\u6570"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"te1.set_params(params=params)   # \u8bbe\u7f6e\u53c2\u6570\n")),(0,l.kt)("h4",{id:"5\u8c03\u7528\u7b97\u6cd5"},"5.\u8c03\u7528\u7b97\u6cd5"),(0,l.kt)("p",null," Tip:run()\u51fd\u6570\u63a5\u6536\u7684\u6570\u636e\u4e3aDataFarme,\u7528\u6237\u53ef\u4ee5\u5c06\u81ea\u5df1\u7684\u6570\u636e\u6784\u5efa\u6210\u7b26\u5408\u7b97\u6cd5\u7684DataFarme,\u672c\u4f8b\u91c7\u7528\u7684\u662f\u8bfb\u53d6.csv\u683c\u5f0f\u6587\u4ef6\u4e2d\u7684\u6570\u636e\u8f6c\u4e3aDataFarme."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"data = pd.read_csv(r'/tmp/sample_data_A100163.csv')\nte1.run(data)\n")),(0,l.kt)("h2",{id:"\u7b97\u6cd5\u7684\u4f7f\u7528\u53c2\u6570\u8bf4\u660e\u5982\u4e0b"},"\u7b97\u6cd5\u7684\u4f7f\u7528\u53c2\u6570\u8bf4\u660e\u5982\u4e0b:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u53c2\u6570")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u7c7b\u578b")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u793a\u4f8b")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u8bf4\u660e")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"app_key"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"123456"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u7533\u8bf7\u7684app_key")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"app_secret"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"'I2NEWMBQFW7IMSD7XFZNHFARCVJAK7IZDK23BGABSWNU5QLBBCWLRFTL6QDAHDM32ZDA5ITFR6JPPJT3JHCBHZC77ZXNYSE4NUPHAEA='"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u7533\u8bf7\u7684app_secret")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"alg_code"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"A100163"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7b97\u6cd5\u7f16\u7801")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data"),(0,l.kt)("td",{parentName:"tr",align:null},"DataFrame"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"pandas\u4e8c\u7ef4\u6570\u7ec4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"params"),(0,l.kt)("td",{parentName:"tr",align:null},"dict"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u7b97\u6cd5\u914d\u7f6e")))),(0,l.kt)("h2",{id:"\u7b97\u6cd5\u8f93\u5165\u6570\u636e\u6837\u4f8b"},"\u7b97\u6cd5\u8f93\u5165\u6570\u636e\u6837\u4f8b"),(0,l.kt)("h4",{id:"\u7b97\u6cd5\u4f20\u5165\u6570\u636edatafarme\u5b57\u6bb5"},"\u7b97\u6cd5\u4f20\u5165\u6570\u636eDataFarme\u5b57\u6bb5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"#\u70ed\u98ce\u9669\u5206\u6790\n['vin', 'timestamp', 'current','max_single_volt', 'min_single_volt', 'max_temp', 'min_temp','single_volt_list','single_temp_list'](\u6700\u5c11\u4e24\u6761\u6570\u636e)\n")),(0,l.kt)("h4",{id:"\u8f93\u5165\u6570\u636e\u6837\u4f8b"},"\u8f93\u5165\u6570\u636e\u6837\u4f8b"),(0,l.kt)("p",null,"sample_data_A100163.csv\u6587\u4ef6\u5185\u5bb9"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"timestamp"),(0,l.kt)("th",{parentName:"tr",align:null},"current"),(0,l.kt)("th",{parentName:"tr",align:null},"max_volt"),(0,l.kt)("th",{parentName:"tr",align:null},"min_volt"),(0,l.kt)("th",{parentName:"tr",align:null},"max_temp"),(0,l.kt)("th",{parentName:"tr",align:null},"min_temp"),(0,l.kt)("th",{parentName:"tr",align:null},"single_volt_list"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"2020-12-01 11:08:17"),(0,l.kt)("td",{parentName:"tr",align:null},"9927"),(0,l.kt)("td",{parentName:"tr",align:null},"3.931"),(0,l.kt)("td",{parentName:"tr",align:null},"3.911"),(0,l.kt)("td",{parentName:"tr",align:null},"43"),(0,l.kt)("td",{parentName:"tr",align:null},"42"),(0,l.kt)("td",{parentName:"tr",align:null},"3.931")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"2020-12-01 11:08:47"),(0,l.kt)("td",{parentName:"tr",align:null},"9927"),(0,l.kt)("td",{parentName:"tr",align:null},"3.932"),(0,l.kt)("td",{parentName:"tr",align:null},"3.912"),(0,l.kt)("td",{parentName:"tr",align:null},"43"),(0,l.kt)("td",{parentName:"tr",align:null},"42"),(0,l.kt)("td",{parentName:"tr",align:null},"3.932")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"2020-12-01 11:09:17"),(0,l.kt)("td",{parentName:"tr",align:null},"9927"),(0,l.kt)("td",{parentName:"tr",align:null},"3.933"),(0,l.kt)("td",{parentName:"tr",align:null},"3.912"),(0,l.kt)("td",{parentName:"tr",align:null},"43"),(0,l.kt)("td",{parentName:"tr",align:null},"42"),(0,l.kt)("td",{parentName:"tr",align:null},"3.932")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"2020-12-01 11:09:47"),(0,l.kt)("td",{parentName:"tr",align:null},"9927"),(0,l.kt)("td",{parentName:"tr",align:null},"3.933"),(0,l.kt)("td",{parentName:"tr",align:null},"3.913"),(0,l.kt)("td",{parentName:"tr",align:null},"43"),(0,l.kt)("td",{parentName:"tr",align:null},"42"),(0,l.kt)("td",{parentName:"tr",align:null},"3.933")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"2020-12-01 11:10:17"),(0,l.kt)("td",{parentName:"tr",align:null},"9927"),(0,l.kt)("td",{parentName:"tr",align:null},"3.934"),(0,l.kt)("td",{parentName:"tr",align:null},"3.914"),(0,l.kt)("td",{parentName:"tr",align:null},"43"),(0,l.kt)("td",{parentName:"tr",align:null},"42"),(0,l.kt)("td",{parentName:"tr",align:null},"3.934")))),(0,l.kt)("h2",{id:"\u7b97\u6cd5\u53c2\u6570\u914d\u7f6e"},"\u7b97\u6cd5\u53c2\u6570\u914d\u7f6e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\n#\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u7684\u914d\u7f6e\nHotRisk_PARAMS = {\n    'alg_config': {\n    }\n}\n")),(0,l.kt)("h2",{id:"\u8be6\u7ec6\u5b9e\u4f8bdemo"},"\u8be6\u7ec6\u5b9e\u4f8bdemo"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"import pandas as pd\nfrom thinkenergy.thinkengine import ThinkEngineFactory\n\napp_key      = '123456' # \u7528\u6237\u7533\u8bf7\u7684 app_key\napp_secret = 'I2NEWMBQFW7IMSD7XFZNHFARCVJAK7IZD' \\\n            'K23BGABSWNU5QLBBCWLRFTL6QDAHDM32Z' \\\n            'DA5ITFR6JPPJT3JHCBHZC77ZXNYSE4NUP' \\\n            'HAEA='  # \u7528\u6237\u7533\u8bf7\u7684 app_secret\ntef = ThinkEngineFactory(app_key, app_secret)  # \u521d\u59cb\u5316\u5f15\u64ce\u5de5\u5382\n# \u5b9e\u4f8b\u5316\nalg_code = 'A100163' # \u7b97\u6cd5\u7f16\u53f7.\u672c\u4f8b\u4e3a\u70ed\u98ce\u9669\u5206\u6790\u7b97\u6cd5\u7f16\u53f7\ndata = pd.read_csv(r'/tmp/charge_trip.csv', encoding = 'gbk')  # \u8bfb\u53d6 CSV\nparams = {\n    'alg_config': {\n    }\n}   #\u53ef\u4f20\u5165\u7b26\u5408\u5382\u5546\u7684\u914d\u7f6e\u53c2\u6570\nte1 = tef.get_engine(alg_code)  # \u83b7\u53d6\u70ed\u98ce\u9669\u5206\u6790\u7b97\u6cd5\u5f15\u64ce\nte1.set_params(params=params)   # \u8bbe\u7f6e\u53c2\u6570.\u53ef\u9009,\u975e\u5fc5\u987b\n\nprint(te1.run(data))            # \u8c03\u7528\u70ed\u98ce\u9669\u5206\u6790\u7b97\u6cd5\n")),(0,l.kt)("h2",{id:"\u7b97\u6cd5\u7ed3\u679c"},"\u7b97\u6cd5\u7ed3\u679c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"{\n    'warning_flag': 0,  \n}\n")))}o.isMDXComponent=!0}}]);