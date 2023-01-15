// ARRAY SLICE - Returns a new array, with a copy of the elements from the original array
let fruits = ['banana', 'cherry', 'kiwi', 'orange']
console.log('original', fruits)

// returns a new array with a copy of the elements from index 0 to 1 [ 'banana' ]
console.log('slice(0, 1)', fruits.slice(0, 1))

// returns a new array with a copy of the elements from index 1 to end [ 'cherry', 'kiwi', 'orange' ]
console.log('slice(1)', fruits.slice(1))

// original array stays the same
console.log('original', fruits) // [ 'banana', 'cherry', 'kiwi', 'orange' ]
