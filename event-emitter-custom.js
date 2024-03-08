// TIP: This is a custom event emitter implementation
class MyEventEmitter {
  constructor() {
    this.events = {}
  }

  on(eventName, listener) {
    // If the event doesn't exist, create it
    if (!this.events[eventName]) {
      this.events[eventName] = []
    }

    this.events[eventName].push(listener)
  }

  emit(eventName, ...args) {
    if (!this.events[eventName]) return

    // Call all listeners
    this.events[eventName].forEach((listener) => {
      listener.apply(this, args)

      // TIP: apply() is used to call the listener with the correct context
    })
  }
}

// ------------------------------------------------
// Usage

const emitter = new MyEventEmitter()

emitter.on('greet', (name) => {
  console.log(`Hello ${name}`)
})

emitter.emit('greet', 'John') // Hello John
