webpackJsonp([6],{171:function(t,e,n){n(2);!function(){"use strict";var e=function(t){return t&&t.__esModule?t["default"]:t},i=function(){function t(t,e){for(var n in e){var i=e[n];i.configurable=!0,i.value&&(i.writable=!0)}Object.defineProperties(t,e)}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),o=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(t.__proto__=e)},r=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},s=e(n(2)),a=e(n(75)),u=e(n(76)),c=e(n(276)),l=e(n(277)),p=e(n(278)),h=e(n(279)),f=e(n(280)),d=function(t){var e=function(){r(this,e),null!=t&&t.apply(this,arguments)};return o(e,t),i(e,{render:{value:function(){return s.createElement(a,null,s.createElement(u,{options:{align:[.3,.3],origin:[.5,.5]}},s.createElement(p,null)),s.createElement(u,{options:{align:[.7,.3],origin:[.5,.5]}},s.createElement(c,null)),s.createElement(u,{options:{align:[.3,.7],origin:[.5,.5]}},s.createElement(f,null)),s.createElement(u,{options:{align:[.7,.7],origin:[.5,.5]}},s.createElement(l,null)),s.createElement(h,null))}}}),e}(s.Component);t.exports=d}()},276:function(t,e,n){n(2);!function(){"use strict";var e=function(t){return t&&t.__esModule?t["default"]:t},i=function(){function t(t,e){for(var n in e){var i=e[n];i.configurable=!0,i.value&&(i.writable=!0)}Object.defineProperties(t,e)}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),o=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(t.__proto__=e)},r=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},s=e(n(38)),a=e(n(286)),u=e(n(287)),c=e(n(288)),l=e(n(340)),p=e(n(256)),h=e(n(2)),f=e(n(76)),d=e(n(77));a.register({mouse:u,touch:c}),p.registerMethod("spring",l);var v=function(t){var e=function(){r(this,e),null!=t&&t.apply(this,arguments)};return o(e,t),i(e,{componentWillMount:{value:function(){this._position=new p([0,0])}},componentDidMount:{value:function(){var t=this._position,e=this.refs.clickSurface.getFamous(),n=new a({mouse:{},touch:{}});n.on("update",function(e){var n=t.get();t.set([n[0]+e.delta[0],n[1]+e.delta[1]])}),n.on("end",function(e){e.velocity;t.set([0,0],{method:"spring",period:150,velocity:e.velocity})}),e.pipe(n)}},render:{value:function(){var t=this._position,e={proportions:[.2,.2],transform:function(){var e=t.get();return s.translate(e[0],e[1])}};return h.createElement(f,{options:e},h.createElement(d,{options:{properties:{backgroundColor:"#009900"}}}),h.createElement(f,{options:{align:[.5,.5],origin:[.5,.5]}},h.createElement(d,{options:{properties:{color:"white"},size:[!0,!0]}},"Bouncy")),h.createElement(f,{options:{transform:s.inFront}},h.createElement(d,{ref:"clickSurface"})))}}}),e}(h.Component);t.exports=v}()},277:function(t,e,n){n(2);!function(){"use strict";var e=function(t){return t&&t.__esModule?t["default"]:t},i=function(){function t(t,e){for(var n in e){var i=e[n];i.configurable=!0,i.value&&(i.writable=!0)}Object.defineProperties(t,e)}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),o=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(t.__proto__=e)},r=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},s=e(n(343)),a=e(n(38)),u=e(n(39)),c=e(n(320)),l=e(n(2)),p=e(n(76)),h=e(n(77)),f=e(n(78)),d=e(n(79)),v=Object.keys(u);v.forEach(function(t){return c.registerCurve(t,u[t])});var m=function(t){var e=function(){r(this,e),null!=t&&t.apply(this,arguments)};return o(e,t),i(e,{componentDidMount:{value:function(){function t(){e.setTransform(a.rotate(Math.random(),Math.random(),Math.random()),{curve:v[s(v.length)],duration:300},function(){e.setTransform(a.rotate(0,0,0),{duration:50},t)})}var e=this.refs.stateModifier.getFamous();f.schedule(t)}},render:{value:function(){return l.createElement(d,{ref:"stateModifier",options:{proportions:[.2,.2]}},l.createElement(h,{options:{properties:{backgroundColor:"#990099"}}}),l.createElement(p,{options:{align:[.5,.5],origin:[.5,.5]}},l.createElement(h,{options:{properties:{color:"white"},size:[!0,!0]}},"Crazy")))}}}),e}(l.Component);t.exports=m}()},278:function(t,e,n){n(2);!function(){"use strict";var e=function(t){return t&&t.__esModule?t["default"]:t},i=function(){function t(t,e){for(var n in e){var i=e[n];i.configurable=!0,i.value&&(i.writable=!0)}Object.defineProperties(t,e)}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),o=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(t.__proto__=e)},r=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},s=e(n(38)),a=e(n(286)),u=e(n(287)),c=e(n(288)),l=e(n(2)),p=e(n(76)),h=e(n(77));a.register({mouse:u,touch:c});var f=function(t){var e=function(){r(this,e),null!=t&&t.apply(this,arguments)};return o(e,t),i(e,{componentWillMount:{value:function(){this._position=[0,0]}},componentDidMount:{value:function(){var t=this._position,e=this.refs.clickSurface.getFamous(),n=new a({mouse:{},touch:{}});n.on("update",function(e){t[0]+=e.delta[0],t[1]+=e.delta[1]}),e.pipe(n)}},render:{value:function(){var t=this._position,e={proportions:[.2,.2],transform:function(){return s.translate(t[0],t[1])}};return l.createElement(p,{options:e},l.createElement(h,{options:{properties:{backgroundColor:"#990000"}}}),l.createElement(p,{options:{align:[.5,.5],origin:[.5,.5]}},l.createElement(h,{options:{properties:{color:"white"},size:[!0,!0]}},"Draggable")),l.createElement(p,{options:{transform:s.inFront}},l.createElement(h,{ref:"clickSurface"})))}}}),e}(l.Component);t.exports=f}()},279:function(t,e,n){n(2);!function(){"use strict";var e=function(t){return t&&t.__esModule?t["default"]:t},i=function(){function t(t,e){for(var n in e){var i=e[n];i.configurable=!0,i.value&&(i.writable=!0)}Object.defineProperties(t,e)}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),o=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(t.__proto__=e)},r=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},s=e(n(256)),a=e(n(2)),u=e(n(76)),c=e(n(77)),l=e(n(78)),p=function(t){var e=function(){r(this,e),null!=t&&t.apply(this,arguments)};return o(e,t),i(e,{componentWillMount:{value:function(){this._transitionable=new s([0,0])}},componentDidMount:{value:function(){var t=this;l.schedule(function(){t._transitionable.set([0,1],{duration:1e3,curve:"easeInOut"})})}},render:{value:function(){var t=this._transitionable,e={align:function(){return t.get()},opacity:.7,origin:function(){return t.get()},proportions:[1,.1]};return a.createElement(u,{ref:"modifier",options:e},a.createElement(c,{options:{properties:{backgroundColor:"#333"}}}),a.createElement(u,{options:{align:[.5,.5],origin:[.5,.5]}},a.createElement(c,{options:{properties:{color:"white"},size:[!0,!0]}},"Dropping")))}}}),e}(a.Component);t.exports=p}()},280:function(t,e,n){n(2);!function(){"use strict";var e=function(t){return t&&t.__esModule?t["default"]:t},i=function(){function t(t,e){for(var n in e){var i=e[n];i.configurable=!0,i.value&&(i.writable=!0)}Object.defineProperties(t,e)}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),o=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(t.__proto__=e)},r=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},s=e(n(38)),a=e(n(2)),u=e(n(76)),c=e(n(77)),l=e(n(78)),p=function(t){var e=function(){r(this,e),null!=t&&t.apply(this,arguments)};return o(e,t),i(e,{componentDidMount:{value:function(){var t=this.refs.modifier.getFamous(),e=0;l.schedule(function(){t.transformFrom(function(){return e+=.03,s.rotateZ(e)})})}},render:{value:function(){return a.createElement(u,{ref:"modifier",options:{proportions:[.2,.2]}},a.createElement(c,{options:{properties:{backgroundColor:"#000099"}}}),a.createElement(u,{options:{align:[.5,.5],origin:[.5,.5]}},a.createElement(c,{options:{properties:{color:"white"},size:[!0,!0]}},"Rotating")))}}}),e}(a.Component);t.exports=p}()},286:function(t,e,n){function i(t,e){this._eventInput=new r,this._eventOutput=new r,r.setInputHandler(this,this._eventInput),r.setOutputHandler(this,this._eventOutput),this._syncs={},t&&this.addSync(t),e&&this.setOptions(e)}function o(t,e){s[t]&&(this._syncs[t]=new s[t](e),this.pipeSync(t))}var r=n(208);i.DIRECTION_X=0,i.DIRECTION_Y=1,i.DIRECTION_Z=2;var s={};i.register=function(t){for(var e in t)if(s[e]){if(s[e]!==t[e])throw new Error("Conflicting sync classes for key: "+e)}else s[e]=t[e]},i.prototype.setOptions=function(t){for(var e in this._syncs)this._syncs[e].setOptions(t)},i.prototype.pipeSync=function(t){var e=this._syncs[t];this._eventInput.pipe(e),e.pipe(this._eventOutput)},i.prototype.unpipeSync=function(t){var e=this._syncs[t];this._eventInput.unpipe(e),e.unpipe(this._eventOutput)},i.prototype.addSync=function(t){if(t instanceof Array)for(var e=0;e<t.length;e++)o.call(this,t[e]);else if(t instanceof Object)for(var n in t)o.call(this,n,t[n])},t.exports=i},287:function(t,e,n){function i(t){this.options=Object.create(i.DEFAULT_OPTIONS),this._optionsManager=new c(this.options),t&&this.setOptions(t),this._eventInput=new u,this._eventOutput=new u,u.setInputHandler(this,this._eventInput),u.setOutputHandler(this,this._eventOutput),this._eventInput.on("mousedown",o.bind(this)),this._eventInput.on("mousemove",r.bind(this)),this._eventInput.on("mouseup",s.bind(this)),this.options.propogate?this._eventInput.on("mouseleave",a.bind(this)):this._eventInput.on("mouseleave",s.bind(this)),this.options.clickThreshold&&window.addEventListener("click",function(t){Math.sqrt(Math.pow(this._displacement[0],2)+Math.pow(this._displacement[1],2))>this.options.clickThreshold&&t.stopPropagation()}.bind(this),!0),this._payload={delta:null,position:null,velocity:null,clientX:0,clientY:0,offsetX:0,offsetY:0},this._positionHistory=[],this._position=null,this._prevCoord=void 0,this._prevTime=void 0,this._down=!1,this._moved=!1,this._displacement=[0,0],this._documentActive=!1}function o(t){var e,n;this.options.preventDefault&&t.preventDefault();var i=t.clientX,o=t.clientY;this._prevCoord=[i,o],this._prevTime=Date.now(),this._down=!0,this._move=!1,void 0!==this.options.direction?(this._position=0,e=0,n=0):(this._position=[0,0],e=[0,0],n=[0,0]),this.options.clickThreshold&&(this._displacement=[0,0]);var r=this._payload;r.delta=e,r.position=this._position,r.velocity=n,r.clientX=i,r.clientY=o,r.offsetX=t.offsetX,r.offsetY=t.offsetY,this._positionHistory.push({position:r.position.slice?r.position.slice(0):r.position,time:this._prevTime}),this._eventOutput.emit("start",r),this._documentActive=!1}function r(t){if(this._prevCoord){var e=this._prevCoord,n=(this._prevTime,t.clientX),o=t.clientY,r=Date.now(),s=n-e[0],a=o-e[1];this.options.rails&&(Math.abs(s)>Math.abs(a)?a=0:s=0);var u,c,p=Math.max(r-this._positionHistory[0].time,l),h=this.options.scale;this.options.direction===i.DIRECTION_X?(c=h*s,this._position+=c,u=h*(this._position-this._positionHistory[0].position)/p):this.options.direction===i.DIRECTION_Y?(c=h*a,this._position+=c,u=h*(this._position-this._positionHistory[0].position)/p):(c=[h*s,h*a],u=[h*(this._position[0]-this._positionHistory[0].position[0])/p,h*(this._position[1]-this._positionHistory[0].position[1])/p],this._position[0]+=c[0],this._position[1]+=c[1]),this.options.clickThreshold!==!1&&(this._displacement[0]+=s,this._displacement[1]+=a);var f=this._payload;f.delta=c,f.position=this._position,f.velocity=u,f.clientX=n,f.clientY=o,f.offsetX=t.offsetX,f.offsetY=t.offsetY,this._positionHistory.length===this.options.velocitySampleLength&&this._positionHistory.shift(),this._positionHistory.push({position:f.position.slice?f.position.slice(0):f.position,time:r}),this._eventOutput.emit("update",f),this._prevCoord=[n,o],this._prevTime=r,this._move=!0}}function s(){this._down&&(this._eventOutput.emit("end",this._payload),this._prevCoord=void 0,this._prevTime=void 0,this._down=!1,this._move=!1,this._positionHistory=[])}function a(t){if(this._down&&this._move&&!this._documentActive){var e=r.bind(this),n=function(t){s.call(this,t),document.removeEventListener("mousemove",e),document.removeEventListener("mouseup",n)}.bind(this,t);document.addEventListener("mousemove",e),document.addEventListener("mouseup",n),this._documentActive=!0}}var u=n(208),c=n(209);i.DEFAULT_OPTIONS={clickThreshold:void 0,direction:void 0,rails:!1,scale:1,propogate:!0,velocitySampleLength:10,preventDefault:!0},i.DIRECTION_X=0,i.DIRECTION_Y=1;var l=8;i.prototype.getOptions=function(){return this.options},i.prototype.setOptions=function(t){return this._optionsManager.setOptions(t)},t.exports=i},288:function(t,e,n){function i(t){this.options=Object.create(i.DEFAULT_OPTIONS),this._optionsManager=new c(this.options),t&&this.setOptions(t),this._eventOutput=new u,this._touchTracker=new a({touchLimit:this.options.touchLimit}),u.setOutputHandler(this,this._eventOutput),u.setInputHandler(this,this._touchTracker),this._touchTracker.on("trackstart",o.bind(this)),this._touchTracker.on("trackmove",r.bind(this)),this._touchTracker.on("trackend",s.bind(this)),this._payload={delta:null,position:null,velocity:null,clientX:void 0,clientY:void 0,count:0,touch:void 0},this._position=null}function o(t){var e,n;void 0!==this.options.direction?(this._position=0,e=0,n=0):(this._position=[0,0],e=[0,0],n=[0,0]);var i=this._payload;i.delta=n,i.position=this._position,i.velocity=e,i.clientX=t.x,i.clientY=t.y,i.count=t.count,i.touch=t.identifier,this._eventOutput.emit("start",i)}function r(t){var e=t.history,n=e[e.length-1],o=e[e.length-2],r=e[e.length-this.options.velocitySampleLength]?e[e.length-this.options.velocitySampleLength]:e[e.length-2],s=r.timestamp,a=n.timestamp,u=n.x-o.x,c=n.y-o.y,p=n.x-r.x,h=n.y-r.y;this.options.rails&&(Math.abs(u)>Math.abs(c)?c=0:u=0,Math.abs(p)>Math.abs(h)?h=0:p=0);var f,d,v=Math.max(a-s,l),m=p/v,y=h/v,g=this.options.scale;this.options.direction===i.DIRECTION_X?(d=g*u,f=g*m,this._position+=d):this.options.direction===i.DIRECTION_Y?(d=g*c,f=g*y,this._position+=d):(d=[g*u,g*c],f=[g*m,g*y],this._position[0]+=d[0],this._position[1]+=d[1]);var _=this._payload;_.delta=d,_.velocity=f,_.position=this._position,_.clientX=t.x,_.clientY=t.y,_.count=t.count,_.touch=t.identifier,this._eventOutput.emit("update",_)}function s(t){this._payload.count=t.count,this._eventOutput.emit("end",this._payload)}var a=n(348),u=n(208),c=n(209);i.DEFAULT_OPTIONS={direction:void 0,rails:!1,touchLimit:1,velocitySampleLength:10,scale:1},i.DIRECTION_X=0,i.DIRECTION_Y=1;var l=8;i.prototype.setOptions=function(t){return this._optionsManager.setOptions(t)},i.prototype.getOptions=function(){return this.options},t.exports=i},340:function(t,e,n){function i(t){t=t||0,this.endState=new _(t),this.initState=new _,this._dimensions=1,this._restTolerance=1e-10,this._absRestTolerance=this._restTolerance,this._callback=void 0,this.PE=new m,this.particle=new y,this.spring=new g({anchor:this.endState}),this.PE.addBody(this.particle),this.PE.attach(this.spring,this.particle)}function o(){return this.particle.getEnergy()+this.spring.getEnergy([this.particle])}function r(){var t=this.endState.sub(this.initState).normSquared();this._absRestTolerance=0===t?this._restTolerance:this._restTolerance*t}function s(t){this.endState.set(t),r.call(this)}function a(){this.PE.wake()}function u(){this.PE.sleep()}function c(t){this.particle.position.set(t)}function l(t){this.particle.velocity.set(t)}function p(){return 0===this._dimensions?this.particle.getPosition1D():this.particle.getPosition()}function h(){return 0===this._dimensions?this.particle.getVelocity1D():this.particle.getVelocity()}function f(t){this._callback=t}function d(t){var e=i.DEFAULT_OPTIONS;void 0===t.period&&(t.period=e.period),void 0===t.dampingRatio&&(t.dampingRatio=e.dampingRatio),void 0===t.velocity&&(t.velocity=e.velocity),this.spring.setOptions({period:t.period,dampingRatio:t.dampingRatio}),l.call(this,t.velocity)}function v(){if(this.PE.isSleeping()){if(this._callback){var t=this._callback;this._callback=void 0,t()}}else o.call(this)<this._absRestTolerance&&(c.call(this,this.endState),l.call(this,[0,0,0]),u.call(this))}var m=n(353),y=n(354),g=n(379),_=n(356);i.SUPPORTS_MULTIPLE=3,i.DEFAULT_OPTIONS={period:100,dampingRatio:.2,velocity:0},i.prototype.reset=function(t,e){this._dimensions=t instanceof Array?t.length:0,this.initState.set(t),c.call(this,t),s.call(this,t),e&&l.call(this,e),f.call(this,void 0)},i.prototype.getVelocity=function(){return h.call(this)},i.prototype.setVelocity=function(t){this.call(this,l(t))},i.prototype.isActive=function(){return!this.PE.isSleeping()},i.prototype.halt=function(){this.set(this.get())},i.prototype.get=function(){return v.call(this),p.call(this)},i.prototype.set=function(t,e,n){return e?(this._dimensions=t instanceof Array?t.length:0,a.call(this),d.call(this,e),s.call(this,t),void f.call(this,n)):(this.reset(t),void(n&&n()))},t.exports=i},343:function(t,e,n){function i(t,e,n){n&&r(t,e,n)&&(e=n=null);var i=null==t,u=null==e;if(null==n&&(u&&"boolean"==typeof t?(n=t,t=1):"boolean"==typeof e&&(n=e,u=!0)),i&&u&&(e=1,u=!1),t=+t||0,u?(e=t,t=0):e=+e||0,n||t%1||e%1){var c=a();return s(t+c*(e-t+parseFloat("1e-"+((c+"").length-1))),e)}return o(t,e)}var o=n(380),r=n(337),s=Math.min,a=Math.random;t.exports=i},348:function(t,e,n){function i(t,e,n){return{x:t.clientX,y:t.clientY,identifier:t.identifier,origin:e.origin,timestamp:l(),count:e.touches.length,history:n}}function o(t){if(!(t.touches.length>this.touchLimit)){this.isTouched=!0;for(var e=0;e<t.changedTouches.length;e++){var n=t.changedTouches[e],o=i(n,t,null);this.eventOutput.emit("trackstart",o),this.selective||this.touchHistory[n.identifier]||this.track(o)}}}function r(t){if(!(t.touches.length>this.touchLimit))for(var e=0;e<t.changedTouches.length;e++){var n=t.changedTouches[e],o=this.touchHistory[n.identifier];if(o){var r=i(n,t,o);this.touchHistory[n.identifier].push(r),this.eventOutput.emit("trackmove",r)}}}function s(t){if(this.isTouched){for(var e=0;e<t.changedTouches.length;e++){var n=t.changedTouches[e],o=this.touchHistory[n.identifier];if(o){var r=i(n,t,o);this.eventOutput.emit("trackend",r),delete this.touchHistory[n.identifier]}}this.isTouched=!1}}function a(){for(var t in this.touchHistory){var e=this.touchHistory[t];this.eventOutput.emit("trackend",{touch:e[e.length-1].touch,timestamp:Date.now(),count:0,history:e}),delete this.touchHistory[t]}}function u(t){this.selective=t.selective,this.touchLimit=t.touchLimit||1,this.touchHistory={},this.eventInput=new c,this.eventOutput=new c,c.setInputHandler(this,this.eventInput),c.setOutputHandler(this,this.eventOutput),this.eventInput.on("touchstart",o.bind(this)),this.eventInput.on("touchmove",r.bind(this)),this.eventInput.on("touchend",s.bind(this)),this.eventInput.on("touchcancel",s.bind(this)),this.eventInput.on("unpipe",a.bind(this)),this.isTouched=!1}var c=n(208),l=Date.now;u.prototype.track=function(t){this.touchHistory[t.identifier]=[t]},t.exports=u},353:function(t,e,n){function i(t){this.options=Object.create(i.DEFAULT_OPTIONS),t&&this.setOptions(t),this._particles=[],this._bodies=[],this._agentData={},this._forces=[],this._constraints=[],this._buffer=0,this._prevTime=x(),this._isSleeping=!1,this._eventHandler=null,this._currAgentId=0,this._hasBodies=!1,this._eventHandler=null}function o(t){return t.applyForce?this._forces:t.applyConstraint?this._constraints:void 0}function r(t,e,n){return void 0===e&&(e=this.getParticlesAndBodies()),e instanceof Array||(e=[e]),t.on("change",this.wake.bind(this)),this._agentData[this._currAgentId]={agent:t,id:this._currAgentId,targets:e,source:n},o.call(this,t).push(this._currAgentId),this._currAgentId++}function s(t){return this._agentData[t]}function a(t){var e=s.call(this,this._forces[t]);e.agent.applyForce(e.targets,e.source)}function u(){for(var t=this._forces.length-1;t>-1;t--)a.call(this,t)}function c(t,e){var n=this._agentData[this._constraints[t]];return n.agent.applyConstraint(n.targets,n.source,e)}function l(t){for(var e=0;e<this.options.constraintSteps;){for(var n=this._constraints.length-1;n>-1;n--)c.call(this,n,t);e++}}function p(t,e){t.integrateVelocity(e),this.options.velocityCap&&t.velocity.cap(this.options.velocityCap).put(t.velocity)}function h(t,e){t.integrateAngularMomentum(e),t.updateAngularVelocity(),this.options.angularVelocityCap&&t.angularVelocity.cap(this.options.angularVelocityCap).put(t.angularVelocity)}function f(t,e){t.integrateOrientation(e)}function d(t,e){t.integratePosition(e),t.emit(E.update,t)}function v(t){u.call(this,t),this.forEach(p,t),this.forEachBody(h,t),l.call(this,t),this.forEachBody(f,t),this.forEach(d,t)}function m(){var t=0,e=0;return this.forEach(function(n){e=n.getEnergy(),t+=e}),t}function y(){var t=0;for(var e in this._agentData)t+=this.getAgentEnergy(e);return t}var g=n(208),_=17,b=1e3/120,C=17,x=Date.now,E={start:"start",update:"update",end:"end"};i.DEFAULT_OPTIONS={constraintSteps:1,sleepTolerance:1e-7,velocityCap:void 0,angularVelocityCap:void 0},i.prototype.setOptions=function(t){for(var e in t)this.options[e]&&(this.options[e]=t[e])},i.prototype.addBody=function(t){return t._engine=this,t.isBody?(this._bodies.push(t),this._hasBodies=!0):this._particles.push(t),t.on("start",this.wake.bind(this)),t},i.prototype.removeBody=function(t){var e=t.isBody?this._bodies:this._particles,n=e.indexOf(t);if(n>-1){for(var i in this._agentData)this._agentData.hasOwnProperty(i)&&this.detachFrom(this._agentData[i].id,t);e.splice(n,1)}0===this.getBodies().length&&(this._hasBodies=!1)},i.prototype.attach=function(t,e,n){if(this.wake(),t instanceof Array){for(var i=[],o=0;o<t.length;o++)i[o]=r.call(this,t[o],e,n);return i}return r.call(this,t,e,n)},i.prototype.attachTo=function(t,e){s.call(this,t).targets.push(e)},i.prototype.detach=function(t){var e=this.getAgent(t),n=o.call(this,e),i=n.indexOf(t);n.splice(i,1),delete this._agentData[t]},i.prototype.detachFrom=function(t,e){var n=s.call(this,t);if(n.source===e)this.detach(t);else{var i=n.targets,o=i.indexOf(e);o>-1&&i.splice(o,1)}},i.prototype.detachAll=function(){this._agentData={},this._forces=[],this._constraints=[],this._currAgentId=0},i.prototype.getAgent=function(t){return s.call(this,t).agent},i.prototype.getParticles=function(){return this._particles},i.prototype.getBodies=function(){return this._bodies},i.prototype.getParticlesAndBodies=function(){return this.getParticles().concat(this.getBodies())},i.prototype.forEachParticle=function(t,e){for(var n=this.getParticles(),i=0,o=n.length;o>i;i++)t.call(this,n[i],e)},i.prototype.forEachBody=function(t,e){if(this._hasBodies)for(var n=this.getBodies(),i=0,o=n.length;o>i;i++)t.call(this,n[i],e)},i.prototype.forEach=function(t,e){this.forEachParticle(t,e),this.forEachBody(t,e)},i.prototype.getAgentEnergy=function(t){var e=s.call(this,t);return e.agent.getEnergy(e.targets,e.source)},i.prototype.getEnergy=function(){return m.call(this)+y.call(this)},i.prototype.step=function(){if(!this.isSleeping()){var t=x(),e=t-this._prevTime;this._prevTime=t,b>e||(e>C&&(e=C),v.call(this,_),this.emit(E.update,this),this.getEnergy()<this.options.sleepTolerance&&this.sleep())}},i.prototype.isSleeping=function(){return this._isSleeping},i.prototype.isActive=function(){return!this._isSleeping},i.prototype.sleep=function(){this._isSleeping||(this.forEach(function(t){t.sleep()}),this.emit(E.end,this),this._isSleeping=!0)},i.prototype.wake=function(){this._isSleeping&&(this._prevTime=x(),this.emit(E.start,this),this._isSleeping=!1)},i.prototype.emit=function(t,e){null!==this._eventHandler&&this._eventHandler.emit(t,e)},i.prototype.on=function(t,e){null===this._eventHandler&&(this._eventHandler=new g),this._eventHandler.on(t,e)},t.exports=i},354:function(t,e,n){function i(t){t=t||{};var e=i.DEFAULT_OPTIONS;this.position=new r,this.velocity=new r,this.force=new r,this._engine=null,this._isSleeping=!0,this._eventOutput=null,this.mass=void 0!==t.mass?t.mass:e.mass,this.inverseMass=1/this.mass,this.setPosition(t.position||e.position),this.setVelocity(t.velocity||e.velocity),this.force.set(t.force||[0,0,0]),this.transform=s.identity.slice(),this._spec={size:[!0,!0],target:{transform:this.transform,origin:[.5,.5],target:null}}}function o(){this._eventOutput=new a,this._eventOutput.bindThis(this),a.setOutputHandler(this,this._eventOutput)}var r=n(356),s=n(38),a=n(208),u=n(390);i.DEFAULT_OPTIONS={position:[0,0,0],velocity:[0,0,0],mass:1};var c={start:"start",update:"update",end:"end"},l=Date.now;i.prototype.isBody=!1,i.prototype.isActive=function(){return!this._isSleeping},i.prototype.sleep=function(){this._isSleeping||(this.emit(c.end,this),this._isSleeping=!0)},i.prototype.wake=function(){this._isSleeping&&(this.emit(c.start,this),this._isSleeping=!1,this._prevTime=l(),this._engine&&this._engine.wake())},i.prototype.setPosition=function(t){this.position.set(t)},i.prototype.setPosition1D=function(t){this.position.x=t},i.prototype.getPosition=function(){return this._engine.step(),this.position.get()},i.prototype.getPosition1D=function(){return this._engine.step(),this.position.x},i.prototype.setVelocity=function(t){this.velocity.set(t),(0!==t[0]||0!==t[1]||0!==t[2])&&this.wake()},i.prototype.setVelocity1D=function(t){this.velocity.x=t,0!==t&&this.wake()},i.prototype.getVelocity=function(){return this.velocity.get()},i.prototype.setForce=function(t){this.force.set(t),this.wake()},i.prototype.getVelocity1D=function(){return this.velocity.x},i.prototype.setMass=function(t){this.mass=t,this.inverseMass=1/t},i.prototype.getMass=function(){return this.mass},i.prototype.reset=function(t,e){this.setPosition(t||[0,0,0]),this.setVelocity(e||[0,0,0])},i.prototype.applyForce=function(t){t.isZero()||(this.force.add(t).put(this.force),this.wake())},i.prototype.applyImpulse=function(t){if(!t.isZero()){var e=this.velocity;e.add(t.mult(this.inverseMass)).put(e)}},i.prototype.integrateVelocity=function(t){u.integrateVelocity(this,t)},i.prototype.integratePosition=function(t){u.integratePosition(this,t)},i.prototype._integrate=function(t){this.integrateVelocity(t),this.integratePosition(t)},i.prototype.getEnergy=function(){return.5*this.mass*this.velocity.normSquared()},i.prototype.getTransform=function(){this._engine.step();var t=this.position,e=this.transform;return e[12]=t.x,e[13]=t.y,e[14]=t.z,e},i.prototype.modify=function(t){var e=this._spec.target;return e.transform=this.getTransform(),e.target=t,this._spec},i.prototype.emit=function(t,e){this._eventOutput&&this._eventOutput.emit(t,e)},i.prototype.on=function(){return o.call(this),this.on.apply(this,arguments)},i.prototype.removeListener=function(){return o.call(this),this.removeListener.apply(this,arguments)},i.prototype.pipe=function(){return o.call(this),this.pipe.apply(this,arguments)},i.prototype.unpipe=function(){return o.call(this),this.unpipe.apply(this,arguments)},t.exports=i},356:function(t){function e(t,e,n){return 1===arguments.length&&void 0!==t?this.set(t):(this.x=t||0,this.y=e||0,this.z=n||0),this}function n(t,e,n){return this.x=t,this.y=e,this.z=n,this}function i(t){return n.call(this,t[0],t[1],t[2]||0)}function o(t){return n.call(this,t.x,t.y,t.z)}function r(t){return n.call(this,t,0,0)}var s=new e(0,0,0);e.prototype.add=function(t){return n.call(s,this.x+t.x,this.y+t.y,this.z+t.z)},e.prototype.sub=function(t){return n.call(s,this.x-t.x,this.y-t.y,this.z-t.z)},e.prototype.mult=function(t){return n.call(s,t*this.x,t*this.y,t*this.z)},e.prototype.div=function(t){return this.mult(1/t)},e.prototype.cross=function(t){var e=this.x,i=this.y,o=this.z,r=t.x,a=t.y,u=t.z;return n.call(s,o*a-i*u,e*u-o*r,i*r-e*a)},e.prototype.equals=function(t){return t.x===this.x&&t.y===this.y&&t.z===this.z},e.prototype.rotateX=function(t){var e=this.x,i=this.y,o=this.z,r=Math.cos(t),a=Math.sin(t);return n.call(s,e,i*r-o*a,i*a+o*r)},e.prototype.rotateY=function(t){var e=this.x,i=this.y,o=this.z,r=Math.cos(t),a=Math.sin(t);return n.call(s,o*a+e*r,i,o*r-e*a)},e.prototype.rotateZ=function(t){var e=this.x,i=this.y,o=this.z,r=Math.cos(t),a=Math.sin(t);return n.call(s,e*r-i*a,e*a+i*r,o)},e.prototype.dot=function(t){return this.x*t.x+this.y*t.y+this.z*t.z},e.prototype.normSquared=function(){return this.dot(this)},e.prototype.norm=function(){return Math.sqrt(this.normSquared())},e.prototype.normalize=function(t){0===arguments.length&&(t=1);var e=this.norm();return e>1e-7?o.call(s,this.mult(t/e)):n.call(s,t,0,0)},e.prototype.clone=function(){return new e(this)},e.prototype.isZero=function(){return!(this.x||this.y||this.z)},e.prototype.set=function(t){return t instanceof Array?i.call(this,t):"number"==typeof t?r.call(this,t):o.call(this,t)},e.prototype.setXYZ=function(){return n.apply(this,arguments)},e.prototype.set1D=function(t){return r.call(this,t)},e.prototype.put=function(t){this===s?o.call(t,s):o.call(t,this)},e.prototype.clear=function(){return n.call(this,0,0,0)},e.prototype.cap=function a(a){if(a===1/0)return o.call(s,this);var t=this.norm();return t>a?o.call(s,this.mult(a/t)):o.call(s,this)},e.prototype.project=function(t){return t.mult(this.dot(t))},e.prototype.reflectAcross=function(t){return t.normalize().put(t),o(s,this.sub(this.project(t).mult(2)))},e.prototype.get=function(){return[this.x,this.y,this.z]},e.prototype.get1D=function(){return this.x},t.exports=e},379:function(t,e,n){function i(t){o.call(this),this.options=Object.create(this.constructor.DEFAULT_OPTIONS),t&&this.setOptions(t),this.pDiff=new r,this.vDiff=new r,this.impulse1=new r,this.impulse2=new r}var o=n(399),r=n(356);i.prototype=Object.create(o.prototype),i.prototype.constructor=i,i.DEFAULT_OPTIONS={period:300,dampingRatio:.1,length:0,anchor:void 0};var s=Math.PI;i.prototype.setOptions=function(t){void 0!==t.anchor&&(t.anchor instanceof r&&(this.options.anchor=t.anchor),t.anchor.position instanceof r&&(this.options.anchor=t.anchor.position),t.anchor instanceof Array&&(this.options.anchor=new r(t.anchor))),void 0!==t.length&&(this.options.length=t.length),void 0!==t.dampingRatio&&(this.options.dampingRatio=t.dampingRatio),void 0!==t.period&&(this.options.period=t.period),o.prototype.setOptions.call(this,t)},i.prototype.getEnergy=function(t,e){for(var n=this.options,i=n.length,o=n.anchor||e.position,r=Math.pow(2*s/n.period,2),a=0,u=0;u<t.length;u++){var c=t[u],l=o.sub(c.position).norm()-i;a+=.5*r*l*l}return a},i.prototype.applyConstraint=function(t,e,n){for(var i=this.options,o=this.pDiff,r=this.vDiff,a=this.impulse1,u=this.impulse2,c=i.length,l=i.anchor||e.position,p=i.period,h=i.dampingRatio,f=0;f<t.length;f++){var d=t[f],v=d.position,m=d.velocity,y=d.mass,g=d.inverseMass;o.set(v.sub(l));var _,b=o.norm()-c;if(e){var C=e.inverseMass,x=e.velocity;r.set(m.sub(x)),_=1/(g+C)}else r.set(m),_=y;var E,w;if(0===this.options.period)E=0,w=1;else{var O=4*_*s*s/(p*p),S=4*_*s*h/p;w=n*O/(S+n*O),E=1/(S+n*O)}var T=w/n*b;o.normalize(-T).sub(r).mult(n/(E+n/_)).put(a),d.applyImpulse(a),e&&(a.mult(-1).put(u),e.applyImpulse(u))}},t.exports=i;

},380:function(t){function e(t,e){return t+n(i()*(e-t+1))}var n=Math.floor,i=Math.random;t.exports=e},390:function(t){var e={};e.integrateVelocity=function(t,e){var n=t.velocity,i=t.inverseMass,o=t.force;o.isZero()||(n.add(o.mult(e*i)).put(n),o.clear())},e.integratePosition=function(t,e){var n=t.position,i=t.velocity;n.add(i.mult(e)).put(n)},e.integrateAngularMomentum=function(t,e){var n=t.angularMomentum,i=t.torque;i.isZero()||(n.add(i.mult(e)).put(n),i.clear())},e.integrateOrientation=function(t,e){var n=t.orientation,i=t.angularVelocity;i.isZero()||n.add(n.multiply(i).scalarMultiply(.5*e)).put(n)},t.exports=e},399:function(t,e,n){function i(){this.options=this.options||{},this._eventOutput=new o,o.setOutputHandler(this,this._eventOutput)}var o=n(208);i.prototype.setOptions=function(t){this._eventOutput.emit("change",t)},i.prototype.applyConstraint=function(){},i.prototype.getEnergy=function(){return 0},t.exports=i}});