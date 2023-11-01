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
  {{} == not 
  {{{{{}}}}} === balance
  
  edges
  - Check the first item to see if it's }, if it is return false
  - Check the last item to see if it is { if return false
  - Check if the array is an even number, if not return false

  We convert it into an array then
  We loop over the items 

  if state item === }
  counter += 1
  if state item === {
  counter2 += 1

  if the first item and the last item is a match move to the next item
  obj = {
    "}": 0,
    "{": 1
  }

  obj["}"] > obj["{"] return false

  How should we check for true?
  end of the loop if they are equal return true else false

  2 empty array and compare the lenght of the array 
  arr1 = [{{{]
  arr2 = [}}] 
  if at any point arr2 > arr1 return false
  this will equal false because the lenght does no match

  arr1 = []
  arr2 = [}]
*/

const isBalanced = (str) => {
  const newArr = str.split("")
  const arr1 = []
  const arr2 = []
  for(let item of newArr) {
    item === "{" ? arr1.push(item) : arr2.push(item)
    if(arr2.length > arr1.length) return false
  }
  return arr2.length === arr1.length
}

console.log(isBalanced("{{{}}")) // not 
console.log(isBalanced("{{}}")) // yes 
console.log(isBalanced("{}}}")) // not 
console.log(isBalanced("}{}{}}")) // not 