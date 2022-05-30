"use strict";

class User {
  constructor(name, surname, year) {
    this.name = name;
    this.surname = surname;
    this.year = year;
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
    console.log(`${this.surname} ${this.surname.charAt(0)}.`);
  }
}

class Group {
  constructor(name, students) {
    this.name = name;
    this.students = students;
  }
  showStudents() {
    if (this.students.length > 0) {
      return this.students.map(function (element) {
        return element.formatFIO();
      });
    }
    throw new RangeError("Passed an empty array.");
  }
}

const user = new User("Elon", "Musk", 2015);
const student = new Student("Elon", "Musk", 2015);
const group = new Group("Main group", [
  new Student("Elon", "Musk", 2015),
  new Student("Alfred", "Nobel", 2005),
  new Student("Oscar", "Wilde", 2020),
  new Student("Rudyard ", "Kipling", 2014),
  new Student("Dali", "Salvador", 2008),
  new Student("Sigmund", "Freud ", 2021),
  new Student("Princess", "Diana", 2022),
  new Student("Jack", "London", 2023),
]);

console.log(user.getFullName());
console.log(student.getCourse(user));
console.log(group.showStudents());
