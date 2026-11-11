
// (1)
// console.log("Welcome to JavaScript Programming!");

// (2)
// let accountBalance = 500;
// console.log (accountBalance)
// accountBalance = 450;
// console.log (accountBalance)

// (3)
// let the variables value can be changed reassigned later.
// const the variables value cannot be reassigned after it is declared.
// let money = 30;
// console.log (money) 
// money = 20;
// console.log (money)

// const pi = 3.14159;
// pi = 3.14;

// (4)
// let gameScore = 2;
// console.log (gameScore)
// const hosiID = 12345;
// const userName = "Hosi"; //string//
// console.log(hosiID);
// console.log(userName);
// hosiName = "Samson";

// (5)

// let firstName = "Sarah";
// let lastName = "Connor";

// let fullName = `${firstName} ${lastName}`;
// let fullName = firstName + " " + lastName;
// console.log(fullName);

// (6)
// let firstName = "Sarah";
// let lastName = "Connor";

// let fullName = `${firstName} ${lastName}`;

// console.log(fullName);

// (7)
// let user = "Alex";
// let points = 150;

// let message = `Hello ${user}, you have ${points} rewards points!`;

// console.log(message);

//
// let user = "hosi"
//  let points = 200;

//  let message = `Hello ${user}, you have ${points} rewards points`;
// console.log (message)

// (8)
// let itemPrice = 25;
// let quantity = 3;
// let tax = 4.5;

// let grandTotal = (itemPrice * quantity) + tax;

// console.log(grandTotal);

// itemPrice * quantity
// → 25 × 3 = 75
// 75 + tax
// → 75 + 4.5 = 79.5

// (9)
// let score = 0;

// score = score + 10;
// score += 10;
// score++;

// console.log(score);
////
// 0
// ↓ +10
// 10
// ↓ +5
// 15
// ↓ +1
// 16


// (10)
// let age = "20";

// console.log(age >= 18);
// console.log(age == 20);

// //////
// console.log(age === 20); 
// console.log(age > 18);
// console.log(age < 16);

// (11)
// let age = 20;

// console.log(age === 20);

// /////
// console.log(20 > 10);   // true
// console.log(20 < 10);   // false
// console.log(20 === 20); // true
// console.log(20 === 15); // false

// (12)
// let accountBalance = 500;
//  accountBalance = 200;
// let itemCost = 300;

// if (accountBalance >= itemCost) {
//     console.log("Purchase successful!");
    
// } else {
//     console.log("Insufficient funds. Please add money.");
// }

// (13)
// let userRole = "admin";
// userRole = "Editor"
// if (userRole === "admin") {
//     console.log("Full access granted.");
// } else if (userRole === "editor") {
//     console.log("Edit access granted.");
// } else {
//     console.log("Read-only access.");
// }


// (14)
// let freeShippingThreshold = 50.00;
// let cartSubtotal = 74.99;

// if (cartSubtotal >= freeShippingThreshold) {
//     console.log("Free Express Shipping!");
// } else {
//     console.log("Add more items to unlock free shipping.");
// }


// (15)
// String
// let name = "Elena";

// // Number
// let count = 42;

// // Boolean
// let isActive = true;

// // Null
// let data = null;

// // Undefined
// let result;

// console.log(typeof name, typeof count ,data, isActive);
// console.log(typeof Name);
// console.log(typeof count);
// console.log(typeof isActive);
// console.log(typeof data);
// console.log(typeof result);

// (16)
// Primitive 
// let name = "Elena";     // String
// let age = 25;           // Number
// let active = true;      // Boolean

// Non-primitive
// let fruits = ["Apple", "Banana", "Orange"];
// console.log(fruits);
// console.log(fruits[0]);
// console.log(fruits[2]);

// (17)
// null
// let selectedUser = null;
// selectedUser = "Elena";
// console.log(selectedUser);

// undefined
// let name;
// name = "Elena";
// console.log(name);

// (18)
// Array
// let fruits = ["Apple", "Banana", "Orange"];

// console.log(fruits);


// Object
// let person = {
//     name: "Elena",
//     age: 25
// };

// console.log(person);


// Date Object
// let today = new Date();

// console.log(today);

// (19)
// let cartSubtotal = 0;
// let item1Price = 29.99;
// let item2Price = 45.00;

// cartSubtotal = cartSubtotal + item1Price;
// cartSubtotal = cartSubtotal + item2Price;

// console.log(cartSubtotal);

// (20)
// let cartSubtotal = 74.99;
// let taxRate = 0.08;
// let userAccountBalance = 100.00;

// let taxAmount = cartSubtotal * taxRate;

// let finalTotal = cartSubtotal + taxAmount;

// if (userAccountBalance >= finalTotal) {
//     userAccountBalance = userAccountBalance - finalTotal;
//     console.log("Payment Successful");
// } else {
//     console.log("Payment Declined");
// }

// let cartSubtotal = 74.99;
// let taxRate = 0.08;
// let userAccountBalance = 60.00;

// let taxAmount = cartSubtotal * taxRate;

// let finalTotal = cartSubtotal + taxAmount;

// if (userAccountBalance >= finalTotal) {
//     userAccountBalance = userAccountBalance - finalTotal;
//     console.log("Payment Successful");
// } else {
//     console.log("Payment Declined");
// }
