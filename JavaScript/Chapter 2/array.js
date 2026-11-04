// Array:- is a global object used to store ordered collections of data.

// Javascript data types: boolean, null , number , object , string , undefine

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
];

// for (const name of studentNames) {
//   console.log(`Welcome ${name}`);
// }

// Using index to access array elements starting from 0

// Using length method array elements starting from 1
console.log(studentNames.length);

// To add an element to the end of an array, use the push() method.

studentNames.push("Hadsh");

// console.log(studentNames);

// console.log(studentNames.length);

// To add in the in front of the array elements use the unshift() method.

studentNames.unshift("Hagos");

// console.log(studentNames);

// console.log(studentNames.length);

// To remove the last element of an array, use the pop() method.

console.log(studentNames.pop());

console.log(studentNames);

// To remove the first element of an array, use the shift() method.

console.log(studentNames.shift()); //Hagos
console.log(studentNames.shift()); //Hossy
console.log(studentNames.shift()); //Abiti
console.log(studentNames.shift()); //Mike

console.log(studentNames);

// for (const name of studentNames) {
//   console.log(`Welcome ${name}`);
// }

// To remove from the middle of an array method use splice() method. The first parameter is the index of the first element to remove, and the second parameter is the number of elements to remove.

studentNames.splice(1, 1);

console.log(studentNames);

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

filterName = studentNames.filter((student) => student.length >= 4);

console.log(filterName);
