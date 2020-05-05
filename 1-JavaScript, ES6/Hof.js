const map = (arr, fn) => {
  const newArr = []
  arr.forEach(val => {
    newArr.push(fn(val))
  });

  return newArr
}

const addOne = (num)  => {
  return num + 1;
}

const x = [0, 1, 2, 3, 4, 5]

console.log(map(x, addOne));