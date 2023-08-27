let seconds = 0
let timer

// Listen for messages from the main thread
self.addEventListener('message', (e) => {
  // Start the timer
  if (e.data === 'start') {
    timer = setInterval(() => {
      seconds++
      self.postMessage(seconds)
    }, 1000)
  }
})
