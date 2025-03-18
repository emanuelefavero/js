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

// * Compare two sets
const set1 = new Set([1, 2, 3])
const set2 = new Set([1, 2, 3])
console.log(set1 === set2) // ! false

// TIP: Since sets are iterables, you can convert them to arrays and compare them using the previous method
function compareSets(a, b) {
  return JSON.stringify([...a].sort()) === JSON.stringify([...b].sort())
}

console.log(compareSets(set1, set2)) // true

// * Compare two maps
const map1 = new Map([
  ['name', 'John'],
  ['age', 21],
])
const map2 = new Map([
  ['name', 'John'],
  ['age', 21],
])
console.log(map1 === map2) // ! false

// TIP: Since maps are iterables, you can convert them to arrays and compare them using the previous method
function compareMaps(a, b) {
  return JSON.stringify([...a].sort()) === JSON.stringify([...b].sort())
}

console.log(compareMaps(map1, map2)) // true
// BEWARE: This method only works for simple maps. It doesn't work for maps with objects as keys or values.

// * Compare two dates
const date1 = new Date('2021-07-17')
const date2 = new Date('2021-07-17')
console.log(date1 === date2) // ! false

function compareDates(a, b) {
  return a.getTime() === b.getTime()
}

console.log(compareDates(date1, date2)) // true

// * Compare two regex
const regex1 = /hello/
const regex2 = /hello/
console.log(regex1 === regex2) // ! false

function compareRegex(a, b) {
  return a.toString() === b.toString()
}

console.log(compareRegex(regex1, regex2)) // true

// * Compare two functions
const func1 = function () {
  return 'Hello'
}
const func2 = function () {
  return 'Hello'
}
console.log(func1 === func2) // ! false

function compareFunctions(a, b) {
  return a.toString() === b.toString()
}

console.log(compareFunctions(func1, func2)) // true

// * Custom deep comparison

// A deep comparison is a comparison between two objects that checks if they have the same properties and values. This is useful when you want to compare two objects that have nested objects or arrays.

// TIP: You can use the lodash `isEqual` method to compare two objects deeply.
// import _ from 'lodash'
// console.log(_.isEqual(obj1, obj2)) // true

function deepEqual(a, b) {
  if (a === b) return true

  if (a == null || typeof a != 'object' || b == null || typeof b != 'object')
    return false

  const keysA = Object.keys(a)
  const keysB = Object.keys(b)

  if (keysA.length !== keysB.length) return false

  // Check if all keys and values are the same in both objects
  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false
  }

  return true
}

console.log(deepEqual(obj1, obj2)) // true
