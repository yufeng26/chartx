define("chartx/chart/hybrid/bar_line",["canvax/index","chartx/chart/bar/index","chartx/chart/line/index","chartx/utils/dataformat","chartx/components/yaxis/yAxis","chartx/chart/line/graphs","chartx/chart/line/tips","chartx/chart/theme"],function(a,b,c,d,e,f,g,h){return b.extend({_yAxisR:null,_init:function(a,b,c){this.graphs={fill:{alpha:0}},this._opts=c,_.deepExtend(this,c),this.dataFrame=this._initData(b,{yAxis:this.yAxis.bar,xAxis:this.xAxis}),this._lineChart={dataFrame:d(b,{yAxis:this.yAxis.line,xAxis:this.xAxis}),_graphs:null},this._markLines=[]},draw:function(){this._setStages(),this._initModule();var a=_.flatten(this.yAxis.bar.field).length,b=_.clone(h.colors);b.splice(0,a),this._lineChart._graphs=new f(_.deepExtend({line:{strokeStyle:b}},this.graphs),this),this._tip=new g(_.deepExtend({node:{enabled:!1},content:null},this.tips),this._lineChart.dataFrame,this.canvax.getDomContainer()),this._yAxisR=new e(_.extend(_.clone(this.yAxis.line),{place:"right"}),this._lineChart.dataFrame.yAxis),this.core.addChild(this._yAxisR.sprite),this._startDraw(),this._drawEnd(),this.core.addChild(this._lineChart._graphs.sprite),this.inited=!0},_startDraw:function(a){var b=this,d=parseInt(b.height-b._xAxis.h),e=d-this.padding.top;b._yAxis.draw({pos:{x:this.padding.left,y:d},yMaxHeight:e});var f=b._yAxis.w,g=0;b._yAxisR&&(b._yAxisR.draw({pos:{x:0,y:d},yMaxHeight:b._yAxis.yGraphsHeight}),g=b._yAxisR.w,b._yAxisR.setX(this.width-g-this.padding.right+1)),b._xAxis.draw({graphh:b.height,graphw:b.width-g-this.padding.right,yAxisW:f}),b._xAxis.yAxisW!=f&&(b._yAxis.resetWidth(b._xAxis.yAxisW),f=b._xAxis.yAxisW);var h=Math.max(b._yAxis.yGraphsHeight,b._yAxisR.yGraphsHeight),i=b._xAxis.xGraphsWidth;b._back.draw({w:i,h:h,yOrigin:{biaxial:!0},xAxis:{data:b._yAxis.layoutData},yAxis:{data:b._xAxis.layoutData},pos:{x:f,y:d}});var j=this._trimGraphs();this._yValueMaxs=j.yValueMaxs,this._yLen=j.yLen,this._yCenters=j.yCenters,b._graphs.draw(j.data,{w:i,h:h,pos:{x:f,y:d},yDataSectionLen:b._yAxis.dataSection.length,sort:this._yAxis.sort}),b._lineChart._graphs.draw({w:i,h:h,data:c.prototype._trimGraphs.apply(b,[b._yAxisR,b._lineChart.dataFrame]),disX:c.prototype._getGraphsDisX.apply(b,[]),smooth:b.smooth}),b._lineChart._graphs.setX(f),b._lineChart._graphs.setY(d),b._lineChart._graphs.grow(function(a){b._opts.markLine&&c.prototype._initMarkLine.apply(b,[a,b._lineChart.dataFrame]),b._opts.markPoint&&c.prototype._initMarkPoint.apply(b,[a,b._opts.markPoint])}),b._lineChart._graphs.sprite.getChildById("induce").context.visible=!1},_getLineTipInfo:function(a){var b=a.target.iNode,c=[],d=this._lineChart._graphs.groups;if(a.eventInfo){for(var e=0,f=d.length;f>e;e++){var g=d[e].getNodeInfoAt(b);g&&(g.field=this._lineChart.dataFrame.yAxis.field[g._groupInd],c.push(g))}return a.eventInfo.nodesInfoList=a.eventInfo.nodesInfoList.concat(c),{x:this._xAxis.sprite.localToGlobal({x:this._xAxis.data[b].x,y:0}).x,lineH:this._graphs.h,lineTop:this._lineChart._graphs.induce.localToGlobal().y}}},bindEvent:function(){var a=this;this.core.on("panstart mouseover",function(b){a._setXaxisYaxisToTipsInfo(b),a._tip.show(b,a._getLineTipInfo(b))}),this.core.on("panstart mousemove",function(b){a._setXaxisYaxisToTipsInfo(b),a._tip.show(b,a._getLineTipInfo(b))}),this.core.on("panstart mouseout",function(b){a._tip.hide(b)})}})});