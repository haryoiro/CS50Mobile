class Set {
  constructor (arr) { // コンストラクタ
    this.arr = arr
  }

  add(val) {
    if (!this.has(val)) this.arr.push(val)
  }

  delete(val) {
    this.arr = this.arr.filter(x => x  !== val)
  }

  has(val) {
    return this.arr.includes(val)
  }

  get size() {
    return this.arr.length
  }
}

const s = new Set([1, 2, 3, 4, 5])

s.add(1)
s.add(1)
s.add(1)
console.log("s should have 5 members and actually has : ", s.size)

console.log("s should contain 5: ", s.has(5))

s.add(6)
console.log('s should contain 6: ', s.has(6))
console.log('s should have 6 members and actually has : ', s.size)

s.delete(6)
console.log('s should no longer contain 6: ', s.has(6))
console.log('s should have 5 members and actually has: ', s.size)
