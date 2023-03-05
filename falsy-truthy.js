// Falsy and Truthy values
const falsy = [
  false,
  0,
  -0,
  '',
  null,
  undefined,
  NaN,
  0n, // BigInt
]

const number = 0 // ! 0 is falsy
if (number) {
  console.log(number) // ! This will not run!!!
}

if (number >= 0) {
  console.log(number) // number still falsy, but we handle it with >= 0
}

// To be sure that a zero is not falsy, we can use the ?? operator
const number2 = 0 ?? 3 // the nullish coalescing operator checks for null or undefined so zero is not falsy here
console.log(number2) // 0

// -----------------------
const truthy = [true, 0.01, -0.01, '0', 'false', [], {}, function () {}, 1n]

// NOTE: This is why you should use null or undefined to check for empty values
const data = {}
data && console.log(data) // ! This will run even though data is an empty object

// React example
// const [data, setData] = useState<Data || null>(null)

const n = 0 ?? 0
console.log(n) // 0
