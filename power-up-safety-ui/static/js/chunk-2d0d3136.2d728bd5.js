/*!
 *  build: vue-admin-beautiful 
 *  copyright: chuzhixin 1204505056@qq.com 
 *  time: 2021-8-30 16:21:51
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d3136"],{"5ae9":function(a,t,n){"use strict";n.r(t),n.d(t,"judgeValue",(function(){return r})),n.d(t,"judgeValueForStatus",(function(){return e})),n.d(t,"getAxisBorder",(function(){return u})),n.d(t,"getMultipleAxisBorder",(function(){return h}));n("4b92"),n("884f");function r(a){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return"-"===a?t:parseFloat(Math.abs(t-a)).toFixed(2)}function e(a){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return"-"===a||parseInt(a)<0?t:parseInt(Math.abs(t-a))/4}function u(a){for(var t=[],n=[],r=0;r<a.length;r++)n.push(Number(a[r][0])),t.push(Number(a[r][1]));return{xMax:Math.max.apply(Math,n),xMin:Math.min.apply(Math,n),yMax:Math.max.apply(Math,t),yMin:Math.min.apply(Math,t)}}function h(a){for(var t=[],n=[],r=0;r<a.length;r++)for(var e=0;e<a[r].length;e++)n.push(Number(a[r][e][0])),t.push(Number(a[r][e][1]));return{xMax:Math.max.apply(Math,n),xMin:Math.min.apply(Math,n),yMax:Math.max.apply(Math,t),yMin:Math.min.apply(Math,t)}}}}]);