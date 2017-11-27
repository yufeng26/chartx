import Chart from "./chart"
import Canvax from "canvax2d"
import _ from "underscore"
import {parse2MatrixData} from "../utils/tools"

import Legend from "../components/legend/index"
import DataZoom from "../components/datazoom/index"
import markLine from "../components/markline/index"
import markpoint from "../components/markpoint/index"
import Anchor from "../components/anchor/index"

export default class Descartes extends Chart
{
    constructor( node, data, opts ){
        //不管传入的是data = [ ['xfield','yfield'] , ['2016', 111]]
        //还是 data = [ {xfiled, 2016, yfield: 1111} ]，这样的格式，
        //通过parse2MatrixData最终转换的是data = [ ['xfield','yfield'] , ['2016', 111]] 这样 chartx的数据格式
        data = parse2MatrixData(data);

        super( node, data, opts );

        this._node = node;
        this._data = data;
        this._opts = opts;

        //坐标系统
        this._coordinate = null;
        this.coordinate = {
            xAxis : {
                //波峰波谷布局模型，默认是柱状图的，折线图种需要做覆盖
                layoutType    : "peak",  
                //默认为false，x轴的计量是否需要取整， 这样 比如某些情况下得柱状图的柱子间隔才均匀。
                //比如一像素间隔的柱状图，如果需要精确的绘制出来每个柱子的间距是1px， 就必须要把这里设置为true
                posParseToInt : false    
            }
        };

        //直角坐标系的绘图模块
        this._graphs = null;

        //直角坐标系的tooltip
        this._tip = null;

        //预设dataZoom的区间数据
        this.dataZoom = {
            h: 30,
            range: {
                start: 0,
                end: data.length - 1 //因为第一行是title
            }
        };

    }

    setStages()
    {
        this.stageTip = new Canvax.Display.Sprite({
            id: 'tip'
        });
        this.core = new Canvax.Display.Sprite({
            id: 'core'
        });

        this.stage.addChild(this.core);
        this.stage.addChild(this.stageTip);
    }

    _horizontal() 
    {
        var me = this;

        _.each([me._graphs], function( _graphs ) {
            var ctx = _graphs.sprite.context;
            ctx.x += ((me.width - me.height) / 2);
            ctx.y += ((me.height - me.width) / 2) + me.padding.top;
            ctx.rotation = 90;
            ctx.rotateOrigin.x = me.height / 2;
            ctx.rotateOrigin.y = me.width / 2;
            ctx.scaleOrigin.x = me.height / 2;
            ctx.scaleOrigin.y = me.width / 2;
            ctx.scaleX = -1;

            _.each(_graphs.txtsSp.children, function(childSp) {
                _.each(childSp.children, function(cs) {
                    var ctx = cs.context;
                    var w = ctx.width;
                    var h = ctx.height;
    
                    ctx.scaleOrigin.x = w / 2;
                    ctx.scaleOrigin.y = h / 2;
                    ctx.scaleX = -1;
    
                    ctx.rotation = 90;
                    ctx.rotateOrigin.x = w / 2;
                    ctx.rotateOrigin.y = h / 2;
    
                    var _cfy = cs._finalY;
                    cs._finalY -= w / 2 - h / 2;
                    if( !cs.upOfYbaseNumber ){
                        //不在基准线之上的话
                        cs._finalY += w/2;
                    };
    
                    //TODO:这里暂时还不是最准确的计算， 后续完善
                    if( Math.abs(_cfy)+w > me._graphs.h ){
                        cs._finalY = -me._graphs.h + w / 2;
                    };
                });
            });
        });


        

    }

    initPlugsModules( opt )
    {
        if(this._opts.legend && this._initLegend){
            this._initLegend( opt );
        };
        if(this._opts.markLine && this._initMarkLine) {
            this._initMarkLine( opt );
        };
        if(this._opts.markPoint && this._initMarkPoint) {
            this._initMarkPoint( opt );
        };
        if(this._opts.dataZoom && this._initDataZoom) {
            this._initDataZoom( opt );
        };
        if(this._opts.anchor && this._initAnchor) {
            this._initAnchor( opt );
        };
    }

