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