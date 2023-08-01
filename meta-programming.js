// Meta-programming refers to the ability of a program to manipulate itself
// Meta-programming offers a lot of flexibility and power, but it can also be very confusing
// Some benefits of meta-programming include:
// - Code reusability
// - Dynamic behavior
// - Debugging and logging

// Some drawbacks of meta-programming include:
// - Performance
// - Readability
// - Security

// In Javascript, the Proxy and Reflect objects are used to achieve this
// Example:
// Create the target object
const target = {
  name: 'John',
  age: 32,
}

// Create a logging proxy to intercept and log property accesses
const loggingProxy = new Proxy(target, {
  get(target, property) {
    console.log(`Getting ${property}: ${target[property]}`)
    return target[property]
  },
  set(target, property, value) {
    console.log(`Setting ${property} to ${value}`)
    target[property] = value
  },
})

// Use the proxy to log property accesses
loggingProxy.name // Getting name: John
loggingProxy.age = 33 // Setting age to 33

console.log(target) // { name: 'John', age: 33 }
