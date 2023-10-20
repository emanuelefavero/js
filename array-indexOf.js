// ARRAY INDEXOF - Returns the first index at which a given element can be found in the array, or -1 if it is not present
let ages = [18, 18, 21, 34]
console.log(ages.indexOf(18)) // 0
console.log(ages.indexOf(33)) // -1

let chars = ['a', 'b', 'c', 'd', 'b']
console.log(chars.indexOf('b', 2)) // 4 - start searching from index 2
