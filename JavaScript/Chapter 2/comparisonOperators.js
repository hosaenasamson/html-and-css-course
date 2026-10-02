let number = "56"; // String
let kuxtri = 23; //  Number

// Comparison Operators: == <= >= != > < ===

let equalSign = number == kuxtri;

// console.log(equalSign);

let notEqualSign = number != kuxtri;
// console.log(notEqualSign);

let lessThanEqual = number <= kuxtri;
// console.log(lessThanEqual);

let greaterThanEqual = number >= kuxtri;
// console.log(greaterThanEqual);

// Check the strick equality

let num1 = "78"; //String
let num2 = 78; //Number

// console.log(num1 == num2); // Equality operator compare the value only

// console.log(num1 === num2); // Strick equality operator compare both the value and data type.

// Ternary operator  condition ? true_value : false_value
let averageGrade = 58;

let grade = averageGrade >= 75 ? "You passed!" : "You failed ";

// console.log(grade);

// Logical operators && -> and (ከምኡ'ውን): always output true value , || -> or  (ወይ'ከኣ): will choose only one true.

// password === "with your password " && email === "with your email"

let email = "hossysam@gmail.com";
let password = "123456";
let socialMedia = "Facebook";
let userName = "Hossy";

if (
  email === "hossysam@gmail.com" &&
  password === "123456" &&
  socialMedia === "Instagram"
) {
  console.log("Welcome");
} else {
  console.log("Please try again.");
}

if (userName === "Hossy" || socialMedia === "Instagram") {
  console.log(`Welcome ${userName}`);
} else {
  console.log(`Try again please!`);
}
