// Chapter 3 Functions

// Return the minimum of 2 numbers
function returnMin(num1, num2){
  if(num1 > num2){
    return num2;
  }
  else{
    return num1;
  }
}

console.log(returnMin(1,2));
// result: 1

// Recursive function that takes a number and returns a boolean if the number is even or not
function isEven(num){
  let checker = false;
  if(num < 0){
    return "This number is negative!";
  }
  else if(num === 0){
    checker = true;
    return checker;
  }
  else if(num === 1){
    return checker;
  }
  else{
    return isEven(num-2);
  }
}

console.log(isEven(50));
// true
console.log(isEven(75));
// false
console.log(isEven(-1));

// B Counter
// write a function that takes in a string and returns a count of all the B's
function bCounter(string){
  let counter = 0;
  for(let i = 0; i < string.length; i++){
    if(string.charAt(i) === "B"){
      counter += 1;
    }
  }
  return counter;
}

console.log(bCounter("This is the Big Bad Wolf"));

// Rewrite the function above to take in another argument, which is the character needed to be counted
function charCounter(string, character){
  let counter = 0;
  for(let i = 0; i < string.length; i++){
    if(string.charAt(i) === character){
      counter += 1;
    }
  }
  return counter;
}

console.log(charCounter("this is a testing text line", "t"));
// 4
