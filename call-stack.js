// Call Stack
// In Javascript, the call stack is a data structure that records the position of each function that is being executed.
// The call stack is a LIFO (Last In First Out) data structure.

// TRY THIS
// 1. Add a breakpoint on the first function and run the debugger
// 2. Step into the first function and so on to see the call stack behavior
// Note: You can see the call stack in vs code debugger or in the chrome dev tools (sources tab)

function first() {
  second() // ? comment out this line to see the difference
  console.log('first') // 3
}

function second() {
  third() // ? comment out this line to see the difference
  console.log('second') // 2
}

function third() {
  console.log('third') // 1
}

first()
// third
// second
// first

// ? uncomment the following code to see the difference
// second()
// third()
