let array = ['ciao', 'bye', 'hola', 'hello']

// Remove element by its value instead of its index
array.splice(array.indexOf('bye'), 1)

console.log(array) // [ 'ciao', 'hola', 'hello' ]
