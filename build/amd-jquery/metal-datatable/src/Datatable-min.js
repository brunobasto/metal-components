define(["exports","metal/src/metal","metal-dom/src/all/dom","./Datatable.soy","metal-component/src/all/component","metal-soy/src/Soy","metal-jquery-adapter/src/JQueryAdapter"],function(e,t,n,o,a,r,s){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0});var p=l(t),f=l(n),y=l(o),d=l(a),m=l(r),v=l(s),T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},b=function(e){function t(){return u(this,t),i(this,e.apply(this,arguments))}return c(t,e),t.prototype.assertNoMixedTypesInArrays_=function(e){var t,n=this,o=function(e){var o=n.getValueType_(e);n.assertSameTypes_(t,o),t=o,n.assertNoMixedTypesInArrays_(e)},a=function(e){return n.assertNoMixedTypesInArrays_(e)};this.visit_(e,o,a)},t.prototype.assertSameTypes_=function(e,t){if(e&&t&&e!==t)throw new Error("Datatable does not support mixed types in arrays.")},t.prototype.collectColumnsFromArrayValues_=function(e){var n=this,o=e.value,a=o[0]&&o[0].type===t.TYPES.OBJECT;a&&!function(){var t={},a={};o.forEach(function(e){return Object.keys(e.value).forEach(function(n){t[n]=!0,a[n]=e.value[n].type})}),e.columns=n.formatColumns(Object.keys(t)),e.columnsType=n.formatColumnsType(a)}()},t.prototype.collectColumnsFromObjectKeys_=function(e){var t=e.value,n={},o={};Object.keys(t).forEach(function(e){n[e]=!0,o[e]=t[e].type}),e.columns=this.formatColumns(Object.keys(n)),e.columnsType=this.formatColumnsType(o)},t.prototype.collectColumnsFromValues_=function(e){switch(e.type){case t.TYPES.ARRAY:this.collectColumnsFromArrayValues_(e);break;case t.TYPES.OBJECT:this.collectColumnsFromObjectKeys_(e)}},t.prototype.getValueType_=function(e){return null===e?t.TYPES.NULL:void 0===e?t.TYPES.UNDEFINED:Array.isArray(e)?t.TYPES.ARRAY:p["default"].isObject(e)&&"HTML"===e.contentKind?t.TYPES.STRING:"undefined"==typeof e?"undefined":T(e)},t.prototype.isAlreadyExpanded=function(e){return p["default"].isObject(e)&&"columns"in e&&"type"in e},t.prototype.setData_=function(e){return this.isAlreadyExpanded(e)||(this.assertNoMixedTypesInArrays_(e),e=this.visitValuesAndExpandType_(e)),this.visitValuesAndWrapStringValues_(e)},t.prototype.toggleTableContents=function(e){var t=e.delegateTarget;f["default"].toggleClasses(t,this.labelClasses),f["default"].toggleClasses(f["default"].next(t,"table"),this.hiddenClasses)},t.prototype.visit_=function(e,n,o){switch(this.getValueType_(e)){case t.TYPES.ARRAY:e.forEach(function(t,o){return n(t,o,e)});break;case t.TYPES.OBJECT:Object.keys(e).forEach(function(t){return o(e[t],t,e)})}},t.prototype.visitValuesAndExpandType_=function(e){var t=this,n=function(e,n,o){return o[n]=t.visitValuesAndExpandType_(e)},o=function(e,n,o){return o[n]=t.visitValuesAndExpandType_(e)};this.visit_(e,n,o);var a=this.getValueType_(e),r={type:a,value:e};return this.collectColumnsFromValues_(r),r},t.prototype.visitValuesAndWrapStringValues_=function(e){var n=this,o=function(e,t,o){return o[t]=n.visitValuesAndWrapStringValues_(e)},a=function(e,t,o){return o[t]=n.visitValuesAndWrapStringValues_(e)};if(this.visit_(e,o,a),p["default"].isObject(e)){var r=this.getValueType_(e.value);r===t.TYPES.STRING&&(e.value=m["default"].toIncDom(e.value))}return e},t}(d["default"]);m["default"].register(b,y["default"]),b.STATE={data:{setter:"setData_"},displayColumnsType:{validator:p["default"].isBoolean,value:!0},formatColumns:{validator:p["default"].isFunction,value:function(e){return e.sort()}},formatColumnsType:{validator:p["default"].isFunction,value:function(e){return e}},hiddenClasses:{validator:p["default"].isString,value:"hidden"},labelClasses:{validator:p["default"].isString,value:"collapsed expanded"},tableClasses:{validator:p["default"].isString,value:"table table-bordered table-condensed table-hover"}},b.TYPES={ARRAY:"array",BOOLEAN:"boolean",NULL:"null",NUMBER:"number",OBJECT:"object",STRING:"string",UNDEFINED:"undefined"},e["default"]=b,v["default"].register("datatable",b)});