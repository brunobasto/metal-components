define(['exports', 'metal/src/metal', 'metal-soy/src/Soy', 'metal-tooltip/src/Tooltip', './Popover.soy.js'], function (exports, _metal, _Soy, _Tooltip, _PopoverSoy) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _metal2 = _interopRequireDefault(_metal);

	var _Soy2 = _interopRequireDefault(_Soy);

	var _PopoverSoy2 = _interopRequireDefault(_PopoverSoy);

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

	var _createClass = function () {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];
				descriptor.enumerable = descriptor.enumerable || false;
				descriptor.configurable = true;
				if ("value" in descriptor) descriptor.writable = true;
				Object.defineProperty(target, descriptor.key, descriptor);
			}
		}

		return function (Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);
			if (staticProps) defineProperties(Constructor, staticProps);
			return Constructor;
		};
	}();

	function _possibleConstructorReturn(self, call) {
		if (!self) {
			throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		}

		return call && (typeof call === "object" || typeof call === "function") ? call : self;
	}

	var _get = function get(object, property, receiver) {
		if (object === null) object = Function.prototype;
		var desc = Object.getOwnPropertyDescriptor(object, property);

		if (desc === undefined) {
			var parent = Object.getPrototypeOf(object);

			if (parent === null) {
				return undefined;
			} else {
				return get(parent, property, receiver);
			}
		} else if ("value" in desc) {
			return desc.value;
		} else {
			var getter = desc.get;

			if (getter === undefined) {
				return undefined;
			}

			return getter.call(receiver);
		}
	};

	function _inherits(subClass, superClass) {
		if (typeof superClass !== "function" && superClass !== null) {
			throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
		}

		subClass.prototype = Object.create(superClass && superClass.prototype, {
			constructor: {
				value: subClass,
				enumerable: false,
				writable: true,
				configurable: true
			}
		});
		if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var Popover = function (_TooltipBase) {
		_inherits(Popover, _TooltipBase);

		function Popover() {
			_classCallCheck(this, Popover);

			return _possibleConstructorReturn(this, (Popover.__proto__ || Object.getPrototypeOf(Popover)).apply(this, arguments));
		}

		_createClass(Popover, [{
			key: 'syncAlignElement',
			value: function syncAlignElement(alignElement) {
				_get(Popover.prototype.__proto__ || Object.getPrototypeOf(Popover.prototype), 'syncAlignElement', this).call(this, alignElement);

				if (alignElement) {
					var dataContent = alignElement.getAttribute('data-content');
					if (dataContent) {
						this.content = dataContent;
					}
				}
			}
		}, {
			key: 'syncVisible',
			value: function syncVisible(visible) {
				this.element.style.display = visible ? 'block' : '';
				_get(Popover.prototype.__proto__ || Object.getPrototypeOf(Popover.prototype), 'syncVisible', this).call(this, visible);
			}
		}]);

		return Popover;
	}(_Tooltip.TooltipBase);

	_Soy2.default.register(Popover, _PopoverSoy2.default);

	/**
  * State definition.
  * @type {!Object}
  * @static
  */
	Popover.STATE = {
		/**
   * The popover's content.
   * @type {string}
   */
		content: {
			validator: function validator(val) {
				return _metal2.default.isString(val) || _metal2.default.isFunction(val);
			}
		},

		/**
   * Trigger events used to bind handlers to show and hide popover.
   * @type {!Array<string>}
   * @default ['click', 'click']
   */
		triggerEvents: {
			validator: Array.isArray,
			value: ['click', 'click']
		},

		/**
   * Flag indicating if an arrow should be rendered for the popover.
   * @type {boolean}
   * @default true
   */
		withArrow: {
			value: true
		}
	};

	/**
  * @inheritDoc
  * @see `Align` class.
  * @static
  */
	Popover.Align = _Tooltip.TooltipBase.Align;

	exports.default = Popover;
});
//# sourceMappingURL=Popover.js.map