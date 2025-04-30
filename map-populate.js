// * Populate a map to count frequencies (single line trick)

let map = new Map()
let nums = [1, 2, 2, 2, 2, 3]

for (let num of nums) {
  map.set(num, (map.get(num) || 0) + 1)
}

console.log(map) // Map(3) { 1 => 1, 2 => 4, 3 => 1 }
