define("chartx/chart/progress/recharge",["chartx/chart/index","canvax/shape/Sector","canvax/shape/Circle","canvax/shape/Line","canvax/shape/Rect","canvax/animation/Tween"],function(a,b,c,d,e,f){var g=a.Canvax,h=function(){return timer=requestAnimationFrame(h),f.update(),timer};return a.extend({init:function(a,b){this.r=Math.min(this.width,this.height)/2,this._beginAngle=270,this.config={ringWidth:50,ringColor:"#f59622",bColor:"#3c3c3c",btnColor:"white",crossLineColor:"#666666",rate:0},b&&_.deepExtend(this.config,b)},draw:function(){this.stage.addChild(new b({id:"bg",context:{x:this.width/2,y:this.height/2,r:this.r,r0:this.r-this.config.ringWidth,startAngle:0,endAngle:360,fillStyle:this.config.bColor,lineJoin:"round"}})),this.stage.addChild(new b({id:"rate",context:{x:this.width/2,y:this.height/2,r:this.r,r0:this.r-this.config.ringWidth,startAngle:0,endAngle:0,fillStyle:this.config.ringColor,lineJoin:"round"}}));var a=new c({id:"btn",context:{x:this.width/2,y:this.height/2,r:this.r-this.config.ringWidth,fillStyle:this.config.btnColor}}),f=3*a.context.r/4*2,h=3*a.context.r/4*2;window.addBtnSp=new g.Display.Sprite({id:"cross",context:{x:a.context.x-f/2,y:a.context.y-h/2,width:f,height:h,scaleOrigin:{x:f/2,y:h/2},rotateOrigin:{x:f/2,y:h/2}}}),addBtnSp.addChild(new d({context:{xStart:0,yStart:addBtnSp.context.height/2,xEnd:addBtnSp.context.width,yEnd:addBtnSp.context.height/2,lineWidth:1,strokeStyle:this.config.crossLineColor}})),addBtnSp.addChild(new d({context:{xStart:addBtnSp.context.width/2,yStart:0,xEnd:addBtnSp.context.width/2,yEnd:addBtnSp.context.height,lineWidth:1,strokeStyle:this.config.crossLineColor}}));var i=6,j=(addBtnSp.context.width-i)/2,k=(addBtnSp.context.height-i)/2;addBtnSp.addChild(new e({context:{x:j,y:k,width:i,height:i,rotation:45,rotateOrigin:{x:i/2,y:i/2},fillStyle:this.config.crossLineColor}}));var l=this;a.on("tap",function(){l.fire("recharge")}),this.stage.getChildById("rate").on("touch",function(a){l.holdHand(a)}).on("release",function(a){l.releaseHand(a)}),this.stage.getChildById("bg").on("touch",function(a){l.holdHand(a)}).on("release",function(a){l.releaseHand(a)}),this.stage.addChild(a),this.stage.addChild(addBtnSp),this.config.rate>0&&this.setRate(this.config.rate,!0),this.canvax.addChild(this.stage)},setRate:function(a,b){var c=this.stage.getChildById("rate");this.config.rate=a>100?100:a;var d=this._beginAngle+(180-this.rateToAngle()),e=this._beginAngle-(180-this.rateToAngle());if(b)c.context.startAngle=d,c.context.endAngle=e;else{var g={s:c.context.startAngle,e:c.context.endAngle};new f.Tween(g).to({s:d,e:e},700).onUpdate(function(){c.context.startAngle=this.s,c.context.endAngle=this.e}).start(),h()}},rateToAngle:function(){return this.config.rate/100*180},holdHand:function(a){var b=this,c=100-this.config.rate,d=b.config.bColor;"rate"==a.target.id&&(c=this.config.rate,d=b.config.ringColor);var e=this.stage.getChildById("cross");e.context.visible=!1;var i=this.stage.getChildById("btn");new f.Tween({ringWidth:this.config.ringWidth}).to({ringWidth:3*this.config.ringWidth/4},300).onUpdate(function(){i.context.r=b.r-this.ringWidth}).start();var j=new g.Display.Sprite({id:"holdTextSp",context:{x:i.context.x-i.context.r,y:i.context.y-i.context.r,width:i.context.r,height:i.context.r}}),k=new g.Display.Text("0",{context:{x:i.context.r,y:i.context.r,fillStyle:d,fontSize:25,textAlign:"right",textBaseline:"middle"}}),l=new g.Display.Text(".00%",{context:{x:i.context.r,y:i.context.r+3,fillStyle:d,fontSize:15,textAlign:"left",textBaseline:"middle"}});j.addChild(k),j.addChild(l),this.stage.addChild(j),new f.Tween({num:0}).to({num:c},300).onUpdate(function(){k.resetText(parseInt(this.num).toString()),l.resetText("."+this.num.toFixed(2).toString().split(".")[1]+"%")}).start(),h()},releaseHand:function(a){f.removeAll(),this.stage.getChildById("holdTextSp").destroy();var b=this;"rate"==a.target.id;var c=this.stage.getChildById("btn"),d=this.stage.getChildById("cross");d.context.visible=!0,d.context.globalAlpha=0,new f.Tween({ringWidth:this.r-c.context.r,rotation:0,globalAlpha:0}).to({ringWidth:this.config.ringWidth,rotation:360,globalAlpha:1},500).onUpdate(function(){c.context.r=b.r-this.ringWidth,d.context.rotation=this.rotation,d.context.globalAlpha=this.globalAlpha}).start()}})});