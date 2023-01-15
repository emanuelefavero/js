// SPLICE - replace or remove elements in array
let fruits = ['banana', 'cherry', 'kiwi', 'orange']
console.log('original', fruits)

// removes item, returns that item [ 'banana' ]
console.log('splice(0, 1)', fruits.splice(0, 1))

console.log('original', fruits)

// removes items from index 1 to end, returns removed items [ 'kiwi', 'orange' ]
console.log('splice(1)', fruits.splice(1))

console.log('original', fruits)

// replace items from index 0 to 1, returns removed items [ 'cherry' ]
console.log('splice(0, 1, "apple")', fruits.splice(0, 1, 'apple'))

console.log('original', fruits)
