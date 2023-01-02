// forEach(), calls a function once for each element in an array, in order.
const numbers = [1, 2, 3]

// for each element in the array, add ten and update the value in the array
function addTen(item, index, arr) {
  arr[index] = item + 10
}

numbers.forEach(addTen)

console.log(numbers) // [ 11, 12, 13 ]

// Get the sum of all the values in the array:
let sum = 0
function getSum(item) {
  sum += item
}

numbers.forEach(getSum)

console.log(sum) // 36
