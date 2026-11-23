// Factory functions

function createStudentName(
  firstName,
  lastName,
  age,
  gender,
  courses,
  mark,
  isStudent,
) {
  return {
    firstName: firstName,
    lastName: lastName,
    age: age,
    gender: gender,
    courses: courses,
    mark: mark,
    isStudent: isStudent,
    getAverage: function getAverage() {
      return (
        this.mark.reduce((sum, total) => (sum += total), 0) / this.mark.length
      );
    },
  };
}
let hossy = createStudentName(
  "Hossy",
  "Samson",
  26,
  "Male",
  ["HTML", "CSS", "JavaScript"],
  [95, 83, 86],
  true,
);

// console.log(hossy);
// console.log(hossy.getAverage());

let abiti = createStudentName(
  "Abitit",
  "Samsom",
  26,
  "Female",
  ["HTML", "CSS", "JavaScript"],
  [90, 89, 96],
  true,
);

// console.log(abiti);
// console.log(abiti.getAverage().toFixed(2));

let aron = createStudentName(
  "Aron",
  "Abel",
  24,
  "Male",
  ["English", "Math", "Social Study", "Science"],
  [80, 85, 90, 95],
  true,
);

// console.log(aron);
// console.log(aron.getAverage());

function car(color, brand, year, isWorking) {
  return {
    color: color,
    brand: brand,
    year: year,
    isWorking: isWorking,
    going: function going() {
      return this.isWorking === true ? "The car is going." : "Not working!";
    },
  };
}

let tesla = car("White", "Tesla", 2027, true);
console.log(tesla);
console.log(tesla.going());

let ferrari = car("Red", "Ferrari", 2027, false);
console.log(ferrari);
console.log(ferrari.going());
