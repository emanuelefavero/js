// map(), creates a new array with the results of calling a function for every array element.

// Return an array with the square root of all the values in the original array:
const numbers = [4, 9, 16, 25]
const x = numbers.map(Math.sqrt)

console.log(x) // [ 2, 3, 4, 5 ]

// Multiply all the values in array with 10:
const y = numbers.map(multiplyByTen)

function multiplyByTen(num) {
  return num * 10
}

console.log(y) // [ 40, 90, 160, 250 ]

// Get the full name for each person in the array:
const persons = [
  { firstName: 'John', lastName: 'Locke' },
  { firstName: 'Jack', lastName: 'Sheppard' },
]

function getFullName(item) {
  const fullName = item.firstName + ' ' + item.lastName
  return fullName
}

console.log(persons.map(getFullName)) // [ 'John Locke', 'Jack Sheppard' ]
