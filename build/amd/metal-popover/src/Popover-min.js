define(["exports","metal/src/metal","metal-tooltip/src/Tooltip","./Popover.soy"],function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(t,"__esModule",{value:!0});var s=n(e),c=function(t){function e(){return r(this,e),i(this,t.apply(this,arguments))}return l(e,t),e.prototype.syncAlignElement=function(e){if(t.prototype.syncAlignElement.call(this,e),e){var o=e.getAttribute("data-content");o&&(this.content=o)}},e.prototype.syncVisible=function(e){this.element.style.display=e?"block":"",t.prototype.syncVisible.call(this,e)},e}(o.TooltipBase);c.prototype.registerMetalComponent&&c.prototype.registerMetalComponent(c,"Popover"),c.ATTRS={content:{validator:s["default"].isString},triggerEvents:{validator:Array.isArray,value:["click","click"]}},c.Align=o.TooltipBase.Align,c.ELEMENT_CLASSES="popover",t["default"]=c});