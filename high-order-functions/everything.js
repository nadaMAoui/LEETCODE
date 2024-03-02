// logic of some method by me using loop
function every(array, predict) {
  let booleanArray = [];
  for (let element of array) {
    booleanArray.push(predict(element));
  }
  return booleanArray.includes(false)
    ? `${array} is False`
    : `${array} is True`;
}
console.log(every([20, 2, 12], (s) => s % 2 == 0));

// analogous of some method using some
function every(array, predict) {
  return array.some(predict) ? `${array} is true` : `${array} is false`;
}
console.log(every([11, 2, 12], (s) => s % 5 == 0));
