webpackJsonp([4],{167:function(t,e,n){n(2);!function(){"use strict";var e=function(t){return t&&t.__esModule?t["default"]:t},r=function(){function t(t,e){for(var n in e){var r=e[n];r.configurable=!0,r.value&&(r.writable=!0)}Object.defineProperties(t,e)}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(t.__proto__=e)},o=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},s=e(n(2)),a=e(n(75)),u=e(n(76)),c=e(n(77)),l=e(n(273)),p="http://code.famo.us/assets/famous.jpg",h=function(t){var e=function(){o(this,e),null!=t&&t.apply(this,arguments)};return i(e,t),r(e,{render:{value:function(){return s.createElement(a,null,s.createElement(c,{options:{properties:{lineHeight:"100px",textAlign:"center"},size:[void 0,100]}},"The image is created with ImageSurface."),s.createElement(u,{options:{align:[.5,.5],origin:[.5,.5]}},s.createElement(l,{options:{content:p,size:[200,200]}})))}}}),e}(s.Component);t.exports=h}()},273:function(t,e,n){n(2);!function(){"use strict";var e=function(t){return t&&t.__esModule?t["default"]:t},r=function(){function t(t,e){for(var n in e){var r=e[n];r.configurable=!0,r.value&&(r.writable=!0)}Object.defineProperties(t,e)}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(t.__proto__=e)},o=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},s=e(n(341)),a=e(n(147)),u=e(n(2)),c=e(n(151)),l=e(n(152)),p=function(t){function e(){o(this,e),null!=t&&t.apply(this,arguments)}return i(e,t),r(e,{famousCreate:{value:function(){var t=this,e=new s(this.props.options);return l.SURFACE_EVENTS.forEach(function(n){t.props[n.prop]&&e.on(n.type,function(){t.props[n.prop](t.props.eventKey)})}),e}},famousCreateNode:{value:function(t){var e=this.getFamous(),n=t.add(e);return[n,null]}},famousUpdate:{value:function(t){var e=this.getFamous();e.setOptions(t.options)}},render:{value:function(){return u.createElement("div",{"data-famous":"ImageSurface"})}}}),e}(c);a(p,s),p.propTypes=a({},l.SURFACE_PROPTYPES),t.exports=p}()},341:function(t,e,n){function r(){this._imageUrl=void 0,i.apply(this,arguments)}var i=n(145),o=[],s=[],a=[],u=!0;r.enableCache=function(){u=!0},r.disableCache=function(){u=!1},r.clearCache=function(){o=[],s=[],a=[]},r.getCache=function(){return{urlCache:o,countCache:s,nodeCache:a}},r.prototype=Object.create(i.prototype),r.prototype.constructor=r,r.prototype.elementType="img",r.prototype.elementClass="famous-surface",r.prototype.setContent=function(t){var e=o.indexOf(this._imageUrl);-1!==e&&(1===s[e]?(o.splice(e,1),s.splice(e,1),a.splice(e,1)):s[e]--),e=o.indexOf(t),-1===e?(o.push(t),s.push(1)):s[e]++,this._imageUrl=t,this._contentDirty=!0},r.prototype.deploy=function(t){var e=o.indexOf(this._imageUrl);if(void 0===a[e]&&u){var n=new Image;n.src=this._imageUrl||"",a[e]=n}t.src=this._imageUrl||""},r.prototype.recall=function(t){t.src=""},t.exports=r}});