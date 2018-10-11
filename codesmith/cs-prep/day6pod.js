// POD Day 6 - Regular - Reverse Integer
// Given a positive integer, return the number you get when you reverse all the digits

// Ex: 
// 1234 -> 4321

function reverseInt(int, res = 0) {
  let result = res;
  let temp = int;
  // base case 
  if (int === 0) {
    return result;
  }
  // recursive case
  let remainder = temp % 10;
  temp = Math.floor(temp / 10);
  result = result * 10 + remainder;
  return reverseInt(temp, result);
}

function reverseIntTests() {
  console.log(reverseInt(1234), ' -> ', 4321);
  console.log(reverseInt(1), ' -> ', 1);
  console.log(reverseInt(87654), ' -> ', 45678);
  console.log(reverseInt(13542), ' -> ', 24531);
}

reverseIntTests() // uncomment to test



// POD Day 6 - Regular - Common Elements 
// Given 2 arrays that may contain both numbers and strings return a new array with the numbers and/or strings that appear in both arrays duplicates are only counted once;

// Ex: 

// var array1 = [1,4,6,7,'ferret',12,12,99,2000,'dog','dog',99,1000];
// var array2  = [15,9,9,'ferret',9,26,12,12,'dog'];
// commonElements(array1, array2) -> [ 12, 'ferret', 'dog']
// if there are no common numbers or strings, return []

// Bonus: Modify commonElements to take in an array of arrays and only return elements that appear in every array

function commonElements(array1, array2, res, track){
  // create the return array
  const result = res;
  // check to see which is the smaller array, then assign them to smaller or larger
  let smaller;
  let larger;
  if (array1 < array2) {
    smaller = array1;
    larger = array2;
  }
  else {
    smaller = array2;
    larger = array1;
  }
  // create an array index tracker
  let tracker = 0;
  // base case
  if (tracker === smaller.length) {
    return result;
  }
  // recursive case
  // check each of the larger array elements against the smaller[tracker]
  // push similar ones to result array
  // check to see if it exists, if it does skip, if it doesnt, add to result array
  return commonElements(smaller, larger, result, tracker);
}

function commonElementsTests() {
  var array1 = [1,4,6,7,'ferret',12,12,99,2000,'dog','dog',99,1000];
  var array2  = [15,9,9,'ferret',9,26,12,12,'dog'];
  console.log(commonElements(array1, array2), " -> ", [ 12, 'ferret', 'dog']);
}

//commonElementsTests() // uncomment to test



// instructors version
const reverseInteger = num => {
  let integer = num;
  let reverseNumber = '';
  if (num === 0) return 0;
  if (num < 0) {
    integer *= -1;
    reverseNumber += '-';
  }
  integer = integer.toString();
  for (let i = integer.length - 1; i >= 0; i -= 1) {
    reverseNumber += integer[i];
  }
  return Number(reverseNumber);
}

// this does not handle negatives as is 
const reverseIntRecurse = (num, result = '') => {
  const append = num % 10;
  result += append.toString();
  if (num < 10) return Number(result);
  return reverseIntRecurse(Math.floor(num / 10), result);
}

function reverseIntTests() {
  console.log(reverseInteger(1234), ' -> ', 4321);
  console.log(reverseInteger(1), ' -> ', 1);
  console.log(reverseInteger(87654), ' -> ', 45678);
  console.log(reverseInteger(13542), ' -> ', 24531);
} 


function reverseIntRecurseTests() {
  console.log(reverseIntRecurse(1234), ' -> ', 4321);
  console.log(reverseIntRecurse(1), ' -> ', 1);
  console.log(reverseIntRecurse(87654), ' -> ', 45678);
  console.log(reverseIntRecurse(13542), ' -> ', 24531);
} 
// reverseIntTests();

/*
POD Day 6 - Regular - Common Elements
Given 2 arrays that may contain both numbers and strings return a
new array with the numbers and/or strings that appear in both arrays duplicates
are only counted once;

Ex:

var array1 = [1,4,6,7,'ferret',12,12,99,2000,'dog','dog',99,1000];
var array2  = [15,9,9,'ferret',9,26,12,12,'dog'];
commonElements(array1, array2) -> [ 12, 'ferret', 'dog']
if there are no common numbers or strings, return []

Bonus: Modify commonElements to take in an 
array of arrays and only return elements that appear in every array
*/

const commonElements = (arr1, arr2) => {
  const output = new Set();
  arr1.reduce((acc, element) => {
    console.log('current accumulator status', acc);
    if (arr2.includes(element)) acc.add(element);
    return acc;
  }, output);
  return [...output];
}

function commonElementsTests() {
  var array1 = [1, 4, 6, 7, 'ferret', 12, 12, 99, 2000, 'dog', 'dog', 99, 1000];
  var array2 = [15, 9, 9, 'ferret', 9, 26, 12, 12, 'dog'];
  console.log(commonElements(array1, array2), " -> ", [12, 'ferret', 'dog']);
}

commonElementsTests();

const includes = (arr, element) => {
  for (let i = 0, arr.length; i += 1) {
    if (arr[i] === element) return true;
  }
  return false;
}

const myArray = [[1, 2, 3], [3, 4, 5], [3, 6, 7]];
const intersection = arr => {
  const rest = arr.slice(1);
  const intersection = arr[0].filter(x => rest.every(array => array.includes(x)));
  return [...new Set(intersection)];
}

const intersection = ([first, second, ...rest], result) => {
  if (!result) {
    result = first.filter(x => second.includes(x));
  } else {
    result = result.filter(x => first.includes(x));
  }
  if (!second) return result;
  return intersection([second, ...rest], result);
}