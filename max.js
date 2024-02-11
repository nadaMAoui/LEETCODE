// return max of array
function Max(...numbers) {
  let result = -Infinity;
  for (let number of numbers) {
    if (result < number) result = number;
  }
  return result;
}
console.log(Max(-6, 10, 100, 2, 155, 0));
//
let Z = [22, -10, -7];
console.log(Max(...Z));
console.log(Max(-6, 50, ...Z));
console.log(Math.PI);
