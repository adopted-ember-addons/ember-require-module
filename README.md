# ember-require-module

[![Build Status](https://travis-ci.org/offirgolan/ember-require-module.svg)](https://travis-ci.org/offirgolan/ember-require-module)
[![npm version](https://badge.fury.io/js/ember-require-module.svg)](http://badge.fury.io/js/ember-require-module)

Easily require a module which will silently fail if it is not found.

## Installation

```
ember install ember-require-module
```

## Helpful Links

- ### [Changelog](CHANGELOG.md)

## Looking for help?
If it is a bug [please open an issue on GitHub](http://github.com/offirgolan/ember-require-module/issues).

## Usage

```js
import requireModule from 'ember-require-module';

const moment = requireModule('moment');

// requireModule will return undefined if moment is not found
assert('MomentJS is required!', moment);


// Dynamically require modules when needed
function runTask(task, ...params) {
  let task = requireModule(`my-addon/tasks/${task}`);

  assert(`The task ${task} does not exist.`, task);

  return task.run(...params);
}

// import a named export from a module
const THING = requireModule('path-to-module', 'THING');
```
