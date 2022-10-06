// self invoked function expression
// a self-invoking expression is invoked (started) automatically, without being called.
;(function () {
  console.log('self invoked function')
})()

// arrow syntax
;(() => console.log('self invoked arrow function'))()
