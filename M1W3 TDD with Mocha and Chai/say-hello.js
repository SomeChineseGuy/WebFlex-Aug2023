const sayHello = (name ) => {
  // console.log(`Hello there ${name}`);
  return `Hello there ${name}`;
}

// const actual = sayHello('Ryan');
// const expected = 'Hello there Steve';

// console.log(actual === expected);

// module.exports = [sayHello]
// module.exports = {
//   sayHello: sayHello
// }

console.log('Hello');

module.exports = sayHello;