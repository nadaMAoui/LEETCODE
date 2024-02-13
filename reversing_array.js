// reversing an array
function reverseArray(array) {
  let newArray = [];
  let i = array.length - 1;
  while (i >= 0) {
    newArray.push(array[i]);
    i -= 1;
  }
  return newArray;
}
console.log(reverseArray([1, 2, 3, 4, 5]));
// reversing array using loop
function reversing(array) {
  let res = [];
  for (i = array.length; i >= 0; i -= 1) {
    res.push(array[i]);
  }
  return res;
}
console.log(reverseArray([1, 2, 3, 4, 5]));
console.time("reverseArray");
console.timeEnd("reverseArray"); //reversArrayInPlace: 0.0062ms

//create pure reverse function
function reversArrayInPlace(array) {
  let res = [];
  for (let i = array.length - 1; i >= 0; i -= 1) {
    res.push(array[i]);
  }
  return res.slice("");
}
console.log(reversArrayInPlace([1, 2, 3, 4, 5]));
console.time("reversArrayInPlace");
console.timeEnd("reversArrayInPlace"); //reversArrayInPlace: 0.003ms
