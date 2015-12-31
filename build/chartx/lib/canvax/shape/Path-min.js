define("canvax/shape/Path",["canvax/display/Shape","canvax/core/Base","canvax/geom/Matrix","canvax/geom/bezier"],function(a,b,c,d){var e=function(a){var c=this;c.type="path",a=b.checkOpt(a),"drawTypeOnly"in a&&(c.drawTypeOnly=a.drawTypeOnly),c.__parsePathData=null;var d={pointList:[],path:a.context.path||""};c._context=_.deepExtend(d,c._context||{}),arguments.callee.superclass.constructor.apply(c,arguments)};return b.creatClass(e,a,{$watch:function(a,b,c){"path"==a&&(this.__parsePathData=null,this.context.pointList=[])},_parsePathData:function(a){if(this.__parsePathData)return this.__parsePathData;if(!a)return[];this.__parsePathData=[];var b=_.compact(a.replace(/[Mm]/g,"\\r$&").split("\\r")),c=this;return _.each(b,function(a){c.__parsePathData.push(c._parseChildPathData(a))}),this.__parsePathData},_parseChildPathData:function(a){var b=a,c=["m","M","l","L","v","V","h","H","z","Z","c","C","q","Q","t","T","s","S","a","A"];b=b.replace(/  /g," "),b=b.replace(/ /g,","),b=b.replace(/(\d)-/g,"$1,-"),b=b.replace(/,,/g,",");var d;for(d=0;d<c.length;d++)b=b.replace(new RegExp(c[d],"g"),"|"+c[d]);var e=b.split("|"),f=[],g=0,h=0;for(d=1;d<e.length;d++){var i=e[d],j=i.charAt(0);i=i.slice(1),i=i.replace(new RegExp("e,-","g"),"e-");var k=i.split(",");k.length>0&&""===k[0]&&k.shift();for(var l=0;l<k.length;l++)k[l]=parseFloat(k[l]);for(;k.length>0&&!isNaN(k[0]);){var m,n,o,p,q,r,s,t,u=null,v=[],w=g,x=h;switch(j){case"l":g+=k.shift(),h+=k.shift(),u="L",v.push(g,h);break;case"L":g=k.shift(),h=k.shift(),v.push(g,h);break;case"m":g+=k.shift(),h+=k.shift(),u="M",v.push(g,h),j="l";break;case"M":g=k.shift(),h=k.shift(),u="M",v.push(g,h),j="L";break;case"h":g+=k.shift(),u="L",v.push(g,h);break;case"H":g=k.shift(),u="L",v.push(g,h);break;case"v":h+=k.shift(),u="L",v.push(g,h);break;case"V":h=k.shift(),u="L",v.push(g,h);break;case"C":v.push(k.shift(),k.shift(),k.shift(),k.shift()),g=k.shift(),h=k.shift(),v.push(g,h);break;case"c":v.push(g+k.shift(),h+k.shift(),g+k.shift(),h+k.shift()),g+=k.shift(),h+=k.shift(),u="C",v.push(g,h);break;case"S":m=g,n=h,o=f[f.length-1],"C"===o.command&&(m=g+(g-o.points[2]),n=h+(h-o.points[3])),v.push(m,n,k.shift(),k.shift()),g=k.shift(),h=k.shift(),u="C",v.push(g,h);break;case"s":m=g,n=h,o=f[f.length-1],"C"===o.command&&(m=g+(g-o.points[2]),n=h+(h-o.points[3])),v.push(m,n,g+k.shift(),h+k.shift()),g+=k.shift(),h+=k.shift(),u="C",v.push(g,h);break;case"Q":v.push(k.shift(),k.shift()),g=k.shift(),h=k.shift(),v.push(g,h);break;case"q":v.push(g+k.shift(),h+k.shift()),g+=k.shift(),h+=k.shift(),u="Q",v.push(g,h);break;case"T":m=g,n=h,o=f[f.length-1],"Q"===o.command&&(m=g+(g-o.points[0]),n=h+(h-o.points[1])),g=k.shift(),h=k.shift(),u="Q",v.push(m,n,g,h);break;case"t":m=g,n=h,o=f[f.length-1],"Q"===o.command&&(m=g+(g-o.points[0]),n=h+(h-o.points[1])),g+=k.shift(),h+=k.shift(),u="Q",v.push(m,n,g,h);break;case"A":p=k.shift(),q=k.shift(),r=k.shift(),s=k.shift(),t=k.shift(),w=g,x=h,g=k.shift(),h=k.shift(),u="A",v=this._convertPoint(w,x,g,h,s,t,p,q,r);break;case"a":p=k.shift(),q=k.shift(),r=k.shift(),s=k.shift(),t=k.shift(),w=g,x=h,g+=k.shift(),h+=k.shift(),u="A",v=this._convertPoint(w,x,g,h,s,t,p,q,r)}f.push({command:u||j,points:v})}("z"===j||"Z"===j)&&f.push({command:"z",points:[]})}return f},_convertPoint:function(a,b,c,d,e,f,g,h,i){var j=i*(Math.PI/180),k=Math.cos(j)*(a-c)/2+Math.sin(j)*(b-d)/2,l=-1*Math.sin(j)*(a-c)/2+Math.cos(j)*(b-d)/2,m=k*k/(g*g)+l*l/(h*h);m>1&&(g*=Math.sqrt(m),h*=Math.sqrt(m));var n=Math.sqrt((g*g*(h*h)-g*g*(l*l)-h*h*(k*k))/(g*g*(l*l)+h*h*(k*k)));e===f&&(n*=-1),isNaN(n)&&(n=0);var o=n*g*l/h,p=n*-h*k/g,q=(a+c)/2+Math.cos(j)*o-Math.sin(j)*p,r=(b+d)/2+Math.sin(j)*o+Math.cos(j)*p,s=function(a){return Math.sqrt(a[0]*a[0]+a[1]*a[1])},t=function(a,b){return(a[0]*b[0]+a[1]*b[1])/(s(a)*s(b))},u=function(a,b){return(a[0]*b[1]<a[1]*b[0]?-1:1)*Math.acos(t(a,b))},v=u([1,0],[(k-o)/g,(l-p)/h]),w=[(k-o)/g,(l-p)/h],x=[(-1*k-o)/g,(-1*l-p)/h],y=u(w,x);return t(w,x)<=-1&&(y=Math.PI),t(w,x)>=1&&(y=0),0===f&&y>0&&(y-=2*Math.PI),1===f&&0>y&&(y+=2*Math.PI),[q,r,g,h,v,y,j,f]},_getBezierPoints:function(a){var b=Math.abs(Math.sqrt(Math.pow(a.slice(-1)[0]-a[1],2)+Math.pow(a.slice(-2,-1)[0]-a[0],2)));b=Math.ceil(b/5);for(var c=[],e=0;b>=e;e++){var f=e/b,g=d.getPointByTime(f,a);c.push(g.x),c.push(g.y)}return c},_getArcPoints:function(a){var b=a[0],d=a[1],e=a[2],f=a[3],g=a[4],h=a[5],i=a[6],j=a[7],k=e>f?e:f,l=e>f?1:e/f,m=e>f?f/e:1,n=new c;n.identity(),n.scale(l,m),n.rotate(i),n.translate(b,d);var o=[],p=(360-(j?-1:1)*h*180/Math.PI)%360;p=Math.ceil(Math.min(180*Math.abs(h)/Math.PI,k*Math.abs(h)/8));for(var q=0;p>=q;q++){var r=[Math.cos(g+h/p*q)*k,Math.sin(g+h/p*q)*k];r=n.mulVector(r),o.push(r[0]),o.push(r[1])}return o},draw:function(a,b){this._draw(a,b)},_draw:function(a,b){var d=b.path,e=this._parsePathData(d);this._setPointList(e,b);for(var f=0,g=e.length;g>f;f++)for(var h=0,i=e[f].length;i>h;h++){var j=e[f][h].command,k=e[f][h].points;switch(j){case"L":a.lineTo(k[0],k[1]);break;case"M":a.moveTo(k[0],k[1]);break;case"C":a.bezierCurveTo(k[0],k[1],k[2],k[3],k[4],k[5]);break;case"Q":a.quadraticCurveTo(k[0],k[1],k[2],k[3]);break;case"A":var l=k[0],m=k[1],n=k[2],o=k[3],p=k[4],q=k[5],r=k[6],s=k[7],t=n>o?n:o,u=n>o?1:n/o,v=n>o?o/n:1,w=new c;w.identity(),w.scale(u,v),w.rotate(r),w.translate(l,m),a.transform.apply(a,w.toArray()),a.arc(0,0,t,p,p+q,1-s),a.transform.apply(a,w.invert().toArray());break;case"z":a.closePath()}}return this},_setPointList:function(a,b){if(!(b.pointList.length>0))for(var c=b.pointList=[],d=0,e=a.length;e>d;d++){for(var f=[],g=0,h=a[d].length;h>g;g++){var i=a[d][g].points,j=a[d][g].command;if("A"==j.toUpperCase()&&(i=this._getArcPoints(i),a[d][g]._points=i),"C"==j.toUpperCase()||"Q"==j.toUpperCase()){var k=[0,0];if(f.length>0)k=f.slice(-1)[0];else if(g>0){var l=a[d][g-1]._points||a[d][g-1].points;l.length>=2&&(k=l.slice(-2))}i=this._getBezierPoints(k.concat(i)),a[d][g]._points=i}for(var m=0,n=i.length;n>m;m+=2){var o=i[m],p=i[m+1];!o&&0!=o||!p&&0!=p||f.push([o,p])}}f.length>0&&c.push(f)}},getRect:function(a){var b,a=a?a:this.context;b=a.strokeStyle||a.fillStyle?a.lineWidth||1:0;var c=Number.MAX_VALUE,d=Number.MIN_VALUE,e=Number.MAX_VALUE,f=Number.MIN_VALUE,g=0,h=0,i=this._parsePathData(a.path);this._setPointList(i,a);for(var j=0,k=i.length;k>j;j++)for(var l=0;l<i[j].length;l++)for(var m=i[j][l]._points||i[j][l].points,n=0;n<m.length;n++)n%2===0?(m[n]+g<c&&(c=m[n]+g),m[n]+g>d&&(d=m[n]+g)):(m[n]+h<e&&(e=m[n]+h),m[n]+h>f&&(f=m[n]+h));var o;return o=c===Number.MAX_VALUE||d===Number.MIN_VALUE||e===Number.MAX_VALUE||f===Number.MIN_VALUE?{x:0,y:0,width:0,height:0}:{x:Math.round(c-b/2),y:Math.round(e-b/2),width:d-c+b,height:f-e+b}}}),e});