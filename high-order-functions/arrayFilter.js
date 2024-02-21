//function filtering elements of array
function filter(array, test) {
  let passed = [];
  for (let elements of array) {
    if (test(elements)) {
      passed.push(elements);
    }
  }
  return passed;
}
console.log(filter([1, 2, 3], (odd) => odd % 2 != 0));
