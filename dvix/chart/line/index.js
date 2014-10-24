KISSY.add(function(S, Chart, Tools, DataSection, EventType, xAxis, yAxis, Back, Graphs, Tips){
    /*
     *@node chart在dom里的目标容器节点。
    */
    var Canvax = Chart.Canvax;

    return Chart.extend( {

        init:function(node){

            this.options        =  {
                mode       : 1,                            //模式( 1 = 正常(y轴在背景左侧) | 2 = 叠加(y轴叠加在背景上))[默认：1]
                event      : {
                    enabled : 1
                }
            }

            this.dataFrame     =  null;                    //数据集合，由_initData 初始化

            this._xAxis        =  null;
            this._yAxis        =  null;
            this._back         =  null;
            this._graphs       =  null;
            this._tips         =  null;

            this.stageTip = new Canvax.Display.Sprite({
                id      : 'tip'
            });

            this.core    = new Canvax.Display.Sprite({
                id      : 'core'
            });
            this.stageBg  = new Canvax.Display.Sprite({
                id      : 'bg'
            });

            this.stage.addChild(this.stageBg);
            this.stage.addChild(this.core);
            this.stage.addChild(this.stageTip);
        },
        draw:function(data, opt){
            _.deepExtend( this.options , opt );
            if( opt.rotate ) {
                this.rotate( opt.rotate );
            }

            //根据data 和 opt中yAxis xAxis的field字段来分配this.dataFrame中的yAxis数据和xAxis数据
            this.dataFrame = this._initData( data , opt );

            this._initModule( opt , this.dataFrame );                      //初始化模块  

            this._startDraw();                         //开始绘图

            this._drawEnd();                           //绘制结束，添加到舞台
          
            this._arguments = arguments;

        },
        clear:function(){
            this.stageBg.removeAllChildren()
            this.core.removeAllChildren()
            this.stageTip.removeAllChildren()
        },
        rotate : function( angle ){
            var currW = this.width;
            var currH = this.height;
            this.width  = currH;
            this.height = currW;

            var self = this;
            _.each( this.stage.children , function( sprite ){
                sprite.context.rotation       = angle || -90;
                sprite.context.x              = ( currW - currH ) / 2 ;
                sprite.context.y              = ( currH - currW ) / 2 ;
                sprite.context.rotateOrigin.x = self.width  * sprite.context.$model.scaleX / 2;
                sprite.context.rotateOrigin.y = self.height * sprite.context.$model.scaleY / 2;
            });
        },
        reset:function(data, opt){
            this.clear()
            this.width   = parseInt(this.element.width());
            this.height  = parseInt(this.element.height());
            this.draw(data, opt)
        },
        _initModule:function(opt , data){
            this._xAxis  = new xAxis(opt.xAxis , data.xAxis);
            this._yAxis  = new yAxis(opt.yAxis , data.yAxis);
            this._back   = new Back(opt.back);
            this._graphs = new Graphs(opt.graphs);
            this._tips   = new Tips(opt.tips , data , this.element.all(".canvax-dom-container"));
        },
        _startDraw : function(){
            // this.dataFrame.yAxis.org = [[201,245,288,546,123,1000,445],[500,200,700,200,100,300,400]]
            // this.dataFrame.xAxis.org = ['星期一','星期二','星期三','星期四','星期五','星期六','星期日']

            var x = 0 
            var y = this.height - this._xAxis.h 

            //绘制yAxis
            this._yAxis.draw({
                pos : {
                    x : x,
                    y : y
                },
                yMaxHeight : y
            });

            var _yAxisW = this._yAxis.w

            x = _yAxisW 

            //绘制x轴
            this._xAxis.draw({
                w    :   this.width - _yAxisW ,
                max  :   {
                    left  : -_yAxisW
                },
                pos  : {
                    x : x,
                    y : y
                }
            });

            //绘制背景网格
            this._back.draw({
                w    : this.width - _yAxisW ,
                h    : y,
                xAxis:{
                    data : this._yAxis.data
                },
                pos  : {
                    x : x + this._xAxis.disOriginX,
                    y : y
                }
            });
            
            this._graphs.draw({
                w    : this._xAxis.xGraphsWidth,
                h    : this._yAxis.yGraphsHeight,
                data : this._trimGraphs(),
                disX : this._getGraphsDisX(),
                smooth : this.smooth
            });
            this._graphs.setX( x + this._xAxis.disOriginX ), this._graphs.setY(y)

            //执行生长动画
            this._graphs.grow();

            if( this.options.event.enabled ){
                var self = this;
                this._graphs.sprite.on( "hold mouseover" ,function(e){
                    self._tips.show( e );
                });
                this._graphs.sprite.on( "drag mousemove" ,function(e){
                    self._tips.move( e );
                });
                this._graphs.sprite.on( "release mouseout" ,function(e){
                    self._tips.hide( e );
                });
            }
        },
        _trimGraphs:function(){
            var maxYAxis = this._yAxis.dataSection[ this._yAxis.dataSection.length - 1 ]
            var maxXAxis = this.dataFrame.xAxis.org[0].length
            var arr      = this.dataFrame.yAxis.org
            var tmpData  = []
            for (var a = 0, al = arr.length; a < al; a++ ) {
                for (var b = 0, bl = arr[a].length ; b < bl; b++ ) {
                    !tmpData[a] ? tmpData[a] = [] : ''
                    var y = - (arr[a][b] - this._yAxis._baseNumber) / (maxYAxis - this._yAxis._baseNumber) * this._yAxis.yGraphsHeight
                    y = isNaN(y) ? 0 : y
                    tmpData[a][b] = {'value':arr[a][b], 'x':b / (maxXAxis - 1) * this._xAxis.xGraphsWidth,'y':y}
                }
            }
            if(maxXAxis == 1){
                if(tmpData[0] && tmpData[0][0]){
                    tmpData[0][0].x = parseInt(this._xAxis.xGraphsWidth / 2)
                }
            }
            return tmpData
        },
        //每两个点之间的距离
        _getGraphsDisX:function(){
            return this._xAxis.xGraphsWidth / ( this.dataFrame.xAxis.org[0].length - 1 );
        },

        _drawEnd:function(){
            this.stageBg.addChild(this._back.sprite)

            this.core.addChild(this._xAxis.sprite);
            this.core.addChild(this._graphs.sprite);
            this.core.addChild(this._yAxis.sprite);
            
            this.stageTip.addChild(this._tips.sprite);

        }
    });

} , {
    requires: [
        'dvix/chart/',
        'dvix/utils/tools',
        'dvix/utils/datasection',
        'dvix/event/eventtype',
        './xaxis',
        'dvix/components/yaxis/yAxis',
        'dvix/components/back/Back',
        'dvix/components/line/Graphs',
        './tips',
        //'dvix/components/tips/Tips'
        "dvix/utils/deep-extend"
    ]
});
