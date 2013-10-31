
/**
 * Dependencies
 */

var ev = require('event'),
    delegate = require('delegate');

/**
 * Map touch events.
 * @type {Object}
 * @api private
 */

var mapper = {
	'click' : 'touchstart',
	'mousedown' : 'touchstart',
	'mouseup' : 'touchend',
	'mousemove' : 'touchmove'
};


/**
 * Expose 'Event plugin'
 */

module.exports = Event;


/**
 * Event plugin constructor
 * @param {Object} view event plugin scope
 * @api public
 */

function Event(view, isTouch){
  this.view = view;
}

/**
 * Listen events.
 * @param {HTMLElement} node 
 * @param {String} type event's type
 * @param {String} callback view's callback name
 * @param {String} capture useCapture
 * @api private
 */

Event.prototype.on = function(node, type, callback, capture) {
  var _this = this;
  ev.bind(node, type, function(e){
    _this.view[callback].call(_this.view, e, node);
  }, (capture === 'true'));
};


/**
 * Event delegation.
 * @param {HTMLElement} node 
 * @param {String} selector
 * @param {String} type event's type
 * @param {String} callback view's callback name
 * @param {String} capture useCapture
 * @api private
 */

Event.prototype.delegate = function(node, selector, type, callback, capture) {
  var _this = this;
  delegate.bind(node, selector, type, function(e){
    _this.view[callback].call(_this.view, e, node);
  }, capture);
};