import Canvax from "canvax"
import GraphsBase from "../index"
import trans from "./trans"
import { getDefaultProps } from "../../../utils/tools"
import { colorRgba } from "../../../utils/color"

let { _, event } = Canvax;
let Text = Canvax.Display.Text;
let Path = Canvax.Shapes.Path;
let Rect = Canvax.Shapes.Rect;

class Map extends GraphsBase {
    static defaultProps() {
        return {
            field: {
                detail: '数据中的adcode字段',
                default: 'adcode',
                documentation: '数据中的adcode字段，用来对应上地图中的某个区块的adcode，从而找到这个区块对应的这一条数据'
            },
            valueField: {
                detail: '数据中的值字段',
                default: 'value',
                documentation: '作为field字段的补充，通过field字段找到数据后，用来从数据中取值'
            },
            mapAdcode: {
                detail: '当前绘制的地图adcode',
                default: null
            },
            adcodeUrlTempl: {
                detail: 'adcode的url模板',
                default: 'http://geo.datav.aliyun.com/areas_v2/bound/{adcode}_full.json',
                documentation: '如果是是配置的adcode，那么和他对应的url模板'
            },
            geoJson: {
                detail: '要绘制的geoJson数据',
                default: null
            },
            geoJsonUrl: {
                detail: '要绘制的geoJson的url',
                default: null
            },
            geoJsonFilter: {
                detail: 'geoJson的二次过滤处理',
                default: function(json){ return json }
            },
            specialArea: {
                detail: '要排除掉不绘制的数据集合，可以是adcode，也可以是name',
                default: []
            },
            themeColor: {
                detail: '主题色',
                default: "#6E7586",
                documentation: '默认的主题色彩，所有的有数据的area都是在这个颜色的基础上做透明度变化，同时也是默认的hover色'
            },

            node: {
                detail: '单个元素图形配置',
                propertys: {

                    drawBegin: {
                        detail: '开始绘制的钩子函数',
                        default: function(){}
                    },
                    drawEnd: {
                        detail: '开始绘制的钩子函数',
                        default: function(){}
                    },

                    fillStyle: {
                        detail: '单个区块背景色',
                        default: null//'#fff' //从themeColor获取默认 , 默认为空就会没有颜色的区块不会有事件点击
                    },
                    fillAlpha: {
                        detail : '单个区块透明度',
                        default: 0.9
                    },

                    maxFillAlpha: {
                        detail: '单个区块最大透明度',
                        default: 1
                    },
                    minFillAlpha: {
                        detail: '单个区块最小透明度',
                        default: 0.4
                    },

                    strokeStyle: {
                        detail: '单个区块描边颜色',
                        default: "#ccc"
                    },
                    strokeAlpha: {
                        detail: '单个区块描边透明度',
                        default: 1
                    },

                    lineWidth: {
                        detail: '单个区块描边线宽',
                        default: 1
                    },

                    lineType: {
                        detail: '区块描边样式',
                        default: 'solid'
                    },

                    focus: {
                        detail: "单个区块hover态设置",
                        propertys: {
                            enabled: {
                                detail: '是否开启',
                                default: true
                            },
                            fillStyle: {
                                detail: 'hover态单个区块背景色',
                                default: null //从themeColor获取默认
                            },
                            fillAlpha: {
                                detail: 'hover态单个区块透明度',
                                default: 1
                            },
                            strokeStyle: {
                                detail: 'hover态单个区块描边颜色',
                                default: null //默认获取themeColor
                            },
                            strokeAlpha: {
                                detail: 'hover态单个区块描边透明度',
                                default: null //默认获取themeColor
                            },
                            lineWidth: {
                                detail: 'hover态单个区块描边线宽',
                                default: null
                            },
                            lineType: {
                                detail: 'hover态区块描边样式',
                                default: null
                            }

                        }
                    },

                    select: {
                        detail: "单个区块选中态设置",
                        propertys: {
                            enabled: {
                                detail: '是否开启',
                                default: false
                            },
                            fillStyle: {
                                detail: '选中态单个区块背景色',
                                default: null //从themeColor获取默认
                            },
                            fillAlpha: {
                                detail: '选中态单个区块透明度',
                                default: 1
                            },
                            strokeStyle: {
                                detail: '选中态单个区块描边颜色',
                                default: null
                            },
                            strokeAlpha: {
                                detail: '选中态单个区块描边颜色',
                                default: null
                            },
                            lineWidth: {
                                detail: '选中态单个区块描边线宽',
                                default: null
                            },
                            lineType: {
                                detail: '选中态区块描边样式',
                                default: null
                            }
                        }
                    }
                }
            },
            label: {
                detail: '文本配置',
                propertys: {
                    enabled: {
                        detail: '是否开启文本',
                        default: true
                    },
                    textAlign: {
                        detail: '文本布局位置(left,center,right)',
                        default: 'center'
                    },
                    textBaseline: {
                        detail: '文本基线对齐方式',
                        default: 'middle'
                    },
                    format: {
                        detail: '文本格式化处理函数',
                        default: null
                    },
                    fontSize: {
                        detail: '文本字体大小',
                        default: 12
                    },
                    fontColor: {
                        detail: '文本颜色',
                        default: '#666',
                        documentation: 'align为center的时候的颜色，align为其他属性时候取node的颜色'
                    }
                }
            }
        }
    }
    constructor(opt, app) {
        super(opt, app);

        this.type = "map";
        this.maxValue = 0;

        this.dataOrg = []; //this.dataFrame.getFieldData( this.field )
        this.data = []; //layoutData list , default is empty Array

        _.extend(true, this, getDefaultProps(Map.defaultProps()), opt);

        this.init();
    }

