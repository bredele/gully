var event = require('event');
var delegate = require('delegate');

/**
 * Expose 'Event plugin'
 */

module.exports = Event;


/**
 * Event plugin constructor
 * @param {Object} view event plugin scope
 * @api public
 */

function Event(view){
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
  event.bind(node, type, function(e){
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