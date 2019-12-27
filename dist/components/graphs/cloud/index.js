"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _canvax = _interopRequireDefault(require("canvax"));

var _index = _interopRequireDefault(require("../index"));

var _cloud = _interopRequireDefault(require("../../../layout/cloud"));

var _mmvis = require("mmvis");

var Text = _canvax["default"].Display.Text;

var CloudGraphs =
/*#__PURE__*/
function (_GraphsBase) {
  (0, _inherits2["default"])(CloudGraphs, _GraphsBase);
  (0, _createClass2["default"])(CloudGraphs, null, [{
    key: "defaultProps",
    value: function defaultProps() {
      return {
        field: {
          detail: '字段配置',
          "default": null
        },
        node: {
          detail: '节点文字配置',
          propertys: {
            fontFamily: {
              detail: '字体设置',
              "default": 'Impact'
            },
            fontColor: {
              detail: '文字颜色',
              "default": '#999'
            },
            fontSize: {
              detail: '文本字体大小',
              "default": function _default() {
                //fontSize默认12-50的随机值
                return this.minFontSize + Math.random() * this.maxFontSize;
              }
            },
            maxFontSize: {
              detail: '文本最大字体大小',
              "default": 30
            },
            minFontSize: {
              detail: '文本最小字体大小',
              "default": 16
            },
            fontWeight: {
              detail: 'fontWeight',
              "default": 'normal'
            },
            format: {
              detail: '文本格式化处理函数',
              "default": null
            },
            padding: {
              detail: '文本间距',
              "default": 10
            },
            rotation: {
              detail: '文本旋转角度',
              "default": function _default() {
                return (~~(Math.random() * 6) - 3) * 30;
              }
            },
            strokeStyle: {
              detail: '文本描边颜色',
              "default": null
            },
            select: {
              detail: '文本选中效果',
              propertys: {
                enabled: {
                  detail: '是否开启选中',
                  "default": true
                },
                lineWidth: {
                  detail: '选中后的文本描边宽',
                  "default": 2
                },
                strokeStyle: {
                  detail: '选中后的文本描边色',
                  "default": '#666'
                }
              }
            },
            focus: {
              detail: '文本hover效果',
              propertys: {
                enabled: {
                  detail: '是否开启hover效果',
                  "default": true
                }
              }
            }
          }
        }
      };
    }
  }]);

  function CloudGraphs(opt, app) {
    var _this;

    (0, _classCallCheck2["default"])(this, CloudGraphs);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(CloudGraphs).call(this, opt, app));
    _this.type = "cloud";
    var me = (0, _assertThisInitialized2["default"])(_this); //坚持一个数据节点的设置都在一个node下面

    _this.node = {
      _maxFontSizeVal: 0,
      //fontSizer如果配置为一个field的话， 找出这个field数据的最大值
      _minFontSizeVal: null //fontSizer如果配置为一个field的话， 找出这个field数据的最小值

    };

    _mmvis._.extend(true, (0, _assertThisInitialized2["default"])(_this), (0, _mmvis.getDefaultProps)(CloudGraphs.defaultProps()), opt);

    _this.node.fontColor = function (nodeData) {
      return me.app.getTheme(nodeData.iNode);
    };

    _this.init();

    return _this;
  }

  (0, _createClass2["default"])(CloudGraphs, [{
    key: "init",
    value: function init() {}
  }, {
    key: "draw",
    value: function draw(opt) {
      !opt && (opt = {});

      _mmvis._.extend(true, this, opt);

      this._drawGraphs();

      this.sprite.context.x = this.width / 2;
      this.sprite.context.y = this.height / 2;
      this.fire("complete");
    }
  }, {
    key: "getDaraFrameIndOfVal",
    value: function getDaraFrameIndOfVal(val) {
      var me = this;
      var df = this.dataFrame;

      var org = _mmvis._.find(df.data, function (d) {
        return d.field == me.field;
      });

      var ind = _mmvis._.indexOf(org.data, val);

      return ind;
    }
  }, {
    key: "_getFontSize",
    value: function _getFontSize(rowData, val) {
      var size = this.node.minFontSize;

      if (_mmvis._.isFunction(this.node.fontSize)) {
        size = this.node.fontSize(rowData);
      }

      ;

      if (_mmvis._.isString(this.node.fontSize) && this.node.fontSize in rowData) {
        var val = Number(rowData[this.node.fontSize]);

        if (!isNaN(val)) {
          size = this.node.minFontSize + (this.node.maxFontSize - this.node.minFontSize) / (this.node._maxFontSizeVal - this.node._minFontSizeVal) * (val - this.node._minFontSizeVal);
        }
      }

      if (_mmvis._.isNumber(this.node.fontSize)) {
        size = this.node.fontSize;
      }

      return size;
    }
  }, {
    key: "_getRotate",
    value: function _getRotate(item, ind) {
      var rotation = this.node.rotation;

      if (_mmvis._.isFunction(this.node.rotation)) {
        rotation = this.node.rotation(item, ind) || 0;
      }

      ;
      return rotation;
    }
  }, {
    key: "_getFontColor",
    value: function _getFontColor(nodeData) {
      var color;

      if (_mmvis._.isString(this.node.fontColor)) {
        color = this.node.fontColor;
      }

      if (_mmvis._.isFunction(this.node.fontColor)) {
        color = this.node.fontColor(nodeData);
      }

      if (color === undefined || color === null) {
        //只有undefined才会认为需要一个抄底色
        //“”都会认为是用户主动想要设置的，就为是用户不想他显示
        color = "#ccc";
      }

      ;
      return color;
    }
  }, {
    key: "_drawGraphs",
    value: function _drawGraphs() {
      var me = this; //查找fontSize的max和min

      var maxFontSizeVal = 0;
      var minFontSizeVal = 0;

      if (_mmvis._.isString(this.node.fontSize)) {
        _mmvis._.each(me.dataFrame.getFieldData(this.node.fontSize), function (val) {
          me.node._maxFontSizeVal = Math.max(me.node._maxFontSizeVal, val);
          me.node._minFontSizeVal = Math.min(me.node._minFontSizeVal, val);
        });
      }

      var layout = (0, _cloud["default"])().size([me.width, me.height]).words(me.dataFrame.getFieldData(me.field).map(function (d, ind) {
        var rowData = me.app.dataFrame.getRowDataAt(me.getDaraFrameIndOfVal(d)); //这里不能直接用i去从dataFrame里查询,因为cloud layout后，可能会扔掉渲染不下的部分

        var tag = {
          type: "cloud",
          rowData: rowData,
          field: me.field,
          value: d,
          text: null,
          size: me._getFontSize(rowData, d),
          iNode: ind,
          color: null //在绘制的时候统一设置

        };
        tag.fontColor = me._getFontColor(tag);
        var _txt = d;

        if (me.node.format) {
          _txt = me.node.format(d, tag);
        }

        ;
        tag.text = _txt || d;
        return tag;
      })).padding(me.node.padding).rotate(function (item, ind) {
        //return 0;
        return me._getRotate(item, ind);
      }).font(me.node.fontFamily).fontSize(function (d) {
        return d.size;
      }).on("end", draw);
      layout.start();

      function draw(data, e) {
        me.data = data;
        me.sprite.removeAllChildren();

        _mmvis._.each(data, function (tag, i) {
          tag.iNode = i;
          tag.dataLen = data.length;
          tag.focused = false;
          tag.selected = false;
          var tagTxt = new Text(tag.text, {
            context: {
              x: tag.x,
              y: tag.y,
              fontSize: tag.size,
              fontFamily: tag.font,
              rotation: tag.rotate,
              textBaseline: "middle",
              textAlign: "center",
              cursor: 'pointer',
              fontWeight: me.node.fontWeight,
              fillStyle: tag.fontColor
            }
          });
          me.sprite.addChild(tagTxt);
          me.node.focus.enabled && tagTxt.hover(function (e) {
            me.focusAt(this.nodeData.iNode);
          }, function (e) {
            !this.nodeData.selected && me.unfocusAt(this.nodeData.iNode);
          });
          tagTxt.nodeData = tag;
          tag._node = tagTxt;
          tagTxt.on(_mmvis.event.types.get(), function (e) {
            e.eventInfo = {
              trigger: me.node,
              title: null,
              nodes: [this.nodeData]
            };

            if (this.nodeData.text) {
              e.eventInfo.title = this.nodeData.text;
            }

            ; //fire到root上面去的是为了让root去处理tips

            me.app.fire(e.type, e);
          });
        });
      }
    }
  }, {
    key: "focusAt",
    value: function focusAt(ind) {
      var nodeData = this.data[ind];
      if (!this.node.focus.enabled || nodeData.focused) return;
      var nctx = nodeData._node.context;
      nctx.fontSize += 3;
      nodeData.focused = true;
    }
  }, {
    key: "unfocusAt",
    value: function unfocusAt(ind) {
      var nodeData = this.data[ind];
      if (!this.node.focus.enabled || !nodeData.focused) return;
      var nctx = nodeData._node.context;
      nctx.fontSize -= 3;
      nodeData.focused = false;
    }
  }, {
    key: "selectAt",
    value: function selectAt(ind) {
      var nodeData = this.data[ind];
      if (!this.node.select.enabled || nodeData.selected) return;
      var nctx = nodeData._node.context;
      nctx.lineWidth = this.node.select.lineWidth;
      nctx.strokeAlpha = this.node.select.strokeAlpha;
      nctx.strokeStyle = this.node.select.strokeStyle;
      nodeData.selected = true;
    }
  }, {
    key: "unselectAt",
    value: function unselectAt(ind) {
      var nodeData = this.data[ind];
      if (!this.node.select.enabled || !nodeData.selected) return;
      var nctx = nodeData._node.context;
      nctx.strokeStyle = this.node.strokeStyle;
      nodeData.selected = false;
    }
  }]);
  return CloudGraphs;
}(_index["default"]);

_mmvis.global.registerComponent(CloudGraphs, 'graphs', 'cloud');

var _default2 = CloudGraphs;
exports["default"] = _default2;