// keys(), returns an Array Iterator object with the keys of an array.
const fruits = ['Banana', 'Apple', 'Mango']

console.log(fruits.keys()) // Object [Array Iterator] {}

// Create an Array Iterator object, only containing the keys of the array, and then loop through each key:

const fruitsKeys = fruits.keys()
let output = ''

for (key of fruitsKeys) {
  output += key + ' '
}

console.log(output) // 0 1 2

// this method will not change the original array.
