// Higher order functions are functions that have functions as part of their parameters (callbacks)
// Callbacks are functions that are passed into a function as an argument

// Challenge 1
// Create a function addTwo that accepts one input and adds 2 to it
function addTwo(num) {
  return num + 2;
}

// testß
console.log(addTwo(3));
// 5

// Challenge 2
// Create a function addS that accepts one input and adds an "s" to the end
function addS(word) {
  return word + 's';
}

// test
console.log(addS('Dog'));
// Dogs

// Challenge 3
// Create a function called map that takes two inputs: 1. an array of numbers and 2. a callback function, and have map return a new array willed with the results of using callback on each element
function map(array, callback) {
  const newArr = [];
  for (let i = 0; i < array.length; i += 1) {
    newArr.push(callback(array[i]));
  }
  return newArr;
}

// test
console.log(map([1, 2, 3], addTwo));
// [3,4,5]

// Challenge 4
// Create a function forEach that takes an array and a callback, runs the callback on each element of the array
function forEach(array, callback) {
  for (let i = 0; i < array.length; i += 1) {
    callback(array[i]);
  }
}

// Extension 1
// Rebeuild map as mapWith, and this time, build mapWith using forEach inside instead of a for loop
function mapWith(array, callback) {
  const arr = [];
  forEach(array, function (x) {
    arr.push(callback(x));
  })
  return arr;
}

//test
console.log(mapWith([1, 2, 3], addTwo));
// [3,4,5]

// Extension 2
// Build the reduce function that takes an array and reduces the elements to a single value.
function reduce(array, callback, initialValue) {

}

// test
let nums = [4, 1, 3];
let add = function(a,b){ return a + b};
reduce(nums, add, 0);
// 8

// Extension 3
// Build a function intersection that compares input arrays and returns a new array with elements found in all inputs
function intersection(arrays) {

}

//test
// console.log(interestion([5,10,15,20], [15,88,1,5,7], [1,19,15,5,20]));
// [15,5]

// Extension 4
// Build a function union that compares input arrays and returns a new array that contains all elements, no duplicate elements, preserve the order
function union(arrays) {

}

// test
// console.log(union([5.10.15], [15,88,1,5,7], [100,15,10,1,5]));
// [5,10,15,88,1,7,100]
