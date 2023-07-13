// Convert string array to number array
console.log(['1.25', '10', '101'].map(Number)) // [ 1.25, 10, 101 ]

// ----------------

// Convert string array to integer array
console.log(['1.25', '1.34234', '2.6'].map((item) => parseInt(item)))
// [ 1, 1, 2 ]

// ? * parseInt only works if passed this way to map. It has to do with the second argument of parseInt, which is the radix. If you don't pass it, it will default to 10. If you need to pass the radix, you need to pass it as the second argument of map, like this:
// console.log(['1.25', '1.34234', '2.6'].map(parseInt, 10))

// ----------------

// Convert string array to float array
console.log(['1.25', '1.34234', '2.6'].map(parseFloat))
// [ 1.25, 1.34234, 2.6 ]

// ----------------

// Convert string array tp float array with fixed number of decimals
console.log(
  ['1.25', '1.34234', '2.6'].map(
    (item) => parseFloat(parseFloat(item).toFixed(2))
    // ? the second parseFloat is needed since .toFixed returns a string
    // STRING => parseFloat => FLOAT => toFixed => STRING => parseFloat => FLOAT
  )
)
// [ 1.25, 1.34, 2.6 ]
