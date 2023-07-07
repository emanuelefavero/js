// Base class
class Shape {
  constructor(color) {
    this.color = color
  }

  getColor() {
    return this.color
  }
}

class Polygon extends Shape {
  constructor(color, sides) {
    super(color) // Call the parent constructor with super
    this.sides = sides
  }

  getSides() {
    return this.sides
  }
}

const polygon1 = new Polygon('red', 4)
console.log(polygon1.getColor()) // red
console.log(polygon1.getSides()) // 4
