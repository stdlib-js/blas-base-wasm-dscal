"use strict";var c=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var q=c(function(F,y){
var R=require("path").resolve,W=require('@stdlib/fs-read-wasm/dist').sync,x=W(R(__dirname,"..","src","main.wasm"));y.exports=x
});var l=c(function(G,m){
var A=require('@stdlib/assert-is-wasm-memory/dist'),f=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),O=require('@stdlib/utils-inherit/dist'),h=require('@stdlib/wasm-module-wrapper/dist'),S=require('@stdlib/error-tools-fmtprodmsg/dist'),T=q();function n(e){if(!(this instanceof n))return new n(e);if(!A(e))throw new TypeError(S('26jH0',e));return h.call(this,T,e,{env:{memory:e}}),this}O(n,h);f(n.prototype,"main",function(r,s,i,t){return this._instance.exports.c_dscal(r,s,i,t),i});f(n.prototype,"ndarray",function(r,s,i,t,o){return this._instance.exports.c_dscal_ndarray(r,s,i,t,o),i});m.exports=n
});var _=c(function(H,M){
var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),B=require('@stdlib/utils-inherit/dist'),V=require('@stdlib/strided-base-stride2offset/dist'),g=require('@stdlib/strided-base-read-dataview/dist').ndarray,j=require('@stdlib/wasm-memory/dist'),z=require('@stdlib/wasm-base-arrays2ptrs/dist'),D=require('@stdlib/wasm-base-strided2object/dist'),d=l();function u(){return this instanceof u?(d.call(this,new j({initial:0})),this):new u}B(u,d);w(u.prototype,"main",function(r,s,i,t){return this.ndarray(r,s,i,t,V(r,t))});w(u.prototype,"ndarray",function(r,s,i,t,o){var p,a;return p=z(this,[D(r,i,t,o)]),a=p[0],d.prototype.ndarray.call(this,r,s,a.ptr,a.stride,a.offset),a.copy&&g(r,this.view,a.stride*a.BYTES_PER_ELEMENT,a.ptr,i,t,o,!0),i});M.exports=u
});var E=c(function(I,b){
var L=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),P=_(),Y=l(),v=new P;v.initializeSync();L(v,"Module",Y.bind(null));b.exports=v
});var k=E();module.exports=k;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
