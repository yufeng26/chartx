"use strict";!function(t,e){if("function"==typeof define&&define.amd)define(["exports","../component","canvax","mmvis"],e);else if("undefined"!=typeof exports)e(exports,require("../component"),require("canvax"),require("mmvis"));else{var i={};e(i,t.component,t.canvax,t.mmvis),t.undefined=i}}(void 0,function(t,e,i,u){Object.defineProperty(t,"__esModule",{value:!0});var n=o(e),l=o(i);function o(t){return t&&t.__esModule?t:{default:t}}function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function f(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function d(t,e,i){return e&&f(t.prototype,e),i&&f(t,i),t}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var y=l.default.Shapes.BrokenLine,h=l.default.Display.Sprite,p=l.default.Display.Text,_=(function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}(b,n.default),d(b,null,[{key:"defaultProps",value:function(){return{markTo:{detail:"标准哪个目标字段",default:null},yVal:{detail:"组件的值",default:0,documentation:"可能是个function，均值计算就是个function"},line:{detail:"线的配置",propertys:{strokeStyle:{detail:"线的颜色",default:"#999999"},lineWidth:{detail:"线宽",default:1},lineType:{detail:"线样式",default:"dashed"}}},label:{detail:"文本",propertys:{enabled:{detail:"是否开启",default:!1},fontColor:{detail:"文本字体颜色",default:"#999999"},fontSize:{detail:"文本字体大小",default:12},text:{detail:"文本内容",default:null},format:{detail:"文本格式化函数",default:null}}}}}}]),d(b,[{key:"draw",value:function(){this._calculateProps(),this.setPosition(),this.widget()}},{key:"_calculateProps",value:function(){var t=this._opt,n=t.markTo,e=this.app.getComponent({name:"coord"});if(!n||-1!=u._.indexOf(this.app.dataFrame.fields,n)){var i,l=e._yAxis[0];n&&u._.each(e._yAxis,function(t,e){var i=u._.flatten([t.field]);0<=u._.indexOf(i,n)&&(l=t)}),t.yAxisAlign&&(l=e._yAxis["left"==t.yAxisAlign?0:1]),i=void 0!==t.y&&null!==t.y?Number(t.y):function(){var t=this.app.dataFrame.getFieldData(n),e=0;return u._.each(t,function(t){Number(t)&&(e+=t)}),e/t.length},isNaN(i)||l.drawWaterLine(i);var o="#777",a=e.getFieldMapOf(n);a&&(o=a.color);var r=t.line&&t.line.strokeStyle||o,s=t.label&&t.label.fontColor||o;this._yAxis=l,this.width=e.width,this.height=e.height,this.yVal=i,this.pos={x:e.origin.x,y:e.origin.y},this.line.list=[[0,0],[this.width,0]],this.label.fontColor=s,r&&(this.line.strokeStyle=r)}}},{key:"widget",value:function(){var t=this,e=this._getYPos(),i=new y({id:"line",context:{y:e,pointList:t.line.list,strokeStyle:t.line.strokeStyle,lineWidth:t.line.lineWidth,lineType:t.line.lineType}});if(t.sprite.addChild(i),t._line=i,t.label.enabled){var n=new p(t._getLabel(),{context:t.label});this._txt=n,t.sprite.addChild(n),t._setTxtPos(e)}this.line.y=e}},{key:"reset",value:function(t){t&&u._.extend(!0,this,t);var e=this,i=this._getYPos();i!=this.line.y&&this._line.animate({y:i},{duration:300,onUpdate:function(t){e.label.enabled&&(e._txt.resetText(e._getLabel()),e._setTxtPos(t.y))}}),this._line.context.strokeStyle=this.line.strokeStyle,this.line.y=i}},{key:"_setTxtPos",value:function(t){var e=this._txt;"left"==this._yAxis.align?e.context.x=5:e.context.x=this.width-e.getTextWidth()-5,u._.isNumber(this.label.y)?e.context.y=this.label.y:e.context.y=t-e.getTextHeight()}},{key:"_getYVal",value:function(t){var e=t=t||this.yVal;return u._.isFunction(t)&&(e=t.apply(this)),e}},{key:"_getYPos",value:function(){return-this._yAxis.getPosOfVal(this._getYVal())}},{key:"_getLabel",value:function(){var t=this._getYVal();return u._.isFunction(this.label.format)?this.label.format(t,this):u._.isString(this.label.text)?this.label.text:t}}]),b);function b(t,e){var i;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,b),(i=function(t,e){return!e||"object"!==a(e)&&"function"!=typeof e?s(t):e}(this,r(b).call(this,t,e))).name="markLine",i._yAxis=null,i.line={y:0,list:[]},i._txt=null,i._line=null,i.sprite=new h,i.app.graphsSprite.addChild(i.sprite),u._.extend(!0,s(i),(0,u.getDefaultProps)(b.defaultProps()),t),i}u.global.registerComponent(_,"markLine"),t.default=_});