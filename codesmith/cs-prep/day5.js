// anything you can do iteratively, you can do recursively
// declarative: you tell it what to do
// imperative: tell it how to do it

// useful for trees when you dont know how long it is

// tail call opitimization
// trampoline

// Challenges
////////////////////////////
//     Challenge 1
////////////////////////////



function repeater(char, n = 5, string = '') {
  let counter = n;
  // base case
  if (counter === 0) {
    return string;
  }
  string += char;
  counter -= 1;
  return repeater(char, counter, string);
}

// To check if you've completed the challenge, uncomment these console.logs!
console.log(repeater('g')); // -> 'ggggg'
console.log(repeater('j'));// -> 'jjjjj'


////////////////////////////
//     Challenge 2
////////////////////////////


function isEven(n) {
  let number = n
  
  if (number > 1){
    
    //base case

    if (number === 0){return true}
  	else if (number === 1){return false}
  
  	number = n - 2
  
  
  	return isEven(number)
  }
  
  if (number === 1){return false}
  else {return true}
  
	
}

// To check if you've completed the challenge, uncomment these console.logs!
console.log(isEven(0)); // -> true
console.log(isEven(5)); // -> false
console.log(isEven(10)); // -> true



////////////////////////////
//     Challenge 3
////////////////////////////


function factorial(num, product = num) {
  if (num === 0) {
    return 1;
  }
  let newNum;
  newNum = num - 1;
  // base case
  if (newNum === 0) {
    return product;
  }
  product = newNum * product;
  return factorial(newNum, product)
}

// To check if you've completed the challenge, uncomment these console.logs!
console.log(factorial(4)); // -> 24
console.log(factorial(6)); // -> 720
console.log(factorial(0)); // -> 1




////////////////////////////
//     Challenge 4
////////////////////////////


function getLength(array, i = 0) {

}

// To check if you've completed the challenge, uncomment these console.logs!
// console.log(getLength([1])); // -> 1
// console.log(getLength([1, 2])); // -> 2
// console.log(getLength([1, 2, 3, 4, 5])); // -> 5


////////////////////////////
//     Challenge 5
////////////////////////////


function pow(base, exponent) {

}

// To check if you've completed the challenge, uncomment these console.logs!
// console.log(pow(2, 4)); // -> 16
// console.log(pow(3, 5)); // -> 243

////////////////////////////
//     Challenge 6
////////////////////////////


function flow(input, funcArray, i = 0) {

}

// To check if you've completed the challenge, uncomment this code!
// function multiplyBy2(num) { return num * 2; }
// function add7(num) { return num + 7; }
// function modulo4(num) { return num % 4; }
// function subtract10(num) { return num - 10; }
// const arrayOfFunctions = [multiplyBy2, add7, modulo4, subtract10];
// console.log(flow(2, arrayOfFunctions)); // -> -7



////////////////////////////
//     Challenge 7
////////////////////////////


function fib(n) {

}

// To check if you've completed the challenge, uncomment this code!
// console.log(fib(1)); // -> 1
// console.log(fib(2)); // -> 1
// console.log(fib(7)); // -> 13

////////////////////////////
//     Challenge 8
////////////////////////////

function headsOrTails(n) {

}

// To check if you've completed the challenge, uncomment this code!
// console.log(headsOrTails(2)); // -> [['heads', 'heads'], ['heads', 'tails'], ['tails', 'heads'], ['tails', 'tails']]
// console.log(headsOrTails(2));
// -> [
//   ['heads', 'heads', 'heads'],
//   ['heads', 'heads', 'tails'],
//   ['heads', 'tails', 'heads'],
//   ['heads', 'tails', 'tails'],
//   ['tails', 'heads', 'heads'],
//   ['tails', 'heads', 'tails'],
//   ['tails', 'tails', 'heads'],
//   ['tails', 'tails', 'tails'],
// ]

////////////////////////////
//     Challenge 9
////////////////////////////

function getAllCombos(arr) {

}

// To check if you've completed the challenge, uncomment this code!
// console.log(getAllCombos(['a', 'b'])); // -> [['ab'], ['a'], ['b'], []]
// console.log(getAllCombos(['a', 'b', 'c']));
// -> [
//   ['a', 'b', 'c'],
//   ['a', 'b'],
//   ['a', 'c'],
//   ['a'],
//   ['b', 'c'],
//   ['b'],
//   ['c'],
//   [],
// ]



// Recursion
// Recursion is an uncommon idea in the real world. We don’t come across it very often and for this reason it can be difficult to wrap our heads around it.

// What is it?
// In programming, a function is considered recursive if it calls itself during execution.

// What does recursion need?
// A base case to be met; something that will end the execution. The calling of itself.

// Why is recursion helpful?
// Often recursive function are more expressive; they closer resemble how someone would describe a solution in english.

// Challenges:
// Challenge One
// Repeater

// Modify the function so that it returns a string containing the input character repeated 5 times Use recursion!

// Challenge Two
// Is Even

// Modify the function so that it returns true if a number is even (and false if it's not) assume input will be a positive integer Use recursion!

// Challenge Three
// Factorial

// Modify the function so that it returns the factorial of an input number Use recursion!

// The factorial of n is the product of all numbers between 1 and n

// Ex: 5! = 5 * 4 * 3 * 2 * 1

// Challenge Four
// Get Length

// Modify the function so that it returns the length of an array recursively, without using the .length property. Use recursion!

// Hint: when you index outside of an array, it returns undefined

// The factorial of n is the product of all numbers between 1 and n

// Ex: 5! = 5 * 4 * 3 * 2 * 1

// Challenge Five
// POW

// Modify the function so that it returns base to the power of exponent. Use recursion!

// Ex: pow(5, 3) = 5 * 5 * 5

// Challenge Six
// Flow

// Modify the function so that it returns the result of running the input number through each function in funcArray, in order. Use recursion!

// First do it recursively, if you have time at the end try using a reduce function

// Challenge Seven
// Fibinacci

// Modify the function so that it returns the nth Fibinacci number. Try not to look back at the slides!

// Fibinaccia reference: [1, 1, 2, 3, 5, 8, 13, ...]

// Challenge Eight
// Heads or Tails

// Modify the function so that it returns all possible outcomes of n games of heads or tails as an array of arrays

// Challenge Nine
// Combos of Any length

// Modify this function so that it returns all combinations of the elements of arr as an array of arrays. Use Recursion!