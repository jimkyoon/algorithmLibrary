// Fibonacci sequence without recursion
function iFibonacci(num){
  let fib = [0, 1];
  for(let i = 0; i < num; i++){
    fib.push(fib[0] + fib[1]);
    fib.shift();
  }
  return fib[0];
}

console.log(iFibonacci(3));
// 2
