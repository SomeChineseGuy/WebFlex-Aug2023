const obj = { 
  username: "Joe",
  hello: () => {
    return 'hello Joe'
  }
}

console.log(obj.hello());

class Rectangle {
  // blueprint of the class
  constructor(length, width) {
    this.length = length
    this.width = width
  }

  area() {
    return this.length * this.width
  }

  printName() {
    return "Rectangle"
  }
}

const myRectangle = new Rectangle(4, 3)
console.log(myRectangle.area());

class Prism extends Rectangle {
  constructor(length, width, height) {
    super(length, width)
    this.height = height
  }

  area() {
    return this.length * this.height * this.width
  }
}

const myPrism = new Prism(3, 4, 5)
console.log(myPrism.printName());
console.log(myPrism.area());