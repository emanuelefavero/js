// Sort the array without mutating the original array
let nums = [1, 10, 21, 2]

let sorted = nums.toSorted((a, b) => a - b)
console.log(sorted) // [1, 2, 10, 21]

sorted = nums.toSorted((a, b) => b - a) // reverse sort
console.log(sorted) // [21, 10, 2, 1]

// TIP: You can also use the spread operator to create a copy of the array
sorted = [...nums].sort((a, b) => a - b)
console.log(sorted) //

console.log(nums) // [1, 10, 21, 2] - STILL THE SAME

// BEWARE: toSorted() without a callback function sorts the array lexicographically (alphabetically)
sorted = nums.toSorted()
console.log(sorted) // [1, 10, 2, 21] - NOT WHAT WE WANT
