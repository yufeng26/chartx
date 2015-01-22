define("chartx/chart/planet/index",["chartx/chart/index","chartx/utils/tools","chartx/utils/gradient-color","chartx/utils/datasection","chartx/utils/dataformat","chartx/components/planet/Graphs","./tips","chartx/utils/deep-extend"],function(a,b,c,d,e,f){var g=a.Canvax;return a.extend({init:function(a,b,c){this.event={This:this,enabled:1,onClick:this._click},this.cx="",this.cy="",this.initCX=60,this.ringDis=10,this.dataFrame={org:b,orgData:[],data:[],back:{rings:0,ringAg:0,rdata:[],data:[]},graphs:{data:[],maxR:0,baseR:0,rdata:[],maxRdata:[],maxYdata:[]}},this.graphs={core:{r:{normal:60},fillStyle:{normal:"#ff0000"},text:{content:"\u54c1\u724c",place:"center"}},fillStyle:{dNormals:[],normals:"",overs:["#ff0000","#ff9900","#ffff00","#009900","#00ff00","#0000ff","#660099"]}},this.back={space:150,strokeStyle:{normals:["#ff0000","#ff9900","#ffff00","#009900","#00ff00","#0000ff","#660099","#ff0000","#ff9900","#ffff00","#009900","#00ff00","#0000ff","#660099","#ff0000","#ff9900","#ffff00","#009900","#00ff00","#0000ff","#660099","#ff0000","#ff9900","#ffff00","#009900","#00ff00","#0000ff","#660099","#ff0000","#ff9900","#ffff00","#009900","#00ff00","#0000ff","#660099","#ff0000","#ff9900","#ffff00","#009900","#00ff00","#0000ff","#660099"],overs:["#ff0000","#ff9900","#ffff00","#009900","#00ff00","#0000ff","#660099"]}},this._back=null,this._graphs=null,this._tips=null,_.deepExtend(this,c),_.deepExtend(this.dataFrame,this._initData(b,c)),this.cx=""!=this.cx?this.cx:this.initCX,this.cy=""!=this.cy?this.cy:parseInt(this.height/2),this._trimData()},draw:function(){this.stageTip=new g.Display.Sprite({id:"tip"}),this.stageCore=new g.Display.Sprite({id:"core"}),this.stageBg=new g.Display.Sprite({id:"bg"}),this.stage.addChild(this.stageBg),this.stage.addChild(this.stageCore),this.stage.addChild(this.stageTip),this.rotate&&this._rotate(this.rotate),this._initModule(),this._startDraw(),this._drawEnd(),this._arguments=arguments},_initData:e,_initModule:function(){this._back=new f(this.back,this),this._graphs=new f(this.graphs,this)},_trimData:function(){for(var a=this,d=a.dataFrame.org,e=[],f=a._getDataFromOrg(a.xAxis.field),g=0,h=d.length;h>g;g++){var i=f[g];i&&(e[i]?-1:e[i]=[],e[i].push(d[g+1]))}a.dataFrame.orgData=e;for(var j=[],k=a.dataFrame.xAxis.org[0],g=0,h=k.length;h>g;g++){j[k[g]]?-1:j[k[g]]=[];var l={x:a.cx,y:a.cy,r:{normal:125*(g+1)},fillStyle:{normal:""},lineWidth:{normal:2},strokeStyle:{normal:a.back.strokeStyle.normals[k[g]-1]}};j[k[g]].length<1&&j[k[g]].push(l)}j[0]||(j.shift(),a.dataFrame.back.rings=j.length),a.dataFrame.back.data=b.getChildsArr(j),a.dataFrame.back.ringAg=a._getBackRingAverage();for(var j=a.dataFrame.back.data,m=[],n=a.dataFrame.back.ringAg,g=0,h=j.length;h>g;g++)m[g]=a.graphs.core.r.normal+n*(g+1);a.dataFrame.back.rdata=m;for(var o=0,g=0,h=j.length;h>g;g++){var l=j[g];l.r={normal:m[g]},0!=g&&((g-o)*n>a.back.space?o=g:l.enabled=0)}a.graphs.fillStyle.normals=new c("#ff0000","#ffffff",a.dataFrame.back.rings),a.dataFrame.graphs.maxR=a._getPlanetMaxR(),a.dataFrame.graphs.baseR=.3*a.dataFrame.graphs.maxR;for(var p=a._getDataFromOrg(a.graphs.size.field),q=b.getArrScalesAtArr(p,b.getMaxAtArr(_.clone(p))),m=[],g=0,h=q.length;h>g;g++){var r=q[g],s=a.dataFrame.graphs.baseR+(a.dataFrame.graphs.maxR-a.dataFrame.graphs.baseR)*r;s=Math.round(s),m.push(s)}a.dataFrame.graphs.rdata=m;for(var t=[],u=[],g=0,h=k.length;h>g;g++){t[k[g]]?-1:t[k[g]]=[];var s=m[g],v=a._getDataFromOrg(a.graphs.info.field,g)[a.graphs.info.content],l={x:100*g,y:100,r:{normal:s},fillStyle:{normal:a.graphs.fillStyle.normals[k[g]-1]},text:{content:v}};if(t[k[g]].push(l),u[k[g]]?-1:u[k[g]]=[],u[k[g]].push(s),u[k[g]].length>1){var w=b.getMaxAtArr(u[k[g]]);u[k[g]]=[w]}}if(!t[0]){t[0]=[];var l={x:a.cx,y:a.cy,r:{normal:a.graphs.core.r.normal},fillStyle:{normal:a.graphs.core.fillStyle.normal},text:a.graphs.core.text,event:{enabled:0}};t[0].unshift(l),u.shift()}a.dataFrame.graphs.data=t,a.dataFrame.graphs.maxRdata=b.getChildsArr(u);for(var x=[],m=a.dataFrame.back.rdata,u=a.dataFrame.graphs.maxRdata,g=0,h=m.length;h>g;g++){var s=2*m[g]>a.height?a.height:m[g];s=2*s<a.height?2*s:s;var y=s-2*u[g]-4;x.push(y)}a.dataFrame.graphs.maxYData=x;for(var p=a._getDataFromOrg(a.yAxis.field),z=b.getArrMergerNumber(p)/p.length,A=[],B=0,C=[],g=0,h=k.length;h>g;g++){var i=k[g]-1,D=p[g],E=a.cy+(z-D)/z*(x[i]/2);D>2*z&&(B=D-z>B?D-z:B),D>z&&(C[g]=1),A[g]={y:E}}for(var g=0,h=C.length;h>g;g++){var F=C[g],i=k[g]-1,D=p[g];F&&0!=B&&(A[g].y=a.cy-(D-z)/B*(x[i]/2))}for(var g=0,h=A.length;h>g;g++){var l=A[g],i=k[g]-1,s=a.dataFrame.back.rdata[i],G=l.y-a.cy;l.x=a.cx+a._getDisForRH(s,G)}for(var H=-1,g=0,h=t.length;h>g;g++)for(var F=0,I=t[g].length;I>F;F++){var l=t[g][F];g>0&&(H++,l.x=A[H].x,l.y=A[H].y)}for(var g=1,h=t.length;h>g;g++)for(var F=0,I=t[g].length;I>F;F++){var l=t[g][F];l.ringID=g,l.ID=F+1,l.orgData=a.dataFrame.orgData[g][F],l.fillStyle={normal:a._getGraphsFillStyle(l)}}},_startDraw:function(){var a=this;a._back.draw({w:a.width,h:a.height,data:a.dataFrame.back.data,event:{enabled:0}}),a._graphs.draw({w:a.width,h:a.height,data:a.dataFrame.graphs.data,event:{enabled:1}})},_drawEnd:function(){this.stageBg.addChild(this._back.sprite),this.stageCore.addChild(this._graphs.sprite)},_getDataFromOrg:function(a,b){for(var c=this,d=c.dataFrame.data,e=0,f=d.length;f>e;e++){var g=d[e];if(g.field==a){if(isNaN(b))return g.data;if(g.data[b])return g.data[b]}}},_getPlanetMaxR:function(){var a=this,b=0;return b=parseInt((a.dataFrame.back.ringAg-a.ringDis)/2)},_getBackRingAverage:function(){var a=this;return parseInt((a.width-a.initCX-a.graphs.core.r.normal)/(a.dataFrame.back.rings+.5))},_getDisForRH:function(a,b){return Math.sin(Math.acos(b/a))*a},_click:function(a){var b=this.This;0!=a.ringID&&(a.orgData=b._getOrgData(a.ringID,a.ID)),this.on(a)},_getOrgData:function(a,b){var c=this,d=c.dataFrame.orgData;return d[a][b-1]},_getGraphsFillStyle:function(a){var b=this,c="";return _.isArray(b.graphs.fillStyle.normals)&&(c=b.graphs.fillStyle.normals[a.ringID-1]),_.isFunction(b.graphs.fillStyle.normals)&&(c=b.graphs.fillStyle.normals(a)),c&&""!=c||(c=b.graphs.fillStyle.dNormals[a.ringID-1]),c}})});