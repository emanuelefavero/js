// Array.keys() - returns an array iterator object with keys of an array
const array = ['a', 'b', 'c', 'd']

for (const key of array.keys()) {
  console.log(key, array[key]) // 0 a, 1 b, 2 c, 3 d
}

const iterator = array.keys()
console.log(iterator.next().value) // 0
// console.log(iterator.next().value) // 1
