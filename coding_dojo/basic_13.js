// Basic 13 algorithm challenge

// 1. Return an array of numbers from 1-255
function array1to255() {
  const arr = [];
  for (let i = 1; i < 256; i += 1) {
    arr.push(i);
  }
  return arr;
}

array1to255();

// 2. Return an array of all even numbers from 0 to 1000
function even1000() {
  const arr = [];
  for (let i = 0; i < 1001; i += 1) {
    if (i % 2 === 0) {
      arr.push(i);
    }
  }
  return arr;
}

even1000();

// 3. Return the sum of all odd numbers from 0 to 5000
function sum5000() {
  let sum = 0;
  for (let i = 0; i < 5001; i += 1) {
    if (i % 2 !== 0) {
      sum += i;
    }
  }
  return sum;
}

sum5000();

// 4. Return the sum of all the values in an array
function sumArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i += 1) {
    sum += array[i];
  }
  return sum;
}

sumArray([1, 2, 3]);
// 6

// 5. Find the max of an array
function findMax(array) {
  let max = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}

findMax([1, 2, 3, 4, 5]);
// 5

// 6. Find the average of an array
function findAvg(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i += 1) {
    sum += array[i];
  }
  return sum / array.length;
}

findAvg([1, 2, 3, 4, 5]);
// 3

// 7. Return an array of all odd numbers between 1 and 50
function oddNumbers() {
  const arr = [];
  for (let i = 1; i < 51; i += 1) {
    if (i % 2 !== 0) {
      arr.push(i);
    }
  }
  return arr;
}

oddNumbers();

// 8. Write a function that takes in an array and a number. It should return out amount of numbers from the array that are greater than the number provided
function greaterThanX(array, X) {
  const result = [];
  for (let i = 0; i < array.length; i += 1) {
    if (X < array[i]) {
      result.push(array[i]);
    }
  }
  return result.length;
}

greaterThanX([1, 2, 3, 4, 5], 3);
// 2

// 9. Return the array of squared numbers from the original array
function squareVal(array) {
  const arr = [];
  for (let i = 0; i < array.length; i += 1) {
    arr.push(array[i] * array[i]);
  }
  return array;
}

squareVal([1, 2, 3]);
// [1,4,9]

// 10. Return an array with all negative numbers replaced by 0
function noNeg(array) {
  const newArr = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] < 0) {
      newArr.push(0);
    }
    else {
      newArr.push(array[i]);
    }
  }
  return array;
}

noNeg([-1, 2, -3, 4]);
// [0,2,0,4]

// 11. Return an array of the minimum, maximum, and average of the given array
function minMaxAvg(array) {
  let max = array[0];
  let min = array[0];
  let avg = 0;
  let sum = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (max < array[i]) {
      max = array[i];
    }
    if (min > array[i]) {
      min = array[i];
    }
    sum += array[i];
  }
  avg = sum / array.length;
  return [min, max, avg];
}

minMaxAvg([1,2,3,4,5]);
// [1,5,3]

// 12. Swap the first and last numbers of an array
function swapFirstLast(array) {
  const newArr = array;
  const temp = array[0];
  newArr[0] = array[array.length - 1];
  newArr[array.length - 1] = temp;
  return newArr;
}

swapFirstLast([1, 2, 3, 4, 5]);
// [5,2,3,4,1]

// 13. Replace any negative numbers with "Dojo"
function negAreString(array) {
  const newArr = array;
  for (let i = 0; i < newArr.length; i += 1) {
    if (newArr[i] < 0) {
      newArr[i] = 'Dojo';
    }
  }
  return newArr;
}

negAreString([1, -2, 3, -4, 5]);
// [1, "Dojo", 3, "Dojo", 5]
