"use strict";!function(e,t){if("function"==typeof define&&define.amd)define(["exports","canvax","mmvis"],t);else if("undefined"!=typeof exports)t(exports,require("canvax"),require("mmvis"));else{var n={};t(n,e.canvax,e.mmvis),e.undefined=n}}(void 0,function(e,t,u){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,i=(n=t)&&n.__esModule?n:{default:n};function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function a(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function f(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=i.default.Shapes.Line,c=i.default.Shapes.Circle,p=i.default.Shapes.Polygon,y=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(h,u.event.Dispatcher),f(h,null,[{key:"defaultProps",value:function(){return{enabled:{detail:"是否开启grid",default:!1},ring:{detail:"环背景线",propertys:{shapeType:{detail:"线的图形样式，默认poly，可选circle",default:"poly"},lineType:{detail:"线条样式，sold实线，dashed虚线",default:"sold"},lineWidth:{detail:"线宽",default:1},strokeStyle:{detail:"线颜色",default:"#e5e5e5"},fillStyle:{detail:"环填充色,支持函数配置",default:null},fillAlpha:{detail:"环填充的透明度",default:.5}}},ray:{detail:"射线",propertys:{enabled:{detail:"是否开启",default:!0},lineWidth:{detail:"线宽",default:1},strokeStyle:{detail:"线颜色",default:"#e5e5e5"}}}}}}]),f(h,[{key:"init",value:function(){this.sprite=new i.default.Display.Sprite}},{key:"setX",value:function(e){this.sprite.context.x=e}},{key:"setY",value:function(e){this.sprite.context.y=e}},{key:"draw",value:function(e){u._.extend(!0,this,e),this._widget(),this.setX(this.pos.x),this.setY(this.pos.y)}},{key:"clean",value:function(){this.sprite.removeAllChildren()}},{key:"reset",value:function(){}},{key:"_widget",value:function(){var a=this;u._.each(this.dataSection,function(e,t){if(e){var n,i=a.app.getROfNum(e),l=a.app.getPointsOfR(i),o={lineWidth:a.ring.lineWidth,strokeStyle:a._getStyle(a.ring.strokeStyle,t-1),fillStyle:a._getStyle(a.ring.fillStyle,t-1),fillAlpha:a.ring.fillAlpha},r=c;n="circle"==a.ring.shapeType?(o.r=i,new r({context:o})):(o.pointList=[],u._.each(l,function(e,t){t<l.length&&o.pointList.push([e.x,e.y])}),new(r=p)({context:o})),a.sprite.addChildAt(n,0),t==a.dataSection.length-1&&(o.fillAlpha=0,o.fillStyle="#ffffff",a.induce=new r({context:o}),a.sprite.addChild(a.induce)),u._.each(l,function(e){var t=new d({context:{end:e,lineWidth:a.ring.lineWidth,strokeStyle:a.ring.strokeStyle}});a.sprite.addChild(t)})}})}},{key:"_getStyle",value:function(e,t){return u._.isArray(e)?e[t%e.length]:e}}]),h);function h(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,h),(n=function(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?r(e):t}(this,o(h).call(this,e,t))).width=0,n.height=0,n.app=t,n.pos={x:0,y:0},n.dataSection=[],n.sprite=null,n.induce=null,u._.extend(!0,r(n),(0,u.getDefaultProps)(h.defaultProps()),e),n.init(e),n}e.default=y});