// * In Javascript we can throw custom errors using the throw keyword
// throw new Error('This is an error 1')

// * We can also catch errors using the try/catch block. This way we can handle errors and prevent the program from crashing. We can also use the finally block to run code that will always run regardless of whether an error was thrown or not
try {
  throw new Error('This is an error 2')
} catch (error) {
  console.error(error.message)
} finally {
  console.log('This will always run')
}

// * We can also create custom errors by extending the Error class
class ValidationError extends Error {
  constructor(message) {
    super(message)
    this.name = 'ValidationError'
  }
}

function test() {
  throw new ValidationError('This is a validation error')
}

try {
  test()
} catch (error) {
  console.error(error)
}

// * We can also throw built in errors
try {
  throw new TypeError('This is a type error')
} catch (error) {
  console.error(error)
}

// * The following are some of the built in errors:
// Error - Generic error
// EvalError - An error has occurred in the eval() function
// InternalError - An error has occurred in the JavaScript engine
// RangeError - A number "out of range" has occurred
// ReferenceError - An illegal reference has occurred
// SyntaxError - A syntax error has occurred
// TypeError - A type error has occurred
// URIError - An error in encodeURI() has occurred
