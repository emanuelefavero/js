let array = [3, 2, 4, 5, 1]

// copy array with spread operator
let newArray = [...array]
console.log(newArray) // [3, 2, 4, 5, 1]

// copy array without spread operator
let newArray2 = array.slice()
console.log(newArray2) // [3, 2, 4, 5, 1]
