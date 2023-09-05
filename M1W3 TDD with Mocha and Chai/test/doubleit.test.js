// import our assertion library
const assert = require('assert');

// import the function
const doubleIt = require('../doubleit');

describe('This will test the double it function', () => {
  it('It will return 10 when given 5', () => {
    const actual = doubleIt(5);
    const expected = 10;
    assert.strictEqual(actual, expected);
  })

  it('It will return 100 when you give it 50', () => {
    const actual = doubleIt(50);
    const expected = 100;
    assert.strictEqual(actual, expected);
  })

  it('It will return 200 when you give it 100', () => {
    const actual = doubleIt(100);
    const expected = 200;
    assert.strictEqual(actual, expected);
  })

  it('It will return null if nothng is passed in', () => {
    const actual = doubleIt();
    const expected = null;
    assert.strictEqual(actual, expected);
  })
})