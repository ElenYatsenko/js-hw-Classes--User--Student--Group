"use strict";

class User {
  constructor(name, surname, year) {
    this.name = name;
    this.surname = surname;
    this.year = year;
  }
  get year() {
    return this._year;
  }
  set year(year) {
    if (year > new Date().getFullYear()) {
      throw new RangeError(
        "The year value must be greater than the current year."
      );
    }
    if (year < new Date().getFullYear() - 5) {
      throw new RangeError("Year value must not exceed 5 years.");
    }
    this._year = year;
  }
  getFullName() {
    return `${this.name} ${this.surname}`;
  }
}
class Student extends User {
  constructor(name, surname, year) {
    super(name, surname, year);
  }
  getCourse() {
    return new Date().getFullYear() - this.year;
  }
  formatFIO() {
    return `${this.surname} ${this.surname.charAt(0)}.`;
  }
}

class Group {
  constructor(name, students) {
    this.name = name;
    this.students = students;
  }
  showStudents() {
    if (this.students.length > 0) {
      return this.students
        .map(function (element) {
          return element.formatFIO();
        })
        .join(" ");
    }
    throw new RangeError("Passed an empty array.");
  }
}

const user = new User("Elon", "Musk", 2017);
const student = new Student("Elon", "Musk", 2019);
const group = new Group("Main group", [
  new Student("Elon", "Musk", 2018),
  new Student("Alfred", "Nobel", 2020),
  new Student("Oscar", "Wilde", 2020),
  new Student("Rudyard ", "Kipling", 2018),
  new Student("Dali", "Salvador", 2018),
  new Student("Sigmund", "Freud ", 2021),
  new Student("Princess", "Diana", 2022),
  new Student("Jack", "London", 2020),
]);

console.log(user.getFullName());
console.log(student.getCourse(user));
console.log(group.showStudents());
