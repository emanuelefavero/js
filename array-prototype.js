// prototype lets you add new methods to arrays and objects
// TIP: We are using es5 function syntax so that we can use 'this' keyword
Array.prototype.myCapitalize = function () {
  return this.map((item) => {
    return item[0].toUpperCase() + item.slice(1)
  })
}

const colors = ['red', 'green', 'blue']
console.log(colors.myCapitalize())

/*
NOTE: You should not change the prototype of built in JavaScript datatypes like:

Numbers
Strings
Arrays
Dates
Booleans
Function
Objects
*/
