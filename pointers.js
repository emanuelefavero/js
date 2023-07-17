// * POINTERS - a reference to a location in memory. That memory location contains another value

// Example 1 - Not using pointers

let num1 = 5
let num2 = num1 // * num2 is a copy of num1

num1 = 10

console.log(num1) // 10
console.log(num2) // 5

// TIP: Even if you change the value of num1, num2 will still be 5 because num2 is not pointing to num1. num2 is just a copy of num1

// ------------

// Example 2 - Using pointers

let object1 = {
  value: 5,
}

let object2 = object1 // * object2 is pointing to object1

object1.value = 10

console.log(object1.value) // 10
console.log(object2.value) // 10

// TIP: When you change the value of object1, object2 will also change because object2 is pointing to object1. object2 is not a copy of object1 but a reference to object1

// TIP: In Javascript, objects are passed by reference (using pointers). While primitives are passed by copying their value
