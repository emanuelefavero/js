// Spread Operator

// ARRAY
// array copy
let array = [1, 2]
let newArray = [...array]
console.log(newArray) // [1, 2])

// array concat
let concatArray = [0, ...array, 4]
console.log(concatArray) // [0, 1, 2, 4]

// OBJECT
let fullName = {
  name: 'John',
  lastName: 'Locke',
}

let user = {
  ...fullName,
  age: 30,
}

console.log(user) // { name: 'John', lastName: 'Locke', age: 30 }
