define("chartx/chart/bar/horizontal",["chartx/chart/bar/index"],function(a){return a.extend({_init:function(a,b,c){_.deepExtend(this,{xAxis:{text:{rotation:90}},yAxis:{text:{rotation:90}}}),this.dataFrame=this._initData(b)},draw:function(){this._setStages(),this._initModule(),this._startDraw({w:this.height,h:this.width}),this._horizontal(),this._drawEnd()},_horizontal:function(){var a=this;_.each([a.core.context,a.stageBg.context],function(b){b.x+=(a.width-a.height)/2,b.y+=(a.height-a.width)/2,b.rotation=90,b.rotateOrigin.x=a.height/2,b.rotateOrigin.y=a.width/2,b.scaleOrigin.x=a.height/2,b.scaleOrigin.y=a.width/2,b.scaleX=-1}),_.each(a._graphs.txtsSp.children,function(a){var b=a.context,c=b.width,d=b.height;b.scaleOrigin.x=c/2,b.scaleOrigin.y=d/2,b.scaleX=-1,b.rotation=90,b.rotateOrigin.x=c/2,b.rotateOrigin.y=d/2,b.y-=c/2-d/2}),_.each(this._xAxis.sprite.children,function(a){var b=a.children?a.children[0]:a,c=b.context,d=b.getRect();c.scaleOrigin.x=d.x+d.width/2,c.scaleOrigin.y=d.y+d.height/2,c.scaleY=-1}),_.each(this._yAxis.sprite.children,function(a){var b=a.children?a.children[0]:a,c=b.context,d=b.getRect();c.scaleOrigin.x=d.x+d.width/2,c.scaleOrigin.y=d.y+d.height/2,c.scaleY=-1})}})});