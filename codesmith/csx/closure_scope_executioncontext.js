// CLOSURE, SCOPE AND EXECUTION CONTEXT



// createFunction
// create a function that creates and returns a function; when the new created function is called, return the string 'hello world'
function createFunction() {
  function helloWorldFunc() {
    return 'hello world';
  }
  return helloWorldFunc;
}

// Uncomment these to check your work!
var myFunction = createFunction();
console.log(myFunction()); //should log: 'hello world'



// createFunctionWithInput
// create a function that accepts one input and returns a function; the created function will return the input that was passed to createFunctionWithInput when called
function createFunctionWithInput(input) {
  function returnInput() {
    return input;
  }
  return returnInput;
}

// UNCOMMENT THESE TO TEST YOUR WORK!
const sampleFunc = createFunctionWithInput('sample');
console.log(sampleFunc()); // should log: 'sample'
const helloFunc = createFunctionWithInput('hello');
console.log(helloFunc()); // should log: 'hello'



// Scoping
// guess each of the outcome when running this function
function outer() {
  var counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter() {
    counter++;
    console.log('counter', counter);
  }
  return incrementCounter;
}

var willCounter = outer();
var jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

willCounter(); // 1
willCounter(); // 2
willCounter(); // 3

jasCounter(); // 1
willCounter(); // 4



// addByX
// create a function that returns a function that will add to input by x
function addByX(input) {
  function addToX(input2) {
    return input + input2;
  }
  return addToX;
}

const addByTwo = addByX(2);

// Now call addByTwo with an input of 1 and log the output
addByTwo(1);

// Now call addByTwo with an input of 2 and log the output
addByTwo(2);



// once
// write a function that takes in a callback as input and returns a function; the first time it is called, run the callback and return the result; any after return the first result
function once(callback) {
  let tries = 0;
  let result;
  console.log(callback);
  function doCallback(input) {
    if (tries === 0) {
      result = callback(input);
      tries += 1;
      return result;
    }
    else {
      return result;
    }
  }
  return doCallback;
}

const addByTwoOnce = once(function(num) {
  return num + 2;
});

// UNCOMMENT THESE TO TEST YOUR WORK!
console.log(addByTwoOnce(5));  //should log 7
console.log(addByTwoOnce(10));  //should log 7
console.log(addByTwoOnce(9001));  //should log 7