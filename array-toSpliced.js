// ! NOTE: Need node v20.1.0 or higher (use nvmrc to switch to this version if you want to test this feature)

// es2023 new feature:
// toSpliced - returns a new array with the element removed at the specified index without changing the original array
const fruits = ['apple', 'banana', 'orange']
console.log(fruits.toSpliced(1)) // ['apple']
console.log(fruits.toSpliced(1, 1)) // ['apple', 'orange']

console.log(fruits) // ['apple', 'banana', 'orange']
