!function(n){function t(o){if(e[o])return e[o].exports;var c=e[o]={i:o,l:!1,exports:{}};return n[o].call(c.exports,c,c.exports,t),c.l=!0,c.exports}var e={};return t.m=n,t.c=e,t.i=function(n){return n},t.d=function(n,t,e){Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:e})},t.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},t.p="",t(t.s=0)}([function(n,t){angular.module("mainCtrl",[]).controller("mainController",["$scope","$http","Comment",function(n,t,e){n.commentData={},n.loading=!0,e.get().success(function(t){n.comments=t,n.loading=!1}),n.submitComment=function(){n.loading=!0,e.save(n.commentData).success(function(t){e.get().success(function(t){n.comments=t,n.loading=!1})}).error(function(n){})},n.deleteComment=function(t){n.loading=!0,e.destroy(t).success(function(t){e.get().success(function(t){n.comments=t,n.loading=!1})})}}])}]);