// ARRAY FROM - creates a new array from an array-like or iterable object

// convert a string to an array
const string = 'hello'
const array = Array.from(string)
// [ 'h', 'e', 'l', 'l', 'o' ]

// create an array of a certain length
const array3 = Array.from({ length: 5 }, () => 'hi')
// [ 'hi', 'hi', 'hi', 'hi', 'hi' ]

// create an array of 5 random numbers between 0 and 10
const array4 = Array.from({ length: 5 }, () => Math.floor(Math.random() * 10))
// [ 3, 5, 8, 2, 7 ]

// TIP: You can also convert a string to an array using the spread operator
const string2 = 'hello'
const array2 = [...string2]
// [ 'h', 'e', 'l', 'l', 'o' ]
