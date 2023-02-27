// Proxy - The Proxy object enables you to create a proxy for another object, which can intercept and redefine fundamental operations for that object.

const users = {}
const usersProxy = new Proxy(users, {
  // the get trap is called when a property is read from the proxy
  get: (object, property) => {
    // return property if it exists in object, otherwise return 'Not found'
    return property in object ? object[property] : 'Not found'
  },

  // the set trap is called when a property is set on the proxy
  set: (object, property, value) => {
    if (property === 'name' && value === 'admin') {
      throw new Error('Invalid name')
    }

    // set property on object to value
    object[property] = value
  },
})

console.log(usersProxy.name) // Not found
// usersProxy.name = 'admin' // Error: Invalid name
