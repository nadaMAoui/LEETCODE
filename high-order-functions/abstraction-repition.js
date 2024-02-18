//create a repeat function
function repeat(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}
repeat(10);
console.log();
// reapeat function using high order function
function repeatLog(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}
//repeatLog(10, console.log);
let labels = [];
repeatLog(5, (i) => {
  labels.push(`unit${i + 1}`);
});
console.log(labels);
