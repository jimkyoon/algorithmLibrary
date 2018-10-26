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



// after
// write a function that takes a number of times the callback needs to be called before being executed as the first parameter and callback as the second parameter
function after(num, callback) {
  let tries = 1;
  function doAfterTries(input) {
    if (tries === num) {
      const result = callback(input);
      return result;
    }
    else {
      tries += 1;
      return undefined;
    }
  }
  return doAfterTries;
}

const called = function(string) { return('hello ' + string); };
const afterCalled = after(3, called);

// UNCOMMENT THESE LINES TO TEST YOUR WORK
console.log(afterCalled('world')); // -> prints undefined
console.log(afterCalled('world')); // -> prints undefined
console.log(afterCalled('world')); // -> prints 'hello world'



// delay
// create a function that accepts two arguments, callback and wait time; delay should return a function that when invoked, waits for the time determined before executing; look at setTimeout()
function delay(callback, timer) {
  function runAfter() {
    return setTimeout(callback, timer);
  }
  return runAfter;
}

// UNCOMMENT THE CODE BELOW TO TEST DELAY
let count = 0;
const delayedFunc = delay(() => count++, 1000);
delayedFunc();
console.log(count); // should print '0'
setTimeout(() => console.log(count), 1000); // should print '1' after 1 second



// saveOutput
// create a function that aceepts a function (one argument) and a string (password); return a function that behaves like the passed-in function, except the password string is passed in as an argument; the returned function will return an object with all previously passed in arguments as keys and corresponding outputs as values
function saveOutput(callback, password) {
  // const saveWord = password;
  const saveObj = {};
  function runFunc(input) {
    let result = callback(input);
    // if (input === saveWord) {
    if (input === password) {
      return saveObj;
    }
    else {
      saveObj[input] = result;
      return result;
    }
  }
  return runFunc;
}

// Uncomment these to check your work!
const multiplyBy2 = function(num) { return num * 2; };
const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
console.log(multBy2AndLog(2)); // should log: 4
console.log(multBy2AndLog(9)); // should log: 18
console.log(multBy2AndLog('boo')); // should log: { 2: 4, 9: 18 }



// cycleIterator
// create a function that accepst an array and returns a function; return function will take no arguments; when first invoked, return the first element, and so on, till the last element in the array; after, reset it back to the first element
function cycleIterator(array) {
  let counter = 0;
  function cycleFunc() {
    if (counter < array.length - 1) {
      let temp = counter;
      counter += 1;
      return array[temp];
    }
    else {
      let temp = counter;
      counter = 0;
      return array[temp];
    }
  }
  return cycleFunc;
}

// Uncomment these to check your work!
const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
const getDay = cycleIterator(threeDayWeekend);
console.log(getDay()); // should log: 'Fri'
console.log(getDay()); // should log: 'Sat'
console.log(getDay()); // should log: 'Sun'
console.log(getDay()); // should log: 'Fri'



// defineFirstArg ***
// create a function that accepts a function and an argument; also function being passed will accept at least one argument; return function that invokes the passed-in function with passed-in argument as passed-in first argument; additional arguments needed by the passed in fuction will need to be passed into the returned function
function defineFirstArg(callback, input) {
  function runFunc(input1, input2) {
    return callback(input, input1, input2);
  }
  return runFunc;
}

// Uncomment these to check your work!
const subtract = function(big, small) { return big - small; };
const subFrom20 = defineFirstArg(subtract, 20);
console.log(subFrom20(5)); // should log: 15



// dateStamp ***
// create a function that accepts a function and returns a function; the returned function will accept wathever arguments the passed in function accepts and return an object with a date key whos value is todays date, represented as a human readable string and an output key that contains the result from invoking the passed in function
function dateStamp(callback) {
  const returnObj = {};
  function runFunc(input) {
    let currentDate = new Date();
    returnObj.date = currentDate.toDateString();
    returnObj.output = callback(input);
    return returnObj;
  }
  return runFunc;
}

// Uncomment these to check your work!
const stampedMultBy2 = dateStamp(n => n * 2);
console.log(stampedMultBy2(4)); // should log: { date: (today's date), output: 8 }
console.log(stampedMultBy2(6)); // should log: { date: (today's date), output: 12 }



// censor ***
// create a function that accepts no arguments; will return a function that will accept either two strings or one string; when two strings are given, the returned function will hold onto the two strings as a pair, for future use; when one string is given, the returned function will return the same string, except all instances of the first string (of saved pair) and will be replaced with the second string (of a saved pair)
function censor() {
  const censorObj = {};
  function runFunc(...arg) {
    
    const argArr = [...arg];
    if (argArr.length > 1) {
      censorObj[argArr[0]] = argArr[1];
    }
    else if (argArr.length === 1) {
      const newString = argArr[0].split(' ');
      console.log(newString);
      const censorArr = Object.keys(censorObj);
      const returnString = newString.map((el) => {
        if (censorArr.includes(el)) {
          el = censorObj[el];
        }
        return el;
      });
      return returnString.join(' ');
    }
  }
  return runFunc;
}

// Uncomment these to check your work!
const changeScene = censor();
changeScene('dogs', 'cats');
changeScene('quick', 'slow');
console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // should log: 'The slow, brown fox jumps over the lazy cats.'