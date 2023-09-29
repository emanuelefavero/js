// ARRAY FIND - Returns the value of the first element in an array that pass a test
let ages = [18, 21, 34]

console.log(ages.find((age) => age >= 21)) // 21

console.log(ages.find((age) => age === 18)) // 18

// TIP: findIndex() works the same way, but returns the index of the first element that satisfies the condition
// TIP: find() does not change the original array
