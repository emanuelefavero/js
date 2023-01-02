// The every() method checks if all elements in an array pass a test (provided as a function).

// Check if all the values in the ages array are 18 or over

const ages = [21, 32, 55]

function checkAge(age) {
  return age >= 18
}

console.log(ages.every(checkAge)) // true
// all ages element are bigger than 18
