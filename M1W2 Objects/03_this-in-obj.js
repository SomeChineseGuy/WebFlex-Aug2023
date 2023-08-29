let user = {
  firstName: "Alice",
  lastName: "Wonderland",
  favNumbers: [1,2,3,4],
  fullName: function() {
    console.log(`${this.firstName} ${this.lastName}`)
  },
  showMeThis: function() {
    console.log(this);
  }
}

const copy = user;
user = null;

copy.showMeThis();
copy.fullName();

function sayHello () {
  console.log(this);
}

const sayGoodbye = () => {
  console.log(this);
}