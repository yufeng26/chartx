define("chartx/chart/bar/graphs",["canvax/index","canvax/shape/Rect","chartx/utils/tools","chartx/chart/theme","canvax/animation/AnimationFrame"],function(a,b,c,d,e){var f=function(a,b){this.data=[],this.w=0,this.h=0,this.root=b,this._yAxisFieldsMap={},this._setyAxisFieldsMap(),this.animation=!0,this.pos={x:0,y:0},this._colors=d.colors,this.bar={width:20,radius:4},this.text={enabled:0,fillStyle:"#999",fontSize:12,format:null},this.sort=null,this.eventEnabled=!0,this.sprite=null,this.txtsSp=null,this.yDataSectionLen=0,_.deepExtend(this,a),this.init()};return f.prototype={init:function(){this.sprite=new a.Display.Sprite({id:"graphsEl"}),this.barsSp=this.txtsSp=new a.Display.Sprite({id:"barsSp"}),this.txtsSp=new a.Display.Sprite({id:"txtsSp",context:{visible:!1}})},setX:function(a){this.sprite.context.x=a},setY:function(a){this.sprite.context.y=a},_setyAxisFieldsMap:function(){var a=this;_.each(_.flatten(this.root.dataFrame.yAxis.field),function(b,c){a._yAxisFieldsMap[b]=c})},_getColor:function(a,b,c,d,e,f,g,h){var i=null;return _.isString(a)&&(i=a),_.isArray(a)&&(i=_.flatten(a)[this._yAxisFieldsMap[h]]),_.isFunction(a)&&(i=a({iGroup:d,iNode:e,iLay:f,field:h,value:g})),i&&""!=i||(i=this._colors[this._yAxisFieldsMap[h]]),i},checkBarW:function(a){this.bar.width=parseInt(a)-parseInt(Math.max(1,.3*a)),this.bar.width<1&&(this.bar.width=1)},resetData:function(a,b){this.draw(a.data,b)},draw:function(d,e){if(_.deepExtend(this,e),0!=d.length){var f=0;this.data[0]&&(f=this.data[0][0].length),this.data=d;var g=this,i=d.length;_.each(d,function(d,e){var j=d.length;if(0!=j){var k=d[0].length;for(h=0;h<k;h++){var l;if(0==e){h<=f-1?l=g.barsSp.getChildById("barGroup_"+h):(l=new a.Display.Sprite({id:"barGroup_"+h}),g.barsSp.addChild(l));var m=g.w/k;if(g.eventEnabled){var n;h<=f-1?(n=l.getChildById("bhr_"+h),n.context.width=m,n.context.x=m*h):(n=new b({id:"bhr_"+h,pointChkPriority:!1,context:{x:m*h,y:-g.h,width:m,height:g.h,fillStyle:"#ccc",globalAlpha:0}}),l.addChild(n),n.hover(function(a){this.context.globalAlpha=.1},function(a){this.context.globalAlpha=0}),n.iGroup=h,n.iNode=-1,n.iLay=-1,n.on("panstart mouseover mousemove mouseout click",function(a){a.eventInfo=g._getInfoHandler(this,a)}))}}else l=g.barsSp.getChildById("barGroup_"+h);for(v=0;v<j;v++){var o=d[v][h];o.iGroup=h,o.iNode=e,o.iLay=v;var p=parseInt(Math.abs(o.y));v>0&&(p-=parseInt(Math.abs(d[v-1][h].y)));var q=parseInt(o.y),r=g._getColor(g.bar.fillStyle,i,j,e,h,v,o.value,o.field),s={x:Math.round(o.x-g.bar.width/2),y:q,width:parseInt(g.bar.width),height:p,fillStyle:r,scaleY:1},t={x:s.x,y:0,width:s.width,height:s.height,fillStyle:s.fillStyle,scaleY:0};if(g.bar.radius&&v==j-1){var u=Math.min(g.bar.width/2,p);u=Math.min(u,g.bar.radius),t.radius=[u,u,0,0]}g.animation||(delete t.scaleY,t.y=s.y);var w;if(h<=f-1?w=l.getChildById("bar_"+e+"_"+h+"_"+v):(w=new b({id:"bar_"+e+"_"+h+"_"+v,context:t}),l.addChild(w)),w.finalPos=s,w.iGroup=h,w.iNode=e,w.iLay=v,g.eventEnabled&&w.on("panstart mouseover mousemove mouseout click",function(a){a.eventInfo=g._getInfoHandler(this,a),"mouseover"==a.type&&(this.parent.getChildById("bhr_"+this.iGroup).context.globalAlpha=.1),"mouseout"==a.type&&(this.parent.getChildById("bhr_"+this.iGroup).context.globalAlpha=0)}),1==j){var x=o.value;x=_.isFunction(g.text.format)?g.text.format(x):c.numAddSymbol(x);var y={fillStyle:g.text.fillStyle,fontSize:g.text.fontSize},z=new a.Display.Text(x,y);z.context.x=o.x-z.getTextWidth()/2,z.context.y=t.y-z.getTextHeight(),z.context.y+g.h<0&&(z.context.y=-g.h),g.txtsSp.addChild(z)}}}}}),this.sprite.addChild(this.barsSp),this.txtsSp.children.length>0&&this.sprite.addChild(this.txtsSp),this.sprite.context.x=this.pos.x,this.sprite.context.y=this.pos.y,this.sort&&"desc"==this.sort&&(this.sprite.context.y-=this.h)}},grow:function(a,b){var c=this;if(!this.animation)return void(a&&a(c));var d=1;if(this.sort&&"desc"==this.sort&&(d=-1),c.barsSp.children.length>c.data[0][0].length)for(var f=c.data[0][0].length,g=c.barsSp.children.length;g>f;f++)c.barsSp.getChildAt(f).destroy(),f--,g--;var i=_.extend({delay:80,easing:"Back.Out",duration:500},b);_.each(c.data,function(a,b){var f=a.length;if(0!=f){var g=a[0].length;for(h=0;h<g;h++)for(v=0;v<f;v++){var j=c.barsSp.getChildById("barGroup_"+h),k=j.getChildById("bar_"+b+"_"+h+"_"+v);0==i.duration?(k.context.scaleY=d,k.context.y=d*d*k.finalPos.y,k.context.x=k.finalPos.x,k.context.width=k.finalPos.width,k.context.height=k.finalPos.height):(k._tweenObj&&e.destroyTween(k._tweenObj),k._tweenObj=k.animate({scaleY:d,y:d*k.finalPos.y,x:k.finalPos.x,width:k.finalPos.width,height:k.finalPos.height},{duration:i.duration,easing:i.easing,delay:h*i.delay,onUpdate:function(a){},onComplete:function(a){a.width<3&&(this.context.radius=0)},id:k.id}))}}}),window.setTimeout(function(){a&&a(c)},300*(this.barsSp.children.length-1))},_getInfoHandler:function(a){var b={iGroup:a.iGroup,iNode:a.iNode,iLay:a.iLay,nodesInfoList:this._getNodeInfo(a.iGroup,a.iNode,a.iLay)};return b},_getNodeInfo:function(a,b,c){var d=[],e=this,f=e.data.length;return _.each(e.data,function(g,i){var j,k=g.length;if(0!=k){var l=g[0].length;for(h=0;h<l;h++)if(h==a)for(v=0;v<k;v++)b!=i&&-1!=b||c!=v&&-1!=c||(j=g[v][h],j.fillStyle=e._getColor(e.bar.fillStyle,f,k,i,h,v,j.value,j.field),d.push(j))}}),d}},f});