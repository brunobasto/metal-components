define(["exports","./dom","metal-events/src/events"],function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(t,"__esModule",{value:!0});var u=n(e),p=function(t){function e(){return o(this,e),i(this,t.apply(this,arguments))}return s(e,t),e.prototype.addListener_=function(e,r){if(this.originEmitter_.addEventListener){if(e.startsWith("delegate:")){var n=e.indexOf(":",9),o=e.substring(9,n),i=e.substring(n+1);return u["default"].delegate(this.originEmitter_,o,i,r)}return u["default"].on(this.originEmitter_,e,r)}return t.prototype.addListener_.call(this,e,r)},e.prototype.isSupportedDomEvent_=function(t){return t.startsWith("delegate:")&&-1!==t.indexOf(":",9)||u["default"].supportsEvent(this.originEmitter_,t)},e.prototype.shouldProxyEvent_=function(e){return t.prototype.shouldProxyEvent_.call(this,e)&&(!this.originEmitter_.addEventListener||this.isSupportedDomEvent_(e))},e}(r.EventEmitterProxy);p.prototype.registerMetalComponent&&p.prototype.registerMetalComponent(p,"DomEventEmitterProxy"),t["default"]=p});