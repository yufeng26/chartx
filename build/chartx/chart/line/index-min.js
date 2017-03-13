define("chartx/chart/line/tips",["canvax/index","chartx/chart/line/markcolumn","chartx/components/tips/tip"],function(a,b,c){var d=function(a,b,c){this.sprite=null,this._tip=null,this._markColumn=null,this._isShow=!1,this.enabled=!0,this.induce=null,this.init(a,b,c)};return d.prototype={init:function(d,e,f){var g=this;_.deepExtend(this,d),this.sprite=new a.Display.Sprite({id:"tips"}),this._tip=new c(d,f),this.sprite.addChild(this._tip.sprite),this._markColumn=new b(_.extend({line:{eventEnabled:!1}},d)),this.sprite.addChild(this._markColumn.sprite),this._markColumn.on("mouseover",function(a){g.show(a)})},setInduce:function(a){this.induce=a;var b=a.context,c=a.localToGlobal();this.layout={x:c.x,y:c.y,width:b.width,height:b.height},this._markColumn.y=this.layout.y,this._markColumn.h=this.layout.height},reset:function(a){_.deepExtend(this._tip,a)},show:function(a,b){this.enabled&&(b||(b={}),b=_.extend(this._getTipsPoint(a),b),this._tip.show(a,b),this._markColumn.show(a,b),this._isShow=!0)},move:function(a){if(this.enabled){var b=this._getTipsPoint(a);this._markColumn.move(a,b),this._tip.move(a)}},hide:function(a){this.enabled&&(this._tip.hide(a),this._markColumn.hide(a),this._isShow=!1)},_getTipsPoint:function(a){var b=this.induce||a.target;return b.localToGlobal(a.eventInfo.nodesInfoList[a.eventInfo.iGroup])}},d}),define("chartx/chart/line/group",["canvax/index","canvax/shape/BrokenLine","canvax/shape/Circle","canvax/shape/Path","chartx/utils/tools","chartx/utils/colorformat","canvax/animation/Tween","chartx/chart/theme","canvax/animation/AnimationFrame"],function(a,b,c,d,e,f,g,h,i){window.Canvax=a;var j=function(a,b,c,d,e,f,g,i){this.field=a,this._groupInd=b,this._nodeInd=-1,this._yAxis=f,this.sort=e,this.ctx=d,this.w=i,this.h=g,this.y=0,this.animation=!0,this.resize=!1,this.colors=h.colors,this.line={enabled:1,strokeStyle:this.colors[this._groupInd],lineWidth:2,lineType:"solid",smooth:!0},this.node={enabled:1,corner:!1,r:2,fillStyle:"#ffffff",strokeStyle:null,lineWidth:4},this.text={enabled:0,fillStyle:null,strokeStyle:null,fontSize:13,format:null},this.fill={fillStyle:null,alpha:.05},this.dataOrg=[],this.data=[],this.sprite=null,this._pointList=[],this._currPointList=[],this._bline=null,this.__lineStrokeStyle=null,this.init(c)};return j.prototype={init:function(b){_.deepExtend(this,b),this.sprite=new a.Display.Sprite;var c=this;this.sprite.on("destroy",function(){c._growTween&&i.destroyTween(c._growTween)})},draw:function(a){_.deepExtend(this,a),this._widget()},update:function(a){if(this._bline&&(_.deepExtend(this,a),a.data&&(this._pointList=this._getPointList(this.data),this._grow()),void 0!==a._groupInd)){var b=this._getLineStrokeStyle();this._bline.context.strokeStyle=b,this._fill.context.fillStyle=this._getFillStyle()||b,this._setNodesStyle()}},destroy:function(){var a=this;a.sprite.animate({globalAlpha:0},{duration:300,complate:function(){a.sprite.remove()}})},_getColor:function(a){var b=this._getProp(a);return b&&""!=b||(b=this.colors[this._groupInd]),b},_getProp:function(a){if(_.isArray(a))return a[this._groupInd];if(_.isFunction(a)){var b={iGroup:this._groupInd,iNode:this._nodeInd,field:this.field};return this._nodeInd>=0&&(b.value=this.dataOrg[this._nodeInd].value),a.apply(this,[b])}return a},_createNodeInfo:function(){var a=this,b={};return b.r=a._getProp(a.node.r),b.fillStyle=a._getProp(a.node.fillStyle)||"#ffffff",b.strokeStyle=a._getProp(a.node.strokeStyle)||a._getLineStrokeStyle(),b.color=b.strokeStyle,b.lineWidth=a._getProp(a.node.lineWidth)||2,b.alpha=a._getProp(a.fill.alpha),b.field=a.field,b._groupInd=a._groupInd,b},getNodeInfoAt:function(a){var b=this;b._nodeInd=a;var c=_.clone(b.dataOrg[a]);return c&&null!=c.value&&void 0!=c.value&&""!==c.value?_.extend(c,b._createNodeInfo()):null},getNodeInfoOfX:function(a){for(var b,c=this,d=0,e=this.dataOrg.length;e>d;d++)if(Math.abs(this.dataOrg[d].x-a)<=1)return b=this.getNodeInfoAt(d);var f,g=function(a,b){var c={x:a,y:0};return c.y=b[0][1]+(b[1][1]-b[0][1])/(b[1][0]-b[0][0])*(a-b[0][0]),c},h=function(b){if(!(a<b[0][0]||a>b.slice(-1)[0][0])){var c=parseInt(b.length/2);if(Math.abs(b[c][0]-a)<=1)return void(f={x:b[c][0],y:b[c][1]});var d=[];if(a>b[c][0]){if(a<b[c+1][0])return void(f=g(a,[b[c],b[c+1]]));d=b.slice(c+1)}else{if(a>b[c-1][0])return void(f=g(a,[b[c-1],b[c]]));d=b.slice(0,c)}h(d)}};return h(this._bline.context.pointList),f?(f.value=c._yAxis.getValFromYpos(f.y),c._nodeInd=-1,_.extend(f,c._createNodeInfo())):null},reset:function(a){var b=this;b._pointList=this._getPointList(a.data);var c=b._pointList.length,d=b._currPointList.length;if(d>c){for(var e=c,f=d;f>e;e++)b._circles&&b._circles.removeChildAt(e),b._texts&&b._texts.removeChildAt(e),f--,e--;b._currPointList.length=c}if(c>d){diffLen=c-d;for(var e=0;e<diffLen;e++)b._currPointList.push(_.clone(b._currPointList[d-1]))}b._circles&&b._circles.removeAllChildren(),b._texts&&b._texts.removeAllChildren(),b._createNodes(),b._createTexts(),b._grow()},_grow:function(a){function b(a){var b=c._getLineStrokeStyle();c._bline.context.pointList=_.clone(a),c._bline.context.strokeStyle=b,c._fill.context.path=c._fillLine(c._bline),c._fill.context.fillStyle=c._getFillStyle()||b,c._circles&&_.each(c._circles.children,function(b,c){var d=parseInt(b.id.split("_")[1]);b.context.y=a[d][1],b.context.x=a[d][0]}),c._texts&&_.each(c._texts.children,function(b,d){var e=parseInt(b.id.split("_")[1]);b.context.y=a[e][1]-3,b.context.x=a[e][0],c._checkTextPos(b,d)})}var c=this;(!c.animation||c.resize)&&a&&a(self),0!=c._currPointList.length&&(this._growTween=i.registTween({from:c._getPointPosStr(c._currPointList),to:c._getPointPosStr(c._pointList),desc:c.field+" animation",onUpdate:function(){for(var a in this){var d=parseInt(a.split("_")[2]),e=parseInt(a.split("_")[1]);c._currPointList[d]&&(c._currPointList[d][e]=this[a])}b(c._currPointList)},onComplete:function(){c._growTween=null,b(c._pointList),a&&a(self)}}))},_getPointPosStr:function(a){var b={};return _.each(a,function(a,c){b["p_1_"+c]=a[1],b["p_0_"+c]=a[0]}),b},_isNotNum:function(a){return void 0===a||isNaN(a)||null===a||""===a},_filterEmptyValue:function(a){for(var b=0,c=a.length;c>b&&this._isNotNum(a[b].value);b++)a.shift(),c--,b--;for(var b=a.length-1;b>0&&this._isNotNum(a[b].value);b--)a.pop()},_getPointList:function(a){var b=this;b.dataOrg=_.clone(a),b._filterEmptyValue(a);for(var c=[],d=0,e=a.length;e>d;d++){var f=a[d];c.push([f.x,f.y])}return c},_widget:function(){var a=this;if(a._pointList=this._getPointList(a.data),0!=a._pointList.length){var c=[];if(a.animation&&!a.resize)for(var e=0,f=a.data.length;f>e;e++){var g=a.data[e],h=0;"right"==a._yAxis.place&&(h=f-1),c.push([g.x,a.data[h].y])}else c=a._pointList;a._currPointList=c;var i=new b({context:{pointList:c,lineWidth:a.line.lineWidth,y:a.y,smooth:a.line.smooth,lineType:a._getProp(a.line.lineType),smoothFilter:function(b){b[1]>0?b[1]=0:Math.abs(b[1])>a.h&&(b[1]=-a.h)}}});this.line.enabled||(i.context.visible=!1),a.sprite.addChild(i),a._bline=i;var j=a._getLineStrokeStyle();i.context.strokeStyle=j;var k=new d({context:{path:a._fillLine(i),fillStyle:a._getFillStyle()||j,globalAlpha:_.isArray(a.fill.alpha)?1:a.fill.alpha}});a.sprite.addChild(k),a._fill=k,a._createNodes(),a._createTexts()}},_getFillStyle:function(){var a=this,b=null,c=a.fill.fillStyle;if(c||(c=a._getLineStrokeStyle("fillStyle")),c&&(c=a._getColor(a.fill.fillStyle)),_.isArray(a.fill.alpha)&&!(c instanceof CanvasGradient)){a.fill.alpha.length=2,void 0==a.fill.alpha[0]&&(a.fill.alpha[0]=0),void 0==a.fill.alpha[1]&&(a.fill.alpha[1]=0);var d=_.min(a._bline.context.pointList,function(a){return a[1]});b=a.ctx.createLinearGradient(d[0],d[1],d[0],0);var e=f.colorRgb(c),g=e.replace(")",", "+a._getProp(a.fill.alpha[0])+")").replace("RGB","RGBA");b.addColorStop(0,g);var h=e.replace(")",", "+a.fill.alpha[1]+")").replace("RGB","RGBA");b.addColorStop(1,h),c=b}return c},_getLineStrokeStyle:function(a){var b=this;if(this.line.strokeStyle.lineargradient){var c=_.min(b._bline.context.pointList,function(a){return a[1]}),d=_.max(b._bline.context.pointList,function(a){return a[1]});"fillStyle"==a&&(d=[0,0]),this.__lineStrokeStyle=b.ctx.createLinearGradient(c[0],c[1],c[0],d[1]),_.isArray(this.line.strokeStyle.lineargradient)||(this.line.strokeStyle.lineargradient=[this.line.strokeStyle.lineargradient]),_.each(this.line.strokeStyle.lineargradient,function(a,c){b.__lineStrokeStyle.addColorStop(a.position,a.color)})}else this.__lineStrokeStyle=this._getColor(this.line.strokeStyle);return this.__lineStrokeStyle},_setNodesStyle:function(){var a=this,b=a._currPointList;if((a.node.enabled||1==b.length)&&a.line.lineWidth)for(var c=0,d=b.length;d>c;c++){a._nodeInd=c;var e=a._circles.getChildAt(c),f=a._getProp(a.node.strokeStyle)||a._getLineStrokeStyle();e.context.fillStyle=1==b.length?f:a._getProp(a.node.fillStyle)||"#ffffff",e.context.strokeStyle=f,a._nodeInd=-1}},_createNodes:function(){var b=this,d=b._currPointList;if((b.node.enabled||1==d.length)&&b.line.lineWidth){this._circles=new a.Display.Sprite({}),this.sprite.addChild(this._circles);for(var e=0,f=d.length;f>e;e++){var g={x:b._currPointList[e][0],y:b._currPointList[e][1],r:b._getProp(b.node.r),lineWidth:b._getProp(b.node.lineWidth)||2},h=new c({id:"circle_"+e,context:g});if(b.node.corner){var i=b._pointList[e][1],j=b._pointList[e-1],k=b._pointList[e+1];j&&k&&i==j[1]&&i==k[1]&&(h.context.visible=!1)}b._circles.addChild(h)}}this._setNodesStyle()},_createTexts:function(){var b=this,c=b._currPointList;if(b.text.enabled){this._texts=new a.Display.Sprite({}),this.sprite.addChild(this._texts);for(var d=0,e=c.length;e>d;d++){b._nodeInd=d;var f=b._getProp(b.text.fillStyle)||b._getProp(b.node.strokeStyle)||b._getLineStrokeStyle();b._nodeInd=-1;var g={x:b._currPointList[d][0],y:b._currPointList[d][1]-3,fontSize:this.text.fontSize,textAlign:"center",textBaseline:"bottom",fillStyle:f,lineWidth:1,strokeStyle:"#ffffff"},h=b.data[d].value;_.isFunction(b.text.format)&&(h=b.text.format.apply(self,[h,d])||h);var i=new a.Display.Text(h,{id:"text_"+d,context:g});b._texts.addChild(i),b._checkTextPos(i,d)}}this._setNodesStyle()},_checkTextPos:function(a,b){var c=this,d=c._currPointList,e=d[b-1],f=d[b+1];0==b&&(a.context.textAlign="left"),b==d.length-1&&(a.context.textAlign="right"),e&&f&&e[1]<a.context.y&&f[1]<a.context.y&&(a.context.y+=7,a.context.textBaseline="top")},_fillLine:function(a){var b=_.clone(a.context.pointList);if(0==b.length)return"";var c=0;return"desc"==this.sort&&(c=-this.h),b.push([b[b.length-1][0],c],[b[0][0],c],[b[0][0],b[0][1]]),e.getPath(b)}},j}),define("chartx/chart/line/graphs",["canvax/index","canvax/shape/Rect","chartx/utils/tools","chartx/chart/line/group","chartx/chart/line/markcolumn","canvax/core/Base","canvax/event/EventDispatcher"],function(a,b,c,d,e,f,g){var h=function(a,b){this.w=0,this.h=0,this.y=0,this.opt=a,this.root=b,this.ctx=b.stage.context2D,this.dataFrame=a.dataFrame||b.dataFrame,this.data=[],this.field=this.dataFrame.yAxis.field,this._yAxisFieldsMap={},this._setyAxisFieldsMap(this.field),this.disX=0,this.groups=[],this.iGroup=0,this.iNode=-1,this.sprite=null,this.induce=null,this.eventEnabled=!0,this._eventMap={},this.init(a)};return f.creatClass(h,g,{init:function(b){this.opt=b,_.deepExtend(this,b),this.sprite=new a.Display.Sprite},setX:function(a){this.sprite.context.x=a},setY:function(a){this.sprite.context.y=a},getX:function(){return this.sprite.context.x},getY:function(){return this.sprite.context.y},draw:function(a){_.deepExtend(this,a),this.disX=this._getGraphsDisX(),this.data=this._trimGraphs(),this._widget(a);var b=this;_.each(this.groups,function(a){b._yAxisFieldsMap[a.field].line=a.line})},reset:function(a,b){var c=this;b&&(c.dataFrame=b,c.data=c._trimGraphs()),a&&(_.deepExtend(c,a),a.yAxisChange&&c.yAxisFieldChange(a.yAxisChange,this.dataFrame)),this.disX=this._getGraphsDisX();for(var d=0,e=c.field.length;e>d;d++){var f=c.groups[d];f.reset({data:c.data[f.field]})}},_trimGraphs:function(){function a(g,h,i){for(var j=0,k=g.length;k>j;j++){var l=g[j];if(i&&b.root.biaxial&&j>0&&(b._yAxisFieldsMap[l].yAxisInd=1,c=b.root._yAxisR,e=c.dataSection[c.dataSection.length-1]),_.isArray(l)){var m=[];h.push(m),a(l,m)}else{var n=0;h[j]={};var o=d.getFieldData(l);if(!o)return;for(var p=[],q=0,r=o.length;r>q;q++){var s=b.root._xAxis.getPosX({ind:q,dataLen:r,layoutType:b.root.xAxis.layoutType}),t=-(o[q]-c._bottomNumber)/(e-c._bottomNumber)*c.yGraphsHeight;t=isNaN(t)?0:t,p.push({value:o[q],x:s,y:t}),n+=o[q]}f[l]=p,h[j].agValue=n/r,h[j].agPosition=-(h[j].agValue-c._bottomNumber)/(e-c._bottomNumber)*c.yGraphsHeight}}}var b=this,c=b._yAxis||b.root._yAxis,d=b.dataFrame||b.root.dataFrame,e=c.dataSection[c.dataSection.length-1],f={},g=[];return a(b._getYaxisField(),g,!0),d.yAxis.center=g,f},grow:function(a){var b=0,c=this.groups.length,d=this;return _.each(this.groups,function(e,f){e._grow(function(){b++,a(e),b==c&&d.fire("growComplete")})}),this},_setyAxisFieldsMap:function(a){var b=this;b._yAxisFieldsMap={},_.each(_.flatten(a),function(a,c){var d=b._yAxisFieldsMap[a];d?b._yAxisFieldsMap[a].ind=c:b._yAxisFieldsMap[a]={ind:c,yAxisInd:0}})},_addNewField:function(a){if(!this._yAxisFieldsMap[a]){var b;for(var c in this._yAxisFieldsMap)isNaN(b)&&(b=0),b=Math.max(this._yAxisFieldsMap[c].ind,b);this._yAxisFieldsMap[a]={ind:isNaN(b)?0:++b,yAxisInd:0}}},_getYaxisField:function(a){return this.field},creatFields:function(a,b){var c=this,d=[];return _.each(b,function(b,e){_.isArray(b)?d.push(c.creatFields(a,b)):a==b?d.push(b):d.push(null)}),d},yAxisFieldChange:function(a,b){this.dataFrame=b,this.data=this._trimGraphs();var c=this;_.isString(a)&&(a=[a]);for(var d=0,e=c.field.length;e>d;d++){var f=c.field[d],g=_.find(a,function(a){return a==f});g||(c.remove(d),c.field.splice(d,1),delete c._yAxisFieldsMap[f],d--,e--)}this.field=this.dataFrame.yAxis.field,c._setyAxisFieldsMap(this.field),_.each(a,function(a,b){var d=_.find(c.groups,function(b){return b.field==a});d||c.add(a)}),_.each(c.groups,function(a,b){a.update(_.extend({_groupInd:b},c.opt))})},add:function(a,b){_.deepExtend(this,b),this._addNewField(a),this.data=this._trimGraphs();var c=this.creatFields(a,this._getYaxisField());this._setGroupsForYfield(c),this.update()},remove:function(a){this.groups.splice(a,1)[0].destroy(),this.data=this._trimGraphs(),this.update()},update:function(a){var b=this;_.each(this.groups,function(a,c){a.update({data:b.data[a.field]})})},_setGroupsForYfield:function(a){for(var b=[],c=this,e=0,f=a.length;f>e;e++)if(_.isArray(a[e]))c._setGroupsForYfield(a[e]);else{var g=this.data[a[e]];if(!a[e]||!g)continue;var h=c.root._yAxis.sort,i=c.root.biaxial,j=c.root._yAxis,k=c._yAxisFieldsMap[a[e]];_.isArray(h)&&(h=h[k.yAxisInd]||"asc"),i&&k.yAxisInd>0&&(j=c.root._yAxisR);var l=k.ind,m=new d(a[e],l,c.opt,c.ctx,h,j,c.h,c.w);m.draw({data:g,resize:c.resize}),c.sprite.addChildAt(m.sprite,e);for(var n=!1,o=0,p=c.groups.length;p>o;o++)if(l<c.groups[o]._groupInd){c.groups.splice(o,0,m),n=!0;break}n||c.groups.push(m),b.push(m)}return b},_widget:function(a){var c=this;c._setGroupsForYfield(c.field),c.induce=new b({id:"induce",context:{y:-c.h,width:c.w,height:c.h,fillStyle:"#000000",globalAlpha:0,cursor:"pointer"}}),c.sprite.addChild(c.induce),c.eventEnabled&&(c.induce.on("panstart mouseover",function(a){a.eventInfo=c._getInfoHandler(a)}),c.induce.on("panmove mousemove",function(a){a.eventInfo=c._getInfoHandler(a)}),c.induce.on("panend mouseout",function(a){a.eventInfo=c._getInfoHandler(a),c.iGroup=0,c.iNode=-1}),c.induce.on("tap click",function(a){a.eventInfo=c._getInfoHandler(a)})),c.resize=!1},_getInfoHandler:function(a){var b=a.point.x,d=a.point.y-this.h;b=b>this.w?this.w:b;for(var e=0==this.disX?0:parseInt((b+this.disX/2)/this.disX),f=[],g=0,h=this.groups.length;h>g;g++){var i=this.groups[g].getNodeInfoAt(e);i&&f.push(i)}var j=c.getDisMinATArr(d,_.pluck(f,"y"));this.iGroup=j,this.iNode=e;var k={iGroup:this.iGroup,iNode:this.iNode,nodesInfoList:_.clone(f)};return k},getNodesInfoOfx:function(a){for(var b=[],c=0,d=this.groups.length;d>c;c++){var e=this.groups[c].getNodeInfoOfX(a);e&&b.push(e)}var f={iGroup:-1,iNode:-1,nodesInfoList:_.clone(b)};return f},createMarkColumn:function(a,b){var c=new e(b);this.sprite.addChild(c.sprite),c.h=this.induce.context.height,c.y=-c.h;var d={eventInfo:this.getNodesInfoOfx(a)};return c.show(d,{x:a}),c.data=d.eventInfo,c},_getGraphsDisX:function(){var a=this.dataFrame.org.length-1,b=this.w/(a-1);return 1==a&&(b=0),b}}),h}),define("chartx/chart/line/index",["chartx/chart/index","chartx/utils/tools","chartx/utils/datasection","chartx/components/xaxis/xAxis","chartx/components/yaxis/yAxis","chartx/components/back/Back","chartx/components/anchor/Anchor","chartx/chart/line/graphs","chartx/chart/line/tips","chartx/utils/dataformat","chartx/components/datazoom/index","chartx/components/legend/index","chartx/components/markline/index"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){var n=a.Canvax,o=a.extend({init:function(a,b,c){this._node=a,this._data=b,this._opts=c,this.dataZoom={enabled:!1,range:{start:0,end:b.length-1}},c.dataZoom&&(this.dataZoom.enabled=!0,this.padding.bottom+=c.dataZoom.height||46),this._xAxis=null,this._yAxis=null,this._anchor=null,this._back=null,this._graphs=null,this._tips=null,this.xAxis={layoutType:"rule"},this.yAxis={},this.graphs={},this._markLines=[],this.biaxial=!1,_.deepExtend(this,c),this.dataFrame=this._initData(b,this)},draw:function(a){this._setLegend(a),this.stageTip=new n.Display.Sprite({id:"tip"}),this.core=new n.Display.Sprite({id:"core"}),this.stageBg=new n.Display.Sprite({id:"bg"}),this.stage.addChild(this.stageBg),this.stage.addChild(this.core),this.stage.addChild(this.stageTip),this.rotate&&this._rotate(this.rotate),this._initModule(),this._startDraw(a),this._endDraw(),this.inited=!0},reset:function(a){this._reset&&this._reset(a),a&&a.options&&(_.deepExtend(this,a.options),a.options.yAxis&&a.options.yAxis.field&&(a.options.graphs||(a.options.graphs={}),a.options.graphs.yAxisChange=a.options.yAxis.field));var b=this.dataFrame.org||[];a&&a.data&&(b=a.data),this.dataFrame=this._initData(b,this),this.markLine&&this.markLine.y&&this.dataFrame.yAxis.org.push(this.markLine.y),this.__reset(a.options)},resetData:function(a){this.dataFrame=this._initData(a,this),this.__reset()},__reset:function(a){a=a?a:this,this._xAxis.reset(a.xAxis,this.dataFrame.xAxis),this._yAxis.reset(a.yAxis,this.dataFrame.yAxis),this._graphs.reset(a.graphs,this.dataFrame),_.each(this._markLines,function(a,b){a.reset({line:{y:a._yAxis.getYposFromVal(a.value)}},b)})},add:function(a){var b=this;_.indexOf(this.yAxis.field,a)>0||(b._graphs._yAxisFieldsMap[a]?this.yAxis.field.splice(b._graphs._yAxisFieldsMap[a].ind,0,a):this.yAxis.field.push(a),this.dataFrame=this._initData(this.dataFrame.org,this),this._yAxis.reset(this.yAxis,this.dataFrame.yAxis),this._back.update({xAxis:{data:this._yAxis.layoutData}}),this._graphs.add(a))},remove:function(a,b){var c=null;c=_.isNumber(a)?a:_.indexOf(this.yAxis.field,a),null!=c&&void 0!=c&&-1!=c&&this._remove(c)},_remove:function(a){this.dataFrame.yAxis.field.splice(a,1),this.dataFrame.yAxis.org.splice(a,1),this._yAxis.reset(this.yAxis,this.dataFrame.yAxis),this._back.update({xAxis:{data:this._yAxis.layoutData}}),this._graphs.remove(a)},_initData:function(a,b){var c,d=this.dataZoom||b&&b.dataZoom;if(d&&d.enabled){var e=[a[0]];e=e.concat(a.slice(d.range.start+1,d.range.end+1+1)),c=j.apply(this,[e,b])}else c=j.apply(this,arguments);return c},_initModule:function(){this._xAxis=new d(this.xAxis,this.dataFrame.xAxis),this.biaxial&&(this.yAxis.biaxial=!0),this.markLine&&this.markLine.y&&this.dataFrame.yAxis.org.push(this.markLine.y),this._yAxis=new e(this.yAxis,this.dataFrame.yAxis),this.biaxial&&(this._yAxisR=new e(_.extend(_.clone(this.yAxis),{place:"right"}),this.dataFrame.yAxis)),this._back=new f(this.back),this.stageBg.addChild(this._back.sprite),this._anchor=new g(this.anchor),this.stageBg.addChild(this._anchor.sprite),this._graphs=new h(this.graphs,this),this._tips=new i(this.tips,this.dataFrame,this.canvax.getDomContainer())},_startDraw:function(a){var b=this;!a&&(a={});var c=(a.w||this.width,a.h||this.height),d=this.height-this._xAxis.height,e=d-this.padding.top-this.padding.bottom;this._yAxis.draw({pos:{x:this.padding.left,y:d-this.padding.bottom},yMaxHeight:e,resize:a.resize}),this.dataZoom.enabled&&(this.__cloneChart=this._getCloneLine(),this._yAxis.reset({animation:!1},this.__cloneChart.thumbBar.dataFrame.yAxis));var f=this._yAxis.width,g=0;this._yAxisR&&(this._yAxisR.draw({pos:{x:0,y:d-this.padding.bottom},yMaxHeight:e,resize:a.resize}),g=this._yAxisR.width,this._yAxisR.setX(this.width-g-this.padding.right+1)),this._xAxis.draw({graphh:c-this.padding.bottom,graphw:this.width-g-this.padding.right,yAxisW:f,resize:a.resize}),this._xAxis.yAxisW!=f&&(this._yAxis.resetWidth(this._xAxis.yAxisW),f=this._xAxis.yAxisW);var h=this._yAxis.yGraphsHeight;this._back.draw({w:this._xAxis.xGraphsWidth,h:h,xAxis:{data:this._yAxis.layoutData},yAxis:{data:this._xAxis.layoutData},yOrigin:{biaxial:this.biaxial},pos:{x:f,y:d-this.padding.bottom},resize:a.resize}),this._graphs.draw({w:this._xAxis.xGraphsWidth,h:this._yAxis.yGraphsHeight,smooth:this.smooth,inited:this.inited,resize:a.resize}),this._graphs.setX(f),this._graphs.setY(d-this.padding.bottom),this._tips.setInduce(this._graphs.induce);var i=this;if(this.biaxial&&(this.yAxis.text&&!this.yAxis.text.fillStyle||this.yAxis.line&&!this.yAxis.line.strokeStyle)&&_.each(this._graphs.groups,function(a,b){if(a._bline){var c=a._bline.context.strokeStyle;0==b?i._yAxis.setAllStyle(c):i._yAxisR.setAllStyle(c)}}),this.inited||this._graphs.grow(function(a){i._initPlugs(i._opts,a)}).on("growComplete",function(){i.fire("complete"),i._opts.markLine&&i._initMarkLine()}),this.bindEvent(this._graphs.sprite),this._tips.sprite.on("nodeclick",function(a){b._setXaxisYaxisToTipsInfo(a),b.fire("nodeclick",a.eventInfo)}),this._anchor.enabled){var j=this._getPosAtGraphs(this._anchor.xIndex,this._anchor.num);this._anchor.draw({w:this._xAxis.xGraphsWidth,h:h,cross:{x:j.x,y:h+j.y},pos:{x:f,y:d-h-this.padding.top}})}this.dataZoom.enabled&&this._initDataZoom(),!this._legend||this._legend.inited&&!a.resize||(this._legend.pos({x:f}),_.each(this._graphs.groups,function(a){i._legend.setStyle(a.field,{fillStyle:a.__lineStrokeStyle})}),this._legend.inited=!0)},_endDraw:function(){this.core.addChild(this._xAxis.sprite),this.core.addChild(this._yAxis.sprite),this._yAxisR&&this.core.addChild(this._yAxisR.sprite),this.core.addChild(this._graphs.sprite),this.stageTip.addChild(this._tips.sprite)},_setLegend:function(a){!a&&(a={});var b=this;if(!(!this.legend||this.legend&&"enabled"in this.legend&&!this.legend.enabled)){var c=_.deepExtend({enabled:!0,label:function(a){return a.field},onChecked:function(a){b.add(a)},onUnChecked:function(a){b.remove(a)}},this._opts.legend);this._legend=new l(this._getLegendData(),c),this.stage.addChild(this._legend.sprite),this._legend.pos({x:0,y:this.padding.top+(a.resize?-this._legend.height:0)}),!a.resize&&(this.padding.top+=this._legend.height)}},_getLegendData:function(){var a=this,b=[];return _.each(_.flatten(a.dataFrame.yAxis.field),function(a,c){b.push({field:a,value:null,fillStyle:null})}),b},_initPlugs:function(a,b){a.markLine&&void 0===a.markLine.y&&this._initAverageLine(b),a.markPoint&&this._initMarkPoint(b)},_getCloneLine:function(a){var b=this;a=a||o;var c=b.el.cloneNode();c.innerHTML="",c.id=b.el.id+"_currclone",c.style.position="absolute",c.style.width=b.el.offsetWidth+"px",c.style.height=b.el.offsetHeight+"px",c.style.top="10000px",document.body.appendChild(c);var d=_.deepExtend({},b._opts);_.deepExtend(d,{graphs:{line:{lineWidth:1,strokeStyle:"#ececec"},node:{enabled:!1},fill:{alpha:.5,fillStyle:"#ececec"},animation:!1,eventEnabled:!1,text:{enabled:!1}},dataZoom:{enabled:!1},xAxis:{},yAxis:{}});var e=new a(c,b._data,d);return e.draw(),{thumbBar:e,cloneEl:c}},_initDataZoom:function(a){var b=this,c=_.deepExtend({w:b._xAxis.xGraphsWidth,pos:{x:b._xAxis.pos.x,y:b._xAxis.pos.y+b._xAxis.height},count:b._data.length-1,dragIng:function(a){(parseInt(a.start)!=parseInt(b.dataZoom.range.start)||parseInt(a.end)!=parseInt(b.dataZoom.range.end))&&(b.dataZoom.range.start=parseInt(a.start),b.dataZoom.range.end=parseInt(a.end),b.resetData(b._data))}},b.dataZoom),d=b.el.cloneNode();d.innerHTML="",d.id=b.el.id+"_currclone",d.style.position="absolute",d.style.top="10000px",document.body.appendChild(d);var e=_.deepExtend({},b._opts);_.deepExtend(e,{graphs:{line:{lineWidth:1,strokeStyle:"#ececec"},node:{enabled:!1},fill:{alpha:.5,fillStyle:"#ececec"},animation:!1},dataZoom:null}),b._dataZoom=new k(c);var f=this.__cloneChart.thumbBar._graphs.sprite;f.id=f.id+"_datazoomthumbbarbg",f.context.x=0,f.context.y=b._dataZoom.h-b._dataZoom.barY,f.context.scaleY=b._dataZoom.barH/this.__cloneChart.thumbBar._graphs.h,b._dataZoom.dataZoomBg.addChild(f),b.core.addChild(b._dataZoom.sprite),this.__cloneChart.thumbBar.destroy(),this.__cloneChart.cloneEl.parentNode.removeChild(this.__cloneChart.cloneEl)},_initMarkPoint:function(a){var b=this;require(["chartx/components/markpoint/index"],function(c){_.each(a.data,function(d,e){var f=a._circles.children[e],g={value:d.value,markTarget:a.field,point:f.localToGlobal(),r:f.context.r+2,groupLen:a.data.length,iNode:e,iGroup:a._groupInd};b._opts.markPoint&&"circle"!=b._opts.markPoint.shapeType&&(g.point.y-=f.context.r+3),new c(b._opts,g).done(function(){b.core.addChild(this.sprite);var a=this;this.shape.hover(function(a){this.context.hr++,this.context.cursor="pointer",a.stopPropagation()},function(a){this.context.hr--,a.stopPropagation()}),this.shape.on("mousemove",function(a){a.stopPropagation()}),this.shape.on("tap click",function(c){c.stopPropagation(),c.eventInfo=a,b.fire("markpointclick",c)})})})})},_initMarkLine:function(){function a(a,b,c,d){return void 0==a?d:void 0==a[b]?d:_.isArray(a[b])?void 0==a[b][c]?d:a[b][c]:a[b]}var b=this;if(!b.markLine.target&&!b.markLine.field&&void 0!==b.markLine.y){var c=b.markLine.y;_.isArray(c)||(c=[c]),_.each(c,function(c,d){var e=b._yAxis.getYposFromVal(c),f=a(b.markLine,"strokeStyle",d,"#999"),g=b._yAxis;b._createMarkLine("",c,e,"markline："+c,f,g)})}},_initAverageLine:function(a,b){var c=this,d=c.markLine.field||c.markLine.target;if(!d||_.isArray(d)&&_.indexOf(d,a.field)>=0||d===a.field){var e=a._groupInd;_.clone(a._pointList);b||(b=c.dataFrame);var f=parseInt(b.yAxis.center[e].agPosition),g=b.yAxis.center[e].agValue,h=a.field+"均值",i=a.line.strokeStyle;if(c.markLine.text&&c.markLine.text.enabled&&_.isFunction(c.markLine.text.format)){var j={iGroup:e,value:b.yAxis.center[e].agValue};h=c.markLine.text.format(j)}c._createMarkLine(a.field,g,f,h,i,a._yAxis)}},_createMarkLine:function(a,b,c,d,e,f){var g=this,h={w:g._xAxis.xGraphsWidth,h:g._yAxis.yGraphsHeight,value:b,origin:{x:g._back.pos.x,y:g._back.pos.y},line:{y:c,list:[[0,0],[g._xAxis.xGraphsWidth,0]],strokeStyle:e},text:{content:d,fillStyle:e},field:a};new m(_.deepExtend(g._opts.markLine,h),f).done(function(){g.core.addChild(this.sprite),g._markLines.push(this)})},bindEvent:function(a,b){var c=this;b||(b=c._setXaxisYaxisToTipsInfo),a.on("panstart mouseover",function(a){c._tips.enabled&&a.eventInfo.nodesInfoList.length>0&&(b.apply(c,[a]),c._tips.show(a))}),a.on("panmove mousemove",function(a){c._tips.enabled&&(a.eventInfo.nodesInfoList.length>0?(b.apply(c,[a]),c._tips._isShow?c._tips.move(a):c._tips.show(a)):c._tips._isShow&&c._tips.hide(a))}),a.on("panend mouseout",function(a){(!a.toTarget||"_markcolumn_node"!=a.toTarget.name&&"_markcolumn_line"!=a.toTarget.name)&&c._tips.enabled&&c._tips.hide(a)}),a.on("tap",function(a){c._tips.enabled&&a.eventInfo.nodesInfoList.length>0&&(c._tips.hide(a),b.apply(c,[a]),c._tips.show(a))}),a.on("click",function(a){b.apply(c,[a]),c.fire("click",a.eventInfo)})},_setXaxisYaxisToTipsInfo:function(a){if(a.eventInfo){var b;b=a.eventInfo.xAxis&&a.eventInfo.xAxis.value?a.eventInfo.xAxis.value:this.dataFrame.xAxis.org[0][a.eventInfo.iNode];var c=this;a.eventInfo.xAxis=_.extend({field:this.dataFrame.xAxis.field,value:b},a.eventInfo.xAxis),a.eventInfo.dataZoom=c.dataZoom,a.eventInfo.rowData=this.dataFrame.getRowData(a.eventInfo.iNode),a.eventInfo.iNode+=this.dataZoom.range.start}},_getPosAtGraphs:function(a,b){var c=this._xAxis.data[a].x,d=this._graphs.data[this._yAxis.field[0]][a].y;return{x:c,y:d}},createMarkColumn:function(a,b){return this._graphs.createMarkColumn(this._xAxis.getPosX({val:a}),_.extend(b,{xVal:a}))},moveMarkColumnTo:function(a,b,c){var d=this._xAxis.getPosX({val:b});return a.move({eventInfo:this._graphs.getNodesInfoOfx(d)},{x:d,xVal:b})}});return o});