define("components/graphs/venn/index",["canvax","../index","../../../layout/venn/layout","../../../layout/venn/circleintersection","fmin"],function(e,t,n){"use strict";var i,l=this&&this.__extends||(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});t.__esModule=!0;var a=e("canvax"),r=e("../index"),s=e("../../../layout/venn/layout"),o=e("../../../layout/venn/circleintersection"),d=e("fmin"),h=a.default._,c=a.default.Display.Text,u=a.default.Shapes.Path,f=a.default.Shapes.Circle,p=function(e){function t(t,n){var i=e.call(this,t,n)||this;return i.type="venn",i.keyField=null,i.valueField=null,i.node={strokeStyle:null,lineWidth:2,lineAlpha:0,fillStyle:null,fillAlpha:.25,focus:{enabled:!0,lineAlpha:.3},select:{enabled:!0,lineWidth:2,strokeStyle:"#666"}},i.label={field:null,fontSize:14,fontColor:null,fontWeight:"normal",showInter:!0},i.vennData=null,h.extend(!0,i,t),i._dataCircleLen=0,i._dataLabelLen=0,i._dataPathLen=0,i.init(),i}return l(t,e),t.prototype.init=function(){this.sprite=new a.default.Display.Sprite({id:"venn_graphs"}),this.venn_circles=new a.default.Display.Sprite({id:"venn_circles"}),this.sprite.addChild(this.venn_circles),this.venn_paths=new a.default.Display.Sprite({id:"venn_paths"}),this.sprite.addChild(this.venn_paths),this.venn_labels=new a.default.Display.Sprite({id:"venn_labels"}),this.sprite.addChild(this.venn_labels)},t.prototype.draw=function(e){!e&&(e={}),h.extend(!0,this,e),this.data=this._trimGraphs(),this._widget(),this.sprite.context.x=this.root.padding.left,this.sprite.context.y=this.root.padding.top,this.fire("complete")},t.prototype.resetData=function(e,t){this.dataFrame=e,this.data=this._trimGraphs(),this._widget()},t.prototype._trimGraphs=function(){var e=this,t=e._vennData(),n=s.venn,i=s.lossFunction,l=Math.PI/2,a={},r={};if(this._dataCircleLen=0,this._dataLabelLen=0,this._dataPathLen=0,t.length>0){var d=n(t,{lossFunction:i});d=s.normalizeSolution(d,l,null),a=s.scaleSolution(d,this.width,this.height,0),r=function(e,t){for(var n={},i=function(e){var t={},n=[];for(var i in e)n.push(i),t[i]=[];for(var l=0;l<n.length;l++)for(var a=e[n[l]],r=l+1;r<n.length;++r){var s=e[n[r]],d=o.distance(a,s);d+s.radius<=a.radius+1e-10?t[n[r]].push(n[l]):d+a.radius<=s.radius+1e-10&&t[n[l]].push(n[r])}return t}(e),l=0;l<t.length;++l){for(var a=t[l].sets,r={},s={},d=0;d<a.length;++d){r[a[d]]=!0;for(var h=i[a[d]],c=0;c<h.length;++c)s[h[c]]=!0}var u=[],f=[];for(var p in e)p in r?u.push(e[p]):p in s||f.push(e[p]);var y=v(u,f);n[a]=y,y.disjoint&&t[l].size}return n}(a,t)}var c=0,u=0;return h.each(t,function(t,n){if(t.label&&(t.sets.length>1&&!e.label.showInter||(t.labelPosition=r[t.nodeId],e._dataLabelLen++)),t.sets.length>1){var i=function(e){var t={};o.intersectionArea(e,t);var n=t.arcs;if(0===n.length)return"M 0 0";if(1==n.length){var i=n[0].circle;return function(e,t,n){var i=[];return i.push("\nM",e,t),i.push("\nm",-n,0),i.push("\na",n,n,0,1,0,2*n,0),i.push("\na",n,n,0,1,0,2*-n,0),i.join(" ")}(i.x,i.y,i.radius)}for(var l=["\nM",n[0].p2.x,n[0].p2.y],a=0;a<n.length;++a){var r=n[a],s=r.circle.radius,d=r.width>s;l.push("\nA",s,s,0,d?1:0,1,r.p1.x,r.p1.y)}return l.join(" ")+" z"}(t.sets.map(function(e){return a[e]}));t.shape={type:"path",path:i,pathInd:u++},e._dataPathLen++}else 1==t.sets.length&&(t.shape=h.extend({type:"circle",circleInd:c++},a[t.nodeId]),e._dataCircleLen++)}),t},t.prototype._vennData=function(){for(var e=[],t=0,n=this.dataFrame.length;t<n;t++){var i=this.dataFrame.getRowData(t),l={iNode:t,nodeId:null,rowData:i,sets:null,size:null,value:null,fillStyle:null,strokeStyle:null,label:null,labelPosition:null};for(var a in i){var r=i[a];a==this.keyField?(h.isArray(r)||(r=r.split(/[,|]/)),l.sets=r,l.nodeId=r.join()):a==this.valueField?(l.size=r,l.value=r):a==this.label.field&&(l.label=r)}e.push(l)}return e},t.prototype._getStyle=function(e,t,n,i){var l;return h.isString(e)&&(l=e),h.isFunction(e)&&(l=e(n)),l||void 0==t||(l=this.root.getTheme(t)),l||void 0==i||(l=i),l},t.prototype._widget=function(){var e=this;if(e.venn_circles.children.length>e._dataCircleLen)for(var t=e._dataCircleLen;t<e.venn_circles.children.length;t++)e.venn_circles.getChildAt(t--).destroy();if(e.venn_paths.children.length>e._dataPathLen)for(t=e._dataPathLen;t<e.venn_paths.children.length;t++)e.venn_paths.getChildAt(t--).destroy();if(e.venn_labels.children.length>e._dataLabelLen)for(t=e._dataLabelLen;t<e.venn_labels.children.length;t++)e.venn_labels.getChildAt(t--).destroy();var n=0,i=0,l=0;h.each(this.data,function(t,a){var r,s=t.shape,o=!0;if(s){var d;if("circle"==s.type){var h=e._getStyle(e.node.fillStyle,s.circleInd,t),p=e._getStyle(e.node.strokeStyle,s.circleInd,t);t.fillStyle=h,t.strokeStyle=p,d={x:s.x,y:s.y,r:s.radius,fillStyle:h,fillAlpha:e.node.fillAlpha,lineWidth:e.node.lineWidth,strokeStyle:p,lineAlpha:e.node.lineAlpha},(r=e.venn_circles.getChildAt(n++))?(o=!1,r.animate(d)):(r=new f({pointChkPriority:!1,hoverClone:!1,context:d}),e.venn_circles.addChild(r))}"path"==t.shape.type&&(d={path:s.path,fillStyle:"#ffffff",fillAlpha:0,lineWidth:e.node.lineWidth,strokeStyle:"#ffffff",lineAlpha:0},(r=e.venn_paths.getChildAt(i++))?(o=!1,r.context.path=s.path):(r=new u({pointChkPriority:!1,context:d}),e.venn_paths.addChild(r))),r.nodeData=t,t._node=r,e.node.focus.enabled&&r.hover(function(t){e.focusAt(this.nodeData.iNode)},function(t){!this.nodeData.selected&&e.unfocusAt(this.nodeData.iNode)}),o&&r.on("mousedown mouseup panstart mouseover panmove mousemove panend mouseout tap click dblclick",function(t){t.eventInfo={title:null,nodes:[this.nodeData]},e.root.fire(t.type,t),e.triggerEvent(e.node,t)})}if(t.label&&e.label.enabled){var v=e._getStyle(e.label.fontColor,s.circleInd,t,"#999"),y=e.label.fontSize;if(t.sets.length>1&&(e.label.showInter?y-=2:y=0),y){var _={x:t.labelPosition.x,y:t.labelPosition.y,fontSize:y,textBaseline:"middle",textAlign:"center",fontWeight:e.label.fontWeight,fillStyle:v},g=e.venn_labels.getChildAt(l++);g?(g.resetText(t.label),g.animate(_)):(g=new c(t.label,{context:_}),e.venn_labels.addChild(g))}}})},t.prototype.focusAt=function(e){var t=this.data[e];if(this.node.focus.enabled&&!t.focused){var n=t._node.context;t.sets.length>1?n.lineAlpha=1:n.lineAlpha=this.node.focus.lineAlpha,t.focused=!0}},t.prototype.unfocusAt=function(e){var t=this.data[e];this.node.focus.enabled&&t.focused&&(t._node.context.lineAlpha=this.node.lineAlpha,t.focused=!1)},t.prototype.selectAt=function(e){var t=this.data[e];if(this.node.select.enabled&&!t.selected){var n=t._node.context;n.lineWidth=this.node.select.lineWidth,n.lineAlpha=this.node.select.lineAlpha,n.strokeStyle=this.node.select.strokeStyle,t.selected=!0}},t.prototype.unselectAt=function(e){var t=this.data[e];this.node.select.enabled&&t.selected&&(t._node.context.strokeStyle=this.node.strokeStyle,t.selected=!1)},t}(r.default);function v(e,t){var n,i=[];for(n=0;n<e.length;++n){var l=e[n];i.push({x:l.x,y:l.y}),i.push({x:l.x+l.radius/2,y:l.y}),i.push({x:l.x-l.radius/2,y:l.y}),i.push({x:l.x,y:l.y+l.radius/2}),i.push({x:l.x,y:l.y-l.radius/2})}var a=i[0],r=y(i[0],e,t);for(n=1;n<i.length;++n){var s=y(i[n],e,t);s>=r&&(a=i[n],r=s)}var h=d.nelderMead(function(n){return-1*y({x:n[0],y:n[1]},e,t)},[a.x,a.y],{maxIterations:500,minErrorDelta:1e-10}).x,c={x:h[0],y:h[1]},u=!0;for(n=0;n<e.length;++n)if(o.distance(c,e[n])>e[n].radius){u=!1;break}for(n=0;n<t.length;++n)if(o.distance(c,t[n])<t[n].radius){u=!1;break}if(!u)if(1==e.length)c={x:e[0].x,y:e[0].y};else{var f={};o.intersectionArea(e,f),c=0===f.arcs.length?{x:0,y:-1e3,disjoint:!0}:1==f.arcs.length?{x:f.arcs[0].circle.x,y:f.arcs[0].circle.y}:t.length?v(e,[]):o.getCenter(f.arcs.map(function(e){return e.p1}))}return c}function y(e,t,n){var i,l,a=t[0].radius-o.distance(t[0],e);for(i=1;i<t.length;++i)(l=t[i].radius-o.distance(t[i],e))<=a&&(a=l);for(i=0;i<n.length;++i)(l=o.distance(n[i],e)-n[i].radius)<=a&&(a=l);return a}t.default=p});