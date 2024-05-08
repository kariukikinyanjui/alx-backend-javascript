const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', function() {
  it('should return the sum of rounded a and b', function() {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('should work with negative numbers', function() {
    assert.strictEqual(calculateNumber(-1.2, -3.7), -5);
    assert.strictEqual(calculateNumber(-1.5, -3.7), -6);
  });

  it('should work with one of the numbers being 0', function() {
    assert.strictEqual(calculateNumber(0, 3.7), 4);
    assert.strictEqual(calculateNumber(1.2, 0), 1);
  });
});

