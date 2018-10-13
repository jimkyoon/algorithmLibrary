// CS Prep Assessment

// Challenge 1: Select
// Define a function select which takes two arguments, an array and a callback function. The callback function can be considered a test in that it will return either true or false depending on the input. select will iterate/loop through the array and pass each array element to the callback as an argument.

// If the callback called on a certain value returns true, the original value (the input to the callback) is pushed to a new array. select will return this new array.

const select = (array, callback) => {
  // create an array to return out at the end 
  const result = [];
  // go through the array and apply the callback on each element
  array.forEach(element => {
    // if the callback returns true, push it into the result array
    if (callback(element)) {
      result.push(element);
    }
  });
  // return the result
  return result;
}

// UNCOMMENT THESE LINES TO CHECK YOUR WORK
const arr = [1, 2, 3, 4, 5];
const isEven = n => n % 2 === 0;
console.log(select(arr, isEven)); // should log: [2, 4]



// Challenge 2: Russian Roulette
// Define a function russianRoulette that accepts a number (let us call it n), and returns a function. The returned function will take no arguments, and will return the string ‘click’ the first n - 1 number of times it is invoked. On the very next invocation (the nth invocation), the returned function will return the string ‘bang’. On every invocation after that, the returned function returns the string ‘reload to play again’.

const russianRoulette = n => {
  // create a tracking number and n for the function to know how many shots till the nth number
  let tracker = 1;
  const nth = n;
  // declare the function to return 
  const theShot = () => {
    // if tracker reachs the n argument, return bang
    if (tracker === nth) {
      tracker += 1;
      return 'bang';
    }
    // if tracker is still less than n, return click and increase tracker by 1
    else if (tracker < nth) {
      tracker += 1;
      return 'click';
    }
    // if tracker is past n, return reload to play again, and increase tracker by 1
    else if (tracker > nth) {
      tracker += 1;
      return 'reload to play again';
    }
  }
  return theShot;
}

// UNCOMMENT THESE LINES TO CHECK YOUR WORK
const play = russianRoulette(3);
console.log(play()); // should log: ‘click’
console.log(play()); // should log: ‘click’
console.log(play()); // should log: ‘bang’
console.log(play()); // should log: ‘reload to play again’
console.log(play()); // should log: ‘reload to play again’



// Challenge 3: nth Fibonacci
// Define a function nthFibonacci that takes a number n and returns n's corresponding Fibonacci number.

// Fibonacci series: 1, 1, 2, 3, 5, 8, 13, 21, 34 (each number is found by adding the previous two)
// More Info: https://en.wikipedia.org/wiki/Fibonacci_number

const nthFibonacci = n => {
  // base case
  // since series is starting with the second 1 in the fib sequence
  // check to see if number is less than 3
  // since 0 would return 0, 1 return 1, and 2 would return 2 
  if (n < 3) {
    return n;
  }
  // recursive case
  // apply the fibonacci math, which is adding the 2 numbers before the nth number in the fib sequence
  // return the sum of "number-1" and the number before that, which is "number-2"
  return nthFibonacci(n - 1) + nthFibonacci(n - 2);
}

// UNCOMMENT THESE LINES TO CHECK YOUR WORK
console.log(nthFibonacci(1)); // should log: 1, the series starts with the second 1
console.log(nthFibonacci(2)); // should log: 2
console.log(nthFibonacci(3)); // should log: 3
console.log(nthFibonacci(4)); // should log: 5
console.log(nthFibonacci(12)); // should log: 233
