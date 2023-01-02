// reduce(), reduces the array to a single value. Executes a provided function for each value of the array (from left-to-right).

const numbers = [10, 5, 3]

function subtractNumbers(total, number) {
  return total - number // total argument is necessary for reduce()
}

console.log(numbers.reduce(subtractNumbers)) // 2
// (10 - 5 - 3)

// This method does not change the original array.

// reduceRight(), SAME AS reduce(), but starts from the end of the array
console.log(numbers.reduceRight(subtractNumbers)) // -12
// (3 - 5 - 10)
