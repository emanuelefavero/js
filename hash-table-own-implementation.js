// Hash Table - Own Implementation
// Writing your own Hash Table is one of the most common Javascript interview questions
class HashTable {
  constructor() {
    this.table = new Array(127)
    this.size = 0
  }

  _hash(key) {
    let hash = 0
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i)
    }

    // To ensure that the hash value doesn't exceed the bucket size, you need to use the modulo operator
    return hash % this.table.length
    // e.g. 16 % 6 = 16 - 6 - 6 = 4
  }

  set(key, value) {
    const index = this._hash(key)
    this.table[index] = [key, value]
    this.size++
  }

  get(key) {
    const index = this._hash(key)
    return this.table[index]
  }

  remove(key) {
    const index = this._hash(key)

    if (this.table[index] && this.table[index].length) {
      this.table[index] = undefined
      this.size--
      return true
    }

    return false
  }
}

const hashTable = new HashTable()
hashTable.set('black shirt', 18)
hashTable.set('red shirt', 8)

console.log(hashTable.table)
console.log(hashTable.size) // 2
console.log(hashTable.get('black shirt')) // [ 'black shirt', 18 ]
console.log(hashTable.get('black shirt')[0]) // black shirt
console.log(hashTable.get('black shirt')[1]) // 18

hashTable.remove('black shirt')
console.log(hashTable.get('black shirt')) // undefined
