// Day 3 POD

// Regular

// POD Day 3 - Regular - addingToX & arrayToX

// Challenge Part 1
// Create a function called addingToX that accepts a number as an argument.

// It will return the sum of every integer from 1 up to and including the input number.

// addingToX(0) will return 0
// addingToX(1) will return 1
// addingToX(2) will return 3
// addingToX(3) will return 6
// addingToX(4) will return 10
// addingToX(5) will return 15
// addingToX(10) will return 55

// Challenge Part 2
// Write a function arrayToX that accepts a number as an argument.

// It will return an array where each element is the return value of calling addingToX on each integer from 1 up to and including the input number.

// arrayToX(1) will return [1]
// arrayToX(2) will return [1, 3]
// arrayToX(3) will return [1, 3, 6]
// arrayToX(4) will return [1, 3, 6, 10]
// arrayToX(5) will return [1, 3, 6, 10, 15]

//Challenge Part 1
function addingToX(num) {
  let sum = 0;
  for (let i = 0; i <= num; i += 1) {
    sum += i;
  }
  return sum;
}

// Test your answer (delete the //)
console.log(addingToX(1));  // 1
console.log(addingToX(2));  // 3
console.log(addingToX(3));  // 6
console.log(addingToX(10)); // 55



// Instructor examples
function addingToX (num) {
  return (num * (num + 1) / 2);
}



//Challenge Part 2

function arrayToX(num) {
  let result = [];
  for (let i = 1; i <= num; i += 1) {
    result.push(addingToX(i));
  }
  return result;
}

//Test your answer (delete the //)
console.log(arrayToX(1));   // [1]
console.log(arrayToX(2));   // [1, 3]
console.log(arrayToX(3));   // [1, 3, 6]
console.log(arrayToX(10));  // [1, 3, 6, 10, 15, 21, 28, 36, 45, 55]



// Advanced

// POD Day 3 - Advanced - Modemean
// Given an array of numbers, determine if the mode and mean of the array are equivalent

//  Caveats:
//  Math.floor the mean
//  If there are multiple modes, use the max of the modes
 
//  Return true or false

//Challenge 1 
function modemean(array) {
  // create variables for mean and mode results
  let mode = 0;
  let mean = 0;
  
  // start mean with forloop then divide by length
  let sum = 0;
  for (let i = 0; i < array.length; i += 1) {
    sum += array[i];
  }
  mean = sum / array.length;
  
  // now onto mode, using object to take count 
  const counter = {};
  for (let i = 0; i < array.length; i += 1) {
    // check to see if property exists, if it does, add a counter
    if (counter.hasOwnProperty("array[i]")) {
      counter["array[i]"] += 1;
    }
    // if it doesn't, start it with 1
    else{
      counter["array[i]"] = 1;
    }
  }
  // then use for..in loop to check which one has the most
  // most and holder placeholders whenever the largest mode appears
  let most = 0;
  let holder;
  for (let count in counter) {
    // to start out 
    if (most === 0) {
      most = counter.count;
      holder = count;
    }
    // change most and holder everytime larger mode is found
    else {
      if (counter.count > most) {
        most = counter.count;
        holder = count;
      }
    }
  }
  mode = holder;
  
  // check to see if mode and mean are the same
  if (mean === mode) {
    return true;
  }
  else {
    return false;
  }
}

// instructor's version

function modemean (array) {
  // mode
  const tallys = array.reduce((acc, num) => {
    if (acc[num]) {
      acc[num] += 1;
    }
    else {
      acc[num] = 1;
    }
    return acc;
  }, {});

  Object.keys(tallys).reduce((acc, num) => {
    if (!tallys[acc]) {
      acc = num;
    }
    if (tallys[n] > tallys[acc]) {
      acc = num;
    }
  }, -Infinity);

  // mean
  const mean = Math.floor(array.reduce((acc, num) => acc + num) / array.length);

  return mean === mode;
}

// another version

const modeMean2 = (arr) => {
  const mathObject = {
    mode: -Infinity,
    sum: 0
  }
  arr.reduce((acc, num) => {
    acc.sum += num;
    if (!acc[num]) {
      acc[num] = 1;
    }
    else {
      acc[num] += 1;
    }
    if (acc[num] > acc[acc[mode]]) {
      acc.mode = num;
    }
    return acc;
  }, mathObject);
  return mathObject.mode === math.floor(mathObject.sum / arr.length);
}