    //所有plug触发更新
    plugsReset(opt , e)
    {
        var me = this;
        _.each(this.plugs , function( p , i ){
            if( p.type == "markLine" ){
                p.plug.reset({
                    line: {
                        y : p.plug._yAxis.getYposFromVal( p.plug.value )
                    }
                } ,i);
                return
            };

            if( p.type == "markPoint" ){
                p.plug.reset();
                return
            };
            
            if( p.type == "dataZoom" ){
                if(!e || (e && e.trigger != "dataZoom")){
                    me.__cloneChart = me._getCloneChart();
                    p.plug.reset( {
                        count : me._data.length-1
                    } , me.__cloneChart.thumbChart._graphs.sprite );
                }
                return
            };
            p.plug.reset && p.plug.reset(opt);
            
        }); 
    }



    //设置图例 begin
    _initLegend( e )
    {
        !e && (e={});
        var me = this;
        //if( !this.legend || (this.legend && "enabled" in this.legend && !this.legend.enabled) ) return;
        //设置legendOpt
        var legendOpt = _.deepExtend({
            enabled:true,
            label  : function( info ){
               return info.field
            },
            onChecked : function( field ){
               me.add( field );
            },
            onUnChecked : function( field ){
               me.remove( field );
            }
        } , me._opts.legend);
        
        var _legend = new Legend( me._getLegendData() , legendOpt );
       
        _legend.draw = function(){
            me.drawLegend( _legend );
        };
        
        _legend.pos( {
            x : 0,
            y : me.padding.top + ( e.resize ? - _legend.height : 0 )
        } );

        !e.resize && (me.padding.top += _legend.height);

        this.plugs.push( {
            type : "legend",
            plug : _legend
        } );
        me.core.addChild( _legend.sprite );
    }

    //只有field为多组数据的时候才需要legend
    _getLegendData()
    {
        var me   = this;
        var data = [];
        _.each( me._coordinate.yAxisFields , function( f , i ){
            data.push({
                field : f,
                fillStyle : null
            });
        });
        return data;
    }
    ////设置图例end


    //datazoom begin
    _getCloneChart()
    {
        var me = this;
        barConstructor = this.constructor;//(barConstructor || Bar);
        var cloneEl = me.el.cloneNode();
        cloneEl.innerHTML = "";
        cloneEl.id = me.el.id + "_currclone";
        cloneEl.style.position = "absolute";
        cloneEl.style.width = me.el.offsetWidth + "px";
        cloneEl.style.height = me.el.offsetHeight + "px";
        cloneEl.style.top = "10000px";
        document.body.appendChild(cloneEl);

        var opts = _.deepExtend({}, me._opts);
        _.deepExtend(opts, me.getCloneChart() );

        delete opts.dataZoom;

        var thumbChart = new barConstructor(cloneEl, me._data, opts);
        thumbChart.draw();

        return {
            thumbChart: thumbChart,
            cloneEl: cloneEl
        }
    }

    _initDataZoom()
    {
        var me = this;

        me.padding.bottom += me.dataZoom.h;
        me.__cloneChart = me._getCloneChart();

        this.plugs.push( {
            type : "once",
            plug : {
                draw: function(){
                    
                    me._dataZoom = new DataZoom( me.drawDataZoom() );
                    
                    var graphssp = me.__cloneChart.thumbChart._graphs.sprite;
                    graphssp.id = graphssp.id + "_datazoomthumbChartbg"
                    graphssp.context.x = 0;
                    graphssp.context.y = me._dataZoom.barH + me._dataZoom.barY;

                    graphssp.context.scaleY = me._dataZoom.barH / me.__cloneChart.thumbChart._graphs.h;

                    me._dataZoom.setZoomBg( graphssp );

                    me.__cloneChart.thumbChart.destroy();
                    me.__cloneChart.cloneEl.parentNode.removeChild(me.__cloneChart.cloneEl);

                    me.plugs.push( {
                        type : "dataZoom",
                        plug : me._dataZoom
                    } ); 
                    me.core.addChild( me._dataZoom.sprite );
                }
            }
        } );
    }
    //datazoom end


