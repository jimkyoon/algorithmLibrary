// Use recursion in a function to get a sum of a number
function iSum(num) {
  // set up base case
  if (num === 1) {
    return 1;
  }
  return iSum(num - 1) + num;
}

console.log(iSum(5));
// 15
