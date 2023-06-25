// prototype allows you to add new methods to booleans

Boolean.prototype.favoriteFruit = function () {
  if (this.valueOf() === true) return 'Mango'
}

let fruit = true
let favoriteFruit = fruit.favoriteFruit()

console.log(favoriteFruit) // Mango
