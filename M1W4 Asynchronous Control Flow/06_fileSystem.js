const fs = require('fs');

// setTimeout(() => {
//   fs.readFile('./data1.txt', {encoding: 'utf-8'}, (err, data) =>{
//     console.log(data);
//   })
// }, 0);

// setTimeout(() => {
//   fs.readFile('./data2.txt', {encoding: 'utf-8'}, (err, data) =>{
//     console.log(data);
//   })
// }, 1);

// setTimeout(() => {
//   fs.readFile('./data3.txt', {encoding: 'utf-8'}, (err, data) =>{
//     console.log(data);
//   })
// }, 2);



// fs.readFile('./data1.txt', {encoding: 'utf-8'}, (err, data) =>{
//   console.log(data);
//   fs.readFile('./data2.txt', {encoding: 'utf-8'}, (err, data) =>{
//     console.log(data);
//     fs.readFile('./data.txt', {encoding: 'utf-8'}, (err, data) =>{
//       console.log(data);
//       fs.readFile('./data1.txt', {encoding: 'utf-8'}, (err, data) =>{
//         console.log(data);
//         fs.readFile('./data1.txt', {encoding: 'utf-8'}, (err, data) =>{
//           console.log(data);
//           fs.readFile('./data1.txt', {encoding: 'utf-8'}, (err, data) =>{
//             console.log(data);
//             fs.readFile('./data1.txt', {encoding: 'utf-8'}, (err, data) =>{
//               console.log(data);
//             })
//           })
//         })
//       })
//     })
//   })
// })

fs.readFile('./data1.txt', {encoding: 'utf-8'}, (err, data) =>{
  if(err) {
    console.log(err);
    return
  }
  console.log(data);

  fs.readFile('./data1.txt', {encoding: 'utf-8'}, (err, data) =>{
    if(err) {
      console.log(err);
      return
    }
    console.log(data);

    fs.readFile('./data1.txt', {encoding: 'utf-8'}, (err, data) =>{
      if(err) {
        console.log(err);
        return
      }
      console.log(data);
    })
  })
})