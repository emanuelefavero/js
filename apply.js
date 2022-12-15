// Apply
// pass values from a different object to an object method
const person = {
  fullName: function () {
    return this.firstName + ' ' + this.lastName
  },
}

const person1 = {
  firstName: 'Walter',
  lastName: 'White',
}

console.log(person.fullName.apply(person1)) // Walter White
