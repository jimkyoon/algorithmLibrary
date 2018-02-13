// Now create a recursive function for factorial
function rFactorial(num){
  // set up base case
  if(num === 1){
    return 1;
  }
  // set up the recursion
  else{
    return num * rFactorial(num - 1);
  }
}

console.log(rFactorial(5));
// 120
