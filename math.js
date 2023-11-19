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

// Math.trunc(x) returns the integer part of x (the part before the decimal point)
console.log(Math.trunc(1.9)) // 1

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

// Math.sign(x) returns if x is negative, null or positive
console.log(Math.sign(-25)) // -1
console.log(Math.sign(null)) // 0
console.log(Math.sign(0)) // 0
console.log(Math.sign(4)) // 1

// * Math Trigonometry Methods

// Math.sin(x) returns the sine (a value between -1 and 1) of the angle x (given in radians)
console.log(Math.sin((90 * Math.PI) / 180)) // 1, the sine of 90 degrees is 1
console.log(Math.sin((45 * Math.PI) / 180)) // 0.7071067811865475, the sine of 45 degrees is 0.7071067811865475
console.log(Math.sin(Math.PI / 2)) // 1, the sine of 90 degrees is 1

// Math.cos(x) returns the cosine (a value between -1 and 1) of the angle x (given in radians)
console.log(Math.cos((0 * Math.PI) / 180)) // 1, the cosine of 0 degrees is 1
console.log(Math.cos((60 * Math.PI) / 180)) // 0.5, the cosine of 60 degrees is 0.5
console.log(Math.cos(Math.PI)) // -1, the cosine of 180 degrees is -1

// Math.tan(x) returns the tangent (a value between -1 and 1) of the angle x (given in radians)
console.log(Math.tan((45 * Math.PI) / 180)) // 1, the tangent of 45 degrees is 1

// Math.asin(x) returns the arc sine (in radians) of x
console.log(Math.asin(0.5)) // 0.5235987755982989, the arcsine of 0.5 is 30 degrees (π/6 radians)

// Math.acos(x) returns the arc cosine (in radians) of x
console.log(Math.acos(0.5)) // 1.0471975511965976, the arccosine of 0.5 is 60 degrees (π/3 radians)

// Math.atan(x) returns the arc tangent (in radians) of x
console.log(Math.atan(1)) // 0.7853981633974483, the arctangent of 1 is 45 degrees (π/4 radians)

// Math.atan2(y, x) returns the arctangent of the quotient of its arguments
console.log(Math.atan2(8, 4)) // 1.1071487177940904, the arctangent of the quotient of its arguments

// Math.log(x) returns the natural logarithm (base E) of x
console.log(Math.log(1)) // 0
console.log(Math.log(10)) // 2.302585092994046, the natural logarithm of 10 is 2.302585092994046

// Math.exp(x) returns the value of Ex
console.log(Math.exp(1)) // 2.718281828459045, the value of Ex is 2.718281828459045

// Math.cbrt(x) returns the cubic root of x
console.log(Math.cbrt(8)) // 2, the cubic root of 8 is 2

// Math.hypot(x, y, z, ...) returns the square root of the sum of squares of its arguments
console.log(Math.hypot(3, 4)) // 5, the square root of 3^2 + 4^2

// Math.clz32(x) returns the number of leading zeros in a 32-bit binary representation of x
console.log(Math.clz32(1)) // 31, 1 in binary is 0000

// Math.imul(x, y) returns the result of a 32-bit integer multiplication
console.log(Math.imul(2, 3)) // 6, 2 * 3

// Math.fround(x) returns the nearest single precision float representation of x
console.log(Math.fround(1.337)) // 1.3370000123977661

// Math.log10(x) returns the base 10 logarithm of x
console.log(Math.log10(10)) // 1, the base 10 logarithm of 10 is 1

// Math.log2(x) returns the base 2 logarithm of x
console.log(Math.log2(2)) // 1, the base 2 logarithm of 2 is 1

// Math.log1p(x) returns the natural logarithm (base E) of 1 + x for x > -1
console.log(Math.log1p(1)) // 0.6931471805599453, the natural logarithm of 1 + 1 is 0.6931471805599453

// Math.expm1(x) returns the result of Ex - 1
console.log(Math.expm1(1)) // 1.718281828459045, the result of Ex - 1 is 1.718281828459045

// Math.sinh(x) returns the hyperbolic sine of x
console.log(Math.sinh(1)) // 1.1752011936438014, the hyperbolic sine of 1 is 1.1752011936438014

// Math.cosh(x) returns the hyperbolic cosine of x
console.log(Math.cosh(1)) // 1.5430806348152437, the hyperbolic cosine of 1 is 1.5430806348152437

// Math.tanh(x) returns the hyperbolic tangent of x
console.log(Math.tanh(1)) // 0.7615941559557649, the hyperbolic tangent of 1 is 0.7615941559557649

// Math.asinh(x) returns the hyperbolic arcsine of x
console.log(Math.asinh(1)) // 0.881373587019543, the hyperbolic arcsine of 1 is 0.881373587019543

// Math.acosh(x) returns the hyperbolic arccosine of x
console.log(Math.acosh(1)) // 0, the hyperbolic arccosine of 1 is 0

// Math.atanh(x) returns the hyperbolic arctangent of x
console.log(Math.atanh(1)) // Infinity, the hyperbolic arctangent of 1 is Infinity
