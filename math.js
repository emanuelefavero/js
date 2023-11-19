// * The Math Object
// The Math Object is a built-in object that has properties and methods for mathematical constants and functions

// * Math Constants

// Math.E returns Euler's number, the base of natural logarithms, e, approximately 2.718.
console.log(Math.E) // 2.718281828459045

// Math.PI returns the ratio of the circumference of a circle to its diameter, approximately 3.14159.
console.log(Math.PI) // 3.141592653589793

// Math.SQRT2 returns the square root of 2, approximately 1.414.
console.log(Math.SQRT2) // 1.4142135623730951

// Math.SQRT1_2 returns the square root of 1/2, approximately 0.707
console.log(Math.SQRT1_2) // 0.7071067811865476

// Math.LN2 returns the natural logarithm of 2, approximately 0.693
console.log(Math.LN2) // 0.6931471805599453

// Math.LN10 returns the natural logarithm of 10, approximately 2.302
console.log(Math.LN10) // 2.302585092994046

// Math.LOG2E returns the base 2 logarithm of E, approximately 1.442 (E is Euler's number, the base of the natural logarithms)
console.log(Math.LOG2E) // 1.4426950408889634

// Math.LOG10E returns the base 10 logarithm of E, approximately 0.434 (E is Euler's number, the base of the natural logarithms)
console.log(Math.LOG10E) // 0.4342944819032518

// * Math Methods

// Math.abs(x) returns the absolute value of x
console.log(Math.abs(-1)) // 1

// Math.ceil(x) returns the value of x rounded up to its nearest integer
console.log(Math.ceil(1.1)) // 2

// Math.floor(x) returns the value of x rounded down to its nearest integer
console.log(Math.floor(1.9)) // 1

// Math.round(x) returns the value of x rounded to its nearest integer
console.log(Math.round(1.5)) // 2
console.log(Math.round(1.49)) // 1

// Math.max(x, y, z, ...) returns the number with the highest value
console.log(Math.max(2, 3, 1)) // 3

// Math.min(x, y, z, ...) returns the number with the lowest value
console.log(Math.min(2, 3, 1)) // 1

// Math.pow(x, y) returns the value of x to the power of y
console.log(Math.pow(2, 3)) // 8, 2 * 2 * 2

// Math.sqrt(x) returns the square root of x
console.log(Math.sqrt(4)) // 2

// Math.random() returns a random number between 0 (inclusive), and 1 (exclusive)
console.log(Math.random()) // e.g. 0.123456789012345

// Get a random number between 1 and 10
console.log(Math.floor(Math.random() * 10) + 1) // e.g. 4

// Get a random floating point number between 1 and 10 with 2 decimals
console.log((Math.random() * 10 + 1).toFixed(2)) // e.g. 7.25
