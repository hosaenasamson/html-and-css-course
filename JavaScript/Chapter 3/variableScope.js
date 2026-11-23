let studentName = "Hossy";
// console.log(studentName);

// console.log(name);

function greeting(name) {
  console.log(`Global scope variable is ${studentName}`);
  console.log(`Welcome ${name}`);
    let teacherName = "Abraham";
    console.log(`Teacher name is ${teacherName}`);
    // console.log(`Travel to Europe ${programmingLanguage}`);
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

// greeting("Abiti");

// var
// let 
// const

if(true){
  var number = 8;
  let num = 12; 
}

console.log(number);
console.log(num);

