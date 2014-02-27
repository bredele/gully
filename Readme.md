# Events brick

  Cross browser events plugin for [lego](http://github.com/bredele/lego). 

## Installation

with [component](http://github.com/component/component):

    $ component install bredele/events-brick

with [nodejs](http://nodejs.org):

    $ npm install events-brick

## Advantages

  - clean separation of concerns

  	Because you listen events directly in your HTML (dom or template), 
		you don't need to edit both your HTML and JavaScript when you want 
		to change something.

  - Event mapping for reactive user experience

  	By default, this plugin map desktop browser events (such as click, 
		mousedown/up/move) with touch events (such as touchstart/end/move) 
		if you are on a mobile device.

  - Event delegation and filtering


## Usage

First, add the plugin to your view (see [lego](http://github.com/bredele/lego) to know more about views):


```js
var events = require('events-brick');

view.add('data-event', events({
  handler : function() {
    //do something on click
  }
}));

```

## Basic

See [examples](https://github.com/bredele/events-brick/tree/master/test) to see live.

```html
<button data-event="on:click, handler">click</button>
```

  Execute `handler` on click (or *touchend* if mobile).

```html
<button data-event="on:click, handler, true">click</button>
```

  Use capture.

Every handler get the event target (cross browser), the event and the anchor node as arguments.

### Delegation

```html
<ul data-event="on:click .clickable,handler">
  <li class="clickable">clickable</li>
  <li>nothing</li>
</ul>
```

  Execute `handler` only when clicked on an child DOM with the class `clickable`.

### Filtering

```html
<input data-event="on:keypress > 13, handler">
```

  Execute `handler` only when enter is pressed.


## Standalone

This component is trivial enough to be reused outside of [Lego](http://github.com/bredele/lego).

```js
var events = require('events-brick');

//execute obj.handler on click
events(obj).on(document.body, 'click', 'handler');

```

## License

  MIT
