// CS Prep Day 7

// Welcome To Day Two: Algorithms
// What is it?
// An algorithm is a specific set of instructions telling the computer what to do. That's really all it is. Everything you write is an algorithm.

// How Do You Improve?
// Practice!

// This skill is like a muscle; you have to constantly be working it out in order for it to be strong

// Another important way to improve is to be continually be watching for patterns. Algorithmic problems can often be grouped into categories and solved in similar fashion.



// Challenges

////////////////////////////
//     Challenge 1
////////////////////////////

// Recursion (breaking down a problem into sub-problems)

// Modify the function so that it returns the product of all the elements in the array

function product(arr, i = 0) {
  if (i === arr.length - 1) return arr[i];
  return arr[i] * product(arr, i + 1)  // insert recursive case here!
}

// To check if you've completed the challenge, uncomment these console.logs!
console.log(product([1, 2, 3, 4])); // -> 24
console.log(product([1, 2, 3, 4, 5])); // -> 120
console.log(product([4, 5, 6])); // -> 120



////////////////////////////
//     Challenge 2
////////////////////////////

// Caching - keeping track of values you've already come across

function containsDuplicates(arr) {
  let cache = {}
  
  for(let i = 0; i < arr.length; i++){
    if(cache.hasOwnProperty('arr[i]')){
      cache[arr[i]] + 1;
    }
    else {
      cache[arr[i]] = 1;
    } 
  }
  console.log(cache)
  const result = Object.values(cache)
   for(let i = 0; i < result.length; i++){
     if( result[i] > 1){
       return true;
     }
     else { 
      return  false;
     }
   }
}

// To check if you've completed the challenge, uncomment these console.logs!
console.log(containsDuplicates([1, 2, 3, 4, 5, 6])); // -> false
console.log(containsDuplicates([1, 2, 3, 4, 5, 6, 3])); // -> true
console.log(containsDuplicates([])); // -> false



////////////////////////////
//     Challenge 3
////////////////////////////

// Memoization - keeping track of values you've already computed

function createFib() {
  let memo = {}

  function fib(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    // add another base case;

    let fibn = fib(n-1) + fib(n-2);
    // what should we do with fibn
    return fibn
  }

  return fib
}

fib = createFib();

// To check if you've completed the challenge, uncomment these console.logs!
// console.log(fib(0)); // -> 0
// console.log(fib(5)); // -> 5
// console.log(fib(37)); // -> 24157817

// console.log(fib(45)); // only uncomment me if you're sure that memoization is working



////////////////////////////
//     Challenge 4
////////////////////////////

// Don't compute too many things! What can we do to this array to make this problem easier?

// Find the smallest difference between any two numbers in an array

function smallestDiff(arr) {

}

// To check if you've completed the challenge, uncomment these console.logs!
// console.log(smallestDiff([4, 1, 3])); // -> 1
// console.log(smallestDiff([10, 20, 30, 40, 50, 60])); // -> 10
// console.log(smallestDiff([1, 2, 3, 4, 5, 6, 7])); // -> 1



////////////////////////////
//     Challenge 5
////////////////////////////

// Use data structures - Stack!

// check to see if a string contains balanced parentheses

// This means that every open parenthesis must be matched with one closed one

// Ex: '()' is balanced

// Ex: ')(' is NOT balanced , closed parenthesis must come after its match

// Ex: '(()(()))' is balanced

// Ex: '((()' is NOT balanced

function balancedParens(str) {
  let stack = [];
  let parensArray = str.split('');
  for (let i = 0; i < parensArray.length; i ++) {
    // what should this for loop do?
  }

  return // something
}

// To check if you've completed the challenge, uncomment these console.logs!
// console.log(balancedParens('()')); // -> true
// console.log(balancedParens(')(')); // -> false
// console.log(balancedParens('(()(()))')); // -> true
// console.log(balancedParens('((()')); // -> false
