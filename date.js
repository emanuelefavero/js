// The date object is used to work with dates and times

const currentDate = new Date()

console.log(currentDate) // 2023-07-11T10:22:06.583Z

// Date.now() returns the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC
console.log(Date.now()) // 1625982126583

// Date.parse() parses a string representation of a date, and returns the number of milliseconds since January 1, 1970, 00:00:00 UTC
console.log(Date.parse('July 11, 2021')) // 1625982126583

// Get the current date and time
const year = currentDate.getFullYear()
const month = currentDate.getMonth() + 1 // January is 0
const day = currentDate.getDate()
const hours = currentDate.getHours()
const minutes = currentDate.getMinutes()
const seconds = currentDate.getSeconds()

// Display date and time in DD/MM/YYYY HH:MM:SS format
console.log(`${day}/${month}/${year} ${hours}:${minutes}:${seconds}`) // 11/7/2021 10:22:6

// Get the day of the week
const weekDays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]
const dayOfWeek = weekDays[currentDate.getDay()]
console.log(dayOfWeek) // Tuesday

// Create a specific date and time
const specificDate = new Date(2023, 11, 25, 12, 0, 0) // 25 December 2023 12:00:00
console.log(specificDate) // 2023-12-25T04:00:00.000Z

// Formatting the date
const options = {
  year: 'numeric', // numeric, 2-digit
  month: 'long', // long, short, numeric
  day: 'numeric', // numeric, 2-digit
}
const formattedDate = specificDate.toLocaleDateString('en-US', options)
console.log(formattedDate) // December 25, 2023

const formattedDateIT = specificDate.toLocaleDateString('it-IT', options)
console.log(formattedDateIT) // 25 dicembre 2023

const formattedDateUK = specificDate.toLocaleDateString('en-GB', options)
console.log(formattedDateUK) // 25 December 2023
