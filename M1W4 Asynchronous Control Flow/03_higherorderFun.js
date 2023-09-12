const higherOrderFunc = (callback) => {
  let user = 'Joe';
  console.log('1. before settimeout');
  setTimeout(() => {
    user = 'Steve';
    console.log('3. inside of settimeout');
    callback(user);
  }, 500)
  console.log('2. after settimeout');
  return user;
}

console.log('4. before function gets called');
const myName = higherOrderFunc((user) => {
  console.log(user, 'inside callback');
  console.log('6. inside the callback')
})

console.log(myName, 'calling the function')
console.log('5. after function gets called');