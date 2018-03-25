// Fibonacci sequence without recursion
function iFibonacci(num) {
  const fib = [0, 1];
  for (let i = 0; i < num; i += 1) {
    fib.push(fib[0] + fib[1]);
    fib.shift();
  }
  return fib[0];
}

console.log(iFibonacci(3));
// 2