    init() {

        this._pathsp = new Canvax.Display.Sprite({
            id: "nodePathSp"
        });
        this._textsp = new Canvax.Display.Sprite({
            id: "textsp"
        });
        this._marksp = new Canvax.Display.Sprite({
            id: "markSp"
        });

        this._initInduce();
        this.sprite.addChild(this._pathsp);
        this.sprite.addChild(this._textsp);
        this.sprite.addChild(this._marksp);

    }

    _initInduce(){
        var me = this;
        this._include = new Rect({
            context: {
                x: this.app.padding.left,
                y: this.app.padding.top,
                width: this.width,
                height:this.height,
                fillStyle: "rgba(0,0,0,0)"
            }
        });
        this._include.on( event.types.get(), function (e) {
            e.eventInfo = {
                trigger: me,
                nodes: []
            };
            me.app.fire(e.type, e);
        });
        this.sprite.addChild( this._include );
    }

    draw(opt) {

        !opt && (opt = {});
        //第二个data参数去掉，直接trimgraphs获取最新的data
        _.extend(true, this, opt);

        let values = this.dataFrame.getFieldData(this.valueField);
        this.maxValue = _.max(values);
        this.minValue = _.min(values);

        this.getGeoData().then(geoData => {
            if( geoData ){
                let graphBBox = {
                    x: this.app.padding.left, 
                    y: this.app.padding.top,
                    width: this.width, height: this.height
                };
                this._widget( geoData, graphBBox );
            }
        });

        this._include.context.width = this.width;
        this._include.context.height = this.height;

    }

    _widget(geoData, graphBBox) {

        let elements = [];

        let geoGraphs = trans(geoData, graphBBox, this.specialArea );
        geoGraphs.forEach(geoGraph => {

            let rowData = this.dataFrame.getRowDataOf({ adcode: geoGraph.adcode });
            if (rowData.length) {
                geoGraph.rowData = rowData[0];
            };

            let fillStyle   = this._getProp(this.node, "fillStyle", geoGraph);
            let fillAlpha   = this._getProp(this.node, "fillAlpha", geoGraph);
            let strokeStyle = this._getProp(this.node, "strokeStyle", geoGraph);
            let strokeAlpha = this._getProp(this.node, "strokeAlpha", geoGraph);
            
            geoGraph.color = fillStyle;

            let pathCtx = {
                x : graphBBox.x + (graphBBox.width-geoData.transform.width)/2,
                y : graphBBox.y + (graphBBox.height-geoData.transform.height)/2,
                path      : geoGraph.path,
                lineWidth : this.node.lineWidth,
                fillStyle , fillAlpha, strokeStyle,strokeAlpha,
                lineType  : this.node.lineType
            };

            let nodePath = new Path({
                id: 'path_' + geoGraph.adcode,
                context: pathCtx
            });
            nodePath.nodeData = geoGraph;
            nodePath.geoData = geoData;
            geoGraph.nodeElement = nodePath;

            this.node.drawBegin.bind(this)(geoGraph);

            this._pathsp.addChild(nodePath);

            // if( geoGraph.name == "浙江省" ){
            //     //test    
            //     let nodePathBox = nodePath.getBound();
            //     let globalPos = nodePath.localToGlobal( nodePathBox );
            //     nodePathBox.x = globalPos.x;
            //     nodePathBox.y = globalPos.y;
            //     this._pathsp.addChild( new Rect({
            //         context: {
            //             ...nodePathBox,
            //             lineWidth:1,
            //             strokeStyle:"red"
            //         }
            //     }) )
            // }
        
            this.node.drawEnd.bind(this)(geoGraph);

            //drawEnd中可能把这个node销毁了
            nodePath.context && elements.push( nodePath );

            let me = this;
            //有些区块在外面会告诉你( drawBegin or drawEnd ) 会在geoGraph中标注上告诉你不用监听事件
            //因为有些时候某些比较小的区块，比如深圳 上海，等，周边的区块没数据的时候，如果也检测事件，那么这些小区块会难以选中
            if( fillStyle && this.node.fillAlpha && !geoGraph.pointerEventsNone && nodePath.context ){
                nodePath.context.cursor = 'pointer';
                nodePath.on(event.types.get(), function (e) {
                    e.eventInfo = {
                        //iNode : this.iNode,
                        trigger: me.node,
                        nodes: [ this.nodeData ]
                    };
    
                    if ( e.type == 'mouseover' ) {
                        me.focusAt( this.nodeData.adcode );
                    };
                    if ( e.type == 'mouseout' ) {
                        !this.nodeData.selected && me.unfocusAt( this.nodeData.adcode );
                    };
    
                    me.app.fire(e.type, e);
                });
            };
        });

        return elements;
        
    }

