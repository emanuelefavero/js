// es2023 new feature:
// with - returns a new array with the element added at the specified index without changing the original array
const fruits = ['apple', 'banana', 'orange']
console.log(fruits.with(1, 'mango')) // ['apple', 'mango', 'orange']
// console.log(fruits.with(3, 'mango')) // Invalid index

console.log(fruits) // ['apple', 'banana', 'orange']
