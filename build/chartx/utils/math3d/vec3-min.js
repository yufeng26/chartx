define("chartx/utils/math3d/vec3",["chartx/utils/math3d/common"],function(a){var b={};return b.create=function(){var b=new a.ARRAY_TYPE(3);return b[0]=0,b[1]=0,b[2]=0,b},b.clone=function(b){var c=new a.ARRAY_TYPE(3);return c[0]=b[0],c[1]=b[1],c[2]=b[2],c},b.fromValues=function(b,c,d){var e=new a.ARRAY_TYPE(3);return e[0]=b,e[1]=c,e[2]=d,e},b.copy=function(a,b){return a[0]=b[0],a[1]=b[1],a[2]=b[2],a},b.set=function(a,b,c,d){return a[0]=b,a[1]=c,a[2]=d,a},b.add=function(a,b,c){return a[0]=b[0]+c[0],a[1]=b[1]+c[1],a[2]=b[2]+c[2],a},b.subtract=function(a,b,c){return a[0]=b[0]-c[0],a[1]=b[1]-c[1],a[2]=b[2]-c[2],a},b.sub=b.subtract,b.multiply=function(a,b,c){return a[0]=b[0]*c[0],a[1]=b[1]*c[1],a[2]=b[2]*c[2],a},b.mul=b.multiply,b.divide=function(a,b,c){return a[0]=b[0]/c[0],a[1]=b[1]/c[1],a[2]=b[2]/c[2],a},b.div=b.divide,b.ceil=function(a,b){return a[0]=Math.ceil(b[0]),a[1]=Math.ceil(b[1]),a[2]=Math.ceil(b[2]),a},b.floor=function(a,b){return a[0]=Math.floor(b[0]),a[1]=Math.floor(b[1]),a[2]=Math.floor(b[2]),a},b.min=function(a,b,c){return a[0]=Math.min(b[0],c[0]),a[1]=Math.min(b[1],c[1]),a[2]=Math.min(b[2],c[2]),a},b.max=function(a,b,c){return a[0]=Math.max(b[0],c[0]),a[1]=Math.max(b[1],c[1]),a[2]=Math.max(b[2],c[2]),a},b.round=function(a,b){return a[0]=Math.round(b[0]),a[1]=Math.round(b[1]),a[2]=Math.round(b[2]),a},b.scale=function(a,b,c){return a[0]=b[0]*c,a[1]=b[1]*c,a[2]=b[2]*c,a},b.scaleAndAdd=function(a,b,c,d){return a[0]=b[0]+c[0]*d,a[1]=b[1]+c[1]*d,a[2]=b[2]+c[2]*d,a},b.distance=function(a,b){var c=b[0]-a[0],d=b[1]-a[1],e=b[2]-a[2];return Math.sqrt(c*c+d*d+e*e)},b.dist=b.distance,b.squaredDistance=function(a,b){var c=b[0]-a[0],d=b[1]-a[1],e=b[2]-a[2];return c*c+d*d+e*e},b.sqrDist=b.squaredDistance,b.length=function(a){var b=a[0],c=a[1],d=a[2];return Math.sqrt(b*b+c*c+d*d)},b.len=b.length,b.squaredLength=function(a){var b=a[0],c=a[1],d=a[2];return b*b+c*c+d*d},b.sqrLen=b.squaredLength,b.negate=function(a,b){return a[0]=-b[0],a[1]=-b[1],a[2]=-b[2],a},b.inverse=function(a,b){return a[0]=1/b[0],a[1]=1/b[1],a[2]=1/b[2],a},b.normalize=function(a,b){var c=b[0],d=b[1],e=b[2],f=c*c+d*d+e*e;return f>0&&(f=1/Math.sqrt(f),a[0]=b[0]*f,a[1]=b[1]*f,a[2]=b[2]*f),a},b.dot=function(a,b){return a[0]*b[0]+a[1]*b[1]+a[2]*b[2]},b.cross=function(a,b,c){var d=b[0],e=b[1],f=b[2],g=c[0],h=c[1],i=c[2];return a[0]=e*i-f*h,a[1]=f*g-d*i,a[2]=d*h-e*g,a},b.lerp=function(a,b,c,d){var e=b[0],f=b[1],g=b[2];return a[0]=e+d*(c[0]-e),a[1]=f+d*(c[1]-f),a[2]=g+d*(c[2]-g),a},b.hermite=function(a,b,c,d,e,f){var g=f*f,h=g*(2*f-3)+1,i=g*(f-2)+f,j=g*(f-1),k=g*(3-2*f);return a[0]=b[0]*h+c[0]*i+d[0]*j+e[0]*k,a[1]=b[1]*h+c[1]*i+d[1]*j+e[1]*k,a[2]=b[2]*h+c[2]*i+d[2]*j+e[2]*k,a},b.bezier=function(a,b,c,d,e,f){var g=1-f,h=g*g,i=f*f,j=h*g,k=3*f*h,l=3*i*g,m=i*f;return a[0]=b[0]*j+c[0]*k+d[0]*l+e[0]*m,a[1]=b[1]*j+c[1]*k+d[1]*l+e[1]*m,a[2]=b[2]*j+c[2]*k+d[2]*l+e[2]*m,a},b.random=function(b,c){c=c||1;var d=2*a.RANDOM()*Math.PI,e=2*a.RANDOM()-1,f=Math.sqrt(1-e*e)*c;return b[0]=Math.cos(d)*f,b[1]=Math.sin(d)*f,b[2]=e*c,b},b.transformMat4=function(a,b,c){var d=b[0],e=b[1],f=b[2],g=c[3]*d+c[7]*e+c[11]*f+c[15];return g=g||1,a[0]=(c[0]*d+c[4]*e+c[8]*f+c[12])/g,a[1]=(c[1]*d+c[5]*e+c[9]*f+c[13])/g,a[2]=(c[2]*d+c[6]*e+c[10]*f+c[14])/g,a},b.transformMat3=function(a,b,c){var d=b[0],e=b[1],f=b[2];return a[0]=d*c[0]+e*c[3]+f*c[6],a[1]=d*c[1]+e*c[4]+f*c[7],a[2]=d*c[2]+e*c[5]+f*c[8],a},b.transformQuat=function(a,b,c){var d=b[0],e=b[1],f=b[2],g=c[0],h=c[1],i=c[2],j=c[3],k=j*d+h*f-i*e,l=j*e+i*d-g*f,m=j*f+g*e-h*d,n=-g*d-h*e-i*f;return a[0]=k*j+n*-g+l*-i-m*-h,a[1]=l*j+n*-h+m*-g-k*-i,a[2]=m*j+n*-i+k*-h-l*-g,a},b.rotateX=function(a,b,c,d){var e=[],f=[];return e[0]=b[0]-c[0],e[1]=b[1]-c[1],e[2]=b[2]-c[2],f[0]=e[0],f[1]=e[1]*Math.cos(d)-e[2]*Math.sin(d),f[2]=e[1]*Math.sin(d)+e[2]*Math.cos(d),a[0]=f[0]+c[0],a[1]=f[1]+c[1],a[2]=f[2]+c[2],a},b.rotateY=function(a,b,c,d){var e=[],f=[];return e[0]=b[0]-c[0],e[1]=b[1]-c[1],e[2]=b[2]-c[2],f[0]=e[2]*Math.sin(d)+e[0]*Math.cos(d),f[1]=e[1],f[2]=e[2]*Math.cos(d)-e[0]*Math.sin(d),a[0]=f[0]+c[0],a[1]=f[1]+c[1],a[2]=f[2]+c[2],a},b.rotateZ=function(a,b,c,d){var e=[],f=[];return e[0]=b[0]-c[0],e[1]=b[1]-c[1],e[2]=b[2]-c[2],f[0]=e[0]*Math.cos(d)-e[1]*Math.sin(d),f[1]=e[0]*Math.sin(d)+e[1]*Math.cos(d),f[2]=e[2],a[0]=f[0]+c[0],a[1]=f[1]+c[1],a[2]=f[2]+c[2],a},b.forEach=function(){var a=b.create();return function(b,c,d,e,f,g){var h,i;for(c||(c=3),d||(d=0),i=e?Math.min(e*c+d,b.length):b.length,h=d;h<i;h+=c)a[0]=b[h],a[1]=b[h+1],a[2]=b[h+2],f(a,a,g),b[h]=a[0],b[h+1]=a[1],b[h+2]=a[2];return b}}(),b.angle=function(a,c){var d=b.fromValues(a[0],a[1],a[2]),e=b.fromValues(c[0],c[1],c[2]);b.normalize(d,d),b.normalize(e,e);var f=b.dot(d,e);return f>1?0:Math.acos(f)},b.str=function(a){return"vec3("+a[0]+", "+a[1]+", "+a[2]+")"},b.exactEquals=function(a,b){return a[0]===b[0]&&a[1]===b[1]&&a[2]===b[2]},b.equals=function(b,c){var d=b[0],e=b[1],f=b[2],g=c[0],h=c[1],i=c[2];return Math.abs(d-g)<=a.EPSILON*Math.max(1,Math.abs(d),Math.abs(g))&&Math.abs(e-h)<=a.EPSILON*Math.max(1,Math.abs(e),Math.abs(h))&&Math.abs(f-i)<=a.EPSILON*Math.max(1,Math.abs(f),Math.abs(i))},b});