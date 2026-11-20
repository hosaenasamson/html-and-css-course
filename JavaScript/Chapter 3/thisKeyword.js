const person = {
  firstName: "Alice",
  lastName: "Johnson",
  age: 32,
  fullName: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};

person.fullName();

// console.log(person.firstName + " " + person.lastName);

// console.log(person.age);
