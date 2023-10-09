// * Get the size of a string in bytes
const byteSize = (str) => new Blob([str]).size
let size = byteSize('Hello')
console.log(size) // 5
