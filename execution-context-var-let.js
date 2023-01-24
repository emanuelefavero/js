// ? Difference between var and let, const in execution context
// ? var will be hoisted to the top of the function scope, but let and const will be hoisted to the top of the block scope.
// * TIP: To see the difference, try calling a variable before it is declared. var will return undefined, but let and const will return a ReferenceError.
// TODO: Switch between var and let to see the difference (in the debugger or in the console)
console.log(x)
var x = 2
// let x = 2
