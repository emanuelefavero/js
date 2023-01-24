// ? Execution Context
// ? The execution context is the environment where the JavaScript code is evaluated and executed. When a script starts to run, there are two phases of activity:
// ? 1. Creation phase - where variables are declared and assigned a default value of undefined, functions are created and assigned to memory, and this is set to the global object.
// ? 2. Execution phase - where the code is executed line by line.

// TODO: Run the debugger from the following line and step through the code to see the execution context in action.
let x = 2
let y = 3

const sum = (a, b) => a + b

const sum1 = sum(x, y)
const sum2 = sum(1, 2)
