// // looping through arrays: c-style 
// const arr = [10, 20, 30, 40]
// // for(let i = 0; i < arr.length; i++) {
// //   console.log(i);
// //   console.log(arr[i]);
// // }

// // for of loop
// for(let item of arr) {
//   console.log(item);
// }

// // for in loop
// for(let item in arr) {
//   console.log(item);
// }

// arr.forEach(() => {

// })

// arr.map(() => {

// })

// arr.includes()
// arr.reduce()
// arr.find()


const username = {
  name: 'Alice',
  favNum: 7,
  email: "alice@alice.com",
  subjects: {
    value: 'math',
    score: {
      testOne: 100,
      testTwo: 80
    }
  }
}

// console.log(username.values);
// console.log(username['values']);

for(let values in username) {
  // console.log("key",values);
  console.log("value",username[values]);
  if(username[values] instanceof Object) {
    for(let keys in username[values]) {
      console.log(username[values][keys]);
    }
  }
}