/**
 * Dependencies
 */

var sewer = require('sewer');



/**
 * Expose 'Gully'
 */

module.exports = Gully;


/**
 * Event plugin constructor.
 * 
 * @param {Object} view event plugin scope
 * @api public
 */

function Gully(view){
  if(!(this instanceof Gully)) return new Gully(view);
  this.view = view;
  this.listeners = [];
}



/**
 * Listen events.
 * 
 * @param {HTMLElement} node 
 * @param {String} type event's type
 * @param {String} fn view's callback name
 * @param {String} capture useCapture
 * @api public
 */

Gully.prototype.on = function(node, type, fn, capture) {
  var _this = this,
     cb = function(target, e) {
      _this.view[fn].call(_this.view, target, e, node); //we should pass target
     };
  //todo: event should return the node as well...it's too complicated
  this.listeners
    .push([node].concat(sewer.bind(node, type, (typeof fn === 'function') ? fn : cb, (capture === 'true'))));
};



/**
 * Remove all listeners.
 * @api public
 */

Gully.prototype.destroy = function() {
  for(var l = this.listeners.length; l--;) {
    var listener = this.listeners[l];
    sewer.unbind(listener[0], listener[1], listener[2], listener[3]);
  }
  this.listeners = [];
};

