import { module, test } from 'qunit';
import requireModule from 'ember-require-module';

module('Unit | Util | requireModule');

test('requires correct module', function(assert) {
  assert.expect(1);

  try {
    assert.ok(requireModule('ember'));
  } catch (e) {
    // Should never get here
    assert.ok(false);
  }
});

test('requiring incorrect module silently fails', function(assert) {
  assert.expect(1);

  try {
    assert.notOk(requireModule('some-fake-module'));
  } catch (e) {
    // Should never get here
    assert.ok(false);
  }
});
