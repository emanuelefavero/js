// * This is a custom implementation of the Promise.all method

function customPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    if (promises.length === 0) {
      resolve([])
      return
    }

    const results = []
    let completedPromises = 0

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          results[index] = value
          completedPromises++

          if (completedPromises === promises.length) {
            resolve(results)
          }
        })
        .catch((error) => reject(error))
    })
  })
}

// ------------------------------------------------
// Usage

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Promise 1 resolved'), 200)
})

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Promise 2 resolved'), 300)
})

customPromiseAll([promise1, promise2]).then((values) => {
  console.log(values)
})
// [ 'Promise 1 resolved', 'Promise 2 resolved']
