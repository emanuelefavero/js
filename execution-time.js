// * Execution Time

// TIP: You can use the `performance.now()` method to measure the time taken by a function to execute

function time(fn, ...args) {
  const start = performance.now()
  fn(...args)
  const end = performance.now()
  return `${(end - start).toFixed(4)}ms`
}

// Example
const sum = (a, b) => a + b
console.log(time(sum, 1, 2)) // 0.0000ms

// ------------------------------------------------

// TIP: You can also use the `console.time()` and `console.timeEnd()` methods to measure the time taken by a function to execute

console.time('sum')
console.log(sum(1, 2))
console.timeEnd('sum') // sum: 0.0000ms
