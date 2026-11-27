let arrayMark = [89, 95, 91, 93, 100, 99];
let englishMark = 89;
let bonusMark = 2 + arrayMark;
// console.log(bonusMark);

//map , reduce , find , sort , reverse , forEach , filter
// Map
let bonus = arrayMark.map((a) => {
  return a + 2;
});
// console.log(bonus);

// reduce

let totalMark = arrayMark.reduce((a, b) => {
  return (a += b);
});
// console.log(totalMark);

// forEach
let sum = 0;
let eachMark = arrayMark.forEach((mark) => {
  sum += mark;
});

// console.log(sum);
// for loop
// array:- for of
// console.log(arrayMark.length);
// for (let mark of arrayMark) {
//   console.log(mark);
// }
// object:-

let markHossy = {
  english: 89,
  math: 95,
  socialStudy: 91,
  science: 93,
  sport: 100,
  lifSkill: 99,
};

// for in loop method
// for (let key in markHossy) {
//   console.log(markHossy[key]);
// }

// Output both properties and value

const both = Object.entries(markHossy);
// console.log(both);

// Output only properties of object
const markKey = Object.keys(markHossy);
// console.log(markKey);

// Output only values of object
const markValue = Object.values(markHossy);
// console.log(markValue);

function bonusObject(point) {
  return Object.values(point).map((a) => a + 2);
}
// console.log(bonusObject(markHossy));

let markAbiti = {
  english: 93,
  math: 79,
  socialStudy: 97,
  science: 83,
  sport: 100,
  lifSkill: 99,
};

// let abiti = Object.values(markAbiti);
// console.log(abiti);

console.log(bonusObject(markAbiti));
