// sort(), sorts the items of an array.

// NOTE: if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
// You can fix this by providing a "compare function"
// sort(compare function)

// Sort in ASCENDING order
const numbers = [2, 3, 1]
console.log(numbers.sort((a, b) => a - b)) // [ 1, 2, 3 ]

// Sort in DESCENDING order
console.log(numbers.sort((a, b) => b - a)) // [ 3, 2, 1 ]

// Get the HIGHEST value in an array:
numbers.sort((a, b) => b - a) // (numbers[0] is now the highest number)
console.log(numbers[0]) // 3

// Get the LOWEST value in an array:
numbers.sort((a, b) => a - b) // (numbers[0] is now the lowest number)
console.log(numbers[0]) // 1

// Sort an array alphabetically
const fruits = ['Banana', 'Apple', 'Mango']
console.log(fruits.sort()) // [ 'Apple', 'Banana', 'Mango' ]

// Sort an array alphabetically (DESCENDING)
fruits.sort()
console.log(fruits.reverse()) // [ 'Mango', 'Banana', 'Apple' ]

// This method changes the original array.
