// es2023 new feature:
// findLastIndex - returns the last index of the element in the array that matches the expression
const numbers = [10, 15, 20, 5]
const lastNumberGreaterThan10 = numbers.findLastIndex((number) => number > 10)
console.log(lastNumberGreaterThan10) // 2

// TIP: It does not change the original array
