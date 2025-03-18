// * Compare non primitive values

// JavaScript has two types of values: primitives and objects. Primitives (strings, numbers, booleans) are compared by their value, while objects are compared by their reference. This means that two objects are never equal to each other, even if they have the same properties and values.

// Compare two objects
const obj1 = { name: 'John', age: 21 }
const obj2 = { name: 'John', age: 21 }
console.log(obj1 === obj2) // ! false

function safelyCompareObjects(a, b) {
  return JSON.stringify(a) === JSON.stringify(b)
}

console.log(safelyCompareObjects(obj1, obj2)) // true
