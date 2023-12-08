const arr = [1,2,3,4,5]
const arrStr = [
  "Hello, ",
  "GoodBye, ",
  "How are you, ",
  "What time is it, "
]

// map
// filter

// map loops over an array and takes each value and "Updates" it in some way
const newArr = arr.map((num, idx) => {
  return idx
})

console.log(newArr);

const newArrStr = arrStr.map((str, idx) => {
  return str + "Alvin" + idx
})

console.log(newArrStr);

// filter returns a filtered array :D 
const filteredArr = arr.filter((num, idx) => {
  if(num % 2 === 0) {
    return num
  }
})

console.log(filteredArr);