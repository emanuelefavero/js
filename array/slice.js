const fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']

console.log(fruits.slice(0, 2)) // [ 'Banana', 'Orange' ]
console.log(fruits.slice(-2, -1)) // [ 'Apple' ]
console.log(fruits.slice(-2, fruits.length)) // [ 'Apple', 'Mango' ]

//  The original array will not be changed.
