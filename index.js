/**
 * Dependencies
 */

var ev = require('event');

/**
 * Map touch events.
 * @type {Object}
 * @api private
 */

var mapper = {
	'click' : 'touchend',
	'mousedown' : 'touchstart',
	'mouseup' : 'touchend',
	'mousemove' : 'touchmove'
};


/**
 * Expose 'Event plugin'
 */

module.exports = Events;


/**
 * Event plugin constructor
 * @param {Object} view event plugin scope
 * @param {Boolean} isTouch optional
 * @api public
 */

function Events(view, isTouch){
  if(!(this instanceof Events)) return new Events(view, isTouch);
  this.view = view;
  this.listeners = [];
  this.isTouch = isTouch || (window.ontouchstart !== undefined);
}



/**
 * Listen events.
 * @param {HTMLElement} node 
 * @param {String} type event's type
 * @param {String} fn view's callback name
 * @param {String} capture useCapture
 * @api private
 */

Events.prototype.on = function(node, type, fn, capture) {
  var _this = this,
     cb = function(target, e) {
      _this.view[fn].call(_this.view, target, e, node); //we should pass target
     };
  //todo: event should return the node as well...it's too complicated
  this.listeners.push([node].concat(ev(node, type, cb, (capture === 'true'))));
};



/**
 * Map events (desktop and mobile)
 * @param  {String} type event's name
 * @return {String} mapped event
 */

Events.prototype.map = function(type) {
	return this.isTouch ? (mapper[type] || type) : type;
};


/**
 * Remove all listeners.
 * @api public
 */

Events.prototype.destroy = function() {
  for(var l = this.listeners.length; l--;) {
    var listener = this.listeners[l];
    ev.off(listener[0], listener[1], listener[2], listener[3]);
  }
  this.listeners = [];
};

