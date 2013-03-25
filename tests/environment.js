var assert = require('chai').assert;
var _ = require('underscore');
var swigEnvironment = require('../index').swigEnvironment;

// For firefox
mocha.setup({ globals: ['getInterface'] });

describe('swigEnvironment', function() {
  it('creates a swig environment', function() {
    var swig = swigEnvironment({ underscore: _ });
    var template = swig.compile("hello, {{ something }}");
    var expectedString = "hello, world";
    var actual = template({ something: "world" });
    assert.equal(actual, expectedString);
  });
});
