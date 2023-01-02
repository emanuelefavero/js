// filter(), creates an array filled with all array elements that pass a test (provided as a function).

// Return an array of all the values in the ages array that are 18 or over:
const ages = [21, 32, 12]

function checkAge(age) {
  return age >= 18
}

console.log(ages.filter(checkAge)) // [ 21, 32 ]

// filter() does not change the original array
