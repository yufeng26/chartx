define("chartx/components/line/Group",["canvax/index","canvax/shape/BrokenLine","canvax/shape/Circle","canvax/shape/Path","chartx/utils/tools","chartx/utils/colorformat"],function(a,b,c,d,e,f){window.Canvax=a;var g=function(a,b,c){this._groupInd=a,this._nodeInd=-1,this.ctx=c,this.w=0,this.h=0,this.y=0,this.colors=["#26b471","#7aa1ff","#fa8529","#ff7c4d","#2494ed","#7aa1ff","#fa8529","#ff7c4d"],this.line={strokeStyle:{normal:this.colors[this._groupInd],over:null},smooth:!0},this.node={enabled:1,control:function(){},mode:0,r:{normal:2,over:3},fillStyle:{normal:"#ffffff",over:"#ffffff"},strokeStyle:{normal:null,over:null},lineWidth:{normal:2,over:2}},this.fill={fillStyle:{normal:null,over:null},gradient:!0,alpha:.1},this.data=[],this.sprite=null,this.init(b)};return g.prototype={init:function(b){_.deepExtend(this,b),this.line.strokeStyle.over||(this.line.strokeStyle.over=this.line.strokeStyle.normal),!this.node.strokeStyle.normal&&(this.node.strokeStyle.normal=this.line.strokeStyle.normal),!this.node.strokeStyle.over&&(this.node.strokeStyle.over=this.line.strokeStyle.over),!this.fill.fillStyle.normal&&(this.fill.fillStyle.normal=this.line.strokeStyle.normal),!this.fill.fillStyle.over&&(this.fill.fillStyle.over=this.line.strokeStyle.over),this.sprite=new a.Display.Sprite},draw:function(a){_.deepExtend(this,a),this._widget()},_getColor:function(a){var b=this._getProp(a);return b&&""!=b||(b=this.colors[this._groupInd]),b},_getProp:function(a){return _.isArray(a)?a[this._groupInd]:_.isFunction(a)?a({iGroup:this._groupInd,iNode:this._nodeInd}):a},getNodeInfoAt:function(a){var b=this;b._nodeInd=a;var c=_.clone(b.data[a]);return c?(c.r=b._getProp(b.node.r.over),c.fillStyle=b._getProp(b.node.fillStyle.over)||"#ffffff",c.strokeStyle=b._getProp(b.node.strokeStyle.over)||b._getColor(b.line.strokeStyle.over),c.color=b._getProp(b.node.strokeStyle.over)||b._getColor(b.line.strokeStyle.over),c.lineWidth=b._getProp(b.node.lineWidth.over)||2,c.alpha=b._getProp(b.fill.alpha),c):null},_widget:function(){for(var a=this,e=[],g=0,h=a.data.length;h>g;g++){var i=a.data[g];e.push([i.x,i.y])}var j=new b({context:{pointList:e,strokeStyle:a._getColor(a.line.strokeStyle.normal),lineWidth:2,y:a.y,smooth:a.line.smooth},smoothFilter:function(a){a[1]>0&&(a[1]=0)}});a.sprite.addChild(j);var k=null;if(a.fill.gradient){var l=_.min(j.context.pointList,function(a){return a[1]});k=a.ctx.createLinearGradient(l[0],l[1],l[0],0);var m=f.colorRgb(a._getColor(a.fill.fillStyle.normal)),n=m.replace(")",", "+a._getProp(a.fill.alpha)+")").replace("RGB","RGBA");k.addColorStop(0,n);var o=m.replace(")",", 0)").replace("RGB","RGBA");k.addColorStop(1,o)}var p=new d({context:{path:a._fillLine(j),fillStyle:k||a._getColor(a.fill.fillStyle.normal),globalAlpha:k?1:a.fill.alpha}});if(a.sprite.addChild(p),a.node.enabled){for(var g=0,h=a.data.length;h>g;g++){var i=a.data[g];a._nodeInd=g;var q=new c({id:"circle",context:{x:i.x,y:i.y,r:a._getProp(a.node.r.normal),fillStyle:a._getProp(a.node.fillStyle.normal)||"#ffffff",strokeStyle:a._getProp(a.node.strokeStyle.normal)||a._getColor(a.line.strokeStyle.normal),lineWidth:a._getProp(a.node.lineWidth.normal)||2}});a.node.control();var r=!0;if(1==a.node.mode){var s=i.value,t=a.data[g-1],u=a.data[g+1];t&&u&&s==t.value&&s==u.value&&(r=!1)}r&&a.sprite.addChild(q)}a._nodeInd=-1}},_fillLine:function(a){var b=_.clone(a.context.pointList);return b.push([b[a.pointsLen-1][0],-1.5],[b[0][0],-1.5],[b[0][0],b[0][1]]),e.getPath(b)}},g});