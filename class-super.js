class Vehicle {
  constructor(color) {
    this.color = color
  }
}

class Car extends Vehicle {
  constructor(color, brand) {
    // TIP: By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods
    super(color)
    this.brand = brand
  }

  getInfo() {
    return `The ${this.brand} is ${this.color}`
  }
}

let car = new Car('red', 'Toyota')
console.log(car.getInfo()) // The Toyota is red
