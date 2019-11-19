var Chartx = (function () {
	'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function commonjsRequire () {
		throw new Error('Dynamic requires are not currently supported by rollup-plugin-commonjs');
	}

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var index_cjs = createCommonjsModule(function (module) {

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var underscore = createCommonjsModule(function (module, exports) {

	(function (global, factory) {
	  {
	    factory(exports);
	  }
	})(void 0, function (exports) {

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });

	  function _typeof(obj) {
	    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
	      _typeof = function _typeof(obj) {
	        return typeof obj;
	      };
	    } else {
	      _typeof = function _typeof(obj) {
	        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	      };
	    }

	    return _typeof(obj);
	  }

	  var _ = {};
	  var breaker = {};
	  var ArrayProto = Array.prototype,
	      ObjProto = Object.prototype;
	 // Create quick reference variables for speed access to core prototypes.

	  var push = ArrayProto.push,
	      slice = ArrayProto.slice,
	      concat = ArrayProto.concat,
	      toString = ObjProto.toString,
	      hasOwnProperty = ObjProto.hasOwnProperty; // All **ECMAScript 5** native function implementations that we hope to use
	  // are declared here.

	  var nativeForEach = ArrayProto.forEach,
	      nativeMap = ArrayProto.map,
	      nativeFilter = ArrayProto.filter,
	      nativeEvery = ArrayProto.every,
	      nativeSome = ArrayProto.some,
	      nativeIndexOf = ArrayProto.indexOf,
	      nativeIsArray = Array.isArray,
	      nativeKeys = Object.keys;

	  var shallowProperty = function shallowProperty(key) {
	    return function (obj) {
	      return obj == null ? void 0 : obj[key];
	    };
	  };

	  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
	  var getLength = shallowProperty('length');

	  var isArrayLike = function isArrayLike(collection) {
	    var length = getLength(collection);
	    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
	  };

	  _.values = function (obj) {
	    var keys = _.keys(obj);

	    var length = keys.length;
	    var values = new Array(length);

	    for (var i = 0; i < length; i++) {
	      values[i] = obj[keys[i]];
	    }

	    return values;
	  };

	  _.keys = nativeKeys || function (obj) {
	    if (obj !== Object(obj)) throw new TypeError('Invalid object');
	    var keys = [];

	    for (var key in obj) {
	      if (_.has(obj, key)) keys.push(key);
	    }

	    return keys;
	  };

	  _.has = function (obj, key) {
	    return hasOwnProperty.call(obj, key);
	  };

	  var each = _.each = _.forEach = function (obj, iterator, context) {
	    if (obj == null) return;

	    if (nativeForEach && obj.forEach === nativeForEach) {
	      obj.forEach(iterator, context);
	    } else if (obj.length === +obj.length) {
	      for (var i = 0, length = obj.length; i < length; i++) {
	        if (iterator.call(context, obj[i], i, obj) === breaker) return;
	      }
	    } else {
	      var keys = _.keys(obj);

	      for (var i = 0, length = keys.length; i < length; i++) {
	        if (iterator.call(context, obj[keys[i]], keys[i], obj) === breaker) return;
	      }
	    }
	  };

	  _.compact = function (array) {
	    return _.filter(array, _.identity);
	  };

	  _.filter = _.select = function (obj, iterator, context) {
	    var results = [];
	    if (obj == null) return results;
	    if (nativeFilter && obj.filter === nativeFilter) return obj.filter(iterator, context);
	    each(obj, function (value, index, list) {
	      if (iterator.call(context, value, index, list)) results.push(value);
	    });
	    return results;
	  };

	  each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp'], function (name) {
	    _['is' + name] = function (obj) {
	      return toString.call(obj) == '[object ' + name + ']';
	    };
	  }); //if (!_.isArguments(arguments)) {

	  _.isArguments = function (obj) {
	    return !!(obj && _.has(obj, 'callee'));
	  }; //}


	  if (typeof /./ !== 'function') {
	    _.isFunction = function (obj) {
	      return typeof obj === 'function';
	    };
	  }

	  _.isFinite = function (obj) {
	    return isFinite(obj) && !isNaN(parseFloat(obj));
	  };

	  _.isNaN = function (obj) {
	    return _.isNumber(obj) && obj != +obj;
	  };

	  _.isBoolean = function (obj) {
	    return obj === true || obj === false || toString.call(obj) == '[object Boolean]';
	  };

	  _.isNull = function (obj) {
	    return obj === null;
	  };

	  _.isEmpty = function (obj) {
	    if (obj == null) return true;
	    if (_.isArray(obj) || _.isString(obj)) return obj.length === 0;

	    for (var key in obj) {
	      if (_.has(obj, key)) return false;
	    }

	    return true;
	  };

	  _.isElement = function (obj) {
	    return !!(obj && obj.nodeType === 1);
	  };

	  _.isArray = nativeIsArray || function (obj) {
	    return toString.call(obj) == '[object Array]';
	  };

	  _.isObject = function (obj) {
	    return obj === Object(obj);
	  };

	  _.identity = function (value) {
	    return value;
	  };

	  _.indexOf = function (array, item, isSorted) {
	    if (array == null) return -1;
	    var i = 0,
	        length = array.length;

	    if (isSorted) {
	      if (typeof isSorted == 'number') {
	        i = isSorted < 0 ? Math.max(0, length + isSorted) : isSorted;
	      } else {
	        i = _.sortedIndex(array, item);
	        return array[i] === item ? i : -1;
	      }
	    }

	    if (nativeIndexOf && array.indexOf === nativeIndexOf) return array.indexOf(item, isSorted);

	    for (; i < length; i++) {
	      if (array[i] === item) return i;
	    }

	    return -1;
	  };

	  _.isWindow = function (obj) {
	    return obj != null && obj == obj.window;
	  }; // Internal implementation of a recursive `flatten` function.


	  var flatten = function flatten(input, shallow, output) {
	    if (shallow && _.every(input, _.isArray)) {
	      return concat.apply(output, input);
	    }

	    each(input, function (value) {
	      if (_.isArray(value) || _.isArguments(value)) {
	        shallow ? push.apply(output, value) : flatten(value, shallow, output);
	      } else {
	        output.push(value);
	      }
	    });
	    return output;
	  }; // Flatten out an array, either recursively (by default), or just one level.


	  _.flatten = function (array, shallow) {
	    return flatten(array, shallow, []);
	  };

	  _.every = _.all = function (obj, iterator, context) {
	    iterator || (iterator = _.identity);
	    var result = true;
	    if (obj == null) return result;
	    if (nativeEvery && obj.every === nativeEvery) return obj.every(iterator, context);
	    each(obj, function (value, index, list) {
	      if (!(result = result && iterator.call(context, value, index, list))) return breaker;
	    });
	    return !!result;
	  }; // Return the minimum element (or element-based computation).


	  _.min = function (obj, iterator, context) {
	    if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
	      return Math.min.apply(Math, obj);
	    }

	    if (!iterator && _.isEmpty(obj)) return Infinity;
	    var result = {
	      computed: Infinity,
	      value: Infinity
	    };
	    each(obj, function (value, index, list) {
	      var computed = iterator ? iterator.call(context, value, index, list) : value;
	      computed < result.computed && (result = {
	        value: value,
	        computed: computed
	      });
	    });
	    return result.value;
	  }; // Return the maximum element or (element-based computation).
	  // Can't optimize arrays of integers longer than 65,535 elements.
	  // See [WebKit Bug 80797](https://bugs.webkit.org/show_bug.cgi?id=80797)


	  _.max = function (obj, iterator, context) {
	    if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
	      return Math.max.apply(Math, obj);
	    }

	    if (!iterator && _.isEmpty(obj)) return -Infinity;
	    var result = {
	      computed: -Infinity,
	      value: -Infinity
	    };
	    each(obj, function (value, index, list) {
	      var computed = iterator ? iterator.call(context, value, index, list) : value;
	      computed > result.computed && (result = {
	        value: value,
	        computed: computed
	      });
	    });
	    return result.value;
	  }; // Return the first value which passes a truth test. Aliased as `detect`.


	  _.find = _.detect = function (obj, iterator, context) {
	    var result;
	    any(obj, function (value, index, list) {
	      if (iterator.call(context, value, index, list)) {
	        result = value;
	        return true;
	      }
	    });
	    return result;
	  }; // Determine if at least one element in the object matches a truth test.
	  // Delegates to **ECMAScript 5**'s native `some` if available.
	  // Aliased as `any`.


	  var any = _.some = _.any = function (obj, iterator, context) {
	    iterator || (iterator = _.identity);
	    var result = false;
	    if (obj == null) return result;
	    if (nativeSome && obj.some === nativeSome) return obj.some(iterator, context);
	    each(obj, function (value, index, list) {
	      if (result || (result = iterator.call(context, value, index, list))) return breaker;
	    });
	    return !!result;
	  }; // Return a version of the array that does not contain the specified value(s).


	  _.without = function (array) {
	    return _.difference(array, slice.call(arguments, 1));
	  }; // Take the difference between one array and a number of other arrays.
	  // Only the elements present in just the first array will remain.


	  _.difference = function (array) {
	    var rest = concat.apply(ArrayProto, slice.call(arguments, 1));
	    return _.filter(array, function (value) {
	      return !_.contains(rest, value);
	    });
	  }; // Produce a duplicate-free version of the array. If the array has already
	  // been sorted, you have the option of using a faster algorithm.
	  // Aliased as `unique`.


	  _.uniq = _.unique = function (array, isSorted, iterator, context) {
	    if (_.isFunction(isSorted)) {
	      context = iterator;
	      iterator = isSorted;
	      isSorted = false;
	    }

	    var initial = iterator ? _.map(array, iterator, context) : array;
	    var results = [];
	    var seen = [];
	    each(initial, function (value, index) {
	      if (isSorted ? !index || seen[seen.length - 1] !== value : !_.contains(seen, value)) {
	        seen.push(value);
	        results.push(array[index]);
	      }
	    });
	    return results;
	  }; // Return the results of applying the iterator to each element.
	  // Delegates to **ECMAScript 5**'s native `map` if available.


	  _.map = _.collect = function (obj, iterator, context) {
	    var results = [];
	    if (obj == null) return results;
	    if (nativeMap && obj.map === nativeMap) return obj.map(iterator, context);
	    each(obj, function (value, index, list) {
	      results.push(iterator.call(context, value, index, list));
	    });
	    return results;
	  }; // Determine if the array or object contains a given value (using `===`).
	  // Aliased as `include`.


	  _.contains = _.include = function (obj, target) {
	    if (obj == null) return false;
	    if (nativeIndexOf && obj.indexOf === nativeIndexOf) return obj.indexOf(target) != -1;
	    return any(obj, function (value) {
	      return value === target;
	    });
	  }; // Convenience version of a common use case of `map`: fetching a property.


	  _.pluck = function (obj, key) {
	    return _.map(obj, function (value) {
	      return value[key];
	    });
	  }; // Return a random integer between min and max (inclusive).


	  _.random = function (min, max) {
	    if (max == null) {
	      max = min;
	      min = 0;
	    }

	    return min + Math.floor(Math.random() * (max - min + 1));
	  }; // Shuffle a collection.


	  _.shuffle = function (obj) {
	    return _.sample(obj, Infinity);
	  };

	  _.sample = function (obj, n, guard) {
	    if (n == null || guard) {
	      if (!isArrayLike(obj)) obj = _.values(obj);
	      return obj[_.random(obj.length - 1)];
	    }

	    var sample = isArrayLike(obj) ? _.clone(obj) : _.values(obj);
	    var length = getLength(sample);
	    n = Math.max(Math.min(n, length), 0);
	    var last = length - 1;

	    for (var index = 0; index < n; index++) {
	      var rand = _.random(index, last);

	      var temp = sample[index];
	      sample[index] = sample[rand];
	      sample[rand] = temp;
	    }

	    return sample.slice(0, n);
	  };
	  /**
	  *
	  *如果是深度extend，第一个参数就设置为true
	  */


	  _.extend = function () {
	    var options,
	        name,
	        src,
	        copy,
	        target = arguments[0] || {},
	        i = 1,
	        length = arguments.length,
	        deep = false;

	    if (typeof target === "boolean") {
	      deep = target;
	      target = arguments[1] || {};
	      i = 2;
	    }

	    if (_typeof(target) !== "object" && !_.isFunction(target)) {
	      target = {};
	    }

	    if (length === i) {
	      target = this;
	      --i;
	    }

	    for (; i < length; i++) {
	      if ((options = arguments[i]) != null) {
	        for (name in options) {
	          src = target[name];
	          copy = options[name];

	          if (target === copy || copy === undefined) {
	            continue;
	          }

	          if (deep && copy && _.isObject(copy) && copy.constructor === Object) {
	            target[name] = _.extend(deep, src, copy);
	          } else {
	            target[name] = copy;
	          }
	        }
	      }
	    }

	    return target;
	  };

	  _.clone = function (obj) {
	    if (!_.isObject(obj)) return obj;
	    return _.isArray(obj) ? obj.slice() : _.extend(true, {}, obj);
	  }; //********补存一些数学常用方法,暂放在这里文件下,后期多了单独成立一个类库  */
	  // compute euclidian modulo of m % n
	  // https://en.wikipedia.org/wiki/Modulo_operation


	  _.euclideanModulo = function (n, m) {
	    return (n % m + m) % m;
	  };

	  _.DEG2RAD = Math.PI / 180;
	  _.RAD2DEG = 180 / Math.PI;

	  _.degToRad = function (degrees) {
	    return degrees * _.DEG2RAD;
	  };

	  _.radToDeg = function (radians) {
	    return radians * _.RAD2DEG;
	  };

	  exports["default"] = _;
	});
	});

	unwrapExports(underscore);

	var dataSection = createCommonjsModule(function (module, exports) {

	(function (global, factory) {
	  {
	    factory(exports, underscore);
	  }
	})(void 0, function (exports, _underscore) {

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });

	  var _underscore2 = _interopRequireDefault(_underscore);

	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      default: obj
	    };
	  }

	  function normalizeTickInterval(interval, magnitude) {
	    var normalized, i; // var multiples = [1, 2, 2.5, 5, 10];

	    var multiples = [1, 2, 5, 10]; // round to a tenfold of 1, 2, 2.5 or 5

	    normalized = interval / magnitude; // normalize the interval to the nearest multiple

	    for (var i = 0; i < multiples.length; i++) {
	      interval = multiples[i];

	      if (normalized <= (multiples[i] + (multiples[i + 1] || multiples[i])) / 2) {
	        break;
	      }
	    } // multiply back to the correct magnitude


	    interval *= magnitude;
	    return interval;
	  }

	  function correctFloat(num) {
	    return parseFloat(num.toPrecision(14));
	  }

	  function getLinearTickPositions(arr, $maxPart, $cfg) {
	    arr = _underscore2["default"].without(arr, undefined, null, "");
	    var scale = $cfg && $cfg.scale ? parseFloat($cfg.scale) : 1; //返回的数组中的值 是否都为整数(思霏)  防止返回[8, 8.2, 8.4, 8.6, 8.8, 9]   应该返回[8, 9]

	    var isInt = $cfg && $cfg.isInt ? 1 : 0;

	    if (isNaN(scale)) {
	      scale = 1;
	    }

	    var max = _underscore2["default"].max(arr);

	    var initMax = max;
	    max *= scale;

	    var min = _underscore2["default"].min(arr);

	    if (min == max) {
	      if (max > 0) {
	        min = 0;
	        return [min, max]; // min= Math.round(max/2);
	      } else if (max < 0) {
	        return [max, 0]; //min = max*2;
	      } else {
	        max = 1;
	        return [0, max];
	      }
	    }

	    var length = max - min;

	    if (length) {
	      var tempmin = min; //保证min>0的时候不会出现负数

	      min -= length * 0.05; // S.log(min +":"+ tempmin)

	      if (min < 0 && tempmin >= 0) {
	        min = 0;
	      }

	      max += length * 0.05;
	    }

	    var tickInterval = (max - min) * 0.3; //72 / 365;

	    var magnitude = Math.pow(10, Math.floor(Math.log(tickInterval) / Math.LN10));
	    tickInterval = normalizeTickInterval(tickInterval, magnitude);

	    if (isInt) {
	      tickInterval = Math.ceil(tickInterval);
	    }

	    var pos,
	        lastPos,
	        roundedMin = correctFloat(Math.floor(min / tickInterval) * tickInterval),
	        roundedMax = correctFloat(Math.ceil(max / tickInterval) * tickInterval),
	        tickPositions = []; // Populate the intermediate values

	    pos = roundedMin;

	    while (pos <= roundedMax) {
	      // Place the tick on the rounded value
	      tickPositions.push(pos); // Always add the raw tickInterval, not the corrected one.

	      pos = correctFloat(pos + tickInterval); // If the interval is not big enough in the current min - max range to actually increase
	      // the loop variable, we need to break out to prevent endless loop. Issue #619

	      if (pos === lastPos) {
	        break;
	      } // Record the last value


	      lastPos = pos;
	    }

	    if (tickPositions.length >= 3) {
	      if (tickPositions[tickPositions.length - 2] >= initMax) {
	        tickPositions.pop();
	      }
	    }

	    return tickPositions;
	  }

	  var dataSection = {
	    section: function section($arr, $maxPart, $cfg) {
	      return _underscore2["default"].uniq(getLinearTickPositions($arr, $maxPart, $cfg));
	    }
	  };
	  exports["default"] = dataSection;
	});
	});

	unwrapExports(dataSection);

	var tools = createCommonjsModule(function (module, exports) {

	(function (global, factory) {
	  {
	    factory(exports, underscore);
	  }
	})(void 0, function (exports, _underscore) {

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	  exports.getDefaultProps = exports.cloneData = exports.cloneOptions = undefined;

	  var _underscore2 = _interopRequireDefault(_underscore);

	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      default: obj
	    };
	  }

	  var cloneOptions = function cloneOptions(opt) {
	    return _underscore2["default"].clone(opt);
	  };

	  var cloneData = function cloneData(data) {
	    return JSON.parse(JSON.stringify(data));
	  };

	  var getDefaultProps = function getDefaultProps(dProps) {
	    var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    for (var p in dProps) {
	      if (!!p.indexOf("_")) {
	        if (!dProps[p] || !dProps[p].propertys) {
	          //如果这个属性没有子属性了，那么就说明这个已经是叶子节点了
	          if (_underscore2["default"].isObject(dProps[p]) && !_underscore2["default"].isFunction(dProps[p]) && !_underscore2["default"].isArray(dProps[p])) {
	            target[p] = dProps[p]["default"];
	          } else {
	            target[p] = dProps[p];
	          }
	        } else {
	          target[p] = {};
	          getDefaultProps(dProps[p].propertys, target[p]);
	        }
	      }
	    }

	    return target;
	  };

	  exports.cloneOptions = cloneOptions;
	  exports.cloneData = cloneData;
	  exports.getDefaultProps = getDefaultProps;
	});
	});

	unwrapExports(tools);

	var axis = createCommonjsModule(function (module, exports) {

	(function (global, factory) {
	  {
	    factory(exports, underscore, dataSection, tools);
	  }
	})(void 0, function (exports, _underscore, _dataSection2, _tools) {

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });

	  var _underscore2 = _interopRequireDefault(_underscore);

	  var _dataSection3 = _interopRequireDefault(_dataSection2);

	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      default: obj
	    };
	  }

	  function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  }

	  function _defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  function _createClass(Constructor, protoProps, staticProps) {
	    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) _defineProperties(Constructor, staticProps);
	    return Constructor;
	  }

	  var axis = function () {
	    _createClass(axis, null, [{
	      key: "defaultProps",
	      value: function defaultProps() {
	        return {
	          layoutType: {
	            detail: '布局方式',
	            "default": 'proportion'
	          },
	          dataSection: {
	            detail: '轴数据集',
	            "default": []
	          },
	          sectionHandler: {
	            detail: '自定义dataSection的计算公式',
	            "default": null
	          },
	          waterLine: {
	            detail: '水位线',
	            "default": null,
	            documentation: '水位data，需要混入 计算 dataSection， 如果有设置waterLine， dataSection的最高水位不会低于这个值'
	          },
	          middleWeight: {
	            detail: '区间分隔线',
	            "default": null,
	            documentation: '如果middleweight有设置的话 dataSectionGroup 为被middleweight分割出来的n个数组>..[ [0,50 , 100],[100,500,1000] ]'
	          },
	          middleWeightPos: {
	            detail: '区间分隔线的物理位置，百分比,默认 0.5 ',
	            "default": null
	          },
	          symmetric: {
	            detail: '自动正负对称',
	            "default": false,
	            documentation: 'proportion下，是否需要设置数据为正负对称的数据，比如 [ 0,5,10 ] = > [ -10, 0 10 ]，象限坐标系的时候需要'
	          },
	          origin: {
	            detail: '轴的起源值',
	            "default": null,
	            documentation: '\
                    1，如果数据中又正数和负数，则默认为0 <br />\
                    2，如果dataSection最小值小于0，则baseNumber为最小值<br />\
                    3，如果dataSection最大值大于0，则baseNumber为最大值<br />\
                    4，也可以由用户在第2、3种情况下强制配置为0，则section会补充满从0开始的刻度值\
                '
	          },
	          sort: {
	            detail: '排序',
	            "default": null
	          },
	          posParseToInt: {
	            detail: '是否位置计算取整',
	            "default": false,
	            documentation: '比如在柱状图中，有得时候需要高精度的能间隔1px的柱子，那么x轴的计算也必须要都是整除的'
	          }
	        };
	      }
	    }]);

	    function axis(opt, dataOrg) {
	      _classCallCheck(this, axis);

	      //源数据
	      //这个是一个一定会有两层数组的数据结构，是一个标准的dataFrame数据
	      // [ 
	      //    [   
	      //        [1,2,3],  
	      //        [1,2,3]    //这样有堆叠的数据只会出现在proportion的axis里，至少目前是这样
	      //    ] 
	      //   ,[    
	      //        [1,2,3] 
	      //    ]   
	      // ]
	      this._opt = _underscore2["default"].clone(opt);
	      this.dataOrg = dataOrg || []; //3d中有引用到

	      this.dataSectionLayout = []; //和dataSection一一对应的，每个值的pos，//get xxx OfPos的时候，要先来这里做一次寻找
	      //轴总长
	      //3d中有引用到

	      this.axisLength = 1;
	      this._cellCount = null;
	      this._cellLength = null; //数据变动的时候要置空
	      //默认的 dataSectionGroup = [ dataSection ], dataSection 其实就是 dataSectionGroup 去重后的一维版本

	      this.dataSectionGroup = [];
	      this.originPos = 0; //value为 origin 对应的pos位置

	      this._originTrans = 0; //当设置的 origin 和datasection的min不同的时候，
	      //min,max不需要外面配置，没意义

	      this._min = null;
	      this._max = null;

	      _underscore2["default"].extend(true, this, (0, _tools.getDefaultProps)(axis.defaultProps()), opt);
	    }

	    _createClass(axis, [{
	      key: "resetDataOrg",
	      value: function resetDataOrg(dataOrg) {
	        //配置和数据变化
	        this.dataSection = [];
	        this.dataSectionGroup = [];
	        this.dataOrg = dataOrg;
	        this._cellCount = null;
	        this._cellLength = null;
	      }
	    }, {
	      key: "setAxisLength",
	      value: function setAxisLength(length) {
	        this.axisLength = length;
	        this.calculateProps();
	      }
	    }, {
	      key: "calculateProps",
	      value: function calculateProps() {
	        var me = this;

	        if (this.layoutType == "proportion") {
	          if (this._min == null) {
	            this._min = _underscore2["default"].min(this.dataSection);
	          }

	          if (this._max == null) {
	            this._max = _underscore2["default"].max(this.dataSection);
	          }
	          //如果用户设置了origin，那么就已用户的设置为准

	          if (!("origin" in this._opt)) {
	            this.origin = 0; //this.dataSection[0];//_.min( this.dataSection );

	            if (_underscore2["default"].max(this.dataSection) < 0) {
	              this.origin = _underscore2["default"].max(this.dataSection);
	            }

	            if (_underscore2["default"].min(this.dataSection) > 0) {
	              this.origin = _underscore2["default"].min(this.dataSection);
	            }
	          }
	          this._originTrans = this._getOriginTrans(this.origin);
	          this.originPos = this.getPosOfVal(this.origin);
	        }

	        this.dataSectionLayout = [];

	        _underscore2["default"].each(this.dataSection, function (val, i) {
	          var ind = i;

	          if (me.layoutType == "proportion") {
	            ind = me.getIndexOfVal(val);
	          }
	          var pos = parseInt(me.getPosOf({
	            ind: i,
	            val: val
	          }), 10);
	          me.dataSectionLayout.push({
	            val: val,
	            ind: ind,
	            pos: pos
	          });
	        });
	      }
	    }, {
	      key: "getDataSection",
	      value: function getDataSection() {
	        //对外返回的dataSection
	        return this.dataSection;
	      }
	    }, {
	      key: "setDataSection",
	      value: function setDataSection(_dataSection) {
	        var me = this; //如果用户没有配置dataSection，或者用户传了，但是传了个空数组，则自己组装dataSection

	        if (_underscore2["default"].isEmpty(_dataSection) && _underscore2["default"].isEmpty(this._opt.dataSection)) {
	          if (this.layoutType == "proportion") {
	            var arr = this._getDataSection();

	            if ("origin" in me._opt) {
	              arr.push(me._opt.origin);
	            }

	            if (arr.length == 1) {
	              arr.push(arr[0] * .5);
	            }

	            if (this.waterLine) {
	              arr.push(this.waterLine);
	            }

	            if (this.symmetric) {
	              //如果需要处理为对称数据
	              var _min = _underscore2["default"].min(arr);

	              var _max = _underscore2["default"].max(arr);

	              if (Math.abs(_min) > Math.abs(_max)) {
	                arr.push(Math.abs(_min));
	              } else {
	                arr.push(-Math.abs(_max));
	              }
	            }

	            for (var ai = 0, al = arr.length; ai < al; ai++) {
	              arr[ai] = Number(arr[ai]);

	              if (isNaN(arr[ai])) {
	                arr.splice(ai, 1);
	                ai--;
	                al--;
	              }
	            }

	            if (_underscore2["default"].isFunction(this.sectionHandler)) {
	              this.dataSection = this.sectionHandler(arr);
	            }

	            if (!this.dataSection || !this.dataSection.length) {
	              this.dataSection = _dataSection3["default"].section(arr, 3);
	            }

	            if (this.symmetric) {
	              //可能得到的区间是偶数， 非对称，强行补上
	              var _min = _underscore2["default"].min(this.dataSection);

	              var _max = _underscore2["default"].max(this.dataSection);

	              if (Math.abs(_min) > Math.abs(_max)) {
	                this.dataSection.push(Math.abs(_min));
	              } else {
	                this.dataSection.unshift(-Math.abs(_max));
	              }
	            }

	            if (this.dataSection.length == 0) {
	              this.dataSection = [0];
	            }

	            this.dataSectionGroup = [_underscore2["default"].clone(this.dataSection)];

	            this._middleweight(); //如果有middleweight配置，需要根据配置来重新矫正下datasection


	            this._sort();
	          } else {
	            //非proportion 也就是 rule peak 模式下面
	            this.dataSection = _underscore2["default"].flatten(this.dataOrg); //this._getDataSection();

	            this.dataSectionGroup = [this.dataSection];
	          }
	        } else {
	          this.dataSection = _dataSection || this._opt.dataSection;
	          this.dataSectionGroup = [this.dataSection];
	        }

	        this._middleWeightPos();
	      }
	    }, {
	      key: "_getDataSection",
	      value: function _getDataSection() {
	        //如果有堆叠，比如[ ["uv","pv"], "click" ]
	        //那么这个 this.dataOrg， 也是个对应的结构
	        //vLen就会等于2
	        var vLen = 1;

	        _underscore2["default"].each(this.dataOrg, function (arr) {
	          vLen = Math.max(arr.length, vLen);
	        });

	        if (vLen == 1) {
	          return this._oneDimensional();
	        }

	        if (vLen > 1) {
	          return this._twoDimensional();
	        }
	      }
	    }, {
	      key: "_oneDimensional",
	      value: function _oneDimensional() {
	        var arr = _underscore2["default"].flatten(this.dataOrg); //_.flatten( data.org );


	        for (var i = 0, il = arr.length; i < il; i++) {
	          arr[i] = arr[i] || 0;
	        }
	        return arr;
	      }
	    }, {
	      key: "_twoDimensional",
	      value: function _twoDimensional() {
	        var d = this.dataOrg;
	        var arr = [];
	        var min;

	        _underscore2["default"].each(d, function (d, i) {
	          if (!d.length) {
	            return;
	          }

	          if (!_underscore2["default"].isArray(d[0])) {
	            arr.push(d);
	            return;
	          }
	          var varr = [];
	          var len = d[0].length;
	          var vLen = d.length;

	          for (var i = 0; i < len; i++) {
	            var up_count = 0;
	            var up_i = 0;
	            var down_count = 0;
	            var down_i = 0;

	            for (var ii = 0; ii < vLen; ii++) {
	              var _val = d[ii][i];

	              if (!_val && _val !== 0) {
	                continue;
	              }
	              min == undefined && (min = _val);
	              min = Math.min(min, _val);

	              if (_val >= 0) {
	                up_count += _val;
	                up_i++;
	              } else {
	                down_count += _val;
	                down_i++;
	              }
	            }

	            up_i && varr.push(up_count);
	            down_i && varr.push(down_count);
	          }
	          arr.push(varr);
	        });

	        arr.push(min);
	        return _underscore2["default"].flatten(arr);
	      }
	    }, {
	      key: "setWaterLine",
	      value: function setWaterLine(val) {
	        if (val <= this.waterLine) return;
	        this.waterLine = val;

	        if (val < _underscore2["default"].min(this.dataSection) || val > _underscore2["default"].max(this.dataSection)) {
	          //waterLine不再当前section的区间内，需要重新计算整个datasection    
	          this.setDataSection();
	          this.calculateProps();
	        }
	      }
	    }, {
	      key: "_sort",
	      value: function _sort() {
	        if (this.sort) {
	          var sort = this._getSortType();

	          if (sort == "desc") {
	            this.dataSection.reverse(); //dataSectionGroup 从里到外全部都要做一次 reverse， 这样就可以对应上 dataSection.reverse()

	            _underscore2["default"].each(this.dataSectionGroup, function (dsg, i) {
	              dsg.reverse();
	            });

	            this.dataSectionGroup.reverse(); //dataSectionGroup reverse end
	          }
	        }
	      }
	    }, {
	      key: "_getSortType",
	      value: function _getSortType() {
	        var _sort;

	        if (_underscore2["default"].isString(this.sort)) {
	          _sort = this.sort;
	        }

	        if (!_sort) {
	          _sort = "asc";
	        }

	        return _sort;
	      }
	    }, {
	      key: "_middleweight",
	      value: function _middleweight() {

	        if (this.middleWeight) {
	          //支持多个量级的设置
	          if (!_underscore2["default"].isArray(this.middleWeight)) {
	            this.middleWeight = [this.middleWeight];
	          }

	          var dMin = _underscore2["default"].min(this.dataSection);

	          var dMax = _underscore2["default"].max(this.dataSection);

	          var newDS = [dMin];
	          var newDSG = [];

	          for (var i = 0, l = this.middleWeight.length; i < l; i++) {
	            var preMiddleweight = dMin;

	            if (i > 0) {
	              preMiddleweight = this.middleWeight[i - 1];
	            }
	            var middleVal = preMiddleweight + parseInt((this.middleWeight[i] - preMiddleweight) / 2);
	            newDS.push(middleVal);
	            newDS.push(this.middleWeight[i]);
	            newDSG.push([preMiddleweight, middleVal, this.middleWeight[i]]);
	          }
	          var lastMW = this.middleWeight.slice(-1)[0];

	          if (dMax > lastMW) {
	            newDS.push(lastMW + (dMax - lastMW) / 2);
	            newDS.push(dMax);
	            newDSG.push([lastMW, lastMW + (dMax - lastMW) / 2, dMax]);
	          } //好了。 到这里用简单的规则重新拼接好了新的 dataSection


	          this.dataSection = newDS;
	          this.dataSectionGroup = newDSG;
	        }
	      }
	    }, {
	      key: "_middleWeightPos",
	      value: function _middleWeightPos() {
	        var me = this;

	        if (this.middleWeightPos) {
	          if (!_underscore2["default"].isArray(this.middleWeightPos)) {
	            this.middleWeightPos = [this.middleWeightPos];
	          }
	          //如果大于1了则默认按照均分设置

	          var _count = 0;

	          _underscore2["default"].each(this.middleWeightPos, function (pos) {
	            _count += pos;
	          });

	          if (_count < 1) {
	            this.middleWeightPos.push(1 - _count);
	          }

	          if (_count > 1) {
	            this.middleWeightPos = null;
	          }
	        }

	        if (this.middleWeight) {
	          if (!this.middleWeightPos) {
	            this.middleWeightPos = [];
	            var _prePos = 0;

	            _underscore2["default"].each(this.middleWeight, function () {
	              var _pos = 1 / (me.middleWeight.length + 1);

	              _prePos += _pos;
	              me.middleWeightPos.push(_pos);
	            });

	            this.middleWeightPos.push(1 - _prePos);
	          }
	        } else {
	          this.middleWeightPos = [1];
	        }
	      }
	    }, {
	      key: "_getOriginTrans",
	      value: function _getOriginTrans(origin) {
	        var pos = 0;
	        var dsgLen = this.dataSectionGroup.length; //var groupLength = this.axisLength / dsgLen;

	        for (var i = 0, l = dsgLen; i < l; i++) {
	          var ds = this.dataSectionGroup[i];
	          var groupLength = this.axisLength * this.middleWeightPos[i];
	          var preGroupLenth = 0;

	          _underscore2["default"].each(this.middleWeightPos, function (mp, mi) {
	            if (mi < i) {
	              preGroupLenth += me.axisLength * mp;
	            }
	          });

	          if (this.layoutType == "proportion") {
	            var min = _underscore2["default"].min(ds);

	            var max = _underscore2["default"].max(ds);

	            var amountABS = Math.abs(max - min);

	            if (origin >= min && origin <= max) {
	              pos = (origin - min) / amountABS * groupLength + preGroupLenth;
	              break;
	            }
	          }
	        }

	        if (this.sort == "desc") {
	          //如果是倒序的
	          pos = -(groupLength - pos);
	        }
	        return parseInt(pos);
	      }
	    }, {
	      key: "_getLayoutDataOf",
	      value: function _getLayoutDataOf(opt) {
	        var props = ["val", "ind", "pos"];
	        var prop;

	        _underscore2["default"].each(props, function (_p) {
	          if (_p in opt) {
	            prop = _p;
	          }
	        });

	        var layoutData;

	        _underscore2["default"].each(this.dataSectionLayout, function (item) {
	          if (item[prop] === opt[prop]) {
	            layoutData = item;
	          }
	        });

	        return layoutData || {};
	      }
	    }, {
	      key: "getPosOfVal",
	      value: function getPosOfVal(val) {
	        /* val可能会重复，so 这里得到的会有问题，先去掉
	        //先检查下 dataSectionLayout 中有没有对应的记录
	        var _pos = this._getLayoutDataOf({ val : val }).pos;
	        if( _pos != undefined ){
	            return _pos;
	        };
	        */
	        return this.getPosOf({
	          val: val
	        });
	      }
	    }, {
	      key: "getPosOfInd",
	      value: function getPosOfInd(ind) {
	        //先检查下 dataSectionLayout 中有没有对应的记录
	        var _pos = this._getLayoutDataOf({
	          ind: ind
	        }).pos;

	        if (_pos != undefined) {
	          return _pos;
	        }
	        return this.getPosOf({
	          ind: ind
	        });
	      }
	    }, {
	      key: "getPosOf",
	      value: function getPosOf(opt) {
	        var me = this;
	        var pos;

	        var cellCount = this._getCellCount(); //dataOrg上面的真实数据节点数，把轴分成了多少个节点


	        if (this.layoutType == "proportion") {
	          var dsgLen = this.dataSectionGroup.length; //var groupLength = this.axisLength / dsgLen;

	          for (var i = 0, l = dsgLen; i < l; i++) {
	            var ds = this.dataSectionGroup[i];
	            var groupLength = this.axisLength * this.middleWeightPos[i];
	            var preGroupLenth = 0;

	            _underscore2["default"].each(this.middleWeightPos, function (mp, mi) {
	              if (mi < i) {
	                preGroupLenth += me.axisLength * mp;
	              }
	            });

	            var min = _underscore2["default"].min(ds);

	            var max = _underscore2["default"].max(ds);

	            var val = "val" in opt ? opt.val : this.getValOfInd(opt.ind);

	            if (val >= min && val <= max) {
	              var _origin = this.origin;
	              var origiInRange = !(_origin < min || _origin > max); //如果 origin 并不在这个区间

	              if (!origiInRange) {
	                _origin = min;
	              }

	              var maxGroupDisABS = Math.max(Math.abs(max - _origin), Math.abs(_origin - min));
	              var amountABS = Math.abs(max - min);
	              var originPos = maxGroupDisABS / amountABS * groupLength;
	              pos = (val - _origin) / maxGroupDisABS * originPos + preGroupLenth;

	              if (isNaN(pos)) {
	                pos = parseInt(preGroupLenth);
	              }

	              if (origiInRange) {
	                //origin在区间内的时候，才需要便宜_originTrans
	                pos += this._originTrans;
	              }
	              break;
	            }
	          }
	        } else {
	          if (cellCount == 1) {
	            //如果只有一数据，那么就全部默认在正中间
	            pos = this.axisLength / 2;
	          } else {
	            //TODO 这里在非proportion情况下，如果没有opt.ind 那么getIndexOfVal 其实是有风险的，
	            //因为可能有多个数据的val一样
	            var valInd = "ind" in opt ? opt.ind : this.getIndexOfVal(opt.val);

	            if (valInd != -1) {
	              if (this.layoutType == "rule") {
	                //line 的xaxis就是 rule
	                pos = valInd / (cellCount - 1) * this.axisLength;
	              }

	              if (this.layoutType == "peak") {
	                //bar的xaxis就是 peak

	                /*
	                pos = (this.axisLength/cellCount) 
	                      * (valInd+1) 
	                      - (this.axisLength/cellCount)/2;
	                */
	                var _cellLength = this.getCellLength();

	                pos = _cellLength * (valInd + 1) - _cellLength / 2;
	              }
	            }
	          }
	        }
	        !pos && (pos = 0);
	        pos = Number(pos.toFixed(1));
	        return Math.abs(pos);
	      }
	    }, {
	      key: "getValOfPos",
	      value: function getValOfPos(pos) {
	        //先检查下 dataSectionLayout 中有没有对应的记录
	        var _val = this._getLayoutDataOf({
	          pos: pos
	        }).val;

	        if (_val != undefined) {
	          return _val;
	        }
	        return this._getValOfInd(this.getIndexOfPos(pos));
	      }
	    }, {
	      key: "getValOfInd",
	      value: function getValOfInd(ind) {
	        //先检查下 dataSectionLayout 中有没有对应的记录
	        var _val = this._getLayoutDataOf({
	          ind: ind
	        }).val;

	        if (_val != undefined) {
	          return _val;
	        }
	        return this._getValOfInd(ind);
	        /*
	        if (this.layoutType == "proportion") {
	        
	        } else {
	            //这里的index是直接的对应dataOrg的索引
	            var org = ds ? ds : _.flatten(this.dataOrg);
	            return org[ind];
	        };
	        */
	      }
	    }, {
	      key: "_getValOfInd",
	      value: function _getValOfInd(ind, ds) {
	        var me = this;

	        var org = _underscore2["default"].flatten(this.dataOrg);

	        var val;

	        if (this.layoutType == "proportion") {
	          var dsgLen = this.dataSectionGroup.length; //var groupLength = this.axisLength / dsgLen;

	          _underscore2["default"].each(this.dataSectionGroup, function (ds, i) {
	            var groupLength = me.axisLength * me.middleWeightPos[i];
	            var preGroupLenth = 0;

	            _underscore2["default"].each(me.middleWeightPos, function (mp, mi) {
	              if (mi < i) {
	                preGroupLenth += me.axisLength * mp;
	              }
	            });

	            if (parseInt(ind / groupLength) == i || i == me.dataSectionGroup.length - 1) {
	              var min = _underscore2["default"].min(ds);

	              var max = _underscore2["default"].max(ds);

	              val = min + (max - min) / groupLength * (ind - preGroupLenth);
	              return false;
	            }
	          });
	        } else {
	          val = org[ind];
	        }
	        return val;
	      }
	    }, {
	      key: "getIndexOfPos",
	      value: function getIndexOfPos(pos) {
	        //先检查下 dataSectionLayout 中有没有对应的记录
	        var _ind = this._getLayoutDataOf({
	          pos: pos
	        }).ind;

	        if (_ind != undefined) {
	          return _ind;
	        }
	        var ind = 0;
	        var cellLength = this.getCellLengthOfPos(pos);

	        var cellCount = this._getCellCount();

	        if (this.layoutType == "proportion") {
	          //proportion中的index以像素为单位 所以，传入的像素值就是index
	          return pos;
	        } else {
	          if (this.layoutType == "peak") {
	            ind = parseInt(pos / cellLength);

	            if (ind == cellCount) {
	              ind = cellCount - 1;
	            }
	          }

	          if (this.layoutType == "rule") {
	            ind = parseInt((pos + cellLength / 2) / cellLength);

	            if (cellCount == 1) {
	              //如果只有一个数据
	              ind = 0;
	            }
	          }
	        }
	        return ind;
	      }
	    }, {
	      key: "getIndexOfVal",
	      value: function getIndexOfVal(val) {
	        var valInd = -1;

	        if (this.layoutType == "proportion") {
	          //先检查下 dataSectionLayout 中有没有对应的记录
	          var _ind = this._getLayoutDataOf({
	            val: val
	          }).ind;

	          if (_ind != undefined) {
	            return _ind;
	          }
	          //所以这里要返回pos

	          valInd = this.getPosOfVal(val);
	        } else {
	          _underscore2["default"].each(this.dataOrg, function (arr) {
	            _underscore2["default"].each(arr, function (list) {
	              var _ind = _underscore2["default"].indexOf(list, val);

	              if (_ind != -1) {
	                valInd = _ind;
	              }
	            });
	          });
	        }

	        return valInd;
	      }
	    }, {
	      key: "getCellLength",
	      value: function getCellLength() {
	        if (this._cellLength !== null) {
	          return this._cellLength;
	        }

	        var axisLength = this.axisLength;
	        var cellLength = axisLength;

	        var cellCount = this._getCellCount();

	        if (cellCount) {
	          if (this.layoutType == "proportion") {
	            cellLength = 1;
	          } else {
	            //默认按照 peak 也就是柱状图的需要的布局方式
	            cellLength = axisLength / cellCount;

	            if (this.layoutType == "rule") {
	              if (cellCount == 1) {
	                cellLength = axisLength / 2;
	              } else {
	                cellLength = axisLength / (cellCount - 1);
	              }
	            }

	            if (this.posParseToInt) {
	              cellLength = parseInt(cellLength);
	            }
	          }
	        }
	        this._cellLength = cellLength;
	        return cellLength;
	      }
	    }, {
	      key: "getCellLengthOfPos",
	      value: function getCellLengthOfPos(pos) {
	        return this.getCellLength();
	      }
	    }, {
	      key: "getCellLengthOfInd",
	      value: function getCellLengthOfInd(pos) {
	        return this.getCellLength();
	      }
	    }, {
	      key: "_getCellCount",
	      value: function _getCellCount() {
	        if (this._cellCount !== null) {
	          return this._cellCount;
	        }

	        var cellCount = 0;

	        if (this.layoutType == "proportion") {
	          cellCount = this.axisLength;
	        } else {
	          if (this.dataOrg.length && this.dataOrg[0].length && this.dataOrg[0][0].length) {
	            cellCount = this.dataOrg[0][0].length;
	          }
	        }
	        this._cellCount = cellCount;
	        return cellCount;
	      }
	    }]);

	    return axis;
	  }();

	  exports["default"] = axis;
	});
	});

	unwrapExports(axis);

	var dataFrame = createCommonjsModule(function (module, exports) {

	(function (global, factory) {
	  {
	    factory(exports, underscore);
	  }
	})(void 0, function (exports, _underscore) {

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });

	  exports.default = function (dataOrg, opt) {
	    var dataFrame = {
	      //数据框架集合
	      length: 0,
	      org: [],
	      //最原始的数据，一定是个行列式，因为如果发现是json格式数据，会自动转换为行列式
	      jsonOrg: [],
	      //原始数据的json格式
	      data: [],
	      //最原始的数据转化后的数据格式(range取段过后的数据)：[o,o,o] o={field:'val1',index:0,data:[1,2,3]}
	      getRowDataAt: _getRowDataAt,
	      getRowDataOf: _getRowDataOf,
	      getFieldData: _getFieldData,
	      getDataOrg: getDataOrg,
	      resetData: _resetData,
	      fields: [],
	      range: {
	        start: 0,
	        end: 0
	      },
	      filters: {} //数据过滤器，在range的基础上

	    };

	    function _initHandle(dataOrg) {
	      //数据做一份拷贝，避免污染源数据
	      dataOrg = JSON.parse(JSON.stringify(dataOrg, function (k, v) {
	        if (v === undefined) {
	          return null;
	        }

	        return v;
	      }));

	      if (!dataOrg || dataOrg.length == 0) {
	        return dataFrame;
	      }

	      if (dataOrg.length > 0 && !_underscore2["default"].isArray(dataOrg[0])) {
	        dataFrame.jsonOrg = dataOrg;
	        dataOrg = parse2MatrixData(dataOrg);
	        dataFrame.org = dataOrg;
	      } else {
	        dataFrame.org = dataOrg;
	        dataFrame.jsonOrg = parse2JsonData(dataOrg);
	      }

	      dataFrame.range.end = dataOrg.length - 1 - 1; //然后检查opts中是否有dataZoom.range

	      if (opt) {
	        //兼容下dataZoom 和 datazoom 的大小写配置
	        var _datazoom = opt.dataZoom || opt.datazoom;

	        _datazoom && _datazoom.range && _underscore2["default"].extend(dataFrame.range, _datazoom.range);
	      }

	      if (dataOrg.length && dataOrg[0].length && !~dataOrg[0].indexOf("__index__")) {
	        //如果数据中没有用户自己设置的__index__，那么就主动添加一个__index__，来记录元数据中的index
	        for (var i = 0, l = dataOrg.length; i < l; i++) {
	          if (!i) {
	            dataOrg[0].push("__index__");
	          } else {
	            dataOrg[i].push(i - 1);
	            dataFrame.jsonOrg[i - 1]["__index__"] = i - 1;
	          }
	        }
	      }
	      dataFrame.fields = dataOrg[0] ? dataOrg[0] : []; //所有的字段集合;

	      return dataFrame;
	    }

	    function _resetData(dataOrg) {
	      if (dataOrg) {
	        //重置一些数据
	        dataFrame.org = [];
	        dataFrame.jsonOrg = [];
	        dataFrame.fields = [];
	        dataFrame.data = [];

	        var tempRange = _underscore2["default"].extend(true, {}, dataFrame.range);

	        _initHandle(dataOrg); //一些当前状态恢复到dataFrame里去 begin


	        _underscore2["default"].extend(true, dataFrame.range, tempRange);

	        if (dataFrame.range.end > dataFrame.length - 1) {
	          dataFrame.range.end = dataFrame.length - 1;
	        }

	        if (dataFrame.range.start > dataFrame.length - 1 || dataFrame.range.start > dataFrame.range.end) {
	          dataFrame.range.start = 0;
	        }
	      }
	      //比如datazoom修改了dataFrame.range

	      dataFrame.data = _getData();
	    }

	    function _getData() {
	      var total = []; //已经处理成[o,o,o]   o={field:'val1',index:0,data:[1,2,3]}

	      for (var a = 0, al = dataFrame.fields.length; a < al; a++) {
	        var o = {};
	        o.field = dataFrame.fields[a];
	        o.index = a;
	        o.data = [];
	        total.push(o);
	      }

	      var rows = _getValidRows(function (rowData) {
	        _underscore2["default"].each(dataFrame.fields, function (_field) {
	          var _val = rowData[_field];

	          if (!isNaN(_val) && _val !== "" && _val !== null) {
	            _val = Number(_val);
	          }

	          var gData = _underscore2["default"].find(total, function (g) {
	            return g.field == _field;
	          });

	          gData && gData.data.push(_val);
	        });
	      }); //到这里保证了data一定是行列式


	      dataFrame.length = rows.length;
	      return total;
	    }

	    function _getValidRows(callback) {
	      var validRowDatas = [];

	      _underscore2["default"].each(dataFrame.jsonOrg.slice(dataFrame.range.start, dataFrame.range.end + 1), function (rowData) {
	        var validRowData = true;

	        if (_underscore2["default"].keys(dataFrame.filters).length) {
	          _underscore2["default"].each(dataFrame.filters, function (filter) {
	            if (_underscore2["default"].isFunction(filter) && !filter(rowData)) {
	              validRowData = false;
	              return false;
	            }
	          });
	        }

	        if (validRowData) {
	          callback && callback(rowData);
	          validRowDatas.push(rowData);
	        }
	      });

	      return validRowDatas;
	    }

	    function getDataOrg($field, format, totalList, lev) {
	      if (!lev) lev = 0;

	      var arr = totalList || _getData();

	      if (!arr) {
	        return;
	      }

	      if (!format) {
	        format = function format(e) {
	          return e;
	        };
	      }

	      function _format(d) {
	        for (var i = 0, l = d.length; i < l; i++) {
	          d[i] = format(d[i]);
	        }
	        return d;
	      }

	      if (!_underscore2["default"].isArray($field)) {
	        $field = [$field];
	      }

	      var newData = [];

	      for (var i = 0, l = $field.length; i < l; i++) {

	        if (_underscore2["default"].isArray($field[i])) {
	          newData.push(getDataOrg($field[i], format, totalList, lev + 1));
	        } else {
	          var _fieldData = newData;

	          if (!lev) {
	            _fieldData = [];
	          }

	          for (var ii = 0, iil = arr.length; ii < iil; ii++) {
	            if ($field[i] == arr[ii].field) {

	              _fieldData.push(_format(arr[ii].data));

	              break;
	            }
	          }

	          if (!lev) {
	            newData.push(_fieldData);
	          }
	        }
	      }

	      return newData;
	    }
	    /*
	     * 获取某一行数据,当前dataFrame.data中
	    */

	    function _getRowDataAt(index) {
	      var o = {};
	      var data = dataFrame.data;

	      for (var a = 0; a < data.length; a++) {
	        o[data[a].field] = data[a].data[index];
	      }
	      return o;
	    }
	    /**
	     * obj => {uv: 100, pv: 10 ...}
	     */


	    function _getRowDataOf(obj) {
	      !obj && (obj = {});
	      var arr = [];
	      var expCount = 0;

	      for (var p in obj) {
	        expCount++;
	      }

	      if (expCount) {
	        for (var i = dataFrame.range.start; i <= dataFrame.range.end; i++) {
	          var matchNum = 0;

	          _underscore2["default"].each(dataFrame.data, function (fd) {
	            if (fd.field in obj && fd.data[i] == obj[fd.field]) {
	              matchNum++;
	            }
	          });

	          if (matchNum == expCount) {
	            //说明这条数据是完全和查询
	            arr.push(_getRowDataAt(i));
	          }
	        }
	      }
	      return arr;
	    }

	    function _getFieldData(field) {
	      var list = [];

	      var _f = _underscore2["default"].find(dataFrame.data, function (obj) {
	        return obj.field == field;
	      });

	      _f && (list = _f.data);
	      return list;
	    }

	    _initHandle(dataOrg);

	    dataFrame.data = _getData();
	    return dataFrame;
	  };

	  var _underscore2 = _interopRequireDefault(_underscore);

	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      default: obj
	    };
	  }

	  /**
	  * 把原始的数据
	  * field1 field2 field3
	  *   1      2      3
	  *   2      3      4
	  * 这样的数据格式转换为内部的
	  * [{field:'field1',index:0,data:[1,2]} ......]
	  * 这样的结构化数据格式。
	  */
	  //如果应用传入的数据是[{name:name, sex:sex ...} , ...] 这样的数据，就自动转换为chartx需要的矩阵格式数据
	  function parse2MatrixData(list) {
	    if (list === undefined || list === null) {
	      list = [];
	    }

	    if (list.length > 0 && !_underscore2["default"].isArray(list[0])) {
	      var newArr = [];
	      var fields = [];
	      var fieldNum = 0;

	      for (var i = 0, l = list.length; i < l; i++) {
	        var row = list[i];

	        if (i == 0) {
	          for (var f in row) {
	            fields.push(f);
	          }
	          newArr.push(fields);
	          fieldNum = fields.length;
	        }
	        var _rowData = [];

	        for (var ii = 0; ii < fieldNum; ii++) {
	          _rowData.push(row[fields[ii]]);
	        }
	        newArr.push(_rowData);
	      }
	      return newArr;
	    } else {
	      return list;
	    }
	  }

	  function parse2JsonData(list) {
	    var newArr = list; //检测第一个数据是否为一个array, 否就是传入了一个json格式的数据

	    if (list.length > 0 && _underscore2["default"].isArray(list[0])) {
	      newArr = [];
	      var fields = list[0];
	      var fl = fields.length;

	      for (var i = 1, l = list.length; i < l; i++) {
	        var obj = {};

	        for (var fi = 0; fi < fl; fi++) {
	          obj[fields[fi]] = list[i][fi];
	        }
	        newArr.push(obj);
	      }
	      return newArr;
	    }
	  }
	});
	});

	unwrapExports(dataFrame);

	var dom = createCommonjsModule(function (module, exports) {

	(function (global, factory) {
	  {
	    factory(exports, underscore);
	  }
	})(void 0, function (exports, _underscore) {

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });

	  var _underscore2 = _interopRequireDefault(_underscore);

	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      default: obj
	    };
	  }

	  var RESOLUTION = typeof window !== 'undefined' ? window.devicePixelRatio : 1;

	  var addOrRmoveEventHand = function addOrRmoveEventHand(domHand, ieHand) {
	    if (document[domHand]) {
	      var eventDomFn = function eventDomFn(el, type, fn) {
	        if (el.length) {
	          for (var i = 0; i < el.length; i++) {
	            eventDomFn(el[i], type, fn);
	          }
	        } else {
	          el[domHand](type, fn, false);
	        }
	      };
	      return eventDomFn;
	    } else {
	      var eventFn = function eventFn(el, type, fn) {
	        if (el.length) {
	          for (var i = 0; i < el.length; i++) {
	            eventFn(el[i], type, fn);
	          }
	        } else {
	          el[ieHand]("on" + type, function () {
	            return fn.call(el, window.event);
	          });
	        }
	      };
	      return eventFn;
	    }
	  };

	  exports["default"] = {
	    // dom操作相关代码
	    query: function query(el) {
	      if (_underscore2["default"].isString(el)) {
	        return document.getElementById(el);
	      }

	      if (el.nodeType == 1) {
	        //则为一个element本身
	        return el;
	      }

	      if (el.length) {
	        return el[0];
	      }

	      return null;
	    },
	    offset: function offset(el) {
	      var box = el.getBoundingClientRect(),
	          doc = el.ownerDocument,
	          body = doc.body,
	          docElem = doc.documentElement,
	          // for ie  
	      clientTop = docElem.clientTop || body.clientTop || 0,
	          clientLeft = docElem.clientLeft || body.clientLeft || 0,
	          // In Internet Explorer 7 getBoundingClientRect property is treated as physical, 
	      // while others are logical. Make all logical, like in IE8. 
	      zoom = 1;

	      if (body.getBoundingClientRect) {
	        var bound = body.getBoundingClientRect();
	        zoom = (bound.right - bound.left) / body.clientWidth;
	      }

	      if (zoom > 1) {
	        clientTop = 0;
	        clientLeft = 0;
	      }

	      var top = box.top / zoom + (window.pageYOffset || docElem && docElem.scrollTop / zoom || body.scrollTop / zoom) - clientTop,
	          left = box.left / zoom + (window.pageXOffset || docElem && docElem.scrollLeft / zoom || body.scrollLeft / zoom) - clientLeft;
	      return {
	        top: top,
	        left: left
	      };
	    },
	    addEvent: addOrRmoveEventHand("addEventListener", "attachEvent"),
	    removeEvent: addOrRmoveEventHand("removeEventListener", "detachEvent"),
	    pageX: function pageX(e) {
	      if (e.pageX) return e.pageX;else if (e.clientX) return e.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);else return null;
	    },
	    pageY: function pageY(e) {
	      if (e.pageY) return e.pageY;else if (e.clientY) return e.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);else return null;
	    },

	    /**
	     * 创建dom
	     * @param {string} id dom id 待用
	     * @param {string} type : dom type， such as canvas, div etc.
	     */
	    createCanvas: function createCanvas(_width, _height, id) {
	      var canvas = document.createElement("canvas");
	      canvas.style.position = 'absolute';
	      canvas.style.width = _width + 'px';
	      canvas.style.height = _height + 'px';
	      canvas.style.left = 0;
	      canvas.style.top = 0;
	      canvas.setAttribute('width', _width * RESOLUTION);
	      canvas.setAttribute('height', _height * RESOLUTION);
	      canvas.setAttribute('id', id);
	      return canvas;
	    },
	    createView: function createView(_width, _height, id) {
	      var view = document.createElement("div");
	      view.className = "canvax-view";
	      view.style.cssText += "position:relative;width:100%;height:100%;";
	      var stageView = document.createElement("div");
	      stageView.style.cssText += "position:absolute;width:" + _width + "px;height:" + _height + "px;"; //用来存放一些dom元素

	      var domView = document.createElement("div");
	      domView.style.cssText += "position:absolute;width:" + _width + "px;height:" + _height + "px;";
	      view.appendChild(stageView);
	      view.appendChild(domView);
	      return {
	        view: view,
	        stageView: stageView,
	        domView: domView
	      };
	    } //dom相关代码结束

	  };
	});
	});

	unwrapExports(dom);

	var theme = createCommonjsModule(function (module, exports) {

	(function (global, factory) {
	  {
	    factory(exports);
	  }
	})(void 0, function (exports) {

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });

	  /**
	   * 系统皮肤
	   */
	  var _colors = ["#ff8533", "#73ace6", "#82d982", "#e673ac", "#cd6bed", "#8282d9", "#c0e650", "#e6ac73", "#6bcded", "#73e6ac", "#ed6bcd", "#9966cc"];
	  exports["default"] = {
	    colors: _colors,
	    set: function set(colors) {
	      this.colors = colors;
	      /*
	      var me = this;
	      _.each( colors, function( color , i ){
	          me.colors[i] = color;
	      } );
	      */

	      return this.colors;
	    },
	    get: function get() {
	      return this.colors;
	    }
	  };
	});
	});

	unwrapExports(theme);

	var parse = createCommonjsModule(function (module, exports) {

	(function (global, factory) {
	  {
	    factory(exports, underscore);
	  }
	})(void 0, function (exports, _underscore) {

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });

	  var _underscore2 = _interopRequireDefault(_underscore);

	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      default: obj
	    };
	  }

	  exports["default"] = {
	    _eval: function _eval(code, target, paramName, paramValue) {
	      return paramName ? new Function(paramName, code + "; return ".concat(target, ";"))(paramValue) : new Function(code + "; return ".concat(target, ";"))();
	    },
	    parse: function parse(code, range, data, variablesFromComponent) {
	      try {
	        var isVariablesDefined = range && range.length && range.length === 2 && range[1] > range[0]; // 若未定义

	        if (!isVariablesDefined) {
	          return this._eval(code, 'options');
	        }

	        var variablesInCode = this._eval(code, 'variables');

	        if (typeof variablesInCode === 'function') {
	          variablesInCode = variablesInCode(data) || {};
	        }

	        var variables = {};

	        if (variablesFromComponent !== undefined) {
	          variables = typeof variablesFromComponent === 'function' ? variablesFromComponent(data) : variablesFromComponent;
	        }

	        variables = _underscore2["default"].extend(true, {}, variablesInCode, variables);
	        var codeWithoutVariables = code.slice(0, range[0]) + code.slice(range[1]);
	        return this._eval(codeWithoutVariables, 'options', 'variables', variables);
	      } catch (e) {
	        console.log('parse error');
	        return {};
	      }
	    }
	  };
	});
	});

	unwrapExports(parse);

	var global = createCommonjsModule(function (module, exports) {

	(function (global, factory) {
	  {
	    factory(exports, theme, underscore, dom, tools, parse);
	  }
	})(void 0, function (exports, _theme, _underscore, _dom, _tools, _parse) {

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });

	  var _theme2 = _interopRequireDefault(_theme);

	  var _underscore2 = _interopRequireDefault(_underscore);

	  var _dom2 = _interopRequireDefault(_dom);

	  var _parse2 = _interopRequireDefault(_parse);

	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      default: obj
	    };
	  }

	  //图表皮肤
	  var globalAnimationEnabled = true; //是否开启全局的动画开关

	  exports["default"] = {
	    create: function create(el, _data, _opt) {
	      var chart = null;
	      var me = this;
	      var data = (0, _tools.cloneData)(_data);
	      var opt = (0, _tools.cloneOptions)(_opt);

	      var _destroy = function _destroy() {
	        me.instances[chart.id] = null;
	        delete me.instances[chart.id];
	      }; //这个el如果之前有绘制过图表，那么就要在instances中找到图表实例，然后销毁


	      var chart_id = _dom2["default"].query(el).getAttribute("chart_id");

	      if (chart_id != undefined) {
	        var _chart = me.instances[chart_id];

	        if (_chart) {
	          _chart.destroy();

	          _chart.off && _chart.off("destroy", _destroy);
	        }
	        delete me.instances[chart_id];
	      }

	      var dimension = 2; //3d图表的话，本地调试的时候自己在全局chartx3d上面提供is3dOpt变量

	      if (me.__dimension == 3 || me.is3dOpt && me.is3dOpt(_opt)) {
	        dimension = 3;
	      }

	      var componentModules = me._getComponentModules(dimension); //如果用户没有配置coord，说明这个图表是一个默认目标系的图表，比如标签云


	      var Chart = me._getComponentModule('chart', dimension); //try {


	      chart = new Chart(el, data, opt, componentModules);

	      if (chart) {
	        chart.draw();
	        me.instances[chart.id] = chart;
	        chart.on("destroy", _destroy);
	      }
	      //    throw "Chatx Error：" + err
	      //};

	      return chart;
	    },
	    setGlobalTheme: function setGlobalTheme(colors) {
	      _theme2["default"].set(colors);
	    },
	    getGlobalTheme: function getGlobalTheme() {
	      return _theme2["default"].get();
	    },
	    parse: _parse2["default"],
	    instances: {},
	    getChart: function getChart(chartId) {
	      return this.instances[chartId];
	    },
	    resize: function resize() {
	      //调用全局的这个resize方法，会把当前所有的 chart instances 都执行一遍resize
	      for (var c in this.instances) {
	        this.instances[c].resize();
	      }
	    },
	    //第二个参数是用户要用来覆盖chartpark中的配置的options
	    getOptionsOld: function getOptionsOld(chartPark_cid) {
	      var JsonSerialize = {
	        prefix: '[[JSON_FUN_PREFIX_',
	        suffix: '_JSON_FUN_SUFFIX]]'
	      };

	      var parse = function parse(string) {
	        return JSON.parse(string, function (key, value) {
	          if (typeof value === 'string' && value.indexOf(JsonSerialize.suffix) > 0 && value.indexOf(JsonSerialize.prefix) == 0) {
	            return new Function('return ' + value.replace(JsonSerialize.prefix, '').replace(JsonSerialize.suffix, ''))();
	          }
	          return value;
	        }) || {};
	      };

	      return parse(decodeURIComponent(this.options[chartPark_cid] || '%7B%7D'));
	    },
	    getOptionsNew: function getOptionsNew(chartPark_cid, data, variables) {
	      var chartConfig = this.options[chartPark_cid];
	      var code = decodeURIComponent(chartConfig.code);
	      var range = chartConfig.range;
	      return _parse2["default"].parse(code, range, data, variables);
	    },

	    /** 
	     * 获取图表配置并解析
	     * 
	     * @param {int} chartPark_cid  chartpark图表id
	     * @param {Object} userOptions 用户自定义图表options，若无chartPark_cid时默认使用该配置，否则使用该配置覆盖原chartpark中的图表配置
	     * @param {Array} data 绘制图表使用的数据
	     * @param {Object | Function} variables 用于覆盖chartpark图表配置的变量，为Function时，其返回值必须为Object
	     * @returns {Object} 正常情况返回图表配置，否则返回{}
	    */
	    getOptions: function getOptions(chartPark_cid, userOptions, data, variables) {
	      if (!this.options[chartPark_cid]) {
	        return userOptions || {};
	      }
	      var chartConfig = this.options[chartPark_cid];
	      var optionsFromChartPark = typeof chartConfig === 'string' ? this.getOptionsOld(chartPark_cid) : this.getOptionsNew(chartPark_cid, data || [], variables || {});

	      if (userOptions) {
	        optionsFromChartPark = _underscore2["default"].extend(true, optionsFromChartPark, userOptions);
	      }
	      return optionsFromChartPark;
	    },
	    calculateOptions: function calculateOptions(chartPark_cid, data, variables) {
	      return this.getOptions(chartPark_cid, undefined, data, variables);
	    },
	    components: {
	      c_2d: {
	        /*
	        modules:{
	            coord : {
	                empty : ..,
	                rect  : ..,
	                ...
	            },
	            graphs : {
	                //empty : .., //一般只有coord才会有empty
	                bar   : ..,
	                ...
	            }
	        },
	        get: function( name, type ){}
	        */
	      },
	      c_3d: {//所有3d组件,同上
	      }
	    },
	    _getComponentModules: function _getComponentModules(dimension) {
	      var comps = this.components.c_2d;

	      if (dimension == 3) {
	        comps = this.components.c_3d;
	      }

	      if (!comps.modules) {
	        comps.modules = {};
	      }

	      if (!comps.get) {
	        comps.get = function (name, type) {
	          if (!type) {
	            type = "empty";
	          }
	          name = name.toLowerCase();
	          type = type.toLowerCase();
	          var _module = comps.modules[name];

	          if (_module && _module[type]) {
	            return _module[type];
	          }
	        };
	      }
	      return comps;
	    },

	    /**
	     * @param {compModule} 要注册进去的模块名称
	     * @param {name} 要获取的comp名称
	     * @param { dimension | type } 后面可以传传两个参数 
	     * @param { dimension } 如果有四个参数，那么第三个肯定是type，第四个肯定是dimension 
	     */
	    registerComponent: function registerComponent(compModule, name) {
	      var dimension = 2;
	      var type = "empty";

	      if (arguments.length == 3) {
	        var arg2 = arguments[2];

	        if (_underscore2["default"].isNumber(arg2)) {
	          if (arg2 == 3) {
	            dimension = 3;
	          }
	        }

	        if (_underscore2["default"].isString(arg2)) {
	          type = arg2;
	        }
	      }

	      if (arguments.length == 4) {
	        //那么肯定是有传 type  dimension 两个值
	        type = arguments[2];

	        if (arguments[3] == 3) {
	          dimension = 3;
	        }
	      }

	      var comps = this._getComponentModules(dimension).modules;

	      name = name.toLowerCase();
	      type = type.toLowerCase();
	      var _comp = comps[name];

	      if (!_comp) {
	        _comp = comps[name] = {};
	      }

	      if (!_comp[type]) {
	        _comp[type] = compModule;
	      }
	      return comps;
	    },

	    /**
	     * 
	     * @param {name} 要获取的comp名称
	     * @param { dimension | type } 后面可以传传两个参数 
	     * @param { dimension } 如果有三个参数，那么第二个肯定是type，第三个肯定是dimension 
	     */
	    _getComponentModule: function _getComponentModule(name) {
	      var dimension = 2;
	      var type = "empty";

	      if (arguments.length == 2) {
	        var arg1 = arguments[1];

	        if (_underscore2["default"].isNumber(arg1)) {
	          if (arg1 == 3) {
	            dimension = 3;
	          }
	        }

	        if (_underscore2["default"].isString(arg1)) {
	          type = arg1;
	        }
	      }

	      if (arguments.length == 3) {
	        //那么肯定是有传 type  dimension 两个值
	        type = arguments[1];

	        if (arguments[2] == 3) {
	          dimension = 3;
	        }
	      }
	      name = name.toLowerCase();
	      type = type.toLowerCase();

	      var _comp = this._getComponentModules(dimension).modules[name];

	      return _comp ? _comp[type] : undefined;
	    },
	    setAnimationEnabled: function setAnimationEnabled(bool) {
	      globalAnimationEnabled = bool;
	    },
	    getAnimationEnabled: function getAnimationEnabled(bool) {
	      return globalAnimationEnabled;
	    },
	    //所有布局算法
	    layout: {},
	    registerLayout: function registerLayout(name, algorithm) {
	      this.layout[name] = algorithm;
	    },
	    props: {},
	    getProps: function getProps() {
	      //计算全量的 props 属性用来提供智能提示 begin
	      //这部分代码没必要部署到 打包的环境， 只是chartpark需要用来做智能提示， 自动化测试
	      var allProps = {};

	      var allModules = this._getComponentModules().modules;

	      var _loop = function _loop() {
	        if (n == 'chart') return "continue";
	        allProps[n] = {
	          detail: n,
	          propertys: {} //typeMap: {}

	        };

	        if (n == 'graphs') {
	          _graphNames = _underscore2["default"].map(allModules.graphs, function (val, key) {
	            return key;
	          });
	          allProps.graphs.documentation = "可选的graphs类型有：\n" + _graphNames.join('\n');
	        }
	        allConstructorProps = {}; //整个原型链路上面的 defaultProps

	        protoModule = null;

	        for (mn in allModules[n]) {
	          if (protoModule) break;
	          protoModule = allModules[n][mn].prototype;
	        }

	        function _setProps(m) {
	          var constructorModule = m.constructor.__proto__; //m.constructor;

	          if (!constructorModule._isComponentRoot) {
	            _setProps(constructorModule.prototype);
	          }

	          if (constructorModule.defaultProps && _underscore2["default"].isFunction(constructorModule.defaultProps)) {
	            var _dprops = constructorModule.defaultProps();

	            _underscore2["default"].extend(allConstructorProps, _dprops);
	          }
	        }

	        _setProps(protoModule);

	        allProps[n].propertys = _underscore2["default"].extend(allConstructorProps, allProps[n].propertys);

	        var _loop2 = function _loop2() {
	          module = allModules[n][mn];
	          moduleProps = module.defaultProps ? module.defaultProps() : {}; //处理props上面所有的 _props 依赖 begin

	          function setChildProps(p) {
	            if (p._props) {
	              var _propsIsArray = _underscore2["default"].isArray(p._props);

	              for (var k in p._props) {
	                if (!_propsIsArray) {
	                  p[k] = {
	                    detail: k,
	                    propertys: {}
	                  };
	                }
	                var _module = p._props[k];

	                if (_module.defaultProps) {
	                  var _moduleProps;

	                  var allConstructorProps;

	                  (function () {
	                    var _setProps = function _setProps(m) {
	                      if (m.__proto__.__proto__) {
	                        _setProps(m.__proto__);
	                      }

	                      if (m.defaultProps && _underscore2["default"].isFunction(m.defaultProps)) {
	                        var _dprops = m.defaultProps();

	                        if (_dprops._props) {
	                          //如果子元素还有 _props 依赖， 那么就继续处理
	                          setChildProps(_dprops);
	                        }
	                        _dprops && _underscore2["default"].extend(allConstructorProps, _dprops);
	                      }
	                    };

	                    _moduleProps = _module.defaultProps(); //先把ta原型上面的所有属性都添加到 _moduleProps 

	                    allConstructorProps = {};

	                    _setProps(_module.__proto__);

	                    _moduleProps = _underscore2["default"].extend(allConstructorProps, _moduleProps);

	                    if (_propsIsArray) {
	                      _underscore2["default"].extend(p, _moduleProps);
	                    } else {
	                      p[k].propertys = _moduleProps;
	                      setChildProps(p[k].propertys);
	                    }
	                  })();
	                }
	              }
	            }
	          }
	          setChildProps(moduleProps); //处理props上面所有的 _props 依赖 end
	          //这里不能用下面的 extend 方法，

	          moduleProps = _underscore2["default"].extend({}, allConstructorProps, moduleProps); //如果原型上面是有type 属性的，那么说明，自己是type分类路由的一个分支，放到typeMap下面

	          if (allConstructorProps.type) {
	            if (!allProps[n].typeMap) allProps[n].typeMap = {};

	            if (n == 'graphs') {
	              moduleProps.type.values = _graphNames;
	              moduleProps.type.documentation = "可选的graphs类型有：\n" + _graphNames.join('\n');
	            }
	            allProps[n].typeMap[mn] = moduleProps;
	          } else {
	            _underscore2["default"].extend(allProps[n].propertys, moduleProps);
	          }
	        };

	        for (mn in allModules[n]) {
	          _loop2();
	        }
	      };

	      for (var n in allModules) {
	        var _graphNames;

	        var allConstructorProps;
	        var protoModule;
	        var mn;
	        var mn;
	        var module;
	        var moduleProps;

	        var _ret = _loop();

	        if (_ret === "continue") continue;
	      }
	      this.props = allProps; //计算全量的 props 属性用来提供智能提示 begin

	      return this.props;
	    }
	  };
	});
	});

	unwrapExports(global);

	var color = createCommonjsModule(function (module, exports) {

	(function (global, factory) {
	  {
	    factory(exports);
	  }
	})(void 0, function (exports) {

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	  exports.colorRgb = colorRgb;
	  exports.colorRgba = colorRgba;
	  exports.hexTorgb = hexTorgb;
	  exports.hexTostring = hexTostring;
	  exports.rgbTohex = rgbTohex;
	  //十六进制颜色值的正则表达式 
	  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
	  /*16进制颜色转为RGB格式*/

	  function colorRgb(hex) {
	    var sColor = hex.toLowerCase();

	    if (sColor && reg.test(sColor)) {
	      if (sColor.length === 4) {
	        var sColorNew = "#";

	        for (var i = 1; i < 4; i += 1) {
	          sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
	        }

	        sColor = sColorNew;
	      } //处理六位的颜色值  


	      var sColorChange = [];

	      for (var i = 1; i < 7; i += 2) {
	        sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)));
	      }

	      return "RGB(" + sColorChange.join(",") + ")";
	    } else {
	      return sColor;
	    }
	  }

	  function colorRgba(hex, a) {
	    return colorRgb(hex).replace(')', ',' + a + ')').replace('RGB', 'RGBA');
	  }

	  function hexTorgb(hex, out) {
	    //hex可能是“#ff0000” 也可能是 0xff0000
	    if (hex.replace) {
	      hex = parseInt(hex.replace("#", "0X"), 16);
	    }
	    out = out || [];
	    out[0] = (hex >> 16 & 0xFF) / 255;
	    out[1] = (hex >> 8 & 0xFF) / 255;
	    out[2] = (hex & 0xFF) / 255;
	    return out;
	  }

	  function hexTostring(hex) {
	    hex = hex.toString(16);
	    hex = '000000'.substr(0, 6 - hex.length) + hex;
	    return "#".concat(hex);
	  }

	  function rgbTohex(rgb) {
	    return (rgb[0] * 255 << 16) + (rgb[1] * 255 << 8) + rgb[2] * 255;
	  }
	});
	});

	unwrapExports(color);

	var polar = createCommonjsModule(function (module, exports) {

	(function (global, factory) {
	  {
	    factory(exports, underscore);
	  }
	})(void 0, function (exports, _underscore) {

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	  exports.Polar = undefined;

	  var _underscore2 = _interopRequireDefault(_underscore);

	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      default: obj
	    };
	  }

	  function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  }

	  function _defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  function _createClass(Constructor, protoProps, staticProps) {
	    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) _defineProperties(Constructor, staticProps);
	    return Constructor;
	  }

	  var aRound = 360; //一圈的度数

	  var Cos = Math.cos;
	  var Sin = Math.sin;

	  var Polar = function () {
	    function Polar() {
	      var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	      var dataFrame = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

	      _classCallCheck(this, Polar);

	      this._opt = _underscore2["default"].clone(opt);
	      this.dataFrame = dataFrame;
	      this.axisLength = 1;
	      this.dataOrg = [];
	      this.startAngle = this._opt.startAngle;
	      this.allAngles = Math.min(360, this._opt.allAngles);
	      this.sort = this._opt.sort;
	      this.layoutData = []; //和dataSection一一对应的，每个值的pos,agend,dregg,centerPos

	      this.maxRadius = 0; //最大半径值

	      this.minRadius = 0; //最小半径值 
	    }

	    _createClass(Polar, [{
	      key: "calculateProps",
	      value: function calculateProps() {
	        var _this = this;

	        var axisLength = 0;
	        var percentage = 0;
	        var currentAngle = 0;
	        var opt = this._opt;
	        var angle, endAngle, cosV, sinV, midAngle, quadrant;
	        var percentFixedNum = 2;
	        var outRadius = opt.node.outRadius;
	        var innerRadius = opt.node.innerRadius;
	        var moveDis = opt.node.moveDis;
	        this.layoutData.forEach(function (item, i) {
	          if (!item.enabled) return;
	          axisLength += isNaN(+item.value) ? 0 : +item.value;

	          if (item.radiusField) {
	            _this.maxRadius = Math.max(item.radiusValue, axisLength);
	            _this.minRadius = Math.min(item.radiusValue, axisLength);
	          }
	        });
	        this.axisLength = axisLength;

	        if (axisLength > 0) {
	          //原始算法
	          // currentAngle = + opt.startAngle % 360;
	          // limitAngle = opt.allAngles + me.startAngle % me.allAngles;
	          //新的算法
	          //这里只是计算每个扇区的初始位置,所以这里求模就可以啦
	          currentAngle = _underscore2["default"].euclideanModulo(this.startAngle, aRound); // opt.allAngles = opt.allAngles > 0 ? opt.allAngles : aRound;
	          // limitAngle = opt.allAngles + _.euclideanModulo(opt.startAngle, opt.allAngles);

	          this.layoutData.forEach(function (item, i) {
	            percentage = item.value / axisLength; //enabled为false的sec，比率就设置为0

	            if (!item.enabled) {
	              percentage = 0;
	            }
	            angle = _this.allAngles * percentage; //旧的算法
	            // endAngle = currentAngle + angle > limitAngle ? limitAngle : me.currentAngle + angle;

	            endAngle = currentAngle + angle;
	            midAngle = currentAngle + angle * 0.5;
	            cosV = Cos(_underscore2["default"].degToRad(midAngle));
	            sinV = Sin(_underscore2["default"].degToRad(midAngle));
	            cosV = cosV.toFixed(5);
	            sinV = sinV.toFixed(5);
	            quadrant = _this.getAuadrant(midAngle); //如果用户在配置中制定了半径字段,这里需要计算相对的半径比例值

	            if (!!item.radiusField) {
	              // var _rr = Number(item.rowData[opt.node.radius]);
	              outRadius = parseInt((opt.node.outRadius - opt.node.innerRadius) * ((item.radiusValue - _this.minRadius) / (_this.maxRadius - _this.minRadius)) + opt.node.innerRadius);
	            }

	            _underscore2["default"].extend(item, {
	              outRadius: outRadius,
	              innerRadius: innerRadius,
	              startAngle: currentAngle,
	              //起始角度
	              endAngle: endAngle,
	              //结束角度
	              midAngle: midAngle,
	              //中间角度
	              moveDis: moveDis,
	              outOffsetx: moveDis * 0.7 * cosV,
	              //focus的事实外扩后圆心的坐标x
	              outOffsety: moveDis * 0.7 * sinV,
	              //focus的事实外扩后圆心的坐标y
	              centerx: outRadius * cosV,
	              centery: outRadius * sinV,
	              outx: (outRadius + moveDis) * cosV,
	              outy: (outRadius + moveDis) * sinV,
	              edgex: (outRadius + moveDis) * cosV,
	              edgey: (outRadius + moveDis) * sinV,
	              orginPercentage: percentage,
	              percentage: (percentage * 100).toFixed(percentFixedNum),
	              quadrant: quadrant,
	              //象限
	              isRightSide: quadrant == 1 || quadrant == 4 ? 1 : 0,
	              cosV: cosV,
	              sinV: sinV
	            });

	            currentAngle += angle;
	          });
	        }
	      }
	    }, {
	      key: "resetData",
	      value: function resetData(dataFrame) {
	        this.dataFrame = dataFrame || [];
	        this.axisLength = 1;
	        this.dataOrg = [];
	        this.startAngle = this._opt.startAngle || -90;
	        this.allAngles = this._opt.allAngles || 360;
	        this.layoutData = [];
	      }
	    }, {
	      key: "setOption",
	      value: function setOption() {
	        var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	        Object.assign(this._opt, opt);
	        this.startAngle = this._opt.startAngle;
	        this.allAngles = Math.min(360, this._opt.allAngles);
	        this.sort = this._opt.sort;
	      }
	    }, {
	      key: "setDataFrame",
	      value: function setDataFrame(dataFrame) {
	        var _this2 = this;

	        var data = [];
	        var opt = this._opt;
	        var field = opt.field;
	        var labelField = opt.groupField || opt.label.field || opt.field;
	        var radiusField = opt.node.radius;
	        dataFrame = dataFrame || this.dataFrame;
	        this.dataFrame = dataFrame;
	        this.dataOrg = [];

	        for (var i = 0, l = dataFrame.length; i < l; i++) {
	          var rowData = dataFrame.getRowDataAt(i);
	          var layoutData = {
	            rowData: rowData,
	            //把这一行数据给到layoutData引用起来
	            enabled: true,
	            //是否启用，显示在列表中
	            value: rowData[field],
	            label: rowData[labelField],
	            iNode: i
	          };
	          this.dataOrg.push(rowData[field]);

	          if (this._isFiled(radiusField, layoutData)) {
	            layoutData.radiusField = radiusField;
	            layoutData.radiusValue = rowData[radiusField];
	          }

	          data.push(layoutData);
	        }

	        if (this.sort) {
	          this.dataOrg = [];
	          data.sort(function (a, b) {
	            if (_this2.sort == 'asc') {
	              return a.value - b.value;
	            } else {
	              return b.value - a.value;
	            }
	          }); //重新设定下ind

	          _underscore2["default"].each(data, function (d, i) {
	            d.iNode = i;

	            _this2.dataOrg.push(d);
	          });
	        }
	        this.layoutData = data;
	        return data;
	      }
	    }, {
	      key: "getLayoutData",
	      value: function getLayoutData() {
	        return this.layoutData || [];
	      }
	    }, {
	      key: "_isFiled",
	      value: function _isFiled(field, layoutData) {
	        return field && _underscore2["default"].isString(field) && field in layoutData.rowData;
	      }
	    }, {
	      key: "getAuadrant",
	      value: function getAuadrant(ang) {
	        //获取象限
	        ang = _underscore2["default"].euclideanModulo(ang, aRound);
	        var angleRatio = parseInt(ang / 90);
	        var _quadrant = 0;

	        switch (angleRatio) {
	          case 0:
	            _quadrant = 1;
	            break;

	          case 1:
	            _quadrant = 2;
	            break;

	          case 2:
	            _quadrant = 3;
	            break;

	          case 3:
	          case 4:
	            _quadrant = 4;
	            break;
	        }

	        return _quadrant;
	      }
	    }, {
	      key: "_getLayoutDataOf",
	      value: function _getLayoutDataOf(opt) {
	        //先提供 具体值 和 索引的计算
	        var props = [{
	          val: "value"
	        }, {
	          ind: "iNode"
	        }];
	        var prop = props[Object.keys(opt)[0]];
	        var layoutData;

	        _underscore2["default"].each(this.layoutData, function (item) {
	          if (item[prop] === opt[prop]) {
	            layoutData = item;
	          }
	        });

	        return layoutData || {};
	      }
	    }, {
	      key: "getRadiansAtR",
	      value: function getRadiansAtR() {//基类不实现
	      }
	    }, {
	      key: "getPointsOfR",
	      value: function getPointsOfR(r, angleList) {
	        var points = [];

	        _underscore2["default"].each(angleList, function (_a) {
	          //弧度
	          var _r = Math.PI * _a / 180;

	          var point = Polar.getPointInRadianOfR(_r, r);
	          points.push(point);
	        });

	        return points;
	      }
	    }]);

	    return Polar;
	  }();

	  Polar.filterPointsInRect = function (points, origin, width, height) {
	    for (var i = 0, l = points.length; i < l; i++) {
	      if (!Polar.checkPointInRect(points[i], origin, width, height)) {
	        //该点不在root rect范围内，去掉
	        points.splice(i, 1);
	        i--, l--;
	      }
	    }
	    return points;
	  };

	  Polar.checkPointInRect = function (p, origin, width, height) {
	    var _tansRoot = {
	      x: p.x + origin.x,
	      y: p.y + origin.y
	    };
	    return !(_tansRoot.x < 0 || _tansRoot.x > width || _tansRoot.y < 0 || _tansRoot.y > height);
	  }; //检查由n个相交点分割出来的圆弧是否在rect内


	  Polar.checkArcInRect = function (arc, r, origin, width, height) {
	    var start = arc[0];
	    var to = arc[1];
	    var differenceR = to.radian - start.radian;

	    if (to.radian < start.radian) {
	      differenceR = Math.PI * 2 + to.radian - start.radian;
	    }
	    var middleR = (start.radian + differenceR / 2) % (Math.PI * 2);
	    return Polar.checkPointInRect(Polar.getPointInRadianOfR(middleR, r), origin, width, height);
	  }; //获取某个点相对圆心的弧度值


	  Polar.getRadianInPoint = function (point) {
	    var pi2 = Math.PI * 2;
	    return (Math.atan2(point.y, point.x) + pi2) % pi2;
	  }; //获取某个弧度方向，半径为r的时候的point坐标点位置


	  Polar.getPointInRadianOfR = function (radian, r) {
	    var pi = Math.PI;
	    var x = Math.cos(radian) * r;

	    if (radian == pi / 2 || radian == pi * 3 / 2) {
	      //90度或者270度的时候
	      x = 0;
	    }
	    var y = Math.sin(radian) * r;

	    if (radian % pi == 0) {
	      y = 0;
	    }
	    return {
	      x: x,
	      y: y
	    };
	  };

	  Polar.getROfNum = function (num, dataSection, width, height) {
	    var r = 0;

	    var maxNum = _underscore2["default"].max(dataSection);

	    var minNum = 0; //Math.min( this.rAxis.dataSection );

	    var maxR = parseInt(Math.max(width, height) / 2);
	    r = maxR * ((num - minNum) / (maxNum - minNum));
	    return r;
	  };

	  exports.Polar = Polar;
	});
	});

	unwrapExports(polar);

	var event = createCommonjsModule(function (module, exports) {

	(function (global, factory) {
	  {
	    factory(exports, underscore);
	  }
	})(void 0, function (exports, _underscore) {

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });

	  var _underscore2 = _interopRequireDefault(_underscore);

	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      default: obj
	    };
	  }

	  /**
	   * Canvax
	   *
	   * @author 释剑 (李涛, litao.lt@alibaba-inc.com)
	   *
	   * canvas 上委托的事件管理
	   */
	  var Event = function Event(evt) {
	    var eventType = "CanvaxEvent";

	    if (_underscore2["default"].isString(evt)) {
	      eventType = evt;
	    }

	    if (_underscore2["default"].isObject(evt) && evt.type) {
	      eventType = evt.type;

	      _underscore2["default"].extend(this, evt);
	    }
	    this.target = null;
	    this.currentTarget = null;
	    this.type = eventType;
	    this.point = null;
	    var me = this;
	    this._stopPropagation = false; //默认不阻止事件冒泡

	    this.stopPropagation = function () {
	      me._stopPropagation = true;

	      if (_underscore2["default"].isObject(evt)) {
	        evt._stopPropagation = true;
	      }
	    };

	    this._preventDefault = false; //是否组织事件冒泡

	    this.preventDefault = function () {
	      me._preventDefault = true;

	      if (_underscore2["default"].isObject(evt)) {
	        evt._preventDefault = true;
	      }
	    };
	  };
	  /*
	  Event.prototype = {
	      stopPropagation : function() {
	          this._stopPropagation = true;
	      },
	      preventDefault  : function(){
	          this._preventDefault = true;
	      }
	  };
	  */


	  exports["default"] = Event;
	});
	});

	unwrapExports(event);

	var types = createCommonjsModule(function (module, exports) {

	(function (global, factory) {
	  {
	    factory(exports, underscore);
	  }
	})(void 0, function (exports, _underscore) {

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });

	  var _underscore2 = _interopRequireDefault(_underscore);

	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      default: obj
	    };
	  }

	  /**
	   * Canvax
	   *
	   * @author 释剑 (李涛, litao.lt@alibaba-inc.com)
	   *
	   * canvas 上委托的事件管理
	   */
	  var _mouseEvents = 'mousedown mouseup mouseover mousemove mouseout click dblclick wheel keydown keypress keyup';
	  exports["default"] = {
	    _types: _mouseEvents.split(/,| /),
	    register: function register(evts) {
	      if (!evts) {
	        return;
	      }

	      if (_underscore2["default"].isString(evts)) {
	        evts = evts.split(/,| /);
	      }
	      this._types = _mouseEvents.split(/,| /).concat(evts);
	    },
	    get: function get() {
	      return this._types;
	    }
	  };
	});
	});

	unwrapExports(types);

	var manager = createCommonjsModule(function (module, exports) {

	(function (global, factory) {
	  {
	    factory(exports, types, underscore);
	  }
	})(void 0, function (exports, _types, _underscore) {

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });

	  var _types2 = _interopRequireDefault(_types);

	  var _underscore2 = _interopRequireDefault(_underscore);

	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      default: obj
	    };
	  }

	  /**
	   * Canvax
	   *
	   * @author 释剑 (李涛, litao.lt@alibaba-inc.com)
	   *
	   * 事件管理类
	   */

	  /**
	   * 构造函数.
	   * @name EventDispatcher
	   * @class EventDispatcher类是可调度事件的类的基类，它允许显示列表上的任何对象都是一个事件目标。
	   */
	  var Manager = function Manager() {
	    //事件映射表，格式为：{type1:[listener1, listener2], type2:[listener3, listener4]}
	    this._eventMap = {};
	  };

	  Manager.prototype = {
	    /**
	     * 判断events里面是否有用户交互事件
	     */
	    _setEventEnable: function _setEventEnable() {
	      if (this.children) return; //容器的_eventEnabled不受注册的用户交互事件影响

	      var hasInteractionEvent = false;

	      for (var t in this._eventMap) {
	        if (_underscore2["default"].indexOf(_types2["default"].get(), t) > -1) {
	          hasInteractionEvent = true;
	        }
	      }
	      this._eventEnabled = hasInteractionEvent;
	    },

	    /*
	     * 注册事件侦听器对象，以使侦听器能够接收事件通知。
	     */
	    _addEventListener: function _addEventListener(_type, listener) {
	      if (typeof listener != "function") {
	        //listener必须是个function呐亲
	        return false;
	      }

	      var addResult = true;
	      var self = this;
	      var types = _type;

	      if (_underscore2["default"].isString(_type)) {
	        types = _type.split(/,| /);
	      }

	      _underscore2["default"].each(types, function (type) {
	        var map = self._eventMap[type];

	        if (!map) {
	          map = self._eventMap[type] = [];
	          map.push(listener); //self._eventEnabled = true;

	          self._setEventEnable();

	          return true;
	        }

	        if (_underscore2["default"].indexOf(map, listener) == -1) {
	          map.push(listener); //self._eventEnabled = true;

	          self._setEventEnable();

	          return true;
	        }

	        addResult = false;
	      });

	      return addResult;
	    },

	    /**
	     * 删除事件侦听器。
	     */
	    _removeEventListener: function _removeEventListener(type, listener) {
	      if (arguments.length == 1) return this.removeEventListenerByType(type);
	      var map = this._eventMap[type];

	      if (!map) {
	        return false;
	      }

	      for (var i = 0; i < map.length; i++) {
	        var li = map[i];

	        if (li === listener) {
	          map.splice(i, 1);

	          if (map.length == 0) {
	            delete this._eventMap[type];

	            this._setEventEnable(); //如果这个如果这个时候child没有任何事件侦听

	            /*
	            if(_.isEmpty(this._eventMap)){
	                //那么该元素不再接受事件的检测
	                this._eventEnabled = false;
	            }
	            */

	          }

	          return true;
	        }
	      }

	      return false;
	    },

	    /**
	     * 删除指定类型的所有事件侦听器。
	     */
	    _removeEventListenerByType: function _removeEventListenerByType(type) {
	      var map = this._eventMap[type];

	      if (!map) {
	        delete this._eventMap[type];

	        this._setEventEnable(); //如果这个如果这个时候child没有任何事件侦听

	        /*
	        if(_.isEmpty(this._eventMap)){
	            //那么该元素不再接受事件的检测
	            this._eventEnabled = false;
	        }
	        */


	        return true;
	      }

	      return false;
	    },

	    /**
	     * 删除所有事件侦听器。
	     */
	    _removeAllEventListeners: function _removeAllEventListeners() {
	      this._eventMap = {};
	      this._eventEnabled = false;
	    },

	    /**
	    * 派发事件，调用事件侦听器。
	    */
	    _dispatchEvent: function _dispatchEvent(e) {
	      var map = this._eventMap[e.type];

	      if (map) {
	        if (!e.target) e.target = this;
	        if (!e.currentTarget) e.currentTarget = this;
	        map = map.slice();

	        for (var i = 0; i < map.length; i++) {
	          var listener = map[i];

	          if (typeof listener == "function") {
	            listener.call(this, e);
	          }
	        }
	      }

	      if (!e._stopPropagation) {
	        //向上冒泡
	        if (this.parent) {
	          e.currentTarget = this.parent;

	          this.parent._dispatchEvent(e);
	        }
	      }

	      return true;
	    },

	    /**
	       * 检查是否为指定事件类型注册了任何侦听器。
	       */
	    _hasEventListener: function _hasEventListener(type) {
	      var map = this._eventMap[type];
	      return map != null && map.length > 0;
	    }
	  };
	  exports["default"] = Manager;
	});
	});

	unwrapExports(manager);

	var dispatcher = createCommonjsModule(function (module, exports) {

	(function (global, factory) {
	  {
	    factory(exports, manager, event, underscore);
	  }
	})(void 0, function (exports, _manager, _event, _underscore) {

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	  exports.default = undefined;

	  var _manager2 = _interopRequireDefault(_manager);

	  var _event2 = _interopRequireDefault(_event);

	  var _underscore2 = _interopRequireDefault(_underscore);

	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      default: obj
	    };
	  }

	  function _typeof(obj) {
	    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
	      _typeof = function _typeof(obj) {
	        return typeof obj;
	      };
	    } else {
	      _typeof = function _typeof(obj) {
	        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	      };
	    }

	    return _typeof(obj);
	  }

	  function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  }

	  function _defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  function _createClass(Constructor, protoProps, staticProps) {
	    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) _defineProperties(Constructor, staticProps);
	    return Constructor;
	  }

	  function _possibleConstructorReturn(self, call) {
	    if (call && (_typeof(call) === "object" || typeof call === "function")) {
	      return call;
	    }

	    return _assertThisInitialized(self);
	  }

	  function _assertThisInitialized(self) {
	    if (self === void 0) {
	      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }

	    return self;
	  }

	  function _getPrototypeOf(o) {
	    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
	      return o.__proto__ || Object.getPrototypeOf(o);
	    };
	    return _getPrototypeOf(o);
	  }

	  function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	      throw new TypeError("Super expression must either be null or a function");
	    }

	    subClass.prototype = Object.create(superClass && superClass.prototype, {
	      constructor: {
	        value: subClass,
	        writable: true,
	        configurable: true
	      }
	    });
	    if (superClass) _setPrototypeOf(subClass, superClass);
	  }

	  function _setPrototypeOf(o, p) {
	    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
	      o.__proto__ = p;
	      return o;
	    };

	    return _setPrototypeOf(o, p);
	  }

	  var Dispatcher = function (_Manager) {
	    _inherits(Dispatcher, _Manager);

	    function Dispatcher() {
	      _classCallCheck(this, Dispatcher);

	      return _possibleConstructorReturn(this, _getPrototypeOf(Dispatcher).call(this));
	    }

	    _createClass(Dispatcher, [{
	      key: "on",
	      value: function on(type, listener) {
	        this._addEventListener(type, listener);

	        return this;
	      }
	    }, {
	      key: "addEventListener",
	      value: function addEventListener(type, listener) {
	        this._addEventListener(type, listener);

	        return this;
	      }
	    }, {
	      key: "un",
	      value: function un(type, listener) {
	        this._removeEventListener(type, listener);

	        return this;
	      }
	    }, {
	      key: "removeEventListener",
	      value: function removeEventListener(type, listener) {
	        this._removeEventListener(type, listener);

	        return this;
	      }
	    }, {
	      key: "removeEventListenerByType",
	      value: function removeEventListenerByType(type) {
	        this._removeEventListenerByType(type);

	        return this;
	      }
	    }, {
	      key: "removeAllEventListeners",
	      value: function removeAllEventListeners() {
	        this._removeAllEventListeners();

	        return this;
	      }
	    }, {
	      key: "fire",
	      value: function fire(eventType, params) {
	        //{currentTarget,point,target,type,_stopPropagation}
	        var e = new _event2["default"](eventType);

	        if (params) {
	          for (var p in params) {
	            if (p != "type") {
	              e[p] = params[p];
	            }
	          }
	        }
	        var me = this;

	        _underscore2["default"].each(eventType.split(" "), function (eType) {
	          //然后，currentTarget要修正为自己
	          e.currentTarget = me;
	          me.dispatchEvent(e);
	        });

	        return this;
	      }
	    }, {
	      key: "dispatchEvent",
	      value: function dispatchEvent(evt) {
	        //this instanceof DisplayObjectContainer ==> this.children
	        //TODO: 这里import DisplayObjectContainer 的话，在displayObject里面的import EventDispatcher from "../event/EventDispatcher";
	        //会得到一个undefined，感觉是成了一个循环依赖的问题，所以这里换用简单的判断来判断自己是一个容易，拥有children
	        if (this.children && evt.point) {
	          var target = this.getObjectsUnderPoint(evt.point, 1)[0];

	          if (target) {
	            target.dispatchEvent(evt);
	          }

	          return;
	        }

	        if (this.context && evt.type == "mouseover") {
	          //记录dispatchEvent之前的心跳
	          var preHeartBeat = this._heartBeatNum;
	          var pregAlpha = this.context.$model.globalAlpha;

	          this._dispatchEvent(evt);

	          if (preHeartBeat != this._heartBeatNum) {
	            this._hoverClass = true;

	            if (this.hoverClone) {
	              var canvax = this.getStage().parent; //然后clone一份obj，添加到_bufferStage 中

	              var activShape = this.clone(true);
	              activShape._transform = this.getConcatenatedMatrix();

	              canvax._bufferStage.addChildAt(activShape, 0); //然后把自己隐藏了
	              //用一个临时变量_globalAlpha 来存储自己之前的alpha


	              this._globalAlpha = pregAlpha;
	              this.context.globalAlpha = 0;
	            }
	          }

	          return;
	        }

	        this._dispatchEvent(evt);

	        if (this.context && evt.type == "mouseout") {
	          if (this._hoverClass && this.hoverClone) {
	            //说明刚刚over的时候有添加样式
	            var canvax = this.getStage().parent;
	            this._hoverClass = false;

	            canvax._bufferStage.removeChildById(this.id);

	            if (this._globalAlpha) {
	              this.context.globalAlpha = this._globalAlpha;
	              delete this._globalAlpha;
	            }
	          }
	        }

	        return this;
	      }
	    }, {
	      key: "hasEvent",
	      value: function hasEvent(type) {
	        return this._hasEventListener(type);
	      }
	    }, {
	      key: "hasEventListener",
	      value: function hasEventListener(type) {
	        return this._hasEventListener(type);
	      }
	    }, {
	      key: "hover",
	      value: function hover(overFun, outFun) {
	        this.on("mouseover", overFun);
	        this.on("mouseout", outFun);
	        return this;
	      }
	    }, {
	      key: "once",
	      value: function once(type, listener) {
	        var me = this;

	        var onceHandle = function onceHandle() {
	          listener.apply(me, arguments);
	          this.un(type, onceHandle);
	        };

	        this.on(type, onceHandle);
	        return this;
	      }
	    }]);

	    return Dispatcher;
	  }(_manager2["default"]);

	  exports.default = Dispatcher;
	});
	});

	unwrapExports(dispatcher);

	var handler = createCommonjsModule(function (module, exports) {

	(function (global, factory) {
	  {
	    factory(exports, event, types, underscore, dom);
	  }
	})(void 0, function (exports, _event, _types, _underscore, _dom) {

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });

	  var _event2 = _interopRequireDefault(_event);

	  var _types2 = _interopRequireDefault(_types);

	  var _underscore2 = _interopRequireDefault(_underscore);

	  var _dom2 = _interopRequireDefault(_dom);

	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      default: obj
	    };
	  }

	  /**
	   * Canvax
	   *
	   * @author 释剑 (李涛, litao.lt@alibaba-inc.com)
	   *
	   */
	  var _hammerEventTypes = ["pan", "panstart", "panmove", "panend", "pancancel", "panleft", "panright", "panup", "pandown", "press", "pressup", "swipe", "swipeleft", "swiperight", "swipeup", "swipedown", "tap"];

	  var Handler = function Handler(canvax, opt) {
	    this.canvax = canvax;
	    this.curPoints = [{
	      x: 0,
	      y: 0
	    }]; //X,Y 的 point 集合, 在touch下面则为 touch的集合，只是这个touch被添加了对应的x，y
	    //当前激活的点对应的obj，在touch下可以是个数组,和上面的 curPoints 对应

	    this.curPointsTarget = [];
	    this._touching = false; //正在拖动，前提是_touching=true

	    this._draging = false; //当前的鼠标状态

	    this._cursor = "default";
	    this.target = this.canvax.view; //mouse体统中不需要配置drag,touch中会用到第三方的touch库，每个库的事件名称可能不一样，
	    //就要这里配置，默认实现的是hammerjs的,所以默认可以在项目里引入hammerjs http://hammerjs.github.io/

	    this.drag = {
	      start: "panstart",
	      move: "panmove",
	      end: "panend"
	    };

	    _underscore2["default"].extend(true, this, opt);
	  }; //这样的好处是document.compareDocumentPosition只会在定义的时候执行一次。


	  var contains = document && document.compareDocumentPosition ? function (parent, child) {
	    if (!child) {
	      return false;
	    }
	    return !!(parent.compareDocumentPosition(child) & 16);
	  } : function (parent, child) {
	    if (!child) {
	      return false;
	    }

	    return child !== child && (parent.contains ? parent.contains(child) : true);
	  };
	  Handler.prototype = {
	    init: function init() {
	      //依次添加上浏览器的自带事件侦听
	      var me = this;

	      if (me.target.nodeType == undefined) {
	        //如果target.nodeType没有的话， 说明该target为一个jQuery对象 or kissy 对象or hammer对象
	        //即为第三方库，那么就要对接第三方库的事件系统。默认实现hammer的大部分事件系统
	        _types2["default"].register(_hammerEventTypes);
	      }

	      _dom2["default"].addEvent(me.target, "contextmenu", function (e) {
	        if (e && e.preventDefault) {
	          e.preventDefault();
	        } else {
	          window.event.returnValue = false;
	        }
	      });

	      _underscore2["default"].each(_types2["default"].get(), function (type) {
	        //不再关心浏览器环境是否 'ontouchstart' in window 
	        //而是直接只管传给事件模块的是一个原生dom还是 jq对象 or hammer对象等
	        if (me.target.nodeType == 1) {
	          _dom2["default"].addEvent(me.target, type, function (e) {
	            me.__mouseHandler(e);
	          });
	        } else {
	          me.target.on(type, function (e) {
	            me.__libHandler(e);
	          });
	        }
	      });
	    },

	    /*
	    * 原生事件系统------------------------------------------------begin
	    * 鼠标事件处理函数
	    **/
	    __mouseHandler: function __mouseHandler(e) {
	      var me = this;
	      var root = me.canvax;
	      root.updateViewOffset();
	      me.curPoints = [{
	        x: _dom2["default"].pageX(e) - root.viewOffset.left,
	        y: _dom2["default"].pageY(e) - root.viewOffset.top
	      }]; //理论上来说，这里拿到point了后，就要计算这个point对应的target来push到curPointsTarget里，
	      //但是因为在drag的时候其实是可以不用计算对应target的。
	      //所以放在了下面的me.__getcurPointsTarget( e , curMousePoint );常规mousemove中执行

	      var curMousePoint = me.curPoints[0];
	      var curMouseTarget = me.curPointsTarget[0];

	      if ( //这几个事件触发过来，是一定需要检测 curMouseTarget 的
	      _underscore2["default"].indexOf(['mousedown', 'mouseover', 'click'], e.type) > -1 && !curMouseTarget) {
	        if (!curMouseTarget) {
	          var obj = root.getObjectsUnderPoint(curMousePoint, 1)[0];

	          if (obj) {
	            me.curPointsTarget = [obj];
	          }
	        }
	        curMouseTarget = me.curPointsTarget[0];
	      }
	      //mousedown的时候 如果 curMouseTarget.dragEnabled 为true。就要开始准备drag了

	      if (e.type == "mousedown") {
	        //如果curTarget 的数组为空或者第一个为false ，，，
	        if (curMouseTarget && curMouseTarget.dragEnabled) {
	          //鼠标事件已经摸到了一个
	          me._touching = true;
	        }
	      }

	      if (e.type == "mouseup" || e.type == "mouseout" && !contains(root.view, e.toElement || e.relatedTarget)) {
	        if (me._draging == true) {
	          //说明刚刚在拖动
	          me._dragEnd(e, curMouseTarget, 0);

	          curMouseTarget.fire("dragend");
	        }
	        me._draging = false;
	        me._touching = false;
	      }

	      if (e.type == "mouseout") {
	        if (!contains(root.view, e.toElement || e.relatedTarget)) {
	          me.__getcurPointsTarget(e, curMousePoint, true);
	        }
	      } else if (e.type == "mousemove") {
	        //|| e.type == "mousedown" ){
	        //拖动过程中就不在做其他的mouseover检测，drag优先
	        if (me._touching && e.type == "mousemove" && curMouseTarget) {
	          //说明正在拖动啊
	          if (!me._draging) {
	            //begin drag
	            curMouseTarget.fire("dragstart"); //有可能该child没有hover style

	            if (!curMouseTarget._globalAlpha) {
	              curMouseTarget._globalAlpha = curMouseTarget.context.$model.globalAlpha;
	            }

	            curMouseTarget.context.globalAlpha = 0; //然后克隆一个副本到activeStage

	            var cloneObject = me._clone2hoverStage(curMouseTarget, 0);

	            cloneObject.context.globalAlpha = curMouseTarget._globalAlpha;
	          } else {
	            //drag move ing
	            me._dragIngHander(e, curMouseTarget, 0);
	          }
	          me._draging = true;
	        } else {
	          //常规mousemove检测
	          //move事件中，需要不停的搜索target，这个开销挺大，
	          //后续可以优化，加上和帧率相当的延迟处理
	          me.__getcurPointsTarget(e, curMousePoint);
	        }
	      } else {
	        //其他的事件就直接在target上面派发事件
	        var child = curMouseTarget;

	        if (!child) {
	          child = root;
	        }

	        me.__dispatchEventInChilds(e, [child]);

	        me._cursorHander(child);
	      }

	      if (root.preventDefault || e._preventDefault) {
	        //阻止默认浏览器动作(W3C) 
	        if (e && e.preventDefault) {
	          e.preventDefault();
	        } else {
	          window.event.returnValue = false;
	        }
	      }
	    },
	    //notInRootView 真正的mouseout,鼠标已经不在图表的节点内了
	    __getcurPointsTarget: function __getcurPointsTarget(e, point, notInRootView) {
	      var me = this;
	      var root = me.canvax;
	      var oldObj = me.curPointsTarget[0];

	      if (oldObj && !oldObj.context) {
	        oldObj = null;
	      }
	      var e = new _event2["default"](e);

	      if (e.type == "mousemove" && oldObj && oldObj._hoverClass && oldObj.hoverClone && oldObj.pointChkPriority && oldObj.getChildInPoint(point)) {
	        //小优化,鼠标move的时候。计算频率太大，所以。做此优化
	        //如果有target存在，而且当前元素正在hoverStage中，而且当前鼠标还在target内,就没必要取检测整个displayList了
	        //开发派发常规mousemove事件
	        e.target = e.currentTarget = oldObj;
	        e.point = oldObj.globalToLocal(point);
	        oldObj.dispatchEvent(e);
	        return;
	      }
	      var obj = notInRootView ? null : root.getObjectsUnderPoint(point, 1)[0];

	      if (oldObj && oldObj != obj || e.type == "mouseout") {
	        if (oldObj && oldObj.context) {
	          me.curPointsTarget[0] = null;
	          e.type = "mouseout";
	          e.toTarget = obj;
	          e.target = e.currentTarget = oldObj;
	          e.point = oldObj.globalToLocal(point);
	          oldObj.dispatchEvent(e);
	        }
	      }

	      if (obj && oldObj != obj) {
	        me.curPointsTarget[0] = obj;
	        e.type = "mouseover";
	        e.fromTarget = oldObj;
	        e.target = e.currentTarget = obj;
	        e.point = obj.globalToLocal(point);
	        obj.dispatchEvent(e);
	      }

	      if (e.type == "mousemove" && obj) {
	        e.target = e.currentTarget = oldObj;
	        e.point = oldObj.globalToLocal(point);
	        oldObj.dispatchEvent(e);
	      }

	      me._cursorHander(obj, oldObj);
	    },
	    _cursorHander: function _cursorHander(obj, oldObj) {
	      if (!obj && !oldObj) {
	        this._setCursor("default");
	      }

	      if (obj && oldObj != obj && obj.context) {
	        this._setCursor(obj.context.$model.cursor);
	      }
	    },
	    _setCursor: function _setCursor(cursor) {
	      if (this._cursor == cursor) {
	        //如果两次要设置的鼠标状态是一样的
	        return;
	      }
	      this.canvax.view.style.cursor = cursor;
	      this._cursor = cursor;
	    },

	    /*
	    * 原生事件系统------------------------------------------------end
	    */

	    /*
	     *第三方库的事件系统------------------------------------------------begin
	     *触屏事件处理函数
	     * */
	    __libHandler: function __libHandler(e) {
	      var me = this;
	      var root = me.canvax;
	      root.updateViewOffset(); // touch 下的 curPointsTarget 从touches中来
	      //获取canvax坐标系统里面的坐标

	      me.curPoints = me.__getCanvaxPointInTouchs(e);

	      if (!me._draging) {
	        //如果在draging的话，target已经是选中了的，可以不用 检测了
	        me.curPointsTarget = me.__getChildInTouchs(me.curPoints);
	      }

	      if (me.curPointsTarget.length > 0) {
	        //drag开始
	        if (e.type == me.drag.start) {
	          //dragstart的时候touch已经准备好了target， curPointsTarget 里面只要有一个是有效的
	          //就认为drags开始
	          _underscore2["default"].each(me.curPointsTarget, function (child, i) {
	            if (child && child.dragEnabled) {
	              //只要有一个元素就认为正在准备drag了
	              me._draging = true; //有可能该child没有hover style

	              if (!child._globalAlpha) {
	                child._globalAlpha = child.context.$model.globalAlpha;
	              }

	              me._clone2hoverStage(child, i); //先把本尊给隐藏了


	              child.context.globalAlpha = 0;
	              child.fire("dragstart");
	              return false;
	            }
	          });
	        }

	        if (e.type == me.drag.move) {
	          if (me._draging) {
	            _underscore2["default"].each(me.curPointsTarget, function (child, i) {
	              if (child && child.dragEnabled) {
	                me._dragIngHander(e, child, i);
	              }
	            });
	          }
	        }

	        if (e.type == me.drag.end) {
	          if (me._draging) {
	            _underscore2["default"].each(me.curPointsTarget, function (child, i) {
	              if (child && child.dragEnabled) {
	                me._dragEnd(e, child, 0);

	                child.fire("dragend");
	              }
	            });

	            me._draging = false;
	          }
	        }

	        me.__dispatchEventInChilds(e, me.curPointsTarget);
	      } else {
	        //如果当前没有一个target，就把事件派发到canvax上面
	        me.__dispatchEventInChilds(e, [root]);
	      }
	    },
	    //从touchs中获取到对应touch , 在上面添加上canvax坐标系统的x，y
	    __getCanvaxPointInTouchs: function __getCanvaxPointInTouchs(e) {
	      var me = this;
	      var root = me.canvax;
	      var curTouchs = [];

	      _underscore2["default"].each(e.point, function (touch) {
	        curTouchs.push({
	          x: _dom2["default"].pageX(touch) - root.viewOffset.left,
	          y: _dom2["default"].pageY(touch) - root.viewOffset.top
	        });
	      });

	      return curTouchs;
	    },
	    __getChildInTouchs: function __getChildInTouchs(touchs) {
	      var me = this;
	      var root = me.canvax;
	      var touchesTarget = [];

	      _underscore2["default"].each(touchs, function (touch) {
	        touchesTarget.push(root.getObjectsUnderPoint(touch, 1)[0]);
	      });

	      return touchesTarget;
	    },

	    /*
	    *第三方库的事件系统------------------------------------------------end
	    */

	    /*
	     *@param {array} childs 
	     * */
	    __dispatchEventInChilds: function __dispatchEventInChilds(e, childs) {
	      if (!childs && !("length" in childs)) {
	        return false;
	      }

	      var me = this;

	      _underscore2["default"].each(childs, function (child, i) {
	        if (child) {
	          var ce = new _event2["default"](e); //ce.target = ce.currentTarget = child || this;

	          ce.stagePoint = me.curPoints[i];
	          ce.point = child.globalToLocal(ce.stagePoint);
	          child.dispatchEvent(ce);
	        }
	      });
	    },
	    //克隆一个元素到hover stage中去
	    _clone2hoverStage: function _clone2hoverStage(target, i) {
	      var me = this;
	      var root = me.canvax;

	      var _dragDuplicate = root._bufferStage.getChildById(target.id);

	      if (!_dragDuplicate) {
	        _dragDuplicate = target.clone(true);
	        _dragDuplicate._transform = target.getConcatenatedMatrix();
	        /**
	         *TODO: 因为后续可能会有手动添加的 元素到_bufferStage 里面来
	         *比如tips
	         *这类手动添加进来的肯定是因为需要显示在最外层的。在hover元素之上。
	         *所有自动添加的hover元素都默认添加在_bufferStage的最底层
	         **/

	        root._bufferStage.addChildAt(_dragDuplicate, 0);
	      }

	      _dragDuplicate.context.globalAlpha = target._globalAlpha;
	      target._dragPoint = target.globalToLocal(me.curPoints[i]);
	      return _dragDuplicate;
	    },
	    //drag 中 的处理函数
	    _dragIngHander: function _dragIngHander(e, target, i) {
	      var me = this;
	      var root = me.canvax;

	      var _point = target.globalToLocal(me.curPoints[i]); //要对应的修改本尊的位置，但是要告诉引擎不要watch这个时候的变化


	      target._noHeart = true;
	      var _moveStage = target.moveing;
	      target.moveing = true;
	      target.context.x += _point.x - target._dragPoint.x;
	      target.context.y += _point.y - target._dragPoint.y;
	      target.fire("draging");
	      target.moveing = _moveStage;
	      target._noHeart = false; //同步完毕本尊的位置
	      //这里只能直接修改_transform 。 不能用下面的修改x，y的方式。

	      var _dragDuplicate = root._bufferStage.getChildById(target.id);

	      _dragDuplicate._transform = target.getConcatenatedMatrix(); //worldTransform在renderer的时候计算

	      _dragDuplicate.worldTransform = null; //setWorldTransform都统一在render中执行，这里注释掉
	      //_dragDuplicate.setWorldTransform();
	      //直接修改的_transform不会出发心跳上报， 渲染引擎不制动这个stage需要绘制。
	      //所以要手动出发心跳包

	      _dragDuplicate.heartBeat();
	    },
	    //drag结束的处理函数
	    //TODO: dragend的还需要处理end的点是否还在元素上面，要恢复hover状态
	    _dragEnd: function _dragEnd(e, target, i) {
	      var me = this;
	      var root = me.canvax; //_dragDuplicate 复制在_bufferStage 中的副本

	      var _dragDuplicate = root._bufferStage.getChildById(target.id);

	      _dragDuplicate && _dragDuplicate.destroy();
	      target.context.globalAlpha = target._globalAlpha;
	    }
	  };
	  exports["default"] = Handler;
	});
	});

	unwrapExports(handler);

	var event$1 = createCommonjsModule(function (module, exports) {

	(function (global, factory) {
	  {
	    factory(exports, event, dispatcher, handler, manager, types);
	  }
	})(void 0, function (exports, _event, _dispatcher, _handler, _manager, _types) {

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	  exports.types = exports.Manager = exports.Handler = exports.Dispatcher = exports.Event = undefined;

	  var _event2 = _interopRequireDefault(_event);

	  var _dispatcher2 = _interopRequireDefault(_dispatcher);

	  var _handler2 = _interopRequireDefault(_handler);

	  var _manager2 = _interopRequireDefault(_manager);

	  var _types2 = _interopRequireDefault(_types);

	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      default: obj
	    };
	  }

	  exports.Event = _event2["default"];
	  exports.Dispatcher = _dispatcher2["default"];
	  exports.Handler = _handler2["default"];
	  exports.Manager = _manager2["default"];
	  exports.types = _types2["default"];
	});
	});

	unwrapExports(event$1);

	var dist = createCommonjsModule(function (module, exports) {

	(function (global$1, factory) {
	  {
	    factory(exports, axis, dataFrame, dataSection, underscore, dom, global, color, tools, polar, event$1);
	  }
	})(void 0, function (exports, _axis, _dataFrame, _dataSection, _underscore, _dom, _global, _color, _tools, _polar, _index) {

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	  exports.event = exports.Polar = exports.getDefaultProps = exports.color = exports.global = exports.cloneData = exports.cloneOptions = exports.$ = exports._ = exports.dataSection = exports.dataFrame = exports.axis = undefined;

	  var _axis2 = _interopRequireDefault(_axis);

	  var _dataFrame2 = _interopRequireDefault(_dataFrame);

	  var _dataSection2 = _interopRequireDefault(_dataSection);

	  var _underscore2 = _interopRequireDefault(_underscore);

	  var _dom2 = _interopRequireDefault(_dom);

	  var _global2 = _interopRequireDefault(_global);

	  var color = _interopRequireWildcard(_color);

	  var event = _interopRequireWildcard(_index);

	  function _getRequireWildcardCache() {
	    if (typeof WeakMap !== "function") return null;
	    var cache = new WeakMap();

	    _getRequireWildcardCache = function () {
	      return cache;
	    };

	    return cache;
	  }

	  function _interopRequireWildcard(obj) {
	    if (obj && obj.__esModule) {
	      return obj;
	    }

	    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
	      return {
	        default: obj
	      };
	    }

	    var cache = _getRequireWildcardCache();

	    if (cache && cache.has(obj)) {
	      return cache.get(obj);
	    }

	    var newObj = {};
	    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

	    for (var key in obj) {
	      if (Object.prototype.hasOwnProperty.call(obj, key)) {
	        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

	        if (desc && (desc.get || desc.set)) {
	          Object.defineProperty(newObj, key, desc);
	        } else {
	          newObj[key] = obj[key];
	        }
	      }
	    }

	    newObj.default = obj;

	    if (cache) {
	      cache.set(obj, newObj);
	    }

	    return newObj;
	  }

	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      default: obj
	    };
	  }

	  exports.axis = _axis2["default"];
	  exports.dataFrame = _dataFrame2["default"];
	  exports.dataSection = _dataSection2["default"];
	  exports._ = _underscore2["default"];
	  exports.$ = _dom2["default"];
	  exports.cloneOptions = _tools.cloneOptions;
	  exports.cloneData = _tools.cloneData;
	  exports.global = _global2["default"];
	  exports.color = color;
	  exports.getDefaultProps = _tools.getDefaultProps;
	  exports.Polar = _polar.Polar;
	  exports.event = event;
	});
	});

	var index = unwrapExports(dist);

	module.exports = index;
	});

	unwrapExports(index_cjs);

	var index_cjs$1 = createCommonjsModule(function (module) {

	function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

	var mmvis = _interopDefault(index_cjs);

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var utils = createCommonjsModule(function (module, exports) {

	(function (global, factory) {
	  {
	    factory(exports, mmvis);
	  }
	})(void 0, function (exports, _mmvis) {

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });

	  /**
	   * Canvax
	   *
	   * @author 释剑 (李涛, litao.lt@alibaba-inc.com 
	  */
	  var Utils = {
	    mainFrameRate: 60,
	    //默认主帧率
	    now: 0,

	    /*给文本检测高宽专用*/
	    _pixelCtx: null,
	    __emptyFunc: function __emptyFunc() {},
	    //retina 屏幕优化
	    _devicePixelRatio: typeof window !== 'undefined' ? window.devicePixelRatio : 1,
	    _UID: 0,
	    //该值为向上的自增长整数值
	    getUID: function getUID() {
	      return this._UID++;
	    },
	    createId: function createId(name) {
	      //if end with a digit, then append an undersBase before appending
	      var charCode = name.charCodeAt(name.length - 1);
	      if (charCode >= 48 && charCode <= 57) name += "_";
	      return name + Utils.getUID();
	    },
	    canvasSupport: function canvasSupport() {
	      return !!document.createElement('canvas').getContext;
	    },
	    initElement: function initElement(canvas) {
	      if (window.FlashCanvas && FlashCanvas.initElement) {
	        FlashCanvas.initElement(canvas);
	      }
	      return canvas;
	    },

	    /**
	     * 按照css的顺序，返回一个[上,右,下,左]
	     */
	    getCssOrderArr: function getCssOrderArr(r) {
	      var r1;
	      var r2;
	      var r3;
	      var r4;

	      if (typeof r === 'number') {
	        r1 = r2 = r3 = r4 = r;
	      } else if (r instanceof Array) {
	        if (r.length === 1) {
	          r1 = r2 = r3 = r4 = r[0];
	        } else if (r.length === 2) {
	          r1 = r3 = r[0];
	          r2 = r4 = r[1];
	        } else if (r.length === 3) {
	          r1 = r[0];
	          r2 = r4 = r[1];
	          r3 = r[2];
	        } else {
	          r1 = r[0];
	          r2 = r[1];
	          r3 = r[2];
	          r4 = r[3];
	        }
	      } else {
	        r1 = r2 = r3 = r4 = 0;
	      }

	      return [r1, r2, r3, r4];
	    },
	    isWebGLSupported: function isWebGLSupported() {
	      var contextOptions = {
	        stencil: true
	      };

	      try {
	        if (!window.WebGLRenderingContext) //不存在直接return
	          {
	            return false;
	          }

	        var canvas = document.createElement('canvas'),
	            gl = canvas.getContext('webgl', contextOptions) || canvas.getContext('experimental-webgl', contextOptions);
	        return !!(gl && gl.getContextAttributes().stencil); //还要确实检测是否支持webGL模式
	      } catch (e) {
	        return false;
	      }
	    },
	    checkOpt: function checkOpt(opt) {
	      if (!opt) {
	        opt = {
	          context: {}
	        };
	      } else {
	        if (!opt.context) {
	          opt.context = {};
	        }
	      }

	      return opt;
	    }
	  };
	  Utils._pixelCtx = Utils.initElement(_mmvis.$.createCanvas(1, 1, "_pixelCanvas")).getContext('2d');
	  exports["default"] = Utils;
	});
	});

	unwrapExports(utils);

	var Matrix = createCommonjsModule(function (module, exports) {

	(function (global, factory) {
	  {
	    factory(exports);
	  }
	})(void 0, function (exports) {

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });

	  /**
	   * Canvax
	   *
	   * @author 释剑 (李涛, litao.lt@alibaba-inc.com)
	   *
	   * | a | c | tx|
	   * | b | d | ty|
	   * | 0 | 0 | 1 |
	   *
	   * @class
	   * @memberof PIXI
	   *
	   *
	   * Matrix 矩阵库 用于整个系统的几何变换计算
	   */
	  var Matrix = function Matrix(a, b, c, d, tx, ty) {
	    this.a = a != undefined ? a : 1;
	    this.b = b != undefined ? b : 0;
	    this.c = c != undefined ? c : 0;
	    this.d = d != undefined ? d : 1;
	    this.tx = tx != undefined ? tx : 0;
	    this.ty = ty != undefined ? ty : 0;
	    this.array = null;
	  };

	  Matrix.prototype = {
	    concat: function concat(mtx) {
	      var a = this.a;
	      var c = this.c;
	      var tx = this.tx;
	      this.a = a * mtx.a + this.b * mtx.c;
	      this.b = a * mtx.b + this.b * mtx.d;
	      this.c = c * mtx.a + this.d * mtx.c;
	      this.d = c * mtx.b + this.d * mtx.d;
	      this.tx = tx * mtx.a + this.ty * mtx.c + mtx.tx;
	      this.ty = tx * mtx.b + this.ty * mtx.d + mtx.ty;
	      return this;
	    },
	    concatTransform: function concatTransform(x, y, scaleX, scaleY, rotation) {
	      var cos = 1;
	      var sin = 0;

	      if (rotation % 360) {
	        var r = rotation * Math.PI / 180;
	        cos = Math.cos(r);
	        sin = Math.sin(r);
	      }

	      this.concat(new Matrix(cos * scaleX, sin * scaleX, -sin * scaleY, cos * scaleY, x, y));
	      return this;
	    },
	    rotate: function rotate(angle) {
	      //目前已经提供对顺时针逆时针两个方向旋转的支持
	      var cos = Math.cos(angle);
	      var sin = Math.sin(angle);
	      var a = this.a;
	      var c = this.c;
	      var tx = this.tx;

	      if (angle > 0) {
	        this.a = a * cos - this.b * sin;
	        this.b = a * sin + this.b * cos;
	        this.c = c * cos - this.d * sin;
	        this.d = c * sin + this.d * cos;
	        this.tx = tx * cos - this.ty * sin;
	        this.ty = tx * sin + this.ty * cos;
	      } else {
	        var st = Math.sin(Math.abs(angle));
	        var ct = Math.cos(Math.abs(angle));
	        this.a = a * ct + this.b * st;
	        this.b = -a * st + this.b * ct;
	        this.c = c * ct + this.d * st;
	        this.d = -c * st + ct * this.d;
	        this.tx = ct * tx + st * this.ty;
	        this.ty = ct * this.ty - st * tx;
	      }

	      return this;
	    },
	    scale: function scale(sx, sy) {
	      this.a *= sx;
	      this.d *= sy;
	      this.tx *= sx;
	      this.ty *= sy;
	      return this;
	    },
	    translate: function translate(dx, dy) {
	      this.tx += dx;
	      this.ty += dy;
	      return this;
	    },
	    identity: function identity() {
	      //初始化
	      this.a = this.d = 1;
	      this.b = this.c = this.tx = this.ty = 0;
	      return this;
	    },
	    invert: function invert() {
	      //逆向矩阵
	      var a = this.a;
	      var b = this.b;
	      var c = this.c;
	      var d = this.d;
	      var tx = this.tx;
	      var i = a * d - b * c;
	      this.a = d / i;
	      this.b = -b / i;
	      this.c = -c / i;
	      this.d = a / i;
	      this.tx = (c * this.ty - d * tx) / i;
	      this.ty = -(a * this.ty - b * tx) / i;
	      return this;
	    },
	    clone: function clone() {
	      return new Matrix(this.a, this.b, this.c, this.d, this.tx, this.ty);
	    },
	    toArray: function toArray(transpose, out) {
	      if (arguments.length == 0) {
	        //canvas2d 中不会有任何的参数传入
	        if (isNaN(this.a) || isNaN(this.b) || isNaN(this.c) || isNaN(this.d) || isNaN(this.tx) || isNaN(this.ty)) {
	          //不是一个合格的矩阵
	          return null;
	        }
	        return [this.a, this.b, this.c, this.d, this.tx, this.ty];
	      } //webgl的glsl需要用的时候，需要传入transpose 来转换为一个3*3完整矩阵


	      if (!this.array) {
	        this.array = new Float32Array(9);
	      }

	      var array = out || this.array;

	      if (transpose) {
	        array[0] = this.a;
	        array[1] = this.b;
	        array[2] = 0;
	        array[3] = this.c;
	        array[4] = this.d;
	        array[5] = 0;
	        array[6] = this.tx;
	        array[7] = this.ty;
	        array[8] = 1;
	      } else {
	        array[0] = this.a;
	        array[1] = this.c;
	        array[2] = this.tx;
	        array[3] = this.b;
	        array[4] = this.d;
	        array[5] = this.ty;
	        array[6] = 0;
	        array[7] = 0;
	        array[8] = 1;
	      }

	      return array;
	    },

	    /**
	     * 矩阵左乘向量
	     */
	    mulVector: function mulVector(v) {
	      var aa = this.a,
	          ac = this.c,
	          atx = this.tx;
	      var ab = this.b,
	          ad = this.d,
	          aty = this.ty;
	      var out = [0, 0];
	      out[0] = v[0] * aa + v[1] * ac + atx;
	      out[1] = v[0] * ab + v[1] * ad + aty;
	      return out;
	    }
	  };
	  exports["default"] = Matrix;
	});
	});

	unwrapExports(Matrix);

	var Point = createCommonjsModule(function (module, exports) {

	(function (global, factory) {
	  {
	    factory(exports);
	  }
	})(void 0, function (exports) {

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });

	  function _typeof(obj) {
	    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
	      _typeof = function _typeof(obj) {
	        return typeof obj;
	      };
	    } else {
	      _typeof = function _typeof(obj) {
	        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	      };
	    }

	    return _typeof(obj);
	  }

	  function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  }

	  function _defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  function _createClass(Constructor, protoProps, staticProps) {
	    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) _defineProperties(Constructor, staticProps);
	    return Constructor;
	  }

	  var Point = function () {
	    function Point() {
	      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

	      _classCallCheck(this, Point);

	      if (arguments.length == 1 && _typeof(arguments[0]) == 'object') {
	        var arg = arguments[0];

	        if ("x" in arg && "y" in arg) {
	          this.x = arg.x * 1;
	          this.y = arg.y * 1;
	        } else {
	          var i = 0;

	          for (var p in arg) {
	            if (i == 0) {
	              this.x = arg[p] * 1;
	            } else {
	              this.y = arg[p] * 1;
	              break;
	            }

	            i++;
	          }
	        }
	      } else {
	        this.x = x * 1;
	        this.y = y * 1;
	      }
	    }

	    _createClass(Point, [{
	      key: "toArray",
	      value: function toArray() {
	        return [this.x, this.y];
	      }
	    }]);

	    return Point;
	  }();

	  exports.default = Point;
	});
	});

	unwrapExports(Point);

	var Tween = createCommonjsModule(function (module, exports) {
	/**
	 * Tween.js - Licensed under the MIT license
	 * https://github.com/tweenjs/tween.js
	 * ----------------------------------------------
	 *
	 * See https://github.com/tweenjs/tween.js/graphs/contributors for the full list of contributors.
	 * Thank you all, you're awesome!
	 */


	var _Group = function () {
		this._tweens = {};
		this._tweensAddedDuringUpdate = {};
	};

	_Group.prototype = {
		getAll: function () {

			return Object.keys(this._tweens).map(function (tweenId) {
				return this._tweens[tweenId];
			}.bind(this));

		},

		removeAll: function () {

			this._tweens = {};

		},

		add: function (tween) {

			this._tweens[tween.getId()] = tween;
			this._tweensAddedDuringUpdate[tween.getId()] = tween;

		},

		remove: function (tween) {

			delete this._tweens[tween.getId()];
			delete this._tweensAddedDuringUpdate[tween.getId()];

		},

		update: function (time, preserve) {

			var tweenIds = Object.keys(this._tweens);

			if (tweenIds.length === 0) {
				return false;
			}

			time = time !== undefined ? time : TWEEN.now();

			// Tweens are updated in "batches". If you add a new tween during an update, then the
			// new tween will be updated in the next batch.
			// If you remove a tween during an update, it may or may not be updated. However,
			// if the removed tween was added during the current batch, then it will not be updated.
			while (tweenIds.length > 0) {
				this._tweensAddedDuringUpdate = {};

				for (var i = 0; i < tweenIds.length; i++) {

					var tween = this._tweens[tweenIds[i]];

					if (tween && tween.update(time) === false) {
						tween._isPlaying = false;

						if (!preserve) {
							delete this._tweens[tweenIds[i]];
						}
					}
				}

				tweenIds = Object.keys(this._tweensAddedDuringUpdate);
			}

			return true;

		}
	};

	var TWEEN = new _Group();

	TWEEN.Group = _Group;
	TWEEN._nextId = 0;
	TWEEN.nextId = function () {
		return TWEEN._nextId++;
	};


	// Include a performance.now polyfill.
	// In node.js, use process.hrtime.
	if (typeof (window) === 'undefined' && typeof (process) !== 'undefined') {
		TWEEN.now = function () {
			var time = process.hrtime();

			// Convert [seconds, nanoseconds] to milliseconds.
			return time[0] * 1000 + time[1] / 1000000;
		};
	}
	// In a browser, use window.performance.now if it is available.
	else if (typeof (window) !== 'undefined' &&
	         window.performance !== undefined &&
			 window.performance.now !== undefined) {
		// This must be bound, because directly assigning this function
		// leads to an invocation exception in Chrome.
		TWEEN.now = window.performance.now.bind(window.performance);
	}
	// Use Date.now if it is available.
	else if (Date.now !== undefined) {
		TWEEN.now = Date.now;
	}
	// Otherwise, use 'new Date().getTime()'.
	else {
		TWEEN.now = function () {
			return new Date().getTime();
		};
	}


	TWEEN.Tween = function (object, group) {
		this._object = object;
		this._valuesStart = {};
		this._valuesEnd = {};
		this._valuesStartRepeat = {};
		this._duration = 1000;
		this._repeat = 0;
		this._repeatDelayTime = undefined;
		this._yoyo = false;
		this._isPlaying = false;
		this._reversed = false;
		this._delayTime = 0;
		this._startTime = null;
		this._easingFunction = TWEEN.Easing.Linear.None;
		this._interpolationFunction = TWEEN.Interpolation.Linear;
		this._chainedTweens = [];
		this._onStartCallback = null;
		this._onStartCallbackFired = false;
		this._onUpdateCallback = null;
		this._onCompleteCallback = null;
		this._onStopCallback = null;
		this._group = group || TWEEN;
		this._id = TWEEN.nextId();

	};

	TWEEN.Tween.prototype = {
		getId: function getId() {
			return this._id;
		},

		isPlaying: function isPlaying() {
			return this._isPlaying;
		},

		to: function to(properties, duration) {

			this._valuesEnd = properties;

			if (duration !== undefined) {
				this._duration = duration;
			}

			return this;

		},

		start: function start(time) {

			this._group.add(this);

			this._isPlaying = true;

			this._onStartCallbackFired = false;

			this._startTime = time !== undefined ? typeof time === 'string' ? TWEEN.now() + parseFloat(time) : time : TWEEN.now();
			this._startTime += this._delayTime;

			for (var property in this._valuesEnd) {

				// Check if an Array was provided as property value
				if (this._valuesEnd[property] instanceof Array) {

					if (this._valuesEnd[property].length === 0) {
						continue;
					}

					// Create a local copy of the Array with the start value at the front
					this._valuesEnd[property] = [this._object[property]].concat(this._valuesEnd[property]);

				}

				// If `to()` specifies a property that doesn't exist in the source object,
				// we should not set that property in the object
				if (this._object[property] === undefined) {
					continue;
				}

				// Save the starting value.
				this._valuesStart[property] = this._object[property];

				if ((this._valuesStart[property] instanceof Array) === false) {
					this._valuesStart[property] *= 1.0; // Ensures we're using numbers, not strings
				}

				this._valuesStartRepeat[property] = this._valuesStart[property] || 0;

			}

			return this;

		},

		stop: function stop() {

			if (!this._isPlaying) {
				return this;
			}

			this._group.remove(this);
			this._isPlaying = false;

			if (this._onStopCallback !== null) {
				this._onStopCallback(this._object);
			}

			this.stopChainedTweens();
			return this;

		},

		end: function end() {

			this.update(this._startTime + this._duration);
			return this;

		},

		stopChainedTweens: function stopChainedTweens() {

			for (var i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) {
				this._chainedTweens[i].stop();
			}

		},

		group: function group(group) {
			this._group = group;
			return this;
		},

		delay: function delay(amount) {

			this._delayTime = amount;
			return this;

		},

		repeat: function repeat(times) {

			this._repeat = times;
			return this;

		},

		repeatDelay: function repeatDelay(amount) {

			this._repeatDelayTime = amount;
			return this;

		},

		yoyo: function yoyo(yy) {

			this._yoyo = yy;
			return this;

		},

		easing: function easing(eas) {

			this._easingFunction = eas;
			return this;

		},

		interpolation: function interpolation(inter) {

			this._interpolationFunction = inter;
			return this;

		},

		chain: function chain() {

			this._chainedTweens = arguments;
			return this;

		},

		onStart: function onStart(callback) {

			this._onStartCallback = callback;
			return this;

		},

		onUpdate: function onUpdate(callback) {

			this._onUpdateCallback = callback;
			return this;

		},

		onComplete: function onComplete(callback) {

			this._onCompleteCallback = callback;
			return this;

		},

		onStop: function onStop(callback) {

			this._onStopCallback = callback;
			return this;

		},

		update: function update(time) {

			var property;
			var elapsed;
			var value;

			if (time < this._startTime) {
				return true;
			}

			if (this._onStartCallbackFired === false) {

				if (this._onStartCallback !== null) {
					this._onStartCallback(this._object);
				}

				this._onStartCallbackFired = true;
			}

			elapsed = (time - this._startTime) / this._duration;
			elapsed = (this._duration === 0 || elapsed > 1) ? 1 : elapsed;

			value = this._easingFunction(elapsed);

			for (property in this._valuesEnd) {

				// Don't update properties that do not exist in the source object
				if (this._valuesStart[property] === undefined) {
					continue;
				}

				var start = this._valuesStart[property] || 0;
				var end = this._valuesEnd[property];

				if (end instanceof Array) {

					this._object[property] = this._interpolationFunction(end, value);

				} else {

					// Parses relative end values with start as base (e.g.: +10, -3)
					if (typeof (end) === 'string') {

						if (end.charAt(0) === '+' || end.charAt(0) === '-') {
							end = start + parseFloat(end);
						} else {
							end = parseFloat(end);
						}
					}

					// Protect against non numeric properties.
					if (typeof (end) === 'number') {
						this._object[property] = start + (end - start) * value;
					}

				}

			}

			if (this._onUpdateCallback !== null) {
				this._onUpdateCallback(this._object);
			}

			if (elapsed === 1) {

				if (this._repeat > 0) {

					if (isFinite(this._repeat)) {
						this._repeat--;
					}

					// Reassign starting values, restart by making startTime = now
					for (property in this._valuesStartRepeat) {

						if (typeof (this._valuesEnd[property]) === 'string') {
							this._valuesStartRepeat[property] = this._valuesStartRepeat[property] + parseFloat(this._valuesEnd[property]);
						}

						if (this._yoyo) {
							var tmp = this._valuesStartRepeat[property];

							this._valuesStartRepeat[property] = this._valuesEnd[property];
							this._valuesEnd[property] = tmp;
						}

						this._valuesStart[property] = this._valuesStartRepeat[property];

					}

					if (this._yoyo) {
						this._reversed = !this._reversed;
					}

					if (this._repeatDelayTime !== undefined) {
						this._startTime = time + this._repeatDelayTime;
					} else {
						this._startTime = time + this._delayTime;
					}

					return true;

				} else {

					if (this._onCompleteCallback !== null) {

						this._onCompleteCallback(this._object);
					}

					for (var i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) {
						// Make the chained tweens start exactly at the time they should,
						// even if the `update()` method was called way past the duration of the tween
						this._chainedTweens[i].start(this._startTime + this._duration);
					}

					return false;

				}

			}

			return true;

		}
	};


	TWEEN.Easing = {

		Linear: {

			None: function (k) {

				return k;

			}

		},

		Quadratic: {

			In: function (k) {

				return k * k;

			},

			Out: function (k) {

				return k * (2 - k);

			},

			InOut: function (k) {

				if ((k *= 2) < 1) {
					return 0.5 * k * k;
				}

				return - 0.5 * (--k * (k - 2) - 1);

			}

		},

		Cubic: {

			In: function (k) {

				return k * k * k;

			},

			Out: function (k) {

				return --k * k * k + 1;

			},

			InOut: function (k) {

				if ((k *= 2) < 1) {
					return 0.5 * k * k * k;
				}

				return 0.5 * ((k -= 2) * k * k + 2);

			}

		},

		Quartic: {

			In: function (k) {

				return k * k * k * k;

			},

			Out: function (k) {

				return 1 - (--k * k * k * k);

			},

			InOut: function (k) {

				if ((k *= 2) < 1) {
					return 0.5 * k * k * k * k;
				}

				return - 0.5 * ((k -= 2) * k * k * k - 2);

			}

		},

		Quintic: {

			In: function (k) {

				return k * k * k * k * k;

			},

			Out: function (k) {

				return --k * k * k * k * k + 1;

			},

			InOut: function (k) {

				if ((k *= 2) < 1) {
					return 0.5 * k * k * k * k * k;
				}

				return 0.5 * ((k -= 2) * k * k * k * k + 2);

			}

		},

		Sinusoidal: {

			In: function (k) {

				return 1 - Math.cos(k * Math.PI / 2);

			},

			Out: function (k) {

				return Math.sin(k * Math.PI / 2);

			},

			InOut: function (k) {

				return 0.5 * (1 - Math.cos(Math.PI * k));

			}

		},

		Exponential: {

			In: function (k) {

				return k === 0 ? 0 : Math.pow(1024, k - 1);

			},

			Out: function (k) {

				return k === 1 ? 1 : 1 - Math.pow(2, - 10 * k);

			},

			InOut: function (k) {

				if (k === 0) {
					return 0;
				}

				if (k === 1) {
					return 1;
				}

				if ((k *= 2) < 1) {
					return 0.5 * Math.pow(1024, k - 1);
				}

				return 0.5 * (- Math.pow(2, - 10 * (k - 1)) + 2);

			}

		},

		Circular: {

			In: function (k) {

				return 1 - Math.sqrt(1 - k * k);

			},

			Out: function (k) {

				return Math.sqrt(1 - (--k * k));

			},

			InOut: function (k) {

				if ((k *= 2) < 1) {
					return - 0.5 * (Math.sqrt(1 - k * k) - 1);
				}

				return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);

			}

		},

		Elastic: {

			In: function (k) {

				if (k === 0) {
					return 0;
				}

				if (k === 1) {
					return 1;
				}

				return -Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);

			},

			Out: function (k) {

				if (k === 0) {
					return 0;
				}

				if (k === 1) {
					return 1;
				}

				return Math.pow(2, -10 * k) * Math.sin((k - 0.1) * 5 * Math.PI) + 1;

			},

			InOut: function (k) {

				if (k === 0) {
					return 0;
				}

				if (k === 1) {
					return 1;
				}

				k *= 2;

				if (k < 1) {
					return -0.5 * Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);
				}

				return 0.5 * Math.pow(2, -10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI) + 1;

			}

		},

		Back: {

			In: function (k) {

				var s = 1.70158;

				return k * k * ((s + 1) * k - s);

			},

			Out: function (k) {

				var s = 1.70158;

				return --k * k * ((s + 1) * k + s) + 1;

			},

			InOut: function (k) {

				var s = 1.70158 * 1.525;

				if ((k *= 2) < 1) {
					return 0.5 * (k * k * ((s + 1) * k - s));
				}

				return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);

			}

		},

		Bounce: {

			In: function (k) {

				return 1 - TWEEN.Easing.Bounce.Out(1 - k);

			},

			Out: function (k) {

				if (k < (1 / 2.75)) {
					return 7.5625 * k * k;
				} else if (k < (2 / 2.75)) {
					return 7.5625 * (k -= (1.5 / 2.75)) * k + 0.75;
				} else if (k < (2.5 / 2.75)) {
					return 7.5625 * (k -= (2.25 / 2.75)) * k + 0.9375;
				} else {
					return 7.5625 * (k -= (2.625 / 2.75)) * k + 0.984375;
				}

			},

			InOut: function (k) {

				if (k < 0.5) {
					return TWEEN.Easing.Bounce.In(k * 2) * 0.5;
				}

				return TWEEN.Easing.Bounce.Out(k * 2 - 1) * 0.5 + 0.5;

			}

		}

	};

	TWEEN.Interpolation = {

		Linear: function (v, k) {

			var m = v.length - 1;
			var f = m * k;
			var i = Math.floor(f);
			var fn = TWEEN.Interpolation.Utils.Linear;

			if (k < 0) {
				return fn(v[0], v[1], f);
			}

			if (k > 1) {
				return fn(v[m], v[m - 1], m - f);
			}

			return fn(v[i], v[i + 1 > m ? m : i + 1], f - i);

		},

		Bezier: function (v, k) {

			var b = 0;
			var n = v.length - 1;
			var pw = Math.pow;
			var bn = TWEEN.Interpolation.Utils.Bernstein;

			for (var i = 0; i <= n; i++) {
				b += pw(1 - k, n - i) * pw(k, i) * v[i] * bn(n, i);
			}

			return b;

		},

		CatmullRom: function (v, k) {

			var m = v.length - 1;
			var f = m * k;
			var i = Math.floor(f);
			var fn = TWEEN.Interpolation.Utils.CatmullRom;

			if (v[0] === v[m]) {

				if (k < 0) {
					i = Math.floor(f = m * (1 + k));
				}

				return fn(v[(i - 1 + m) % m], v[i], v[(i + 1) % m], v[(i + 2) % m], f - i);

			} else {

				if (k < 0) {
					return v[0] - (fn(v[0], v[0], v[1], v[1], -f) - v[0]);
				}

				if (k > 1) {
					return v[m] - (fn(v[m], v[m], v[m - 1], v[m - 1], f - m) - v[m]);
				}

				return fn(v[i ? i - 1 : 0], v[i], v[m < i + 1 ? m : i + 1], v[m < i + 2 ? m : i + 2], f - i);

			}

		},

		Utils: {

			Linear: function (p0, p1, t) {

				return (p1 - p0) * t + p0;

			},

			Bernstein: function (n, i) {

				var fc = TWEEN.Interpolation.Utils.Factorial;

				return fc(n) / fc(i) / fc(n - i);

			},

			Factorial: (function () {

				var a = [1];

				return function (n) {

					var s = 1;

					if (a[n]) {
						return a[n];
					}

					for (var i = n; i > 1; i--) {
						s *= i;
					}

					a[n] = s;
					return s;

				};

			})(),

			CatmullRom: function (p0, p1, p2, p3, t) {

				var v0 = (p2 - p0) * 0.5;
				var v1 = (p3 - p1) * 0.5;
				var t2 = t * t;
				var t3 = t * t2;

				return (2 * p1 - 2 * p2 + v0 + v1) * t3 + (- 3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 + v0 * t + p1;

			}

		}

	};

	// UMD (Universal Module Definition)
	(function (root) {

		{

			// Node.js
			module.exports = TWEEN;

		}

	})();
	});

	var AnimationFrame = createCommonjsModule(function (module, exports) {

	(function (global, factory) {
	  {
	    factory(exports, Tween, utils, mmvis);
	  }
	})(void 0, function (exports, _tween, _index, _mmvis) {

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });

	  var _tween2 = _interopRequireDefault(_tween);

	  var _index2 = _interopRequireDefault(_index);

	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      default: obj
	    };
	  }

	  //import Tween from "./Tween"

	  /**
	   * 设置 AnimationFrame begin
	   */
	  var lastTime = 0;
	  var requestAnimationFrame, cancelAnimationFrame;

	  if (typeof window !== 'undefined') {
	    requestAnimationFrame = window.requestAnimationFrame;
	    cancelAnimationFrame = window.cancelAnimationFrame;
	    var vendors = ['ms', 'moz', 'webkit', 'o'];

	    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
	      requestAnimationFrame = window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
	      cancelAnimationFrame = window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
	    }
	  }

	  if (!requestAnimationFrame) {
	    requestAnimationFrame = function requestAnimationFrame(callback, element) {
	      var currTime = new Date().getTime();
	      var timeToCall = Math.max(0, 16 - (currTime - lastTime));
	      var id = setTimeout(function () {
	        callback(currTime + timeToCall);
	      }, timeToCall);
	      lastTime = currTime + timeToCall;
	      return id;
	    };
	  }

	  if (!cancelAnimationFrame) {
	    cancelAnimationFrame = function cancelAnimationFrame(id) {
	      clearTimeout(id);
	    };
	  }

	  var _taskList = []; //[{ id : task: }...]

	  var _requestAid = null;

	  function enabledAnimationFrame() {
	    if (!_requestAid) {
	      _requestAid = requestAnimationFrame(function () {
	        //console.log("frame__" + _taskList.length);
	        //if ( Tween.getAll().length ) {
	        _tween2["default"].update(); //tween自己会做length判断
	        //};


	        var currTaskList = _taskList;
	        _taskList = [];
	        _requestAid = null;

	        while (currTaskList.length > 0) {
	          currTaskList.shift().task();
	        }
	      });
	    }
	    return _requestAid;
	  }
	  /*
	   * @param task 要加入到渲染帧队列中的任务
	   * @result frameid
	   */

	  function registFrame($frame) {
	    if (!$frame) {
	      return;
	    }

	    _taskList.push($frame);

	    return enabledAnimationFrame();
	  }
	  /*
	   *  @param task 要从渲染帧队列中删除的任务
	   */

	  function destroyFrame($frame) {
	    var d_result = false;

	    for (var i = 0, l = _taskList.length; i < l; i++) {
	      if (_taskList[i].id === $frame.id) {
	        d_result = true;

	        _taskList.splice(i, 1);

	        i--;
	        l--;
	      }
	    }

	    if (_taskList.length == 0) {
	      cancelAnimationFrame(_requestAid);
	      _requestAid = null;
	    }
	    return d_result;
	  }
	  /* 
	   * @param opt {from , to , onUpdate , onComplete , ......}
	   * @result tween
	   */

	  function registTween(options) {
	    var opt = _mmvis._.extend({
	      from: null,
	      to: null,
	      duration: 500,
	      onStart: function onStart() {},
	      onUpdate: function onUpdate() {},
	      onComplete: function onComplete() {},
	      onStop: function onStop() {},
	      repeat: 0,
	      delay: 0,
	      easing: 'Linear.None',
	      desc: '' //动画描述，方便查找bug

	    }, options);

	    if (!_mmvis.global.getAnimationEnabled()) {
	      //如果全局动画被禁用，那么下面两项强制设置为0
	      //TODO:其实应该直接执行回调函数的
	      opt.duration = 0;
	      opt.delay = 0;
	    }
	    var tween = {};

	    var tid = "tween_" + _index2["default"].getUID();

	    opt.id && (tid = tid + "_" + opt.id);

	    if (opt.from && opt.to) {
	      var animate = function animate() {
	        if (tween._isCompleteed || tween._isStoped) {
	          tween = null;
	          return;
	        }
	        registFrame({
	          id: tid,
	          task: animate,
	          desc: opt.desc,
	          tween: tween
	        });
	      };

	      tween = new _tween2["default"].Tween(opt.from).to(opt.to, opt.duration).onStart(function () {
	        //opt.onStart.apply( this )
	        opt.onStart(opt.from);
	      }).onUpdate(function () {
	        //opt.onUpdate.apply( this );
	        opt.onUpdate(opt.from);
	      }).onComplete(function () {
	        destroyFrame({
	          id: tid
	        });
	        tween._isCompleteed = true; //opt.onComplete.apply( this , [this] ); //执行用户的conComplete

	        opt.onComplete(opt.from);
	      }).onStop(function () {
	        destroyFrame({
	          id: tid
	        });
	        tween._isStoped = true; //opt.onStop.apply( this , [this] );

	        opt.onStop(opt.from);
	      }).repeat(opt.repeat).delay(opt.delay).easing(_tween2["default"].Easing[opt.easing.split(".")[0]][opt.easing.split(".")[1]]);
	      tween.id = tid;
	      tween.start();
	      animate();
	    }
	    return tween;
	  }
	  /*
	   * @param tween
	   * @result void(0)
	   */

	  function destroyTween(tween, msg) {
	    tween.stop();
	  }
	  exports["default"] = {
	    registFrame: registFrame,
	    destroyFrame: destroyFrame,
	    registTween: registTween,
	    destroyTween: destroyTween,
	    Tween: _tween2["default"],
	    taskList: _taskList
	  };
	});
	});

	unwrapExports(AnimationFrame);

	var observe = createCommonjsModule(function (module, exports) {

	(function (global, factory) {
	  {
	    factory(exports, mmvis);
	  }
	})(void 0, function (exports, _mmvis) {

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });

	  function _typeof(obj) {
	    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
	      _typeof = function _typeof(obj) {
	        return typeof obj;
	      };
	    } else {
	      _typeof = function _typeof(obj) {
	        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	      };
	    }

	    return _typeof(obj);
	  }

	  function Observe(scope) {
	    var stopRepeatAssign = true;
	    var pmodel = {},
	        //要返回的对象
	    accessores = {},
	        //内部用于转换的对象
	    _Publics = ["$watch", "$model"],
	        //公共属性，不需要get set 化的
	    model = {}; //这是pmodel上的$model属性

	    var Publics = _Publics;

	    function loop(name, val) {
	      if (_mmvis._.indexOf(_Publics, name) === -1) {
	        //非 _Publics 中的值，都要先设置好对应的val到model上
	        model[name] = val;
	      }

	      var valueType = _typeof(val);

	      if (_mmvis._.indexOf(Publics, name) > -1) {
	        return;
	      }

	      if (valueType === "function") {
	        Publics.push(name); //函数无需要转换，也可以做为公共属性存在
	      } else {
	        var accessor = function accessor(neo) {
	          //创建监控属性或数组，自变量，由用户触发其改变
	          var value = model[name],
	              preValue = value,
	              complexValue;

	          if (arguments.length) {
	            //写操作
	            //set 的 值的 类型
	            var neoType = _typeof(neo);

	            if (stopRepeatAssign) {
	              return; //阻止重复赋值
	            }

	            if (value !== neo) {
	              if (neo && neoType === "object" && !(neo instanceof Array) && !neo.addColorStop // neo instanceof CanvasGradient
	              ) {
	                  value = neo.$model ? neo : Observe(neo);
	                  complexValue = value.$model;
	                } else {
	                //如果是其他数据类型
	                value = neo;
	              }

	              model[name] = complexValue ? complexValue : value; //更新$model中的值

	              if (valueType != neoType) {
	                //如果set的值类型已经改变，
	                //那么也要把对应的valueType修改为对应的neoType
	                valueType = neoType;
	              }

	              if (pmodel.$watch) {
	                pmodel.$watch.call(pmodel, name, value, preValue);
	              }
	            }
	          } else {
	            //读操作
	            //读的时候，发现value是个obj，而且还没有defineProperty
	            //那么就临时defineProperty一次
	            if (value && valueType === "object" && !(value instanceof Array) && !value.$model && !value.addColorStop) {
	              value = Observe(value);
	              value.$watch = pmodel.$watch; //accessor.value = value;

	              model[name] = value;
	            }
	            return value;
	          }
	        }; //accessor.value = val;


	        accessores[name] = {
	          set: accessor,
	          get: accessor,
	          enumerable: true
	        };
	      }
	    }

	    for (var i in scope) {
	      loop(i, scope[i]);
	    }
	    pmodel = defineProperties(pmodel, accessores, Publics); //生成一个空的ViewModel

	    _mmvis._.forEach(Publics, function (name) {
	      if (scope[name]) {
	        //然后为函数等不被监控的属性赋值
	        if (typeof scope[name] == "function") {
	          pmodel[name] = function () {
	            scope[name].apply(this, arguments);
	          };
	        } else {
	          pmodel[name] = scope[name];
	        }
	      }
	    });

	    pmodel.$model = model;

	    pmodel.hasOwnProperty = function (name) {
	      return name in pmodel.$model;
	    };

	    stopRepeatAssign = false;
	    return pmodel;
	  }
	  var defineProperty = Object.defineProperty; //如果浏览器不支持ecma262v5的Object.defineProperties或者存在BUG，比如IE8
	  //标准浏览器使用__defineGetter__, __defineSetter__实现

	  try {
	    defineProperty({}, "_", {
	      value: "x"
	    });
	    var defineProperties = Object.defineProperties;
	  } catch (e) {
	    if ("__defineGetter__" in Object) {
	      defineProperty = function defineProperty(obj, prop, desc) {
	        if ('value' in desc) {
	          obj[prop] = desc.value;
	        }

	        if ('get' in desc) {
	          obj.__defineGetter__(prop, desc.get);
	        }

	        if ('set' in desc) {
	          obj.__defineSetter__(prop, desc.set);
	        }

	        return obj;
	      };

	      defineProperties = function defineProperties(obj, descs) {
	        for (var prop in descs) {
	          if (descs.hasOwnProperty(prop)) {
	            defineProperty(obj, prop, descs[prop]);
	          }
	        }

	        return obj;
	      };
	    }
	  }

	  /*  因为flash不被支持的策略，所以对应的vbs 实现get set的上古代码也不再支持
	  if (!defineProperties && window.VBArray) {
	      window.execScript([
	              "Function parseVB(code)",
	              "\tExecuteGlobal(code)",
	              "End Function"
	              ].join("\n"), "VBScript");
	  
	      function VBMediator(description, name, value) {
	          var fn = description[name] && description[name].set;
	          if (arguments.length === 3) {
	              fn(value);
	          } else {
	              return fn();
	          }
	      };
	      defineProperties = function(publics, description, array) {
	          publics = array.slice(0);
	          publics.push("hasOwnProperty");
	          var className = "VBClass" + setTimeout("1"), owner = {}, buffer = [];
	          buffer.push(
	                  "Class " + className,
	                  "\tPrivate [__data__], [__proxy__]",
	                  "\tPublic Default Function [__const__](d, p)",
	                  "\t\tSet [__data__] = d: set [__proxy__] = p",
	                  "\t\tSet [__const__] = Me", //链式调用
	                  "\tEnd Function");
	          _.forEach(publics,function(name) { //添加公共属性,如果此时不加以后就没机会了
	              if (owner[name] !== true) {
	                  owner[name] = true //因为VBScript对象不能像JS那样随意增删属性
	              buffer.push("\tPublic [" + name + "]") //你可以预先放到  skipArray 中
	              }
	          });
	          for (var name in description) {
	              owner[name] = true
	                  buffer.push(
	                          //由于不知对方会传入什么,因此set, let都用上
	                          "\tPublic Property Let [" + name + "](val)", //setter
	                          "\t\tCall [__proxy__]([__data__], \"" + name + "\", val)",
	                          "\tEnd Property",
	                          "\tPublic Property Set [" + name + "](val)", //setter
	                          "\t\tCall [__proxy__]([__data__], \"" + name + "\", val)",
	                          "\tEnd Property",
	                          "\tPublic Property Get [" + name + "]", //getter
	                          "\tOn Error Resume Next", //必须优先使用set语句,否则它会误将数组当字符串返回
	                          "\t\tSet[" + name + "] = [__proxy__]([__data__],\"" + name + "\")",
	                          "\tIf Err.Number <> 0 Then",
	                          "\t\t[" + name + "] = [__proxy__]([__data__],\"" + name + "\")",
	                          "\tEnd If",
	                          "\tOn Error Goto 0",
	                          "\tEnd Property")
	          }
	          buffer.push("End Class"); //类定义完毕
	          buffer.push(
	                  "Function " + className + "Factory(a, b)", //创建实例并传入两个关键的参数
	                  "\tDim o",
	                  "\tSet o = (New " + className + ")(a, b)",
	                  "\tSet " + className + "Factory = o",
	                  "End Function");
	          window.parseVB(buffer.join("\r\n"));//先创建一个VB类工厂
	          return  window[className + "Factory"](description, VBMediator);//得到其产品
	      }
	  }
	  */

	  exports["default"] = Observe;
	});
	});

	unwrapExports(observe);

	var _const = createCommonjsModule(function (module, exports) {

	(function (global, factory) {
	  {
	    factory(exports);
	  }
	})(void 0, function (exports) {

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	  var RENDERER_TYPE = exports.RENDERER_TYPE = {
	    UNKNOWN: 0,
	    WEBGL: 1,
	    CANVAS: 2
	  };
	  var DRAW_MODES = exports.DRAW_MODES = {
	    POINTS: 0,
	    LINES: 1,
	    LINE_LOOP: 2,
	    LINE_STRIP: 3,
	    TRIANGLES: 4,
	    TRIANGLE_STRIP: 5,
	    TRIANGLE_FAN: 6
	  };
	  var SHAPES = exports.SHAPES = {
	    POLY: 0,
	    RECT: 1,
	    CIRC: 2,
	    ELIP: 3
	  };
	  var SCALE_MODES = exports.SCALE_MODES = {
	    LINEAR: 0,
	    NEAREST: 1
	  };
	  var CONTEXT_DEFAULT = exports.CONTEXT_DEFAULT = {
	    width: 0,
	    height: 0,
	    x: 0,
	    y: 0,
	    scaleX: 1,
	    scaleY: 1,
	    scaleOrigin: {
	      x: 0,
	      y: 0
	    },
	    rotation: 0,
	    rotateOrigin: {
	      x: 0,
	      y: 0
	    },
	    visible: true,
	    globalAlpha: 1
	  };
	  var SHAPE_CONTEXT_DEFAULT = exports.SHAPE_CONTEXT_DEFAULT = {
	    cursor: "default",
	    fillAlpha: 1,
	    //context2d里没有，自定义
	    fillStyle: null,
	    //"#000000",
	    lineCap: null,
	    //默认都是直角
	    lineJoin: null,
	    //这两个目前webgl里面没实现
	    miterLimit: null,
	    //miterLimit 属性设置或返回最大斜接长度,只有当 lineJoin 属性为 "miter" 时，miterLimit 才有效。
	    strokeAlpha: 1,
	    //context2d里没有，自定义
	    strokeStyle: null,
	    lineType: "solid",
	    //context2d里没有，自定义线条的type，默认为实线
	    lineWidth: null
	  }; //会影响到transform改变的context属性

	  var TRANSFORM_PROPS = exports.TRANSFORM_PROPS = ["x", "y", "scaleX", "scaleY", "rotation", "scaleOrigin", "rotateOrigin"]; //所有和样式相关的属性
	  //appha 有 自己的 处理方式

	  var STYLE_PROPS = exports.STYLE_PROPS = ["lineWidth", "strokeAlpha", "strokeStyle", "fillStyle", "fillAlpha", "globalAlpha"];
	});
	});

	unwrapExports(_const);

	var InsideLine = createCommonjsModule(function (module, exports) {

	(function (global, factory) {
	  {
	    factory(exports);
	  }
	})(void 0, function (exports) {

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	  exports.default = insideLine;

	  /**
	   * 线段包含判断
	   * @points [0,0,0,0]
	   */
	  var _isInsideLine = function _isInsideLine(points, x, y, lineWidth) {
	    var x0 = points[0];
	    var y0 = points[1];
	    var x1 = points[2];
	    var y1 = points[3];

	    var _l = Math.max(lineWidth, 3);

	    var _a = 0;
	    var _b = x0;

	    if (y > y0 + _l && y > y1 + _l || y < y0 - _l && y < y1 - _l || x > x0 + _l && x > x1 + _l || x < x0 - _l && x < x1 - _l) {
	      return false;
	    }

	    if (x0 !== x1) {
	      _a = (y0 - y1) / (x0 - x1);
	      _b = (x0 * y1 - x1 * y0) / (x0 - x1);
	    } else {
	      return Math.abs(x - x0) <= _l / 2;
	    }

	    var _s = (_a * x - y + _b) * (_a * x - y + _b) / (_a * _a + 1);

	    return _s <= _l / 2 * _l / 2;
	  };

	  function insideLine(data, x, y, line) {
	    var points = data.shape.points;
	    var lineWidth = data.lineWidth;
	    var insideCatch = false;

	    for (var i = 0; i < points.length; ++i) {
	      insideCatch = _isInsideLine(points.slice(i, i + 4), x, y, lineWidth);

	      if (insideCatch) {
	        break;
	      }
	      i += 1;
	    }
	    return insideCatch;
	  }
	});
	});

	unwrapExports(InsideLine);

	var settings = createCommonjsModule(function (module, exports) {

	(function (global, factory) {
	  {
	    factory(exports);
	  }
	})(void 0, function (exports) {

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	  exports["default"] = {
	    //设备分辨率
	    RESOLUTION: typeof window !== 'undefined' ? window.devicePixelRatio : 1,

	    /**
	     * Target frames per millisecond.
	     */
	    TARGET_FPMS: 0.06,

	    /**
	     * If set to true WebGL will attempt make textures mimpaped by default.
	     * Mipmapping will only succeed if the base texture uploaded has power of two dimensions.
	     */
	    MIPMAP_TEXTURES: true,

	    /**
	     * Default filter resolution.
	     */
	    FILTER_RESOLUTION: 1,
	    // TODO: maybe change to SPRITE.BATCH_SIZE: 2000
	    // TODO: maybe add PARTICLE.BATCH_SIZE: 15000

	    /**
	     * The default sprite batch size.
	     *
	     * The default aims to balance desktop and mobile devices.
	     */
	    SPRITE_BATCH_SIZE: 4096,

	    /**
	     * The prefix that denotes a URL is for a retina asset.
	     */
	    RETINA_PREFIX: /@(.+)x/,
	    RENDER_OPTIONS: {
	      view: null,
	      antialias: true,
	      forceFXAA: false,
	      autoResize: false,
	      transparent: true,
	      backgroundColor: 0x000000,
	      clearBeforeRender: true,
	      preserveDrawingBuffer: false,
	      roundPixels: false
	    },
	    TRANSFORM_MODE: 0,
	    GC_MODE: 0,
	    GC_MAX_IDLE: 60 * 60,
	    GC_MAX_CHECK_COUNT: 60 * 10,
	    WRAP_MODE: 0,
	    SCALE_MODE: 0,
	    PRECISION: 'mediump'
	  };
	});
	});

	unwrapExports(settings);

	var DisplayObject = createCommonjsModule(function (module, exports) {

	(function (global, factory) {
	  {
	    factory(exports, mmvis, Matrix, Point, utils, AnimationFrame, observe, _const, InsideLine, settings);
	  }
	})(void 0, function (exports, _mmvis, _Matrix, _Point, _index, _AnimationFrame, _observe, _const, _InsideLine, _settings) {

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	  exports.default = undefined;

	  var _Matrix2 = _interopRequireDefault(_Matrix);

	  var _Point2 = _interopRequireDefault(_Point);

	  var _index2 = _interopRequireDefault(_index);

	  var _AnimationFrame2 = _interopRequireDefault(_AnimationFrame);

	  var _observe2 = _interopRequireDefault(_observe);

	  var _InsideLine2 = _interopRequireDefault(_InsideLine);

	  var _settings2 = _interopRequireDefault(_settings);

	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      default: obj
	    };
	  }

	  function _typeof(obj) {
	    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
	      _typeof = function _typeof(obj) {
	        return typeof obj;
	      };
	    } else {
	      _typeof = function _typeof(obj) {
	        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	      };
	    }

	    return _typeof(obj);
	  }

	  function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  }

	  function _defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  function _createClass(Constructor, protoProps, staticProps) {
	    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) _defineProperties(Constructor, staticProps);
	    return Constructor;
	  }

	  function _possibleConstructorReturn(self, call) {
	    if (call && (_typeof(call) === "object" || typeof call === "function")) {
	      return call;
	    }

	    return _assertThisInitialized(self);
	  }

	  function _getPrototypeOf(o) {
	    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
	      return o.__proto__ || Object.getPrototypeOf(o);
	    };
	    return _getPrototypeOf(o);
	  }

	  function _assertThisInitialized(self) {
	    if (self === void 0) {
	      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }

	    return self;
	  }

	  function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	      throw new TypeError("Super expression must either be null or a function");
	    }

	    subClass.prototype = Object.create(superClass && superClass.prototype, {
	      constructor: {
	        value: subClass,
	        writable: true,
	        configurable: true
	      }
	    });
	    if (superClass) _setPrototypeOf(subClass, superClass);
	  }

	  function _setPrototypeOf(o, p) {
	    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
	      o.__proto__ = p;
	      return o;
	    };

	    return _setPrototypeOf(o, p);
	  }

	  var DisplayObject = function (_event$Dispatcher) {
	    _inherits(DisplayObject, _event$Dispatcher);

	    function DisplayObject(opt) {
	      var _this;

	      _classCallCheck(this, DisplayObject);

	      _this = _possibleConstructorReturn(this, _getPrototypeOf(DisplayObject).call(this, opt)); //相对父级元素的矩阵

	      _this._transform = null;
	      _this.worldTransform = null; //_transform如果有修改，则_transformChange为true，renderer的时候worldTransform

	      _this._transformChange = false; //心跳次数

	      _this._heartBeatNum = 0; //元素对应的stage元素

	      _this.stage = null; //元素的父元素

	      _this.parent = null;
	      _this.xyToInt = "xyToInt" in opt ? opt.xyToInt : true; //是否对xy坐标统一int处理，默认为true，但是有的时候可以由外界用户手动指定是否需要计算为int，因为有的时候不计算比较好，比如，进度图表中，再sector的两端添加两个圆来做圆角的进度条的时候，圆circle不做int计算，才能和sector更好的衔接

	      _this.moveing = false; //如果元素在最轨道运动中的时候，最好把这个设置为true，这样能保证轨迹的丝搬顺滑，否则因为xyToInt的原因，会有跳跃

	      _this.clip = null; //裁剪的图形对象
	      //创建好context

	      _this.context = _this._createContext(opt);
	      _this.type = opt.type || "DisplayObject";
	      _this.id = opt.id || _index2["default"].createId(_this.type);
	      _this._trackList = []; //一个元素可以追踪另外元素的变动

	      _this.init.apply(_assertThisInitialized(_this), arguments); //所有属性准备好了后，先要计算一次this._updateTransform()得到_tansform


	      _this._updateTransform();

	      _this._tweens = [];

	      var me = _assertThisInitialized(_this);

	      _this.on("destroy", function () {
	        me.cleanAnimates();
	      });

	      return _this;
	    }

	    _createClass(DisplayObject, [{
	      key: "init",
	      value: function init() {}
	    }, {
	      key: "clipTo",
	      value: function clipTo(node) {
	        this.clip = node;
	        node.isClip = true;
	      }
	    }, {
	      key: "_createContext",
	      value: function _createContext(opt) {
	        var self = this;
	        var optCtx = opt.context || {};
	        var _contextATTRS = {
	          width: optCtx.width || 0,
	          height: optCtx.height || 0,
	          x: optCtx.x || 0,
	          y: optCtx.y || 0,
	          scaleX: optCtx.scaleX || 1,
	          scaleY: optCtx.scaleY || 1,
	          scaleOrigin: optCtx.scaleOrigin || {
	            x: 0,
	            y: 0
	          },
	          rotation: optCtx.rotation || 0,
	          rotateOrigin: optCtx.rotateOrigin || {
	            x: 0,
	            y: 0
	          },
	          visible: optCtx.visible || true,
	          globalAlpha: optCtx.globalAlpha || 1 //样式部分迁移到shape中

	        }; //平凡的clone数据非常的耗时，还是走回原来的路
	        //var _contextATTRS = _.extend( true , _.clone(CONTEXT_DEFAULT), opt.context );

	        _mmvis._.extend(true, _contextATTRS, opt.context); //有些引擎内部设置context属性的时候是不用上报心跳的，比如做热点检测的时候


	        self._notWatch = false; //不需要发心跳信息

	        self._noHeart = false; //_contextATTRS.$owner = self;

	        _contextATTRS.$watch = function (name, value, preValue) {
	          //下面的这些属性变化，都会需要重新组织矩阵属性 _transform 
	          var obj = self; //this.$owner;

	          if (!obj.context) {
	            //如果这个obj的context已经不存在了，那么就什么都不处理，
	            //TODO:后续还要把自己给destroy 并且要把在 动画队列里面的动画也干掉
	            return;
	          }

	          if (name == "globalGalpha") {
	            obj._globalAlphaChange = true;
	          }

	          if (_mmvis._.indexOf(_const.TRANSFORM_PROPS, name) > -1) {
	            obj._updateTransform();

	            obj._transformChange = true;
	          }

	          if (obj._notWatch) {
	            return;
	          }

	          if (obj.$watch) {
	            //执行的内部$watch的时候必须把_notWatch 设置为true，否则会死循环调用
	            obj._notWatch = true;
	            obj.$watch(name, value, preValue);
	            obj._notWatch = false;
	          }

	          if (obj._noHeart) {
	            return;
	          }
	          obj.heartBeat({
	            convertType: "context",
	            shape: obj,
	            name: name,
	            value: value,
	            preValue: preValue
	          });
	        }; //执行init之前，应该就根据参数，把context组织好线


	        return (0, _observe2["default"])(_contextATTRS);
	      }
	    }, {
	      key: "track",
	      value: function track(el) {
	        if (_mmvis._.indexOf(this._trackList, el) == -1) {
	          this._trackList.push(el);
	        }
	      }
	    }, {
	      key: "untrack",
	      value: function untrack(el) {
	        var ind = _mmvis._.indexOf(this._trackList, el);

	        if (ind > -1) {
	          this._trackList.splice(ind, 1);
	        }
	      }
	    }, {
	      key: "clone",
	      value: function clone(myself) {
	        var conf = {
	          id: this.id,
	          context: _mmvis._.clone(this.context.$model),
	          isClone: true
	        };
	        var newObj;

	        if (this.type == 'text') {
	          newObj = new this.constructor(this.text, conf);
	        } else {
	          newObj = new this.constructor(conf);
	        }

	        newObj.id = conf.id;

	        if (this.children) {
	          newObj.children = this.children;
	        }

	        if (this.graphics) {
	          newObj.graphics = this.graphics.clone();
	        }

	        if (!myself) {
	          newObj.id = _index2["default"].createId(newObj.type);
	        }
	        return newObj;
	      }
	    }, {
	      key: "heartBeat",
	      value: function heartBeat(opt) {
	        //stage存在，才说self代表的display已经被添加到了displayList中，绘图引擎需要知道其改变后
	        //的属性，所以，通知到stage.displayAttrHasChange
	        var stage = this.getStage();

	        if (stage) {
	          this._heartBeatNum++;
	          stage.heartBeat && stage.heartBeat(opt);
	        }
	      }
	    }, {
	      key: "getCurrentWidth",
	      value: function getCurrentWidth() {
	        return Math.abs(this.context.$model.width * this.context.$model.scaleX);
	      }
	    }, {
	      key: "getCurrentHeight",
	      value: function getCurrentHeight() {
	        return Math.abs(this.context.$model.height * this.context.$model.scaleY);
	      }
	    }, {
	      key: "getStage",
	      value: function getStage() {
	        if (this.stage) {
	          return this.stage;
	        }
	        var p = this;

	        if (p.type != "stage") {
	          while (p.parent) {
	            p = p.parent;

	            if (p.type == "stage") {
	              break;
	            }
	          }

	          if (p.type !== "stage") {
	            //如果得到的顶点display 的type不是Stage,也就是说不是stage元素
	            //那么只能说明这个p所代表的顶端display 还没有添加到displayList中，也就是没有没添加到
	            //stage舞台的childen队列中，不在引擎渲染范围内
	            return false;
	          }
	        } //一直回溯到顶层object， 即是stage， stage的parent为null


	        this.stage = p;
	        return p;
	      }
	    }, {
	      key: "localToGlobal",
	      value: function localToGlobal(point, container) {
	        !point && (point = new _Point2["default"](0, 0));
	        var cm = this.getConcatenatedMatrix(container);
	        if (cm == null) return (0, _Point2["default"])(0, 0);
	        var m = new _Matrix2["default"](1, 0, 0, 1, point.x, point.y);
	        m.concat(cm);
	        return new _Point2["default"](m.tx, m.ty); //{x:m.tx, y:m.ty};
	      }
	    }, {
	      key: "globalToLocal",
	      value: function globalToLocal(point, container) {
	        !point && (point = new _Point2["default"](0, 0));

	        if (this.type == "stage") {
	          return point;
	        }

	        var cm = this.getConcatenatedMatrix(container);
	        if (cm == null) return new _Point2["default"](0, 0); //{x:0, y:0};

	        cm.invert();
	        var m = new _Matrix2["default"](1, 0, 0, 1, point.x, point.y);
	        m.concat(cm);
	        return new _Point2["default"](m.tx, m.ty); //{x:m.tx, y:m.ty};
	      }
	    }, {
	      key: "localToTarget",
	      value: function localToTarget(point, target) {
	        var p = localToGlobal(point);
	        return target.globalToLocal(p);
	      }
	    }, {
	      key: "getConcatenatedMatrix",
	      value: function getConcatenatedMatrix(container) {
	        var cm = new _Matrix2["default"]();

	        for (var o = this; o != null; o = o.parent) {
	          cm.concat(o._transform);

	          if (!o.parent || container && o.parent && o.parent == container || o.parent && o.parent.type == "stage") {
	            //if( o.type == "stage" || (o.parent && container && o.parent.type == container.type ) ) {
	            return cm; //break;
	          }
	        }

	        return cm;
	      }
	    }, {
	      key: "setEventEnable",
	      value: function setEventEnable(bool) {
	        if (_mmvis._.isBoolean(bool)) {
	          this._eventEnabled = bool;
	          return true;
	        }
	        return false;
	      }
	    }, {
	      key: "getIndex",
	      value: function getIndex() {
	        if (!this.parent) {
	          return;
	        }
	        return _mmvis._.indexOf(this.parent.children, this);
	      }
	    }, {
	      key: "toBack",
	      value: function toBack(num) {
	        if (!this.parent) {
	          return;
	        }

	        var fromIndex = this.getIndex();
	        var toIndex = 0;

	        if (_mmvis._.isNumber(num)) {
	          if (num == 0) {
	            //原地不动
	            return;
	          }
	          toIndex = fromIndex - num;
	        }

	        var me = this.parent.children.splice(fromIndex, 1)[0];

	        if (toIndex < 0) {
	          toIndex = 0;
	        }
	        this.parent.addChildAt(me, toIndex);
	      }
	    }, {
	      key: "toFront",
	      value: function toFront(num) {
	        if (!this.parent) {
	          return;
	        }

	        var fromIndex = this.getIndex();
	        var pcl = this.parent.children.length;
	        var toIndex = pcl;

	        if (_mmvis._.isNumber(num)) {
	          if (num == 0) {
	            //原地不动
	            return;
	          }

	          toIndex = fromIndex + num + 1;
	        }

	        var me = this.parent.children.splice(fromIndex, 1)[0];

	        if (toIndex > pcl) {
	          toIndex = pcl;
	        }

	        this.parent.addChildAt(me, toIndex - 1);
	      }
	    }, {
	      key: "_updateTransform",
	      value: function _updateTransform() {
	        var _transform = new _Matrix2["default"]();

	        _transform.identity();

	        var context = this.context; //是否需要scale

	        if (context.scaleX !== 1 || context.scaleY !== 1) {
	          //如果有缩放
	          //缩放的原点坐标
	          var origin = new _Point2["default"](context.scaleOrigin);

	          _transform.translate(-origin.x, -origin.y);

	          _transform.scale(context.scaleX, context.scaleY);

	          _transform.translate(origin.x, origin.y);
	        }
	        var rotation = context.rotation;

	        if (rotation) {
	          //如果有旋转
	          //旋转的原点坐标
	          var origin = new _Point2["default"](context.rotateOrigin);

	          _transform.translate(-origin.x, -origin.y);

	          _transform.rotate(rotation % 360 * Math.PI / 180);

	          _transform.translate(origin.x, origin.y);
	        }

	        var x, y;

	        if (this.xyToInt && !this.moveing) {
	          //当这个元素在做轨迹运动的时候，比如drag，animation如果实时的调整这个x ， y
	          //那么该元素的轨迹会有跳跃的情况发生。所以加个条件过滤，
	          var x = parseInt(context.x);
	          var y = parseInt(context.y);

	          if (parseInt(context.lineWidth, 10) % 2 == 1 && context.strokeStyle) {
	            x += 0.5;
	            y += 0.5;
	          }
	        } else {
	          x = context.x;
	          y = context.y;
	        }

	        if (x != 0 || y != 0) {
	          _transform.translate(x, y);
	        }
	        this._transform = _transform;
	        return _transform;
	      }
	    }, {
	      key: "setWorldTransform",
	      value: function setWorldTransform() {
	        var cm = new _Matrix2["default"]();
	        cm.concat(this._transform);
	        this.parent && cm.concat(this.parent.worldTransform);
	        this.worldTransform = cm;
	        return this.worldTransform;
	      }
	    }, {
	      key: "getChildInPoint",
	      value: function getChildInPoint(point) {
	        var result = false; //检测的结果
	        //第一步，吧glob的point转换到对应的obj的层级内的坐标系统
	        //if( this.type != "stage" && this.parent && this.parent.type != "stage" ) {
	        //    point = this.parent.globalToLocal( point );
	        //};
	        //var m = new Matrix( Settings.RESOLUTION, 0, 0, Settings.RESOLUTION, point.x , point.y);
	        //m.concat( this.worldTransform );

	        var x = point.x;
	        var y = point.y; //对鼠标的坐标也做相同的变换

	        if (this.worldTransform) {
	          var inverseMatrix = this.worldTransform.clone().invert();
	          var originPos = [x * _settings2["default"].RESOLUTION, y * _settings2["default"].RESOLUTION];
	          originPos = inverseMatrix.mulVector(originPos);
	          x = originPos[0];
	          y = originPos[1];
	        }

	        if (this.graphics) {
	          result = this.containsPoint({
	            x: x,
	            y: y
	          });
	        }

	        if (this.type == "text") {
	          //文本框的先单独处理
	          var _rect = this.getRect();

	          if (!_rect.width || !_rect.height) {
	            return false;
	          }

	          if (x >= _rect.x && x <= _rect.x + _rect.width && (_rect.height >= 0 && y >= _rect.y && y <= _rect.y + _rect.height || _rect.height < 0 && y <= _rect.y && y >= _rect.y + _rect.height)) {
	            //那么就在这个元素的矩形范围内
	            result = true;
	          } else {
	            //如果连矩形内都不是，那么肯定的，这个不是我们要找的shap
	            result = false;
	          }
	          return result;
	        }
	        return result;
	      }
	    }, {
	      key: "containsPoint",
	      value: function containsPoint(point) {
	        var inside = false;

	        for (var i = 0; i < this.graphics.graphicsData.length; ++i) {
	          var data = this.graphics.graphicsData[i];

	          if (data.shape) {
	            //先检测fill， fill的检测概率大些。
	            //像circle,ellipse这样的shape 就直接把lineWidth算在fill里面计算就好了，所以他们是没有insideLine的
	            if (data.hasFill() && data.shape.contains(point.x, point.y)) {
	              inside = true;

	              if (inside) {
	                break;
	              }
	            } //circle,ellipse等就没有points


	            if (data.hasLine() && data.shape.points) {
	              //然后检测是否和描边碰撞
	              inside = (0, _InsideLine2["default"])(data, point.x, point.y);

	              if (inside) {
	                break;
	              }
	            }
	          }
	        }

	        return inside;
	      }
	    }, {
	      key: "animate",
	      value: function animate(toContent, options, context) {
	        if (!context) {
	          context = this.context;
	        }

	        if (!context) {
	          //这个时候如果还是找不到context说明这个 el 已经被destroy了
	          return;
	        }
	        var to = toContent;
	        var from = null;

	        for (var p in to) {
	          if (_mmvis._.isObject(to[p])) {
	            //options必须传递一份copy出去，比如到下一个animate
	            this.animate(to[p], _mmvis._.extend({}, options), context[p]); //如果是个object

	            continue;
	          }

	          if (isNaN(to[p]) && to[p] !== '' && to[p] !== null) {
	            //undefined已经被isNaN过滤了
	            //只有number才能继续走下去执行tween，而非number则直接赋值完事，
	            //TODO:不能用_.isNumber 因为 '1212' 这样的其实可以计算
	            context[p] = to[p];
	            delete to[p];
	            continue;
	          }

	          if (!from) {
	            from = {};
	          }
	          from[p] = context[p];
	        }

	        if (!from) {
	          //这里很重要，不能删除。 
	          //比如line.animate({start:{x:0,y:0}} , {duration:500});
	          //那么递归到start的时候  from 的值依然为null
	          //如果这个时候继续执行的话，会有很严重的bug
	          //line.context.start 会 被赋值了 line对象上的所有属性，严重的bug
	          return;
	        }
	        !options && (options = {});
	        options.from = from;
	        options.to = to;
	        var self = this;

	        var upFun = function upFun() {};

	        if (options.onUpdate) {
	          upFun = options.onUpdate;
	        }
	        var tween;

	        options.onUpdate = function (status) {
	          //如果context不存在说明该obj已经被destroy了，那么要把他的tween给destroy
	          if (!context && tween) {
	            _AnimationFrame2["default"].destroyTween(tween);

	            tween = null;
	            return;
	          }

	          for (var p in status) {
	            context[p] = status[p];
	          }
	          upFun.apply(self, [status]);
	        };

	        var compFun = function compFun() {};

	        if (options.onComplete) {
	          compFun = options.onComplete;
	        }

	        options.onComplete = function (status) {
	          compFun.apply(self, arguments);

	          self._removeTween(tween);
	        };

	        options.onStop = function () {
	          self._removeTween(tween);
	        };

	        options.desc = "tweenType:DisplayObject.animate__id:" + this.id + "__objectType:" + this.type;
	        tween = _AnimationFrame2["default"].registTween(options);

	        this._tweens.push(tween);

	        return tween;
	      }
	    }, {
	      key: "_removeTween",
	      value: function _removeTween(tween) {
	        for (var i = 0; i < this._tweens.length; i++) {
	          if (tween == this._tweens[i]) {
	            this._tweens.splice(i, 1);

	            break;
	          }
	        }
	      }
	    }, {
	      key: "removeAnimate",
	      value: function removeAnimate(animate) {
	        animate.stop();

	        this._removeTween(animate);
	      }
	    }, {
	      key: "cleanAnimates",
	      value: function cleanAnimates() {
	        this._cleanAnimates();
	      }
	    }, {
	      key: "_cleanAnimates",
	      value: function _cleanAnimates() {
	        while (this._tweens.length) {
	          this._tweens.shift().stop();
	        }
	      }
	    }, {
	      key: "remove",
	      value: function remove() {
	        if (this.parent) {
	          this.parent.removeChild(this);
	          this.parent = null;
	        }
	      }
	    }, {
	      key: "destroy",
	      value: function destroy() {
	        this._destroy();
	      }
	    }, {
	      key: "_destroy",
	      value: function _destroy() {
	        this.remove();
	        this.fire("destroy"); //把自己从父节点中删除了后做自我清除，释放内存

	        this.context = null;
	        delete this.context;
	      }
	    }]);

	    return DisplayObject;
	  }(_mmvis.event.Dispatcher);

	  exports.default = DisplayObject;
	});
	});

	unwrapExports(DisplayObject);

	var DisplayObjectContainer = createCommonjsModule(function (module, exports) {

	(function (global, factory) {
	  {
	    factory(exports, mmvis, DisplayObject);
	  }
	})(void 0, function (exports, _mmvis, _DisplayObject2) {

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	  exports.default = undefined;

	  var _DisplayObject3 = _interopRequireDefault(_DisplayObject2);

	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      default: obj
	    };
	  }

	  function _typeof(obj) {
	    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
	      _typeof = function _typeof(obj) {
	        return typeof obj;
	      };
	    } else {
	      _typeof = function _typeof(obj) {
	        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	      };
	    }

	    return _typeof(obj);
	  }

	  function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  }

	  function _defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  function _createClass(Constructor, protoProps, staticProps) {
	    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) _defineProperties(Constructor, staticProps);
	    return Constructor;
	  }

	  function _possibleConstructorReturn(self, call) {
	    if (call && (_typeof(call) === "object" || typeof call === "function")) {
	      return call;
	    }

	    return _assertThisInitialized(self);
	  }

	  function _assertThisInitialized(self) {
	    if (self === void 0) {
	      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }

	    return self;
	  }

	  function _getPrototypeOf(o) {
	    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
	      return o.__proto__ || Object.getPrototypeOf(o);
	    };
	    return _getPrototypeOf(o);
	  }

	  function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	      throw new TypeError("Super expression must either be null or a function");
	    }

	    subClass.prototype = Object.create(superClass && superClass.prototype, {
	      constructor: {
	        value: subClass,
	        writable: true,
	        configurable: true
	      }
	    });
	    if (superClass) _setPrototypeOf(subClass, superClass);
	  }

	  function _setPrototypeOf(o, p) {
	    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
	      o.__proto__ = p;
	      return o;
	    };

	    return _setPrototypeOf(o, p);
	  }

	  var DisplayObjectContainer = function (_DisplayObject) {
	    _inherits(DisplayObjectContainer, _DisplayObject);

	    function DisplayObjectContainer(opt) {
	      var _this;

	      _classCallCheck(this, DisplayObjectContainer);

	      _this = _possibleConstructorReturn(this, _getPrototypeOf(DisplayObjectContainer).call(this, opt));
	      _this.children = [];
	      _this.mouseChildren = []; //所有的容器默认支持event 检测，因为 可能有里面的shape是eventEnable是true的
	      //如果用户有强制的需求让容器下的所有元素都 不可检测，可以调用
	      //DisplayObjectContainer的 setEventEnable() 方法

	      _this._eventEnabled = true;
	      return _this;
	    }

	    _createClass(DisplayObjectContainer, [{
	      key: "addChild",
	      value: function addChild(child, index) {
	        if (!child) {
	          return;
	        }

	        if (this.getChildIndex(child) != -1) {
	          child.parent = this;
	          return child;
	        }

	        if (child.parent) {
	          child.parent.removeChild(child);
	        }

	        if (index === undefined) {
	          index = this.children.length;
	        }
	        this.children.splice(index, 0, child);
	        child.parent = this;

	        if (this.heartBeat) {
	          this.heartBeat({
	            convertType: "children",
	            target: child,
	            src: this
	          });
	        }

	        if (this._afterAddChild) {
	          this._afterAddChild(child);
	        }
	        return child;
	      }
	    }, {
	      key: "addChildAt",
	      value: function addChildAt(child, index) {
	        return this.addChild(child, index);
	      }
	    }, {
	      key: "removeChild",
	      value: function removeChild(child) {
	        return this.removeChildAt(_mmvis._.indexOf(this.children, child));
	      }
	    }, {
	      key: "removeChildAt",
	      value: function removeChildAt(index) {
	        if (index < 0 || index > this.children.length - 1) {
	          return false;
	        }
	        var child = this.children[index];

	        if (child != null) {
	          child.parent = null;
	        }
	        this.children.splice(index, 1);

	        if (this.heartBeat) {
	          this.heartBeat({
	            convertType: "children",
	            target: child,
	            src: this
	          });
	        }

	        if (this._afterDelChild) {
	          this._afterDelChild(child, index);
	        }

	        return child;
	      }
	    }, {
	      key: "removeChildById",
	      value: function removeChildById(id) {
	        for (var i = 0, len = this.children.length; i < len; i++) {
	          if (this.children[i].id == id) {
	            return this.removeChildAt(i);
	          }
	        }

	        return false;
	      }
	    }, {
	      key: "removeAllChildren",
	      value: function removeAllChildren() {
	        while (this.children.length > 0) {
	          this.removeChildAt(0);
	        }
	      }
	    }, {
	      key: "destroy",
	      value: function destroy() {
	        /*
	        if( this.parent ){
	            this.parent.removeChild(this);
	            this.parent = null;
	        };
	        this.fire("destroy");
	        */
	        //依次销毁所有子元素
	        for (var i = 0, l = this.children.length; i < l; i++) {
	          this.getChildAt(i).destroy();
	          i--;
	          l--;
	        }

	        this._destroy();
	      }
	    }, {
	      key: "cleanAnimates",
	      value: function cleanAnimates() {
	        //依次销毁所有子元素
	        for (var i = 0, l = this.children.length; i < l; i++) {
	          this.getChildAt(i).cleanAnimates();
	        }

	        this._cleanAnimates();
	      }
	    }, {
	      key: "getChildById",
	      value: function getChildById(id, boolen) {
	        if (!boolen) {
	          for (var i = 0, len = this.children.length; i < len; i++) {
	            if (this.children[i].id == id) {
	              return this.children[i];
	            }
	          }
	        } else {
	          //深度查询
	          //TODO:暂时未实现
	          return null;
	        }

	        return null;
	      }
	    }, {
	      key: "getChildAt",
	      value: function getChildAt(index) {
	        if (index < 0 || index > this.children.length - 1) return null;
	        return this.children[index];
	      }
	    }, {
	      key: "getChildIndex",
	      value: function getChildIndex(child) {
	        return _mmvis._.indexOf(this.children, child);
	      }
	    }, {
	      key: "setChildIndex",
	      value: function setChildIndex(child, index) {
	        if (child.parent != this) return;

	        var oldIndex = _mmvis._.indexOf(this.children, child);

	        if (index == oldIndex) return;
	        this.children.splice(oldIndex, 1);
	        this.children.splice(index, 0, child);
	      }
	    }, {
	      key: "getNumChildren",
	      value: function getNumChildren() {
	        return this.children.length;
	      }
	    }, {
	      key: "getObjectsUnderPoint",
	      value: function getObjectsUnderPoint(point, num) {
	        var result = [];

	        for (var i = this.children.length - 1; i >= 0; i--) {
	          var child = this.children[i];

	          if (child == null || !child.context.$model.visible) {
	            //不管是集合还是非集合，如果不显示的都不接受点击检测
	            continue;
	          }

	          if (child instanceof DisplayObjectContainer) {
	            if (!child._eventEnabled) {
	              //容易一般默认 _eventEnabled == true; 但是如果被设置成了false
	              //如果容器设置了不接受事件检测，那么下面所有的元素都不接受事件检测
	              continue;
	            }

	            if (child.mouseChildren && child.getNumChildren() > 0) {
	              var objs = child.getObjectsUnderPoint(point);

	              if (objs.length > 0) {
	                result = result.concat(objs);
	              }
	            }
	          } else {
	            if (!child._eventEnabled && !child.dragEnabled) {
	              continue;
	            }

	            if (child.getChildInPoint(point)) {
	              result.push(child);

	              if (num != undefined && !isNaN(num)) {
	                if (result.length == num) {
	                  return result;
	                }
	              }
	            }
	          }
	        }

	        return result;
	      }
	    }]);

	    return DisplayObjectContainer;
	  }(_DisplayObject3["default"]);

	  exports.default = DisplayObjectContainer;
	});
	});

	unwrapExports(DisplayObjectContainer);

	var Stage = createCommonjsModule(function (module, exports) {

	(function (global, factory) {
	  {
	    factory(exports, DisplayObjectContainer, utils);
	  }
	})(void 0, function (exports, _DisplayObjectContainer, _index) {

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	  exports.default = undefined;

	  var _DisplayObjectContainer2 = _interopRequireDefault(_DisplayObjectContainer);

	  var _index2 = _interopRequireDefault(_index);

	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      default: obj
	    };
	  }

	  function _typeof(obj) {
	    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
	      _typeof = function _typeof(obj) {
	        return typeof obj;
	      };
	    } else {
	      _typeof = function _typeof(obj) {
	        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	      };
	    }

	    return _typeof(obj);
	  }

	  function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  }

	  function _defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  function _createClass(Constructor, protoProps, staticProps) {
	    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) _defineProperties(Constructor, staticProps);
	    return Constructor;
	  }

	  function _possibleConstructorReturn(self, call) {
	    if (call && (_typeof(call) === "object" || typeof call === "function")) {
	      return call;
	    }

	    return _assertThisInitialized(self);
	  }

	  function _assertThisInitialized(self) {
	    if (self === void 0) {
	      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }

	    return self;
	  }

	  function _getPrototypeOf(o) {
	    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
	      return o.__proto__ || Object.getPrototypeOf(o);
	    };
	    return _getPrototypeOf(o);
	  }

	  function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	      throw new TypeError("Super expression must either be null or a function");
	    }

	    subClass.prototype = Object.create(superClass && superClass.prototype, {
	      constructor: {
	        value: subClass,
	        writable: true,
	        configurable: true
	      }
	    });
	    if (superClass) _setPrototypeOf(subClass, superClass);
	  }

	  function _setPrototypeOf(o, p) {
	    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
	      o.__proto__ = p;
	      return o;
	    };

	    return _setPrototypeOf(o, p);
	  }

	  var Stage = function (_DisplayObjectContain) {
	    _inherits(Stage, _DisplayObjectContain);

	    function Stage(opt) {
	      var _this;

	      _classCallCheck(this, Stage);

	      opt.type = "stage";
	      _this = _possibleConstructorReturn(this, _getPrototypeOf(Stage).call(this, opt));
	      _this.canvas = null;
	      _this.ctx = null; //渲染的时候由renderer决定,这里不做初始值
	      //stage正在渲染中

	      _this.stageRending = false;
	      _this._isReady = false;
	      return _this;
	    } //由canvax的afterAddChild 回调


	    _createClass(Stage, [{
	      key: "initStage",
	      value: function initStage(canvas, width, height) {
	        var self = this;
	        self.canvas = canvas;
	        var model = self.context;
	        model.width = width;
	        model.height = height;
	        model.scaleX = _index2["default"]._devicePixelRatio;
	        model.scaleY = _index2["default"]._devicePixelRatio;
	        self._isReady = true;
	      }
	    }, {
	      key: "heartBeat",
	      value: function heartBeat(opt) {
	        //shape , name , value , preValue 
	        //displayList中某个属性改变了
	        if (!this._isReady) {
	          //在stage还没初始化完毕的情况下，无需做任何处理
	          return;
	        }
	        opt || (opt = {}); //如果opt为空，说明就是无条件刷新

	        opt.stage = this; //TODO临时先这么处理

	        this.parent && this.parent.heartBeat(opt);
	      }
	    }]);

	    return Stage;
	  }(_DisplayObjectContainer2["default"]);

	  exports.default = Stage;
	});
	});

	unwrapExports(Stage);

	var SystemRenderer = createCommonjsModule(function (module, exports) {

	(function (global, factory) {
	  {
	    factory(exports, _const, settings, AnimationFrame, utils, mmvis);
	  }
	})(void 0, function (exports, _const, _settings, _AnimationFrame, _index, _mmvis) {

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	  exports.default = undefined;

	  var _settings2 = _interopRequireDefault(_settings);

	  var _AnimationFrame2 = _interopRequireDefault(_AnimationFrame);

	  var _index2 = _interopRequireDefault(_index);

	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      default: obj
	    };
	  }

	  function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  }

	  function _defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  function _createClass(Constructor, protoProps, staticProps) {
	    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) _defineProperties(Constructor, staticProps);
	    return Constructor;
	  }

	  var SystemRenderer = function () {
	    function SystemRenderer() {
	      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _const.RENDERER_TYPE.UNKNOWN;
	      var app = arguments.length > 1 ? arguments[1] : undefined;
	      var options = arguments.length > 2 ? arguments[2] : undefined;

	      _classCallCheck(this, SystemRenderer);

	      this.type = type; //2canvas,1webgl

	      this.app = app;

	      if (options) {
	        for (var i in _settings2["default"].RENDER_OPTIONS) {
	          if (typeof options[i] === 'undefined') {
	            options[i] = _settings2["default"].RENDER_OPTIONS[i];
	          }
	        }
	      } else {
	        options = _settings2["default"].RENDER_OPTIONS;
	      }

	      this.options = options;
	      this.requestAid = null;
	      this._heartBeat = false; //心跳，默认为false，即false的时候引擎处于静默状态 true则启动渲染

	      this._preRenderTime = 0;
	    } //如果引擎处于静默状态的话，就会启动


	    _createClass(SystemRenderer, [{
	      key: "startEnter",
	      value: function startEnter() {
	        var self = this;

	        if (!self.requestAid) {
	          self.requestAid = _AnimationFrame2["default"].registFrame({
	            id: "enterFrame",
	            //同时肯定只有一个enterFrame的task
	            task: function task() {
	              self.enterFrame.apply(self);
	            }
	          });
	        }
	      }
	    }, {
	      key: "enterFrame",
	      value: function enterFrame() {
	        var self = this; //不管怎么样，enterFrame执行了就要把
	        //requestAid null 掉

	        self.requestAid = null;
	        _index2["default"].now = new Date().getTime();

	        if (self._heartBeat) {
	          //var _begin = new Date().getTime();
	          this.app.children.length && self.render(this.app); //var _end = new Date().getTime();
	          //$(document.body).append( "<br />render："+ (_end - _begin) );

	          self._heartBeat = false; //渲染完了，打上最新时间挫

	          self._preRenderTime = new Date().getTime();
	        }
	      }
	    }, {
	      key: "_convertCanvax",
	      value: function _convertCanvax(opt) {
	        var me = this;

	        _mmvis._.each(me.app.children, function (stage) {
	          stage.context[opt.name] = opt.value;
	        });
	      }
	    }, {
	      key: "heartBeat",
	      value: function heartBeat(opt) {
	        //displayList中某个属性改变了
	        var self = this;

	        if (opt) {
	          //心跳包有两种，一种是某元素的可视属性改变了。一种是children有变动
	          //分别对应convertType  为 context  and children
	          if (opt.convertType == "context") {
	            var stage = opt.stage;
	            var shape = opt.shape;
	            var name = opt.name;
	            var value = opt.value;
	            var preValue = opt.preValue;

	            if (shape.type == "canvax") {
	              self._convertCanvax(opt);
	            } else {
	              if (!self.app.convertStages[stage.id]) {
	                self.app.convertStages[stage.id] = {
	                  stage: stage,
	                  convertShapes: {}
	                };
	              }

	              if (shape) {
	                if (!self.app.convertStages[stage.id].convertShapes[shape.id]) {
	                  self.app.convertStages[stage.id].convertShapes[shape.id] = {
	                    shape: shape,
	                    convertType: opt.convertType
	                  };
	                } else {
	                  //如果已经上报了该 shape 的心跳。
	                  return;
	                }
	              }
	            }
	          }

	          if (opt.convertType == "children") {
	            //元素结构变化，比如addchild removeChild等
	            var target = opt.target;
	            var stage = opt.src.getStage();

	            if (stage || target.type == "stage") {
	              //如果操作的目标元素是Stage
	              stage = stage || target;

	              if (!self.app.convertStages[stage.id]) {
	                self.app.convertStages[stage.id] = {
	                  stage: stage,
	                  convertShapes: {}
	                };
	              }
	            }
	          }

	          if (!opt.convertType) {
	            //无条件要求刷新
	            var stage = opt.stage;

	            if (!self.app.convertStages[stage.id]) {
	              self.app.convertStages[stage.id] = {
	                stage: stage,
	                convertShapes: {}
	              };
	            }
	          }
	        } else {
	          //无条件要求全部刷新，一般用在resize等。
	          _mmvis._.each(self.app.children, function (stage, i) {
	            self.app.convertStages[stage.id] = {
	              stage: stage,
	              convertShapes: {}
	            };
	          });
	        }

	        if (!self._heartBeat) {
	          //如果发现引擎在静默状态，那么就唤醒引擎
	          self._heartBeat = true;
	          self.startEnter();
	        } else {
	          //否则智慧继续确认心跳
	          self._heartBeat = true;
	        }
	      }
	    }]);

	    return SystemRenderer;
	  }();

	  exports.default = SystemRenderer;
	});
	});

	unwrapExports(SystemRenderer);

	var GraphicsRenderer = createCommonjsModule(function (module, exports) {

	(function (global, factory) {
	  {
	    factory(exports, _const);
	  }
	})(void 0, function (exports, _const) {

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	  exports.default = undefined;

	  function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  }

	  function _defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  function _createClass(Constructor, protoProps, staticProps) {
	    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) _defineProperties(Constructor, staticProps);
	    return Constructor;
	  }

	  var CanvasGraphicsRenderer = function () {
	    function CanvasGraphicsRenderer(renderer) {
	      _classCallCheck(this, CanvasGraphicsRenderer);

	      this.renderer = renderer;
	    }
	    /**
	    * @param displayObject
	    * @stage 也可以displayObject.getStage()获取。
	    */


	    _createClass(CanvasGraphicsRenderer, [{
	      key: "render",
	      value: function render(displayObject, stage, globalAlpha, isClip) {
	        var renderer = this.renderer;
	        var graphicsData = displayObject.graphics.graphicsData;
	        var ctx = stage.ctx;

	        for (var i = 0; i < graphicsData.length; i++) {
	          var data = graphicsData[i];
	          var shape = data.shape;
	          var fillStyle = data.fillStyle;
	          var strokeStyle = data.strokeStyle;
	          var fill = data.hasFill() && data.fillAlpha && !isClip;
	          var line = data.hasLine() && data.strokeAlpha && !isClip;
	          ctx.lineWidth = data.lineWidth;

	          if (data.type === _const.SHAPES.POLY) {
	            //只第一次需要beginPath()
	            ctx.beginPath();
	            this.renderPolygon(shape.points, shape.closed, ctx, isClip);

	            if (fill) {
	              ctx.globalAlpha = data.fillAlpha * globalAlpha;
	              ctx.fillStyle = fillStyle;
	              ctx.fill();
	            }

	            if (line) {
	              ctx.globalAlpha = data.strokeAlpha * globalAlpha;
	              ctx.strokeStyle = strokeStyle;
	              ctx.stroke();
	            }
	          } else if (data.type === _const.SHAPES.RECT) {
	            if (isClip) {
	              //ctx.beginPath();
	              //rect本身已经是个close的path
	              ctx.rect(shape.x, shape.y, shape.width, shape.height); //ctx.closePath();
	            }

	            if (fill) {
	              ctx.globalAlpha = data.fillAlpha * globalAlpha;
	              ctx.fillStyle = fillStyle;
	              ctx.fillRect(shape.x, shape.y, shape.width, shape.height);
	            }

	            if (line) {
	              ctx.globalAlpha = data.strokeAlpha * globalAlpha;
	              ctx.strokeStyle = strokeStyle;
	              ctx.strokeRect(shape.x, shape.y, shape.width, shape.height);
	            }
	          } else if (data.type === _const.SHAPES.CIRC) {
	            // TODO - 这里应该可以不需要走graphics，而直接设置好radius
	            ctx.beginPath();
	            ctx.arc(shape.x, shape.y, shape.radius, 0, 2 * Math.PI);
	            ctx.closePath();

	            if (fill) {
	              ctx.globalAlpha = data.fillAlpha * globalAlpha;
	              ctx.fillStyle = fillStyle;
	              ctx.fill();
	            }

	            if (line) {
	              ctx.globalAlpha = data.strokeAlpha * globalAlpha;
	              ctx.strokeStyle = strokeStyle;
	              ctx.stroke();
	            }
	          } else if (data.type === _const.SHAPES.ELIP) {
	            var w = shape.width * 2;
	            var h = shape.height * 2;
	            var x = shape.x - w / 2;
	            var y = shape.y - h / 2;
	            ctx.beginPath();
	            var kappa = 0.5522848;
	            var ox = w / 2 * kappa; // control point offset horizontal

	            var oy = h / 2 * kappa; // control point offset vertical

	            var xe = x + w; // x-end

	            var ye = y + h; // y-end

	            var xm = x + w / 2; // x-middle

	            var ym = y + h / 2; // y-middle

	            ctx.moveTo(x, ym);
	            ctx.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
	            ctx.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
	            ctx.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
	            ctx.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
	            ctx.closePath();

	            if (fill) {
	              ctx.globalAlpha = data.fillAlpha * globalAlpha;
	              ctx.fillStyle = fillStyle;
	              ctx.fill();
	            }

	            if (line) {
	              ctx.globalAlpha = data.strokeAlpha * globalAlpha;
	              ctx.strokeStyle = strokeStyle;
	              ctx.stroke();
	            }
	          }
	        }
	      }
	    }, {
	      key: "renderPolygon",
	      value: function renderPolygon(points, close, ctx, isClip) {
	        ctx.moveTo(points[0], points[1]);

	        for (var j = 1; j < points.length / 2; ++j) {
	          ctx.lineTo(points[j * 2], points[j * 2 + 1]);
	        }

	        if (close || isClip) {
	          ctx.closePath();
	        }
	      }
	    }]);

	    return CanvasGraphicsRenderer;
	  }();

	  exports.default = CanvasGraphicsRenderer;
	});
	});

	unwrapExports(GraphicsRenderer);

	var CanvasRenderer = createCommonjsModule(function (module, exports) {

	(function (global, factory) {
	  {
	    factory(exports, SystemRenderer, _const, GraphicsRenderer, mmvis);
	  }
	})(void 0, function (exports, _SystemRenderer2, _const, _GraphicsRenderer, _mmvis) {

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	  exports.default = undefined;

	  var _SystemRenderer3 = _interopRequireDefault(_SystemRenderer2);

	  var _GraphicsRenderer2 = _interopRequireDefault(_GraphicsRenderer);

	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      default: obj
	    };
	  }

	  function _typeof(obj) {
	    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
	      _typeof = function _typeof(obj) {
	        return typeof obj;
	      };
	    } else {
	      _typeof = function _typeof(obj) {
	        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	      };
	    }

	    return _typeof(obj);
	  }

	  function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  }

	  function _defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  function _createClass(Constructor, protoProps, staticProps) {
	    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) _defineProperties(Constructor, staticProps);
	    return Constructor;
	  }

	  function _possibleConstructorReturn(self, call) {
	    if (call && (_typeof(call) === "object" || typeof call === "function")) {
	      return call;
	    }

	    return _assertThisInitialized(self);
	  }

	  function _getPrototypeOf(o) {
	    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
	      return o.__proto__ || Object.getPrototypeOf(o);
	    };
	    return _getPrototypeOf(o);
	  }

	  function _assertThisInitialized(self) {
	    if (self === void 0) {
	      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }

	    return self;
	  }

	  function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	      throw new TypeError("Super expression must either be null or a function");
	    }

	    subClass.prototype = Object.create(superClass && superClass.prototype, {
	      constructor: {
	        value: subClass,
	        writable: true,
	        configurable: true
	      }
	    });
	    if (superClass) _setPrototypeOf(subClass, superClass);
	  }

	  function _setPrototypeOf(o, p) {
	    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
	      o.__proto__ = p;
	      return o;
	    };

	    return _setPrototypeOf(o, p);
	  }

	  var CanvasRenderer = function (_SystemRenderer) {
	    _inherits(CanvasRenderer, _SystemRenderer);

	    function CanvasRenderer(app) {
	      var _this;

	      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	      _classCallCheck(this, CanvasRenderer);

	      _this = _possibleConstructorReturn(this, _getPrototypeOf(CanvasRenderer).call(this, _const.RENDERER_TYPE.CANVAS, app, options));
	      _this.CGR = new _GraphicsRenderer2["default"](_assertThisInitialized(_this));
	      return _this;
	    }

	    _createClass(CanvasRenderer, [{
	      key: "render",
	      value: function render(app) {
	        var me = this;
	        me.app = app;

	        _mmvis._.each(_mmvis._.values(app.convertStages), function (convertStage) {
	          me.renderStage(convertStage.stage);
	        });

	        app.convertStages = {};
	      }
	    }, {
	      key: "renderStage",
	      value: function renderStage(stage) {
	        if (!stage.ctx) {
	          stage.ctx = stage.canvas.getContext("2d");
	        }

	        stage.stageRending = true;
	        stage.setWorldTransform();

	        this._clear(stage);

	        this._render(stage, stage, stage.context.globalAlpha);

	        stage.stageRending = false;
	      }
	    }, {
	      key: "_render",
	      value: function _render(stage, displayObject, globalAlpha) {
	        var ctx = stage.ctx;

	        if (!ctx) {
	          return;
	        }
	        var $MC = displayObject.context.$model;

	        if (!displayObject.worldTransform) {
	          //第一次在舞台中渲染
	          displayObject.fire("render");
	        }

	        if (!displayObject.worldTransform || displayObject._transformChange || displayObject.parent && displayObject.parent._transformChange) {
	          displayObject.setWorldTransform();
	          displayObject.fire("transform");
	          displayObject._transformChange = true;
	        }
	        globalAlpha *= $MC.globalAlpha;

	        if (!$MC.visible || displayObject.isClip) {
	          return;
	        }
	        var worldMatrixArr = displayObject.worldTransform.toArray();

	        if (worldMatrixArr) {
	          ctx.setTransform.apply(ctx, worldMatrixArr);
	        } else {
	          //如果这个displayObject的世界矩阵有问题，那么就不绘制了
	          return;
	        }
	        var isClipSave = false;

	        if (displayObject.clip && displayObject.clip.graphics) {
	          //如果这个对象有一个裁剪路径对象，那么就绘制这个裁剪路径
	          var _clip = displayObject.clip;
	          ctx.save();
	          isClipSave = true;

	          if (!_clip.worldTransform || _clip._transformChange || _clip.parent._transformChange) {
	            _clip.setWorldTransform();

	            _clip._transformChange = true;
	          }
	          ctx.setTransform.apply(ctx, _clip.worldTransform.toArray()); //如果 graphicsData.length==0 的情况下才需要执行_draw来组织graphics数据

	          if (!_clip.graphics.graphicsData.length) {
	            //当渲染器开始渲染app的时候，app下面的所有displayObject都已经准备好了对应的世界矩阵
	            _clip._draw(_clip.graphics); //_draw会完成绘制准备好 graphicsData

	          }
	          this.CGR.render(_clip, stage, globalAlpha, isClipSave);
	          _clip._transformChange = false;
	          ctx.clip();
	        }

	        if (displayObject.graphics) {
	          //如果 graphicsData.length==0 的情况下才需要执行_draw来组织 graphics 数据
	          if (!displayObject.graphics.graphicsData.length) {
	            //当渲染器开始渲染app的时候，app下面的所有displayObject都已经准备好了对应的世界矩阵
	            displayObject._draw(displayObject.graphics); //_draw会完成绘制准备好 graphicsData

	          }
	          //事件检测的时候需要用到graphics.graphicsData

	          if (!!globalAlpha) {
	            //默认要设置为实线
	            ctx.setLineDash([]); //然后如果发现这个描边非实线的话，就设置为虚线

	            if ($MC.lineType && $MC.lineType != 'solid') {
	              ctx.setLineDash($MC.lineDash);
	            }
	            this.CGR.render(displayObject, stage, globalAlpha);
	          }
	        }

	        if (displayObject.type == "text") {
	          //如果是文本
	          displayObject.render(ctx, globalAlpha);
	        }

	        if (displayObject.children) {
	          for (var i = 0, len = displayObject.children.length; i < len; i++) {
	            this._render(stage, displayObject.children[i], globalAlpha);
	          }
	        }
	        displayObject._transformChange = false;

	        if (isClipSave) {
	          //如果这个对象有裁剪对象， 则要恢复，裁剪之前的环境
	          ctx.restore();
	        }
	      }
	    }, {
	      key: "_clear",
	      value: function _clear(stage) {
	        var ctx = stage.ctx;
	        ctx.setTransform.apply(ctx, stage.worldTransform.toArray());
	        ctx.clearRect(0, 0, this.app.width, this.app.height);
	      }
	    }]);

	    return CanvasRenderer;
	  }(_SystemRenderer3["default"]);

	  exports.default = CanvasRenderer;
	});
	});

	unwrapExports(CanvasRenderer);

	var autoRenderer = createCommonjsModule(function (module, exports) {

	(function (global, factory) {
	  {
	    factory(exports, CanvasRenderer);
	  }
	})(void 0, function (exports, _CanvasRenderer) {

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	  exports.default = autoRenderer;

	  var _CanvasRenderer2 = _interopRequireDefault(_CanvasRenderer);

	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      default: obj
	    };
	  }

	  //import WebGLRenderer from './webgl/WebGLRenderer';
	  function autoRenderer(app, options) {
	    return new _CanvasRenderer2["default"](app, options);
	    /*
	       if (app.webGL && utils.isWebGLSupported())
	       {
	           return new WebGLRenderer( app , options);
	       };
	       return new CanvasRenderer( app , options);
	       */
	  }
	});
	});

	unwrapExports(autoRenderer);

	var Application = createCommonjsModule(function (module, exports) {

	(function (global, factory) {
	  {
	    factory(exports, utils, DisplayObjectContainer, Stage, autoRenderer, Matrix, mmvis);
	  }
	})(void 0, function (exports, _index, _DisplayObjectContainer, _Stage, _autoRenderer, _Matrix, _mmvis) {

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	  exports.default = undefined;

	  var _index2 = _interopRequireDefault(_index);

	  var _DisplayObjectContainer2 = _interopRequireDefault(_DisplayObjectContainer);

	  var _Stage2 = _interopRequireDefault(_Stage);

	  var _autoRenderer2 = _interopRequireDefault(_autoRenderer);

	  var _Matrix2 = _interopRequireDefault(_Matrix);

	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      default: obj
	    };
	  }

	  function _typeof(obj) {
	    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
	      _typeof = function _typeof(obj) {
	        return typeof obj;
	      };
	    } else {
	      _typeof = function _typeof(obj) {
	        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	      };
	    }

	    return _typeof(obj);
	  }

	  function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  }

	  function _defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  function _createClass(Constructor, protoProps, staticProps) {
	    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) _defineProperties(Constructor, staticProps);
	    return Constructor;
	  }

	  function _possibleConstructorReturn(self, call) {
	    if (call && (_typeof(call) === "object" || typeof call === "function")) {
	      return call;
	    }

	    return _assertThisInitialized(self);
	  }

	  function _getPrototypeOf(o) {
	    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
	      return o.__proto__ || Object.getPrototypeOf(o);
	    };
	    return _getPrototypeOf(o);
	  }

	  function _assertThisInitialized(self) {
	    if (self === void 0) {
	      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }

	    return self;
	  }

	  function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	      throw new TypeError("Super expression must either be null or a function");
	    }

	    subClass.prototype = Object.create(superClass && superClass.prototype, {
	      constructor: {
	        value: subClass,
	        writable: true,
	        configurable: true
	      }
	    });
	    if (superClass) _setPrototypeOf(subClass, superClass);
	  }

	  function _setPrototypeOf(o, p) {
	    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
	      o.__proto__ = p;
	      return o;
	    };

	    return _setPrototypeOf(o, p);
	  }

	  var Application = function (_DisplayObjectContain) {
	    _inherits(Application, _DisplayObjectContain);

	    function Application(opt) {
	      var _this;

	      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	      _classCallCheck(this, Application);

	      opt.type = "canvax";
	      _this = _possibleConstructorReturn(this, _getPrototypeOf(Application).call(this, opt));
	      _this._cid = new Date().getTime() + "_" + Math.floor(Math.random() * 100);
	      _this.el = _mmvis.$.query(opt.el);
	      _this.width = parseInt("width" in opt || _this.el.offsetWidth, 10);
	      _this.height = parseInt("height" in opt || _this.el.offsetHeight, 10);

	      var viewObj = _mmvis.$.createView(_this.width, _this.height, _this._cid);

	      _this.view = viewObj.view;
	      _this.stageView = viewObj.stageView;
	      _this.domView = viewObj.domView;
	      _this.el.innerHTML = "";

	      _this.el.appendChild(_this.view);

	      _this.viewOffset = _mmvis.$.offset(_this.view);
	      _this.lastGetRO = 0; //最后一次获取 viewOffset 的时间

	      _this.webGL = opt.webGL;
	      _this.renderer = (0, _autoRenderer2["default"])(_assertThisInitialized(_this), options);
	      _this.event = null; //该属性在systenRender里面操作，每帧由心跳上报的 需要重绘的stages 列表

	      _this.convertStages = {};
	      _this.context.$model.width = _this.width;
	      _this.context.$model.height = _this.height; //然后创建一个用于绘制激活 shape 的 stage 到activation

	      _this._bufferStage = null;

	      _this._creatHoverStage(); //设置一个默认的matrix做为app的世界根节点坐标


	      _this.worldTransform = new _Matrix2["default"]().identity();
	      return _this;
	    }

	    _createClass(Application, [{
	      key: "registEvent",
	      value: function registEvent(opt) {
	        //初始化事件委托到root元素上面
	        this.event = new _mmvis.event.Handler(this, opt);
	        this.event.init();
	        return this.event;
	      }
	    }, {
	      key: "destroy",
	      value: function destroy() {
	        for (var i = 0, l = this.children.length; i < l; i++) {
	          var stage = this.children[i];
	          stage.destroy();
	          stage.canvas = null;
	          stage.ctx = null;
	          stage = null;
	          i--, l--;
	        }

	        try {
	          this.view.removeChild(this.stageView);
	          this.view.removeChild(this.domView);
	          this.el.removeChild(this.view);
	        } catch (e) {}
	        this.el.innerHTML = "";
	        this.event = null;
	        this._bufferStage = null;
	      }
	    }, {
	      key: "resize",
	      value: function resize(opt) {
	        //重新设置坐标系统 高宽 等。
	        this.width = parseInt(opt && "width" in opt || this.el.offsetWidth, 10);
	        this.height = parseInt(opt && "height" in opt || this.el.offsetHeight, 10); //this.view  width height都一直设置为100%
	        //this.view.style.width  = this.width +"px";
	        //this.view.style.height = this.height+"px";

	        this.viewOffset = _mmvis.$.offset(this.view);
	        this.context.$model.width = this.width;
	        this.context.$model.height = this.height;
	        var me = this;

	        var reSizeCanvas = function reSizeCanvas(canvas) {
	          canvas.style.width = me.width + "px";
	          canvas.style.height = me.height + "px";
	          canvas.setAttribute("width", me.width * _index2["default"]._devicePixelRatio);
	          canvas.setAttribute("height", me.height * _index2["default"]._devicePixelRatio);
	        };

	        _mmvis._.each(this.children, function (s, i) {
	          s.context.$model.width = me.width;
	          s.context.$model.height = me.height;
	          reSizeCanvas(s.canvas);
	        });

	        this.stageView.style.width = this.width + "px";
	        this.stageView.style.height = this.height + "px";
	        this.domView.style.width = this.width + "px";
	        this.domView.style.height = this.height + "px";
	        this.heartBeat();
	      }
	    }, {
	      key: "getHoverStage",
	      value: function getHoverStage() {
	        return this._bufferStage;
	      }
	    }, {
	      key: "_creatHoverStage",
	      value: function _creatHoverStage() {
	        //TODO:创建stage的时候一定要传入width height  两个参数
	        this._bufferStage = new _Stage2["default"]({
	          id: "activCanvas" + new Date().getTime(),
	          context: {
	            width: this.context.$model.width,
	            height: this.context.$model.height
	          }
	        }); //该stage不参与事件检测

	        this._bufferStage._eventEnabled = false;
	        this.addChild(this._bufferStage);
	      }
	    }, {
	      key: "updateViewOffset",
	      value: function updateViewOffset() {
	        var now = new Date().getTime();

	        if (now - this.lastGetRO > 1000) {
	          this.viewOffset = _mmvis.$.offset(this.view);
	          this.lastGetRO = now;
	        }
	      }
	    }, {
	      key: "_afterAddChild",
	      value: function _afterAddChild(stage, index) {
	        var canvas;

	        if (!stage.canvas) {
	          canvas = _mmvis.$.createCanvas(this.context.$model.width, this.context.$model.height, stage.id);
	        } else {
	          canvas = stage.canvas;
	        }

	        if (this.children.length == 1) {
	          this.stageView.appendChild(canvas);
	        } else if (this.children.length > 1) {
	          if (index === undefined) {
	            //如果没有指定位置，那么就放到 _bufferStage 的下面。
	            this.stageView.insertBefore(canvas, this._bufferStage.canvas);
	          } else {
	            //如果有指定的位置，那么就指定的位置来
	            if (index >= this.children.length - 1) {
	              this.stageView.appendChild(canvas);
	            } else {
	              this.stageView.insertBefore(canvas, this.children[index].canvas);
	            }
	          }
	        }

	        _index2["default"].initElement(canvas);

	        stage.initStage(canvas, this.context.$model.width, this.context.$model.height);
	      }
	    }, {
	      key: "_afterDelChild",
	      value: function _afterDelChild(stage) {
	        try {
	          this.stageView.removeChild(stage.canvas);
	        } catch (error) {}
	      }
	    }, {
	      key: "heartBeat",
	      value: function heartBeat(opt) {
	        if (this.children.length > 0) {
	          this.renderer.heartBeat(opt);
	        }
	      }
	    }, {
	      key: "toDataURL",
	      value: function toDataURL() {
	        var canvas = _mmvis.$.createCanvas(this.width, this.height, "curr_base64_canvas");

	        var ctx = canvas.getContext("2d");

	        _mmvis._.each(this.children, function (stage) {
	          ctx.drawImage(stage.canvas, 0, 0);
	        });

	        return canvas.toDataURL();
	      }
	    }]);

	    return Application;
	  }(_DisplayObjectContainer2["default"]);

	  exports.default = Application;
	});
	});

	unwrapExports(Application);

	var Sprite = createCommonjsModule(function (module, exports) {

	(function (global, factory) {
	  {
	    factory(exports, DisplayObjectContainer, utils);
	  }
	})(void 0, function (exports, _DisplayObjectContainer, _index) {

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	  exports.default = undefined;

	  var _DisplayObjectContainer2 = _interopRequireDefault(_DisplayObjectContainer);

	  var _index2 = _interopRequireDefault(_index);

	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      default: obj
	    };
	  }

	  function _typeof(obj) {
	    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
	      _typeof = function _typeof(obj) {
	        return typeof obj;
	      };
	    } else {
	      _typeof = function _typeof(obj) {
	        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	      };
	    }

	    return _typeof(obj);
	  }

	  function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  }

	  function _possibleConstructorReturn(self, call) {
	    if (call && (_typeof(call) === "object" || typeof call === "function")) {
	      return call;
	    }

	    return _assertThisInitialized(self);
	  }

	  function _assertThisInitialized(self) {
	    if (self === void 0) {
	      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }

	    return self;
	  }

	  function _getPrototypeOf(o) {
	    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
	      return o.__proto__ || Object.getPrototypeOf(o);
	    };
	    return _getPrototypeOf(o);
	  }

	  function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	      throw new TypeError("Super expression must either be null or a function");
	    }

	    subClass.prototype = Object.create(superClass && superClass.prototype, {
	      constructor: {
	        value: subClass,
	        writable: true,
	        configurable: true
	      }
	    });
	    if (superClass) _setPrototypeOf(subClass, superClass);
	  }

	  function _setPrototypeOf(o, p) {
	    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
	      o.__proto__ = p;
	      return o;
	    };

	    return _setPrototypeOf(o, p);
	  }

	  var Sprite = function (_DisplayObjectContain) {
	    _inherits(Sprite, _DisplayObjectContain);

	    function Sprite(opt) {
	      _classCallCheck(this, Sprite);

	      opt = _index2["default"].checkOpt(opt);
	      opt.type = "sprite";
	      return _possibleConstructorReturn(this, _getPrototypeOf(Sprite).call(this, opt));
	    }

	    return Sprite;
	  }(_DisplayObjectContainer2["default"]);

	  exports.default = Sprite;
	});
	});

	unwrapExports(Sprite);

	var GraphicsData = createCommonjsModule(function (module, exports) {

	(function (global, factory) {
	  {
	    factory(exports);
	  }
	})(void 0, function (exports) {

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });

	  function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  }

	  function _defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  function _createClass(Constructor, protoProps, staticProps) {
	    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) _defineProperties(Constructor, staticProps);
	    return Constructor;
	  }

	  var GraphicsData = function () {
	    function GraphicsData(lineWidth, strokeStyle, strokeAlpha, fillStyle, fillAlpha, shape) {
	      _classCallCheck(this, GraphicsData);

	      this.lineWidth = lineWidth;
	      this.strokeStyle = strokeStyle;
	      this.strokeAlpha = strokeAlpha;
	      this.fillStyle = fillStyle;
	      this.fillAlpha = fillAlpha;
	      this.shape = shape;
	      this.type = shape.type;
	      this.holes = []; //这两个可以被后续修改， 具有一票否决权
	      //比如polygon的 虚线描边。必须在fill的poly上面设置line为false

	      this.fill = true;
	      this.line = true;
	    }

	    _createClass(GraphicsData, [{
	      key: "clone",
	      value: function clone() {
	        var cloneGraphicsData = new GraphicsData(this.lineWidth, this.strokeStyle, this.strokeAlpha, this.fillStyle, this.fillAlpha, this.shape);
	        cloneGraphicsData.fill = this.fill;
	        cloneGraphicsData.line = this.line;
	        return cloneGraphicsData;
	      }
	    }, {
	      key: "addHole",
	      value: function addHole(shape) {
	        this.holes.push(shape);
	      }
	    }, {
	      key: "synsStyle",
	      value: function synsStyle(style) {
	        //console.log("line:"+this.line+"__fill:"+this.fill)
	        //从shape中把绘图需要的style属性同步过来
	        if (this.line) {
	          this.lineWidth = style.lineWidth;
	          this.strokeStyle = style.strokeStyle;
	          this.strokeAlpha = style.strokeAlpha;
	        }

	        if (this.fill) {
	          this.fillStyle = style.fillStyle;
	          this.fillAlpha = style.fillAlpha;
	        }
	      }
	    }, {
	      key: "hasFill",
	      value: function hasFill() {
	        return this.fillStyle && this.fill && this.shape.closed !== undefined && this.shape.closed;
	      }
	    }, {
	      key: "hasLine",
	      value: function hasLine() {
	        return this.strokeStyle && this.lineWidth && this.line;
	      }
	    }, {
	      key: "destroy",
	      value: function destroy() {
	        this.shape = null;
	        this.holes = null;
	      }
	    }]);

	    return GraphicsData;
	  }();

	  exports.default = GraphicsData;
	});
	});

	unwrapExports(GraphicsData);

	var Arc = createCommonjsModule(function (module, exports) {

	(function (global, factory) {
	  {
	    factory(exports);
	  }
	})(void 0, function (exports) {

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	  var arcToSegmentsCache = {},
	      segmentToBezierCache = {},
	      boundsOfCurveCache = {},
	      _join = Array.prototype.join;
	  /* Adapted from http://dxr.mozilla.org/mozilla-central/source/content/svg/content/src/nsSVGPathDataParser.cpp
	   * by Andrea Bogazzi code is under MPL. if you don't have a copy of the license you can take it here
	   * http://mozilla.org/MPL/2.0/
	   */

	  function arcToSegments(toX, toY, rx, ry, large, sweep, rotateX) {
	    var argsString = _join.call(arguments);

	    if (arcToSegmentsCache[argsString]) {
	      return arcToSegmentsCache[argsString];
	    }

	    var PI = Math.PI,
	        th = rotateX * PI / 180,
	        sinTh = Math.sin(th),
	        cosTh = Math.cos(th),
	        fromX = 0,
	        fromY = 0;
	    rx = Math.abs(rx);
	    ry = Math.abs(ry);
	    var px = -cosTh * toX * 0.5 - sinTh * toY * 0.5,
	        py = -cosTh * toY * 0.5 + sinTh * toX * 0.5,
	        rx2 = rx * rx,
	        ry2 = ry * ry,
	        py2 = py * py,
	        px2 = px * px,
	        pl = rx2 * ry2 - rx2 * py2 - ry2 * px2,
	        root = 0;

	    if (pl < 0) {
	      var s = Math.sqrt(1 - pl / (rx2 * ry2));
	      rx *= s;
	      ry *= s;
	    } else {
	      root = (large === sweep ? -1.0 : 1.0) * Math.sqrt(pl / (rx2 * py2 + ry2 * px2));
	    }

	    var cx = root * rx * py / ry,
	        cy = -root * ry * px / rx,
	        cx1 = cosTh * cx - sinTh * cy + toX * 0.5,
	        cy1 = sinTh * cx + cosTh * cy + toY * 0.5,
	        mTheta = calcVectorAngle(1, 0, (px - cx) / rx, (py - cy) / ry),
	        dtheta = calcVectorAngle((px - cx) / rx, (py - cy) / ry, (-px - cx) / rx, (-py - cy) / ry);

	    if (sweep === 0 && dtheta > 0) {
	      dtheta -= 2 * PI;
	    } else if (sweep === 1 && dtheta < 0) {
	      dtheta += 2 * PI;
	    } // Convert into cubic bezier segments <= 90deg


	    var segments = Math.ceil(Math.abs(dtheta / PI * 2)),
	        result = [],
	        mDelta = dtheta / segments,
	        mT = 8 / 3 * Math.sin(mDelta / 4) * Math.sin(mDelta / 4) / Math.sin(mDelta / 2),
	        th3 = mTheta + mDelta;

	    for (var i = 0; i < segments; i++) {
	      result[i] = segmentToBezier(mTheta, th3, cosTh, sinTh, rx, ry, cx1, cy1, mT, fromX, fromY);
	      fromX = result[i][4];
	      fromY = result[i][5];
	      mTheta = th3;
	      th3 += mDelta;
	    }

	    arcToSegmentsCache[argsString] = result;
	    return result;
	  }

	  function segmentToBezier(th2, th3, cosTh, sinTh, rx, ry, cx1, cy1, mT, fromX, fromY) {
	    var argsString2 = _join.call(arguments);

	    if (segmentToBezierCache[argsString2]) {
	      return segmentToBezierCache[argsString2];
	    }

	    var costh2 = Math.cos(th2),
	        sinth2 = Math.sin(th2),
	        costh3 = Math.cos(th3),
	        sinth3 = Math.sin(th3),
	        toX = cosTh * rx * costh3 - sinTh * ry * sinth3 + cx1,
	        toY = sinTh * rx * costh3 + cosTh * ry * sinth3 + cy1,
	        cp1X = fromX + mT * (-cosTh * rx * sinth2 - sinTh * ry * costh2),
	        cp1Y = fromY + mT * (-sinTh * rx * sinth2 + cosTh * ry * costh2),
	        cp2X = toX + mT * (cosTh * rx * sinth3 + sinTh * ry * costh3),
	        cp2Y = toY + mT * (sinTh * rx * sinth3 - cosTh * ry * costh3);
	    segmentToBezierCache[argsString2] = [cp1X, cp1Y, cp2X, cp2Y, toX, toY];
	    return segmentToBezierCache[argsString2];
	  }
	  /*
	   * Private
	   */


	  function calcVectorAngle(ux, uy, vx, vy) {
	    var ta = Math.atan2(uy, ux),
	        tb = Math.atan2(vy, vx);

	    if (tb >= ta) {
	      return tb - ta;
	    } else {
	      return 2 * Math.PI - (ta - tb);
	    }
	  }
	  /**
	   * Draws arc
	   * @param {graphics} graphics
	   * @param {Number} fx
	   * @param {Number} fy
	   * @param {Array} coords
	   */


	  var drawArc = function drawArc(graphics, fx, fy, coords) {
	    var rx = coords[0],
	        ry = coords[1],
	        rot = coords[2],
	        large = coords[3],
	        sweep = coords[4],
	        tx = coords[5],
	        ty = coords[6],
	        segs = [[], [], [], []],
	        segsNorm = arcToSegments(tx - fx, ty - fy, rx, ry, large, sweep, rot);

	    for (var i = 0, len = segsNorm.length; i < len; i++) {
	      segs[i][0] = segsNorm[i][0] + fx;
	      segs[i][1] = segsNorm[i][1] + fy;
	      segs[i][2] = segsNorm[i][2] + fx;
	      segs[i][3] = segsNorm[i][3] + fy;
	      segs[i][4] = segsNorm[i][4] + fx;
	      segs[i][5] = segsNorm[i][5] + fy;
	      graphics.bezierCurveTo.apply(graphics, segs[i]);
	    }
	  };
	  /**
	   * Calculate bounding box of a elliptic-arc
	   * @param {Number} fx start point of arc
	   * @param {Number} fy
	   * @param {Number} rx horizontal radius
	   * @param {Number} ry vertical radius
	   * @param {Number} rot angle of horizontal axe
	   * @param {Number} large 1 or 0, whatever the arc is the big or the small on the 2 points
	   * @param {Number} sweep 1 or 0, 1 clockwise or counterclockwise direction
	   * @param {Number} tx end point of arc
	   * @param {Number} ty
	   */


	  var getBoundsOfArc = function getBoundsOfArc(fx, fy, rx, ry, rot, large, sweep, tx, ty) {
	    var fromX = 0,
	        fromY = 0,
	        bound,
	        bounds = [],
	        segs = arcToSegments(tx - fx, ty - fy, rx, ry, large, sweep, rot);

	    for (var i = 0, len = segs.length; i < len; i++) {
	      bound = getBoundsOfCurve(fromX, fromY, segs[i][0], segs[i][1], segs[i][2], segs[i][3], segs[i][4], segs[i][5]);
	      bounds.push({
	        x: bound[0].x + fx,
	        y: bound[0].y + fy
	      });
	      bounds.push({
	        x: bound[1].x + fx,
	        y: bound[1].y + fy
	      });
	      fromX = segs[i][4];
	      fromY = segs[i][5];
	    }

	    return bounds;
	  };
	  /**
	   * Calculate bounding box of a beziercurve
	   * @param {Number} x0 starting point
	   * @param {Number} y0
	   * @param {Number} x1 first control point
	   * @param {Number} y1
	   * @param {Number} x2 secondo control point
	   * @param {Number} y2
	   * @param {Number} x3 end of beizer
	   * @param {Number} y3
	   */
	  // taken from http://jsbin.com/ivomiq/56/edit  no credits available for that.


	  function getBoundsOfCurve(x0, y0, x1, y1, x2, y2, x3, y3) {
	    var argsString = _join.call(arguments);

	    if (boundsOfCurveCache[argsString]) {
	      return boundsOfCurveCache[argsString];
	    }

	    var sqrt = Math.sqrt,
	        min = Math.min,
	        max = Math.max,
	        abs = Math.abs,
	        tvalues = [],
	        bounds = [[], []],
	        a,
	        b,
	        c,
	        t,
	        t1,
	        t2,
	        b2ac,
	        sqrtb2ac;
	    b = 6 * x0 - 12 * x1 + 6 * x2;
	    a = -3 * x0 + 9 * x1 - 9 * x2 + 3 * x3;
	    c = 3 * x1 - 3 * x0;

	    for (var i = 0; i < 2; ++i) {
	      if (i > 0) {
	        b = 6 * y0 - 12 * y1 + 6 * y2;
	        a = -3 * y0 + 9 * y1 - 9 * y2 + 3 * y3;
	        c = 3 * y1 - 3 * y0;
	      }

	      if (abs(a) < 1e-12) {
	        if (abs(b) < 1e-12) {
	          continue;
	        }

	        t = -c / b;

	        if (0 < t && t < 1) {
	          tvalues.push(t);
	        }

	        continue;
	      }

	      b2ac = b * b - 4 * c * a;

	      if (b2ac < 0) {
	        continue;
	      }

	      sqrtb2ac = sqrt(b2ac);
	      t1 = (-b + sqrtb2ac) / (2 * a);

	      if (0 < t1 && t1 < 1) {
	        tvalues.push(t1);
	      }

	      t2 = (-b - sqrtb2ac) / (2 * a);

	      if (0 < t2 && t2 < 1) {
	        tvalues.push(t2);
	      }
	    }

	    var x,
	        y,
	        j = tvalues.length,
	        jlen = j,
	        mt;

	    while (j--) {
	      t = tvalues[j];
	      mt = 1 - t;
	      x = mt * mt * mt * x0 + 3 * mt * mt * t * x1 + 3 * mt * t * t * x2 + t * t * t * x3;
	      bounds[0][j] = x;
	      y = mt * mt * mt * y0 + 3 * mt * mt * t * y1 + 3 * mt * t * t * y2 + t * t * t * y3;
	      bounds[1][j] = y;
	    }

	    bounds[0][jlen] = x0;
	    bounds[1][jlen] = y0;
	    bounds[0][jlen + 1] = x3;
	    bounds[1][jlen + 1] = y3;
	    var result = [{
	      x: min.apply(null, bounds[0]),
	      y: min.apply(null, bounds[1])
	    }, {
	      x: max.apply(null, bounds[0]),
	      y: max.apply(null, bounds[1])
	    }];
	    boundsOfCurveCache[argsString] = result;
	    return result;
	  }

	  exports["default"] = {
	    drawArc: drawArc,
	    getBoundsOfCurve: getBoundsOfCurve,
	    getBoundsOfArc: getBoundsOfArc
	  };
	});
	});

	unwrapExports(Arc);

	var Rectangle = createCommonjsModule(function (module, exports) {

	(function (global, factory) {
	  {
	    factory(exports, _const);
	  }
	})(void 0, function (exports, _const) {

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	  exports.default = undefined;

	  function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  }

	  function _defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  function _createClass(Constructor, protoProps, staticProps) {
	    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) _defineProperties(Constructor, staticProps);
	    return Constructor;
	  }

	  var Rectangle = function () {
	    function Rectangle() {
	      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	      var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	      var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

	      _classCallCheck(this, Rectangle);

	      this.x = x;
	      this.y = y;
	      this.width = width;
	      this.height = height;
	      this.type = _const.SHAPES.RECT;
	      this.closed = true;
	    }

	    _createClass(Rectangle, [{
	      key: "clone",
	      value: function clone() {
	        return new Rectangle(this.x, this.y, this.width, this.height);
	      }
	    }, {
	      key: "copy",
	      value: function copy(rectangle) {
	        this.x = rectangle.x;
	        this.y = rectangle.y;
	        this.width = rectangle.width;
	        this.height = rectangle.height;
	        return this;
	      }
	    }, {
	      key: "contains",
	      value: function contains(x, y) {
	        /*
	        if (this.width <= 0 || this.height <= 0)
	        {
	            return false;
	        }
	        */
	        if (this.height * y < 0 || this.width * x < 0) {
	          return false;
	        }

	        if (x >= this.x && x <= this.x + this.width && (this.height >= 0 && y >= this.y && y <= this.y + this.height || this.height < 0 && y <= this.y && y >= this.y + this.height)) {
	          return true;
	        }

	        return false; //当x和 width , y和height都 为正或者都未负数的情况下，才可能在范围内
	      }
	    }]);

	    return Rectangle;
	  }();

	  exports.default = Rectangle;
	});
	});

	unwrapExports(Rectangle);

	var Circle = createCommonjsModule(function (module, exports) {

	(function (global, factory) {
	  {
	    factory(exports, Rectangle, _const);
	  }
	})(void 0, function (exports, _Rectangle, _const) {

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	  exports.default = undefined;

	  var _Rectangle2 = _interopRequireDefault(_Rectangle);

	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      default: obj
	    };
	  }

	  function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  }

	  function _defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  function _createClass(Constructor, protoProps, staticProps) {
	    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) _defineProperties(Constructor, staticProps);
	    return Constructor;
	  }

	  var Circle = function () {
	    function Circle() {
	      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	      var radius = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

	      _classCallCheck(this, Circle);

	      this.x = x;
	      this.y = y;
	      this.radius = radius;
	      this.type = _const.SHAPES.CIRC;
	      this.closed = true;
	    }

	    _createClass(Circle, [{
	      key: "clone",
	      value: function clone() {
	        return new Circle(this.x, this.y, this.radius);
	      }
	    }, {
	      key: "contains",
	      value: function contains(x, y) {
	        if (this.radius <= 0) {
	          return false;
	        }

	        var r2 = this.radius * this.radius;
	        var dx = this.x - x;
	        var dy = this.y - y;
	        dx *= dx;
	        dy *= dy;
	        return dx + dy <= r2;
	      }
	    }, {
	      key: "getBounds",
	      value: function getBounds() {
	        return new _Rectangle2["default"](this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
	      }
	    }]);

	    return Circle;
	  }();

	  exports.default = Circle;
	});
	});

	unwrapExports(Circle);

	var Ellipse = createCommonjsModule(function (module, exports) {

	(function (global, factory) {
	  {
	    factory(exports, Rectangle, _const);
	  }
	})(void 0, function (exports, _Rectangle, _const) {

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	  exports.default = undefined;

	  var _Rectangle2 = _interopRequireDefault(_Rectangle);

	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      default: obj
	    };
	  }

	  function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  }

	  function _defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  function _createClass(Constructor, protoProps, staticProps) {
	    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) _defineProperties(Constructor, staticProps);
	    return Constructor;
	  }

	  var Ellipse = function () {
	    function Ellipse() {
	      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	      var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	      var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

	      _classCallCheck(this, Ellipse);

	      this.x = x;
	      this.y = y;
	      this.width = width;
	      this.height = height;
	      this.type = _const.SHAPES.ELIP;
	      this.closed = true;
	    }

	    _createClass(Ellipse, [{
	      key: "clone",
	      value: function clone() {
	        return new Ellipse(this.x, this.y, this.width, this.height);
	      }
	    }, {
	      key: "contains",
	      value: function contains(x, y) {
	        if (this.width <= 0 || this.height <= 0) {
	          return false;
	        }

	        var normx = (x - this.x) / this.width;
	        var normy = (y - this.y) / this.height;
	        normx *= normx;
	        normy *= normy;
	        return normx + normy <= 1;
	      }
	    }, {
	      key: "getBounds",
	      value: function getBounds() {
	        return new _Rectangle2["default"](this.x - this.width, this.y - this.height, this.width, this.height);
	      }
	    }]);

	    return Ellipse;
	  }();

	  exports.default = Ellipse;
	});
	});

	unwrapExports(Ellipse);

	var Polygon = createCommonjsModule(function (module, exports) {

	(function (global, factory) {
	  {
	    factory(exports, _const);
	  }
	})(void 0, function (exports, _const) {

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	  exports.default = undefined;

	  function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  }

	  function _defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  function _createClass(Constructor, protoProps, staticProps) {
	    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) _defineProperties(Constructor, staticProps);
	    return Constructor;
	  }

	  var Polygon = function () {
	    function Polygon() {
	      for (var _len = arguments.length, points = new Array(_len), _key = 0; _key < _len; _key++) {
	        points[_key] = arguments[_key];
	      }

	      _classCallCheck(this, Polygon);

	      var point_0 = points[0];

	      if (Array.isArray(point_0)) {
	        points = point_0;
	      }

	      if (point_0 && "x" in point_0 && "y" in point_0) {
	        var p = [];

	        for (var i = 0, il = points.length; i < il; i++) {
	          p.push(points[i].x, points[i].y);
	        }

	        points = p;
	      }

	      this.closed = true;
	      this.points = points;
	      this.type = _const.SHAPES.POLY;
	    }

	    _createClass(Polygon, [{
	      key: "clone",
	      value: function clone() {
	        return new Polygon(this.points.slice());
	      }
	    }, {
	      key: "close",
	      value: function close() {
	        var points = this.points;

	        if (points[0] !== points[points.length - 2] || points[1] !== points[points.length - 1]) {
	          points.push(points[0], points[1]);
	        }

	        this.closed = true;
	      }
	    }, {
	      key: "contains",
	      value: function contains(x, y) {
	        return this._isInsidePolygon_WindingNumber(x, y);
	      }
	    }, {
	      key: "_isInsidePolygon_WindingNumber",
	      value: function _isInsidePolygon_WindingNumber(x, y) {
	        var points = this.points;
	        var wn = 0;

	        for (var shiftP, shift = points[1] > y, i = 3; i < points.length; i += 2) {
	          shiftP = shift;
	          shift = points[i] > y;

	          if (shiftP != shift) {
	            var n = (shiftP ? 1 : 0) - (shift ? 1 : 0);

	            if (n * ((points[i - 3] - x) * (points[i - 0] - y) - (points[i - 2] - y) * (points[i - 1] - x)) > 0) {
	              wn += n;
	            }
	          }
	        }
	        return wn;
	      }
	    }]);

	    return Polygon;
	  }();

	  exports.default = Polygon;
	});
	});

	unwrapExports(Polygon);

	var math = createCommonjsModule(function (module, exports) {

	(function (global, factory) {
	  {
	    factory(exports, Arc, Circle, Ellipse, Polygon, Rectangle);
	  }
	})(void 0, function (exports, _Arc, _Circle, _Ellipse, _Polygon, _Rectangle) {

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	  Object.defineProperty(exports, "Arc", {
	    enumerable: true,
	    get: function () {
	      return _interopRequireDefault(_Arc).default;
	    }
	  });
	  Object.defineProperty(exports, "Circle", {
	    enumerable: true,
	    get: function () {
	      return _interopRequireDefault(_Circle).default;
	    }
	  });
	  Object.defineProperty(exports, "Ellipse", {
	    enumerable: true,
	    get: function () {
	      return _interopRequireDefault(_Ellipse).default;
	    }
	  });
	  Object.defineProperty(exports, "Polygon", {
	    enumerable: true,
	    get: function () {
	      return _interopRequireDefault(_Polygon).default;
	    }
	  });
	  Object.defineProperty(exports, "Rectangle", {
	    enumerable: true,
	    get: function () {
	      return _interopRequireDefault(_Rectangle).default;
	    }
	  });

	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      default: obj
	    };
	  }
	});
	});

	unwrapExports(math);

	var bezierCurveTo = createCommonjsModule(function (module, exports) {

	(function (global, factory) {
	  {
	    factory(exports);
	  }
	})(void 0, function (exports) {

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	  exports.default = bezierCurveTo;

	  function bezierCurveTo(fromX, fromY, cpX, cpY, cpX2, cpY2, toX, toY) {
	    var path = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : [];
	    var n = 20;
	    var dt = 0;
	    var dt2 = 0;
	    var dt3 = 0;
	    var t2 = 0;
	    var t3 = 0;
	    path.push(fromX, fromY);

	    for (var i = 1, j = 0; i <= n; ++i) {
	      j = i / n;
	      dt = 1 - j;
	      dt2 = dt * dt;
	      dt3 = dt2 * dt;
	      t2 = j * j;
	      t3 = t2 * j;
	      path.push(dt3 * fromX + 3 * dt2 * j * cpX + 3 * dt * t2 * cpX2 + t3 * toX, dt3 * fromY + 3 * dt2 * j * cpY + 3 * dt * t2 * cpY2 + t3 * toY);
	    }

	    return path;
	  }
	});
	});

	unwrapExports(bezierCurveTo);

	var Graphics = createCommonjsModule(function (module, exports) {

	(function (global, factory) {
	  {
	    factory(exports, GraphicsData, math, _const, bezierCurveTo, mmvis);
	  }
	})(void 0, function (exports, _GraphicsData, _index, _const, _bezierCurveTo2, _mmvis) {

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	  exports.default = undefined;

	  var _GraphicsData2 = _interopRequireDefault(_GraphicsData);

	  var _bezierCurveTo3 = _interopRequireDefault(_bezierCurveTo2);

	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      default: obj
	    };
	  }

	  function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  }

	  function _defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  function _createClass(Constructor, protoProps, staticProps) {
	    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) _defineProperties(Constructor, staticProps);
	    return Constructor;
	  }

	  var Graphics = function () {
	    function Graphics(shape) {
	      _classCallCheck(this, Graphics);

	      this.lineWidth = 1;
	      this.strokeStyle = null;
	      this.strokeAlpha = 1;
	      this.fillStyle = null;
	      this.fillAlpha = 1; //比如path m 0 0 l 0 0 m 1 1 l 1 1
	      //就会有两条graphicsData数据产生

	      this.graphicsData = [];
	      this.currentPath = null;
	      this.dirty = 0; //用于检测图形对象是否已更改。 如果这是设置为true，那么图形对象将被重新计算。

	      this.clearDirty = 0; //用于检测我们是否清除了图形webGL数据

	      this._webGL = {};
	      this.worldAlpha = 1;
	      this.tint = 0xFFFFFF; //目标对象附加颜色

	      this.Bound = {
	        x: 0,
	        y: 0,
	        width: 0,
	        height: 0
	      };
	    }

	    _createClass(Graphics, [{
	      key: "setStyle",
	      value: function setStyle(context) {
	        //从 shape 中把绘图需要的style属性同步过来
	        var model = context.$model;
	        this.lineWidth = model.lineWidth;
	        this.strokeStyle = model.strokeStyle;
	        this.strokeAlpha = model.strokeAlpha * model.globalAlpha;
	        this.fillStyle = model.fillStyle;
	        this.fillAlpha = model.fillAlpha * model.globalAlpha;
	        var g = this; //一般都是先设置好style的，所以 ， 当后面再次设置新的style的时候
	        //会把所有的data都修改
	        //TODO: 后面需要修改, 能精准的确定是修改 graphicsData 中的哪个data

	        if (this.graphicsData.length) {
	          _mmvis._.each(this.graphicsData, function (gd, i) {
	            gd.synsStyle(g);
	          });
	        }
	      }
	    }, {
	      key: "clone",
	      value: function clone() {
	        var clone = new Graphics();
	        clone.dirty = 0; // copy graphics data

	        for (var i = 0; i < this.graphicsData.length; ++i) {
	          clone.graphicsData.push(this.graphicsData[i].clone());
	        }

	        clone.currentPath = clone.graphicsData[clone.graphicsData.length - 1];
	        return clone;
	      }
	    }, {
	      key: "moveTo",
	      value: function moveTo(x, y) {
	        var shape = new _index.Polygon([x, y]);
	        shape.closed = false;
	        this.drawShape(shape);
	        return this;
	      }
	    }, {
	      key: "lineTo",
	      value: function lineTo(x, y) {
	        if (this.currentPath) {
	          this.currentPath.shape.points.push(x, y);
	          this.dirty++;
	        } else {
	          this.moveTo(0, 0);
	        }

	        return this;
	      }
	    }, {
	      key: "quadraticCurveTo",
	      value: function quadraticCurveTo(cpX, cpY, toX, toY) {
	        if (this.currentPath) {
	          if (this.currentPath.shape.points.length === 0) {
	            this.currentPath.shape.points = [0, 0];
	          }
	        } else {
	          this.moveTo(0, 0);
	        }

	        var n = 20;
	        var points = this.currentPath.shape.points;
	        var xa = 0;
	        var ya = 0;

	        if (points.length === 0) {
	          this.moveTo(0, 0);
	        }

	        var fromX = points[points.length - 2];
	        var fromY = points[points.length - 1];

	        for (var i = 1; i <= n; ++i) {
	          var j = i / n;
	          xa = fromX + (cpX - fromX) * j;
	          ya = fromY + (cpY - fromY) * j;
	          points.push(xa + (cpX + (toX - cpX) * j - xa) * j, ya + (cpY + (toY - cpY) * j - ya) * j);
	        }

	        this.dirty++;
	        return this;
	      }
	    }, {
	      key: "bezierCurveTo",
	      value: function bezierCurveTo(cpX, cpY, cpX2, cpY2, toX, toY) {
	        if (this.currentPath) {
	          if (this.currentPath.shape.points.length === 0) {
	            this.currentPath.shape.points = [0, 0];
	          }
	        } else {
	          this.moveTo(0, 0);
	        }

	        var points = this.currentPath.shape.points;
	        var fromX = points[points.length - 2];
	        var fromY = points[points.length - 1];
	        points.length -= 2;
	        (0, _bezierCurveTo3["default"])(fromX, fromY, cpX, cpY, cpX2, cpY2, toX, toY, points);
	        this.dirty++;
	        return this;
	      }
	    }, {
	      key: "arcTo",
	      value: function arcTo(x1, y1, x2, y2, radius) {
	        if (this.currentPath) {
	          if (this.currentPath.shape.points.length === 0) {
	            this.currentPath.shape.points.push(x1, y1);
	          }
	        } else {
	          this.moveTo(x1, y1);
	        }

	        var points = this.currentPath.shape.points;
	        var fromX = points[points.length - 2];
	        var fromY = points[points.length - 1];
	        var a1 = fromY - y1;
	        var b1 = fromX - x1;
	        var a2 = y2 - y1;
	        var b2 = x2 - x1;
	        var mm = Math.abs(a1 * b2 - b1 * a2);

	        if (mm < 1.0e-8 || radius === 0) {
	          if (points[points.length - 2] !== x1 || points[points.length - 1] !== y1) {
	            points.push(x1, y1);
	          }
	        } else {
	          var dd = a1 * a1 + b1 * b1;
	          var cc = a2 * a2 + b2 * b2;
	          var tt = a1 * a2 + b1 * b2;
	          var k1 = radius * Math.sqrt(dd) / mm;
	          var k2 = radius * Math.sqrt(cc) / mm;
	          var j1 = k1 * tt / dd;
	          var j2 = k2 * tt / cc;
	          var cx = k1 * b2 + k2 * b1;
	          var cy = k1 * a2 + k2 * a1;
	          var px = b1 * (k2 + j1);
	          var py = a1 * (k2 + j1);
	          var qx = b2 * (k1 + j2);
	          var qy = a2 * (k1 + j2);
	          var startAngle = Math.atan2(py - cy, px - cx);
	          var endAngle = Math.atan2(qy - cy, qx - cx);
	          this.arc(cx + x1, cy + y1, radius, startAngle, endAngle, b1 * a2 > b2 * a1);
	        }

	        this.dirty++;
	        return this;
	      }
	    }, {
	      key: "arc",
	      value: function arc(cx, cy, radius, startAngle, endAngle) {
	        var anticlockwise = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;

	        if (startAngle === endAngle) {
	          return this;
	        }

	        if (!anticlockwise && endAngle <= startAngle) {
	          endAngle += Math.PI * 2;
	        } else if (anticlockwise && startAngle <= endAngle) {
	          startAngle += Math.PI * 2;
	        }

	        var sweep = endAngle - startAngle;
	        var segs = Math.ceil(Math.abs(sweep) / (Math.PI * 2)) * 48;

	        if (sweep === 0) {
	          return this;
	        }

	        var startX = cx + Math.cos(startAngle) * radius;
	        var startY = cy + Math.sin(startAngle) * radius; // If the currentPath exists, take its points. Otherwise call `moveTo` to start a path.

	        var points = this.currentPath ? this.currentPath.shape.points : null;

	        if (points) {
	          if (points[points.length - 2] !== startX || points[points.length - 1] !== startY) {
	            points.push(startX, startY);
	          }
	        } else {
	          this.moveTo(startX, startY);
	          points = this.currentPath.shape.points;
	        }

	        var theta = sweep / (segs * 2);
	        var theta2 = theta * 2;
	        var cTheta = Math.cos(theta);
	        var sTheta = Math.sin(theta);
	        var segMinus = segs - 1;
	        var remainder = segMinus % 1 / segMinus;

	        for (var i = 0; i <= segMinus; ++i) {
	          var real = i + remainder * i;
	          var angle = theta + startAngle + theta2 * real;
	          var c = Math.cos(angle);
	          var s = -Math.sin(angle);
	          points.push((cTheta * c + sTheta * s) * radius + cx, (cTheta * -s + sTheta * c) * radius + cy);
	        }

	        this.dirty++;
	        return this;
	      }
	    }, {
	      key: "drawRect",
	      value: function drawRect(x, y, width, height) {
	        this.drawShape(new _index.Rectangle(x, y, width, height));
	        return this;
	      }
	    }, {
	      key: "drawCircle",
	      value: function drawCircle(x, y, radius) {
	        this.drawShape(new _index.Circle(x, y, radius));
	        return this;
	      }
	    }, {
	      key: "drawEllipse",
	      value: function drawEllipse(x, y, width, height) {
	        this.drawShape(new _index.Ellipse(x, y, width, height));
	        return this;
	      }
	    }, {
	      key: "drawPolygon",
	      value: function drawPolygon(path) {
	        // prevents an argument assignment deopt
	        // see section 3.1: https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#3-managing-arguments
	        var points = path;
	        var closed = true;

	        if (points instanceof _index.Polygon) {
	          closed = points.closed;
	          points = points.points;
	        }

	        if (!Array.isArray(points)) {
	          // prevents an argument leak deopt
	          // see section 3.2: https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#3-managing-arguments
	          points = new Array(arguments.length);

	          for (var i = 0; i < points.length; ++i) {
	            points[i] = arguments[i]; // eslint-disable-line prefer-rest-params
	          }
	        }

	        var shape = new _index.Polygon(points);
	        shape.closed = closed;
	        this.drawShape(shape);
	        return this;
	      }
	    }, {
	      key: "clear",
	      value: function clear() {
	        if (this.graphicsData.length > 0) {
	          this.dirty++;
	          this.clearDirty++;
	          this.graphicsData.length = 0;
	        }

	        this.currentPath = null;
	        return this;
	      }
	    }, {
	      key: "drawShape",
	      value: function drawShape(shape) {
	        if (this.currentPath) {
	          if (this.currentPath.shape.points.length <= 2) {
	            this.graphicsData.pop();
	          }
	        } //this.currentPath = null;


	        this.beginPath();
	        var data = new _GraphicsData2["default"](this.lineWidth, this.strokeStyle, this.strokeAlpha, this.fillStyle, this.fillAlpha, shape);
	        this.graphicsData.push(data);

	        if (data.type === _const.SHAPES.POLY) {
	          data.shape.closed = data.shape.closed;
	          this.currentPath = data;
	        }

	        this.dirty++;
	        return data;
	      }
	    }, {
	      key: "beginPath",
	      value: function beginPath() {
	        this.currentPath = null;
	      }
	    }, {
	      key: "closePath",
	      value: function closePath() {
	        var currentPath = this.currentPath;

	        if (currentPath && currentPath.shape) {
	          currentPath.shape.close();
	        }

	        return this;
	      }
	    }, {
	      key: "updateLocalBounds",
	      value: function updateLocalBounds() {
	        var minX = Infinity;
	        var maxX = -Infinity;
	        var minY = Infinity;
	        var maxY = -Infinity;

	        if (this.graphicsData.length) {
	          var shape = 0;
	          var x = 0;
	          var y = 0;
	          var w = 0;
	          var h = 0;

	          for (var i = 0; i < this.graphicsData.length; i++) {
	            var data = this.graphicsData[i];
	            var type = data.type;
	            var lineWidth = data.lineWidth;
	            shape = data.shape;

	            if (type === _const.SHAPES.RECT || type === _const.SHAPES.RREC) {
	              x = shape.x - lineWidth / 2;
	              y = shape.y - lineWidth / 2;
	              w = shape.width + lineWidth;
	              h = shape.height + lineWidth;
	              minX = x < minX ? x : minX;
	              maxX = x + w > maxX ? x + w : maxX;
	              minY = y < minY ? y : minY;
	              maxY = y + h > maxY ? y + h : maxY;
	            } else if (type === _const.SHAPES.CIRC) {
	              x = shape.x;
	              y = shape.y;
	              w = shape.radius + lineWidth / 2;
	              h = shape.radius + lineWidth / 2;
	              minX = x - w < minX ? x - w : minX;
	              maxX = x + w > maxX ? x + w : maxX;
	              minY = y - h < minY ? y - h : minY;
	              maxY = y + h > maxY ? y + h : maxY;
	            } else if (type === _const.SHAPES.ELIP) {
	              x = shape.x;
	              y = shape.y;
	              w = shape.width + lineWidth / 2;
	              h = shape.height + lineWidth / 2;
	              minX = x - w < minX ? x - w : minX;
	              maxX = x + w > maxX ? x + w : maxX;
	              minY = y - h < minY ? y - h : minY;
	              maxY = y + h > maxY ? y + h : maxY;
	            } else {
	              // POLY
	              var points = shape.points;
	              var x2 = 0;
	              var y2 = 0;
	              var dx = 0;
	              var dy = 0;
	              var rw = 0;
	              var rh = 0;
	              var cx = 0;
	              var cy = 0;

	              for (var j = 0; j + 2 < points.length; j += 2) {
	                x = points[j];
	                y = points[j + 1];
	                x2 = points[j + 2];
	                y2 = points[j + 3];
	                dx = Math.abs(x2 - x);
	                dy = Math.abs(y2 - y);
	                h = lineWidth;
	                w = Math.sqrt(dx * dx + dy * dy);

	                if (w < 1e-9) {
	                  continue;
	                }

	                rw = (h / w * dy + dx) / 2;
	                rh = (h / w * dx + dy) / 2;
	                cx = (x2 + x) / 2;
	                cy = (y2 + y) / 2;
	                minX = cx - rw < minX ? cx - rw : minX;
	                maxX = cx + rw > maxX ? cx + rw : maxX;
	                minY = cy - rh < minY ? cy - rh : minY;
	                maxY = cy + rh > maxY ? cy + rh : maxY;
	              }
	            }
	          }
	        } else {
	          minX = 0;
	          maxX = 0;
	          minY = 0;
	          maxY = 0;
	        }

	        this.Bound = {
	          x: minX,
	          y: minY,
	          width: maxX - minX,
	          height: maxY - minY
	        };
	        return this;
	      }
	    }, {
	      key: "getBound",
	      value: function getBound() {
	        return this.updateLocalBounds().Bound;
	      }
	    }, {
	      key: "destroy",
	      value: function destroy(options) {
	        for (var i = 0; i < this.graphicsData.length; ++i) {
	          this.graphicsData[i].destroy();
	        }

	        for (var id in this._webGL) {
	          for (var j = 0; j < this._webGL[id].data.length; ++j) {
	            this._webGL[id].data[j].destroy();
	          }
	        }

	        this.graphicsData = null;
	        this.currentPath = null;
	        this._webGL = null;
	      }
	    }]);

	    return Graphics;
	  }();

	  exports.default = Graphics;
	});
	});

	unwrapExports(Graphics);

	var Shape = createCommonjsModule(function (module, exports) {

	(function (global, factory) {
	  {
	    factory(exports, DisplayObject, utils, mmvis, _const, Graphics);
	  }
	})(void 0, function (exports, _DisplayObject2, _index, _mmvis, _const, _Graphics) {

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	  exports.default = undefined;

	  var _DisplayObject3 = _interopRequireDefault(_DisplayObject2);

	  var _index2 = _interopRequireDefault(_index);

	  var _Graphics2 = _interopRequireDefault(_Graphics);

	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      default: obj
	    };
	  }

	  function _typeof(obj) {
	    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
	      _typeof = function _typeof(obj) {
	        return typeof obj;
	      };
	    } else {
	      _typeof = function _typeof(obj) {
	        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	      };
	    }

	    return _typeof(obj);
	  }

	  function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  }

	  function _defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  function _createClass(Constructor, protoProps, staticProps) {
	    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) _defineProperties(Constructor, staticProps);
	    return Constructor;
	  }

	  function _possibleConstructorReturn(self, call) {
	    if (call && (_typeof(call) === "object" || typeof call === "function")) {
	      return call;
	    }

	    return _assertThisInitialized(self);
	  }

	  function _assertThisInitialized(self) {
	    if (self === void 0) {
	      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }

	    return self;
	  }

	  function _getPrototypeOf(o) {
	    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
	      return o.__proto__ || Object.getPrototypeOf(o);
	    };
	    return _getPrototypeOf(o);
	  }

	  function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	      throw new TypeError("Super expression must either be null or a function");
	    }

	    subClass.prototype = Object.create(superClass && superClass.prototype, {
	      constructor: {
	        value: subClass,
	        writable: true,
	        configurable: true
	      }
	    });
	    if (superClass) _setPrototypeOf(subClass, superClass);
	  }

	  function _setPrototypeOf(o, p) {
	    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
	      o.__proto__ = p;
	      return o;
	    };

	    return _setPrototypeOf(o, p);
	  }

	  var Shape = function (_DisplayObject) {
	    _inherits(Shape, _DisplayObject);

	    function Shape(opt) {
	      var _this;

	      _classCallCheck(this, Shape);

	      opt = _index2["default"].checkOpt(opt);
	      var styleContext = {
	        cursor: opt.context.cursor || "default",
	        fillAlpha: opt.context.fillAlpha || 1,
	        //context2d里没有，自定义
	        fillStyle: opt.context.fillStyle || null,
	        //"#000000",
	        lineCap: opt.context.lineCap || "round",
	        //默认都是直角
	        lineJoin: opt.context.lineJoin || "round",
	        //这两个目前webgl里面没实现
	        miterLimit: opt.context.miterLimit || null,
	        //miterLimit 属性设置或返回最大斜接长度,只有当 lineJoin 属性为 "miter" 时，miterLimit 才有效。
	        strokeAlpha: opt.context.strokeAlpha || 1,
	        //context2d里没有，自定义
	        strokeStyle: opt.context.strokeStyle || null,
	        lineType: opt.context.lineType || "solid",
	        //context2d里没有，自定义线条的type，默认为实线
	        lineDash: opt.context.lineDash || [6, 3],
	        lineWidth: opt.context.lineWidth || null
	      };

	      var _context = _mmvis._.extend(true, styleContext, opt.context);

	      opt.context = _context;

	      if (opt.id === undefined && opt.type !== undefined) {
	        opt.id = _index2["default"].createId(opt.type);
	      }
	      _this = _possibleConstructorReturn(this, _getPrototypeOf(Shape).call(this, opt)); //over的时候如果有修改样式，就为true

	      _this._hoverClass = false;
	      _this.hoverClone = true; //是否开启在hover的时候clone一份到active stage 中 

	      _this.pointChkPriority = true; //在鼠标mouseover到该节点，然后mousemove的时候，是否优先检测该节点

	      _this._eventEnabled = false; //是否响应事件交互,在添加了事件侦听后会自动设置为true

	      _this.dragEnabled = opt.dragEnabled || false; //"dragEnabled" in opt ? opt.dragEnabled : false;   //是否启用元素的拖拽
	      //拖拽drag的时候显示在activShape的副本

	      _this._dragDuplicate = null;
	      _this.type = _this.type || "shape"; //处理所有的图形一些共有的属性配置,把除开id,context之外的所有属性，全部挂载到this上面

	      _this.initCompProperty(opt); //如果该元素是clone而来，则不需要绘制


	      if (!_this.isClone) {
	        //如果是clone对象的话就直接
	        _this.graphics = new _Graphics2["default"]();

	        _this._draw(_this.graphics);
	      } else {
	        _this.graphics = null;
	      }

	      return _this;
	    }

	    _createClass(Shape, [{
	      key: "_draw",
	      value: function _draw(graphics) {
	        if (graphics.graphicsData.length == 0) {
	          //先设置好当前graphics的style
	          graphics.setStyle(this.context);
	          this.draw(graphics);
	        }
	      }
	    }, {
	      key: "draw",
	      value: function draw() {}
	    }, {
	      key: "clearGraphicsData",
	      value: function clearGraphicsData() {
	        this.graphics.clear();
	      }
	    }, {
	      key: "$watch",
	      value: function $watch(name, value, preValue) {
	        if (_mmvis._.indexOf(_const.STYLE_PROPS, name) > -1) {
	          this.graphics.setStyle(this.context);
	        }

	        this.watch(name, value, preValue);
	      }
	    }, {
	      key: "initCompProperty",
	      value: function initCompProperty(opt) {
	        for (var i in opt) {
	          if (i != "id" && i != "context") {
	            this[i] = opt[i];
	          }
	        }
	      }
	    }, {
	      key: "getBound",
	      value: function getBound() {
	        return this.graphics.updateLocalBounds().Bound;
	      }
	    }]);

	    return Shape;
	  }(_DisplayObject3["default"]);

	  exports.default = Shape;
	});
	});

	unwrapExports(Shape);

	var Text = createCommonjsModule(function (module, exports) {

	(function (global, factory) {
	  {
	    factory(exports, DisplayObject, utils, mmvis);
	  }
	})(void 0, function (exports, _DisplayObject2, _index, _mmvis) {

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	  exports.default = undefined;

	  var _DisplayObject3 = _interopRequireDefault(_DisplayObject2);

	  var _index2 = _interopRequireDefault(_index);

	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      default: obj
	    };
	  }

	  function _typeof(obj) {
	    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
	      _typeof = function _typeof(obj) {
	        return typeof obj;
	      };
	    } else {
	      _typeof = function _typeof(obj) {
	        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	      };
	    }

	    return _typeof(obj);
	  }

	  function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  }

	  function _defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  function _createClass(Constructor, protoProps, staticProps) {
	    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) _defineProperties(Constructor, staticProps);
	    return Constructor;
	  }

	  function _possibleConstructorReturn(self, call) {
	    if (call && (_typeof(call) === "object" || typeof call === "function")) {
	      return call;
	    }

	    return _assertThisInitialized(self);
	  }

	  function _assertThisInitialized(self) {
	    if (self === void 0) {
	      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }

	    return self;
	  }

	  function _getPrototypeOf(o) {
	    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
	      return o.__proto__ || Object.getPrototypeOf(o);
	    };
	    return _getPrototypeOf(o);
	  }

	  function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	      throw new TypeError("Super expression must either be null or a function");
	    }

	    subClass.prototype = Object.create(superClass && superClass.prototype, {
	      constructor: {
	        value: subClass,
	        writable: true,
	        configurable: true
	      }
	    });
	    if (superClass) _setPrototypeOf(subClass, superClass);
	  }

	  function _setPrototypeOf(o, p) {
	    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
	      o.__proto__ = p;
	      return o;
	    };

	    return _setPrototypeOf(o, p);
	  }

	  var Text = function (_DisplayObject) {
	    _inherits(Text, _DisplayObject);

	    function Text(text, opt) {
	      var _this;

	      _classCallCheck(this, Text);

	      opt.type = "text";

	      if (text === null || text === undefined) {
	        text = "";
	      }
	      opt.context = _mmvis._.extend({
	        font: "",
	        fontSize: 13,
	        //字体大小默认13
	        fontWeight: "normal",
	        fontFamily: "微软雅黑,sans-serif",
	        textBaseline: "top",
	        textAlign: "left",
	        textDecoration: null,
	        fillStyle: 'blank',
	        strokeStyle: null,
	        lineWidth: 0,
	        lineHeight: 1.2,
	        backgroundColor: null,
	        textBackgroundColor: null
	      }, opt.context);
	      _this = _possibleConstructorReturn(this, _getPrototypeOf(Text).call(this, opt));
	      _this._reNewline = /\r?\n/;
	      _this.fontProperts = ["fontStyle", "fontVariant", "fontWeight", "fontSize", "fontFamily"];
	      _this.context.font = _this._getFontDeclaration();
	      _this.text = text.toString();
	      _this.context.width = _this.getTextWidth();
	      _this.context.height = _this.getTextHeight();
	      return _this;
	    }

	    _createClass(Text, [{
	      key: "$watch",
	      value: function $watch(name, value, preValue) {
	        //context属性有变化的监听函数
	        if (_mmvis._.indexOf(this.fontProperts, name) >= 0) {
	          this.context[name] = value; //如果修改的是font的某个内容，就重新组装一遍font的值，
	          //然后通知引擎这次对context的修改上报心跳

	          this.context.font = this._getFontDeclaration();
	          this.context.width = this.getTextWidth();
	          this.context.height = this.getTextHeight();
	        }
	      }
	    }, {
	      key: "_setContextStyle",
	      value: function _setContextStyle(ctx, style, globalAlpha) {
	        // 简单判断不做严格类型检测
	        for (var p in style) {
	          if (p != "textBaseline" && p in ctx) {
	            if (style[p] || _mmvis._.isNumber(style[p])) {
	              if (p == "globalAlpha") {
	                //透明度要从父节点继承
	                //ctx[p] = style[p] * globalAlpha; //render里面已经做过相乘了，不需要重新*
	                ctx.globalAlpha = globalAlpha;
	              } else {
	                ctx[p] = style[p];
	              }
	            }
	          }
	        }
	        return;
	      }
	    }, {
	      key: "render",
	      value: function render(ctx, globalAlpha) {
	        this._renderText(ctx, this._getTextLines(), globalAlpha);
	      }
	    }, {
	      key: "resetText",
	      value: function resetText(text) {
	        this.text = text.toString();
	        this.heartBeat();
	      }
	    }, {
	      key: "getTextWidth",
	      value: function getTextWidth() {
	        var width = 0;

	        if (_index2["default"]._pixelCtx) {
	          _index2["default"]._pixelCtx.save();

	          _index2["default"]._pixelCtx.font = this.context.$model.font;
	          width = this._getTextWidth(_index2["default"]._pixelCtx, this._getTextLines());

	          _index2["default"]._pixelCtx.restore();
	        }
	        return width;
	      }
	    }, {
	      key: "getTextHeight",
	      value: function getTextHeight() {
	        return this._getTextHeight(_index2["default"]._pixelCtx, this._getTextLines());
	      }
	    }, {
	      key: "_getTextLines",
	      value: function _getTextLines() {
	        return this.text.split(this._reNewline);
	      }
	    }, {
	      key: "_renderText",
	      value: function _renderText(ctx, textLines, globalAlpha) {
	        if (!ctx) return;
	        ctx.save();

	        this._setContextStyle(ctx, this.context.$model, globalAlpha);

	        this._renderTextStroke(ctx, textLines);

	        this._renderTextFill(ctx, textLines);

	        ctx.restore();
	      }
	    }, {
	      key: "_getFontDeclaration",
	      value: function _getFontDeclaration() {
	        var self = this;
	        var fontArr = [];

	        _mmvis._.each(this.fontProperts, function (p) {
	          var fontP = self.context[p];

	          if (p == "fontSize") {
	            fontP = parseFloat(fontP) + "px";
	          }

	          fontP && fontArr.push(fontP);
	        });

	        return fontArr.join(' ');
	      }
	    }, {
	      key: "_renderTextFill",
	      value: function _renderTextFill(ctx, textLines) {
	        if (!this.context.$model.fillStyle) return;
	        this._boundaries = [];
	        var lineHeights = 0;

	        for (var i = 0, len = textLines.length; i < len; i++) {
	          var heightOfLine = this._getHeightOfLine(ctx, i, textLines);

	          lineHeights += heightOfLine;

	          this._renderTextLine('fillText', ctx, textLines[i], 0, //this._getLeftOffset(),
	          this._getTopOffset() + lineHeights, i);
	        }
	      }
	    }, {
	      key: "_renderTextStroke",
	      value: function _renderTextStroke(ctx, textLines) {
	        if (!ctx) return;
	        if (!this.context.$model.strokeStyle || !this.context.$model.lineWidth) return;
	        var lineHeights = 0;
	        ctx.save();

	        if (this.strokeDashArray) {
	          if (1 & this.strokeDashArray.length) {
	            this.strokeDashArray.push.apply(this.strokeDashArray, this.strokeDashArray);
	          }

	          supportsLineDash && ctx.setLineDash(this.strokeDashArray);
	        }

	        ctx.beginPath();

	        for (var i = 0, len = textLines.length; i < len; i++) {
	          var heightOfLine = this._getHeightOfLine(ctx, i, textLines);

	          lineHeights += heightOfLine;

	          this._renderTextLine('strokeText', ctx, textLines[i], 0, //this._getLeftOffset(),
	          this._getTopOffset() + lineHeights, i);
	        }

	        ctx.closePath();
	        ctx.restore();
	      }
	    }, {
	      key: "_renderTextLine",
	      value: function _renderTextLine(method, ctx, line, left, top, lineIndex) {
	        top -= this._getHeightOfLine() / 4;

	        if (this.context.$model.textAlign !== 'justify') {
	          this._renderChars(method, ctx, line, left, top, lineIndex);

	          return;
	        }
	        var lineWidth = ctx.measureText(line).width;
	        var totalWidth = this.context.$model.width;

	        if (totalWidth > lineWidth) {
	          var words = line.split(/\s+/);
	          var wordsWidth = ctx.measureText(line.replace(/\s+/g, '')).width;
	          var widthDiff = totalWidth - wordsWidth;
	          var numSpaces = words.length - 1;
	          var spaceWidth = widthDiff / numSpaces;
	          var leftOffset = 0;

	          for (var i = 0, len = words.length; i < len; i++) {
	            this._renderChars(method, ctx, words[i], left + leftOffset, top, lineIndex);

	            leftOffset += ctx.measureText(words[i]).width + spaceWidth;
	          }
	        } else {
	          this._renderChars(method, ctx, line, left, top, lineIndex);
	        }
	      }
	    }, {
	      key: "_renderChars",
	      value: function _renderChars(method, ctx, chars, left, top) {
	        ctx[method](chars, 0, top);
	      }
	    }, {
	      key: "_getHeightOfLine",
	      value: function _getHeightOfLine() {
	        return this.context.$model.fontSize * this.context.$model.lineHeight;
	      }
	    }, {
	      key: "_getTextWidth",
	      value: function _getTextWidth(ctx, textLines) {
	        var maxWidth = ctx.measureText(textLines[0] || '|').width;

	        for (var i = 1, len = textLines.length; i < len; i++) {
	          var currentLineWidth = ctx.measureText(textLines[i]).width;

	          if (currentLineWidth > maxWidth) {
	            maxWidth = currentLineWidth;
	          }
	        }

	        return maxWidth;
	      }
	    }, {
	      key: "_getTextHeight",
	      value: function _getTextHeight(ctx, textLines) {
	        return this.context.$model.fontSize * textLines.length * this.context.$model.lineHeight;
	      }
	    }, {
	      key: "_getTopOffset",
	      value: function _getTopOffset() {
	        var t = 0;

	        switch (this.context.$model.textBaseline) {
	          case "top":
	            t = 0;
	            break;

	          case "middle":
	            t = -this.context.$model.height / 2;
	            break;

	          case "bottom":
	            t = -this.context.$model.height;
	            break;
	        }

	        return t;
	      }
	    }, {
	      key: "getRect",
	      value: function getRect() {
	        var c = this.context;
	        var x = 0;
	        var y = 0; //更具textAlign 和 textBaseline 重新矫正 xy

	        if (c.textAlign == "center") {
	          x = -c.width / 2;
	        }

	        if (c.textAlign == "right") {
	          x = -c.width;
	        }

	        if (c.textBaseline == "middle") {
	          y = -c.height / 2;
	        }

	        if (c.textBaseline == "bottom") {
	          y = -c.height;
	        }
	        return {
	          x: x,
	          y: y,
	          width: c.width,
	          height: c.height
	        };
	      }
	    }]);

	    return Text;
	  }(_DisplayObject3["default"]);

	  exports.default = Text;
	});
	});

	unwrapExports(Text);

	var Vector = createCommonjsModule(function (module, exports) {

	(function (global, factory) {
	  {
	    factory(exports, mmvis);
	  }
	})(void 0, function (exports, _mmvis) {

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });

	  /**
	   * Canvax
	   *
	   * @author 释剑 (李涛, litao.lt@alibaba-inc.com)
	   *
	   * 向量操作类
	   * */
	  function Vector(x, y) {
	    var vx = 0,
	        vy = 0;

	    if (arguments.length == 1 && _mmvis._.isObject(x)) {
	      var arg = arguments[0];

	      if (_mmvis._.isArray(arg)) {
	        vx = arg[0];
	        vy = arg[1];
	      } else if (arg.hasOwnProperty("x") && arg.hasOwnProperty("y")) {
	        vx = arg.x;
	        vy = arg.y;
	      }
	    }

	    this._axes = [vx, vy];
	  }
	  Vector.prototype = {
	    distance: function distance(v) {
	      var x = this._axes[0] - v._axes[0];
	      var y = this._axes[1] - v._axes[1];
	      return Math.sqrt(x * x + y * y);
	    }
	  };
	  exports["default"] = Vector;
	});
	});

	unwrapExports(Vector);

	var SmoothSpline = createCommonjsModule(function (module, exports) {

	(function (global, factory) {
	  {
	    factory(exports, Vector, mmvis);
	  }
	})(void 0, function (exports, _Vector, _mmvis) {

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });

	  exports.default = function (opt) {
	    var points = opt.points;
	    var isLoop = opt.isLoop;
	    var smoothFilter = opt.smoothFilter;
	    var len = points.length;

	    if (len == 1) {
	      return points;
	    }

	    var ret = [];
	    var distance = 0;
	    var preVertor = new _Vector2["default"](points[0]);
	    var iVtor = null;

	    for (var i = 1; i < len; i++) {
	      iVtor = new _Vector2["default"](points[i]);
	      distance += preVertor.distance(iVtor);
	      preVertor = iVtor;
	    }

	    preVertor = null;
	    iVtor = null; //基本上等于曲率

	    var segs = distance / 6;
	    segs = segs < len ? len : segs;

	    for (var i = 0; i < segs; i++) {
	      var pos = i / (segs - 1) * (isLoop ? len : len - 1);
	      var idx = Math.floor(pos);
	      var w = pos - idx;
	      var p0;
	      var p1 = points[idx % len];
	      var p2;
	      var p3;

	      if (!isLoop) {
	        p0 = points[idx === 0 ? idx : idx - 1];
	        p2 = points[idx > len - 2 ? len - 1 : idx + 1];
	        p3 = points[idx > len - 3 ? len - 1 : idx + 2];
	      } else {
	        p0 = points[(idx - 1 + len) % len];
	        p2 = points[(idx + 1) % len];
	        p3 = points[(idx + 2) % len];
	      }

	      var w2 = w * w;
	      var w3 = w * w2;
	      var rp = [interpolate(p0[0], p1[0], p2[0], p3[0], w, w2, w3), interpolate(p0[1], p1[1], p2[1], p3[1], w, w2, w3)];
	      _mmvis._.isFunction(smoothFilter) && smoothFilter(rp);
	      ret.push(rp);
	    }

	    return ret;
	  };

	  var _Vector2 = _interopRequireDefault(_Vector);

	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      default: obj
	    };
	  }

	  /**
	   * Canvax
	   *
	   * @author 释剑 (李涛, litao.lt@alibaba-inc.com)
	   *
	   * 处理为平滑线条
	   */

	  /**
	   * @inner
	   */
	  function interpolate(p0, p1, p2, p3, t, t2, t3) {
	    var v0 = (p2 - p0) * 0.25;
	    var v1 = (p3 - p1) * 0.25;
	    return (2 * (p1 - p2) + v0 + v1) * t3 + (-3 * (p1 - p2) - 2 * v0 - v1) * t2 + v0 * t + p1;
	  }
	});
	});

	unwrapExports(SmoothSpline);

	var _Math = createCommonjsModule(function (module, exports) {

	(function (global, factory) {
	  {
	    factory(exports, SmoothSpline, mmvis);
	  }
	})(void 0, function (exports, _SmoothSpline, _mmvis) {

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });

	  var _SmoothSpline2 = _interopRequireDefault(_SmoothSpline);

	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      default: obj
	    };
	  }

	  /**
	   * Canvax
	   *
	   * @author 释剑 (李涛, litao.lt@alibaba-inc.com)
	   *
	   * 数学 类
	   *
	   **/
	  var _cache = {
	    sin: {},
	    //sin缓存
	    cos: {} //cos缓存

	  };

	  var _radians = Math.PI / 180;
	  /**
	   * @param angle 弧度（角度）参数
	   * @param isDegrees angle参数是否为角度计算，默认为false，angle为以弧度计量的角度
	   */


	  function sin(angle, isDegrees) {
	    angle = (isDegrees ? angle * _radians : angle).toFixed(4);

	    if (typeof _cache.sin[angle] == 'undefined') {
	      _cache.sin[angle] = Math.sin(angle);
	    }

	    return _cache.sin[angle];
	  }
	  /**
	   * @param radians 弧度参数
	   */


	  function cos(angle, isDegrees) {
	    angle = (isDegrees ? angle * _radians : angle).toFixed(4);

	    if (typeof _cache.cos[angle] == 'undefined') {
	      _cache.cos[angle] = Math.cos(angle);
	    }

	    return _cache.cos[angle];
	  }
	  /**
	   * 角度转弧度
	   * @param {Object} angle
	   */


	  function degreeToRadian(angle) {
	    return angle * _radians;
	  }
	  /**
	   * 弧度转角度
	   * @param {Object} angle
	   */


	  function radianToDegree(angle) {
	    return angle / _radians;
	  }
	  /*
	   * 校验角度到360度内
	   * @param {angle} number
	   */


	  function degreeTo360(angle) {
	    var reAng = (360 + angle % 360) % 360; //Math.abs(360 + Math.ceil( angle ) % 360) % 360;

	    if (reAng == 0 && angle !== 0) {
	      reAng = 360;
	    }

	    return reAng;
	  }

	  function getIsgonPointList(n, r) {
	    var pointList = [];
	    var dStep = 2 * Math.PI / n;
	    var beginDeg = -Math.PI / 2;
	    var deg = beginDeg;

	    for (var i = 0, end = n; i < end; i++) {
	      pointList.push([r * Math.cos(deg), r * Math.sin(deg)]);
	      deg += dStep;
	    }
	    return pointList;
	  }

	  function getSmoothPointList(pList, smoothFilter) {
	    //smoothFilter -- 比如在折线图中。会传一个smoothFilter过来做point的纠正。
	    //让y不能超过底部的原点
	    var List = [];
	    var Len = pList.length;
	    var _currList = [];

	    _mmvis._.each(pList, function (point, i) {
	      if (isNotValibPoint(point)) {
	        //undefined , [ number, null] 等结构
	        if (_currList.length) {
	          List = List.concat(_getSmoothGroupPointList(_currList, smoothFilter));
	          _currList = [];
	        }

	        List.push(point);
	      } else {
	        //有效的point 都push 进_currList 准备做曲线设置
	        _currList.push(point);
	      }

	      if (i == Len - 1) {
	        if (_currList.length) {
	          List = List.concat(_getSmoothGroupPointList(_currList, smoothFilter));
	          _currList = [];
	        }
	      }
	    });

	    return List;
	  }

	  function _getSmoothGroupPointList(pList, smoothFilter) {
	    var obj = {
	      points: pList
	    };

	    if (_mmvis._.isFunction(smoothFilter)) {
	      obj.smoothFilter = smoothFilter;
	    }

	    var currL = (0, _SmoothSpline2["default"])(obj);

	    if (pList && pList.length > 0) {
	      currL.push(pList[pList.length - 1]);
	    }
	    return currL;
	  }

	  function isNotValibPoint(point) {
	    var res = !point || _mmvis._.isArray(point) && point.length >= 2 && (!_mmvis._.isNumber(point[0]) || !_mmvis._.isNumber(point[1])) || "x" in point && !_mmvis._.isNumber(point.x) || "y" in point && !_mmvis._.isNumber(point.y);
	    return res;
	  }

	  function isValibPoint(point) {
	    return !isNotValibPoint(point);
	  }

	  exports["default"] = {
	    PI: Math.PI,
	    sin: sin,
	    cos: cos,
	    degreeToRadian: degreeToRadian,
	    radianToDegree: radianToDegree,
	    degreeTo360: degreeTo360,
	    getIsgonPointList: getIsgonPointList,
	    getSmoothPointList: getSmoothPointList,
	    isNotValibPoint: isNotValibPoint,
	    isValibPoint: isValibPoint
	  };
	});
	});

	unwrapExports(_Math);

	var BrokenLine = createCommonjsModule(function (module, exports) {

	(function (global, factory) {
	  {
	    factory(exports, Shape, utils, mmvis, _Math);
	  }
	})(void 0, function (exports, _Shape2, _index, _mmvis, _Math2) {

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	  exports.default = undefined;

	  var _Shape3 = _interopRequireDefault(_Shape2);

	  var _index2 = _interopRequireDefault(_index);

	  var _Math3 = _interopRequireDefault(_Math2);

	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      default: obj
	    };
	  }

	  function _typeof(obj) {
	    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
	      _typeof = function _typeof(obj) {
	        return typeof obj;
	      };
	    } else {
	      _typeof = function _typeof(obj) {
	        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	      };
	    }

	    return _typeof(obj);
	  }

	  function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  }

	  function _defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  function _createClass(Constructor, protoProps, staticProps) {
	    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) _defineProperties(Constructor, staticProps);
	    return Constructor;
	  }

	  function _possibleConstructorReturn(self, call) {
	    if (call && (_typeof(call) === "object" || typeof call === "function")) {
	      return call;
	    }

	    return _assertThisInitialized(self);
	  }

	  function _assertThisInitialized(self) {
	    if (self === void 0) {
	      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }

	    return self;
	  }

	  function _getPrototypeOf(o) {
	    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
	      return o.__proto__ || Object.getPrototypeOf(o);
	    };
	    return _getPrototypeOf(o);
	  }

	  function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	      throw new TypeError("Super expression must either be null or a function");
	    }

	    subClass.prototype = Object.create(superClass && superClass.prototype, {
	      constructor: {
	        value: subClass,
	        writable: true,
	        configurable: true
	      }
	    });
	    if (superClass) _setPrototypeOf(subClass, superClass);
	  }

	  function _setPrototypeOf(o, p) {
	    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
	      o.__proto__ = p;
	      return o;
	    };

	    return _setPrototypeOf(o, p);
	  }

	  var BrokenLine = function (_Shape) {
	    _inherits(BrokenLine, _Shape);

	    function BrokenLine(opt) {
	      var _this;

	      _classCallCheck(this, BrokenLine);

	      opt = _index2["default"].checkOpt(opt);

	      var _context = _mmvis._.extend(true, {
	        lineType: null,
	        smooth: false,
	        pointList: [],
	        //{Array}  // 必须，各个顶角坐标
	        smoothFilter: _index2["default"].__emptyFunc
	      }, opt.context);

	      if (!opt.isClone && _context.smooth) {
	        _context.pointList = _Math3["default"].getSmoothPointList(_context.pointList, _context.smoothFilter);
	      }
	      opt.context = _context;
	      opt.type = "brokenline";
	      _this = _possibleConstructorReturn(this, _getPrototypeOf(BrokenLine).call(this, opt)); //保存好原始值

	      _this._pointList = _context.pointList;
	      return _this;
	    }

	    _createClass(BrokenLine, [{
	      key: "watch",
	      value: function watch(name, value, preValue) {
	        if (name == "pointList" || name == "smooth" || name == "lineType") {
	          if (name == "pointList" && this.context.smooth) {
	            this.context.pointList = _Math3["default"].getSmoothPointList(value, this.context.smoothFilter);
	            this._pointList = value;
	          }

	          if (name == "smooth") {
	            //如果是smooth的切换
	            if (value) {
	              //从原始中拿数据重新生成
	              this.context.pointList = _Math3["default"].getSmoothPointList(this._pointList, this.context.smoothFilter);
	            } else {
	              this.context.pointList = this._pointList;
	            }
	          }
	          this.graphics.clear();
	        }
	      }
	    }, {
	      key: "draw",
	      value: function draw(graphics) {
	        var context = this.context;
	        var pointList = context.pointList;
	        var beginPath = false;

	        for (var i = 0, l = pointList.length; i < l; i++) {
	          var point = pointList[i];

	          if (_Math3["default"].isValibPoint(point)) {
	            if (!beginPath) {
	              graphics.moveTo(point[0], point[1]);
	            } else {
	              graphics.lineTo(point[0], point[1]);
	            }
	            beginPath = true;
	          } else {
	            beginPath = false;
	          }
	        }

	        return this;
	      }
	    }]);

	    return BrokenLine;
	  }(_Shape3["default"]);

	  exports.default = BrokenLine;
	});
	});

	unwrapExports(BrokenLine);

	var Circle$1 = createCommonjsModule(function (module, exports) {

	(function (global, factory) {
	  {
	    factory(exports, Shape, utils, mmvis);
	  }
	})(void 0, function (exports, _Shape2, _index, _mmvis) {

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	  exports.default = undefined;

	  var _Shape3 = _interopRequireDefault(_Shape2);

	  var _index2 = _interopRequireDefault(_index);

	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      default: obj
	    };
	  }

	  function _typeof(obj) {
	    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
	      _typeof = function _typeof(obj) {
	        return typeof obj;
	      };
	    } else {
	      _typeof = function _typeof(obj) {
	        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	      };
	    }

	    return _typeof(obj);
	  }

	  function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  }

	  function _defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  function _createClass(Constructor, protoProps, staticProps) {
	    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) _defineProperties(Constructor, staticProps);
	    return Constructor;
	  }

	  function _possibleConstructorReturn(self, call) {
	    if (call && (_typeof(call) === "object" || typeof call === "function")) {
	      return call;
	    }

	    return _assertThisInitialized(self);
	  }

	  function _assertThisInitialized(self) {
	    if (self === void 0) {
	      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }

	    return self;
	  }

	  function _getPrototypeOf(o) {
	    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
	      return o.__proto__ || Object.getPrototypeOf(o);
	    };
	    return _getPrototypeOf(o);
	  }

	  function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	      throw new TypeError("Super expression must either be null or a function");
	    }

	    subClass.prototype = Object.create(superClass && superClass.prototype, {
	      constructor: {
	        value: subClass,
	        writable: true,
	        configurable: true
	      }
	    });
	    if (superClass) _setPrototypeOf(subClass, superClass);
	  }

	  function _setPrototypeOf(o, p) {
	    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
	      o.__proto__ = p;
	      return o;
	    };

	    return _setPrototypeOf(o, p);
	  }

	  var Circle = function (_Shape) {
	    _inherits(Circle, _Shape);

	    function Circle(opt) {
	      _classCallCheck(this, Circle);

	      opt = _mmvis._.extend(true, {
	        type: "circle",
	        xyToInt: false,
	        context: {
	          r: 0
	        }
	      }, _index2["default"].checkOpt(opt));
	      return _possibleConstructorReturn(this, _getPrototypeOf(Circle).call(this, opt));
	    }

	    _createClass(Circle, [{
	      key: "watch",
	      value: function watch(name, value, preValue) {
	        if (name == "r") {
	          this.graphics.clear();
	        }
	      }
	    }, {
	      key: "draw",
	      value: function draw(graphics) {
	        var r = this.context.$model.r;

	        if (r < 0) {
	          r = 0;
	        }
	        graphics.drawCircle(0, 0, r);
	      }
	    }]);

	    return Circle;
	  }(_Shape3["default"]);

	  exports.default = Circle;
	});
	});

	unwrapExports(Circle$1);

	var Path = createCommonjsModule(function (module, exports) {

	(function (global, factory) {
	  {
	    factory(exports, Shape, utils, mmvis, Matrix, math);
	  }
	})(void 0, function (exports, _Shape2, _index, _mmvis, _Matrix, _index3) {

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	  exports.default = undefined;

	  var _Shape3 = _interopRequireDefault(_Shape2);

	  var _index2 = _interopRequireDefault(_index);

	  var _Matrix2 = _interopRequireDefault(_Matrix);

	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      default: obj
	    };
	  }

	  function _typeof(obj) {
	    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
	      _typeof = function _typeof(obj) {
	        return typeof obj;
	      };
	    } else {
	      _typeof = function _typeof(obj) {
	        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	      };
	    }

	    return _typeof(obj);
	  }

	  function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  }

	  function _defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  function _createClass(Constructor, protoProps, staticProps) {
	    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) _defineProperties(Constructor, staticProps);
	    return Constructor;
	  }

	  function _possibleConstructorReturn(self, call) {
	    if (call && (_typeof(call) === "object" || typeof call === "function")) {
	      return call;
	    }

	    return _assertThisInitialized(self);
	  }

	  function _assertThisInitialized(self) {
	    if (self === void 0) {
	      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }

	    return self;
	  }

	  function _getPrototypeOf(o) {
	    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
	      return o.__proto__ || Object.getPrototypeOf(o);
	    };
	    return _getPrototypeOf(o);
	  }

	  function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	      throw new TypeError("Super expression must either be null or a function");
	    }

	    subClass.prototype = Object.create(superClass && superClass.prototype, {
	      constructor: {
	        value: subClass,
	        writable: true,
	        configurable: true
	      }
	    });
	    if (superClass) _setPrototypeOf(subClass, superClass);
	  }

	  function _setPrototypeOf(o, p) {
	    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
	      o.__proto__ = p;
	      return o;
	    };

	    return _setPrototypeOf(o, p);
	  }

	  var Path = function (_Shape) {
	    _inherits(Path, _Shape);

	    function Path(opt) {
	      _classCallCheck(this, Path);

	      var _context = _mmvis._.extend(true, {
	        pointList: [],
	        //从下面的path中计算得到的边界点的集合
	        path: "" //字符串 必须，路径。例如:M 0 0 L 0 10 L 10 10 Z (一个三角形)
	        //M = moveto
	        //L = lineto
	        //H = horizontal lineto
	        //V = vertical lineto
	        //C = curveto
	        //S = smooth curveto
	        //Q = quadratic Belzier curve
	        //T = smooth quadratic Belzier curveto
	        //Z = closepath

	      }, opt.context);

	      opt.context = _context;
	      opt.__parsePathData = null;
	      opt.type = "path";
	      return _possibleConstructorReturn(this, _getPrototypeOf(Path).call(this, opt));
	    }

	    _createClass(Path, [{
	      key: "watch",
	      value: function watch(name, value, preValue) {
	        if (name == "path") {
	          //如果path有变动，需要自动计算新的pointList
	          this.graphics.clear();
	        }
	      }
	    }, {
	      key: "_parsePathData",
	      value: function _parsePathData(data) {
	        if (this.__parsePathData) {
	          return this.__parsePathData;
	        }

	        if (!data) {
	          return [];
	        }

	        this.__parsePathData = [];

	        var paths = _mmvis._.compact(data.replace(/[Mm]/g, "\\r$&").split('\\r'));

	        var me = this;

	        _mmvis._.each(paths, function (pathStr) {
	          me.__parsePathData.push(me._parseChildPathData(pathStr));
	        });

	        return this.__parsePathData;
	      }
	    }, {
	      key: "_parseChildPathData",
	      value: function _parseChildPathData(data) {
	        // command string
	        var cs = data; // command chars

	        var cc = ['m', 'M', 'l', 'L', 'v', 'V', 'h', 'H', 'z', 'Z', 'c', 'C', 'q', 'Q', 't', 'T', 's', 'S', 'a', 'A'];
	        cs = cs.replace(/  /g, ' ');
	        cs = cs.replace(/ /g, ','); //cs = cs.replace(/(.)-/g, "$1,-");

	        cs = cs.replace(/(\d)-/g, '$1,-');
	        cs = cs.replace(/,,/g, ',');
	        var n; // create pipes so that we can split the data

	        for (n = 0; n < cc.length; n++) {
	          cs = cs.replace(new RegExp(cc[n], 'g'), '|' + cc[n]);
	        } // create array


	        var arr = cs.split('|');
	        var ca = []; // init context point

	        var cpx = 0;
	        var cpy = 0;

	        for (n = 1; n < arr.length; n++) {
	          var str = arr[n];
	          var c = str.charAt(0);
	          str = str.slice(1);
	          str = str.replace(new RegExp('e,-', 'g'), 'e-'); //有的时候，比如“22，-22” 数据可能会经常的被写成22-22，那么需要手动修改
	          //str = str.replace(new RegExp('-', 'g'), ',-');
	          //str = str.replace(/(.)-/g, "$1,-")

	          var p = str.split(',');

	          if (p.length > 0 && p[0] === '') {
	            p.shift();
	          }

	          for (var i = 0; i < p.length; i++) {
	            p[i] = parseFloat(p[i]);
	          }

	          while (p.length > 0) {
	            if (isNaN(p[0])) {
	              break;
	            }

	            var cmd = null;
	            var points = [];
	            var ctlPtx;
	            var ctlPty;
	            var prevCmd;
	            var rx;
	            var ry;
	            var psi;
	            var fa;
	            var fs;
	            var x1 = cpx;
	            var y1 = cpy; // convert l, H, h, V, and v to L

	            switch (c) {
	              case 'l':
	                cpx += p.shift();
	                cpy += p.shift();
	                cmd = 'L';
	                points.push(cpx, cpy);
	                break;

	              case 'L':
	                cpx = p.shift();
	                cpy = p.shift();
	                points.push(cpx, cpy);
	                break;

	              case 'm':
	                cpx += p.shift();
	                cpy += p.shift();
	                cmd = 'M';
	                points.push(cpx, cpy);
	                c = 'l';
	                break;

	              case 'M':
	                cpx = p.shift();
	                cpy = p.shift();
	                cmd = 'M';
	                points.push(cpx, cpy);
	                c = 'L';
	                break;

	              case 'h':
	                cpx += p.shift();
	                cmd = 'L';
	                points.push(cpx, cpy);
	                break;

	              case 'H':
	                cpx = p.shift();
	                cmd = 'L';
	                points.push(cpx, cpy);
	                break;

	              case 'v':
	                cpy += p.shift();
	                cmd = 'L';
	                points.push(cpx, cpy);
	                break;

	              case 'V':
	                cpy = p.shift();
	                cmd = 'L';
	                points.push(cpx, cpy);
	                break;

	              case 'C':
	                points.push(p.shift(), p.shift(), p.shift(), p.shift());
	                cpx = p.shift();
	                cpy = p.shift();
	                points.push(cpx, cpy);
	                break;

	              case 'c':
	                points.push(cpx + p.shift(), cpy + p.shift(), cpx + p.shift(), cpy + p.shift());
	                cpx += p.shift();
	                cpy += p.shift();
	                cmd = 'C';
	                points.push(cpx, cpy);
	                break;

	              case 'S':
	                ctlPtx = cpx;
	                ctlPty = cpy;
	                prevCmd = ca[ca.length - 1];

	                if (prevCmd.command === 'C') {
	                  ctlPtx = cpx + (cpx - prevCmd.points[2]);
	                  ctlPty = cpy + (cpy - prevCmd.points[3]);
	                }

	                points.push(ctlPtx, ctlPty, p.shift(), p.shift());
	                cpx = p.shift();
	                cpy = p.shift();
	                cmd = 'C';
	                points.push(cpx, cpy);
	                break;

	              case 's':
	                ctlPtx = cpx, ctlPty = cpy;
	                prevCmd = ca[ca.length - 1];

	                if (prevCmd.command === 'C') {
	                  ctlPtx = cpx + (cpx - prevCmd.points[2]);
	                  ctlPty = cpy + (cpy - prevCmd.points[3]);
	                }

	                points.push(ctlPtx, ctlPty, cpx + p.shift(), cpy + p.shift());
	                cpx += p.shift();
	                cpy += p.shift();
	                cmd = 'C';
	                points.push(cpx, cpy);
	                break;

	              case 'Q':
	                points.push(p.shift(), p.shift());
	                cpx = p.shift();
	                cpy = p.shift();
	                points.push(cpx, cpy);
	                break;

	              case 'q':
	                points.push(cpx + p.shift(), cpy + p.shift());
	                cpx += p.shift();
	                cpy += p.shift();
	                cmd = 'Q';
	                points.push(cpx, cpy);
	                break;

	              case 'T':
	                ctlPtx = cpx, ctlPty = cpy;
	                prevCmd = ca[ca.length - 1];

	                if (prevCmd.command === 'Q') {
	                  ctlPtx = cpx + (cpx - prevCmd.points[0]);
	                  ctlPty = cpy + (cpy - prevCmd.points[1]);
	                }

	                cpx = p.shift();
	                cpy = p.shift();
	                cmd = 'Q';
	                points.push(ctlPtx, ctlPty, cpx, cpy);
	                break;

	              case 't':
	                ctlPtx = cpx, ctlPty = cpy;
	                prevCmd = ca[ca.length - 1];

	                if (prevCmd.command === 'Q') {
	                  ctlPtx = cpx + (cpx - prevCmd.points[0]);
	                  ctlPty = cpy + (cpy - prevCmd.points[1]);
	                }

	                cpx += p.shift();
	                cpy += p.shift();
	                cmd = 'Q';
	                points.push(ctlPtx, ctlPty, cpx, cpy);
	                break;

	              case 'A':
	                rx = p.shift(); //x半径

	                ry = p.shift(); //y半径

	                psi = p.shift(); //旋转角度

	                fa = p.shift(); //角度大小 

	                fs = p.shift(); //时针方向

	                x1 = cpx, y1 = cpy;
	                cpx = p.shift(), cpy = p.shift();
	                cmd = 'A';
	                points = [rx, ry, psi, fa, fs, cpx, cpy, x1, y1];
	                break;

	              case 'a':
	                rx = p.shift();
	                ry = p.shift();
	                psi = p.shift();
	                fa = p.shift();
	                fs = p.shift();
	                x1 = cpx, y1 = cpy;
	                cpx += p.shift();
	                cpy += p.shift();
	                cmd = 'A';
	                points = [rx, ry, psi, fa, fs, cpx, cpy, x1, y1];
	                break;
	            }

	            ca.push({
	              command: cmd || c,
	              points: points
	            });
	          }

	          if (c === 'z' || c === 'Z') {
	            ca.push({
	              command: 'z',
	              points: []
	            });
	          }
	        }
	        return ca;
	      }
	    }, {
	      key: "draw",
	      value: function draw(graphics) {
	        //graphics.beginPath();
	        this.__parsePathData = null;
	        this.context.$model.pointList = [];

	        var pathArray = this._parsePathData(this.context.$model.path);

	        for (var g = 0, gl = pathArray.length; g < gl; g++) {
	          for (var i = 0, l = pathArray[g].length; i < l; i++) {
	            var c = pathArray[g][i].command,
	                p = pathArray[g][i].points;

	            switch (c) {
	              case 'L':
	                graphics.lineTo(p[0], p[1]);
	                break;

	              case 'M':
	                graphics.moveTo(p[0], p[1]);
	                break;

	              case 'C':
	                graphics.bezierCurveTo(p[0], p[1], p[2], p[3], p[4], p[5]);
	                break;

	              case 'Q':
	                graphics.quadraticCurveTo(p[0], p[1], p[2], p[3]);
	                break;

	              case 'A':
	                //前面6个元素用来放path的A 6个参数，path A命令详见
	                _index3.Arc.drawArc(graphics, p[7], p[8], p);

	                break;

	              case 'z':
	                graphics.closePath();
	                break;
	            }
	          }
	        }
	        return this;
	      }
	    }]);

	    return Path;
	  }(_Shape3["default"]);

	  exports.default = Path;
	});
	});

	unwrapExports(Path);

	var Droplet = createCommonjsModule(function (module, exports) {

	(function (global, factory) {
	  {
	    factory(exports, Path, utils, mmvis);
	  }
	})(void 0, function (exports, _Path2, _index, _mmvis) {

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	  exports.default = undefined;

	  var _Path3 = _interopRequireDefault(_Path2);

	  var _index2 = _interopRequireDefault(_index);

	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      default: obj
	    };
	  }

	  function _typeof(obj) {
	    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
	      _typeof = function _typeof(obj) {
	        return typeof obj;
	      };
	    } else {
	      _typeof = function _typeof(obj) {
	        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	      };
	    }

	    return _typeof(obj);
	  }

	  function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  }

	  function _defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  function _createClass(Constructor, protoProps, staticProps) {
	    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) _defineProperties(Constructor, staticProps);
	    return Constructor;
	  }

	  function _possibleConstructorReturn(self, call) {
	    if (call && (_typeof(call) === "object" || typeof call === "function")) {
	      return call;
	    }

	    return _assertThisInitialized(self);
	  }

	  function _assertThisInitialized(self) {
	    if (self === void 0) {
	      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }

	    return self;
	  }

	  function _getPrototypeOf(o) {
	    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
	      return o.__proto__ || Object.getPrototypeOf(o);
	    };
	    return _getPrototypeOf(o);
	  }

	  function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	      throw new TypeError("Super expression must either be null or a function");
	    }

	    subClass.prototype = Object.create(superClass && superClass.prototype, {
	      constructor: {
	        value: subClass,
	        writable: true,
	        configurable: true
	      }
	    });
	    if (superClass) _setPrototypeOf(subClass, superClass);
	  }

	  function _setPrototypeOf(o, p) {
	    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
	      o.__proto__ = p;
	      return o;
	    };

	    return _setPrototypeOf(o, p);
	  }

	  var Droplet = function (_Path) {
	    _inherits(Droplet, _Path);

	    function Droplet(opt) {
	      var _this;

	      _classCallCheck(this, Droplet);

	      opt = _mmvis._.extend(true, {
	        type: "droplet",
	        context: {
	          hr: 0,
	          //{number},  // 必须，水滴横宽（中心到水平边缘最宽处距离）
	          vr: 0 //{number},  // 必须，水滴纵高（中心到尖端距离）

	        }
	      }, _index2["default"].checkOpt(opt));

	      var my = _this = _possibleConstructorReturn(this, _getPrototypeOf(Droplet).call(this, opt));

	      _this.context.$model.path = _this.createPath();
	      return _this;
	    }

	    _createClass(Droplet, [{
	      key: "watch",
	      value: function watch(name, value, preValue) {
	        if (name == "hr" || name == "vr") {
	          this.context.$model.path = this.createPath();
	        }
	      }
	    }, {
	      key: "createPath",
	      value: function createPath() {
	        var model = this.context.$model;
	        var ps = "M 0 " + model.hr + " C " + model.hr + " " + model.hr + " " + model.hr * 3 / 2 + " " + -model.hr / 3 + " 0 " + -model.vr;
	        ps += " C " + -model.hr * 3 / 2 + " " + -model.hr / 3 + " " + -model.hr + " " + model.hr + " 0 " + model.hr + "z";
	        return ps;
	      }
	    }]);

	    return Droplet;
	  }(_Path3["default"]);

	  exports.default = Droplet;
	});
	});

	unwrapExports(Droplet);

	var Ellipse$1 = createCommonjsModule(function (module, exports) {

	(function (global, factory) {
	  {
	    factory(exports, Shape, utils, mmvis);
	  }
	})(void 0, function (exports, _Shape2, _index, _mmvis) {

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	  exports.default = undefined;

	  var _Shape3 = _interopRequireDefault(_Shape2);

	  var _index2 = _interopRequireDefault(_index);

	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      default: obj
	    };
	  }

	  function _typeof(obj) {
	    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
	      _typeof = function _typeof(obj) {
	        return typeof obj;
	      };
	    } else {
	      _typeof = function _typeof(obj) {
	        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	      };
	    }

	    return _typeof(obj);
	  }

	  function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  }

	  function _defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  function _createClass(Constructor, protoProps, staticProps) {
	    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) _defineProperties(Constructor, staticProps);
	    return Constructor;
	  }

	  function _possibleConstructorReturn(self, call) {
	    if (call && (_typeof(call) === "object" || typeof call === "function")) {
	      return call;
	    }

	    return _assertThisInitialized(self);
	  }

	  function _assertThisInitialized(self) {
	    if (self === void 0) {
	      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }

	    return self;
	  }

	  function _getPrototypeOf(o) {
	    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
	      return o.__proto__ || Object.getPrototypeOf(o);
	    };
	    return _getPrototypeOf(o);
	  }

	  function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	      throw new TypeError("Super expression must either be null or a function");
	    }

	    subClass.prototype = Object.create(superClass && superClass.prototype, {
	      constructor: {
	        value: subClass,
	        writable: true,
	        configurable: true
	      }
	    });
	    if (superClass) _setPrototypeOf(subClass, superClass);
	  }

	  function _setPrototypeOf(o, p) {
	    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
	      o.__proto__ = p;
	      return o;
	    };

	    return _setPrototypeOf(o, p);
	  }

	  var Ellipse = function (_Shape) {
	    _inherits(Ellipse, _Shape);

	    function Ellipse(opt) {
	      _classCallCheck(this, Ellipse);

	      opt = _mmvis._.extend(true, {
	        type: "ellipse",
	        context: {
	          hr: 0,
	          //{number},  // 必须，水滴横宽（中心到水平边缘最宽处距离）
	          vr: 0 //{number},  // 必须，水滴纵高（中心到尖端距离）

	        }
	      }, _index2["default"].checkOpt(opt));
	      return _possibleConstructorReturn(this, _getPrototypeOf(Ellipse).call(this, opt));
	    }

	    _createClass(Ellipse, [{
	      key: "watch",
	      value: function watch(name, value, preValue) {
	        if (name == "hr" || name == "vr") {
	          this.graphics.clear();
	        }
	      }
	    }, {
	      key: "draw",
	      value: function draw(graphics) {
	        graphics.drawEllipse(0, 0, this.context.$model.hr * 2, this.context.$model.vr * 2);
	      }
	    }]);

	    return Ellipse;
	  }(_Shape3["default"]);

	  exports.default = Ellipse;
	});
	});

	unwrapExports(Ellipse$1);

	var Polygon$1 = createCommonjsModule(function (module, exports) {

	(function (global, factory) {
	  {
	    factory(exports, Shape, utils, mmvis, _Math);
	  }
	})(void 0, function (exports, _Shape2, _index, _mmvis, _Math2) {

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	  exports.default = undefined;

	  var _Shape3 = _interopRequireDefault(_Shape2);

	  var _index2 = _interopRequireDefault(_index);

	  var _Math3 = _interopRequireDefault(_Math2);

	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      default: obj
	    };
	  }

	  function _typeof(obj) {
	    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
	      _typeof = function _typeof(obj) {
	        return typeof obj;
	      };
	    } else {
	      _typeof = function _typeof(obj) {
	        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	      };
	    }

	    return _typeof(obj);
	  }

	  function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  }

	  function _defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  function _createClass(Constructor, protoProps, staticProps) {
	    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) _defineProperties(Constructor, staticProps);
	    return Constructor;
	  }

	  function _possibleConstructorReturn(self, call) {
	    if (call && (_typeof(call) === "object" || typeof call === "function")) {
	      return call;
	    }

	    return _assertThisInitialized(self);
	  }

	  function _assertThisInitialized(self) {
	    if (self === void 0) {
	      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }

	    return self;
	  }

	  function _getPrototypeOf(o) {
	    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
	      return o.__proto__ || Object.getPrototypeOf(o);
	    };
	    return _getPrototypeOf(o);
	  }

	  function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	      throw new TypeError("Super expression must either be null or a function");
	    }

	    subClass.prototype = Object.create(superClass && superClass.prototype, {
	      constructor: {
	        value: subClass,
	        writable: true,
	        configurable: true
	      }
	    });
	    if (superClass) _setPrototypeOf(subClass, superClass);
	  }

	  function _setPrototypeOf(o, p) {
	    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
	      o.__proto__ = p;
	      return o;
	    };

	    return _setPrototypeOf(o, p);
	  }

	  var Polygon = function (_Shape) {
	    _inherits(Polygon, _Shape);

	    function Polygon(opt) {
	      _classCallCheck(this, Polygon);

	      var _context = _mmvis._.extend(true, {
	        lineType: null,
	        smooth: false,
	        pointList: [],
	        //{Array}  // 必须，各个顶角坐标
	        smoothFilter: _index2["default"].__emptyFunc
	      }, opt.context);

	      if (!opt.isClone) {
	        var start = _context.pointList[0];

	        var end = _context.pointList.slice(-1)[0];

	        if (_context.smooth) {
	          _context.pointList.unshift(end);

	          _context.pointList = _Math3["default"].getSmoothPointList(_context.pointList);
	        }
	      }
	      opt.context = _context;
	      opt.type = "polygon";
	      return _possibleConstructorReturn(this, _getPrototypeOf(Polygon).call(this, opt));
	    }

	    _createClass(Polygon, [{
	      key: "watch",
	      value: function watch(name, value, preValue) {
	        //调用parent的setGraphics
	        if (name == "pointList" || name == "smooth" || name == "lineType") {
	          this.graphics.clear();
	        }
	      }
	    }, {
	      key: "draw",
	      value: function draw(graphics) {
	        //graphics.beginPath();
	        var context = this.context;
	        var pointList = context.pointList;

	        if (pointList.length < 2) {
	          //少于2个点就不画了~
	          return;
	        }
	        graphics.moveTo(pointList[0][0], pointList[0][1]);

	        for (var i = 1, l = pointList.length; i < l; i++) {
	          graphics.lineTo(pointList[i][0], pointList[i][1]);
	        }
	        graphics.closePath();
	        return;
	      }
	    }]);

	    return Polygon;
	  }(_Shape3["default"]);

	  exports.default = Polygon;
	});
	});

	unwrapExports(Polygon$1);

	var Isogon = createCommonjsModule(function (module, exports) {

	(function (global, factory) {
	  {
	    factory(exports, Polygon$1, utils, mmvis, _Math);
	  }
	})(void 0, function (exports, _Polygon2, _index, _mmvis, _Math2) {

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	  exports.default = undefined;

	  var _Polygon3 = _interopRequireDefault(_Polygon2);

	  var _index2 = _interopRequireDefault(_index);

	  var _Math3 = _interopRequireDefault(_Math2);

	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      default: obj
	    };
	  }

	  function _typeof(obj) {
	    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
	      _typeof = function _typeof(obj) {
	        return typeof obj;
	      };
	    } else {
	      _typeof = function _typeof(obj) {
	        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	      };
	    }

	    return _typeof(obj);
	  }

	  function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  }

	  function _defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  function _createClass(Constructor, protoProps, staticProps) {
	    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) _defineProperties(Constructor, staticProps);
	    return Constructor;
	  }

	  function _possibleConstructorReturn(self, call) {
	    if (call && (_typeof(call) === "object" || typeof call === "function")) {
	      return call;
	    }

	    return _assertThisInitialized(self);
	  }

	  function _assertThisInitialized(self) {
	    if (self === void 0) {
	      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }

	    return self;
	  }

	  function _getPrototypeOf(o) {
	    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
	      return o.__proto__ || Object.getPrototypeOf(o);
	    };
	    return _getPrototypeOf(o);
	  }

	  function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	      throw new TypeError("Super expression must either be null or a function");
	    }

	    subClass.prototype = Object.create(superClass && superClass.prototype, {
	      constructor: {
	        value: subClass,
	        writable: true,
	        configurable: true
	      }
	    });
	    if (superClass) _setPrototypeOf(subClass, superClass);
	  }

	  function _setPrototypeOf(o, p) {
	    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
	      o.__proto__ = p;
	      return o;
	    };

	    return _setPrototypeOf(o, p);
	  }

	  var Isogon = function (_Polygon) {
	    _inherits(Isogon, _Polygon);

	    function Isogon(opt) {
	      _classCallCheck(this, Isogon);

	      var _context = _mmvis._.extend(true, {
	        pointList: [],
	        //从下面的r和n计算得到的边界值的集合
	        r: 0,
	        //{number},  // 必须，正n边形外接圆半径
	        n: 0 //{number},  // 必须，指明正几边形

	      }, opt.context);

	      _context.pointList = _Math3["default"].getIsgonPointList(_context.n, _context.r);
	      opt.context = _context;
	      opt.type = "isogon";
	      return _possibleConstructorReturn(this, _getPrototypeOf(Isogon).call(this, opt));
	    }

	    _createClass(Isogon, [{
	      key: "watch",
	      value: function watch(name, value, preValue) {
	        if (name == "r" || name == "n") {
	          //如果path有变动，需要自动计算新的pointList
	          this.context.$model.pointList = _Math3["default"].getIsgonPointList(this.context.$model.n, this.context.$model.r);
	        }

	        if (name == "pointList" || name == "smooth" || name == "lineType") {
	          this.graphics.clear();
	        }
	      }
	    }]);

	    return Isogon;
	  }(_Polygon3["default"]);

	  exports.default = Isogon;
	});
	});

	unwrapExports(Isogon);

	var Line = createCommonjsModule(function (module, exports) {

	(function (global, factory) {
	  {
	    factory(exports, Shape, mmvis);
	  }
	})(void 0, function (exports, _Shape2, _mmvis) {

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	  exports.default = undefined;

	  var _Shape3 = _interopRequireDefault(_Shape2);

	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      default: obj
	    };
	  }

	  function _typeof(obj) {
	    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
	      _typeof = function _typeof(obj) {
	        return typeof obj;
	      };
	    } else {
	      _typeof = function _typeof(obj) {
	        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	      };
	    }

	    return _typeof(obj);
	  }

	  function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  }

	  function _defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  function _createClass(Constructor, protoProps, staticProps) {
	    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) _defineProperties(Constructor, staticProps);
	    return Constructor;
	  }

	  function _possibleConstructorReturn(self, call) {
	    if (call && (_typeof(call) === "object" || typeof call === "function")) {
	      return call;
	    }

	    return _assertThisInitialized(self);
	  }

	  function _assertThisInitialized(self) {
	    if (self === void 0) {
	      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }

	    return self;
	  }

	  function _getPrototypeOf(o) {
	    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
	      return o.__proto__ || Object.getPrototypeOf(o);
	    };
	    return _getPrototypeOf(o);
	  }

	  function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	      throw new TypeError("Super expression must either be null or a function");
	    }

	    subClass.prototype = Object.create(superClass && superClass.prototype, {
	      constructor: {
	        value: subClass,
	        writable: true,
	        configurable: true
	      }
	    });
	    if (superClass) _setPrototypeOf(subClass, superClass);
	  }

	  function _setPrototypeOf(o, p) {
	    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
	      o.__proto__ = p;
	      return o;
	    };

	    return _setPrototypeOf(o, p);
	  }

	  var Line = function (_Shape) {
	    _inherits(Line, _Shape);

	    function Line(opt) {
	      _classCallCheck(this, Line);

	      var _context = _mmvis._.extend(true, {
	        start: {
	          x: 0,
	          // 必须，起点横坐标
	          y: 0 // 必须，起点纵坐标

	        },
	        end: {
	          x: 0,
	          // 必须，终点横坐标
	          y: 0 // 必须，终点纵坐标

	        }
	      }, opt.context);

	      opt.context = _context;
	      opt.type = "line";
	      return _possibleConstructorReturn(this, _getPrototypeOf(Line).call(this, opt));
	    }

	    _createClass(Line, [{
	      key: "watch",
	      value: function watch(name, value, preValue) {
	        //并不清楚是start.x 还是end.x， 当然，这并不重要
	        if (name == "x" || name == "y") {
	          this.graphics.clear();
	        }
	      }
	    }, {
	      key: "draw",
	      value: function draw(graphics) {
	        var model = this.context.$model;
	        graphics.moveTo(model.start.x, model.start.y);
	        graphics.lineTo(model.end.x, model.end.y);
	        return this;
	      }
	    }]);

	    return Line;
	  }(_Shape3["default"]);

	  exports.default = Line;
	});
	});

	unwrapExports(Line);

	var Rect = createCommonjsModule(function (module, exports) {

	(function (global, factory) {
	  {
	    factory(exports, Shape, utils, mmvis);
	  }
	})(void 0, function (exports, _Shape2, _index, _mmvis) {

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	  exports.default = undefined;

	  var _Shape3 = _interopRequireDefault(_Shape2);

	  var _index2 = _interopRequireDefault(_index);

	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      default: obj
	    };
	  }

	  function _typeof(obj) {
	    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
	      _typeof = function _typeof(obj) {
	        return typeof obj;
	      };
	    } else {
	      _typeof = function _typeof(obj) {
	        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	      };
	    }

	    return _typeof(obj);
	  }

	  function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  }

	  function _defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  function _createClass(Constructor, protoProps, staticProps) {
	    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) _defineProperties(Constructor, staticProps);
	    return Constructor;
	  }

	  function _possibleConstructorReturn(self, call) {
	    if (call && (_typeof(call) === "object" || typeof call === "function")) {
	      return call;
	    }

	    return _assertThisInitialized(self);
	  }

	  function _assertThisInitialized(self) {
	    if (self === void 0) {
	      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }

	    return self;
	  }

	  function _getPrototypeOf(o) {
	    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
	      return o.__proto__ || Object.getPrototypeOf(o);
	    };
	    return _getPrototypeOf(o);
	  }

	  function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	      throw new TypeError("Super expression must either be null or a function");
	    }

	    subClass.prototype = Object.create(superClass && superClass.prototype, {
	      constructor: {
	        value: subClass,
	        writable: true,
	        configurable: true
	      }
	    });
	    if (superClass) _setPrototypeOf(subClass, superClass);
	  }

	  function _setPrototypeOf(o, p) {
	    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
	      o.__proto__ = p;
	      return o;
	    };

	    return _setPrototypeOf(o, p);
	  }

	  var Rect = function (_Shape) {
	    _inherits(Rect, _Shape);

	    function Rect(opt) {
	      _classCallCheck(this, Rect);

	      var _context = _mmvis._.extend(true, {
	        width: 0,
	        height: 0,
	        radius: []
	      }, opt.context);

	      opt.context = _context;
	      opt.type = "rect";
	      return _possibleConstructorReturn(this, _getPrototypeOf(Rect).call(this, opt));
	    }

	    _createClass(Rect, [{
	      key: "watch",
	      value: function watch(name, value, preValue) {
	        if (name == "width" || name == "height" || name == "radius") {
	          this.graphics.clear();
	        }
	      }
	    }, {
	      key: "_buildRadiusPath",
	      value: function _buildRadiusPath(graphics) {
	        var model = this.context.$model; //左上、右上、右下、左下角的半径依次为r1、r2、r3、r4
	        //r缩写为1         相当于 [1, 1, 1, 1]
	        //r缩写为[1]       相当于 [1, 1, 1, 1]
	        //r缩写为[1, 2]    相当于 [1, 2, 1, 2]
	        //r缩写为[1, 2, 3] 相当于 [1, 2, 3, 2]

	        var x = 0;
	        var y = 0;
	        var width = model.width;
	        var height = model.height;

	        var r = _index2["default"].getCssOrderArr(model.radius);

	        var G = graphics;
	        var sy = 1;

	        if (height >= 0) {
	          sy = -1;
	        }

	        G.moveTo(parseInt(x + r[0]), parseInt(height));
	        G.lineTo(parseInt(x + width - r[1]), parseInt(height));
	        r[1] !== 0 && G.quadraticCurveTo(x + width, height, parseInt(x + width), parseInt(height + r[1] * sy));
	        G.lineTo(parseInt(x + width), parseInt(y - r[2] * sy));
	        r[2] !== 0 && G.quadraticCurveTo(x + width, y, parseInt(x + width - r[2]), parseInt(y));
	        G.lineTo(parseInt(x + r[3]), parseInt(y));
	        r[3] !== 0 && G.quadraticCurveTo(x, y, parseInt(x), parseInt(y - r[3] * sy));
	        G.lineTo(parseInt(x), parseInt(y + height + r[0] * sy));
	        r[0] !== 0 && G.quadraticCurveTo(x, y + height, parseInt(x + r[0]), parseInt(y + height));
	      }
	    }, {
	      key: "draw",
	      value: function draw(graphics) {
	        var model = this.context.$model;

	        if (!model.radius.length) {
	          graphics.drawRect(0, 0, model.width, model.height);
	        } else {
	          this._buildRadiusPath(graphics);
	        }

	        graphics.closePath();
	        return;
	      }
	    }]);

	    return Rect;
	  }(_Shape3["default"]);

	  exports.default = Rect;
	});
	});

	unwrapExports(Rect);

	var Sector = createCommonjsModule(function (module, exports) {

	(function (global, factory) {
	  {
	    factory(exports, Shape, utils, mmvis, _Math);
	  }
	})(void 0, function (exports, _Shape2, _index, _mmvis, _Math) {

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	  exports.default = undefined;

	  var _Shape3 = _interopRequireDefault(_Shape2);

	  var _index2 = _interopRequireDefault(_index);

	  var _Math2 = _interopRequireDefault(_Math);

	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      default: obj
	    };
	  }

	  function _typeof(obj) {
	    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
	      _typeof = function _typeof(obj) {
	        return typeof obj;
	      };
	    } else {
	      _typeof = function _typeof(obj) {
	        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	      };
	    }

	    return _typeof(obj);
	  }

	  function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  }

	  function _defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  function _createClass(Constructor, protoProps, staticProps) {
	    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) _defineProperties(Constructor, staticProps);
	    return Constructor;
	  }

	  function _possibleConstructorReturn(self, call) {
	    if (call && (_typeof(call) === "object" || typeof call === "function")) {
	      return call;
	    }

	    return _assertThisInitialized(self);
	  }

	  function _assertThisInitialized(self) {
	    if (self === void 0) {
	      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }

	    return self;
	  }

	  function _getPrototypeOf(o) {
	    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
	      return o.__proto__ || Object.getPrototypeOf(o);
	    };
	    return _getPrototypeOf(o);
	  }

	  function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	      throw new TypeError("Super expression must either be null or a function");
	    }

	    subClass.prototype = Object.create(superClass && superClass.prototype, {
	      constructor: {
	        value: subClass,
	        writable: true,
	        configurable: true
	      }
	    });
	    if (superClass) _setPrototypeOf(subClass, superClass);
	  }

	  function _setPrototypeOf(o, p) {
	    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
	      o.__proto__ = p;
	      return o;
	    };

	    return _setPrototypeOf(o, p);
	  }

	  var Sector = function (_Shape) {
	    _inherits(Sector, _Shape);

	    function Sector(opt) {
	      _classCallCheck(this, Sector);

	      var _context = _mmvis._.extend(true, {
	        pointList: [],
	        //边界点的集合,私有，从下面的属性计算的来
	        r0: 0,
	        // 默认为0，内圆半径指定后将出现内弧，同时扇边长度 = r - r0
	        r: 0,
	        //{number},  // 必须，外圆半径
	        startAngle: 0,
	        //{number},  // 必须，起始角度[0, 360)
	        endAngle: 0,
	        //{number},  // 必须，结束角度(0, 360]
	        clockwise: false //是否顺时针，默认为false(顺时针)

	      }, opt.context);

	      opt.context = _context;
	      opt.regAngle = [];
	      opt.isRing = false; //是否为一个圆环

	      opt.type = "sector";
	      return _possibleConstructorReturn(this, _getPrototypeOf(Sector).call(this, opt));
	    }

	    _createClass(Sector, [{
	      key: "watch",
	      value: function watch(name, value, preValue) {
	        if (name == "r0" || name == "r" || name == "startAngle" || name == "endAngle" || name == "clockwise") {
	          //因为这里的graphs不一样。
	          this.isRing = false; //是否为一个圆环，这里也要开始初始化一下

	          this.graphics.clear();
	        }
	      }
	    }, {
	      key: "draw",
	      value: function draw(graphics) {
	        var model = this.context.$model; // 形内半径[0,r)

	        var r0 = typeof model.r0 == 'undefined' ? 0 : model.r0;
	        var r = model.r; // 扇形外半径(0,r]

	        var startAngle = _Math2["default"].degreeTo360(model.startAngle); // 起始角度[0,360)


	        var endAngle = _Math2["default"].degreeTo360(model.endAngle); // 结束角度(0,360]


	        if (model.startAngle != model.endAngle && Math.abs(model.startAngle - model.endAngle) % 360 == 0) {
	          //if( startAngle == endAngle && model.startAngle != model.endAngle ) {
	          //如果两个角度相等，那么就认为是个圆环了
	          this.isRing = true;
	          startAngle = 0;
	          endAngle = 360;
	        }

	        startAngle = _Math2["default"].degreeToRadian(startAngle);
	        endAngle = _Math2["default"].degreeToRadian(endAngle); //处理下极小夹角的情况
	        //if( endAngle - startAngle < 0.025 ){
	        //    startAngle -= 0.003
	        //}

	        var G = graphics; //G.beginPath();

	        if (this.isRing) {
	          if (model.r0 == 0) {
	            //圆
	            G.drawCircle(0, 0, model.r);
	          } else {
	            //圆环
	            if (model.fillStyle && model.fillAlpha) {
	              G.beginPath();
	              G.arc(0, 0, r, startAngle, endAngle, model.clockwise);

	              if (model.r0 == 0) {
	                G.lineTo(0, 0);
	              } else {
	                G.arc(0, 0, r0, endAngle, startAngle, !model.clockwise);
	              }

	              G.closePath();
	              G.currentPath.lineWidth = 0;
	              G.currentPath.strokeStyle = null;
	              G.currentPath.strokeAlpha = 0;
	              G.currentPath.line = false;
	            }

	            if (model.lineWidth && model.strokeStyle && model.strokeAlpha) {
	              G.beginPath();
	              G.arc(0, 0, r, startAngle, endAngle, model.clockwise);
	              G.closePath();
	              G.currentPath.fillStyle = null;
	              G.currentPath.fill = false;
	              G.beginPath();
	              G.arc(0, 0, r0, endAngle, startAngle, !model.clockwise);
	              G.closePath();
	              G.currentPath.fillStyle = null;
	              G.currentPath.fill = false;
	            }
	          }
	        } else {
	          //正常的扇形状
	          G.beginPath();
	          G.arc(0, 0, r, startAngle, endAngle, model.clockwise);

	          if (model.r0 == 0) {
	            G.lineTo(0, 0);
	          } else {
	            G.arc(0, 0, r0, endAngle, startAngle, !model.clockwise);
	          }

	          G.closePath();
	        } //G.closePath();

	      }
	    }]);

	    return Sector;
	  }(_Shape3["default"]);

	  exports.default = Sector;
	});
	});

	unwrapExports(Sector);

	var arrow = createCommonjsModule(function (module, exports) {

	(function (global, factory) {
	  {
	    factory(exports, Shape, mmvis);
	  }
	})(void 0, function (exports, _Shape2, _mmvis) {

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	  exports.default = undefined;

	  var _Shape3 = _interopRequireDefault(_Shape2);

	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      default: obj
	    };
	  }

	  function _typeof(obj) {
	    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
	      _typeof = function _typeof(obj) {
	        return typeof obj;
	      };
	    } else {
	      _typeof = function _typeof(obj) {
	        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	      };
	    }

	    return _typeof(obj);
	  }

	  function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  }

	  function _defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  function _createClass(Constructor, protoProps, staticProps) {
	    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) _defineProperties(Constructor, staticProps);
	    return Constructor;
	  }

	  function _possibleConstructorReturn(self, call) {
	    if (call && (_typeof(call) === "object" || typeof call === "function")) {
	      return call;
	    }

	    return _assertThisInitialized(self);
	  }

	  function _assertThisInitialized(self) {
	    if (self === void 0) {
	      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }

	    return self;
	  }

	  function _getPrototypeOf(o) {
	    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
	      return o.__proto__ || Object.getPrototypeOf(o);
	    };
	    return _getPrototypeOf(o);
	  }

	  function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	      throw new TypeError("Super expression must either be null or a function");
	    }

	    subClass.prototype = Object.create(superClass && superClass.prototype, {
	      constructor: {
	        value: subClass,
	        writable: true,
	        configurable: true
	      }
	    });
	    if (superClass) _setPrototypeOf(subClass, superClass);
	  }

	  function _setPrototypeOf(o, p) {
	    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
	      o.__proto__ = p;
	      return o;
	    };

	    return _setPrototypeOf(o, p);
	  }

	  var Line = function (_Shape) {
	    _inherits(Line, _Shape);

	    function Line(opt) {
	      _classCallCheck(this, Line);

	      var _context = _mmvis._.extend(true, {
	        control: {
	          x: 0,
	          // 必须，起点横坐标
	          y: 0 // 必须，起点纵坐标

	        },
	        point: {
	          x: 0,
	          // 必须，终点横坐标
	          y: 0 // 必须，终点纵坐标

	        },
	        angle: null,
	        // control的存在，也就是为了计算出来这个angle
	        theta: 30,
	        // 箭头夹角
	        headlen: 6,
	        // 斜边长度
	        lineWidth: 1,
	        strokeStyle: '#666',
	        fillStyle: null
	      }, opt.context);

	      opt.context = _context;
	      opt.type = "arrow";
	      return _possibleConstructorReturn(this, _getPrototypeOf(Line).call(this, opt));
	    }

	    _createClass(Line, [{
	      key: "watch",
	      value: function watch(name, value, preValue) {
	        //并不清楚是start.x 还是end.x， 当然，这并不重要
	        if (name == "x" || name == "y" || name == "theta" || name == "headlen" || name == "angle") {
	          this.graphics.clear();
	        }
	      }
	    }, {
	      key: "draw",
	      value: function draw(graphics) {
	        var model = this.context.$model;
	        var fromX = model.control.x;
	        var fromY = model.control.y;
	        var toX = model.point.x;
	        var toY = model.point.y; // 计算各角度和对应的P2,P3坐标 

	        var angle = model.angle != null ? model.angle - 180 : Math.atan2(fromY - toY, fromX - toX) * 180 / Math.PI,
	            angle1 = (angle + model.theta) * Math.PI / 180,
	            angle2 = (angle - model.theta) * Math.PI / 180,
	            topX = model.headlen * Math.cos(angle1),
	            topY = model.headlen * Math.sin(angle1),
	            botX = model.headlen * Math.cos(angle2),
	            botY = model.headlen * Math.sin(angle2);
	        var arrowX = toX + topX;
	        var arrowY = toY + topY;
	        graphics.moveTo(arrowX, arrowY);
	        graphics.lineTo(toX, toY);
	        graphics.lineTo(toX + botX, toY + botY);

	        if (model.fillStyle) {
	          graphics.lineTo(arrowX, arrowY);
	          graphics.closePath();
	        }
	        return this;
	      }
	    }]);

	    return Line;
	  }(_Shape3["default"]);

	  exports.default = Line;
	});
	});

	unwrapExports(arrow);

	var dist = createCommonjsModule(function (module, exports) {

	(function (global, factory) {
	  {
	    factory(exports, Application, DisplayObject, DisplayObjectContainer, Stage, Sprite, Shape, Point, Text, BrokenLine, Circle$1, Droplet, Ellipse$1, Isogon, Line, Path, Polygon$1, Rect, Sector, arrow, AnimationFrame, utils);
	  }
	})(void 0, function (exports, _Application, _DisplayObject, _DisplayObjectContainer, _Stage, _Sprite, _Shape, _Point, _Text, _BrokenLine, _Circle, _Droplet, _Ellipse, _Isogon, _Line, _Path, _Polygon, _Rect, _Sector, _arrow, _AnimationFrame, _index) {

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });

	  var _Application2 = _interopRequireDefault(_Application);

	  var _DisplayObject2 = _interopRequireDefault(_DisplayObject);

	  var _DisplayObjectContainer2 = _interopRequireDefault(_DisplayObjectContainer);

	  var _Stage2 = _interopRequireDefault(_Stage);

	  var _Sprite2 = _interopRequireDefault(_Sprite);

	  var _Shape2 = _interopRequireDefault(_Shape);

	  var _Point2 = _interopRequireDefault(_Point);

	  var _Text2 = _interopRequireDefault(_Text);

	  var _BrokenLine2 = _interopRequireDefault(_BrokenLine);

	  var _Circle2 = _interopRequireDefault(_Circle);

	  var _Droplet2 = _interopRequireDefault(_Droplet);

	  var _Ellipse2 = _interopRequireDefault(_Ellipse);

	  var _Isogon2 = _interopRequireDefault(_Isogon);

	  var _Line2 = _interopRequireDefault(_Line);

	  var _Path2 = _interopRequireDefault(_Path);

	  var _Polygon2 = _interopRequireDefault(_Polygon);

	  var _Rect2 = _interopRequireDefault(_Rect);

	  var _Sector2 = _interopRequireDefault(_Sector);

	  var _arrow2 = _interopRequireDefault(_arrow);

	  var _AnimationFrame2 = _interopRequireDefault(_AnimationFrame);

	  var _index2 = _interopRequireDefault(_index);

	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      default: obj
	    };
	  }

	  //shapes
	  var Canvax = {
	    App: _Application2["default"]
	  };
	  Canvax.Display = {
	    DisplayObject: _DisplayObject2["default"],
	    DisplayObjectContainer: _DisplayObjectContainer2["default"],
	    Stage: _Stage2["default"],
	    Sprite: _Sprite2["default"],
	    Shape: _Shape2["default"],
	    Point: _Point2["default"],
	    Text: _Text2["default"]
	  };
	  Canvax.Shapes = {
	    BrokenLine: _BrokenLine2["default"],
	    Circle: _Circle2["default"],
	    Droplet: _Droplet2["default"],
	    Ellipse: _Ellipse2["default"],
	    Isogon: _Isogon2["default"],
	    Line: _Line2["default"],
	    Path: _Path2["default"],
	    Polygon: _Polygon2["default"],
	    Rect: _Rect2["default"],
	    Sector: _Sector2["default"],
	    Arrow: _arrow2["default"]
	  };
	  Canvax.AnimationFrame = _AnimationFrame2["default"];
	  Canvax.utils = _index2["default"];
	  exports["default"] = Canvax;
	});
	});

	var index = unwrapExports(dist);

	module.exports = index;
	});

	unwrapExports(index_cjs$1);

	var chart = createCommonjsModule(function (module, exports) {
	!function(t,e){e(exports,index_cjs$1,index_cjs);}(void 0,function(t,e,l){Object.defineProperty(t,"__esModule",{value:!0});var n,a=(n=e)&&n.__esModule?n:{default:n};function i(t){return (i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i);}}function r(t,e){return !e||"object"!==i(e)&&"function"!=typeof e?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(t):e}function s(t){return (s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){return (h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var d,c,u=(function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e);}(f,l.event.Dispatcher),d=f,(c=[{key:"init",value:function(){var o=this,e=this._opt;for(var i in this.padding=this._getPadding(),l._.each(this.__highModules,function(i){if(e[i]){var t=l._.flatten([e[i]]);"theme"==i&&(t=[t]),l._.each(t,function(t){if(("coord"!=i||t.type)&&("graphs"!=i||t.field||t.keyField)){var e=o.componentModules.get(i,t.type);if(e){var n=new e(t,o);o.components.push(n);}}});}}),this._opt)if(-1==l._.indexOf(this.__highModules,i)){var t=this._opt[i];l._.isArray(t)||(t=[t]),l._.each(t,function(t){var e=o.componentModules.get(i,t.type);if(e){var n=new e(t,o);o.components.push(n);}});}}},{key:"draw",value:function(t){var n=this;t=t||{};var e=this.getComponent({name:"coord"});e&&e.horizontal&&this._drawBeginHorizontal();var i=this.width-this.padding.left-this.padding.right,o=this.height-this.padding.top-this.padding.bottom,a={x:this.padding.left,y:this.padding.top};if(e&&(e.draw(t),i=e.width,o=e.height,a=e.origin),0!=this.dataFrame.length){var r=this.getComponents({name:"graphs"}),s=r.length,h=0;t=l._.extend(t,{width:i,height:o,origin:a}),l._.each(r,function(e){e.on("complete",function(t){++h==s&&n.fire("complete"),e.inited=!0;}),e.draw(t);});for(var d=0,c=this.components.length;d<c;d++){var p=this.components[d];-1==l._.indexOf(this.__highModules,p.name)&&p.draw(t);}this._bindEvent(),e&&e.horizontal&&this._drawEndHorizontal();}else n.fire("complete");}},{key:"_drawBeginHorizontal",value:function(){var t=this.padding,e=t.top;t.top=t.right,t.right=t.bottom,t.bottom=t.left,t.left=e;}},{key:"_drawEndHorizontal",value:function(){var t=this.graphsSprite.context;t.x+=(this.width-this.height)/2,t.y+=(this.height-this.width)/2,t.rotation=90,t.rotateOrigin={x:this.height/2,y:this.width/2},this._horizontalGraphsText();}},{key:"_horizontalGraphsText",value:function(){l._.each(this.getComponents({name:"graphs"}),function(t){!function e(t){if(t.children&&l._.each(t.children,function(t){e(t);}),"text"==t.type&&!t.__horizontal){var n=t.context;n.width,n.height,n.rotation=n.rotation-90,t.__horizontal=!0;}}(t.sprite);});}},{key:"_getPadding",value:function(){var t=20;this._opt.coord&&"padding"in this._opt.coord&&(l._.isObject(this._opt.coord.padding)||(t=this._opt.coord.padding));var e={top:t,right:t,bottom:t,left:t};return this._opt.coord&&"padding"in this._opt.coord&&l._.isObject(this._opt.coord.padding)&&(e=l._.extend(e,this._opt.coord.padding)),e}},{key:"getTheme",value:function(t){var e=l.global.getGlobalTheme(),n=this.getComponent({name:"theme"});return n&&(e=n.get()),null!=t?e[t%e.length]||"#ccc":e}},{key:"setCoord_Graphs_Sp",value:function(){this.coordSprite=new a.default.Display.Sprite({id:"coordSprite"}),this.stage.addChild(this.coordSprite),this.graphsSprite=new a.default.Display.Sprite({id:"graphsSprite"}),this.stage.addChild(this.graphsSprite);}},{key:"destroy",value:function(){this.clean(),this.el&&(this.el.removeAttribute("chart_id"),this.el.removeAttribute("chartx_version"),this.canvax.destroy(),this.el=null),this._destroy&&this._destroy(),this.fire("destroy");}},{key:"clean",value:function(){for(var t=0,e=this.canvax.children.length;t<e;t++)for(var n=this.canvax.getChildAt(t),i=0,o=n.children.length;i<o;i++)n.getChildAt(i).destroy(),i--,o--;this.setCoord_Graphs_Sp(),this.components=[],this.canvax.domView.innerHTML="";}},{key:"resize",value:function(){var t=parseInt(this.el.offsetWidth),e=parseInt(this.el.offsetHeight);t==this.width&&e==this.height||(this.width=t,this.height=e,this.canvax.resize(),this.inited=!1,this.clean(),this.init(),this.draw({resize:!0}),this.inited=!0);}},{key:"reset",value:function(t,e){t&&(this._opt=t),e&&(this._data=e),this.dataFrame=this.initData(this._data,t),this.clean(),this.init(),this.draw();}},{key:"resetData",value:function(t,e){var n=this;this._data=t;var i=this.dataFrame.org.length;if(this.dataFrame.resetData(t),!i)return this.clean(),this.init(),void this.draw(this._opt);var o=this.getComponent({name:"coord"});o&&o.resetData(this.dataFrame,e),l._.each(this.getComponents({name:"graphs"}),function(t){t.resetData(n.dataFrame,e);}),this.componentsReset(e),o&&o.horizontal&&this._horizontalGraphsText(),this.fire("resetData");}},{key:"initData",value:function(){return l.dataFrame.apply(this,arguments)}},{key:"componentsReset",value:function(n){var i=this;l._.each(this.components,function(t,e){-1==l._.indexOf(i.__highModules,t.name)&&(n&&n.comp&&n.comp.__cid==t.__cid||t.reset&&t.reset(i[t.type]||{},i.dataFrame));});}},{key:"getComponentById",value:function(e){var n;return l._.each(this.components,function(t){if(t.id&&t.id==e)return n=t,!1}),n}},{key:"getComponent",value:function(t){return this.getComponents(t)[0]}},{key:"getComponents",value:function(i,t){var o=[],a=0;for(var e in t=t||this.components,i)a++;return a?(l._.each(t,function(t){var e=0;for(var n in i)JSON.stringify(t[n])==JSON.stringify(i[n])&&e++;a==e&&o.push(t);}),o):t}},{key:"getGraph",value:function(t){return this.getGraphs(t)[0]}},{key:"getGraphs",value:function(t){return this.getComponents(t,this.getComponents({name:"graphs"}))}},{key:"getGraphById",value:function(e){var n;return l._.each(this.getComponents({name:"graphs"}),function(t){if(t.id==e)return n=t,!1}),n}},{key:"getCoord",value:function(t){return this.getComponent(l._.extend(!0,{name:"coord"},t))}},{key:"getLegendData",value:function(){var i=this,o=[];if(l._.each(this.getComponents({name:"graphs"}),function(t){l._.each(t.getLegendData(),function(e){if(!l._.find(o,function(t){return t.name==e.name})){var t=l._.extend(!0,{},e);t.color=e.fillStyle||e.color||e.style,o.push(t);}});}),o.length)return o;var t=i.getComponent({name:"coord"});return l._.each(l._.flatten(t.fieldsMap),function(e,t){var n=!1;l._.each(i._opt.graphs,function(t){if(-1<l._.indexOf(l._.flatten([t.field]),e.field))return !(n=!0)}),n&&o.push({enabled:e.enabled,name:e.field,field:e.field,ind:e.ind,color:e.color,yAxis:e.yAxis});}),o}},{key:"show",value:function(e,n){var t=this.getComponent({name:"coord"});t&&t.show(e,n),l._.each(this.getComponents({name:"graphs"}),function(t){t.show(e,n);}),this.componentsReset(n);}},{key:"hide",value:function(e,n){var t=this.getComponent({name:"coord"});t&&t.hide(e,n),l._.each(this.getComponents({name:"graphs"}),function(t){t.hide(e,n);}),this.componentsReset(n);}},{key:"_bindEvent",value:function(){var i=this;this.on(l.event.types.get(),function(e){e.eventInfo&&l._.each(this.getGraphs(),function(t){t.triggerEvent(e);});var t=i.getComponent({name:"tips"}),n=i.getComponent({name:"coord"});t&&(i._setGraphsTipsInfo.apply(i,[e]),"mouseover"!=e.type&&"mousedown"!=e.type||(t.show(e),i._tipsPointerAtAllGraphs(e)),"mousemove"==e.type&&(t.move(e),i._tipsPointerAtAllGraphs(e)),"mouseout"!=e.type||e.toTarget&&n&&n.induce&&n.induce.containsPoint(n.induce.globalToLocal(e.target.localToGlobal(e.point)))||(t.hide(e),i._tipsPointerHideAtAllGraphs(e)));});}},{key:"_setGraphsTipsInfo",value:function(e){e.eventInfo||(e.eventInfo={});var t=this.getComponent({name:"coord"});if(t&&(e.eventInfo=t.getTipsInfoHandler(e)),"tipsEnabled"in e.eventInfo||(e.eventInfo.tipsEnabled=!0),!e.eventInfo.nodes||!e.eventInfo.nodes.length){var n=[],i=e.eventInfo.iNode;l._.each(this.getComponents({name:"graphs"}),function(t){n=n.concat(t.getNodesAt(i,e));}),e.eventInfo.nodes=n;}}},{key:"_tipsPointerAtAllGraphs",value:function(e){l._.each(this.getComponents({name:"graphs"}),function(t){t.tipsPointerOf(e);});}},{key:"_tipsPointerHideAtAllGraphs",value:function(e){l._.each(this.getComponents({name:"graphs"}),function(t){t.tipsPointerHideOf(e);});}}])&&o(d.prototype,c),f);function f(t,e,n,i){var o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,f),(o=r(this,s(f).call(this))).componentModules=i,o._node=t,o._data=e,o._opt=n,o.dataFrame=o.initData(e,n),o.el=l.$.query(t),o.width=parseInt(o.el.offsetWidth),o.height=parseInt(o.el.offsetHeight),o.padding=null,o.canvax=new a.default.App({el:o.el,webGL:!1}),o.canvax.registEvent(),o.id="chartx_"+o.canvax.id,o.el.setAttribute("chart_id",o.id),o.el.setAttribute("chartx_version","2.0"),o.stage=new a.default.Display.Stage({id:"main-chart-stage"}),o.canvax.addChild(o.stage),o.setCoord_Graphs_Sp(),o.__highModules=["theme","coord","graphs"],o.components=[],o.inited=!1,o.init(),o}l.global.registerComponent(u,"chart"),t.default=u;});
	});

	unwrapExports(chart);

	var component = createCommonjsModule(function (module, exports) {
	!function(e,t){t(exports,index_cjs$1,index_cjs);}(void 0,function(e,t,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,r=(n=t)&&n.__esModule?n:{default:n};function i(e){return (i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e){return (u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o);}}function a(e,t,n){return t&&c(e.prototype,t),n&&c(e,n),e}function l(e,t){return (l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var s=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t);}(p,o.event.Dispatcher),a(p,null,[{key:"defaultProps",value:function(){return {enabled:{detail:"是否开启该组件",default:!1}}}},{key:"_isComponentRoot",value:function(){return !0}}]),a(p,[{key:"init",value:function(){}},{key:"draw",value:function(){}},{key:"destroy",value:function(){}},{key:"reset",value:function(){}},{key:"setPosition",value:function(e){(e=e||this.pos).x&&(this.sprite.context.x=e.x),e.y&&(this.sprite.context.y=e.y);}},{key:"layout",value:function(){}}]),p);function p(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),n=function(e,t){return !t||"object"!==i(t)&&"function"!=typeof t?f(e):t}(this,u(p).call(this,e,t)),o._.extend(!0,f(n),(0, o.getDefaultProps)(p.defaultProps()),e),n.name="component",n.type=null,n._opt=e,n.app=t,n.width=0,n.height=0,n.pos={x:0,y:0},n.margin={top:0,right:0,bottom:0,left:0},n.__cid=r.default.utils.createId("comp_"),n}e.default=s;});
	});

	unwrapExports(component);

	var coord = createCommonjsModule(function (module, exports) {
	!function(e,t){t(exports,component,index_cjs$1,index_cjs);}(void 0,function(e,t,n,f){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(t),r=o(n);function o(e){return e&&e.__esModule?e:{default:e}}function a(e){return (a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e){return (u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i);}}function c(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}function d(e,t){return (d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t);}(y,i.default),c(y,null,[{key:"defaultProps",value:function(){return {type:{detail:"坐标系组件",documentation:"坐标系组件，可选值有'rect'（二维直角坐标系）,'polar'（二维极坐标系）,'box'（三维直角坐标系） ",insertText:"type: ",default:"",values:["rect","polar","box","polar3d"]},width:{detail:"坐标系width",default:0},height:{detail:"坐标系height",default:0},origin:{detail:"坐标系原点",propertys:{x:{detail:"原点x位置",default:0},y:{detail:"原点x位置",default:0}}}}}}]),c(y,[{key:"setFieldsMap",value:function(e){var o=this,a=0,u=e.type||"yAxis",t=[];return f._.each(this.getAxiss(e),function(e){e.field&&(t=t.concat(e.field));}),function e(t){f._.isString(t)&&(t=[t]);for(var n=f._.clone(t),i=0,r=t.length;i<r;i++)f._.isString(t[i])&&(n[i]={field:t[i],enabled:!0,color:o.app.getTheme(a),ind:a++},n[i][u]=o.getAxis({type:u,field:t[i]})),f._.isArray(t[i])&&(n[i]=e(t[i]));return n}(t)}},{key:"setFieldEnabled",value:function(i){!function n(e){f._.each(e,function(e,t){f._.isArray(e)?n(e):e.field&&e.field==i&&(e.enabled=!e.enabled);});}(this.fieldsMap);}},{key:"getFieldMapOf",value:function(i){var r=null;return function n(e){f._.each(e,function(e,t){if(f._.isArray(e))n(e);else if(e.field&&e.field==i)return r=e,!1});}(this.fieldsMap),r}},{key:"getEnabledFieldsOf",value:function(i){var r=[],o=i?i.type:"yAxis";return f._.each(this.fieldsMap,function(e,t){if(f._.isArray(e)){var n=[];f._.each(e,function(e,t){e[o]===i&&e.field&&e.enabled&&n.push(e.field);}),n.length&&r.push(n);}else e[o]===i&&e.field&&e.enabled&&r.push(e.field);}),r}},{key:"filterEnabledFields",value:function(e){var n=this,i=[];return f._.isArray(e)||(e=[e]),f._.each(e,function(e){if(f._.isArray(e)){var t=[];f._.each(e,function(e){n.getFieldMapOf(e).enabled&&t.push(e);}),t.length&&i.push(t);}else n.getFieldMapOf(e).enabled&&i.push(e);}),i}},{key:"getAxisDataFrame",value:function(e){return {field:e,org:this.dataFrame.getDataOrg(e,function(e){return null==e||""==e?e:isNaN(Number(e))?e:Number(e)})}}},{key:"hide",value:function(e){this.changeFieldEnabled(e);}},{key:"show",value:function(e){this.changeFieldEnabled(e);}},{key:"getSizeAndOrigin",value:function(){return {width:this.width,height:this.height,origin:this.origin}}},{key:"getPoint",value:function(){}},{key:"getAxisOriginPoint",value:function(){}},{key:"getOriginPos",value:function(){}},{key:"getAxis",value:function(e){return this.getAxiss(e)[0]}},{key:"getAxiss",value:function(a){var u=[],l=0;for(var e in a)l++;return f._.each(this._axiss,function(e){var t=0;for(var n in a)if("field"==n){var i=f._.flatten([e[n]]),r=f._.flatten([a[n]]),o=!0;f._.each(r,function(e){-1==f._.indexOf(i,e)&&(o=!1);}),o&&t++;}else JSON.stringify(e[n])==JSON.stringify(a[n])&&t++;l==t&&u.push(e);}),u}}]),y);function y(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,y),n=function(e,t){return !t||"object"!==a(t)&&"function"!=typeof t?l(e):t}(this,u(y).call(this,e,t)),f._.extend(!0,l(n),(0, f.getDefaultProps)(y.defaultProps())),n.name="coord",n._opt=e,n.app=t,n.dataFrame=n.app.dataFrame,n.sprite=new r.default.Display.Sprite({name:"coord_"+e.type}),n.app.coordSprite.addChild(n.sprite),n.fieldsMap=null,n.induce=null,n._axiss=[],n}e.default=p;});
	});

	unwrapExports(coord);

	var tools = createCommonjsModule(function (module, exports) {
	!function(e,r){r(exports,index_cjs);}(void 0,function(e,o){Object.defineProperty(e,"__esModule",{value:!0}),e.numAddSymbol=function(e,r){var n=Number(e),t=r||",";if(!n)return String(e);{if(1e3<=n){var i=parseInt(n/1e3);return String(e.toString().replace(i,i+t))}return String(e)}},e.getDisMinATArr=function(e,r){for(var n=0,t=Math.abs(e-r[0]),i=1,a=r.length;i<a;i++)t>Math.abs(e-r[i])&&(t=Math.abs(e-r[i]),n=i);return n},e.getPath=function(e){var r="",n={x:0,y:0};r=o._.isArray(e[0])?(n.x=e[0][0],n.y=e[0][1],"M"+e[0][0]+" "+e[0][1]):(n=e[0],"M"+e[0].x+" "+e[0].y);for(var t=1,i=e.length;t<i;t++){var a=0,f=0,u=e[t];f=o._.isArray(u)?(a=u[0],u[1]):(a=u.x,u.y),a==n.x&&f==n.y?r+=" z":r+=" L"+a+" "+f;}return r};});
	});

	unwrapExports(tools);

	var axis = createCommonjsModule(function (module, exports) {
	!function(e,t){t(exports,index_cjs);}(void 0,function(e,n){function a(e){return (a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e){return (o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(e,t){for(var i=0;i<t.length;i++){var l=t[i];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l);}}function t(e,t,i){return t&&l(e.prototype,t),i&&l(e,i),e}function i(e,t){return (i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t);}(u,n.axis),t(u,null,[{key:"defaultProps",value:function(){return {field:{detail:"轴字段配置",documentation:"目前x轴的field只支持单维度设置，也就是说只支持一条x轴",default:[]},layoutType:{detail:"布局方式",default:"rule"},width:{detail:"轴宽",default:0},height:{detail:"轴高",default:0},enabled:{detail:"是否显示轴",default:!0},animation:{detail:"是否开启动画",default:!0},title:{detail:"轴名称",propertys:{shapeType:"text",textAlign:{detail:"水平对齐方式",default:"center"},textBaseline:{detail:"基线对齐方式",default:"middle"},strokeStyle:{detail:"文本描边颜色",default:null},lineHeight:{detail:"行高",default:0},text:{detail:"轴名称的内容",default:""},fontColor:{detail:"颜色",default:"#999"},fontSize:{detail:"字体大小",default:12}}},tickLine:{detail:"刻度线",propertys:{enabled:{detail:"是否开启",default:!0},lineWidth:{detail:"刻度线宽",default:1},lineLength:{detail:"刻度线长度",default:4},distance:{detail:"和前面一个元素的距离",default:2},strokeStyle:{detail:"描边颜色",default:"#cccccc"}}},axisLine:{detail:"轴线配置",propertys:{enabled:{detail:"是否有轴线",default:!0},position:{detail:"轴线的位置",documentation:'default在align的位置（left，right），可选 "center" 和 具体的值',default:"default"},lineWidth:{detail:"轴线宽度",default:1},strokeStyle:{detail:"轴线的颜色",default:"#cccccc"}}},label:{detail:"刻度文本",propertys:{enabled:{detail:"是否显示刻度文本",default:!0},fontColor:{detail:"文本颜色",default:"#999"},fontSize:{detail:"字体大小",default:12},rotation:{detail:"旋转角度",default:0},format:{detail:"label文本的格式化处理函数",default:null},distance:{detail:"和轴线之间的间距",default:2},textAlign:{detail:"水平方向对齐方式",default:"center"},lineHeight:{detail:"文本的行高",default:1},evade:{detail:"是否开启逃避算法,目前的逃避只是隐藏",default:!0}}},filter:{detail:"过滤函数",documentation:"可以用来过滤哪些yaxis 的 节点是否显示已经颜色之类的",default:null},trimLayout:{detail:"自定义的显示规则函数",documentation:"如果用户有手动的 trimLayout ，那么就全部visible为true，然后调用用户自己的过滤程序",default:null}}}}]),t(u,[{key:"drawWaterLine",value:function(e){"proportion"==this.layoutType&&e>=this._min&&e<=this._max||(this.dataSection=[],this.setWaterLine(e),this._initHandle(),this.draw());}}]),u);function u(e,t,i){var l;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),l=function(e,t){return !t||"object"!==a(t)&&"function"!=typeof t?d(e):t}(this,o(u).call(this,e,t)),n._.extend(!0,d(l),(0, n.getDefaultProps)(u.defaultProps())),l}e.default=r;});
	});

	unwrapExports(axis);

	var xaxis = createCommonjsModule(function (module, exports) {
	!function(t,e){e(exports,index_cjs$1,tools,index_cjs,axis);}(void 0,function(t,e,i,p,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var v=a(e),l=a(n);function a(t){return t&&t.__esModule?t:{default:t}}function o(t){return (o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t){return (s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function h(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n);}}function u(t,e,i){return e&&h(t.prototype,e),i&&h(t,i),t}function d(t,e){return (d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var b=v.default.Shapes.Line,f=(function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e);}(x,l.default),u(x,null,[{key:"defaultProps",value:function(){return {}}}]),u(x,[{key:"init",value:function(t){this._setField(),this._initHandle(t),this.sprite=new v.default.Display.Sprite({id:"xAxisSprite_"+(new Date).getTime()}),this.rulesSprite=new v.default.Display.Sprite({id:"xRulesSprite_"+(new Date).getTime()}),this.sprite.addChild(this.rulesSprite);}},{key:"_initHandle",value:function(t){var n=this;t&&(!t.isH||t.label&&void 0!==t.label.rotaion||(this.label.rotation=90)),this.setDataSection(),n._formatTextSection=[],n._textElements=[],p._.each(n.dataSection,function(t,e){n._formatTextSection[e]=n._getFormatText(t,e);var i=new v.default.Display.Text(n._formatTextSection[e],{context:{fontSize:n.label.fontSize}});n._textElements[e]=i;}),0!=this.label.rotation&&(this.label.textAlign="right"),this._getTitle(),this._setXAxisHeight();}},{key:"_setField",value:function(t){t&&(this.field=t),this.field=p._.flatten([this.field])[0];}},{key:"draw",value:function(t){t&&p._.extend(!0,this,t),this.setAxisLength(this.width),this._trimXAxis(),this._widget(t),this.setX(this.pos.x),this.setY(this.pos.y);}},{key:"resetData",value:function(t){this._setField(t.field),this.resetDataOrg(t.org),this._initHandle(),this.draw();}},{key:"setX",value:function(t){this.sprite.context.x=t,this.pos.x=t;}},{key:"setY",value:function(t){this.sprite.context.y=t,this.pos.y=t;}},{key:"_getTitle",value:function(){this.title.text&&(this._title?this._title.resetText(this.title.text):this._title=new v.default.Display.Text(this.title.text,{context:{fontSize:this.title.fontSize,textAlign:this.title.textAlign,textBaseline:this.title.textBaseline,fillStyle:this.title.fontColor,strokeStyle:this.title.strokeStyle,lineWidth:this.title.lineWidth,rotation:this.isH?-180:0}}));}},{key:"_setXAxisHeight",value:function(){var r=this;if(r.enabled){var h=0;this.label.enabled&&p._.each(r.dataSection,function(t,e){var i=r._textElements[e],n=i.getTextWidth(),l=i.getTextHeight(),a=l;if(r.label.rotation)if(90==r.label.rotation)a=n;else{var o=Math.sin(Math.abs(r.label.rotation)*Math.PI/180),s=Math.cos(Math.abs(r.label.rotation)*Math.PI/180);a=parseInt(o*n),parseInt(s*n);}h=Math.max(h,a);}),this.height=h+this.tickLine.lineLength+this.tickLine.distance+this.label.distance,this._title&&(this.height+=this._title.getTextHeight());}else r.height=0;}},{key:"getNodeInfoOfX",value:function(t){var e=this.getIndexOfPos(t),i=this.getValOfInd(e),n=this.getPosOf({ind:e,val:i});return this._getNodeInfo(e,i,n)}},{key:"getNodeInfoOfVal",value:function(t){var e=this.getIndexOfVal(t),i=this.getPosOf({ind:e,val:t});return this._getNodeInfo(e,t,i)}},{key:"_getNodeInfo",value:function(t,e,i){return {ind:t,value:e,text:this._getFormatText(e,t),x:i,field:this.field,layoutType:this.layoutType}}},{key:"_trimXAxis",value:function(){for(var t=[],e=this.dataSection,i=0,n=e.length;i<n;i++){var l=this._formatTextSection[i],a=this._textElements[i],o={ind:i,value:e[i],text:l,x:this.getPosOf({val:e[i],ind:i}),textWidth:a.getTextWidth(),field:this.field,visible:null};t.push(o);}return this.layoutData=t,this._trimLayoutData(),t}},{key:"_getFormatText",value:function(t){var e=t;return p._.isFunction(this.label.format)&&(e=this.label.format.apply(this,arguments)),p._.isNumber(e)&&"proportion"==this.layoutType&&(e=(0, i.numAddSymbol)(e)),e}},{key:"_widget",value:function(t){var e=this;if(t=t||{},e.enabled){for(var i=e.layoutData,n=0,l=0,a=i.length;l<a;l++){p._.isFunction(e.filter)&&e.filter({layoutData:i,index:l});var o=i[l];if(o.visible){var s=o.x,r=e.tickLine.lineLength+e.tickLine.distance+e.label.distance,h=e.rulesSprite.getChildAt(n),u={x:o._text_x||o.x,y:r,fillStyle:this.label.fontColor,fontSize:this.label.fontSize,rotation:-Math.abs(this.label.rotation),textAlign:this.label.textAlign,lineHeight:this.label.lineHeight,textBaseline:this.label.rotation?"middle":"top",globalAlpha:1};this.label.rotation&&90!=this.label.rotation&&(u.x+=5,u.y+=3);var d={x:s,y:this.tickLine.distance,end:{x:0,y:this.tickLine.lineLength},lineWidth:this.tickLine.lineWidth,strokeStyle:this.tickLine.strokeStyle},f=300,x=n*Math.min(1e3/i.length,25);e.animation&&!t.resize||(x=f=0),h?(h._tickLine&&e.tickLine.enabled&&h._tickLine.animate(d,{duration:f,id:h._tickLine.id}),h._txt&&e.label.enabled&&(h._txt.animate(u,{duration:f,id:h._txt.id}),h._txt.resetText(o.text))):(h=new v.default.Display.Sprite({id:"xNode"+n}),e.tickLine.enabled&&(h._tickLine=new b({id:"xAxis_tickline_"+n,context:d}),h.addChild(h._tickLine)),e.label.enabled&&(h._txt=new v.default.Display.Text(o.text,{id:"xAxis_txt_"+n,context:u}),h.addChild(h._txt),e.animation&&!t.resize&&(h._txt.context.y+=20,h._txt.context.globalAlpha=0,h._txt.animate({y:u.y,globalAlpha:1},{duration:500,delay:x,id:h._txt.id}))),e.rulesSprite.addChild(h)),n++;}}if(this.rulesSprite.children.length>=n){a=n;for(var c=this.rulesSprite.children.length;a<c;a++)this.rulesSprite.getChildAt(a).remove(),a--,c--;}if(this.axisLine.enabled){var _={start:{x:0,y:0},end:{x:this.width,y:0},lineWidth:this.axisLine.lineWidth,strokeStyle:this.axisLine.strokeStyle};if(this._axisLine)this._axisLine.animate(_);else{var y=new b({context:_});this.sprite.addChild(y),this._axisLine=y;}}this._title&&(this._title.context.y=this.height-this._title.getTextHeight()/2,this._title.context.x=this.width/2,this.sprite.addChild(this._title));}else e.height=0;}},{key:"_trimLayoutData",value:function(){var t=this.layoutData.length;this.enabled&&t&&("proportion"==this.layoutType&&this._checkOver(),"peak"==this.layoutType&&this._checkOver(),"rule"==this.layoutType&&this._checkOver());}},{key:"_getRootPR",value:function(){var t=0;return this._coord.app&&(t=this._coord.app.padding.right),t}},{key:"_checkOver",value:function(){var h=this,u=h.layoutData,d=u.length,f=h.label.textAlign;if(this.label.evade&&!h.trimLayout)!function t(e){var i=u[e];if(void 0!==i){i.visible=!0;for(var n=e;n<d-1;n++){var l=u[n+1],a=l.textWidth,o=i.textWidth;h.label.rotation&&(a=Math.min(a,22),o=Math.min(o,22));var s=l.x,r=i.x+o;if("center"==f&&(s=l.x-a/2,r=i.x+o/2),"right"==f&&(s=l.x-a,r=i.x),n==d-2&&s+a>h.width+h._getRootPR()&&("center"==f&&l.x+a/2>h.width&&(s=h.width-a,l._text_x=h.width-a/2+h._getRootPR()),"left"==f&&l.x+a>h.width&&(s=h.width-a,l._text_x=h.width-a)),!(s-r<1)){t(n+1);break}if(n==d-2)return l.visible=!0,void(i.visible=!1);l.visible=!1;}}}(0);else{var t;p._.each(u,function(t){t.visible=!0;}),h.trimLayout&&h.trimLayout(u);for(var e=d-1;0<=e&&!t;e--)u[e].visible&&(t=u[e]);t&&("center"==f&&t.x+t.textWidth/2>h.width&&(t._text_x=h.width-t.textWidth/2+h._getRootPR()),"left"==f&&t.x+t.textWidth>h.width&&(t._text_x=h.width-t.textWidth));}}}]),x);function x(t,e,i){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,x),(n=function(t,e){return !e||"object"!==o(e)&&"function"!=typeof e?r(t):e}(this,s(x).call(this,t,e.org))).type="xAxis",n._coord=i||{},n._title=null,n._axisLine=null,n._formatTextSection=[],n._textElements=[],n.pos={x:0,y:0},n.layoutData=[],n.sprite=null,n.isH=!1,p._.extend(!0,r(n),(0, p.getDefaultProps)(x.defaultProps()),t),n.init(t),n}t.default=f;});
	});

	unwrapExports(xaxis);

	var yaxis = createCommonjsModule(function (module, exports) {
	!function(t,e){e(exports,index_cjs$1,tools,index_cjs,axis);}(void 0,function(t,e,r,m,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var S=l(e),n=l(i);function l(t){return t&&t.__esModule?t:{default:t}}function a(t){return (a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t){return (s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function o(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function h(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n);}}function u(t,e,i){return e&&h(t.prototype,e),i&&h(t,i),t}function d(t,e){return (d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var k=S.default.Shapes.Line,f=(function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e);}(c,n.default),u(c,null,[{key:"defaultProps",value:function(){return {align:{detail:"左右轴设置",default:"left"},layoutType:{detail:"布局方式",default:"proportion"}}}}]),u(c,[{key:"init",value:function(t){this._setField(),this._initHandle(t),this.sprite=new S.default.Display.Sprite({id:"yAxisSprite_"+(new Date).getTime()}),this.rulesSprite=new S.default.Display.Sprite({id:"yRulesSprite_"+(new Date).getTime()}),this.sprite.addChild(this.rulesSprite);}},{key:"_initHandle",value:function(t){t&&(!t.isH||t.label&&void 0!==t.label.rotaion||(this.label.rotation=90),t.label&&t.label.textAlign||(this.label.textAlign="left"==this.align?"right":"left")),this.setDataSection(),this._getTitle(),this._setYaxisWidth();}},{key:"_setField",value:function(t){t&&(this.field=t),m._.isArray(this.field)||(this.field=[this.field]);}},{key:"draw",value:function(t){m._.extend(!0,this,t||{}),this.height=parseInt(this.yMaxHeight-this._getYAxisDisLine()),this.setAxisLength(this.height),this.sprite.cleanAnimates(),this._trimYAxis(),this._widget(t),this.setX(this.pos.x),this.setY(this.pos.y);}},{key:"resetData",value:function(t){this._setField(t.field),this.resetDataOrg(t.org),this._initHandle(),this.draw();}},{key:"setX",value:function(t){this.sprite.context.x=t,this.pos.x=t;}},{key:"setY",value:function(t){this.sprite.context.y=t,this.pos.y=t;}},{key:"_getTitle",value:function(){if(this.title.text)if(this._title)this._title.resetText(this.title.text);else{var t=0;"left"==this.align?t=-90:(t=90,this.isH&&(t=270)),this._title=new S.default.Display.Text(this.title.text,{context:{fontSize:this.title.fontSize,textAlign:this.title.textAlign,textBaseline:this.title.textBaseline,fillStyle:this.title.fontColor,strokeStyle:this.title.strokeStyle,lineWidth:this.title.lineWidth,rotation:t}});}}},{key:"_setYaxisWidth",value:function(){}},{key:"_trimYAxis",value:function(){for(var t=[],e=0,i=this.dataSection.length;e<i;e++){var n={value:this.dataSection[e],y:-Math.abs(this.getPosOf({val:this.dataSection[e],ind:e})),visible:!0,text:""},l=n.value;m._.isFunction(this.label.format)&&(l=this.label.format.apply(this,[l,e])),null==l&&"proportion"==this.layoutType&&(l=(0, r.numAddSymbol)(n.value)),n.text=l,t.push(n);}for(var a=0,s=0,o=t.length;s<o;s++)0!=s&&(0==a?t[s].text==t[a].text?t[s].visible=!1:a=s:(t[s].text==t[a].text&&(t[a].visible=!1),a=s));this.layoutData=t,this.trimLayout&&this.trimLayout(t);}},{key:"_getYAxisDisLine",value:function(){var t=0;return t=0<(t=0+this.yMaxHeight%this.dataSection.length)?0:t}},{key:"resetWidth",value:function(t){this.width=t,"left"==this.align&&(this.rulesSprite.context.x=this.width);}},{key:"_widget",value:function(t){var e=this;if(t=t||{},e.enabled){for(var i=this.layoutData,n=0,l=e.maxW=0,a=i.length;l<a;l++){m._.isFunction(e.filter)&&e.filter({layoutData:i,index:l});var s=i[l];if(s.visible){var o=s.y,r=e.label.textAlign,h=o+(0==l?-3:0)+(l==i.length-1?3:0);90!=e.label.rotation&&-90!=e.label.rotation||(r="center",l==i.length-1&&(h=o-2,r="right"),0==l&&(h=o));var u=16;s.value==e.origin&&(u=0),s.value<e.origin&&(u=-16);var d,f,c=0;if(e.tickLine.enabled&&(d={x:c="left"==e.align?-e.tickLine.lineLength-e.tickLine.distance:e.tickLine.distance,y:o,end:{x:e.tickLine.lineLength,y:0},lineWidth:e.tickLine.lineWidth,strokeStyle:e._getStyle(e.tickLine.strokeStyle)}),e.label.enabled){var x="left"==e.align?c-e.label.distance:c+e.tickLine.lineLength+e.label.distance;this.isH&&(x+=4*("left"==e.align?-1:1)),f={x:x,y:h,fillStyle:e._getStyle(e.label.fontColor),fontSize:e.label.fontSize,rotation:-Math.abs(e.label.rotation),textAlign:r,textBaseline:"middle",lineHeight:e.label.lineHeight,globalAlpha:1};}var y=300;e.animation&&!t.resize||(y=0);var p=this.rulesSprite.getChildAt(n);p?(p._tickLine&&e.tickLine.enabled&&p._tickLine.animate(d,{duration:y,id:p._tickLine.id}),p._txt&&e.label.enabled&&(p._txt.animate(f,{duration:y,id:p._txt.id}),p._txt.resetText(s.text))):(p=new S.default.Display.Sprite({id:"_node"+n}),e.tickLine.enabled&&(p._tickLine=new k({id:"yAxis_tickline_"+n,context:d}),p.addChild(p._tickLine)),e.label.enabled&&(p._txt=new S.default.Display.Text(s.text,{id:"yAxis_txt_"+n,context:f}),p.addChild(p._txt),90==e.label.rotation||-90==e.label.rotation?e.maxW=Math.max(e.maxW,p._txt.getTextHeight()):e.maxW=Math.max(e.maxW,p._txt.getTextWidth()),e.animation&&!t.resize&&(p._txt.context.y=o+u,p._txt.context.globalAlpha=0,p._txt.animate({y:f.y,globalAlpha:1},{duration:300,id:p._txt.id}))),e.rulesSprite.addChild(p)),n++;}}if(e.rulesSprite.children.length>=n){a=n;for(var _=e.rulesSprite.children.length;a<_;a++)e.rulesSprite.getChildAt(a).remove(),a--,_--;}e.width||"width"in e._opt||(e.width=parseInt(e.maxW+e.label.distance),e.tickLine.enabled&&(e.width+=parseInt(e.tickLine.lineLength+e.tickLine.distance)),e._title&&(e.width+=e._title.getTextHeight()));var g=0;if("left"==e.align&&(e.rulesSprite.context.x=e.width,g=e.width),e.axisLine.enabled){var b={start:{x:g,y:0},end:{x:g,y:-e.height},lineWidth:e.axisLine.lineWidth,strokeStyle:e._getStyle(e.axisLine.strokeStyle)};if(this._axisLine)this._axisLine.animate(b);else{var v=new k({context:b});this.sprite.addChild(v),this._axisLine=v;}}this._title&&(this._title.context.y=-this.height/2,this._title.context.x=this._title.getTextHeight()/2,"right"==this.align&&(this._title.context.x=this.width-this._title.getTextHeight()/2),this.sprite.addChild(this._title));}else e.width=0;}},{key:"_getStyle",value:function(t){var e=t;return m._.isFunction(t)&&(e=t.call(this,this)),t||(e="#999"),e}}]),c);function c(t,e,i){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),(n=function(t,e){return !e||"object"!==a(e)&&"function"!=typeof e?o(t):e}(this,s(c).call(this,t,e.org))).type="yAxis",n._coord=i||{},n._title=null,n._axisLine=null,n.maxW=0,n.pos={x:0,y:0},n.yMaxHeight=0,n.layoutData=[],n.sprite=null,n.isH=!1,m._.extend(!0,o(n),(0, m.getDefaultProps)(c.defaultProps()),t),n.init(t),n}t.default=f;});
	});

	unwrapExports(yaxis);

	var grid = createCommonjsModule(function (module, exports) {
	!function(e,t){t(exports,index_cjs$1,index_cjs);}(void 0,function(e,t,p){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i,a=(i=t)&&i.__esModule?i:{default:i};function l(e){return (l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e){return (n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function r(e,t){for(var i=0;i<t.length;i++){var l=t[i];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l);}}function s(e,t,i){return t&&r(e.prototype,t),i&&r(e,i),e}function d(e,t){return (d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y=a.default.Shapes.Line,c=a.default.Shapes.Rect,f=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t);}(u,p.event.Dispatcher),s(u,null,[{key:"defaultProps",value:function(){return {enabled:{detail:"是否开启grid绘制",default:!0},line:{detail:"网格线条配置",propertys:{xDimension:{detail:"一维方向的网格线",propertys:{enabled:{detail:"是否开启",default:!0},data:[],lineType:{detail:"线的样式，虚线或者实现",default:"solid"},lineWidth:{detail:"线宽",default:1},strokeStyle:{detail:"线颜色",default:"#f0f0f0"}}},yDimension:{detail:"二维方向的网格线",propertys:{enabled:{detail:"是否开启",default:!1},data:[],lineType:{detail:"线的样式，虚线或者实现",default:"solid"},lineWidth:{detail:"线宽",default:1},strokeStyle:{detail:"线颜色",default:"#f0f0f0"}}}}},fill:{detail:"背景色配置",propertys:{xDimension:{detail:"以为方向的背景色块，x方向",propertys:{enabled:{detail:"是否开启",default:!1},splitVals:{detail:"从x轴上面用来分割区块的vals",default:null},fillStyle:{detail:"背景颜色",default:null},alpha:{detail:"背景透明度",default:null}}},yDimension:{detail:"以为方向的背景色块，y方向",propertys:{enabled:{detail:"是否开启",default:!1},splitVals:{detail:"从x轴上面用来分割区块的vals",default:null},fillStyle:{detail:"背景颜色",default:null},alpha:{detail:"背景透明度",default:null}}}}}}}}]),s(u,[{key:"init",value:function(e){p._.extend(!0,this,e),this.sprite=new a.default.Display.Sprite;}},{key:"setX",value:function(e){this.sprite.context.x=e;}},{key:"setY",value:function(e){this.sprite.context.y=e;}},{key:"draw",value:function(e){p._.extend(!0,this,e),this._widget(),this.setX(this.pos.x),this.setY(this.pos.y);}},{key:"clean",value:function(){this.sprite.removeAllChildren();}},{key:"reset",value:function(e){this.sprite.removeAllChildren(),this.draw(e);}},{key:"_widget",value:function(){var d=this;if(this.enabled){var e,f=d._coord._yAxis[0],u=d._coord._xAxis;this.fillSp=new a.default.Display.Sprite,this.sprite.addChild(this.fillSp),p._.each([d.fill.xDimension,d.fill.yDimension],function(n,a){var e=a?f:u,t=[];if(n.enabled){n.splitVals?(t=[e.dataSection[0]].concat(p._.flatten([n.splitVals]))).push(e.dataSection.slice(-1)[0]):t=e.dataSection;var i=[];if(2<=t.length){for(var l=[],o=0,r=t.length;o<r;o++){var s=e.getPosOf({val:t[o]});if(l.length){if(1==l.length){if(s-l[0]<1)continue;l.push(s),i.push(l),l=[l[1]];}}else l.push(s);}p._.each(i,function(e,t){var i={fillStyle:d.getProp(n.fillStyle,t,"#000"),fillAlpha:d.getProp(n.alpha,t,t%2*.02)};a?(i.x=0,i.y=-e[0],i.width=d.width,i.height=-(e[1]-e[0])):(i.x=e[0],i.y=0,i.width=e[1]-e[0],i.height=-d.height);var l=new c({context:i});d.fillSp.addChild(l);});}}}),d.xAxisSp=new a.default.Display.Sprite,d.sprite.addChild(d.xAxisSp),d.yAxisSp=new a.default.Display.Sprite,d.sprite.addChild(d.yAxisSp);for(var t=0,i=(e=f.layoutData).length;t<i;t++)if((n=e[t]).visible){var l=new y({id:"back_line_"+t,context:{y:n.y,lineType:d.getProp(d.line.xDimension.lineType,t,"solid"),lineWidth:d.getProp(d.line.xDimension.lineWidth,t,1),strokeStyle:d.getProp(d.line.xDimension.strokeStyle,t,"#f0f0f0"),visible:!0}});d.line.xDimension.enabled&&(d.xAxisSp.addChild(l),l.context.start.x=0,l.context.end.x=d.width);}for(t=0,i=(e=u.layoutData).length;t<i;t++){var n=e[t];l=new y({context:{x:n.x,start:{x:0,y:0},end:{x:0,y:-d.height},lineType:d.getProp(d.line.yDimension.lineType,t,"solid"),lineWidth:d.getProp(d.line.yDimension.lineWidth,t,1),strokeStyle:d.getProp(d.line.yDimension.strokeStyle,t,"#f0f0f0"),visible:!0}}),d.line.yDimension.enabled&&d.yAxisSp.addChild(l);}}}},{key:"getProp",value:function(e,t,i){var l=i;return null!=e&&null!=e&&((p._.isString(e)||p._.isNumber(e))&&(l=e),p._.isFunction(e)&&(l=e.apply(this,[t,i])),p._.isArray(e)&&(l=e[t])),l}}]),u);function u(e,t){var i;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),i=function(e,t){return !t||"object"!==l(t)&&"function"!=typeof t?o(e):t}(this,n(u).call(this,e,t)),p._.extend(!0,o(i),(0, p.getDefaultProps)(u.defaultProps())),i.width=0,i.height=0,i._coord=t,i.pos={x:0,y:0},i.sprite=null,i.xAxisSp=null,i.yAxisSp=null,i.init(e),i}e.default=f;});
	});

	unwrapExports(grid);

	var rect = createCommonjsModule(function (module, exports) {
	!function(i,t){t(exports,coord,index_cjs$1,xaxis,yaxis,grid,index_cjs);}(void 0,function(i,t,e,s,n,a,d){Object.defineProperty(i,"__esModule",{value:!0});var r=f(t),o=f(e),h=f(s),x=f(n),l=f(a);function f(i){return i&&i.__esModule?i:{default:i}}function u(i){return (u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(i){return typeof i}:function(i){return i&&"function"==typeof Symbol&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i})(i)}function y(i){return (y=Object.setPrototypeOf?Object.getPrototypeOf:function(i){return i.__proto__||Object.getPrototypeOf(i)})(i)}function _(i){if(void 0===i)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function g(i,t){for(var e=0;e<t.length;e++){var s=t[e];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(i,s.key,s);}}function p(i,t,e){return t&&g(i.prototype,t),e&&g(i,e),i}function c(i,t){return (c=Object.setPrototypeOf||function(i,t){return i.__proto__=t,i})(i,t)}var A=(function(i,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");i.prototype=Object.create(t&&t.prototype,{constructor:{value:i,writable:!0,configurable:!0}}),t&&c(i,t);}(v,r.default),p(v,null,[{key:"defaultProps",value:function(){return {horizontal:{detail:"横向翻转坐标系",documentation:"横向翻转坐标系",insertText:"horizontal: ",default:!1,values:[!0,!1]},_props:{xAxis:h.default,yAxis:x.default,grid:l.default}}}}]),p(v,[{key:"setDefaultOpt",value:function(i,t){var e={field:this.dataFrame.fields[0],xAxis:{layoutType:"rule",posParseToInt:!1},grid:{}};if(d._.extend(!0,e,i),e.yAxis){var s=[];d._.each(d._.flatten([e.yAxis]),function(i){s.push(d._.clone(i));}),e.yAxis=s;}else e.yAxis=[];for(var n=d._.flatten([t._opt.graphs]),a=0;a<n.length;a++){var r=n[a];if("bar"==r.type&&(e.xAxis.layoutType="peak"),r.field){var o="left";"right"==r.yAxisAlign&&(o="right");var h=null;(h=d._.find(e.yAxis,function(i,t){return i.align==o||!i.align&&t==("left"==o?0:1)}))?h.align||(h.align=o):(h={align:o,field:[]},e.yAxis.push(h)),h.field?d._.isArray(h.field)||(h.field=[h.field]):h.field=[],d._.isArray(r.field)?h.field=h.field.concat(r.field):h.field.push(r.field);}}var x=[],l=[];return d._.each(e.yAxis,function(i,t){i.align||(i.align=t?"right":"left"),"left"==i.align?x.push(i):l.push(i);}),e.yAxis=x.concat(l),e.horizontal&&(e.xAxis.isH=!0,d._.each(e.yAxis,function(i){i.isH=!0;})),"enabled"in e&&(d._.extend(!0,e.xAxis,{enabled:e.enabled}),d._.each(e.yAxis,function(i){d._.extend(!0,i,{enabled:e.enabled});}),e.grid.enabled=e.enabled),"animation"in e&&(d._.extend(!0,e.xAxis,{animation:e.animation}),d._.each(e.yAxis,function(i){d._.extend(!0,i,{animation:e.animation});}),e.grid.animation=e.animation),e}},{key:"init",value:function(){this._initModules(),this.fieldsMap=this.setFieldsMap({type:"yAxis"});}},{key:"resetData",value:function(i){var e=this;this.dataFrame=i;var t=this.getAxisDataFrame(this.xAxis.field);this._xAxis.resetData(t),d._.each(this._yAxis,function(i){var t=e.getAxisDataFrame(i.field);i.resetData(t);}),this._resetXY_axisLine_pos(),this._yAxisLeft||this._yAxisRight,this._grid.reset({animation:!1});}},{key:"draw",value:function(i){i=i||{};var t=this.app.padding,e=i.height||this.app.height,s=i.width||this.app.width;if(this.horizontal){var n=s;s=e,e=n;}var a=e-this._xAxis.height-t.bottom,r=0,o=0;this._yAxisLeft&&(this._yAxisLeft.draw({pos:{x:t.left,y:a},yMaxHeight:a-t.top,resize:i.resize}),r=this._yAxisLeft.width),this._yAxisRight&&(this._yAxisRight.draw({pos:{x:0,y:a},yMaxHeight:a-t.top,resize:i.resize}),o=this._yAxisRight.width),this._xAxis.draw({pos:{x:t.left+r,y:a},width:s-r-t.left-o-t.right,resize:i.resize}),this._yAxisRight&&this._yAxisRight.setX(r+t.left+this._xAxis.width),this._grid.draw({width:this._xAxis.width,height:this._yAxis[0].height,pos:{x:r+t.left,y:a},resize:i.resize}),this.width=this._xAxis.width,this.height=this._yAxis[0].height,this.origin.x=r+t.left,this.origin.y=a,this._initInduce(),this._resetXY_axisLine_pos(),this.horizontal&&this._horizontal({w:s,h:e});}},{key:"_resetXY_axisLine_pos",value:function(){var i,e=this;this._xAxis.enabled&&("center"==this._xAxis.axisLine.position&&(i=-this._yAxis[0].height/2),"center"==this._xAxis.axisLine.position&&(i=-this._yAxis[0].height/2),d._.isNumber(this._xAxis.axisLine.position)&&(i=-this._yAxis[0].getPosOfVal(this._xAxis.axisLine.position)),void 0!==i&&(this._xAxis._axisLine.context.y=i)),d._.each(this._yAxis,function(i){var t;i.enabled&&("center"==i.axisLine.position&&(t=e._xAxis.width/2),d._.isNumber(i.axisLine.position)&&(t=e._xAxis.getPosOfVal(i.axisLine.position)),void 0!==t&&(i._axisLine.context.x=t));});}},{key:"getSizeAndOrigin",value:function(){var i={width:this.width,height:this.height,origin:this.origin};if(this.horizontal){var t=this.app.padding,e=t.bottom,s=t.right;i={width:this._yAxis[0].height,height:this._xAxis.width,origin:{x:this._xAxis.height+e,y:this._yAxis[0].height+s}};}return i}},{key:"_initModules",value:function(){this._grid=new l.default(this.grid,this),this.sprite.addChild(this._grid.sprite);var i=this.getAxisDataFrame(this.xAxis.field);this._xAxis=new h.default(this.xAxis,i,this),this._axiss.push(this._xAxis),this.sprite.addChild(this._xAxis.sprite);var t,e,s,n,a=this.yAxis;d._.isArray(a)||(a=[a]),(t=d._.find(a,function(i){return "left"==i.align}))&&(s=this.getAxisDataFrame(t.field),this._yAxisLeft=new x.default(t,s,this),this._yAxisLeft.axis=t,this.sprite.addChild(this._yAxisLeft.sprite),this._yAxis.push(this._yAxisLeft),this._axiss.push(this._yAxisLeft)),(e=d._.find(a,function(i){return "right"==i.align}))&&(n=this.getAxisDataFrame(e.field),this._yAxisRight=new x.default(e,n,this),this._yAxisRight.axis=e,this.sprite.addChild(this._yAxisRight.sprite),this._yAxis.push(this._yAxisRight),this._axiss.push(this._yAxisRight));}},{key:"_horizontal",value:function(i){var e=i.h,s=i.w;d._.each([this.sprite.context],function(i){i.x+=(e-s)/2,i.y+=(s-e)/2;var t={x:s/2,y:e/2};i.rotation=90,i.rotateOrigin=t;});}},{key:"changeFieldEnabled",value:function(i){this.setFieldEnabled(i);var t=this.getFieldMapOf(i),e=t.yAxis||t.rAxis,s=this.getEnabledFieldsOf(e);e.resetData(this.getAxisDataFrame(s)),this._resetXY_axisLine_pos(),this._grid.reset({animation:!1});}},{key:"_initInduce",value:function(){var t=this;t.induce=new o.default.Shapes.Rect({id:"induce",context:{x:t.origin.x,y:t.origin.y-t.height,width:t.width,height:t.height,fillStyle:"#000000",globalAlpha:0,cursor:"pointer"}}),t.sprite.getChildById("induce")||t.sprite.addChild(t.induce),t.induce.on(d.event.types.get(),function(i){t.fire(i.type,i),t.app.fire(i.type,i);});}},{key:"getTipsInfoHandler",value:function(i){var t=i.point.x;i.target!==this.induce&&(t=this.induce.globalToLocal(i.target.localToGlobal(i.point)).x);var e=this._xAxis.getNodeInfoOfX(t),s={xAxis:e,dimension_1:e,title:e.text,iNode:e.ind,nodes:[]};return i.eventInfo&&(d._.extend(!0,s,i.eventInfo),s.xAxis&&(i.eventInfo.xAxis=e)),s}},{key:"getPoint",value:function(i){var t={x:0,y:void 0},e={type:"yAxis",field:i.field},s=this.getAxis({type:"xAxis"}),n=this.getAxis(e),a=i.iNode||0,r=i.value;"x"in r||(r.x=d._.flatten(s.dataOrg)[a]),t.x=s.getPosOf({ind:a,val:r.x});var o=r.y;return isNaN(o)||null==o||""===o?t.y=void 0:t.y=-n.getPosOfVal(o),{pos:t,value:r}}},{key:"getAxisOriginPoint",value:function(i){var t=this.getAxis(i);return {pos:-t.originPos,value:t.origin}}},{key:"getOriginPos",value:function(i){var t={type:"yAxis",field:i.field},e=this.getAxis({type:"xAxis"}),s=this.getAxis(t);return {x:e.originPos,y:-s.originPos}}}]),v);function v(i,t){var e;return function(i,t){if(!(i instanceof t))throw new TypeError("Cannot call a class as a function")}(this,v),e=function(i,t){return !t||"object"!==u(t)&&"function"!=typeof t?_(i):t}(this,y(v).call(this,i,t)),d._.extend(!0,_(e),(0, d.getDefaultProps)(v.defaultProps()),e.setDefaultOpt(i,t)),e.type="rect",e._xAxis=null,e._yAxis=[],e._yAxisLeft=null,e._yAxisRight=null,e._grid=null,e.init(i),e}d.global.registerComponent(A,"coord","rect"),i.default=A;});
	});

	unwrapExports(rect);

	var grid$1 = createCommonjsModule(function (module, exports) {
	!function(e,t){t(exports,index_cjs$1,index_cjs);}(void 0,function(e,t,u){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,i=(n=t)&&n.__esModule?n:{default:n};function l(e){return (l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e){return (o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function a(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i);}}function f(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}function s(e,t){return (s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=i.default.Shapes.Line,c=i.default.Shapes.Circle,p=i.default.Shapes.Polygon,y=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t);}(h,u.event.Dispatcher),f(h,null,[{key:"defaultProps",value:function(){return {enabled:{detail:"是否开启grid",default:!1},ring:{detail:"环背景线",propertys:{shapeType:{detail:"线的图形样式，默认poly，可选circle",default:"poly"},lineType:{detail:"线条样式，sold实线，dashed虚线",default:"sold"},lineWidth:{detail:"线宽",default:1},strokeStyle:{detail:"线颜色",default:"#e5e5e5"},fillStyle:{detail:"环填充色,支持函数配置",default:null},fillAlpha:{detail:"环填充的透明度",default:.5}}},ray:{detail:"射线",propertys:{enabled:{detail:"是否开启",default:!0},lineWidth:{detail:"线宽",default:1},strokeStyle:{detail:"线颜色",default:"#e5e5e5"}}}}}}]),f(h,[{key:"init",value:function(){this.sprite=new i.default.Display.Sprite;}},{key:"setX",value:function(e){this.sprite.context.x=e;}},{key:"setY",value:function(e){this.sprite.context.y=e;}},{key:"draw",value:function(e){u._.extend(!0,this,e),this._widget(),this.setX(this.pos.x),this.setY(this.pos.y);}},{key:"clean",value:function(){this.sprite.removeAllChildren();}},{key:"reset",value:function(){}},{key:"_widget",value:function(){var a=this;u._.each(this.dataSection,function(e,t){if(e){var n,i=a.app.getROfNum(e),l=a.app.getPointsOfR(i),o={lineWidth:a.ring.lineWidth,strokeStyle:a._getStyle(a.ring.strokeStyle,t-1),fillStyle:a._getStyle(a.ring.fillStyle,t-1),fillAlpha:a.ring.fillAlpha},r=c;n="circle"==a.ring.shapeType?(o.r=i,new r({context:o})):(o.pointList=[],u._.each(l,function(e,t){t<l.length&&o.pointList.push([e.x,e.y]);}),new(r=p)({context:o})),a.sprite.addChildAt(n,0),t==a.dataSection.length-1&&(o.fillAlpha=0,o.fillStyle="#ffffff",a.induce=new r({context:o}),a.sprite.addChild(a.induce)),u._.each(l,function(e){var t=new d({context:{end:e,lineWidth:a.ring.lineWidth,strokeStyle:a.ring.strokeStyle}});a.sprite.addChild(t);});}});}},{key:"_getStyle",value:function(e,t){return u._.isArray(e)?e[t%e.length]:e}}]),h);function h(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,h),(n=function(e,t){return !t||"object"!==l(t)&&"function"!=typeof t?r(e):t}(this,o(h).call(this,e,t))).width=0,n.height=0,n.app=t,n.pos={x:0,y:0},n.dataSection=[],n.sprite=null,n.induce=null,u._.extend(!0,r(n),(0, u.getDefaultProps)(h.defaultProps()),e),n.init(e),n}e.default=y;});
	});

	unwrapExports(grid$1);

	var polar = createCommonjsModule(function (module, exports) {
	!function(t,i){i(exports,coord,index_cjs$1,grid$1,index_cjs);}(void 0,function(t,i,e,a,M){Object.defineProperty(t,"__esModule",{value:!0});var n=r(i),l=r(e),o=r(a);function r(t){return t&&t.__esModule?t:{default:t}}function s(t){return (s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function h(t){return (h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function d(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t,i){for(var e=0;e<i.length;e++){var a=i[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a);}}function c(t,i,e){return i&&u(t.prototype,i),e&&u(t,e),t}function f(t,i){return (f=Object.setPrototypeOf||function(t,i){return t.__proto__=i,t})(t,i)}var p=(function(t,i){if("function"!=typeof i&&null!==i)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(i&&i.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),i&&f(t,i);}(g,n.default),c(g,null,[{key:"defaultProps",value:function(){return {allAngle:{detail:"坐标系总角度",documentation:"",default:360,values:[0,360]},startAngle:{detail:"坐标系起始角度",documentation:"",default:0,values:[0,360]},radius:{detail:"坐标系的最大半径",documentation:"默认自动计算view的高宽，如果squareRange==true，则会取Math.min(width,height)",default:"auto",values:null},aAxis:{detail:"角度轴",documentation:"类似直角坐标系中的x轴",propertys:{data:[],angleList:[],layoutData:[],field:{detail:"数据字段",documentation:"",default:""},layoutType:{detail:"布局类型",documentation:"",default:"proportion"},beginAngle:{detail:"起始角度",documentation:"",default:-90},enabled:{detail:"是否显示",documentation:"",default:!1},label:{detail:"文本配置",documentation:"",propertys:{enabled:{detail:"是否显示",documentation:"",default:!0},format:{detail:"label的格式化处理函数",documentation:"",default:null},fontColor:{detail:"label颜色",documentation:"",default:"#666"}}}}},rAxis:{detail:"半径维度轴",documentation:"类似直角坐标系中的y轴维度",propertys:{field:{detail:"数据字段",documentation:"",default:""},dataSection:{detail:"轴的显示数据",documentation:"默认根据源数据中自动计算，用户也可以手动指定",default:!1},enabled:{detail:"是否显示",documentation:"",default:!1}}}}}}]),c(g,[{key:"setDefaultOpt",value:function(t,i){var e={rAxis:{field:[]},aAxis:{},grid:{}};M._.extend(!0,e,t),M._.isArray(e.rAxis.field)||(e.rAxis.field=[e.rAxis.field]);var a=M._.flatten([i._opt.graphs]),n=[];return M._.each(a,function(t){if(t.field){var i=t.field;M._.isArray(i)||(i=[i]),n=n.concat(i);}}),e.rAxis.field=e.rAxis.field.concat(n),t.aAxis&&t.aAxis.field?e.aAxis.enabled=!0:e.grid.enabled=!1,e}},{key:"init",value:function(){this._initModules(),this.fieldsMap=this.setFieldsMap({type:"rAxis"});}},{key:"_initModules",value:function(){this.grid.enabled&&(this._grid=new o.default(this.grid,this),this.sprite.addChild(this._grid.sprite)),this.aAxis.enabled&&this.grid.enabled&&(this._aAxisScaleSp=new l.default.Display.Sprite({id:"aAxisScaleSp"}),this.sprite.addChild(this._aAxisScaleSp)),this._axiss.push({type:"rAxis",field:this.rAxis.field});}},{key:"draw",value:function(){this._computeAttr(),this.rAxis.dataSection=this._getRDataSection(),this.aAxis.data=this.app.dataFrame.getFieldData(this.aAxis.field),this._setAAxisAngleList(),this.grid.enabled&&(this._grid.draw({pos:this.origin,width:this.width,height:this.height,dataSection:this.rAxis.dataSection},this),this.aAxis.enabled&&this._drawAAxis(),this._initInduce());}},{key:"resetData",value:function(){}},{key:"changeFieldEnabled",value:function(t){this.setFieldEnabled(t),this.rAxis.dataSection=this._getRDataSection(),this.aAxis.data=this.app.dataFrame.getFieldData(this.aAxis.field),this.grid.enabled&&this._grid.reset({dataSection:this.rAxis.dataSection},this);}},{key:"_getRDataSection",value:function(){var i=this;if(this._opt.rAxis&&this._opt.rAxis.dataSection)return this._opt.rAxis.dataSection;var e=[];return M._.each(M._.flatten([i.rAxis.field]),function(t){e=e.concat(i.app.dataFrame.getFieldData(t));}),e.push(0),M.dataSection.section(e,3)}},{key:"_computeAttr",value:function(){var t,i,e=this.app.padding,a=this.app.width,n=this.app.height;"width"in this._opt||(this.width=a-e.left-e.right),"height"in this._opt||(this.height=n-e.top-e.bottom);for(var o=this.width,r=this.height,s=0,l=0,h=0,d=0,u=[this.startAngle],c=0,f=parseInt((this.startAngle+this.allAngle)/90)-parseInt(this.startAngle/90);c<=f;c++){var p=90*parseInt(this.startAngle/90)+90*c;-1==M._.indexOf(u,p)&&p>u.slice(-1)[0]&&u.push(p);}var g=this.startAngle+this.allAngle;-1==M._.indexOf(u,g)&&u.push(g),M._.each(u,function(t){t%=360;var i=Math.sin(t*Math.PI/180);180==t&&(i=0);var e=Math.cos(t*Math.PI/180);270!=t&&90!=t||(e=0),s=Math.min(s,i),l=Math.max(l,i),h=Math.min(h,e),d=Math.max(d,e);}),i=(Math.abs(h)+Math.abs(d))/(Math.abs(s)+Math.abs(l));var x=Math.min(o,r);if(1==i)o=r=x;else{var A=r*i;o<A?r=o/i:o=A;}var y=e.left+(this.width-o)/2,v=e.top+(this.height-r)/2;this.origin={x:y+o*(h/(h-d)),y:v+r*(s/(s-l))};var _={top:this.origin.y-v,right:y+o-this.origin.x,bottom:v+r-this.origin.y,left:this.origin.x-y},b=[],m=[["right","bottom"],["bottom","left"],["left","top"],["top","right"]];M._.each(u,function(t){t%=360;var i=parseInt(t/90),e=m[i];t%90==0&&(e=[["right","bottom","left","top"][i]]);var a=Math.sin(t*Math.PI/180);180==t&&(a=0);var n=Math.cos(t*Math.PI/180);270!=t&&90!=t||(n=0),M._.each(e,function(t){var i;"top"!=t&&"bottom"!=t||a&&(i=Math.abs(_[t]/a)),"right"!=t&&"left"!=t||n&&(i=Math.abs(_[t]/n)),b.push(i);});}),t=M._.min(b),this.aAxis.label.enabled&&(t-=20),this.radius=t;}},{key:"getMaxDisToViewOfOrigin",value:function(){var t=this.origin,i=this.app.padding,e=this.app.width,a=this.app.height,n=e-i.left-i.right,o=a-i.top-i.bottom,r=[t.x-i.left,n+i.left-t.x,t.y-i.top,o+i.top-t.y];return M._.max(r)}},{key:"getRadiansAtR",value:function(t,i,e){var n=this;null==i&&(i=this.width),null==e&&(e=this.height);var a,o,r=[],s=this.app.padding,l={x:this.origin.x-s.left-(this.width-i)/2,y:this.origin.y-s.top-(this.height-e)/2},h=l.y;h<t&&(a=Math.sqrt(Math.pow(t,2)-Math.pow(h,2)),r=r.concat(this._filterPointsInRect([{x:-a,y:-h},{x:a,y:-h}],l,i,e)));var d=i-l.x;d<t&&(o=Math.sqrt(Math.pow(t,2)-Math.pow(d,2)),r=r.concat(this._filterPointsInRect([{x:d,y:-o},{x:d,y:o}],l,i,e)));var u=e-l.y;u<t&&(a=Math.sqrt(Math.pow(t,2)-Math.pow(u,2)),r=r.concat(this._filterPointsInRect([{x:a,y:u},{x:-a,y:u}],l,i,e)));var c=l.x;c<t&&(o=Math.sqrt(Math.pow(t,2)-Math.pow(c,2)),r=r.concat(this._filterPointsInRect([{x:-c,y:o},{x:-c,y:-o}],l,i,e)));var f=[];0==r.length?f.push([{point:{x:t,y:0},radian:0},{point:{x:t,y:0},radian:2*Math.PI}]):M._.each(r,function(t,i){var e=i==r.length-1?0:i+1,a=r.slice(e,e+1)[0];f.push([{point:t,radian:n.getRadianInPoint(t)},{point:a,radian:n.getRadianInPoint(a)}]);});for(var p=0,g=f.length;p<g;p++)this._checkArcInRect(f[p],t,l,i,e)||(f.splice(p,1),p--,g--);return f}},{key:"_filterPointsInRect",value:function(t,i,e,a){for(var n=0,o=t.length;n<o;n++)this._checkPointInRect(t[n],i,e,a)||(t.splice(n,1),n--,o--);return t}},{key:"_checkPointInRect",value:function(t,i,e,a){var n=t.x+i.x,o=t.y+i.y;return !(n<0||e<n||o<0||a<o)}},{key:"_checkArcInRect",value:function(t,i,e,a,n){var o=t[0],r=t[1],s=r.radian-o.radian;r.radian<o.radian&&(s=2*Math.PI+r.radian-o.radian);var l=(o.radian+s/2)%(2*Math.PI);return this._checkPointInRect(this.getPointInRadianOfR(l,i),e,a,n)}},{key:"getRadianInPoint",value:function(t){var i=2*Math.PI;return (Math.atan2(t.y,t.x)+i)%i}},{key:"getPointInRadianOfR",value:function(t,i){var e=Math.PI,a=Math.cos(t)*i;t!=e/2&&t!=3*e/2||(a=0);var n=Math.sin(t)*i;return t%e==0&&(n=0),{x:a,y:n}}},{key:"getROfNum",value:function(t){var i=M._.max(this.rAxis.dataSection);return this.radius*((t-0)/(i-0))}},{key:"getPointsOfR",value:function(a){var n=this,o=[];return M._.each(n.aAxis.angleList,function(t){var i=Math.PI*t/180,e=n.getPointInRadianOfR(i,a);o.push(e);}),o}},{key:"_setAAxisAngleList",value:function(){var e=this;e.aAxis.angleList=[];var t=this.aAxis.data;if("proportion"==this.aAxis.layoutType){t=[];for(var i=0,a=this.aAxis.data.length;i<a;i++)t.push(i);}var n=this.allAngle,o=M._.max(t);"proportion"==this.aAxis.layoutType&&o++,M._.each(t,function(t){var i=(n*((t-0)/(o-0))+e.aAxis.beginAngle+n)%n;e.aAxis.angleList.push(i);});}},{key:"_drawAAxis",value:function(){var r=this,t=r.getROfNum(M._.max(this.rAxis.dataSection)),s=r.getPointsOfR(t+3);r._aAxisScaleSp.context.x=this.origin.x,r._aAxisScaleSp.context.y=this.origin.y,M._.each(this.aAxis.data,function(t,i){var e=s[i],a=M._.isFunction(r.aAxis.label.format)?r.aAxis.label.format(t):t,n={value:t,text:a,iNode:i,field:r.aAxis.field};if(r._getProp(r.aAxis.label.enabled,n)){var o={x:e.x,y:e.y,fillStyle:r._getProp(r.aAxis.label.fontColor,n)};M._.extend(o,r._getTextAlignForPoint(Math.atan2(e.y,e.x))),r._aAxisScaleSp.addChild(new l.default.Display.Text(a,{context:o})),r.aAxis.layoutData.push(a);}});}},{key:"_getTextAlignForPoint",value:function(t){var i="center",e="bottom";return t>-Math.PI/2&&t<0&&(i="left",e="bottom"),0==t&&(i="left",e="middle"),0<t&&t<Math.PI/2&&(i="left",e="top"),t==Math.PI/2&&(i="center",e="top"),t>Math.PI/2&&t<Math.PI&&(i="right",e="top"),t!=Math.PI&&t!=-Math.PI||(i="right",e="middle"),t>-Math.PI&&t<-Math.PI/2&&(i="right",e="bottom"),{textAlign:i,textBaseline:e}}},{key:"getAxisNodeOf",value:function(t){var i=this.getAAxisIndOf(t);if(void 0!==i)return {ind:i,value:this.aAxis.data[i],text:this.aAxis.layoutData[i],angle:this.aAxis.angleList[i]}}},{key:"getAAxisIndOf",value:function(t){var n=this;if(void 0!==t.aAxisInd)return t.aAxisInd;if(n.aAxis.angleList.length){var i=t.point,o=(180*n.getRadianInPoint(i)/Math.PI-n.aAxis.beginAngle)%n.allAngle,r=(Math.sqrt(Math.pow(i.x,2)+Math.pow(i.y,2)),0),s=n.aAxis.angleList.length;return M._.each(n.aAxis.angleList,function(t,i){t=(t-n.aAxis.beginAngle)%n.allAngle;var e=i+1,a=(n.aAxis.angleList[e]-n.aAxis.beginAngle)%n.allAngle;if(i==s-1&&(e=0,a=n.allAngle),t<=o&&o<=a)return r=o-t<a-o?i:e,!1}),r}}},{key:"_initInduce",value:function(){var i=this;i.induce=this._grid.induce,i.induce&&i.induce.on(M.event.types.get(),function(t){i.fire(t.type,t),i.app.fire(t.type,t);});}},{key:"getTipsInfoHandler",value:function(t){var i=this.getAxisNodeOf(t),e={nodes:[]};return i&&(e.aAxis=i,e.title=i.text,e.iNode=i.ind),t.eventInfo&&(e=M._.extend(e,t.eventInfo)),e}},{key:"getPoint",value:function(){}},{key:"getSizeAndOrigin",value:function(){}},{key:"_getProp",value:function(t,i,e){var a=t;return M._.isFunction(t)&&(a=t.apply(this,[i])),!a&&e&&(a=e),a}}]),g);function g(t,i){var e;return function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,g),(e=function(t,i){return !i||"object"!==s(i)&&"function"!=typeof i?d(t):i}(this,h(g).call(this,t,i))).type="polar",M._.extend(!0,d(e),(0, M.getDefaultProps)(g.defaultProps()),e.setDefaultOpt(t,i)),e.init(t),e}M.global.registerComponent(p,"coord","polar"),t.default=p;});
	});

	unwrapExports(polar);

	var graphs = createCommonjsModule(function (module, exports) {
	!function(e,t){t(exports,component,index_cjs$1,index_cjs);}(void 0,function(e,t,n,u){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(t),r=i(n);function i(e){return e&&e.__esModule?e:{default:e}}function a(e){return (a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e){return (f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o);}}function s(e,t,n){return t&&c(e.prototype,t),n&&c(e,n),e}function p(e,t){return (p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=r.default.AnimationFrame,y=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t);}(v,o.default),s(v,null,[{key:"defaultProps",value:function(){return {type:{detail:"绘图组件",default:"",insertText:"type: ",values:["bar","line","pie","scat"]},animation:{detail:"是否开启入场动画",default:!0},aniDuration:{detail:"动画时长",default:500}}}}]),s(v,[{key:"tipsPointerOf",value:function(){}},{key:"tipsPointerHideOf",value:function(){}},{key:"focusAt",value:function(){}},{key:"unfocusAt",value:function(){}},{key:"selectAt",value:function(){}},{key:"unselectAt",value:function(){}},{key:"getSelectedList",value:function(){return []}},{key:"getSelectedRowList",value:function(){return []}},{key:"hide",value:function(){}},{key:"show",value:function(){}},{key:"getLegendData",value:function(){}},{key:"triggerEvent",value:function(e){var t=(e.eventInfo.trigger||this)["on"+e.type];t&&u._.isFunction(t)&&(e.eventInfo&&e.eventInfo.nodes&&e.eventInfo.nodes.length?1==e.eventInfo.nodes.length?t.apply(this,[e,e.eventInfo.nodes[0]]):t.apply(this,[e,e.eventInfo.nodes]):t.apply(this,arguments));}},{key:"grow",value:function(t,e){e=e||{};var n=this,o=this.aniDuration;this.animation||(o=0);var r=0,i=1;"from"in e&&(r=e.from),"to"in e&&(i=e.to),this._growTween=d.registTween({from:{process:r},to:{process:i},duration:o,onUpdate:function(e){u._.isFunction(t)&&t(e.process);},onComplete:function(){this._growTween=null,n.fire("complete");}});}}]),v);function v(e,t){var n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,v),n=function(e,t){return !t||"object"!==a(t)&&"function"!=typeof t?l(e):t}(this,f(v).call(this,e,t)),u._.extend(!0,l(n),(0, u.getDefaultProps)(v.defaultProps())),n.name="graphs",n._opt=e||{},n.app=t,n.ctx=t.stage.canvas.getContext("2d"),n.dataFrame=t.dataFrame,n.data=null,n.width=0,n.height=0,n.origin={x:0,y:0},n.inited=!1,n.sprite=new r.default.Display.Sprite({name:"graphs_"+e.type}),n.app.graphsSprite.addChild(n.sprite),n._growTween=null;var o=l(n);return n.sprite.on("destroy",function(){o._growTween&&(d.destroyTween(o._growTween),o._growTween=null);}),n}e.default=y;});
	});

	unwrapExports(graphs);

	var bar = createCommonjsModule(function (module, exports) {
	!function(e,t){t(exports,index_cjs$1,tools,graphs,index_cjs);}(void 0,function(e,t,D,i,G){Object.defineProperty(e,"__esModule",{value:!0});var N=n(t),a=n(i);function n(e){return e&&e.__esModule?e:{default:e}}function l(e){return (l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e){return (o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a);}}function s(e,t,i){return t&&d(e.prototype,t),i&&d(e,i),e}function h(e,t){return (h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=N.default.AnimationFrame,B=N.default.Shapes.Rect,u=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t);}(c,a.default),s(c,null,[{key:"defaultProps",value:function(){return {field:{detail:"字段设置",documentation:"支持二维数组格式的设置，一维方向就是横向分组，二维方向就是纵向的堆叠",default:null},yAxisAlign:{detail:"绘制在哪根y轴上面",default:"left"},absolute:{detail:"是否脱离graphs的位置计算",documentation:"                    trimGraphs的时候是否需要和其他的 bar graphs一起并排计算，                    true的话这个就会和别的重叠,                    和css中得absolute概念一致，脱离文档流的绝对定位",default:!1},proportion:{detail:"比例柱状图",default:!1},node:{detail:"单个数据对应的图形设置",propertys:{width:{detail:"bar的宽度",default:0},maxWidth:{detail:"最大width",default:50},minWidth:{detail:"最小width",default:1},minHeight:{detail:"最小height",default:0},radius:{detail:"叶子节点的圆角半径",default:3},fillStyle:{detail:"bar填充色",default:null},fillAlpha:{detail:"bar透明度",default:.95},xDis:{detail:"单分组内bar之间的间隔",default:null},filter:{detail:"bar过滤处理器",default:null}}},label:{detail:"文本设置",propertys:{enabled:{detail:"是否开启",default:!1},fontColor:{detail:"文本颜色",default:null,documentation:"如果有设置text.fontColor那么优先使用fontColor"},fontSize:{detail:"文本字体大小",default:12},format:{detail:"文本格式化处理函数",default:null},lineWidth:{detail:"文本描边线宽",default:0},strokeStyle:{detail:"文本描边颜色",default:null},rotation:{detail:"旋转角度",default:0},textAlign:{detail:"水平对齐方式",documentation:"left center right",default:"center"},verticalAlign:{detail:"垂直基线对齐方式",documentation:"top middle bottom",default:"bottom"},position:{detail:"文本布局位置",documentation:"top,topRight,right,rightBottom,bottom,bottomLeft,left,leftTop,center",default:"top"},offsetX:{detail:"x偏移量",default:0},offsetY:{detail:"y偏移量",default:0}}},select:{detail:"分组选中",documentation:"                    分组的选中，不是选中具体的某个node，这里的选中靠groupRegion来表现出来,                    目前只有在第一个graphs bar 上配置有效",propertys:{enabled:{detail:"是否开启",default:!1},inds:{detail:"选中的分组索引集合",documentation:"选中的列的索引集合,注意，这里的ind不是当前视图的ind，而是加上了dataFrame.range.start的全局ind",default:[]},width:{detail:"选中态背景宽度",default:1},alpha:{detail:"选中态背景透明度",default:.2},fillStyle:{detail:"选中态背景填充色",default:null},triggerEventType:{detail:"触发选中效果的事件",default:"click"}}}}}}]),s(c,[{key:"init",value:function(){this.barsSp=new N.default.Display.Sprite({id:"barsSp"}),this.txtsSp=new N.default.Display.Sprite({id:"txtsSp",context:{}});}},{key:"getNodesAt",value:function(a){var n=this.data,l=[];return G._.each(this.enabledField,function(e,t){if(G._.isArray(e))G._.each(e,function(e,t){var i=n[e]?n[e][a]:null;i&&l.push(i);});else{var i=n[e]?n[e][a]:null;i&&l.push(i);}}),l}},{key:"_getTargetField",value:function(e,t,i,a){if(G._.isString(a))return a;if(G._.isArray(a)){var n=a[e];if(G._.isString(n))return n;if(G._.isArray(n))return n[t]}}},{key:"_getColor",value:function(e,t){var i=t.field,a=G._.flatten([this.field]),n=this.app.getComponent({name:"coord"}).getFieldMapOf(i);if(G._.isFunction(e)&&(e=e.apply(this,[t])),G._.isString(e)&&(e=e),G._.isArray(e)&&(e=G._.flatten(e)[G._.indexOf(a,i)]),e&&e.lineargradient&&e.lineargradient.length)if(0!=t.rectHeight){var l=this.ctx.createLinearGradient(t.x,t.fromY+t.rectHeight,t.x,t.fromY);G._.each(e.lineargradient,function(e){l.addColorStop(e.position,e.color);}),e=l;}else e=e.lineargradient[parseInt(e.lineargradient.length/2)].color;return null==e&&(e=n.color),e}},{key:"_getBarWidth",value:function(e,t){return this.node.width?G._.isFunction(this.node.width)?this.node._width=this.node.width(e):this.node._width=this.node.width:(this.node._width=t-Math.max(1,.2*t),1==this.node._width&&3<e&&(this.node._width=e-2)),this.node._width<1&&(this.node._width=1),this.node._width=parseInt(this.node._width),this.node._width>this.node.maxWidth&&(this.node._width=this.node.maxWidth),this.node._width}},{key:"show",value:function(){this.draw();}},{key:"hide",value:function(a){G._.each(this.barsSp.children,function(e,t){var i=e.getChildById("bar_"+t+"_"+a);i&&i.destroy();}),G._.each(this.txtsSp.children,function(e,t){var i=e.getChildById("text_"+t+"_"+a);i&&i.destroy();}),this.draw();}},{key:"resetData",value:function(e){this.dataFrame=e,this.draw();}},{key:"clean",value:function(){this.data={},this.barsSp.removeAllChildren(),this.label.enabled&&this.txtsSp.removeAllChildren();}},{key:"draw",value:function(e){e=e||{},G._.extend(!0,this,e);var A=this,k=A.animation&&!e.resize;if(this.data=this._trimGraphs(),0==this.enabledField.length||0==this._dataLen)return A._preDataLen=0,void this.clean();var F=A._preDataLen,O=this.enabledField.length,L=0,P=A.node._count=0,I=A.app.getComponents({name:"graphs",type:"bar"});G._.each(I,function(e,t){e==A&&(P=t);}),G._.each(this.enabledField,function(e,t){var i=(e=G._.flatten([e])).length;if(0!=i){L=A.width/A._dataLen,A._barsLen=A._dataLen*O;for(var a=0;a<A._dataLen;a++){var n=null;if(0==t){if(a<=F-1?n=A.barsSp.getChildById("barGroup_"+a):(n=new N.default.Display.Sprite({id:"barGroup_"+a}),A.barsSp.addChild(n),n.iNode=a),!P){var l,o=L*A.select.width;1<A.select.width&&(o=A.select.width),a<=F-1?((l=n.getChildById("group_region_"+a)).context.width=o,l.context.x=L*a+(L-o)/2,l.context.globalAlpha=-1<G._.indexOf(A.select.inds,A.dataFrame.range.start+a)?A.select.alpha:0):(l=new B({id:"group_region_"+a,pointChkPriority:!1,hoverClone:!1,xyToInt:!1,context:{x:L*a+(L-o)/2,y:-A.height,width:o,height:A.height,fillStyle:A._getGroupRegionStyle(a),globalAlpha:-1<G._.indexOf(A.select.inds,A.dataFrame.range.start+a)?A.select.alpha:0}}),n.addChild(l),l.iNode=a,l.on(G.event.types.get(),function(e){e.eventInfo={iNode:this.iNode},C.bind(this)(e),A.app.fire(e.type,e);}));}}else n=A.barsSp.getChildById("barGroup_"+a);var r=null;0==t?a<=F-1?r=A.txtsSp.getChildById("txtGroup_"+a):(r=new N.default.Display.Sprite({id:"txtGroup_"+a}),A.txtsSp.addChild(r),r.iGroup=t):r=A.txtsSp.getChildById("txtGroup_"+a);for(var d=0;d<i;d++){A.node._count++;var s=A.data[e[d]][a];s.iGroup=t,s.iNode=a,s.iLay=d;var h=s.y-s.fromY;isNaN(s.value)?h=0:Math.abs(h)<A.node.minHeight&&(h=A.node.minHeight),s.rectHeight=h;var f=A._getColor(A.node.fillStyle,s);if((s.color=f)instanceof CanvasGradient&&A.node.fillStyle.lineargradient){var u=A.node.fillStyle.lineargradient[parseInt(A.node.fillStyle.lineargradient.length/2)];u&&(s.color=u.color);}var c={x:Math.round(s.x),y:s.fromY,width:A.node._width,height:h,fillStyle:f,fillAlpha:A.node.fillAlpha,scaleY:-1};s.width=c.width;var p={x:c.x,y:s.yOriginPoint.pos,width:c.width,height:c.height,fillStyle:c.fillStyle,fillAlpha:A.node.fillAlpha,scaleY:0};if(A.node.radius&&s.isLeaf&&!A.proportion){var y=Math.min(A.node._width/2,Math.abs(h));y=Math.min(y,A.node.radius),p.radius=[y,y,0,0];}k||(delete p.scaleY,p.y=c.y);var g=null,_="bar_"+a+"_"+s.field;if(a<=F-1&&(g=n.getChildById(_)),g?g.context.fillStyle=f:((g=new B({id:_,context:p})).field=s.field,n.addChild(g),g.on(G.event.types.get(),function(e){e.eventInfo={trigger:A.node,nodes:[this.nodeData]},C.bind(this)(e),A.app.fire(e.type,e);})),g.finalPos=c,g.iGroup=t,g.iNode=a,g.iLay=d,(g.nodeData=s).nodeElement=g,A.node.filter&&A.node.filter.apply(g,[s,A]),A.label.enabled){var b=s.value;if(G._.isFunction(A.label.format)){var v=A.label.format(b,s);void 0===v&&null===v||(b=v);}if(null==b||""===b)continue;G._.isNumber(b)&&(b=(0, D.numAddSymbol)(b));var x={fillStyle:A.label.fontColor||c.fillStyle,fontSize:A.label.fontSize,lineWidth:A.label.lineWidth,strokeStyle:A.label.strokeStyle||c.fillStyle,textBaseline:A.label.verticalAlign,rotation:A.label.rotation},m=A._getTextPos(c,s);x.x=m.x,x.y=m.y,x.textAlign=A._getTextAlign(c,s);var w=null,S="text_"+a+"_"+s.field;a<=F-1&&(w=r.getChildById(S)),w?(w.resetText(b),w.context.x=x.x,w.context.y=x.y):((w=new N.default.Display.Text(b,{id:S,context:x})).field=s.field,r.addChild(w));}}}}function C(e){if(A.select.enabled&&e.type==A.select.triggerEventType){var t=A.dataFrame.range.start+this.iNode;-1<G._.indexOf(A.select.inds,t)?G._.each(I,function(e){e.unselectAt(t);}):G._.each(I,function(e){e.selectAt(t);});}}}),this.sprite.addChild(this.barsSp),this.label.enabled&&this.sprite.addChild(this.txtsSp),this.sprite.context.x=this.origin.x,this.sprite.context.y=this.origin.y,this.grow(function(){A.fire("complete");},{delay:0,duration:300,animate:k}),A._preDataLen=A._dataLen;}},{key:"setEnabledField",value:function(){this.enabledField=this.app.getComponent({name:"coord"}).filterEnabledFields(this.field);}},{key:"_getGroupRegionStyle",value:function(e){var t=this,i=t.select.fillStyle;return G._.isArray(t.select.fillStyle)&&(i=t.select.fillStyle[e]),G._.isFunction(t.select.fillStyle)&&(i=t.select.fillStyle.apply(this,[{iNode:e,rowData:t.dataFrame.getRowDataAt(e)}])),null==i?t.select._fillStyle:i}},{key:"_trimGraphs",value:function(){var y=this,g=this.app.getComponent({name:"coord"});this.setEnabledField(),this.data={};var t=[],i=0,a=0,n=!1;this.absolute?(t=[this],i=this.enabledField.length):G._.each(y.app.getComponents({name:"graphs",type:"bar"}),function(e){e.absolute||(e===y&&(n=!0),n?e.setEnabledField():a+=e.enabledField.length,i+=e.enabledField.length,t.push(e));});var _=g.getAxis({type:"xAxis"}).getCellLength(),e=_/(i+1),b=this._getBarWidth(_,e),v=e-b;null!=this.node.xDis&&(v=this.node.xDis);var x=(_-b*i-v*(i-1))/2;a&&(x+=(v+b)*a);var l=this.dataFrame.getDataOrg(this.enabledField),o=y.getGraphSelectOpt();return !y.select.inds.length&&o&&o.inds&&o.inds.length&&(y.select.inds=G._.clone(o.inds)),G._.each(l,function(u,c){var p=[];G._.each(u,function(e,f){p[f]=[],y._dataLen=e.length,G._.each(e,function(e,i){var a=e;y.proportion&&(a=0,G._.each(u,function(e,t){a+=e[i];}));var t=y._getTargetField(c,f,i,y.enabledField),n=g.getPoint({iNode:i,field:t,value:{y:e}}),l=n.pos.x,o=l-_/2+x+(b+v)*c,r=0;r=y.proportion?-e/a*g.height:n.pos.y,isNaN(r)&&(r=0);var h=g.getAxisOriginPoint({field:t}),d=function e(t,i,a,n,l){var o=t[i-1];if(!o)return h.pos;var r=o[a].y,d=o[a].value,s=h.value;return s<=n?s<=d?(o[a].isLeaf=!1,r):e(t,i-1,a,n):d<s?(o[a].isLeaf=!1,r):e(t,i-1,a,n)}(p,f,i,e);r+=d-h.pos;var s={type:"bar",value:e,vInd:f,vCount:a,field:t,fromX:o,fromY:d,x:o,y:r,width:b,yOriginPoint:h,isLeaf:!0,xAxis:g.getAxis({type:"xAxis"}).getNodeInfoOfX(l),iNode:i,rowData:y.dataFrame.getRowDataAt(i),color:null,selected:!1};y.data[s.field]||(y.data[s.field]=p[f]),-1<G._.indexOf(y.select.inds,i)&&(s.selected=!0),p[f].push(s);});});}),y.data}},{key:"_getTextAlign",value:function(e,t){var i=this.label.textAlign;return t.value<t.yOriginPoint.value&&("left"==i?i="right":"right"==i&&(i="left")),i}},{key:"_getTextPos",value:function(e,t){var i={x:0,y:0},a=e.x,n=e.y,l=!0;switch(e.y>=t.y&&(l=!1),this.label.position){case"top":a=e.x+e.width/2,n=e.y+e.height,l&&(n+=16);break;case"topRight":a=e.x+e.width,n=e.y+e.height,l&&(n+=16);break;case"right":a=e.x+e.width,n=e.y+e.height/2;break;case"rightBottom":a=e.x+e.width,n=e.y;break;case"bottom":a=e.x+e.width/2,n=e.y;break;case"bottomLeft":a=e.x,n=e.y;break;case"left":a=e.x,n=e.y+e.height/2;break;case"leftTop":a=e.x,n=e.y+e.height,l&&(n+=16);break;case"center":a=e.x+e.width/2,n=e.y+e.height/2;}a-=this.label.offsetX;var o=1;return t.value<t.yOriginPoint.value&&(o=-1),n-=o*this.label.offsetY,i.x=a,i.y=n,i}},{key:"grow",value:function(r,e){var d=this;if(d._preDataLen>d._dataLen)for(var t=d._dataLen,i=d._preDataLen;t<i;t++)d.barsSp.getChildAt(t).destroy(),d.label.enabled&&d.txtsSp.getChildAt(t).destroy(),t--,i--;if(e.animate){var s=G._.extend({delay:Math.min(1e3/this._barsLen,80),easing:"Linear.None",duration:500},e),h=0;G._.each(d.enabledField,function(e,t){var i=(e=G._.flatten([e])).length;if(0!=i)for(var a=0;a<d._dataLen;a++)for(var n=0;n<i;n++){var l=d.data[e[n]][a],o=d.barsSp.getChildById("barGroup_"+a).getChildById("bar_"+a+"_"+l.field);0==s.duration?(o.context.scaleY=1,o.context.y=1*o.finalPos.y,o.context.x=o.finalPos.x,o.context.width=o.finalPos.width,o.context.height=o.finalPos.height):(o._tweenObj&&f.destroyTween(o._tweenObj),o._tweenObj=o.animate({scaleY:1,y:1*o.finalPos.y,x:o.finalPos.x,width:o.finalPos.width,height:o.finalPos.height},{duration:s.duration,easing:s.easing,delay:a*s.delay,onUpdate:function(){},onComplete:function(e){e.width<3&&this.context&&(this.context.radius=0),++h===d.node._count&&r&&r(d);},id:o.id}));}});}else r&&r(d);}},{key:"selectAt",value:function(e){var a=this;if(!(-1<G._.indexOf(this.select.inds,e))){this.select.inds.push(e);var n=e-this.dataFrame.range.start;G._.each(this.data,function(e,t){var i=e[n];i.selected=!0,a.setNodeElementStyle(i);});var t=this.barsSp.getChildById("barGroup_"+n);if(t){var i=t.getChildById("group_region_"+n);i&&(i.context.globalAlpha=this.select.alpha);}}}},{key:"unselectAt",value:function(e){var a=this;if(-1!=G._.indexOf(this.select.inds,e)){var t=G._.indexOf(this.select.inds,e);this.select.inds.splice(t,1);var n=e-this.dataFrame.range.start;G._.each(this.data,function(e,t){var i=e[n];i.selected=!1,a.setNodeElementStyle(i);});var i=this.barsSp.getChildById("barGroup_"+n);if(i){var l=i.getChildById("group_region_"+n);l&&(l.context.globalAlpha=0);}}}},{key:"getSelectedRowList",value:function(){var t=[],i=this;return G._.each(i.select.inds,function(e){t.push(i.dataFrame.jsonOrg[e]);}),t}},{key:"setNodeElementStyle",value:function(e){var t=this._getColor(this.node.fillStyle,e);e.nodeElement.context.fillStyle=t;}},{key:"getGraphSelectOpt",value:function(){var t=this._opt.select;if(!t){var e=this.app.getComponents({name:"graphs",type:"bar"});G._.each(e,function(e){if(t)return !1;!t&&e._opt.select&&(t=e.select);});}return t}}]),c);function c(e,t){var i;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(i=function(e,t){return !t||"object"!==l(t)&&"function"!=typeof t?r(e):t}(this,o(c).call(this,e,t))).type="bar",i.enabledField=null,i.node={_width:0,_count:0},i.select={_fillStyle:"#092848"},i._barsLen=0,i.txtsSp=null,G._.extend(!0,r(i),(0, G.getDefaultProps)(c.defaultProps()),e),i.init(),i}G.global.registerComponent(u,"graphs","bar"),e.default=u;});
	});

	unwrapExports(bar);

	var group = createCommonjsModule(function (module, exports) {
	!function(t,e){e(exports,index_cjs$1,tools,index_cjs);}(void 0,function(t,e,o,y){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,v=(i=e)&&i.__esModule?i:{default:i};function s(t){return (s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t){return (u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function d(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function n(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n);}}function l(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}function r(t,e){return (r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var a=v.default.AnimationFrame,f=v.default.Shapes.BrokenLine,g=v.default.Shapes.Circle,b=v.default.Shapes.Isogon,x=v.default.Shapes.Path,h=(function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e);}(c,y.event.Dispatcher),l(c,null,[{key:"defaultProps",value:function(){return {line:{detail:"线配置",propertys:{enabled:{detail:"是否开启",default:!0},strokeStyle:{detail:"线的颜色",default:void 0},lineWidth:{detail:"线的宽度",default:2},lineType:{detail:"线的样式",default:"solid"},smooth:{detail:"是否平滑处理",default:!0}}},node:{detail:"单个数据节点配置，对应线上的小icon图形",propertys:{enabled:{detail:"是否开启",default:!0},shapeType:{detail:"节点icon的图形类型，默认circle",documentation:'可选有"isogon"(正多边形)，"path"（自定义path路径，待实现）',default:"circle"},isogonPointNum:{detail:'shapeType为"isogon"时有效，描述正多边形的边数',default:3},path:{detail:"shapeType为path的时候，描述图形的path路径",default:null},corner:{detail:"拐角才有节点",default:!1},radius:{detail:"节点半径",default:3},fillStyle:{detail:"节点图形的背景色",default:"#ffffff"},strokeStyle:{detail:"节点图形的描边色，默认和line.strokeStyle保持一致",default:null},lineWidth:{detail:"节点图形边宽大小",default:2},visible:{detail:"节点是否显示,支持函数",default:!0}}},label:{detail:"文本配置",propertys:{enabled:{detail:"是否开启",default:!1},fontColor:{detail:"文本颜色",default:null},strokeStyle:{detail:"文本描边色",default:null},fontSize:{detail:"文本字体大小",default:12},format:{detail:"文本格式化处理函数",default:null}}},area:{detail:"面积区域配置",propertys:{enabled:{detail:"是否开启",default:!0},fillStyle:{detail:"面积背景色",default:null},alpha:{detail:"面积透明度",default:.2}}}}}}]),l(c,[{key:"init",value:function(){this.sprite=new v.default.Display.Sprite;}},{key:"draw",value:function(t,e){y._.extend(!0,this,t),this.data=e,this._widget(t);}},{key:"destroy",value:function(){var t=this;t.sprite.animate({globalAlpha:0},{duration:300,onComplete:function(){t.sprite.remove();}});}},{key:"_getColor",value:function(t,e){var i=this._getProp(t,e);return null==i&&(i=this._getLineStrokeStyle(),t&&t.lineargradient&&(i=t.lineargradient[parseInt(t.lineargradient.length/2)].color),i&&y._.isString(i)||(i=this.fieldMap.color)),i}},{key:"_getProp",value:function(t,e){if(y._.isArray(t))return t[this.iGroup];if(y._.isFunction(t)){var i=[];return null!=e&&i.push(this.data[e]),t.apply(this,i)}return t}},{key:"getNodeInfoAt",value:function(t,e){var i=this.data[t];if(e&&e.eventInfo&&e.eventInfo.dimension_1&&"proportion"==e.eventInfo.dimension_1.layoutType)for(var n,l=0,r=this.data.length;l<r;l++){var o=this.data[l],a=Math.abs(o.x-t);(null==n||a<n)&&(n=a,i=o);}return i}},{key:"resetData",value:function(t,e){var i=this;t&&(this.data=t),i._pointList=this._getPointList(this.data);var n={left:0,right:i._pointList.length-i._currPointList.length};e&&y._.extend(n,e.params),n.left&&(0<n.left&&(this._currPointList=this._pointList.slice(0,n.left).concat(this._currPointList)),n.left<0&&this._currPointList.splice(0,Math.abs(n.left))),n.right&&(0<n.right&&(this._currPointList=this._currPointList.concat(this._pointList.slice(-n.right))),n.right<0&&this._currPointList.splice(this._currPointList.length-Math.abs(n.right))),i._createNodes(),i._createTexts(),i._grow();}},{key:"_grow",value:function(t){var r=this;function l(t){r._bline.context.pointList=y._.clone(t),r._bline.context.strokeStyle=r._getLineStrokeStyle(t),r._area.context.path=r._fillLine(r._bline),r._area.context.fillStyle=r._getFillStyle();var l=0;y._.each(t,function(t,e){if(y._.isNumber(t[1])){if(r._nodes){var i=r._nodes.getChildAt(l);i&&(i.context.x=t[0],i.context.y=t[1]);}if(r._labels){var n=r._labels.getChildAt(l);n&&(n.context.x=t[0],n.context.y=t[1]-3,r._checkTextPos(n,e));}l++;}});}r.data.length?(this._growTween=a.registTween({from:r._getPointPosStr(r._currPointList),to:r._getPointPosStr(r._pointList),desc:r.field,onUpdate:function(t){for(var e in t){var i=parseInt(e.split("_")[2]),n=parseInt(e.split("_")[1]);r._currPointList[i]&&(r._currPointList[i][n]=t[e]);}l(r._currPointList);},onComplete:function(){r.sprite._removeTween(r._growTween),r._growTween=null,l(r._pointList),t&&t(r);}}),this.sprite._tweens.push(this._growTween)):t&&t(r);}},{key:"_getPointPosStr",value:function(t){var i={};return y._.each(t,function(t,e){t&&(i["p_1_"+e]=t[1],i["p_0_"+e]=t[0]);}),i}},{key:"_getPointList",value:function(t){for(var e=[],i=0,n=t.length;i<n;i++){var l=t[i];e.push([l.x,l.y]);}return e}},{key:"_widget",value:function(t){var e=this;if(t=t||{},e._pointList=this._getPointList(e.data),0!=e._pointList.length){var i=[];if(t.animation)for(var n=this._getFirstNode(),l=n?n.y:void 0,r=0,o=e.data.length;r<o;r++){var a=e.data[r];i.push([a.x,y._.isNumber(a.y)?l:a.y]);}else i=e._pointList;var s={pointList:e._currPointList=i,lineWidth:e.line.lineWidth,y:e.y,strokeStyle:e._getLineStrokeStyle(i),smooth:e.line.smooth,lineType:e._getProp(e.line.lineType),smoothFilter:function(t){0<t[1]?t[1]=0:Math.abs(t[1])>e.h&&(t[1]=-e.h);},lineCap:"round"},u=new f({context:s});u.on(y.event.types.get(),function(t){t.eventInfo={trigger:e.line,nodes:[]},e._graphs.app.fire(t.type,t);}),this.line.enabled||(u.context.visible=!1),e.sprite.addChild(u),e._bline=u;var d=new x({context:{path:e._fillLine(u),fillStyle:e._getFillStyle(),globalAlpha:y._.isArray(e.area.alpha)?1:e.area.alpha}});d.on(y.event.types.get(),function(t){t.eventInfo={trigger:e.area,nodes:[]},e._graphs.app.fire(t.type,t);}),this.area.enabled||(d.context.visible=!1),e.sprite.addChild(d),e._area=d,e._createNodes(),e._createTexts();}}},{key:"_getFirstNode",value:function(){for(var t=null,e=0,i=this.data.length;e<i;e++){var n=this.data[e];if(y._.isNumber(n.y)&&(null!==t&&"right"!=this._yAxis.align||(t=n),"right"!==this._yAxis.align&&null!==t))break}return t}},{key:"_getFillStyle",value:function(){var t=this,e=null,i=t._getProp(t.area.fillStyle)||t._getLineStrokeStyle(null,"fillStyle");if(y._.isArray(t.area.alpha)&&!(i instanceof CanvasGradient)){t.area.alpha.length=2,null==t.area.alpha[0]&&(t.area.alpha[0]=0),null==t.area.alpha[1]&&(t.area.alpha[1]=0);var n=y._.min(t._bline.context.pointList,function(t){return t[1]});if(void 0===n[0]||void 0===n[1])return null;e=t.ctx.createLinearGradient(n[0],n[1],n[0],0);var l=y.color.colorRgb(i),r=l.replace(")",", "+t._getProp(t.area.alpha[0])+")").replace("RGB","RGBA");e.addColorStop(0,r);var o=l.replace(")",", "+t.area.alpha[1]+")").replace("RGB","RGBA");e.addColorStop(1,o),i=e;}return i}},{key:"_getLineStrokeStyle",value:function(t,e){var i;if(!this._opt.line||!this._opt.line.strokeStyle)return this.line.strokeStyle;if(this._opt.line.strokeStyle.lineargradient){t=t||this._bline.context.pointList;var n=y._.min(t,function(t){return t[1]}),l=y._.max(t,function(t){return t[1]});return "fillStyle"==e&&(l=[0,0]),void 0===n[0]||void 0===n[1]||void 0===l[1]?null:(i=this.ctx.createLinearGradient(n[0],n[1],n[0],l[1]),y._.each(this._opt.line.strokeStyle.lineargradient,function(t,e){i.addColorStop(t.position,t.color);}),i)}return i=this._getColor(this._opt.line.strokeStyle)}},{key:"_createNodes",value:function(){var t=this,e=t._currPointList;this._nodes||(this._nodes=new v.default.Display.Sprite({}),this.sprite.addChild(this._nodes));for(var i=0,n=0,l=e.length;n<l;n++){var r=t._getColor(t.node.strokeStyle||t.line.strokeStyle,n);if(t.data[n].color=r,t.node.enabled){var o=t._currPointList[n];if(o&&y._.isNumber(o[1])){var a={x:o[0],y:o[1],r:t._getProp(t.node.radius,n),lineWidth:t._getProp(t.node.lineWidth,n)||2,strokeStyle:r,fillStyle:t._getProp(t.node.fillStyle,n),visible:!!t._getProp(t.node.visible,n)},s=g,u=t._getProp(t.node.shapeType,n);"isogon"==u&&(s=b,a.n=t._getProp(t.node.isogonPointNum,n)),"path"==u&&(s=x,a.path=t._getProp(t.node.path,n));var d=t._nodes.children[i];if(d?d.type==u?y._.extend(d.context,a):(d.destroy(),d=new s({context:a}),t._nodes.addChildAt(d,i)):(d=new s({context:a}),t._nodes.addChild(d)),t.node.corner){var f=t._pointList[n][1],h=t._pointList[n-1],c=t._pointList[n+1];h&&c&&f==h[1]&&f==c[1]&&(d.context.visible=!1);}i++;}}}if(t._nodes.children.length>i)for(var p=i,_=t._nodes.children.length;p<_;p++)t._nodes.children[p].destroy(),p--,_--;}},{key:"_createTexts",value:function(){var t=this,e=t._currPointList;if(t.label.enabled){this._labels||(this._labels=new v.default.Display.Sprite({}),this.sprite.addChild(this._labels));for(var i=0,n=0,l=e.length;n<l;n++){var r=e[n];if(r&&y._.isNumber(r[1])){var o={x:r[0],y:r[1]-3,fontSize:this.label.fontSize,textAlign:"center",textBaseline:"bottom",fillStyle:t._getColor(t.label.fontColor,n),lineWidth:1,strokeStyle:"#ffffff"},a=t.data[n].value;if(y._.isFunction(t.label.format)&&(a=t.label.format(a,t.data[n])||a),null!=a&&null!=a){var s=this._labels.children[i];s?(s.resetText(a),y._.extend(s.context,o)):(s=new v.default.Display.Text(a,{context:o}),t._labels.addChild(s),t._checkTextPos(s,n)),i++;}}}if(t._labels.children.length>i)for(var u=i,d=t._labels.children.length;u<d;u++)t._labels.children[u].destroy(),u--,d--;}}},{key:"_checkTextPos",value:function(t,e){var i=this._currPointList,n=i[e-1],l=i[e+1];n&&l&&n[1]<t.context.y&&l[1]<t.context.y&&(t.context.y+=7,t.context.textBaseline="top");}},{key:"_fillLine",value:function(t){var i=y._.clone(t.context.pointList),e="",n=-this._yAxis.originPos,l=null;function r(){l.push([l[l.length-1][0],n],[l[0][0],n],[l[0][0],l[0][1]]),e+=(0, o.getPath)(l),l=null;}return y._.each(i,function(t,e){y._.isNumber(t[1])?(null===l&&(l=[]),l.push(t)):l&&l.length&&r(),e==i.length-1&&y._.isNumber(t[1])&&r();}),e}},{key:"getNodeInfoOfX",value:function(l){for(var t=this,e=0,i=this.data.length;e<i;e++)if(null!==this.data[e].value&&Math.abs(this.data[e].x-l)<=1)return this.data[e];function r(t,e){var i={x:t,y:0};return i.y=e[0][1]+(e[1][1]-e[0][1])/(e[1][0]-e[0][0])*(t-e[0][0]),i}var o;return this._bline&&function t(e){if(!(l<e[0][0]||l>e.slice(-1)[0][0])){var i=parseInt(e.length/2);if(Math.abs(e[i][0]-l)<=1)o={x:e[i][0],y:e[i][1]};else{var n=[];if(l>e[i][0]){if(l<e[i+1][0])return void(o=r(l,[e[i],e[i+1]]));n=e.slice(i+1);}else{if(l>e[i-1][0])return void(o=r(l,[e[i-1],e[i]]));n=e.slice(0,i);}t(n);}}}(this._bline.context.pointList),o&&null!=o.y?{type:"line",iGroup:t.iGroup,iNode:-1,field:t.field,value:this._yAxis.getValOfPos(-o.y),x:o.x,y:o.y,rowData:null,color:t._getProp(t.node.strokeStyle)||t._getLineStrokeStyle()}:null}}]),c);function c(t,e,i,n,l,r,o){var a;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),(a=function(t,e){return !e||"object"!==s(e)&&"function"!=typeof e?d(t):e}(this,u(c).call(this)))._graphs=o,a._opt=i,a.fieldMap=t,a.field=null,a.iGroup=e,a._yAxis=t.yAxis,a.ctx=n,a.w=r,a.h=l,a.y=0,a.line={strokeStyle:t.color},a.data=[],a.sprite=null,a._pointList=[],a._currPointList=[],a._bline=null,y._.extend(!0,d(a),(0, y.getDefaultProps)(c.defaultProps()),i),a.field=t.field,a.init(i),a}t.default=h;});
	});

	unwrapExports(group);

	var line = createCommonjsModule(function (module, exports) {
	!function(e,t){t(exports,group,graphs,index_cjs);}(void 0,function(e,t,i,p){Object.defineProperty(e,"__esModule",{value:!0});var h=n(t);function n(e){return e&&e.__esModule?e:{default:e}}function r(e){return (r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e){return (o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n);}}function s(e,t,i){return t&&u(e.prototype,t),i&&u(e,i),e}function f(e,t){return (f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var l=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t);}(d,n(i).default),s(d,null,[{key:"defaultProps",value:function(){return {field:{detail:"字段配置，支持二维数组格式",default:null},yAxisAlign:{detail:"绘制在哪根y轴上面",default:"left"},_props:[h.default]}}}]),s(d,[{key:"init",value:function(){}},{key:"draw",value:function(e){return e=e||{},this.width=e.width,this.height=e.height,p._.extend(!0,this.origin,e.origin),this.sprite.context.x=this.origin.x,this.sprite.context.y=this.origin.y,this.data=this._trimGraphs(),this._setGroupsForYfield(this.data,null,e),this.animation&&!e.resize?this.grow():this.fire("complete"),this}},{key:"resetData",value:function(e,t){var i=this;e&&(i.dataFrame=e,i.data=i._trimGraphs()),p._.each(i.groups,function(e){e.resetData(i.data[e.field].data,t);});}},{key:"setEnabledField",value:function(){this.enabledField=this.app.getComponent({name:"coord"}).filterEnabledFields(this.field);}},{key:"_trimGraphs",value:function(){var f=this,l=this.app.getComponent({name:"coord"}),d={};return f.setEnabledField(),p._.each(p._.flatten(f.enabledField),function(e,t){var i=f.app.getComponent({name:"coord"}).getFieldMapOf(e),n=f.dataFrame.getFieldData(e);if(n){for(var r=[],o=0,a=n.length;o<a;o++){var u=l.getPoint({iNode:o,field:e,value:{y:n[o]}}),s={type:"line",iGroup:t,iNode:o,field:e,value:n[o],x:u.pos.x,y:u.pos.y,rowData:f.dataFrame.getRowDataAt(o),color:i.color};r.push(s);}d[e]={yAxis:i.yAxis,field:e,data:r};}}),d}},{key:"grow",value:function(i){var n=0,r=this.groups.length,o=this;return p._.each(this.groups,function(e,t){e._grow(function(){n++,i&&i(e),n==r&&o.fire("complete");});}),this}},{key:"show",value:function(e){var i=this;-1!=p._.indexOf(p._.flatten([i.field]),e)&&(this.data=this._trimGraphs(),this._setGroupsForYfield(this.data,e),p._.each(this.groups,function(e,t){e.resetData(i.data[e.field].data);}));}},{key:"hide",value:function(e){var i=this,t=i.getGroupIndex(e);!this.groups.length||t<0||(this.groups.splice(t,1)[0].destroy(),this.data=this._trimGraphs(),p._.each(this.groups,function(e,t){e.resetData(i.data[e.field].data);}));}},{key:"getGroupIndex",value:function(e){for(var t=-1,i=0,n=this.groups.length;i<n;i++)if(this.groups[i].field===e){t=i;break}return t}},{key:"getGroup",value:function(e){return this.groups[this.getGroupIndex(e)]}},{key:"_setGroupsForYfield",value:function(e,s,f){var l=this;f=f||{},s=s&&p._.flatten([s]);var d=p._.flatten([this.field]);p._.each(e,function(e,t){if(!s||-1!=p._.indexOf(s,t)){var i=l.app.getComponent({name:"coord"}).getFieldMapOf(t),n=p._.indexOf(d,t),r=new h.default(i,n,l._opt,l.ctx,l.height,l.width,l);r.draw({animation:l.animation&&!f.resize},e.data);for(var o=!1,a=0,u=l.groups.length;a<u;a++)if(n<l.groups[a].iGroup){l.groups.splice(a,0,r),o=!0,l.sprite.addChildAt(r.sprite,a);break}o||(l.groups.push(r),l.sprite.addChild(r.sprite));}});}},{key:"getNodesAt",value:function(i,n){var r=[];return p._.each(this.groups,function(e){var t=e.getNodeInfoAt(i,n);t&&r.push(t);}),r}},{key:"getNodesOfPos",value:function(i){var n=[];return p._.each(this.groups,function(e){var t=e.getNodeInfoOfX(i);t&&n.push(t);}),n}}]),d);function d(e,t){var i;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,d),(i=function(e,t){return !t||"object"!==r(t)&&"function"!=typeof t?a(e):t}(this,o(d).call(this,e,t))).type="line",i.enabledField=null,i.groups=[],p._.extend(!0,a(i),(0, p.getDefaultProps)(d.defaultProps()),e),i.init(),i}p.global.registerComponent(l,"graphs","line"),e.default=l;});
	});

	unwrapExports(line);

	var intersect = createCommonjsModule(function (module, exports) {
	!function(e,n){n(exports);}(0,function(e){function c(e,n,t,f,i,o){var r=(o-n)*(t-e)-(f-n)*(i-e);return 0<r||!(r<0)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e,n){var t=e[0][0],f=e[0][1],i=e[1][0],o=e[1][1],r=n[0][0],u=n[0][1],d=n[1][0],s=n[1][1];return c(t,f,r,u,d,s)!==c(i,o,r,u,d,s)&&c(t,f,i,o,r,u)!==c(t,f,i,o,d,s)};});
	});

	unwrapExports(intersect);

	var grid$2 = createCommonjsModule(function (module, exports) {
	!function(e,t){t(exports);}(0,function(e){function l(e,t){this._cells=[],this._cellSize=t,this._reverseCellSize=1/t;for(var l=0;l<e.length;l++){var i=e[l],o=this.coordToCellNum(i[0]),r=this.coordToCellNum(i[1]);if(this._cells[o])this._cells[o][r]?this._cells[o][r].push(i):this._cells[o][r]=[i];else{var s=[];s[r]=[i],this._cells[o]=s;}}}Object.defineProperty(e,"__esModule",{value:!0}),l.prototype={cellPoints:function(e,t){return void 0!==this._cells[e]&&void 0!==this._cells[e][t]?this._cells[e][t]:[]},rangePoints:function(e){for(var t=this.coordToCellNum(e[0]),l=this.coordToCellNum(e[1]),i=this.coordToCellNum(e[2]),o=this.coordToCellNum(e[3]),r=[],s=t;s<=i;s++)for(var n=l;n<=o;n++)Array.prototype.push.apply(r,this.cellPoints(s,n));return r},removePoint:function(e){for(var t,l=this.coordToCellNum(e[0]),i=this.coordToCellNum(e[1]),o=this._cells[l][i],r=0;r<o.length;r++)if(o[r][0]===e[0]&&o[r][1]===e[1]){t=r;break}return o.splice(t,1),o},trunc:Math.trunc||function(e){return e-e%1},coordToCellNum:function(e){return this.trunc(e*this._reverseCellSize)},extendBbox:function(e,t){return [e[0]-t*this._cellSize,e[1]-t*this._cellSize,e[2]+t*this._cellSize,e[3]+t*this._cellSize]}},e.default=function(e,t){return new l(e,t)};});
	});

	unwrapExports(grid$2);

	var format = createCommonjsModule(function (module, exports) {
	!function(e,n){n(exports);}(0,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={toXy:function(e,n){return void 0===n?e.slice():e.map(function(e){return new Function("pt","return [pt"+n[0]+",pt"+n[1]+"];")(e)})},fromXy:function(e,n){return void 0===n?e.slice():e.map(function(e){return new Function("pt","const o = {}; o"+n[0]+"= pt[0]; o"+n[1]+"= pt[1]; return o;")(e)})}};});
	});

	unwrapExports(format);

	var convex = createCommonjsModule(function (module, exports) {
	!function(e,n){n(exports);}(0,function(e){function r(e,n,t){return (n[0]-e[0])*(t[1]-e[1])-(n[1]-e[1])*(t[0]-e[0])}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e){var n=function(e){for(var n=[],t=0;t<e.length;t++){for(;2<=n.length&&r(n[n.length-2],n[n.length-1],e[t])<=0;)n.pop();n.push(e[t]);}return n.pop(),n}(e),t=function(e){for(var n=e.reverse(),t=[],o=0;o<n.length;o++){for(;2<=t.length&&r(t[t.length-2],t[t.length-1],n[o])<=0;)t.pop();t.push(n[o]);}return t.pop(),t}(e).concat(n);return t.push(e[0]),t};});
	});

	unwrapExports(convex);

	var hull = createCommonjsModule(function (module, exports) {
	!function(e,t){t(exports,intersect,grid$2,format,convex);}(void 0,function(e,t,r,n,o){Object.defineProperty(e,"__esModule",{value:!0});var u=i(t),l=i(r),v=i(n),h=i(o);function i(e){return e&&e.__esModule?e:{default:e}}function g(e,t){return Math.pow(t[0]-e[0],2)+Math.pow(t[1]-e[1],2)}function d(e,t,r){var n=[t[0]-e[0],t[1]-e[1]],o=[r[0]-e[0],r[1]-e[1]],u=g(e,t),i=g(e,r);return (n[0]*o[0]+n[1]*o[1])/Math.sqrt(u*i)}function c(e,t){for(var r=0;r<t.length-1;r++){var n=[t[r],t[r+1]];if(!(e[0][0]===n[0][0]&&e[0][1]===n[0][1]||e[0][0]===n[1][0]&&e[0][1]===n[1][1])&&(0, u.default)(e,n))return !0}return !1}function p(e,t,r){for(var n,o,u=null,i=s,f=s,a=0;a<t.length;a++)n=d(e[0],e[1],t[a]),o=d(e[1],e[0],t[a]),i<n&&f<o&&!c([e[0],t[a]],r)&&!c([e[1],t[a]],r)&&(i=n,f=o,u=t[a]);return u}var s=Math.cos(90/(180/Math.PI));e.default=function(e,t,r){var n=t||20,o=function(e){for(var t=[e[0]],r=e[0],n=1;n<e.length;n++){var o=e[n];r[0]===o[0]&&r[1]===o[1]||t.push(o),r=o;}return t}(function(e){return e.sort(function(e,t){return e[0]-t[0]||e[1]-t[1]})}(v.default.toXy(e,r)));if(o.length<4)return o.concat([o[0]]);var u=function(e){for(var t=1/0,r=1/0,n=-1/0,o=-1/0,u=e.length-1;0<=u;u--)e[u][0]<t&&(t=e[u][0]),e[u][1]<r&&(r=e[u][1]),e[u][0]>n&&(n=e[u][0]),e[u][1]>o&&(o=e[u][1]);return [n-t,o-r]}(o),i=[.6*u[0],.6*u[1]],f=(0, h.default)(o),a=o.filter(function(e){return f.indexOf(e)<0}),d=Math.ceil(1/(o.length/(u[0]*u[1]))),c=function e(t,r,n,o,u){for(var i,f=!1,a=0;a<t.length-1;a++){var d=[t[a],t[a+1]],c=d[0][0]+","+d[0][1]+","+d[1][0]+","+d[1][1];if(!(g(d[0],d[1])<r||u.has(c))){for(var l=0,v=(i=d,[Math.min(i[0][0],i[1][0]),Math.min(i[0][1],i[1][1]),Math.max(i[0][0],i[1][0]),Math.max(i[0][1],i[1][1])]),h=void 0,s=void 0,M=void 0;h=(v=o.extendBbox(v,l))[2]-v[0],s=v[3]-v[1],l++,null===(M=p(d,o.rangePoints(v),t))&&(n[0]>h||n[1]>s););h>=n[0]&&s>=n[1]&&u.add(c),null!==M&&(t.splice(a+1,0,M),o.removePoint(M),f=!0);}}return f?e(t,r,n,o,u):t}(f,Math.pow(n,2),i,(0, l.default)(a,d),new Set);return r?v.default.fromXy(c,r):c};});
	});

	unwrapExports(hull);

	var scat = createCommonjsModule(function (module, exports) {
	!function(e,t){t(exports,index_cjs$1,graphs,index_cjs,hull);}(void 0,function(e,t,i,_,l){Object.defineProperty(e,"__esModule",{value:!0});var x=n(t),a=n(i),v=n(l);function n(e){return e&&e.__esModule?e:{default:e}}function s(e){return (s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e){return (o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t){for(var i=0;i<t.length;i++){var l=t[i];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l);}}function u(e,t,i){return t&&d(e.prototype,t),i&&d(e,i),e}function h(e,t){return (h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var g=x.default.Shapes.Circle,m=x.default.Shapes.Rect,b=x.default.Shapes.Line,k=x.default.Shapes.Polygon,f=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t);}(p,a.default),u(p,null,[{key:"defaultProps",value:function(){return {field:{detail:"字段配置",default:null},groupField:{detail:"分组字段",default:null,documentation:"分组字段，如果area配置enabled为true，那么需要groupField来构建几个area"},dataFilter:{detail:"散点过滤数据",default:null,documentation:"数据过滤器，可以和groupField实现交叉过滤"},aniOrigin:{detail:"节点动画的原点",default:"default",documentation:"可选的还有center（坐标正中）、origin（坐标原点）"},node:{detail:"单数据节点图形设置",propertys:{dataKey:{detail:"元素的数据id，默认索引匹配",default:"__index__"},shapeType:{detail:"图形类型",default:"circle",documentation:"节点的现状可以是圆 ，也可以是rect，也可以是三角形，后面两种后面实现"},maxRadius:{detail:"节点最大半径",default:25},minRadius:{detail:"节点最小半径",default:5},radius:{detail:"半径",default:null},radiusScale:{detail:"半径缩放比例",documentation:"在计算好真实半径后缩放，主要用在,缩略图中，比如datazoom的缩略图",default:1},normalRadius:{detail:"默认半径",default:15},fillStyle:{detail:"节点景色",default:null},fillAlpha:{detail:"节点透明度",default:.8},strokeStyle:{detail:"节点描边颜色",default:null},lineWidth:{detail:"节点描边线宽",default:0},strokeAlpha:{detail:"节点描边透明度",default:1},focus:{detail:"节点hover态设置",propertys:{enabled:{detail:"是否开启",default:!0},lineWidth:{detail:"hover后的边框大小",default:6},strokeAlpha:{detail:"hover后的边框透明度",default:.2},fillAlpha:{detail:"hover后的背景透明度",default:.8}}},select:{detail:"节点选中态设置",propertys:{enabled:{detail:"是否开启",default:!1},lineWidth:{detail:"选中后的边框大小",default:8},strokeAlpha:{detail:"选中后的边框透明度",default:.4},fillAlpha:{detail:"选中后的背景透明度",default:1}}}}},line:{detail:"每个节点和指标轴线的连线",propertys:{enabled:{detail:"是否开启",default:!1},lineWidth:{detail:"连线宽",default:1},strokeStyle:{detail:"连线颜色",default:"#ccc"},lineType:{detail:"连线类型",default:"dashed"}}},area:{detail:"散点集合组成的面",propertys:{enabled:{detail:"是否开启",default:!1},concavity:{detail:"凹凸系数，默认80，越大越凸",default:88},quantile:{detail:"散点用来计入面积的分位数",default:8},fillStyle:{detail:"散点集合面的背景色",default:null},fillAlpha:{detail:"散点集合面的透明度",default:.15},strokeStyle:{detail:"散点集合面的描边颜色",default:null},lineWidth:{detail:"散点集合面的描边线宽",default:0},strokeAlpha:{detail:"散点集合面的描边透明度",default:.5}}},label:{detail:"文本设置",propertys:{enabled:{detail:"是否开启",default:!0},field:{detail:"获取label的字段",default:null},format:{detail:"label格式化处理函数",default:function(e){return e}},fontSize:{detail:"label字体大小",default:13},fontColor:{detail:"字体颜色",default:"#888"},strokeStyle:{detail:"字体描边颜色",default:"#ffffff"},lineWidth:{detail:"描边大小",default:0},textAlign:{detail:"水平对齐方式",default:"center"},verticalAlign:{detail:"垂直基线对齐方式",default:"middle"},position:{detail:"文本布局位置",documentation:"auto(目前等于center，还未实现),center,top,right,bottom,left",default:"center"},offsetX:{detail:"x方向偏移量",default:0},offsetY:{detail:"y方向偏移量",default:0}}}}}}]),u(p,[{key:"init",value:function(){this._shapesp=new x.default.Display.Sprite({id:"scat_shapesp"}),this._textsp=new x.default.Display.Sprite({id:"textsp"}),this._linesp=new x.default.Display.Sprite({id:"textsp"}),this._areasp=new x.default.Display.Sprite({id:"areasp"}),this.sprite.addChild(this._areasp),this.sprite.addChild(this._linesp),this.sprite.addChild(this._shapesp),this.sprite.addChild(this._textsp);}},{key:"draw",value:function(e){e=e||{},_._.extend(!0,this,e),this.data=this._trimGraphs(),this._widget(),this.sprite.context.x=this.origin.x,this.sprite.context.y=this.origin.y;var t=this;return !this.animation||e.resize||t.inited?this.fire("complete"):this.grow(function(){t.fire("complete");}),this}},{key:"resetData",value:function(e){this.dataFrame=e,this.data=this._trimGraphs(),this._widget(),this.grow();}},{key:"getNodesAt",value:function(){return []}},{key:"_trimGraphs",value:function(){var e=[];this._groupData={};var t=this.app.getComponent({name:"coord"}),i=this.dataFrame.length;this._rData=null,this._rMaxValue=null,this._rMinValue=null;for(var l=0;l<i;l++){var a=this.dataFrame.getRowDataAt(l),n=t.getFieldMapOf(this.field),s=t.getPoint({iNode:l,field:this.field,value:{y:a[this.field]}});if(null!=s.pos.x&&null!=s.pos.y){var o={type:"scat",rowData:a,x:s.pos.x,y:s.pos.y,value:s.value,field:this.field,fieldColor:n.color,iNode:l,focused:!1,selected:!1,radius:null,fillStyle:null,color:null,strokeStyle:null,strokeAlpha:1,lineWidth:0,shapeType:null,label:null,fillAlpha:1,nodeElement:null};if(this._setR(o),this._setFillStyle(o),this._setFillAlpha(o),this._setStrokeStyle(o),this._setLineWidth(o),this._setStrokeAlpha(o),this._setNodeType(o),this._setText(o),!this.dataFilter||!_._.isFunction(this.dataFilter)||this.dataFilter.apply(this,[o])){if(this.groupField){var r=a[this.groupField];r&&(this._groupData[r]||(this._groupData[r]=[]),this._groupData[r].push(o));}else this._groupData.all||(this._groupData.all=[]),this._groupData.all.push(o);e.push(o);}}}return e}},{key:"_setR",value:function(e){var t=this.node.normalRadius,i=e.rowData;if(null!=this.node.radius){if(_._.isString(this.node.radius)&&i[this.node.radius]){this._rData||this._rMaxValue||this._rMinValue||(this._rData=this.dataFrame.getFieldData(this.node.radius),this._rMaxValue=_._.max(this._rData),this._rMinValue=_._.min(this._rData));var l=i[this.node.radius];t=this._rMaxValue==this._rMinValue?this.node.minRadius+(this.node.maxRadius-this.node.minRadius)/2:this.node.minRadius+(l-this._rMinValue)/(this._rMaxValue-this._rMinValue)*(this.node.maxRadius-this.node.minRadius);}_._.isFunction(this.node.radius)&&(t=this.node.radius(i)),isNaN(parseInt(this.node.radius))||(t=parseInt(this.node.radius));}return t=Math.max(t*this.node.radiusScale,2),e.radius=t,this}},{key:"_setText",value:function(e){null!=this.label.field&&_._.isString(this.label.field)&&e.rowData[this.label.field]&&(e.label=this.label.format(e.rowData[this.label.field],e));}},{key:"_setFillStyle",value:function(e){return e.color=e.fillStyle=this._getStyle(this.node.fillStyle,e),this}},{key:"_setFillAlpha",value:function(e){return e.fillAlpha=this._getProp(this.node.fillAlpha,e),this}},{key:"_setStrokeAlpha",value:function(e){return e.strokeAlpha=this._getProp(this.node.strokeAlpha,e),this}},{key:"_setStrokeStyle",value:function(e){return e.strokeStyle=this._getStyle(this.node.strokeStyle||this.node.fillStyle,e),this}},{key:"_getProp",value:function(e,t){var i=e;return _._.isArray(e)&&(i=e[t.iGroup]),_._.isFunction(e)&&(i=e.apply(this,[t])),i}},{key:"_getStyle",value:function(e,t){var i=e;return _._.isArray(e)&&(i=e[t.iGroup]),_._.isFunction(e)&&(i=e.apply(this,[t])),i=i||t.fieldColor}},{key:"_setLineWidth",value:function(e){return e.lineWidth=this._getProp(this.node.lineWidth,e),this}},{key:"_setNodeType",value:function(e){var t=this.node.shapeType;return _._.isArray(t)&&(t=t[e.iGroup]),_._.isFunction(t)&&(t=t(e)),t=t||"circle",e.shapeType=t,this}},{key:"_widget",value:function(){var e=this,d=this;if(_._.each(_._.flatten([d._shapesp.children,d._textsp.children,d._linesp.children]),function(e){e.__used=!1;}),_._.each(d.data,function(e,t){var i=d._getNodeElement(e,t);i||(e.__isNew=!0);var l=d._getNodeContext(e),a="circle"==e.shapeType?g:m;if(i?i.animate(l):(i=new a({id:"shape_"+t,hoverClone:!1,context:l}),d._shapesp.addChild(i),i.on(_.event.types.get(),function(e){e.eventInfo={title:null,trigger:d.node,nodes:[this.nodeData]},this.nodeData.label&&(e.eventInfo.title=this.nodeData.label),"mouseover"==e.type&&d.focusAt(this.nodeData.iNode),"mouseout"==e.type&&(this.nodeData.selected||d.unfocusAt(this.nodeData.iNode)),d.app.fire(e.type,e);})),i.__used=!0,i.nodeData=e,i.iNode=t,e.nodeElement=i,d.line.enabled){var n=i.lineElement,s={start:{x:l.x,y:l.y+l.r},end:{x:l.x,y:0},lineWidth:d.line.lineWidth,strokeStyle:d.line.strokeStyle,lineType:d.line.lineType};n?n.animate(s):(n=new b({context:s}),d._linesp.addChild(n)),n.__used=!0,i.lineElement=n;}if(e.label&&d.label.enabled){var o=i.labelElement,r={};o?(o.resetText(e.label),r=d._getTextContext(o,l),o.animate(r)):(o=new x.default.Display.Text(e.label,{id:"scat_text_"+t,context:{}}),r=d._getTextContext(o,l),_._.extend(o.context,r),d._textsp.addChild(o)),o.__used=!0,(i.labelElement=o).nodeElement=i;}}),d.area.enabled){d._areasp.removeAllChildren();var t=0,i=function(){a=e._groupData[l],n={name:l,iGroup:t,data:a},s=[],_._.each(a,function(e){s=s.concat(function(e,t){if(!t||1==t)return [[e.x,e.y]];for(var i=[],l=0;l<t;l++){var a=360/(t-1)*l,n=e.radius+3,s=e.x+Math.cos(2*Math.PI/360*a)*n,o=e.y+Math.sin(2*Math.PI/360*a)*n;i.push([s,o]);}return i}(e,d.area.quantile));}),o=(0, v.default)(s,d.area.concavity),r=d.app.getTheme(t),u=d._getStyle(d.area.fillStyle,n)||r,h=d._getProp(d.area.fillAlpha,n),f=d._getStyle(d.area.strokeStyle,n)||r,p=d._getProp(d.area.lineWidth,n),c=d._getProp(d.area.strokeAlpha,n),y=new k({context:{pointList:o,fillStyle:u,fillAlpha:h,strokeStyle:f,lineWidth:p,strokeAlpha:c,smooth:!1}}),d._areasp.addChild(y),t++;};for(var l in this._groupData){var a,n,s,o,r,u,h,f,p,c,y;i();}}_._.each(_._.flatten([d._shapesp.children,d._textsp.children,d._linesp.children]),function(e){e.__used||e.animate({globalAlpha:0,r:0},{onComplete:function(){e.destroy();}});});}},{key:"_getNodeElement",value:function(e,t){var i,l=this.node.dataKey;if(l){_._.isString(l)&&(l=l.split(","));for(var a=0,n=this._shapesp.children.length;a<n;a++){for(var s=this._shapesp.children[a],o=!0,r=0,d=l.length;r<d;r++){var u=l[r];if(s.nodeData.rowData[u]!=e.rowData[u]){o=!1;break}}if(o&&l.length){i=s;break}}}else i=this._shapesp.getChildAt(t);return i}},{key:"_getTextPosition",value:function(e,t){var i=0,l=0;switch(this.label.position){case"center":i=t.x,l=t.y;break;case"top":i=t.x,l=t.y-t.r;break;case"right":i=t.x+t.r,l=t.y;break;case"bottom":i=t.x,l=t.y+t.r;break;case"left":i=t.x-t.r,l=t.y;break;case"auto":i=t.x,l=t.y,e.getTextWidth()>2*t.r&&(l=t.y+t.r+.5*e.getTextHeight());}return {x:i+this.label.offsetX,y:l+this.label.offsetY}}},{key:"_getTextContext",value:function(e,t){var i=this._getTextPosition(e,t),l=this.label.fontSize;e.getTextWidth()>2*t.r&&(l-=2);var a={x:i.x,y:i.y,fillStyle:this.label.fontColor||t.fillStyle,fontSize:l,strokeStyle:this.label.strokeStyle||t.fillStyle,lineWidth:this.label.lineWidth,textAlign:this.label.textAlign,textBaseline:this.label.verticalAlign};return this.animation&&!this.inited&&this._setCtxAniOrigin(a),a}},{key:"_setCtxAniOrigin",value:function(e){if("default"==this.aniOrigin&&(e.y=0),"origin"==this.aniOrigin){var t=this.app.getComponent({name:"coord"}).getOriginPos({field:this.field});e.x=t.x,e.y=t.y;}"center"==this.aniOrigin&&(e.x=this.width/2,e.y=-this.height/2);}},{key:"_getNodeContext",value:function(e){if("circle"==e.shapeType)return this._getCircleContext(e)}},{key:"_getCircleContext",value:function(e){var t={x:e.x,y:e.y,r:e.radius,fillStyle:e.fillStyle,strokeStyle:e.strokeStyle,strokeAlpha:e.strokeAlpha,lineWidth:e.lineWidth,fillAlpha:e.fillAlpha,cursor:"pointer"};return !this.animation||this.inited&&!e.__isNew||(this._setCtxAniOrigin(t),t.r=1),t}},{key:"grow",value:function(t){var i=0,l=this.data.length-1,a=this;_._.each(this.data,function(e){e.__isNew&&a._growNode(e,function(){i+=1,delete e.__isNew,i==l&&t&&t();});});}},{key:"_growNode",value:function(e,t){var i=this;e.nodeElement.animate({x:e.x,y:e.y,r:e.radius},{onUpdate:function(e){if(this.labelElement&&this.labelElement.context){var t=i._getTextPosition(this.labelElement,e);this.labelElement.context.x=t.x,this.labelElement.context.y=t.y;}this.lineElement&&this.lineElement.context&&(this.lineElement.context.start.y=e.y+e.r);},delay:Math.round(300*Math.random()),onComplete:function(){t&&t();}});}},{key:"focusAt",value:function(e){var t=this.data[e];if(this.node.focus.enabled&&!t.focused){var i=t.nodeElement.context;i.lineWidth=this.node.focus.lineWidth,i.strokeAlpha=this.node.focus.strokeAlpha,i.fillAlpha=this.node.focus.fillAlpha,t.focused=!0;}}},{key:"unfocusAt",value:function(e){var t=this.data[e];if(this.node.focus.enabled&&t.focused){var i=t.nodeElement.context;i.lineWidth=t.lineWidth,i.strokeAlpha=t.strokeAlpha,i.fillAlpha=t.fillAlpha,i.strokeStyle=t.strokeStyle,t.focused=!1;}}},{key:"selectAt",value:function(e){var t=this.data[e];if(this.node.select.enabled&&!t.selected){var i=t.nodeElement.context;i.lineWidth=this.node.select.lineWidth,i.strokeAlpha=this.node.select.strokeAlpha,i.fillAlpha=this.node.select.fillAlpha,t.selected=!0;}}},{key:"unselectAt",value:function(e){var t=this.data[e];if(this.node.select.enabled&&t.selected){var i=t.nodeElement.context;t.focused?(i.lineWidth=this.node.focus.lineWidth,i.strokeAlpha=this.node.focus.strokeAlpha,i.fillAlpha=this.node.focus.fillAlpha):(i.lineWidth=t.lineWidth,i.strokeAlpha=t.strokeAlpha,i.fillAlpha=t.fillAlpha),t.selected=!1;}}},{key:"getNodesOfPos",value:function(){return []}}]),p);function p(e,t){var i;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),(i=function(e,t){return !t||"object"!==s(t)&&"function"!=typeof t?r(e):t}(this,o(p).call(this,e,t))).type="scat",i._rData=null,i._rMaxValue=null,i._rMinValue=null,i._groupData={},_._.extend(!0,r(i),(0, _.getDefaultProps)(p.defaultProps()),e),i.init(),i}_.global.registerComponent(f,"graphs","scat"),e.default=f;});
	});

	unwrapExports(scat);

	var pie = createCommonjsModule(function (module, exports) {
	!function(e,t){t(exports,index_cjs$1,index_cjs);}(void 0,function(e,t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,i=(n=t)&&n.__esModule?n:{default:n};function s(e){return (s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i);}}function r(e,t){return !t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function l(e){return (l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return (c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d,u,h=i.default.Shapes.Sector,R=i.default.Shapes.Path,p=i.default.AnimationFrame,g=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t);}(x,a.event.Dispatcher),d=x,(u=[{key:"init",value:function(){this.sprite=new i.default.Display.Sprite,this.sectorsSp=new i.default.Display.Sprite,this.sprite.addChild(this.sectorsSp),this.selectedSp=new i.default.Display.Sprite,this.sprite.addChild(this.selectedSp),this._graphs.label.enabled&&(this.textSp=new i.default.Display.Sprite);}},{key:"draw",value:function(e){a._.extend(!0,this,e),this.sprite.context.x=this.origin.x,this.sprite.context.y=this.origin.y,this._widget();}},{key:"resetData",value:function(e){var t=this;this.data=e,t.destroyLabel();for(var n=0,i=0;i<t.sectors.length;i++){var s=t.sectors[i],o=this.data.list[i];s.animate({r:o.outRadius,startAngle:o.startAngle,endAngle:o.endAngle},{duration:280,onComplete:function(){++n==t.sectors.length&&t._graphs.label.enabled&&t._startWidgetLabel();}});}}},{key:"_widget",value:function(){var t=this,e=t.data.list,n=t.data.total;if(0<e.length&&0<n){t.textSp&&t.sprite.addChild(t.textSp);for(var i=0;i<e.length;i++){var s=e[i],o=new h({hoverClone:!1,xyToInt:!1,context:{x:s.focused?s.outOffsetx:0,y:s.focused?s.outOffsety:0,r0:s.innerRadius,r:s.outRadius,startAngle:s.startAngle,endAngle:s.endAngle,fillStyle:s.fillStyle,cursor:"pointer"},id:"sector"+i});(o.nodeData=s).focusEnabled&&o.hover(function(e){t.focusOf(this.nodeData);},function(e){this.nodeData.selected||t.unfocusOf(this.nodeData);}),o.on(a.event.types.get(),function(e){e.eventInfo={trigger:t._graphs.node,nodes:[this.nodeData]},t._graphs.app.fire(e.type,e);}),t.sectorsSp.addChildAt(o,0),t.sectors.push(o);}t._graphs.label.enabled&&t._startWidgetLabel();}}},{key:"focusOf",value:function(e,t){e.focused||(this.sectors[e.iNode].animate({x:e.outOffsetx,y:e.outOffsety},{duration:100,onComplete:function(){t&&t();}}),e.focused=!0);}},{key:"unfocusOf",value:function(e,t){e.focused&&(this.sectors[e.iNode].animate({x:0,y:0},{duration:100,onComplete:function(){t&&t();}}),e.focused=!1);}},{key:"selectOf",value:function(e){var t=this;if(this.sectors.length&&e.selectEnabled){var n=this.sectors[e.iNode];e.selected||(e.focused?this.addCheckedSec(n):(e._focusTigger="select",this.focusOf(e,function(){t.addCheckedSec(n);})),e.selected=!0);}}},{key:"unselectOf",value:function(e){var t=this.sectors[e.iNode];if(e.selected&&e.selectEnabled){var n=this;n.cancelCheckedSec(t,function(){"select"==e._focusTigger&&n.unfocusOf(e);}),e.selected=!1;}}},{key:"addCheckedSec",value:function(e,t){var n=e.context,i=e.nodeData;if(n){var s=new h({xyToInt:!1,context:{x:n.x,y:n.y,r0:n.r-1,r:n.r+i.selectedR,startAngle:n.startAngle,endAngle:n.startAngle,fillStyle:n.fillStyle,globalAlpha:i.selectedAlpha},id:"selected_"+e.id});e._selectedSec=s,this.selectedSp.addChild(s),this.completed?s.animate({endAngle:n.endAngle},{duration:this._getAngleTime(n),onComplete:function(){t&&t();}}):s.context.endAngle=n.endAngle;}}},{key:"cancelCheckedSec",value:function(e,t){var n=e._selectedSec;n.animate({startAngle:n.context.endAngle-.5},{duration:this._getAngleTime(e.context),onComplete:function(){delete e._selectedSec,n.destroy(),t&&t();}});}},{key:"_getAngleTime",value:function(e){return Math.abs(e.startAngle-e.endAngle)/360*500}},{key:"grow",value:function(e){var d=this;a._.each(d.sectors,function(e,t){e.context&&(e.context.r0=0,e.context.r=0,e.context.startAngle=d._graphs.startAngle,e.context.endAngle=d._graphs.startAngle);}),d._hideGrowLabel();var t=p.registTween({from:{process:0},to:{process:1},duration:500,onUpdate:function(e){for(var t=0;t<d.sectors.length;t++){var n=d.sectors[t],i=n.nodeData,s=n.context,o=i.startAngle,a=i.endAngle,r=i.outRadius,l=i.innerRadius;if(s){if(s.r=r*e.process,s.r0=l*e.process,0==t)s.startAngle=o,s.endAngle=o+(a-o)*e.process;else{var c=function(e){var t=e-1,n=d.sectors[t].context;return 0==t?n?n.endAngle:0:n?n.endAngle:arguments.callee(t)}(t);s.startAngle=c,s.endAngle=s.startAngle+(a-o)*e.process;}n._selectedSec&&(n._selectedSec.context.r0=s.r-1,n._selectedSec.context.r=s.r+i.selectedR,n._selectedSec.context.startAngle=s.startAngle,n._selectedSec.context.endAngle=s.endAngle);}}},onComplete:function(){d.sprite._removeTween(t),d._showGrowLabel(),d.completed=!0,e&&e();}});d.sprite._tweens.push(t);}},{key:"_widgetLabel",value:function(e,t,n,i,s,o){var a,r,l,c,d,u,f,h,p,g,x,y,v=this,b=0,S=v.data.list,_=2==e||3==e,m=3==e||4==e,A=_?n:i;0<t.length&&t.sort(function(e,t){return m?S[e].edgey-S[t].edgey:S[t].edgey-S[e].edgey});for(var w=0;w<t.length;w++){a=t[w];var C=S[a],k=C.outRadius+C.moveDis;if(!(!C.enabled||C.y<A||b>=v.textMaxCount)){b++,l=C.edgey,c=Math.abs(C.edgex),d=l-r,0!=w&&(Math.abs(d)<15||m&&d<0||!m&&0<d)&&(l=m?r+15:r-15,0<k-Math.abs(l)&&(c=Math.sqrt(Math.pow(k,2)-Math.pow(l,2))),(_&&-c>C.edgex||!_&&c<C.edgex)&&(c=Math.abs(C.edgex))),s&&(g=_?o.left:o.right,x=t.length-w,y=m?g-15*x:g+15*x,(m&&y<l||!m&&l<y)&&(l=y)),r=l,s||(_?o.left=r:o.right=r);var O=_?-c-5:c+5,L=O+v.origin.x,M=l+v.origin.y;if(L>v._graphs.app.width||M<0||M>v._graphs.app.height)return;var Q="M"+C.centerx+","+C.centery;Q+="Q"+C.outx+","+C.outy+","+O+","+l;var T=new R({context:{lineType:"solid",path:Q,lineWidth:1,strokeStyle:C.fillStyle}}),D=C.labelText,E=document.createElement("div");switch(E.style.cssText=" ;position:absolute;left:-1000px;top:-1000px;color:"+C.fillStyle,E.innerHTML=D,v.domContainer.appendChild(E),u=E.offsetWidth,f=E.offsetHeight,h=_?-c:c,p=l,e){case 1:h+=5,p-=f/2;break;case 2:case 3:h-=u+5,p-=f/2;break;case 4:h+=5,p-=f/2;}E.style.left=h+v.origin.x+"px",E.style.top=p+v.origin.y+"px",v.textSp.addChild(T),v.textList.push({width:u,height:f,x:h+v.origin.x,y:p+v.origin.y,data:C,textTxt:D,textEle:E});}}}},{key:"_startWidgetLabel",value:function(){for(var e,t,n=this,i=n.data.list,s=0,o=0,a=[],r=[{indexs:[],count:0},{indexs:[],count:0},{indexs:[],count:0},{indexs:[],count:0}],l={right:{startQuadrant:4,endQuadrant:1,clockwise:!0,indexs:[]},left:{startQuadrant:3,endQuadrant:2,clockwise:!1,indexs:[]}},c=0;c<i.length;c++){var d=i[c].quadrant;r[d-1].indexs.push(c),r[d-1].count++;}1<r[0].count&&r[0].indexs.reverse(),1<r[2].count&&r[2].indexs.reverse(),r[0].count>r[3].count&&(l.right.startQuadrant=1,l.right.endQuadrant=4,l.right.clockwise=!1),r[1].count>r[2].count&&(l.left.startQuadrant=2,l.left.endQuadrant=3,l.left.clockwise=!0),l.right.indexs=r[l.right.startQuadrant-1].indexs.concat(r[l.right.endQuadrant-1].indexs),l.left.indexs=r[l.left.startQuadrant-1].indexs.concat(r[l.left.endQuadrant-1].indexs),l.right.indexs.length>n.textMaxCount&&((t=l.right.indexs.slice(0)).sort(function(e,t){return i[t].y-i[e].y}),e=t.slice(n.textMaxCount),i[e[0]].percentage,s=i[e[0]].y),l.left.indexs.length>n.textMaxCount&&((t=l.left.indexs.slice(0)).sort(function(e,t){return i[t].y-i[e].y}),e=t.slice(n.textMaxCount),i[e[0]].percentage,o=i[e[0]].y),a.push(l.right.startQuadrant),a.push(l.right.endQuadrant),a.push(l.left.startQuadrant),a.push(l.left.endQuadrant);var u={};for(c=0;c<a.length;c++){var f=1==c||3==c;n._widgetLabel(a[c],r[a[c]-1].indexs,o,s,f,u);}}},{key:"destroyLabel",value:function(){var t=this;this.textSp&&this.textSp.removeAllChildren(),a._.each(this.textList,function(e){t.domContainer.removeChild(e.textEle);}),this.textList=[];}},{key:"_showGrowLabel",value:function(){this.textSp&&this.textSp.context&&(this.textSp.context.globalAlpha=1,a._.each(this.textList,function(e){e.textEle.style.visibility="visible";}));}},{key:"_hideGrowLabel",value:function(){this.textSp&&this.textSp.context&&(this.textSp.context.globalAlpha=0,a._.each(this.textList,function(e){e.textEle.style.visibility="hidden";}));}}])&&o(d.prototype,u),x);function x(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,x),(n=r(this,l(x).call(this))).width=0,n.height=0,n.origin={x:0,y:0},n._graphs=e,n.domContainer=e.app.canvax.domView,n.data=t,n.sprite=null,n.textSp=null,n.sectorsSp=null,n.selectedSp=null,n.init(),n.sectors=[],n.textMaxCount=15,n.textList=[],n.completed=!1,n}e.default=g;});
	});

	unwrapExports(pie);

	var pie$1 = createCommonjsModule(function (module, exports) {
	!function(e,t){t(exports,pie,graphs,index_cjs);}(void 0,function(e,t,n,_){Object.defineProperty(e,"__esModule",{value:!0});var i=a(t);function a(e){return e&&e.__esModule?e:{default:e}}function l(e){return (l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e){return (r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i);}}function d(e,t,n){return t&&u(e.prototype,t),n&&u(e,n),e}function f(e,t){return (f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var c=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t);}(h,a(n).default),d(h,null,[{key:"defaultProps",value:function(){return {field:{detail:"字段配置",default:null},groupField:{detail:"分组字段",default:null,documentation:"groupField主要是给legend用的， 所有在legend中需要显示的分组数据，都用groupField"},sort:{detail:"排序，默认不排序，可以配置为asc,desc",default:null},startAngle:{detail:"起始角度",default:-90},allAngle:{detail:"全部角度",default:360},node:{detail:"单个节点（扇形）配置",propertys:{radius:{detail:"半径",default:null,documentation:"每个扇形单元的半径，也可以配置一个字段，就成了丁格尔玫瑰图"},innerRadius:{detail:"内径",default:0},outRadius:{detail:"外径",default:null},minRadius:{detail:"最小的半径厚度",default:10,documentation:"outRadius - innerRadius ， 也就是radius的最小值"},moveDis:{detail:"hover偏移量",default:15,documentation:"要预留moveDis位置来hover sector 的时候外扩"},fillStyle:{detail:"单个图形背景色",default:null},focus:{detail:"图形的hover设置",propertys:{enabled:{detail:"是否开启",default:!0}}},select:{detail:"图形的选中效果",propertys:{enabled:{detail:"是否开启",default:!0},radius:{detail:"选中效果图形的半径厚度",default:5},alpha:{detail:"选中效果图形的透明度",default:.7}}}}},label:{detail:"label",propertys:{field:{detail:"获取label的字段",default:null},enabled:{detail:"是否开启",default:!1},format:{detail:"label的格式化函数，支持html",default:null}}}}}}]),d(h,[{key:"init",value:function(){this.data=this._dataHandle();}},{key:"_computerProps",value:function(){var e=this.width,t=this.height;if(!this.node.outRadius){var n=Math.min(e,t)/2;this.label.enabled&&(n-=this.node.moveDis),this.node.outRadius=parseInt(n);}null!==this.node.radius&&_._.isNumber(this.node.radius)&&(this.node.radius=Math.max(this.node.radius,this.node.minRadius),this.node.innerRadius=this.node.outRadius-this.node.radius),this.node.outRadius-this.node.innerRadius<this.node.minRadius&&(this.node.innerRadius=this.node.outRadius-this.node.minRadius),this.node.innerRadius<0&&(this.node.innerRadius=0);}},{key:"draw",value:function(e){e=e||{},_._.extend(!0,this,e),this._computerProps(),this._pie=new i.default(this,this._trimGraphs(this.data)),this._pie.draw(e);var t=this;this.animation&&!e.resize?this._pie.grow(function(){t.fire("complete");}):this.fire("complete"),this.sprite.addChild(this._pie.sprite);}},{key:"show",value:function(e){this._setEnabled(e,!0);}},{key:"hide",value:function(e){this._setEnabled(e,!1);}},{key:"_setEnabled",value:function(t,n){_._.each(this.data,function(e){if(e.label===t)return e.enabled=n,!1}),this._pie.resetData(this._trimGraphs(this.data));}},{key:"_dataHandle",value:function(){for(var n=this,e=[],t=n.dataFrame,i=0,a=t.length;i<a;i++){var l=t.getRowDataAt(i),r={type:"pie",rowData:l,focused:!1,focusEnabled:n.node.focus.enabled,selected:!1,selectEnabled:n.node.select.enabled,selectedR:n.node.select.radius,selectedAlpha:n.node.select.alpha,enabled:!0,fillStyle:null,color:null,value:l[n.field],label:l[n.groupField||n.label.field||n.field],labelText:null,iNode:i},o=n._getColor(n.node.fillStyle,r);r.fillStyle=r.color=o,e.push(r);}return e.length&&n.sort&&(e.sort(function(e,t){return "asc"==n.sort?e.value-t.value:t.value-e.value}),_._.each(e,function(e,t){e.iNode=t;})),e}},{key:"_trimGraphs",value:function(e){var n=this,t=0;n.currentAngle=0+n.startAngle%360;var i=n.allAngle+n.startAngle%n.allAngle,a=0,l=0;if(e.length){for(var r=0;r<e.length;r++)if(e[r].enabled&&(t+=e[r].value,n.node.radius&&_._.isString(n.node.radius)&&n.node.radius in e[r].rowData)){var o=Number(e[r].rowData[n.node.radius]);a=Math.max(a,o),l=Math.min(l,o);}if(0<t)for(var u=0;u<e.length;u++){var s=e[u].value/t;e[u].enabled||(s=0);var d=+(100*s).toFixed(2),f=n.allAngle*s,c=n.currentAngle+f>i?i:n.currentAngle+f,h=Math.cos((n.currentAngle+f/2)/180*Math.PI),p=Math.sin((n.currentAngle+f/2)/180*Math.PI),v=n.currentAngle+f/2;h=h.toFixed(5),p=p.toFixed(5);var b=function(e){i<=e&&(e=i),e%=n.allAngle;var t=parseInt(e/90);if(0<=e)switch(t){case 0:return 1;case 1:return 2;case 2:return 3;case 3:case 4:return 4}else if(e<0)switch(t){case 0:return 4;case-1:return 3;case-2:return 2;case-3:case-4:return 1}}(v),y=n.node.outRadius;if(n.node.radius&&_._.isString(n.node.radius)&&n.node.radius in e[u].rowData){var g=Number(e[u].rowData[n.node.radius]);y=parseInt((n.node.outRadius-n.node.innerRadius)*((g-l)/(a-l))+n.node.innerRadius);}var m=n.node.moveDis;_._.extend(e[u],{outRadius:y,innerRadius:n.node.innerRadius,startAngle:n.currentAngle,endAngle:c,midAngle:v,moveDis:m,outOffsetx:.7*m*h,outOffsety:.7*m*p,centerx:y*h,centery:y*p,outx:(y+m)*h,outy:(y+m)*p,edgex:(y+m)*h,edgey:(y+m)*p,orginPercentage:s,percentage:d,quadrant:b,labelDirection:1==b||4==b?1:0,iNode:u}),e[u].labelText=n._getLabelText(e[u]),n.currentAngle+=f,n.currentAngle>i&&(n.currentAngle=i);}}return {list:e,total:t}}},{key:"_getColor",value:function(e,t){var n=t.iNode,i=e;return _._.isArray(e)&&(i=e[n]),_._.isFunction(e)&&(i=s.apply(this,[t])),i=i||this.app.getTheme(n)}},{key:"_getLabelText",value:function(e){var t;if(this.label.enabled)if(this.label.format)_._.isFunction(this.label.format)&&(t=this.label.format(e.label,e));else{var n=this.label.field||this.groupField;t=n?e.rowData[n]+"："+e.percentage+"%":e.percentage+"%";}return t}},{key:"getList",value:function(){return this.data}},{key:"getLegendData",value:function(){var t=[];return _._.each(this.data,function(e){t.push({name:e.label,color:e.fillStyle,enabled:e.enabled});}),t}},{key:"tipsPointerOf",value:function(){}},{key:"tipsPointerHideOf",value:function(){}},{key:"focusAt",value:function(e){var t=this._pie.data.list[e];this.node.focus.enabled&&this._pie.focusOf(t);}},{key:"unfocusAt",value:function(e){var t=this._pie.data.list[e];t.node.focus.enabled&&this._pie.unfocusOf(t);}},{key:"selectAt",value:function(e){var t=this._pie.data.list[e];this.node.select.enabled&&this._pie.selectOf(t);}},{key:"unselectAt",value:function(e){var t=this._pie.data.list[e];this.node.select.enabled&&this._pie.unselectOf(t);}}]),h);function h(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,h),(n=function(e,t){return !t||"object"!==l(t)&&"function"!=typeof t?o(e):t}(this,r(h).call(this,e,t))).type="pie",_._.extend(!0,o(n),(0, _.getDefaultProps)(h.defaultProps()),e),n.init(),n}_.global.registerComponent(c,"graphs","pie"),e.default=c;});
	});

	unwrapExports(pie$1);

	var radar = createCommonjsModule(function (module, exports) {
	!function(e,t){t(exports,index_cjs$1,graphs,index_cjs);}(void 0,function(e,t,n,c){Object.defineProperty(e,"__esModule",{value:!0});var i=l(t),o=l(n);function l(e){return e&&e.__esModule?e:{default:e}}function a(e){return (a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e){return (r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i);}}function s(e,t,n){return t&&u(e.prototype,t),n&&u(e,n),e}function d(e,t){return (d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=i.default.Shapes.Polygon,h=i.default.Shapes.Circle,y=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t);}(v,o.default),s(v,null,[{key:"defaultProps",value:function(){return {field:{detail:"字段配置",default:null},line:{detail:"线配置",propertys:{enabled:{detail:"是否显示",default:!0},lineWidth:{detail:"线宽",default:2},strokeStyle:{detail:"线颜色",default:null}}},area:{detail:"面积区域配置",propertys:{enabled:{detail:"是否显示",default:!0},fillStyle:{detail:"面积背景色",default:null},fillAlpha:{detail:"面积透明度",default:.1}}},node:{detail:"线上面的单数据节点图形配置",propertys:{enabled:{detail:"是否显示",default:!0},strokeStyle:{detail:"边框色",default:"#ffffff"},radius:{detail:"半径",default:4},lineWidth:{detail:"边框大小",default:1}}}}}}]),s(v,[{key:"init",value:function(){}},{key:"draw",value:function(e){e=e||{},c._.extend(!0,this,e),this.data=this._trimGraphs(),this._widget(),this.sprite.context.x=this.origin.x,this.sprite.context.y=this.origin.y,this.fire("complete");}},{key:"_widget",value:function(){var u=this,s=this.app.getComponent({name:"coord"}),d=0;c._.each(this.data,function(e,t){var n={},i=[];c._.each(e,function(e,t){i.push([e.point.x,e.point.y]);});var o=s.getFieldMapOf(t),l=u._getStyle(u.line.strokeStyle,d,o.color,o),a={pointList:i,cursor:"pointer"};u.line.enabled&&(a.lineWidth=u.line.lineWidth,a.strokeStyle=l),u.area.enabled&&(a.fillStyle=u._getStyle(u.area.fillStyle,d,o.color,o),a.fillAlpha=u._getStyle(u.area.fillAlpha,d,1,o));var r=new p({hoverClone:!1,context:a});if(n.area=r,u.sprite.addChild(r),r.__hoverFillAlpha=r.context.fillAlpha+.2,r.__fillAlpha=r.context.fillAlpha,r.on(c.event.types.get(),function(e){"mouseover"==e.type&&(this.context.fillAlpha=this.__hoverFillAlpha),"mouseout"==e.type&&(this.context.fillAlpha=this.__fillAlpha),u.app.fire(e.type,e);}),u.node.enabled){var f=[];c._.each(e,function(e,t){i.push([e.point.x,e.point.y]);var n=new h({context:{cursor:"pointer",x:e.point.x,y:e.point.y,r:u.node.radius,lineWidth:u.node.lineWidth,strokeStyle:u.node.strokeStyle,fillStyle:l}});u.sprite.addChild(n),n.iNode=t,n.nodeData=e,n._strokeStyle=l,n.on(c.event.types.get(),function(e){e.aAxisInd=this.iNode,e.eventInfo={trigger:u.node,nodes:[this.nodeData]},u.app.fire(e.type,e);}),f.push(n);}),n.nodes=f;}u.groups[t]=n,d++;});}},{key:"tipsPointerOf",value:function(e){var i=this;i.tipsPointerHideOf(e),e.eventInfo&&e.eventInfo.nodes&&c._.each(e.eventInfo.nodes,function(n){i.data[n.field]&&c._.each(i.data[n.field],function(e,t){n.iNode==t&&i.focusOf(e);});});}},{key:"tipsPointerHideOf",value:function(){var n=this;c._.each(n.data,function(e,t){c._.each(e,function(e){n.unfocusOf(e);});});}},{key:"focusOf",value:function(e){if(!e.focused){var t=this.groups[e.field].nodes[e.iNode];t.context.r+=1,t.context.fillStyle=this.node.strokeStyle,t.context.strokeStyle=t._strokeStyle,e.focused=!0;}}},{key:"unfocusOf",value:function(e){if(e.focused){var t=this.groups[e.field].nodes[e.iNode];t.context.r-=1,t.context.fillStyle=t._strokeStyle,t.context.strokeStyle=this.node.strokeStyle,e.focused=!1;}}},{key:"hide",value:function(e){var t=this.app.getComponent({name:"coord"});this.enabledField=t.filterEnabledFields(this.field);var n=this.groups[e];n&&(n.area.context.visible=!1,c._.each(n.nodes,function(e){e.context.visible=!1;}));}},{key:"show",value:function(e){var t=this.app.getComponent({name:"coord"});this.enabledField=t.filterEnabledFields(this.field);var n=this.groups[e];n&&(n.area.context.visible=!0,c._.each(n.nodes,function(e){e.context.visible=!0;}));}},{key:"_trimGraphs",value:function(){var f=this,u=this.app.getComponent({name:"coord"});this.enabledField=u.filterEnabledFields(this.field);var e={};return c._.each(this.enabledField,function(o){var l=f.dataFrame.getFieldData(o),a=u.getFieldMapOf(o),r=[];c._.each(u.aAxis.angleList,function(e,t){var n=Math.PI*e/180,i=u.getPointInRadianOfR(n,u.getROfNum(l[t]));r.push({type:"radar",field:o,iNode:t,rowData:f.dataFrame.getRowDataAt(t),focused:!1,value:l[t],point:i,color:a.color});}),e[o]=r;}),e}},{key:"_getStyle",value:function(e,t,n,i){var o=n;return (c._.isString(e)||c._.isNumber(e))&&(o=e),c._.isArray(e)&&(o=e[t]),c._.isFunction(e)&&(o=e(t,i)),null==o&&(o=n),o}},{key:"getNodesAt",value:function(i){var o=this.data,l=[];return c._.each(this.enabledField,function(e,t){if(c._.isArray(e))c._.each(e,function(e,t){var n=o[e][i];n&&l.push(n);});else{var n=o[e][i];n&&l.push(n);}}),l}}]),v);function v(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,v),(n=function(e,t){return !t||"object"!==a(t)&&"function"!=typeof t?f(e):t}(this,r(v).call(this,e,t))).type="radar",n.enabledField=null,n.groups={},c._.extend(!0,f(n),(0, c.getDefaultProps)(v.defaultProps()),e),n.init(),n}c.global.registerComponent(y,"graphs","radar"),e.default=y;});
	});

	unwrapExports(radar);

	var dispatch = createCommonjsModule(function (module, exports) {
	!function(n,e){e(exports);}(0,function(n){Object.defineProperty(n,"__esModule",{value:!0});var o={value:function(){}};function e(){for(var n,e=0,r=arguments.length,t={};e<r;++e){if(!(n=arguments[e]+"")||n in t)throw new Error("illegal type: "+n);t[n]=[];}return new i(t)}function i(n){this._=n;}function l(n,e){for(var r,t=0,i=n.length;t<i;++t)if((r=n[t]).name===e)return r.value}function u(n,e,r){for(var t=0,i=n.length;t<i;++t)if(n[t].name===e){n[t]=o,n=n.slice(0,t).concat(n.slice(t+1));break}return null!=r&&n.push({name:e,value:r}),n}i.prototype=e.prototype={constructor:i,on:function(n,e){var r,t=this._,i=function(n,t){return n.trim().split(/^|\s+/).map(function(n){var e="",r=n.indexOf(".");if(0<=r&&(e=n.slice(r+1),n=n.slice(0,r)),n&&!t.hasOwnProperty(n))throw new Error("unknown type: "+n);return {type:n,name:e}})}(n+"",t),o=-1,f=i.length;if(!(arguments.length<2)){if(null!=e&&"function"!=typeof e)throw new Error("invalid callback: "+e);for(;++o<f;)if(r=(n=i[o]).type)t[r]=u(t[r],n.name,e);else if(null==e)for(r in t)t[r]=u(t[r],n.name,null);return this}for(;++o<f;)if((r=(n=i[o]).type)&&(r=l(t[r],n.name)))return r},copy:function(){var n={},e=this._;for(var r in e)n[r]=e[r].slice();return new i(n)},call:function(n,e){if(0<(r=arguments.length-2))for(var r,t,i=new Array(r),o=0;o<r;++o)i[o]=arguments[o+2];if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(o=0,r=(t=this._[n]).length;o<r;++o)t[o].value.apply(e,i);},apply:function(n,e,r){if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(var t=this._[n],i=0,o=t.length;i<o;++i)t[i].value.apply(e,r);}},n.default=e;});
	});

	unwrapExports(dispatch);

	var cloud = createCommonjsModule(function (module, exports) {
	!function(t,n){n(exports,dispatch);}(void 0,function(t,n){Object.defineProperty(t,"__esModule",{value:!0});var e,r=(e=n)&&e.__esModule?e:{default:e};var q=Math.PI/180,D=64,S=2048;function a(t){return t.text}function i(){return "serif"}function o(){return "normal"}function u(t){return Math.sqrt(t.value)}function f(){return 30*(~~(6*Math.random())-3)}function b(){return 1}function z(t,n,e,r){if(!n.sprite){var a=t.context,i=t.ratio;a.clearRect(0,0,(D<<5)/i,S/i);var o=0,u=0,f=0,l=e.length;for(--r;++r<l;){n=e[r],a.save(),a.font=n.style+" "+n.weight+" "+~~((n.size+1)/i)+"px "+n.font;var c=a.measureText(n.text+"m").width*i,s=n.size<<1;if(n.rotate){var h=Math.sin(n.rotate*q),x=Math.cos(n.rotate*q),y=c*x,d=c*h,v=s*x,g=s*h;c=Math.max(Math.abs(y+g),Math.abs(y-g))+31>>5<<5,s=~~Math.max(Math.abs(d+v),Math.abs(d-v));}else c=c+31>>5<<5;if(f<s&&(f=s),D<<5<=o+c&&(u+=f,f=o=0),S<=u+s)break;a.translate((o+(c>>1))/i,(u+(s>>1))/i),n.rotate&&a.rotate(n.rotate*q),a.fillText(n.text,0,0),n.padding&&(a.lineWidth=2*n.padding,a.strokeText(n.text,0,0)),a.restore(),n.width=c,n.height=s,n.xoff=o,n.yoff=u,n.x1=c>>1,n.y1=s>>1,n.x0=-n.x1,n.y0=-n.y1,n.hasText=!0,o+=c;}for(var p=a.getImageData(0,0,(D<<5)/i,S/i).data,M=[];0<=--r;)if((n=e[r]).hasText){for(var m=(c=n.width)>>5,w=(s=n.y1-n.y0,0);w<s*m;w++)M[w]=0;if(null==(o=n.xoff))return;u=n.yoff;for(var b=0,z=-1,I=0;I<s;I++){for(w=0;w<c;w++){var k=m*I+(w>>5),T=p[(u+I)*(D<<5)+(o+w)<<2]?1<<31-w%32:0;M[k]|=T,b|=T;}b?z=I:(n.y0++,s--,I--,u++);}n.y1=n.y0+z,n.sprite=M.slice(0,(n.y1-n.y0)*m);}}}function _(t,n,e){e>>=5;for(var r,a=t.sprite,i=t.width>>5,o=t.x-(i<<4),u=127&o,f=32-u,l=t.y1-t.y0,c=(t.y+t.y0)*e+(o>>5),s=0;s<l;s++){for(var h=r=0;h<=i;h++)if((r<<f|(h<i?(r=a[s*i+h])>>>u:0))&n[c+h])return !0;c+=e;}return !1}function I(t,n){var e=t[0],r=t[1];n.x+n.x0<e.x&&(e.x=n.x+n.x0),n.y+n.y0<e.y&&(e.y=n.y+n.y0),n.x+n.x1>r.x&&(r.x=n.x+n.x1),n.y+n.y1>r.y&&(r.y=n.y+n.y1);}function C(t){var n=t[0]/t[1];return function(t){return [n*(t*=.1)*Math.cos(t),t*Math.sin(t)]}}function P(){return document.createElement("canvas")}function W(t){return "function"==typeof t?t:function(){return t}}var j={archimedean:C,rectangular:function(t){var e=4*t[0]/t[1],r=0,a=0;return function(t){var n=t<0?-1:1;switch(Math.sqrt(1+4*n*t)-n&3){case 0:r+=e;break;case 1:a+=4;break;case 2:r-=e;break;default:a-=4;}return [r,a]}}};t.default=function(){var k=[256,256],l=a,c=i,s=u,h=o,x=o,y=f,d=b,T=C,n=[],v=1/0,g=(0, r.default)("word","end"),p=null,q=Math.random,M={},m=P;function w(t,n,e){k[0],k[1];for(var r,a,i,o,u,f=n.x,l=n.y,c=Math.sqrt(k[0]*k[0]+k[1]*k[1]),s=T(k),h=q()<.5?1:-1,x=-h;(r=s(x+=h))&&(a=~~r[0],i=~~r[1],!(Math.min(Math.abs(a),Math.abs(i))>=c));)if(n.x=f+a,n.y=l+i,!(n.x+n.x0<0||n.y+n.y0<0||n.x+n.x1>k[0]||n.y+n.y1>k[1]||e&&_(n,t,k[0])||e&&(u=e,!((o=n).x+o.x1>u[0].x&&o.x+o.x0<u[1].x&&o.y+o.y1>u[0].y&&o.y+o.y0<u[1].y)))){for(var y,d=n.sprite,v=n.width>>5,g=k[0]>>5,p=n.x-(v<<4),M=127&p,m=32-M,w=n.y1-n.y0,b=(n.y+n.y0)*g+(p>>5),z=0;z<w;z++){for(var I=y=0;I<=v;I++)t[b+I]|=y<<m|(I<v?(y=d[z*v+I])>>>M:0);b+=g;}return delete n.sprite,!0}return !1}return M.canvas=function(t){return arguments.length?(m=W(t),M):m},M.start=function(){var e=function(t){t.width=t.height=1;var n=Math.sqrt(t.getContext("2d").getImageData(0,0,1,1).data.length>>2);t.width=(D<<5)/n,t.height=S/n;var e=t.getContext("2d");return e.fillStyle=e.strokeStyle="red",e.textAlign="center",{context:e,ratio:n}}(m()),r=function(t){var n=[],e=-1;for(;++e<t;)n[e]=0;return n}((k[0]>>5)*k[1]),a=null,i=n.length,o=-1,u=[],f=n.map(function(t,n){return t.text=l.call(this,t,n),t.font=c.call(this,t,n),t.style=h.call(this,t,n),t.weight=x.call(this,t,n),t.rotate=y.call(this,t,n),t.size=~~s.call(this,t,n),t.padding=d.call(this,t,n),t}).sort(function(t,n){return n.size-t.size});return p&&clearInterval(p),p=setInterval(t,0),t(),M;function t(){for(var t=Date.now();Date.now()-t<v&&++o<i&&p;){var n=f[o];n.x=k[0]*(q()+.5)>>1,n.y=k[1]*(q()+.5)>>1,z(e,n,f,o),n.hasText&&w(r,n,a)&&(u.push(n),g.call("word",M,n),a?I(a,n):a=[{x:n.x+n.x0,y:n.y+n.y0},{x:n.x+n.x1,y:n.y+n.y1}],n.x-=k[0]>>1,n.y-=k[1]>>1);}i<=o&&(M.stop(),g.call("end",M,u,a));}},M.stop=function(){return p&&(clearInterval(p),p=null),M},M.timeInterval=function(t){return arguments.length?(v=null==t?1/0:t,M):v},M.words=function(t){return arguments.length?(n=t,M):n},M.size=function(t){return arguments.length?(k=[+t[0],+t[1]],M):k},M.font=function(t){return arguments.length?(c=W(t),M):c},M.fontStyle=function(t){return arguments.length?(h=W(t),M):h},M.fontWeight=function(t){return arguments.length?(x=W(t),M):x},M.rotate=function(t){return arguments.length?(y=W(t),M):y},M.text=function(t){return arguments.length?(l=W(t),M):l},M.spiral=function(t){return arguments.length?(T=j[t]||t,M):T},M.fontSize=function(t){return arguments.length?(s=W(t),M):s},M.padding=function(t){return arguments.length?(d=W(t),M):d},M.random=function(t){return arguments.length?(q=t,M):q},M.on=function(){var t=g.on.apply(g,arguments);return t===g?M:t},M};});
	});

	unwrapExports(cloud);

	var cloud$1 = createCommonjsModule(function (module, exports) {
	!function(e,t){t(exports,index_cjs$1,graphs,cloud,index_cjs);}(void 0,function(e,t,n,o,i){Object.defineProperty(e,"__esModule",{value:!0});var a=l(t),r=l(n),d=l(o);function l(e){return e&&e.__esModule?e:{default:e}}function u(e){return (u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e){return (f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o);}}function h(e,t,n){return t&&c(e.prototype,t),n&&c(e,n),e}function p(e,t){return (p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y=a.default.Display.Text,m=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t);}(v,r.default),h(v,null,[{key:"defaultProps",value:function(){return {field:{detail:"字段配置",default:null},node:{detail:"节点文字配置",propertys:{fontFamily:{detail:"字体设置",default:"Impact"},fontColor:{detail:"文字颜色",default:"#999"},fontSize:{detail:"文本字体大小",default:function(){return this.minFontSize+Math.random()*this.maxFontSize}},maxFontSize:{detail:"文本最大字体大小",default:30},minFontSize:{detail:"文本最小字体大小",default:16},fontWeight:{detail:"fontWeight",default:"normal"},format:{detail:"文本格式化处理函数",default:null},padding:{detail:"文本间距",default:10},rotation:{detail:"文本旋转角度",default:function(){return 30*(~~(6*Math.random())-3)}},strokeStyle:{detail:"文本描边颜色",default:null},select:{detail:"文本选中效果",propertys:{enabled:{detail:"是否开启选中",default:!0},lineWidth:{detail:"选中后的文本描边宽",default:2},strokeStyle:{detail:"选中后的文本描边色",default:"#666"}}},focus:{detail:"文本hover效果",propertys:{enabled:{detail:"是否开启hover效果",default:!0}}}}}}}}]),h(v,[{key:"init",value:function(){}},{key:"draw",value:function(e){e=e||{},i._.extend(!0,this,e),this._drawGraphs(),this.sprite.context.x=this.width/2,this.sprite.context.y=this.height/2,this.fire("complete");}},{key:"getDaraFrameIndOfVal",value:function(e){var t=this,n=this.dataFrame,o=i._.find(n.data,function(e){return e.field==t.field});return i._.indexOf(o.data,e)}},{key:"_getFontSize",value:function(e,t){var n=this.node.minFontSize;return i._.isFunction(this.node.fontSize)&&(n=this.node.fontSize(e)),i._.isString(this.node.fontSize)&&this.node.fontSize in e&&(t=Number(e[this.node.fontSize]),isNaN(t)||(n=this.node.minFontSize+(this.node.maxFontSize-this.node.minFontSize)/(this.node._maxFontSizeVal-this.node._minFontSizeVal)*(t-this.node._minFontSizeVal))),i._.isNumber(this.node.fontSize)&&(n=this.node.fontSize),n}},{key:"_getRotate",value:function(e,t){var n=this.node.rotation;return i._.isFunction(this.node.rotation)&&(n=this.node.rotation(e,t)||0),n}},{key:"_getFontColor",value:function(e){var t;return i._.isString(this.node.fontColor)&&(t=this.node.fontColor),i._.isFunction(this.node.fontColor)&&(t=this.node.fontColor(e)),null==t&&(t="#ccc"),t}},{key:"_drawGraphs",value:function(){var a=this;i._.isString(this.node.fontSize)&&i._.each(a.dataFrame.getFieldData(this.node.fontSize),function(e){a.node._maxFontSizeVal=Math.max(a.node._maxFontSizeVal,e),a.node._minFontSizeVal=Math.min(a.node._minFontSizeVal,e);}),(0, d.default)().size([a.width,a.height]).words(a.dataFrame.getFieldData(a.field).map(function(e,t){var n=a.app.dataFrame.getRowDataAt(a.getDaraFrameIndOfVal(e)),o={type:"cloud",rowData:n,field:a.field,value:e,text:null,size:a._getFontSize(n,e),iNode:t,color:null};o.fontColor=a._getFontColor(o);var i=e;return a.node.format&&(i=a.node.format(e,o)),o.text=i||e,o})).padding(a.node.padding).rotate(function(e,t){return a._getRotate(e,t)}).font(a.node.fontFamily).fontSize(function(e){return e.size}).on("end",function(o,e){a.data=o,a.sprite.removeAllChildren(),i._.each(o,function(e,t){e.iNode=t,e.dataLen=o.length,e.focused=!1,e.selected=!1;var n=new y(e.text,{context:{x:e.x,y:e.y,fontSize:e.size,fontFamily:e.font,rotation:e.rotate,textBaseline:"middle",textAlign:"center",cursor:"pointer",fontWeight:a.node.fontWeight,fillStyle:e.fontColor}});a.sprite.addChild(n),a.node.focus.enabled&&n.hover(function(e){a.focusAt(this.nodeData.iNode);},function(e){this.nodeData.selected||a.unfocusAt(this.nodeData.iNode);}),((n.nodeData=e)._node=n).on(i.event.types.get(),function(e){e.eventInfo={trigger:a.node,title:null,nodes:[this.nodeData]},this.nodeData.text&&(e.eventInfo.title=this.nodeData.text),a.app.fire(e.type,e);});});}).start();}},{key:"focusAt",value:function(e){var t=this.data[e];this.node.focus.enabled&&!t.focused&&(t._node.context.fontSize+=3,t.focused=!0);}},{key:"unfocusAt",value:function(e){var t=this.data[e];this.node.focus.enabled&&t.focused&&(t._node.context.fontSize-=3,t.focused=!1);}},{key:"selectAt",value:function(e){var t=this.data[e];if(this.node.select.enabled&&!t.selected){var n=t._node.context;n.lineWidth=this.node.select.lineWidth,n.strokeAlpha=this.node.select.strokeAlpha,n.strokeStyle=this.node.select.strokeStyle,t.selected=!0;}}},{key:"unselectAt",value:function(e){var t=this.data[e];this.node.select.enabled&&t.selected&&(t._node.context.strokeStyle=this.node.strokeStyle,t.selected=!1);}}]),v);function v(e,t){var n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,v),(n=function(e,t){return !t||"object"!==u(t)&&"function"!=typeof t?s(e):t}(this,f(v).call(this,e,t))).type="cloud";var o=s(n);return n.node={_maxFontSizeVal:0,_minFontSizeVal:null},i._.extend(!0,s(n),(0, i.getDefaultProps)(v.defaultProps()),e),n.node.fontColor=function(e){return o.app.getTheme(e.iNode)},n.init(),n}i.global.registerComponent(m,"graphs","cloud"),e.default=m;});
	});

	unwrapExports(cloud$1);

	var group$1 = createCommonjsModule(function (module, exports) {
	!function(t,e){e(exports,index_cjs$1,index_cjs);}(void 0,function(t,e,D){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,S=(i=e)&&i.__esModule?i:{default:i};function a(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a);}}function n(t,e,i){return e&&a(t.prototype,e),i&&a(t,i),t}var E=S.default.Shapes.Circle,l=(n(s,null,[{key:"defaultProps",value:function(){return {sort:{detail:"排序",default:"desc"},sortField:{detail:"用来排序的字段",default:"null"},node:{detail:"单个数据节点图形配置",propertys:{maxRadius:{detail:"最大半径",default:30},minRadius:{detail:"最小半径",default:5},radius:{detail:"半径",default:15,documentation:'也可以是个function,也可以配置{field:"pv"}来设置字段， 自动计算r'},lineWidth:{detail:"描边线宽",default:1},strokeStyle:{detail:"描边颜色",default:"#ffffff"},fillStyle:{detail:"图形填充色",default:"#f2fbfb"},strokeAlpha:{detail:"边框透明度",default:.6},focus:{detail:"hover态设置",propertys:{enabled:{detail:"是否开启",default:!0},strokeAlpha:{detail:"hover时候边框透明度",default:.7},lineWidth:{detail:"hover时候边框大小",default:2},strokeStyle:{detail:"hover时候边框颜色",default:"#fff"}}},select:{detail:"选中态设置",propertys:{enabled:{detail:"是否开启",default:!1},strokeAlpha:{detail:"选中时候边框透明度",default:1},lineWidth:{detail:"选中时候边框大小",default:2},strokeStyle:{detail:"选中时候边框颜色",default:"#fff"},triggerEventType:{detail:"触发事件",default:"click"}}}}},label:{detail:"文本设置",propertys:{enabled:{detail:"是否开启",default:!0},fontColor:{detail:"文本颜色",default:"#666666"},fontSize:{detail:"文本字体大小",default:13},textAlign:{detail:"水平对齐方式",default:"center"},verticalAlign:{detail:"基线对齐方式",default:"middle"},position:{detail:"文本布局位置",default:"center"},offsetX:{detail:"x方向偏移量",default:0},offsetY:{detail:"y方向偏移量",default:0}}}}}}]),n(s,[{key:"init",value:function(){var t=this.app.getComponent({name:"coord"});this.sprite=new S.default.Display.Sprite({id:"group_"+this.iGroup,context:{x:t.origin.x,y:t.origin.y}}),this._trimGraphs(),this.draw();}},{key:"_trimGraphs",value:function(){var a=this,t=this.app.getComponent({name:"coord"}).getMaxDisToViewOfOrigin();(t-this.rRange.to)/(2*this.pit.radius)<this.groupLen-1-this.iGroup&&(this.rRange.to=t-(this.groupLen-1-this.iGroup)*this.pit.radius*2),this.rRange.to-this.rRange.start<2*this.pit.radius&&(this.rRange.to=this.rRange.start+2*this.pit.radius),this.maxRingNum||(this.maxRingNum=parseInt((this.rRange.to-this.rRange.start)/(2*this.pit.radius),10),this.ringNum=this.maxRingNum),this.rRange.to=this.rRange.start+this.ringNum*this.pit.radius*2;for(var e=[],i=this.dataFrame.length,n=0;n<i;n++){var l=this.dataFrame.getRowDataAt(n),s={type:"planet",groupLen:this.groupLen,iGroup:a.iGroup,iNode:n,nodeElement:null,labelElement:null,rowData:l,iRing:null,iPlanet:null,fillStyle:null,color:null,strokeStyle:null,pit:null,ringInd:-1,field:a.field,label:l[a.field],focused:!1,selected:!!~D._.indexOf(this.selectInds,l.__index__)};e.push(s);}a.sortField&&(e=e.sort(function(t,e){var i=a.sortField;return "desc"==a.sort?e.rowData[i]-t.rowData[i]:t.rowData[i]-e.rowData[i]}),D._.each(e,function(t,e){t.iNode=e;})),this._rings=this["_setRings_"+this.layoutType+"Range"](e),this.planets=e;}},{key:"_setRings_radianRange",value:function(i){for(var r=this,a=[],t=this.app.getComponent({name:"coord"}),e=0,n=this.ringNum;e<n;e++){var l=e*this.pit.radius*2+this.pit.radius+this.rRange.start;r._graphs.center.enabled||(l=e*this.pit.radius*2+this.rRange.start);var s=t.getRadiansAtR(l,r.width,r.height);Math.atan(this.pit.radius/l),a.push({arcs:s,pits:[],planets:[],radius:l,max:0});}var d=0;D._.each(a,function(l,t){var s=2*Math.asin(r.pit.radius/l.radius);0==l.radius&&(s=2*Math.PI);var o=0;D._.each(l.arcs,function(t){var e=r._getDiffRadian(t[0].radian,t[1].radian);if(s<=e){var i=parseInt(e/s,10);o+=i;for(var a=0;a<i;a++){var n={hasRadish:!1,start:(t[0].radian+s*a+2*Math.PI)%(2*Math.PI)};n.middle=(n.start+s/2+2*Math.PI)%(2*Math.PI),n.to=(n.start+s+2*Math.PI)%(2*Math.PI),l.pits.push(n);}}}),l.max=o,d+=o,l.pits=D._.shuffle(l.pits);});var o=0;return D._.each(a,function(n,t){if(o>=i.length)return !1;var e=Math.ceil(n.max/d*i.length);e=Math.min(n.max,e),n.planets=i.slice(o,o+e),t==a.length-1&&(n.planets=i.slice(o)),o+=e,D._.each(n.planets,function(t,e){if(!(e>=n.pits.length)){var i=D._.filter(n.pits,function(t){return !t.hasRadish}),a=i[parseInt(Math.random()*i.length)];a.hasRadish=!0,t.pit=a;}});}),a}},{key:"_getDiffRadian",value:function(t,e){var i=e-t;return e<t&&(i=(e+2*Math.PI-t)%(2*Math.PI)),i}},{key:"_setRings_indexRange",value:function(){}},{key:"_setRings_valRange",value:function(){}},{key:"draw",value:function(){var A=this,I=this.app.getComponent({name:"coord"});D._.each(this._rings,function(R,k){var P={rotation:0};1==R.arcs.length&&0==R.arcs[0][0].radian&&R.arcs[0][1].radian==2*Math.PI&&(P.rotation=parseInt(360*Math.random()));var M=new S.default.Display.Sprite({context:P});D._.each(R.planets,function(t,e){if(t.pit){var i=I.getPointInRadianOfR(t.pit.middle,R.radius),a=A._getRProp(A.node.radius,k,e,t),n=A.node.maxRadius-a,l=parseInt(Math.random()*n),s=parseInt(360*Math.random())*Math.PI/180;0!=l&&(i.x+=Math.sin(s)*l,i.y+=Math.cos(s)*l);var o=A.node;t.selected&&(o=A.node.select);var r=A._getProp(A.node.fillStyle,t),d=A._getProp(o.strokeStyle,t),h=A._getProp(o.strokeAlpha,t),u=A._getProp(o.lineWidth,t),f={x:i.x,y:i.y,r:a,fillStyle:r,lineWidth:u,strokeStyle:d,strokeAlpha:h,cursor:"pointer"};t.color=t.fillStyle=r,t.strokeStyle=d,t.iRing=k,t.iPlanet=e;var p=new E({hoverClone:!1,context:f});if(p.on(D.event.types.get(),function(t){t.eventInfo={title:null,trigger:A.node,nodes:[this.nodeData]},this.nodeData.label&&(t.eventInfo.title=this.nodeData.label),A.node.focus.enabled&&("mouseover"==t.type&&A.focusAt(this.nodeData),"mouseout"==t.type&&A.unfocusAt(this.nodeData)),A.node.select.enabled&&t.type==A.node.select.triggerEventType&&(this.nodeData.selected?A.unselectAt(this.nodeData):A.selectAt(this.nodeData)),A.app.fire(t.type,t);}),((p.nodeData=t).nodeElement=p).ringInd=k,p.planetIndInRing=e,M.addChild(p),A._graphs.animation){var c=p.context.r,g=p.context.globalAlpha;p.context.r=1,p.context.globalAlpha=.1,p.animate({r:c,globalAlpha:g},{delay:Math.round(1500*Math.random()),onComplete:function(){p.labelElement&&(p.labelElement.context.visible=!0);var t=p.clone();M.addChildAt(t,0),t.animate({r:c+10,globalAlpha:0},{onComplete:function(){t.destroy();}});}});}var _={x:i.x,y:i.y,fontSize:A.label.fontSize,textAlign:A.label.textAlign,textBaseline:A.label.verticalAlign,fillStyle:A.label.fontColor,rotation:-P.rotation,rotateOrigin:{x:0,y:0}},m=new S.default.Display.Text(t.label,{context:_}),v=m.getTextWidth(),y=m.getTextHeight();if(2*a<v&&(_.fontSize=A.label.fontSize-3),D._.isFunction(A.label.position)){var x=A.label.position({node:p,circleR:a,circleCenter:{x:i.x,y:i.y},textWidth:v,textHeight:y});_.rotation=-P.rotation,_.rotateOrigin={x:-(x.x-_.x),y:-(x.y-_.y)},_.x=x.x,_.y=x.y;}"auto"==A.label.position&&2*a<v&&b(),"bottom"==A.label.position&&b(),_.x+=A.label.offsetX,_.y+=A.label.offsetY,m=new S.default.Display.Text(t.label,{context:_}),((p.labelElement=m).nodeData=t).labelElement=m,A._graphs.animation&&(m.context.visible=!1),M.addChild(m);}function b(){_.y=i.y+a+3,_.rotation=-P.rotation,_.rotateOrigin={x:0,y:-(a+.7*y)};}}),A.sprite.addChild(M);});}},{key:"_getRProp",value:function(e,t,i,a){var n=this;if(D._.isString(e)&&-1<D._.indexOf(n.dataFrame.fields,e)){null==this.__rValMax&&null==this.__rValMax&&(this.__rValMax=0,this.__rValMin=0,D._.each(n.planets,function(t){n.__rValMax=Math.max(n.__rValMax,t.rowData[e]),n.__rValMin=Math.min(n.__rValMin,t.rowData[e]);}));var l=a.rowData[e];return n.node.minRadius+(l-this.__rValMin)/(this.__rValMax-this.__rValMin)*(n.node.maxRadius-n.node.minRadius)}return n._getProp(e,a)}},{key:"_getProp",value:function(t,e){var i=this.iGroup;return D._.isFunction(t)?t.apply(this,[e,i]):t}},{key:"getPlanetAt",value:function(e){var i=e;return D._.isNumber(e)&&D._.each(this.planets,function(t){if(t.rowData.__index__==e)return i=t,!1}),i}},{key:"selectAt",value:function(t){if(this.node.select.enabled){var e=this.getPlanetAt(t);e.selected=!0,e.nodeElement&&(e.nodeElement.context.lineWidth=this._getProp(this.node.select.lineWidth,e),e.nodeElement.context.strokeStyle=this._getProp(this.node.select.strokeStyle,e),e.nodeElement.context.strokeAlpha=this._getProp(this.node.select.strokeAlpha,e));for(var i=0;i<this.selectInds.length;i++)if(t===this.selectInds[i]){this.selectInds.splice(i--,1);break}}}},{key:"unselectAt",value:function(t){if(this.node.select.enabled){var e=this.getPlanetAt(t);e.selected=!1,e.nodeElement&&(e.nodeElement.context.lineWidth=this._getProp(this.node.lineWidth,e),e.nodeElement.context.strokeAlpha=this._getProp(this.node.strokeAlpha,e)),this.selectInds.push(t);}}},{key:"getSelectedNodes",value:function(){return D._.filter(this.planets,function(t){return t.selected})}},{key:"focusAt",value:function(t){if(this.node.focus.enabled){var e=this.getPlanetAt(t);e.selected||(e.focused=!0,e.nodeElement&&(e.nodeElement.context.lineWidth=this._getProp(this.node.focus.lineWidth,e),e.nodeElement.context.strokeStyle=this._getProp(this.node.focus.strokeStyle,e),e.nodeElement.context.strokeAlpha=this._getProp(this.node.focus.strokeAlpha,e)));}}},{key:"unfocusAt",value:function(t){if(this.node.focus.enabled){var e=this.getPlanetAt(t);e.selected||(e.focused=!1,e.nodeElement&&(e.nodeElement.context.lineWidth=this._getProp(this.node.lineWidth,e),e.nodeElement.context.strokeAlpha=this._getProp(this.node.strokeAlpha,e)));}}}]),s);function s(t,e,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),this._opt=t,this.dataFrame=e,this._graphs=i,this.app=i.app,this.field=null,this.iGroup=0,this.groupLen=1,this.rRange={start:0,to:0},this.width=0,this.height=0,this.selectInds=[],this.layoutType="radian",this.pit={radius:30},this.planets=[],this.maxRingNum=0,this.ringNum=0,D._.extend(!0,this,(0, D.getDefaultProps)(s.defaultProps()),t),this.node.maxRadius>this.pit.radius&&(this.pit.radius=this.node.maxRadius),this.init();}t.default=l;});
	});

	unwrapExports(group$1);

	var planet = createCommonjsModule(function (module, exports) {
	!function(e,t){t(exports,index_cjs$1,graphs,group$1,index_cjs);}(void 0,function(e,t,n,i,s){Object.defineProperty(e,"__esModule",{value:!0});var d=r(t),a=r(n),c=r(i);function r(e){return e&&e.__esModule?e:{default:e}}function o(e){return (o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e){return (l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i);}}function f(e,t,n){return t&&p(e.prototype,t),n&&p(e,n),e}function h(e,t){return (h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var g=d.default.Display.Text,_=d.default.Shapes.Circle,y=d.default.Shapes.Line,x=d.default.Shapes.Rect,v=d.default.Shapes.Sector,S=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t);}(m,a.default),f(m,null,[{key:"defaultProps",value:function(){return {field:{detail:"字段设置",default:null},center:{detail:"中心点设置",propertys:{enabled:{detail:"是否显示中心",default:!0},text:{detail:"中心区域文本",default:"center"},radius:{detail:"中心圆半径",default:30},fillStyle:{detail:"中心背景色",default:"#70629e"},fontSize:{detail:"中心字体大小",default:15},fontColor:{detail:"中心字体颜色",default:"#ffffff"},margin:{detail:"中区区域和外围可绘图区域距离",default:20},cursor:{detail:"中心节点的鼠标手势",default:"default"}}},selectInds:{detail:"选中的数据索引",default:[]},grid:{detail:"星系图自己的grid",propertys:{rings:{detail:"环配置",propertys:{fillStyle:{detail:"背景色",default:null},strokeStyle:{detail:"环线色",default:null},lineWidth:{detail:"环线宽",default:1},count:{detail:"分几环",default:3}}},rays:{detail:"射线配置",propertys:{count:{detail:"射线数量",default:0},globalAlpha:{detail:"线透明度",default:.4},strokeStyle:{detail:"线色",default:"#10519D"},lineWidth:{detail:"线宽",default:1}}}}},bewrite:{detail:"planet的趋势描述",propertys:{enabled:{detail:"是否开启趋势描述",default:!1},text:{detail:"描述文本",default:null},fontColor:{detail:"fontColor",default:"#999"},fontSize:{detail:"fontSize",default:12}}},scan:{detail:"扫描效果",propertys:{enabled:{detail:"是否开启扫描效果",default:!1},fillStyle:{detail:"扫描效果颜色",default:null},alpha:{detail:"起始透明度",default:.6},angle:{detail:"扫描效果的覆盖角度",default:90},r:{detail:"扫描效果覆盖的半径",default:null},repeat:{detail:"扫描次数",default:3}}},_props:[c.default]}}}]),f(m,[{key:"init",value:function(){this.gridSp=new d.default.Display.Sprite({id:"gridSp"}),this.groupSp=new d.default.Display.Sprite({id:"groupSp"}),this.scanSp=new d.default.Display.Sprite({id:"scanSp"}),this.centerSp=new d.default.Display.Sprite({id:"centerSp"}),this.sprite.addChild(this.gridSp),this.sprite.addChild(this.groupSp),this.sprite.addChild(this.scanSp),this.sprite.addChild(this.centerSp);}},{key:"draw",value:function(e){e=e||{},s._.extend(!0,this,e),this._dataGroupHandle(),this._drawGroups(),this._drawBack(),this._drawBewrite(),this._drawCenter(),this._drawScan(),this.fire("complete");}},{key:"_getMaxR",value:function(){var e;try{e=this.graphs.group.circle.maxRadius;}catch(e){}return null==e&&(e=30),e}},{key:"_drawGroups",value:function(){var a=this,r=this.center.radius+this.center.margin,o=a.app.getComponent({name:"coord"}).getMaxDisToViewOfOrigin()-a.center.radius-a.center.margin,l=this._getMaxR();s._.each(this.groupDataFrames,function(e,t){var n=r+o*(e.length/a.dataFrame.length),i=new c.default(s._.extend(!0,{iGroup:t,groupLen:a.groupDataFrames.length,rRange:{start:r,to:n},width:a.width-2*l,height:a.height-2*l,selectInds:a.selectInds},a._opt),e,a);r=i.rRange.to,a._ringGroups.push(i),a.grid.rings._section.push({radius:i.rRange.to});}),s._.each(a._ringGroups,function(e){a.sprite.addChild(e.sprite);});}},{key:"_drawCenter",value:function(){var t=this;this.center.enabled&&(this._center=new _({hoverClone:!1,context:{x:this.origin.x,y:this.origin.y,fillStyle:this.center.fillStyle,r:this.center.radius,cursor:this.center.cursor}}),this._centerTxt=new g(this.center.text,{context:{x:this.origin.x,y:this.origin.y,fontSize:this.center.fontSize,textAlign:"center",textBaseline:"middle",fillStyle:this.center.fontColor}}),this._center.on(s.event.types.get(),function(e){e.eventInfo={title:t.center.text,trigger:t.center,nodes:[t.center]},t.center.onclick&&("mousedown"==e.type&&(t._center.context.r+=2),"mouseup"==e.type&&(t._center.context.r-=2)),t.app.fire(e.type,e);}),this.centerSp.addChild(this._center),this.centerSp.addChild(this._centerTxt));}},{key:"_drawBack",value:function(){var e=this,t=this.app.getComponent({name:"coord"});if(1==e.grid.rings._section.length){var n=(e.grid.rings._section[0].radius-e.center.radius)/e.grid.rings.count;e.grid.rings._section=[];for(var i=0;i<e.grid.rings.count;i++)e.grid.rings._section.push({radius:e.center.radius+n*(i+1)});}else e.grid.rings.count=e.grid.rings._section.length;for(i=e.grid.rings._section.length-1;0<=i;i--){var a=e.grid.rings._section[i];e.gridSp.addChild(new _({context:{x:t.origin.x,y:t.origin.y,r:a.radius,lineWidth:e._getBackProp(e.grid.rings.lineWidth,i),strokeStyle:e._getBackProp(e.grid.rings.strokeStyle,i),fillStyle:e._getBackProp(e.grid.rings.fillStyle,i)}}));}if(1<e.grid.rays.count){var r=t.origin.x,o=t.origin.y,l=360/e.grid.rays.count,s=t.getMaxDisToViewOfOrigin();e.grid.rings._section.length&&(s=e.grid.rings._section.slice(-1)[0].radius),i=0;for(var d=e.grid.rays.count;i<d;i++){var c=l*i/180*Math.PI,u=r+s*Math.cos(c),p=o+s*Math.sin(c);e.gridSp.addChild(new y({context:{start:{x:r,y:o},end:{x:u,y:p},lineWidth:e._getBackProp(e.grid.rays.lineWidth,i),strokeStyle:e._getBackProp(e.grid.rays.strokeStyle,i),globalAlpha:e.grid.rays.globalAlpha}}));}}var f=new x({name:"clipRect",context:{x:t.origin.x-e.app.width/2,y:t.origin.y-e.height/2,width:e.app.width,height:e.height}});e.gridSp.clipTo(f),e.sprite.addChild(f);}},{key:"_getBackProp",value:function(e,t){var n=null;return s._.isFunction(e)&&(n=e.apply(this,[{scaleInd:t,count:this.grid.rings._section.length,groups:this._ringGroups,graphs:this}])),(s._.isString(e)||s._.isNumber(e))&&(n=e),s._.isArray(e)&&(n=e[t]),n}},{key:"_drawBewrite",value:function(){var a=this;if(a.bewrite.enabled){var e,r,t,n,i=function(e,t,n,i){n.context.x=e*a.center.radius+20*e,o.addChild(n),o.addChild(new y({context:{lineType:"dashed",start:{x:n.context.x,y:0},end:{x:e*(t?l/2-r/2:l),y:0},lineWidth:1,strokeStyle:"#ccc"}})),t&&(t.context.x=e*(l/2),o.addChild(t),o.addChild(new y({context:{lineType:"dashed",start:{x:e*(l/2+r/2),y:0},end:{x:e*l,y:0},lineWidth:1,strokeStyle:"#ccc"}}))),i.context.x=e*l,o.addChild(i);};a.bewrite.text&&(e=new d.default.Display.Text(a.bewrite.text,{context:{fillStyle:a.bewrite.fontColor,fontSize:a.bewrite.fontSize,textBaseline:"middle",textAlign:"center"}}),r=e.getTextWidth()),t=new d.default.Display.Text("强",{context:{fillStyle:a.bewrite.fontColor,fontSize:a.bewrite.fontSize,textBaseline:"middle",textAlign:"center"}}),n=new d.default.Display.Text("弱",{context:{fillStyle:a.bewrite.fontColor,fontSize:a.bewrite.fontSize,textBaseline:"middle",textAlign:"center"}});var o=new d.default.Display.Sprite({context:{x:this.origin.x,y:this.origin.y}});a.sprite.addChild(o);var l=a.width/2;i(1,e.clone(),t.clone(),n.clone()),i(-1,e.clone(),t.clone(),n.clone());}}},{key:"scan",value:function(){var t=this;this._scanAnim&&this._scanAnim.stop();var e=t._getScanSp();360==t.__scanIngCurOration&&(e.context.rotation=0),t._scanAnim=e.animate({rotation:360,globalAlpha:1},{duration:(360-t.__scanIngCurOration)/360*1e3,onUpdate:function(e){t.__scanIngCurOration=e.rotation;},onComplete:function(){e.context.rotation=0,t._scanAnim=e.animate({rotation:360},{duration:1e3,repeat:1e3,onUpdate:function(e){t.__scanIngCurOration=e.rotation;}});}});}},{key:"_drawScan",value:function(e){var t=this;if(t.scan.enabled){var n=t._getScanSp();360==t.__scanIngCurOration&&(n.context.rotation=0),t._scanAnim&&t._scanAnim.stop(),t._scanAnim=n.animate({rotation:360,globalAlpha:1},{duration:(360-t.__scanIngCurOration)/360*1e3,onUpdate:function(e){t.__scanIngCurOration=e.rotation;},onComplete:function(){n.context.rotation=0,t._scanAnim=n.animate({rotation:360},{duration:1e3,repeat:t.scan.repeat-2,onUpdate:function(e){t.__scanIngCurOration=e.rotation;},onComplete:function(){n.context.rotation=0,t._scanAnim=n.animate({rotation:360,globalAlpha:0},{duration:1e3,onUpdate:function(e){t.__scanIngCurOration=e.rotation;},onComplete:function(){n.destroy(),t.__scanSp=null,delete t.__scanSp,t.__scanIngCurOration=0,e&&e();}});}});}});}}},{key:"_getScanSp",value:function(){var e=this,t=e.__scanSp;if(!t){t=new d.default.Display.Sprite({context:{x:this.origin.x,y:this.origin.y,globalAlpha:0,rotation:e.__scanIngCurOration}}),e.scanSp.addChild(t),e.__scanSp=t;for(var n=e.scan.r||e.height/2-10,i=e.scan.fillStyle||e.center.fillStyle,a=e.scan.angle,r=0,o=a;r<o;r++){var l=new v({context:{r:n,fillStyle:i,clockwise:!0,startAngle:360-r,endAngle:359-r,globalAlpha:e.scan.alpha-e.scan.alpha/a*r}});t.addChild(l);}var s=new y({context:{end:{x:n,y:0},lineWidth:1,strokeStyle:i}});t.addChild(s);}return t}},{key:"_dataGroupHandle",value:function(){var n=s._.indexOf(this.dataFrame.fields,this.groupField);if(0<=n){var i=this.dataFrame.org[0],a={};for(var e in s._.each(this.dataFrame.org,function(e,t){t&&(a[e[n]]||(a[e[n]]=[s._.clone(i)]),a[e[n]].push(e));}),a)this.groupDataFrames.push((0, s.dataFrame)(a[e]));}else this.groupDataFrames.push(this.dataFrame);}},{key:"show",value:function(e,t){this.getAgreeNodeData(t,function(e){e.nodeElement&&(e.nodeElement.context.visible=!0),e.labelElement&&(e.labelElement.context.visible=!0);});}},{key:"hide",value:function(e,t){this.getAgreeNodeData(t,function(e){e.nodeElement&&(e.nodeElement.context.visible=!1),e.labelElement&&(e.labelElement.context.visible=!1);});}},{key:"getAgreeNodeData",value:function(i,a){s._.each(this._ringGroups,function(e){s._.each(e._rings,function(e,t){s._.each(e.planets,function(e,t){var n=e.rowData;i.params.name==n[i.params.field]&&a&&a(e);});});});}},{key:"getLayoutNodes",value:function(){var t=[];return s._.each(this._ringGroups,function(e){s._.each(e.planets,function(e){e.pit&&t.push(e);});}),t}},{key:"getInvalidNodes",value:function(){var t=[];return s._.each(this._ringGroups,function(e){s._.each(e.planets,function(e){e.pit||t.push(e);});}),t}},{key:"selectAt",value:function(t){s._.each(this._ringGroups,function(e){e.selectAt(t);});}},{key:"selectAll",value:function(){var t=this;s._.each(t.dataFrame.getFieldData("__index__"),function(e){t.selectAt(e);});}},{key:"unselectAt",value:function(t){s._.each(this._ringGroups,function(e){e.unselectAt(t);});}},{key:"unselectAll",value:function(){var t=this;s._.each(t.dataFrame.getFieldData("__index__"),function(e){t.unselectAt(e);});}},{key:"getSelectedNodes",value:function(){var t=[];return s._.each(this._ringGroups,function(e){t=t.concat(e.getSelectedNodes());}),t}},{key:"getSelectedRowList",value:function(){var n=[];return s._.each(this._ringGroups,function(e){var t=[];s._.each(e.getSelectedNodes(),function(e){t.push(e.rowData);}),n=n.concat(t);}),n}},{key:"getNodesAt",value:function(){}},{key:"resetData",value:function(e){this.clean(),this.dataFrame=e,this._dataGroupHandle(),this._drawGroups(),this._drawScan();}},{key:"clean",value:function(){this.groupDataFrames=[],s._.each(this._ringGroups,function(e){e.sprite.destroy();}),this._ringGroups=[];}}]),m);function m(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,m),(n=function(e,t){return !t||"object"!==o(t)&&"function"!=typeof t?u(e):t}(this,l(m).call(this,e,t))).type="planet",n.groupDataFrames=[],n.groupField=null,n._ringGroups=[],n.grid={rings:{_section:[]}},s._.extend(!0,u(n),(0, s.getDefaultProps)(m.defaultProps()),e),0!=n.center.radius&&n.center.enabled||(n.center.radius=0,n.center.margin=0,n.center.enabled=!1),n.__scanIngCurOration=0,n.init(),n}s.global.registerComponent(S,"graphs","planet"),e.default=S;});
	});

	unwrapExports(planet);

	var funnel = createCommonjsModule(function (module, exports) {
	!function(t,e){e(exports,index_cjs$1,graphs,tools,index_cjs);}(void 0,function(t,e,i,n,l){Object.defineProperty(t,"__esModule",{value:!0});var o=r(e),a=r(i);function r(t){return t&&t.__esModule?t:{default:t}}function d(t){return (d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t){return (u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function f(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n);}}function h(t,e,i){return e&&f(t.prototype,e),i&&f(t,i),t}function c(t,e){return (c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var p=o.default.Display.Text,m=o.default.Shapes.Polygon,y=(function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e);}(g,a.default),h(g,null,[{key:"defaultProps",value:function(){return {field:{detail:"字段配置",default:null},sort:{detail:"排序规则",default:null},maxNodeWidth:{detail:"最大的元素宽",default:null},minNodeWidth:{detail:"最小的元素宽",default:0},minVal:{detail:"漏斗的塔尖",default:0},node:{detail:"单个元素图形配置",propertys:{height:{detail:"高",default:0,documentation:"漏斗单元高，如果options没有设定， 就会被自动计算为 this.height/dataOrg.length"}}},label:{detail:"文本配置",propertys:{enabled:{detail:"是否开启文本",default:!0},textAlign:{detail:"文本布局位置(left,center,right)",default:"center"},textBaseline:{detail:"文本基线对齐方式",default:"middle"},format:{detail:"文本格式化处理函数",default:function(t){return (0, n.numAddSymbol)(t)}},fontSize:{detail:"文本字体大小",default:13},fontColor:{detail:"文本颜色",default:"#ffffff",documentation:"align为center的时候的颜色，align为其他属性时候取node的颜色"}}}}}}]),h(g,[{key:"init",value:function(){}},{key:"_computerAttr",value:function(){this.field&&(this.dataOrg=this.dataFrame.getFieldData(this.field)),this._maxVal=l._.max(this.dataOrg),this._minVal=l._.min(this.dataOrg),this.maxNodeWidth||(this.maxNodeWidth=.7*this.width),this.node.height||(this.node.height=this.height/this.dataOrg.length);}},{key:"draw",value:function(t){t=t||{},l._.extend(!0,this,t),this.animation&&t.resize,this._computerAttr(),this.data=this._trimGraphs(),this._drawGraphs(),this.sprite.context.x=this.origin.x+this.width/2,this.sprite.context.y=this.origin.y;}},{key:"_trimGraphs",value:function(){if(this.field){var n=this,o=[];return l._.each(this.dataOrg,function(t,e){var i={type:"funnel",field:n.field,rowData:n.dataFrame.getRowDataAt(e),value:t,width:n._getNodeWidth(t),color:n.app.getTheme(e),cursor:"pointer",label:"",middlePoint:null,iNode:-1,points:[]};o.push(i);}),this.sort&&(o=o.sort(function(t,e){return "desc"==n.sort?e.value-t.value:t.value-e.value})),l._.each(o,function(t,e){t.iNode=e,t.label=n.label.format(t.value,t);}),l._.each(o,function(t,e){t.points=n._getPoints(t,o[e+1],o[e-1]),t.middlePoint={x:0,y:(t.iNode+.5)*n.node.height};}),o}}},{key:"_getNodeWidth",value:function(t){var e=this.minNodeWidth+(this.maxNodeWidth-this.minNodeWidth)/(this._maxVal-this.minVal)*(t-this.minVal);return parseInt(e)}},{key:"_getPoints",value:function(t,e,i){var n=[],o=t.iNode*this.node.height,a=o+this.node.height;if("asc"!==this.sort){n.push([-t.width/2,o]),n.push([t.width/2,o]);var l=this.minNodeWidth;e&&(l=e.width),n.push([l/2,a]),n.push([-l/2,a]);}else{var r=this.minNodeWidth;i&&(r=i.width),n.push([-r/2,o]),n.push([r/2,o]),n.push([t.width/2,a]),n.push([-t.width/2,a]);}return n}},{key:"_drawGraphs",value:function(){var a=this;l._.each(this.data,function(t){var e=new m({context:{pointList:t.points,fillStyle:t.color,cursor:t.cursor}});a.sprite.addChild(e),e.nodeData=t,e.on(l.event.types.get(),function(t){t.eventInfo={trigger:a.node,title:a.field,nodes:[this.nodeData]},a.app.fire(t.type,t);});var i="center",n={x:t.middlePoint.x,y:t.middlePoint.y};"left"==a.label.textAlign&&(n.x=t.points[0][0]-(t.points[0][0]-t.points[3][0])/2,n.x-=15,i="right"),"right"==a.label.textAlign&&(n.x=t.points[1][0]-(t.points[1][0]-t.points[2][0])/2,n.x+=15,i="left");var o=new p(t.label,{context:{x:n.x,y:n.y,fontSize:a.label.fontSize,fillStyle:"center"==a.label.textAlign?a.label.fontColor:t.color,textAlign:i,textBaseline:a.label.textBaseline}});a.sprite.addChild(o);});}}]),g);function g(t,e){var i;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,g),(i=function(t,e){return !e||"object"!==d(e)&&"function"!=typeof e?s(t):e}(this,u(g).call(this,t,e))).type="funnel",i.dataOrg=[],i.data=[],i._maxVal=null,i._minVal=null,l._.extend(!0,s(i),(0, l.getDefaultProps)(g.defaultProps()),t),i.init(),i}l.global.registerComponent(y,"graphs","funnel"),t.default=y;});
	});

	unwrapExports(funnel);

	var fmin = createCommonjsModule(function (module, exports) {
	(function (global, factory) {
	     factory(exports) ;
	}(commonjsGlobal, function (exports) {
	    /** finds the zeros of a function, given two starting points (which must
	     * have opposite signs */
	    function bisect(f, a, b, parameters) {
	        parameters = parameters || {};
	        var maxIterations = parameters.maxIterations || 100,
	            tolerance = parameters.tolerance || 1e-10,
	            fA = f(a),
	            fB = f(b),
	            delta = b - a;

	        if (fA * fB > 0) {
	            throw "Initial bisect points must have opposite signs";
	        }

	        if (fA === 0) return a;
	        if (fB === 0) return b;

	        for (var i = 0; i < maxIterations; ++i) {
	            delta /= 2;
	            var mid = a + delta,
	                fMid = f(mid);

	            if (fMid * fA >= 0) {
	                a = mid;
	            }

	            if ((Math.abs(delta) < tolerance) || (fMid === 0)) {
	                return mid;
	            }
	        }
	        return a + delta;
	    }

	    // need some basic operations on vectors, rather than adding a dependency,
	    // just define here
	    function zeros(x) { var r = new Array(x); for (var i = 0; i < x; ++i) { r[i] = 0; } return r; }
	    function zerosM(x,y) { return zeros(x).map(function() { return zeros(y); }); }

	    function dot(a, b) {
	        var ret = 0;
	        for (var i = 0; i < a.length; ++i) {
	            ret += a[i] * b[i];
	        }
	        return ret;
	    }

	    function norm2(a)  {
	        return Math.sqrt(dot(a, a));
	    }

	    function scale(ret, value, c) {
	        for (var i = 0; i < value.length; ++i) {
	            ret[i] = value[i] * c;
	        }
	    }

	    function weightedSum(ret, w1, v1, w2, v2) {
	        for (var j = 0; j < ret.length; ++j) {
	            ret[j] = w1 * v1[j] + w2 * v2[j];
	        }
	    }

	    /** minimizes a function using the downhill simplex method */
	    function nelderMead(f, x0, parameters) {
	        parameters = parameters || {};

	        var maxIterations = parameters.maxIterations || x0.length * 200,
	            nonZeroDelta = parameters.nonZeroDelta || 1.05,
	            zeroDelta = parameters.zeroDelta || 0.001,
	            minErrorDelta = parameters.minErrorDelta || 1e-6,
	            minTolerance = parameters.minErrorDelta || 1e-5,
	            rho = (parameters.rho !== undefined) ? parameters.rho : 1,
	            chi = (parameters.chi !== undefined) ? parameters.chi : 2,
	            psi = (parameters.psi !== undefined) ? parameters.psi : -0.5,
	            sigma = (parameters.sigma !== undefined) ? parameters.sigma : 0.5,
	            maxDiff;

	        // initialize simplex.
	        var N = x0.length,
	            simplex = new Array(N + 1);
	        simplex[0] = x0;
	        simplex[0].fx = f(x0);
	        simplex[0].id = 0;
	        for (var i = 0; i < N; ++i) {
	            var point = x0.slice();
	            point[i] = point[i] ? point[i] * nonZeroDelta : zeroDelta;
	            simplex[i+1] = point;
	            simplex[i+1].fx = f(point);
	            simplex[i+1].id = i+1;
	        }

	        function updateSimplex(value) {
	            for (var i = 0; i < value.length; i++) {
	                simplex[N][i] = value[i];
	            }
	            simplex[N].fx = value.fx;
	        }

	        var sortOrder = function(a, b) { return a.fx - b.fx; };

	        var centroid = x0.slice(),
	            reflected = x0.slice(),
	            contracted = x0.slice(),
	            expanded = x0.slice();

	        for (var iteration = 0; iteration < maxIterations; ++iteration) {
	            simplex.sort(sortOrder);

	            if (parameters.history) {
	                // copy the simplex (since later iterations will mutate) and
	                // sort it to have a consistent order between iterations
	                var sortedSimplex = simplex.map(function (x) {
	                    var state = x.slice();
	                    state.fx = x.fx;
	                    state.id = x.id;
	                    return state;
	                });
	                sortedSimplex.sort(function(a,b) { return a.id - b.id; });

	                parameters.history.push({x: simplex[0].slice(),
	                                         fx: simplex[0].fx,
	                                         simplex: sortedSimplex});
	            }

	            maxDiff = 0;
	            for (i = 0; i < N; ++i) {
	                maxDiff = Math.max(maxDiff, Math.abs(simplex[0][i] - simplex[1][i]));
	            }

	            if ((Math.abs(simplex[0].fx - simplex[N].fx) < minErrorDelta) &&
	                (maxDiff < minTolerance)) {
	                break;
	            }

	            // compute the centroid of all but the worst point in the simplex
	            for (i = 0; i < N; ++i) {
	                centroid[i] = 0;
	                for (var j = 0; j < N; ++j) {
	                    centroid[i] += simplex[j][i];
	                }
	                centroid[i] /= N;
	            }

	            // reflect the worst point past the centroid  and compute loss at reflected
	            // point
	            var worst = simplex[N];
	            weightedSum(reflected, 1+rho, centroid, -rho, worst);
	            reflected.fx = f(reflected);

	            // if the reflected point is the best seen, then possibly expand
	            if (reflected.fx < simplex[0].fx) {
	                weightedSum(expanded, 1+chi, centroid, -chi, worst);
	                expanded.fx = f(expanded);
	                if (expanded.fx < reflected.fx) {
	                    updateSimplex(expanded);
	                }  else {
	                    updateSimplex(reflected);
	                }
	            }

	            // if the reflected point is worse than the second worst, we need to
	            // contract
	            else if (reflected.fx >= simplex[N-1].fx) {
	                var shouldReduce = false;

	                if (reflected.fx > worst.fx) {
	                    // do an inside contraction
	                    weightedSum(contracted, 1+psi, centroid, -psi, worst);
	                    contracted.fx = f(contracted);
	                    if (contracted.fx < worst.fx) {
	                        updateSimplex(contracted);
	                    } else {
	                        shouldReduce = true;
	                    }
	                } else {
	                    // do an outside contraction
	                    weightedSum(contracted, 1-psi * rho, centroid, psi*rho, worst);
	                    contracted.fx = f(contracted);
	                    if (contracted.fx < reflected.fx) {
	                        updateSimplex(contracted);
	                    } else {
	                        shouldReduce = true;
	                    }
	                }

	                if (shouldReduce) {
	                    // if we don't contract here, we're done
	                    if (sigma >= 1) break;

	                    // do a reduction
	                    for (i = 1; i < simplex.length; ++i) {
	                        weightedSum(simplex[i], 1 - sigma, simplex[0], sigma, simplex[i]);
	                        simplex[i].fx = f(simplex[i]);
	                    }
	                }
	            } else {
	                updateSimplex(reflected);
	            }
	        }

	        simplex.sort(sortOrder);
	        return {fx : simplex[0].fx,
	                x : simplex[0]};
	    }

	    /// searches along line 'pk' for a point that satifies the wolfe conditions
	    /// See 'Numerical Optimization' by Nocedal and Wright p59-60
	    /// f : objective function
	    /// pk : search direction
	    /// current: object containing current gradient/loss
	    /// next: output: contains next gradient/loss
	    /// returns a: step size taken
	    function wolfeLineSearch(f, pk, current, next, a, c1, c2) {
	        var phi0 = current.fx, phiPrime0 = dot(current.fxprime, pk),
	            phi = phi0, phi_old = phi0,
	            phiPrime = phiPrime0,
	            a0 = 0;

	        a = a || 1;
	        c1 = c1 || 1e-6;
	        c2 = c2 || 0.1;

	        function zoom(a_lo, a_high, phi_lo) {
	            for (var iteration = 0; iteration < 16; ++iteration) {
	                a = (a_lo + a_high)/2;
	                weightedSum(next.x, 1.0, current.x, a, pk);
	                phi = next.fx = f(next.x, next.fxprime);
	                phiPrime = dot(next.fxprime, pk);

	                if ((phi > (phi0 + c1 * a * phiPrime0)) ||
	                    (phi >= phi_lo)) {
	                    a_high = a;

	                } else  {
	                    if (Math.abs(phiPrime) <= -c2 * phiPrime0) {
	                        return a;
	                    }

	                    if (phiPrime * (a_high - a_lo) >=0) {
	                        a_high = a_lo;
	                    }

	                    a_lo = a;
	                    phi_lo = phi;
	                }
	            }

	            return 0;
	        }

	        for (var iteration = 0; iteration < 10; ++iteration) {
	            weightedSum(next.x, 1.0, current.x, a, pk);
	            phi = next.fx = f(next.x, next.fxprime);
	            phiPrime = dot(next.fxprime, pk);
	            if ((phi > (phi0 + c1 * a * phiPrime0)) ||
	                (iteration && (phi >= phi_old))) {
	                return zoom(a0, a, phi_old);
	            }

	            if (Math.abs(phiPrime) <= -c2 * phiPrime0) {
	                return a;
	            }

	            if (phiPrime >= 0 ) {
	                return zoom(a, a0, phi);
	            }

	            phi_old = phi;
	            a0 = a;
	            a *= 2;
	        }

	        return a;
	    }

	    function conjugateGradient(f, initial, params) {
	        // allocate all memory up front here, keep out of the loop for perfomance
	        // reasons
	        var current = {x: initial.slice(), fx: 0, fxprime: initial.slice()},
	            next = {x: initial.slice(), fx: 0, fxprime: initial.slice()},
	            yk = initial.slice(),
	            pk, temp,
	            a = 1,
	            maxIterations;

	        params = params || {};
	        maxIterations = params.maxIterations || initial.length * 20;

	        current.fx = f(current.x, current.fxprime);
	        pk = current.fxprime.slice();
	        scale(pk, current.fxprime,-1);

	        for (var i = 0; i < maxIterations; ++i) {
	            a = wolfeLineSearch(f, pk, current, next, a);

	            // todo: history in wrong spot?
	            if (params.history) {
	                params.history.push({x: current.x.slice(),
	                                     fx: current.fx,
	                                     fxprime: current.fxprime.slice(),
	                                     alpha: a});
	            }

	            if (!a) {
	                // faiiled to find point that satifies wolfe conditions.
	                // reset direction for next iteration
	                scale(pk, current.fxprime, -1);

	            } else {
	                // update direction using Polak–Ribiere CG method
	                weightedSum(yk, 1, next.fxprime, -1, current.fxprime);

	                var delta_k = dot(current.fxprime, current.fxprime),
	                    beta_k = Math.max(0, dot(yk, next.fxprime) / delta_k);

	                weightedSum(pk, beta_k, pk, -1, next.fxprime);

	                temp = current;
	                current = next;
	                next = temp;
	            }

	            if (norm2(current.fxprime) <= 1e-5) {
	                break;
	            }
	        }

	        if (params.history) {
	            params.history.push({x: current.x.slice(),
	                                 fx: current.fx,
	                                 fxprime: current.fxprime.slice(),
	                                 alpha: a});
	        }

	        return current;
	    }

	    function gradientDescent(f, initial, params) {
	        params = params || {};
	        var maxIterations = params.maxIterations || initial.length * 100,
	            learnRate = params.learnRate || 0.001,
	            current = {x: initial.slice(), fx: 0, fxprime: initial.slice()};

	        for (var i = 0; i < maxIterations; ++i) {
	            current.fx = f(current.x, current.fxprime);
	            if (params.history) {
	                params.history.push({x: current.x.slice(),
	                                     fx: current.fx,
	                                     fxprime: current.fxprime.slice()});
	            }

	            weightedSum(current.x, 1, current.x, -learnRate, current.fxprime);
	            if (norm2(current.fxprime) <= 1e-5) {
	                break;
	            }
	        }

	        return current;
	    }

	    function gradientDescentLineSearch(f, initial, params) {
	        params = params || {};
	        var current = {x: initial.slice(), fx: 0, fxprime: initial.slice()},
	            next = {x: initial.slice(), fx: 0, fxprime: initial.slice()},
	            maxIterations = params.maxIterations || initial.length * 100,
	            learnRate = params.learnRate || 1,
	            pk = initial.slice(),
	            c1 = params.c1 || 1e-3,
	            c2 = params.c2 || 0.1,
	            temp,
	            functionCalls = [];

	        if (params.history) {
	            // wrap the function call to track linesearch samples
	            var inner = f;
	            f = function(x, fxprime) {
	                functionCalls.push(x.slice());
	                return inner(x, fxprime);
	            };
	        }

	        current.fx = f(current.x, current.fxprime);
	        for (var i = 0; i < maxIterations; ++i) {
	            scale(pk, current.fxprime, -1);
	            learnRate = wolfeLineSearch(f, pk, current, next, learnRate, c1, c2);

	            if (params.history) {
	                params.history.push({x: current.x.slice(),
	                                     fx: current.fx,
	                                     fxprime: current.fxprime.slice(),
	                                     functionCalls: functionCalls,
	                                     learnRate: learnRate,
	                                     alpha: learnRate});
	                functionCalls = [];
	            }


	            temp = current;
	            current = next;
	            next = temp;

	            if ((learnRate === 0) || (norm2(current.fxprime) < 1e-5)) break;
	        }

	        return current;
	    }

	    exports.bisect = bisect;
	    exports.nelderMead = nelderMead;
	    exports.conjugateGradient = conjugateGradient;
	    exports.gradientDescent = gradientDescent;
	    exports.gradientDescentLineSearch = gradientDescentLineSearch;
	    exports.zeros = zeros;
	    exports.zerosM = zerosM;
	    exports.norm2 = norm2;
	    exports.weightedSum = weightedSum;
	    exports.scale = scale;

	}));
	});

	var circleintersection = createCommonjsModule(function (module, exports) {
	!function(r,n){n(exports);}(0,function(r){Object.defineProperty(r,"__esModule",{value:!0}),r.intersectionArea=function(n,r){var e,t=function(r){for(var n=[],e=0;e<r.length;++e)for(var t=e+1;t<r.length;++t)for(var a=C(r[e],r[t]),i=0;i<a.length;++i){var u=a[i];u.parentIndex=[e,t],n.push(u);}return n}(n),a=t.filter(function(r){return A(r,n)}),i=0,u=0,s=[];if(1<a.length){var f=O(a);for(e=0;e<a.length;++e){var o=a[e];o.angle=Math.atan2(o.x-f.x,o.y-f.y);}a.sort(function(r,n){return n.angle-r.angle});var x=a[a.length-1];for(e=0;e<a.length;++e){var d=a[e];u+=(x.x+d.x)*(d.y-x.y);for(var l={x:(d.x+x.x)/2,y:(d.y+x.y)/2},c=null,h=0;h<d.parentIndex.length;++h)if(-1<x.parentIndex.indexOf(d.parentIndex[h])){var y=n[d.parentIndex[h]],v=Math.atan2(d.x-y.x,d.y-y.y),p=Math.atan2(x.x-y.x,x.y-y.y),g=p-v;g<0&&(g+=2*Math.PI);var M=p-g/2,I=q(l,{x:y.x+y.radius*Math.sin(M),y:y.y+y.radius*Math.cos(M)});I>2*y.radius&&(I=2*y.radius),(null===c||c.width>I)&&(c={circle:y,width:I,p1:d,p2:x});}null!==c&&(s.push(c),i+=m(c.circle.radius,c.width),x=d);}}else{var P=n[0];for(e=1;e<n.length;++e)n[e].radius<P.radius&&(P=n[e]);var b=!1;for(e=0;e<n.length;++e)if(q(n[e],P)>Math.abs(P.radius-n[e].radius)){b=!0;break}b?i=u=0:(i=P.radius*P.radius*Math.PI,s.push({circle:P,p1:{x:P.x,y:P.y+P.radius},p2:{x:P.x-w,y:P.y+P.radius},width:2*P.radius}));}u/=2,r&&(r.area=i+u,r.arcArea=i,r.polygonArea=u,r.arcs=s,r.innerPoints=a,r.intersectionPoints=t);return i+u},r.containedInCircles=A,r.circleArea=m,r.distance=q,r.circleOverlap=function(r,n,e){if(r+n<=e)return 0;if(e<=Math.abs(r-n))return Math.PI*Math.min(r,n)*Math.min(r,n);var t=n-(e*e-r*r+n*n)/(2*e);return m(r,r-(e*e-n*n+r*r)/(2*e))+m(n,t)},r.circleCircleIntersection=C,r.getCenter=O;var w=1e-10;function A(r,n){for(var e=0;e<n.length;++e)if(q(r,n[e])>n[e].radius+w)return !1;return !0}function m(r,n){return r*r*Math.acos(1-n/r)-(r-n)*Math.sqrt(n*(2*r-n))}function q(r,n){return Math.sqrt((r.x-n.x)*(r.x-n.x)+(r.y-n.y)*(r.y-n.y))}function C(r,n){var e=q(r,n),t=r.radius,a=n.radius;if(t+a<=e||e<=Math.abs(t-a))return [];var i=(t*t-a*a+e*e)/(2*e),u=Math.sqrt(t*t-i*i),s=r.x+i*(n.x-r.x)/e,f=r.y+i*(n.y-r.y)/e,o=-(n.y-r.y)*(u/e),x=-(n.x-r.x)*(u/e);return [{x:s+o,y:f-x},{x:s-o,y:f+x}]}function O(r){for(var n={x:0,y:0},e=0;e<r.length;++e)n.x+=r[e].x,n.y+=r[e].y;return n.x/=r.length,n.y/=r.length,n}});
	});

	unwrapExports(circleintersection);

	var layout = createCommonjsModule(function (module, exports) {
	!function(n,e){e(exports,fmin,circleintersection);}(void 0,function(n,d,S){Object.defineProperty(n,"__esModule",{value:!0}),n.venn=function(a,n){(n=n||{}).maxIterations=n.maxIterations||500;var e=n.initialLayout||f,i=n.lossFunction||D;a=function(n){n=n.slice();var e,t,r,a,i=[],s={};for(e=0;e<n.length;++e){var o=n[e];1==o.sets.length?i.push(o.sets[0]):2==o.sets.length&&(r=o.sets[0],a=o.sets[1],s[[r,a]]=!0,s[[a,r]]=!0);}for(i.sort(function(n,e){return e<n}),e=0;e<i.length;++e)for(r=i[e],t=e+1;t<i.length;++t)a=i[t],[r,a]in s||n.push({sets:[r,a],size:0});return n}(a);var t,s=e(a,n),r=[],o=[];for(t in s)s.hasOwnProperty(t)&&(r.push(s[t].x),r.push(s[t].y),o.push(t));for(var u=(0, d.nelderMead)(function(n){for(var e={},t=0;t<o.length;++t){var r=o[t];e[r]={x:n[2*t],y:n[2*t+1],radius:s[r].radius};}return i(e,a)},r,n).x,h=0;h<o.length;++h)t=o[h],s[t].x=u[2*h],s[t].y=u[2*h+1];return s},n.distanceFromIntersectArea=C,n.getDistanceMatrices=p,n.bestInitialLayout=f,n.constrainedMDSLayout=i,n.greedyLayout=s,n.lossFunction=D,n.disjointCluster=v,n.normalizeSolution=function(n,e,t){null===e&&(e=Math.PI/2);var r,a,u=[];for(a in n)if(n.hasOwnProperty(a)){var i=n[a];u.push({x:i.x,y:i.y,radius:i.radius,setid:a});}var s=v(u);for(r=0;r<s.length;++r){x(s[r],e,t);var o=z(s[r]);s[r].size=(o.xRange.max-o.xRange.min)*(o.yRange.max-o.yRange.min),s[r].bounds=o;}s.sort(function(n,e){return e.size-n.size});var h=(u=s[0]).bounds,f=(h.xRange.max-h.xRange.min)/50;function l(n,e,t){if(n){var r,a,i,s=n.bounds;e?r=h.xRange.max-s.xRange.min+f:(r=h.xRange.max-s.xRange.max,(i=(s.xRange.max-s.xRange.min)/2-(h.xRange.max-h.xRange.min)/2)<0&&(r+=i)),t?a=h.yRange.max-s.yRange.min+f:(a=h.yRange.max-s.yRange.max,(i=(s.yRange.max-s.yRange.min)/2-(h.yRange.max-h.yRange.min)/2)<0&&(a+=i));for(var o=0;o<n.length;++o)n[o].x+=r,n[o].y+=a,u.push(n[o]);}}var g=1;for(;g<s.length;)l(s[g],!0,!1),l(s[g+1],!1,!0),l(s[g+2],!0,!0),g+=3,h=z(u);var c={};for(r=0;r<u.length;++r)c[u[r].setid]=u[r];return c},n.scaleSolution=function(n,e,t,r){var a=[],i=[];for(var s in n)n.hasOwnProperty(s)&&(i.push(s),a.push(n[s]));e-=2*r,t-=2*r;var o=z(a),u=o.xRange,h=o.yRange;if(u.max==u.min||h.max==h.min)return console.log("not scaling solution: zero size detected"),n;for(var f=e/(u.max-u.min),l=t/(h.max-h.min),g=Math.min(l,f),c=(e-(u.max-u.min)*g)/2,x=(t-(h.max-h.min)*g)/2,v={},y=0;y<a.length;++y){var m=a[y];v[i[y]]={radius:g*m.radius,x:r+c+(m.x-u.min)*g,y:r+x+(m.y-h.min)*g};}return v};var A=1e-10;function C(e,t,r){return Math.min(e,t)*Math.min(e,t)*Math.PI<=r+A?Math.abs(e-t):(0, d.bisect)(function(n){return (0, S.circleOverlap)(e,t,n)-r},0,e+t)}function p(n,i,s){var o=(0, d.zerosM)(i.length,i.length),u=(0, d.zerosM)(i.length,i.length);return n.filter(function(n){return 2==n.sets.length}).map(function(n){var e=s[n.sets[0]],t=s[n.sets[1]],r=C(Math.sqrt(i[e].size/Math.PI),Math.sqrt(i[t].size/Math.PI),n.size);o[e][t]=o[t][e]=r;var a=0;n.size+1e-10>=Math.min(i[e].size,i[t].size)?a=1:n.size<=1e-10&&(a=-1),u[e][t]=u[t][e]=a;}),{distances:o,constraints:u}}function f(n,e){var t=s(n,e),r=e.lossFunction||D;if(8<=n.length){var a=i(n,e);r(a,n)+1e-8<r(t,n)&&(t=a);}return t}function i(n,e){var t,r=(e=e||{}).restarts||10,a=[],i={};for(t=0;t<n.length;++t){var s=n[t];1==s.sets.length&&(i[s.sets[0]]=a.length,a.push(s));}var o=p(n,a,i),u=o.distances,h=o.constraints,f=(0, d.norm2)(u.map(d.norm2))/u.length;u=u.map(function(n){return n.map(function(n){return n/f})});function l(n,e){return function(n,e,t,r){var a,i=0;for(a=0;a<e.length;++a)e[a]=0;for(a=0;a<t.length;++a)for(var s=n[2*a],o=n[2*a+1],u=a+1;u<t.length;++u){var h=n[2*u],f=n[2*u+1],l=t[a][u],g=r[a][u],c=(h-s)*(h-s)+(f-o)*(f-o),x=Math.sqrt(c),v=c-l*l;0<g&&x<=l||g<0&&l<=x||(i+=2*v*v,e[2*a]+=4*v*(s-h),e[2*a+1]+=4*v*(o-f),e[2*u]+=4*v*(h-s),e[2*u+1]+=4*v*(f-o));}return i}(n,e,u,h)}var g,c;for(t=0;t<r;++t){var x=(0, d.zeros)(2*u.length).map(Math.random);c=(0, d.conjugateGradient)(l,x,e),(!g||c.fx<g.fx)&&(g=c);}var v=g.x,y={};for(t=0;t<a.length;++t){var m=a[t];y[m.sets[0]]={x:v[2*t]*f,y:v[2*t+1]*f,radius:Math.sqrt(m.size/Math.PI)};}if(e.history)for(t=0;t<e.history.length;++t)(0, d.scale)(e.history[t].x,f);return y}function s(n,e){for(var t,r=e&&e.lossFunction?e.lossFunction:D,a={},i={},s=0;s<n.length;++s){var o=n[s];1==o.sets.length&&(t=o.sets[0],a[t]={x:1e10,y:1e10,rowid:a.length,size:o.size,radius:Math.sqrt(o.size/Math.PI)},i[t]=[]);}for(n=n.filter(function(n){return 2==n.sets.length}),s=0;s<n.length;++s){var u=n[s],h=u.hasOwnProperty("weight")?u.weight:1,f=u.sets[0],l=u.sets[1];u.size+A>=Math.min(a[f].size,a[l].size)&&(h=0),i[f].push({set:l,size:u.size,weight:h}),i[l].push({set:f,size:u.size,weight:h});}var g=[];for(t in i)if(i.hasOwnProperty(t)){var c=0;for(s=0;s<i[t].length;++s)c+=i[t][s].size*i[t][s].weight;g.push({set:t,size:c});}function x(n,e){return e.size-n.size}g.sort(x);var v={};function y(n){return n.set in v}function m(n,e){a[e].x=n.x,a[e].y=n.y,v[e]=!0;}for(m({x:0,y:0},g[0].set),s=1;s<g.length;++s){var d=g[s].set,p=i[d].filter(y);if(t=a[d],p.sort(x),0===p.length)throw "ERROR: missing pairwise overlap information";for(var z=[],M=0;M<p.length;++M){var R=a[p[M].set],P=C(t.radius,R.radius,p[M].size);z.push({x:R.x+P,y:R.y}),z.push({x:R.x-P,y:R.y}),z.push({y:R.y+P,x:R.x}),z.push({y:R.y-P,x:R.x});for(var w=M+1;w<p.length;++w)for(var I=a[p[w].set],O=C(t.radius,I.radius,p[w].size),b=(0, S.circleCircleIntersection)({x:R.x,y:R.y,radius:P},{x:I.x,y:I.y,radius:O}),q=0;q<b.length;++q)z.push(b[q]);}var F=1e50,L=z[0];for(M=0;M<z.length;++M){a[d].x=z[M].x,a[d].y=z[M].y;var j=r(a,n);j<F&&(F=j,L=z[M]);}m(L,d);}return a}function D(e,n){var t=0;for(var r=0;r<n.length;++r){var a,i=n[r];if(1!=i.sets.length){if(2==i.sets.length){var s=e[i.sets[0]],o=e[i.sets[1]];a=(0, S.circleOverlap)(s.radius,o.radius,(0, S.distance)(s,o));}else a=(0, S.intersectionArea)(i.sets.map(function(n){return e[n]}));t+=(i.hasOwnProperty("weight")?i.weight:1)*(a-i.size)*(a-i.size);}}return t}function x(n,e,t){var r;if(null===t?n.sort(function(n,e){return e.radius-n.radius}):n.sort(t),0<n.length){var a=n[0].x,i=n[0].y;for(r=0;r<n.length;++r)n[r].x-=a,n[r].y-=i;}2==n.length&&(0, S.distance)(n[0],n[1])<Math.abs(n[1].radius-n[0].radius)&&(n[1].x=n[0].x+n[0].radius-n[1].radius-1e-10,n[1].y=n[0].y);if(1<n.length){var s,o,u=Math.atan2(n[1].x,n[1].y)-e,h=Math.cos(u),f=Math.sin(u);for(r=0;r<n.length;++r)s=n[r].x,o=n[r].y,n[r].x=h*s-f*o,n[r].y=f*s+h*o;}if(2<n.length){for(var l=Math.atan2(n[2].x,n[2].y)-e;l<0;)l+=2*Math.PI;for(;l>2*Math.PI;)l-=2*Math.PI;if(l>Math.PI){var g=n[1].y/(1e-10+n[1].x);for(r=0;r<n.length;++r){var c=(n[r].x+g*n[r].y)/(1+g*g);n[r].x=2*c-n[r].x,n[r].y=2*c*g-n[r].y;}}}}function v(n){function e(n){return n.parent!==n&&(n.parent=e(n.parent)),n.parent}n.map(function(n){n.parent=n;});for(var t=0;t<n.length;++t)for(var r=t+1;r<n.length;++r){var a=n[t].radius+n[r].radius;(0, S.distance)(n[t],n[r])+1e-10<a&&(i=n[r],s=n[t],o=void 0,o=e(i),u=e(s),o.parent=u);}var i,s,o,u,h,f={};for(t=0;t<n.length;++t)(h=e(n[t]).parent.setid)in f||(f[h]=[]),f[h].push(n[t]);n.map(function(n){delete n.parent;});var l=[];for(h in f)f.hasOwnProperty(h)&&l.push(f[h]);return l}function z(n){function e(e){return {max:Math.max.apply(null,n.map(function(n){return n[e]+n.radius})),min:Math.min.apply(null,n.map(function(n){return n[e]-n.radius}))}}return {xRange:e("x"),yRange:e("y")}}});
	});

	unwrapExports(layout);

	var venn = createCommonjsModule(function (module, exports) {
	!function(e,t){t(exports,index_cjs$1,graphs,layout,circleintersection,fmin,index_cjs);}(void 0,function(e,t,n,u,v,f,y){Object.defineProperty(e,"__esModule",{value:!0});var l=i(t),a=i(n);function i(e){return e&&e.__esModule?e:{default:e}}function r(e){return (r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e){return (o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l);}}function h(e,t,n){return t&&d(e.prototype,t),n&&d(e,n),e}function c(e,t){return (c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var _=l.default.Display.Text,g=l.default.Shapes.Path,b=l.default.Shapes.Circle,p=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t);}(x,a.default),h(x,null,[{key:"defaultProps",value:function(){return {keyField:{detail:"key字段",default:"name"},valueField:{detail:"value字段",default:"value"},node:{detail:"单个节点配置",propertys:{strokeStyle:{detail:"边框颜色",default:null},lineWidth:{detail:"边框大小",default:2},strokeAlpha:{detail:"边框透明度",default:0},fillStyle:{detail:"背景色",default:null},fillAlpha:{detail:"背景透明度",default:.25},focus:{detail:"hover设置",propertys:{enabled:{detail:"是否开启",default:!0},strokeAlpha:{detail:"边框透明度",default:.3}}},select:{detail:"选中设置",propertys:{enabled:{detail:"是否开启",default:!0},lineWidth:{detail:"描边宽度",default:2},strokeStyle:{detail:"描边颜色",default:"#666666"}}}}},label:{detail:"文本设置",propertys:{field:{detail:"获取文本的字段",default:null},fontSize:{detail:"字体大小",default:14},fontColor:{detail:"文本颜色",default:null},fontWeight:{detail:"fontWeight",default:"normal"},showInter:{detail:"是否显示相交部分的文本",default:!0}}}}}}]),h(x,[{key:"init",value:function(){this.venn_circles=new l.default.Display.Sprite({id:"venn_circles"}),this.sprite.addChild(this.venn_circles),this.venn_paths=new l.default.Display.Sprite({id:"venn_paths"}),this.sprite.addChild(this.venn_paths),this.venn_labels=new l.default.Display.Sprite({id:"venn_labels"}),this.sprite.addChild(this.venn_labels);}},{key:"draw",value:function(e){e=e||{},y._.extend(!0,this,e),this.data=this._trimGraphs(),this._widget(),this.sprite.context.x=this.app.padding.left,this.sprite.context.y=this.app.padding.top,this.fire("complete");}},{key:"resetData",value:function(e){this.dataFrame=e,this.data=this._trimGraphs(),this._widget();}},{key:"_trimGraphs",value:function(){var l=this,e=l._vennData(),t=u.venn,n=u.lossFunction,a=Math.PI/2,i={},r={};if(this._dataCircleLen=0,this._dataLabelLen=0,(this._dataPathLen=0)<e.length){var o=t(e,{lossFunction:n});o=(0, u.normalizeSolution)(o,a,null),i=(0, u.scaleSolution)(o,this.width,this.height,0),r=function(e,t){for(var n={},l=function(e){var t={},n=[];for(var l in e)n.push(l),t[l]=[];for(var a=0;a<n.length;a++)for(var i=e[n[a]],r=a+1;r<n.length;++r){var o=e[n[r]],s=(0, v.distance)(i,o);s+o.radius<=i.radius+1e-10?t[n[r]].push(n[a]):s+i.radius<=o.radius+1e-10&&t[n[a]].push(n[r]);}return t}(e),a=0;a<t.length;++a){for(var i=t[a].sets,r={},o={},s=0;s<i.length;++s){r[i[s]]=!0;for(var d=l[i[s]],u=0;u<d.length;++u)o[d[u]]=!0;}var h=[],f=[];for(var c in e)c in r?h.push(e[c]):c in o||f.push(e[c]);var p=k(h,f);(n[i]=p).disjoint&&0<t[a].size&&console.log("WARNING: area "+i+" not represented on screen");}return n}(i,e);}var s=0,d=0;return y._.each(e,function(e,t){if(e.label&&(1<e.sets.length&&!l.label.showInter||(e.labelPosition=r[e.nodeId],l._dataLabelLen++)),1<e.sets.length){var n=function(e){var t={};(0, v.intersectionArea)(e,t);var n=t.arcs;if(0===n.length)return "M 0 0";if(1==n.length){var l=n[0].circle;return function(e,t,n){var l=[];return l.push("\nM",e,t),l.push("\nm",-n,0),l.push("\na",n,n,0,1,0,2*n,0),l.push("\na",n,n,0,1,0,2*-n,0),l.join(" ")}(l.x,l.y,l.radius)}for(var a=["\nM",n[0].p2.x,n[0].p2.y],i=0;i<n.length;++i){var r=n[i],o=r.circle.radius,s=r.width>o;a.push("\nA",o,o,0,s?1:0,1,r.p1.x,r.p1.y);}return a.join(" ")+" z"}(e.sets.map(function(e){return i[e]}));e.shape={type:"path",path:n,pathInd:d++},l._dataPathLen++;}else 1==e.sets.length&&(e.shape=y._.extend({type:"circle",circleInd:s++},i[e.nodeId]),l._dataCircleLen++);}),e}},{key:"_vennData",value:function(){for(var e=[],t=0,n=this.dataFrame.length;t<n;t++){var l=this.dataFrame.getRowDataAt(t),a={type:"venn",iNode:t,nodeId:null,rowData:l,sets:null,size:null,value:null,fillStyle:null,strokeStyle:null,label:null,labelPosition:null};for(var i in l){var r=l[i];i==this.keyField?(y._.isArray(r)||(r=r.split(/[,|]/)),a.sets=r,a.nodeId=r.join()):i==this.valueField?(a.size=r,a.value=r):i==this.label.field&&(a.label=r);}e.push(a);}return e}},{key:"_getStyle",value:function(e,t,n,l){var a;return y._.isString(e)&&(a=e),y._.isFunction(e)&&(a=e(n)),a||null==t||(a=this.app.getTheme(t)),a||null==l||(a=l),a}},{key:"_widget",value:function(){var f=this;if(f.venn_circles.children.length>f._dataCircleLen)for(var e=f._dataCircleLen;e<f.venn_circles.children.length;e++)f.venn_circles.getChildAt(e--).destroy();if(f.venn_paths.children.length>f._dataPathLen)for(e=f._dataPathLen;e<f.venn_paths.children.length;e++)f.venn_paths.getChildAt(e--).destroy();if(f.venn_labels.children.length>f._dataLabelLen)for(e=f._dataLabelLen;e<f.venn_labels.children.length;e++)f.venn_labels.getChildAt(e--).destroy();var c=0,p=0,v=0;y._.each(this.data,function(e,t){var n,l=e.shape,a=!0;if(l){var i;if("circle"==l.type){var r=f._getStyle(f.node.fillStyle,l.circleInd,e),o=f._getStyle(f.node.strokeStyle,l.circleInd,e);e.fillStyle=r,e.strokeStyle=o,i={x:l.x,y:l.y,r:l.radius,fillStyle:r,fillAlpha:f.node.fillAlpha,lineWidth:f.node.lineWidth,strokeStyle:o,strokeAlpha:f.node.strokeAlpha},(n=f.venn_circles.getChildAt(c++))?(a=!1,n.animate(i)):(n=new b({pointChkPriority:!1,hoverClone:!1,context:i}),f.venn_circles.addChild(n));}"path"==e.shape.type&&(i={path:l.path,fillStyle:"#ffffff",fillAlpha:0,lineWidth:f.node.lineWidth,strokeStyle:"#ffffff",strokeAlpha:0},(n=f.venn_paths.getChildAt(p++))?(a=!1,n.context.path=l.path):(n=new g({pointChkPriority:!1,context:i}),f.venn_paths.addChild(n))),(n.nodeData=e)._node=n,f.node.focus.enabled&&n.hover(function(e){f.focusAt(this.nodeData.iNode);},function(e){this.nodeData.selected||f.unfocusAt(this.nodeData.iNode);}),a&&n.on(y.event.types.get(),function(e){e.eventInfo={trigger:f.node,title:null,nodes:[this.nodeData]},f.app.fire(e.type,e);});}if(e.label&&f.label.enabled){var s=f._getStyle(f.label.fontColor,l.circleInd,e,"#999"),d=f.label.fontSize;if(1<e.sets.length&&(f.label.showInter?d-=2:d=0),d){var u={x:e.labelPosition.x,y:e.labelPosition.y,fontSize:d,textBaseline:"middle",textAlign:"center",fontWeight:f.label.fontWeight,fillStyle:s},h=f.venn_labels.getChildAt(v++);h?(h.resetText(e.label),h.animate(u)):(h=new _(e.label,{context:u}),f.venn_labels.addChild(h));}}});}},{key:"focusAt",value:function(e){var t=this.data[e];if(this.node.focus.enabled&&!t.focused){var n=t._node.context;1<t.sets.length?n.strokeAlpha=1:n.strokeAlpha=this.node.focus.strokeAlpha,t.focused=!0;}}},{key:"unfocusAt",value:function(e){var t=this.data[e];this.node.focus.enabled&&t.focused&&(t._node.context.strokeAlpha=this.node.strokeAlpha,t.focused=!1);}},{key:"selectAt",value:function(e){var t=this.data[e];if(this.node.select.enabled&&!t.selected){var n=t._node.context;n.lineWidth=this.node.select.lineWidth,n.strokeAlpha=this.node.select.strokeAlpha,n.strokeStyle=this.node.select.strokeStyle,t.selected=!0;}}},{key:"unselectAt",value:function(e){var t=this.data[e];this.node.select.enabled&&t.selected&&(t._node.context.strokeStyle=this.node.strokeStyle,t.selected=!1);}}]),x);function x(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,x),(n=function(e,t){return !t||"object"!==r(t)&&"function"!=typeof t?s(e):t}(this,o(x).call(this,e,t))).type="venn",n.vennData=null,y._.extend(!0,s(n),(0, y.getDefaultProps)(x.defaultProps()),e),n._dataCircleLen=0,n._dataLabelLen=0,n._dataPathLen=0,n.init(),n}function k(t,n){var e,l=[];for(e=0;e<t.length;++e){var a=t[e];l.push({x:a.x,y:a.y}),l.push({x:a.x+a.radius/2,y:a.y}),l.push({x:a.x-a.radius/2,y:a.y}),l.push({x:a.x,y:a.y+a.radius/2}),l.push({x:a.x,y:a.y-a.radius/2});}var i=l[0],r=m(l[0],t,n);for(e=1;e<l.length;++e){var o=m(l[e],t,n);r<=o&&(i=l[e],r=o);}var s=(0, f.nelderMead)(function(e){return -1*m({x:e[0],y:e[1]},t,n)},[i.x,i.y],{maxIterations:500,minErrorDelta:1e-10}).x,d={x:s[0],y:s[1]},u=!0;for(e=0;e<t.length;++e)if((0, v.distance)(d,t[e])>t[e].radius){u=!1;break}for(e=0;e<n.length;++e)if((0, v.distance)(d,n[e])<n[e].radius){u=!1;break}if(!u)if(1==t.length)d={x:t[0].x,y:t[0].y};else{var h={};(0, v.intersectionArea)(t,h),d=0===h.arcs.length?{x:0,y:-1e3,disjoint:!0}:1==h.arcs.length?{x:h.arcs[0].circle.x,y:h.arcs[0].circle.y}:n.length?k(t,[]):(0, v.getCenter)(h.arcs.map(function(e){return e.p1}));}return d}function m(e,t,n){var l,a,i=t[0].radius-(0, v.distance)(t[0],e);for(l=1;l<t.length;++l)(a=t[l].radius-(0, v.distance)(t[l],e))<=i&&(i=a);for(l=0;l<n.length;++l)(a=(0, v.distance)(n[l],e)-n[l].radius)<=i&&(i=a);return i}y.global.registerComponent(p,"graphs","venn"),e.default=p;});
	});

	unwrapExports(venn);

	var rebind = createCommonjsModule(function (module, exports) {
	!function(e,n){n(exports);}(0,function(e){function r(n,t,f){return function(){var e=f.apply(t,arguments);return e===t?n:e}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e,n){for(var t,f=1,i=arguments.length;++f<i;)e[t=arguments[f]]=r(e,n,n[t]);return e};});
	});

	unwrapExports(rebind);

	var arrays = createCommonjsModule(function (module, exports) {
	!function(e,n){n(exports);}(0,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={merge:function(e){for(var n,f,t,r=e.length,o=-1,i=0;++o<r;)i+=e[o].length;for(f=new Array(i);0<=--r;)for(n=(t=e[r]).length;0<=--n;)f[--i]=t[n];return f}};});
	});

	unwrapExports(arrays);

	var hierarchy = createCommonjsModule(function (module, exports) {
	!function(e,r){r(exports,rebind,arrays);}(void 0,function(e,r,n){Object.defineProperty(e,"__esModule",{value:!0});var u=l(r),t=l(n);function l(e){return e&&e.__esModule?e:{default:e}}function h(){var o=v,f=i,c=a;function d(e){var r,n=[e],u=[];for(e.depth=0;null!=(r=n.pop());)if(u.push(r),(l=f.call(d,r,r.depth))&&(t=l.length)){for(var t,l,i;0<=--t;)n.push(i=l[t]),i.parent=r,i.depth=r.depth+1;if(c){var a=+c.call(d,r,r.depth);a&&!isNaN(a)&&(r._value=a);}c&&(r.value=0),r.children=l;}else c&&(r.value=+c.call(d,r,r.depth)||0),delete r.children;return h.layout_hierarchyVisitAfter(e,function(e){var r,n;o&&(r=e.children)&&r.sort(o),c&&(n=e.parent)&&(n.value+=e.value),e._value&&e._value>e.value&&(e.value=e._value),delete e._value;}),u}return d.sort=function(e){return arguments.length?(o=e,d):o},d.children=function(e){return arguments.length?(f=e,d):f},d.value=function(e){return arguments.length?(c=e,d):c},d.revalue=function(e){return c&&(h.layout_hierarchyVisitBefore(e,function(e){e.children&&(e.value=0);}),h.layout_hierarchyVisitAfter(e,function(e){var r;e.children||(e.value=+c.call(d,e,e.depth)||0),(r=e.parent)&&(r.value+=e.value),e._value&&e._value>e.value&&(e.value=e._value),delete e._value;})),e},d}function i(e){return e.children}function a(e){return e.value}function v(e,r){return r.value-e.value}function o(e){return t.default.merge(e.map(function(r){return (r.children||[]).map(function(e){return {source:r,target:e}})}))}h.layout_hierarchyRebind=function(e,r){return (0, u.default)(e,r,"sort","children","value"),(e.nodes=e).links=o,e},h.layout_hierarchyVisitBefore=function(e,r){for(var n=[e];null!=(e=n.pop());)if(r(e),(t=e.children)&&(u=t.length))for(var u,t;0<=--u;)n.push(t[u]);},h.layout_hierarchyVisitAfter=function(e,r){for(var n=[e],u=[];null!=(e=n.pop());)if(u.push(e),(l=e.children)&&(t=l.length))for(var t,l,i=-1;++i<t;)n.push(l[i]);for(;null!=(e=u.pop());)r(e);},e.default=h;});
	});

	unwrapExports(hierarchy);

	var partition = createCommonjsModule(function (module, exports) {
	!function(e,r){r(exports,hierarchy);}(void 0,function(e,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){var t=(0, u.default)(),i=[1,1];function r(e,r){var n=t.call(this,e,r);return function e(r,n,t,i){var u=r.children;if(r.x=n,r.y=r.depth*i,r.dx=t,r.dy=i,u&&(f=u.length)){var f,a,d,l=-1;for(t=r.value?t/r.value:0;++l<f;)e(a=u[l],n,d=a.value*t,i),n+=d;}}(n[0],0,i[0],i[1]/function e(r){var n=r.children,t=0;if(n&&(i=n.length))for(var i,u=-1;++u<i;)t=Math.max(t,e(n[u]));return 1+t}(n[0])),n}return r.size=function(e){return arguments.length?(i=e,r):i},u.default.layout_hierarchyRebind(r,t)};var n,u=(n=r)&&n.__esModule?n:{default:n};});
	});

	unwrapExports(partition);

	var sunburst = createCommonjsModule(function (module, exports) {
	!function(t,e){e(exports,index_cjs$1,graphs,partition,index_cjs);}(void 0,function(t,e,n,a,s){Object.defineProperty(t,"__esModule",{value:!0});var i=u(e),o=u(n),r=u(a);function u(t){return t&&t.__esModule?t:{default:t}}function l(t){return (l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t){return (f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function c(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function d(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a);}}function h(t,e,n){return e&&d(t.prototype,e),n&&d(t,n),t}function p(t,e){return (p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var y=i.default.Shapes.Sector,v=(function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e);}(_,o.default),h(_,null,[{key:"defaultProps",value:function(){return {keyField:{detail:"key字段",default:"name"},valueField:{detail:"value字段",default:"value"},parentField:{detail:"parent字段",default:"parent"},node:{detail:"单个节点图形设置",propertys:{strokeStyle:{detail:"描边色",default:"#ffffff"},lineWidth:{detail:"描边线宽",default:1},strokeAlpha:{detail:"描边边框透明度",default:1},fillStyle:{detail:"背景色",default:null},fillAlpha:{detail:"背景透明度",default:1},blurAlpha:{detail:"非激活状态透明度",documentation:"比如选中其中一项，其他不先关的要降低透明度",default:.4}}}}}}]),h(_,[{key:"init",value:function(){}},{key:"draw",value:function(t){t=t||{},s._.extend(!0,this,t),this.data=this._trimGraphs(),this.dataGroup=this._getDataGroupOfDepth(),this._widget(),this.sprite.context.x=this.width/2+this.origin.x,this.sprite.context.y=this.height/2+this.origin.y,this.fire("complete");}},{key:"_trimGraphs",value:function(){var e=this,t=parseInt(Math.min(this.width,this.height)/2),n=(0, r.default)().sort(null).size([2*Math.PI,t*t]).value(function(t){return t[e.valueField]}),a=this._tansTreeData();return this.data=n(a,0),this.data}},{key:"_getDataGroupOfDepth",value:function(){var e={};s._.each(this.data,function(t){e[t.depth]=[];}),s._.each(this.data,function(t){e[t.depth].push(t);});var t=[];for(var n in e)t.push(e[n]);return t}},{key:"_tansTreeData",value:function(){var t=this.dataFrame,e={},l=t.getFieldData(this.keyField),f=t.getFieldData(this.valueField),c=t.getFieldData(this.parentField);return function a(i,t,e){for(var n=t?t.name:void 0,o=e||0;o<c.length;o++){var r=c[o];if(r||0===r||(r=void 0),n===r){i.name=l[o],i.iNode=o;var u=f[o];!u&&0!==u||(i.value=u),s._.each(c,function(t,e){if(t===i.name){i.children||(i.children=[]);var n={};a(n,i,e),i.children.push(n);}});break}}}(e),e}},{key:"_widget",value:function(){var u=this;s._.each(this.dataGroup,function(o,r){s._.each(o,function(e,t){if(e.depth){var n=Math.sqrt(e.y+e.dy),a={r0:Math.sqrt(e.y),r:Math.sqrt(e.y)+2,startAngle:180*e.x/Math.PI,endAngle:180*(e.x+e.dx)/Math.PI,fillStyle:e.color||u.app.getTheme(e.iNode),strokeStyle:u.node.strokeStyle,lineWidth:u.node.lineWidth,globalAlpha:0},i=new y({id:"sector_"+r+"_"+t,context:a});(i.layoutData=e).sector=i,e.group=o,u.sprite.addChild(i),i.hover(function(t){u._focus(e,o);},function(t){u._unfocus(e,o);}),i.on(s.event.types.get(),function(t){t.eventInfo={trigger:u.node,iNode:e.iNode},u.app.fire(t.type,t);}),r<=1?(i.context.r=n,i.context.globalAlpha=1):setTimeout(function(){i.context&&(i.context.globalAlpha=1,i.animate({r:n},{duration:350}));},350*(r-1));}});});}},{key:"getNodesAt",value:function(e){var t=[];if(void 0!==e){var n=s._.find(this.data,function(t){return t.iNode==e});n.type="sunburst",n&&t.push(n);}return t}},{key:"_focus",value:function(e,t){var n=this;s._.each(t,function(t){t!==e&&(t.sector.context.globalAlpha=n.node.blurAlpha,n._focusChildren(t,function(t){t.sector.context.globalAlpha=n.node.blurAlpha;}));}),n._focusParent(e);}},{key:"_unfocus",value:function(){s._.each(this.data,function(t){t.sector&&(t.sector.context.globalAlpha=1);});}},{key:"_focusChildren",value:function(t,e){var n=this;t.children&&t.children.length&&s._.each(t.children,function(t){e(t),n._focusChildren(t,e);});}},{key:"_focusParent",value:function(e){var n=this;e.parent&&e.parent.sector&&e.parent.group&&s._.each(e.parent.group,function(t){t===e.parent?(t.sector.context.globalAlpha=1,n._focusParent(e.parent)):t.sector.context.globalAlpha=n.node.blurAlpha;});}}]),_);function _(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,_),(n=function(t,e){return !e||"object"!==l(e)&&"function"!=typeof e?c(t):e}(this,f(_).call(this,t,e))).type="sunburst",s._.extend(!0,c(n),(0, s.getDefaultProps)(_.defaultProps()),t),n.data=[],n.dataGroup=[],n.init(),n}s.global.registerComponent(v,"graphs","sunburst"),t.default=v;});
	});

	unwrapExports(sunburst);

	var sankey = createCommonjsModule(function (module, exports) {
	!function(n,t){t(exports,index_cjs);}(void 0,function(n,L){Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){var t={},e=24,i=8,f=[1,1],c=[],s=function(n,t){return n.y-t.y},a=[];function l(n,t){var r,e=0,u=n.length,o=-1;if(1===arguments.length)for(;++o<u;)isNaN(r=+n[o])||(e+=r);else for(;++o<u;)isNaN(r=+t.call(n,n[o],o))||(e+=r);return e}function h(n,t){var r,e,u=-1,o=n.length;if(1===arguments.length){for(;++u<o&&(null==(r=n[u])||r!=r);)r=void 0;for(;++u<o;)null!=(e=n[u])&&e<r&&(r=e);}else{for(;++u<o&&(null==(r=t.call(n,n[u],u))||r!=r);)r=void 0;for(;++u<o;)null!=(e=t.call(n,n[u],u))&&e<r&&(r=e);}return r}t.nodeWidth=function(n){return arguments.length?(e=+n,t):e},t.nodeSort=function(n){return arguments.length?(s=n,t):s},t.nodePadding=function(n){return arguments.length?(i=+n,t):i},t.nodes=function(n){return arguments.length?(c=n,t):c},t.links=function(n){return arguments.length?(a=n,t):a},t.size=function(n){return arguments.length?(f=n,t):f},t.layout=function(n){return c.forEach(function(n){n.sourceLinks=[],n.targetLinks=[];}),a.forEach(function(n){var t=n.source,r=n.target;"number"==typeof t&&(t=n.source=c[n.source]),"number"==typeof r&&(r=n.target=c[n.target]),t.sourceLinks.push(n),r.targetLinks.push(n);}),c.forEach(function(n){n.value=Math.max(l(n.sourceLinks,_),l(n.targetLinks,_));}),function(){var t,n=c,r=0;for(;n.length;)t=[],n.forEach(function(n){n.x=r,n.dx=e,n.sourceLinks.forEach(function(n){t.indexOf(n.target)<0&&t.push(n.target);});}),n=t,++r;(function(t){c.forEach(function(n){n.sourceLinks.length||(n.x=t-1);});})(r),function(t){c.forEach(function(n){n.x*=t;});}((f[0]-e)/(r-1));}(),function(n){var t=v().key(function(n){return n.x}).sortKeys(p).entries(c).map(function(n){return n.values});(function(){var r=h(t,function(n){return (f[1]-(n.length-1)*i)/l(n,_)});t.forEach(function(n){n.forEach(function(n,t){n.y=t,n.dy=n.value*r;});}),a.forEach(function(n){n.dy=n.value*r;});})(),o();for(var r=1;0<n;--n)u(r*=.99),o(),e(r),o();function e(r){function e(n){return E(n.source)*n.value}t.forEach(function(n,t){n.forEach(function(n){if(n.targetLinks.length){var t=l(n.targetLinks,e)/l(n.targetLinks,_);n.y+=(t-E(n))*r;}});});}function u(r){function e(n){return E(n.target)*n.value}t.slice().reverse().forEach(function(n){n.forEach(function(n){if(n.sourceLinks.length){var t=l(n.sourceLinks,e)/l(n.sourceLinks,_);n.y+=(t-E(n))*r;}});});}function o(){t.forEach(function(n){var t,r,e,u=0,o=n.length;for(s&&n.sort(s),e=0;e<o;++e)0<(r=u-(t=n[e]).y)&&(t.y+=r),u=t.y+t.dy+i;if(0<(r=u-i-f[1]))for(u=t.y-=r,e=o-2;0<=e;--e)0<(r=(t=n[e]).y+t.dy+i-u)&&(t.y-=r),u=t.y;});}}(n),k(),t},t.relayout=function(){return k(),t},t.link=function(){var a=.5;function t(n){var t=n.source.x+n.source.dx,r=n.target.x,e=function(t,r){return t=+t,r=+r,function(n){return t*(1-n)+r*n}}(t,r),u=e(a),o=e(1-a),i=n.source.y+n.sy,f=n.target.y+n.ty,c=n.dy;c<1&&(c=1);var s="M"+t+","+i+"C"+u+","+i+" "+o+","+f+" "+r+","+f;return s+="v"+c,s+="C"+o+","+(f+c)+" "+u+","+(i+c)+" "+t+","+(i+c),s+="v"+-c+"z"}return t.curvature=function(n){return arguments.length?(a=+n,t):a},t};var v=function(){var l,h,v={},y=[],t=[];function g(r,n,e){if(e>=y.length)return h?h.call(v,n):l?n.sort(l):n;for(var t,u,o,i,f=-1,c=n.length,s=y[e++],a=new d;++f<c;)(i=a.get(t=s(u=n[f])))?i.push(u):a.set(t,[u]);return o=r?(u=r(),function(n,t){u.set(n,g(r,t,e));}):(u={},function(n,t){u[n]=g(r,t,e);}),a.forEach(o),u}return v.map=function(n,t){return g(t,n,0)},v.entries=function(n){return function r(n,e){if(e>=y.length)return n;var u=[],o=t[e++];return n.forEach(function(n,t){u.push({key:n,values:r(t,e)});}),o?u.sort(function(n,t){return o(n.key,t.key)}):u}(g(r,n,0),0)},v.key=function(n){return y.push(n),v},v.sortKeys=function(n){return t[y.length-1]=n,v},v.sortValues=function(n){return l=n,v},v.rollup=function(n){return h=n,v},v},r=function(n,t){var r=new d;if(n instanceof d)n.forEach(function(n,t){r.set(n,t);});else if(Array.isArray(n)){var e,u=-1,o=n.length;if(1===arguments.length)for(;++u<o;)r.set(u,n[u]);else for(;++u<o;)r.set(t.call(n,e=n[u],u),e);}else for(var i in n)r.set(i,n[i]);return r};function d(){this._=Object.create(null);}var u="__proto__",o="\0";function y(n){return (n+="")===u||n[0]===o?o+n:n}function g(n){return (n+="")[0]===o?n.slice(1):n}function p(n,t){return n<t?-1:t<n?1:t<=n?0:NaN}function k(){function t(n,t){return n.source.y-t.source.y}function r(n,t){return n.target.y-t.target.y}c.forEach(function(n){n.sourceLinks.sort(r),n.targetLinks.sort(t);}),c.forEach(function(n){var t=0,r=0;n.sourceLinks.forEach(function(n){n.sy=t,t+=n.dy;}),n.targetLinks.forEach(function(n){n.ty=r,r+=n.dy;});});}function E(n){return n.y+n.dy/2}function _(n){return n.value}return function(n,t){if(Object.defineProperty)for(var r in t)Object.defineProperty(n.prototype,r,{value:t[r],enumerable:!1});else L._.extend(n.prototype,t);}(d,{has:function(n){return y(n)in this._},get:function(n){return this._[y(n)]},set:function(n,t){return this._[y(n)]=t},remove:function(n){return (n=y(n))in this._&&delete this._[n]},keys:function(){var n=[];for(var t in this._)n.push(g(t));return n},values:function(){var n=[];for(var t in this._)n.push(this._[t]);return n},entries:function(){var n=[];for(var t in this._)n.push({key:g(t),value:this._[t]});return n},size:function(){var n=0;for(var t in this._)++n;return n},empty:function(){for(var n in this._)return !1;return !0},forEach:function(n){for(var t in this._)n.call(this,g(t),this._[t]);}}),t};});
	});

	unwrapExports(sankey);

	var sankey$1 = createCommonjsModule(function (module, exports) {
	!function(e,t){t(exports,index_cjs$1,graphs,sankey,index_cjs);}(void 0,function(e,t,n,i,s){Object.defineProperty(e,"__esModule",{value:!0});var r=l(t),a=l(n),u=l(i);function l(e){return e&&e.__esModule?e:{default:e}}function o(e){return (o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e){return (d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i);}}function h(e,t,n){return t&&p(e.prototype,t),n&&p(e,n),e}function c(e,t){return (c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y=r.default.Shapes.Path,v=r.default.Shapes.Rect,_=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t);}(g,a.default),h(g,null,[{key:"defaultProps",value:function(){return {keyField:{detail:"key字段",default:null},valueField:{detail:"value字段",default:"value"},parentField:{detail:"parent字段",default:null},node:{detail:"node",propertys:{width:{detail:"节点宽",default:18},padding:{detail:"节点间距",default:10},sort:{detail:"节点排序字段",default:function(e,t){return e.y-t.y}},fillStyle:{detail:"节点背景色",default:null}}},line:{detail:"线设置",propertys:{strokeStyle:{detail:"线颜色",default:"blue"},alpha:{detail:"线透明度",default:.3},focus:{detail:"图形的hover设置",propertys:{enabled:{detail:"是否开启",default:!0}}}}},label:{detail:"文本设置",propertys:{fontColor:{detail:"文本颜色",default:"#666666"},fontSize:{detail:"文本字体大小",default:12},textAlign:{detail:"水平对齐方式",default:"left"},verticalAlign:{detail:"垂直对齐方式",default:"middle"},format:{detail:"文本格式函数",default:null}}}}}}]),h(g,[{key:"init",value:function(){this._links=new r.default.Display.Sprite,this._nodes=new r.default.Display.Sprite,this._labels=new r.default.Display.Sprite,this.sprite.addChild(this._links),this.sprite.addChild(this._nodes),this.sprite.addChild(this._labels);}},{key:"draw",value:function(e){e=e||{},s._.extend(!0,this,e),this.data=this._trimGraphs(),this._widget(),this.sprite.context.x=this.origin.x,this.sprite.context.y=this.origin.y,this.fire("complete");}},{key:"_trimGraphs",value:function(){var i=this,a=[],l=[],e=i.dataFrame.getFieldData(i.keyField),o=i.dataFrame.getFieldData(i.valueField),r=i.dataFrame.getFieldData(i.parentField),d={};return s._.each(e,function(e,t){var n=[];i.parentField&&n.push(r[t]),n=n.concat(e.split(/[|]/)),s._.each(n,function(e){void 0===d[e]&&(d[e]=a.length,a.push({name:e}));});}),s._.each(e,function(e,t){var n=[];i.parentField&&n.push(r[t]),2==(n=n.concat(e.split(/[|]/))).length&&l.push({source:d[n[0]],target:d[n[1]],value:o[t]});}),(0, u.default)().nodeWidth(this.node.width).nodePadding(this.node.padding).nodeSort(this.node.sort).size([this.width,this.height]).nodes(a).links(l).layout(16)}},{key:"_widget",value:function(){this._drawNodes(),this._drawLinks(),this._drawLabels();}},{key:"_getColor",value:function(e,t,n){var i=e;return s._.isArray(i)&&(i=i[n]),s._.isFunction(i)&&(i=i(t)),i=i||this.app.getTheme(n)}},{key:"_drawNodes",value:function(){var e=this.data.nodes(),a=this;s._.each(e,function(e,t){var n=a._getColor(a.node.fillStyle,e,t),i=new v({xyToInt:!1,context:{x:e.x,y:e.y,width:a.data.nodeWidth(),height:Math.max(e.dy,1),fillStyle:n}});i.data=e,a._nodes.addChild(i);});}},{key:"_drawLinks",value:function(){var e=this.data.links(),l=this;s._.each(e,function(e,t){var n=l._getColor(l.line.strokeStyle,e,t),i=l.data.link()(e),a=new y({xyToInt:!1,context:{path:i,fillStyle:n,globalAlpha:l.line.alpha,cursor:"pointer"}});a.__glpha=l.line.alpha,a.link=e,a.on(s.event.types.get(),function(e){l.line.focus.enabled&&("mouseover"==e.type&&(this.__glpha+=.1),"mouseout"==e.type&&(this.__glpha-=.1));var t=this.link;t.type="sankey",e.eventInfo={trigger:l.node,title:t.source.name+" --<span style='position:relative;top:-0.5px;font-size:16px;left:-3px;'>></span> "+t.target.name,nodes:[t]},l.app.fire(e.type,e);}),l._links.addChild(a);});}},{key:"_drawLabels",value:function(){var e=this.data.nodes(),o=this;s._.each(e,function(e){var t=o.label.textAlign,n=e.x+o.data.nodeWidth()+4,i=e.y+Math.max(e.dy/2,1),a=o.label.format?o.label.format(e.name,e):e.name,l=new r.default.Display.Text(a,{context:{x:n,y:i,fillStyle:o.label.fontColor,fontSize:o.label.fontSize,textAlign:t,textBaseline:o.label.verticalAlign}});o._labels.addChild(l),l.getTextWidth()+n>o.width&&(l.context.x=e.x-4,l.context.textAlign="right");});}}]),g);function g(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,g),(n=function(e,t){return !t||"object"!==o(t)&&"function"!=typeof t?f(e):t}(this,d(g).call(this,e,t))).type="sankey",s._.extend(!0,f(n),(0, s.getDefaultProps)(g.defaultProps()),e),n.init(),n}s.global.registerComponent(_,"graphs","sankey"),e.default=_;});
	});

	unwrapExports(sankey$1);

	var progress = createCommonjsModule(function (module, exports) {
	!function(t,e){e(exports,index_cjs$1,graphs,index_cjs);}(void 0,function(t,e,l,b){Object.defineProperty(t,"__esModule",{value:!0});var h=n(e);function n(t){return t&&t.__esModule?t:{default:t}}function i(t){return (i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t){return (a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function o(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function r(t,e){for(var l=0;l<e.length;l++){var n=e[l];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n);}}function d(t,e,l){return e&&r(t.prototype,e),l&&r(t,l),t}function u(t,e){return (u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var f=(function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e);}(s,n(l).default),d(s,null,[{key:"defaultProps",value:function(){return {node:{detail:"进度条设置",propertys:{width:{detail:"进度条的宽度",default:20},radius:{detail:"进度条两端的圆角半径",default:10},fillStyle:{detail:"进度条的填充色",documentation:"可以是单个颜色，也可以是数组，也可以是一个函数,也可以是个lineargradient",default:null}}},label:{detail:"进度值文本",propertys:{enabled:{detail:"是否启用label",default:"true"},unit:{detail:"单位值，默认%",default:"%"},unitColor:{detail:"单位值的颜色",default:null},unitFontSize:{detail:"单位值的大小",default:14},fontColor:{detail:"label颜色",default:null},fontSize:{detail:"label文本大小",default:26},fixNum:{detail:"toFixed的位数",default:2},format:{detail:"label格式化处理函数",default:function(t){return t.toFixed(this.label.fixNum)}},lineWidth:{detail:"label文本描边线宽",default:null},strokeStyle:{detail:"label描边颜色",default:null},rotation:{detail:"label旋转角度",default:0},textAlign:{detail:"label textAlign",default:"center",values:["left","center","right"]},verticalAlign:{detail:"label verticalAlign",default:"middle",values:["top","middle","bottom"]},position:{detail:"label位置",default:"origin"},offsetX:{detail:"label在x方向的偏移量",default:0},offsetY:{detail:"label在y方向的偏移量",default:0}}},bgEnabled:{detail:"是否开启背景",default:!0},bgColor:{detail:"进度条背景颜色",default:"#f7f7f7"},radius:{detail:"半径",default:null},allAngle:{detail:"总角度",documentation:"默认为null，则和坐标系同步",default:null},startAngle:{detail:"其实角度",documentation:"默认为null，则和坐标系同步",default:null}}}}]),d(s,[{key:"init",value:function(){}},{key:"draw",value:function(t){t=t||{};var e=this;b._.extend(!0,this,t),e.grow(function(t){e.data=e._trimGraphs(t),e._widget();}),this.sprite.context.x=this.origin.x,this.sprite.context.y=this.origin.y;}},{key:"_trimGraphs",value:function(d){var u=this;null==d&&(d=1);var t=this.app.getComponent({name:"coord"});this.enabledField=t.filterEnabledFields(this.field);var f=u.startAngle||t.startAngle,s=u.allAngle||t.allAngle;startAngle,allAngle,this.bgNodeData=this._getNodeData(f,s),this.bgNodeData.fillStyle=this._getStyle(this.bgNodeData,this.bgColor);var e={};return b._.each(this.enabledField,function(o){var t=u.dataFrame.getFieldData(o),r=[];b._.each(t,function(t,e){t*=d;var l=r.slice(-1)[0],n=l?l.endAngle:f,i=s*(t/100),a=u._getNodeData(n,i,o,t,e);a.fillStyle=u._getStyle(a,u.node.fillStyle),r.push(a);}),e[o]=r;}),e}},{key:"_getNodeData",value:function(t,e,l,n,i){var a=this,o=this.app.getComponent({name:"coord"}),r=t+e/2,d=t+e,u=Math.PI*t/180,f=Math.PI*r/180,s=Math.PI*d/180,c=a.radius||o.radius,g=c-a.node.width,p={field:l,value:n,text:n,iNode:i,allAngle:e,startAngle:t,middleAngle:r,endAngle:d,startRadian:u,middleRadian:f,endRadian:s,outRadius:c,innerRadius:g,startOutPoint:o.getPointInRadianOfR(u,c),middleOutPoint:o.getPointInRadianOfR(f,c),endOutPoint:o.getPointInRadianOfR(s,c),startInnerPoint:o.getPointInRadianOfR(u,g),middleInnerPoint:o.getPointInRadianOfR(f,g),endInnerPoint:o.getPointInRadianOfR(s,g),rowData:a.dataFrame.getRowDataAt(i),fillStyle:null};return l&&a.label.format&&b._.isFunction(a.label.format)&&(p.text=a.label.format.apply(this,[n,p])),p}},{key:"_widget",value:function(){var p=this;if(p.bgEnabled){var t=p._getPathStr(this.bgNodeData);p._bgPathElement?p._bgPathElement.context.path=t:(p._bgPathElement=new h.default.Shapes.Path({context:{path:t}}),p.sprite.addChild(p._bgPathElement)),p._bgPathElement.context.fillStyle=this.bgNodeData.fillStyle;}b._.each(this.data,function(t){b._.each(t,function(t,e){var l=p._getPathStr(t),n="progress_bar_"+t.field+"_"+e,i=p.sprite.getChildById(n);if(i?i.context.path=l:(i=new h.default.Shapes.Path({id:n,context:{path:l}}),p.sprite.addChild(i)),i.context.fillStyle=t.fillStyle,p.label.enabled){var a="progress_label_"+t.field+"_sprite_"+e,o=p.sprite.getChildById(a);o||(o=new h.default.Display.Sprite({id:a}),p.sprite.addChild(o)),o.context.x=p.label.offsetX-6,o.context.y=p.label.offsetY;var r={fillStyle:p.label.fontColor||t.fillStyle,fontSize:p.label.fontSize,lineWidth:p.label.lineWidth,strokeStyle:p.label.strokeStyle,textAlign:p.label.textAlign,textBaseline:p.label.verticalAlign,rotation:p.label.rotation},d="progress_label_"+t.field+"_"+e;if(u=o.getChildById(d))u.resetText(t.text),b._.extend(u.context,r);else{var u=new h.default.Display.Text(t.text,{id:d,context:r});o.addChild(u);}var f="progress_label_"+t.field+"_symbol_"+e,s=o.getChildById(f),c={x:u.getTextWidth()/2+2,y:3,fillStyle:p.label.unitColor||p.label.fontColor||t.fillStyle,fontSize:p.label.unitFontSize,textAlign:"left",textBaseline:p.label.verticalAlign};if(s)b._.extend(s.context,c);else{var g=p.label.unit;s=new h.default.Display.Text(g,{id:f,context:c}),o.addChild(s);}}});});}},{key:"_getPathStr",value:function(t){var e="M"+t.startOutPoint.x+" "+t.startOutPoint.y;return e+="A"+t.outRadius+" "+t.outRadius+" 0 0 1 "+t.middleOutPoint.x+" "+t.middleOutPoint.y,e+="A"+t.outRadius+" "+t.outRadius+" 0 0 1 "+t.endOutPoint.x+" "+t.endOutPoint.y,t.allAngle,e+="L"+t.endInnerPoint.x+" "+t.endInnerPoint.y,e+="A"+t.innerRadius+" "+t.innerRadius+" 0 0 0 "+t.middleInnerPoint.x+" "+t.middleInnerPoint.y,e+="A"+t.innerRadius+" "+t.innerRadius+" 0 0 0 "+t.startInnerPoint.x+" "+t.startInnerPoint.y,e+="Z"}},{key:"_getStyle",value:function(t,e,l){var n=this.app.getComponent({name:"coord"}).getFieldMapOf(t.field);if(l=l||(n?n.color:"#171717"),e&&(b._.isString(e)&&(i=e),b._.isArray(e)&&(i=e[t.iNode]),b._.isFunction(e)&&(i=e.apply(this,arguments)),e&&e.lineargradient)){var i=this.ctx.createLinearGradient(t.startOutPoint.x,t.startOutPoint.y,t.endOutPoint.x,t.endOutPoint.y);b._.each(e.lineargradient,function(t,e){i.addColorStop(t.position,t.color);});}return i=i||l}}]),s);function s(t,e){var l;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),(l=function(t,e){return !e||"object"!==i(e)&&"function"!=typeof e?o(t):e}(this,a(s).call(this,t,e))).type="progress",b._.extend(!0,o(l),(0, b.getDefaultProps)(s.defaultProps()),t),l.bgNodeData=null,l.init(),l}b.global.registerComponent(f,"graphs","progress"),t.default=f;});
	});

	unwrapExports(progress);

	var data = createCommonjsModule(function (module, exports) {
	!function(e,n){n(exports,index_cjs);}(void 0,function(e,_){Object.defineProperty(e,"__esModule",{value:!0}),e.arrayToTreeJsonForRelation=e.jsonToArrayForRelation=e.checkDataIsJson=void 0;var v="children";function o(e,n,r){v=r;return !!_._.isArray(e)&&(_._.every(e,function(e){return _._.isObject(e)})&&_._.every(e,function(e){return !_._.isArray(e[n])}),_._.some(e,function(e){return v in e}))}e.checkDataIsJson=o,e.jsonToArrayForRelation=function(e,n,r){v=r;var a=[],c=new WeakMap,f=n.field||"__key__",u=n.node&&n.node.content&&n.node.content.field;if(!o(e,f,v))return console.error("该数据不能正确绘制，请提供数组对象形式的数据！"),a;var s=[],d=0,l=void 0;_._.each(e,function(e){s.push(e);});for(var i=function(){l[f]||(l[f]=d);var e=l[v];e&&(_._.each(e,function(e){c.set(e,{parentIndex:d,parentNode:l});}),s=s.concat(e.reverse()));var r={};_._.each(l,function(e,n){n!==v&&(r[n]=e);}),a.push(r);var n=c.get(l);if(n){var i=n.parentIndex,o=n.parentNode,t={};t.key=[i,d].join(","),u&&(t[u]=[o[u],l[u]].join("_")),a.push(t);}d++;};l=s.pop();)i();return a},e.arrayToTreeJsonForRelation=function(e,r){var t={},a={};_._.each(e,function(e){var n=e[r.field];1==n.split(",").length?t[n]=e:a[n]=e;});var n=[];return _._.each(t,function(e,r){var i=!0;_._.each(a,function(e,n){if(n.split(",")[1]==r)return i=!1}),i&&(n.push(e),e.__inRelation=!0);}),function n(e){_._.each(e,function(i,e){if(!i.__cycle){var o=i[r.field];_._.each(a,function(e,n){if(n.split(",")[0]==o){var r=t[n.split(",")[1]];r&&(i.children||(i.children=[]),i.children.push(r),r.__inRelation&&(r.__cycle=!0));}}),i.children&&i.children.length&&n(i.children);}});}(n),n};});
	});

	unwrapExports(data);

	var relation = createCommonjsModule(function (module, exports) {
	!function(t,e){e(exports,index_cjs$1,graphs,index_cjs,data);}(void 0,function(t,e,i,c,l){Object.defineProperty(t,"__esModule",{value:!0});var s=a(e),n=a(i);function a(t){return t&&t.__esModule?t:{default:t}}function r(t){return (r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t){return function(t){if(Array.isArray(t)){for(var e=0,i=new Array(t.length);e<t.length;e++)i[e]=t[e];return i}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function d(t){return (d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n);}}function p(t,e,i){return e&&u(t.prototype,e),i&&u(t,i),t}function y(t,e){return (y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var f=s.default.Shapes.Rect,g=s.default.Shapes.Path,x=s.default.Shapes.Arrow,m=(s.default.Shapes.Circle,function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&y(t,e);}(v,n.default),p(v,null,[{key:"defaultProps",value:function(){return {field:{detail:"key字段设置",documentation:"",default:null},childrenField:{detail:"树结构数据的关联字段",documentation:"如果是树结构的关联数据，不是行列式，那么就通过这个字段来建立父子关系",default:"children"},rankdir:{detail:"布局方向",default:null},node:{detail:"单个节点的配置",propertys:{shapeType:{detail:"节点图形，目前只支持rect",default:"rect"},maxWidth:{detail:"节点最大的width",default:200},width:{detail:"内容的width",default:null},height:{detail:"内容的height",default:null},radius:{detail:"圆角角度",default:6},fillStyle:{detail:"节点背景色",default:"#ffffff"},strokeStyle:{detail:"描边颜色",default:"#e5e5e5"},padding:{detail:"node节点容器到内容的边距",default:10},content:{detail:"节点内容配置",propertys:{field:{detail:"内容字段",documentation:"默认content字段",default:"content"},fontColor:{detail:"内容文本颜色",default:"#666"},format:{detail:"内容格式化处理函数",default:null},textAlign:{detail:"textAlign",default:"center"},textBaseline:{detail:"textBaseline",default:"middle"}}}}},line:{detail:"两个节点连线配置",propertys:{isTree:{detail:"是否树结构的连线",documentation:"非树结构启用该配置可能会有意想不到的惊喜，慎用",default:!1},inflectionRadius:{detail:"树状连线的拐点圆角半径",default:0},shapeType:{detail:"连线的图形样式 brokenLine or bezier",default:"bezier"},lineWidth:{detail:"线宽",default:1},strokeStyle:{detail:"连线的颜色",default:"#e5e5e5"},lineType:{detail:"连线样式（虚线等）",default:"solid"},arrow:{detail:"是否有箭头",default:!0}}},layout:{detail:"采用的布局引擎,比如dagre",default:"dagre"},layoutOpts:{detail:"布局引擎对应的配置,dagre详见dagre的官方wiki",propertys:{}},status:{detail:"一些开关配置",propertys:{transform:{detail:"是否启动拖拽缩放整个画布",propertys:{fitView:{detail:"自动缩放",default:""},enabled:{detail:"是否开启",default:!0},scale:{detail:"缩放值",default:1},scaleOrigin:{detail:"缩放原点",default:{x:0,y:0}}}}}}}}}]),p(v,[{key:"init",value:function(){this.initInduce(),this.nodesSp=new s.default.Display.Sprite({id:"nodesSp"}),this.edgesSp=new s.default.Display.Sprite({id:"edgesSp"}),this.graphsSp=new s.default.Display.Sprite({id:"graphsSp"}),this.graphsSp.addChild(this.edgesSp),this.graphsSp.addChild(this.nodesSp),this._grahsSpClone=new s.default.Display.Sprite({id:"graphsSp_clone"}),this.sprite.addChild(this.graphsSp),this.sprite.addChild(this._grahsSpClone),window.gsp=this.graphsSp;}},{key:"initInduce",value:function(){var a=this;this.induce=new f({id:"induce",context:{width:0,height:0,fillStyle:"#000000",globalAlpha:0}}),this.sprite.addChild(this.induce);var t=!1,e=null,i=a.app.canvax.domView.style.cursor,r=null,o=0;this.induce.on(c.event.types.get(),function(n){a.status.transform.enabled&&("mousedown"==n.type&&(a.induce.toFront(),t=!0,e=n.point,a.app.canvax.domView.style.cursor="move"),"mouseup"!=n.type&&"mouseout"!=n.type||(a.induce.toBack(),t=!1,e=null,a.app.canvax.domView.style.cursor=i),"mousemove"==n.type&&t&&(a.graphsSp.context.x+=n.point.x-e.x,a.graphsSp.context.y+=n.point.y-e.y,e=n.point),"wheel"==n.type&&(Math.abs(n.deltaY)>Math.abs(o)&&(o=n.deltaY),r=r||setTimeout(function(){var t=n.deltaY/30*.02;Math.abs(t)<.04&&(t=.04*Math.sign(t)),.08<Math.abs(t)&&(t=.08*Math.sign(t));var e=a.status.transform.scale+t;e<=.1&&(e=.1),1<=e&&(e=1);var i=n.target.localToGlobal(n.point);a.scale(e,i),r=null,o=0;},32),n.preventDefault()));});}},{key:"scale",value:function(){}},{key:"draw",value:function(t){t=t||{},c._.extend(!0,this,t),this.data=t.data||this._initData(),"dagre"==this.layout?this.dagreLayout(this.data):"tree"==this.layout?this.treeLayout(this.data):c._.isFunction(this.layout)&&this.layout(this.data),this.widget(),this.sprite.context.x=this.origin.x,this.sprite.context.y=this.origin.y,"autoZoom"==this.status.transform.fitView&&(this.sprite.context.scaleX=this.width/this.data.size.width,this.sprite.context.scaleY=this.height/this.data.size.height);var e=(this.width-this.data.size.width)/2;e<0&&(e=0),this.graphsSp.context.x=e,this._grahsSpClone.context.x=e;}},{key:"_initData",value:function(){var t={nodes:[],edges:[],size:{width:0,height:0}},e=this.app._data;(0, l.checkDataIsJson)(e,this.field,this.childrenField)?(this.jsonData=(0, l.jsonToArrayForRelation)(e,this,this.childrenField),this.dataFrame=this.app.dataFrame=(0, c.dataFrame)(this.jsonData)):"tree"==this.layout&&(this.jsonData=(0, l.arrayToTreeJsonForRelation)(this.app.dataFrame.jsonOrg,this));for(var i={},n=0;n<this.dataFrame.length;n++){var a=this.dataFrame.getRowDataAt(n),r=c._.flatten([(a[this.field]+"").split(",")]),o=this._getContent(a),s={type:"relation",iNode:n,rowData:a,key:1==r.length?r[0]:r,content:o,ctype:this._checkHtml(o)?"html":"canvas",element:null,width:null,height:null,x:null,y:null,shapeType:null,source:null,target:null};c._.extend(s,this._getElementAndSize(s)),1==r.length?(s.shapeType=this.getProp(this.node.shapeType,s),t.nodes.push(s),i[s.key]=s):(s.shapeType=this.getProp(this.line.shapeType,s),t.edges.push(s));}return c._.each(t.edges,function(t){var e=t.key;t.source=i[e[0]],t.target=i[e[1]];}),t}},{key:"dagreLayout",value:function(t){var e=c.global.layout.dagre,i=new e.graphlib.Graph;return i.setGraph(this.layoutOpts.graph),i.setDefaultEdgeLabel(function(){return {}}),c._.each(t.nodes,function(t){i.setNode(t.key,t);}),c._.each(t.edges,function(t){i.setEdge.apply(i,o(t.key).concat([t]));}),e.layout(i),t.size.width=i.graph().width,t.size.height=i.graph().height,t}},{key:"treeLayout",value:function(){var t=c.global.layout.tree().separation(function(t,e){return (t.width+e.width)/2+10}),e=t.nodes(this.jsonData[0]).reverse();t.links(e);}},{key:"widget",value:function(){var o=this;c._.each(this.data.edges,function(t){o.line.isTree&&o._setTreePoints(t);var e=o.getProp(o.line.lineWidth,t),i=o.getProp(o.line.strokeStyle,t),n=new g({context:{path:o._getPathStr(t,o.line.inflectionRadius),lineWidth:e,strokeStyle:i}}),a=t.points.slice(-2,-1)[0];if("bezier"==o.line.shapeType&&("TB"!=o.rankdir&&"BT"!=o.rankdir||(a.x+=(t.source.x-t.target.x)/20),"LR"!=o.rankdir&&"RL"!=o.rankdir||(a.y+=(t.source.y-t.target.y)/20)),o.edgesSp.addChild(n),o.line.arrow){var r=new x({context:{control:a,point:t.points.slice(-1)[0],strokeStyle:i}});o.edgesSp.addChild(r);}}),c._.each(this.data.nodes,function(e){var i=new f({context:{x:e.x-e.width/2,y:e.y-e.height/2,width:e.width,height:e.height,lineWidth:1,fillStyle:o.getProp(o.node.fillStyle,e),strokeStyle:o.getProp(o.node.strokeStyle,e),radius:c._.flatten([o.getProp(o.node.radius,e)])}});i.nodeData=e,o.nodesSp.addChild(i),i.on(c.event.types.get(),function(t){t.eventInfo={trigger:o.node,nodes:[this.nodeData]},o.app.fire(t.type,t);}),"canvas"==e.ctype&&(e.element.context.x=e.x-e.width/2,e.element.context.y=e.y-e.height/2,o.nodesSp.addChild(e.element)),"html"==e.ctype&&i.on("transform",function(){var t="undefined"!=typeof window?window.devicePixelRatio:1;e.element.style.transform="matrix("+i.worldTransform.clone().scale(1/t,1/t).toArray().join()+")",e.element.style.transformOrigin="left top",e.element.style.marginLeft=o.getProp(o.node.padding,e)*o.status.transform.scale+"px",e.element.style.marginTop=o.getProp(o.node.padding,e)*o.status.transform.scale+"px",e.element.style.visibility="visible";});}),this.induce.context.width=this.width,this.induce.context.height=this.height;}},{key:"_setTreePoints",value:function(t){var e=t.points;"TB"!=this.rankdir&&"BT"!=this.rankdir||(e[0]={x:t.source.x,y:t.source.y+("BT"==this.rankdir?-1:1)*t.source.height/2},e.splice(1,0,{x:t.source.x,y:e.slice(-2,-1)[0].y})),"LR"!=this.rankdir&&"RL"!=this.rankdir||(e[0]={x:t.source.x+("RL"==this.rankdir?-1:1)*t.source.width/2,y:t.source.y},e.splice(1,0,{x:e.slice(-2,-1)[0].x,y:t.source.y})),t.points=e;}},{key:"_getPathStr",value:function(t,h){var u=t.points,e=u[0],i=u.slice(-1)[0],p="M"+e.x+" "+e.y;return "bezier"==t.shapeType&&(3==u.length&&(p+=",Q"+u[1].x+" "+u[1].y+" "+i.x+" "+i.y),4==u.length&&(p+=",C"+u[1].x+" "+u[1].y+" "+u[2].x+" "+u[2].y+" "+i.x+" "+i.y)),"brokenLine"==t.shapeType&&c._.each(u,function(i,t){if(t)if(h&&t<u.length-1){var e=u[t-1],n=u[t+1],a=h,r=Math.max(Math.abs(e.x-i.x)/2,Math.abs(e.y-i.y)/2),o=Math.max(Math.abs(n.x-i.x)/2,Math.abs(n.y-i.y)/2);if(a=c._.min([a,r,o]),i.x==e.x&&i.y==e.y||i.x==n.x&&i.y==n.y||Math.atan2(i.y-e.y,i.x-e.x)==Math.atan2(n.y-i.y,n.x-i.x))return;var s=function(t){var e=Math.atan2(t.y-i.y,t.x-i.x);return {x:i.x+a*Math.cos(e),y:i.y+a*Math.sin(e)}},l=s(e),d=s(n);p+=",L"+l.x+" "+l.y+",Q"+i.x+" "+i.y+" "+d.x+" "+d.y;}else p+=",L"+i.x+" "+i.y;}),p}},{key:"_checkHtml",value:function(t){return /<[^>]+>/g.test(t)}},{key:"_getContent",value:function(t){var e;return this._isField(this.node.content.field)&&(e=t[this.node.content.field]),this.node.content.format&&c._.isFunction(this.node.content.format)&&(e=this.node.content.format.apply(this,[e,t])),e}},{key:"_isField",value:function(t){return ~this.dataFrame.fields.indexOf(t)}},{key:"_getElementAndSize",value:function(t){var e=t.ctype;return this._isField(e)&&(e=t.rowData[e]),"canvas"==(e=e||"canvas")?this._getEleAndsetCanvasSize(t):"html"==e?this._getEleAndsetHtmlSize(t):void 0}},{key:"_getEleAndsetCanvasSize",value:function(t){var e=this,i=t.content,n=t.rowData.width,a=t.rowData.height,r=new s.default.Display.Sprite({}),o=new s.default.Display.Text(i,{context:{fillStyle:e.getProp(e.node.content.fontColor,t),textAlign:e.getProp(e.node.content.textAlign,t),textBaseline:e.getProp(e.node.content.textBaseline,t)}});return n=n||o.getTextWidth()+e.getProp(e.node.padding,t)*e.status.transform.scale*2,a=a||o.getTextHeight()+e.getProp(e.node.padding,t)*e.status.transform.scale*2,r.addChild(o),r.context.width=parseInt(n),r.context.height=parseInt(a),o.context.x=parseInt(n/2),o.context.y=parseInt(a/2),{element:r,width:n,height:a}}},{key:"_getEleAndsetHtmlSize",value:function(t){var e=this,i=t.content,n=t.rowData.width,a=t.rowData.height,r=document.createElement("div");return r.className="chartx_relation_node",r.style.cssText+="; position:absolute;visibility:hidden;",r.style.cssText+="; color:"+e.getProp(e.node.content.fontColor,t)+";",r.style.cssText+="; text-align:"+e.getProp(e.node.content.textAlign,t)+";",r.style.cssText+="; vertical-align:"+e.getProp(e.node.content.textBaseline,t)+";",r.innerHTML=i,this.domContainer.appendChild(r),{element:r,width:n=n||r.offsetWidth+e.getProp(e.node.padding,t)*e.status.transform.scale*2,height:a=a||r.offsetHeight+e.getProp(e.node.padding,t)*e.status.transform.scale*2}}},{key:"getNodesAt",value:function(){}},{key:"getProp",value:function(t,e){var i=t;return this._isField(t)?i=e.rowData[t]:(c._.isArray(t)&&(i=t[e.iNode]),c._.isFunction(t)&&(i=t.apply(this,[e]))),i}}]),v);function v(t,e){var i;if(!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,v),(i=function(t,e){return !e||"object"!==r(e)&&"function"!=typeof e?h(t):e}(this,d(v).call(this,t,e))).type="relation",c._.extend(!0,h(i),(0, c.getDefaultProps)(v.defaultProps()),t),"dagre"===i.layout){var n={graph:{rankdir:"TB",nodesep:10,ranksep:10,edgesep:10,acyclicer:"greedy"},node:{},edge:{}};c._.extend(!0,n,i.layoutOpts),c._.extend(!0,i.layoutOpts,n),i.rankdir?i.layoutOpts.graph.rankdir=i.rankdir:i.rankdir=i.layoutOpts.graph.rankdir;}return i.domContainer=e.canvax.domView,i.induce=null,i.init(),i}c.global.registerComponent(m,"graphs","relation"),t.default=m;});
	});

	unwrapExports(relation);

	var dagre = createCommonjsModule(function (module, exports) {
	!function(e,t){t(module,exports);}(0,function(t,n){function h(e){return (h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(e){if("object"===(void 0===n?"undefined":h(n))&&void 0!==t)t.exports=e();else {("undefined"!=typeof window?window:"undefined"!=typeof commonjsGlobal?commonjsGlobal:"undefined"!=typeof self?self:this).dagre=e();}}(function(){return function a(i,s,u){function c(t,e){if(!s[t]){if(!i[t]){var n="function"==typeof commonjsRequire&&commonjsRequire;if(!e&&n)return n(t,!0);if(f)return f(t,!0);var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}var o=s[t]={exports:{}};i[t][0].call(o.exports,function(e){return c(i[t][1][e]||e)},o,o.exports,a,i,s,u);}return s[t].exports}for(var f="function"==typeof commonjsRequire&&commonjsRequire,e=0;e<u.length;e++)c(u[e]);return c}({1:[function(e,t,n){t.exports={graphlib:e("./lib/graphlib"),layout:e("./lib/layout"),debug:e("./lib/debug"),util:{time:e("./lib/util").time,notime:e("./lib/util").notime},version:e("./lib/version")};},{"./lib/debug":6,"./lib/graphlib":7,"./lib/layout":9,"./lib/util":29,"./lib/version":30}],2:[function(e,t,n){var i=e("./lodash"),r=e("./greedy-fas");t.exports={run:function(n){var e="greedy"===n.graph().acyclicer?r(n,function(t){return function(e){return t.edge(e).weight}}(n)):function(n){var r=[],o={},a={};return i.forEach(n.nodes(),function t(e){if(i.has(a,e))return;a[e]=!0;o[e]=!0;i.forEach(n.outEdges(e),function(e){i.has(o,e.w)?r.push(e):t(e.w);});delete o[e];}),r}(n);i.forEach(e,function(e){var t=n.edge(e);n.removeEdge(e),t.forwardName=e.name,t.reversed=!0,n.setEdge(e.w,e.v,t,i.uniqueId("rev"));});},undo:function(r){i.forEach(r.edges(),function(e){var t=r.edge(e);if(t.reversed){r.removeEdge(e);var n=t.forwardName;delete t.reversed,delete t.forwardName,r.setEdge(e.w,e.v,t,n);}});}};},{"./greedy-fas":8,"./lodash":10}],3:[function(e,t,n){var s=e("./lodash"),c=e("./util");function u(e,t,n,r,o,a){var i={width:0,height:0,rank:a,borderType:t},s=o[t][a-1],u=c.addDummyNode(e,"border",i,n);o[t][a]=u,e.setParent(u,r),s&&e.setEdge(s,u,{weight:1});}t.exports=function(i){s.forEach(i.children(),function e(t){var n=i.children(t),r=i.node(t);if(n.length&&s.forEach(n,e),s.has(r,"minRank")){r.borderLeft=[],r.borderRight=[];for(var o=r.minRank,a=r.maxRank+1;o<a;++o)u(i,"borderLeft","_bl",t,r,o),u(i,"borderRight","_br",t,r,o);}});};},{"./lodash":10,"./util":29}],4:[function(e,t,n){var r=e("./lodash");function o(t){r.forEach(t.nodes(),function(e){a(t.node(e));}),r.forEach(t.edges(),function(e){a(t.edge(e));});}function a(e){var t=e.width;e.width=e.height,e.height=t;}function i(e){e.y=-e.y;}function s(e){var t=e.x;e.x=e.y,e.y=t;}t.exports={adjust:function(e){var t=e.graph().rankdir.toLowerCase();"lr"!==t&&"rl"!==t||o(e);},undo:function(e){var t=e.graph().rankdir.toLowerCase();"bt"!==t&&"rl"!==t||function(n){r.forEach(n.nodes(),function(e){i(n.node(e));}),r.forEach(n.edges(),function(e){var t=n.edge(e);r.forEach(t.points,i),r.has(t,"y")&&i(t);});}(e);"lr"!==t&&"rl"!==t||(function(n){r.forEach(n.nodes(),function(e){s(n.node(e));}),r.forEach(n.edges(),function(e){var t=n.edge(e);r.forEach(t.points,s),r.has(t,"x")&&s(t);});}(e),o(e));}};},{"./lodash":10}],5:[function(e,t,n){function r(){var e={};e._next=e._prev=e,this._sentinel=e;}function o(e){e._prev._next=e._next,e._next._prev=e._prev,delete e._next,delete e._prev;}function a(e,t){if("_next"!==e&&"_prev"!==e)return t}(t.exports=r).prototype.dequeue=function(){var e=this._sentinel,t=e._prev;if(t!==e)return o(t),t},r.prototype.enqueue=function(e){var t=this._sentinel;e._prev&&e._next&&o(e),e._next=t._next,t._next._prev=e,(t._next=e)._prev=t;},r.prototype.toString=function(){for(var e=[],t=this._sentinel,n=t._prev;n!==t;)e.push(JSON.stringify(n,a)),n=n._prev;return "["+e.join(", ")+"]"};},{}],6:[function(e,t,n){var o=e("./lodash"),a=e("./util"),i=e("./graphlib").Graph;t.exports={debugOrdering:function(t){var e=a.buildLayerMatrix(t),r=new i({compound:!0,multigraph:!0}).setGraph({});return o.forEach(t.nodes(),function(e){r.setNode(e,{label:e}),r.setParent(e,"layer"+t.node(e).rank);}),o.forEach(t.edges(),function(e){r.setEdge(e.v,e.w,{},e.name);}),o.forEach(e,function(e,t){var n="layer"+t;r.setNode(n,{rank:"same"}),o.reduce(e,function(e,t){return r.setEdge(e,t,{style:"invis"}),t});}),r}};},{"./graphlib":7,"./lodash":10,"./util":29}],7:[function(e,t,n){var r;if("function"==typeof e)try{r=e("graphlib");}catch(e){}r=r||window.graphlib,t.exports=r;},{graphlib:31}],8:[function(e,t,n){var u=e("./lodash"),c=e("./graphlib").Graph,f=e("./data/list");t.exports=function(t,e){if(t.nodeCount()<=1)return [];var n=function(e,o){var a=new c,i=0,s=0;u.forEach(e.nodes(),function(e){a.setNode(e,{v:e,in:0,out:0});}),u.forEach(e.edges(),function(e){var t=a.edge(e.v,e.w)||0,n=o(e),r=t+n;a.setEdge(e.v,e.w,r),s=Math.max(s,a.node(e.v).out+=n),i=Math.max(i,a.node(e.w).in+=n);});var t=u.range(s+i+3).map(function(){return new f}),n=i+1;return u.forEach(a.nodes(),function(e){h(t,n,a.node(e));}),{graph:a,buckets:t,zeroIdx:n}}(t,e||o),r=function(e,t,n){var r,o=[],a=t[t.length-1],i=t[0];for(;e.nodeCount();){for(;r=i.dequeue();)d(e,t,n,r);for(;r=a.dequeue();)d(e,t,n,r);if(e.nodeCount())for(var s=t.length-2;0<s;--s)if(r=t[s].dequeue()){o=o.concat(d(e,t,n,r,!0));break}}return o}(n.graph,n.buckets,n.zeroIdx);return u.flatten(u.map(r,function(e){return t.outEdges(e.v,e.w)}),!0)};var o=u.constant(1);function d(o,a,i,e,r){var s=r?[]:void 0;return u.forEach(o.inEdges(e.v),function(e){var t=o.edge(e),n=o.node(e.v);r&&s.push({v:e.v,w:e.w}),n.out-=t,h(a,i,n);}),u.forEach(o.outEdges(e.v),function(e){var t=o.edge(e),n=e.w,r=o.node(n);r.in-=t,h(a,i,r);}),o.removeNode(e.v),s}function h(e,t,n){n.out?n.in?e[n.out-n.in+t].enqueue(n):e[e.length-1].enqueue(n):e[0].enqueue(n);}},{"./data/list":5,"./graphlib":7,"./lodash":10}],9:[function(e,t,n){var c=e("./lodash"),r=e("./acyclic"),o=e("./normalize"),a=e("./rank"),i=e("./util").normalizeRanks,s=e("./parent-dummy-chains"),u=e("./util").removeEmptyRanks,f=e("./nesting-graph"),d=e("./add-border-segments"),h=e("./coordinate-system"),l=e("./order"),p=e("./position"),_=e("./util"),v=e("./graphlib").Graph;t.exports=function(t,e){var n=e&&e.debugTiming?_.time:_.notime;n("layout",function(){var e=n("  buildLayoutGraph",function(){return function(n){var r=new v({multigraph:!0,compound:!0}),e=A(n.graph());return r.setGraph(c.merge({},y,k(e,g),c.pick(e,b))),c.forEach(n.nodes(),function(e){var t=A(n.node(e));r.setNode(e,c.defaults(k(t,m),x)),r.setParent(e,n.parent(e));}),c.forEach(n.edges(),function(e){var t=A(n.edge(e));r.setEdge(e,c.merge({},E,k(t,w),c.pick(t,j)));}),r}(t)});n("  runLayout",function(){!function(e,t){t("    makeSpaceForEdgeLabels",function(){!function(n){var r=n.graph();r.ranksep/=2,c.forEach(n.edges(),function(e){var t=n.edge(e);t.minlen*=2,"c"!==t.labelpos.toLowerCase()&&("TB"===r.rankdir||"BT"===r.rankdir?t.width+=t.labeloffset:t.height+=t.labeloffset);});}(e);}),t("    removeSelfEdges",function(){!function(n){c.forEach(n.edges(),function(e){if(e.v===e.w){var t=n.node(e.v);t.selfEdges||(t.selfEdges=[]),t.selfEdges.push({e:e,label:n.edge(e)}),n.removeEdge(e);}});}(e);}),t("    acyclic",function(){r.run(e);}),t("    nestingGraph.run",function(){f.run(e);}),t("    rank",function(){a(_.asNonCompoundGraph(e));}),t("    injectEdgeLabelProxies",function(){!function(o){c.forEach(o.edges(),function(e){var t=o.edge(e);if(t.width&&t.height){var n=o.node(e.v),r={rank:(o.node(e.w).rank-n.rank)/2+n.rank,e:e};_.addDummyNode(o,"edge-proxy",r,"_ep");}});}(e);}),t("    removeEmptyRanks",function(){u(e);}),t("    nestingGraph.cleanup",function(){f.cleanup(e);}),t("    normalizeRanks",function(){i(e);}),t("    assignRankMinMax",function(){!function(n){var r=0;c.forEach(n.nodes(),function(e){var t=n.node(e);t.borderTop&&(t.minRank=n.node(t.borderTop).rank,t.maxRank=n.node(t.borderBottom).rank,r=c.max(r,t.maxRank));}),n.graph().maxRank=r;}(e);}),t("    removeEdgeLabelProxies",function(){!function(n){c.forEach(n.nodes(),function(e){var t=n.node(e);"edge-proxy"===t.dummy&&(n.edge(t.e).labelRank=t.rank,n.removeNode(e));});}(e);}),t("    normalize.run",function(){o.run(e);}),t("    parentDummyChains",function(){s(e);}),t("    addBorderSegments",function(){d(e);}),t("    order",function(){l(e);}),t("    insertSelfEdges",function(){!function(o){var e=_.buildLayerMatrix(o);c.forEach(e,function(e){var r=0;c.forEach(e,function(e,t){var n=o.node(e);n.order=t+r,c.forEach(n.selfEdges,function(e){_.addDummyNode(o,"selfedge",{width:e.label.width,height:e.label.height,rank:n.rank,order:t+ ++r,e:e.e,label:e.label},"_se");}),delete n.selfEdges;});});}(e);}),t("    adjustCoordinateSystem",function(){h.adjust(e);}),t("    position",function(){p(e);}),t("    positionSelfEdges",function(){!function(s){c.forEach(s.nodes(),function(e){var t=s.node(e);if("selfedge"===t.dummy){var n=s.node(t.e.v),r=n.x+n.width/2,o=n.y,a=t.x-r,i=n.height/2;s.setEdge(t.e,t.label),s.removeNode(e),t.label.points=[{x:r+2*a/3,y:o-i},{x:r+5*a/6,y:o-i},{x:r+a,y:o},{x:r+5*a/6,y:o+i},{x:r+2*a/3,y:o+i}],t.label.x=t.x,t.label.y=t.y;}});}(e);}),t("    removeBorderNodes",function(){!function(i){c.forEach(i.nodes(),function(e){if(i.children(e).length){var t=i.node(e),n=i.node(t.borderTop),r=i.node(t.borderBottom),o=i.node(c.last(t.borderLeft)),a=i.node(c.last(t.borderRight));t.width=Math.abs(a.x-o.x),t.height=Math.abs(r.y-n.y),t.x=o.x+t.width/2,t.y=n.y+t.height/2;}}),c.forEach(i.nodes(),function(e){"border"===i.node(e).dummy&&i.removeNode(e);});}(e);}),t("    normalize.undo",function(){o.undo(e);}),t("    fixupEdgeLabelCoords",function(){!function(n){c.forEach(n.edges(),function(e){var t=n.edge(e);if(c.has(t,"x"))switch("l"!==t.labelpos&&"r"!==t.labelpos||(t.width-=t.labeloffset),t.labelpos){case"l":t.x-=t.width/2+t.labeloffset;break;case"r":t.x+=t.width/2+t.labeloffset;}});}(e);}),t("    undoCoordinateSystem",function(){h.undo(e);}),t("    translateGraph",function(){!function(n){var a=Number.POSITIVE_INFINITY,i=0,s=Number.POSITIVE_INFINITY,u=0,e=n.graph(),t=e.marginx||0,r=e.marginy||0;function o(e){var t=e.x,n=e.y,r=e.width,o=e.height;a=Math.min(a,t-r/2),i=Math.max(i,t+r/2),s=Math.min(s,n-o/2),u=Math.max(u,n+o/2);}c.forEach(n.nodes(),function(e){o(n.node(e));}),c.forEach(n.edges(),function(e){var t=n.edge(e);c.has(t,"x")&&o(t);}),a-=t,s-=r,c.forEach(n.nodes(),function(e){var t=n.node(e);t.x-=a,t.y-=s;}),c.forEach(n.edges(),function(e){var t=n.edge(e);c.forEach(t.points,function(e){e.x-=a,e.y-=s;}),c.has(t,"x")&&(t.x-=a),c.has(t,"y")&&(t.y-=s);}),e.width=i-a+t,e.height=u-s+r;}(e);}),t("    assignNodeIntersects",function(){!function(i){c.forEach(i.edges(),function(e){var t,n,r=i.edge(e),o=i.node(e.v),a=i.node(e.w);n=r.points?(t=r.points[0],r.points[r.points.length-1]):(r.points=[],t=a,o),r.points.unshift(_.intersectRect(o,t)),r.points.push(_.intersectRect(a,n));});}(e);}),t("    reversePoints",function(){!function(n){c.forEach(n.edges(),function(e){var t=n.edge(e);t.reversed&&t.points.reverse();});}(e);}),t("    acyclic.undo",function(){r.undo(e);});}(e,n);}),n("  updateInputGraph",function(){!function(r,o){c.forEach(r.nodes(),function(e){var t=r.node(e),n=o.node(e);t&&(t.x=n.x,t.y=n.y,o.children(e).length&&(t.width=n.width,t.height=n.height));}),c.forEach(r.edges(),function(e){var t=r.edge(e),n=o.edge(e);t.points=n.points,c.has(n,"x")&&(t.x=n.x,t.y=n.y);}),r.graph().width=o.graph().width,r.graph().height=o.graph().height;}(t,e);});});};var g=["nodesep","edgesep","ranksep","marginx","marginy"],y={ranksep:50,edgesep:20,nodesep:50,rankdir:"tb"},b=["acyclicer","ranker","rankdir","align"],m=["width","height"],x={width:0,height:0},w=["minlen","weight","width","height","labeloffset"],E={minlen:1,weight:1,width:0,height:0,labeloffset:10,labelpos:"r"},j=["labelpos"];function k(e,t){return c.mapValues(c.pick(e,t),Number)}function A(e){var n={};return c.forEach(e,function(e,t){n[t.toLowerCase()]=e;}),n}},{"./acyclic":2,"./add-border-segments":3,"./coordinate-system":4,"./graphlib":7,"./lodash":10,"./nesting-graph":11,"./normalize":12,"./order":17,"./parent-dummy-chains":22,"./position":24,"./rank":26,"./util":29}],10:[function(e,t,n){var r;if("function"==typeof e)try{r={cloneDeep:e("lodash/cloneDeep"),constant:e("lodash/constant"),defaults:e("lodash/defaults"),each:e("lodash/each"),filter:e("lodash/filter"),find:e("lodash/find"),flatten:e("lodash/flatten"),forEach:e("lodash/forEach"),forIn:e("lodash/forIn"),has:e("lodash/has"),isUndefined:e("lodash/isUndefined"),last:e("lodash/last"),map:e("lodash/map"),mapValues:e("lodash/mapValues"),max:e("lodash/max"),merge:e("lodash/merge"),min:e("lodash/min"),minBy:e("lodash/minBy"),now:e("lodash/now"),pick:e("lodash/pick"),range:e("lodash/range"),reduce:e("lodash/reduce"),sortBy:e("lodash/sortBy"),uniqueId:e("lodash/uniqueId"),values:e("lodash/values"),zipObject:e("lodash/zipObject")};}catch(e){}r=r||window._,t.exports=r;},{"lodash/cloneDeep":227,"lodash/constant":228,"lodash/defaults":229,"lodash/each":230,"lodash/filter":232,"lodash/find":233,"lodash/flatten":235,"lodash/forEach":236,"lodash/forIn":237,"lodash/has":239,"lodash/isUndefined":258,"lodash/last":261,"lodash/map":262,"lodash/mapValues":263,"lodash/max":264,"lodash/merge":266,"lodash/min":267,"lodash/minBy":268,"lodash/now":270,"lodash/pick":271,"lodash/range":273,"lodash/reduce":274,"lodash/sortBy":276,"lodash/uniqueId":286,"lodash/values":287,"lodash/zipObject":288}],11:[function(e,t,n){var v=e("./lodash"),g=e("./util");t.exports={run:function(t){var n=g.addDummyNode(t,"root",{},"_root"),r=function(o){var a={};return v.forEach(o.children(),function(e){!function t(e,n){var r=o.children(e);r&&r.length&&v.forEach(r,function(e){t(e,n+1);});a[e]=n;}(e,1);}),a}(t),o=v.max(v.values(r))-1,a=2*o+1;t.graph().nestingRoot=n,v.forEach(t.edges(),function(e){t.edge(e).minlen*=a;});var i=function(n){return v.reduce(n.edges(),function(e,t){return e+n.edge(t).weight},0)}(t)+1;v.forEach(t.children(),function(e){!function i(s,u,c,f,d,h,l){var e=s.children(l);if(!e.length)return void(l!==u&&s.setEdge(u,l,{weight:0,minlen:c}));var p=g.addBorderNode(s,"_bt"),_=g.addBorderNode(s,"_bb"),t=s.node(l);s.setParent(p,l);t.borderTop=p;s.setParent(_,l);t.borderBottom=_;v.forEach(e,function(e){i(s,u,c,f,d,h,e);var t=s.node(e),n=t.borderTop?t.borderTop:e,r=t.borderBottom?t.borderBottom:e,o=t.borderTop?f:2*f,a=n!==r?1:d-h[l]+1;s.setEdge(p,n,{weight:o,minlen:a,nestingEdge:!0}),s.setEdge(r,_,{weight:o,minlen:a,nestingEdge:!0});});s.parent(l)||s.setEdge(u,p,{weight:0,minlen:d+h[l]});}(t,n,a,i,o,r,e);}),t.graph().nodeRankFactor=a;},cleanup:function(t){var e=t.graph();t.removeNode(e.nestingRoot),delete e.nestingRoot,v.forEach(t.edges(),function(e){t.edge(e).nestingEdge&&t.removeEdge(e);});}};},{"./lodash":10,"./util":29}],12:[function(e,t,n){var r=e("./lodash"),h=e("./util");t.exports={run:function(t){t.graph().dummyChains=[],r.forEach(t.edges(),function(e){!function(e,t){var n,r,o,a=t.v,i=e.node(a).rank,s=t.w,u=e.node(s).rank,c=t.name,f=e.edge(t),d=f.labelRank;if(u===i+1)return;for(e.removeEdge(t),o=0,++i;i<u;++o,++i)f.points=[],r={width:0,height:0,edgeLabel:f,edgeObj:t,rank:i},n=h.addDummyNode(e,"edge",r,"_d"),i===d&&(r.width=f.width,r.height=f.height,r.dummy="edge-label",r.labelpos=f.labelpos),e.setEdge(a,n,{weight:f.weight},c),0===o&&e.graph().dummyChains.push(n),a=n;e.setEdge(a,s,{weight:f.weight},c);}(t,e);});},undo:function(o){r.forEach(o.graph().dummyChains,function(e){var t,n=o.node(e),r=n.edgeLabel;for(o.setEdge(n.edgeObj,r);n.dummy;)t=o.successors(e)[0],o.removeNode(e),r.points.push({x:n.x,y:n.y}),"edge-label"===n.dummy&&(r.x=n.x,r.y=n.y,r.width=n.width,r.height=n.height),e=t,n=o.node(e);});}};},{"./lodash":10,"./util":29}],13:[function(e,t,n){var r=e("../lodash");t.exports=function(o,a,e){var i,s={};r.forEach(e,function(e){for(var t,n,r=o.parent(e);r;){if((t=o.parent(r))?(n=s[t],s[t]=r):(n=i,i=r),n&&n!==r)return void a.setEdge(n,r);r=t;}});};},{"../lodash":10}],14:[function(e,t,n){var r=e("../lodash");t.exports=function(o,e){return r.map(e,function(e){var t=o.inEdges(e);if(t.length){var n=r.reduce(t,function(e,t){var n=o.edge(t),r=o.node(t.v);return {sum:e.sum+n.weight*r.order,weight:e.weight+n.weight}},{sum:0,weight:0});return {v:e,barycenter:n.sum/n.weight,weight:n.weight}}return {v:e}})};},{"../lodash":10}],15:[function(e,t,n){var u=e("../lodash"),o=e("../graphlib").Graph;t.exports=function(a,n,r){var i=function(e){var t;for(;e.hasNode(t=u.uniqueId("_root")););return t}(a),s=new o({compound:!0}).setGraph({root:i}).setDefaultNodeLabel(function(e){return a.node(e)});return u.forEach(a.nodes(),function(o){var e=a.node(o),t=a.parent(o);(e.rank===n||e.minRank<=n&&n<=e.maxRank)&&(s.setNode(o),s.setParent(o,t||i),u.forEach(a[r](o),function(e){var t=e.v===o?e.w:e.v,n=s.edge(t,o),r=u.isUndefined(n)?0:n.weight;s.setEdge(t,o,{weight:a.edge(e).weight+r});}),u.has(e,"minRank")&&s.setNode(o,{borderLeft:e.borderLeft[n],borderRight:e.borderRight[n]}));}),s};},{"../graphlib":7,"../lodash":10}],16:[function(e,t,n){var c=e("../lodash");function o(t,e,n){for(var r=c.zipObject(n,c.map(n,function(e,t){return t})),o=c.flatten(c.map(e,function(e){return c.sortBy(c.map(t.outEdges(e),function(e){return {pos:r[e.w],weight:t.edge(e).weight}}),"pos")}),!0),a=1;a<n.length;)a<<=1;var i=2*a-1;a-=1;var s=c.map(new Array(i),function(){return 0}),u=0;return c.forEach(o.forEach(function(e){var t=e.pos+a;s[t]+=e.weight;for(var n=0;0<t;)t%2&&(n+=s[t+1]),s[t=t-1>>1]+=e.weight;u+=e.weight*n;})),u}t.exports=function(e,t){for(var n=0,r=1;r<t.length;++r)n+=o(e,t[r-1],t[r]);return n};},{"../lodash":10}],17:[function(e,t,n){var f=e("../lodash"),d=e("./init-order"),h=e("./cross-count"),a=e("./sort-subgraph"),r=e("./build-layer-graph"),i=e("./add-subgraph-constraints"),s=e("../graphlib").Graph,l=e("../util");function p(t,e,n){return f.map(e,function(e){return r(t,e,n)})}function _(e,r){var o=new s;f.forEach(e,function(n){var e=n.graph().root,t=a(n,e,o,r);f.forEach(t.vs,function(e,t){n.node(e).order=t;}),i(n,o,t.vs);});}function v(n,e){f.forEach(e,function(e){f.forEach(e,function(e,t){n.node(e).order=t;});});}t.exports=function(e){var t=l.maxRank(e),n=p(e,f.range(1,t+1),"inEdges"),r=p(e,f.range(t-1,-1,-1),"outEdges"),o=d(e);v(e,o);for(var a,i=Number.POSITIVE_INFINITY,s=0,u=0;u<4;++s,++u){_(s%2?n:r,2<=s%4),o=l.buildLayerMatrix(e);var c=h(e,o);c<i&&(u=0,a=f.cloneDeep(o),i=c);}v(e,a);};},{"../graphlib":7,"../lodash":10,"../util":29,"./add-subgraph-constraints":13,"./build-layer-graph":15,"./cross-count":16,"./init-order":18,"./sort-subgraph":20}],18:[function(e,t,n){var i=e("../lodash");t.exports=function(r){var o={},e=i.filter(r.nodes(),function(e){return !r.children(e).length}),t=i.max(i.map(e,function(e){return r.node(e).rank})),a=i.map(i.range(t+1),function(){return []});var n=i.sortBy(e,function(e){return r.node(e).rank});return i.forEach(n,function e(t){if(i.has(o,t))return;o[t]=!0;var n=r.node(t);a[n.rank].push(t);i.forEach(r.successors(t),e);}),a};},{"../lodash":10}],19:[function(e,t,n){var a=e("../lodash");t.exports=function(e,t){var r={};return a.forEach(e,function(e,t){var n=r[e.v]={indegree:0,in:[],out:[],vs:[e.v],i:t};a.isUndefined(e.barycenter)||(n.barycenter=e.barycenter,n.weight=e.weight);}),a.forEach(t.edges(),function(e){var t=r[e.v],n=r[e.w];a.isUndefined(t)||a.isUndefined(n)||(n.indegree++,t.out.push(r[e.w]));}),function(n){var e=[];function t(t){return function(e){e.merged||(a.isUndefined(e.barycenter)||a.isUndefined(t.barycenter)||e.barycenter>=t.barycenter)&&function(e,t){var n=0,r=0;e.weight&&(n+=e.barycenter*e.weight,r+=e.weight);t.weight&&(n+=t.barycenter*t.weight,r+=t.weight);e.vs=t.vs.concat(e.vs),e.barycenter=n/r,e.weight=r,e.i=Math.min(t.i,e.i),t.merged=!0;}(t,e);}}function r(t){return function(e){e.in.push(t),0==--e.indegree&&n.push(e);}}for(;n.length;){var o=n.pop();e.push(o),a.forEach(o.in.reverse(),t(o)),a.forEach(o.out,r(o));}return a.map(a.filter(e,function(e){return !e.merged}),function(e){return a.pick(e,["vs","i","barycenter","weight"])})}(a.filter(r,function(e){return !e.indegree}))};},{"../lodash":10}],20:[function(e,t,n){var g=e("../lodash"),y=e("./barycenter"),b=e("./resolve-conflicts"),m=e("./sort");function x(e,t){g.isUndefined(e.barycenter)?(e.barycenter=t.barycenter,e.weight=t.weight):(e.barycenter=(e.barycenter*e.weight+t.barycenter*t.weight)/(e.weight+t.weight),e.weight+=t.weight);}t.exports=function n(r,e,o,a){var t=r.children(e),i=r.node(e),s=i?i.borderLeft:void 0,u=i?i.borderRight:void 0,c={};s&&(t=g.filter(t,function(e){return e!==s&&e!==u}));var f=y(r,t);g.forEach(f,function(e){if(r.children(e.v).length){var t=n(r,e.v,o,a);c[e.v]=t,g.has(t,"barycenter")&&x(e,t);}});var d=b(f,o);h=d,l=c,g.forEach(h,function(e){e.vs=g.flatten(e.vs.map(function(e){return l[e]?l[e].vs:e}),!0);});var h,l;var p=m(d,a);if(s&&(p.vs=g.flatten([s,p.vs,u],!0),r.predecessors(s).length)){var _=r.node(r.predecessors(s)[0]),v=r.node(r.predecessors(u)[0]);g.has(p,"barycenter")||(p.barycenter=0,p.weight=0),p.barycenter=(p.barycenter*p.weight+_.order+v.order)/(p.weight+2),p.weight+=2;}return p};},{"../lodash":10,"./barycenter":14,"./resolve-conflicts":19,"./sort":21}],21:[function(e,t,n){var f=e("../lodash"),d=e("../util");function h(e,t,n){for(var r;t.length&&(r=f.last(t)).i<=n;)t.pop(),e.push(r.vs),n++;return n}t.exports=function(e,t){var n=d.partition(e,function(e){return f.has(e,"barycenter")}),r=n.lhs,o=f.sortBy(n.rhs,function(e){return -e.i}),a=[],i=0,s=0,u=0;r.sort(function(n){return function(e,t){return e.barycenter<t.barycenter?-1:e.barycenter>t.barycenter?1:n?t.i-e.i:e.i-t.i}}(!!t)),u=h(a,o,u),f.forEach(r,function(e){u+=e.vs.length,a.push(e.vs),i+=e.barycenter*e.weight,s+=e.weight,u=h(a,o,u);});var c={vs:f.flatten(a,!0)};s&&(c.barycenter=i/s,c.weight=s);return c};},{"../lodash":10,"../util":29}],22:[function(e,t,n){var i=e("./lodash");t.exports=function(c){var f=function(r){var o={},a=0;return i.forEach(r.children(),function e(t){var n=a;i.forEach(r.children(t),e);o[t]={low:n,lim:a++};}),o}(c);i.forEach(c.graph().dummyChains,function(e){for(var t=c.node(e),n=t.edgeObj,r=function(e,t,n,r){var o,a,i=[],s=[],u=Math.min(t[n].low,t[r].low),c=Math.max(t[n].lim,t[r].lim);o=n;for(;o=e.parent(o),i.push(o),o&&(t[o].low>u||c>t[o].lim););a=o,o=r;for(;(o=e.parent(o))!==a;)s.push(o);return {path:i.concat(s.reverse()),lca:a}}(c,f,n.v,n.w),o=r.path,a=r.lca,i=0,s=o[i],u=!0;e!==n.w;){if(t=c.node(e),u){for(;(s=o[i])!==a&&c.node(s).maxRank<t.rank;)i++;s===a&&(u=!1);}if(!u){for(;i<o.length-1&&c.node(s=o[i+1]).minRank<=t.rank;)i++;s=o[i];}c.setParent(e,s),e=c.successors(e)[0];}});};},{"./lodash":10}],23:[function(e,t,n){var h=e("../lodash"),c=e("../graphlib").Graph,r=e("../util");function o(c,e){var f={};return h.reduce(e,function(e,r){var a=0,i=0,s=e.length,u=h.last(r);return h.forEach(r,function(e,t){var n=function(t,e){if(t.node(e).dummy)return h.find(t.predecessors(e),function(e){return t.node(e).dummy})}(c,e),o=n?c.node(n).order:s;!n&&e!==u||(h.forEach(r.slice(i,t+1),function(r){h.forEach(c.predecessors(r),function(e){var t=c.node(e),n=t.order;!(n<a||o<n)||t.dummy&&c.node(r).dummy||d(f,e,r);});}),i=t+1,a=o);}),r}),f}function f(u,e){var i={};function c(t,e,n,r,o){var a;h.forEach(h.range(e,n),function(e){a=t[e],u.node(a).dummy&&h.forEach(u.predecessors(a),function(e){var t=u.node(e);t.dummy&&(t.order<r||t.order>o)&&d(i,e,a);});});}return h.reduce(e,function(r,o){var a,i=-1,s=0;return h.forEach(o,function(e,t){if("border"===u.node(e).dummy){var n=u.predecessors(e);n.length&&(a=u.node(n[0]).order,c(o,s,t,i,a),s=t,i=a);}c(o,s,o.length,a,r.length);}),o}),i}function d(e,t,n){if(n<t){var r=t;t=n,n=r;}var o=e[t];o||(e[t]=o={}),o[n]=!0;}function l(e,t,n){if(n<t){var r=t;t=n,n=r;}return h.has(e[t],n)}function p(e,t,s,u){var c={},f={},d={};return h.forEach(t,function(e){h.forEach(e,function(e,t){c[e]=e,f[e]=e,d[e]=t;});}),h.forEach(t,function(e){var i=-1;h.forEach(e,function(e){var t=u(e);if(t.length)for(var n=((t=h.sortBy(t,function(e){return d[e]})).length-1)/2,r=Math.floor(n),o=Math.ceil(n);r<=o;++r){var a=t[r];f[e]===e&&i<d[a]&&!l(s,e,a)&&(f[a]=e,f[e]=c[e]=c[a],i=d[a]);}});}),{root:c,align:f}}function _(r,e,t,n,o){var a={},i=function(a,e,i,t){var s=new c,n=a.graph(),u=function(s,u,c){return function(e,t,n){var r,o=e.node(t),a=e.node(n),i=0;if(i+=o.width/2,h.has(o,"labelpos"))switch(o.labelpos.toLowerCase()){case"l":r=-o.width/2;break;case"r":r=o.width/2;}if(r&&(i+=c?r:-r),r=0,i+=(o.dummy?u:s)/2,i+=(a.dummy?u:s)/2,i+=a.width/2,h.has(a,"labelpos"))switch(a.labelpos.toLowerCase()){case"l":r=a.width/2;break;case"r":r=-a.width/2;}return r&&(i+=c?r:-r),r=0,i}}(n.nodesep,n.edgesep,t);return h.forEach(e,function(e){var o;h.forEach(e,function(e){var t=i[e];if(s.setNode(t),o){var n=i[o],r=s.edge(n,t);s.setEdge(n,t,Math.max(u(a,e,o),r||0));}o=e;});}),s}(r,e,t,o),s=o?"borderLeft":"borderRight";function u(e,t){for(var n=i.nodes(),r=n.pop(),o={};r;)o[r]?e(r):(o[r]=!0,n.push(r),n=n.concat(t(r))),r=n.pop();}return u(function(e){a[e]=i.inEdges(e).reduce(function(e,t){return Math.max(e,a[t.v]+i.edge(t))},0);},i.predecessors.bind(i)),u(function(e){var t=i.outEdges(e).reduce(function(e,t){return Math.min(e,a[t.w]-i.edge(t))},Number.POSITIVE_INFINITY),n=r.node(e);t!==Number.POSITIVE_INFINITY&&n.borderType!==s&&(a[e]=Math.max(a[e],t));},i.successors.bind(i)),h.forEach(n,function(e){a[e]=a[t[e]];}),a}function v(a,e){return h.minBy(h.values(e),function(e){var r=Number.NEGATIVE_INFINITY,o=Number.POSITIVE_INFINITY;return h.forIn(e,function(e,t){var n=function(e,t){return e.node(t).width}(a,t)/2;r=Math.max(e+n,r),o=Math.min(e-n,o);}),r-o})}function g(i,s){var e=h.values(s),u=h.min(e),c=h.max(e);h.forEach(["u","d"],function(a){h.forEach(["l","r"],function(e){var t,n=a+e,r=i[n];if(r!==s){var o=h.values(r);(t="l"===e?u-h.min(o):c-h.max(o))&&(i[n]=h.mapValues(r,function(e){return e+t}));}});});}function y(r,o){return h.mapValues(r.ul,function(e,t){if(o)return r[o.toLowerCase()][t];var n=h.sortBy(h.map(r,t));return (n[1]+n[2])/2})}t.exports={positionX:function(a){var i,e=r.buildLayerMatrix(a),s=h.merge(o(a,e),f(a,e)),u={};h.forEach(["u","d"],function(o){i="u"===o?e:h.values(e).reverse(),h.forEach(["l","r"],function(e){"r"===e&&(i=h.map(i,function(e){return h.values(e).reverse()}));var t=("u"===o?a.predecessors:a.successors).bind(a),n=p(a,i,s,t),r=_(a,i,n.root,n.align,"r"===e);"r"===e&&(r=h.mapValues(r,function(e){return -e})),u[o+e]=r;});});var t=v(a,u);return g(u,t),y(u,a.graph().align)},findType1Conflicts:o,findType2Conflicts:f,addConflict:d,hasConflict:l,verticalAlignment:p,horizontalCompaction:_,alignCoordinates:g,findSmallestWidthAlignment:v,balance:y};},{"../graphlib":7,"../lodash":10,"../util":29}],24:[function(e,t,n){var a=e("../lodash"),i=e("../util"),r=e("./bk").positionX;t.exports=function(n){(function(n){var e=i.buildLayerMatrix(n),r=n.graph().ranksep,o=0;a.forEach(e,function(e){var t=a.max(a.map(e,function(e){return n.node(e).height}));a.forEach(e,function(e){n.node(e).y=o+t/2;}),o+=t+r;});})(n=i.asNonCompoundGraph(n)),a.forEach(r(n),function(e,t){n.node(t).x=e;});};},{"../lodash":10,"../util":29,"./bk":23}],25:[function(e,t,n){var s=e("../lodash"),i=e("../graphlib").Graph,u=e("./util").slack;function c(a,i){return s.forEach(a.nodes(),function r(o){s.forEach(i.nodeEdges(o),function(e){var t=e.v,n=o===t?e.w:t;a.hasNode(n)||u(i,e)||(a.setNode(n,{}),a.setEdge(o,n,{}),r(n));});}),a.nodeCount()}function f(t,n){return s.minBy(n.edges(),function(e){if(t.hasNode(e.v)!==t.hasNode(e.w))return u(n,e)})}function d(e,t,n){s.forEach(e.nodes(),function(e){t.node(e).rank+=n;});}t.exports=function(e){var t,n,r=new i({directed:!1}),o=e.nodes()[0],a=e.nodeCount();r.setNode(o,{});for(;c(r,e)<a;)t=f(r,e),n=r.hasNode(t.v)?u(e,t):-u(e,t),d(r,e,n);return r};},{"../graphlib":7,"../lodash":10,"./util":28}],26:[function(e,t,n){var r=e("./util").longestPath,o=e("./feasible-tree"),a=e("./network-simplex");t.exports=function(e){switch(e.graph().ranker){case"network-simplex":s(e);break;case"tight-tree":!function(e){r(e),o(e);}(e);break;case"longest-path":i(e);break;default:s(e);}};var i=r;function s(e){a(e);}},{"./feasible-tree":25,"./network-simplex":27,"./util":28}],27:[function(e,t,n){var h=e("../lodash"),r=e("./feasible-tree"),f=e("./util").slack,o=e("./util").longestPath,i=e("../graphlib").alg.preorder,a=e("../graphlib").alg.postorder,s=e("../util").simplify;function u(e){e=s(e),o(e);var t,n=r(e);for(l(n),c(n,e);t=p(n);)v(n,e,t,_(n,e,t));}function c(t,n){var e=a(t,t.nodes());e=e.slice(0,e.length-1),h.forEach(e,function(e){!function(e,t,n){var r=e.node(n).parent;e.edge(n,r).cutvalue=d(e,t,n);}(t,n,e);});}function d(i,s,u){var c=i.node(u).parent,f=!0,e=s.edge(u,c),d=0;return e||(f=!1,e=s.edge(c,u)),d=e.weight,h.forEach(s.nodeEdges(u),function(e){var t=e.v===u,n=t?e.w:e.v;if(n!==c){var r=t===f,o=s.edge(e).weight;if(d+=r?o:-o,function(e,t,n){return e.hasEdge(t,n)}(i,u,n)){var a=i.edge(u,n).cutvalue;d+=r?-a:a;}}}),d}function l(e,t){arguments.length<2&&(t=e.nodes()[0]),function t(n,r,o,a,e){var i=o,s=n.node(a);r[a]=!0;h.forEach(n.neighbors(a),function(e){h.has(r,e)||(o=t(n,r,o,e,a));});s.low=i;s.lim=o++;e?s.parent=e:delete s.parent;return o}(e,{},1,t);}function p(t){return h.find(t.edges(),function(e){return t.edge(e).cutvalue<0})}function _(t,n,e){var r=e.v,o=e.w;n.hasEdge(r,o)||(r=e.w,o=e.v);var a=t.node(r),i=t.node(o),s=a,u=!1;a.lim>i.lim&&(s=i,u=!0);var c=h.filter(n.edges(),function(e){return u===g(t,t.node(e.v),s)&&u!==g(t,t.node(e.w),s)});return h.minBy(c,function(e){return f(n,e)})}function v(e,t,n,r){var o=n.v,a=n.w;e.removeEdge(o,a),e.setEdge(r.v,r.w,{}),l(e),c(e,t),function(o,a){var e=h.find(o.nodes(),function(e){return !a.node(e).parent}),t=i(o,e);t=t.slice(1),h.forEach(t,function(e){var t=o.node(e).parent,n=a.edge(e,t),r=!1;n||(n=a.edge(t,e),r=!0),a.node(e).rank=a.node(t).rank+(r?n.minlen:-n.minlen);});}(e,t);}function g(e,t,n){return n.low<=t.lim&&t.lim<=n.lim}(t.exports=u).initLowLimValues=l,u.initCutValues=c,u.calcCutValue=d,u.leaveEdge=p,u.enterEdge=_,u.exchangeEdges=v;},{"../graphlib":7,"../lodash":10,"../util":29,"./feasible-tree":25,"./util":28}],28:[function(e,t,n){var i=e("../lodash");t.exports={longestPath:function(o){var a={};i.forEach(o.sources(),function t(e){var n=o.node(e);if(i.has(a,e))return n.rank;a[e]=!0;var r=i.min(i.map(o.outEdges(e),function(e){return t(e.w)-o.edge(e).minlen}));return r!==Number.POSITIVE_INFINITY&&null!=r||(r=0),n.rank=r});},slack:function(e,t){return e.node(t.w).rank-e.node(t.v).rank-e.edge(t).minlen}};},{"../lodash":10}],29:[function(e,t,n){var s=e("./lodash"),a=e("./graphlib").Graph;function i(e,t,n,r){for(var o;o=s.uniqueId(r),e.hasNode(o););return n.dummy=t,e.setNode(o,n),o}function u(n){return s.max(s.map(n.nodes(),function(e){var t=n.node(e).rank;if(!s.isUndefined(t))return t}))}t.exports={addDummyNode:i,simplify:function(r){var o=(new a).setGraph(r.graph());return s.forEach(r.nodes(),function(e){o.setNode(e,r.node(e));}),s.forEach(r.edges(),function(e){var t=o.edge(e.v,e.w)||{weight:0,minlen:1},n=r.edge(e);o.setEdge(e.v,e.w,{weight:t.weight+n.weight,minlen:Math.max(t.minlen,n.minlen)});}),o},asNonCompoundGraph:function(t){var n=new a({multigraph:t.isMultigraph()}).setGraph(t.graph());return s.forEach(t.nodes(),function(e){t.children(e).length||n.setNode(e,t.node(e));}),s.forEach(t.edges(),function(e){n.setEdge(e,t.edge(e));}),n},successorWeights:function(n){var e=s.map(n.nodes(),function(e){var t={};return s.forEach(n.outEdges(e),function(e){t[e.w]=(t[e.w]||0)+n.edge(e).weight;}),t});return s.zipObject(n.nodes(),e)},predecessorWeights:function(n){var e=s.map(n.nodes(),function(e){var t={};return s.forEach(n.inEdges(e),function(e){t[e.v]=(t[e.v]||0)+n.edge(e).weight;}),t});return s.zipObject(n.nodes(),e)},intersectRect:function(e,t){var n,r,o=e.x,a=e.y,i=t.x-o,s=t.y-a,u=e.width/2,c=e.height/2;if(!i&&!s)throw new Error("Not possible to find intersection inside of the rectangle");r=Math.abs(s)*u>Math.abs(i)*c?(s<0&&(c=-c),n=c*i/s,c):(i<0&&(u=-u),(n=u)*s/i);return {x:o+n,y:a+r}},buildLayerMatrix:function(r){var o=s.map(s.range(u(r)+1),function(){return []});return s.forEach(r.nodes(),function(e){var t=r.node(e),n=t.rank;s.isUndefined(n)||(o[n][t.order]=e);}),o},normalizeRanks:function(n){var r=s.min(s.map(n.nodes(),function(e){return n.node(e).rank}));s.forEach(n.nodes(),function(e){var t=n.node(e);s.has(t,"rank")&&(t.rank-=r);});},removeEmptyRanks:function(n){var r=s.min(s.map(n.nodes(),function(e){return n.node(e).rank})),o=[];s.forEach(n.nodes(),function(e){var t=n.node(e).rank-r;o[t]||(o[t]=[]),o[t].push(e);});var a=0,i=n.graph().nodeRankFactor;s.forEach(o,function(e,t){s.isUndefined(e)&&t%i!=0?--a:a&&s.forEach(e,function(e){n.node(e).rank+=a;});});},addBorderNode:function(e,t,n,r){var o={width:0,height:0};4<=arguments.length&&(o.rank=n,o.order=r);return i(e,"border",o,t)},maxRank:u,partition:function(e,t){var n={lhs:[],rhs:[]};return s.forEach(e,function(e){t(e)?n.lhs.push(e):n.rhs.push(e);}),n},time:function(e,t){var n=s.now();try{return t()}finally{console.log(e+" time: "+(s.now()-n)+"ms");}},notime:function(e,t){return t()}};},{"./graphlib":7,"./lodash":10}],30:[function(e,t,n){t.exports="0.8.4";},{}],31:[function(e,t,n){var r=e("./lib");t.exports={Graph:r.Graph,json:e("./lib/json"),alg:e("./lib/alg"),version:r.version};},{"./lib":47,"./lib/alg":38,"./lib/json":48}],32:[function(e,t,n){var i=e("../lodash");t.exports=function(t){var n,r={},o=[];function a(e){i.has(r,e)||(r[e]=!0,n.push(e),i.each(t.successors(e),a),i.each(t.predecessors(e),a));}return i.each(t.nodes(),function(e){n=[],a(e),n.length&&o.push(n);}),o};},{"../lodash":49}],33:[function(e,t,n){var s=e("../lodash");t.exports=function(t,e,n){s.isArray(e)||(e=[e]);var r=(t.isDirected()?t.successors:t.neighbors).bind(t),o=[],a={};return s.each(e,function(e){if(!t.hasNode(e))throw new Error("Graph does not have node: "+e);!function t(n,e,r,o,a,i){s.has(o,e)||(o[e]=!0,r||i.push(e),s.each(a(e),function(e){t(n,e,r,o,a,i);}),r&&i.push(e));}(t,e,"post"===n,a,r,o);}),o};},{"../lodash":49}],34:[function(e,t,n){var a=e("./dijkstra"),i=e("../lodash");t.exports=function(n,r,o){return i.transform(n.nodes(),function(e,t){e[t]=a(n,t,r,o);},{})};},{"../lodash":49,"./dijkstra":35}],35:[function(e,t,n){var r=e("../lodash"),o=e("../data/priority-queue");t.exports=function(t,e,n,r){return function(e,n,a,t){function r(e){var t=e.v!==i?e.v:e.w,n=u[t],r=a(e),o=s.distance+r;if(r<0)throw new Error("dijkstra does not allow negative edge weights. Bad edge: "+e+" Weight: "+r);o<n.distance&&(n.distance=o,n.predecessor=i,c.decrease(t,o));}var i,s,u={},c=new o;e.nodes().forEach(function(e){var t=e===n?0:Number.POSITIVE_INFINITY;u[e]={distance:t},c.add(e,t);});for(;0<c.size()&&(i=c.removeMin(),(s=u[i]).distance!==Number.POSITIVE_INFINITY);)t(i).forEach(r);return u}(t,String(e),n||a,r||function(e){return t.outEdges(e)})};var a=r.constant(1);},{"../data/priority-queue":45,"../lodash":49}],36:[function(e,t,n){var r=e("../lodash"),o=e("./tarjan");t.exports=function(t){return r.filter(o(t),function(e){return 1<e.length||1===e.length&&t.hasEdge(e[0],e[0])})};},{"../lodash":49,"./tarjan":43}],37:[function(e,t,n){var r=e("../lodash");t.exports=function(t,e,n){return function(e,o,t){var u={},n=e.nodes();return n.forEach(function(r){u[r]={},u[r][r]={distance:0},n.forEach(function(e){r!==e&&(u[r][e]={distance:Number.POSITIVE_INFINITY});}),t(r).forEach(function(e){var t=e.v===r?e.w:e.v,n=o(e);u[r][t]={distance:n,predecessor:r};});}),n.forEach(function(i){var s=u[i];n.forEach(function(e){var a=u[e];n.forEach(function(e){var t=a[i],n=s[e],r=a[e],o=t.distance+n.distance;o<r.distance&&(r.distance=o,r.predecessor=n.predecessor);});});}),u}(t,e||o,n||function(e){return t.outEdges(e)})};var o=r.constant(1);},{"../lodash":49}],38:[function(e,t,n){t.exports={components:e("./components"),dijkstra:e("./dijkstra"),dijkstraAll:e("./dijkstra-all"),findCycles:e("./find-cycles"),floydWarshall:e("./floyd-warshall"),isAcyclic:e("./is-acyclic"),postorder:e("./postorder"),preorder:e("./preorder"),prim:e("./prim"),tarjan:e("./tarjan"),topsort:e("./topsort")};},{"./components":32,"./dijkstra":35,"./dijkstra-all":34,"./find-cycles":36,"./floyd-warshall":37,"./is-acyclic":39,"./postorder":40,"./preorder":41,"./prim":42,"./tarjan":43,"./topsort":44}],39:[function(e,t,n){var r=e("./topsort");t.exports=function(e){try{r(e);}catch(e){if(e instanceof r.CycleException)return !1;throw e}return !0};},{"./topsort":44}],40:[function(e,t,n){var r=e("./dfs");t.exports=function(e,t){return r(e,t,"post")};},{"./dfs":33}],41:[function(e,t,n){var r=e("./dfs");t.exports=function(e,t){return r(e,t,"pre")};},{"./dfs":33}],42:[function(e,t,n){var u=e("../lodash"),c=e("../graph"),f=e("../data/priority-queue");t.exports=function(e,o){var a,t=new c,i={},s=new f;function n(e){var t=e.v===a?e.w:e.v,n=s.priority(t);if(void 0!==n){var r=o(e);r<n&&(i[t]=a,s.decrease(t,r));}}if(0===e.nodeCount())return t;u.each(e.nodes(),function(e){s.add(e,Number.POSITIVE_INFINITY),t.setNode(e);}),s.decrease(e.nodes()[0],0);var r=!1;for(;0<s.size();){if(a=s.removeMin(),u.has(i,a))t.setEdge(a,i[a]);else{if(r)throw new Error("Input graph is not connected: "+e);r=!0;}e.nodeEdges(a).forEach(n);}return t};},{"../data/priority-queue":45,"../graph":46,"../lodash":49}],43:[function(e,t,n){var f=e("../lodash");t.exports=function(a){var i=0,s=[],u={},c=[];return a.nodes().forEach(function(e){f.has(u,e)||!function t(e){var n=u[e]={onStack:!0,lowlink:i,index:i++};s.push(e);a.successors(e).forEach(function(e){f.has(u,e)?u[e].onStack&&(n.lowlink=Math.min(n.lowlink,u[e].index)):(t(e),n.lowlink=Math.min(n.lowlink,u[e].lowlink));});if(n.lowlink===n.index){for(var r,o=[];r=s.pop(),u[r].onStack=!1,o.push(r),e!==r;);c.push(o);}}(e);}),c};},{"../lodash":49}],44:[function(e,t,n){var i=e("../lodash");function r(n){var r={},o={},a=[];if(i.each(n.sinks(),function e(t){if(i.has(o,t))throw new s;i.has(r,t)||(o[t]=!0,r[t]=!0,i.each(n.predecessors(t),e),delete o[t],a.push(t));}),i.size(r)!==n.nodeCount())throw new s;return a}function s(){}((t.exports=r).CycleException=s).prototype=new Error;},{"../lodash":49}],45:[function(e,t,n){var a=e("../lodash");function r(){this._arr=[],this._keyIndices={};}(t.exports=r).prototype.size=function(){return this._arr.length},r.prototype.keys=function(){return this._arr.map(function(e){return e.key})},r.prototype.has=function(e){return a.has(this._keyIndices,e)},r.prototype.priority=function(e){var t=this._keyIndices[e];if(void 0!==t)return this._arr[t].priority},r.prototype.min=function(){if(0===this.size())throw new Error("Queue underflow");return this._arr[0].key},r.prototype.add=function(e,t){var n=this._keyIndices;if(e=String(e),a.has(n,e))return !1;var r=this._arr,o=r.length;return n[e]=o,r.push({key:e,priority:t}),this._decrease(o),!0},r.prototype.removeMin=function(){this._swap(0,this._arr.length-1);var e=this._arr.pop();return delete this._keyIndices[e.key],this._heapify(0),e.key},r.prototype.decrease=function(e,t){var n=this._keyIndices[e];if(t>this._arr[n].priority)throw new Error("New priority is greater than current priority. Key: "+e+" Old: "+this._arr[n].priority+" New: "+t);this._arr[n].priority=t,this._decrease(n);},r.prototype._heapify=function(e){var t=this._arr,n=2*e,r=1+n,o=e;n<t.length&&(o=t[n].priority<t[o].priority?n:o,r<t.length&&(o=t[r].priority<t[o].priority?r:o),o!==e&&(this._swap(e,o),this._heapify(o)));},r.prototype._decrease=function(e){for(var t,n=this._arr,r=n[e].priority;0!==e&&!(n[t=e>>1].priority<r);)this._swap(e,t),e=t;},r.prototype._swap=function(e,t){var n=this._arr,r=this._keyIndices,o=n[e],a=n[t];n[e]=a,n[t]=o,r[a.key]=e,r[o.key]=t;};},{"../lodash":49}],46:[function(e,t,n){var u=e("./lodash");t.exports=o;var s="\0",r="\0",c="";function o(e){this._isDirected=!u.has(e,"directed")||e.directed,this._isMultigraph=!!u.has(e,"multigraph")&&e.multigraph,this._isCompound=!!u.has(e,"compound")&&e.compound,this._label=void 0,this._defaultNodeLabelFn=u.constant(void 0),this._defaultEdgeLabelFn=u.constant(void 0),this._nodes={},this._isCompound&&(this._parent={},this._children={},this._children[r]={}),this._in={},this._preds={},this._out={},this._sucs={},this._edgeObjs={},this._edgeLabels={};}function f(e,t){e[t]?e[t]++:e[t]=1;}function a(e,t){--e[t]||delete e[t];}function d(e,t,n,r){var o=""+t,a=""+n;if(!e&&a<o){var i=o;o=a,a=i;}return o+c+a+c+(u.isUndefined(r)?s:r)}function i(e,t){return d(e,t.v,t.w,t.name)}o.prototype._nodeCount=0,o.prototype._edgeCount=0,o.prototype.isDirected=function(){return this._isDirected},o.prototype.isMultigraph=function(){return this._isMultigraph},o.prototype.isCompound=function(){return this._isCompound},o.prototype.setGraph=function(e){return this._label=e,this},o.prototype.graph=function(){return this._label},o.prototype.setDefaultNodeLabel=function(e){return u.isFunction(e)||(e=u.constant(e)),this._defaultNodeLabelFn=e,this},o.prototype.nodeCount=function(){return this._nodeCount},o.prototype.nodes=function(){return u.keys(this._nodes)},o.prototype.sources=function(){var t=this;return u.filter(this.nodes(),function(e){return u.isEmpty(t._in[e])})},o.prototype.sinks=function(){var t=this;return u.filter(this.nodes(),function(e){return u.isEmpty(t._out[e])})},o.prototype.setNodes=function(e,t){var n=arguments,r=this;return u.each(e,function(e){1<n.length?r.setNode(e,t):r.setNode(e);}),this},o.prototype.setNode=function(e,t){return u.has(this._nodes,e)?1<arguments.length&&(this._nodes[e]=t):(this._nodes[e]=1<arguments.length?t:this._defaultNodeLabelFn(e),this._isCompound&&(this._parent[e]=r,this._children[e]={},this._children[r][e]=!0),this._in[e]={},this._preds[e]={},this._out[e]={},this._sucs[e]={},++this._nodeCount),this},o.prototype.node=function(e){return this._nodes[e]},o.prototype.hasNode=function(e){return u.has(this._nodes,e)},o.prototype.removeNode=function(e){var t=this;if(u.has(this._nodes,e)){var n=function(e){t.removeEdge(t._edgeObjs[e]);};delete this._nodes[e],this._isCompound&&(this._removeFromParentsChildList(e),delete this._parent[e],u.each(this.children(e),function(e){t.setParent(e);}),delete this._children[e]),u.each(u.keys(this._in[e]),n),delete this._in[e],delete this._preds[e],u.each(u.keys(this._out[e]),n),delete this._out[e],delete this._sucs[e],--this._nodeCount;}return this},o.prototype.setParent=function(e,t){if(!this._isCompound)throw new Error("Cannot set parent in a non-compound graph");if(u.isUndefined(t))t=r;else{for(var n=t+="";!u.isUndefined(n);n=this.parent(n))if(n===e)throw new Error("Setting "+t+" as parent of "+e+" would create a cycle");this.setNode(t);}return this.setNode(e),this._removeFromParentsChildList(e),this._parent[e]=t,this._children[t][e]=!0,this},o.prototype._removeFromParentsChildList=function(e){delete this._children[this._parent[e]][e];},o.prototype.parent=function(e){if(this._isCompound){var t=this._parent[e];if(t!==r)return t}},o.prototype.children=function(e){if(u.isUndefined(e)&&(e=r),this._isCompound){var t=this._children[e];if(t)return u.keys(t)}else{if(e===r)return this.nodes();if(this.hasNode(e))return []}},o.prototype.predecessors=function(e){var t=this._preds[e];if(t)return u.keys(t)},o.prototype.successors=function(e){var t=this._sucs[e];if(t)return u.keys(t)},o.prototype.neighbors=function(e){var t=this.predecessors(e);if(t)return u.union(t,this.successors(e))},o.prototype.isLeaf=function(e){return 0===(this.isDirected()?this.successors(e):this.neighbors(e)).length},o.prototype.filterNodes=function(n){var r=new this.constructor({directed:this._isDirected,multigraph:this._isMultigraph,compound:this._isCompound});r.setGraph(this.graph());var o=this;u.each(this._nodes,function(e,t){n(t)&&r.setNode(t,e);}),u.each(this._edgeObjs,function(e){r.hasNode(e.v)&&r.hasNode(e.w)&&r.setEdge(e,o.edge(e));});var a={};return this._isCompound&&u.each(r.nodes(),function(e){r.setParent(e,function e(t){var n=o.parent(t);return void 0===n||r.hasNode(n)?a[t]=n:n in a?a[n]:e(n)}(e));}),r},o.prototype.setDefaultEdgeLabel=function(e){return u.isFunction(e)||(e=u.constant(e)),this._defaultEdgeLabelFn=e,this},o.prototype.edgeCount=function(){return this._edgeCount},o.prototype.edges=function(){return u.values(this._edgeObjs)},o.prototype.setPath=function(e,n){var r=this,o=arguments;return u.reduce(e,function(e,t){return 1<o.length?r.setEdge(e,t,n):r.setEdge(e,t),t}),this},o.prototype.setEdge=function(){var e,t,n,r,o=!1,a=arguments[0];"object"===h(a)&&null!==a&&"v"in a?(e=a.v,t=a.w,n=a.name,2===arguments.length&&(r=arguments[1],o=!0)):(e=a,t=arguments[1],n=arguments[3],2<arguments.length&&(r=arguments[2],o=!0)),e=""+e,t=""+t,u.isUndefined(n)||(n=""+n);var i=d(this._isDirected,e,t,n);if(u.has(this._edgeLabels,i))return o&&(this._edgeLabels[i]=r),this;if(!u.isUndefined(n)&&!this._isMultigraph)throw new Error("Cannot set a named edge when isMultigraph = false");this.setNode(e),this.setNode(t),this._edgeLabels[i]=o?r:this._defaultEdgeLabelFn(e,t,n);var s=function(e,t,n,r){var o=""+t,a=""+n;if(!e&&a<o){var i=o;o=a,a=i;}var s={v:o,w:a};r&&(s.name=r);return s}(this._isDirected,e,t,n);return e=s.v,t=s.w,Object.freeze(s),this._edgeObjs[i]=s,f(this._preds[t],e),f(this._sucs[e],t),this._in[t][i]=s,this._out[e][i]=s,this._edgeCount++,this},o.prototype.edge=function(e,t,n){var r=1===arguments.length?i(this._isDirected,e):d(this._isDirected,e,t,n);return this._edgeLabels[r]},o.prototype.hasEdge=function(e,t,n){var r=1===arguments.length?i(this._isDirected,e):d(this._isDirected,e,t,n);return u.has(this._edgeLabels,r)},o.prototype.removeEdge=function(e,t,n){var r=1===arguments.length?i(this._isDirected,arguments[0]):d(this._isDirected,e,t,n),o=this._edgeObjs[r];return o&&(e=o.v,t=o.w,delete this._edgeLabels[r],delete this._edgeObjs[r],a(this._preds[t],e),a(this._sucs[e],t),delete this._in[t][r],delete this._out[e][r],this._edgeCount--),this},o.prototype.inEdges=function(e,t){var n=this._in[e];if(n){var r=u.values(n);return t?u.filter(r,function(e){return e.v===t}):r}},o.prototype.outEdges=function(e,t){var n=this._out[e];if(n){var r=u.values(n);return t?u.filter(r,function(e){return e.w===t}):r}},o.prototype.nodeEdges=function(e,t){var n=this.inEdges(e,t);if(n)return n.concat(this.outEdges(e,t))};},{"./lodash":49}],47:[function(e,t,n){t.exports={Graph:e("./graph"),version:e("./version")};},{"./graph":46,"./version":50}],48:[function(e,t,n){var a=e("./lodash"),r=e("./graph");t.exports={write:function(e){var t={options:{directed:e.isDirected(),multigraph:e.isMultigraph(),compound:e.isCompound()},nodes:function(o){return a.map(o.nodes(),function(e){var t=o.node(e),n=o.parent(e),r={v:e};return a.isUndefined(t)||(r.value=t),a.isUndefined(n)||(r.parent=n),r})}(e),edges:function(r){return a.map(r.edges(),function(e){var t=r.edge(e),n={v:e.v,w:e.w};return a.isUndefined(e.name)||(n.name=e.name),a.isUndefined(t)||(n.value=t),n})}(e)};a.isUndefined(e.graph())||(t.value=a.clone(e.graph()));return t},read:function(e){var t=new r(e.options).setGraph(e.value);return a.each(e.nodes,function(e){t.setNode(e.v,e.value),e.parent&&t.setParent(e.v,e.parent);}),a.each(e.edges,function(e){t.setEdge({v:e.v,w:e.w,name:e.name},e.value);}),t}};},{"./graph":46,"./lodash":49}],49:[function(e,t,n){var r;if("function"==typeof e)try{r={clone:e("lodash/clone"),constant:e("lodash/constant"),each:e("lodash/each"),filter:e("lodash/filter"),has:e("lodash/has"),isArray:e("lodash/isArray"),isEmpty:e("lodash/isEmpty"),isFunction:e("lodash/isFunction"),isUndefined:e("lodash/isUndefined"),keys:e("lodash/keys"),map:e("lodash/map"),reduce:e("lodash/reduce"),size:e("lodash/size"),transform:e("lodash/transform"),union:e("lodash/union"),values:e("lodash/values")};}catch(e){}r=r||window._,t.exports=r;},{"lodash/clone":226,"lodash/constant":228,"lodash/each":230,"lodash/filter":232,"lodash/has":239,"lodash/isArray":243,"lodash/isEmpty":247,"lodash/isFunction":248,"lodash/isUndefined":258,"lodash/keys":259,"lodash/map":262,"lodash/reduce":274,"lodash/size":275,"lodash/transform":284,"lodash/union":285,"lodash/values":287}],50:[function(e,t,n){t.exports="2.1.7";},{}],51:[function(e,t,n){var r=e("./_getNative")(e("./_root"),"DataView");t.exports=r;},{"./_getNative":163,"./_root":208}],52:[function(e,t,n){var r=e("./_hashClear"),o=e("./_hashDelete"),a=e("./_hashGet"),i=e("./_hashHas"),s=e("./_hashSet");function u(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1]);}}u.prototype.clear=r,u.prototype.delete=o,u.prototype.get=a,u.prototype.has=i,u.prototype.set=s,t.exports=u;},{"./_hashClear":172,"./_hashDelete":173,"./_hashGet":174,"./_hashHas":175,"./_hashSet":176}],53:[function(e,t,n){var r=e("./_listCacheClear"),o=e("./_listCacheDelete"),a=e("./_listCacheGet"),i=e("./_listCacheHas"),s=e("./_listCacheSet");function u(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1]);}}u.prototype.clear=r,u.prototype.delete=o,u.prototype.get=a,u.prototype.has=i,u.prototype.set=s,t.exports=u;},{"./_listCacheClear":188,"./_listCacheDelete":189,"./_listCacheGet":190,"./_listCacheHas":191,"./_listCacheSet":192}],54:[function(e,t,n){var r=e("./_getNative")(e("./_root"),"Map");t.exports=r;},{"./_getNative":163,"./_root":208}],55:[function(e,t,n){var r=e("./_mapCacheClear"),o=e("./_mapCacheDelete"),a=e("./_mapCacheGet"),i=e("./_mapCacheHas"),s=e("./_mapCacheSet");function u(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1]);}}u.prototype.clear=r,u.prototype.delete=o,u.prototype.get=a,u.prototype.has=i,u.prototype.set=s,t.exports=u;},{"./_mapCacheClear":193,"./_mapCacheDelete":194,"./_mapCacheGet":195,"./_mapCacheHas":196,"./_mapCacheSet":197}],56:[function(e,t,n){var r=e("./_getNative")(e("./_root"),"Promise");t.exports=r;},{"./_getNative":163,"./_root":208}],57:[function(e,t,n){var r=e("./_getNative")(e("./_root"),"Set");t.exports=r;},{"./_getNative":163,"./_root":208}],58:[function(e,t,n){var r=e("./_MapCache"),o=e("./_setCacheAdd"),a=e("./_setCacheHas");function i(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new r;++t<n;)this.add(e[t]);}i.prototype.add=i.prototype.push=o,i.prototype.has=a,t.exports=i;},{"./_MapCache":55,"./_setCacheAdd":210,"./_setCacheHas":211}],59:[function(e,t,n){var r=e("./_ListCache"),o=e("./_stackClear"),a=e("./_stackDelete"),i=e("./_stackGet"),s=e("./_stackHas"),u=e("./_stackSet");function c(e){var t=this.__data__=new r(e);this.size=t.size;}c.prototype.clear=o,c.prototype.delete=a,c.prototype.get=i,c.prototype.has=s,c.prototype.set=u,t.exports=c;},{"./_ListCache":53,"./_stackClear":215,"./_stackDelete":216,"./_stackGet":217,"./_stackHas":218,"./_stackSet":219}],60:[function(e,t,n){var r=e("./_root").Symbol;t.exports=r;},{"./_root":208}],61:[function(e,t,n){var r=e("./_root").Uint8Array;t.exports=r;},{"./_root":208}],62:[function(e,t,n){var r=e("./_getNative")(e("./_root"),"WeakMap");t.exports=r;},{"./_getNative":163,"./_root":208}],63:[function(e,t,n){t.exports=function(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)};},{}],64:[function(e,t,n){t.exports=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r&&!1!==t(e[n],n,e););return e};},{}],65:[function(e,t,n){t.exports=function(e,t){for(var n=-1,r=null==e?0:e.length,o=0,a=[];++n<r;){var i=e[n];t(i,n,e)&&(a[o++]=i);}return a};},{}],66:[function(e,t,n){var r=e("./_baseIndexOf");t.exports=function(e,t){return !!(null==e?0:e.length)&&-1<r(e,t,0)};},{"./_baseIndexOf":95}],67:[function(e,t,n){t.exports=function(e,t,n){for(var r=-1,o=null==e?0:e.length;++r<o;)if(n(t,e[r]))return !0;return !1};},{}],68:[function(e,t,n){var f=e("./_baseTimes"),d=e("./isArguments"),h=e("./isArray"),l=e("./isBuffer"),p=e("./_isIndex"),_=e("./isTypedArray"),v=Object.prototype.hasOwnProperty;t.exports=function(e,t){var n=h(e),r=!n&&d(e),o=!n&&!r&&l(e),a=!n&&!r&&!o&&_(e),i=n||r||o||a,s=i?f(e.length,String):[],u=s.length;for(var c in e)!t&&!v.call(e,c)||i&&("length"==c||o&&("offset"==c||"parent"==c)||a&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||p(c,u))||s.push(c);return s};},{"./_baseTimes":125,"./_isIndex":181,"./isArguments":242,"./isArray":243,"./isBuffer":246,"./isTypedArray":257}],69:[function(e,t,n){t.exports=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o};},{}],70:[function(e,t,n){t.exports=function(e,t){for(var n=-1,r=t.length,o=e.length;++n<r;)e[o+n]=t[n];return e};},{}],71:[function(e,t,n){t.exports=function(e,t,n,r){var o=-1,a=null==e?0:e.length;for(r&&a&&(n=e[++o]);++o<a;)n=t(n,e[o],o,e);return n};},{}],72:[function(e,t,n){t.exports=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return !0;return !1};},{}],73:[function(e,t,n){var r=e("./_baseProperty")("length");t.exports=r;},{"./_baseProperty":117}],74:[function(e,t,n){var r=e("./_baseAssignValue"),o=e("./eq");t.exports=function(e,t,n){(void 0===n||o(e[t],n))&&(void 0!==n||t in e)||r(e,t,n);};},{"./_baseAssignValue":79,"./eq":231}],75:[function(e,t,n){var o=e("./_baseAssignValue"),a=e("./eq"),i=Object.prototype.hasOwnProperty;t.exports=function(e,t,n){var r=e[t];i.call(e,t)&&a(r,n)&&(void 0!==n||t in e)||o(e,t,n);};},{"./_baseAssignValue":79,"./eq":231}],76:[function(e,t,n){var r=e("./eq");t.exports=function(e,t){for(var n=e.length;n--;)if(r(e[n][0],t))return n;return -1};},{"./eq":231}],77:[function(e,t,n){var r=e("./_copyObject"),o=e("./keys");t.exports=function(e,t){return e&&r(t,o(t),e)};},{"./_copyObject":143,"./keys":259}],78:[function(e,t,n){var r=e("./_copyObject"),o=e("./keysIn");t.exports=function(e,t){return e&&r(t,o(t),e)};},{"./_copyObject":143,"./keysIn":260}],79:[function(e,t,n){var r=e("./_defineProperty");t.exports=function(e,t,n){"__proto__"==t&&r?r(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n;};},{"./_defineProperty":153}],80:[function(e,t,n){var g=e("./_Stack"),y=e("./_arrayEach"),b=e("./_assignValue"),m=e("./_baseAssign"),x=e("./_baseAssignIn"),w=e("./_cloneBuffer"),E=e("./_copyArray"),j=e("./_copySymbols"),k=e("./_copySymbolsIn"),A=e("./_getAllKeys"),O=e("./_getAllKeysIn"),I=e("./_getTag"),S=e("./_initCloneArray"),C=e("./_initCloneByTag"),N=e("./_initCloneObject"),L=e("./isArray"),M=e("./isBuffer"),T=e("./isMap"),P=e("./isObject"),F=e("./isSet"),B=e("./keys"),D=1,G=2,R=4,U="[object Arguments]",z="[object Function]",V="[object GeneratorFunction]",q="[object Object]",K={};K[U]=K["[object Array]"]=K["[object ArrayBuffer]"]=K["[object DataView]"]=K["[object Boolean]"]=K["[object Date]"]=K["[object Float32Array]"]=K["[object Float64Array]"]=K["[object Int8Array]"]=K["[object Int16Array]"]=K["[object Int32Array]"]=K["[object Map]"]=K["[object Number]"]=K[q]=K["[object RegExp]"]=K["[object Set]"]=K["[object String]"]=K["[object Symbol]"]=K["[object Uint8Array]"]=K["[object Uint8ClampedArray]"]=K["[object Uint16Array]"]=K["[object Uint32Array]"]=!0,K["[object Error]"]=K[z]=K["[object WeakMap]"]=!1,t.exports=function n(r,o,a,e,t,i){var s,u=o&D,c=o&G,f=o&R;if(a&&(s=t?a(r,e,t,i):a(r)),void 0!==s)return s;if(!P(r))return r;var d=L(r);if(d){if(s=S(r),!u)return E(r,s)}else{var h=I(r),l=h==z||h==V;if(M(r))return w(r,u);if(h==q||h==U||l&&!t){if(s=c||l?{}:N(r),!u)return c?k(r,x(s,r)):j(r,m(s,r))}else{if(!K[h])return t?r:{};s=C(r,h,u);}}var p=(i=i||new g).get(r);if(p)return p;if(i.set(r,s),F(r))return r.forEach(function(e){s.add(n(e,o,a,e,r,i));}),s;if(T(r))return r.forEach(function(e,t){s.set(t,n(e,o,a,t,r,i));}),s;var _=f?c?O:A:c?keysIn:B,v=d?void 0:_(r);return y(v||r,function(e,t){v&&(e=r[t=e]),b(s,t,n(e,o,a,t,r,i));}),s};},{"./_Stack":59,"./_arrayEach":64,"./_assignValue":75,"./_baseAssign":77,"./_baseAssignIn":78,"./_cloneBuffer":135,"./_copyArray":142,"./_copySymbols":144,"./_copySymbolsIn":145,"./_getAllKeys":159,"./_getAllKeysIn":160,"./_getTag":168,"./_initCloneArray":177,"./_initCloneByTag":178,"./_initCloneObject":179,"./isArray":243,"./isBuffer":246,"./isMap":250,"./isObject":251,"./isSet":254,"./keys":259}],81:[function(e,t,n){function r(e){if(!o(e))return {};if(a)return a(e);i.prototype=e;var t=new i;return i.prototype=void 0,t}var o=e("./isObject"),a=Object.create;function i(){}t.exports=r;},{"./isObject":251}],82:[function(e,t,n){var r=e("./_baseForOwn"),o=e("./_createBaseEach")(r);t.exports=o;},{"./_baseForOwn":88,"./_createBaseEach":148}],83:[function(e,t,n){var c=e("./isSymbol");t.exports=function(e,t,n){for(var r=-1,o=e.length;++r<o;){var a=e[r],i=t(a);if(null!=i&&(void 0===s?i==i&&!c(i):n(i,s)))var s=i,u=a;}return u};},{"./isSymbol":256}],84:[function(e,t,n){var a=e("./_baseEach");t.exports=function(e,r){var o=[];return a(e,function(e,t,n){r(e,t,n)&&o.push(e);}),o};},{"./_baseEach":82}],85:[function(e,t,n){t.exports=function(e,t,n,r){for(var o=e.length,a=n+(r?1:-1);r?a--:++a<o;)if(t(e[a],a,e))return a;return -1};},{}],86:[function(e,t,n){var c=e("./_arrayPush"),f=e("./_isFlattenable");t.exports=function e(t,n,r,o,a){var i=-1,s=t.length;for(r=r||f,a=a||[];++i<s;){var u=t[i];0<n&&r(u)?1<n?e(u,n-1,r,o,a):c(a,u):o||(a[a.length]=u);}return a};},{"./_arrayPush":70,"./_isFlattenable":180}],87:[function(e,t,n){var r=e("./_createBaseFor")();t.exports=r;},{"./_createBaseFor":149}],88:[function(e,t,n){var r=e("./_baseFor"),o=e("./keys");t.exports=function(e,t){return e&&r(e,t,o)};},{"./_baseFor":87,"./keys":259}],89:[function(e,t,n){var o=e("./_castPath"),a=e("./_toKey");t.exports=function(e,t){for(var n=0,r=(t=o(t,e)).length;null!=e&&n<r;)e=e[a(t[n++])];return n&&n==r?e:void 0};},{"./_castPath":133,"./_toKey":223}],90:[function(e,t,n){var o=e("./_arrayPush"),a=e("./isArray");t.exports=function(e,t,n){var r=t(e);return a(e)?r:o(r,n(e))};},{"./_arrayPush":70,"./isArray":243}],91:[function(e,t,n){var r=e("./_Symbol"),o=e("./_getRawTag"),a=e("./_objectToString"),i=r?r.toStringTag:void 0;t.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":i&&i in Object(e)?o(e):a(e)};},{"./_Symbol":60,"./_getRawTag":165,"./_objectToString":205}],92:[function(e,t,n){t.exports=function(e,t){return t<e};},{}],93:[function(e,t,n){var r=Object.prototype.hasOwnProperty;t.exports=function(e,t){return null!=e&&r.call(e,t)};},{}],94:[function(e,t,n){t.exports=function(e,t){return null!=e&&t in Object(e)};},{}],95:[function(e,t,n){var r=e("./_baseFindIndex"),o=e("./_baseIsNaN"),a=e("./_strictIndexOf");t.exports=function(e,t,n){return t==t?a(e,t,n):r(e,o,n)};},{"./_baseFindIndex":85,"./_baseIsNaN":101,"./_strictIndexOf":220}],96:[function(e,t,n){var r=e("./_baseGetTag"),o=e("./isObjectLike");t.exports=function(e){return o(e)&&"[object Arguments]"==r(e)};},{"./_baseGetTag":91,"./isObjectLike":252}],97:[function(e,t,n){var i=e("./_baseIsEqualDeep"),s=e("./isObjectLike");t.exports=function e(t,n,r,o,a){return t===n||(null==t||null==n||!s(t)&&!s(n)?t!=t&&n!=n:i(t,n,r,o,e,a))};},{"./_baseIsEqualDeep":98,"./isObjectLike":252}],98:[function(e,t,n){var _=e("./_Stack"),v=e("./_equalArrays"),g=e("./_equalByTag"),y=e("./_equalObjects"),b=e("./_getTag"),m=e("./isArray"),x=e("./isBuffer"),w=e("./isTypedArray"),E="[object Arguments]",j="[object Array]",k="[object Object]",A=Object.prototype.hasOwnProperty;t.exports=function(e,t,n,r,o,a){var i=m(e),s=m(t),u=i?j:b(e),c=s?j:b(t),f=(u=u==E?k:u)==k,d=(c=c==E?k:c)==k,h=u==c;if(h&&x(e)){if(!x(t))return !1;f=!(i=!0);}if(h&&!f)return a=a||new _,i||w(e)?v(e,t,n,r,o,a):g(e,t,u,n,r,o,a);if(!(1&n)){var l=f&&A.call(e,"__wrapped__"),p=d&&A.call(t,"__wrapped__");if(l||p)return o(l?e.value():e,p?t.value():t,n,r,a=a||new _)}return h&&(a=a||new _,y(e,t,n,r,o,a))};},{"./_Stack":59,"./_equalArrays":154,"./_equalByTag":155,"./_equalObjects":156,"./_getTag":168,"./isArray":243,"./isBuffer":246,"./isTypedArray":257}],99:[function(e,t,n){var r=e("./_getTag"),o=e("./isObjectLike");t.exports=function(e){return o(e)&&"[object Map]"==r(e)};},{"./_getTag":168,"./isObjectLike":252}],100:[function(e,t,n){var l=e("./_Stack"),p=e("./_baseIsEqual");t.exports=function(e,t,n,r){var o=n.length,a=o,i=!r;if(null==e)return !a;for(e=Object(e);o--;){var s=n[o];if(i&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return !1}for(;++o<a;){var u=(s=n[o])[0],c=e[u],f=s[1];if(i&&s[2]){if(void 0===c&&!(u in e))return !1}else{var d=new l;if(r)var h=r(c,f,u,e,t,d);if(!(void 0===h?p(f,c,3,r,d):h))return !1}}return !0};},{"./_Stack":59,"./_baseIsEqual":97}],101:[function(e,t,n){t.exports=function(e){return e!=e};},{}],102:[function(e,t,n){var r=e("./isFunction"),o=e("./_isMasked"),a=e("./isObject"),i=e("./_toSource"),s=/^\[object .+?Constructor\]$/,u=Function.prototype,c=Object.prototype,f=u.toString,d=c.hasOwnProperty,h=RegExp("^"+f.call(d).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(e){return !(!a(e)||o(e))&&(r(e)?h:s).test(i(e))};},{"./_isMasked":185,"./_toSource":224,"./isFunction":248,"./isObject":251}],103:[function(e,t,n){var r=e("./_getTag"),o=e("./isObjectLike");t.exports=function(e){return o(e)&&"[object Set]"==r(e)};},{"./_getTag":168,"./isObjectLike":252}],104:[function(e,t,n){var r=e("./_baseGetTag"),o=e("./isLength"),a=e("./isObjectLike"),i={};i["[object Float32Array]"]=i["[object Float64Array]"]=i["[object Int8Array]"]=i["[object Int16Array]"]=i["[object Int32Array]"]=i["[object Uint8Array]"]=i["[object Uint8ClampedArray]"]=i["[object Uint16Array]"]=i["[object Uint32Array]"]=!0,i["[object Arguments]"]=i["[object Array]"]=i["[object ArrayBuffer]"]=i["[object Boolean]"]=i["[object DataView]"]=i["[object Date]"]=i["[object Error]"]=i["[object Function]"]=i["[object Map]"]=i["[object Number]"]=i["[object Object]"]=i["[object RegExp]"]=i["[object Set]"]=i["[object String]"]=i["[object WeakMap]"]=!1,t.exports=function(e){return a(e)&&o(e.length)&&!!i[r(e)]};},{"./_baseGetTag":91,"./isLength":249,"./isObjectLike":252}],105:[function(e,t,n){var r=e("./_baseMatches"),o=e("./_baseMatchesProperty"),a=e("./identity"),i=e("./isArray"),s=e("./property");t.exports=function(e){return "function"==typeof e?e:null==e?a:"object"==h(e)?i(e)?o(e[0],e[1]):r(e):s(e)};},{"./_baseMatches":110,"./_baseMatchesProperty":111,"./identity":241,"./isArray":243,"./property":272}],106:[function(e,t,n){var r=e("./_isPrototype"),o=e("./_nativeKeys"),a=Object.prototype.hasOwnProperty;t.exports=function(e){if(!r(e))return o(e);var t=[];for(var n in Object(e))a.call(e,n)&&"constructor"!=n&&t.push(n);return t};},{"./_isPrototype":186,"./_nativeKeys":202}],107:[function(e,t,n){var o=e("./isObject"),a=e("./_isPrototype"),i=e("./_nativeKeysIn"),s=Object.prototype.hasOwnProperty;t.exports=function(e){if(!o(e))return i(e);var t=a(e),n=[];for(var r in e)("constructor"!=r||!t&&s.call(e,r))&&n.push(r);return n};},{"./_isPrototype":186,"./_nativeKeysIn":203,"./isObject":251}],108:[function(e,t,n){t.exports=function(e,t){return e<t};},{}],109:[function(e,t,n){var i=e("./_baseEach"),s=e("./isArrayLike");t.exports=function(e,r){var o=-1,a=s(e)?Array(e.length):[];return i(e,function(e,t,n){a[++o]=r(e,t,n);}),a};},{"./_baseEach":82,"./isArrayLike":244}],110:[function(e,t,n){var r=e("./_baseIsMatch"),o=e("./_getMatchData"),a=e("./_matchesStrictComparable");t.exports=function(t){var n=o(t);return 1==n.length&&n[0][2]?a(n[0][0],n[0][1]):function(e){return e===t||r(e,t,n)}};},{"./_baseIsMatch":100,"./_getMatchData":162,"./_matchesStrictComparable":199}],111:[function(e,t,n){var o=e("./_baseIsEqual"),a=e("./get"),i=e("./hasIn"),s=e("./_isKey"),u=e("./_isStrictComparable"),c=e("./_matchesStrictComparable"),f=e("./_toKey");t.exports=function(n,r){return s(n)&&u(r)?c(f(n),r):function(e){var t=a(e,n);return void 0===t&&t===r?i(e,n):o(r,t,3)}};},{"./_baseIsEqual":97,"./_isKey":183,"./_isStrictComparable":187,"./_matchesStrictComparable":199,"./_toKey":223,"./get":238,"./hasIn":240}],112:[function(e,t,n){var c=e("./_Stack"),f=e("./_assignMergeValue"),d=e("./_baseFor"),h=e("./_baseMergeDeep"),l=e("./isObject"),p=e("./keysIn"),_=e("./_safeGet");t.exports=function r(o,a,i,s,u){o!==a&&d(a,function(e,t){if(l(e))u=u||new c,h(o,a,t,i,r,s,u);else{var n=s?s(_(o,t),e,t+"",o,a,u):void 0;void 0===n&&(n=e),f(o,t,n);}},p);};},{"./_Stack":59,"./_assignMergeValue":74,"./_baseFor":87,"./_baseMergeDeep":113,"./_safeGet":209,"./isObject":251,"./keysIn":260}],113:[function(e,t,n){var _=e("./_assignMergeValue"),v=e("./_cloneBuffer"),g=e("./_cloneTypedArray"),y=e("./_copyArray"),b=e("./_initCloneObject"),m=e("./isArguments"),x=e("./isArray"),w=e("./isArrayLikeObject"),E=e("./isBuffer"),j=e("./isFunction"),k=e("./isObject"),A=e("./isPlainObject"),O=e("./isTypedArray"),I=e("./_safeGet"),S=e("./toPlainObject");t.exports=function(e,t,n,r,o,a,i){var s=I(e,n),u=I(t,n),c=i.get(u);if(c)_(e,n,c);else{var f=a?a(s,u,n+"",e,t,i):void 0,d=void 0===f;if(d){var h=x(u),l=!h&&E(u),p=!h&&!l&&O(u);f=u,h||l||p?f=x(s)?s:w(s)?y(s):l?v(u,!(d=!1)):p?g(u,!(d=!1)):[]:A(u)||m(u)?m(f=s)?f=S(s):(!k(s)||r&&j(s))&&(f=b(u)):d=!1;}d&&(i.set(u,f),o(f,u,r,a,i),i.delete(u)),_(e,n,f);}};},{"./_assignMergeValue":74,"./_cloneBuffer":135,"./_cloneTypedArray":139,"./_copyArray":142,"./_initCloneObject":179,"./_safeGet":209,"./isArguments":242,"./isArray":243,"./isArrayLikeObject":245,"./isBuffer":246,"./isFunction":248,"./isObject":251,"./isPlainObject":253,"./isTypedArray":257,"./toPlainObject":282}],114:[function(e,t,n){var a=e("./_arrayMap"),i=e("./_baseIteratee"),s=e("./_baseMap"),u=e("./_baseSortBy"),c=e("./_baseUnary"),f=e("./_compareMultiple"),d=e("./identity");t.exports=function(e,r,n){var o=-1;r=a(r.length?r:[d],c(i));var t=s(e,function(t,e,n){return {criteria:a(r,function(e){return e(t)}),index:++o,value:t}});return u(t,function(e,t){return f(e,t,n)})};},{"./_arrayMap":69,"./_baseIteratee":105,"./_baseMap":109,"./_baseSortBy":124,"./_baseUnary":127,"./_compareMultiple":141,"./identity":241}],115:[function(e,t,n){var r=e("./_basePickBy"),o=e("./hasIn");t.exports=function(n,e){return r(n,e,function(e,t){return o(n,t)})};},{"./_basePickBy":116,"./hasIn":240}],116:[function(e,t,n){var u=e("./_baseGet"),c=e("./_baseSet"),f=e("./_castPath");t.exports=function(e,t,n){for(var r=-1,o=t.length,a={};++r<o;){var i=t[r],s=u(e,i);n(s,i)&&c(a,f(i,e),s);}return a};},{"./_baseGet":89,"./_baseSet":122,"./_castPath":133}],117:[function(e,t,n){t.exports=function(t){return function(e){return null==e?void 0:e[t]}};},{}],118:[function(e,t,n){var r=e("./_baseGet");t.exports=function(t){return function(e){return r(e,t)}};},{"./_baseGet":89}],119:[function(e,t,n){var s=Math.ceil,u=Math.max;t.exports=function(e,t,n,r){for(var o=-1,a=u(s((t-e)/(n||1)),0),i=Array(a);a--;)i[r?a:++o]=e,e+=n;return i};},{}],120:[function(e,t,n){t.exports=function(e,r,o,a,t){return t(e,function(e,t,n){o=a?(a=!1,e):r(o,e,t,n);}),o};},{}],121:[function(e,t,n){var r=e("./identity"),o=e("./_overRest"),a=e("./_setToString");t.exports=function(e,t){return a(o(e,t,r),e+"")};},{"./_overRest":207,"./_setToString":213,"./identity":241}],122:[function(e,t,n){var d=e("./_assignValue"),h=e("./_castPath"),l=e("./_isIndex"),p=e("./isObject"),_=e("./_toKey");t.exports=function(e,t,n,r){if(!p(e))return e;for(var o=-1,a=(t=h(t,e)).length,i=a-1,s=e;null!=s&&++o<a;){var u=_(t[o]),c=n;if(o!=i){var f=s[u];void 0===(c=r?r(f,u,s):void 0)&&(c=p(f)?f:l(t[o+1])?[]:{});}d(s,u,c),s=s[u];}return e};},{"./_assignValue":75,"./_castPath":133,"./_isIndex":181,"./_toKey":223,"./isObject":251}],123:[function(e,t,n){var r=e("./constant"),o=e("./_defineProperty"),a=e("./identity"),i=o?function(e,t){return o(e,"toString",{configurable:!0,enumerable:!1,value:r(t),writable:!0})}:a;t.exports=i;},{"./_defineProperty":153,"./constant":228,"./identity":241}],124:[function(e,t,n){t.exports=function(e,t){var n=e.length;for(e.sort(t);n--;)e[n]=e[n].value;return e};},{}],125:[function(e,t,n){t.exports=function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r};},{}],126:[function(e,t,n){var r=e("./_Symbol"),o=e("./_arrayMap"),a=e("./isArray"),i=e("./isSymbol"),s=1/0,u=r?r.prototype:void 0,c=u?u.toString:void 0;t.exports=function e(t){if("string"==typeof t)return t;if(a(t))return o(t,e)+"";if(i(t))return c?c.call(t):"";var n=t+"";return "0"==n&&1/t==-s?"-0":n};},{"./_Symbol":60,"./_arrayMap":69,"./isArray":243,"./isSymbol":256}],127:[function(e,t,n){t.exports=function(t){return function(e){return t(e)}};},{}],128:[function(e,t,n){var l=e("./_SetCache"),p=e("./_arrayIncludes"),_=e("./_arrayIncludesWith"),v=e("./_cacheHas"),g=e("./_createSet"),y=e("./_setToArray");t.exports=function(e,t,n){var r=-1,o=p,a=e.length,i=!0,s=[],u=s;if(n)i=!1,o=_;else if(200<=a){var c=t?null:g(e);if(c)return y(c);i=!1,o=v,u=new l;}else u=t?[]:s;e:for(;++r<a;){var f=e[r],d=t?t(f):f;if(f=n||0!==f?f:0,i&&d==d){for(var h=u.length;h--;)if(u[h]===d)continue e;t&&u.push(d),s.push(f);}else o(u,d,n)||(u!==s&&u.push(d),s.push(f));}return s};},{"./_SetCache":58,"./_arrayIncludes":66,"./_arrayIncludesWith":67,"./_cacheHas":131,"./_createSet":152,"./_setToArray":212}],129:[function(e,t,n){var r=e("./_arrayMap");t.exports=function(t,e){return r(e,function(e){return t[e]})};},{"./_arrayMap":69}],130:[function(e,t,n){t.exports=function(e,t,n){for(var r=-1,o=e.length,a=t.length,i={};++r<o;){var s=r<a?t[r]:void 0;n(i,e[r],s);}return i};},{}],131:[function(e,t,n){t.exports=function(e,t){return e.has(t)};},{}],132:[function(e,t,n){var r=e("./identity");t.exports=function(e){return "function"==typeof e?e:r};},{"./identity":241}],133:[function(e,t,n){var r=e("./isArray"),o=e("./_isKey"),a=e("./_stringToPath"),i=e("./toString");t.exports=function(e,t){return r(e)?e:o(e,t)?[e]:a(i(e))};},{"./_isKey":183,"./_stringToPath":222,"./isArray":243,"./toString":283}],134:[function(e,t,n){var r=e("./_Uint8Array");t.exports=function(e){var t=new e.constructor(e.byteLength);return new r(t).set(new r(e)),t};},{"./_Uint8Array":61}],135:[function(e,t,n){var r=e("./_root"),o="object"==h(n)&&n&&!n.nodeType&&n,a=o&&"object"==h(t)&&t&&!t.nodeType&&t,i=a&&a.exports===o?r.Buffer:void 0,s=i?i.allocUnsafe:void 0;t.exports=function(e,t){if(t)return e.slice();var n=e.length,r=s?s(n):new e.constructor(n);return e.copy(r),r};},{"./_root":208}],136:[function(e,t,n){var r=e("./_cloneArrayBuffer");t.exports=function(e,t){var n=t?r(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)};},{"./_cloneArrayBuffer":134}],137:[function(e,t,n){var r=/\w*$/;t.exports=function(e){var t=new e.constructor(e.source,r.exec(e));return t.lastIndex=e.lastIndex,t};},{}],138:[function(e,t,n){var r=e("./_Symbol"),o=r?r.prototype:void 0,a=o?o.valueOf:void 0;t.exports=function(e){return a?Object(a.call(e)):{}};},{"./_Symbol":60}],139:[function(e,t,n){var r=e("./_cloneArrayBuffer");t.exports=function(e,t){var n=t?r(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)};},{"./_cloneArrayBuffer":134}],140:[function(e,t,n){var f=e("./isSymbol");t.exports=function(e,t){if(e!==t){var n=void 0!==e,r=null===e,o=e==e,a=f(e),i=void 0!==t,s=null===t,u=t==t,c=f(t);if(!s&&!c&&!a&&t<e||a&&i&&u&&!s&&!c||r&&i&&u||!n&&u||!o)return 1;if(!r&&!a&&!c&&e<t||c&&n&&o&&!r&&!a||s&&n&&o||!i&&o||!u)return -1}return 0};},{"./isSymbol":256}],141:[function(e,t,n){var c=e("./_compareAscending");t.exports=function(e,t,n){for(var r=-1,o=e.criteria,a=t.criteria,i=o.length,s=n.length;++r<i;){var u=c(o[r],a[r]);if(u)return s<=r?u:u*("desc"==n[r]?-1:1)}return e.index-t.index};},{"./_compareAscending":140}],142:[function(e,t,n){t.exports=function(e,t){var n=-1,r=e.length;for(t=t||Array(r);++n<r;)t[n]=e[n];return t};},{}],143:[function(e,t,n){var c=e("./_assignValue"),f=e("./_baseAssignValue");t.exports=function(e,t,n,r){var o=!n;n=n||{};for(var a=-1,i=t.length;++a<i;){var s=t[a],u=r?r(n[s],e[s],s,n,e):void 0;void 0===u&&(u=e[s]),o?f(n,s,u):c(n,s,u);}return n};},{"./_assignValue":75,"./_baseAssignValue":79}],144:[function(e,t,n){var r=e("./_copyObject"),o=e("./_getSymbols");t.exports=function(e,t){return r(e,o(e),t)};},{"./_copyObject":143,"./_getSymbols":166}],145:[function(e,t,n){var r=e("./_copyObject"),o=e("./_getSymbolsIn");t.exports=function(e,t){return r(e,o(e),t)};},{"./_copyObject":143,"./_getSymbolsIn":167}],146:[function(e,t,n){var r=e("./_root")["__core-js_shared__"];t.exports=r;},{"./_root":208}],147:[function(e,t,n){var r=e("./_baseRest"),u=e("./_isIterateeCall");t.exports=function(s){return r(function(e,t){var n=-1,r=t.length,o=1<r?t[r-1]:void 0,a=2<r?t[2]:void 0;for(o=3<s.length&&"function"==typeof o?(r--,o):void 0,a&&u(t[0],t[1],a)&&(o=r<3?void 0:o,r=1),e=Object(e);++n<r;){var i=t[n];i&&s(e,i,n,o);}return e})};},{"./_baseRest":121,"./_isIterateeCall":182}],148:[function(e,t,n){var s=e("./isArrayLike");t.exports=function(a,i){return function(e,t){if(null==e)return e;if(!s(e))return a(e,t);for(var n=e.length,r=i?n:-1,o=Object(e);(i?r--:++r<n)&&!1!==t(o[r],r,o););return e}};},{"./isArrayLike":244}],149:[function(e,t,n){t.exports=function(u){return function(e,t,n){for(var r=-1,o=Object(e),a=n(e),i=a.length;i--;){var s=a[u?i:++r];if(!1===t(o[s],s,o))break}return e}};},{}],150:[function(e,t,n){var s=e("./_baseIteratee"),u=e("./isArrayLike"),c=e("./keys");t.exports=function(i){return function(e,t,n){var r=Object(e);if(!u(e)){var o=s(t,3);e=c(e),t=function(e){return o(r[e],e,r)};}var a=i(e,t,n);return -1<a?r[o?e[a]:a]:void 0}};},{"./_baseIteratee":105,"./isArrayLike":244,"./keys":259}],151:[function(e,t,n){var o=e("./_baseRange"),a=e("./_isIterateeCall"),i=e("./toFinite");t.exports=function(r){return function(e,t,n){return n&&"number"!=typeof n&&a(e,t,n)&&(t=n=void 0),e=i(e),void 0===t?(t=e,e=0):t=i(t),n=void 0===n?e<t?1:-1:i(n),o(e,t,n,r)}};},{"./_baseRange":119,"./_isIterateeCall":182,"./toFinite":279}],152:[function(e,t,n){var r=e("./_Set"),o=e("./noop"),a=e("./_setToArray"),i=r&&1/a(new r([,-0]))[1]==1/0?function(e){return new r(e)}:o;t.exports=i;},{"./_Set":57,"./_setToArray":212,"./noop":269}],153:[function(e,t,n){var r=e("./_getNative"),o=function(){try{var e=r(Object,"defineProperty");return e({},"",{}),e}catch(e){}}();t.exports=o;},{"./_getNative":163}],154:[function(e,t,n){var v=e("./_SetCache"),g=e("./_arraySome"),y=e("./_cacheHas");t.exports=function(e,t,n,r,o,a){var i=1&n,s=e.length,u=t.length;if(s!=u&&!(i&&s<u))return !1;var c=a.get(e);if(c&&a.get(t))return c==t;var f=-1,d=!0,h=2&n?new v:void 0;for(a.set(e,t),a.set(t,e);++f<s;){var l=e[f],p=t[f];if(r)var _=i?r(p,l,f,t,e,a):r(l,p,f,e,t,a);if(void 0!==_){if(_)continue;d=!1;break}if(h){if(!g(t,function(e,t){if(!y(h,t)&&(l===e||o(l,e,n,r,a)))return h.push(t)})){d=!1;break}}else if(l!==p&&!o(l,p,n,r,a)){d=!1;break}}return a.delete(e),a.delete(t),d};},{"./_SetCache":58,"./_arraySome":72,"./_cacheHas":131}],155:[function(e,t,n){var r=e("./_Symbol"),d=e("./_Uint8Array"),h=e("./eq"),l=e("./_equalArrays"),p=e("./_mapToArray"),_=e("./_setToArray"),o=r?r.prototype:void 0,v=o?o.valueOf:void 0;t.exports=function(e,t,n,r,o,a,i){switch(n){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return !1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return !(e.byteLength!=t.byteLength||!a(new d(e),new d(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return h(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var s=p;case"[object Set]":var u=1&r;if(s=s||_,e.size!=t.size&&!u)return !1;var c=i.get(e);if(c)return c==t;r|=2,i.set(e,t);var f=l(s(e),s(t),r,o,a,i);return i.delete(e),f;case"[object Symbol]":if(v)return v.call(e)==v.call(t)}return !1};},{"./_Symbol":60,"./_Uint8Array":61,"./_equalArrays":154,"./_mapToArray":198,"./_setToArray":212,"./eq":231}],156:[function(e,t,n){var b=e("./_getAllKeys"),m=Object.prototype.hasOwnProperty;t.exports=function(e,t,n,r,o,a){var i=1&n,s=b(e),u=s.length;if(u!=b(t).length&&!i)return !1;for(var c=u;c--;){var f=s[c];if(!(i?f in t:m.call(t,f)))return !1}var d=a.get(e);if(d&&a.get(t))return d==t;var h=!0;a.set(e,t),a.set(t,e);for(var l=i;++c<u;){var p=e[f=s[c]],_=t[f];if(r)var v=i?r(_,p,f,t,e,a):r(p,_,f,e,t,a);if(!(void 0===v?p===_||o(p,_,n,r,a):v)){h=!1;break}l=l||"constructor"==f;}if(h&&!l){var g=e.constructor,y=t.constructor;g!=y&&"constructor"in e&&"constructor"in t&&!("function"==typeof g&&g instanceof g&&"function"==typeof y&&y instanceof y)&&(h=!1);}return a.delete(e),a.delete(t),h};},{"./_getAllKeys":159}],157:[function(e,t,n){var r=e("./flatten"),o=e("./_overRest"),a=e("./_setToString");t.exports=function(e){return a(o(e,void 0,r),e+"")};},{"./_overRest":207,"./_setToString":213,"./flatten":235}],158:[function(e,n,t){(function(e){var t="object"==h(e)&&e&&e.Object===Object&&e;n.exports=t;}).call(this,"undefined"!=typeof commonjsGlobal?commonjsGlobal:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});},{}],159:[function(e,t,n){var r=e("./_baseGetAllKeys"),o=e("./_getSymbols"),a=e("./keys");t.exports=function(e){return r(e,a,o)};},{"./_baseGetAllKeys":90,"./_getSymbols":166,"./keys":259}],160:[function(e,t,n){var r=e("./_baseGetAllKeys"),o=e("./_getSymbolsIn"),a=e("./keysIn");t.exports=function(e){return r(e,a,o)};},{"./_baseGetAllKeys":90,"./_getSymbolsIn":167,"./keysIn":260}],161:[function(e,t,n){var r=e("./_isKeyable");t.exports=function(e,t){var n=e.__data__;return r(t)?n["string"==typeof t?"string":"hash"]:n.map};},{"./_isKeyable":184}],162:[function(e,t,n){var a=e("./_isStrictComparable"),i=e("./keys");t.exports=function(e){for(var t=i(e),n=t.length;n--;){var r=t[n],o=e[r];t[n]=[r,o,a(o)];}return t};},{"./_isStrictComparable":187,"./keys":259}],163:[function(e,t,n){var r=e("./_baseIsNative"),o=e("./_getValue");t.exports=function(e,t){var n=o(e,t);return r(n)?n:void 0};},{"./_baseIsNative":102,"./_getValue":169}],164:[function(e,t,n){var r=e("./_overArg")(Object.getPrototypeOf,Object);t.exports=r;},{"./_overArg":206}],165:[function(e,t,n){var r=e("./_Symbol"),o=Object.prototype,a=o.hasOwnProperty,i=o.toString,s=r?r.toStringTag:void 0;t.exports=function(e){var t=a.call(e,s),n=e[s];try{var r=!(e[s]=void 0);}catch(e){}var o=i.call(e);return r&&(t?e[s]=n:delete e[s]),o};},{"./_Symbol":60}],166:[function(e,t,n){var r=e("./_arrayFilter"),o=e("./stubArray"),a=Object.prototype.propertyIsEnumerable,i=Object.getOwnPropertySymbols,s=i?function(t){return null==t?[]:(t=Object(t),r(i(t),function(e){return a.call(t,e)}))}:o;t.exports=s;},{"./_arrayFilter":65,"./stubArray":277}],167:[function(e,t,n){var r=e("./_arrayPush"),o=e("./_getPrototype"),a=e("./_getSymbols"),i=e("./stubArray"),s=Object.getOwnPropertySymbols?function(e){for(var t=[];e;)r(t,a(e)),e=o(e);return t}:i;t.exports=s;},{"./_arrayPush":70,"./_getPrototype":164,"./_getSymbols":166,"./stubArray":277}],168:[function(e,t,n){var r=e("./_DataView"),o=e("./_Map"),a=e("./_Promise"),i=e("./_Set"),s=e("./_WeakMap"),u=e("./_baseGetTag"),c=e("./_toSource"),f="[object Map]",d="[object Promise]",h="[object Set]",l="[object WeakMap]",p="[object DataView]",_=c(r),v=c(o),g=c(a),y=c(i),b=c(s),m=u;(r&&m(new r(new ArrayBuffer(1)))!=p||o&&m(new o)!=f||a&&m(a.resolve())!=d||i&&m(new i)!=h||s&&m(new s)!=l)&&(m=function(e){var t=u(e),n="[object Object]"==t?e.constructor:void 0,r=n?c(n):"";if(r)switch(r){case _:return p;case v:return f;case g:return d;case y:return h;case b:return l}return t}),t.exports=m;},{"./_DataView":51,"./_Map":54,"./_Promise":56,"./_Set":57,"./_WeakMap":62,"./_baseGetTag":91,"./_toSource":224}],169:[function(e,t,n){t.exports=function(e,t){return null==e?void 0:e[t]};},{}],170:[function(e,t,n){var s=e("./_castPath"),u=e("./isArguments"),c=e("./isArray"),f=e("./_isIndex"),d=e("./isLength"),h=e("./_toKey");t.exports=function(e,t,n){for(var r=-1,o=(t=s(t,e)).length,a=!1;++r<o;){var i=h(t[r]);if(!(a=null!=e&&n(e,i)))break;e=e[i];}return a||++r!=o?a:!!(o=null==e?0:e.length)&&d(o)&&f(i,o)&&(c(e)||u(e))};},{"./_castPath":133,"./_isIndex":181,"./_toKey":223,"./isArguments":242,"./isArray":243,"./isLength":249}],171:[function(e,t,n){var r=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");t.exports=function(e){return r.test(e)};},{}],172:[function(e,t,n){var r=e("./_nativeCreate");t.exports=function(){this.__data__=r?r(null):{},this.size=0;};},{"./_nativeCreate":201}],173:[function(e,t,n){t.exports=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t};},{}],174:[function(e,t,n){var r=e("./_nativeCreate"),o=Object.prototype.hasOwnProperty;t.exports=function(e){var t=this.__data__;if(r){var n=t[e];return "__lodash_hash_undefined__"===n?void 0:n}return o.call(t,e)?t[e]:void 0};},{"./_nativeCreate":201}],175:[function(e,t,n){var r=e("./_nativeCreate"),o=Object.prototype.hasOwnProperty;t.exports=function(e){var t=this.__data__;return r?void 0!==t[e]:o.call(t,e)};},{"./_nativeCreate":201}],176:[function(e,t,n){var r=e("./_nativeCreate");t.exports=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=r&&void 0===t?"__lodash_hash_undefined__":t,this};},{"./_nativeCreate":201}],177:[function(e,t,n){var r=Object.prototype.hasOwnProperty;t.exports=function(e){var t=e.length,n=new e.constructor(t);return t&&"string"==typeof e[0]&&r.call(e,"index")&&(n.index=e.index,n.input=e.input),n};},{}],178:[function(e,t,n){var o=e("./_cloneArrayBuffer"),a=e("./_cloneDataView"),i=e("./_cloneRegExp"),s=e("./_cloneSymbol"),u=e("./_cloneTypedArray");t.exports=function(e,t,n){var r=e.constructor;switch(t){case"[object ArrayBuffer]":return o(e);case"[object Boolean]":case"[object Date]":return new r(+e);case"[object DataView]":return a(e,n);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return u(e,n);case"[object Map]":return new r;case"[object Number]":case"[object String]":return new r(e);case"[object RegExp]":return i(e);case"[object Set]":return new r;case"[object Symbol]":return s(e)}};},{"./_cloneArrayBuffer":134,"./_cloneDataView":136,"./_cloneRegExp":137,"./_cloneSymbol":138,"./_cloneTypedArray":139}],179:[function(e,t,n){var r=e("./_baseCreate"),o=e("./_getPrototype"),a=e("./_isPrototype");t.exports=function(e){return "function"!=typeof e.constructor||a(e)?{}:r(o(e))};},{"./_baseCreate":81,"./_getPrototype":164,"./_isPrototype":186}],180:[function(e,t,n){var r=e("./_Symbol"),o=e("./isArguments"),a=e("./isArray"),i=r?r.isConcatSpreadable:void 0;t.exports=function(e){return a(e)||o(e)||!!(i&&e&&e[i])};},{"./_Symbol":60,"./isArguments":242,"./isArray":243}],181:[function(e,t,n){var r=/^(?:0|[1-9]\d*)$/;t.exports=function(e,t){var n=h(e);return !!(t=null==t?9007199254740991:t)&&("number"==n||"symbol"!=n&&r.test(e))&&-1<e&&e%1==0&&e<t};},{}],182:[function(e,t,n){var o=e("./eq"),a=e("./isArrayLike"),i=e("./_isIndex"),s=e("./isObject");t.exports=function(e,t,n){if(!s(n))return !1;var r=h(t);return !!("number"==r?a(n)&&i(t,n.length):"string"==r&&t in n)&&o(n[t],e)};},{"./_isIndex":181,"./eq":231,"./isArrayLike":244,"./isObject":251}],183:[function(e,t,n){var r=e("./isArray"),o=e("./isSymbol"),a=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,i=/^\w*$/;t.exports=function(e,t){if(r(e))return !1;var n=h(e);return !("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!o(e))||(i.test(e)||!a.test(e)||null!=t&&e in Object(t))};},{"./isArray":243,"./isSymbol":256}],184:[function(e,t,n){t.exports=function(e){var t=h(e);return "string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};},{}],185:[function(e,t,n){var r,o=e("./_coreJsData"),a=(r=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"";t.exports=function(e){return !!a&&a in e};},{"./_coreJsData":146}],186:[function(e,t,n){var r=Object.prototype;t.exports=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||r)};},{}],187:[function(e,t,n){var r=e("./isObject");t.exports=function(e){return e==e&&!r(e)};},{"./isObject":251}],188:[function(e,t,n){t.exports=function(){this.__data__=[],this.size=0;};},{}],189:[function(e,t,n){var r=e("./_assocIndexOf"),o=Array.prototype.splice;t.exports=function(e){var t=this.__data__,n=r(t,e);return !(n<0)&&(n==t.length-1?t.pop():o.call(t,n,1),--this.size,!0)};},{"./_assocIndexOf":76}],190:[function(e,t,n){var r=e("./_assocIndexOf");t.exports=function(e){var t=this.__data__,n=r(t,e);return n<0?void 0:t[n][1]};},{"./_assocIndexOf":76}],191:[function(e,t,n){var r=e("./_assocIndexOf");t.exports=function(e){return -1<r(this.__data__,e)};},{"./_assocIndexOf":76}],192:[function(e,t,n){var o=e("./_assocIndexOf");t.exports=function(e,t){var n=this.__data__,r=o(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};},{"./_assocIndexOf":76}],193:[function(e,t,n){var r=e("./_Hash"),o=e("./_ListCache"),a=e("./_Map");t.exports=function(){this.size=0,this.__data__={hash:new r,map:new(a||o),string:new r};};},{"./_Hash":52,"./_ListCache":53,"./_Map":54}],194:[function(e,t,n){var r=e("./_getMapData");t.exports=function(e){var t=r(this,e).delete(e);return this.size-=t?1:0,t};},{"./_getMapData":161}],195:[function(e,t,n){var r=e("./_getMapData");t.exports=function(e){return r(this,e).get(e)};},{"./_getMapData":161}],196:[function(e,t,n){var r=e("./_getMapData");t.exports=function(e){return r(this,e).has(e)};},{"./_getMapData":161}],197:[function(e,t,n){var o=e("./_getMapData");t.exports=function(e,t){var n=o(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};},{"./_getMapData":161}],198:[function(e,t,n){t.exports=function(e){var n=-1,r=Array(e.size);return e.forEach(function(e,t){r[++n]=[t,e];}),r};},{}],199:[function(e,t,n){t.exports=function(t,n){return function(e){return null!=e&&(e[t]===n&&(void 0!==n||t in Object(e)))}};},{}],200:[function(e,t,n){var r=e("./memoize");t.exports=function(e){var t=r(e,function(e){return 500===n.size&&n.clear(),e}),n=t.cache;return t};},{"./memoize":265}],201:[function(e,t,n){var r=e("./_getNative")(Object,"create");t.exports=r;},{"./_getNative":163}],202:[function(e,t,n){var r=e("./_overArg")(Object.keys,Object);t.exports=r;},{"./_overArg":206}],203:[function(e,t,n){t.exports=function(e){var t=[];if(null!=e)for(var n in Object(e))t.push(n);return t};},{}],204:[function(e,t,n){var r=e("./_freeGlobal"),o="object"==h(n)&&n&&!n.nodeType&&n,a=o&&"object"==h(t)&&t&&!t.nodeType&&t,i=a&&a.exports===o&&r.process,s=function(){try{var e=a&&a.require&&a.require("util").types;return e||i&&i.binding&&i.binding("util")}catch(e){}}();t.exports=s;},{"./_freeGlobal":158}],205:[function(e,t,n){var r=Object.prototype.toString;t.exports=function(e){return r.call(e)};},{}],206:[function(e,t,n){t.exports=function(t,n){return function(e){return t(n(e))}};},{}],207:[function(e,t,n){var u=e("./_apply"),c=Math.max;t.exports=function(a,i,s){return i=c(void 0===i?a.length-1:i,0),function(){for(var e=arguments,t=-1,n=c(e.length-i,0),r=Array(n);++t<n;)r[t]=e[i+t];t=-1;for(var o=Array(i+1);++t<i;)o[t]=e[t];return o[i]=s(r),u(a,this,o)}};},{"./_apply":63}],208:[function(e,t,n){var r=e("./_freeGlobal"),o="object"==("undefined"==typeof self?"undefined":h(self))&&self&&self.Object===Object&&self,a=r||o||Function("return this")();t.exports=a;},{"./_freeGlobal":158}],209:[function(e,t,n){t.exports=function(e,t){return "__proto__"==t?void 0:e[t]};},{}],210:[function(e,t,n){t.exports=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this};},{}],211:[function(e,t,n){t.exports=function(e){return this.__data__.has(e)};},{}],212:[function(e,t,n){t.exports=function(e){var t=-1,n=Array(e.size);return e.forEach(function(e){n[++t]=e;}),n};},{}],213:[function(e,t,n){var r=e("./_baseSetToString"),o=e("./_shortOut")(r);t.exports=o;},{"./_baseSetToString":123,"./_shortOut":214}],214:[function(e,t,n){var a=Date.now;t.exports=function(n){var r=0,o=0;return function(){var e=a(),t=16-(e-o);if(o=e,0<t){if(800<=++r)return arguments[0]}else r=0;return n.apply(void 0,arguments)}};},{}],215:[function(e,t,n){var r=e("./_ListCache");t.exports=function(){this.__data__=new r,this.size=0;};},{"./_ListCache":53}],216:[function(e,t,n){t.exports=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n};},{}],217:[function(e,t,n){t.exports=function(e){return this.__data__.get(e)};},{}],218:[function(e,t,n){t.exports=function(e){return this.__data__.has(e)};},{}],219:[function(e,t,n){var o=e("./_ListCache"),a=e("./_Map"),i=e("./_MapCache");t.exports=function(e,t){var n=this.__data__;if(n instanceof o){var r=n.__data__;if(!a||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new i(r);}return n.set(e,t),this.size=n.size,this};},{"./_ListCache":53,"./_Map":54,"./_MapCache":55}],220:[function(e,t,n){t.exports=function(e,t,n){for(var r=n-1,o=e.length;++r<o;)if(e[r]===t)return r;return -1};},{}],221:[function(e,t,n){var r=e("./_asciiSize"),o=e("./_hasUnicode"),a=e("./_unicodeSize");t.exports=function(e){return o(e)?a(e):r(e)};},{"./_asciiSize":73,"./_hasUnicode":171,"./_unicodeSize":225}],222:[function(e,t,n){var r=e("./_memoizeCapped"),a=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,i=/\\(\\)?/g,o=r(function(e){var o=[];return 46===e.charCodeAt(0)&&o.push(""),e.replace(a,function(e,t,n,r){o.push(n?r.replace(i,"$1"):t||e);}),o});t.exports=o;},{"./_memoizeCapped":200}],223:[function(e,t,n){var r=e("./isSymbol");t.exports=function(e){if("string"==typeof e||r(e))return e;var t=e+"";return "0"==t&&1/e==-1/0?"-0":t};},{"./isSymbol":256}],224:[function(e,t,n){var r=Function.prototype.toString;t.exports=function(e){if(null!=e){try{return r.call(e)}catch(e){}try{return e+""}catch(e){}}return ""};},{}],225:[function(e,t,n){var r="\\ud800-\\udfff",o="["+r+"]",a="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",i="\\ud83c[\\udffb-\\udfff]",s="[^"+r+"]",u="(?:\\ud83c[\\udde6-\\uddff]){2}",c="[\\ud800-\\udbff][\\udc00-\\udfff]",f="(?:"+a+"|"+i+")"+"?",d="[\\ufe0e\\ufe0f]?",h=d+f+("(?:\\u200d(?:"+[s,u,c].join("|")+")"+d+f+")*"),l="(?:"+[s+a+"?",a,u,c,o].join("|")+")",p=RegExp(i+"(?="+i+")|"+l+h,"g");t.exports=function(e){for(var t=p.lastIndex=0;p.test(e);)++t;return t};},{}],226:[function(e,t,n){var r=e("./_baseClone");t.exports=function(e){return r(e,4)};},{"./_baseClone":80}],227:[function(e,t,n){var r=e("./_baseClone");t.exports=function(e){return r(e,5)};},{"./_baseClone":80}],228:[function(e,t,n){t.exports=function(e){return function(){return e}};},{}],229:[function(e,t,n){var r=e("./_baseRest"),d=e("./eq"),h=e("./_isIterateeCall"),l=e("./keysIn"),p=Object.prototype,_=p.hasOwnProperty,o=r(function(e,t){e=Object(e);var n=-1,r=t.length,o=2<r?t[2]:void 0;for(o&&h(t[0],t[1],o)&&(r=1);++n<r;)for(var a=t[n],i=l(a),s=-1,u=i.length;++s<u;){var c=i[s],f=e[c];(void 0===f||d(f,p[c])&&!_.call(e,c))&&(e[c]=a[c]);}return e});t.exports=o;},{"./_baseRest":121,"./_isIterateeCall":182,"./eq":231,"./keysIn":260}],230:[function(e,t,n){t.exports=e("./forEach");},{"./forEach":236}],231:[function(e,t,n){t.exports=function(e,t){return e===t||e!=e&&t!=t};},{}],232:[function(e,t,n){var r=e("./_arrayFilter"),o=e("./_baseFilter"),a=e("./_baseIteratee"),i=e("./isArray");t.exports=function(e,t){return (i(e)?r:o)(e,a(t,3))};},{"./_arrayFilter":65,"./_baseFilter":84,"./_baseIteratee":105,"./isArray":243}],233:[function(e,t,n){var r=e("./_createFind")(e("./findIndex"));t.exports=r;},{"./_createFind":150,"./findIndex":234}],234:[function(e,t,n){var a=e("./_baseFindIndex"),i=e("./_baseIteratee"),s=e("./toInteger"),u=Math.max;t.exports=function(e,t,n){var r=null==e?0:e.length;if(!r)return -1;var o=null==n?0:s(n);return o<0&&(o=u(r+o,0)),a(e,i(t,3),o)};},{"./_baseFindIndex":85,"./_baseIteratee":105,"./toInteger":280}],235:[function(e,t,n){var r=e("./_baseFlatten");t.exports=function(e){return (null==e?0:e.length)?r(e,1):[]};},{"./_baseFlatten":86}],236:[function(e,t,n){var r=e("./_arrayEach"),o=e("./_baseEach"),a=e("./_castFunction"),i=e("./isArray");t.exports=function(e,t){return (i(e)?r:o)(e,a(t))};},{"./_arrayEach":64,"./_baseEach":82,"./_castFunction":132,"./isArray":243}],237:[function(e,t,n){var r=e("./_baseFor"),o=e("./_castFunction"),a=e("./keysIn");t.exports=function(e,t){return null==e?e:r(e,o(t),a)};},{"./_baseFor":87,"./_castFunction":132,"./keysIn":260}],238:[function(e,t,n){var o=e("./_baseGet");t.exports=function(e,t,n){var r=null==e?void 0:o(e,t);return void 0===r?n:r};},{"./_baseGet":89}],239:[function(e,t,n){var r=e("./_baseHas"),o=e("./_hasPath");t.exports=function(e,t){return null!=e&&o(e,t,r)};},{"./_baseHas":93,"./_hasPath":170}],240:[function(e,t,n){var r=e("./_baseHasIn"),o=e("./_hasPath");t.exports=function(e,t){return null!=e&&o(e,t,r)};},{"./_baseHasIn":94,"./_hasPath":170}],241:[function(e,t,n){t.exports=function(e){return e};},{}],242:[function(e,t,n){var r=e("./_baseIsArguments"),o=e("./isObjectLike"),a=Object.prototype,i=a.hasOwnProperty,s=a.propertyIsEnumerable,u=r(function(){return arguments}())?r:function(e){return o(e)&&i.call(e,"callee")&&!s.call(e,"callee")};t.exports=u;},{"./_baseIsArguments":96,"./isObjectLike":252}],243:[function(e,t,n){var r=Array.isArray;t.exports=r;},{}],244:[function(e,t,n){var r=e("./isFunction"),o=e("./isLength");t.exports=function(e){return null!=e&&o(e.length)&&!r(e)};},{"./isFunction":248,"./isLength":249}],245:[function(e,t,n){var r=e("./isArrayLike"),o=e("./isObjectLike");t.exports=function(e){return o(e)&&r(e)};},{"./isArrayLike":244,"./isObjectLike":252}],246:[function(e,t,n){var r=e("./_root"),o=e("./stubFalse"),a="object"==h(n)&&n&&!n.nodeType&&n,i=a&&"object"==h(t)&&t&&!t.nodeType&&t,s=i&&i.exports===a?r.Buffer:void 0,u=(s?s.isBuffer:void 0)||o;t.exports=u;},{"./_root":208,"./stubFalse":278}],247:[function(e,t,n){var r=e("./_baseKeys"),o=e("./_getTag"),a=e("./isArguments"),i=e("./isArray"),s=e("./isArrayLike"),u=e("./isBuffer"),c=e("./_isPrototype"),f=e("./isTypedArray"),d=Object.prototype.hasOwnProperty;t.exports=function(e){if(null==e)return !0;if(s(e)&&(i(e)||"string"==typeof e||"function"==typeof e.splice||u(e)||f(e)||a(e)))return !e.length;var t=o(e);if("[object Map]"==t||"[object Set]"==t)return !e.size;if(c(e))return !r(e).length;for(var n in e)if(d.call(e,n))return !1;return !0};},{"./_baseKeys":106,"./_getTag":168,"./_isPrototype":186,"./isArguments":242,"./isArray":243,"./isArrayLike":244,"./isBuffer":246,"./isTypedArray":257}],248:[function(e,t,n){var r=e("./_baseGetTag"),o=e("./isObject");t.exports=function(e){if(!o(e))return !1;var t=r(e);return "[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t};},{"./_baseGetTag":91,"./isObject":251}],249:[function(e,t,n){t.exports=function(e){return "number"==typeof e&&-1<e&&e%1==0&&e<=9007199254740991};},{}],250:[function(e,t,n){var r=e("./_baseIsMap"),o=e("./_baseUnary"),a=e("./_nodeUtil"),i=a&&a.isMap,s=i?o(i):r;t.exports=s;},{"./_baseIsMap":99,"./_baseUnary":127,"./_nodeUtil":204}],251:[function(e,t,n){t.exports=function(e){var t=h(e);return null!=e&&("object"==t||"function"==t)};},{}],252:[function(e,t,n){t.exports=function(e){return null!=e&&"object"==h(e)};},{}],253:[function(e,t,n){var r=e("./_baseGetTag"),o=e("./_getPrototype"),a=e("./isObjectLike"),i=Function.prototype,s=Object.prototype,u=i.toString,c=s.hasOwnProperty,f=u.call(Object);t.exports=function(e){if(!a(e)||"[object Object]"!=r(e))return !1;var t=o(e);if(null===t)return !0;var n=c.call(t,"constructor")&&t.constructor;return "function"==typeof n&&n instanceof n&&u.call(n)==f};},{"./_baseGetTag":91,"./_getPrototype":164,"./isObjectLike":252}],254:[function(e,t,n){var r=e("./_baseIsSet"),o=e("./_baseUnary"),a=e("./_nodeUtil"),i=a&&a.isSet,s=i?o(i):r;t.exports=s;},{"./_baseIsSet":103,"./_baseUnary":127,"./_nodeUtil":204}],255:[function(e,t,n){var r=e("./_baseGetTag"),o=e("./isArray"),a=e("./isObjectLike");t.exports=function(e){return "string"==typeof e||!o(e)&&a(e)&&"[object String]"==r(e)};},{"./_baseGetTag":91,"./isArray":243,"./isObjectLike":252}],256:[function(e,t,n){var r=e("./_baseGetTag"),o=e("./isObjectLike");t.exports=function(e){return "symbol"==h(e)||o(e)&&"[object Symbol]"==r(e)};},{"./_baseGetTag":91,"./isObjectLike":252}],257:[function(e,t,n){var r=e("./_baseIsTypedArray"),o=e("./_baseUnary"),a=e("./_nodeUtil"),i=a&&a.isTypedArray,s=i?o(i):r;t.exports=s;},{"./_baseIsTypedArray":104,"./_baseUnary":127,"./_nodeUtil":204}],258:[function(e,t,n){t.exports=function(e){return void 0===e};},{}],259:[function(e,t,n){var r=e("./_arrayLikeKeys"),o=e("./_baseKeys"),a=e("./isArrayLike");t.exports=function(e){return a(e)?r(e):o(e)};},{"./_arrayLikeKeys":68,"./_baseKeys":106,"./isArrayLike":244}],260:[function(e,t,n){var r=e("./_arrayLikeKeys"),o=e("./_baseKeysIn"),a=e("./isArrayLike");t.exports=function(e){return a(e)?r(e,!0):o(e)};},{"./_arrayLikeKeys":68,"./_baseKeysIn":107,"./isArrayLike":244}],261:[function(e,t,n){t.exports=function(e){var t=null==e?0:e.length;return t?e[t-1]:void 0};},{}],262:[function(e,t,n){var r=e("./_arrayMap"),o=e("./_baseIteratee"),a=e("./_baseMap"),i=e("./isArray");t.exports=function(e,t){return (i(e)?r:a)(e,o(t,3))};},{"./_arrayMap":69,"./_baseIteratee":105,"./_baseMap":109,"./isArray":243}],263:[function(e,t,n){var a=e("./_baseAssignValue"),i=e("./_baseForOwn"),s=e("./_baseIteratee");t.exports=function(e,r){var o={};return r=s(r,3),i(e,function(e,t,n){a(o,t,r(e,t,n));}),o};},{"./_baseAssignValue":79,"./_baseForOwn":88,"./_baseIteratee":105}],264:[function(e,t,n){var r=e("./_baseExtremum"),o=e("./_baseGt"),a=e("./identity");t.exports=function(e){return e&&e.length?r(e,a,o):void 0};},{"./_baseExtremum":83,"./_baseGt":92,"./identity":241}],265:[function(e,t,n){var r=e("./_MapCache"),s="Expected a function";function u(o,a){if("function"!=typeof o||null!=a&&"function"!=typeof a)throw new TypeError(s);function i(){var e=arguments,t=a?a.apply(this,e):e[0],n=i.cache;if(n.has(t))return n.get(t);var r=o.apply(this,e);return i.cache=n.set(t,r)||n,r}return i.cache=new(u.Cache||r),i}u.Cache=r,t.exports=u;},{"./_MapCache":55}],266:[function(e,t,n){var r=e("./_baseMerge"),o=e("./_createAssigner")(function(e,t,n){r(e,t,n);});t.exports=o;},{"./_baseMerge":112,"./_createAssigner":147}],267:[function(e,t,n){var r=e("./_baseExtremum"),o=e("./_baseLt"),a=e("./identity");t.exports=function(e){return e&&e.length?r(e,a,o):void 0};},{"./_baseExtremum":83,"./_baseLt":108,"./identity":241}],268:[function(e,t,n){var r=e("./_baseExtremum"),o=e("./_baseIteratee"),a=e("./_baseLt");t.exports=function(e,t){return e&&e.length?r(e,o(t,2),a):void 0};},{"./_baseExtremum":83,"./_baseIteratee":105,"./_baseLt":108}],269:[function(e,t,n){t.exports=function(){};},{}],270:[function(e,t,n){var r=e("./_root");t.exports=function(){return r.Date.now()};},{"./_root":208}],271:[function(e,t,n){var r=e("./_basePick"),o=e("./_flatRest")(function(e,t){return null==e?{}:r(e,t)});t.exports=o;},{"./_basePick":115,"./_flatRest":157}],272:[function(e,t,n){var r=e("./_baseProperty"),o=e("./_basePropertyDeep"),a=e("./_isKey"),i=e("./_toKey");t.exports=function(e){return a(e)?r(i(e)):o(e)};},{"./_baseProperty":117,"./_basePropertyDeep":118,"./_isKey":183,"./_toKey":223}],273:[function(e,t,n){var r=e("./_createRange")();t.exports=r;},{"./_createRange":151}],274:[function(e,t,n){var a=e("./_arrayReduce"),i=e("./_baseEach"),s=e("./_baseIteratee"),u=e("./_baseReduce"),c=e("./isArray");t.exports=function(e,t,n){var r=c(e)?a:u,o=arguments.length<3;return r(e,s(t,4),n,o,i)};},{"./_arrayReduce":71,"./_baseEach":82,"./_baseIteratee":105,"./_baseReduce":120,"./isArray":243}],275:[function(e,t,n){var r=e("./_baseKeys"),o=e("./_getTag"),a=e("./isArrayLike"),i=e("./isString"),s=e("./_stringSize");t.exports=function(e){if(null==e)return 0;if(a(e))return i(e)?s(e):e.length;var t=o(e);return "[object Map]"==t||"[object Set]"==t?e.size:r(e).length};},{"./_baseKeys":106,"./_getTag":168,"./_stringSize":221,"./isArrayLike":244,"./isString":255}],276:[function(e,t,n){var r=e("./_baseFlatten"),o=e("./_baseOrderBy"),a=e("./_baseRest"),i=e("./_isIterateeCall"),s=a(function(e,t){if(null==e)return [];var n=t.length;return 1<n&&i(e,t[0],t[1])?t=[]:2<n&&i(t[0],t[1],t[2])&&(t=[t[0]]),o(e,r(t,1),[])});t.exports=s;},{"./_baseFlatten":86,"./_baseOrderBy":114,"./_baseRest":121,"./_isIterateeCall":182}],277:[function(e,t,n){t.exports=function(){return []};},{}],278:[function(e,t,n){t.exports=function(){return !1};},{}],279:[function(e,t,n){var r=e("./toNumber");t.exports=function(e){return e?(e=r(e))!==1/0&&e!==-1/0?e==e?e:0:17976931348623157e292*(e<0?-1:1):0===e?e:0};},{"./toNumber":281}],280:[function(e,t,n){var r=e("./toFinite");t.exports=function(e){var t=r(e),n=t%1;return t==t?n?t-n:t:0};},{"./toFinite":279}],281:[function(e,t,n){var r=e("./isObject"),o=e("./isSymbol"),a=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,u=/^0o[0-7]+$/i,c=parseInt;t.exports=function(e){if("number"==typeof e)return e;if(o(e))return NaN;if(r(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=r(t)?t+"":t;}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=s.test(e);return n||u.test(e)?c(e.slice(2),n?2:8):i.test(e)?NaN:+e};},{"./isObject":251,"./isSymbol":256}],282:[function(e,t,n){var r=e("./_copyObject"),o=e("./keysIn");t.exports=function(e){return r(e,o(e))};},{"./_copyObject":143,"./keysIn":260}],283:[function(e,t,n){var r=e("./_baseToString");t.exports=function(e){return null==e?"":r(e)};},{"./_baseToString":126}],284:[function(e,t,n){var i=e("./_arrayEach"),s=e("./_baseCreate"),u=e("./_baseForOwn"),c=e("./_baseIteratee"),f=e("./_getPrototype"),d=e("./isArray"),h=e("./isBuffer"),l=e("./isFunction"),p=e("./isObject"),_=e("./isTypedArray");t.exports=function(e,r,o){var t=d(e),n=t||h(e)||_(e);if(r=c(r,4),null==o){var a=e&&e.constructor;o=n?t?new a:[]:p(e)&&l(a)?s(f(e)):{};}return (n?i:u)(e,function(e,t,n){return r(o,e,t,n)}),o};},{"./_arrayEach":64,"./_baseCreate":81,"./_baseForOwn":88,"./_baseIteratee":105,"./_getPrototype":164,"./isArray":243,"./isBuffer":246,"./isFunction":248,"./isObject":251,"./isTypedArray":257}],285:[function(e,t,n){var r=e("./_baseFlatten"),o=e("./_baseRest"),a=e("./_baseUniq"),i=e("./isArrayLikeObject"),s=o(function(e){return a(r(e,1,i,!0))});t.exports=s;},{"./_baseFlatten":86,"./_baseRest":121,"./_baseUniq":128,"./isArrayLikeObject":245}],286:[function(e,t,n){var r=e("./toString"),o=0;t.exports=function(e){var t=++o;return r(e)+t};},{"./toString":283}],287:[function(e,t,n){var r=e("./_baseValues"),o=e("./keys");t.exports=function(e){return null==e?[]:r(e,o(e))};},{"./_baseValues":129,"./keys":259}],288:[function(e,t,n){var r=e("./_assignValue"),o=e("./_baseZipObject");t.exports=function(e,t){return o(e||[],t||[],r)};},{"./_assignValue":75,"./_baseZipObject":130}]},{},[1])(1)});});
	});

	var dagre$1 = createCommonjsModule(function (module, exports) {
	!function(e,d){d(exports,index_cjs,dagre);}(void 0,function(e,d,i){Object.defineProperty(e,"__esModule",{value:!0});var r,t=(r=i)&&r.__esModule?r:{default:r};d.global.registerLayout("dagre",t.default),e.default=t.default;});
	});

	unwrapExports(dagre$1);

	var tree = createCommonjsModule(function (module, exports) {
	!function(e,n){n(exports,hierarchy,index_cjs);}(void 0,function(e,n,r){Object.defineProperty(e,"__esModule",{value:!0});var t,_=(t=n)&&t.__esModule?t:{default:t};function i(){var h=(0, _.default)().sort(null).value(null),m=l,d=[1,1],s=null;function n(e,n){var r=h.call(this,e,n),t=r[0],i=function(e){var n,r={A:null,children:[e]},t=[r];for(;null!=(n=t.pop());)for(var i,l=n.children,u=0,a=l.length;u<a;++u)t.push((l[u]=i={_:l[u],parent:n,children:(i=l[u].children)&&i.slice()||[],A:null,a:null,z:0,m:0,c:0,s:0,t:null,i:u}).a=i);return r.children[0]}(t);if(_.default.layout_hierarchyVisitAfter(i,p),i.parent.m=-i.z,_.default.layout_hierarchyVisitBefore(i,v),s)_.default.layout_hierarchyVisitBefore(t,y);else{var l=t,u=t,a=t;_.default.layout_hierarchyVisitBefore(t,function(e){e.x<l.x&&(l=e),e.x>u.x&&(u=e),e.depth>a.depth&&(a=e);});var f=m(l,u)/2-l.x,o=d[0]/(u.x+m(u,l)/2+f),c=d[1]/(a.depth||1);_.default.layout_hierarchyVisitBefore(t,function(e){e.x=(e.x+f)*o,e.y=e.depth*c;});}return r}function p(e){var n=e.children,r=e.parent.children,t=e.i?r[e.i-1]:null;if(n.length){!function(e){var n,r=0,t=0,i=e.children,l=i.length;for(;0<=--l;)(n=i[l]).z+=r,n.m+=r,r+=n.s+(t+=n.c);}(e);var i=(n[0].z+n[n.length-1].z)/2;t?(e.z=t.z+m(e._,t._),e.m=e.z-i):e.z=i;}else t&&(e.z=t.z+m(e._,t._));e.parent.A=function(e,n,r){if(n){for(var t,i=e,l=e,u=n,a=i.parent.children[0],f=i.m,o=l.m,c=u.m,h=a.m;u=x(u),i=z(i),u&&i;)a=z(a),(l=x(l)).a=e,0<(t=u.z+c-i.z-f+m(u._,i._))&&(g((s=e,p=r,(d=u).a.parent===s.parent?d.a:p),e,t),f+=t,o+=t),c+=u.m,f+=i.m,h+=a.m,o+=l.m;u&&!x(l)&&(l.t=u,l.m+=c-o),i&&!z(a)&&(a.t=i,a.m+=f-h,r=e);}var d,s,p;return r}(e,t,e.parent.A||r[0]);}function v(e){e._.x=e.z+e.parent.m,e.m+=e.parent.m;}function y(e){e.x*=d[0],e.y=e.depth*d[1];}return n.separation=function(e){return arguments.length?(m=e,n):m},n.size=function(e){return arguments.length?(s=null==(d=e)?y:null,n):s?null:d},n.nodeSize=function(e){return arguments.length?(s=null==(d=e)?null:y,n):s?d:null},_.default.layout_hierarchyRebind(n,h)}function l(e,n){return e.parent==n.parent?1:2}function z(e){var n=e.children;return n.length?n[0]:e.t}function x(e){var n,r=e.children;return (n=r.length)?r[n-1]:e.t}function g(e,n,r){var t=r/(n.i-e.i);n.c-=t,n.s+=r,e.c+=t,n.z+=r,n.m+=r;}r.global.registerLayout("tree",i),e.default=i;});
	});

	unwrapExports(tree);

	var trigger = createCommonjsModule(function (module, exports) {
	!function(e,n){n(exports);}(0,function(e){Object.defineProperty(e,"__esModule",{value:!0});e.default=function e(n){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.comp=n,this.params=t;};});
	});

	unwrapExports(trigger);

	var legend = createCommonjsModule(function (module, exports) {
	!function(t,e){e(exports,component,index_cjs$1,index_cjs,trigger);}(void 0,function(t,e,i,b,n){Object.defineProperty(t,"__esModule",{value:!0});var o=a(e),v=a(i),x=a(n);function a(t){return t&&t.__esModule?t:{default:t}}function l(t){return (l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t){return (r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function d(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n);}}function s(t,e,i){return e&&p(t.prototype,e),i&&p(t,i),t}function f(t,e){return (f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var w=v.default.Shapes.Circle,u=(function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e);}(h,o.default),s(h,null,[{key:"defaultProps",value:function(){return {data:{detail:"图例数据",default:[],documentation:'                    数据结构为：{name: "uv", color: "#ff8533", field: "" ...}                    如果手动传入数据只需要前面这三个 enabled: true, ind: 0                    外部只需要传field和fillStyle就行了                    '},position:{detail:"图例位置",documentation:"图例所在的方向top,right,bottom,left",default:"top"},direction:{detail:"图例布局方向",default:"h",documentation:"横向 top,bottom --\x3e h left,right -- >v"},textAlign:{detail:"水平方向的对其，默认居左对其",default:"left",documentation:"可选left，center，right"},verticalAlign:{detail:"垂直方向的对其方式，默认居中（待实现）",default:"middle",documentation:"可选top，middle，bottom"},icon:{detail:"图标设置",propertys:{height:{detail:"高",default:26},width:{detail:"图标宽",default:"auto"},shapeType:{detail:"图标的图形类型，目前只实现了圆形",default:"circle"},radius:{detail:"图标（circle）半径",default:5},lineWidth:{detail:"图标描边宽度",default:1},fillStyle:{detail:"图标颜色，一般会从data里面取，这里是默认色",default:"#999"}}},label:{detail:"文本配置",propertys:{textAlign:{detail:"水平对齐方式",default:"left"},textBaseline:{detail:"文本基线对齐方式",default:"middle"},fontColor:{detail:"文本颜色",default:"#333333"},cursor:{detail:"鼠标样式",default:"pointer"},format:{detail:"文本格式化处理函数",default:null}}},activeEnabled:{detail:"是否启动图例的",default:!0},tipsEnabled:{detail:"是否开启图例的tips",default:!1}}}}]),s(h,[{key:"_getLegendData",value:function(t){var e=t.data;return e?b._.each(e,function(t,e){t.enabled=!0,t.ind=e;}):e=this.app.getLegendData(),e||[]}},{key:"layout",value:function(){var t,e=this.app,i=this.width+this.margin.left+this.margin.right,n=this.height+this.margin.top+this.margin.bottom,o=e.padding.left,a=e.padding.top;return "right"==this.position&&(o=e.width-e.padding.right-i),"bottom"==this.position&&(a=e.height-e.padding.bottom-n/2),"left"==this.position||"right"==this.position?(e.padding[this.position]+=i,t=i,e.height,e.padding.top,e.padding.bottom):"top"!=this.position&&"bottom"!=this.position||(e.padding[this.position]+=n,t=e.width-e.padding.right-e.padding.left),"center"==this.textAlign&&(o+=t/2-this.width/2),"right"==this.textAlign&&(o+=t-this.width),this.pos={x:o,y:a},this.pos}},{key:"draw",value:function(){var t=this.app.getComponent({name:"coord"});t&&"rect"==t.type&&("left"!=this.textAlign||"top"!=this.position&&"bottom"!=this.position||(this.pos.x=t.getSizeAndOrigin().origin.x+this.icon.radius)),this.setPosition();}},{key:"widget",value:function(){var d=this,p=this.app.width-this.app.padding.left-this.app.padding.right,s=this.app.height-this.app.padding.top-this.app.padding.bottom,f=0,u=0,h=0,c=0,g=0,y=1,m=!1;b._.each(this.data,function(e,t){if(!m){var i=new w({id:"legend_field_icon_"+t,context:{x:0,y:d.icon.height/3,fillStyle:e.enabled?e.color||"#999":"#ccc",r:d.icon.radius,cursor:"pointer"}});i.on(b.event.types.get(),function(t){});var n=e.name;d.label.format&&(n=d.label.format(e.name,e));var o=new v.default.Display.Text(n,{id:"legend_field_txt_"+t,context:{x:d.icon.radius+3,y:d.icon.height/3,textAlign:d.label.textAlign,textBaseline:d.label.textBaseline,fillStyle:d.label.fontColor,cursor:d.label.cursor}});o.on(b.event.types.get(),function(t){});var a=o.getTextWidth()+2*d.icon.radius+20;f=Math.max(f,a);var l={height:d.icon.height};if("v"==d.direction){if(g+d.icon.height>s){if(.3*p<c)return void(m=!0);c+=f,g=0;}l.x=c,l.y=g,g+=d.icon.height,h=Math.max(h,g);}else{if(p<c+a){if(d.icon.height*(y+1)>.3*s)return void(m=!0);c=0,y++;}l.x=c,l.y=d.icon.height*(y-1),c+=a,u=Math.max(u,c);}var r=new v.default.Display.Sprite({id:"legend_field_"+t,context:l});r.addChild(i),r.addChild(o),r.context.width=a,d.sprite.addChild(r),r.on(b.event.types.get(),function(t){if("click"==t.type&&d.activeEnabled){if(1==b._.filter(d.data,function(t){return t.enabled}).length&&e.enabled)return;e.enabled=!e.enabled,i.context.fillStyle=e.enabled?e.color||"#999":"#ccc",e.enabled?d.app.show(e.name,new x.default(this,e)):d.app.hide(e.name,new x.default(this,e));}d.tipsEnabled&&("mouseover"!=t.type&&"mousemove"!=t.type||(t.eventInfo=d._getInfoHandler(t,e)),"mouseout"==t.type&&delete t.eventInfo,d.app.fire(t.type,t));});}}),"h"==this.direction?(d.width=d.sprite.context.width=u,d.height=d.sprite.context.height=d.icon.height*y):(d.width=d.sprite.context.width=c+f,d.height=d.sprite.context.height=h);}},{key:"_getInfoHandler",value:function(t,e){return {type:"legend",triggerType:"legend",trigger:this,tipsEnabled:this.tipsEnabled,nodes:[{name:e.name,fillStyle:e.color}]}}}]),h);function h(t,e){var i;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,h),(i=function(t,e){return !e||"object"!==l(e)&&"function"!=typeof e?d(t):e}(this,r(h).call(this,t,e))).name="legend",b._.extend(!0,d(i),(0, b.getDefaultProps)(h.defaultProps()),t),i.data=i._getLegendData(t),!t.direction&&t.position&&("left"==i.position||"right"==i.position?i.direction="v":i.direction="h"),i.sprite=new v.default.Display.Sprite({id:"LegendSprite",context:{x:i.pos.x,y:i.pos.y}}),i.app.stage.addChild(i.sprite),i.widget(),i.layout(),i}b.global.registerComponent(u,"legend"),t.default=u;});
	});

	unwrapExports(legend);

	var datazoom = createCommonjsModule(function (module, exports) {
	!function(t,e){e(exports,component,index_cjs$1,index_cjs,trigger);}(void 0,function(t,e,n,l,i){Object.defineProperty(t,"__esModule",{value:!0});var a=o(e),r=o(n),d=o(i);function o(t){return t&&t.__esModule?t:{default:t}}function h(t){return (h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t){return (s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function c(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i);}}function g(t,e,n){return e&&u(t.prototype,e),n&&u(t,n),t}function x(t,e){return (x=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var p=r.default.Shapes.Line,f=r.default.Shapes.Rect,b=(function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&x(t,e);}(y,a.default),g(y,null,[{key:"defaultProps",value:function(){return {position:{detail:"位置",default:"bottom"},direction:{detail:"方向",default:"h"},height:{detail:"高",default:26},width:{detail:"宽",default:100},color:{detail:"颜色",default:"#008ae6"},range:{detail:"范围设置",propertys:{start:{detail:"开始位置",default:0},end:{detail:"结束位置，默认为null，表示到最后",default:null},max:{detail:"可以外围控制智能在哪个区间拖动",default:null},min:{detail:"最少至少选中了几个数据",default:1}}},left:{detail:"左边按钮",propertys:{eventEnabled:{detail:"是否响应事件",default:!0},fillStyle:{detail:"颜色，默认取组件.color",default:null}}},right:{detail:"右边按钮",propertys:{eventEnabled:{detail:"是否响应事件",default:!0},fillStyle:{detail:"颜色，默认取组件.color",default:null}}},center:{detail:"中间位置设置",propertys:{eventEnabled:{detail:"是否响应事件",default:!0},fillStyle:{detail:"填充色",default:"#000000"},alpha:{detail:"透明度",default:.015}}},bg:{detail:"背景设置",propertys:{enabled:{detail:"是否开启",default:!0},fillStyle:{detail:"填充色",default:""},strokeStyle:{detail:"边框色",default:"#e6e6e6"},lineWidth:{detail:"线宽",default:1}}},graphAlpha:{detail:"图形的透明度",default:.6},graphStyle:{detail:"图形的颜色",default:"#dddddd"},underline:{detail:"underline",propertys:{enabled:{detail:"是否开启",default:!0},strokeStyle:{detail:"线条色",default:null},lineWidth:{detail:"线宽",default:2}}},btnOut:{detail:"left,right按钮突出的大小",default:6},btnHeight:{detail:"left,right按钮高",default:20,documentation:"left,right按钮的高，不在left，right下面，统一在这个属性里， 以为要强制保持一致"},btnWidth:{detail:"left,right按钮的宽",default:8,documentation:"left,right按钮的宽，不在left，right下面，统一在这个属性里， 以为要强制保持一致"}}}}]),g(y,[{key:"layout",value:function(){var t=this.app;"bottom"==this.position&&(this.pos.y=t.height-(this.height+t.padding.bottom+this.margin.bottom),t.padding.bottom+=this.height+this.margin.top+this.margin.bottom),"top"==this.position&&(this.pos.y=t.padding.top+this.margin.top,t.padding.top+=this.height+this.margin.top+this.margin.bottom);}},{key:"_getCloneChart",value:function(){var d=this,r=this.app,h=r.getCoord(),t=r.constructor,e=r.el.cloneNode();e.innerHTML="",e.id=r.el.id+"_currclone",e.style.position="absolute",e.style.width=this.width+"px",e.style.height=this.btnHeight+"px",e.style.top="10000px",document.body.appendChild(e);var s=[];l._.each(r.getComponents({name:"graphs"}),function(t){var e=t.enabledField||t.field;if(l._.flatten([e]).length){var n=l._.extend(!0,{},t._opt);n.field=e;var i={};"bar"==t.type&&(i={node:{}},d.graphStyle&&(i.node.fillStyle=d.graphStyle)),"line"==t.type&&(i={line:{lineWidth:1},node:{enabled:!1},area:{}},d.graphStyle&&(i.line.strokeStyle=d.graphStyle,i.area.fillStyle=d.graphStyle));var a=h.height||r.el.offsetHeight,o=d.btnHeight/a||1;"scat"==t.type&&(i={node:{radiusScale:o}},d.graphStyle),s.push(l._.extend(!0,n,i,{label:{enabled:!1},animation:!1}));}});var n={coord:r._opt.coord,graphs:s};n.coord.horizontal&&delete n.coord.horizontal,n.coord.enabled=!1,n.coord.padding=0;var i=new t(e,r._data,n,r.componentModules);return i.draw(),{thumbChart:i,cloneEl:e}}},{key:"_setDataZoomOpt",value:function(){var e=this.app,t=e.getComponent({name:"coord"}).getSizeAndOrigin(),o=this;l._.extend(!0,this,{width:parseInt(t.width),pos:{x:t.origin.x},dragIng:function(a){var t;"proportion"==o.axisLayoutType?(t=new d.default(o,{min:a.start,max:a.end}),e.dataFrame.filters.datazoom=function(t){var e=t[o.axis.field],n=o.axis.getValOfPos(a.start),i=o.axis.getValOfPos(a.end);return n<=e&&e<=i}):(t=new d.default(o,{left:e.dataFrame.range.start-a.start,right:a.end-e.dataFrame.range.end}),l._.extend(e.dataFrame.range,a)),e.resetData(null,t),e.fire("dataZoomDragIng");},dragEnd:function(){e.updateChecked&&e.updateChecked(),e.fire("dataZoomDragEnd");}});}},{key:"draw",value:function(){this._setDataZoomOpt(),this._cloneChart=this._getCloneChart(),this.axis=this._cloneChart.thumbChart.getComponent({name:"coord"})._xAxis,this.axisLayoutType=this.axis.layoutType,this._computeAttrs(),this.widget(),this._setLines(),this.setZoomBg(),this.setPosition();}},{key:"destroy",value:function(){this.sprite.destroy();}},{key:"reset",value:function(t){t=t||{};var e=this.count,n=this.range.start,i=this.range.end;t&&l._.extend(!0,this,t),this._cloneChart=this._getCloneChart(),this._computeAttrs(t),e==this.count&&(!t.range||t.range.start==n&&t.range.end==i)||(this.widget(),this._setLines()),this.setZoomBg();}},{key:"_computeAttrs",value:function(){var t=this._cloneChart.thumbChart;switch(this.dataLen=t.dataFrame.length,this.axisLayoutType){case"rule":this.count=this.dataLen-1;break;case"peak":this.count=this.dataLen;break;case"proportion":this.count=this.width;}(!this._opt.range||this._opt.range&&!this._opt.range.max||this.range.max>this.count)&&(this.range.max=this.count-1),(!this._opt.range||this._opt.range&&!this._opt.range.end||this.range.end>this.dataLen-1)&&(this.range.end=this.dataLen-1,"proportion"==this.axisLayoutType&&(this.range.end=this.count-1)),!this.direction&&this.position&&("left"==this.position||"right"==this.position?this.direction="v":this.direction="h"),this.disPart=this._getDisPart(),this.btnHeight=this.height-this.btnOut;}},{key:"_getDisPart",value:function(){var t=this,e=Math.max(parseInt(t.range.min/2/t.count*t.width),23),n=parseInt((t.range.max+1)/t.count*t.width);return "peak"==this.axisLayoutType&&(e=Math.max(parseInt(t.range.min/t.count*t.width),23)),"proportion"==this.axisLayoutType&&(n=t.width),{min:e,max:n}}},{key:"_getRangeEnd",value:function(t){return void 0===t&&(t=this.range.end),"peak"==this.axisLayoutType&&(t+=1),"proportion"==this.axisLayoutType&&(t+=1),t}},{key:"widget",value:function(){function t(){e._setLines.apply(e,arguments);}var e=this;if(e.bg.enabled){var n={x:0,y:0,width:e.width,height:e.btnHeight,lineWidth:e.bg.lineWidth,strokeStyle:e.bg.strokeStyle,fillStyle:e.bg.fillStyle};e._bgRect?e._bgRect.animate(n,{onUpdate:t}):(e._bgRect=new f({context:n}),e.dataZoomBg.addChild(e._bgRect));}if(e.underline.enabled){var i={start:{x:e.range.start/e.count*e.width+e.btnWidth/2,y:e.btnHeight},end:{x:e._getRangeEnd()/e.count*e.width-e.btnWidth/2,y:e.btnHeight},lineWidth:e.underline.lineWidth,strokeStyle:e.underline.strokeStyle||e.color};e._underline?e._underline.animate(i,{onUpdate:t}):(e._underline=e._addLine(i),e.dataZoomBg.addChild(e._underline));}var a={x:e.range.start/e.count*e.width,y:-e.btnOut/2+1,width:e.btnWidth,height:e.btnHeight+e.btnOut,fillStyle:e.left.fillStyle||e.color,cursor:e.left.eventEnabled&&"move"};e._btnLeft?e._btnLeft.animate(a,{onUpdate:t}):(e._btnLeft=new f({id:"btnLeft",dragEnabled:e.left.eventEnabled,context:a}),e._btnLeft.on("draging",function(t){this.context.y=-e.btnOut/2+1,this.context.x<0&&(this.context.x=0),this.context.x>e._btnRight.context.x-e.btnWidth-2&&(this.context.x=e._btnRight.context.x-e.btnWidth-2),e._btnRight.context.x+e.btnWidth-this.context.x>=e.disPart.max&&(this.context.x=e._btnRight.context.x+e.btnWidth-e.disPart.max),e._btnRight.context.x+e.btnWidth-this.context.x<e.disPart.min&&(this.context.x=e._btnRight.context.x+e.btnWidth-e.disPart.min),e.rangeRect.context.width=e._btnRight.context.x-this.context.x-e.btnWidth,e.rangeRect.context.x=this.context.x+e.btnWidth,e._setRange();}),e._btnLeft.on("dragend",function(t){e.dragEnd(e.range);}),this.dataZoomBtns.addChild(this._btnLeft));var o={x:e._getRangeEnd()/e.count*e.width-e.btnWidth,y:-e.btnOut/2+1,width:e.btnWidth,height:e.btnHeight+e.btnOut,fillStyle:e.right.fillStyle||e.color,cursor:e.right.eventEnabled&&"move"};e._btnRight?e._btnRight.animate(o,{onUpdate:t}):(e._btnRight=new f({id:"btnRight",dragEnabled:e.right.eventEnabled,context:o}),e._btnRight.on("draging",function(t){this.context.y=-e.btnOut/2+1,this.context.x>e.width-e.btnWidth&&(this.context.x=e.width-e.btnWidth),this.context.x+e.btnWidth-e._btnLeft.context.x>=e.disPart.max&&(this.context.x=e.disPart.max-(e.btnWidth-e._btnLeft.context.x)),this.context.x+e.btnWidth-e._btnLeft.context.x<e.disPart.min&&(this.context.x=e.disPart.min-e.btnWidth+e._btnLeft.context.x),e.rangeRect.context.width=this.context.x-e._btnLeft.context.x-e.btnWidth,e._setRange();}),e._btnRight.on("dragend",function(t){e.dragEnd(e.range);}),this.dataZoomBtns.addChild(this._btnRight));var d={x:a.x+e.btnWidth,y:1,width:o.x-a.x-e.btnWidth,height:this.btnHeight-1,fillStyle:e.center.fillStyle,fillAlpha:e.center.alpha,cursor:"move"};this.rangeRect?this.rangeRect.animate(d,{onUpdate:t}):(this.rangeRect=new f({id:"btnCenter",dragEnabled:!0,context:d}),this.rangeRect.on("draging",function(t){this.context.y=1,this.context.x<e.btnWidth&&(this.context.x=e.btnWidth),this.context.x>e.width-this.context.width-e.btnWidth&&(this.context.x=e.width-this.context.width-e.btnWidth),e._btnLeft.context.x=this.context.x-e.btnWidth,e._btnRight.context.x=this.context.x+this.context.width,e._setRange("btnCenter");}),this.rangeRect.on("dragend",function(t){e.dragEnd(e.range);}),this.dataZoomBtns.addChild(this.rangeRect)),this.linesLeft||(this.linesLeft=new r.default.Display.Sprite({id:"linesLeft"}),this.left.eventEnabled&&this._addLines({sprite:this.linesLeft}),this.dataZoomBtns.addChild(this.linesLeft)),this.linesRight||(this.linesRight=new r.default.Display.Sprite({id:"linesRight"}),this.right.eventEnabled&&this._addLines({sprite:this.linesRight}),this.dataZoomBtns.addChild(this.linesRight)),this.linesCenter||(this.linesCenter=new r.default.Display.Sprite({id:"linesCenter"}),this._addLines({count:3,sprite:this.linesCenter,strokeStyle:this.color}),this.dataZoomBtns.addChild(this.linesCenter));}},{key:"_setRange",value:function(t){var e=this,n=e._getRangeEnd(),i=n-e.range.start,a=e._btnLeft.context.x/e.width*e.count,o=(e._btnRight.context.x+e.btnWidth)/e.width*e.count;o="peak"==this.axisLayoutType?(a=Math.round(a),Math.round(o)):(this.axisLayoutType,a=parseInt(a),parseInt(o)),"btnCenter"==t&&o-a!=i&&(o=a+i),a==e.range.start&&o==n||(e.range.start=a,"peak"==e.axisLayoutType&&(o-=1),e.range.end=o,e.dragIng(e.range)),e._setLines();}},{key:"_setLines",value:function(){var t=this,e=this.linesLeft,n=this.linesRight,i=this.linesCenter,a=this._btnLeft,o=this._btnRight,d=this.rangeRect;e.context.x=a.context.x+(a.context.width-e.context.width)/2,e.context.y=a.context.y+(a.context.height-e.context.height)/2,n.context.x=o.context.x+(o.context.width-n.context.width)/2,n.context.y=o.context.y+(o.context.height-n.context.height)/2,i.context.x=d.context.x+(d.context.width-i.context.width)/2,i.context.y=d.context.y+(d.context.height-i.context.height)/2,t.underline.enabled&&(t._underline.context.start.x=e.context.x+t.btnWidth/2,t._underline.context.end.x=n.context.x+t.btnWidth/2);}},{key:"_addLines",value:function(t){for(var e=t.count||2,n=t.sprite,i=t.dis||2,a=0,o=e;a<o;a++)n.addChild(this._addLine({x:a*i,strokeStyle:t.strokeStyle||""}));n.context.width=a*i-1,n.context.height=6;}},{key:"_addLine",value:function(t){var e=t||{};return new p({id:e.id||"",context:{x:e.x||0,y:e.y||0,start:{x:e.start?e.start.x:0,y:e.start?e.start.y:0},end:{x:e.end?e.end.x:0,y:e.end?e.end.y:6},lineWidth:e.lineWidth||1,strokeStyle:e.strokeStyle||"#ffffff"}})}},{key:"setZoomBg",value:function(){this.__graphssp&&this.__graphssp.destroy();var t=this._cloneChart.thumbChart.graphsSprite;t.setEventEnable(!1);var e=this._cloneChart.thumbChart.getComponent({name:"coord"});t.id=t.id+"_datazoomthumbChartbg",t.context.x=-e.origin.x,t.context.scaleY=this.btnHeight/e.height,t.context.scaleX=this.width/e.width,t.context.globalAlpha=this.graphAlpha,this.dataZoomBg.addChild(t,0),this.__graphssp=t,this._cloneChart.thumbChart.destroy(),this._cloneChart.cloneEl.parentNode.removeChild(this._cloneChart.cloneEl);}}]),y);function y(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,y),(n=function(t,e){return !e||"object"!==h(e)&&"function"!=typeof e?c(t):e}(this,s(y).call(this,t,e))).name="dataZoom",n._cloneChart=null,n.count=1,n.dataLen=1,n.axisLayoutType=null,n.dragIng=function(){},n.dragEnd=function(){},n.disPart={},n._btnLeft=null,n._btnRight=null,n._underline=null,n.sprite=new r.default.Display.Sprite({id:"dataZoom",context:{x:n.pos.x,y:n.pos.y}}),n.sprite.noSkip=!0,n.dataZoomBg=new r.default.Display.Sprite({id:"dataZoomBg"}),n.dataZoomBtns=new r.default.Display.Sprite({id:"dataZoomBtns"}),n.sprite.addChild(n.dataZoomBg),n.sprite.addChild(n.dataZoomBtns),e.stage.addChild(n.sprite),l._.extend(!0,c(n),(0, l.getDefaultProps)(y.defaultProps()),t),"margin"in t||("bottom"==n.position&&(n.margin.top=10),"top"==n.position&&(n.margin.bottom=10)),n.axis=null,n.layout(),n}l.global.registerComponent(b,"dataZoom"),t.default=b;});
	});

	unwrapExports(datazoom);

	var markline = createCommonjsModule(function (module, exports) {
	!function(t,e){e(exports,component,index_cjs$1,index_cjs);}(void 0,function(t,e,i,u){Object.defineProperty(t,"__esModule",{value:!0});var n=o(e),l=o(i);function o(t){return t&&t.__esModule?t:{default:t}}function a(t){return (a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t){return (r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function f(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n);}}function d(t,e,i){return e&&f(t.prototype,e),i&&f(t,i),t}function c(t,e){return (c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var y=l.default.Shapes.BrokenLine,h=l.default.Display.Sprite,p=l.default.Display.Text,_=(function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e);}(b,n.default),d(b,null,[{key:"defaultProps",value:function(){return {markTo:{detail:"标准哪个目标字段",default:null},yVal:{detail:"组件的值",default:0,documentation:"可能是个function，均值计算就是个function"},line:{detail:"线的配置",propertys:{strokeStyle:{detail:"线的颜色",default:"#999999"},lineWidth:{detail:"线宽",default:1},lineType:{detail:"线样式",default:"dashed"}}},label:{detail:"文本",propertys:{enabled:{detail:"是否开启",default:!1},fontColor:{detail:"文本字体颜色",default:"#999999"},fontSize:{detail:"文本字体大小",default:12},text:{detail:"文本内容",default:null},format:{detail:"文本格式化函数",default:null}}}}}}]),d(b,[{key:"draw",value:function(){this._calculateProps(),this.setPosition(),this.widget();}},{key:"_calculateProps",value:function(){var t=this._opt,n=t.markTo,e=this.app.getComponent({name:"coord"});if(!n||-1!=u._.indexOf(this.app.dataFrame.fields,n)){var i,l=e._yAxis[0];n&&u._.each(e._yAxis,function(t,e){var i=u._.flatten([t.field]);0<=u._.indexOf(i,n)&&(l=t);}),t.yAxisAlign&&(l=e._yAxis["left"==t.yAxisAlign?0:1]),i=void 0!==t.y&&null!==t.y?Number(t.y):function(){var t=this.app.dataFrame.getFieldData(n),e=0;return u._.each(t,function(t){Number(t)&&(e+=t);}),e/t.length},isNaN(i)||l.drawWaterLine(i);var o="#777",a=e.getFieldMapOf(n);a&&(o=a.color);var r=t.line&&t.line.strokeStyle||o,s=t.label&&t.label.fontColor||o;this._yAxis=l,this.width=e.width,this.height=e.height,this.yVal=i,this.pos={x:e.origin.x,y:e.origin.y},this.line.list=[[0,0],[this.width,0]],this.label.fontColor=s,r&&(this.line.strokeStyle=r);}}},{key:"widget",value:function(){var t=this,e=this._getYPos(),i=new y({id:"line",context:{y:e,pointList:t.line.list,strokeStyle:t.line.strokeStyle,lineWidth:t.line.lineWidth,lineType:t.line.lineType}});if(t.sprite.addChild(i),t._line=i,t.label.enabled){var n=new p(t._getLabel(),{context:t.label});this._txt=n,t.sprite.addChild(n),t._setTxtPos(e);}this.line.y=e;}},{key:"reset",value:function(t){t&&u._.extend(!0,this,t);var e=this,i=this._getYPos();i!=this.line.y&&this._line.animate({y:i},{duration:300,onUpdate:function(t){e.label.enabled&&(e._txt.resetText(e._getLabel()),e._setTxtPos(t.y));}}),this._line.context.strokeStyle=this.line.strokeStyle,this.line.y=i;}},{key:"_setTxtPos",value:function(t){var e=this._txt;"left"==this._yAxis.align?e.context.x=5:e.context.x=this.width-e.getTextWidth()-5,u._.isNumber(this.label.y)?e.context.y=this.label.y:e.context.y=t-e.getTextHeight();}},{key:"_getYVal",value:function(t){var e=t=t||this.yVal;return u._.isFunction(t)&&(e=t.apply(this)),e}},{key:"_getYPos",value:function(){return -this._yAxis.getPosOfVal(this._getYVal())}},{key:"_getLabel",value:function(){var t=this._getYVal();return u._.isFunction(this.label.format)?this.label.format(t,this):u._.isString(this.label.text)?this.label.text:t}}]),b);function b(t,e){var i;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,b),(i=function(t,e){return !e||"object"!==a(e)&&"function"!=typeof e?s(t):e}(this,r(b).call(this,t,e))).name="markLine",i._yAxis=null,i.line={y:0,list:[]},i._txt=null,i._line=null,i.sprite=new h,i.app.graphsSprite.addChild(i.sprite),u._.extend(!0,s(i),(0, u.getDefaultProps)(b.defaultProps()),t),i}u.global.registerComponent(_,"markLine"),t.default=_;});
	});

	unwrapExports(markline);

	var tips = createCommonjsModule(function (module, exports) {
	!function(t,e){e(exports,component,index_cjs$1,tools,index_cjs);}(void 0,function(t,e,i,l,o){Object.defineProperty(t,"__esModule",{value:!0});var n=r(e),s=r(i);function r(t){return t&&t.__esModule?t:{default:t}}function a(t){return (a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(t){return (p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function f(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function h(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n);}}function u(t,e,i){return e&&h(t.prototype,e),i&&h(t,i),t}function c(t,e){return (c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var d=s.default.Shapes.Rect,x=s.default.Shapes.Line,v=(function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e);}(_,n.default),u(_,null,[{key:"defaultProps",value:function(){return {enabled:{detail:"是否开启Tips",default:!0},content:{detail:"自定义tips的内容（html）",default:null},borderRadius:{detail:"tips的边框圆角半径",default:5},strokeStyle:{detail:"tips边框颜色",default:"#ccc"},fillStyle:{detail:"tips背景色",default:"rgba(255,255,255,0.95)"},fontColor:{detail:"tips文本颜色",default:"#999999"},positionOfPoint:{detail:"在触发点的位置",default:"right"},offsetX:{detail:"tips内容到鼠标位置的偏移量x",default:10},offsetY:{detail:"tips内容到鼠标位置的偏移量y",default:10},positionInRange:{detail:"tip的浮层是否限定在画布区域",default:!0},pointer:{detail:"触发tips的时候的指针样式",default:"line",documentation:'tips的指针,默认为直线，可选为："line" | "region"(柱状图中一般用region)'},pointerAnim:{detail:"tips移动的时候，指针是否开启动画",default:!0}}}}]),u(_,[{key:"show",value:function(t){if(this.enabled){if(t.eventInfo){this.eventInfo=t.eventInfo;var e=t.target.getStage();e?(this.cW=e.context.width,this.cH=e.context.height):"canvax"==t.target.type&&(this.cW=t.target.width,this.cH=t.target.height),this._setContent(t)?(this._setPosition(t),this.sprite.toFront()):this.hide(t);}this._tipsPointerShow(t);}}},{key:"move",value:function(t){this.enabled&&(t.eventInfo&&(this.eventInfo=t.eventInfo,this._setContent(t)?this._setPosition(t):this._hideDialogTips()),this._tipsPointerMove(t));}},{key:"hide",value:function(t){this.enabled&&(this._hideDialogTips(t),this._tipsPointerHide(t));}},{key:"_hideDialogTips",value:function(){this.eventInfo&&(this.eventInfo=null,this.sprite.removeAllChildren(),this._removeContent());}},{key:"_setPosition",value:function(t){if(this.enabled&&this._tipDom){var e=t.pos||t.target.localToGlobal(t.point),i=this._checkX(e.x+this.offsetX),n=this._checkY(e.y+this.offsetY);this._tipDom.style.cssText+=";visibility:visible;left:"+i+"px;top:"+n+"px;-webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;","left"==this.positionOfPoint&&(this._tipDom.style.left=this._checkX(e.x-this.offsetX-this._tipDom.offsetWidth)+"px");}}},{key:"_creatTipDom",value:function(){this._tipDom=document.createElement("div"),this._tipDom.className="chart-tips",this._tipDom.style.cssText+="; border-radius:"+this.borderRadius+"px;background:"+this.fillStyle+";border:1px solid "+this.strokeStyle+";visibility:hidden;position:absolute;enabled:inline-block;*enabled:inline;*zoom:1;padding:6px;color:"+this.fontColor+";line-height:1.5",this._tipDom.style.cssText+="; box-shadow:1px 1px 3px "+this.strokeStyle+";",this._tipDom.style.cssText+="; border:none;white-space:nowrap;word-wrap:normal;",this._tipDom.style.cssText+="; text-align:left;",this.tipDomContainer.appendChild(this._tipDom);}},{key:"_removeContent",value:function(){this._tipDom&&(this.tipDomContainer.removeChild(this._tipDom),this._tipDom=null);}},{key:"_setContent",value:function(t){var e=this._getContent(t);if(e||0===e)return this._tipDom||this._creatTipDom(t),this._tipDom.innerHTML=e,this.dW=this._tipDom.offsetWidth,this.dH=this._tipDom.offsetHeight,e}},{key:"_getContent",value:function(t){return this.content?o._.isFunction(this.content)?this.content(t.eventInfo,t):this.content:this._getDefaultContent(t.eventInfo)}},{key:"_getDefaultContent",value:function(t){var r="";return t.nodes.length&&(void 0!==t.title&&null!==t.title&&""!==t.title&&(r+="<div style='font-size:14px;border-bottom:1px solid #f0f0f0;padding:4px;margin-bottom:6px;'>"+t.title+"</div>"),o._.each(t.nodes,function(t,e){var i=t.color||t.fillStyle||t.strokeStyle,n=t.name||t.field||t.content,o="object"==a(t.value)?JSON.stringify(t.value):(0, l.numAddSymbol)(t.value),s=t.value||0==t.value;r+="<div style='line-height:1.5;font-size:12px;padding:0 4px;'>",i&&(r+="<span style='background:"+i+";margin-right:8px;margin-top:7px;float:left;width:8px;height:8px;border-radius:4px;overflow:hidden;font-size:0;'></span>"),n&&(r+="<span style='margin-right:5px;'>"+n,s&&(r+="："),r+="</span>"),s&&(r+=o),r+="</div>";})),r}},{key:"_checkX",value:function(t){if(this.positionInRange){var e=this.dW+2;t<0&&(t=0),t+e>this.cW&&(t=this.cW-e);}return t}},{key:"_checkY",value:function(t){if(this.positionInRange){var e=this.dH+2;t<0&&(t=0),t+e>this.cH&&(t=this.cH-e);}return t}},{key:"_tipsPointerShow",value:function(t){if(t.eventInfo&&t.eventInfo.xAxis){var e=this.app.getComponent({name:"coord"});if(e&&"rect"==e.type&&this.pointer){var i=this._tipsPointer,n=e.origin.y-e.height,o=0;if("line"==this.pointer&&(o=e.origin.x+t.eventInfo.xAxis.x),"region"==this.pointer){var s=e._xAxis.getCellLengthOfPos(t.eventInfo.xAxis.x);o=e.origin.x+t.eventInfo.xAxis.x-s/2,t.eventInfo.xAxis.ind<0&&(o=e.origin.x);}i?this.pointerAnim&&"proportion"!=e._xAxis.layoutType?(i.__animation&&i.__animation.stop(),i.__animation=i.animate({x:o,y:n},{duration:200})):(i.context.x=o,i.context.y=n):("line"==this.pointer&&(i=new x({context:{x:o,y:n,start:{x:0,y:0},end:{x:0,y:e.height},lineWidth:1,strokeStyle:"#cccccc"}})),"region"==this.pointer&&(s=e._xAxis.getCellLengthOfPos(o),i=new d({context:{width:s,height:e.height,x:o,y:n,fillStyle:"#cccccc",globalAlpha:.3}})),this.app.graphsSprite.addChild(i,0),this._tipsPointer=i);}}}},{key:"_tipsPointerHide",value:function(t){if(t.eventInfo&&t.eventInfo.xAxis){var e=this.app.getComponent({name:"coord"});e&&"rect"==e.type&&this.pointer&&this._tipsPointer&&(this._tipsPointer.destroy(),this._tipsPointer=null);}}},{key:"_tipsPointerMove",value:function(t){if(t.eventInfo&&t.eventInfo.xAxis){var e=this.app.getComponent({name:"coord"});if(e&&"rect"==e.type&&this.pointer&&this._tipsPointer){var i=this._tipsPointer,n=e.origin.x+t.eventInfo.xAxis.x;if("region"==this.pointer){var o=e._xAxis.getCellLengthOfPos(t.eventInfo.xAxis.x);n=e.origin.x+t.eventInfo.xAxis.x-o/2,t.eventInfo.xAxis.ind<0&&(n=e.origin.x);}var s=e.origin.y-e.height;n!=i.__targetX&&(this.pointerAnim&&"proportion"!=e._xAxis.layoutType?(i.__animation&&i.__animation.stop(),i.__targetX=n,i.__animation=i.animate({x:n,y:s},{duration:200,onComplete:function(){delete i.__targetX,delete i.__animation;}})):(i.context.x=n,i.context.y=s));}}}}]),_);function _(t,e){var i;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,_),(i=function(t,e){return !e||"object"!==a(e)&&"function"!=typeof e?f(t):e}(this,p(_).call(this,t,e))).name="tips",i.tipDomContainer=i.app.canvax.domView,i.cW=0,i.cH=0,i.dW=0,i.dH=0,i._tipDom=null,i._tipsPointer=null,i.eventInfo=null,i.sprite=null,i.sprite=new s.default.Display.Sprite({id:"TipSprite"}),i.app.stage.addChild(i.sprite);var n=f(i);return i.sprite.on("destroy",function(){n._tipDom=null;}),o._.extend(!0,f(i),(0, o.getDefaultProps)(_.defaultProps()),t),i}o.global.registerComponent(v,"tips"),t.default=v;});
	});

	unwrapExports(tips);

	var bartgi = createCommonjsModule(function (module, exports) {
	!function(t,e){e(exports,component,index_cjs$1,index_cjs);}(void 0,function(t,e,n,i){Object.defineProperty(t,"__esModule",{value:!0});var r=o(e),a=o(n);function o(t){return t&&t.__esModule?t:{default:t}}function l(t){return (l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t){return (u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}function p(t,e,n){return e&&f(t.prototype,e),n&&f(t,n),t}function d(t,e){return (d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var c=a.default.Shapes.Line,y=(function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e);}(b,r.default),p(b,null,[{key:"defaultProps",value:function(){return {field:{detail:"字段配置",default:null},barField:{detail:"这个bartgi组件对应的bar Graph 的field",default:null},yAxisAlign:{detail:"这个bartgi组件回到到哪个y轴",default:"left"},standardVal:{detail:"tgi标准线",default:100},line:{detail:"bar对应的tgi线配置",propertys:{lineWidth:{detail:"线宽",default:3},strokeStyle:{detail:"线颜色",default:function(t){return t>=this.standardVal?"#43cbb5":"#ff6060"}}}}}}}]),p(b,[{key:"reset",value:function(t){i._.extend(!0,this,t),this.barDatas=null,this.data=null,this.sprite.removeAllChildren(),this.draw();}},{key:"draw",value:function(){var a=this,t=this.app.getComponent({name:"coord"});this.pos={x:t.origin.x,y:t.origin.y},this.setPosition(),i._.each(a.app.getComponents({name:"graphs"}),function(t){if("bar"==t.type&&t.data[a.barField])return a.barDatas=t.data[a.barField],!1}),this.data=i._.flatten(a.app.dataFrame.getDataOrg(a.field)),this.barDatas&&i._.each(this.data,function(t,e){var n=-a._yAxis.getPosOfVal(t),r=a.barDatas[e],i=new c({context:{start:{x:r.x,y:n},end:{x:r.x+r.width,y:n},lineWidth:2,strokeStyle:a._getProp(a.line.strokeStyle,t,e)}});a.sprite.addChild(i);});}},{key:"_getProp",value:function(t,e,n){var r=t;return i._.isFunction(t)&&(r=t.apply(this,[e,n])),r}}]),b);function b(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,b),(n=function(t,e){return !e||"object"!==l(e)&&"function"!=typeof e?s(t):e}(this,u(b).call(this,t,e))).name="barTgi",n.data=null,n.barDatas=null,n._yAxis=null,n.sprite=null,n.pos={x:0,y:0},i._.extend(!0,s(n),(0, i.getDefaultProps)(b.defaultProps()),t),n._yAxis=n.app.getComponent({name:"coord"})._yAxis["left"==n.yAxisAlign?0:1],n.sprite=new a.default.Display.Sprite,n.app.graphsSprite.addChild(n.sprite),n}i.global.registerComponent(y,"barTgi"),t.default=y;});
	});

	unwrapExports(bartgi);

	var barguide = createCommonjsModule(function (module, exports) {
	!function(e,t){t(exports,component,index_cjs$1,index_cjs);}(void 0,function(e,t,n,u){Object.defineProperty(e,"__esModule",{value:!0});var i=l(t),f=l(n);function l(e){return e&&e.__esModule?e:{default:e}}function a(e){return (a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e){return (r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i);}}function s(e,t,n){return t&&d(e.prototype,t),n&&d(e,n),e}function p(e,t){return (p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var c=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t);}(y,i.default),s(y,null,[{key:"defaultProps",value:function(){return {field:{detail:"字段配置",default:null},barField:{detail:"这个guide对应的bar Graph 的field",default:null},yAxisAlign:{detail:"这个guide组件回到到哪个y轴",default:"left"},node:{detail:"单个节点配置",propertys:{shapeType:{detail:"节点绘制的图形类型",default:"circle"},lineWidth:{detail:"图表描边线宽",default:3},radius:{detail:"图形半径",default:6},fillStyle:{detail:"填充色",default:"#19dea1"},strokeStyle:{detail:"描边色",default:"#fff"}}},label:{detail:"文本配置",propertys:{fontSize:{detail:"字体大小",default:12},fontColor:{detail:"字体颜色",default:"#19dea1"},verticalAlign:{detail:"垂直对齐方式",default:"bottom"},textAlign:{detail:"水平对齐方式",default:"center"},strokeStyle:{detail:"文本描边颜色",default:"#fff"},lineWidth:{detail:"文本描边线宽",default:0},format:{detail:"文本格式处理函数",default:null}}}}}}]),s(y,[{key:"reset",value:function(e){u._.extend(!0,this,e),this.barDatas=null,this.data=null,this.sprite.removeAllChildren(),this.draw();}},{key:"draw",value:function(){var o=this,e=this.app.getComponent({name:"coord"});this.pos={x:e.origin.x,y:e.origin.y},this.setPosition(),u._.each(o.app.getComponents({name:"graphs"}),function(e){if("bar"==e.type&&e.data[o.barField])return o.barDatas=e.data[o.barField],!1}),this.data=u._.flatten(o.app.dataFrame.getDataOrg(o.field)),this.barDatas&&u._.each(this.data,function(e,t){var n=-o._yAxis.getPosOfVal(e),i=o.barDatas[t],l=new f.default.Shapes.Circle({context:{x:i.x+i.width/2,y:n,r:o.node.radius,fillStyle:o.node.fillStyle,strokeStyle:o.node.strokeStyle,lineWidth:o.node.lineWidth}}),a=e;u._.isFunction(o.label.format)&&(a=o.label.format(e,i));var r=new f.default.Display.Text(a,{context:{x:i.x+i.width/2,y:n-o.node.radius-1,fillStyle:o.label.fontColor,lineWidth:o.label.lineWidth,strokeStyle:o.label.strokeStyle,fontSize:o.label.fontSize,textAlign:o.label.textAlign,textBaseline:o.label.verticalAlign}});o.sprite.addChild(l),o.sprite.addChild(r);});}},{key:"_getProp",value:function(e,t,n){var i=e;return u._.isFunction(e)&&(i=e.apply(this,[t,n])),i}}]),y);function y(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,y),(n=function(e,t){return !t||"object"!==a(t)&&"function"!=typeof t?o(e):t}(this,r(y).call(this,e,t))).name="barGuide",n.data=null,n.barDatas=null,n._yAxis=null,n.sprite=null,u._.extend(!0,o(n),(0, u.getDefaultProps)(y.defaultProps()),e),n._yAxis=n.app.getComponent({name:"coord"})._yAxis["left"==n.yAxisAlign?0:1],n.sprite=new f.default.Display.Sprite,n.app.graphsSprite.addChild(n.sprite),n}u.global.registerComponent(c,"barGuide"),e.default=c;});
	});

	unwrapExports(barguide);

	var theme = createCommonjsModule(function (module, exports) {
	!function(e,t){t(exports,component,index_cjs);}(void 0,function(e,t,o){var n;function r(e){return (r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n);}}function u(e,t){return !t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function f(e){return (f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return (c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Object.defineProperty(e,"__esModule",{value:!0});var s,l,p=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t);}(y,((n=t)&&n.__esModule?n:{default:n}).default),s=y,(l=[{key:"set",value:function(e){return this.colors=e,this.colors}},{key:"get",value:function(){var e=this.colors;return o._.isArray(e)||(e=[e]),e}},{key:"mergeTo",value:function(e){e=e||[];for(var t=0,o=this.colors.length;t<o;t++)e[t]?e[t]=this.colors[t]:e.push(this.colors[t]);return e}}])&&i(s.prototype,l),y);function y(e,t){var o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,y),(o=u(this,f(y).call(this,e,t))).name="theme",o.colors=e||[],o}o.global.registerComponent(p,"theme"),e.default=p;});
	});

	unwrapExports(theme);

	var watermark = createCommonjsModule(function (module, exports) {
	!function(t,e){e(exports,index_cjs$1,index_cjs,component);}(void 0,function(t,e,o,n){Object.defineProperty(t,"__esModule",{value:!0});var u=r(e);function r(t){return t&&t.__esModule?t:{default:t}}function i(t){return (i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t){return (a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function f(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function l(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o);}}function c(t,e,n){return e&&l(t.prototype,e),n&&l(t,n),t}function p(t,e){return (p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var s=(function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e);}(d,r(n).default),c(d,null,[{key:"defaultProps",value:function(){return {text:{detail:"水印内容",default:"chartx"},fontSize:{detail:"字体大小",default:20},fontColor:{detail:"水印颜色",default:"#cccccc"},alpha:{detail:"水印透明度",default:.2},rotation:{detail:"水印旋转角度",default:45}}}}]),c(d,[{key:"draw",value:function(){for(var t=new u.default.Display.Text(this.text,{context:{fontSize:this.fontSize,fillStyle:this.fontColor}}),e=t.getTextWidth(),n=t.getTextHeight(),o=parseInt(this.height/(5*n))+1,r=parseInt(this.width/(1.5*e))+1,i=0;i<o;i++)for(var a=0;a<r;a++){var f=new u.default.Display.Text(this.text,{context:{rotation:this.rotation,fontSize:this.fontSize,fillStyle:this.fontColor,globalAlpha:this.alpha}});f.context.x=1.5*e*a+.25*e,f.context.y=5*n*i,this.spripte.addChild(f);}}}]),d);function d(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,d),(n=function(t,e){return !e||"object"!==i(e)&&"function"!=typeof e?f(t):e}(this,a(d).call(this,t,e))).name="waterMark",n.width=n.app.width,n.height=n.app.height,o._.extend(!0,f(n),(0, o.getDefaultProps)(d.defaultProps()),t),n.spripte=new u.default.Display.Sprite({id:"watermark"}),n.app.stage.addChild(n.spripte),n.draw(),n}o.global.registerComponent(s,"waterMark"),t.default=s;});
	});

	unwrapExports(watermark);

	var cross = createCommonjsModule(function (module, exports) {
	!function(e,t){t(exports,component,index_cjs$1,index_cjs);}(void 0,function(e,t,n,i){Object.defineProperty(e,"__esModule",{value:!0});var o=l(t),r=l(n);function l(e){return e&&e.__esModule?e:{default:e}}function a(e){return (a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e){return (u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i);}}function p(e,t,n){return t&&f(e.prototype,t),n&&f(e,n),e}function c(e,t){return (c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=r.default.Shapes.Line,y=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t);}(h,o.default),p(h,null,[{key:"defaultProps",value:function(){return {aimPoint:{detail:"准心位置",propertys:{x:{detail:"x",default:0},y:{detail:"y",default:0}}},line:{detail:"线配置",propertys:{strokeStyle:{detail:"线颜色",default:"#cccccc"},lineWidth:{detail:"线宽",default:1},lineType:{detail:"线样式类型",default:"solid"}}}}}}]),p(h,[{key:"draw",value:function(){var e=this,t=this.app.getComponent({name:"coord"});this.pos={x:t.origin.x,y:t.origin.y},this.width=t.width,this.height=t.height,this.aimPoint={x:this.width/2,y:this.height/2},this.setPosition(),e._hLine=new d({context:{start:{x:0,y:-this.aimPoint.y},end:{x:e.width,y:-this.aimPoint.y},strokeStyle:e.line.strokeStyle,lineWidth:e.line.lineWidth,lineType:e.line.lineType}}),e.sprite.addChild(e._hLine),e._vLine=new d({context:{start:{x:this.aimPoint.x,y:0},end:{x:this.aimPoint.x,y:-e.height},strokeStyle:e.line.strokeStyle,lineWidth:e.line.lineWidth,lineType:e.line.lineType}}),e.sprite.addChild(e._vLine);}}]),h);function h(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,h),(n=function(e,t){return !t||"object"!==a(t)&&"function"!=typeof t?s(e):t}(this,u(h).call(this,e,t))).name="cross",n.width=e.width||0,n.height=e.height||0,n.x=null,n.y=null,n._hLine=null,n._vLine=null,i._.extend(!0,s(n),(0, i.getDefaultProps)(h.defaultProps()),e),n._yAxis=n.app.getComponent({name:"coord"})._yAxis["left"==n.yAxisAlign?0:1],n.sprite=new r.default.Display.Sprite,n.app.graphsSprite.addChild(n.sprite),n}i.global.registerComponent(y,"cross"),e.default=y;});
	});

	unwrapExports(cross);

	var lineschedu = createCommonjsModule(function (module, exports) {
	!function(t,e){e(exports,component,index_cjs$1,index_cjs);}(void 0,function(t,e,i,y){Object.defineProperty(t,"__esModule",{value:!0});var n=o(e),g=o(i);function o(t){return t&&t.__esModule?t:{default:t}}function r(t){return (r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t){return (l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function s(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n);}}function u(t,e,i){return e&&s(t.prototype,e),i&&s(t,i),t}function d(t,e){return (d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var f=(function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e);}(p,n.default),u(p,null,[{key:"defaultProps",value:function(){return {lineField:{detail:"对应的line字段",default:null},style:{detail:"默认色",default:"#3995ff"},fillStyle:{detail:"节点填充色",default:"#ffffff"},lineWidth:{detail:"线宽",default:2},radius:{detail:"圆点半径",default:6},timeFontSize:{detail:"时间文本大小",default:14},timeFontColor:{detail:"时间文本颜色",default:"#606060"},listFontSize:{detail:"列表信息文本大小",default:12}}}}]),u(p,[{key:"reset",value:function(t){y._.extend(!0,this,t),this.lineDatas=null,this.sprite.removeAllChildren(),this.draw();}},{key:"draw",value:function(){var t=this,e=this.app.getComponent({name:"coord"});this.pos={x:e.origin.x,y:e.origin.y},this.setPosition();var i=t.app.getComponent({name:"graphs",type:"line",field:t.lineField});t.lineDatas=i.data[t.lineField].data;var n=this.app.getComponent({name:"coord"}).getAxis({type:"xAxis"}).getIndexOfVal(this.time);if(-1!=n){var o=this.lineDatas[n];if(null!=o.y){var r=t._getNodeY(o,e),l=o.x,a=new g.default.Display.Sprite({context:{x:l-20}});this.sprite.addChild(a);var s=0,u=new g.default.Display.Text(t.time,{context:{fillStyle:this.timeFontColor||this.style,fontSize:this.timeFontSize}});a.addChild(u),s=u.getTextHeight();var d=u.getTextWidth(),f=new g.default.Display.Text(y._.flatten([t.list]).join("\n"),{context:{y:s,fillStyle:this.listFontColor||this.style,fontSize:this.listFontSize}});a.addChild(f),s+=f.getTextHeight(),(d=Math.max(d,f.getTextWidth()))+l-20>e.width+t.app.padding.right&&(a.context.x=e.width+t.app.padding.right,u.context.textAlign="right",f.context.textAlign="right");var p=0;"online"==t.status?(p=r-(this.radius+3)-s,Math.abs(p)>e.origin.y&&(p=-e.origin.y,r=-(e.origin.y-(this.radius+3)-s))):0<(p=r+(this.radius+3))+s&&(p=-s,r=-(this.radius+3)-s),a.context.y=p;var h=new g.default.Shapes.BrokenLine({context:{pointList:[[l,r],[l,o.y]],strokeStyle:t.style,lineWidth:t.lineWidth}});t.sprite.addChild(h);var c=new g.default.Shapes.Circle({context:{x:l,y:r,r:t.radius,fillStyle:t.fillStyle,strokeStyle:t.style,lineWidth:t.lineWidth}});t.sprite.addChild(c);}}}},{key:"_getNodeY",value:function(t,e){var i=this.app.height,n=(e.height,t.y);return "online"==this.status?n-=Math.min(50,.3*(i-Math.abs(n))):n+=Math.min(50,.3*Math.abs(n)),n}}]),p);function p(t,e){var i;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,p),(i=function(t,e){return !e||"object"!==r(e)&&"function"!=typeof e?a(t):e}(this,l(p).call(this,t,e))).name="lineSchedu",y._.extend(!0,a(i),(0, y.getDefaultProps)(p.defaultProps()),t),i.lineDatas=null,i.sprite=new g.default.Display.Sprite,i.app.graphsSprite.addChild(i.sprite),i}y.global.registerComponent(f,"lineSchedu"),t.default=f;});
	});

	unwrapExports(lineschedu);

	var markcloumn = createCommonjsModule(function (module, exports) {
	!function(e,t){t(exports,component,index_cjs$1,index_cjs);}(void 0,function(e,t,n,r){Object.defineProperty(e,"__esModule",{value:!0});var l=o(t),i=o(n);function o(e){return e&&e.__esModule?e:{default:e}}function a(e){return (a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e){return (d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l);}}function s(e,t,n){return t&&u(e.prototype,t),n&&u(e,n),e}function c(e,t){return (c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=i.default.Shapes.Line,h=i.default.Shapes.Circle,x=i.default.Display.Text,y=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t);}(_,l.default),s(_,null,[{key:"defaultProps",value:function(){return {xVal:{detail:"x的value值",default:null},x:{detail:"x的像素值",default:null},markTo:{detail:"标准哪个目标字段",documentation:"如果设置了这个字段，那么line的起点将是这个graphs上的node节点",default:null},line:{detail:"线的配置",propertys:{enabled:{detail:"是否开启",default:!0},lineWidth:{detail:"线宽",default:2},strokeStyle:{detail:"线的颜色",default:"#d5d5d5"},lineType:{detail:"线的样式，虚线(dashed)实线(solid)",default:"solid"},startY:{detail:"startY",default:0},endY:{detail:"startY",default:null}}},node:{detail:"数据图形节点",propertys:{enabled:{detail:"是否开启",default:!0},radius:{detail:"节点半径",default:5},fillStyle:{detail:"节点图形的背景色",default:"#ffffff"},strokeStyle:{detail:"节点图形的描边色，默认和line.strokeStyle保持一致",default:null},lineWidth:{detail:"节点图形边宽大小",default:2}}},label:{detail:"文本",propertys:{enabled:{detail:"是否开启",default:!1},fontColor:{detail:"文本字体颜色",default:null},fontSize:{detail:"文本字体大小",default:12},text:{detail:"文本内容",documentation:"可以是函数",default:null},format:{detail:"文本格式化函数",default:null}}}}}}]),s(_,[{key:"draw",value:function(e){e=e||{},this.width=e.width,this.height=e.height,this.origin=e.origin,this.sprite.context.x=this.origin.x,this.sprite.context.y=this.origin.y,this._widget();}},{key:"reset",value:function(e){e&&r._.extend(!0,this,e),this._widget();}},{key:"_widget",value:function(){var l,i=this,e=this.app.getComponent({name:"coord"})._xAxis;if(null!=this.xVal&&(l=e.getNodeInfoOfVal(this.xVal)),null!=this.x&&(l=e.getNodeInfoOfPos(this.x)),l){i.nodes=[],i.on("complete",function(){i._drawLine(l),i._drawNodes(l),i._drawLabels(l);});var o=0,a=this.app.getGraphs();r._.each(a,function(n){function e(){if(o++,!i.markTo||-1!=r._.flatten([n.field]).indexOf(i.markTo)){var e=n.getNodesOfPos(l.x);if(i.markTo){var t=r._.find(e,function(e){return e.field==i.markTo});t&&(i.nodes=[t]);}else i.nodes=i.nodes.concat(e);}o==a.length&&i.fire("complete");}n.inited?e():n.on("complete",function(){e();});});}}},{key:"_drawLine",value:function(e){var t=this;if(t.line.enabled){var n=r._.extend(!0,{x:parseInt(e.x),start:{x:0,y:0},end:{x:0,y:-t.height},lineWidth:1,strokeStyle:"#cccccc"},this.line);if(null!=t.line.endY){var l=0;r._.isNumber(t.line.endY)&&(l=t.line.endY),"auto"==t.line.endY&&r._.each(t.nodes,function(e){l=Math.min(e.y);}),n.end.y=l;}this._line?r._.extend(this._line.context,n):(this._line=new p({context:n}),this._lineSp.addChild(this._line),this._line.on(r.event.types.get(),function(e){e.eventInfo={xAxis:{},nodes:t.nodes},null!=t.xVal&&(e.eventInfo.xAxis.value=t.xVal,e.eventInfo.xAxis.text=t.xVal+"",e.eventInfo.title=t.xVal+""),t.app.fire(e.type,e);}));}}},{key:"_drawNodes",value:function(){var l=this;l.node.enabled&&(l._nodes.removeAllChildren(),r._.each(l.nodes,function(t){var e=r._.extend({x:t.x,y:t.y,cursor:"pointer",r:l.node.radius,lineWidth:l.node.lineWidth||t.lineWidth,strokeStyle:l.node.strokeStyle||t.color,fillStyle:l.node.fillStyle||t.fillStyle}),n=new h({context:e});n.nodeData=t,n.on(r.event.types.get(),function(e){e.eventInfo={xAxis:{},nodes:[t]},null!=l.xVal&&(e.eventInfo.xAxis.value=l.xVal,e.eventInfo.xAxis.text=l.xVal+"",e.eventInfo.title=l.xVal+""),l.app.fire(e.type,e);}),l._nodes.addChild(n);}));}},{key:"_drawLabels",value:function(){var i=this;i.node.enabled&&(i._labels.removeAllChildren(),r._.each(i.nodes,function(e){var t={x:e.x,y:e.y-i.node.radius-2,fillStyle:i.label.fontColor||e.color,fontSize:i.label.fontSize,textAlign:"center",textBaseline:"bottom"},n=i.label.text;if(r._.isFunction(n)&&(n=n.apply(i,[e])),n){var l=new x(n,{context:t});i._labels.addChild(l),l.localToGlobal().x+l.getTextWidth()/2>i.app.width&&(l.context.x=i.app.width-l.getTextWidth()/2-l.parent.localToGlobal().x);}}));}}]),_);function _(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,_),(n=function(e,t){return !t||"object"!==a(t)&&"function"!=typeof t?f(e):t}(this,d(_).call(this,e,t))).name="markcloumn",r._.extend(!0,f(n),(0, r.getDefaultProps)(_.defaultProps()),e),n.sprite=new i.default.Display.Sprite,n.app.graphsSprite.addChild(n.sprite),n._line=null,n._lineSp=new i.default.Display.Sprite,n.sprite.addChild(n._lineSp),n.nodes=[],n._nodes=new i.default.Display.Sprite,n.sprite.addChild(n._nodes),n._labels=new i.default.Display.Sprite,n.sprite.addChild(n._labels),n}r.global.registerComponent(y,"markcloumn"),e.default=y;});
	});

	unwrapExports(markcloumn);

	var dist = createCommonjsModule(function (module, exports) {
	!function(e,n){n(exports,index_cjs,chart,rect,polar,bar,line,scat,pie$1,radar,cloud$1,planet,funnel,venn,sunburst,sankey$1,progress,relation,dagre$1,tree,legend,datazoom,markline,tips,bartgi,barguide,theme,watermark,cross,lineschedu,markcloumn);}(void 0,function(e,n){Object.defineProperty(e,"__esModule",{value:!0});var o=[];o.length&&n.global.setGlobalTheme(o);var i={options:{}};for(var r in n.global)i[r]=n.global[r];e.default=i;});
	});

	var index = unwrapExports(dist);

	return index;

}());
