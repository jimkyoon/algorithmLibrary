// String to Integer (atoi)
// Given a string, change it into an integer
// The first number it hits, should be converted to a number
// Positive or negative are allowed
// If string appears first, then no number
// If no number, return 0
// After number, if string appears, ignore the rest

const myAtoi = (string) => {
  // set limits
  const negativeLimit = -2147483648;
  const positiveLimit = 2147483648;
  // have an array of allowed strings
  const allowedStrings = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '+'];
  // new array to turn into number
  const newNumber = [];
  // go through the string and add to new array
  for (let i = 0; i < string.length; i += 1) {
    // check each element against allowed
    if (string[i] === ' ') {
      // if string is white space, just continue
      continue;
    } else if (allowedStrings.includes(string[i])) {
      // check to see if 
      // if string is one of the allowed strings, add to the new number
      newNumber.push(string[i]);
    } else {
      // otherwise, letters or symbols are not allowed, so stop the loop
      break;
    }
  }
  // if the new number has nothing, then return 0
  if (newNumber.length === 0) {
    return 0;
  }
  if (newNumber.length === 1) {
    if (newNumber[0] === '-' || newNumber[0] === '+') return 0;
  }
  // otherwise, join the string then return number
  let returnNum = Number(newNumber.join(''));
  // check limit
  if (returnNum < 0) {
    if (returnNum > negativeLimit) {
      return returnNum;
    } else {
      return negativeLimit;
    }
  }
  if (returnNum > 0) {
    if (returnNum < positiveLimit) {
      return returnNum;
    } else {
      return positiveLimit;
    }
  }
  if (returnNum === 0) {
    return 0;
  }
};
