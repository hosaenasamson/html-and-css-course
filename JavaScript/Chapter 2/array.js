// Array:- is a global object used to store ordered collections of data.

// Javascript data types: boolean, null , number , object , string , undefine

// let studentNames = [
//   "Hossy",
//   "Abiti",
//   "Mike",
//   "Erick",
//   "Mulu",
//   "Aci",
//   "Abel",
//   "Taye",
//   "James",
//   "Abraham",
// ];

// for (const name of studentNames) {
//   console.log(`Welcome ${name}`);
// }

// Using index to access array elements starting from 0

// Using length method array elements starting from 1
// console.log(studentNames.length);

// To add an element to the end of an array, use the push() method.

// studentNames.push("Hadsh");

// console.log(studentNames);

// console.log(studentNames.length);

// To add in the in front of the array elements use the unshift() method.

// studentNames.unshift("Hagos");

// console.log(studentNames);

// console.log(studentNames.length);

// To remove the last element of an array, use the pop() method.

// console.log(studentNames.pop());

// console.log(studentNames);

// To remove the first element of an array, use the shift() method.

// console.log(studentNames.shift()); //Hagos
// console.log(studentNames.shift()); //Hossy
// console.log(studentNames.shift()); //Abiti
// console.log(studentNames.shift()); //Mike

// console.log(studentNames);

// for (const name of studentNames) {
//   console.log(`Welcome ${name}`);
// }

// To remove from the middle of an array method use splice() method. The first parameter is the index of the first element to remove, and the second parameter is the number of elements to remove.

// studentNames.splice(1, 1);

// console.log(studentNames);

// To remove all the elements of an array, use reassign method

// studentNames = [];

// console.log(studentNames);

// console.log(studentNames.length);

// studentNames.length = 0;

// console.log(studentNames);

// console.log(studentNames.length);

// To sort the elements of an array in alphabetical order, use the sort() method.

// studentNames.sort();

// console.log(studentNames.sort());

// studentNames.reverse();

// console.log(studentNames);

// Array function methods

// filter() method:- The filter() method creates a new array with all elements that pass the test implemented by the provided function.

// filterName = studentNames.filter((student) => student.length >= 5);

// console.log(filterName);
// console.log(filterName.sort());
// console.log(filterName.reverse());

// map() method:- method creates a new array by applying a callback function to every element of an existing array, without modifying the original array.

// let numbers = ["1", 2, 3, 4, "5", 6, 7, 8, 9, 10];

// let doubleNumbers = numbers.map((num) => num + 2);

// console.log(numbers);
// console.log(doubleNumbers);
// console.log(numbers);


// forEach(): method executes a provided function once for each array element.

let studentNames = [
  "Hossy",
  "Abiti",
  "Mike",
  "Erick",
  "Mulu",
  "Aci",
  "Abel",
  "Taye",
  "James",
  "Abraham",
];

// console.log(studentNames.sort());
// console.log(studentNames.reverse());

let firstName = "Alice";
let lastName = "James";

let fullName = firstName + " " + lastName;

// console.log(fullName);

let num1 = "3";
let num2 = 4;

let total = num2 + num1;

// console.log(total);

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let doubleNumbers = numbers.map((num) => num + 2);

// console.log(doubleNumbers);

// console.log(numbers);

// numbers.forEach((a)=> console.log(a + 2));
// console.log(numbers);

// studentNames.forEach((name) => console.log(`Welcome ${name}`));

// console.log(studentNames);

// reduce():- method executes a "reducer" callback function on each element of an array, iterating through them to accumulate and return a single output value

let vegetables = [
  { id: 6, name: "Onion", price: 23 },
  { id: 8, name: "Irish Potato", price: 4 },
  { id: 312, name: "Tomato", price: 45 },
];

// console.log(vegetables.length);

let totalPrice = vegetables.reduce((total, x) => total + x.price, 0);
// console.log(`Total price of vegetables ${totalPrice}`);
let discount = totalPrice * 0.1;
// console.log(`Discount price: ${discount} `);

let totalPaid = totalPrice - discount;
// console.log(`Customer total paid is: ${totalPaid}`);

// console.log(`Total price paid amount is: ${totalPrice}`);

let totalNumbers = numbers.reduce((total, y) => total + y, 0);
// console.log(`The total sum of the numbers is: ${totalNumbers}`);

let subjects = [
  { id: 1, name: "HTML", mark: 99 },
  { id: 2, name: "JavaScript", mark: 87 },
  { id: 3, name: "CSS", mark: 90 },
  { id: 4, name: "React", mark: 82 },
  { id: 5, name: "Node.js", mark: 78 },
  { id: 6, name: "Express", mark: 98 },
  { id: 7, name: "TypeScript", mark: 90 },
];

let totalMark = subjects.reduce((total, marks) => total + marks.mark, 0);
// console.log(`Total mark is: ${totalMark}`);

// console.log(subjects.length);

let average = totalMark / subjects.length;
// console.log(average.toFixed(2));

// console.log(subjects);

subjects.push({ id: 8, name: "Python", mark: 98 });
// console.log(subjects);

totalMark = subjects.reduce((total, marks) => total + marks.mark, 0);
// console.log(`Total mark after add is: ${totalMark}`);

// console.log(subjects.length);

average = totalMark / subjects.length;
// console.log(`Total average after add : ${average.toFixed(2)}`);

// console.log(subjects.shift());
// console.log(subjects);

totalMark = subjects.reduce((total, marks) => total + marks.mark, 0);
// console.log(`Total mark after delete is: ${totalMark}`);

// console.log(subjects.length);

average = totalMark / subjects.length;
// console.log(`Total average after delete : ${average.toFixed(2)}`);

// Slice method:- The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

let cutNumbers = numbers.slice(2, 5, "Hossy" , "Abiti");

console.log(numbers);
console.log(cutNumbers);
console.log(numbers);


// Splice method: - The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

console.log(numbers);
console.log(numbers.length);

let removedNumbers = numbers.splice(3,3 , "Selamt" , "Merhaba" , true);

// console.log(removedNumbers);
// console.log(removedNumbers.length);
console.log(numbers);
console.log(numbers.length);

console.log(numbers.includes('Selamt'))


