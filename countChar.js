// counting number of chars using recursion
function countChar(str, char = 0) {
  if (char === str.length) {
    return char;
  } else {
    return countChar(str, char + 1);
  }
}
console.log(countChar("softwareEngineer"));
