define(["exports","metal/src/metal","metal-component/src/all/component","metal-soy/src/Soy","./Rating.soy"],function(e,t,i,a,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0});var u=o(t),c=o(i),d=o(a),f=o(n),h=function(e){function t(){return l(this,t),r(this,e.apply(this,arguments))}return s(t,e),t.prototype.attached=function(){this.delegate("mouseover",".rating-item",this.handleMouseOverEvent.bind(this)),this.delegate("click",".rating-item",this.handleClickEvent.bind(this)),this.on("mouseleave",this.handleMouseLeaveEvent.bind(this))},t.prototype.created=function(){this.ratingClicked_=this.value},t.prototype.handleClickEvent=function(e){if(!this.disabled){var t=parseInt(e.delegateTarget.getAttribute("data-index"),10);t===this.ratingClicked_&&this.canReset?this.reset():this.value=t,this.ratingClicked_=this.value}},t.prototype.handleMouseLeaveEvent=function(){this.setPreviousRate_()},t.prototype.handleMouseOverEvent=function(e){if(!this.disabled){var t=Number.parseInt(e.delegateTarget.getAttribute("data-index"),10);this.value=t}},t.prototype.reset=function(){this.value=-1,this.ratingClicked_=-1},t.prototype.setPreviousRate_=function(){this.value=this.ratingClicked_},t}(c["default"]);h.STATE={canReset:{value:!0,validator:u["default"].isBoolean},cssClasses:{value:{off:"glyphicon glyphicon-star-empty",on:"glyphicon glyphicon-star"}},disabled:{value:!1,validator:u["default"].isBoolean},inputHiddenName:{value:"rate",validator:u["default"].isString},label:{value:"",validator:u["default"].isString},options:{validator:Array.isArray,value:[{value:1,title:""},{value:2,title:""},{value:3,title:""},{value:4,title:""},{value:5,title:""}]},value:{validator:u["default"].isNumber,value:-1}},d["default"].register(h,f["default"]),e["default"]=h});