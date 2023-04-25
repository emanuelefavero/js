// ARRAY REDUCE RIGHT - Reduce the values of an array to a single value (going right-to-left)
let numbers = [200, 50, 50]
console.log(numbers.reduceRight((total, num) => total - num))
// -200 (50 - 50 - 200)

console.log(numbers.reduceRight((total, num) => total + num))
// 300 (50 + 50 + 200)
