// create a function that checks to see if a string or word is a palindrome

function palindrome(string) {
  // RegExp
  const unWanted = /[^A-Za-z0–9]/g;
  const newStr = string.toLowerCase().replace(unWanted, '');
  const reverseStr = newStr.split('').reverse().join('');
  return reverseStr === newStr;
}

console.log(palindrome('racecar'));