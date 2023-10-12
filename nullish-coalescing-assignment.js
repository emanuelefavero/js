// The nullish coalescing assignment (??=) operator, also known as the logical nullish assignment operator, only evaluates the right operand and assigns to the left if the left operand is nullish (null or undefined).

let a = null
console.log((a ??= 2)) // 2, ??= returns right if a is null or undefined

a = 10
console.log((a ??= 2)) // 10, ??= returns left if a is not null or undefined
