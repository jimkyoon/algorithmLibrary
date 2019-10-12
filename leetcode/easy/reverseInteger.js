// Reverse Integer
// Given a 32-bit signed integer, reverse digits of an integer
// Ex. 123 -> 321, -123 -> -321, 120 -> 21

// second attempt, after understanding 32 bit limit
// run: 84ms, memory: 35.6mb
const reverseInt = (integer) => {
  // limit of 32 bit
  const limit = 2147483648;
  // check if number is negative or not, then store -1 or 1
  const posOrNeg = integer < 0 ? -1 : 1;
  // turn number into a string, then use absolute to get positive, split into an array, reverse it then back to number
  const returnNum = Number(String(Math.abs(integer)).split('').reverse().join(''));
  // return the number based on limit, then change it to positive or negative based off posOrNeg result
  return returnNum > limit ? 0 : returnNum * posOrNeg;
};