    focusAt( adcode ){
        let _path = this._pathsp.getChildById( 'path_' + adcode );
        let geoGraph = _path.nodeData;
        
        if( _path ){

            let {fillStyle,fillAlpha,strokeStyle,strokeAlpha} = _path.context;
            _path._default = {
                fillStyle,fillAlpha,strokeStyle,strokeAlpha
            };

            let focusFillStyle   = this._getProp(this.node.focus, "fillStyle", geoGraph) || fillStyle;
            let focusFillAlpha   = this._getProp(this.node.focus, "fillAlpha", geoGraph) || fillAlpha;
            let focusStrokeStyle = this._getProp(this.node.focus, "strokeStyle", geoGraph) || strokeStyle;
            let focusStrokeAlpha = this._getProp(this.node.focus, "strokeAlpha", geoGraph) || strokeAlpha;

            _path.context.fillStyle   = focusFillStyle;
            _path.context.fillAlpha   = focusFillAlpha;
            _path.context.strokeStyle = focusStrokeStyle;
            _path.context.strokeAlpha = focusStrokeAlpha;

        }
    }
    unfocusAt( adcode ){
        let _path = this._pathsp.getChildById( 'path_' + adcode );
        if( _path ){

            let {fillStyle,fillAlpha,strokeStyle,strokeAlpha} = _path._default;
            _path.context.fillStyle   = fillStyle;
            _path.context.fillAlpha   = fillAlpha;
            _path.context.strokeStyle = strokeStyle;
            _path.context.strokeAlpha = strokeAlpha;

        }
    }

    drawChildren( adcode ){
        return new Promise( resolve => {
            this.getGeoData({
                mapAdcode: adcode
            }).then(geoData => {
                if( geoData ){
                    let _path = this._pathsp.getChildById( 'path_' + adcode );
                    var pathBBox  = _path.getBound();
                    let globalPos = _path.localToGlobal( pathBBox );
                    pathBBox.x = globalPos.x;
                    pathBBox.y = globalPos.y;
        
                    resolve( this._widget(geoData, pathBBox) );
                }
            });
        } )
        
    }

    getGeoData(opt = this) {

        return new Promise((resolve, reject) => {

            if (opt.mapAdcode !== null || opt.geoJsonUrl) {
                let url = opt.geoJsonUrl || this.adcodeUrlTempl.replace(new RegExp('\\{adcode\\}', 'gm'), opt.mapAdcode);

                if (!this.app.__geoDataMap) this.app.__geoDataMap = {};
                if (this.app.__geoDataMap[url]) {
                    resolve(this.app.__geoDataMap[url])
                } else {
                    fetch(url).then(data => {
                        if( data.ok ){
                            data.json().then(d => {
                                let _d = this.geoJsonFilter(d);
                                this.app.__geoDataMap[url] = {
                                    json: _d || d
                                };
                                resolve(this.app.__geoDataMap[url])
                            })
                        } else {
                            resolve( null )
                        }
                    }).catch(error => {
                        reject(error)
                    });
                }

            } else if (opt.geoJson) {
                resolve({
                    json: opt.geoJson
                })
            }

        });
    }

    _getProp( propPath, type, nodeData) {

        var configValue = propPath[ type ];
        var value;
        
        if ( _.isFunction( configValue ) ) {
            value = configValue.apply(this, [nodeData, this.dataFrame]);
        } else {
            value = configValue;
        }

        if ( type == "fillStyle" ) {
            var rowData = nodeData.rowData;
            if ( rowData ) {
                if ( rowData[type]!==undefined ) {
                    value = rowData[type];
                } else {
                    var val = rowData[ this.valueField ];
                    if ( !isNaN(val) && val != '' ) {
                        let alpha = ((val - this.minValue) / (this.maxValue - this.minValue)) * (this.node.fillAlpha - this.node.minFillAlpha) + this.node.minFillAlpha;
                        value = colorRgba(this.themeColor, parseFloat(alpha.toFixed(2)));
                    }
                }
            }
        }

        return value;
    }

}

GraphsBase.registerComponent(Map, 'graphs', 'map');
export default Map;