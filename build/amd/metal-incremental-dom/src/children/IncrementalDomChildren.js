define(['exports', 'metal/src/metal', '../IncrementalDomAop', '../utils/IncrementalDomUtils'], function (exports, _metal, _IncrementalDomAop, _IncrementalDomUtils) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _IncrementalDomAop2 = _interopRequireDefault(_IncrementalDomAop);

	var _IncrementalDomUtils2 = _interopRequireDefault(_IncrementalDomUtils);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	function _defineProperty(obj, key, value) {
		if (key in obj) {
			Object.defineProperty(obj, key, {
				value: value,
				enumerable: true,
				configurable: true,
				writable: true
			});
		} else {
			obj[key] = value;
		}

		return obj;
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

	var IncrementalDomChildren = function () {
		function IncrementalDomChildren() {
			_classCallCheck(this, IncrementalDomChildren);
		}

		_createClass(IncrementalDomChildren, null, [{
			key: 'capture',
			value: function capture(renderer, callback) {
				renderer_ = renderer;
				callback_ = callback;
				tree_ = {
					props: {
						children: []
					}
				};
				tree_.config = tree_.props;
				currentParent_ = tree_;
				isCapturing_ = true;
				_IncrementalDomAop2.default.startInterception({
					elementClose: handleInterceptedCloseCall_,
					elementOpen: handleInterceptedOpenCall_,
					text: handleInterceptedTextCall_
				});
			}
		}, {
			key: 'getCurrentOwner',
			value: function getCurrentOwner() {
				return currNodeOwner_;
			}
		}, {
			key: 'getOwner',
			value: function getOwner(node) {
				return node[IncrementalDomChildren.CHILD_OWNER];
			}
		}, {
			key: 'render',
			value: function render(tree, opt_skipNode) {
				if (isCapturing_) {
					// If capturing, just add the node directly to the captured tree.
					addChildToTree(tree);
					return;
				}

				currNodeOwner_ = IncrementalDomChildren.getOwner(tree);
				if (opt_skipNode && opt_skipNode(tree)) {
					currNodeOwner_ = null;
					return;
				}

				if ((0, _metal.isDef)(tree.text)) {
					var args = tree.args ? tree.args : [];
					args[0] = tree.text;
					IncrementalDOM.text.apply(null, args);
				} else {
					var _args = _IncrementalDomUtils2.default.buildCallFromConfig(tree.tag, tree.props);
					IncrementalDOM.elementOpen.apply(null, _args);
					if (tree.props.children) {
						for (var i = 0; i < tree.props.children.length; i++) {
							IncrementalDomChildren.render(tree.props.children[i], opt_skipNode);
						}
					}
					IncrementalDOM.elementClose(tree.tag);
				}
				currNodeOwner_ = null;
			}
		}]);

		return IncrementalDomChildren;
	}();

	var callback_;
	var currNodeOwner_;
	var currentParent_;
	var isCapturing_ = false;
	var renderer_;
	var tree_;

	/**
  * Adds a child element to the tree.
  * @param {!Array} args The arguments passed to the incremental dom call.
  * @param {boolean=} opt_isText Optional flag indicating if the child is a
  *     text element.
  * @protected
  */
	function addChildCallToTree_(args, opt_isText) {
		var child = _defineProperty({
			parent: currentParent_
		}, IncrementalDomChildren.CHILD_OWNER, renderer_);

		if (opt_isText) {
			child.text = args[0];
			if (args.length > 1) {
				child.args = args;
			}
		} else {
			child.tag = args[0];
			child.props = _IncrementalDomUtils2.default.buildConfigFromCall(args);
			child.props.children = [];
			child.config = child.props;
		}

		addChildToTree(child);
		return child;
	}

	function addChildToTree(child) {
		currentParent_.props.children.push(child);
	}

	/**
  * Handles an intercepted call to the `elementClose` function from incremental
  * dom.
  * @protected
  */
	function handleInterceptedCloseCall_() {
		if (currentParent_ === tree_) {
			_IncrementalDomAop2.default.stopInterception();
			isCapturing_ = false;
			callback_(tree_);
			callback_ = null;
			currentParent_ = null;
			renderer_ = null;
			tree_ = null;
		} else {
			currentParent_ = currentParent_.parent;
		}
	}

	/**
  * Handles an intercepted call to the `elementOpen` function from incremental
  * dom.
  * @param {!function()} originalFn The original function before interception.
  * @protected
  */
	function handleInterceptedOpenCall_(originalFn) {
		for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
			args[_key - 1] = arguments[_key];
		}

		currentParent_ = addChildCallToTree_(args);
	}

	/**
  * Handles an intercepted call to the `text` function from incremental dom.
  * @param {!function()} originalFn The original function before interception.
  * @protected
  */
	function handleInterceptedTextCall_(originalFn) {
		for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
			args[_key2 - 1] = arguments[_key2];
		}

		addChildCallToTree_(args, true);
	}

	/**
  * Property identifying a specific object as a Metal.js child node, and
  * pointing to the renderer instance that created it.
  * @type {string}
  * @static
  */
	IncrementalDomChildren.CHILD_OWNER = '__metalChildOwner';

	exports.default = IncrementalDomChildren;
});
//# sourceMappingURL=IncrementalDomChildren.js.map