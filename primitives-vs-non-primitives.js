// Variables that are assigned a primitive value are given their own copy of that value
let a = 1
let b = a
b += 2
console.log(a) // 1

// Variables that are assigned a non-primitive value are given a reference to that value
let x = [1, 2, 3]
let y = x
y.push(4)
console.log(x) // [1, 2, 3, 4]
