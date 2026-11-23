// Objects

const studentName = {
  firstName: "Hossy",
  lastName: "Samsom",
  age: 26,
  gender: "Male",
  courses: ["HTML", "CSS", "JavaScript"],
  mark: [95, 83, 86],
  isStudent: true,
  getAverage() {
    return (
      this.mark.reduce((sum, total) => (sum += total), 0) / this.mark.length
    );
  },
};

let averageMark = studentName.getAverage();
console.log(averageMark);

const studentName2 = {
  firstName: "Abiti",
  lastName: "Samsom",
  age: 26,
  gender: "Female",
  courses: ["HTML", "CSS", "JavaScript"],
  mark: [90, 89, 96],
  isStudent: true,
  getAverage() {
    return (
      this.mark.reduce((sum, total) => (sum += total), 0) / this.mark.length
    );
  },
};

let averageMark2 = studentName2.getAverage();
console.log(averageMark2.toFixed(2));

const studentName3 = {
  firstName: "Aron",
  lastName: "Abel",
  age: 24,
  gender: "Male",
  courses: ["English", "Math", "Social Study", "Science"],
  mark: [80, 85, 90, 95],
  isStudent: true,
  getAverage() {
    return (
      this.mark.reduce((sum, total) => (sum += total), 0) / this.mark.length
    );
  },
};

let averageMark3 = studentName3.getAverage();
console.log(averageMark3);
