define("canvax/animation/Tween",[],function(){!function(){if("performance"in window==!1&&(window.performance={}),Date.now=Date.now||function(){return(new Date).getTime()},"now"in window.performance==!1){var a=window.performance.timing&&window.performance.timing.navigationStart?window.performance.timing.navigationStart:Date.now();window.performance.now=function(){return Date.now()-a}}}();var a=a||function(){var a=[];return{getAll:function(){return a},removeAll:function(){a=[]},add:function(b){a.push(b)},remove:function(b){var c=a.indexOf(b);-1!==c&&a.splice(c,1)},update:function(b){if(0===a.length)return!1;var c=0;for(b=void 0!==b?b:window.performance.now();c<a.length;)a[c].update(b)?c++:a.splice(c,1);return!0}}}();return a.Tween=function(b){var c=b,d={},e={},f={},g=1e3,h=0,i=!1,j=!1,k=!1,l=0,m=null,n=a.Easing.Linear.None,o=a.Interpolation.Linear,p=[],q=null,r=!1,s=null,t=null,u=null;for(var v in b)d[v]=parseFloat(b[v],10);this.to=function(a,b){return void 0!==b&&(g=b),e=a,this},this.start=function(b){a.add(this),j=!0,r=!1,m=void 0!==b?b:window.performance.now(),m+=l;for(var g in e){if(e[g]instanceof Array){if(0===e[g].length)continue;e[g]=[c[g]].concat(e[g])}d[g]=c[g],d[g]instanceof Array==!1&&(d[g]*=1),f[g]=d[g]||0}return this},this.stop=function(){return j?(a.remove(this),j=!1,null!==u&&u.call(c),this.stopChainedTweens(),this):this},this.stopChainedTweens=function(){for(var a=0,b=p.length;b>a;a++)p[a].stop()},this.delay=function(a){return l=a,this},this.repeat=function(a){return h=a,this},this.yoyo=function(a){return i=a,this},this.easing=function(a){return n=a,this},this.interpolation=function(a){return o=a,this},this.chain=function(){return p=arguments,this},this.onStart=function(a){return q=a,this},this.onUpdate=function(a){return s=a,this},this.onComplete=function(a){return t=a,this},this.onStop=function(a){return u=a,this},this.update=function(a){var b,j,u;if(m>a)return!0;r===!1&&(null!==q&&q.call(c),r=!0),j=(a-m)/g,j=j>1?1:j,u=n(j);for(b in e){var v=d[b]||0,w=e[b];w instanceof Array?c[b]=o(w,u):("string"==typeof w&&(w=v+parseFloat(w,10)),"number"==typeof w&&(c[b]=v+(w-v)*u))}if(null!==s&&s.call(c,u),1===j){if(h>0){isFinite(h)&&h--;for(b in f){if("string"==typeof e[b]&&(f[b]=f[b]+parseFloat(e[b],10)),i){var x=f[b];f[b]=e[b],e[b]=x}d[b]=f[b]}return i&&(k=!k),m=a+l,!0}null!==t&&t.call(c);for(var y=0,z=p.length;z>y;y++)p[y].start(m+g);return!1}return!0}},a.Easing={Linear:{None:function(a){return a}},Quadratic:{In:function(a){return a*a},Out:function(a){return a*(2-a)},InOut:function(a){return(a*=2)<1?.5*a*a:-.5*(--a*(a-2)-1)}},Cubic:{In:function(a){return a*a*a},Out:function(a){return--a*a*a+1},InOut:function(a){return(a*=2)<1?.5*a*a*a:.5*((a-=2)*a*a+2)}},Quartic:{In:function(a){return a*a*a*a},Out:function(a){return 1- --a*a*a*a},InOut:function(a){return(a*=2)<1?.5*a*a*a*a:-.5*((a-=2)*a*a*a-2)}},Quintic:{In:function(a){return a*a*a*a*a},Out:function(a){return--a*a*a*a*a+1},InOut:function(a){return(a*=2)<1?.5*a*a*a*a*a:.5*((a-=2)*a*a*a*a+2)}},Sinusoidal:{In:function(a){return 1-Math.cos(a*Math.PI/2)},Out:function(a){return Math.sin(a*Math.PI/2)},InOut:function(a){return.5*(1-Math.cos(Math.PI*a))}},Exponential:{In:function(a){return 0===a?0:Math.pow(1024,a-1)},Out:function(a){return 1===a?1:1-Math.pow(2,-10*a)},InOut:function(a){return 0===a?0:1===a?1:(a*=2)<1?.5*Math.pow(1024,a-1):.5*(-Math.pow(2,-10*(a-1))+2)}},Circular:{In:function(a){return 1-Math.sqrt(1-a*a)},Out:function(a){return Math.sqrt(1- --a*a)},InOut:function(a){return(a*=2)<1?-.5*(Math.sqrt(1-a*a)-1):.5*(Math.sqrt(1-(a-=2)*a)+1)}},Elastic:{In:function(a){var b,c=.1,d=.4;return 0===a?0:1===a?1:(!c||1>c?(c=1,b=d/4):b=d*Math.asin(1/c)/(2*Math.PI),-(c*Math.pow(2,10*(a-=1))*Math.sin((a-b)*(2*Math.PI)/d)))},Out:function(a){var b,c=.1,d=.4;return 0===a?0:1===a?1:(!c||1>c?(c=1,b=d/4):b=d*Math.asin(1/c)/(2*Math.PI),c*Math.pow(2,-10*a)*Math.sin((a-b)*(2*Math.PI)/d)+1)},InOut:function(a){var b,c=.1,d=.4;return 0===a?0:1===a?1:(!c||1>c?(c=1,b=d/4):b=d*Math.asin(1/c)/(2*Math.PI),(a*=2)<1?-.5*(c*Math.pow(2,10*(a-=1))*Math.sin((a-b)*(2*Math.PI)/d)):c*Math.pow(2,-10*(a-=1))*Math.sin((a-b)*(2*Math.PI)/d)*.5+1)}},Back:{In:function(a){var b=1.70158;return a*a*((b+1)*a-b)},Out:function(a){var b=1.70158;return--a*a*((b+1)*a+b)+1},InOut:function(a){var b=2.5949095;return(a*=2)<1?.5*(a*a*((b+1)*a-b)):.5*((a-=2)*a*((b+1)*a+b)+2)}},Bounce:{In:function(b){return 1-a.Easing.Bounce.Out(1-b)},Out:function(a){return 1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375},InOut:function(b){return.5>b?.5*a.Easing.Bounce.In(2*b):.5*a.Easing.Bounce.Out(2*b-1)+.5}}},a.Interpolation={Linear:function(b,c){var d=b.length-1,e=d*c,f=Math.floor(e),g=a.Interpolation.Utils.Linear;return 0>c?g(b[0],b[1],e):c>1?g(b[d],b[d-1],d-e):g(b[f],b[f+1>d?d:f+1],e-f)},Bezier:function(b,c){for(var d=0,e=b.length-1,f=Math.pow,g=a.Interpolation.Utils.Bernstein,h=0;e>=h;h++)d+=f(1-c,e-h)*f(c,h)*b[h]*g(e,h);return d},CatmullRom:function(b,c){var d=b.length-1,e=d*c,f=Math.floor(e),g=a.Interpolation.Utils.CatmullRom;return b[0]===b[d]?(0>c&&(f=Math.floor(e=d*(1+c))),g(b[(f-1+d)%d],b[f],b[(f+1)%d],b[(f+2)%d],e-f)):0>c?b[0]-(g(b[0],b[0],b[1],b[1],-e)-b[0]):c>1?b[d]-(g(b[d],b[d],b[d-1],b[d-1],e-d)-b[d]):g(b[f?f-1:0],b[f],b[f+1>d?d:f+1],b[f+2>d?d:f+2],e-f)},Utils:{Linear:function(a,b,c){return(b-a)*c+a},Bernstein:function(b,c){var d=a.Interpolation.Utils.Factorial;return d(b)/d(c)/d(b-c)},Factorial:function(){var a=[1];return function(b){var c=1;if(a[b])return a[b];for(var d=b;d>1;d--)c*=d;return a[b]=c,c}}(),CatmullRom:function(a,b,c,d,e){var f=.5*(c-a),g=.5*(d-b),h=e*e,i=e*h;return(2*b-2*c+f+g)*i+(-3*b+3*c-2*f-g)*h+f*e+b}}},a});