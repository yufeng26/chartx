define("chartx/chart/bar/graphs",["canvax/index","canvax/shape/Rect","canvax/animation/Tween","chartx/utils/tools","chartx/chart/theme"],function(a,b,c,d,e){var f=function(a,b){this.w=0,this.h=0,this.root=b,this.pos={x:0,y:0},this._colors=e.colors,this.bar={width:22,radius:4},this.text={enabled:0,fillStyle:"#999",fontSize:12,format:null},this.sort=null,this.eventEnabled=!0,this.sprite=null,this.txtsSp=null,this.yDataSectionLen=0,_.deepExtend(this,a),this.init()};return f.prototype={init:function(){this.sprite=new a.Display.Sprite({id:"graphsEl"}),this.txtsSp=new a.Display.Sprite({id:"txtsSp",context:{visible:!1}})},setX:function(a){this.sprite.context.x=a},setY:function(a){this.sprite.context.y=a},_getColor:function(a,b,c,d,e,f,g,h){var i=null;if(_.isString(a)&&(i=a),_.isArray(a)){var j=a[d];_.isArray(j)||(j=[j]),i=j[f]}return _.isFunction(a)&&(i=a({iGroup:d,iNode:e,iLay:f,field:h,value:g})),i&&""!=i||(i=this._colors[c>1?f+d*b%(c*(d+1)):d]),i},checkBarW:function(a){this.bar.width>=a&&(this.bar.width=a-1>1?a-1:1)},draw:function(c,e){if(_.deepExtend(this,e),0!=c.length){this.data=c;var f=this,g=c.length;_.each(c,function(c,e){var i=c.length;if(0!=i){var j=c[0].length;for(h=0;h<j;h++){var k;if(0==e){k=new a.Display.Sprite({id:"barGroup_"+h}),f.sprite.addChild(k);var l=f.w/j,m=new b({id:"bhr_"+h,pointChkPriority:!1,context:{x:l*h,y:-f.h,width:l,height:f.h,fillStyle:"#ccc",globalAlpha:0}});k.addChild(m),m.hover(function(a){this.context.globalAlpha=.1},function(a){this.context.globalAlpha=0}),m.iGroup=h,m.iNode=-1,m.iLay=-1,m.on("panstart mouseover mousemove mouseout click",function(a){a.eventInfo=f._getInfoHandler(this,a)})}else k=f.sprite.getChildById("barGroup_"+h);for(v=0;v<i;v++){var n=c[v][h];n.iGroup=h,n.iNode=e,n.iLay=v;var o=parseInt(Math.abs(n.y));v>0&&(o-=parseInt(Math.abs(c[v-1][h].y)));var p=parseInt(n.y),q=f._getColor(f.bar.fillStyle,g,i,e,h,v,n.value,n.field),r={x:Math.round(n.x-f.bar.width/2),y:p,width:parseInt(f.bar.width),height:o,fillStyle:q};if(f.bar.radius&&v==i-1){var s=Math.min(f.bar.width/2,o);s=Math.min(s,f.bar.radius),r.radius=[s,s,0,0]}var t=new b({context:r});if(k.addChild(t),t.iGroup=h,t.iNode=e,t.iLay=v,t.on("panstart mouseover mousemove mouseout click",function(a){a.eventInfo=f._getInfoHandler(this,a),"mouseover"==a.type&&(this.parent.getChildById("bhr_"+this.iGroup).context.globalAlpha=.1),"mouseout"==a.type&&(this.parent.getChildById("bhr_"+this.iGroup).context.globalAlpha=0)}),1==i){var u=n.value;u=_.isFunction(f.text.format)?f.text.format(u):d.numAddSymbol(u);var w={fillStyle:f.text.fillStyle,fontSize:f.text.fontSize},x=new a.Display.Text(u,w);x.context.x=n.x-x.getTextWidth()/2,x.context.y=r.y-x.getTextHeight(),x.context.y+f.h<0&&(x.context.y=-f.h),f.txtsSp.addChild(x)}}}}}),this.txtsSp.children.length>0&&this.sprite.addChild(this.txtsSp),this.sprite.context.x=this.pos.x,this.sprite.context.y=this.pos.y,this.sort&&"desc"==this.sort&&(this.sprite.context.y-=this.h)}},grow:function(a){function b(){e=requestAnimationFrame(b),c.update()}var d=this,e=null,f=1;this.sort&&"desc"==this.sort&&(f=-1);var g=function(){new c.Tween({h:0}).to({h:d.h},500).onUpdate(function(){d.sprite.context.scaleY=f*this.h/d.h}).onComplete(function(){d._growEnd(),cancelAnimationFrame(e),a&&a(d)}).start();b()};g()},_growEnd:function(){this.text.enabled&&(this.txtsSp.context.visible=!0)},_getInfoHandler:function(a){var b={iGroup:a.iGroup,iNode:a.iNode,iLay:a.iLay,nodesInfoList:this._getNodeInfo(a.iGroup,a.iNode,a.iLay)};return b},_getNodeInfo:function(a,b,c){var d=[],e=this,f=e.data.length;return _.each(e.data,function(g,i){var j,k=g.length;if(0!=k){var l=g[0].length;for(h=0;h<l;h++)if(h==a)for(v=0;v<k;v++)b!=i&&-1!=b||c!=v&&-1!=c||(j=g[v][h],j.fillStyle=e._getColor(e.bar.fillStyle,f,k,i,h,v,j.value,j.field),d.push(j))}}),d}},f}),define("chartx/chart/bar/xaxis",["chartx/components/xaxis/xAxis"],function(a){var b=function(a,c){this.xDis1=0,b.superclass.constructor.apply(this,arguments)};return Chartx.extend(b,a,{_trimXAxis:function(a,b){var c=[];this.xDis1=b/a.length;for(var d=0,e=a.length;e>d;d++){var f={content:a[d],x:this.xDis1*(d+1)-this.xDis1/2};c.push(f)}return c}}),b}),define("chartx/chart/bar/yaxis",["chartx/components/yaxis/yAxis"],function(a){var b=function(a,c){b.superclass.constructor.apply(this,[a.bar?a.bar:a,c])};return Chartx.extend(b,a,{_setDataSection:function(a){var b=[];return _.each(a.org,function(a,c){for(var d=[],e=a[0].length,f=a.length,g=0,c=0;e>c;c++){for(var h=0,i=0;f>i;i++)h+=a[i][c],g=Math.min(a[i][c],g);d.push(h)}d.push(g),b.push(d)}),_.flatten(b)}}),b}),define("chartx/chart/bar/index",["chartx/chart/index","chartx/utils/tools","chartx/utils/datasection","./xaxis","./yaxis","chartx/components/back/Back","./graphs","chartx/components/tips/tip","chartx/utils/dataformat"],function(a,b,c,d,e,f,g,h,i){var j=a.Canvax;return a.extend({_xAxis:null,_yAxis:null,_back:null,_graphs:null,_tip:null,init:function(a,b,c){c.proportion?(this.proportion=c.proportion,this._initProportion(a,b,c)):(this._opts=c,_.deepExtend(this,c)),this.dataFrame=this._initData(b)},_initProportion:function(a,c,d){this._opts=d,!d.tips&&(d.tips={}),d.tips=_.deepExtend(d.tips,{content:function(a){var c="<table>",d=this;return _.each(a.nodesInfoList,function(a,e){c+="<tr style='color:"+d.text.fillStyle+"'>";var f=d.prefix[e];f?c+="<td>"+f+"：</td>":a.field&&(c+="<td>"+a.field+"：</td>"),c+="<td>"+b.numAddSymbol(a.value)+"（"+Math.round(a.value/a.vCount*100)+"%）</td></tr>"}),c+="</table>"}}),_.deepExtend(this,d),_.deepExtend(this.yAxis,{dataSection:[0,20,40,60,80,100],text:{format:function(a){return a+"%"}}}),!this.graphs&&(this.graphs={}),_.deepExtend(this.graphs,{bar:{radius:0}})},_setStages:function(){this.core=new j.Display.Sprite({id:"core"}),this.stageBg=new j.Display.Sprite({id:"bg"}),this.stageTip=new j.Display.Sprite({id:"tip"}),this.stage.addChild(this.stageBg),this.stage.addChild(this.core),this.stage.addChild(this.stageTip),this.rotate&&this._rotate(this.rotate)},draw:function(){this._setStages(),this._initModule(),this._startDraw(),this._drawEnd(),this.inited=!0},_initData:function(a,b){var c=i.apply(this,arguments);return _.each(c.yAxis.field,function(a,b){_.isArray(a)||(a=[a],c.yAxis.org[b]=[c.yAxis.org[b]])}),c},_initModule:function(){this._xAxis=new d(this.xAxis,this.dataFrame.xAxis),this._yAxis=new e(this.yAxis,this.dataFrame.yAxis),this._back=new f(this.back),this._tip=new h(this.tips,this.canvax.getDomContainer()),this._graphs=new g(this.graphs,this)},_startDraw:function(a){var b=a&&a.w||this.width,c=a&&a.h||this.height,d=parseInt(c-this._xAxis.h),e=d-this.padding.top;this._yAxis.draw({pos:{x:this.padding.left,y:d},yMaxHeight:e});var f=this._yAxis.w;this._xAxis.draw({graphh:c,graphw:b-this.padding.right,yAxisW:f}),this._xAxis.yAxisW!=f&&(this._yAxis.resetWidth(this._xAxis.yAxisW),f=this._xAxis.yAxisW);var g=this._yAxis.yGraphsHeight;this._back.draw({w:this._xAxis.xGraphsWidth,h:g,xAxis:{data:this._yAxis.layoutData},yAxis:{data:this._xAxis.layoutData},pos:{x:f,y:d}});var h=this._trimGraphs();this._graphs.draw(h.data,{w:this._xAxis.xGraphsWidth,h:this._yAxis.yGraphsHeight,pos:{x:f,y:d},yDataSectionLen:this._yAxis.dataSection.length,sort:this._yAxis.sort})},_setXaxisYaxisToTipsInfo:function(a){if(a.eventInfo){a.eventInfo.xAxis={field:this.dataFrame.xAxis.field,value:this.dataFrame.xAxis.org[0][a.eventInfo.iGroup]};var b=this;_.each(a.eventInfo.nodesInfoList,function(a,c){_.isArray(b.dataFrame.yAxis.field[a.iNode])?a.field=b.dataFrame.yAxis.field[a.iNode][a.iLay]:a.field=b.dataFrame.yAxis.field[a.iNode]})}},_trimGraphs:function(a,b){a||(a=this._xAxis),b||(b=this._yAxis);var c=a.data,d=b.dataOrg,e=d.length,f=a.xDis1,g=f/(e+1);this._graphs.checkBarW&&this._graphs.checkBarW(g);for(var h=b.dataSection[b.dataSection.length-1],i=[],j=[],k=[],l=[],m=this,n=0;e>n;n++)!i[n]&&(i[n]=[]),k[n]=0,j[n]={},_.each(d[n],function(a,e){!i[n][e]&&(i[n][e]=[]),_.each(a,function(j,o){if(c[o]){var p=0;m.proportion&&_.each(d[n],function(a,b){p+=a[o]});var q=c[o].x-f/2+g*(n+1),r=0;r=m.proportion?-j/p*b.yGraphsHeight:-(j-b._bottomNumber)/Math.abs(h-b._bottomNumber)*b.yGraphsHeight,e>0&&(r+=i[n][e-1][o].y),m._yAxis.sort&&"desc"==m._yAxis.sort&&(r=-(b.yGraphsHeight-Math.abs(r)));var s={value:j,field:m._getTargetField(n,e,o,b.field),x:q,y:r};m.proportion&&(s.vCount=p),i[n][e].push(s),k[n]+=Number(j),l=a.length}})});for(var o=0,p=k.length;p>o;o++)j[o].agValue=k[o]/l,j[o].agPosition=-(k[o]/l-b._bottomNumber)/(h-b._bottomNumber)*b.yGraphsHeight;return this.dataFrame.yAxis.center=j,{data:i}},_getTargetField:function(a,b,c,d){if(d||(d=this._yAxis.field),_.isString(d))return d;if(_.isArray(d)){var e=d[a];if(_.isString(e))return e;if(_.isArray(e))return e[b]}},_drawEnd:function(){var a=this;this.stageBg.addChild(this._back.sprite),this.core.addChild(this._xAxis.sprite),this.core.addChild(this._graphs.sprite),this.core.addChild(this._yAxis.sprite),this.stageTip.addChild(this._tip.sprite),this._graphs.grow(function(b){a._opts.markLine&&a._initMarkLine(b),a._opts.markPoint&&a._initMarkPoint(b)}),this.bindEvent()},_initMarkLine:function(a){var b=this;require(["chartx/components/markline/index"],function(c){for(var d=0,e=b._yAxis.dataOrg.length;e>d;d++){var f=d,g=b.dataFrame.yAxis.center[d].agPosition,h=a.sprite.children[0]?a.sprite.children[0].children[d+1].context.fillStyle:"#000000",i=b.dataFrame.yAxis.field[d]+"均值";if(b.markLine.text&&b.markLine.text.enabled&&_.isFunction(b.markLine.text.format)){var j={iGroup:f,value:b.dataFrame.yAxis.center[f].agValue};i=b.markLine.text.format(j)}var j={w:b._xAxis.xGraphsWidth,h:b._yAxis.yGraphsHeight,origin:{x:b._back.pos.x,y:b._back.pos.y},field:_.isArray(b._yAxis.field[d])?b._yAxis.field[d][0]:b._yAxis.field[d],line:{y:g,list:[[0,0],[b._xAxis.xGraphsWidth,0]],strokeStyle:h},text:{content:i,fillStyle:h}};new c(_.deepExtend(j,b._opts.markLine)).done(function(){b.core.addChild(this.sprite)})}})},_initMarkPoint:function(a){var b=this,c={x:a.sprite.context.x,y:a.sprite.context.y};require(["chartx/components/markpoint/index"],function(d){_.each(a.data,function(a,e){a.length;_.each(a,function(a){_.each(a,function(a){var e=_.clone(a);e.x+=c.x,e.y+=c.y;var f={value:e.value,shapeType:"droplet",markTarget:e.field,iGroup:e.iNode,iNode:e.iGroup,iLay:e.iLay,point:{x:e.x,y:e.y}};new d(b._opts,f).done(function(){b.core.addChild(this.sprite);var a=this;this.shape.hover(function(a){this.context.hr++,this.context.cursor="pointer",a.stopPropagation()},function(a){this.context.hr--,a.stopPropagation()}),this.shape.on("mousemove",function(a){a.stopPropagation()}),this.shape.on("tap click",function(c){c.stopPropagation(),c.eventInfo=a,b.fire("markpointclick",c)})})})})})})},bindEvent:function(){var a=this;this._graphs.sprite.on("panstart mouseover",function(b){a._setXaxisYaxisToTipsInfo(b),a._tip.show(b)}),this._graphs.sprite.on("panmove mousemove",function(b){a._setXaxisYaxisToTipsInfo(b),a._tip.move(b)}),this._graphs.sprite.on("panend mouseout",function(b){a._tip.hide(b)}),this._graphs.sprite.on("tap click",function(b){a._setXaxisYaxisToTipsInfo(b),a.fire("click",b)})}})});