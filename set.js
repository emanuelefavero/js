// SET - A set is a collection of unique values.
// NOTE: A set will always take O(n) steps more when inserting a value compared to an array because it has to check if the value already exists (by searching through all n values in the set before inserting).

// define set
const set = new Set([1, 2, 3])

// inserting
set.add(4)

// loop thru set
set.forEach((value) => console.log(value))

// check if value exists
if (set.has(4)) {
  console.log('set has 4')
}

// get set size
console.log(set.size)

// delete value
set.delete(1) // delete 1
console.log(set) // Set { 2, 3, 4 }

// clear set
set.clear()
console.log(set)
