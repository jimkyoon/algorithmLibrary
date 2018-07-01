// Chapter 1 - Fundamentals
// pg 19

// Countdown
// Create a function that accepts a number as an input. Return a new array that counts down by 1 from the number to 0. How long is this array?
function countDown (num) {
  const newArr = [];
  for (let i = num; i >= 0; i -= 1) {
    newArr.push(i);
  }
  return newArr;
}
console.log(countDown(5).length);

// Print and Return
// The function will receive an array with two numbers. Print the first value and return the second.
function printAndReturn (array) {
  console.log(array[0]);
  return array[1];
}
console.log(printAndReturn([1, 2]));

// First Plus Length
// Given an array, return the sum of the first number in the array and the length.
function firstPlusLength (array) {
  if (isNaN(array[0])) {
    return "Error";
  } 
  else {
    return array[0] + array.length;
  }
}
console.log(firstPlusLength([1, 2, 3, 4, 5]));

// Values Greater than Second (also generalized)
// For [1, 3, 5, 7, 9, 13], print values that are greater than the 2nd value and return how many were printed
function valuesGreater2nd (array) {
  if (array.length >= 2) {
    const second = array[1];
    let counter = 0;
    for (let i = 0; i < array.length; i += 1) {
      if (array[i] > second) {
        console.log(array[i]);
        counter += 1;
      }
    }
  }
  else {
    return "Error";
  }
  
}
console.log(valuesGreater2nd([1, 3, 5, 7, 9, 13]));

