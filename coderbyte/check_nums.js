// create a function where it takes 2 numbers, checking and returning "true" if num 2 is greater than num 1, otherwise, return "false"

function checkNums(num1, num2) {
  if (num2 > num1) {
    return true;
  }
  else if (num1 === num2) {
    return -1;
  }
  else {
    return false;
  }
}

console.log(checkNums(1, 2));
// result: true
