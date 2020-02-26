class marks {
  constructor(subject, student, marks) {
    this.subject = subject;
    this.student = student;
    this.marks = marks;
  }

  computeScore() {
    let score = null;
    if (this.marks >= 80) {
      console.log(`${this.student}`, "You have an A");
      score = "A";
    } else if (this.marks >= 70 && this.marks < 80) {
      console.log("You have a B");
      score = "B";
    } else if (this.marks >= 60 && this.marks < 70) {
      console.log("You have a C");
      score = "C";
    } else if (this.marks >= 50 && this.marks < 60) {
      console.log("You have a D");
      score = "D";
    } else if (this.marks >= 40 && this.marks < 50) {
      console.log("You have a E");
      score = "E";
    } else if (this.marks == 0 && this.marks < 40) {
      console.log("You have an F");
      score = "F";
    } else console.log("Marks can not be below 0");
    return score;
  }

  isValidate() {
    var valid = true;
    if (this.student == null) {
      valid = false;
      console.log("Student does not exist");
    }
    if (typeof (this.marks !== Number)) {
      valid = false;
      console.log("You have probably put in a text instead of a number");
    }
    if (this.marks < 0) {
      valid = false;
      console.log("Marks can not be less than zero");
    }

    if (this.marks > 0) {
      valid = true;
      console.log("Marks are correct");
    }

    if (this.marks == null) {
      valid = false;
      console.log("You have not provided any marks");
    }
    if (this.subject == null) {
      valid = false;
      console.log("You have not provided any subject");
    }
    return valid;
  }
}

module.exports = marks;
