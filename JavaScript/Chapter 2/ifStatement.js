const prompt = require("prompt-sync")();

// let age = 17;
// console.log(typeof age);

// if (age >= 18) {
//   console.log("You are an adult person.");
// } else if (age >= 13 && age <= 17) {
//   console.log("You are teenager.");
// } else {
//   console.log("You are not an adult person.");
// }

// let name = prompt("What is your name?");

// console.log(`Welcome ${name} to class`);

let age = Number(prompt("Enter your age: "));

if (age === 18) {
  console.log("You are an adult person.");
} else if (age >= 13 && age <= 17) {
  console.log("You are teenager.");
} else if (age <= 12 && age > 0) {
  console.log("You are a child.");
} else if (age > 18) {
  console.log("Gobizkat");
} else {
  console.log("You are not an adult person.");
}

// if (grade >= 90 && grade <= 100) {
//   console.log("A");
// } else if (grade >= 80) {
//   console.log("B");
// } else if (grade >= 75) {
//   console.log("C");
// } else if (grade >= 70) {
//   console.log("D");
// } else {
//   console.log("F");
// }
