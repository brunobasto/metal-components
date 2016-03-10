define(["exports","metal/src/metal","metal-dom/src/all/dom","./Switcher.soy.js"],function(e,t,o,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0});var a=r(t),l=r(o),u=r(n),f=function(e){function t(){return i(this,t),c(this,e.apply(this,arguments))}return s(t,e),t.prototype.attached=function(){this.on("click",this.handleClick)},t.prototype.handleClick=function(){this.checked=!this.checked},t.prototype.syncChecked=function(e){l["default"][e?"addClasses":"removeClasses"](this.element,"switcher-on")},t}(u["default"]);f.prototype.registerMetalComponent&&f.prototype.registerMetalComponent(f,"Switcher"),f.ELEMENT_CLASSES="switcher",f.ATTRS={checked:{validator:a["default"].isBoolean,value:!1}},e["default"]=f});