// Variable (ክንዲ ስም)፥-  is a named storage for data. Variables can be declared using var, let, or const keywords. var name = "Alice"; let age = 25; const isStudent = true;

// ንስኺ = ኣቢቲ
// ንስኻ = ሆሲ
// ኣነ = ኣብርሃም

// Var old version of declaring variables, function-scoped, can be redeclared and updated.

// Let is a newer version of declaring variables, block-scoped, can be updated but not redeclared within the same scope.

// Const is used to declare variables that cannot be reassigned, block-scoped, must be initialized at the time of declaration.

// Data types are the different types of values that can be stored and manipulated in a programming language. In JavaScript, there are several data types, including:

// String is a sequence of characters enclosed in single ' ' or double quotes " ". // text

let nameStudent = "John Doe"; // String double quotes

// console.log(nameStudent);
// console.log(typeof nameStudent);

let country = "Ethiopia"; // String single quotes

// console.log(country);
// console.log(typeof country);

// Numbers are numeric values that can be integers or floating-point numbers. // numbers

let ageStudent = 20; // Integer

// console.log(ageStudent);
// console.log(typeof ageStudent);

let height = 1.79; // Floating-point number
//height = 1.82; // Updating the value of height

// console.log(height);
// console.log(typeof height);

const pi = 3.14; // Floating-point number

// console.log(pi);
// console.log(typeof pi);

// Boolean represents a logical entity and can have two values: true or false. // true or false

let isStudent = true; // Boolean true

// console.log(isStudent);
// console.log(typeof isStudent);

let isCompleted = false; // Boolean false

// console.log(isCompleted);
// console.log(typeof isCompleted);

// Null is a special value that represents the absence of any object value.

let userName = null;

// console.log(userName);
// console.log(typeof userName);

// Undefined is a primitive value automatically assigned to variables that have just been declared, or to formal arguments for which there are no actual arguments.

let userAge;

// console.log(userAge);
// console.log(typeof userAge);

// Array is a special type of object used for storing multiple values in a single variable. Arrays are created using square brackets [] and can hold values of different data types. [1, 2, 3, "four", true]

let numbers = [156, 29, 83, 34, 1205]; // Array of numbers
// console.log(numbers);
// console.log(typeof numbers);

let kutsri = 40; // Array of kutsri
// console.log(kutsri);
// console.log(typeof kutsri);

let temharayShm = ["Hossy", 23, ["hossysam@gmail.com", 'Addis Abeba', "+2519123456"],['Git', 'HTML AND CSS' , 'JavaScript'] , true]; // Array of strings

// console.log(temharayShm);
// console.log(typeof temharayShm);

// Object is a collection of properties, where each property is defined as a key-value pair. Objects are created using curly braces {}. { name: "John", age: 30, isStudent: true }

let studentName = {
  name: "Hossy",
  age: 23,
  address: {
    email: "hossysam@gmail.com",
    location : "Addis Ababa, Ethiopia",
    phone: "+251 912 345 678",
  },
  courseCover:{
    firstCourse: "Git",
    secondCourse: 'HTML and CSS',
    thirdCourse: 'JavaScript'
  },
  isStudent: true,
};

// console.log(studentName);

let buyer = {
  name: "Hossy",
  age: 23,
  address: {
    email: "hossysam@gmail.com",
    location : "Addis Ababa, Ethiopia",
    phone: "+251 912 345 678",
  },
  vegetables:{
    onion: 2,
    potato: 3,
    tomato: 2
  },
  fruits: {
    mango: 1,
    papaya: 2,
    waterMelon: 3,
    lemon: 0.5
  },
  milkDairy: {
    milk: 1,
    cheese: 1,
    butter: 2
  },
  butchery: {
    meat: 3,
    boneSaw: 1,
    chicken: 1.5
  },
  isPaid: true 
};

// console.log(buyer);

// Date type:- a built-in JavaScript object used to work with dates, times, years, months, hours, and timestamps in web applications.



const today = new Date();

console.log(today);
console.log(typeof today);

console.log(today.getFullYear());
console.log(today.getHours());
console.log(today.getDay());
console.log(today.getDate());
console.log(today.getMonth() + 1);
const monthName = new Date().toLocaleString('en-US', { month: 'long' }); // Returns "September"

console.log(monthName);

const fullDayName = today.toLocaleDateString('en-US', { weekday: 'long' });

console.log(fullDayName);

