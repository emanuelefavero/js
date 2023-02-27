// replaceAll - replaces all occurrences of a substring in a string

const string = 'The fox jumps over the dog'
console.log(string.replaceAll('fox', 'cat'))
// The cat jumps over the dog

// NOTE: The global flag is required for replaceAll to work with regex
const regex = /Dog/gi
console.log(string.replaceAll(regex, 'turtle'))
// The fox jumps over the turtle
