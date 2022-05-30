"use strict";

class User {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
    this.year = year;
  }
  getFullName() {
    return 0;
  }
}
class Student extends User {
  constructor(radius) {
    super("Ball");
    this.radius = radius;
  }
  getCourse() {
    return 0;
  }
}

class Group {
  constructor(name) {
    this.name = name;
    this.students = [];
    this.year = year;
  }
  showStudents() {
    return 0;
  }
}

// const ball = new Ball(-49);
// const cylinder = new Cylinder(15, 18);
// const cube = new Cube(56);

// console.log(getVolumeAnyFigura(ball));
// console.log(getVolumeAnyFigura(cylinder));
// console.log(getVolumeAnyFigura(cube));
