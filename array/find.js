// find(), returns the value of the first element in an array that pass a test (provided as a function)

// Get the value of the first element in the array that has a value of 18 or more:
const ages = [21, 32, 12]

function checkAge(age) {
  return age >= 18
}

console.log(ages.find(checkAge)) // 21

// find() does not change the original array
