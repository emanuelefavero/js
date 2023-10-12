// Logical assignment operators
// &&=, ||=, ??=

let a = 0 // falsy
console.log((a &&= 2)) // 0, &&= returns right if a is truthy

let b = 0
console.log((b ||= 2)) // 2, ||= returns right if b is falsy

let c = 0
console.log((c ??= 2)) // 0, ??= returns right if c is null or undefined

x = null
console.log((x &&= 2)) // null, &&= returns right if x is truthy

let y = null
console.log((y ||= 2)) // 2, ||= returns right if y is falsy

let z = null
console.log((z ??= 2)) // 2, ??= returns right if z is null or undefined

a = 1
console.log(!(a === 1)) // false, ! negates the result of the comparison

// OR operator
a = 0
b = 1
console.log(a === 1 || b === 1) // true, || returns true if either is true
