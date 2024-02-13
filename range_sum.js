// create a range
function range(start, end) {
  let arr = [];
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
  return arr;
}
console.log(JSON.stringify(range(1, 10)));

// calcul sum of range
function sum(array) {
  let res = 0;
  for (let numbers of array) {
    res += numbers;
  }
  return res;
}
console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// create range relatively to steps
function rangeStep(start, end, step) {
  let arr = [];
  if (isNaN(step)) {
    range();
  } else {
    let direction = start <= end ? 1 : -1;

    for (
      let i = (direction = 1 ? start : end);
      direction === 1 ? i <= end : i >= end;
      i += step * direction
    ) {
      arr.push(i);
    }

    return arr;
  }
}
console.log(rangeStep(1, 10, 2));
