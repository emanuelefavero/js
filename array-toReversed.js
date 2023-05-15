// ! NOTE: Need node v20.1.0 or higher (use nvmrc to switch to this version if you want to test this feature)

// es2023 new feature:
// toReversed - returns a sorted array without changing the original array
const nums = [3, 1, 2]
console.log(nums.toReversed()) // [2, 1, 3]
console.log(nums) // [3, 1, 2]
