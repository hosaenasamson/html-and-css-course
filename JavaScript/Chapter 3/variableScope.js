let studentName = "Hossy";
console.log(studentName);

function greeting(name) {
  console.log(`Global scope variable is ${studentName}`);
  let teacherName = "Abraham";
  console.log(`Welcome ${name}`);
  console.log(`Teacher name is ${teacherName}`);
//   console.log(`Travel to Europe ${programmingLanguage}`);
  if (name === "Abiti") {
    let programmingLanguage = "JavaScript";
    console.log(
      `${name} learning a ${programmingLanguage} programming language.`,
    );
    console.log(`${programmingLanguage} teaches by ${teacherName}`);
    console.log(`Global scope variable is ${studentName}`);
  } else {
    console.log(`${name} not learning programming language.`);
  }
}

greeting("Abiti");
