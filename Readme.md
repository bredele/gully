# event-plugin

  Event [plugin](https://github.com/bredele/data-binding).

## Installation

    $ component install bredele/event-plugin


## Advantages

  - clean separation of concerns

  	Because you listen events directly in your HTML (dom or template), 
		you don't need to edit both your HTML and JavaScript when you want 
		to change something.

  - Event mapping for reactive user experience

  	By default, this plugin map desktop browser events (such as click, 
		mousedown/up/move) with touch events (such as touchstart/end/move) 
		if you are on a mobile device.

  - Event delegation



## Usage

### Initialization

Initialize the plugin with an object handler (provides handler functions)
and an optional boolean to use touch events (true by default).

```js
var EventPlugin = require('event-plugin');
var plugin = new EventPlugin({}, /** false **/);
```


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

  The MIT License (MIT)

Copyright (c) 2014 Olivier Wietrich <olivier.wietrich@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
