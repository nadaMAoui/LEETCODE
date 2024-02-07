// check if number is odd or even using recursive function
function isEven(number) {
  if (number === 0) {
    return `even`;
  } else if (number === 1) {
    return `odd`;
  } else if (number < 0) {
    return isEven(-number);
  } else {
    return isEven(number - 2);
  }
}
console.log(isEven(75));
console.log(isEven(-2));
