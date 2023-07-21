// SetTimeout will log 3 after 2 because it is asynchronous and goes to the event loop to wait for the call stack to be empty before executing (even though it is set to 0ms)
setTimeout(() => {
  console.log(3)
}, 0)

console.log(2)

// 2
// 3
