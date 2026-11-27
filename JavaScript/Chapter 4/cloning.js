// Cloning object

// let name = "Abiti";

// let otherName = name;

// console.log(name);
// console.log(otherName);

// otherName = "Hossy";
// console.log(name); //Abiti
// console.log(otherName); //Hossy

// Reference

let student1 = {
  name: "Alice",
  age: 29,
};

let student12 = {
  name: "James",
  age: 35,
};

console.log("ዕላማና");
console.log(student1);
console.log(student12);

console.log("Solution ");

let student2 = student1;

// console.log(student1);
// console.log(student2);

// student2.name = "James";
// student2.age = 35;

// console.log(student1);
// console.log(student2);

// Solution

let student3 = {};
for (let key in student1) {
  student3[key] = student1[key];
}

student3.name = "James";
student3.age = 35;

// console.log(student1);
// console.log(student3);

// Other method to clone object

// let student4 = Object.assign(
//   {},
//   student1,
//   // {
//   //   name: "James",
//   //     age: 35,
//   //   isStudent: true,
//   // }
// );
// console.log(student1);
// console.log(student4);

// student4.name = "Abiti";
// student4.age = 25;
// student4.isStudent = true;

// console.log(student1);
// console.log(student4);

// Spread method

let student5 = { ...student1 };
// console.log(student1);
// console.log(student5);

console.log("After copy set yours name");
student5.name = "James";
student5.age = 35;
console.log(student1);
console.log(student5);

console.log(result);
