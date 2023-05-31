// toString - convert an array to a string
const fruits = ['banana', 'cherry', 'kiwi']
console.log(fruits.toString('')) // banana,cherry,kiwi

// TIP: use join() instead of toString() to specify a separator
console.log(fruits.join(' - ')) // banana - cherry - kiwi

// This method does not change the original array
console.log(fruits)
