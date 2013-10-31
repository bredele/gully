# event-plugin

  Event [plugin](https://github.com/bredele/data-binding).

## Installation

    $ component install bredele/event-plugin


## Advantages

  - clean separation of concerns 

		Because you listen events directly in your HTML (dom or template), you don't need to edit both your HTML and JavaScript when you want to change something.

  - Event mapping for reactive user experience

		By default, this plugin map desktop browser events (such as click, mousedown/up/move) with touch events (such as touchstart/end/move) if you are on a mobile device.

  - Event delegation



## Usage

### Initialization

Initialize the plugin with an object handler (provides handler functions)
and an optional boolean to use touch events (true by default).

```js
var EventPlugin = require('event-plugin');
var plugin = new EventPlugin({}, /** false **/);
...


This plugin can be used with the [view](https://github.com/bredele/view) component.

```js
var View = require('view');
var Event = require('event-plugin');

var view = new View();
view.plugin('event', new Event({
  test : function(){}
}));
view.alive(document.body);

```


### Simple event handler

```html
<div data-event="on:click,test"></div>
```

On click, the plugin will execute the `test` function of
the event handler.

You can pass an additional argument to use capture events.

```html
<div data-event="on:click,test,true"></div>
```


### Event delegation

```html
<ul data-event="delegate:.clickable,click,test">
  <li class="clickable"></li>
  <li></li>
  ...
</ul>
```

The plugin will execute the `test` function of
the event handler only when `click` on an child DOM with the class `clickable`.


   

## License

  MIT
