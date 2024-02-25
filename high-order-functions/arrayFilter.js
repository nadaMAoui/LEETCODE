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
//console.log(SCRIPTS.filter((s) => s.direction == "ttb"));

//function mapping an array
function map(array, transform) {
  let mapped = [];
  for (let element of array) {
    mapped.push(transform(element));
  }
  return mapped;
}
console.log(map([1, 2, 3], (s) => s * 2));

// reduce function
function reduce(array, combine, start) {
  let current = start;
  for (let elements of array) {
    current = combine(current, elements);
  }
  return current;
}
console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));
