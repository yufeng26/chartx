import Component from "../component"
import Canvax from "canvax"

const Circle = Canvax.Shapes.Circle;
const Droplet = Canvax.Shapes.Droplet;
const _ = Canvax._;

export default class MarkPoint extends Component
{
	constructor(userOpts , chartOpts , data)
	{
		super(userOpts , chartOpts , data);
		
		this.markTo      = null; 
        this.data        = data; //这里的data来自加载markpoint的各个chart，结构都会有不一样，但是没关系。data在markpoint本身里面不用作业务逻辑，只会在fillStyle 等是function的时候座位参数透传给用户
        this.point       = {
            x : 0 , y : 0
        };
        this.normalColor = "#6B95CF";
        this.shapeType   = "droplet";//"circle";
        this.fillStyle   = null;
        this.strokeStyle = null;
        this.lineWidth   = 1;
        this.globalAlpha = 0.9;

        this.duration    = 800;//如果有动画，则代表动画时长
        this.easing      = null;//动画类型

        //droplet opt
        this.hr = 8;
        this.vr = 12;

        //circle opt
        this.radius  = 5;
        
        this.sprite = null;
        this.shape  = null;

        this.iGroup = null;
        this.iNode  = null;
        this.iLay   = null;

        this.realTime = false; //是否是实时的一个点，如果是的话会有动画
        this.filter  = function(){};//过滤函数

        if( "markPoint" in userOpts ){
            _.extend(true, this , userOpts.markPoint );
        };
        chartOpts && _.extend(true, this , chartOpts );

        this.init();
	}

	init()
	{
        var me = this;
        this.sprite  = new Canvax.Display.Sprite({ 
            context : {
                x : this.point.x,
                y : this.point.y,
                globalAlpha : this.globalAlpha
            }
        });
        this.sprite.on("destroy" , function( e ){

        });
        me.widget();
    }

    widget()
    {
        this._fillStyle   = this._getColor( this.fillStyle   , this.data );
        this._strokeStyle = this._getColor( this.strokeStyle , this.data );
        switch (this.shapeType.toLocaleLowerCase()){
            case "circle" :
                this._initCircleMark();
                break;
            case "droplet" :
                this._initDropletMark();
                break;
        };
       
    }

    rePosition( point )
    {
        this.point = point;
        this.sprite.context.x = this.point.x;
        this.sprite.context.y = this.point.y;
    }

    _getColor( c , data , normalColor )
    {
        var color = c;
        if( _.isFunction( c ) ){
            color = c( data );
        }
        //缺省颜色
        if( (!color || color == "") ){
            //如果有传normal进来，就不管normalColor参数是什么，都直接用
            if( arguments.length >= 3 ){
                color = normalColor;
            } else {
                color = this.normalColor;
            }
        }
        return color;
    }

    _done()
    {
        this.shape.context.visible   = true;
        this.shapeBg && (this.shapeBg.context.visible = true);
        this.shapeCircle && ( this.shapeCircle.context.visible = true );
        _.isFunction(this.filter) && this.filter( this );
    }

    _initCircleMark()
    {
        var me = this;
        var ctx = {
            r : me.radius,
            fillStyle   : me._fillStyle,
            lineWidth   : me.lineWidth,
            strokeStyle : me._strokeStyle,
            //globalAlpha : me.globalAlpha,
            cursor      : "point",
            visible     : false
        };
        me.shape = new Circle({
            context : ctx
        });
        me.sprite.addChild( me.shape );
        me._realTimeAnimate();
        me._done();
    }

    destroy()
    {
        this.sprite.destroy();
    }

    _realTimeAnimate()
    {
        var me = this;
        if( me.realTime ){
            if( !me.shapeBg ){
                me.shapeBg = me.shape.clone();
                me.sprite.addChildAt( me.shapeBg , 0 );
            };
        }

    }

    _initDropletMark()
    {
        var me = this;
        var ctx = {
            y      : -me.vr,
            scaleY : -1,
            hr     : me.hr,
            vr     : me.vr,
            fillStyle   : me._fillStyle,
            lineWidth   : me.lineWidth,
            strokeStyle : me._strokeStyle,
            //globalAlpha : me.globalAlpha,
            cursor  : "point",
            visible : false
        };
        me.shape = new Droplet({
            hoverClone : false,
            context : ctx
        });
        me.sprite.addChild( me.shape );

        var circleCtx = {
            y : -me.vr,
            x : 1,
            r : Math.max(me.hr-6 , 2) ,
            fillStyle   : "#fff",
            visible     : false
        };
        me.shapeCircle = new Circle({
            context : circleCtx
        });
        me.sprite.addChild( me.shapeCircle );


        me._done();
            
        
    }
}