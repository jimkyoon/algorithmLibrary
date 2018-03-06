// create a function that takes in a string as parameter, and it will return true or false. the string will contain + and =. the string is true if each letter is surrounded by a +.
// example: input is "=====+a+======" the result should be true

// needs work
function simpleSymbols(str) {
  let detector;
  for (let i = 0; i < str.length; i += 1) {
    if (str[0] !== '+' || str[0] !== '=') {
      detector = false;
    }
    else if (str[i].match(/[a-z] && [0-9]/i) && str[i - 1] === '+' && str[i + 1] === '+') {
      detector = true;
    }
    else {
      detector = false;
    }
  }
  return detector;
}

console.log(simpleSymbols('=====+a+======'));
// result should be true
