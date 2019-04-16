// Longest Substring Without Repeating Characters
// Given a string, find the length of the longest substring without repeating characters.

/**
 * @param {string} s
 * @return {number}
 */

// first finish, using map
// run: 92ms memory: 38.3mb
const lengthOfLongestSubstring = (s) => {
  // have a map to store results
  const memo = new Map();
  // longest will keep track which is the longest string
  let longest = 0;
  // loop through the string, "j" will iterate through as usual while "i" is set when character at j exists
  // i and j are a "window", i being closed left, j being open right
  for (let i = 0, j = 0; j < s.length; j += 1) {
    // if letter exists in memo, set new i
    if (memo.has(s[j])) {
      i = Math.max(memo.get(s[j]), i);
    }
    // afterwards, change longest
    longest = Math.max(longest, j - i + 1);
    // set new index for the letter
    memo.set(s[j], j + 1);
  }
  return longest;
};
