// Create a factorial function without recursion
function iFactorial(num){
  let result = 1;
  for(let i = 1; i < num+1; i++){
    result *= i;
  }
  return result;
}

console.log(iFactorial(5));
// 120
