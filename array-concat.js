// ARRAY CONCAT - Concatenates two or more arrays, and returns a new array
let array1 = [1, 2]
let array2 = [3, 4]
let array3 = [5, 6]

let array4 = array1.concat(array2, array3)
console.log(array4) // [ 1, 2, 3, 4, 5, 6 ]

// Concatenates two or more arrays with spread operator (see spreadOperator.js)
let array5 = [...array1, ...array2, ...array3]
console.log(array5) // [ 1, 2, 3, 4, 5, 6 ]
