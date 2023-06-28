// In Javascript, classes are just functions.
// The class keyword is just syntactic sugar for the constructor function
// Object oriented programming is a programming paradigm based on the concept of objects that contain data and code. Classes are templates for objects
class Car {
  constructor(brand, year) {
    this.brand = brand
    this.year = year
  }

  getBrand() {
    return `This is a ${this.brand}`
  }
}

const car1 = new Car('Toyota', 2021)
console.log(car1.getBrand()) // This is a Toyota
console.log(car1.year) // 2021
