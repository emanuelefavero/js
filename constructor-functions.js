// Object Constructor Functions
// NOTE: Constructor functions are used to create objects. They are similar to classes
function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

// NOTE: It is better to define the methods outside of the constructor using the prototype property
Book.prototype.info = function () {
  let readMessage = ''
  if (this.read) {
    readMessage = 'read'
  } else {
    readMessage = 'not read yet'
  }

  return `${this.title} by ${this.author}, ${this.pages} pages, ${readMessage}`
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false)
console.log(theHobbit.info())
// The Hobbit by J.R.R. Tolkien, 295 pages, not read yet

// ----------------------------
// Prototypical Inheritance with Object.create()
// NOTE: Object.create() creates a new object, using an existing object as the prototype of the newly created object
function Fruit() {}

Fruit.prototype.sayName = function () {
  console.log(this.name)
}

function TropicalFruit(name) {
  this.name = name
}

TropicalFruit.prototype = Object.create(Fruit.prototype)

const fruit = new TropicalFruit('mango')
fruit.sayName()
// mango
