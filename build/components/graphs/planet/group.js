define("components/graphs/planet/group",["canvax"],function(t,i,e){"use strict";i.__esModule=!0;var a=t("canvax"),n=a.default._,r=(a.default.Display.Text,a.default.Shapes.Circle),s=function(){function t(t,i,e){this._opt=t,this.dataFrame=i,this._graphs=e,this.root=e.root,this._coord=this.root._coord,this.field=null,this.iGroup=0,this.groupLen=1,this.rRange={start:0,to:0},this.width=0,this.height=0,this.node={shapeType:"circle",maxR:30,minR:5,lineWidth:2,strokeStyle:"#fff",fillStyle:"#f2fbfb",radius:15,focus:{enabled:!0},select:{enabled:!1,alpha:.2,strokeStyle:null,_strokeStyle:"#092848",triggerEventType:"click",lineWidth:2}},this.selectInds=[],this.label={enabled:!0,fontColor:"#666",fontSize:13,position:null},this.sort="desc",this.sortField=null,this.layoutType="radian",this.pit={radius:30},this.planets=[],this.maxRingNum=0,this.ringNum=0,n.extend(!0,this,t),this.node.maxR>this.pit.radius&&(this.pit.radius=this.node.maxR),this.init()}return t.prototype.init=function(){this.sprite=new a.default.Display.Sprite({id:"group_"+this.iGroup,context:{x:this._coord.origin.x,y:this._coord.origin.y}}),this._trimGraphs(),this.draw()},t.prototype._trimGraphs=function(){var t=this;(this._coord.maxR-this.rRange.to)/(2*this.pit.radius)<this.groupLen-1-this.iGroup&&(this.rRange.to=this._coord.maxR-(this.groupLen-1-this.iGroup)*this.pit.radius*2),this.rRange.to-this.rRange.start<2*this.pit.radius&&(this.rRange.to=this.rRange.start+2*this.pit.radius),this.maxRingNum||(this.maxRingNum=parseInt((this.rRange.to-this.rRange.start)/(2*this.pit.radius),10),this.ringNum=this.maxRingNum),this.rRange.to=this.rRange.start+this.ringNum*this.pit.radius*2;for(var i=[],e=this.dataFrame.length,a=0;a<e;a++){var r=this.dataFrame.getRowData(a),s={groupLen:this.groupLen,iGroup:t.iGroup,iNode:a,node:null,rowData:r,iRing:null,iPlanet:null,fillStyle:null,color:null,strokeStyle:null,pit:null,ringInd:-1,field:t.field,label:r[t.field],focused:!1,selected:!1};i.push(s)}t.sortField&&(i=i.sort(function(i,e){var a=t.sortField;return"desc"==t.sort?e.rowData[a]-i.rowData[a]:i.rowData[a]-e.rowData[a]}),n.each(i,function(t,i){t.iNode=i})),this._rings=this["_setRings_"+this.layoutType+"Range"](i),this.planets=i},t.prototype._setRings_radianRange=function(t){for(var i=this,e=[],a=0,r=this.ringNum;a<r;a++){var s=a*this.pit.radius*2+this.pit.radius+this.rRange.start;i._graphs.center.enabled||(s=a*this.pit.radius*2+this.rRange.start);var o=this._coord.getRadiansAtR(s,i.width,i.height);Math.atan(this.pit.radius/s);e.push({arcs:o,pits:[],planets:[],radius:s,max:0})}var l=0;n.each(e,function(t,e){var a=2*Math.asin(i.pit.radius/t.radius);0==t.radius&&(a=2*Math.PI);var r=0;n.each(t.arcs,function(e){var n=i._getDiffRadian(e[0].radian,e[1].radian);if(n>=a){var s=parseInt(n/a,10);r+=s;for(var o=0;o<s;o++){var l={hasRadish:!1,start:(e[0].radian+a*o+2*Math.PI)%(2*Math.PI)};l.middle=(l.start+a/2+2*Math.PI)%(2*Math.PI),l.to=(l.start+a+2*Math.PI)%(2*Math.PI),t.pits.push(l)}}}),t.max=r,l+=r,t.pits=n.shuffle(t.pits)});var h=0;return n.each(e,function(i,a){if(h>=t.length)return!1;var r=Math.ceil(i.max/l*t.length);r=Math.min(i.max,r),i.planets=t.slice(h,h+r),a==e.length-1&&(i.planets=t.slice(h)),h+=r,n.each(i.planets,function(t,e){if(!(e>=i.pits.length)){var a=n.filter(i.pits,function(t){return!t.hasRadish}),r=a[parseInt(Math.random()*a.length)];r.hasRadish=!0,t.pit=r}})}),e},t.prototype._getDiffRadian=function(t,i){var e=i-t;return i<t&&(e=(i+2*Math.PI-t)%(2*Math.PI)),e},t.prototype._setRings_indexRange=function(t){},t.prototype._setRings_valRange=function(t){},t.prototype.draw=function(){var t=this;n.each(this._rings,function(i,e){var s={rotation:0};1==i.arcs.length&&0==i.arcs[0][0].radian&&i.arcs[0][1].radian==2*Math.PI&&(s.rotation=parseInt(360*Math.random()));var o=new a.default.Display.Sprite({context:s});n.each(i.planets,function(l,h){if(l.pit){var d=t._coord.getPointInRadianOfR(l.pit.middle,i.radius),p=t._getRProp(t.node.radius,e,h,l),u=t.node.maxR-p,c=parseInt(Math.random()*u),g=parseInt(360*Math.random())*Math.PI/180;0!=c&&(d.x+=Math.sin(g)*c,d.y+=Math.cos(g)*c);var f=t._getProp(t.node.fillStyle,e,h,l),x=t._getProp(t.node.strokeStyle,e,h,l),_={x:d.x,y:d.y,r:p,fillStyle:f,lineWidth:t._getProp(t.node.lineWidth,e,h,l),strokeStyle:x,cursor:"pointer"};l.color=l.fillStyle=f,l.strokeStyle=x,l.iRing=e,l.iPlanet=h;var y=new r({hoverClone:!1,context:_});y.on("mousedown mouseup panstart mouseover panmove mousemove panend mouseout tap click dblclick",function(i){if(i.eventInfo={title:null,nodes:[this.nodeData]},this.nodeData.label&&(i.eventInfo.title=this.nodeData.label),t.root.fire(i.type,i),t.node.select.enabled&&i.type==t.node.select.triggerEventType){var e=t.dataFrame.range.start+this.iNode;n.indexOf(t.node.select.inds,e)>-1?t.unselectAt(e):t.selectAt(e)}t._graphs.triggerEvent(t.node,i)}),y.nodeData=l,l.node=y,y.ringInd=e,y.planetIndInRing=h,o.addChild(y);var m={x:d.x,y:d.y,fontSize:t.label.fontSize,textAlign:"center",textBaseline:"middle",fillStyle:t.label.fontColor,rotation:-s.rotation,rotateOrigin:{x:0,y:0}},R=new a.default.Display.Text(l.label,{context:m}),v=R.getTextWidth(),M=R.getTextHeight();if(t.label.position){if(n.isFunction(t.label.position)){var I=t.label.position({node:y,circleR:p,circleCenter:{x:d.x,y:d.y},textWidth:v,textHeight:M});m.rotation=-s.rotation,m.rotateOrigin={x:-(I.x-m.x),y:-(I.y-m.y)},m.x=I.x,m.y=I.y,v>2*p&&(m.fontSize=t.label.fontSize-3)}}else v>2*p&&(m.y=d.y+p+3,m.textBaseline="top",m.rotation=-s.rotation,m.rotateOrigin={x:0,y:-(p+3)});R=new a.default.Display.Text(l.label,{context:m}),y.textNode=R,R.nodeData=l,l.textNode=R,o.addChild(R)}}),t.sprite.addChild(o)})},t.prototype._getRProp=function(t,i,e,a){var r=this;if(n.isString(t)&&n.indexOf(r.dataFrame.fields,t)>-1){void 0==this.__rValMax&&void 0==this.__rValMax&&(this.__rValMax=0,this.__rValMin=0,n.each(r.planets,function(i){r.__rValMax=Math.max(r.__rValMax,i.rowData[t]),r.__rValMin=Math.min(r.__rValMin,i.rowData[t])}));var s=a.rowData[t];return r.node.minR+(s-this.__rValMin)/(this.__rValMax-this.__rValMin)*(r.node.maxR-r.node.minR)}return r._getProp(t,i,e,a)},t.prototype._getProp=function(t,i,e,a){this.iGroup;return n.isFunction(t)?t(a):t},t}();i.default=s});