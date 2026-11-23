// Try and Catch
// The try statement allows you to define a block of code to be tested for errors while it is being executed.
// The catch statement allows you to define a block of code to be executed, if an error occurs in the try block.

function checkAge(age) {
  try {
    if (age < 18) {
      throw new Error("You must be at least 18 years old.");
    }
    console.log("Congratulations now you're adult");
  } catch (error) {
    console.log(error.message);
  }
}

checkAge(14);
