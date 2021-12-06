const arr = [['a', 'b', 'c'], ['d', 'e', 'f']];
const newArr = arr.reduce((elem1, elem2) => elem1.concat(elem2))
console.log(newArr)