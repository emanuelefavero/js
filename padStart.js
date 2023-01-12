// padStart add a 0 to the beginning of a string until it reaches a certain length
for (let i = 1; i <= 10; i++) {
  console.log(i.toString().padStart(2, '0'))
}
// 01, ... 09, 10

// use padStart to mask a phone number instead of using regex
const phoneNumber = '3471413176'
const last3Digits = phoneNumber.slice(-3)
const maskedPhoneNumber = last3Digits.padStart(phoneNumber.length, '*')

console.log(maskedPhoneNumber)
// *******176

// padStart can also be used to add a 0 to the beginning of a number
let num = 1
console.log(num.toString().padStart(3, '0'))

// padEnd
const message = 'Hello'
console.log(message.padEnd(message.length + 1, '*'))
