// create a function that will take a "num" parameter and after being passed into the function, it will return the factorial of it.
// example: num = 4, result = (4*3*2*1) = 24

function firstFactorial(num) {
  if (num < 0) {
    return 'undefined';
  }
  else if (num === 0) {
    return 1;
  }
  else {
    return num * firstFactorial(num-1);
  }
}

console.log(firstFactorial(4));
// result should be 24

console.log(firstFactorial(0));
// result should be 1

console.log(firstFactorial(1));
// result should be 1

// checking edge cases
console.log(firstFactorial(-1));
// result should be undefined
