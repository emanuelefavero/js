// ARRAY FINDINDEX - Returns the index of the first element in an array that pass a test
let ages = [18, 21, 34, 21]

console.log(ages.findIndex((age) => age === 21)) // 1
console.log(ages.findIndex((age) => age >= 18)) // 0
console.log(ages.findIndex((age) => age >= 35)) // -1
