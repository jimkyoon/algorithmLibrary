// Challenge 1 
function reverseString(string) {
  let newStr = string.split('');
  newStr = newStr.reverse();
  newStr = newStr.join('');
  return newStr;
}


// Uncomment the line below and click "run" to test your code
console.log('Challenge 1:', reverseString("codesmith prep") === "perp htimsedoc" ? "Correct!" : "Try again!");

//Challenge 1 

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