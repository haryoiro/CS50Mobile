function addOne (num) {
  throw new Error('oh no, an error !');
}

function getNum () {
  return addOne(10)
}

function c() {
  console.log(getNum() + getNum());
}

c()


