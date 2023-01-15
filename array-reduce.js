// ARRAY REDUCE - Reduce the values of an array to a single value (going left-to-right)
let numbers = [200, 50, 50]
console.log(numbers.reduce((total, num) => total - num)) // 100
console.log(numbers.reduce((total, num) => total + num)) // 300
