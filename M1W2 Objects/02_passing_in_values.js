// let num = 7;

// console.log('before the function', num);
// function changeNum(num) {
//   num = 10;
//   console.log('inside of the function', num);
// }

// changeNum(num);
// console.log('after the funciton', num);

let newStudent = {
  name: 'Alice',
  isGrad: false
}

console.log('Before Function', newStudent);

function changeName(obj) {
  obj.name = 'Steve';
  console.log(obj);
}

changeName(newStudent);

console.log('After Function', newStudent);



// let newStudent2 = newStudent;

let newStudent2 = {
  // name: 'Alice',
  // isGrad: false
  ...newStudent
};

console.log('1',newStudent);
console.log('2',newStudent2);

newStudent2.name = 'Joe';

console.log('1',newStudent);
console.log('2',newStudent2);

// let username = 'Joe';

// let username2 = username;

// console.log(username);
// username2 = 'Steve';
// console.log(username);

let arr = [1,2,3]
let arr2 = arr;

console.log('1', arr);
console.log('2', arr2);

arr2[0] = 10;

console.log('1', arr);
console.log('2', arr2);

