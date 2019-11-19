"use strict";!function(r,n){if("function"==typeof define&&define.amd)define(["exports"],n);else if("undefined"!=typeof exports)n(exports);else{var e={};n(e),(void 0).undefined=e}}(0,function(r){Object.defineProperty(r,"__esModule",{value:!0}),r.intersectionArea=function(n,r){var e,t=function(r){for(var n=[],e=0;e<r.length;++e)for(var t=e+1;t<r.length;++t)for(var a=C(r[e],r[t]),i=0;i<a.length;++i){var u=a[i];u.parentIndex=[e,t],n.push(u)}return n}(n),a=t.filter(function(r){return A(r,n)}),i=0,u=0,s=[];if(1<a.length){var f=O(a);for(e=0;e<a.length;++e){var o=a[e];o.angle=Math.atan2(o.x-f.x,o.y-f.y)}a.sort(function(r,n){return n.angle-r.angle});var x=a[a.length-1];for(e=0;e<a.length;++e){var d=a[e];u+=(x.x+d.x)*(d.y-x.y);for(var l={x:(d.x+x.x)/2,y:(d.y+x.y)/2},c=null,h=0;h<d.parentIndex.length;++h)if(-1<x.parentIndex.indexOf(d.parentIndex[h])){var y=n[d.parentIndex[h]],v=Math.atan2(d.x-y.x,d.y-y.y),p=Math.atan2(x.x-y.x,x.y-y.y),g=p-v;g<0&&(g+=2*Math.PI);var M=p-g/2,I=q(l,{x:y.x+y.radius*Math.sin(M),y:y.y+y.radius*Math.cos(M)});I>2*y.radius&&(I=2*y.radius),(null===c||c.width>I)&&(c={circle:y,width:I,p1:d,p2:x})}null!==c&&(s.push(c),i+=m(c.circle.radius,c.width),x=d)}}else{var P=n[0];for(e=1;e<n.length;++e)n[e].radius<P.radius&&(P=n[e]);var b=!1;for(e=0;e<n.length;++e)if(q(n[e],P)>Math.abs(P.radius-n[e].radius)){b=!0;break}b?i=u=0:(i=P.radius*P.radius*Math.PI,s.push({circle:P,p1:{x:P.x,y:P.y+P.radius},p2:{x:P.x-w,y:P.y+P.radius},width:2*P.radius}))}u/=2,r&&(r.area=i+u,r.arcArea=i,r.polygonArea=u,r.arcs=s,r.innerPoints=a,r.intersectionPoints=t);return i+u},r.containedInCircles=A,r.circleArea=m,r.distance=q,r.circleOverlap=function(r,n,e){if(r+n<=e)return 0;if(e<=Math.abs(r-n))return Math.PI*Math.min(r,n)*Math.min(r,n);var t=n-(e*e-r*r+n*n)/(2*e);return m(r,r-(e*e-n*n+r*r)/(2*e))+m(n,t)},r.circleCircleIntersection=C,r.getCenter=O;var w=1e-10;function A(r,n){for(var e=0;e<n.length;++e)if(q(r,n[e])>n[e].radius+w)return!1;return!0}function m(r,n){return r*r*Math.acos(1-n/r)-(r-n)*Math.sqrt(n*(2*r-n))}function q(r,n){return Math.sqrt((r.x-n.x)*(r.x-n.x)+(r.y-n.y)*(r.y-n.y))}function C(r,n){var e=q(r,n),t=r.radius,a=n.radius;if(t+a<=e||e<=Math.abs(t-a))return[];var i=(t*t-a*a+e*e)/(2*e),u=Math.sqrt(t*t-i*i),s=r.x+i*(n.x-r.x)/e,f=r.y+i*(n.y-r.y)/e,o=-(n.y-r.y)*(u/e),x=-(n.x-r.x)*(u/e);return[{x:s+o,y:f-x},{x:s-o,y:f+x}]}function O(r){for(var n={x:0,y:0},e=0;e<r.length;++e)n.x+=r[e].x,n.y+=r[e].y;return n.x/=r.length,n.y/=r.length,n}});