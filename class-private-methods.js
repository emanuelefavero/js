// * Private Methods
// In JavaScript there are no private methods. We can create private methods using closures.

class MyClass {
  constructor() {
    // NOTE: Private methods must be created inside the constructor.

    // private method
    function privateMethod() {
      console.log('private method')
    }

    // NOTE: Other public methods need to be created inside the constructor as well if we want to access the private method

    // public method that can access private method
    this.publicMethod = () => {
      console.log('public method')
      privateMethod()
    }
  }

  // TIP: You could also create public methods outside the constructor and prepend an underscore to the method name to indicate that it is private. This is just a convention and the method is still public.
  _shouldOnlyBeUsedInternally() {
    console.log('should only be used internally')
  }
}

let myClass = new MyClass()
// myClass.privateMethod() // TypeError: myClass.privateMethod is not a function
myClass.publicMethod() // public method

// NOTE: You can still access the underscore method from outside the class, but it is a convention to indicate that it should only be used internally
myClass._shouldOnlyBeUsedInternally() // should only be used internally
