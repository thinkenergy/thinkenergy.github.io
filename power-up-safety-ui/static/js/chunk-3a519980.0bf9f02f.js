/*!
 *  build: vue-admin-beautiful 
 *  copyright: chuzhixin 1204505056@qq.com 
 *  time: 2021-8-30 16:21:51
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3a519980"],{"1de3":function(e,t,r){"use strict";r("f69a")},"304f":function(e,t,r){},"47f3":function(e,t,r){"use strict";r("bae6")},"74b3":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{attrs:{title:e.title,visible:e.dialogVisible,"close-on-click-modal":!1,width:"800px"},on:{"update:visible":function(t){e.dialogVisible=t},close:e.close}},[r("dl",{staticClass:"upload-avatar"},[r("dt",[r("label",{staticClass:"el-button el-button--primary el-button--small",attrs:{for:"uploads"}},[e._v(" 上传头像 ")]),r("input",{ref:"uploadImg",staticClass:"hiddenInput",attrs:{id:"uploads",multiple:"",type:"file",accept:"image/png,image/jpeg,image/gif,image/jpg"},on:{change:function(t){return e.uploadImg(t)}}})]),r("dd",[e._v("支持JPG、PNG等格式图片大小不超过1M，超出自动压缩")])]),r("el-row",[r("el-col",{style:{height:"350px"},attrs:{xs:24,md:12}},[r("vue-cropper",{ref:"cropper",attrs:{img:e.options.img,info:!0,"auto-crop":e.options.autoCrop,"auto-crop-width":e.options.autoCropWidth,"auto-crop-height":e.options.autoCropHeight,"fixed-box":e.options.fixedBox,"max-img-size":e.options.maxImgSize},on:{realTime:e.realTime}})],1),r("el-col",{style:{height:"350px"},attrs:{xs:24,md:12}},[r("div",{staticClass:"avatar-upload-preview"},[r("img",{style:e.previews.img,attrs:{src:e.previews.url}})])])],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:e.close}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("确 定")])],1)],1)},s=[],o=r("206e"),i=r("dc45"),n=(r("c505"),r("7099"),r("0b69"),r("58ca"),r("e186"),r("b678")),l=r("8c50"),u=r("73ef"),c=r.n(u),d=r("778c"),p=(r("4360"),{name:"AvatarEdit",components:{VueCropper:n["VueCropper"]},data:function(){return{title:"上传头像",instance:null,dialogVisible:!1,downImg:"#",id:null,confirmLoading:!1,options:{img:"",info:!0,size:1,outputType:"jpeg",canScale:!1,autoCrop:!0,autoCropWidth:180,autoCropHeight:180,maxImgSize:1048,fixedBox:!0,fixed:!0,fixedNumber:[1,1]},previews:{}}},created:function(){this.instance=c.a.create({baseURL:d["baseURL"],timeout:d["requestTimeout"],headers:{"Content-Type":"multipart/form-data"}})},methods:{showAvatarEdit:function(e){this.dialogVisible=!0,this.id=e.id,this.options.img=e.avatar},close:function(){this.id=null,this.options.img="",this.dialogVisible=!1},save:function(){var e=this;this.$refs.cropper.getCropBlob((function(t){var r=new Blob([t]),a=new window.FormData;a.append("file",r),e.doUpdateAvatarAsync(a)}))},doUpdateAvatarAsync:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a,s,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.confirmLoading=!0,r.next=3,Object(l["doUpdateAvatar"])(e);case 3:a=r.sent,s=a.success,o=a.msg,s&&(t.$emit("fetchData"),t.confirmLoading=!1,t.close(),t.$baseMessage(o,"success"));case 7:case"end":return r.stop()}}),r)})))()},uploadImg:function(e){var t=this,r=e.target.files[0];if(!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(e.target.value))return this.$baseMessage("图片类型必须是.gif,jpeg,jpg,png,bmp中的一种","error"),!1;var a=new FileReader;a.onload=function(e){var r;r="object"===Object(o["a"])(e.target.result)?window.URL.createObjectURL(new Blob([e.target.result])):e.target.result,t.options.img=r,t.$refs.uploadImg.value=""},a.readAsArrayBuffer(r)},realTime:function(e){this.previews=e}}}),f=p,m=(r("d4d3"),r("cba8")),b=Object(m["a"])(f,a,s,!1,null,"5909e136",null);t["default"]=b.exports},"7a8c":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"personalCenter-container"},[r("el-tabs",{attrs:{"tab-position":e.tabPosition}},[r("el-tab-pane",{attrs:{label:"基本设置"}},[r("el-row",[r("h2",[e._v("基本设置")]),r("el-divider")],1),r("el-row",[r("el-form",{ref:"baseForm",attrs:{model:e.baseForm,rules:e.baseRules,"label-width":"100px"}},[""!==e.baseFormOrgInput?r("el-col",{staticClass:"line",attrs:{xs:4,sm:6,md:8,lg:9,xl:11}},[r("el-form-item",{staticStyle:{"font-weight":"bold"},attrs:{label:"组织机构：",prop:"username"}},[r("el-input",{attrs:{autocomplete:"off",disabled:"",title:"组织机构"},model:{value:e.baseFormOrgInput,callback:function(t){e.baseFormOrgInput="string"===typeof t?t.trim():t},expression:"baseFormOrgInput"}})],1)],1):e._e(),r("el-col",{staticClass:"line",attrs:{xs:4,sm:6,md:8,lg:9,xl:11}},[r("el-form-item",{staticStyle:{"font-weight":"bold"},attrs:{label:"用户名：",prop:"username"}},[r("el-input",{attrs:{autocomplete:"off",disabled:"",title:"用户名不可更改"},model:{value:e.baseForm.username,callback:function(t){e.$set(e.baseForm,"username","string"===typeof t?t.trim():t)},expression:"baseForm.username"}})],1)],1),r("el-col",{staticClass:"line",attrs:{xs:4,sm:6,md:8,lg:9,xl:11}},[r("el-form-item",{staticStyle:{"font-weight":"bold"},attrs:{label:"昵称：",prop:"realName"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.baseForm.realName,callback:function(t){e.$set(e.baseForm,"realName","string"===typeof t?t.trim():t)},expression:"baseForm.realName"}})],1)],1),r("el-col",{staticClass:"line",attrs:{xs:4,sm:6,md:8,lg:9,xl:11}},[r("el-form-item",{staticStyle:{"font-weight":"bold"},attrs:{label:"我的签名：",prop:"sign"}},[r("el-input",{attrs:{type:"textarea",autocomplete:"off"},model:{value:e.baseForm.sign,callback:function(t){e.$set(e.baseForm,"sign",t)},expression:"baseForm.sign"}})],1)],1),r("el-col",{staticClass:"line",attrs:{xs:4,sm:6,md:8,lg:9,xl:11}},[r("el-form-item",{staticStyle:{"font-weight":"bold"},attrs:{label:"手机：",prop:"mobile"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.baseForm.mobile,callback:function(t){e.$set(e.baseForm,"mobile","string"===typeof t?t.trim():t)},expression:"baseForm.mobile"}})],1)],1),r("el-col",{staticClass:"line",attrs:{xs:4,sm:6,md:8,lg:9,xl:11}},[r("el-form-item",{staticStyle:{"font-weight":"bold"},attrs:{label:"邮箱：",prop:"email"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.baseForm.email,callback:function(t){e.$set(e.baseForm,"email","string"===typeof t?t.trim():t)},expression:"baseForm.email"}})],1)],1),r("el-col",{staticClass:"line",staticStyle:{"padding-left":"20px"},attrs:{xs:4,sm:6,md:8,lg:9,xl:11}},[r("el-button",{attrs:{type:"primary"},on:{click:e.saveUser}},[e._v(" 保存 ")])],1)],1),r("el-col",{style:{minHeight:"180px"},attrs:{md:24,lg:8}},[r("div",{staticClass:"element-upload-preview",on:{click:function(t){return e.showAvatarEdit()}}},[r("vab-icon",{staticClass:"upload-icon",attrs:{icon:["fas","cloud-upload-alt"]}}),r("div",{staticClass:"mask"},[r("vab-icon",{staticClass:"upload-mask-icon",attrs:{icon:["fas","ellipsis-h"]}})],1),r("div"),e.avatar?r("div",{style:{minHeight:"180px"}},[r("img",{attrs:{src:e.avatar,alt:"头像去火星了"}})]):r("el-avatar",{staticStyle:{"font-size":"80px"},attrs:{icon:"el-icon-user-solid",size:180}})],1)])],1)],1),r("el-tab-pane",{attrs:{label:"安全设置"}},[r("el-row",[r("h2",[e._v("安全设置")]),r("el-divider")],1),r("el-row",[r("el-col",{staticClass:"line",staticStyle:{"padding-left":"20px"},attrs:{xs:4,sm:6,md:8,lg:9,xl:11}},[r("el-button",{attrs:{type:"primary"},on:{click:e.updatePassword}},[e._v(" 修改密码 ")])],1)],1)],1)],1),r("update-password",{ref:"update-password"}),r("avatar-edit",{ref:"avatar-edit",on:{fetchData:e.fetchData}})],1)},s=[],o=r("7e2d"),i=r("dc45"),n=(r("e186"),r("e9df")),l=r("c24f"),u=r("61f7"),c=r("8c50"),d=r("7b27"),p=r("74b3"),f=r("7736"),m=(r("778c"),{name:"PersonalCenter",components:{UpdatePassword:d["default"],AvatarEdit:p["default"]},data:function(){var e=function(e,t,r){Object(u["isNull"])(t)?r(new Error("请输入昵称")):Object(u["isName"])(t)?r():r(new Error("请输入正确的昵称格式"))},t=function(e,t,r){Object(u["isNull"])(t)||Object(u["isPhone"])(t)?r():r(new Error("请输入正确的手机号格式"))},r=function(e,t,r){Object(u["isNull"])(t)||Object(u["isEmail"])(t)?r():r(new Error("请输入正确的邮箱格式"))};return{baseFormOrg:{},baseFormOrgInput:"",baseForm:{locked:"0"},baseRules:{realName:[{required:!0,trigger:"blur",validator:e}],mobile:[{required:!1,trigger:"blur",validator:t}],email:[{required:!1,trigger:"blur",validator:r}]},preview:{},tabPosition:"left"}},created:function(){this.fetchData()},methods:{showAvatarEdit:function(){this.$refs["avatar-edit"].showAvatarEdit({id:this.baseForm.id,avatar:this.avatar})},saveUser:function(){var e=this;this.$refs["baseForm"].validate(function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(r){var a,s,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r){t.next=8;break}if(Object(u["isNull"])(e.baseForm.id)){t.next=8;break}return t.next=4,Object(c["updateWithoutPermission"])(e.baseForm);case 4:a=t.sent,s=a.success,o=a.msg,s&&(e.$baseMessage(o,"success"),e.fetchData());case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},updatePassword:function(){this.$refs["update-password"].showUpdatePassword()},fetchData:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$store.dispatch("user/getUserInfo"),r=Object(n["getAccessToken"])(),t.next=4,Object(l["getUserInfo"])(r);case 4:a=t.sent,s=a.data,Object(u["isNull"])(s)||(e.baseForm=Object.assign({},s),e.baseForm.locked="0");case 7:case"end":return t.stop()}}),t)})))()}},computed:Object(o["a"])({},Object(f["c"])({avatar:"user/avatar"}))}),b=m,g=(r("47f3"),r("cba8")),v=Object(g["a"])(b,a,s,!1,null,"2d39b726",null);t["default"]=v.exports},"7b27":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{attrs:{title:e.title,visible:e.dialogFormVisible,"close-on-click-modal":!1,width:"500px"},on:{"update:visible":function(t){e.dialogFormVisible=t},close:e.close}},[r("el-form",{ref:"form",staticClass:"update-password-container",attrs:{model:e.form,rules:e.rules,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"旧密码",prop:"oldPassword"}},[r("el-input",{attrs:{type:"password",autocomplete:"off","show-password":""},model:{value:e.form.oldPassword,callback:function(t){e.$set(e.form,"oldPassword","string"===typeof t?t.trim():t)},expression:"form.oldPassword"}})],1),r("el-form-item",{attrs:{label:"新密码",prop:"newPassword"}},[r("el-input",{attrs:{type:"password",autocomplete:"off","show-password":""},model:{value:e.form.newPassword,callback:function(t){e.$set(e.form,"newPassword","string"===typeof t?t.trim():t)},expression:"form.newPassword"}})],1),r("el-form-item",{attrs:{label:"确认密码",prop:"verifyPassword"}},[r("el-input",{attrs:{type:"password",autocomplete:"off","show-password":""},model:{value:e.form.verifyPassword,callback:function(t){e.$set(e.form,"verifyPassword","string"===typeof t?t.trim():t)},expression:"form.verifyPassword"}})],1)],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:e.close}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("确 定")])],1)],1)},s=[],o=r("dc45"),i=(r("e186"),r("8c50")),n=r("61f7"),l={name:"UserManagementPassword",data:function(){var e=this,t=function(e,t,r){Object(n["isNull"])(t)?r(new Error("请输入密码")):Object(n["isPassword"])(t)?r():r(new Error("密码至少包含大写字母，小写字母，数字，且不少于6位"))},r=function(t,r,a){Object(n["isNull"])(r)?a(new Error("请再次输入密码")):r!==e.form.newPassword?a(new Error("两次输入密码不一致!")):a()};return{form:{oldPassword:"",newPassword:"",verifyPassword:""},rules:{oldPassword:[{required:!0,trigger:"blur",message:"请输入旧密码"}],newPassword:[{required:!0,trigger:"blur",validator:t}],verifyPassword:[{required:!0,trigger:"blur",validator:r}]},title:"",dialogFormVisible:!1}},created:function(){},methods:{showUpdatePassword:function(){this.title="修改密码",this.dialogFormVisible=!0},close:function(){this.form.oldPassword="",this.form.newPassword="",this.form.verifyPassword="",this.dialogFormVisible=!1},save:function(){var e=this;this.$refs["form"].validate(function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(r){var a,s,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r){t.next=10;break}return t.next=3,Object(i["doUpdatePassword"])(e.form);case 3:a=t.sent,s=a.success,o=a.msg,s&&e.$baseMessage(o,"success"),e.close(),t.next=11;break;case 10:return t.abrupt("return",!1);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}}},u=l,c=(r("1de3"),r("cba8")),d=Object(c["a"])(u,a,s,!1,null,"30598c78",null);t["default"]=d.exports},"8c50":function(e,t,r){"use strict";r.r(t),r.d(t,"getUserInfo",(function(){return s})),r.d(t,"getList",(function(){return o})),r.d(t,"doInsert",(function(){return i})),r.d(t,"doUpdate",(function(){return n})),r.d(t,"doDelete",(function(){return l})),r.d(t,"doDeleteAll",(function(){return u})),r.d(t,"getRoleIdsByUserId",(function(){return c})),r.d(t,"doSetRoles",(function(){return d})),r.d(t,"getOrgByUserId",(function(){return p})),r.d(t,"doSetOrg",(function(){return f})),r.d(t,"doUpdatePasswordById",(function(){return m})),r.d(t,"doUpdatePassword",(function(){return b})),r.d(t,"doResetPasswordById",(function(){return g})),r.d(t,"doUpdateAvatar",(function(){return v})),r.d(t,"resetPassword",(function(){return w})),r.d(t,"updateWithoutPermission",(function(){return h}));var a=r("b775");r("778c");function s(e){return Object(a["default"])({url:"/api/v1/sys/user/getInfoById",method:"get",params:e})}function o(e){return Object(a["default"])({url:"/api/v1/sys/user/findPage",method:"get",params:e})}function i(e){return Object(a["default"])({url:"/api/v1/sys/user/insert",method:"post",data:e})}function n(e){return Object(a["default"])({url:"/api/v1/sys/user/update",method:"post",data:e})}function l(e){return Object(a["default"])({url:"/api/v1/sys/user/del",method:"post",params:e})}function u(e){return Object(a["default"])({url:"/api/v1/sys/user/delAll",method:"post",params:e})}function c(e){return Object(a["default"])({url:"/api/v1/sys/user/getRoleIdsByUserId",method:"get",params:e})}function d(e){return Object(a["default"])({url:"/api/v1/sys/user/roles/setRoles",method:"post",data:e})}function p(e){return Object(a["default"])({url:"/api/v1/sys/user/getOrgByUserId",method:"get",params:e})}function f(e){return Object(a["default"])({url:"/api/v1/sys/user/org/setOrg",method:"post",data:e})}function m(e){return Object(a["default"])({url:"/api/v1/sys/user/updatePasswordById",method:"post",data:e})}function b(e){return Object(a["default"])({url:"/api/v1/sys/user/updatePassword",method:"post",data:e})}function g(e){return Object(a["default"])({url:"/api/v1/sys/user/resetPasswordById",method:"post",params:e})}function v(e){return Object(a["default"])({url:"/api/v1/sys/user/updateAvatar",method:"post",headers:{"Content-Type":"multipart/form-data"},data:e})}function w(e){return Object(a["default"])({url:"/api/v1/sys/user/resetPasswordById",method:"post",params:e})}function h(e){return Object(a["default"])({url:"/api/v1/sys/user/updateSelf",method:"post",data:e})}},bae6:function(e,t,r){},d4d3:function(e,t,r){"use strict";r("304f")},f69a:function(e,t,r){}}]);