// CALLBACKS AND HIGHER-ORDER FUNCTIONS



// PLURALIZE
// create a function that takes an array of strings as input and returns a new array with "s" added to end of each string in array// ADD CODE HERE
function pluralize(array) {
  const output = [];
  for (let i = 0; i < array.length; i += 1) {
    output.push(array[i] + 's');
  }
  return output;
}

// Uncomment these to check your work!
const animals = ['dog', 'cat', 'tree frog'];
console.log(pluralize(animals)); // should log: ["dogs", "cats", "tree frogs"]



// MAP
// create a function subtractTwo that accepts a number and returns a number minus 2; then create a function map that takes two inputs, 1. array of numbers and 2. callback function; have map return a new array filled with numbers that are the result of using callback to each element of input array
function subtractTwo(num) {
  return num - 2;
}

function map(array, callback) {
  const output = [];
  for (let i = 0; i < array.length; i += 1) {
    output.push(callback(array[i]));
  }
  return output;
}

// Uncomment these to check your work!
console.log(typeof subtractTwo); // should log: 'function'
console.log(typeof map); // should log: 'function'
console.log(map([3, 4, 5], subtractTwo)); // should log: [ 1, 2, 3 ]



// forEach
// create a function forEach that takes two inputs, array and callback, and invokes the callback once for each element of the array. forEach does not return anything. then rebuild map, but instead of using for loop, use forEach.
// ADD CODE HERE
function forEach(array, callback) {
  for (let i = 0; i < array.length; i += 1) {
    callback(array[i], i, array);
  }
}

function map(array, callback) {
  const output = [];
  function changes(value) {
    output.push(callback(value));
  }
  forEach(array, changes);
  return output;
}



// Uncomment these to check your work!
console.log(typeof forEach); // should log: 'function'
forEach(['a', 'b', 'c'], i => console.log(i)); // should log: 'a', 'b', 'c'
console.log(typeof map); // should log: 'function'
console.log(map([3, 4, 5], n => n - 2)); // should log: [1, 2, 3]



// REDUCE
// construct your own reduce function that takes in an array, callback, and initial value
// ADD CODE HERE
function reduce(array, callback, initval) {
  let result = initval;
  for (let i = 0; i < array.length; i += 1) {
    result = callback(result, array[i]);
  }
  return result;
}

// more complete way
function reduce(array, callback, initval) {
  if (Array.isArray(array)) {
    let result;
    if (initval === undefined) {
      result = array[0];
      array = array.slice(1);
    }
    else {
      result = initval;
    }
    array.forEach(function(el, index, arr) {
      result = callback(result, el, index, arr);
    });
    return result;
  }
  return 'First argument should be an array';
}

// Uncomment these to check your work!
var nums = [4, 1, 3];
var add = function(a, b) { return a + b; }
console.log(reduce(nums, add, 0)); // should log 8



// INTERSECTION
// create a function that compares input arrays and returns a new array with elements found in all inputs
function intersection(array) {
  const result = [];
  const tracker = {};
  for (let i = 0; i < array[0].length; i += 1) {
    if (tracker[array[0][i]] === undefined) {
      tracker[array[0][i]] = 1;
    }
    else {
      tracker[array[0][i]] += 1;
    }
  }
  for (let i = 1; i < array.length; i += 1) {
    let line = array[i];
    for (let j = 0; j < line.length; j += 1) {
      if (tracker.hasOwnProperty(line[j])) {
        tracker[line[j]] += 1;
      }
      else {
        tracker[line[j]] = 1;
      }
    }
  }
  for (let i in tracker) {
    if (tracker[i] === array.length) {
      result.push(Number(i));
    }
  }
  return result;
}

// Uncomment these to check your work!
var arr1 = [5, 10, 15, 20];
var arr2 = [15, 88, 1, 5, 7];
var arr3 = [1, 10, 15, 5, 20];
console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]



// UNION
// construct a union function that takes an input of arrays of arrays, compares each, then returns a flat array containing all elements, no duplicates
function union(array) {
  const result = [];
  for (let i = 0; i < array[0].length; i += 1) {
    if (result.includes(array[0][i])) {
      continue;
    }
    else {
      result.push(array[0][i]);
    }
  }
  for (let i = 1; i < array.length; i += 1) {
    let line = array[i];
    for (let j = 0; j < line.length; j += 1) {
      if (result.includes(line[j])) {
        continue;
      }
      else {
        result.push(line[j]);
      }
    }
  }
  return result;
}

// Uncomment these to check your work!
var arr1 = [5, 10, 15];
var arr2 = [15, 88, 1, 5, 7];
var arr3 = [100, 15, 10, 1, 5];
console.log(union([arr1, arr2, arr3])); // should log: [5, 10, 15, 88, 1, 7, 100]



// objOfMatches
// construct a function that accepts two arrays and a callback; this will build an object and return it; the function will test each element of the first array using the callback to see if the output matches the elements of the second array
