// Sort the array without mutating the original array
let nums = [4, 1, 3, 2]

let sorted = nums.toSorted()
console.log(sorted) // [1, 2, 3, 4]

sorted = nums.toSorted((a, b) => b - a) // reverse sort
console.log(sorted) // [4, 3, 2, 1]

// TIP: You can also use the spread operator to create a copy of the array
sorted = [...nums].sort((a, b) => a - b)
console.log(sorted) // [1, 2, 3, 4]

console.log(nums) // [4, 1, 3, 2] - STILL THE SAME
