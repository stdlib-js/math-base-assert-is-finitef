// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var r=Object.prototype.toString;var n=Object.prototype.hasOwnProperty;var o,e="function"==typeof Symbol?Symbol:void 0,a="function"==typeof e?e.toStringTag:"";o=t&&"symbol"==typeof Symbol.toStringTag?function(t){var o,e,f,y,i;if(null==t)return r.call(t);e=t[a],i=a,o=null!=(y=t)&&n.call(y,i);try{t[a]=void 0}catch(n){return r.call(t)}return f=r.call(t),o?t[a]=e:delete t[a],f}:function(t){return r.call(t)};var f=o,y="function"==typeof Float32Array;var i=Number.POSITIVE_INFINITY,l="function"==typeof Float32Array?Float32Array:null;var c="function"==typeof Float32Array?Float32Array:void 0;var u=function(){var t,r,n;if("function"!=typeof l)return!1;try{r=new l([1,3.14,-3.14,5e40]),n=r,t=(y&&n instanceof Float32Array||"[object Float32Array]"===f(n))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===i}catch(r){t=!1}return t}()?c:function(){throw new Error("not implemented")},p="function"==typeof Uint32Array;var v="function"==typeof Uint32Array?Uint32Array:null;var b="function"==typeof Uint32Array?Uint32Array:void 0;var A=function(){var t,r,n;if("function"!=typeof v)return!1;try{r=new v(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,t=(p&&n instanceof Uint32Array||"[object Uint32Array]"===f(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?b:function(){throw new Error("not implemented")},m=new u(1);new A(m.buffer)[0]=2139095040;var w=m[0],S=new u(1);new A(S.buffer)[0]=4286578688;var d=S[0];function F(t){return t==t&&t>d&&t<w}export{F as default};
//# sourceMappingURL=mod.js.map