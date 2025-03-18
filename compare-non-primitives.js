// * Compare non primitive values

// JavaScript has two types of values: primitives and objects. Primitives (strings, numbers, booleans) are compared by their value, while objects are compared by their reference. This means that two objects are never equal to each other, even if they have the same properties and values.

// * Compare two objects
const obj1 = { name: 'John', age: 21 }
const obj2 = { name: 'John', age: 21 }
console.log(obj1 === obj2) // ! false

function compareObjects(a, b) {
  return JSON.stringify(a) === JSON.stringify(b)
}

console.log(compareObjects(obj1, obj2)) // true
// BEWARE: This method only works for simple objects. It doesn't work for objects with functions, undefined, or symbols. The keys must be in the same order.

// Compare two objects with keys in different order
const obj3 = { name: 'John', age: 21 }
const obj4 = { age: 21, name: 'John' }

function compareObjects2(a, b) {
  return (
    JSON.stringify(Object.keys(a).sort()) ===
      JSON.stringify(Object.keys(b).sort()) &&
    JSON.stringify(Object.values(a).sort()) ===
      JSON.stringify(Object.values(b).sort())
  )
}

console.log(compareObjects2(obj3, obj4)) // true

// * Compare two arrays
const arr1 = [1, 2, 3]
const arr2 = [1, 2, 3]
console.log(arr1 === arr2) // ! false

function compareArrays(a, b) {
  return JSON.stringify(a) === JSON.stringify(b)
}

console.log(compareArrays(arr1, arr2)) // true

// Compare two arrays with elements in different order
const arr3 = [1, 2, 3]
const arr4 = [3, 2, 1]
console.log(compareArrays(arr3, arr4)) // ! false

function compareArrays2(a, b) {
  return JSON.stringify(a.sort()) === JSON.stringify(b.sort())
}

console.log(compareArrays2(arr3, arr4)) // true
