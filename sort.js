// Sort the array (the original array is mutated)
let nums = [1, 10, 21, 2]
nums.sort((a, b) => a - b)
console.log(nums) // [1, 2, 10, 21]

// Reverse sort
nums.sort((a, b) => b - a)
console.log(nums) // [21, 10, 2, 1]

// BEWARE: sort() without a callback function sorts the array lexicographically (alphabetically)
nums.sort()
console.log(nums) // [1, 10, 2, 21] - WRONG!

// Sort strings - .sort() without a callback is fine for strings
let words = ['banana', 'apple', 'america']
words.sort()
console.log(words) // ['america', 'apple', 'banana']
