define(["exports","metal/src/metal","metal-dom/src/all/dom","./ProgressBar.soy"],function(t,e,a,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(t,"__esModule",{value:!0});var l=n(e),u=n(a),f=n(r),p=function(t){function e(){return i(this,e),o(this,t.apply(this,arguments))}return s(e,t),e.prototype.getBarElement=function(){return this.barElement_||(this.barElement_=this.element.childNodes[0]),this.barElement_},e.prototype.setterValueFn_=function(t){return t<this.min&&(t=this.min),t>this.max&&(t=this.max),t},e.prototype.syncBarClass=function(t,e){var a=this.getBarElement();u["default"].removeClasses(a,e),u["default"].addClasses(a,t)},e.prototype.syncLabel=function(){var t=this.getBarElement();u["default"].removeChildren(t),this.label&&u["default"].append(t,this.label)},e.prototype.syncMax=function(t){t<this.value?this.value=t:this.updateBar_(),this.element.setAttribute("aria-valuemax",this.max)},e.prototype.syncMin=function(t){t>this.value?this.value=t:this.updateBar_(),this.element.setAttribute("aria-valuemin",this.min)},e.prototype.syncValue=function(){this.updateBar_(),this.element.setAttribute("aria-valuenow",this.value)},e.prototype.updateBar_=function(){var t=this.getBarElement(),e=Math.floor(100*(this.value-this.min)/(this.max-this.min));t.style.width=e+"%"},e}(f["default"]);p.prototype.registerMetalComponent&&p.prototype.registerMetalComponent(p,"ProgressBar"),p.ATTRS={barClass:{validator:l["default"].isString},label:{validator:function(t){return!l["default"].isDefAndNotNull(t)||l["default"].isString(t)}},max:{validator:l["default"].isNumber,value:100},min:{validator:l["default"].isNumber,value:0},value:{setter:"setterValueFn_",validator:l["default"].isNumber,value:0}},p.ELEMENT_CLASSES="progress",t["default"]=p});