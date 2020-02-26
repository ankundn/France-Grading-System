class student {
  constructor(firstname, secondname, status, age) {
    this.firstname = firstname;
    this.secondname = secondname;
    this.status = status;
    this.age = age;
  }

  validate() {
    var valid = true;

    if (this.firstname == null) {
      valid = false;
      console.log("Provide the first name");
    }
    if (this.secondname == null) {
      valid = false;
      console.log("Provide the second name");
    }
    if (typeof (this.firstname != String && this.secondname != String)) {
      valid = false;
      console.log("Names should be made of only letters");
      //   console.log(this.secondname);
    }
  }
}

module.exports = student;
