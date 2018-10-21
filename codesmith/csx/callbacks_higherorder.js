// CALLBACKS AND HIGHER-ORDER FUNCTIONS



// PLURALIZE
// create a function that takes an array of strings as input and returns a new array with "s" added to end of each string in array// ADD CODE HERE

const pluralize = array => array.map(el => el + 's');

// function pluralize(array) {
//   const output = [];
//   for (let i = 0; i < array.length; i += 1) {
//     output.push(array[i] + 's');
//   }
//   return output;
// }

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

// another way
const reduce = (arr, cb, initial) => {
  if (Array.isArray(arr)) {
    let output;
    if (initial) {
      output = initial;
    }
    else {
      output = arr[0];
      arr = arr.slice(1);
    }
    arr.forEach(el => {
      output = cb(output, el);
    });
    return output;
  }
  else {
    return 'First argument must be an array!';
  }
};

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
const objOfMatches = (array1, array2, callback) => {
  // build an object and return it
  const result = {};
  const arrTest = [];
  // test each element in the first array with callback to see if it matches with second array element
  array1.map(x => arrTest.push(callback(x)));
  for (let i = 0; i < arrTest.length; i += 1) {
    if (arrTest[i] === array2[i]) {
      result[array1[i]] = array2[i];
    }
  }
  return result;
};

// Uncomment these to check your work!
var arr1 = ['hi', 'howdy', 'bye', 'later', 'hello'];
var arr2 = ['HI', 'Howdy', 'BYE', 'later', 'HELLO'];
function uppercaser(str) { return str.toUpperCase(); }
console.log(objOfMatches(arr1, arr2, uppercaser)); // should log: { hi: 'HI', bye: 'BYE', hello: 'HELLO' }



// multiMap
// construct a function that takes in two arrays, 1. values, 2. callbacks; return an object where the keys are the values of the first array, and the values are the results of the callback ran on the values from the first array
const multiMap = (arrayVal, arrayCB) => {
  // return an object whose keys match the elements in the array of vals
  const result = {};
  // the keys are the values in array 1
  // the values are the result of the callback functions
  arrayVal.map((el) => {
    result[el] = [];
    arrayCB.forEach((cbel) => {
      result[el].push(cbel(el));
    });
  });
  return result;
};

// using reduce
const multiMap = (arrayVal, arrayCB) => {
  return arrayVal.reduce((acc, el) => {
    acc[el] = [];
    arrayCB.forEach(ele => acc[el].push(ele(el)));
    return acc;
  }, {});
};

// Uncomment these to check your work!
function uppercaser(str) { return str.toUpperCase(); }
function capitalize(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }
function repeater(str) { return str + str; }
var items = ['catfood', 'glue', 'beer'];
var functions = [uppercaser, capitalize, repeater];
console.log(multiMap(items, functions)); // should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }



// majority
// create a function that will take in an array and callback, the callback will return true or false, run it though every element; in the end, if majority of them are true, return true, otherwise, if they are equal or false is the majority, return false
const majority = (array, callback) => {
  // object to track
  const result = {};
  result.t = array.filter(el => callback(el)).length;
  result.f = array.length - array.filter(el => callback(el)).length;
  if (result.t > result.f) {
    return true;
  }
  else if (result.t <= result.f) {
    return false;
  }
};

// Uncomment these to check your work!
var isOdd = function(num) { return num % 2 === 1; };
console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
console.log(majority([2, 3, 4, 5], isOdd)); // should log: false



// prioritize
// create a function that accepts an array and callback, callback returns either true or false, go through the array with the callback and return the elements that result true then the rest of the elements
const prioritize = (array, callback) => {
  // return an array
  // filter the ones callback turns out true
  const result = array.filter(el => callback(el));
  array.forEach((el) => {
    if (!result.includes(el)) {
      result.push(el);
    }
  });
  return result;
};

// Uncomment these to check your work!
function startsWithS(str) { return str[0].toLowerCase() === 's'; }
var tvShows = ['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends']
console.log(prioritize(tvShows, startsWithS)); // should log: ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']



// countBy
// create a function that accepts an array and callback and returns an object; go through the array with callback on each element. return value from callback will be saved as a key, and value is the number of times that was returned
const countBy = (array, callback) => {
  // object to return
  const result = array.map(el => callback(el)).reduce((resArr, res) => {
    if (res in resArr) {
      resArr[res] += 1;
    }
    else {
      resArr[res] = 1;
    }
    return resArr;
  }, {});
  return result;
};

// Uncomment these to check your work!
function evenOdd(n) {
  if (n % 2 === 0) return 'even';
  else return 'odd';
}
var nums = [1, 2, 3, 4, 5];
console.log(countBy(nums, evenOdd)); // should log: { odd: 3, even: 2 }



// groupBy
// create a function that takes in an array and callback; should return an object; keys are the callback results; values are the arguments that results the keys
const groupBy = (array, callback) => {
  return array.reduce((acc, el) => {
    const output = callback(el);
    if (!(output in acc)) {
      acc[output] = [el];
    }
    else {
      acc[output].push(el);
    }
    return acc;
  }, {});
};

// Uncomment these to check your work!
var decimals = [1.3, 2.1, 2.4];
var floored = function(num) { return Math.floor(num); };
console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }



// goodKeys
// create a function that takes in an object and callback; callback will return true or false; return value will be an array of all the keys that return true from callback
const goodKeys = (object, callback) => {
  const keys = Object.keys(object);
  const values = Object.values(object);
  const truekeys = values.map(el => callback(el));
  const result = [];
  for (let i = 0; i < truekeys.length; i += 1) {
    if (truekeys[i] === true) {
      result.push(keys[i]);
    }
  }
  return result;
};

// Uncomment these to check your work!
var sunny = { mac: 'priest', dennis: 'calculating', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };
function startsWithBird(str) { return str.slice(0, 4).toLowerCase() === 'bird'; };
console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']