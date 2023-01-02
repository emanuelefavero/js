// entries(), Create an Array Iterator object, and create a loop that iterates each key/value pair:

const fruits = ['Banana', 'Orange', 'Apple', 'Mango']
const f = fruits.entries()

for (i of f) {
  console.log(i)
}

// [ 0, 'Banana' ]
// [ 1, 'Orange' ]
// [ 2, 'Apple' ]
// [ 3, 'Mango' ]
