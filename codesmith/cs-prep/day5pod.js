// Dau 5 POD


// Regular
// POD Day 5 - Regular - 2Sum
// Given an array of numbers and a target number, return true if there are two numbers in the array that sum up to the target value; return false otherwise

// BONUS: Get twoSum to work without using nested loops

function twoSum(arr, target) {
  let counter = 0;
  for (let i = 0; i < arr.length; i += 1) {
    let check1 = arr[i];
    for (let j = 0; j < arr.length; j += 1) {
      if (i === j) {
        continue;
      }
      else {
        if (arr[i] + arr[j] === target) {
          counter += 1;
        }
      }
    }
  }
  if (counter > 1) {
    return true;
  }
  else {
    return false;
  }
}

function twoSumTests() {
  console.log(twoSum([1,2,5,7], 3), ' -> ', true);
  console.log(twoSum([1,2,5,7], 5), ' -> ', false);
  console.log(twoSum([1], 5), ' -> ', false);
  console.log(twoSum([1, -1, 0, -2, 2, 2, 3, 4, 5, 7], -1), ' -> ', true);
}

twoSumTests() // uncomment to test




// Advanced
// POD Day 5 - Advanced - Exclusive Sum
// Given an array of numbers, return an array of sums where the value at each index of the output array is the sum of the the values at all other indices of the
// input array

// Ex: 
// [1, 3, 4, 2] -> [9, 7, 6, 8], since 9 = 3 + 4 + 2, 7 = 1 + 4 + 2, 6 = 1 + 3 + 2, and 8 = 1 + 3 + 4

// Bonus 1: Get exclusiveSum to work without nested loops

// Bonus 2: Modify this function to be 'exclusive product'
// Ex: 
// [1, 3, 4, 2] -> [24, 8, 6, 12]

// Make sure your solution can handle zeros!

function exclusiveSum(arr) {
  // create return array
  const result = [];
  // set up first for loop to go over the array
  for (let i = 0; i < arr.length; i += 1) {
    // create a variable to add up the sum of the other numbers
    let tracker = 0;
    // start another for loop to go through the same array, excluding the ones that land on the same index
    for (let j = 0; j < arr.length; j += 1) {
      // if same index, skip
      if (i === j) {
        continue;
      }
      // add to tracker
      else {
        tracker += arr[j];
      }
    }
    // after finishing 1 index, add the sum of the other index to result array, and then continue
    result.push(tracker);
  }
  // return the new array with sums
  return result;
}

// without nested loops
// function exclusiveSum(arr) {
  
// }

function exclusiveSumTests() {
  console.log(exclusiveSum([1,3,4,2]), ' -> ', [9, 7, 6, 8]);
  console.log(exclusiveSum([1,2,5]), ' -> ', [7, 6, 3]);
  console.log(exclusiveSum([1,2,5,0]), ' -> ', [7, 6, 3, 8]);
  console.log(exclusiveSum([1]), ' -> ', [0]);
}

exclusiveSumTests() // uncomment to test