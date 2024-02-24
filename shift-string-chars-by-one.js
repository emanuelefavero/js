// Shift string characters by one
// Given a string, return a new string where each character is shifted by one in the alphabet. So "abc" yields "bcd", "123" yields "234", and so on
function encrypt(string) {
  let result = ''
  for (let i = 0; i < string.length; i++) {
    result += String.fromCharCode(string.charCodeAt(i) + 1)
  }
  return result
}

console.log(encrypt('abc')) // bcd

// Decrypt the string
function decrypt(string) {
  let result = ''
  for (let i = 0; i < string.length; i++) {
    result += String.fromCharCode(string.charCodeAt(i) - 1)
  }
  return result
}

console.log(decrypt('bcd')) // abc

// TIP: String.fromCharCode() is used to convert a Unicode number to a character. String.charCodeAt() is used to get the Unicode number of a character
