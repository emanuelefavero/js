// Destructuring - makes it possible to unpack values from arrays, or properties from objects, into distinct variables

// Array destructuring
let array = ['hello', 'ciao', 'hola', 'hallo']
let [a, b] = array
console.log(a, b) // hello ciao

let array2 = ['hello', 'ciao', 'hola', 'hallo']
let [c, , d] = array2
console.log(c, d) // hello hola

let array3 = [undefined, 'ciao', 'hola', 'hallo']
let [e = 'hi', f] = array3
console.log(e, f) // hello ciao

let array4 = ['hello', 'ciao', 'hola', 'hallo']
let [g, ...h] = array4
console.log(g, h) // hello [ 'ciao', 'hola', 'hallo' ]
