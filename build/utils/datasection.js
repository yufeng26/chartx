define("utils/datasection",["canvax"],function(a,t,r){"use strict";t.__esModule=!0;var n=a("canvax").default._;function e(a){return parseFloat(a.toPrecision(14))}var o={section:function(a,t,r){return n.uniq(function(a,t,r){a=n.without(a,void 0,null,"");var o=r&&r.scale?parseFloat(r.scale):1,i=r&&r.isInt?1:0;isNaN(o)&&(o=1);var u=n.max(a),l=u;u*=o;var c=n.min(a);if(c==u)return u>0?[c=0,u]:u<0?[u,0]:[0,u=1];var f=u-c;if(f){var s=c;(c-=.05*f)<0&&s>=0&&(c=0),u+=.05*f}var v=.3*(u-c);v=function(a,t){var r,n=[1,2,5,10];r=a/t;for(var e=0;e<n.length&&(a=n[e],!(r<=(n[e]+(n[e+1]||n[e]))/2));e++);return a*=t}(v,Math.pow(10,Math.floor(Math.log(v)/Math.LN10))),i&&(v=Math.ceil(v));var h,M,d=e(Math.floor(c/v)*v),p=e(Math.ceil(u/v)*v),g=[];for(h=d;h<=p&&(g.push(h),(h=e(h+v))!==M);)M=h;return g.length>=3&&g[g.length-2]>=l&&g.pop(),g}(a,0,r))}};t.default=o});