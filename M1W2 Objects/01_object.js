// How do we org data?
const studentOnecohort = 'Aug 21, 2023';
const studentOneName = 'Alice';
const sudentOneGrad = false;

// const studentOne = ['Aug 21, 2023', 'Alice', false];
// const studentTwo = ['Sam', false, 'Aug 21, 2023'];

const studentOne = {
  name: 'Sam',
  isGrad: false,
  cohort: 'Aug 21, 2023'
};

// console.log(studentOne.name);

// const studentTwo = {
//   cohort: 'Sept 21, 2022',
//   isGrad: true,
//   name: 'Alice'
// }

// console.log(studentTwo);
// studentTwo.name = 'Ryan';
// console.log(studentTwo);

// console.log(studentTwo.name)

// const newArr = [1, 2, 3];
// let str = 'Hello Everyone!';

// console.log(newArr[0])
// newArr[0] = 10;
// console.log(newArr)

// console.log(str);
// console.log(str[0]);
// str[0] = 'B'
// console.log(str);
// str = 'Something new!'
// console.log(str);

const studentTwo = {
  cohort: 'Sept 21, 2022',
  isGrad: true,
  name: 'Alice'
}

const studentClass = 'cohort';

console.log(studentTwo.isGrad);
console.log(studentTwo['isGrad']);

console.log(studentTwo.studentClass);
console.log(studentTwo['studentClass']);
console.log(studentTwo[studentClass]);

studentTwo.firstName = 'Alice';
delete studentTwo.name;

console.log(studentTwo);

const arrOfVid = [
  {
    title: "Love it or list it......",
    creator: 'Breakfast Television',
    viewCount: 181222,
    uploadedDate: 1119276402912,
    thumbnail: "www.img.com/1",
    isLive: false
  },
  {
    title: "lofi hip hop radio",
    creator: 'Lofi Girl',
    viewCount: 37999,
    uploadedDate: 1119276402912,
    thumbnail: "www.img.com/1",
    isLive: true
  }
]

const arr = [1, 20, 'Steve', true];
console.log(arr.includes(20));
console.log(arr.includes(100));
console.log(arr.includes('Ryan'));
console.log(arr.includes('steve'));

const username = 'ALvIn';
console.log(username.toLowerCase());

arr.find((item) => {
  return item.toLowerCase() === 'steve'
})

// for(let item of arr) {
//   if(item.toLowerCase() === 'steve') {

//   }
// }



// if(arr.includes(20)) {
//   console.log('There is a 20 in here');
// } else {
//   console.log('No 20 in this array');
// }