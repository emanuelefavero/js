// * encodeURIComponent = encodes special characters like: , / ? : @ & = + $ #

console.log(`${encodeURIComponent('test?')}`) // test%3F
console.log(`${encodeURIComponent('#*&:')}`) // %23*%26%3A
