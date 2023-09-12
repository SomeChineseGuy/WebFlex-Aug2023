console.log('top of the file');

let i = 0

const interval = setInterval(() => {
  console.log('Hello!');
  i ++
  if(i > 10) {
    clearInterval(interval)
  }
}, 1000)

console.log('bottom of the file');