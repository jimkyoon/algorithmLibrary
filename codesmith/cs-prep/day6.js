// CS Prep Day 6

// Challenges

////////////////////////////
//     Challenge 1
////////////////////////////

// FIND MODE

// Given an array, return its mode (the number that appears most often)
// Assume there is never a tie (don't worry about [1, 1, 1, 2, 3, 3, 3], for example, since there's a tie between 1 and 3)

function mode(array) {
	let newObj = array.reduce(function (newObj, element) {
    if (newObj[element] === undefined) {
      newObj[element] = 1;
    }
    else if (newObj[element] !== undefined) {
      newObj[element] += 1;
    }
    return newObj;
  }, {});
//   console.log(newObj);
  const result = Object.keys(newObj);
//   console.log(result);
  let mode = result.reduce(function (acc, key) {
    if (newObj[acc] < newObj[key]) {
      acc = key;
    }
    else if (newObj[acc] === newObj[key]) {
      acc = Math.max(acc, key);
    }
    return acc;
  });
  return mode;
}

// Extension: solve this in 0(n) time

function modeTests() {
  console.log(mode([1,2,2,1,1,3, 7, 3]), ' -> 1');
  console.log(mode([1]), '1');
  console.log(mode([2, 2, 2, 2, 3, 3, 3]), ' -> 2');
}

//modeTests() // uncomment to test!



////////////////////////////
//     Challenge 2
////////////////////////////

// FIND MEDIAN

// Given an array, return its median (the element whose value falls in the middle of all other values in the array)
// Ex: [1, 2, 3, 4, 5], median is 3
// Ex: [10, 4, 7, 6, 1], median is 6

function median(array) {
	array.sort(function(a,b) {return a-b});
  let newNum = Math.floor(array.length/2)
  return array[newNum]
}

function medianTests() {
  console.log(median([1, 2, 3, 4, 5]), ' -> 3');
  console.log(median([10, 4, 7, 6, 1]), ' -> 6');
  console.log(median([2, 2, 2, 2, 3, 3, 3]), ' -> 2');
}

//medianTests() // uncomment to test!



////////////////////////////
//     Challenge 3
////////////////////////////

// IS PRIME

// Modify the function so that it return whether a number is prime

