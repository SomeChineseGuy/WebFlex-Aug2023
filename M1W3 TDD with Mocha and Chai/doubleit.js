// this function is going to take in a number and double it
// num = 2 
// return 4

const doubleIt = (num) => {
  if(!num) {
    return null;
  }
  return num * 2;
}

module.exports = doubleIt;