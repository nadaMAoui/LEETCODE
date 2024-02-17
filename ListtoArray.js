//spread a list into array
function ListToArray(...lists) {
  let newArray = lists.flat(Infinity);
  return newArray;
}
console.log(ListToArray([1, 2, 3, [5, 4]]));

// push an element in the front of a list
function prepend(element, list) {
  let new_list = [element, ...list];
  return new_list;
}
console.log(prepend(25, [20, 3]));

// return index of element
function nth(list, index) {
  if (index >= list.length || index < 0) {
    return "undefined";
  } else {
    return list[index];
  }
}
console.log(nth([20, 3], 0));
