// Zig Zag Conversion
// given a string and a number for rows, return a string that represents every row, left to right

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

const convert = (s, numRows) => {
  // return early if rows are less than 2
  if (numRows < 2) return s;
  // number of moves on string
  const cycle = numRows * 2 - 2;
  // array to store all characters and to return at the end
  const result = [];
  // loop for the number of rows
  for (let i = 0; i < s.length; i += 1) {
    // loop through the string by the cycle
    for (let j = 0; j + i < s.length; j += cycle) {
      // add the character
      result.push(s[j + i]);
      // 
    }
  }
};
