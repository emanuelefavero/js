// Nullish Coalescing Operator (??) - returns the right-hand side operand when the left-hand side operand is null or undefined, and otherwise returns the left-hand side operand.

const x = undefined
const result = x ?? 10
console.log(result) // 10

const y = 2
const result2 = y ?? 10
console.log(result2) // 2

// -----------------------
// In the this example, the ?? solves a common problem with the || operator.
// Since 0 is considered a falsy value in Javascript, the || operator will return the right-hand side operand. By using the ?? operator, we can return the left-hand side operand if it is not null or undefined.

const number = 0 || 3
console.log(number) // 3

const number2 = 0 ?? 3
console.log(number2) // 0
