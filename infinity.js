// Infinity is a number that is greater than any other number
// -Infinity is a number that is less than any other number

let number = Infinity
let negativeNumber = -Infinity

console.log(number)
console.log(negativeNumber)

// Infinity is useful when you need to make sure that a number is always greater than another number, no matter what value the other number has
if (-10 < number) {
  console.log('true')
}

// -Infinity is useful when you need to make sure that a number is always less than another number, no matter what value the other number has
if (2 > negativeNumber) {
  console.log('true')
}
