// Now create the fibonacci function using recursion
function rFibnoacci(num) {
  // set up base case
  if (num === 1 || num === 2) {
    return 1;
  }
  return rFibnoacci(num - 1) + rFibnoacci(num - 2);
}

console.log(rFibnoacci(5));
// 5
