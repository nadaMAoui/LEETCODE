// print three digits long number
function threeDigits(x) {
  let xString = String(x);
  while (xString.length < 3) {
    xString = "0" + xString;
  }
  console.log(`${xString} oject`);
}
threeDigits();
