// SIMILAR TO indexOf, searches the array for the specified item, and returns its position.
// THE SEARCH WILL START AT THE END, OR AT THE SPECIFIED POSITION
const fruits = ['Banana', 'Apple', 'Mango']

console.log(fruits.lastIndexOf('Banana')) // 0

// Returns -1 if the item is not found.
console.log(fruits.lastIndexOf('Orange')) // -1

// If the item to search for is present more than once, the lastIndexOf method returns the position of the last occurence.
// If you want to search from start to end, use the indexOf() method
