const nums = [400, 2873, 1, 248, 3000, 280];

for(const delay of nums) {
  setTimeout(() => {
    console.log(delay);
  }, delay)
};