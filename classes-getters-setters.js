class Shape {
  constructor(color) {
    this.color = color
  }

  // * Setter - a method that allows you to set or mutate an attribute in a class
  setColor(color) {
    this.color = color
  }

  // * Getter - a method that allows you to access an attribute in a class
  getColor() {
    return this.color
  }
}

// -------------------------

let shape = new Shape('red')
shape.setColor('blue')

console.log(shape.getColor()) // blue

console.log(shape) // Shape { color: 'blue' }
console.log(shape.color) // blue
