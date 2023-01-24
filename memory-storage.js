// ? Heap Memory vs Stack Memory
// Heap Memory: Objects, Arrays, Functions
// Stack Memory: Primitives (Strings, Numbers, Booleans, Undefined, Null)

// Heap Memory is a large pool of memory that is used to store objects, arrays, and functions. It is not cleared when a function is called. It is cleared when the program is closed.

// Stack Memory is a small pool of memory that is used to store primitives. It is cleared when a function is called.

// ----------------------------------------------
// * Example
// Stack Memory
let userName = 'John'
let newUserName = userName
newUserName = 'Jane'
console.log(userName) // John
console.log(newUserName) // Jane

// Heap Memory
let user = { name: 'Jack' }
let newUser = user
newUser.name = 'James'
console.log(user.name) // James
console.log(newUser.name) // James

// ? As you can see, the heap memory retain the same value for both user and newUser. This is because the heap memory is not cleared when a function is called. It is cleared when the program is closed.
