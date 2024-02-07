// loop
function countBs(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++)
    if (str[i] === "B") {
      count += 1;
    }
  return count;
}
console.log(countBs("BaBa"));
// recursion
function countBS(str, len = 0, count = 0) {
  if (str.length == len) {
    return count;
  } else {
    if (str[len] === "B") {
      count += 1;
    }
    return countBS(str, len + 1, count);
  }
}
console.log(countBs("Baba"));
