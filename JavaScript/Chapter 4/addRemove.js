const nameStudent = {
  firstName: "Hossy",
  lastName: "James",
  age: 27,
  isStudent: true,
};

console.log(nameStudent);

// Adding
nameStudent.job = "Graphic designing";
console.log(nameStudent);

// Remove 
delete nameStudent.lastName;
console.log(nameStudent);
