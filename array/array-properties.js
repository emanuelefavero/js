const fruits = ['Orange', 'Apple', 'Banana']

// CONSTRUCTOR
// Returns the function that created the Array object's prototype
console.log(fruits.constructor) // [Function: Array]

// LENGTH
// Sets or returns the number of elements in an array
console.log(fruits.length) // 3

// PROTOTYPE
// Allows you to add properties and methods to an Array object

Array.prototype.upperCase = function () {
  for (i = 0; i < this.length; i++) {
    this[i] = this[i].toUpperCase()
  }
}

fruits.upperCase()
// fruits.toUpperCase(); WOULD GIVE ERRORS

console.log(fruits) // [ 'ORANGE', 'APPLE', 'BANANA' ]
