// * Promise.all() method returns a single Promise that resolves when all of the promises in the iterable argument have resolved or when the iterable argument contains no promises. It rejects with the reason of the first promise that rejects.

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Promise 1 resolved'), 200)
})

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Promise 2 resolved'), 300)
})

Promise.all([promise1, promise2]).then((values) => {
  console.log(values)
})
// [ 'Promise 1 resolved', 'Promise 2 resolved']
