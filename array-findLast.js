// es2023 new feature:
// findLast - returns the last element in the array that matches the expression
const numbers = [10, 15, 20, 5]
const lastNumberGreaterThan10 = numbers.findLast((number) => number > 10)
console.log(lastNumberGreaterThan10) // 20

// TIP: It does not change the original array
