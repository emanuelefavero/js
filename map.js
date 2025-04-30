// A Map in javascript is an object that remembers the original insertion order of the keys. Where the keys can be any data types. It has a size property to return its size. The forEach() method can be used on a Map
// TIP: Maps in javascript are hash tables. Maps are preferred over objects as hash tables thanks to the previously cited advantages

const map = new Map([
  ['a', 100],
  ['b', 200],
])
map.set('c', 300)

console.log(map.get('a')) // 100
console.log(map.size) // 3

map.delete('b') // if logged, it will return true if the key is deleted
console.log(map) // Map(2) { 'a' => 100, 'c' => 300 }

console.log(map.has('a')) // true
console.log(typeof map) // object

map.forEach((value, key) => {
  console.log(key, value)
})
// a 100
// c 300

// CONVERT MAP TO ARRAY
const arrayFromMap = [...map.entries()]
console.log(arrayFromMap) // [ [ 'a', 100 ], [ 'c', 300 ] ]

// THE ITERATOR METHOD
const iterator = map.entries()
console.log(iterator.next().value) // [ 'a', 100 ]
// console.log(iterator.next().value[1]) // 100, (get the value instead) // ! don't comment out this line or it will mess up the next 2 lines outputs
console.log(iterator.next()) // { value: [ 'c', 300 ], done: false }
console.log(iterator.next().done) // true, (done checks if map ended)

const arrayFromMapKeys = [...map.keys()]
console.log(arrayFromMapKeys) // [ 'a', 'c' ]

const arrayFromMapValues = [...map.values()]
console.log(arrayFromMapValues) // [100, 300]

// Delete all key-values in a map
map.clear()
console.log(map) // Map(0) {}

console.log(map instanceof Map) // true, (instanceof operator checks if an object is an instance of a specific class)

// TIP: You can also use objects as keys!
const apple = { name: 'Apple' }
const fruits = new Map([
  [apple, 'good'],
  [{ name: 'Mango' }, 'favorite'],
])
console.log(fruits.get(apple)) // good
