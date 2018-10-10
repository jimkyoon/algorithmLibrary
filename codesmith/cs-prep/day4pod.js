// Day 4 POD

// Regular

// POD Day 4 - Regular - LargestAndSmallest - 

// The function largestAndSmallest should take one parameter, an array, and return a new array containing the largest and smallest elements from the original array.

// EX: 
// [1, 2, 3, 4, 5] --> [1, 5]
// [90, 30, 44, 66, 10] --> [10, 90]
// [16, -70, 122] --> [-70, 122]


function largestAndSmallest(array) {
  const result = [];
  let smallest = array[0];
  let largest = array[0];
  for (let i = 1; i < array.length; i += 1) {
    if (array[i] > largest) {
      largest = array[i];
    }
    else {
      if (array[i] < smallest) {
        smallest = array[i];
      }
    }
  }
  result.push(smallest, largest);
  return result;
}

// console.log(largestAndSmallest([1, 2, 3, 4, 5])); should log [1, 5]
// console.log(largestAndSmallest([90, 30, 44, 66, 10])); should log [10, 90]
// console.log(largestAndSmallest([16, -70, 122])); should log [-70, 122]


// instructor examples
function largestAndSmallest(arr) {
  // declare some output array 
    // first element will be Infinity 
    // second element will be -Infinity
  const output = [Infinity, -Infinity];
  // iterate over input array 
    // if current is < than output[0], replace it 
    // if current is > than output[1], replace it
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] < output[0]) {
      output[0] = arr[i];
    }
    if (arr[i] > output[1]) {
      output[1] = arr[i];
    }
  }
  return output;
}

const largestAndSmallestSpread = arr => [Math.min(...arr), Math.max(...arr)];

const largestAndSmallestReduce = arr => arr.reduce((acc, num) => {
  if (num < acc[0]) acc[0] = num;
  if (num > acc[1]) acc[1] = num;
  return acc;
}, [Infinity, -Infinity]);


// Advanced

// POD Day 4 - Advanced -  Reverse Number

// The function reverseNumber should take one parameter, a number, it should reverse the number and return it.

// EX: 
// 923 --> 329
// 100 --> 1
// -87 --> -78

function reverseNumber(num) {
  // result is the number reversed we want returned
  let result = 0;
  // number to manipulate
  let temp = num;
  // run while loop till number gets to 0, pushing each digit to result
  while (temp > 0) {
    // remainder gets us the last digit
    let remainder = temp % 10;
    // change temp for next iteration
    temp = Math.floor(temp / 10);
    result = result * 10 + remainder;
  }
  // negatives number return 0, maybe have a check to turn negatives into postive, then run, then return as negative?
  return result;
}

console.log(reverseNumber(456)); // should log 654
console.log(reverseNumber(1000)); // should log 1
console.log(reverseNumber(-789)); // should log -987

// Instructor examples
const reverseInteger = num => {
  let str = num.toString();
  const isNegative = num < 0 ? true : false;
  if (str[0] === '-') {
    str = str.slice(1);
  }
  let reverseString = ''
  for (let i = str.length - 1; i >= 0; i -= 1) {
    reverseString += str[i];
  }
  return (isNegative ? - 1 : 1) * Number(reverseString);
}