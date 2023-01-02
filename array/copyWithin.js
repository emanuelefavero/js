// copyWithin(), copies array elements to another position in the array, overwriting the existing values.
const fruits = ['Banana', 'Orange', 'Apple', 'Mango']
// COPY 'Banana ELEMENT (0, 1) TO 'Apple' ELEMENT (2)
fruits.copyWithin(2, 0, 1) // array.copyWithin(target, start, end)

console.log(fruits) // [ 'Banana', 'Orange', 'Banana', 'Mango' ]
