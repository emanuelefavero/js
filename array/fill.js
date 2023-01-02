// fill(), fill all the array elements with a static value:
const fruits = ['Banana', 'Orange', 'Apple']

fruits.fill('Kiwi')

console.log(fruits) // [ 'Kiwi', 'Kiwi', 'Kiwi' ]

// this method overwrites the original array.

fruits.fill('Papaya', 0, 2) // [ 'Papaya', 'Papaya', 'Kiwi' ]

console.log(fruits)
