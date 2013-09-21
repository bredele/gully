# event-plugin

  Event [plugin](https://github.com/bredele/data-binding)

## Installation

    $ component install leafs/event-plugin

## Usage

see [widget](https://github.com/bredele/widget)

```js
var Event = require('event-plugin');
...
widget.plugin('event', new Event({
  test : function(){}
}));
...
```

simple event listener:

```html
<div data-event="on:click,test"></div>
```

event delegation:

```html
<ul data-event="delegate:.clickable,click,test">
  <li class="clickable"></li>
  <li></li>
  ...
</ul>
```

   

## License

  MIT
