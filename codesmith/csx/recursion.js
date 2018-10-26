// RECURSION



// Repeater
// write a function that takes an input character, returns character repeated 5 times using recursion by adding input character to variable output
let output = '';
function repeater(char) {
	if (output.length === 5) {
    return output;
  }
  output = output + char;
  return repeater(char);
}

// To check if you've completed the challenge, uncomment these console.logs!
console.log(repeater('g'));  // should print 'ggggg'



// Factorial
// write a function that returns the factorial of a number
function factorial(num) {
	if (num === 0) {
    return 1;
  }
  return num * factorial(num - 1);
}

// To check if you've completed the challenge, uncomment these console.logs!
console.log(factorial(4)); // -> 24
console.log(factorial(6)); // -> 720
console.log(factorial(0)); // -> 1



// getLength
// get length of an array using recursion without accessing the length property
function getLength(array, i = 0) {
	if (array[i] === undefined) {
    return i;
  }
  i += 1;
  return getLength(array, i);
}

// To check if you've completed the challenge, uncomment these console.logs!
console.log(getLength([1])); // -> 1
console.log(getLength([1, 2])); // -> 2
console.log(getLength([1, 2, 3, 4, 5])); // -> 5
console.log(getLength([])); // -> 0



// POW
// write a function that takes two inputs, base and exponent and returns the expected value of base^exponent
function pow(base, exponent) {
	if (exponent === 1) {
    return base;
  }
  exponent -= 1;
  return base * pow(base, exponent);
}

// To check if you've completed the challenge, uncomment these console.logs!
console.log(pow(2, 4)); // -> 16
console.log(pow(3, 5)); // -> 243



// flow
// write a function that takes an array of functions and a number that will be piped though all those functions; input number passes through the first function, whose output is passed as input to second function, whos output is passed to third, so on; use recursion to output the last result
function flow(input, funcArray) {
	if (funcArray.length === 0) {
    return input;
  }
  input = funcArray[0](input);
  return flow(input, funcArray.slice(1));
}

// To check if you've completed the challenge, uncomment this code!
function multiplyBy2(num) { return num * 2; }
function add7(num) { return num + 7; }
function modulo4(num) { return num % 4; }
function subtract10(num) { return num - 10; }
const arrayOfFunctions = [multiplyBy2, add7, modulo4, subtract10];
console.log(flow(2, arrayOfFunctions)); // -> -7
