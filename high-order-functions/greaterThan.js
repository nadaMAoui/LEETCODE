//create a new function form high order function
function greaterThan(n) {
  return (m) => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
//function change other functions
function noisy(f) {
  return (...args) => {
    console.log("calling with", args);
    let result = f(...args);
    console.log("called with", args, ", returned", result);
    return result;
  };
}
noisy(Math.min)(3, 2, 1, 0);
//provide new type of control flow
function unless(test, then) {
  if (!test) then();
}
function repeat(times, action) {
  for (let i = 0; i < times; i++) {
    action(i);
  }
}
repeat(3, (n) => {
  unless(n % 2 == 1, () => {
    console.log(n, "is even");
  });
});
// high order function like for each
["a", "b", "c"].forEach((element) => console.log(element));
