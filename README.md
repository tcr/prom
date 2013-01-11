# <img src="http://game-icons.net/icons/lorc/originals/png/engagement-ring.png" width="32"> prom, simple node.js promises

Calls functions once a promise has been delivered.

```javascript
var prom = require('prom');

var onready = prom();
onready(console.log.bind(console, 'one'));
onready(console.log.bind(console, 'two'));

// Deliver the promise
onready.deliver('[delivered', 'args]').
// > one [delivered args]
// > two [delivered args]

// Once the promise has been delivered, the callback is called immediately.
onready(console.log.bind(console, 'three'))
// > three [delivered args]
```

## License

MIT
