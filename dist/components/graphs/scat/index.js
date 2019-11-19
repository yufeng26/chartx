"use strict";!function(e,t){if("function"==typeof define&&define.amd)define(["exports","canvax","../index","mmvis","../../../utils/hull/index"],t);else if("undefined"!=typeof exports)t(exports,require("canvax"),require("../index"),require("mmvis"),require("../../../utils/hull/index"));else{var i={};t(i,e.canvax,e.index,e.mmvis,e.index),e.undefined=i}}(void 0,function(e,t,i,_,l){Object.defineProperty(e,"__esModule",{value:!0});var x=n(t),a=n(i),v=n(l);function n(e){return e&&e.__esModule?e:{default:e}}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t){for(var i=0;i<t.length;i++){var l=t[i];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}function u(e,t,i){return t&&d(e.prototype,t),i&&d(e,i),e}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var g=x.default.Shapes.Circle,m=x.default.Shapes.Rect,b=x.default.Shapes.Line,k=x.default.Shapes.Polygon,f=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(p,a.default),u(p,null,[{key:"defaultProps",value:function(){return{field:{detail:"字段配置",default:null},groupField:{detail:"分组字段",default:null,documentation:"分组字段，如果area配置enabled为true，那么需要groupField来构建几个area"},dataFilter:{detail:"散点过滤数据",default:null,documentation:"数据过滤器，可以和groupField实现交叉过滤"},aniOrigin:{detail:"节点动画的原点",default:"default",documentation:"可选的还有center（坐标正中）、origin（坐标原点）"},node:{detail:"单数据节点图形设置",propertys:{dataKey:{detail:"元素的数据id，默认索引匹配",default:"__index__"},shapeType:{detail:"图形类型",default:"circle",documentation:"节点的现状可以是圆 ，也可以是rect，也可以是三角形，后面两种后面实现"},maxRadius:{detail:"节点最大半径",default:25},minRadius:{detail:"节点最小半径",default:5},radius:{detail:"半径",default:null},radiusScale:{detail:"半径缩放比例",documentation:"在计算好真实半径后缩放，主要用在,缩略图中，比如datazoom的缩略图",default:1},normalRadius:{detail:"默认半径",default:15},fillStyle:{detail:"节点景色",default:null},fillAlpha:{detail:"节点透明度",default:.8},strokeStyle:{detail:"节点描边颜色",default:null},lineWidth:{detail:"节点描边线宽",default:0},strokeAlpha:{detail:"节点描边透明度",default:1},focus:{detail:"节点hover态设置",propertys:{enabled:{detail:"是否开启",default:!0},lineWidth:{detail:"hover后的边框大小",default:6},strokeAlpha:{detail:"hover后的边框透明度",default:.2},fillAlpha:{detail:"hover后的背景透明度",default:.8}}},select:{detail:"节点选中态设置",propertys:{enabled:{detail:"是否开启",default:!1},lineWidth:{detail:"选中后的边框大小",default:8},strokeAlpha:{detail:"选中后的边框透明度",default:.4},fillAlpha:{detail:"选中后的背景透明度",default:1}}}}},line:{detail:"每个节点和指标轴线的连线",propertys:{enabled:{detail:"是否开启",default:!1},lineWidth:{detail:"连线宽",default:1},strokeStyle:{detail:"连线颜色",default:"#ccc"},lineType:{detail:"连线类型",default:"dashed"}}},area:{detail:"散点集合组成的面",propertys:{enabled:{detail:"是否开启",default:!1},concavity:{detail:"凹凸系数，默认80，越大越凸",default:88},quantile:{detail:"散点用来计入面积的分位数",default:8},fillStyle:{detail:"散点集合面的背景色",default:null},fillAlpha:{detail:"散点集合面的透明度",default:.15},strokeStyle:{detail:"散点集合面的描边颜色",default:null},lineWidth:{detail:"散点集合面的描边线宽",default:0},strokeAlpha:{detail:"散点集合面的描边透明度",default:.5}}},label:{detail:"文本设置",propertys:{enabled:{detail:"是否开启",default:!0},field:{detail:"获取label的字段",default:null},format:{detail:"label格式化处理函数",default:function(e){return e}},fontSize:{detail:"label字体大小",default:13},fontColor:{detail:"字体颜色",default:"#888"},strokeStyle:{detail:"字体描边颜色",default:"#ffffff"},lineWidth:{detail:"描边大小",default:0},textAlign:{detail:"水平对齐方式",default:"center"},verticalAlign:{detail:"垂直基线对齐方式",default:"middle"},position:{detail:"文本布局位置",documentation:"auto(目前等于center，还未实现),center,top,right,bottom,left",default:"center"},offsetX:{detail:"x方向偏移量",default:0},offsetY:{detail:"y方向偏移量",default:0}}}}}}]),u(p,[{key:"init",value:function(){this._shapesp=new x.default.Display.Sprite({id:"scat_shapesp"}),this._textsp=new x.default.Display.Sprite({id:"textsp"}),this._linesp=new x.default.Display.Sprite({id:"textsp"}),this._areasp=new x.default.Display.Sprite({id:"areasp"}),this.sprite.addChild(this._areasp),this.sprite.addChild(this._linesp),this.sprite.addChild(this._shapesp),this.sprite.addChild(this._textsp)}},{key:"draw",value:function(e){e=e||{},_._.extend(!0,this,e),this.data=this._trimGraphs(),this._widget(),this.sprite.context.x=this.origin.x,this.sprite.context.y=this.origin.y;var t=this;return!this.animation||e.resize||t.inited?this.fire("complete"):this.grow(function(){t.fire("complete")}),this}},{key:"resetData",value:function(e){this.dataFrame=e,this.data=this._trimGraphs(),this._widget(),this.grow()}},{key:"getNodesAt",value:function(){return[]}},{key:"_trimGraphs",value:function(){var e=[];this._groupData={};var t=this.app.getComponent({name:"coord"}),i=this.dataFrame.length;this._rData=null,this._rMaxValue=null,this._rMinValue=null;for(var l=0;l<i;l++){var a=this.dataFrame.getRowDataAt(l),n=t.getFieldMapOf(this.field),s=t.getPoint({iNode:l,field:this.field,value:{y:a[this.field]}});if(null!=s.pos.x&&null!=s.pos.y){var o={type:"scat",rowData:a,x:s.pos.x,y:s.pos.y,value:s.value,field:this.field,fieldColor:n.color,iNode:l,focused:!1,selected:!1,radius:null,fillStyle:null,color:null,strokeStyle:null,strokeAlpha:1,lineWidth:0,shapeType:null,label:null,fillAlpha:1,nodeElement:null};if(this._setR(o),this._setFillStyle(o),this._setFillAlpha(o),this._setStrokeStyle(o),this._setLineWidth(o),this._setStrokeAlpha(o),this._setNodeType(o),this._setText(o),!this.dataFilter||!_._.isFunction(this.dataFilter)||this.dataFilter.apply(this,[o])){if(this.groupField){var r=a[this.groupField];r&&(this._groupData[r]||(this._groupData[r]=[]),this._groupData[r].push(o))}else this._groupData.all||(this._groupData.all=[]),this._groupData.all.push(o);e.push(o)}}}return e}},{key:"_setR",value:function(e){var t=this.node.normalRadius,i=e.rowData;if(null!=this.node.radius){if(_._.isString(this.node.radius)&&i[this.node.radius]){this._rData||this._rMaxValue||this._rMinValue||(this._rData=this.dataFrame.getFieldData(this.node.radius),this._rMaxValue=_._.max(this._rData),this._rMinValue=_._.min(this._rData));var l=i[this.node.radius];t=this._rMaxValue==this._rMinValue?this.node.minRadius+(this.node.maxRadius-this.node.minRadius)/2:this.node.minRadius+(l-this._rMinValue)/(this._rMaxValue-this._rMinValue)*(this.node.maxRadius-this.node.minRadius)}_._.isFunction(this.node.radius)&&(t=this.node.radius(i)),isNaN(parseInt(this.node.radius))||(t=parseInt(this.node.radius))}return t=Math.max(t*this.node.radiusScale,2),e.radius=t,this}},{key:"_setText",value:function(e){null!=this.label.field&&_._.isString(this.label.field)&&e.rowData[this.label.field]&&(e.label=this.label.format(e.rowData[this.label.field],e))}},{key:"_setFillStyle",value:function(e){return e.color=e.fillStyle=this._getStyle(this.node.fillStyle,e),this}},{key:"_setFillAlpha",value:function(e){return e.fillAlpha=this._getProp(this.node.fillAlpha,e),this}},{key:"_setStrokeAlpha",value:function(e){return e.strokeAlpha=this._getProp(this.node.strokeAlpha,e),this}},{key:"_setStrokeStyle",value:function(e){return e.strokeStyle=this._getStyle(this.node.strokeStyle||this.node.fillStyle,e),this}},{key:"_getProp",value:function(e,t){var i=e;return _._.isArray(e)&&(i=e[t.iGroup]),_._.isFunction(e)&&(i=e.apply(this,[t])),i}},{key:"_getStyle",value:function(e,t){var i=e;return _._.isArray(e)&&(i=e[t.iGroup]),_._.isFunction(e)&&(i=e.apply(this,[t])),i=i||t.fieldColor}},{key:"_setLineWidth",value:function(e){return e.lineWidth=this._getProp(this.node.lineWidth,e),this}},{key:"_setNodeType",value:function(e){var t=this.node.shapeType;return _._.isArray(t)&&(t=t[e.iGroup]),_._.isFunction(t)&&(t=t(e)),t=t||"circle",e.shapeType=t,this}},{key:"_widget",value:function(){var e=this,d=this;if(_._.each(_._.flatten([d._shapesp.children,d._textsp.children,d._linesp.children]),function(e){e.__used=!1}),_._.each(d.data,function(e,t){var i=d._getNodeElement(e,t);i||(e.__isNew=!0);var l=d._getNodeContext(e),a="circle"==e.shapeType?g:m;if(i?i.animate(l):(i=new a({id:"shape_"+t,hoverClone:!1,context:l}),d._shapesp.addChild(i),i.on(_.event.types.get(),function(e){e.eventInfo={title:null,trigger:d.node,nodes:[this.nodeData]},this.nodeData.label&&(e.eventInfo.title=this.nodeData.label),"mouseover"==e.type&&d.focusAt(this.nodeData.iNode),"mouseout"==e.type&&(this.nodeData.selected||d.unfocusAt(this.nodeData.iNode)),d.app.fire(e.type,e)})),i.__used=!0,i.nodeData=e,i.iNode=t,e.nodeElement=i,d.line.enabled){var n=i.lineElement,s={start:{x:l.x,y:l.y+l.r},end:{x:l.x,y:0},lineWidth:d.line.lineWidth,strokeStyle:d.line.strokeStyle,lineType:d.line.lineType};n?n.animate(s):(n=new b({context:s}),d._linesp.addChild(n)),n.__used=!0,i.lineElement=n}if(e.label&&d.label.enabled){var o=i.labelElement,r={};o?(o.resetText(e.label),r=d._getTextContext(o,l),o.animate(r)):(o=new x.default.Display.Text(e.label,{id:"scat_text_"+t,context:{}}),r=d._getTextContext(o,l),_._.extend(o.context,r),d._textsp.addChild(o)),o.__used=!0,(i.labelElement=o).nodeElement=i}}),d.area.enabled){d._areasp.removeAllChildren();var t=0,i=function(){a=e._groupData[l],n={name:l,iGroup:t,data:a},s=[],_._.each(a,function(e){s=s.concat(function(e,t){if(!t||1==t)return[[e.x,e.y]];for(var i=[],l=0;l<t;l++){var a=360/(t-1)*l,n=e.radius+3,s=e.x+Math.cos(2*Math.PI/360*a)*n,o=e.y+Math.sin(2*Math.PI/360*a)*n;i.push([s,o])}return i}(e,d.area.quantile))}),o=(0,v.default)(s,d.area.concavity),r=d.app.getTheme(t),u=d._getStyle(d.area.fillStyle,n)||r,h=d._getProp(d.area.fillAlpha,n),f=d._getStyle(d.area.strokeStyle,n)||r,p=d._getProp(d.area.lineWidth,n),c=d._getProp(d.area.strokeAlpha,n),y=new k({context:{pointList:o,fillStyle:u,fillAlpha:h,strokeStyle:f,lineWidth:p,strokeAlpha:c,smooth:!1}}),d._areasp.addChild(y),t++};for(var l in this._groupData){var a,n,s,o,r,u,h,f,p,c,y;i()}}_._.each(_._.flatten([d._shapesp.children,d._textsp.children,d._linesp.children]),function(e){e.__used||e.animate({globalAlpha:0,r:0},{onComplete:function(){e.destroy()}})})}},{key:"_getNodeElement",value:function(e,t){var i,l=this.node.dataKey;if(l){_._.isString(l)&&(l=l.split(","));for(var a=0,n=this._shapesp.children.length;a<n;a++){for(var s=this._shapesp.children[a],o=!0,r=0,d=l.length;r<d;r++){var u=l[r];if(s.nodeData.rowData[u]!=e.rowData[u]){o=!1;break}}if(o&&l.length){i=s;break}}}else i=this._shapesp.getChildAt(t);return i}},{key:"_getTextPosition",value:function(e,t){var i=0,l=0;switch(this.label.position){case"center":i=t.x,l=t.y;break;case"top":i=t.x,l=t.y-t.r;break;case"right":i=t.x+t.r,l=t.y;break;case"bottom":i=t.x,l=t.y+t.r;break;case"left":i=t.x-t.r,l=t.y;break;case"auto":i=t.x,l=t.y,e.getTextWidth()>2*t.r&&(l=t.y+t.r+.5*e.getTextHeight())}return{x:i+this.label.offsetX,y:l+this.label.offsetY}}},{key:"_getTextContext",value:function(e,t){var i=this._getTextPosition(e,t),l=this.label.fontSize;e.getTextWidth()>2*t.r&&(l-=2);var a={x:i.x,y:i.y,fillStyle:this.label.fontColor||t.fillStyle,fontSize:l,strokeStyle:this.label.strokeStyle||t.fillStyle,lineWidth:this.label.lineWidth,textAlign:this.label.textAlign,textBaseline:this.label.verticalAlign};return this.animation&&!this.inited&&this._setCtxAniOrigin(a),a}},{key:"_setCtxAniOrigin",value:function(e){if("default"==this.aniOrigin&&(e.y=0),"origin"==this.aniOrigin){var t=this.app.getComponent({name:"coord"}).getOriginPos({field:this.field});e.x=t.x,e.y=t.y}"center"==this.aniOrigin&&(e.x=this.width/2,e.y=-this.height/2)}},{key:"_getNodeContext",value:function(e){if("circle"==e.shapeType)return this._getCircleContext(e)}},{key:"_getCircleContext",value:function(e){var t={x:e.x,y:e.y,r:e.radius,fillStyle:e.fillStyle,strokeStyle:e.strokeStyle,strokeAlpha:e.strokeAlpha,lineWidth:e.lineWidth,fillAlpha:e.fillAlpha,cursor:"pointer"};return!this.animation||this.inited&&!e.__isNew||(this._setCtxAniOrigin(t),t.r=1),t}},{key:"grow",value:function(t){var i=0,l=this.data.length-1,a=this;_._.each(this.data,function(e){e.__isNew&&a._growNode(e,function(){i+=1,delete e.__isNew,i==l&&t&&t()})})}},{key:"_growNode",value:function(e,t){var i=this;e.nodeElement.animate({x:e.x,y:e.y,r:e.radius},{onUpdate:function(e){if(this.labelElement&&this.labelElement.context){var t=i._getTextPosition(this.labelElement,e);this.labelElement.context.x=t.x,this.labelElement.context.y=t.y}this.lineElement&&this.lineElement.context&&(this.lineElement.context.start.y=e.y+e.r)},delay:Math.round(300*Math.random()),onComplete:function(){t&&t()}})}},{key:"focusAt",value:function(e){var t=this.data[e];if(this.node.focus.enabled&&!t.focused){var i=t.nodeElement.context;i.lineWidth=this.node.focus.lineWidth,i.strokeAlpha=this.node.focus.strokeAlpha,i.fillAlpha=this.node.focus.fillAlpha,t.focused=!0}}},{key:"unfocusAt",value:function(e){var t=this.data[e];if(this.node.focus.enabled&&t.focused){var i=t.nodeElement.context;i.lineWidth=t.lineWidth,i.strokeAlpha=t.strokeAlpha,i.fillAlpha=t.fillAlpha,i.strokeStyle=t.strokeStyle,t.focused=!1}}},{key:"selectAt",value:function(e){var t=this.data[e];if(this.node.select.enabled&&!t.selected){var i=t.nodeElement.context;i.lineWidth=this.node.select.lineWidth,i.strokeAlpha=this.node.select.strokeAlpha,i.fillAlpha=this.node.select.fillAlpha,t.selected=!0}}},{key:"unselectAt",value:function(e){var t=this.data[e];if(this.node.select.enabled&&t.selected){var i=t.nodeElement.context;t.focused?(i.lineWidth=this.node.focus.lineWidth,i.strokeAlpha=this.node.focus.strokeAlpha,i.fillAlpha=this.node.focus.fillAlpha):(i.lineWidth=t.lineWidth,i.strokeAlpha=t.strokeAlpha,i.fillAlpha=t.fillAlpha),t.selected=!1}}},{key:"getNodesOfPos",value:function(){return[]}}]),p);function p(e,t){var i;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),(i=function(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?r(e):t}(this,o(p).call(this,e,t))).type="scat",i._rData=null,i._rMaxValue=null,i._rMinValue=null,i._groupData={},_._.extend(!0,r(i),(0,_.getDefaultProps)(p.defaultProps()),e),i.init(),i}_.global.registerComponent(f,"graphs","scat"),e.default=f});