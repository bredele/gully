/**
 * Dependencies
 */

var sewer = require('sewer');
var events = [
  'change',
  'blur',
  'focus',
  'input',
  'submit',
  'keypress',
  'keyup',
  'keydown',
  'mouseup',
  'mousedown',
  'mouseover',
  'dblclick',
  'click'
];


/**
 * Expose 'Gully'
 */

module.exports = Gully;


/**
 * Compose object with gully methods and hide
 * its internal properties.
 * 
 * @param  {Object} obj 
 * @api private
 */

function compose(obj) {
  var handler = new Gully(obj, false);
  //NOTE: to refactor
  obj.attach = function() {
    handler.attach.apply(handler, arguments);
  };
  obj.detach = function() {
    handler.detach.apply(handler, arguments);
  };
}


/**
 * Gully constructor.
 *
 * Examples:
 *
 *   // merge
 *   gully(obj);
 *   obj.attach(document.body, click, 'onClick', true);
 *
 *   // don't merge
 *   var handler = gully(obj, false);
 *   handler.attach(document.body, click, 'onClick', true);
 * 
 * 
 * @param {Object} obj
 * @param {Boolean} bool merge object
 * @api public
 */

function Gully(obj, bool){
  if(!(this instanceof Gully)) {
    if(bool === false) return new Gully(obj);
    return compose(obj);
  }
  this.view = obj;
  this._listeners = [];
}


// Expose sewer

Gully.attach = sewer.attach;
Gully.detach = sewer.detach;


/**
 * Brick plugin.
 * 
 * @return {Object} obj
 * @api public
 *
 * @see http://github.com/bredele/brick
 */

Gully.brick = function(obj) {
  var handler = Gully(obj);
  var cb = function(ctx, name) {
    ctx.add('on-' + name, function(node, fn) {
      handler.attach(node, name, fn);
    });
  };
  return function(ctx) {
    // add listeners for every type of events
    for(var l = events.length; l--;) {
      cb(ctx, events[l]);
    }

    //NOTE: we should off on destory

    //add global listener
    // ctx.add('on', function(node, expr) {

    // });
  };
};


/**
 * Attach event listener.
 * 
 * @param {HTMLElement} node 
 * @param {String} type event's type
 * @param {String} fn view's callback name
 * @param {String} capture useCapture
 * @api public
 */

Gully.prototype.attach = function(node, type, fn, capture) {
  var _this = this,
     cb = function(target, e) {
      _this.view[fn].call(_this.view, target, e, node); //we should pass target
     };
  //todo: event should return the node as well...it's too complicated
  this._listeners
    .push([node].concat(sewer.attach(node, type, (typeof fn === 'function') ? fn : cb, (capture === 'true'))));
};



/**
 * Remove all listeners.
 * @api public
 */

Gully.prototype.destroy = function() {
  for(var l = this._listeners.length; l--;) {
    var listener = this._listeners[l];
    sewer.detach(listener[0], listener[1], listener[2], listener[3]);
  }
  this._listeners = [];
};

