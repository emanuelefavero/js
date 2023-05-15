// Array sort - sorts the elements of an array in place and returns the array
const numbers = [4, 2, 5, 1, 3]
console.log(numbers.sort()) // [1, 2, 3, 4, 5]

// TIP: Array sort affects the original array
console.log(numbers) // [1, 2, 3, 4, 5]

console.log(numbers.sort((a, b) => b - a)) // [5, 4, 3, 2, 1]
