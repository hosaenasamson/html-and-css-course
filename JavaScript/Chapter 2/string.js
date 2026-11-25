// Strings are used to store text. In JavaScript, strings are surrounded by either single or double quotes.

// let asker = `Erick`;

// console.log(`Welcome ${fullName}`);

// console.log(`${asker}: How are you?`);

// console.log(`${fullName}: said, 'I'm doing well.'`);

//1)  length method:- to know character length of a string, use the built-in length property.

// console.log(fullName);

// console.log(fullName.length);

// let name = "aci2345";

// console.log(name.length);

// if ( name.length <= 6) {
//   console.log("Please enter password more than 6 characters");
// } else {
//   console.log(`Welcome ${name}`);
// }

// 2) indexOf() method:- The indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string. This method returns -1 if the value to search for never occurs.

// console.log(fullName);

// console.log(fullName.length);

// console.log(fullName.indexOf('s'));

//3) charAt() method:- The charAt() method returns the character at a specified index (position) in a string.

// console.log(fullName.charAt(0));

//4) toUpperCase() method:- The toUpperCase() method converts a string to uppercase letters.

// console.log(fullName.toUpperCase());

// let firstLetter = fullName.charAt(0).toUpperCase();

// console.log(firstLetter);

// let remainingLetters = fullName.slice(1);

// console.log(remainingLetters);

// console.log(firstLetter  + remainingLetters);

// 5) slice() method:- The slice() method extracts a part of a string and returns the extracted part in a new string. The method takes 2 parameters: the starting index and the ending index (the end index is not included).

//6) toLowerCase() method:- The toLowerCase() method converts a string to lowercase letters.

// let muluHasab = "Hello, my name is Erick. He is swimming.";

// console.log(muluHasab);
// console.log(muluHasab.toLowerCase());
// console.log(muluHasab.toUpperCase());

// console.log(muluHasab.slice(7));

// 7) replace() method:- The replace() method replaces a specified value with another value in a string.

// let fullName = "Alice-James";

// let replaceName = fullName.replace("ice", "hossy");

// console.log(replaceName);

// let newmuluHasab = muluHasab.replace("Hello", "Selamat");
// console.log(newmuluHasab);

// let another = muluHasab.replaceAll("is", "Merhaba");
// console.log(another);

// A = 01000001
// a = 01100001

// 8) includes() method:- The includes() method returns true if a string contains a specified value, otherwise it returns false.

// console.log(muluHasab.includes("Erick"));  //True
// console.log(muluHasab.includes("erick")); //Flase

//9) trim() method:- The trim() method removes whitespace from both ends of a string.

let studentName = "   Erick   ";

// console.log(studentName);
// console.log(studentName.length);
// console.log(studentName.trim()); // Delete unnecessary spaces from both ends of the string
// console.log(studentName.trimStart()); // Delete unnecessary spaces from start of the string
// console.log(studentName.trimEnd()); // Delete unnecessary spaces from end of the string

// 10) split() method:- The split() method splits a string into an array of substrings.

// let myName = "Erick, James, Alice, Bob";

// console.log(myName);

// let myNameArray = myName.split(", ");

// console.log(myNameArray);

let text = "HELLO WORLD";
let char = text.charAt(0);

console.log(char);

const name = "W3Schools";
let letter = name.at(-2);
console.log(letter);
