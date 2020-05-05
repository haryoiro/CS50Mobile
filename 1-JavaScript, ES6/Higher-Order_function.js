const x = [0, 1, 2, 3, 4]

const addOne = (num) => { return num + 1}
console.log(addOne(1))
// out => 2

const greateThenOne = (num) => {return num > 2}
console.log(greateThenOne(1))
// out => false
console.log(greateThenOne(5))
// out => ture

const add = (x, y) => {return x + y}
console.log(add(3, 5))
// out => 8

// MAP
// すべての要素に対し関数を実行している。
console.log(x.map(addOne))
// out => [ 1, 2, 3, 4, 5 ]

// FILTER
// すべての要素に対し真偽判定を行い，tureのものだけ返す。
console.log(x.filter(greateThenTwo))
// out => [ 1, 2, 3, 4, 5 ]

// REDUCE
// 配列の複数の値を取り，一つの値にまとめる
console.log(x.reduce(add))
// out => 10