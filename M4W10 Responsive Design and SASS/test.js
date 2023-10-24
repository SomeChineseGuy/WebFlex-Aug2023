/*
  isBalanced
  given a string of only curlys {}
  {{}}}}
  {{}}}
  {{{{}}}}
  }{}}{}


  {{}} == balance
  {{}{}} === balance
  }{{}{} === not
  {{{}} === not
  {}}{}{ === not
  {{} == not 0
  {{{{{}}}}} === balance
  { === +1
  } === -1

  Split string into array and
  Loop through array

  check the length of the array to see if it's even, if not return false
  check the first one to see if it's }, we know to return false

  equal amount of opening and close

  how do you program tic tac toe
  X = + 1
  O = - 1

  X O X + 1
  X O O - 1
  X X O + 1
  +3 -1 -1 -1
*/

const isBalanced = (str) => {
  const arr = str.split("");
  let num = 0;
  for(let item of arr) {
    item === "{" ? num += 1 : num -= 1
    if(num < 0) return false;
  }
  return num === 0
}

console.log(isBalanced("{{{}}")) // not 
console.log(isBalanced("{{}}")) // yes 
console.log(isBalanced("{}}}")) // not 
console.log(isBalanced("}{}{}}")) // not 