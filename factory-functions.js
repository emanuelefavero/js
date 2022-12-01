// Factory Function - functions that return objects
const personFactory = (name, age) => {
  const sayHello = () => console.log(`hello ${name}`)
  return { name, age, sayHello }
  // ^^^SHORTHAND FOR: return {name: name, age: age, sayHello: sayHello};
}

const john = personFactory('john', 32)

console.log(john.name)
john.sayHello()

// Constructor Function (BAD)
const Person = function (name, age) {
  this.sayHello = () => console.log(`hello ${name}`)
  this.name = name
  this.age = age
}

const jack = new Person('jack', 32)

console.log(jack.name)
jack.sayHello()

// Class
class PersonClass {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  sayHello() {
    console.log(`hello ${this.name}`)
  }
}

const kate = new PersonClass('kate', 32)

console.log(kate.name)
kate.sayHello()

const fruitFactory = (name, color) => {
  const sayName = () => console.log(`This fruit is a ${name}`)
  return { name, color, sayName }
}

const banana = fruitFactory('banana', 'yellow')
console.log(banana.name, banana.color)
banana.sayName()
