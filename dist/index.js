"use strict";var c=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var q=c(function(F,y){
var R=require("path").resolve,W=require('@stdlib/fs-read-wasm/dist').sync,x=W(R(__dirname,"..","src","main.wasm"));y.exports=x
});var l=c(function(G,m){
var A=require('@stdlib/assert-is-wasm-memory/dist'),f=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),O=require('@stdlib/utils-inherit/dist'),h=require('@stdlib/wasm-module-wrapper/dist'),S=require('@stdlib/error-tools-fmtprodmsg/dist'),T=q();function n(e){if(!(this instanceof n))return new n(e);if(!A(e))throw new TypeError(S('26jH0',e));return h.call(this,T,e,{env:{memory:e}}),this}O(n,h);f(n.prototype,"main",function(r,t,i,a){return this._instance.exports.c_dscal(r,t,i,a),i});f(n.prototype,"ndarray",function(r,t,i,a,o){return this._instance.exports.c_dscal_ndarray(r,t,i,a,o),i});m.exports=n
});var _=c(function(H,M){
var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),B=require('@stdlib/utils-inherit/dist'),V=require('@stdlib/strided-base-stride2offset/dist'),g=require('@stdlib/strided-base-read-dataview/dist').ndarray,j=require('@stdlib/wasm-memory/dist'),z=require('@stdlib/wasm-base-arrays2ptrs/dist'),D=require('@stdlib/wasm-base-strided2object/dist'),d=l();function u(){return this instanceof u?(d.call(this,new j({initial:0})),this):new u}B(u,d);w(u.prototype,"main",function(r,t,i,a){return this.ndarray(r,t,i,a,V(r,a))});w(u.prototype,"ndarray",function(r,t,i,a,o){var p,s;return p=z(this,[D(r,i,a,o)]),s=p[0],d.prototype.ndarray.call(this,r,t,s.ptr,s.stride,s.offset),s.copy&&g(r,this.view,s.stride*s.BYTES_PER_ELEMENT,s.ptr,i,a,o,!0),i});M.exports=u
});var E=c(function(I,b){
var L=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),P=_(),Y=l(),v=new P;v.initializeSync();L(v,"Module",Y.bind(null));b.exports=v
});var k=E();module.exports=k;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
