// spread an array to list
function arrayToList(...arr) {
  let list = [];
  for (let element of arr) {
    if (Array.isArray(element)) {
      list.push(...element);
    } else {
      list.push(element);
    }
  }
  return list;
}
console.log(arrayToList(1, 2, 3, [10, 20]));

//spead an array to list another method
function arrayToList1(...array) {
  let flatList = array.flat(Infinity);
  return flatList;
}
console.log(arrayToList1(1, 2, 3, [10, 20]));
