// Destructuring - makes it possible to unpack values from arrays, or properties from objects, into distinct variables

// Array destructuring
let array = ['hello', 'ciao', 'hola', 'hallo']
let [a, b] = array
console.log(a, b) // hello ciao

let array2 = ['hello', 'ciao', 'hola', 'hallo']
let [c, , d] = array2
console.log(c, d) // hello hola

let array3 = [undefined, 'ciao', 'hola', 'hallo']
let [e = 'hi', f] = array3
console.log(e, f) // hello ciao

let array4 = ['hello', 'ciao', 'hola', 'hallo']
let [g, ...h] = array4
console.log(g, h) // hello [ 'ciao', 'hola', 'hallo' ]

// Object Destructuring
let object = {
  firstName: 'John',
  age: 34,
}
let { firstName, age } = object
console.log(firstName, age) // John 34

let object2 = {
  lastName: 'Doe',
}
let { lastName = 'White', surName = 'White' } = object2
console.log(lastName, surName) // Doe White (surName key does not exist so the default will be displayed)

let colors = {
  red: '#f00',
  green: '#0f0',
  blue: '#00f',
}
let { red, ...otherColors } = colors
console.log(red, otherColors, otherColors.blue)
// #f00 { green: '#0f0', blue: '#00f' } #00f
