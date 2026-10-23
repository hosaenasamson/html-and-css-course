for (let i = 1; i <= 4; i++) {
  console.log(`Welcome ${i}`);
}

// for (let i = 10; i > 0; i--) {
//   console.log(`Selam ${i}`);
// }

let names = ["Hossy", "Samsom", "Abiti", "Mulugeta"]; //Array
//              0        1        2          3

// console.log(names.length);

// for (let i = 0; i < names.length; i++) {
//   console.log(`Welcome ${names[i]}`);
// }

for (let shm of names) {
  console.log(`Welcome ${shm}`);
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let kuxtri of numbers) {
  console.log(kuxtri * 2);
}

//Object
let person = {
  name: "Abiti",
  country: "Eritrea",
  gender: "Female",
};

for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}
