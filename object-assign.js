// The Object.assign() method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.
const target = { a: 1, b: 2 }
const source = { b: 4, c: 5 }

const returnedTarget = Object.assign(target, source)

console.log(target) // { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target) // true
