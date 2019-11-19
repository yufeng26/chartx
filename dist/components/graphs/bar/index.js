"use strict";!function(e,t){if("function"==typeof define&&define.amd)define(["exports","canvax","../../../utils/tools","../index","mmvis"],t);else if("undefined"!=typeof exports)t(exports,require("canvax"),require("../../../utils/tools"),require("../index"),require("mmvis"));else{var i={};t(i,e.canvax,e.tools,e.index,e.mmvis),e.undefined=i}}(void 0,function(e,t,D,i,G){Object.defineProperty(e,"__esModule",{value:!0});var N=n(t),a=n(i);function n(e){return e&&e.__esModule?e:{default:e}}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e,t,i){return t&&d(e.prototype,t),i&&d(e,i),e}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=N.default.AnimationFrame,B=N.default.Shapes.Rect,u=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(c,a.default),s(c,null,[{key:"defaultProps",value:function(){return{field:{detail:"字段设置",documentation:"支持二维数组格式的设置，一维方向就是横向分组，二维方向就是纵向的堆叠",default:null},yAxisAlign:{detail:"绘制在哪根y轴上面",default:"left"},absolute:{detail:"是否脱离graphs的位置计算",documentation:"                    trimGraphs的时候是否需要和其他的 bar graphs一起并排计算，                    true的话这个就会和别的重叠,                    和css中得absolute概念一致，脱离文档流的绝对定位",default:!1},proportion:{detail:"比例柱状图",default:!1},node:{detail:"单个数据对应的图形设置",propertys:{width:{detail:"bar的宽度",default:0},maxWidth:{detail:"最大width",default:50},minWidth:{detail:"最小width",default:1},minHeight:{detail:"最小height",default:0},radius:{detail:"叶子节点的圆角半径",default:3},fillStyle:{detail:"bar填充色",default:null},fillAlpha:{detail:"bar透明度",default:.95},xDis:{detail:"单分组内bar之间的间隔",default:null},filter:{detail:"bar过滤处理器",default:null}}},label:{detail:"文本设置",propertys:{enabled:{detail:"是否开启",default:!1},fontColor:{detail:"文本颜色",default:null,documentation:"如果有设置text.fontColor那么优先使用fontColor"},fontSize:{detail:"文本字体大小",default:12},format:{detail:"文本格式化处理函数",default:null},lineWidth:{detail:"文本描边线宽",default:0},strokeStyle:{detail:"文本描边颜色",default:null},rotation:{detail:"旋转角度",default:0},textAlign:{detail:"水平对齐方式",documentation:"left center right",default:"center"},verticalAlign:{detail:"垂直基线对齐方式",documentation:"top middle bottom",default:"bottom"},position:{detail:"文本布局位置",documentation:"top,topRight,right,rightBottom,bottom,bottomLeft,left,leftTop,center",default:"top"},offsetX:{detail:"x偏移量",default:0},offsetY:{detail:"y偏移量",default:0}}},select:{detail:"分组选中",documentation:"                    分组的选中，不是选中具体的某个node，这里的选中靠groupRegion来表现出来,                    目前只有在第一个graphs bar 上配置有效",propertys:{enabled:{detail:"是否开启",default:!1},inds:{detail:"选中的分组索引集合",documentation:"选中的列的索引集合,注意，这里的ind不是当前视图的ind，而是加上了dataFrame.range.start的全局ind",default:[]},width:{detail:"选中态背景宽度",default:1},alpha:{detail:"选中态背景透明度",default:.2},fillStyle:{detail:"选中态背景填充色",default:null},triggerEventType:{detail:"触发选中效果的事件",default:"click"}}}}}}]),s(c,[{key:"init",value:function(){this.barsSp=new N.default.Display.Sprite({id:"barsSp"}),this.txtsSp=new N.default.Display.Sprite({id:"txtsSp",context:{}})}},{key:"getNodesAt",value:function(a){var n=this.data,l=[];return G._.each(this.enabledField,function(e,t){if(G._.isArray(e))G._.each(e,function(e,t){var i=n[e]?n[e][a]:null;i&&l.push(i)});else{var i=n[e]?n[e][a]:null;i&&l.push(i)}}),l}},{key:"_getTargetField",value:function(e,t,i,a){if(G._.isString(a))return a;if(G._.isArray(a)){var n=a[e];if(G._.isString(n))return n;if(G._.isArray(n))return n[t]}}},{key:"_getColor",value:function(e,t){var i=t.field,a=G._.flatten([this.field]),n=this.app.getComponent({name:"coord"}).getFieldMapOf(i);if(G._.isFunction(e)&&(e=e.apply(this,[t])),G._.isString(e)&&(e=e),G._.isArray(e)&&(e=G._.flatten(e)[G._.indexOf(a,i)]),e&&e.lineargradient&&e.lineargradient.length)if(0!=t.rectHeight){var l=this.ctx.createLinearGradient(t.x,t.fromY+t.rectHeight,t.x,t.fromY);G._.each(e.lineargradient,function(e){l.addColorStop(e.position,e.color)}),e=l}else e=e.lineargradient[parseInt(e.lineargradient.length/2)].color;return null==e&&(e=n.color),e}},{key:"_getBarWidth",value:function(e,t){return this.node.width?G._.isFunction(this.node.width)?this.node._width=this.node.width(e):this.node._width=this.node.width:(this.node._width=t-Math.max(1,.2*t),1==this.node._width&&3<e&&(this.node._width=e-2)),this.node._width<1&&(this.node._width=1),this.node._width=parseInt(this.node._width),this.node._width>this.node.maxWidth&&(this.node._width=this.node.maxWidth),this.node._width}},{key:"show",value:function(){this.draw()}},{key:"hide",value:function(a){G._.each(this.barsSp.children,function(e,t){var i=e.getChildById("bar_"+t+"_"+a);i&&i.destroy()}),G._.each(this.txtsSp.children,function(e,t){var i=e.getChildById("text_"+t+"_"+a);i&&i.destroy()}),this.draw()}},{key:"resetData",value:function(e){this.dataFrame=e,this.draw()}},{key:"clean",value:function(){this.data={},this.barsSp.removeAllChildren(),this.label.enabled&&this.txtsSp.removeAllChildren()}},{key:"draw",value:function(e){e=e||{},G._.extend(!0,this,e);var A=this,k=A.animation&&!e.resize;if(this.data=this._trimGraphs(),0==this.enabledField.length||0==this._dataLen)return A._preDataLen=0,void this.clean();var F=A._preDataLen,O=this.enabledField.length,L=0,P=A.node._count=0,I=A.app.getComponents({name:"graphs",type:"bar"});G._.each(I,function(e,t){e==A&&(P=t)}),G._.each(this.enabledField,function(e,t){var i=(e=G._.flatten([e])).length;if(0!=i){L=A.width/A._dataLen,A._barsLen=A._dataLen*O;for(var a=0;a<A._dataLen;a++){var n=null;if(0==t){if(a<=F-1?n=A.barsSp.getChildById("barGroup_"+a):(n=new N.default.Display.Sprite({id:"barGroup_"+a}),A.barsSp.addChild(n),n.iNode=a),!P){var l,o=L*A.select.width;1<A.select.width&&(o=A.select.width),a<=F-1?((l=n.getChildById("group_region_"+a)).context.width=o,l.context.x=L*a+(L-o)/2,l.context.globalAlpha=-1<G._.indexOf(A.select.inds,A.dataFrame.range.start+a)?A.select.alpha:0):(l=new B({id:"group_region_"+a,pointChkPriority:!1,hoverClone:!1,xyToInt:!1,context:{x:L*a+(L-o)/2,y:-A.height,width:o,height:A.height,fillStyle:A._getGroupRegionStyle(a),globalAlpha:-1<G._.indexOf(A.select.inds,A.dataFrame.range.start+a)?A.select.alpha:0}}),n.addChild(l),l.iNode=a,l.on(G.event.types.get(),function(e){e.eventInfo={iNode:this.iNode},C.bind(this)(e),A.app.fire(e.type,e)}))}}else n=A.barsSp.getChildById("barGroup_"+a);var r=null;0==t?a<=F-1?r=A.txtsSp.getChildById("txtGroup_"+a):(r=new N.default.Display.Sprite({id:"txtGroup_"+a}),A.txtsSp.addChild(r),r.iGroup=t):r=A.txtsSp.getChildById("txtGroup_"+a);for(var d=0;d<i;d++){A.node._count++;var s=A.data[e[d]][a];s.iGroup=t,s.iNode=a,s.iLay=d;var h=s.y-s.fromY;isNaN(s.value)?h=0:Math.abs(h)<A.node.minHeight&&(h=A.node.minHeight),s.rectHeight=h;var f=A._getColor(A.node.fillStyle,s);if((s.color=f)instanceof CanvasGradient&&A.node.fillStyle.lineargradient){var u=A.node.fillStyle.lineargradient[parseInt(A.node.fillStyle.lineargradient.length/2)];u&&(s.color=u.color)}var c={x:Math.round(s.x),y:s.fromY,width:A.node._width,height:h,fillStyle:f,fillAlpha:A.node.fillAlpha,scaleY:-1};s.width=c.width;var p={x:c.x,y:s.yOriginPoint.pos,width:c.width,height:c.height,fillStyle:c.fillStyle,fillAlpha:A.node.fillAlpha,scaleY:0};if(A.node.radius&&s.isLeaf&&!A.proportion){var y=Math.min(A.node._width/2,Math.abs(h));y=Math.min(y,A.node.radius),p.radius=[y,y,0,0]}k||(delete p.scaleY,p.y=c.y);var g=null,_="bar_"+a+"_"+s.field;if(a<=F-1&&(g=n.getChildById(_)),g?g.context.fillStyle=f:((g=new B({id:_,context:p})).field=s.field,n.addChild(g),g.on(G.event.types.get(),function(e){e.eventInfo={trigger:A.node,nodes:[this.nodeData]},C.bind(this)(e),A.app.fire(e.type,e)})),g.finalPos=c,g.iGroup=t,g.iNode=a,g.iLay=d,(g.nodeData=s).nodeElement=g,A.node.filter&&A.node.filter.apply(g,[s,A]),A.label.enabled){var b=s.value;if(G._.isFunction(A.label.format)){var v=A.label.format(b,s);void 0===v&&null===v||(b=v)}if(null==b||""===b)continue;G._.isNumber(b)&&(b=(0,D.numAddSymbol)(b));var x={fillStyle:A.label.fontColor||c.fillStyle,fontSize:A.label.fontSize,lineWidth:A.label.lineWidth,strokeStyle:A.label.strokeStyle||c.fillStyle,textBaseline:A.label.verticalAlign,rotation:A.label.rotation},m=A._getTextPos(c,s);x.x=m.x,x.y=m.y,x.textAlign=A._getTextAlign(c,s);var w=null,S="text_"+a+"_"+s.field;a<=F-1&&(w=r.getChildById(S)),w?(w.resetText(b),w.context.x=x.x,w.context.y=x.y):((w=new N.default.Display.Text(b,{id:S,context:x})).field=s.field,r.addChild(w))}}}}function C(e){if(A.select.enabled&&e.type==A.select.triggerEventType){var t=A.dataFrame.range.start+this.iNode;-1<G._.indexOf(A.select.inds,t)?G._.each(I,function(e){e.unselectAt(t)}):G._.each(I,function(e){e.selectAt(t)})}}}),this.sprite.addChild(this.barsSp),this.label.enabled&&this.sprite.addChild(this.txtsSp),this.sprite.context.x=this.origin.x,this.sprite.context.y=this.origin.y,this.grow(function(){A.fire("complete")},{delay:0,duration:300,animate:k}),A._preDataLen=A._dataLen}},{key:"setEnabledField",value:function(){this.enabledField=this.app.getComponent({name:"coord"}).filterEnabledFields(this.field)}},{key:"_getGroupRegionStyle",value:function(e){var t=this,i=t.select.fillStyle;return G._.isArray(t.select.fillStyle)&&(i=t.select.fillStyle[e]),G._.isFunction(t.select.fillStyle)&&(i=t.select.fillStyle.apply(this,[{iNode:e,rowData:t.dataFrame.getRowDataAt(e)}])),null==i?t.select._fillStyle:i}},{key:"_trimGraphs",value:function(){var y=this,g=this.app.getComponent({name:"coord"});this.setEnabledField(),this.data={};var t=[],i=0,a=0,n=!1;this.absolute?(t=[this],i=this.enabledField.length):G._.each(y.app.getComponents({name:"graphs",type:"bar"}),function(e){e.absolute||(e===y&&(n=!0),n?e.setEnabledField():a+=e.enabledField.length,i+=e.enabledField.length,t.push(e))});var _=g.getAxis({type:"xAxis"}).getCellLength(),e=_/(i+1),b=this._getBarWidth(_,e),v=e-b;null!=this.node.xDis&&(v=this.node.xDis);var x=(_-b*i-v*(i-1))/2;a&&(x+=(v+b)*a);var l=this.dataFrame.getDataOrg(this.enabledField),o=y.getGraphSelectOpt();return!y.select.inds.length&&o&&o.inds&&o.inds.length&&(y.select.inds=G._.clone(o.inds)),G._.each(l,function(u,c){var p=[];G._.each(u,function(e,f){p[f]=[],y._dataLen=e.length,G._.each(e,function(e,i){var a=e;y.proportion&&(a=0,G._.each(u,function(e,t){a+=e[i]}));var t=y._getTargetField(c,f,i,y.enabledField),n=g.getPoint({iNode:i,field:t,value:{y:e}}),l=n.pos.x,o=l-_/2+x+(b+v)*c,r=0;r=y.proportion?-e/a*g.height:n.pos.y,isNaN(r)&&(r=0);var h=g.getAxisOriginPoint({field:t}),d=function e(t,i,a,n,l){var o=t[i-1];if(!o)return h.pos;var r=o[a].y,d=o[a].value,s=h.value;return s<=n?s<=d?(o[a].isLeaf=!1,r):e(t,i-1,a,n,l):d<s?(o[a].isLeaf=!1,r):e(t,i-1,a,n,l)}(p,f,i,e,r);r+=d-h.pos;var s={type:"bar",value:e,vInd:f,vCount:a,field:t,fromX:o,fromY:d,x:o,y:r,width:b,yOriginPoint:h,isLeaf:!0,xAxis:g.getAxis({type:"xAxis"}).getNodeInfoOfX(l),iNode:i,rowData:y.dataFrame.getRowDataAt(i),color:null,selected:!1};y.data[s.field]||(y.data[s.field]=p[f]),-1<G._.indexOf(y.select.inds,i)&&(s.selected=!0),p[f].push(s)})})}),y.data}},{key:"_getTextAlign",value:function(e,t){var i=this.label.textAlign;return t.value<t.yOriginPoint.value&&("left"==i?i="right":"right"==i&&(i="left")),i}},{key:"_getTextPos",value:function(e,t){var i={x:0,y:0},a=e.x,n=e.y,l=!0;switch(e.y>=t.y&&(l=!1),this.label.position){case"top":a=e.x+e.width/2,n=e.y+e.height,l&&(n+=16);break;case"topRight":a=e.x+e.width,n=e.y+e.height,l&&(n+=16);break;case"right":a=e.x+e.width,n=e.y+e.height/2;break;case"rightBottom":a=e.x+e.width,n=e.y;break;case"bottom":a=e.x+e.width/2,n=e.y;break;case"bottomLeft":a=e.x,n=e.y;break;case"left":a=e.x,n=e.y+e.height/2;break;case"leftTop":a=e.x,n=e.y+e.height,l&&(n+=16);break;case"center":a=e.x+e.width/2,n=e.y+e.height/2}a-=this.label.offsetX;var o=1;return t.value<t.yOriginPoint.value&&(o=-1),n-=o*this.label.offsetY,i.x=a,i.y=n,i}},{key:"grow",value:function(r,e){var d=this;if(d._preDataLen>d._dataLen)for(var t=d._dataLen,i=d._preDataLen;t<i;t++)d.barsSp.getChildAt(t).destroy(),d.label.enabled&&d.txtsSp.getChildAt(t).destroy(),t--,i--;if(e.animate){var s=G._.extend({delay:Math.min(1e3/this._barsLen,80),easing:"Linear.None",duration:500},e),h=0;G._.each(d.enabledField,function(e,t){var i=(e=G._.flatten([e])).length;if(0!=i)for(var a=0;a<d._dataLen;a++)for(var n=0;n<i;n++){var l=d.data[e[n]][a],o=d.barsSp.getChildById("barGroup_"+a).getChildById("bar_"+a+"_"+l.field);0==s.duration?(o.context.scaleY=1,o.context.y=1*o.finalPos.y,o.context.x=o.finalPos.x,o.context.width=o.finalPos.width,o.context.height=o.finalPos.height):(o._tweenObj&&f.destroyTween(o._tweenObj),o._tweenObj=o.animate({scaleY:1,y:1*o.finalPos.y,x:o.finalPos.x,width:o.finalPos.width,height:o.finalPos.height},{duration:s.duration,easing:s.easing,delay:a*s.delay,onUpdate:function(){},onComplete:function(e){e.width<3&&this.context&&(this.context.radius=0),++h===d.node._count&&r&&r(d)},id:o.id}))}})}else r&&r(d)}},{key:"selectAt",value:function(e){var a=this;if(!(-1<G._.indexOf(this.select.inds,e))){this.select.inds.push(e);var n=e-this.dataFrame.range.start;G._.each(this.data,function(e,t){var i=e[n];i.selected=!0,a.setNodeElementStyle(i)});var t=this.barsSp.getChildById("barGroup_"+n);if(t){var i=t.getChildById("group_region_"+n);i&&(i.context.globalAlpha=this.select.alpha)}}}},{key:"unselectAt",value:function(e){var a=this;if(-1!=G._.indexOf(this.select.inds,e)){var t=G._.indexOf(this.select.inds,e);this.select.inds.splice(t,1);var n=e-this.dataFrame.range.start;G._.each(this.data,function(e,t){var i=e[n];i.selected=!1,a.setNodeElementStyle(i)});var i=this.barsSp.getChildById("barGroup_"+n);if(i){var l=i.getChildById("group_region_"+n);l&&(l.context.globalAlpha=0)}}}},{key:"getSelectedRowList",value:function(){var t=[],i=this;return G._.each(i.select.inds,function(e){t.push(i.dataFrame.jsonOrg[e])}),t}},{key:"setNodeElementStyle",value:function(e){var t=this._getColor(this.node.fillStyle,e);e.nodeElement.context.fillStyle=t}},{key:"getGraphSelectOpt",value:function(){var t=this._opt.select;if(!t){var e=this.app.getComponents({name:"graphs",type:"bar"});G._.each(e,function(e){if(t)return!1;!t&&e._opt.select&&(t=e.select)})}return t}}]),c);function c(e,t){var i;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(i=function(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?r(e):t}(this,o(c).call(this,e,t))).type="bar",i.enabledField=null,i.node={_width:0,_count:0},i.select={_fillStyle:"#092848"},i._barsLen=0,i.txtsSp=null,G._.extend(!0,r(i),(0,G.getDefaultProps)(c.defaultProps()),e),i.init(),i}G.global.registerComponent(u,"graphs","bar"),e.default=u});