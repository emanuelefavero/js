// SPLICE - replace or remove elements in array
let fruits = ['banana', 'cherry', 'kiwi', 'orange']

// removes one item, returns that item
console.log(fruits.splice(0, 1)) // [ 'banana' ]

// TIP: The second argument is the number of items to remove, starting from the first argument index

console.log(fruits) // [ 'cherry', 'kiwi', 'orange' ]

// removes items from index 1 to end, returns removed items
console.log(fruits.splice(1)) // [ 'kiwi', 'orange' ]

console.log(fruits) // [ 'cherry' ]

// replace items from index 0 to 1, returns removed items [ 'cherry' ]
console.log(fruits.splice(0, 1, 'apple')) // [ 'cherry' ]

console.log(fruits) // [ 'apple' ]
