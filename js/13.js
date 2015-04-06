webpackJsonp([13],{185:function(t,e,n){n(2);!function(){"use strict";var e=function(t){return t&&t.__esModule?t["default"]:t},i=function(){function t(t,e){for(var n in e){var i=e[n];i.configurable=!0,i.value&&(i.writable=!0)}Object.defineProperties(t,e)}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),o=function g(t,e,n){var i=Object.getOwnPropertyDescriptor(t,e);if(void 0===i){var o=Object.getPrototypeOf(t);return null===o?void 0:g(o,e,n)}if("value"in i&&i.writable)return i.value;var r=i.get;return void 0===r?void 0:r.call(n)},r=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(t.__proto__=e)},s=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},a=e(n(270)),u=e(n(292)),c=e(n(256)),p=(e(n(40)),e(n(2))),l=e(n(75)),h=e(n(76)),f=e(n(77)),d=e(n(293));c.registerMethod("spring",u);var v=function(t){var e=function(){for(var t=arguments.length,n=Array(t),i=0;t>i;i++)n[i]=arguments[i];s(this,e),o(Object.getPrototypeOf(e.prototype),"constructor",this).apply(this,n),this._onSurfaceClick=this._onSurfaceClick.bind(this)};return r(e,t),i(e,{_onSurfaceClick:{value:function(t){var e=this.refs.deck.getFamous();console.log("Clicked surface #"+t),e.toggle()}},render:{value:function(){var t=this,e=a(5).map(function(e){var n={properties:{backgroundColor:"hsla("+15*(5*e+e)%360+", 60%, 50%, 0.8)",color:"white",lineHeight:"200px",textAlign:"center"},size:[100,200]};return p.createElement(f,{eventKey:e,key:e,onClick:t._onSurfaceClick,options:n},e)}),n={itemSpacing:10,transition:{method:"spring",period:300,dampingRatio:.5},stackRotation:.02};return p.createElement(l,null,p.createElement(f,{options:{properties:{lineHeight:"100px",textAlign:"center"},size:[void 0,100]}},"Open the developer console, then click the deck."),p.createElement(h,{options:{align:[.5,.5],origin:[.5,.5]}},p.createElement(d,{ref:"deck",options:n},e)))}}}),e}(p.Component);t.exports=v}()},270:function(t,e,n){function i(t,e,n){n&&o(t,e,n)&&(e=n=null),t=+t||0,n=null==n?1:+n||0,null==e?(e=t,t=0):e=+e||0;for(var i=-1,a=s(r((e-t)/(n||1)),0),u=Array(a);++i<a;)u[i]=t,t+=n;return u}var o=n(337),r=Math.ceil,s=Math.max;t.exports=i},292:function(t,e,n){function i(t){t=t||0,this.endState=new m(t),this.initState=new m,this._dimensions=void 0,this._restTolerance=1e-10,this._absRestTolerance=this._restTolerance,this._callback=void 0,this.PE=new g,this.spring=new _({anchor:this.endState}),this.particle=new y,this.PE.addBody(this.particle),this.PE.attach(this.spring,this.particle)}function o(){return this.particle.getEnergy()+this.spring.getEnergy([this.particle])}function r(t){this.particle.setPosition(t)}function s(t){this.particle.setVelocity(t)}function a(){return 0===this._dimensions?this.particle.getPosition1D():this.particle.getPosition()}function u(){return 0===this._dimensions?this.particle.getVelocity1D():this.particle.getVelocity()}function c(t){this._callback=t}function p(){this.PE.wake()}function l(){this.PE.sleep()}function h(){if(this.PE.isSleeping()){if(this._callback){var t=this._callback;this._callback=void 0,t()}}else o.call(this)<this._absRestTolerance&&(r.call(this,this.endState),s.call(this,[0,0,0]),l.call(this))}function f(t){var e=i.DEFAULT_OPTIONS;void 0===t.period&&(t.period=e.period),void 0===t.dampingRatio&&(t.dampingRatio=e.dampingRatio),void 0===t.velocity&&(t.velocity=e.velocity),t.period<150&&(t.period=150,console.warn("The period of a SpringTransition is capped at 150 ms. Use a SnapTransition for faster transitions")),this.spring.setOptions({period:t.period,dampingRatio:t.dampingRatio}),s.call(this,t.velocity)}function d(){var t=this.endState.sub(this.initState).normSquared();this._absRestTolerance=0===t?this._restTolerance:this._restTolerance*t}function v(t){this.endState.set(t),d.call(this)}var g=n(353),y=n(354),_=n(355),m=n(356);i.SUPPORTS_MULTIPLE=3,i.DEFAULT_OPTIONS={period:300,dampingRatio:.5,velocity:0},i.prototype.reset=function(t,e){this._dimensions=t instanceof Array?t.length:0,this.initState.set(t),r.call(this,t),v.call(this,t),e&&s.call(this,e),c.call(this,void 0)},i.prototype.getVelocity=function(){return u.call(this)},i.prototype.setVelocity=function(t){this.call(this,s(t))},i.prototype.isActive=function(){return!this.PE.isSleeping()},i.prototype.halt=function(){this.set(this.get())},i.prototype.get=function(){return h.call(this),a.call(this)},i.prototype.set=function(t,e,n){return e?(this._dimensions=t instanceof Array?t.length:0,p.call(this),f.call(this,e),v.call(this,t),void c.call(this,n)):(this.reset(t),void(n&&n()))},t.exports=i},293:function(t,e,n){n(2);!function(){"use strict";var e=function(t){return t&&t.__esModule?t["default"]:t},i=function(){function t(t,e){for(var n in e){var i=e[n];i.configurable=!0,i.value&&(i.writable=!0)}Object.defineProperties(t,e)}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),o=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(t.__proto__=e)},r=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},s=e(n(254)),a=e(n(358)),u=e(n(147)),c=e(n(2)),p=e(n(151)),l=function(t){function e(){r(this,e),null!=t&&t.apply(this,arguments)}return o(e,t),i(e,{famousCreate:{value:function(){return new a(this.props.options)}},famousCreateNode:{value:function(t){var e=this.getFamous(),n=t.add(e),i=[],o=this.getFamousChildrenRef().map(function(t){var e=new s;return i.push([t,e]),e});return e.sequenceFrom(o),[n,i]}},famousUpdate:{value:function(t){var e=this.getFamous();e.setOptions(t.options)}},render:{value:function(){return c.createElement("div",{"data-famous":"Deck"},this.getFamousChildren())}}}),e}(p);u(l,a),t.exports=l}()},353:function(t,e,n){function i(t){this.options=Object.create(i.DEFAULT_OPTIONS),t&&this.setOptions(t),this._particles=[],this._bodies=[],this._agentData={},this._forces=[],this._constraints=[],this._buffer=0,this._prevTime=E(),this._isSleeping=!1,this._eventHandler=null,this._currAgentId=0,this._hasBodies=!1,this._eventHandler=null}function o(t){return t.applyForce?this._forces:t.applyConstraint?this._constraints:void 0}function r(t,e,n){return void 0===e&&(e=this.getParticlesAndBodies()),e instanceof Array||(e=[e]),t.on("change",this.wake.bind(this)),this._agentData[this._currAgentId]={agent:t,id:this._currAgentId,targets:e,source:n},o.call(this,t).push(this._currAgentId),this._currAgentId++}function s(t){return this._agentData[t]}function a(t){var e=s.call(this,this._forces[t]);e.agent.applyForce(e.targets,e.source)}function u(){for(var t=this._forces.length-1;t>-1;t--)a.call(this,t)}function c(t,e){var n=this._agentData[this._constraints[t]];return n.agent.applyConstraint(n.targets,n.source,e)}function p(t){for(var e=0;e<this.options.constraintSteps;){for(var n=this._constraints.length-1;n>-1;n--)c.call(this,n,t);e++}}function l(t,e){t.integrateVelocity(e),this.options.velocityCap&&t.velocity.cap(this.options.velocityCap).put(t.velocity)}function h(t,e){t.integrateAngularMomentum(e),t.updateAngularVelocity(),this.options.angularVelocityCap&&t.angularVelocity.cap(this.options.angularVelocityCap).put(t.angularVelocity)}function f(t,e){t.integrateOrientation(e)}function d(t,e){t.integratePosition(e),t.emit(O.update,t)}function v(t){u.call(this,t),this.forEach(l,t),this.forEachBody(h,t),p.call(this,t),this.forEachBody(f,t),this.forEach(d,t)}function g(){var t=0,e=0;return this.forEach(function(n){e=n.getEnergy(),t+=e}),t}function y(){var t=0;for(var e in this._agentData)t+=this.getAgentEnergy(e);return t}var _=n(208),m=17,b=1e3/120,x=17,E=Date.now,O={start:"start",update:"update",end:"end"};i.DEFAULT_OPTIONS={constraintSteps:1,sleepTolerance:1e-7,velocityCap:void 0,angularVelocityCap:void 0},i.prototype.setOptions=function(t){for(var e in t)this.options[e]&&(this.options[e]=t[e])},i.prototype.addBody=function(t){return t._engine=this,t.isBody?(this._bodies.push(t),this._hasBodies=!0):this._particles.push(t),t.on("start",this.wake.bind(this)),t},i.prototype.removeBody=function(t){var e=t.isBody?this._bodies:this._particles,n=e.indexOf(t);if(n>-1){for(var i in this._agentData)this._agentData.hasOwnProperty(i)&&this.detachFrom(this._agentData[i].id,t);e.splice(n,1)}0===this.getBodies().length&&(this._hasBodies=!1)},i.prototype.attach=function(t,e,n){if(this.wake(),t instanceof Array){for(var i=[],o=0;o<t.length;o++)i[o]=r.call(this,t[o],e,n);return i}return r.call(this,t,e,n)},i.prototype.attachTo=function(t,e){s.call(this,t).targets.push(e)},i.prototype.detach=function(t){var e=this.getAgent(t),n=o.call(this,e),i=n.indexOf(t);n.splice(i,1),delete this._agentData[t]},i.prototype.detachFrom=function(t,e){var n=s.call(this,t);if(n.source===e)this.detach(t);else{var i=n.targets,o=i.indexOf(e);o>-1&&i.splice(o,1)}},i.prototype.detachAll=function(){this._agentData={},this._forces=[],this._constraints=[],this._currAgentId=0},i.prototype.getAgent=function(t){return s.call(this,t).agent},i.prototype.getParticles=function(){return this._particles},i.prototype.getBodies=function(){return this._bodies},i.prototype.getParticlesAndBodies=function(){return this.getParticles().concat(this.getBodies())},i.prototype.forEachParticle=function(t,e){for(var n=this.getParticles(),i=0,o=n.length;o>i;i++)t.call(this,n[i],e)},i.prototype.forEachBody=function(t,e){if(this._hasBodies)for(var n=this.getBodies(),i=0,o=n.length;o>i;i++)t.call(this,n[i],e)},i.prototype.forEach=function(t,e){this.forEachParticle(t,e),this.forEachBody(t,e)},i.prototype.getAgentEnergy=function(t){var e=s.call(this,t);return e.agent.getEnergy(e.targets,e.source)},i.prototype.getEnergy=function(){return g.call(this)+y.call(this)},i.prototype.step=function(){if(!this.isSleeping()){var t=E(),e=t-this._prevTime;this._prevTime=t,b>e||(e>x&&(e=x),v.call(this,m),this.emit(O.update,this),this.getEnergy()<this.options.sleepTolerance&&this.sleep())}},i.prototype.isSleeping=function(){return this._isSleeping},i.prototype.isActive=function(){return!this._isSleeping},i.prototype.sleep=function(){this._isSleeping||(this.forEach(function(t){t.sleep()}),this.emit(O.end,this),this._isSleeping=!0)},i.prototype.wake=function(){this._isSleeping&&(this._prevTime=E(),this.emit(O.start,this),this._isSleeping=!1)},i.prototype.emit=function(t,e){null!==this._eventHandler&&this._eventHandler.emit(t,e)},i.prototype.on=function(t,e){null===this._eventHandler&&(this._eventHandler=new _),this._eventHandler.on(t,e)},t.exports=i},354:function(t,e,n){function i(t){t=t||{};var e=i.DEFAULT_OPTIONS;this.position=new r,this.velocity=new r,this.force=new r,this._engine=null,this._isSleeping=!0,this._eventOutput=null,this.mass=void 0!==t.mass?t.mass:e.mass,this.inverseMass=1/this.mass,this.setPosition(t.position||e.position),this.setVelocity(t.velocity||e.velocity),this.force.set(t.force||[0,0,0]),this.transform=s.identity.slice(),this._spec={size:[!0,!0],target:{transform:this.transform,origin:[.5,.5],target:null}}}function o(){this._eventOutput=new a,this._eventOutput.bindThis(this),a.setOutputHandler(this,this._eventOutput)}var r=n(356),s=n(38),a=n(208),u=n(390);i.DEFAULT_OPTIONS={position:[0,0,0],velocity:[0,0,0],mass:1};var c={start:"start",update:"update",end:"end"},p=Date.now;i.prototype.isBody=!1,i.prototype.isActive=function(){return!this._isSleeping},i.prototype.sleep=function(){this._isSleeping||(this.emit(c.end,this),this._isSleeping=!0)},i.prototype.wake=function(){this._isSleeping&&(this.emit(c.start,this),this._isSleeping=!1,this._prevTime=p(),this._engine&&this._engine.wake())},i.prototype.setPosition=function(t){this.position.set(t)},i.prototype.setPosition1D=function(t){this.position.x=t},i.prototype.getPosition=function(){return this._engine.step(),this.position.get()},i.prototype.getPosition1D=function(){return this._engine.step(),this.position.x},i.prototype.setVelocity=function(t){this.velocity.set(t),(0!==t[0]||0!==t[1]||0!==t[2])&&this.wake()},i.prototype.setVelocity1D=function(t){this.velocity.x=t,0!==t&&this.wake()},i.prototype.getVelocity=function(){return this.velocity.get()},i.prototype.setForce=function(t){this.force.set(t),this.wake()},i.prototype.getVelocity1D=function(){return this.velocity.x},i.prototype.setMass=function(t){this.mass=t,this.inverseMass=1/t},i.prototype.getMass=function(){return this.mass},i.prototype.reset=function(t,e){this.setPosition(t||[0,0,0]),this.setVelocity(e||[0,0,0])},i.prototype.applyForce=function(t){t.isZero()||(this.force.add(t).put(this.force),this.wake())},i.prototype.applyImpulse=function(t){if(!t.isZero()){var e=this.velocity;e.add(t.mult(this.inverseMass)).put(e)}},i.prototype.integrateVelocity=function(t){u.integrateVelocity(this,t)},i.prototype.integratePosition=function(t){u.integratePosition(this,t)},i.prototype._integrate=function(t){this.integrateVelocity(t),this.integratePosition(t)},i.prototype.getEnergy=function(){return.5*this.mass*this.velocity.normSquared()},i.prototype.getTransform=function(){this._engine.step();var t=this.position,e=this.transform;return e[12]=t.x,e[13]=t.y,e[14]=t.z,e},i.prototype.modify=function(t){var e=this._spec.target;return e.transform=this.getTransform(),e.target=t,this._spec},i.prototype.emit=function(t,e){this._eventOutput&&this._eventOutput.emit(t,e)},i.prototype.on=function(){return o.call(this),this.on.apply(this,arguments)},i.prototype.removeListener=function(){return o.call(this),this.removeListener.apply(this,arguments)},i.prototype.pipe=function(){return o.call(this),this.pipe.apply(this,arguments)},i.prototype.unpipe=function(){return o.call(this),this.unpipe.apply(this,arguments)},t.exports=i},355:function(t,e,n){function i(t){a.call(this),this.options=Object.create(this.constructor.DEFAULT_OPTIONS),t&&this.setOptions(t),this.disp=new u(0,0,0),s.call(this)}function o(){var t=this.options;t.stiffness=Math.pow(2*c/t.period,2)}function r(){var t=this.options;t.damping=4*c*t.dampingRatio/t.period}function s(){o.call(this),r.call(this)}var a=n(392),u=n(356);i.prototype=Object.create(a.prototype),i.prototype.constructor=i;var c=Math.PI,p=150;i.FORCE_FUNCTIONS={FENE:function(t,e){var n=.99*e,i=Math.max(Math.min(t,n),-n);return i/(1-i*i/(e*e))},HOOK:function(t){return t}},i.DEFAULT_OPTIONS={period:300,dampingRatio:.1,length:0,maxLength:1/0,anchor:void 0,forceFunction:i.FORCE_FUNCTIONS.HOOK},i.prototype.setOptions=function(t){void 0!==t.anchor&&(t.anchor.position instanceof u&&(this.options.anchor=t.anchor.position),t.anchor instanceof u&&(this.options.anchor=t.anchor),t.anchor instanceof Array&&(this.options.anchor=new u(t.anchor))),void 0!==t.period&&(t.period<p&&(t.period=p,console.warn("The period of a SpringTransition is capped at "+p+" ms. Use a SnapTransition for faster transitions")),this.options.period=t.period),void 0!==t.dampingRatio&&(this.options.dampingRatio=t.dampingRatio),void 0!==t.length&&(this.options.length=t.length),void 0!==t.forceFunction&&(this.options.forceFunction=t.forceFunction),void 0!==t.maxLength&&(this.options.maxLength=t.maxLength),s.call(this),a.prototype.setOptions.call(this,t)},i.prototype.applyForce=function(t,e){var n,i,o,r,s,a,u=this.force,c=this.disp,p=this.options,l=p.stiffness,h=p.damping,f=p.length,d=p.maxLength,v=p.anchor||e.position,g=p.forceFunction;for(n=0;n<t.length;n++){if(i=t[n],o=i.position,r=i.velocity,v.sub(o).put(c),s=c.norm()-f,0===s)return;a=i.mass,l*=a,h*=a,c.normalize(l*g(s,d)).put(u),h&&(e?u.add(r.sub(e.velocity).mult(-h)).put(u):u.add(r.mult(-h)).put(u)),i.applyForce(u),e&&e.applyForce(u.mult(-1))}},i.prototype.getEnergy=function(t,e){for(var n=this.options,i=n.length,o=e?e.position:n.anchor,r=n.stiffness,s=0,a=0;a<t.length;a++){var u=t[a],c=o.sub(u.position).norm()-i;s+=.5*r*c*c}return s},t.exports=i},356:function(t){function e(t,e,n){return 1===arguments.length&&void 0!==t?this.set(t):(this.x=t||0,this.y=e||0,this.z=n||0),this}function n(t,e,n){return this.x=t,this.y=e,this.z=n,this}function i(t){return n.call(this,t[0],t[1],t[2]||0)}function o(t){return n.call(this,t.x,t.y,t.z)}function r(t){return n.call(this,t,0,0)}var s=new e(0,0,0);e.prototype.add=function(t){return n.call(s,this.x+t.x,this.y+t.y,this.z+t.z)},e.prototype.sub=function(t){return n.call(s,this.x-t.x,this.y-t.y,this.z-t.z)},e.prototype.mult=function(t){return n.call(s,t*this.x,t*this.y,t*this.z)},e.prototype.div=function(t){return this.mult(1/t)},e.prototype.cross=function(t){var e=this.x,i=this.y,o=this.z,r=t.x,a=t.y,u=t.z;return n.call(s,o*a-i*u,e*u-o*r,i*r-e*a)},e.prototype.equals=function(t){return t.x===this.x&&t.y===this.y&&t.z===this.z},e.prototype.rotateX=function(t){var e=this.x,i=this.y,o=this.z,r=Math.cos(t),a=Math.sin(t);return n.call(s,e,i*r-o*a,i*a+o*r)},e.prototype.rotateY=function(t){var e=this.x,i=this.y,o=this.z,r=Math.cos(t),a=Math.sin(t);return n.call(s,o*a+e*r,i,o*r-e*a)},e.prototype.rotateZ=function(t){var e=this.x,i=this.y,o=this.z,r=Math.cos(t),a=Math.sin(t);return n.call(s,e*r-i*a,e*a+i*r,o)},e.prototype.dot=function(t){return this.x*t.x+this.y*t.y+this.z*t.z},e.prototype.normSquared=function(){return this.dot(this)},e.prototype.norm=function(){return Math.sqrt(this.normSquared())},e.prototype.normalize=function(t){0===arguments.length&&(t=1);var e=this.norm();return e>1e-7?o.call(s,this.mult(t/e)):n.call(s,t,0,0)},e.prototype.clone=function(){return new e(this)},e.prototype.isZero=function(){return!(this.x||this.y||this.z)},e.prototype.set=function(t){return t instanceof Array?i.call(this,t):"number"==typeof t?r.call(this,t):o.call(this,t)},e.prototype.setXYZ=function(){return n.apply(this,arguments)},e.prototype.set1D=function(t){return r.call(this,t)},e.prototype.put=function(t){this===s?o.call(t,s):o.call(t,this)},e.prototype.clear=function(){return n.call(this,0,0,0)},e.prototype.cap=function a(a){if(a===1/0)return o.call(s,this);var t=this.norm();return t>a?o.call(s,this.mult(a/t)):o.call(s,this)},e.prototype.project=function(t){return t.mult(this.dot(t))},e.prototype.reflectAcross=function(t){return t.normalize().put(t),o(s,this.sub(this.project(t).mult(2)))},e.prototype.get=function(){return[this.x,this.y,this.z]},e.prototype.get1D=function(){return this.x},t.exports=e},358:function(t,e,n){function i(){p.apply(this,arguments),this.state=new u(0),this._isOpen=!1,this.setOutputFunction(function(t,e,n){var i=o.call(this),r=this.options.direction===c.Direction.X?s.translate(i*e,0,.001*(i-1)*e):s.translate(0,i*e,.001*(i-1)*e),a=t.render();if(this.options.stackRotation){var u=this.options.stackRotation*n*(1-i);a={transform:s.rotateZ(u),origin:[.5,.5],target:a}}return{transform:r,size:t.getSize(),target:a}})}function o(t){return t?this._isOpen?1:0:this.state.get()}function r(t,e,n){this.state.halt(),this.state.set(t,e,n)}var s=n(38),a=n(209),u=n(256),c=n(297),p=n(362);i.prototype=Object.create(p.prototype),i.prototype.constructor=i,i.DEFAULT_OPTIONS=a.patch(p.DEFAULT_OPTIONS,{transition:{curve:"easeOutBounce",duration:500},stackRotation:0}),i.prototype.getSize=function(){var t=p.prototype.getSize.apply(this,arguments),e=this._items?this._items.get().getSize():[0,0];e||(e=[0,0]);var n=o.call(this),i=1-n;return[e[0]*i+t[0]*n,e[1]*i+t[1]*n]},i.prototype.isOpen=function(){return this._isOpen},i.prototype.open=function(t){this._isOpen=!0,r.call(this,1,this.options.transition,t)},i.prototype.close=function(t){this._isOpen=!1,r.call(this,0,this.options.transition,t)},i.prototype.toggle=function(t){this._isOpen?this.close(t):this.open(t)},t.exports=i},362:function(t,e,n){function i(t){this._items=null,this._size=null,this._outputFunction=i.DEFAULT_OUTPUT_FUNCTION,this.options=u.clone(this.constructor.DEFAULT_OPTIONS||i.DEFAULT_OPTIONS),this.optionsManager=new o(this.options),this.id=r.register(this),this.cachedSize=[void 0,void 0],t&&this.setOptions(t)}var o=n(209),r=n(321),s=n(38),a=n(384),u=n(297);i.DEFAULT_OPTIONS={direction:u.Direction.Y,itemSpacing:0},i.DEFAULT_OUTPUT_FUNCTION=function(t,e){var n=this.options.direction===u.Direction.X?s.translate(e,0):s.translate(0,e);return{size:this.cachedSize,transform:n,target:t.render()}},i.prototype.getSize=function(){return this._size||this.render(),this._size},i.prototype.sequenceFrom=function(t){return t instanceof Array&&(t=new a(t)),this._items=t,this},i.prototype.setOptions=function(){return this.optionsManager.setOptions.apply(this.optionsManager,arguments),this},i.prototype.setOutputFunction=function(t){return this._outputFunction=t,this},i.prototype.render=function(){return this.id},i.prototype.commit=function(t){var e=0,n=1^this.options.direction,i=this._items,o=null,r=[],s={},a=[],u=0;for(this._size=[0,0],this.cachedSize=t.size;i&&(o=i.get());)o.getSize&&(r=o.getSize()),s=this._outputFunction.call(this,o,e,u++),a.push(s),r&&(r[this.options.direction]&&(e+=r[this.options.direction]),r[n]>this._size[n]&&(this._size[n]=r[n]),0===r[n]&&(this._size[n]=void 0)),i=i.getNext(),this.options.itemSpacing&&i&&(e+=this.options.itemSpacing);return this._size[this.options.direction]=e,{transform:t.transform,origin:t.origin,opacity:t.opacity,size:this.getSize(),target:a}},t.exports=i},384:function(t){function e(t){t||(t=[]),t instanceof Array&&(t={array:t}),this._=null,this.index=t.index||0,t.array?this._=new this.constructor.Backing(t.array):t._&&(this._=t._),this.index===this._.firstIndex&&(this._.firstNode=this),this.index===this._.firstIndex+this._.array.length-1&&(this._.lastNode=this),void 0!==t.loop&&(this._.loop=t.loop),void 0!==t.trackSize&&(this._.trackSize=t.trackSize),this._previousNode=null,this._nextNode=null}e.Backing=function(t){this.array=t,this.firstIndex=0,this.loop=!1,this.firstNode=null,this.lastNode=null,this.cumulativeSizes=[[0,0]],this.sizeDirty=!0,this.trackSize=!1},e.Backing.prototype.getValue=function(t){var e=t-this.firstIndex;return 0>e||e>=this.array.length?null:this.array[e]},e.Backing.prototype.setValue=function(t,e){this.array[t-this.firstIndex]=e},e.Backing.prototype.getSize=function(t){return this.cumulativeSizes[t]},e.Backing.prototype.calculateSize=function(t){t=t||this.array.length;for(var e=[0,0],n=0;t>n;n++){var i=this.array[n].getSize();if(!i)return void 0;void 0!==e[0]&&(void 0===i[0]?e[0]=void 0:e[0]+=i[0]),void 0!==e[1]&&(void 0===i[1]?e[1]=void 0:e[1]+=i[1]),this.cumulativeSizes[n+1]=e.slice()}return this.sizeDirty=!1,e},e.Backing.prototype.reindex=function(t,e,n){if(this.array[0]){for(var i=0,o=this.firstIndex,r=n-e,s=this.firstNode;t-1>o;)s=s.getNext(),o++;var a=s;for(i=0;e>i;i++)s=s.getNext(),s&&(s._previousNode=a);var u=s?s.getNext():null;for(a._nextNode=null,s=a,i=0;n>i;i++)s=s.getNext();if(o+=n,s!==u&&(s._nextNode=u,u&&(u._previousNode=s)),u)for(s=u,o++;s&&o<this.array.length+this.firstIndex;)s._nextNode?s.index+=r:s.index=o,s=s.getNext(),o++;this.trackSize&&(this.sizeDirty=!0)}},e.prototype.getPrevious=function(){var t=this._.array.length;return t?this.index===this._.firstIndex?this._.loop?(this._previousNode=this._.lastNode||new this.constructor({_:this._,index:this._.firstIndex+t-1}),this._previousNode._nextNode=this):this._previousNode=null:this._previousNode||(this._previousNode=new this.constructor({_:this._,index:this.index-1}),this._previousNode._nextNode=this):this._previousNode=null,this._previousNode},e.prototype.getNext=function(){var t=this._.array.length;return t?this.index===this._.firstIndex+t-1?this._.loop?(this._nextNode=this._.firstNode||new this.constructor({_:this._,index:this._.firstIndex}),this._nextNode._previousNode=this):this._nextNode=null:this._nextNode||(this._nextNode=new this.constructor({_:this._,index:this.index+1}),this._nextNode._previousNode=this):this._nextNode=null,this._nextNode},e.prototype.indexOf=function(t){return this._.array.indexOf(t)},e.prototype.getIndex=function(){return this.index},e.prototype.toString=function(){return""+this.index},e.prototype.unshift=function(){this._.array.unshift.apply(this._.array,arguments),this._.firstIndex-=arguments.length,this._.trackSize&&(this._.sizeDirty=!0)},e.prototype.push=function(){this._.array.push.apply(this._.array,arguments),this._.trackSize&&(this._.sizeDirty=!0)},e.prototype.splice=function(t,e){var n=Array.prototype.slice.call(arguments,2);this._.array.splice.apply(this._.array,[t-this._.firstIndex,e].concat(n)),this._.reindex(t,e,n.length)},e.prototype.swap=function(t){var e=t.get(),n=this.get();this._.setValue(this.index,e),this._.setValue(t.index,n);var i=this._previousNode,o=this._nextNode,r=this.index,s=t._previousNode,a=t._nextNode,u=t.index;this.index=u,this._previousNode=s===this?t:s,this._previousNode&&(this._previousNode._nextNode=this),this._nextNode=a===this?t:a,this._nextNode&&(this._nextNode._previousNode=this),t.index=r,t._previousNode=i===t?this:i,t._previousNode&&(t._previousNode._nextNode=t),t._nextNode=o===t?this:o,t._nextNode&&(t._nextNode._previousNode=t),this.index===this._.firstIndex?this._.firstNode=this:this.index===this._.firstIndex+this._.array.length-1&&(this._.lastNode=this),t.index===this._.firstIndex?this._.firstNode=t:t.index===this._.firstIndex+this._.array.length-1&&(this._.lastNode=t),this._.trackSize&&(this._.sizeDirty=!0)},e.prototype.get=function(){return this._.getValue(this.index)},e.prototype.getSize=function(){var t=this.get();return t?t.getSize():null},e.prototype.render=function(){this._.trackSize&&this._.sizeDirty&&this._.calculateSize();var t=this.get();return t?t.render.apply(t,arguments):null},t.exports=e},390:function(t){var e={};e.integrateVelocity=function(t,e){var n=t.velocity,i=t.inverseMass,o=t.force;o.isZero()||(n.add(o.mult(e*i)).put(n),o.clear())},e.integratePosition=function(t,e){var n=t.position,i=t.velocity;n.add(i.mult(e)).put(n)},e.integrateAngularMomentum=function(t,e){var n=t.angularMomentum,i=t.torque;i.isZero()||(n.add(i.mult(e)).put(n),i.clear())},e.integrateOrientation=function(t,e){var n=t.orientation,i=t.angularVelocity;i.isZero()||n.add(n.multiply(i).scalarMultiply(.5*e)).put(n)},t.exports=e},392:function(t,e,n){function i(t){this.force=new o(t),this._eventOutput=new r,r.setOutputHandler(this,this._eventOutput)}var o=n(356),r=n(208);i.prototype.setOptions=function(t){this._eventOutput.emit("change",t)},i.prototype.applyForce=function(t){for(var e=t.length;e--;)t[e].applyForce(this.force)},i.prototype.getEnergy=function(){return 0},t.exports=i}});