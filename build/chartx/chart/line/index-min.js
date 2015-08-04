define("chartx/chart/line/tips",["canvax/index","canvax/shape/Line","canvax/shape/Circle","chartx/components/tips/tip"],function(a,b,c,d){var e=function(a,b,c){this.line={enabled:1},this.sprite=null,this._line=null,this._nodes=null,this._tip=null,this._isShow=!1,this.enabled=!0,this.init(a,b,c)};return e.prototype={init:function(b,c,e){_.deepExtend(this,b),this.sprite=new a.Display.Sprite({id:"tips"}),this._tip=new d(b,e)},show:function(a,b){this.enabled&&(b||(b={}),b=_.extend(this._getTipsPoint(a),b),this._initLine(a,b),this._initNodes(a,b),this.sprite.addChild(this._tip.sprite),this._tip.show(a,b),this._isShow=!0)},move:function(a){this.enabled&&(this._resetStatus(a),this._tip.move(a))},hide:function(a){this.enabled&&(this.sprite.removeAllChildren(),this._line=null,this._nodes=null,this._tip.hide(a),this._isShow=!1)},_getTipsPoint:function(a){return a.target.localToGlobal(a.tipsInfo.nodesInfoList[a.tipsInfo.iGroup])},_resetStatus:function(a){var b=this._getTipsPoint(a);this._line&&(this._line.context.x=parseInt(b.x)),this._resetNodesStatus(a,b)},_initLine:function(a,c){var d=_.deepExtend({x:parseInt(c.x),y:c.lineTop||a.target.localToGlobal().y,xStart:0,yStart:c.lineH||a.target.context.height,xEnd:0,yEnd:0,lineWidth:1,strokeStyle:"#0088cf"},this.line);this.line.enabled&&(this._line=new b({id:"tipsLine",context:d}),this.sprite.addChild(this._line))},_initNodes:function(b,d){this._nodes=new a.Display.Sprite({id:"line-tipsNodes",context:{x:parseInt(d.x),y:b.target.localToGlobal().y}});var e=this;_.each(b.tipsInfo.nodesInfoList,function(d){var f=new a.Display.Sprite({context:{y:b.target.context.height-Math.abs(d.y)}});f.addChild(new c({context:{r:d.r+2+1,fillStyle:"white",strokeStyle:d.strokeStyle,lineWidth:d.lineWidth}})),f.addChild(new c({context:{r:d.r+1,fillStyle:d.strokeStyle}})),e._nodes.addChild(f)}),this.sprite.addChild(this._nodes)},_resetNodesStatus:function(a,b){var c=this;this._nodes.children.length!=a.tipsInfo.nodesInfoList.length&&(this._nodes.removeAllChildren(),this._initNodes(a,b)),this._nodes.context.x=parseInt(b.x),_.each(a.tipsInfo.nodesInfoList,function(b,d){var e=c._nodes.getChildAt(d).context;e.y=a.target.context.height-Math.abs(b.y)})}},e}),define("chartx/chart/line/xaxis",["chartx/components/xaxis/xAxis"],function(a){var b=function(a,c){b.superclass.constructor.apply(this,arguments)};return Chartx.extend(b,a,{_trimXAxis:function(a,b){var c=a.length,d=[];if(1==c)d.push({content:a[0],x:parseInt(b/2)});else for(var e=0,f=a.length;f>e;e++){var g={content:a[e],x:parseInt(e/(c-1)*b)};d.push(g)}return d}}),b}),define("chartx/chart/line/group",["canvax/index","canvax/shape/BrokenLine","canvax/shape/Circle","canvax/shape/Path","chartx/utils/tools","chartx/utils/colorformat","canvax/animation/Tween"],function(a,b,c,d,e,f,g){window.Canvax=a;var h=function(a,b,c,d){this.field=a,this._groupInd=b,this._nodeInd=-1,this.ctx=d,this.w=0,this.h=0,this.y=0,this.colors=["#42a8d7","#666666","#26b471","#7aa1ff","#fa8529","#ff7c4d","#2494ed","#7aa1ff","#fa8529","#ff7c4d"],this.line={enabled:1,strokeStyle:this.colors[this._groupInd],lineWidth:2,smooth:!0},this.node={enabled:1,corner:!1,r:2,fillStyle:"#ffffff",strokeStyle:null,lineWidth:3},this.fill={fillStyle:null,alpha:.1},this.dataOrg=[],this.data=[],this.sprite=null,this._pointList=[],this._currPointList=[],this.init(c)};return h.prototype={init:function(b){_.deepExtend(this,b),!this.node.strokeStyle&&(this.node.strokeStyle=this.line.strokeStyle),!this.fill.fillStyle&&(this.fill.fillStyle=this.line.strokeStyle),this.sprite=new a.Display.Sprite},draw:function(a){_.deepExtend(this,a),this._widget()},update:function(a){_.deepExtend(this,a);for(var b=[],c=0,d=this.data.length;d>c;c++){var e=this.data[c];b.push([e.x,e.y])}this._pointList=b,this._grow()},destroy:function(){this.sprite.remove()},_getColor:function(a){var b=this._getProp(a);return b&&""!=b||(b=this.colors[this._groupInd]),b},_getProp:function(a){return _.isArray(a)?a[this._groupInd]:_.isFunction(a)?a({iGroup:this._groupInd,iNode:this._nodeInd}):a},getNodeInfoAt:function(a){var b=this;b._nodeInd=a;var c=_.clone(b.dataOrg[a]);return c&&null!=c.value&&void 0!=c.value&&""!==c.value?(c.r=b._getProp(b.node.r),c.fillStyle=b._getProp(b.node.fillStyle)||"#ffffff",c.strokeStyle=b._getProp(b.node.strokeStyle)||b._getColor(b.line.strokeStyle),c.color=b._getProp(b.node.strokeStyle)||b._getColor(b.line.strokeStyle),c.lineWidth=b._getProp(b.node.lineWidth)||2,c.alpha=b._getProp(b.fill.alpha),c._groupInd=b._groupInd,c):null},_grow:function(a){function b(){d=requestAnimationFrame(b),g.update()}var c=this,d=null;if(0!=c._currPointList.length){var e=function(){new g.Tween(c._getPointY(c._currPointList)).to(c._getPointY(c._pointList),1500).easing(g.Easing.Quintic.Out).onUpdate(function(){for(var a in this){var b=c._currPointList[parseInt(a.split("_")[1])];b&&(b[1]=this[a])}c._bline.context.pointList=_.clone(c._currPointList),c._fill.context.path=c._fillLine(c._bline),c._circles&&_.each(c._circles.children,function(a,b){var d=parseInt(a.id.split("_")[1]);a.context.y=c._currPointList[d][1]})}).onComplete(function(){cancelAnimationFrame(d),a&&a(c)}).start();b()};e()}},_getPointY:function(a){var b={};return _.each(a,function(a,c){b["p_"+c]=a[1]}),b},_isNotNum:function(a){return isNaN(a)||null===a||""===a},_filterEmptyValue:function(a){for(var b=0,c=a.length;c>b&&this._isNotNum(a[b].value);b++)a.shift(),c--,b--;for(var b=a.length-1;b>0&&this._isNotNum(a[b].value);b--)a.pop()},_widget:function(){var e=this;if(e.dataOrg=_.clone(e.data),e._filterEmptyValue(e.data),0!=e.data.length){for(var g=[],h=0,i=e.data.length;i>h;h++){var j=e.data[h];g.push([j.x,j.y])}e._pointList=g,g=[];for(var h=0,i=e.data.length;i>h;h++){var j=e.data[h];g.push([j.x,e.data[0].y])}e._currPointList=g;var k=new b({id:"brokenline_"+e._groupInd,context:{pointList:g,strokeStyle:e._getColor(e.line.strokeStyle),lineWidth:e.line.lineWidth,y:e.y,smooth:e.line.smooth,smoothFilter:function(a){a[1]>0&&(a[1]=0)}}});this.line.enabled||(k.context.visible=!1),e.sprite.addChild(k),e._bline=k;var l=null;if(_.isArray(e.fill.alpha)){e.fill.alpha.length=2,void 0==e.fill.alpha[0]&&(e.fill.alpha[0]=0),void 0==e.fill.alpha[1]&&(e.fill.alpha[1]=0);var m=_.min(k.context.pointList,function(a){return a[1]});l=e.ctx.createLinearGradient(m[0],m[1],m[0],0);var n=f.colorRgb(e._getColor(e.fill.fillStyle)),o=n.replace(")",", "+e._getProp(e.fill.alpha[0])+")").replace("RGB","RGBA");l.addColorStop(0,o);var p=n.replace(")",", "+e.fill.alpha[1]+")").replace("RGB","RGBA");l.addColorStop(1,p)}var q=new d({context:{path:e._fillLine(k),fillStyle:l||e._getColor(e.fill.fillStyle),globalAlpha:l?1:e.fill.alpha}});if(e.sprite.addChild(q),e._fill=q,(e.node.enabled||1==g.length)&&e.line.lineWidth){this._circles=new a.Display.Sprite({id:"circles"}),this.sprite.addChild(this._circles);for(var h=0,i=g.length;i>h;h++){e._nodeInd=h;var r=e._getProp(e.node.strokeStyle)||e._getColor(e.line.strokeStyle),s=new c({id:"circle_"+h,context:{x:e._currPointList[h][0],y:e._currPointList[h][1],r:e._getProp(e.node.r),fillStyle:1==g.length?r:e._getProp(e.node.fillStyle)||"#ffffff",strokeStyle:r,lineWidth:e._getProp(e.node.lineWidth)||2}});if(e.node.corner){var t=e._pointList[h][1],u=e._pointList[h-1],v=e._pointList[h+1];u&&v&&t==u[1]&&t==v[1]&&(s.context.visible=!1)}e._circles.addChild(s)}e._nodeInd=-1}}},_fillLine:function(a){var b=_.clone(a.context.pointList);return b.push([b[b.length-1][0],0],[b[0][0],0],[b[0][0],b[0][1]]),e.getPath(b)}},h}),define("chartx/chart/line/graphs",["canvax/index","canvax/shape/Rect","chartx/utils/tools","chartx/chart/line/group"],function(a,b,c,d){var e=function(a,b){this.w=0,this.h=0,this.y=0,this.opt=a,this.root=b,this.ctx=b.stage.context2D,this.data=[],this.disX=0,this.groups=[],this.iGroup=0,this.iNode=-1,this.sprite=null,this.induce=null,this.init(a)};return e.prototype={init:function(b){this.opt=b,this.sprite=new a.Display.Sprite},setX:function(a){this.sprite.context.x=a},setY:function(a){this.sprite.context.y=a},getX:function(){return this.sprite.context.x},getY:function(){return this.sprite.context.y},draw:function(a){_.deepExtend(this,a),this._widget(a)},grow:function(a){_.each(this.groups,function(b,c){b._grow(a)})},add:function(a,b){var c=this;_.deepExtend(this,a);var e=new d(c.root.yAxis.field[b],b,c.opt,c.ctx);e.draw({data:b>c.data.length-1?c.data[c.data.length-1]:c.data[b]}),c.sprite.addChildAt(e.sprite,b),c.groups.splice(b,0,e),_.each(this.groups,function(a,b){a._groupInd=b,a.update({data:c.data[b]})})},remove:function(a){var b=this.groups.splice(a,1)[0];b.destroy()},update:function(a){_.deepExtend(this,a);var b=this;_.each(this.groups,function(a,c){a.update({data:b.data[c]})})},_widget:function(a){for(var c=this,e=0,f=c.data.length;f>e;e++){var g=new d(c.root.yAxis.field[e],e,c.opt,c.ctx);g.draw({data:c.data[e]}),c.sprite.addChild(g.sprite),c.groups.push(g)}c.induce=new b({id:"induce",context:{y:-c.h,width:c.w,height:c.h,fillStyle:"#000000",globalAlpha:0,cursor:"pointer"}}),c.sprite.addChild(c.induce),c.induce.on("panstart mouseover",function(a){a.tipsInfo=c._getInfoHandler(a),c._fireHandler(a)}),c.induce.on("panmove mousemove",function(a){a.tipsInfo=c._getInfoHandler(a),c._fireHandler(a)}),c.induce.on("panend mouseout",function(a){a.tipsInfo=c._getInfoHandler(a),c._fireHandler(a),c.iGroup=0,c.iNode=-1}),c.induce.on("tap click",function(a){a.tipsInfo=c._getInfoHandler(a),c._fireHandler(a)})},_getInfoHandler:function(a){var b=a.point.x,d=a.point.y-this.h;b=b>this.w?this.w:b;for(var e=0==this.disX?0:parseInt((b+this.disX/2)/this.disX),f=[],g=0,h=this.groups.length;h>g;g++){var i=this.groups[g].getNodeInfoAt(e);i&&f.push(i)}var j=c.getDisMinATArr(d,_.pluck(f,"y"));this.iGroup=j,this.iNode=e;var k={iGroup:this.iGroup,iNode:this.iNode,nodesInfoList:_.clone(f)};return k},_fireHandler:function(a){a.params={iGroup:a.tipsInfo.iGroup,iNode:a.tipsInfo.iNode},this.root.fire(a.type,a)}},e}),define("chartx/chart/line/index",["chartx/chart/index","chartx/utils/tools","chartx/utils/datasection","./xaxis","chartx/components/yaxis/yAxis","chartx/components/back/Back","chartx/components/anchor/Anchor","chartx/chart/line/graphs","./tips","chartx/utils/dataformat"],function(a,b,c,d,e,f,g,h,i,j){var k=a.Canvax;return a.extend({init:function(a,b,c){this._opts=c,this._xAxis=null,this._yAxis=null,this._anchor=null,this._back=null,this._graphs=null,this._tip=null,this.xAxis={},this.yAxis={},this.graphs={},this.biaxial=!1,_.deepExtend(this,c),this.dataFrame=this._initData(b,this)},draw:function(){this.stageTip=new k.Display.Sprite({id:"tip"}),this.core=new k.Display.Sprite({id:"core"}),this.stageBg=new k.Display.Sprite({id:"bg"}),this.stage.addChild(this.stageBg),this.stage.addChild(this.core),this.stage.addChild(this.stageTip),this.rotate&&this._rotate(this.rotate),this._initModule(),this._startDraw()},add:function(a,b){if(!(_.indexOf(this.yAxis.field,a)>=0)){var c=0;_.each(this._graphs.groups,function(a,b){c=Math.max(c,a._groupInd)}),void 0!=b&&null!=b&&(c=b),void 0==b?(this.yAxis.field.push(a),b=this.yAxis.field.length-1):this.yAxis.field.splice(b,0,a),this.dataFrame=this._initData(this.dataFrame.org,this),this._yAxis.update(this.yAxis,this.dataFrame.yAxis),this._back.update({xAxis:{data:this._yAxis.layoutData}}),this._graphs.add({data:this._trimGraphs()},b)}},remove:function(a){var b=null;b=_.isNumber(a)?a:_.indexOf(this.yAxis.field,a),null!=b&&void 0!=b&&-1!=b&&this._remove(b)},_remove:function(a){this.dataFrame.yAxis.field.splice(a,1),this.dataFrame.yAxis.org.splice(a,1),this._yAxis.update(this.yAxis,this.dataFrame.yAxis),this._back.update({xAxis:{data:this._yAxis.layoutData}}),this._graphs.remove(a),this._graphs.update({data:this._trimGraphs()})},_initData:j,_initModule:function(){this._xAxis=new d(this.xAxis,this.dataFrame.xAxis),this.biaxial&&(this.yAxis.biaxial=!0),this._yAxis=new e(this.yAxis,this.dataFrame.yAxis),this.biaxial&&(this._yAxisR=new e(_.extend(_.clone(this.yAxis),{place:"right"}),this.dataFrame.yAxis)),this._back=new f(this.back),this._anchor=new g(this.anchor),this._graphs=new h(this.graphs,this),this._tip=new i(this.tips,this.dataFrame,this.canvax.getDomContainer()),this.stageBg.addChild(this._back.sprite),this.stageBg.addChild(this._anchor.sprite),this.core.addChild(this._xAxis.sprite),this.core.addChild(this._yAxis.sprite),this._yAxisR&&this.core.addChild(this._yAxisR.sprite),this.core.addChild(this._graphs.sprite),this.stageTip.addChild(this._tip.sprite)},_startDraw:function(){var a=this.height-this._xAxis.h;this._yAxis.draw({pos:{x:0,y:a},yMaxHeight:a});var b=this._yAxis.w,c=0;this._yAxisR&&(this._yAxisR.draw({pos:{x:0,y:a},yMaxHeight:a}),c=this._yAxisR.w,this._yAxisR.setX(this.width-c)),this._xAxis.draw({graphh:this.height,graphw:this.width-c,yAxisW:b}),this._xAxis.yAxisW!=b&&(this._yAxis.resetWidth(this._xAxis.yAxisW),b=this._xAxis.yAxisW);var d=this._yAxis.yGraphsHeight;this._back.draw({w:this._xAxis.xGraphsWidth,h:d,xAxis:{data:this._yAxis.layoutData},yAxis:{data:this._xAxis.layoutData},yOrigin:{biaxial:this.biaxial},pos:{x:b,y:a}}),this._graphs.draw({w:this._xAxis.xGraphsWidth,h:this._yAxis.yGraphsHeight,data:this._trimGraphs(),disX:this._getGraphsDisX(),smooth:this.smooth}),this._graphs.setX(b),this._graphs.setY(a);var e=this;if(this.biaxial&&_.each(this._graphs.groups,function(a,b){var c=a._bline.context.strokeStyle;0==b?e._yAxis.setAllStyle(c):e._yAxisR.setAllStyle(c)}),this._graphs.grow(function(a){"markPoint"in e._opts&&e._initMarkPoint(a)}),this.bindEvent(this._graphs.sprite),this._anchor.enabled){var f=this._getPosAtGraphs(this._anchor.xIndex,this._anchor.num);this._anchor.draw({w:this.width-b-c,h:d,cross:{x:f.x,y:d+f.y},pos:{x:b,y:a-d}})}},_initMarkPoint:function(a){var b=this;require(["chartx/components/markpoint/index"],function(c){var d=a._circles.children[a._circles.children.length-1],e={markTarget:a.field,point:d.localToGlobal(),r:d.context.r+1,globalAlpha:.8,realTime:!0};new c(b._opts,e).done(function(){b.core.addChild(this.sprite)})})},bindEvent:function(a,b){var c=this;b||(b=c._setXaxisYaxisToTipsInfo),a.on("panstart mouseover",function(a){c._tip.enabled&&a.tipsInfo.nodesInfoList.length>0&&(b.apply(c,[a]),c._tip.show(a))}),a.on("panmove mousemove",function(a){c._tip.enabled&&(a.tipsInfo.nodesInfoList.length>0?(b.apply(c,[a]),c._tip._isShow?c._tip.move(a):c._tip.show(a)):c._tip._isShow&&c._tip.hide(a))}),a.on("panend mouseout",function(a){c._tip.enabled&&c._tip.hide(a)})},_setXaxisYaxisToTipsInfo:function(a){a.tipsInfo.xAxis={field:this.dataFrame.xAxis.field,value:this.dataFrame.xAxis.org[0][a.tipsInfo.iNode]};var b=this;_.each(a.tipsInfo.nodesInfoList,function(a,c){a.field=b.dataFrame.yAxis.field[a._groupInd]})},_trimGraphs:function(a,b){a||(a=this._yAxis),b||(b=this.dataFrame);for(var c=a.dataSection[a.dataSection.length-1],d=b.yAxis.org,e=[],f=0,g=d.length;g>f;f++){this.biaxial&&f>0&&(a=this._yAxisR,c=a.dataSection[a.dataSection.length-1]);for(var h=0,i=d[f].length;i>h&&(e[f]?"":e[f]=[],!(h>=this._xAxis.data.length));h++){var j=this._xAxis.data[h].x,k=-(d[f][h]-a._bottomNumber)/(c-a._bottomNumber)*a.yGraphsHeight;k=isNaN(k)?0:k,e[f][h]={value:d[f][h],x:j,y:k}}}return e},_getPosAtGraphs:function(a,b){var c=this._xAxis.data[a].x,d=this._graphs.data[0][a].y;return{x:c,y:d}},_getGraphsDisX:function(){var a=this._xAxis.dataSection.length,b=this._xAxis.xGraphsWidth/(a-1);return 1==a&&(b=0),b}})});