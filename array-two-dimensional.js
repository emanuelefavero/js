// * The following code shows how to access the elements of a two-dimensional array
let array = [
  [1, 2, 3],
  [4, 5, 6],
]

console.log(array[0][0]) // 1
console.log(array[1][0]) // 4

// * Get all the values of a two-dimensional array as a single-dimensional array
let values = []

for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array[i].length; j++) {
    values.push(array[i][j])
  }
}

console.log(values) // [1, 2, 3, 4, 5, 6]

// You can also use the flat() method to get all the values of a two-dimensional array as a single-dimensional array
console.log(array.flat()) // [1, 2, 3, 4, 5, 6]

// You can also use the reduce() method to get all the values of a two-dimensional array as a single-dimensional array
console.log(
  array.reduce((accumulator, current) => accumulator.concat(current), [])
)
// [1, 2, 3, 4, 5, 6]