function isPrime(num) {
	if (num === 1) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

const betterPrime = num => {
  if (n <= 1) return false;
  if (n % 2 === 0) return false;
  for (let i = 3; i < Math.floor(Math.sqrt(num)); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

// Extension: solve this in 0(logn) time

function primeTests() {
  console.log(isPrime(1), ' -> false');
  console.log(isPrime(2), ' -> true');
  console.log(isPrime(3), ' -> true');
  console.log(isPrime(4), ' -> false');
}

primeTests() // Uncomment to check code!



////////////////////////////
//     Challenge 4
////////////////////////////

// RANSOM NOTE

// Given two strings, write a function that determines if you can build the second string with the characters of the first
// If you have more than one of a certain character in the second string, you must have at least as many of those characters in the first
// Imagine a ransom note (second string) constructed from cut-out letters from a magazine (first string). Except you also need to cut out spaces for some reason.
// Capitalization matters!



function ransomNote(magezine, message) {

}


function ransomTests() {
  console.log(ransomNote('this is a string!!!', 'is this a string!!'), ' -> true');
  console.log(ransomNote('this is a string!!', 'this is a string!!!'), ' -> false');
  console.log(ransomNote('THIS IS A STRING', 'this is a string'), ' -> false');
  console.log(ransomNote('this is a string', ''), ' -> true');
}

// ransomTests() // Uncomment to check code!



////////////////////////////
//     Challenge 5
////////////////////////////

// DELETE DUPS

// Write a function that takes in an array and returns a new array with duplicates removed

// function deleteDups(arr) {
// 	return arr.reduce(function(newArr, elem) {
//     if (newArr.indexOf(elem) === -1) {
//       newArr.push(elem)
//     };
//     return newArr;
//   }, []);
// }

// function deleteDups(arr) {
//   let newObj = arr.reduce(function(newObj, elem) {
//     if (newObj[elem] === undefined) {
//       newObj[elem] = 1
//     }
//     return newObj
//   }, {})
//   return Object.keys(newObj)
// }

function deleteDups(arr) {
  return Object.keys(arr.reduce(function(newObj, elem) {
    if (newObj[elem] === undefined) {
      newObj[elem] = 1
    };
    return newObj;
  }, {}));
}
// found the problem, you wrote if else jk i found it

// hey i have an idea 
// how about going through the array one time and put the elements into an object as keys then return the keys
//thats a good idea
//we can do it with the count part of the first problem
//and then just object.keys

//ayyyyyyyy it works ; nice job man


// that works
// nice
// i think we need to wait for that channel to open up on slack
//we could create the channel too
// ok
// i jsut odnt kno if they would be ok with it LOL
// let me ask ryan on main channel lol
//ima edit the code, we dont need the second half with the count
// Extension: solve in 0(n) time

function dupsTests() {
  console.log(deleteDups(['a', 'a', 'a', 'a', 'a']), ' -> [a]');
  console.log(deleteDups(['a', 'b', 'c', 'd']), ' -> [a, b, c, d]');
  console.log(deleteDups(['a', 'b', 'c', 'd', 'a', 'b', 'c', 'd']), ' -> [a, b, c, d]');
}

 dupsTests() // Uncomment to check code!



////////////////////////////
//     Challenge 6
////////////////////////////

// FIND UNIQUE

// Write a function that takes in array in which every number appears exactly twice, except for one number which appears exactly once

function uniqueNumber(array) {

}

function uniqueNumberTests() {
  console.log(uniqueNumber([1,2,2,1,3, 7, 3]), ' -> 7');
  console.log(uniqueNumber([1,2,2,1,3]), ' -> 3');
  console.log(uniqueNumber([1,2,2,1,3, 7, 3, 5, 5, 6, 6, 7, 9, 8, 9]), ' -> 8');
}

// uniqueNumberTests() // uncomment to test!



////////////////////////////
//     Challenge 7
////////////////////////////

// PALINDROME

// Modify the function so that it returns true if string is a palindrome (the string is the same forward and backwards)
// Otherwise, should return false
// The parameters entered may have puncutations and symbols, but they should not affect whether the string is a palindrome
// Ignore capitalization


// Hint: look up how to use regex in JS - specifically how to rip away all characters that aren't letters

function palindrome(string) {

}

function palindromeTests() {
  console.log(palindrome("Anne, I vote more cars race Rome-to-Vienna"), ' -> true');
  console.log(palindrome("llama mall"), ' -> true');
  console.log(palindrome("jmoney"), ' -> false');
}

// palindromeTests() // uncomment to check code!



////////////////////////////
//     Challenge 8
////////////////////////////

// SORT

// implement your own function to sort an array
// What is its time complexity?
// Try implementing merge or quick sort

function sort(array) {

}

function sortTests() {
  console.log(sort([1, 2, 3, 4, 5]), ' -> [1, 2, 3, 4, 5]');
  console.log(sort([10, 4, 7, 6, 1]), ' -> [1, 4, 6, 7, 10]');
  console.log(sort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), ' -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]');
}

// sortTests() // uncomment to test!



////////////////////////////
//     Challenge 9
////////////////////////////

// Shuffle

// implement your own function to randomize an array - each element should have an equal chance of landing in any spot
// What is its time complexity?

function shuffle(array) {

}

function shuffleTests() {
  console.log(shuffle([1, 2, 3, 4, 5]), ' -> ?');
  console.log(shuffle([10, 4, 7, 6, 1]), ' -> ?');
  console.log(shuffle([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), ' -> ?');
}

// shuffleTests() // Determine a way to test this function!



////////////////////////////
//     Challenge 10
////////////////////////////

// FIND MISSING

// You are given an array of length n containing every number from 0 to n except for one missing number. Find that number!

// Challenge: give this function 0(n) time complexity, 0(1) space complexity

function findMissing(array) {

}

function findMissingTests() {
  console.log(findMissing([0, 1, 2, 3, 4, 5, 7]), ' -> 6');
  console.log(findMissing([7, 5, 4, 3, 2, 1, 0]), ' -> 6');
  console.log(findMissing([0, 7, 1, 5, 2, 4, 3]), ' -> 6');
}

// findMissingTests() // Uncomment to test this function
