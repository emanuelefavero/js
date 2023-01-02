// splice, adds/removes items to/from an array, and returns the removed item(s).
// array.splice(index, howmany, item1, ...)
// howmany = number of items to be removed. If 0, no items will be removed

const fruits = ['Banana', 'Mango']

// Add items to the array, removing none:
fruits.splice(0, 0, 'Lemon', 'Kiwi') // [ 'Lemon', 'Kiwi', 'Banana', 'Mango' ]
console.log(fruits)

// Add items to the array, removing 2:
fruits.splice(2, 2, 'Papaya', 'Pear') // [ 'Lemon', 'Kiwi', 'Papaya', 'Pear' ]
console.log(fruits)

// This method changes the original array.
