# ember-require-module

[![Build Status](https://travis-ci.org/offirgolan/ember-require-module.svg)](https://travis-ci.org/offirgolan/ember-require-module)
[![npm version](https://badge.fury.io/js/ember-require-module.svg)](http://badge.fury.io/js/ember-require-module)

Dynamically require modules

## Installation

```
ember install ember-require-module
```


## Looking for help?

If it is a bug [please open an issue on GitHub](http://github.com/offirgolan/ember-require-module/issues).


## Usage

```js
import requireModule from 'ember-require-module';

const moment = requireModule('moment');

// requireModule will return undefined if moment is not found
assert('MomentJS is required!', moment);


// Dynamically require modules when needed
function runTask(taskName, ...params) {
  let task = requireModule(`my-addon/tasks/${taskName}`);

  assert(`The task ${taskName} does not exist.`, task);

  return task.run(...params);
}

// import a named export from a module
const THING = requireModule('path-to-module', 'THING');
```


## Compatibility

See the [Changelog](CHANGELOG.md)

* Ember.js v3.24 or above
* Ember CLI v3.24 or above
* Node.js v12 or above


## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.


## License

This project is licensed under the [MIT License](LICENSE.md).
