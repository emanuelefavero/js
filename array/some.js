// some(), checks if any of the elements in an array pass a test (provided as a function).

// Check if ANY values in the ages array are 18 or over:
const ages = [21, 32, 12]

function checkAge(age) {
  return age >= 18
}

console.log(ages.some(checkAge)) // true

// If it finds an array element where the function returns a true value, some() returns true (and does not check the remaining values)
// Otherwise it returns false

// some() does not change the original array
