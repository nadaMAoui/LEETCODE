//create a repeat function
function repeat(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}
repeat(10);
console.log();
// reapeat function using high order function
function reapeatLog(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}
reapeatLog(10, console.log);
