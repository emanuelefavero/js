// Closures - A closure is a function having access to the parent scope, even after the parent function has closed.
const counterCreator = () => {
  let count = 0
  return () => {
    console.log(count)
    count++
  }
}

const counter = counterCreator()

// counter is calling the return value of counterCreator
counter()
counter()
counter()
