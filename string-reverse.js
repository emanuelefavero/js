// FOR LOOP
function reverse(string) {
  let reversed = ''

  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i]
  }

  return reversed
}

// SPLIT, REVERSE, JOIN
function reverse2(string) {
  return string.split('').reverse().join('')
}

// ES6 SPREAD OPERATOR
function reverse3(string) {
  return Array.from([...string])
    .reverse()
    .join('')
}

console.log(reverse('hello')) // olleh
console.log(reverse2('hello')) // olleh
console.log(reverse3('hello')) // olleh
