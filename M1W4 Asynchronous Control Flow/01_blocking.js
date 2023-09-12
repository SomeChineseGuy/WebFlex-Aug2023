console.log('Top file');
const startTime = new Date().getTime();

for(let i = 0; i < 1000; i ++) {
  const date = new Date();
  console.log(date);
}

const endTime = new Date().getTime();
console.log(endTime - startTime);

console.log('Bottom file');