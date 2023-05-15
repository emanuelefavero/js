// Weak Map are similar to Map, but the keys must be objects and the values can be arbitrary values
const weakMap = new WeakMap()
const object = {
  name: 'John',
}

weakMap.set(object, 100)

console.log(weakMap.get(object)) // 100

// TIP: WeakMaps are useful in JavaScript because they allow for the creation of key-value pairs where the keys are weakly held, making them eligible for garbage collection, which can help prevent memory leaks and improve performance in certain scenarios

// es2023 new feature: Symbols as keys in WeakMap
// const symbol = Symbol('hello')
// weakMap.set(symbol, 'world')
