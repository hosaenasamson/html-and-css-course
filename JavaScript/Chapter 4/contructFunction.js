function addition(a, b) {
  // console.log(a + b);
  return a + b;
}

let mdmar = addition(2, 6);
// console.log(mdmar);

// Constructor function
function Subtraction(a, b) {
  ((this.a = a), (this.b = b));
  this.subtract = function () {
    return this.a - this.b;
  };
}

let mgudal = new Subtraction(9, 3);
// console.log(mgudal.subtract());

// Example with objects

function CreateStudentName(
  firstName,
  lastName,
  age,
  gender,
  courses,
  mark,
  isStudent,
) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
  this.courses = courses;
  this.mark = mark;
  this.isStudent = isStudent;
  this.getAverage = function () {
    return (
      this.mark.reduce((sum, total) => (sum += total), 0) / this.mark.length
    );
  };
}

function Car(color, brand, year, isWorking) {
  this.color = color;
  this.brand = brand;
  this.year = year;
  this.isWorking = isWorking;
  this.going = function () {
    return this.isWorking === true ? "The car is going." : "Not working!";
  };
}

let tesla = new Car("White", "Tesla", 2027, true);
console.log(tesla);
console.log(tesla.going());

let ferrai = new Car("Red", "Ferrai", 2027, false);
console.log(ferrai);
console.log(ferrai.going());
