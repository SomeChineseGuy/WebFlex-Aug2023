const sayHello = (props) => {
  const newArr = props.arr.map((num) => {
    return num + 10
  })
  
  return `Hello, ${props.name}! Your number is ${props.num}`
}

sayHello({name: "Alvin", num: 100, arr: [1,2,3,4,5]})
sayHello({name: "Steve", num: 10, arr: [1,2,3,4,5]})
sayHello({name: "Alvin", num: 100, arr: [1,2,3,4,5]})