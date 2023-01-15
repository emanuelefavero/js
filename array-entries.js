// ARRAY ENTRIES - Returns a new Array Iterator object that contains the key/value pairs for each index in the array
let fruits = ['banana', 'cherry', 'kiwi', 'orange']
let iterator = fruits.entries()

for (let item of iterator) {
  console.log(item)
}

// [ 0, 'banana' ]
// [ 1, 'cherry' ]
// [ 2, 'kiwi' ]
// [ 3, 'orange' ]
