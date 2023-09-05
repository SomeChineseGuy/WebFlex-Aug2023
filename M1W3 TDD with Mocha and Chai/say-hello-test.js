const assert = require('assert');
const sayHello = require('./say-hello');

const actual = sayHello('Ryan');
const expected = "Hello there Ryan";

console.log(__filename);
console.log(__dirname);
// assert.equal(1, "1");
assert.strictEqual(1, 1);

assert.strictEqual(actual, expected);