// ! Note: You need Node.js v21.0.0 or later to run this code

// Object.groupBy is a utility function that groups an array of objects by a given key

const users = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 30 },
]

const groupByAge = Object.groupBy(users, (user) => {
  return user.age
})

console.log(groupByAge)
/* [Object: null prototype] {
  '25': [ { name: 'John', age: 25 } ],
  '30': [ { name: 'Jane', age: 30 } ]
}
*/

console.log(groupByAge['25']) // [ { name: 'John', age: 25 } ]
