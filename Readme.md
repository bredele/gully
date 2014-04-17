# Gully

  DOM event handler directive based on **[sewer](http://github.com/bredele/sewer)**.

  Gully has been built for **[brick](http://github.com/bredele/brick)** and **[wall](http://github.com/bredele/wall)**. However, Gully is agnostic and trivial enough to be reused seperately or with other directive-like libraries.


## Installation

with [component](http://github.com/component/component):

    $ component install bredele/gully

with [browserify](http://browserify.org/):

    $ npm install gully


<!-- ## Advantages

  - clean separation of concerns

  	Because you listen events directly in your HTML (dom or template), 
		you don't need to edit both your HTML and JavaScript when you want 
		to change something.

  - Event mapping for reactive user experience...single code

  	By default, this plugin map desktop browser events (such as click, 
		mousedown/up/move) with touch events (such as touchstart/end/move) 
		if you are on a mobile device.

  - Event delegation and filtering -->


## Standalone

```js
var events = require('gully');
var obj = {
  handler : function() {
    // do something on click
  }
};

events(obj).attach(document.body, 'click', 'handler');
```

  Gully supports event delegation, filtering, chaining and touch mapping. See [sewer](http://github.com/bredele/sewer) for more details.


## Brick

  Gully can be used as a plugin for [brick](http://github.com/bredele/brick) and allows you to declaratively attach event listeners to your dom:

JavaScript:
```js
var events = require('gully');
brick(el)
  .use(events.brick(obj));
```

HTML:
```html
<div on-click="handler"></div>
```

  > **Note:** Gully automatically map desktop events (such as click, mousedown/up/move) with touch events (such as touchstart/end/move) if you are on a mobile device.

<!-- give example delegation, etc -->


<!--   However, if you need more flexibility, you can 

JavaScript:
```js
var events = require('gully');
brick(el)
  .add('event', events.brick());
```

HTML:
```
<div event-click="handler"></div>
``` -->


## Wall

  Gully can be composed with [wall](http://github.com/bredele/wall) to attach event listeners programatically.

JavaScript:
```js
var events = require('gully');
var app = wall();

app.use(events);
app.attach(el, 'click', function() {
  // do something on click
});
```


## License

  The MIT License (MIT)

Copyright (c) 2014 Olivier Wietrich <olivier.wietrich@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
