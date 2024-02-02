function power(base, exponent) {
  let result = 1;
  for (i = 0; i < exponent; i++) {
    result *= base;
  }
}
console.log(result);
power();
