// POD Day 7 - Self Recording - Check if Sorted 
// Given an array of integers, check to see if the array is already sorted (return true or false)

// Focus on clearly explaining your solution

// Once you've solved it iteratively, try to solve it recursively or using functional programming

// If you have time, write and walk through some test cases for your code.

// What's the time complexity of your solution?

const exampleArray1 = [73, 44,	42,	60,	49,	14,	23,	18,	100,	40];
const exampleArray2 = [71,	19,	91,	10,	39,	100,	37,	86,	86,	88];
const exampleArray3 = [26,	55,	86,	42,	81,	10,	28,	91,	73,	75];
const sortedArrayEx = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// the iterative way
const checkIfSorted1 = (array) => {
  // using for loop, go over every single element
  for (let i = 0; i < array.length; i += 1) {
    // if at any index point, if the current index is greater than the next index, its not sorted
    if (array[i] > array[i + 1]) {
      // so return false
      return false;
    }
  }
  // else return true if the loop finds nothing
  return true;
};
// time complexity of the iterative way is: Linear O(n), because of 1 loop

// checkIfSorted1(exampleArray1); // -> false
// checkIfSorted1(exampleArray2); // -> false
// checkIfSorted1(exampleArray3); // -> false
// checkIfSorted1(sortedArrayEx); // -> true