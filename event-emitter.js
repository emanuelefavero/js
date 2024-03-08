// Event Emitter design pattern
// The EventEmitter class is a class that allows us to create objects that can emit and listen to events using the on and emit methods
// TIP: Socket.io uses the EventEmitter class to create a server that listens to events and a client that emits events

// Import events module
const EventEmitter = require('events')

// Create an EventEmitter object
const myEmitter = new EventEmitter()

// Create an event listener
myEmitter.on('log', (message) => {
  console.log(message)
})

// Emit an event
myEmitter.emit('log', 'Hello World') // Hello World

// Counter example using the event emitter
let counter = 0
myEmitter.on('count', (count) => {
  counter += count
  console.log(counter)
})

myEmitter.emit('count', 1) // 1
myEmitter.emit('count', 2) // 3
myEmitter.emit('count', 3) // 6
