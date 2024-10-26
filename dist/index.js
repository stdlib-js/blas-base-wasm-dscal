"use strict";var c=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var y=c(function(F,p){
var W=require("path").resolve,x=require('@stdlib/fs-read-wasm/dist').sync,A=x(W(__dirname,"..","src","main.wasm"));p.exports=A
});var v=c(function(G,h){
var O=require('@stdlib/assert-is-wasm-memory/dist'),q=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),S=require('@stdlib/utils-inherit/dist'),f=require('@stdlib/wasm-module-wrapper/dist'),T=require('@stdlib/error-tools-fmtprodmsg/dist'),B=y();function n(e){if(!(this instanceof n))return new n(e);if(!O(e))throw new TypeError(T('nullH0',e));return f.call(this,B,e,{env:{memory:e}}),this}S(n,f);q(n.prototype,"main",function(r,s,i,t){return this._instance.exports.c_dscal(r,s,i,t),i});q(n.prototype,"ndarray",function(r,s,i,t,o){return this._instance.exports.c_dscal_ndarray(r,s,i,t,o),i});h.exports=n
});var M=c(function(H,w){
var m=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),V=require('@stdlib/utils-inherit/dist'),g=require('@stdlib/strided-base-stride2offset/dist'),j=require('@stdlib/strided-base-read-dataview/dist').ndarray,z=require('@stdlib/wasm-memory/dist'),D=require('@stdlib/wasm-base-arrays2ptrs/dist'),L=require('@stdlib/wasm-base-strided2object/dist'),d=v();function u(){return this instanceof u?(d.call(this,new z({initial:0})),this):new u}V(u,d);m(u.prototype,"main",function(r,s,i,t){return this.ndarray(r,s,i,t,g(r,t))});m(u.prototype,"ndarray",function(r,s,i,t,o){var l,a;return l=D(this,[L(r,i,t,o)]),a=l[0],d.prototype.ndarray.call(this,r,s,a.ptr,a.stride,a.offset),a.copy&&j(r,this.view,a.stride*a.BYTES_PER_ELEMENT,a.ptr,i,t,o,!0),i});w.exports=u
});var R=c(function(I,E){
var P=M(),_=new P;_.initializeSync();E.exports=_
});var Y=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),b=R(),k=v();Y(b,"Module",k);module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
