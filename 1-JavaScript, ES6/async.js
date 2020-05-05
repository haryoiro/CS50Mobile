function printOne() {
  console.log('one')
}

function printTwo() {
  console.log('tow')
}

function printThree() {
  console.log('three')
}

setTimeout(printOne, 1000)
setTimeout(printTwo, 0)
printThree()