// Regular
// Challenge 1 

// POD Day 2 - Regular - Reverse String 

// Create a function reverseString that accepts a string as a parameter and returns the reverse of that string.

// For example: 
// reverseString("I love testing") // should return "gnitset evol I"

function reverseString(string) {
  let newStr = string.split('');
  newStr = newStr.reverse();
  newStr = newStr.join('');
  return newStr;
}


// Uncomment the line below and click "run" to test your code
console.log('Challenge 1:', reverseString("codesmith prep") === "perp htimsedoc" ? "Correct!" : "Try again!");


// instructor example

function reverseString (str) {
  let output = '';
  for (let i = str.length; i >= 0; i -= 1) {
    output += str[i];
  }
  return output;
}

// another one
const reverseString = (str) => {
  let output = '';
  for (let i = 0; i < str.length; i += 1) {
    const currentCharIndex = str.length - 1 - i;
    output += str[currentCharIndex];
  }
  return outputt;
}

// another one
const reverseString = str => str.split('').reverse().join('');

// another one
const reverseString = str => {
  const stringArray = str.split('');
  let low = 0;
  let high = str.length - 1;
  while (low < high) {
    const temp = stringArray[low];
    stringArray[low] = stringArray[high];
    stringArray[high] = temp;
    low += 1;
    high -= 1;
  }
  return stringArray.join('');
}


// Advanced
//Challenge 1 

// POD Day 2 - Advanced - Draw Stairs
// Write a function that console logs a staircase of any given height where 1 <= N <= 100. The staircase must climb up from left to right. The last line should only consist of asterisks, without any leading/trailing spaces.  


// For example:   
       
// drawStairs(5) -> 
//     *
//    **
//   ***
//  ****
// *****

function drawStairs(n) {
  if (typeof n === 'number') {
    if (n > 0 && n < 101) {
      let counter = n;
      while (counter > 0) {
        let stair = '';
        for (let i = counter; i > 0; i -= 1) {
          // add in for loop to add in star or blanks
        }
        console.log(stair);
        counter -= 1;
      }
    }
    else {
      return "Number is too high or low";
    }
  }
  else {
    return "Not a number";
  }
}

drawStairs(5);

// instructor example
function drawStairs(n) {
  for (let i = 0; i < n; i += 1) {
    const asterisk = i + 1;
    const spaces = n - asterisks;
    console.log(' '.repeat(spaces) + 'x'.repeat(asterisks));
  }
}

// another example
const repeater = (num , char) => {
  const output = '';
  for (let i = 0; i < num; i += 1) {
    
  }
}