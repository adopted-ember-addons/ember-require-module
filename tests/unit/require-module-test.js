import Ember from 'ember';
import { module, test } from 'qunit';
import requireModule from 'ember-require-module';

module('Unit | Util | requireModule');

test('requires correct module using default export', function (assert) {
  assert.expect(1);

  try {
    assert.strictEqual(requireModule('ember'), Ember);
  } catch (e) {
    // Should never get here
    assert.ok(false);
  }
});

test('requires correct module using named export', function (assert) {
  assert.expect(3);

  assert.strictEqual(
    requireModule('dummy/tests/fixtures/sample-module', 'FOO'),
    'FOO'
  );
  assert.strictEqual(
    requireModule('dummy/tests/fixtures/sample-module', 'BAR'),
    'BAR'
  );
  assert.strictEqual(
    requireModule('dummy/tests/fixtures/sample-module', 'DERP'),
    undefined
  );
});

test('requiring incorrect module silently fails', function (assert) {
  assert.expect(1);

  try {
    assert.notOk(requireModule('some-fake-module'));
  } catch (e) {
    // Should never get here
    assert.ok(false);
  }
});
