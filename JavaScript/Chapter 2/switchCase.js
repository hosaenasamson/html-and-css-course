const prompt = require("prompt-sync")();

// let day = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday";

// switch (day) {
//   case "Monday":
//   case "Wednesday":
//   case "Friday":
//     console.log("Programming class");
//     break;
//   case "Tuesday":
//     console.log("Swimming class");
//     break;
//   case "Thursday, Sunday":
//     console.log("Coding class");
//     break;
//   case "Thursday":
//     console.log("Basketball class");
//     break;
//   case "Saturday":
//     console.log("Family time");
//     break;
//   case "Sunday":
//     console.log("Worship time");
//     break;
//   default:
//     console.log("Invalid day");
// }

const operator = prompt('Enter operator (+, -, *, /): '); // Try changing this to "+", "-", "*", or "/"
const num1 = Number(prompt('Enter first number: '));
let num2 = Number(prompt('Enter second number: '));

if (operator === "/") {
  while (num2 === 0) {
    console.log("❌ Error: Division by zero is not allowed.");
    num2 = Number(prompt('Enter a non-zero second number: '));
  }
}

let result;

switch (operator) {
  case "+":
    result = num1 + num2;
    console.log(`Result: ${num1} + ${num2} = ${result}`);
    break;
    
  case "-":
    result = num1 - num2;
    console.log(`Result: ${num1} - ${num2} = ${result}`);
    break;
    
  case "*":
    result = num1 * num2;
    console.log(`Result: ${num1} * ${num2} = ${result}`);
    break;
    
  case "/":
    result = num1 / num2;
    console.log(`Result: ${num1} / ${num2} = ${result}`);
    break;
    
  default:
    console.log("❓ Invalid operator! Please use +, -, *, or /.");
    break;
}
