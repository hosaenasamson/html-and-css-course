// Functions:- are blocks of code that can be defined once and executed multiple times. They help in organizing code, making it reusable, and improving readability. In JavaScript, functions can be defined using the `function` keyword or as arrow functions.

// console.log('Welcome Hossy');
// console.log("How are you doing? Hossy");

// console.log('Welcome Abiti');
// console.log("How are you doing? Abiti");

// console.log('Welcome Helen');
// console.log('How you doing? Helen');

// console.log('Welcome Jossy');
// console.log("How are you doing? Jossy");

let studentName = "Hossy";

// console.log(`Welcome ${studentName}!`); // Hossy

studentName = "Abiti";

// console.log(`Welcome ${studentName}!`); // Abiti

function greetingStudent(name) {
  console.log(`Welcome ${name}!`);
  console.log(`How are you doing? ${name}`);
}

// greetingStudent("Hossy");
// greetingStudent("Abiti");
// greetingStudent("Asefash");
// greetingStudent("Helen");
// greetingStudent("Jossy");
// greetingStudent("Abel");
// greetingStudent("Amanuel");

function addThreeNumbers(num1 =0, num2 = 0, num3 =0) {
  let sum = num1 + num2 + num3;
  console.log(`The sum of ${num1}, ${num2} and ${num3} is: ${sum}`);
}

addThreeNumbers(6, 5, 7);
addThreeNumbers(8 , 11 );
// addThreeNumbers(8, 45);
// addThreeNumbers(50, 10, 20);
