// Longest Palindromic Substring
// given a string, find the longest substring that is a palindrome

/**
 * @param {string} s
 * @return {string}
 */

// first go, finding palindrome expanding out
// run: 100ms, memory: 36.2mb
const longestPalindrome = (s) => {
  // get out early if string is less than 2 length
  if (s.length <= 1) return s;
  // variables to keep track of the start and end of the palindrome
  let start = 0;
  let end = 0;
  // loop through the string
  for (let i = 0; i < s.length; i += 1) {
    // grab the length of palindrome with helper function
    const palin1 = searchAroundCenter(s, i, i);
    const palin2 = searchAroundCenter(s, i, i + 1);
    // after lengths return, grab the max
    const max = Math.max(palin1, palin2);
    // check if the max is the new max
    if (max > end - start) {
      // if it is, reassign the start and end
      start = i - (max - 1) / 2;
      end = i + max / 2;
    }
  }
  // after finding the start and end of the longest palindrome, return the string
  return s.slice(Math.ceil(start), end + 1);
};

// helper function to find the lenght of a palindrome
const searchAroundCenter = (s, l, r) => {
  // assign the indexes of left and right
  let left = l;
  let right = r;
  // iterate through the string from middle out
  while (left > -1 && right < s.length) {
    // if the left and right are not same, stop
    if (s[left] !== s[right]) break;
    // otherwise, keep expanding out
    left -= 1;
    right += 1;
  }
  // once the palindrome is found, return the length
  return right - left - 1;
};



// using a table
const longestPalindrome = (s) => {
  // get out early if string is less than 2 length
  if (s.length <= 1) return s;
  
};