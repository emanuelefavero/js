// The date object is used to work with dates and times

let currentDate = new Date()

console.log(currentDate) // 2023-07-11T10:22:06.583Z

// Date.now() returns the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC
console.log(Date.now()) // 1625982126583

// Date.parse() parses a string representation of a date, and returns the number of milliseconds since January 1, 1970, 00:00:00 UTC
console.log(Date.parse('July 11, 2021')) // 1625982126583
