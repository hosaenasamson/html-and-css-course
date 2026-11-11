const prompt = require("prompt-sync")()

let age = Number(prompt("Enter your age:"));
if (age >0 && age <13) {
    console.log("Child");
} else if (age >= 13 && age <=19) {
    console.log("Teenager");
} else if (age >= 19 && age <=64) {
    console.log("Adult");
} else if (age >64 ){
    console.log("Senior");
} else{
    console.log("Input error")
} 10

// 3///
// let number = Number(prompt("Enter an integer: "));

// if (number % 2 === 0) {
//     console.log("Even");
// } else {
//     console.log("Odd");
// }3


// 4 //


// let score = 80;

// if (score >= 90) {
//     console.log("Grade A");
// }
// else if (score >= 80) {
//     console.log("Grade B");
// }
// else if (score >= 70) {
//     console.log("Grade C");
// }
// else if (score >= 60) {
//     console.log("Grade D");
// }
// else {
//     console.log("Grade F");
// }

// 5 //


// let year = 2024;

// if (year % 400 === 0) {
//     console.log("Leap Year");
// }
// else if (year % 100 === 0) {
//     console.log("Not a Leap Year");
// }
// else if (year % 4 === 0) {
//     console.log("Leap Year");
// }
// else {
//     console.log("Not a Leap Year");
// }

// 6 //

// let day = Number(prompt("Enter a number from 1 to 7: "));

// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid number");
// }

// 7 //

// let num1 = 10;
// let num2 = 5;
// let operator = "+";

// switch (operator) {

//     case "+":
//         console.log(num1 + num2);
//         break;

//     case "-":
//         console.log(num1 - num2);
//         break;

//     case "*":
//         console.log(num1 * num2);
//         break;

//     case "/":
//         console.log(num1 / num2);
//         break;

//     default:
//         console.log("Invalid operator");
// }

// 8 //

// let color = prompt("Enter traffic light color: ");
// color = color.toLowerCase();

// switch (color) {
//     case "red":
//         console.log("Stop");
//         break;

//     case "yellow":
//         console.log("Slow down");
//         break;

//     case "green":
//         console.log("Go");
//         break;

//     default:
//         console.log("Invalid traffic light color");
// }


// 9 //


// let month = Number(prompt("Enter a month number (1-12):"));

// switch (month) {
//     case 1:
//         console.log("January - 31 days");
//         break;

//     case 2:
//         console.log("February - 28 days");
//         break;

//     case 3:
//         console.log("March - 31 days");
//         break;

//     case 4:
//         console.log("April - 30 days");
//         break;

//     case 5:
//         console.log("May - 31 days");
//         break;

//     case 6:
//         console.log("June - 30 days");
//         break;

//     case 7:
//         console.log("July - 31 days");
//         break;

//     case 8:
//         console.log("August - 31 days");
//         break;

//     case 9:
//         console.log("September - 30 days");
//         break;

//     case 10:
//         console.log("October - 31 days");
//         break;

//     case 11:
//         console.log("November - 30 days");
//         break;

//     case 12:
//         console.log("December - 31 days");
//         break;

//     default:
//         console.log("Invalid month number!");
// }

// 10 //

// for (let i = 1; i <= 50; i++) {
//     console.log("Number" + i);
// }

// 11 //

// let N = Number(prompt("Enter a number:"));

// let sum = 0;

// for (let i = 1; i <= N; i++) {
//     sum = sum + i;
// }
// console.log(sum);

// 12 //

// let number = Number(prompt("Enter a number:"));

// for (let i = 1; i <= 10; i++) {
//     console.log(number + " x " + i + " = " + (number * i));
// }

// 13 //

// for (let i = 20; i >= 0; i -= 2) {
//     console.log(i);
// }

// 14 //

// let password = "";

// while (password !== "secret123") {
//     password = prompt("Enter your password:");
// }

// console.log("Welcome!");

// 15 //

// let choice;

// do {
//     console.log("1. Say Hello");
//     console.log("2. Say Goodbye");
//     console.log("3. Exit");

//     choice = Number(prompt("Choose 1, 2, or 3:"));

//     if (choice === 1) {
//         console.log("Hello!");
//     } 
//     else if (choice === 2) {
//         console.log("Goodbye!");
//     } 
//     else if (choice === 3) {
//         console.log("Goodbye! Program ended.");
//     }

// } while (choice !== 3);


// 16 //

// let secretNumber = 7;

// let guess = Number(prompt("Guess the number:"));

// while (guess !== secretNumber) {

//     if (guess > secretNumber) {
//         console.log("Too high! Try again.");
//     } 
//     else {
//         console.log("Too low! Try again.");
//     }

//     guess = Number(prompt("Guess again:"));
// }

// console.log("Correct! You guessed the number.");

// 17 // 

// let number;

// do {
//     number = Number(prompt("Enter a positive number:"));

// } while (number <= 0);

// console.log("Thank you! You entered a positive number.");

// 18 //

// for (let i = 1; i <= 20; i++) {

//     if (i % 3 === 0) {
//         continue;
//     }

//     console.log(i);
// }

// 19 //

// let names = ["Alice", "Bob", "Charlie", "Diana"];

// let searchName = prompt("Enter a name to search:");

// let found = false;

// for (let i = 0; i < names.length; i++) {

//     if (names[i] === searchName) {
//         console.log("Found!");
//         found = true;
//         break;
//     }
// }

// if (found === false) {
//     console.log("Name not found!");
// }

// 20 //

// for (let row = 1; row <= 5; row++) {

//     let line = "";

//     for (let col = 1; col <= 5; col++) {

//         line += (row * col) + "\t";

//     }

//     console.log(line);
// }