    //markLine begin
    _initMarkLine() 
    {
        var me = this;

        if( !_.isArray( me.markLine ) ){
            me.markLine = [ me.markLine ];
        };

        _.each( me.markLine, function( ML ){
            //如果markline有target配置，那么只现在target配置里的字段的 markline, 推荐
            var field = ML.markTo;
            var _yAxis = me._coordinate._yAxis[0]; //默认为左边的y轴
            
            if( field ){
                //如果有配置markTo就从me._coordinate._yAxis中找到这个markTo所属的yAxis对象
                _.each( me._coordinate._yAxis, function( $yAxis, yi ){
                    var fs = _.flatten([ $yAxis.field ]);
                    if( _.indexOf( fs, field ) >= 0 ){
                        _yAxis = $yAxis;
                    }
                } );
            }

            var y;
            if( ML.y !== undefined && ML.y !== null ){
                y = Number( ML.y );
            };
            if( !isNaN(y) ) {
                _yAxis.resetDataSection( y );
            };

            var name = field;

            me.plugs.push( {
                type : "once",
                plug : {
                    draw : function(){
                        me.drawMarkLine( name , y, _yAxis, ML);
                    }
                }
            } );
        } );
    }

    creatOneMarkLine( yVal, yPos, lineStrokeStyle, label, textFillStyle, field, ML, _yAxis)
    {
        var me = this;
        var o = {
            w: me._coordinate.graphsWidth,
            h: me._coordinate.graphsHeight,
            value: yVal,
            origin: {
                x: me._coordinate.graphsX,
                y: me._coordinate.graphsY
            },
            line: {
                y: yPos,
                list: [
                    [0, 0],
                    [me._coordinate.graphsWidth, 0]
                ],
                strokeStyle: lineStrokeStyle
            },
            text: {
                content: label, 
                fillStyle: textFillStyle
            },
            field: field
        };

        var _markLine = new MarkLine(_.deepExtend( ML, o) , _yAxis);
        me.plugs.push( {
            type : "markLine",
            plug : _markLine
        } );
        me.core.addChild( _markLine.sprite );
    }
    //markLine end


    _initMarkPoint() 
    {
        //目前由bar和line各自覆盖
        this.drawMarkPoint();
    }

    creatOneMarkPoint( opts, mpCtx )
    {
        var me = this;
        var _mp = new MarkPoint( opts, mpCtx );
        _mp.shape.hover(function(e) {
            this.context.hr++;
            this.context.cursor = "pointer";
            e.stopPropagation();
        }, function(e) {
            this.context.hr--;
            e.stopPropagation();
        });
        _mp.shape.on("mousemove", function(e) {
            e.stopPropagation();
        });
        _mp.shape.on("tap click", function(e) {
            e.stopPropagation();
            e.eventInfo = _mp;
            me.fire("markpointclick", e);
        });

        me.plugs.push( {
            type : "markPoint",
            plug : _mp
        } );

        me.core.addChild( _mp.sprite );

        return _mp;
    }


    _initAnchor( e )
    {
        
        var me = this;

        this.plugs.push( {
            type : "once",
            plug : {
                draw: function(){

                    var _anchor = new Anchor( me.anchor );
                    me.core.addChild(_anchor.sprite);
                    
                    var _graphsH = me._coordinate.graphsHeight;
                    var _graphsW = me._coordinate.graphsWidth;

                    _anchor.draw({
                        w: _graphsW, 
                        h: _graphsH,
                        //cross: {
                        //    x: 0,
                        //    y: _graphsH + 0
                        //},
                        pos: {
                            x: me._coordinate.graphsX,
                            y: me._coordinate.graphsY - _graphsH
                        }
                    });

                    me._anchor = _anchor;

                    me.drawAnchor( _anchor );

                    me.plugs.push( {
                        type : "anchor",
                        plug : {
                            draw : function(){
                                me.drawAnchor( _anchor );
                            }
                        }
                    } );

                }
            }
        } );
    }
}